export default function HeroSection() {
  return (
    <section className="bg-white py-24 border-b border-[#e6e6e6]">
      <div className="max-w-4xl mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
          How Spright Works
        </h1>

        <h2 className="mt-6 text-lg md:text-xl text-[#515151] leading-relaxed">
          Our Philosophy: Sales Development Done Right
        </h2>

        <div className="mt-10 text-[#515151] leading-relaxed space-y-5 text-base md:text-lg">
          <p>
            Sales development is a grind and a discipline. It is a numbers game, a
            process, and a skill. It requires good targeting, good messaging, and good
            follow-up. It requires persistence.
          </p>

          <p className="font-medium text-black">
            These fundamentals worked ten years ago. They work today.
          </p>

          <p>
            The problem is nobody wants to do the work anymore. Everyone wants a tool,
            automation, or AI to do it for them.
          </p>

          <p className="font-medium text-black">
            We brought the fundamentals back - and made them fast enough for early-stage
            companies.
          </p>

          <p>
            No magic bullets. No automation shortcuts. No offshore scripts.
          </p>

          <p className="font-medium text-black">
            Just the fundamentals, executed with discipline, every single day.
          </p>
        </div>
      </div>
    </section>
  );
}
