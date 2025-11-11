// SubmenuSection.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SubmenuSectionProps {
    isActive: boolean;
    children: ReactNode;
}

export function SubmenuSection({ isActive, children }: SubmenuSectionProps) {
    return (
        <div
            className={cn(
                "fixed top-18 left-1/2 -translate-x-1/2 w-full max-w-7xl bg-background text-foreground shadow-sm dark:shadow-slate-700 grid grid-rows-[0fr] transition-[grid-template-rows,opacity] duration-500 ease-in-out opacity-0 pointer-events-none overflow-hidden",
                {
                    "grid-rows-[1fr] opacity-100 pointer-events-auto": isActive,
                }
            )}
        >
            <div className="min-h-0 overflow-hidden">{children}</div>
        </div>
    );
}
