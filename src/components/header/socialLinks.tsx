import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "@/icons";
import { handwrite } from "@/app/layout";

const links = [
  {
    href: "/",
    target: "_blank",
    rel: "noreferrer noopener",
    "aria-label": "LinkedIn (opens in a new tab)",
    title: "LinkedIn",
    className: "block hover:text-slate-200 w-[20px] h-[20px] order-0",
    Icon: LinkedInIcon,
  },
  {
    href: "/",
    target: "_blank",
    rel: "noreferrer noopener",
    "aria-label": "Github (opens in a new tab)",
    title: "Github",
    className: "block hover:text-slate-200 w-[20px] h-[20px] order-2",
    Icon: GithubIcon,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center w-[33vw]">
      <Link
        href="/"
        aria-label="Home"
        className={`text-green-100 order-1 mx-5 text-2xl hover:scale-110 transition-transform ${handwrite.className}`}
      >
        YH
      </Link>
      {links.map((link) => {
        const { Icon, ...props } = link;
        return (
          <Link key={props.title} {...props} className={props.className}>
            <Icon
              fill="#94a3b8"
              className="hover:fill-green-100 transition-all hover:scale-110"
            />
          </Link>
        );
      })}
    </div>
  );
}
