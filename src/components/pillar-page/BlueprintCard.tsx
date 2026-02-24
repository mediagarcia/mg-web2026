import { Wrench } from "lucide-react";

interface BlueprintCardProps {
  title: string;
  category: string;
  problem: string;
  solution: string;
  tools?: string[];
  difficulty?: "Basic" | "Intermediate" | "Advanced";
}

const difficultyColors = {
  Basic: "bg-teal-500/10 text-teal-600",
  Intermediate: "bg-[#EE82F0]/10 text-[#EE82F0]",
  Advanced: "bg-[#EC4724]/10 text-[#EC4724]",
};

export function BlueprintCard({
  title,
  category,
  problem,
  solution,
  tools,
  difficulty,
}: BlueprintCardProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-500">
          {category}
        </span>
        {difficulty && (
          <span
            className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 mb-1">
            Problem
          </h4>
          <p className="text-black/70 leading-relaxed text-[15px]">{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 mb-1">
            Solution
          </h4>
          <p className="text-black/70 leading-relaxed text-[15px]">{solution}</p>
        </div>
      </div>
      {tools && tools.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-200">
          <Wrench className="w-4 h-4 text-black/30" />
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-medium bg-white text-black/60 px-2 py-1 rounded-lg"
            >
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
