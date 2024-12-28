import { z } from "zod";
import { FORM_SELECT_VALUES } from "./constants";

export interface FormDataProps {
  subject: string;
  name: string;
  phone: string;
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
  phone: "",
  content: "",
  success: false,
  message: "",
  isPending: false,
  errors: {},
};

export const formSchema = z.object({
  subject: z.string().min(1, "נושא פנייה הוא שדה חובה"),
  name: z.string().min(1, "הכנסי את שמך המלא"),
  phone: z
    .string()
    .min(9, "אנא הכנס/י מס טלפון תקין.")
    .regex(/^\d{9,10}$/, "המספר צריך להכיל לפחות 9 או 10 ספרות"),
  content: z.string().min(1, "הודעה היא שדה חובה"),
});
