import React, { useState } from "react";
import { sendEmail } from "../actions/actions";
import { formSchema, FormState, initialState } from "../utils/formUtils";
import { FormInput } from "./inputs/FormInput";
import { TextareaInput } from "./inputs/TextareaInput";
import { SelectInput } from "./inputs/SelectInput";

const ContactMeForm = () => {
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: { ...prevState.errors, [name]: "" },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formState);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });

      setFormState((prevState) => ({
        ...prevState,
        errors: newErrors,
      }));
      return;
    }

    setFormState((prevState) => ({
      ...prevState,
      isPending: true,
      success: false,
      message: "",
    }));

    try {
      await sendEmail(formState);
      setFormState((prevState) => ({
        ...prevState,
        success: true,
        message: "המייל נשלח בהצלחה",
        isPending: false,
        errors: {},
      }));
      setFormState(() => ({
        ...initialState,
        message: "המייל נשלח בהצלחה !",
        success: true,
      }));
    } catch (error) {
      setFormState((prevState) => ({
        ...prevState,
        success: false,
        message: "שגיאה במהלך שליחת המייל.",
        isPending: false,
      }));
    }
  };

  return (
    <form
      className="relative shadow-2xl bg-cover bg-center rounded-lg lg:p-24 p-10 max-w-2xl mx-auto"
      style={{
        backgroundImage: "url(/Karin4.jpg)",
      }}
      onSubmit={handleSubmit}
    >
      <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
      <div className="relative z-10">
        <SelectInput
          label="נושא"
          id="subject"
          name="subject"
          value={formState.subject}
          error={formState.errors.subject}
          onChange={handleInputChange}
        />
        <FormInput
          label="שם"
          id="name"
          name="name"
          type="text"
          placeholder="הכנס את שמך המלא"
          value={formState.name}
          onChange={handleInputChange}
          error={formState.errors.name}
        />
        <FormInput
          label="טלפון"
          type="number"
          id="phone"
          name="phone"
          placeholder="מס טלפון"
          value={formState.phone}
          error={formState.errors.phone}
          onChange={handleInputChange}
        />
        <TextareaInput
          label="הודעה"
          id="content"
          name="content"
          placeholder="כתוב את ההודעה שלך כאן"
          value={formState.content}
          onChange={handleInputChange}
          error={formState.errors.content}
        />
        <button
          type="submit"
          className="bg-[#E43AA7] text-white px-6 py-3 rounded-full font-semibold w-full transition-all hover:bg-white hover:text-[#E43AA7]"
          disabled={formState.isPending}
        >
          {formState.isPending ? "טוען..." : "שלח"}
        </button>
        {formState.message && (
          <p
            className={`mt-4 text-md ${
              formState.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {formState.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactMeForm;
