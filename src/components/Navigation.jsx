import Logo from "./Logo";
import Button from "./ui/Button";

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-[#e6e6e6] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex gap-8 text-sm">
            <a
              href="#"
              className="text-[#515151] hover:text-black transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[#515151] hover:text-black transition-colors font-medium"
            >
              Process
            </a>
            <a
              href="#"
              className="text-[#515151] hover:text-black transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-[#515151] hover:text-black transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <Button size="sm" variant="primary">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
