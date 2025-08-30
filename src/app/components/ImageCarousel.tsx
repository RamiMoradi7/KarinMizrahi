"use client";
import { useEffect, useRef } from "react";
import "./ImageGallery.css";
import Levelup1 from "/public/Levelup1.jpg";
import Levelup2 from "/public/Levelup2.jpg";
import Levelup3 from "/public/Levelup3.jpg";
import Levelup4 from "/public/Levelup4.jpg";
import Levelup5 from "/public/Levelup5.jpg";
import Levelup6 from "/public/Levelup6.jpg";

export default function ImageCarousel() {
  const innerRef = useRef<HTMLDivElement>(null);

  const cards = [
    { index: 0, color: "142, 249, 252", image: Levelup1 },
    { index: 1, color: "142, 252, 204", image: Levelup2 },
    { index: 2, color: "142, 252, 157", image: Levelup3 },
    { index: 3, color: "215, 252, 142", image: Levelup4 },
    { index: 4, color: "252, 252, 142", image: Levelup5 },
    { index: 5, color: "252, 208, 142", image: Levelup6 },
  ];

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.style.setProperty("--quantity", "6");
    }
  }, []);

  return (
    <div className="wrapper">
      <div
        className="inner"
        ref={innerRef}
      >
        {cards.map((card) => (
          <div
            key={card.index}
            className="card"
            ref={(el: HTMLDivElement | null) => {
              if (el) {
                el.style.setProperty("--index", String(card.index));
                el.style.setProperty("--color-card", card.color);
                el.style.setProperty(
                  "--background-image",
                  `url(${card.image.src})`
                );
              }
            }}
          >
            <div className="img"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
