interface ComparisonRow {
  feature: string;
  left: string;
  right: string;
  highlight?: boolean;
}

interface ComparisonTableProps {
  headers: [string, string];
  rows: ComparisonRow[];
  caption?: string;
}

export function ComparisonTable({ headers, rows, caption }: ComparisonTableProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      {caption && (
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <p className="text-sm font-medium text-black/60">{caption}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Feature</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">{headers[0]}</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">{headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 ${
                  row.highlight
                    ? "bg-teal-500/5 border-l-4 border-l-teal-500"
                    : i % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-4 font-medium text-black">{row.feature}</td>
                <td className="px-6 py-4 text-black/60">{row.left}</td>
                <td className="px-6 py-4 text-black/70 font-medium">{row.right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
