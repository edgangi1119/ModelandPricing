import { ArrowRight } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function ReportingTransparency() {
  return (
    <section className="px-6 py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Reporting & Transparency: Measuring What Matters</h2>

        <div className="space-y-12">
          {/* What We Track Daily */}
          <div>
            <h3 className="mb-6">What We Track Daily</h3>

            <div className="space-y-8">
              <div>
                <p className="font-semibold text-black mb-3">Tactical call performance:</p>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Connection rate - are we reaching people?</li>
                  <li>• Conversion rate - are conversations turning into meetings?</li>
                  <li>• Call volume - dials made, contacts reached</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-black mb-3">Meeting outcomes:</p>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Meetings scheduled</li>
                  <li>• Meetings completed vs. rescheduled</li>
                  <li>• Show-up rate (attendance tracking)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-black mb-3">Strategic validation:</p>
                <ul className="space-y-2 text-[#515151]">
                  <li>• Which ICPs are responding - is ICP_A outperforming ICP_B?</li>
                  <li>• Which Personas are converting - VP Engineering vs. Director Product?</li>
                  <li>• Which lists are working - primary outbound vs. referrals vs. follow-ups?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What You See */}
          <div>
            <h3 className="mb-6">What You See</h3>

            <div className="space-y-6 text-[#515151]">
              <p>
                All calls posted. Every call is recorded and available for review.
              </p>

              <p>
                Connected calls on shortlist. We flag conversations for you to listen to -
                successful bookings, interesting objections, coaching opportunities.
              </p>

              <p>
                Daily metrics. Live dashboard updated throughout the day - no waiting for
                weekly reports.
              </p>
            </div>
          </div>

          {/* Dashboard */}
          <div>
            <h3 className="mb-6">Performance Dashboard</h3>
            <div className="mt-2">
              <DashboardMockup />
            </div>
          </div>

          {/* Call Data */}
          <div>
            <h3 className="mb-6">How We Use Call Data to Refine Scripts</h3>

            <p className="text-[#515151] mb-6">
              We analyze conversation patterns to understand how to approach each persona:
            </p>

            <ul className="space-y-3 text-[#515151] mb-6">
              <li>
                • <strong>Buyer state:</strong> Are they hostile, neutral, or open when we call?
              </li>
              <li>
                • <strong>Discovery quality:</strong> How many questions lead to booked meetings?
              </li>
              <li>
                • <strong>Talk ratio:</strong> Are we pitching too much or listening enough?
              </li>
              <li>
                • <strong>Pacing:</strong> How fast should we talk for this audience?
              </li>
            </ul>

            <p className="text-[#515151]">
              This informs script adjustments - not theory, but data from hundreds of actual
              conversations with your target personas.
            </p>
          </div>

          {/* Weekly & Monthly Reviews */}
          <div>
            <h3 className="mb-6">Weekly & Monthly Reviews</h3>

            <div className="space-y-8">
              <div>
                <p className="font-semibold text-black mb-3">
                  Weekly: Tactical adjustments based on performance
                </p>

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

        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#0c4e44] font-semibold hover:gap-3 transition-all hover:text-[#0a332b] mt-12"
        >
          Learn more about our data-driven approach
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
