import { COURSES } from "../utils/constants";
import Course from "./Course";
import Title from "./Title";

export default function Courses() {
  return (
    <section
      id="courses"
      className="mt-[10vh] min-h-screen bg-zinc-100 py-16 px-6 lg:px-20 animate-fadeIn"
    >
      <Title title="קורסים" className="text-black" />
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16 w-full">
        {COURSES.map((course) => (
          <Course
            key={course.title}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}
