import React from "react";
import { Badge } from "@/app/_components/badge";
import { Circle } from "lucide-react";

export type BadgeType = "idea" | "draft" | "review" | "final";

const badgeConfig: Record<BadgeType, { color: string; bgColor: string }> = {
  idea: { color: "text-gray-700", bgColor: "bg-gray-200" },
  draft: { color: "text-orange-700", bgColor: "bg-orange-200" },
  review: { color: "text-yellow-700", bgColor: "bg-yellow-200" },
  final: { color: "text-green-700", bgColor: "bg-green-200" },
};

function CustomBadge({ type }: { type: BadgeType }) {
  const { color, bgColor } = badgeConfig[type];

  return (
    <Badge
      variant="outline"
      className={`${bgColor} ${color} border-${color} font-medium px-3 py-1`}
    >
      <div className="relative mr-3">
        <Circle className={`h-3 w-3 ${color} fill-current`} />
        <Circle
          className={`h-3 w-3 ${color} absolute -top-0 -left-.5 animate-ping opacity-75`}
        />
      </div>
      <span className="font-mate font-bold text-lg">{type}</span>
    </Badge>
  );
}

export default CustomBadge;
