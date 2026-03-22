import { Calendar } from "lucide-react";

export default function RecentAppointments() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Recent Appointments</h2>
          <p className="text-muted-foreground text-sm mt-1">Review the latest scheduled patient visits.</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors">
          View All
        </button>
      </div>
      
      <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-purple-500/5 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-purple-500/40" />
            </div>
            <h3 className="text-lg font-semibold mb-1">No Recent Appointments</h3>
            <p className="text-muted-foreground max-w-sm">When patients book appointments, they will appear right here.</p>
        </div>
      </div>
    </div>
  );
}
