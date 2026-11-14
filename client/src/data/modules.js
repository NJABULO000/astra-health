import {
  LayoutDashboard, HeartPulse, Brain, Moon, Radiation,
  TrendingUp, Cpu, Stethoscope, FileText, WifiOff, User,
} from "lucide-react";

export const modules = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/physical-health", label: "Physical Health", icon: HeartPulse },
  { path: "/psychology", label: "Psychology & Wellness", icon: Brain },
  { path: "/sleep", label: "Sleep", icon: Moon },
  { path: "/radiation", label: "Radiation", icon: Radiation },
  { path: "/analytics", label: "Analytics", icon: TrendingUp },
  { path: "/analysis", label: "Health Analysis", icon: Cpu },
  { path: "/guidance", label: "Medical Guidance", icon: Stethoscope },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/offline", label: "Offline & Sync", icon: WifiOff },
  { path: "/profile", label: "Profile", icon: User },
];