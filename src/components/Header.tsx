"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUser } from "@/store/actions/authorizeUser";

const Header = () => {
  const pathname = usePathname();
  const { isAuthenticated } = useSelector((state: any) => state.user);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (Cookies.get("auth")) dispatch(authorizeUser());
  }, []);

  return (
    <header className="bg-black text-white p-4">
      <nav className="flex gap-4 justify-center text-xl">
        <Link href="/" className={pathname === "/" ? "underline" : ""}>
          Home
        </Link>
        {isAuthenticated ? (
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
};

export default Header;
