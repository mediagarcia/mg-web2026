import { Info, Lightbulb, AlertTriangle, BookOpen } from "lucide-react";

interface CalloutBoxProps {
  type: "info" | "tip" | "warning" | "example";
  title?: string;
  children: React.ReactNode;
}

const variants = {
  info: {
    border: "border-l-teal-500",
    bg: "bg-teal-500/5",
    icon: <Info className="w-5 h-5 text-teal-500 shrink-0" />,
    defaultTitle: "Note",
  },
  tip: {
    border: "border-l-[#EE82F0]",
    bg: "bg-[#EE82F0]/5",
    icon: <Lightbulb className="w-5 h-5 text-[#EE82F0] shrink-0" />,
    defaultTitle: "Tip",
  },
  warning: {
    border: "border-l-[#EC4724]",
    bg: "bg-[#EC4724]/5",
    icon: <AlertTriangle className="w-5 h-5 text-[#EC4724] shrink-0" />,
    defaultTitle: "Important",
  },
  example: {
    border: "border-l-gray-400",
    bg: "bg-gray-50",
    icon: <BookOpen className="w-5 h-5 text-gray-500 shrink-0" />,
    defaultTitle: "Example",
  },
};

export function CalloutBox({ type, title, children }: CalloutBoxProps) {
  const v = variants[type];

  return (
    <div className={`${v.bg} ${v.border} border-l-4 rounded-r-2xl p-6`}>
      <div className="flex items-center gap-3 mb-3">
        {v.icon}
        <span className="text-sm font-bold uppercase tracking-wider text-black/80">
          {title || v.defaultTitle}
        </span>
      </div>
      <div className="text-black/70 leading-relaxed text-[15px]">{children}</div>
    </div>
  );
}
