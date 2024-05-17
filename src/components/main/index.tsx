import { handwrite } from "@/app/layout";

export function Main() {
  return (
    <main className="flex flex-col space-y-8 items-center justify-center min-h-[calc(100vh-var(--header-height))] px-24 container mx-auto">
      <span className={`text-8xl ${handwrite.className}`}>Hello there</span>
      <h1 className="text-7xl font-semibold  text-center">
        I&apos;m Yosri Hammadi <br />
      </h1>
      <h2 className="text-6xl text-green-100">A Fullstack Developer</h2>
    </main>
  );
}
