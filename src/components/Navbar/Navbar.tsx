import routes from "@/constants/routes";
import t from "@/translations/hu";
import Link from "next/link";
import type { FC } from "react";

type NavigationItem = {
  route: string;
  title: string;
};

type Props = {
  navigationItems: NavigationItem[];
  className?: string;
};

const Navbar: FC<Props> = ({ navigationItems, className }) => {
  return (
    <nav
      className={`container flex flex-row text-base font-semibold ${className}`}
    >
      <ul className="mt-9 flex flex-row gap-2.5">
        {navigationItems.map((navigationItem) => (
          <li key={navigationItem.title}>
            <Link
              href={navigationItem.route}
              className="
                relative mx-2 py-3
                before:absolute before:-left-4 before:top-0 before:-z-10
                before:h-12 before:w-[calc(100%+2rem)]
                before:rounded-full before:bg-blue-200
                before:opacity-0 before:blur-[10px]
                before:transition-all
                before:duration-300 before:ease-[cubic-bezier(0.5,1,0.89,1)] before:content-['']
                hover:before:rounded-full
                hover:before:opacity-100 hover:before:blur-[10px]
                hover:before:transition-all
                hover:before:duration-300 hover:before:ease-[cubic-bezier(0.5,1,0.89,1)]
              "
            >
              {navigationItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const leftNavigationItems: NavigationItem[] = [
  { route: routes.news, title: t.navigation.items.news },
  { route: routes.dogs, title: t.navigation.items.dogs },
  { route: routes.cats, title: t.navigation.items.cats },
  { route: routes.donation, title: t.navigation.items.donation },
  { route: routes.volunteer, title: t.navigation.items.volunteer },
];

const rightNavigationItems: NavigationItem[] = [
  { route: routes.supporters, title: t.navigation.items.supporters },
  { route: routes.successStories, title: t.navigation.items.successStories },
  { route: routes.aboutUs, title: t.navigation.items.aboutUs },
  { route: routes.contact, title: t.navigation.items.contact },
];

const LeftSideNavbar: FC = () => (
  <Navbar navigationItems={leftNavigationItems} className="justify-end" />
);
const RightSideNavbar: FC = () => (
  <Navbar navigationItems={rightNavigationItems} className="justify-start" />
);

export { LeftSideNavbar, RightSideNavbar };
