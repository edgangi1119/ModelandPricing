import Logo from './Logo';
import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e6e6e6] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Footer Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f8f8f8] rounded-full p-1">
            <a
              href="#"
              className="px-6 py-2 rounded-full text-sm font-medium bg-black text-white"
            >
              Blog
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-full text-sm font-medium text-[#515151] hover:text-black hover:bg-[#f8f8f8] transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-full text-sm font-medium text-[#515151] hover:text-black hover:bg-[#f8f8f8] transition-colors"
            >
              Careers
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-[#515151] mt-4 max-w-sm">
              Spright is a sales development agency built for early-stage startups who need real pipeline, fast.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-[#515151]">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Outbound SDR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Cold Calling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  ICP Workshop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Messaging Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-[#515151] mb-6">
              <li>
                <a
                  href="mailto:ed@spright.co"
                  className="hover:text-black transition-colors"
                >
                  ed@spright.co
                </a>
              </li>
            </ul>

            <Button variant="primary" size="sm">
              Book a Call
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e6e6e6] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#9ca3af]">
            © 2026 Spright. All rights reserved.
          </p>

           <div className="flex gap-6 text-sm text-[#9ca3af]">
            <a href="#" className="hover:text-[#515151] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#515151] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#515151] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}