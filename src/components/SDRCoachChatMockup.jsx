export default function SDRCoachChatMockup() {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_10px_30px_rgba(10,51,43,0.15)] overflow-hidden">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A332B] to-[#1C7060] px-8 py-6 text-white flex items-center">
        <span className="w-2 h-2 bg-[#01D860] rounded-full mr-3 animate-pulse" />
        <span className="font-semibold">SDR Coach Interaction Example</span>
      </div>

      {/* Body */}
      <div className="bg-[#fafbfc] px-8 py-10 space-y-8">

        {/* User Message */}
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-gray-600 mb-2">Rep</div>
          <div className="bg-white border-2 border-gray-200 rounded-xl px-6 py-5 max-w-2xl">
            My connection rate dropped from 8% to 4% this week. What's going on?
          </div>
        </div>

        {/* Assistant Message */}
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-gray-600 mb-2">
            SDR Coach
          </div>

          <div className="bg-white border-2 border-[#1C7060] rounded-xl px-6 py-6 w-full">

            <div className="mb-6">Let me check the data...</div>

            {/* Thinking Section */}
            <div className="bg-[rgba(190,245,29,0.15)] border-l-4 border-[#BEF51D] p-5 rounded-md space-y-4 mb-6">
              
              {[
                "Searching Snowflake for calls this week with duration > 60 seconds",
                "Checking SharePoint for client ICP-BP definitions",
                "Scanning Slack #int-clientname for recent feedback",
                "Reading Fireflies meeting transcripts from last strategy session",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-4 h-4 border-2 border-[#BEF51D] border-t-transparent rounded-full animate-spin" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Analysis */}
            <div className="border-t border-gray-200 pt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1C7060] mb-4">
                Analysis
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>→ Your connection rate for ICP_A (discrete manufacturers) is still 7%</li>
                <li>→ ICP_B (contract manufacturers) dropped to 2% - list appears stale</li>
                <li>→ In last week's Fireflies meeting, client mentioned Q1 budget freeze for contract manufacturers</li>
                <li>→ Slack feedback from 2 days ago: "Focus on ICP_A through February"</li>
              </ul>
            </div>

            {/* Recommendation */}
            <div className="bg-[rgba(1,216,96,0.15)] border-l-4 border-[#01D860] p-5 rounded-md mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1C7060] mb-2">
                Recommendation
              </div>
              <div className="text-sm text-gray-600">
                Your performance is fine - the drop is ICP_B timing. Double down on ICP_A list, pause ICP_B until March per client guidance.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
