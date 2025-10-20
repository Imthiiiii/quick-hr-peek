import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserX } from "lucide-react";

interface Absentee {
  id: number;
  name: string;
  department: string;
  reason: string;
  type: "sick" | "vacation" | "personal" | "unplanned";
}

const mockAbsentees: Absentee[] = [
  { id: 1, name: "David Brown", department: "Engineering", reason: "Sick Leave", type: "sick" },
  { id: 2, name: "Maria Garcia", department: "Sales", reason: "Vacation", type: "vacation" },
  { id: 3, name: "John Smith", department: "Marketing", reason: "Personal Day", type: "personal" },
  { id: 4, name: "Anna Lee", department: "HR", reason: "Medical Appointment", type: "sick" },
  { id: 5, name: "Tom Wilson", department: "Finance", reason: "No Call", type: "unplanned" },
];

const getReasonBadge = (type: Absentee["type"]) => {
  const variants = {
    sick: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    vacation: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    personal: "bg-purple-500/10 text-purple-500 border-purple-500/30",
    unplanned: "bg-destructive/10 text-destructive border-destructive/30",
  };
  
  return <Badge variant="outline" className={variants[type]}>{type}</Badge>;
};

export const AbsenteesList = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserX className="h-5 w-5 text-destructive" />
          Today's Absentees
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockAbsentees.map((absentee) => (
            <div
              key={absentee.id}
              className="flex items-start justify-between p-3 rounded-lg border bg-card hover:bg-muted/30 transition-colors"
            >
              <div className="space-y-1 flex-1">
                <p className="font-medium text-sm">{absentee.name}</p>
                <p className="text-xs text-muted-foreground">{absentee.department}</p>
                <p className="text-xs text-muted-foreground">{absentee.reason}</p>
              </div>
              {getReasonBadge(absentee.type)}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
