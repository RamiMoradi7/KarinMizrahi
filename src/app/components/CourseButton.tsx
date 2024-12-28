"use client";

export default function CourseButton({ courseKey }: { courseKey: string }) {
  const handleCourseClick = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.location.href = `/courses/${courseKey}`;
  };
  return (
    <button
      onClick={handleCourseClick}
      className="w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      לחצי כאן !
    </button>
  );
}
