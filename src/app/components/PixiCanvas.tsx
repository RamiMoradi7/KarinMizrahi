"use client";
import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const PixiCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x1099bb,
    });

    // Append the PixiJS view (canvas) to the div
    if (canvasRef.current) {
      canvasRef.current.appendChild(app.view);
    }

    // Create a simple PixiJS sprite
    const texture = PIXI.Texture.from("https://path-to-your-image.jpg"); // You can add any image here
    const sprite = new PIXI.Sprite(texture);

    // Center the sprite
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;

    sprite.anchor.set(0.5);
    app.stage.addChild(sprite);

    // Add a simple animation
    app.ticker.add(() => {
      sprite.rotation += 0.01;
    });

    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="relative w-full h-screen"
    ></div>
  );
};

export default PixiCanvas;
