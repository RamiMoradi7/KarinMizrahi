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
      className="mt-[10vh] mb-[20vh]  p-8 rounded-lg shadow-lg"
    >
      <div className="text-center mb-12">
        <Title
          title="גלריית עבודות"
          className="text-zinc-600"
        />
      </div>
      <div className="pt-6 lg:pb-6  rounded-3xl shadow-xl">
        <WorkGallery />
      </div>
      <div className=" mx-auto max-w-[1300px]">
        <Title
          title="ריסים ותחרויות"
          className="text-zinc-600 m-10"
        />
        <LashesWorks />
      </div>
    </section>
  );
}
