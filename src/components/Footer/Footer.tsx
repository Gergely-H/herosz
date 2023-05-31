import references from "@/constants/references";
import t from "@/translations/hu";
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="my-12 flex flex-row justify-center whitespace-pre text-sm text-black/50">
      <span>{t.footer.madeByFirstPart}</span>
      <a
        target="_blank"
        href={references.creatorUrl}
        className="font-semibold text-black/70"
      >
        {t.footer.creatorName}
      </a>
      <span>{t.footer.madeByLastPart}</span>
    </footer>
  );
};

export default Footer;
