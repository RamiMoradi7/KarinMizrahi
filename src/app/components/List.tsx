import React from "react";
import { StarterListItem } from "../utils/constants";

interface ListProps {
  list: StarterListItem[];
  className?: string;
}

export default function List({ list, className }: ListProps) {
  return (
    <ul className="space-y-2 s">
      {list.map(({ text }, index) => (
        <li
          key={index}
          className={`${className} flex items-center text-lg font-medium text-gray-800`}
        >
          <div className="w-1.5 h-1.5 bg-[#EF4444] rounded-full mr-4"></div>
          <span className="text-gray-700 mr-4 hover:text-[#EF4444] transition-colors duration-300">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}
