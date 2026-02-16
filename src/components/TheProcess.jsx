// ./src/app/components/TheProcess.tsx

export default function TheProcess() {
  return (
    <section className="px-6 py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">The Process: From Kickoff to Pipeline</h2>

        <div className="space-y-16">
          {/* Week 1-2 */}
          <div>
            <h3 className="mb-8">Week 1-2: Foundation & Setup</h3>

            <div className="space-y-8">
              <div className="border-l-4 border-[#0c4e44] pl-6">
                <h4 className="font-semibold text-black mb-2">
                  Kickoff Day (External - Client Meeting)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>
                    • <strong>Administrative setup:</strong> Calendar links,
                    meeting ownership, email domain for follow-ups
                  </li>
                  <li>
                    • <strong>GTM context gathering:</strong> Your company
                    through a go-to-market lens - we extract as much context as
                    you have
                  </li>
                  <li>
                    • <strong>ICP refinement:</strong> We&apos;ve already made
                    assumptions you agreed to - now we refine with your input
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#dedede] pl-6">
                <h4 className="font-semibold text-black mb-2">
                  Internal Workshop (Team Only)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>
                    • Golden Circle definition (why you exist, what you do, how
                    you do it)
                  </li>
                  <li>• ICP/Buyer Persona mapping</li>
                  <li>• Strategic framework alignment</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#dedede] pl-6">
                <h4 className="font-semibold text-black mb-2">
                  ICP + Buyer Persona Workshop (External - Client Meeting)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>
                    • Define ICPs and personas in detail - pain, triggers, buying
                    state
                  </li>
                  <li>
                    • Map objections and what “qualified” means for each persona
                  </li>
                  <li>
                    • Align on “buying intent” vs. “curiosity” so we don&apos;t
                    waste meetings
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#dedede] pl-6">
                <h4 className="font-semibold text-black mb-2">
                  Script + Objection System Build (Internal)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Build persona-specific opening lines</li>
                  <li>• Define call flows: discovery → qualify → book</li>
                  <li>• Build objection handling frameworks from scratch</li>
                  <li>• Create patterns for follow-ups, reschedules, referrals</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#dedede] pl-6">
                <h4 className="font-semibold text-black mb-2">
                  List Building + Segmentation (Internal)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Build multiple lists (ICP x Persona combinations)</li>
                  <li>• Create sequencing logic and priorities</li>
                  <li>• Validate data quality (phone numbers, direct dials)</li>
                  <li>• Set list rotation plan (avoid burning segments)</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#dedede] pl-6">
                <h4 className="font-semibold text-black mb-2">
                  Final Role-Play + Launch Readiness (External - Client Meeting)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Walk through scripts live</li>
                  <li>• Pressure test objection handling</li>
                  <li>• Confirm qualification rules</li>
                  <li>• Final go/no-go before calls start</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Week 3-10 */}
          <div>
            <h3 className="mb-8">Week 3-10: Execution & Iteration</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-black mb-3">Daily Execution</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• 200 dials per day</li>
                  <li>• Multi-touch sequences (call, voicemail, email, SMS)</li>
                  <li>
                    • Dynamic list management (primary, referrals, follow-ups,
                    reschedules)
                  </li>
                  <li>• Morning meeting confirmation calls</li>
                  <li>• All calls recorded and posted</li>
                </ul>
              </div>

              <div className="bg-[#f8f8f8] border-l-4 border-[#0c4e44] p-6">
                <h4 className="font-semibold text-black mb-3">
                  Week 3 Directional Deep Dive (External - Client Meeting)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• First week of calling - critical checkpoint</li>
                  <li>
                    • Early signal on messaging, targeting, and rep performance
                  </li>
                  <li>• Tactical pivots based on initial data</li>
                  <li>• Set expectations for ongoing execution</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">
                  Daily Reviews (Internal)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Review every call with every rep</li>
                  <li>
                    • Track connection rates, conversion rates, account health
                  </li>
                  <li>
                    • Identify if issues are lists, messaging, or rep performance
                  </li>
                  <li>• Make tactical adjustments immediately</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">
                  Weekly Strategy Sessions (External - Client Meeting)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Performance metrics review</li>
                  <li>• Objection analysis and script refinement</li>
                  <li>• ICP/Persona validation (who&apos;s responding, who&apos;s not)</li>
                  <li>• List adjustments based on data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">
                  Monthly Deep Dives (Internal with Client Reporting)
                </h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>
                    • Strategic direction: which segments are converting to
                    pipeline?
                  </li>
                  <li>• Should we double down or pivot targeting?</li>
                  <li>
                    • Market intelligence: competitive mentions, feature
                    requests, buyer language
                  </li>
                  <li>
                    • Sales enablement: objection libraries, use cases, FAQ built
                    from real calls
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div>
            <h3 className="mb-8">What You Get Throughout</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-black mb-3">Transparency:</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Every call recorded and transcribed within 5 minutes</li>
                  <li>• Live dashboard with real-time metrics</li>
                  <li>• Direct Slack communication daily</li>
                  <li>• Connected calls flagged for your review</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">Meetings:</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Qualified meetings with buying intent</li>
                  <li>
                    • Show-up rate tracking and persistent reschedule follow-up
                  </li>
                  <li>• Meeting confirmation process to maximize attendance</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">Intelligence:</h4>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Which ICPs and Personas are working</li>
                  <li>• What messaging resonates vs. falls flat</li>
                  <li>• Real objections and how we&apos;re handling them</li>
                  <li>
                    • Market validation data for your broader GTM strategy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
