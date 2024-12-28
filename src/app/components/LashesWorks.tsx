import Image from "next/image";
import Picture4 from "/public/Diploma1.jpg";
import Picture5 from "/public/Diploma2.jpg";
import Picture1 from "/public/Laces1.jpg";
import Picture2 from "/public/Laces2.jpg";
import Picture7 from "/public/Laces4.jpg";

export default function LashesWorks() {
  return (
    <div className="grid gap-4 mt-12">
      <div>
        <Image
          className="lg:h-[550px] h-auto max-w-full rounded-lg mx-auto"
          src={Picture5}
          alt="Main Picture"
          width={1000}
          height={550}
          objectFit="cover"
        />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <div>
          <Image
            className="w-72 lg:h-72 h-52 object-cover rounded-lg mx-auto transform transition-transform duration-300 hover:scale-105"
            src={Picture1}
            alt="Image 1"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            className="w-72 lg:h-72 h-52 object-cover rounded-lg mx-auto transform transition-transform duration-300 hover:scale-105"
            src={Picture2}
            alt="Image 2"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            className="w-72 lg:h-72 h-52 object-cover rounded-lg mx-auto transform transition-transform duration-300 hover:scale-105"
            src={Picture4}
            alt="Image 3"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            className="w-72 lg:h-72 h-52 object-cover rounded-lg mx-auto transform transition-transform duration-300 hover:scale-105"
            src={Picture7}
            alt="Image 4"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
