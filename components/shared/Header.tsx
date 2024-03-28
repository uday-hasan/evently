import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/images/logo.svg";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import Navlinks from "./Navlinks";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="">
          <Image src={logo} width={128} height={38} alt="Evently Logo" />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <Navlinks />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/sign-in" />
              <MobileNav />
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-full ">
                <Link href={"/sign-in"}>LOGIN</Link>
              </Button>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
