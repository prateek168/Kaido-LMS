"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          toast.success;
          ("Signed out Successfully");
        },
      },
    });
  }
  return (
    <div>
      <ThemeToggle />
      {session ? (
        <>
          <p>{session.user.name}</p>
          <Button onClick={signOut}>Logout</Button>
        </>
      ) : (
        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
      )}
    </div>
  );
}
