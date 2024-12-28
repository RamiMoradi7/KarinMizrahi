import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className=" mx-auto bg-pink-100 min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}
