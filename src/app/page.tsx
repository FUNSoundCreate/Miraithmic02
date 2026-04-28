"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [paddingTop, setPaddingTop] = useState(80);

  useEffect(() => {
    const updatePadding = () => {
      // 反比例: k / width (450pxのときに100px)
      const kPadding = 80000;
      const width = window.innerWidth;
      const pt = Math.max(40, Math.min(300, kPadding / width));
      setPaddingTop(pt);
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <div className="w-screen h-screen relative flex flex-col bg-white overflow-hidden">
      <p className="absolute top-1/2 -translate-y-1/2 left-8 text-teal-400 text-5xl sm:text-6xl drop-shadow-lg z-10">
        Coming soon...
      </p>
      <div
        className="flex-1 flex justify-end items-start"
        style={{ paddingTop: `${paddingTop}px` }}
      >
        <div
          className="h-full w-auto aspect-square relative scale-125"
          style={{ filter: "drop-shadow(12px 12px 2px rgba(0, 0, 0, 0.2))" }}
        >
          <Image
            src="/miraithmic02/scmx-002_mono.png"
            alt="Miraithmic 02"
            fill
            unoptimized
            priority
            style={{ objectFit: "contain", objectPosition: "right" }}
          />
        </div>
      </div>
    </div>
  );
}
