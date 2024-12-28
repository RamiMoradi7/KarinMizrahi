import { z } from "zod";
import { FORM_SELECT_VALUES } from "./constants";

export interface FormDataProps {
  subject: string;
  name: string;
  email: string;
  content: string;
}

export interface FormState extends FormDataProps {
  success: boolean;
  message: string;
  isPending: boolean;
  errors: Record<string, string>;
}

export const initialState: FormState = {
  subject: FORM_SELECT_VALUES[0],
  name: "",
  email: "",
  content: "",
  success: false,
  message: "",
  isPending: false,
  errors: {},
};

export const formSchema = z.object({
  subject: z.string().min(1, "נושא פנייה הוא שדה חובה"),
  name: z.string().min(1, "הכנסי את שמך המלא"),
  email: z
    .string()
    .email("הכנסי כתובת אימייל תקינה")
    .min(1, "הכנסי את כתובת האימייל שלך"),
  content: z.string().min(1, "הודעה היא שדה חובה"),
});
