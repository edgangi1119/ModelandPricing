import { ArrowRight } from "lucide-react";

export default function ExecutionFramework() {
  const cadenceItems = [
    {
      title: "EVERY MORNING",
      description:
        "Call reviews with every rep. Connection rates, conversion rates, account health. Is it lists, messaging, or rep performance? We know immediately and adjust.",
    },
    {
      title: "EVERY DAY",
      description:
        "200 calls to decision-makers. Not sequences — phone calls. Your SDR opens with context, asks real questions, handles objections live, and qualifies on the call — not after.",
    },
    {
      title: "EVERY CONVERSATION",
      description:
        "Recorded and transcribed within 5 minutes. You can listen to every word. Scripts get sharpened based on what's landing and what's not.",
    },
    {
      title: "EVERY MEETING",
      description:
        "Confirmation calls the day before and the morning of — actual phone calls, not email reminders. No-shows get chased immediately. Reschedules stay on the list until they sit.",
    },
    {
      title: "EVERY WEEK",
      description:
        'Strategy session with you. What\'s converting, what\'s not. Which personas are responding. Script refinements. List pivots. Follow-ups from prospects who said "call me next month" — we call them next month, with context.',
    },
  ];

  return (
    <section className="px-6 py-16 md:py-20 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-left text-[42px] leading-[1.05] tracking-[-0.02em] font-semibold text-black">
  Execution: Tactical Framework
</h2>


        <div className="bg-white border-2 border-black rounded-lg overflow-hidden mb-12">
          <div className="bg-black text-white px-6 py-3">
            <p className="font-semibold">Execution Cadence Visual</p>
          </div>

          <div className="divide-y divide-[#e6e6e6]">
            {cadenceItems.map((item, index) => (
              <div key={index} className="p-6">
                <h4 className="font-semibold text-black mb-3 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-[#515151]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">Managed Two-Person Team</h3>
            <p className="text-[#515151]">
              Every engagement is a two-person team: the founder and a dedicated SDR.
              Not a pool of reps rotating accounts - your team, managing your program.
            </p>
          </div>

          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">High-Volume, Targeted Calling</h3>
            <p className="text-[#515151]">
              <strong>200 dials per day.</strong> Not automated sequences or email blasts -
              actual phone calls to decision-makers.
            </p>
          </div>

          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">Dynamic List Management</h3>
            <p className="text-[#515151] mb-4">We work off multiple lists simultaneously:</p>
            <ul className="space-y-2 text-[#515151]">
              <li>
                • <strong>Primary outbound list</strong> (e.g., ICP_A + BP_A) - net new
                targeting
              </li>
              <li>
                • <strong>Referrals list</strong> - warm introductions and network contacts
              </li>
              <li>
                • <strong>Follow-up list</strong> - prospects who engaged but aren't ready yet
              </li>
              <li>
                • <strong>Reschedule list</strong> - confirmed meetings that need rescheduling
              </li>
            </ul>
            <p className="text-[#515151] mt-4">
              Lists shift based on performance. If connection rates drop, we refresh. If a
              segment converts, we expand.
            </p>
          </div>

          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">Daily Meeting Confirmation Process</h3>
            <p className="text-[#515151] mb-4">
              Show-up rate is a major problem in sales development. We solve it with
              persistent follow-up.
            </p>
            <div className="space-y-3 text-[#515151]">
              <p>
                <strong>Every morning:</strong> We produce an internal report listing each
                meeting scheduled that day - client name, prospect name, time, rep responsible.
              </p>
              <p>
                <strong>Confirmation calls:</strong> Reps call each prospect to confirm
                attendance. Not an email reminder - an actual phone call.
              </p>
              <p>
                <strong>Status tracking:</strong> We update you on confirmation status -
                confirmed, rescheduled, or needs follow-up.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">Reschedule & Follow-Up Discipline</h3>
            <p className="text-[#515151] mb-4">
              <strong>We religiously chase reschedules.</strong> We track attendance through
              your feedback in Slack and review the full booking list on every weekly call.
              If someone cancels or no-shows, we know immediately and stay on them.
            </p>
            <p className="text-[#515151] mb-4">
              A reschedule isn't a lost meeting - it's an opportunity to re-engage.
            </p>
            <p className="text-[#515151]">
              <strong>We contextually chase follow-ups.</strong> If someone said "call me in Q2,"
              we call them in Q2 with context from the original conversation. Not starting from
              zero - picking up where we left off.
            </p>
          </div>

          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">Daily Call Reviews</h3>
            <p className="text-[#515151] mb-4">We review calls every day with every rep. We look at:</p>
            <ul className="space-y-2 text-[#515151] mb-4">
              <li>• <strong>Connection rates</strong> - are we reaching people?</li>
              <li>• <strong>Conversion rates</strong> - are conversations turning into meetings?</li>
              <li>• <strong>Account health</strong> - connection and conversion by list/segment</li>
            </ul>
            <p className="text-[#515151]">This tells us immediately if the issue is:</p>
            <ul className="space-y-2 text-[#515151]">
              <li>• <strong>Lists</strong> (wrong targeting, stale data)</li>
              <li>• <strong>Messaging</strong> (script not landing)</li>
              <li>• <strong>Rep performance</strong> (execution quality)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">Weekly & Monthly Strategic Reviews</h3>
            <p className="text-[#515151] mb-3">
              <strong>Weekly:</strong> Tactical adjustments - script tweaks, list refinements,
              objection handling.
            </p>
            <p className="text-[#515151] mb-4">
              <strong>Monthly:</strong> Directional analysis:
            </p>
            <ul className="space-y-2 text-[#515151]">
              <li>• How often are we hitting ICP?</li>
              <li>• How often are we hitting ICP + BP together?</li>
              <li>• What segments are converting vs. going silent?</li>
              <li>• Where should we double down or pull back?</li>
            </ul>
          </div>

          <div>
            <h3 className="text-left text-[28px] leading-[1.2] tracking-[-0.01em] font-semibold text-black mb-4">Live Slack Communication</h3>
            <p className="text-[#515151]">
              Direct Slack channel integration. We communicate daily - meeting updates,
              interesting calls, tactical questions, performance data.
            </p>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#0c4e44] font-semibold hover:gap-3 transition-all hover:text-[#0a332b] mt-12"
        >
          Learn more about our execution framework
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
