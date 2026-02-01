import Logo from "../utils/Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
