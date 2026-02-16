import { ArrowRight } from "lucide-react";
import ICPWorkshopIllustration from "./ICPWorkshopIllustration";


export default function AccountBasedApproach() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black leading-tight mb-10">
          Account-Based Approach: Strategic Targeting Before You Dial
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl font-semibold text-black mb-10 leading-relaxed">
          Effective outbound starts with a framework for purposeful targeting that can be measured.
        </p>

        {/* Body Copy */}
        <div className="space-y-8 text-[#515151] text-lg leading-relaxed mb-16">
          <p>
            We build tightly specified audiences based on clear hypotheses about fit.
            Every account we target has a reason — we've defined why they matter and
            validated it with you before we dial.
          </p>

          <p className="font-semibold text-black">
            Our targeting is dynamic. For emerging startups, your ICP/BP may not be
            dialed in yet. We pivot to the fastest and best results based on hard
            data — not gut feel, not theory.
          </p>
        </div>

        {/* Section Divider */}
        <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">
          Where We Start: Understanding Your Business
        </h3>

        <p className="text-lg text-[#515151] mb-10">
          Before we build any lists, we start with three things:
        </p>
        
        <div className="space-y-6 mb-12">
          <div className="border-l-4 border-[#dedede] pl-6">
            <h4 className="text-left text-[16px] leading-[1.3] tracking-[0.06em] font-semibold text-black mb-3">
1. Your Golden Circle</h4>
            <ul className="space-y-2 text-[#515151]">
              <li>• Why you exist, what you do, how you do it</li>
              <li>• Your core value proposition in the market</li>
              <li>• What problem you solve and for whom</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-[#dedede] pl-6">
            <h4 className="text-left text-[16px] leading-[1.3] tracking-[0.06em] font-semibold text-black mb-3">
2. Your Ideal Customer Profile (ICP)</h4>
            <ul className="space-y-2 text-[#515151]">
              <li>• Company characteristics: size, industry, stage, tech stack, pain indicators</li>
              <li>• What makes a company a good fit vs. wrong fit</li>
              <li>• Where they are in their buying journey</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-[#dedede] pl-6">
            <h4 className="text-left text-[16px] leading-[1.3] tracking-[0.06em] font-semibold text-black mb-3">
3. Your Buyer Personas (BP)</h4>
            <ul className="space-y-2 text-[#515151]">
              <li>• Who within those companies makes decisions</li>
              <li>• What each persona cares about</li>
              <li>• How they describe their pain (in their words, not yours)</li>
            </ul>
          </div>
        </div>

        <p className="font-semibold text-black mb-12">
          This foundation drives everything else. We can't build smart lists without understanding who you serve and why they buy.
        </p>

        <h3 className="mb-6">How We Build Lists</h3>
        
        <p className="text-[#515151] mb-6">
          We don't build one massive list. We build <strong>multiple focused lists</strong> based on ICP + Buyer Persona combinations.
        </p>
        
        <div className="bg-[#f8f8f8] border border-[#e6e6e6] rounded-lg p-6 mb-6">
          <p className="font-semibold text-black mb-4">The structure:</p>
          <ul className="space-y-2 text-[#515151]">
            <li>• ICP_A + BP_A = List 1</li>
            <li>• ICP_A + BP_B = List 2</li>
            <li>• ICP_B + BP_A = List 3</li>
          </ul>
        </div>

        <p className="text-[#515151] mb-12">
          <strong>Example:</strong> VP Engineering at discrete manufacturers gets different messaging than Director of Product at the same companies. Different personas care about different things.
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6">The Foundation Work (Weeks 0-2)</h3>
            
            <p className="text-[#515151] mb-8">
              Before any calling begins, we build the targeting and messaging foundation:
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#0c4e44] pl-6">
                <h4 className="text-left text-[16px] leading-[1.3] tracking-[0.06em] font-semibold text-black mb-3">
Kickoff Day (External - Client Meeting)</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• <strong>Administrative setup:</strong> Calendar links, meeting ownership, email domain for follow-ups</li>
                  <li>• <strong>GTM context gathering:</strong> Your company through a go-to-market lens - we extract as much context as you have</li>
                  <li>• <strong>ICP refinement:</strong> We've already made assumptions you agreed to - now we refine with your input</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#dedede] pl-6">
                <h4 className="text-left text-[16px] leading-[1.3] tracking-[0.06em] font-semibold text-black mb-3">
Internal Workshop (Team Only)</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Golden Circle definition (why you exist, what you do, how you do it)</li>
                  <li>• ICP/Buyer Persona mapping</li>
                  <li>• Strategic framework alignment</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#0c4e44] pl-6">
                <h4 className="text-left text-[16px] leading-[1.3] tracking-[0.06em] font-semibold text-black mb-3">
Account List Review (External - Client Meeting)</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Present proposed account lists (ICP_A + BP_A, ICP_A + BP_B, etc.)</li>
                  <li>• Get agreement on targeting strategy</li>
                  <li>• Validate hypotheses about fit</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#dedede] pl-6">
                <h4 className="text-left text-[16px] leading-[1.3] tracking-[0.06em] font-semibold text-black mb-3">
Contact Pull & Script Development (Internal)</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Pull contacts from approved account lists</li>
                  <li>• Build script from buyer language and proven methodology</li>
                  <li>• Map objection handling and discovery questions</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#0c4e44] pl-6">
                <h4 className="text-left text-[16px] leading-[1.3] tracking-[0.06em] font-semibold text-black mb-3">
Role-Play & Final Review (External - Client Meeting)</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Pressure-test script with you</li>
                  <li>• Get approval before going live</li>
                  <li>• Tech stack finalized (dialer, CRM, Slack integration)</li>
                </ul>
              </div>

              <p className="font-semibold text-black text-lg mt-8">
                You approve everything before we dial.
              </p>
            </div>

            <div className="mt-16">
  <ICPWorkshopIllustration />
</div>

          </div>

          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">How We Use Call Data to Refine Scripts</h3>
            <p className="text-[#515151] mb-4">
              We analyze conversation patterns to understand how to approach each persona:
            </p>
            <ul className="space-y-2 text-[#515151]">
              <li>• <strong>Buyer state:</strong> Are they hostile, neutral, or open when we call?</li>
              <li>• <strong>Discovery quality:</strong> How many questions lead to booked meetings?</li>
              <li>• <strong>Talk ratio:</strong> Are we pitching too much or listening enough?</li>
              <li>• <strong>Pacing:</strong> How fast should we talk for this audience?</li>
            </ul>
            <p className="text-[#515151] mt-4">
              This informs script adjustments - not theory, but data from hundreds of actual conversations with your target personas.
            </p>
          </div>

          <div>
            <h3 className="mb-6">Weekly & Monthly Reviews</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-black mb-3">Weekly: Tactical adjustments based on performance</p>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Connection rate trending down? Refresh lists.</li>
                  <li>• Conversion rate dropping? Script needs work.</li>
                  <li>• Specific objection spiking? Add handling framework.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-black mb-3">Monthly: Strategic direction</p>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Which ICP segments are converting to pipeline?</li>
                  <li>• Should we double down on one persona vs. another?</li>
                  <li>• Are we hitting the right titles and companies?</li>
                  <li>• Where should we expand or contract targeting?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="inline-flex items-center gap-2 text-[#0c4e44] font-semibold hover:gap-3 transition-all hover:text-[#0a332b] mt-12">
          Learn more about our data-driven approach
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
