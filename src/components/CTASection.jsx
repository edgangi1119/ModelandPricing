import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="px-6 py-16 md:py-24 bg-[#0c4e44] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-white">How to Start</h2>

        <div className="space-y-6 mb-12">
          <p className="text-lg text-[#add4d1]">
            We'll discuss your ICP, current pipeline situation, and whether this approach makes sense. Real conversation, not a pitch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#">
            <Button
              size="lg"
              variant="outline"
              className="bg-white !text-[#0c4e44] border-white hover:!bg-[#f8f8f8]"
            >
              Book a discovery call
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          <a href="mailto:ed@spright.co">
            <Button
              size="lg"
              variant="outline"
              className="!border-white !text-white hover:!bg-white hover:!text-[#0c4e44]"
            >
              Or email ed@spright.co
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
