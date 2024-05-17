import { Nav } from "./nav";
import { SocialLinks } from "./socialLinks";
import { ContactCTA } from "./contactcta";

export function Header() {
  return (
    <header className="flex justify-center border-y-2 border-dark-100 h-[100px]">
      <SocialLinks />
      <Nav />
      <ContactCTA />
    </header>
  );
}
