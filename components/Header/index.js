"use client";

import Link from "@/components/Link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("pathname", pathname);
  }, [pathname]);

  return (
    <div className="p-5 bg-slate-300 flex gap-4">
      <Link href="/" isActive={pathname === "/"}>
        Home
      </Link>
      <Link href="/products" isActive={pathname === "/products"}>
        Products
      </Link>
    </div>
  );
}
