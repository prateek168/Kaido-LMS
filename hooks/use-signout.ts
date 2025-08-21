"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCallback } from "react";

export function useSignOut() {
  const router = useRouter();

  const signOut = useCallback(async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            toast.success("Signed out successfully");
          },
          onError: (error: any) => {
            console.error("Sign out error:", error);
            toast.error("Failed to sign out");
          },
        },
      });
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out");
    }
  }, [router]);

  return { signOut };
}
