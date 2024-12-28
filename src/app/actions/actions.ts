import { FormDataProps } from "./../utils/formUtils";
import emailjs from "emailjs-com";

export async function sendEmail(formData: FormDataProps) {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error("Missing EmailJS credentials.");
    return;
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { email, name, content, subject } = formData;

    const data = { name, email, content, subject };
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
  } catch (err: any) {
    console.error(err);
  }
}
