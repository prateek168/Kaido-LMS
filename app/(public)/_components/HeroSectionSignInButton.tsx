"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const HeroSectionSignInButton = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return null; 
  }

  if (session) {
    return null; 
  }

  return (
    <Link href="/login">
      <Button size="lg" variant="outline">
        Sign In
      </Button>
    </Link>
  );
};

export default HeroSectionSignInButton;
