import { ArrowRight } from "lucide-react";
import SDRCoachChatMockup from "./SDRCoachChatMockup";

export default function AISection() {
  return (
    <section className="px-6 py-16 md:py-20 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6">How We Use AI: Force Multiplier, Not Replacement</h2>

        <p className="text-lg text-[#515151] mb-12">
          AI doesn't replace human judgment - it enhances it. We use AI as an enabler, connecting data sources to make better decisions faster.
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6">SDR Coach: Real-Time Performance Support</h3>

            <p className="text-[#515151] mb-4">
              Our reps have access to an AI coach that pulls context from everywhere:
            </p>

            <ul className="space-y-2 text-[#515151] mb-6">
              <li>• <strong>Strategic documents</strong> (SharePoint) - your ICP, positioning, value props</li>
              <li>• <strong>Live conversations</strong> (Slack) - tactical feedback, objection handling, client priorities</li>
              <li>• <strong>Meeting recordings</strong> (Fireflies) - strategy sessions, weekly reviews, messaging pivots</li>
              <li>• <strong>Call data</strong> (real-time) - their actual performance, conversation patterns, outcomes</li>
            </ul>

            <div className="bg-white border-l-4 border-[#0c4e44] p-6 mb-6">
              <p className="font-semibold text-black mb-4">What this enables:</p>
              <p className="text-[#515151] mb-3">Reps can ask at any time:</p>
              <ul className="space-y-2 text-[#515151]">
                <li>• "How am I performing this week compared to last?"</li>
                <li>• "What objections am I hearing most and how should I handle them?"</li>
                <li>• "This prospect mentioned [competitor] - what's our positioning against them?"</li>
                <li>• "My talk ratio is high - what questions should I ask to get prospects talking more?"</li>
              </ul>
            </div>

            <p className="text-[#515151]">
              The coach synthesizes across all data sources - not guessing, but referencing actual strategy docs, real calls, and live performance data.
            </p>
          </div>

          <div>
            <h3 className="mb-6">Keeping Everyone Connected</h3>

            <p className="text-[#515151] mb-4">
              <strong>We may have meetings without all team members present.</strong> The AI keeps everyone close to what clients are actually saying and puts that feedback in stone.
            </p>

            <p className="text-[#515151]">
              When you discuss priorities in a client meeting, that context flows to the reps making calls. When reps surface objections in Slack, that informs our next strategy session. Nothing gets lost. Everyone stays aligned.
            </p>
          </div>

          <div>
            <h3 className="mb-6">How This Improves Your Results</h3>

            <div className="space-y-4 text-[#515151]">
              <p><strong>Faster rep improvement:</strong> Instead of waiting for daily 1-on-1s, reps get real-time coaching based on their actual calls.</p>

              <p><strong>Consistent messaging:</strong> AI ensures reps stay aligned with your latest positioning, even when it changes mid-campaign.</p>

              <p><strong>Pattern detection:</strong> AI spots trends across hundreds of calls that humans would miss - objection spikes, messaging that's falling flat, segments that aren't responding.</p>

              <p><strong>Context retention:</strong> When we discuss strategy in Slack or meetings, that context flows into daily execution - nothing gets lost in translation.</p>

              <p className="font-semibold text-black mt-6">Human-led, AI-enabled. Reps make the calls. AI helps them get better at it.</p>
            </div>
          </div>

          <div className="mt-16">
  <SDRCoachChatMockup />
</div>

        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#0c4e44] font-semibold hover:gap-3 transition-all hover:text-[#0a332b] mt-12"
        >
          Learn more about how we use AI
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
