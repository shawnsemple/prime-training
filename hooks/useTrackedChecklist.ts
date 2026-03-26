"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type ChecksMap = Record<string, boolean>;

export default function useTrackedChecklist(
  pageKey: string,
  itemKeys: string[]
) {
  const supabase = useMemo(() => createClient(), []);
  const [checks, setChecks] = useState<ChecksMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadChecks() {
      const emptyState: ChecksMap = {};
      itemKeys.forEach((key) => {
        emptyState[key] = false;
      });

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        if (active) {
          setChecks(emptyState);
          setReady(true);
        }
        return;
      }

      const { data, error } = await supabase
        .from("user_checks")
        .select("item_key, completed")
        .eq("user_id", user.id)
        .eq("page_key", pageKey)
        .in("item_key", itemKeys);

      if (!active) return;

      if (error || !data) {
        setChecks(emptyState);
        setReady(true);
        return;
      }

      const nextState: ChecksMap = { ...emptyState };

      data.forEach((row) => {
        nextState[row.item_key] = !!row.completed;
      });

      setChecks(nextState);
      setReady(true);
    }

    loadChecks();

    return () => {
      active = false;
    };
  }, [itemKeys, pageKey, supabase]);

  async function toggleCheck(itemKey: string) {
    const nextValue = !checks[itemKey];

    setChecks((prev) => ({
      ...prev,
      [itemKey]: nextValue,
    }));

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase.from("user_checks").upsert(
      {
        user_id: user.id,
        page_key: pageKey,
        item_key: itemKey,
        completed: nextValue,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,page_key,item_key",
      }
    );

    if (error) {
      setChecks((prev) => ({
        ...prev,
        [itemKey]: !nextValue,
      }));
    }
  }

  return {
    checks,
    ready,
    toggleCheck,
  };
}