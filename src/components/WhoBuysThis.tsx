import { Users } from "lucide-react";

const buyerSegments = [
  { emoji: "👔", label: "Corporate Employees", percent: 31 },
  { emoji: "🏠", label: "Business Owners", percent: 27 },
  { emoji: "🧘", label: "Spiritual Practitioners", percent: 22 },
  { emoji: "🎓", label: "Students", percent: 20 },
];

const WhoBuysThis = () => {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4 mt-4">
      <div className="flex items-center gap-2 mb-3">
        <Users className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold">Who Buys This Product?</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {buyerSegments.map((segment) => (
          <div
            key={segment.label}
            className="flex items-center gap-2 rounded-lg bg-background border border-border/50 px-3 py-2.5"
          >
            <span className="text-lg">{segment.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">{segment.label}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${segment.percent}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-primary">{segment.percent}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoBuysThis;
