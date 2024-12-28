import Link from "next/link";
import HeroText from "./HeroText";
import "./Hero.css";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero text-center min-h-screen lg:py-60 bg-blend-multiply relative w-full h-full"
    >
      <div
        className="absolute inset-0 bg-fixed hero-bg"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-0"></div>
      <div className="relative z-0"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-5 flex flex-col gap-6 max-w-8xl px-6 md:px-20 py-96 lg:py-0">
        <div className="w-full flex flex-col items-center md:items-start lg:items-end">
          <HeroText />
        </div>
      </div>
      <div className="absolute bottom-24 lg:bottom-8 w-full flex flex-col items-center lg:items-end lg:p-10 gap-4 md:gap-6 ">
        <span className="font-light tracking-wider text-white leading-relaxed text-lg lg:text-xl opacity-0 animate-fadeIn delay-1200 lg:text-left">
          רוצה לשמוע עוד?
        </span>
        <Link
          href={"/#courses"}
          className="w-40 px-6 py-3 rounded-lg font-semibold text-md bg-[#E43AA7] text-white border-2 border-pink-500 opacity-0 animate-fadeIn delay-1200 hover:bg-white hover:text-pink-500 transition-all transform hover:scale-105"
        >
          לחצי כאן !
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
