
import ImageCarousel from "@/app/components/ImageCarousel";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import React from "react";
import List from "@/app/components/List";
import {
  LEVELUP_LIST_BONUSES,
  LEVELUP_LIST_ITEMS,
  PEDICURE_LEARNINGS,
  PEDICURE_LIST_BONUSES,
  PEDICURE_LIST_ITEMS,
} from "@/app/utils/constants";
import Learnings from "../../components/Learnings";


export const metadata: Metadata = {
  title: "השתלמות פדיקור קוסמטי",
  description: "קארין מזרחי - השתלמות פדיקור קוסמטי",
};

const LevelUpPage: React.FC = () => {
  return (
    <div className="mx-auto mt-32 relative flex flex-col gap-4 justify-center bg-zinc-100 text-white p-4 md:px-12">
      <Title
        title="השתלמות פדיקור קוסמטי"
        className="animate-slide-fade text-center text-4xl md:text-5xl mb-6 text-black"
      />
      <div className="flex flex-col items-center gap-8">
        <Learnings LEARNINGS={PEDICURE_LEARNINGS} />
      </div>
      <div className="bg-white text-black p-10 rounded-3xl mb-10 shadow-2xl mt-12 mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-thin text-center text-[#EF4444] mb-6">
          מה תקבלי?
        </h2>
        <List list={PEDICURE_LIST_ITEMS} />
        <h3 className="text-2xl font-thin text-center text-[#EF4444] mt-12 mb-6">
          בונוסים:
        </h3>
        <List list={PEDICURE_LIST_BONUSES} />
      </div>
    </div>
  );
};

export default LevelUpPage;
