import ImageCarousel from "@/app/components/ImageCarousel";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import React from "react";
import Learnings from "./Learnings";
import List from "@/app/components/List";
import {
  LEVELUP_LIST_BONUSES,
  LEVELUP_LIST_ITEMS,
} from "@/app/utils/constants";

export const metadata: Metadata = {
  title: "השתלמות Level Up",
  description: "קארין מזרחי - השתלמות מתקדמות Level Up",
};

const LevelUpPage: React.FC = () => {
  return (
    <div className="mx-auto mt-32 relative flex flex-col gap-4 justify-center bg-zinc-100 text-white p-4 md:px-12">
      <Title
        title="השתלמות Level Up"
        className="animate-slide-fade text-center text-4xl md:text-5xl  mb-6 text-[#E43AA7]"
      />
      <div className="flex flex-col items-center gap-8">
        <Title
          title="מה נלמד ?"
          className="animate-slide-fade text-center text-4xl md:text-5xl  mb-6 text-[#E43AA7]"
          />
        <Learnings />
      </div>
      <div className="bg-white text-black p-10 rounded-3xl mb-10 shadow-2xl mt-12 mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          מה תקבלי?
        </h2>
        <List list={LEVELUP_LIST_ITEMS} />
        <ImageCarousel />
        <h3 className="text-2xl font-bold text-center text-pink-500 mt-12 mb-6">
          בונוסים:
        </h3>
        <List list={LEVELUP_LIST_BONUSES} />
      </div>
    </div>
  );
};

export default LevelUpPage;
