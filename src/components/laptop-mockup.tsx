
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function LaptopMockup({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn("relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-fit w-full", className)}>
      <div className="rounded-lg overflow-hidden w-full bg-white dark:bg-gray-800">
        {children}
      </div>
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[50%]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
      </div>
    </div>
  );
}
