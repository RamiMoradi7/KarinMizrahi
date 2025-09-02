/** @jsxImportSource @emotion/react */
"use client";
import { useState } from "react";
import { css } from "@emotion/react";
import ContactMeForm from "./ContactMeForm";
import Title from "./Title";

const ContactMe: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
        <Title title="לפרטים נוספים"  className="text-zinc-600" />
        <button
          onClick={toggleForm}
          className="bg-[#000000] text-white px-6 py-3 rounded-full font-semibold text-lg transition-all transform hover:bg-white hover:text-[#000000] hover:scale-105"
        >
          צרי קשר
        </button>
        <div
          css={css`
            max-height: ${isFormVisible ? "700px" : "0"};
            opacity: ${isFormVisible ? 1 : 0};
            overflow: hidden;
            transform: ${isFormVisible ? "translateY(0)" : "translateY(20px)"};
            transition: max-height 0.5s ease-out, opacity 0.5s ease-out,
              transform 0.5s ease-out;
          `}
          className="mt-8"
        >
          <ContactMeForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
