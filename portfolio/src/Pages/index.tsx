import "../style.css";
import Homepage from "./homepage";

export default function index() {
  return (
    <div className="min-h-screen bg-background">
      

      {/* DASHBOARD CONTENT */}
      <main className="dashboard pt-4 pb-4">
        <Homepage/>

      </main>

    </div>
  );
}
