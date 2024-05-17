import Link from "next/link";

export function ContactCTA() {
  const LABEL = "get in touch";
  return (
    <div className="flex justify-center items-center w-[33vw]">
      <Link
        href="/"
        className="uppercase inline-block p-6 text-xs text-green-100 transition-all"
      >
        {LABEL}
      </Link>
    </div>
  );
}
