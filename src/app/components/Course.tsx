import React from "react";
import { TCourse } from "../utils/constants";
import CourseButton from "./CourseButton";

export default function Course({
  course: { title, price, including, key },
}: {
  course: TCourse;
}) {
  return (
    <div className="relative flex flex-col w-full h-auto max-w-[20rem] shadow-2xl rounded-xl bg-zinc-100 bg-clip-border p-8 text-zinc-800 shadow-pink-500/80">
      <div className="relative m-0 mb-2 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
        <h1 className="block font-sans uppercase text-2xl leading-normal text-[#E43AA7] border-b border-[#E43AA7]  antialiased">
          {title}
        </h1>
      </div>

      <div className="p-0 flex-1">
        <ul className="flex flex-col gap-4">
          {including.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4"
            >
              <span className="rounded-full border text-green-400 border-white/20 bg-white/20 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-semibold text-base leading-relaxed text-inherit antialiased">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-end mt-auto">
        <div className="flex justify-center items-center gap-1 text-7xl text-white font-normal antialiased">
          <h1 className="mt-3 ml-2 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-[#E43AA7] antialiased">
            <span className="mt-2 text-3xl">&#8362;</span>
            {price}
          </h1>
        </div>
        <p className="block font-sans pb-4 text-sm font-normal text-center uppercase leading-normal text-zinc-800 antialiased">
          {`המחיר כולל מע"מ`}
        </p>
        <p className="text-center">לפרטים נוספים לגבי הקורס ותוכן עיניינים</p>

        <div className="mt-4 flex justify-center">
          <CourseButton courseKey={key} />
        </div>
      </div>
    </div>
  );
}
