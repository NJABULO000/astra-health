import { NavLink } from "react-router-dom";
import { Rocket } from "lucide-react";
import { modules } from "../data/modules";

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-navy border-r border-white/10 flex flex-col">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
        <Rocket className="text-primary" size={26} />
        <div>
          <p className="font-bold tracking-widest">ASTRA</p>
          <p className="text-[10px] tracking-[0.3em] text-primary">HEALTH</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {modules.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-primary/15 text-primary"
                  : "text-slate-400 hover:bg-white/5 hover:text-ink"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 text-xs text-slate-500">
        Simulated data · Prototype
      </div>
    </aside>
  );
}