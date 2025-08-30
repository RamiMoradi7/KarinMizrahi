"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import LashesWorks from "./LashesWorks";
import Title from "./Title";
import WorkGallery from "./WorkGallery";

export default function NailsGallery() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section
      id="works"
      className="mb-[20vh]  p-8 rounded-lg "
    >
      <div className="text-center mb-3">
        <Title
          title="גלריית עבודות"
          className="inline-block border-b border-black text-zinc-600 pb-1"
        />
      </div>
      <div className="pt-6 lg:pb-6  rounded-xl">
        <WorkGallery />
      </div>
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
        <Title
          title="תחרות CWB"
          className="text-zinc-600 inline-block border-b border-black pb-1 "
        />
        </div>
        <LashesWorks />
      </div>
    </section>
  );
}
