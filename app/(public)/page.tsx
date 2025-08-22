"use client";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroSectionSignInButton from "./_components/HeroSectionSignInButton";
import { authClient } from "@/lib/auth-client";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className="relative py-20">
        <section className="relative mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="destructive">The Future of Online Education</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Elevate your Learning Experience
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Discover a new way to learn with our modern, interactive learning
              management system. Access high-quality courses anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                className={buttonVariants({
                  size: "lg",
                })}
                href={"/courses"}
              >
                Explore Courses
              </Link>
              <HeroSectionSignInButton />
            </div>
          </div>
        </section>
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-1/4 h-90 w-0.5 bg-gradient-to-b from-transparent via-[#d97757] to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-1/4 h-90 w-0.5 bg-gradient-to-b from-transparent via-[#d97757] to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-0.5 w-50 bg-gradient-to-r from-transparent via-[#d97757] to-transparent" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-0.5 w-50 bg-gradient-to-r from-transparent via-[#d97757] to-transparent" />
        </div>
      </section>
    </>
  );
}
