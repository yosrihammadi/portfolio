import Link from "next/link";
import { NavItem } from "./navItem";

const links = [
  {
    href: "/",
    label: "about",
  },
  {
    href: "/work",
    label: "work",
  },
];

export function Nav() {
  return (
    <div className="w-[33vw] mx-auto flex items-center justify-center border-x-2 border-dark-100 space-x-4">
      {links.map((link) => (
        <NavItem key={link.label} {...link} />
      ))}
    </div>
  );
}
