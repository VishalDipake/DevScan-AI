import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
export function Page({ children }: { children: ReactNode }) { return <div className="min-h-screen bg-[#080b12] text-slate-100"><Navbar />{children}</div>; }
