import { Metadata } from "next";
import React from "react";
import Title from "@/app/components/Title";
import List from "@/app/components/List";
import {
  Lesson,
  LESSONS,
  STARTER_LIST_BONUSES,
  STARTER_LIST_ITEMS,
} from "@/app/utils/constants";

export const metadata: Metadata = {
  title: "קורס מתחילות",
  description: "קארין מזרחי - קורס מתחילות",
};

const LessonCard = ({
  lessonNumber,
  title: lessonTitle,
  lessonContent,
}: Lesson) => {
  return (
    <div className="relative m-4 w-full max-w-xs lg:max-w-md h-[480px] mb-6 transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30 rounded-xl">
      <div className="bg-zinc-200 absolute rounded-xl h-full w-full -left-2 -top-2 opacity-40"></div>
      <div className="p-6 w-full h-full bg-white rounded-xl shadow-lg space-y-4 flex flex-col justify-between transition-all">
        <div className="bg-pink-500 h-2 w-16 ml-auto mb-4 rounded"></div>
        <div>
          <span className="text-xl sm:text-2xl font-semibold text-pink-600">
            שיעור מס #{lessonNumber}
          </span>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
            {lessonTitle}
          </h2>
        </div>
        <div className="flex-1 overflow-auto scale-105 p-2">
          <List list={lessonContent} className="text-sm" />
        </div>
      </div>
    </div>
  );
};

const StartersPage: React.FC = () => {
  return (
    <div className="mt-32  relative flex flex-col  justify-center bg-zinc-100 text-white p-4 md:px-12">
      <Title
        title="קורס מתחילות"
        className="animate-slide-fade text-center text-4xl md:text-5xl font-bold mb-6 text-[#E43AA7]"
      />
      <div className="flex flex-col justify-center items-center ">
        <Title
          title="שיעורים"
          className="animate-slide-fade text-2xl md:text-3xl font-semibold text-[#E43AA7] text-center mb-4"
        />
        <div className="grid grid-cols-1 animate-slide-fade sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-12">
          {LESSONS.map(({ lessonContent, lessonNumber, title }) => (
            <LessonCard
              key={lessonNumber}
              lessonContent={lessonContent}
              lessonNumber={lessonNumber}
              title={title}
            />
          ))}
        </div>
      </div>
      <div className="bg-white  text-black p-10 rounded-3xl shadow-2xl mt-12 mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          מה תקבלי?
        </h2>
        <List list={STARTER_LIST_ITEMS} />
        <h3 className="text-2xl font-bold text-center text-pink-500 mt-12 mb-6">
          בונוסים:
        </h3>
        <List list={STARTER_LIST_BONUSES} />
        <h2
          className={`text-xl lg:text-2xl mt-6 font-bold text-center mb-8 lg:mb-12 text-[#E43AA7] tracking-wide uppercase shadow-md`}
        >
          לאחר הקורס תוכלי להתחיל לקבל לקוחות, ולהפוך לעצמאית בתחום
        </h2>
      </div>
    </div>
  );
};

export default StartersPage;
