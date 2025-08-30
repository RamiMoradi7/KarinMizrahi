import { LEARNINGS } from "@/app/utils/constants";
import React from "react";

export default function Learnings() {
  return (
    <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2 p-4 border-2 rounded-lg">
      {LEARNINGS.map(({ title }, index) => {
        const delayClass = `delay-${index * 100}`;
        return (
          <div
            key={title}
            className={`p-2 sm:w-1/2 w-full animate-slide-fade ${delayClass}`}
          >
            <div className="bg-gray-200 rounded-full flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="font-medium text-zinc-800 mr-3">{title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
