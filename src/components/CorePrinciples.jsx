import { Phone, GitBranch, Eye } from "lucide-react";

export default function CorePrinciples() {
  const principles = [
    {
      icon: Phone,
      title: "Phone-First, Human-Always",
      description:
        "We built our entire operation around phone conversations because they're the only channel that gives you real signal. You hear tone, hesitation, interest. You can pivot mid-conversation. You get objections immediately, not silence. AI helps us analyze - humans make the calls.",
    },
    {
      icon: GitBranch,
      title: "Ruthless Process",
      description:
        "The fundamentals never change. Tight targeting and list building. Daily call reviews. Persistent follow-up across multiple touches. Constant communication and collaboration with you. We do the work that everyone else automated away.",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description:
        "Every call recorded and transcribed within 5 minutes. Live dashboard showing daily activity. Direct Slack integration. If we can't show you what we're doing, we don't charge for it.",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Three Core Principles</h2>

        <div className="space-y-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="border-l-4 border-[#0c4e44] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#eafde7] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0c4e44]" />
                  </div>
                  <h3 className="text-[22px] md:text-[24px] leading-[1.15] tracking-[-0.01em] font-semibold text-black">
  {principle.title}
</h3>
                </div>
                <p className="text-[#515151]">{principle.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
