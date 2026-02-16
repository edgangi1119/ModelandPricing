import Button from './ui/Button';

export default function PricingEngagement() {
  return (
    <section className="px-6 py-16 md:py-20 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12">Pricing &amp; Engagement</h2>

        {/* Single Pricing Box */}
        <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-xl">
          {/* Pricing Header */}
          <div className="bg-gradient-to-r from-[#20806f] to-[#37a291] px-10 py-12 text-white">
            <div className="flex flex-col gap-6 mb-6">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#eaffbc] mb-2">
                  Base Retainer
                </div>
                <div className="text-[64px] font-bold leading-none">$4,000</div>
                <div className="text-[#add4d1] mt-2">per month</div>
              </div>

              <div className="text-2xl font-semibold">
                <span className="text-[#eaffbc]">+</span> $100-200 per qualified meeting
              </div>
            </div>

            <div className="pt-6 border-t-2 border-[#37a291] flex flex-col gap-4">
              <div className="text-lg">Variable amount based on difficulty</div>
              <div className="inline-block w-fit bg-[#bef61d] text-black px-6 py-2 rounded-full font-bold text-base">
                Eligbile to cap variable payout to $2,000/mo
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="px-10 py-16">
            <h4 className="text-[28px] font-bold text-center mb-6">What You Get</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Managed 2-person sales dev team',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <path
                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M22 21v-2a4 4 0 0 0-3-3.87"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 3.13a4 4 0 0 1 0 7.75"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  text: '200+ calls per day',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  text: 'Live Slack channel support',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  text: 'Weekly strategy meetings',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ),
                },
                {
                  text: 'Live call reporting & analytics',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" strokeWidth="2" />
                      <line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" strokeWidth="2" />
                      <line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ),
                },
                {
                  text: 'Dictated sales qualification',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <path d="M9 11H3v2h6" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 7h4v2H5" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 1H6v2h2" stroke="currentColor" strokeWidth="2" />
                      <path d="M7 3v18" stroke="currentColor" strokeWidth="2" />
                      <path d="M13 3h2v4" stroke="currentColor" strokeWidth="2" />
                      <path d="M13 11h2v2" stroke="currentColor" strokeWidth="2" />
                      <path d="M13 17h2v2" stroke="currentColor" strokeWidth="2" />
                      <path d="M20 6v18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex gap-4 p-4 rounded-xl bg-[#eafde7] hover:bg-[#bdf1b2] transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#20806f] text-white flex items-center justify-center">
                    {item.svg}
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold text-[#0a332b]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="px-10 pb-8">
            <div className="bg-[#f8f8f8] rounded-xl p-6 border-l-4 border-[#20806f]">
              <h5 className="text-lg font-bold mb-3 text-[#0a332b]">Why Hybrid Pricing?</h5>
              <p className="text-[#515151] mb-4">
                The retainer covers daily execution and keeps your pipeline active. The per-meeting fee
                ensures we only get paid for meetings that actually qualify and show up. Our incentives
                are completely aligned with your success.
              </p>

              <div className="flex items-center gap-3 text-[#20806f] font-semibold">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>No long-term contracts after pilot • Month-to-month flexibility</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA (kept from the section) */}
        <div className="flex justify-center pt-12">
          <Button variant="primary" size="lg">
            See Full Pricing Details
          </Button>
        </div>
      </div>
    </section>
  );
}
