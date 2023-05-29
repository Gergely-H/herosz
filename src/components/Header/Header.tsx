"use client";
import Logo from "@/components/Logo";
import { LeftSideNavbar, RightSideNavbar } from "@/components/Navbar";
import type { FC } from "react";
import { useEffect, useState } from "react";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 0);

    const SCROLL = "scroll";
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.removeEventListener(SCROLL, onScroll);
    window.addEventListener(SCROLL, onScroll, { passive: true });

    return () => window.removeEventListener(SCROLL, onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-20 flex w-full flex-row justify-center
        bg-white [transition:height_300ms,border_180ms,box-shadow_180ms]
        ${
          isScrolled
            ? "h-24 border-b border-neutral-400 shadow-[0_5px_10px_rgba(0,0,0,0.3)]"
            : "h-40"
        }`}
      >
        <LeftSideNavbar />
        <Logo />
        <RightSideNavbar />
      </header>
      <div className="h-40" />
    </>
  );
};

export default Header;
