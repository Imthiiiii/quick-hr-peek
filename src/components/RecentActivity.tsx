import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ActivityItem {
  id: number;
  action: string;
  time: string;
  type: "checkin" | "checkout" | "late" | "absence";
}

const mockActivity: ActivityItem[] = [
  { id: 1, action: "Sarah Johnson checked in", time: "2 mins ago", type: "checkin" },
  { id: 2, action: "Michael Chen checked out", time: "15 mins ago", type: "checkout" },
  { id: 3, action: "Emily Davis marked late", time: "1 hour ago", type: "late" },
  { id: 4, action: "David Brown reported absent", time: "2 hours ago", type: "absence" },
  { id: 5, action: "James Wilson checked in", time: "3 hours ago", type: "checkin" },
];

const getActivityColor = (type: ActivityItem["type"]) => {
  const colors = {
    checkin: "bg-[hsl(var(--success))]",
    checkout: "bg-primary",
    late: "bg-[hsl(var(--warning))]",
    absence: "bg-destructive",
  };
  return colors[type];
};

export const RecentActivity = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivity.map((activity) => (
            <div key={activity.id} className="flex gap-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${getActivityColor(activity.type)}`} />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
