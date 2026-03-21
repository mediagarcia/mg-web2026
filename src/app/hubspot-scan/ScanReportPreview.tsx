"use client";

const categoryData = [
  { name: "Account Setup", passed: 3, total: 9 },
  { name: "Contacts & Lists", passed: 7, total: 10 },
  { name: "Deals & Tasks", passed: 6, total: 9 },
  { name: "Email & Marketing", passed: 8, total: 15 },
  { name: "Sales Enablement", passed: 2, total: 8 },
  { name: "Workflows", passed: 3, total: 5 },
];

const sampleFindings = [
  {
    severity: "Critical" as const,
    message:
      "47 users found. 1 generic email detected — review info@acme-corp.com for shared credential risk.",
  },
  {
    severity: "Warning" as const,
    message:
      "Checked 3 domains — none have HubSpot tracking code installed.",
  },
  {
    severity: "Pass" as const,
    message: "5 domains connected (4 resolving). DNS configuration healthy.",
  },
  {
    severity: "Critical" as const,
    message:
      "SPF record not detected for sending domain. Email deliverability at risk.",
  },
];

const severityStyles = {
  Critical: {
    dot: "bg-red-500",
    text: "text-red-400",
    badge: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  Warning: {
    dot: "bg-amber-500",
    text: "text-amber-400",
    badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  Pass: {
    dot: "bg-emerald-500",
    text: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
};

export function ScanReportPreview() {
  const totalPassed = 37;
  const totalNeedsWork = 30;
  const totalPending = 14;
  const totalRules = 82;
  const healthScore = Math.round((totalPassed / (totalPassed + totalNeedsWork)) * 100);

  return (
    <div className="max-w-4xl">
      <div className="bg-gray-950 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
            </div>
            <span className="text-white/40 text-sm font-mono">
              Portal Health Report — acme-corp.com
            </span>
          </div>
          <span className="text-xs text-white/30 font-mono">
            SAMPLE REPORT
          </span>
        </div>

        {/* Health score + summary */}
        <div className="px-6 py-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-lg">Overall Health</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-teal-500">
                {healthScore}
              </span>
              <span className="text-white/40 text-sm">/100</span>
            </div>
          </div>
          {/* Summary pills */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {totalPassed} Passed
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              {totalNeedsWork} Needs Work
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/50 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-white/30" />
              {totalPending} Pending
            </span>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="px-6 py-6 border-b border-white/10">
          <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">
            Category Breakdown
          </h4>
          <div className="space-y-3">
            {categoryData.map((cat) => {
              const pct = Math.round((cat.passed / cat.total) * 100);
              const barColor =
                pct >= 70
                  ? "bg-emerald-500"
                  : pct >= 50
                    ? "bg-amber-500"
                    : "bg-red-500";
              return (
                <div key={cat.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/70 text-sm">{cat.name}</span>
                    <span className="text-white/40 text-xs font-mono">
                      {cat.passed}/{cat.total} passed
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${barColor} rounded-full transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sample findings */}
        <div className="px-6 py-6">
          <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">
            Sample Findings
          </h4>
          <div className="space-y-3">
            {sampleFindings.map((finding, i) => {
              const styles = severityStyles[finding.severity];
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <span
                    className={`shrink-0 mt-0.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${styles.badge}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                    {finding.severity}
                  </span>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {finding.message}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Blur overlay hint */}
        <div className="relative px-6 pb-6">
          <div className="h-24 rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 backdrop-blur-sm bg-gray-950/60 flex items-center justify-center">
              <p className="text-white/40 text-sm font-medium">
                + {totalRules - sampleFindings.length} more findings in full
                report
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
