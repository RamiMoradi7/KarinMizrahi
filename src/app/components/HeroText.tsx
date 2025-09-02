import Image from "next/image";
import NailsSvg from "/public/NailsSvg.svg";

const HeroText: React.FC = () => {
  return (
    <div className="mt-6 md:mt-10 opacity-0 animate-fadeIn delay-600">
      <ul className="flex flex-col gap-4 justify-center items-start max-w-5xl mx-auto text-white">
        <h2 className="text-4xl lg:text-5xl text-white font-thin opacity-0 animate-fadeIn delay-300 sm:text-center lg:text-left">
          קארין מזרחי
        </h2>
        <li className="opacity-0 animate-fadeIn delay-700 flex items-center gap-4">
          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gradient-to-r from-black to-white">
            <Image
              src={NailsSvg}
              alt="Nails icon"
              className="object-contain w-full h-full"
              width={10}
              height={10}
            />
          </div>
          <span className="font-light tracking-wider leading-relaxed text-md lg:text-xl">
            מעל ל-7 שנים בתחום הציפורניים והיופי
          </span>
        </li>
        <li className="opacity-0 animate-fadeIn delay-800 flex items-center gap-4">
          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gradient-to-r from-black to-white">
            <Image
              src={NailsSvg}
              alt="Nails icon"
              className="object-contain w-full h-full"
              width={10}
              height={10}
            />
          </div>
          <span className="font-light tracking-wider leading-relaxed text-md lg:text-xl">
            מתמחה בהרמות ריסים ופדיקור טיפולי{" "}
          </span>
        </li>
        <li className="opacity-0 animate-fadeIn delay-900 flex items-center gap-4">
          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gradient-to-r from-black to-white">
            <Image
              src={NailsSvg}
              alt="Nails icon"
              className="object-contain w-full h-full"
              width={10}
              height={10}
            />
          </div>
          <span className="font-light tracking-wider leading-relaxed text-md lg:text-xl">
            מדריכה ובעלת קורסים למתחילות ומקצועיות
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HeroText;
