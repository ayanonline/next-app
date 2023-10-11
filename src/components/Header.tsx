"use client";
import AuthContext from "@/store/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Header() {
  const pathname = usePathname();

  const { authenticated } = useContext(AuthContext);

  return (
    <header className="bg-black text-white p-4">
      <nav className="flex gap-4 justify-center text-xl">
        <Link href="/" className={pathname === "/" ? "underline" : ""}>
          Home
        </Link>
        {authenticated ? (
          <Link
            href="/account"
            className={pathname === "/account" ? "underline" : ""}
          >
            Account
          </Link>
        ) : (
          <Link
            href="/login"
            className={pathname === "/login" ? "underline" : ""}
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
