import { Check } from "lucide-react";

interface ChecklistItem {
  text: string;
  subItems?: string[];
}

interface ChecklistSectionProps {
  title?: string;
  items: ChecklistItem[];
}

export function ChecklistSection({ title, items }: ChecklistSectionProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
      {title && (
        <h3 className="text-xl font-bold text-black mb-6">{title}</h3>
      )}
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i}>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-black/80 leading-relaxed">{item.text}</span>
            </div>
            {item.subItems && (
              <ul className="ml-8 mt-2 space-y-2">
                {item.subItems.map((sub, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-black/60">
                    <span className="text-teal-500 mt-1.5 shrink-0">&#8226;</span>
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
