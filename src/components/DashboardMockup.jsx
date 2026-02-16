import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function DashboardMockup() {
  const callsChartRef = useRef(null);
  const connectionChartRef = useRef(null);

  useEffect(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const callsData = [45, 52, 38, 61, 47, 34, 41];
    const connectionRateData = [6.5, 7.8, 6.2, 8.1, 7.2, 5.9, 7.4];

    let callsChart;
    let connectionChart;

    if (callsChartRef.current) {
      const ctx = callsChartRef.current.getContext("2d");
      callsChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: days,
          datasets: [
            {
              label: "Calls",
              data: callsData,
              backgroundColor: "rgba(28, 112, 96, 0.8)",
              borderColor: "rgba(28, 112, 96, 1)",
              borderWidth: 2,
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              padding: 12,
              titleFont: { size: 14 },
              bodyFont: { size: 13 },
              callbacks: {
                label: (context) => `Calls: ${context.parsed.y}`,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: "rgba(0, 0, 0, 0.05)" },
              ticks: { font: { size: 12 } },
            },
            x: {
              grid: { display: false },
              ticks: { font: { size: 12 } },
            },
          },
        },
      });
    }

    if (connectionChartRef.current) {
      const ctx = connectionChartRef.current.getContext("2d");
      connectionChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: days,
          datasets: [
            {
              label: "Connection Rate",
              data: connectionRateData,
              borderColor: "rgba(1, 216, 96, 1)",
              backgroundColor: "rgba(1, 216, 96, 0.1)",
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: "rgba(1, 216, 96, 1)",
              pointBorderColor: "#fff",
              pointBorderWidth: 2,
              pointRadius: 5,
              pointHoverRadius: 7,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              padding: 12,
              titleFont: { size: 14 },
              bodyFont: { size: 13 },
              callbacks: {
                label: (context) => `Rate: ${context.parsed.y.toFixed(1)}%`,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 10,
              grid: { color: "rgba(0, 0, 0, 0.05)" },
              ticks: {
                callback: (value) => `${value}%`,
                font: { size: 12 },
              },
            },
            x: {
              grid: { display: false },
              ticks: { font: { size: 12 } },
            },
          },
        },
      });
    }

    return () => {
      if (callsChart) callsChart.destroy();
      if (connectionChart) connectionChart.destroy();
    };
  }, []);

  return (
    <div className="p-8 md:p-10 rounded-[12px] bg-gradient-to-br from-[#0A332B] to-[#1C7060]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="bg-white p-8 rounded-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] mb-8">
          <h1 className="text-[#1a202c] text-[32px] md:text-[32px] mb-2 font-semibold">
            Spright Performance Dashboard
          </h1>
          <p className="text-[#718096] text-[16px]">
            Client: Acme SaaS | Week of Jan 20, 2026
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 mb-8 [grid-template-columns:repeat(auto-fit,minmax(350px,1fr))]">
          {/* Calls Per Day */}
          <div className="bg-white p-8 rounded-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <h2 className="text-[#2d3748] text-[14px] font-semibold mb-6 uppercase tracking-[0.05em]">
              Calls Per Day (Last 7 Days)
            </h2>
            <div className="relative h-[250px]">
              <canvas ref={callsChartRef} />
            </div>
          </div>

          {/* Connection Rate */}
          <div className="bg-white p-8 rounded-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <h2 className="text-[#2d3748] text-[14px] font-semibold mb-6 uppercase tracking-[0.05em]">
              Connection Rate (Last 7 Days)
            </h2>
            <div className="relative h-[250px]">
              <canvas ref={connectionChartRef} />
            </div>
          </div>

          {/* Meetings Set */}
          <div className="bg-white p-8 rounded-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <h2 className="text-[#2d3748] text-[14px] font-semibold mb-6 uppercase tracking-[0.05em]">
              Meetings Set (Last 7 Days)
            </h2>
            <div className="text-center py-8">
              <div className="text-[64px] font-bold leading-none text-[#01D860]">
                12
              </div>
              <div className="mt-2 text-[16px] text-[#718096] uppercase tracking-[0.05em]">
                Qualified Meetings
              </div>
            </div>
          </div>
        </div>

        {/* All Time Meetings Table */}
        <div className="bg-white p-8 rounded-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
          <h2 className="text-[#2d3748] text-[14px] font-semibold mb-6 uppercase tracking-[0.05em]">
            All Time Meetings
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-[#f7fafc]">
                <tr>
                  {["Date", "Company", "Contact", "ICP + BP", "Status"].map((h) => (
                    <th
                      key={h}
                      className="p-4 text-left font-semibold text-[#4a5568] text-[14px] uppercase tracking-[0.05em]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {[
                  ["Jan 23, 2026", "TechCorp Solutions", "Sarah Johnson", "ICP_A + BP_A", "Completed"],
                  ["Jan 22, 2026", "DataFlow Systems", "Mike Chen", "ICP_A + BP_B", "Completed"],
                  ["Jan 24, 2026", "CloudBridge Inc", "Emily Davis", "ICP_B + BP_A", "Scheduled"],
                  ["Jan 21, 2026", "Innovate Labs", "David Park", "ICP_A + BP_A", "Rescheduled"],
                  ["Jan 20, 2026", "Summit Analytics", "Lisa Martinez", "ICP_A + BP_B", "Completed"],
                  ["Jan 25, 2026", "Quantum Insights", "Robert Kim", "ICP_B + BP_A", "Scheduled"],
                ].map(([date, company, contact, icp, status], idx) => {
                  const statusClass =
                    status === "Completed"
                      ? "bg-[#BDF1B2] text-[#0A332B]"
                      : status === "Scheduled"
                      ? "bg-[#01D860] text-[#0A332B]"
                      : "bg-[#BEF51D] text-[#0A332B]";

                  return (
                    <tr key={idx} className="hover:bg-[#f7fafc]">
                      <td className="p-4 border-b border-[#e2e8f0]">{date}</td>
                      <td className="p-4 border-b border-[#e2e8f0]">{company}</td>
                      <td className="p-4 border-b border-[#e2e8f0]">{contact}</td>
                      <td className="p-4 border-b border-[#e2e8f0]">{icp}</td>
                      <td className="p-4 border-b border-[#e2e8f0]">
                        <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-semibold ${statusClass}`}>
                          {status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
