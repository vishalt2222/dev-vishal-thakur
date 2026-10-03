import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];
    if (!accessKey) throw new Error("CONTACT_NOT_CONFIGURED");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        subject: `Portfolio contact: ${data.subject}`,
        message: data.message,
        from_name: "Portfolio Contact Form",
      }),
    });

    const result = (await res.json()) as { success?: boolean };
    if (!res.ok || !result.success) throw new Error("Failed to send message");
    return { sent: true };
  });
