import t from "@/translations/hu";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        <li>{t.navigation.items.news}</li>
        <li>{t.navigation.items.dogs}</li>
        <li>{t.navigation.items.cats}</li>
        <li>{t.navigation.items.donation}</li>
        <li>{t.navigation.items.volunteer}</li>
        <li>{t.navigation.items.supporters}</li>
        <li>{t.navigation.items.successStories}</li>
        <li>{t.navigation.items.aboutUs}</li>
        <li>{t.navigation.items.contact}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
