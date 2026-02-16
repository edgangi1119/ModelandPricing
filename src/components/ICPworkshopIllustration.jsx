export default function ICPWorkshopIllustration() {
  return (
    <div className="icp-workshop w-full">
      <style>{`
        .icp-workshop .workshop-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(10, 51, 43, 0.15);
          overflow: hidden;
        }

        .icp-workshop .workshop-header {
          background: linear-gradient(135deg, #0A332B 0%, #1C7060 100%);
          padding: 2rem;
          color: white;
        }

        .icp-workshop .workshop-header h1 {
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .icp-workshop .client-name {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .icp-workshop .divider {
          height: 3px;
          width: 80px;
          background: #01D860;
          margin-top: 1rem;
        }

        .icp-workshop .workshop-body {
          padding: 2.5rem;
        }

        .icp-workshop .section {
          margin-bottom: 2.5rem;
        }

        .icp-workshop .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e2e8f0;
        }

        .icp-workshop .section-icon {
          width: 40px;
          height: 40px;
          background: #BEF51D;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #0A332B;
          margin-right: 1rem;
          font-size: 1.25rem;
        }

        .icp-workshop .section-title {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #0A332B;
        }

        .icp-workshop .golden-circle-item {
          background: #f7fafc;
          padding: 1.25rem;
          border-radius: 8px;
          border-left: 4px solid #01D860;
          margin-bottom: 1rem;
        }

        .icp-workshop .golden-label {
          font-weight: 700;
          color: #1C7060;
          margin-bottom: 0.5rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .icp-workshop .icp-content {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 8px;
        }

        .icp-workshop .icp-list {
          list-style: none;
          padding-left: 0;
        }

        .icp-workshop .icp-list li {
          padding: 0.75rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        .icp-workshop .icp-list li:before {
          content: "■";
          position: absolute;
          left: 0;
          color: #01D860;
          font-size: 0.75rem;
        }

        .icp-workshop .pain-indicators {
          margin-top: 1rem;
          background: white;
          padding: 1.25rem;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
        }

        .icp-workshop .pain-indicators-title {
          font-weight: 700;
          color: #1C7060;
          margin-bottom: 0.75rem;
          font-size: 0.75rem;
        }

        .icp-workshop .pain-indicators ul {
          list-style: none;
          padding-left: 1rem;
        }

        .icp-workshop .pain-indicators li {
          padding: 0.5rem 0;
          position: relative;
          font-size: 0.9rem;
        }

        .icp-workshop .pain-indicators li:before {
          content: "→";
          position: absolute;
          left: -1rem;
          color: #BEF51D;
          font-weight: 700;
        }

        .icp-workshop .persona-card {
          background: linear-gradient(135deg, #1C7060 0%, #0A332B 100%);
          padding: 1.5rem;
          border-radius: 12px;
          color: white;
          margin-bottom: 1.25rem;
        }

        .icp-workshop .persona-badge {
          background: #BEF51D;
          color: #0A332B;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-right: 0.75rem;
        }

        .icp-workshop .persona-title {
          font-size: 1rem;
          font-weight: 700;
        }

        .icp-workshop .persona-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.7;
          margin-top: 1rem;
          margin-bottom: 0.35rem;
        }

        .icp-workshop .persona-pain {
          background: rgba(190, 245, 29, 0.15);
          padding: 0.75rem 1rem;
          border-radius: 6px;
          margin-top: 0.75rem;
          border-left: 3px solid #BEF51D;
        }
      `}</style>

      <div className="workshop-container">
        <div className="workshop-header">
          <h1>ICP/BP Workshop Output Example</h1>
          <div className="client-name">Acme Billing SaaS</div>
          <div className="divider"></div>
        </div>

        <div className="workshop-body">

          {/* Golden Circle */}
          <div className="section">
            <div className="section-header">
              <div className="section-icon">⊙</div>
              <div className="section-title">Golden Circle</div>
            </div>

            <div className="golden-circle-item">
              <div className="golden-label">Why</div>
              Modern B2B SaaS companies shouldn't need engineers to change pricing
            </div>

            <div className="golden-circle-item">
              <div className="golden-label">What</div>
              Usage-based billing platform that non-technical teams can configure
            </div>

            <div className="golden-circle-item">
              <div className="golden-label">How</div>
              Self-service pricing experimentation without code changes
            </div>
          </div>

          {/* ICP */}
          <div className="section">
            <div className="section-header">
              <div className="section-icon">◉</div>
              <div className="section-title">Ideal Customer Profile (ICP_A)</div>
            </div>

            <div className="icp-content">
              <ul className="icp-list">
                <li><strong>Company:</strong> B2B SaaS, product-led or sales-led growth</li>
                <li><strong>Size:</strong> 20-100 employees, $1M-10M ARR</li>
                <li><strong>Tech Stack:</strong> Stripe for payments (hitting limitations), modern stack</li>
              </ul>

              <div className="pain-indicators">
                <div className="pain-indicators-title">Pain Indicators</div>
                <ul>
                  <li>Engineering bottleneck for pricing changes</li>
                  <li>Want to test usage-based or hybrid models</li>
                  <li>Sales asking for custom pricing flexibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personas */}
          <div className="section">
            <div className="section-header">
              <div className="section-icon">👤</div>
              <div className="section-title">Buyer Personas</div>
            </div>

            <div className="persona-card">
              <div>
                <span className="persona-badge">Primary (BP_A)</span>
                <span className="persona-title">VP Product / Head of Product</span>
              </div>

              <div className="persona-label">Cares About</div>
              Pricing experimentation, speed to market, product velocity

              <div className="persona-pain">
                <div className="persona-label">Pain</div>
                "Every pricing change is a 2-week eng project"
              </div>
            </div>

            <div className="persona-card">
              <div>
                <span className="persona-badge">Secondary (BP_B)</span>
                <span className="persona-title">Head of Sales / Revenue Ops</span>
              </div>

              <div className="persona-label">Cares About</div>
              Deal flexibility, custom pricing for enterprise

              <div className="persona-pain">
                <div className="persona-label">Pain</div>
                "Can't test new pricing models without engineering"
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
