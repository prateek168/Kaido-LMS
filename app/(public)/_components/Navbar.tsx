"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { UserDropdown } from "./UserDropdown";
import { User, Home, BookOpen, LayoutDashboard, Plus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface navigationItemsProps {
  name: string;
  href: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
}

const navigationItems: navigationItemsProps[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
];

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-15 items-center justify-between gap-4">
          {/* Left side - Logo and Mobile Menu */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                  aria-label="Open mobile menu"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-56 p-1 md:hidden">
                <NavigationMenu className="max-w-none">
                  <NavigationMenuList className="flex-col items-start gap-0 space-x-0">
                    {navigationItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            href={item.href}
                            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <span>{item.name}</span>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    })}

                    {/* Mobile auth section */}
                    <div className="mt-3 pt-3 border-t w-full">
                      {isPending ? null : session ? (
                        <div className="px-3 py-2">
                          <UserDropdown
                            email={session.user.email}
                            image={
                              session?.user.image ??
                              `https://avatar.vercel.sh/${session?.user.name}`
                            }
                            name={
                              session?.user.name && session.user.name.length > 0
                                ? session.user.name
                                : session?.user.email.split("@")[0]
                            }
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2 px-3">
                          <Link
                            href="/login"
                            className={buttonVariants({
                              variant: "ghost",
                              size: "sm",
                              className: "justify-start",
                            })}
                          >
                            Login
                          </Link>
                          <Link
                            href="/login"
                            className={buttonVariants({
                              size: "sm",
                              className: "justify-start",
                            })}
                          >
                            Get Started
                          </Link>
                        </div>
                      )}
                    </div>
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            {/* Logo */}
            <Link href={"/"} className="flex items-center space-x-2">
              <Image src={Logo} alt="Logo" className="size-8" />
              <h1 className="font-bold text-xl tracking-tight">KAIDO</h1>
            </Link>
          </div>

          {/* Middle area - Desktop Navigation */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-1">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="group flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      title={item.name}
                    >
                      <span>{item.name}</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side - Actions and User Menu */}
          <div className="flex flex-1 items-center justify-end gap-2">
            <ThemeToggle />

            {isPending ? null : session ? (
              <>
                {/* <Button
                  size="sm"
                  className="text-sm max-sm:aspect-square max-sm:p-0"
                >
                  <Plus
                    className="opacity-60 sm:-ms-1"
                    size={16}
                    aria-hidden="true"
                  />
                  <span className="max-sm:sr-only">Create</span>
                </Button> */}
                <UserDropdown
                  email={session.user.email}
                  image={session.user.image || ""}
                  name={session.user.name}
                />
              </>
            ) : (
              <div className="hidden md:flex md:items-center md:gap-2">
                <Link
                  href="/login"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
