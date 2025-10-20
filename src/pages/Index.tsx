import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, UserX, Clock, Calendar, LogIn, LogOut } from "lucide-react";
import { AttendanceTable } from "@/components/AttendanceTable";
import { AbsenteesList } from "@/components/AbsenteesList";
import { RecentActivity } from "@/components/RecentActivity";
import { toast } from "sonner";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock data - in real app this would come from backend
  const stats = {
    totalEmployees: 124,
    presentToday: 98,
    absentToday: 18,
    lateArrivals: 8,
  };

  const handleCheckIn = () => {
    toast.success("Checked in successfully!", {
      description: `Time: ${new Date().toLocaleTimeString()}`,
    });
  };

  const handleCheckOut = () => {
    toast.success("Checked out successfully!", {
      description: `Time: ${new Date().toLocaleTimeString()}`,
    });
  };

  // Update time every second
  useState(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Employee Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {currentTime.toLocaleDateString("en-US", { 
                  weekday: "long", 
                  year: "numeric", 
                  month: "long", 
                  day: "numeric" 
                })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right mr-4">
                <div className="text-2xl font-bold text-foreground tabular-nums">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-xs text-muted-foreground">Current Time</div>
              </div>
              <Button onClick={handleCheckIn} className="gap-2">
                <LogIn className="h-4 w-4" />
                Check In
              </Button>
              <Button onClick={handleCheckOut} variant="outline" className="gap-2">
                <LogOut className="h-4 w-4" />
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Employees
              </CardTitle>
              <Users className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stats.totalEmployees}</div>
              <p className="text-xs text-muted-foreground mt-1">Active workforce</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Present Today
              </CardTitle>
              <UserCheck className="h-5 w-5 text-[hsl(var(--success))]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stats.presentToday}</div>
              <Badge variant="outline" className="mt-2 bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))] border-[hsl(var(--success)/0.3)]">
                {((stats.presentToday / stats.totalEmployees) * 100).toFixed(1)}% attendance
              </Badge>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Absent Today
              </CardTitle>
              <UserX className="h-5 w-5 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stats.absentToday}</div>
              <p className="text-xs text-muted-foreground mt-1">Including planned leaves</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Late Arrivals
              </CardTitle>
              <Clock className="h-5 w-5 text-[hsl(var(--warning))]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stats.lateArrivals}</div>
              <Badge variant="outline" className="mt-2 bg-[hsl(var(--warning)/0.1)] text-[hsl(var(--warning))] border-[hsl(var(--warning)/0.3)]">
                After 9:30 AM
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="lg:col-span-2">
            <AttendanceTable />
          </div>
          <div className="space-y-6">
            <AbsenteesList />
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
