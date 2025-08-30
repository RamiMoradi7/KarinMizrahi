import React from "react";
import { TCourse } from "../utils/constants";
import CourseButton from "./CourseButton";

export default function Course({
  course: { title, price, salePrice, including, key },
}: {
  course: TCourse;
}) {
  const isOnSale = !!salePrice;

  return (
    <div className="relative flex flex-col w-full h-auto max-w-[30rem] border-2 rounded-xl bg-white bg-clip-border p-8 text-zinc-800 shadow-pink-500/80">

      {isOnSale && (
        <div className="absolute top-3 right-3 bg-[#EF4444] text-white px-2 py-1 text-xs font-bold rounded-md shadow-md">
          במבצע
        </div>
      )}

      <div className="relative m-0 mb-2 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
        <h1 className="block font-sans uppercase text-2xl leading-normal border-b border-1 antialiased">
          {title}
        </h1>
      </div>

      <div className="p-0 flex-1">
        <ul className="flex flex-col gap-4">
          {including.map((item) => (
            <li key={item} className="flex items-center gap-4">
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
                  />
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
        <div className="flex flex-col justify-center items-center text-white font-normal antialiased">

          {isOnSale && (
            <div className="text-gray-400 line-through text-xl">
              <span className="text-base">&#8362;</span>
              {price}
            </div>
          )}

          <h1 className="mt-1 flex items-center gap-1 font-sans text-5xl lg:text-6xl font-bold tracking-tight text-[#EF4444] antialiased">
            <span className="text-2xl mt-2">&#8362;</span>
            {isOnSale ? salePrice : price}
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
