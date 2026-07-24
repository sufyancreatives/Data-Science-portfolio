import { Router, type IRouter } from "express";
import { SendContactMessageBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SendContactMessageBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, email, subject, message } = parsed.data;

  // Log the contact message (in production you'd send an email via nodemailer or similar)
  req.log.info({ name, email, subject, messageLength: message.length }, "Contact message received");

  // Return success response
  res.json({
    success: true,
    message: "Thank you for reaching out! I'll get back to you soon.",
  });
});

export default router;
