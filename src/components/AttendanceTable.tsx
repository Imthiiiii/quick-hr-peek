import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock } from "lucide-react";

interface AttendanceRecord {
  id: number;
  name: string;
  department: string;
  checkIn: string;
  checkOut: string | null;
  status: "present" | "late" | "absent";
}

const mockAttendance: AttendanceRecord[] = [
  { id: 1, name: "Sarah Johnson", department: "Engineering", checkIn: "08:45 AM", checkOut: "05:30 PM", status: "present" },
  { id: 2, name: "Michael Chen", department: "Marketing", checkIn: "09:15 AM", checkOut: null, status: "present" },
  { id: 3, name: "Emily Davis", department: "HR", checkIn: "09:45 AM", checkOut: "05:15 PM", status: "late" },
  { id: 4, name: "James Wilson", department: "Sales", checkIn: "08:30 AM", checkOut: "06:00 PM", status: "present" },
  { id: 5, name: "Lisa Anderson", department: "Engineering", checkIn: "09:50 AM", checkOut: null, status: "late" },
  { id: 6, name: "Robert Taylor", department: "Finance", checkIn: "08:55 AM", checkOut: "05:20 PM", status: "present" },
  { id: 7, name: "Jennifer Martinez", department: "Operations", checkIn: "09:05 AM", checkOut: null, status: "present" },
];

const getStatusBadge = (status: AttendanceRecord["status"]) => {
  const variants = {
    present: { className: "bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))] border-[hsl(var(--success)/0.3)]", label: "Present" },
    late: { className: "bg-[hsl(var(--warning)/0.1)] text-[hsl(var(--warning))] border-[hsl(var(--warning)/0.3)]", label: "Late" },
    absent: { className: "bg-destructive/10 text-destructive border-destructive/30", label: "Absent" },
  };
  
  const variant = variants[status];
  return <Badge variant="outline" className={variant.className}>{variant.label}</Badge>;
};

export const AttendanceTable = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Today's Attendance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Employee</TableHead>
                <TableHead className="font-semibold">Department</TableHead>
                <TableHead className="font-semibold">Check In</TableHead>
                <TableHead className="font-semibold">Check Out</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAttendance.map((record) => (
                <TableRow key={record.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium">{record.name}</TableCell>
                  <TableCell className="text-muted-foreground">{record.department}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1 font-mono text-sm">
                      {record.checkIn}
                    </span>
                  </TableCell>
                  <TableCell>
                    {record.checkOut ? (
                      <span className="inline-flex items-center gap-1 font-mono text-sm">
                        {record.checkOut}
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-sm">Still working</span>
                    )}
                  </TableCell>
                  <TableCell>{getStatusBadge(record.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
