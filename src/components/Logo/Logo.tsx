import routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href={routes.home} className="relative mx-8 w-64">
      <Image
        src="/herosz-budapest-logo.png"
        alt="Herosz Budapest Logo"
        priority
        fill
        className="!left-2/4 !top-2/4 -z-20 !w-auto -translate-x-2/4 -translate-y-2/4 object-contain pb-1"
      />
    </Link>
  );
};

export default Logo;
