import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";

export default function LayoutPublic({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full [background-image:radial-gradient(#dadde2_1px,transparent_1px)] dark:[background-image:radial-gradient(#393e4a_1px,transparent_1px)] [background-size:16px_16px]" />
      <h1>
        <Navbar />
      </h1>
      <main className="container mx-auto px-4 md:px-6 md:px-8">{children}</main>
    </div>
  );
}
