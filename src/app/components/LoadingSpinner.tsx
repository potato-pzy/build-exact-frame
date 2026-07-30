import React from "react";
import { LogoRing } from "@/imports/HomePage-1/index";

export default function LoadingSpinner({ size = 56 }: { size?: number }) {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#00182b] transition-opacity duration-300">
      <div className="animate-spin-ring">
        <LogoRing size={size} />
      </div>
    </div>
  );
}
