import CallRecordingPlayer from "./CallRecordingPlayer";

export default function RealColdCalls() {
  return (
    <section className="px-6 py-16 md:py-20 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Real Cold Calls</h2>

        <div className="space-y-8">
          <CallRecordingPlayer
            caller="Jessica Martinez"
            callerBackground="3 years SaaS SDR experience, former Salesloft"
            target="VP Engineering at 75-person manufacturing software company (ICP_A + BP_A)"
            outcome="Meeting booked - prospect recognized pain around BOM management in first 90 seconds"
          />

          <CallRecordingPlayer
            caller="Ed Gangi"
            callerBackground="Founder, 10+ years enterprise SDR/AE experience"
            target="Director of Product at 120-person discrete manufacturer (ICP_A + BP_B)"
            outcome="Qualified follow-up - not ready now, call back Q2 when new budget opens"
          />
        </div>
      </div>
    </section>
  );
}
