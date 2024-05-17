import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
};

export function NavItem({ href, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="uppercase inline-block p-6 text-xs text-gray-300 hover:text-gray-200 transition-all"
    >
      {label}
    </Link>
  );
}
