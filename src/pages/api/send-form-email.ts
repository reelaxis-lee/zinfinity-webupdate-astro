import type { APIRoute } from "astro";

interface FormBody {
  name: string;
  email: string;
  company?: string;
  message?: string;
  formType: string;
}

interface PostmarkResult {
  MessageID: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const POST: APIRoute = async ({ request }) => {
  let body: FormBody;
  try {
    body = (await request.json()) as FormBody;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const { name, email, company, message, formType } = body;

  if (!name || !email || !formType) {
    return new Response(
      JSON.stringify({ error: "Missing required fields: name, email, formType" }),
      { status: 400 }
    );
  }

  if (formType === "contact" && !message) {
    return new Response(
      JSON.stringify({ error: "Message is required for contact form" }),
      { status: 400 }
    );
  }

  const POSTMARK_API_TOKEN = (import.meta.env.POSTMARK_API_TOKEN || "").trim();
  if (!POSTMARK_API_TOKEN) {
    console.error("POSTMARK_API_TOKEN is not configured");
    return new Response(
      JSON.stringify({ error: "Email service is not configured" }),
      { status: 500 }
    );
  }

  const isContact = formType === "contact";
  const subject = isContact
    ? `Contact Form: ${name}${company ? ` at ${company}` : ""}`
    : `AI Readiness Assessment Request: ${name}${company ? ` at ${company}` : ""}`;

  const htmlBody = isContact
    ? `<h2>New Contact Form Submission</h2>
       <table style="border-collapse:collapse;width:100%;max-width:600px;">
         <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${escapeHtml(name)}</td></tr>
         <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
         <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${escapeHtml(company || "N/A")}</td></tr>
         <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${escapeHtml(message || "")}</td></tr>
       </table>`
    : `<h2>New AI Readiness Assessment Request</h2>
       <table style="border-collapse:collapse;width:100%;max-width:600px;">
         <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${escapeHtml(name)}</td></tr>
         <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${escapeHtml(company || "")}</td></tr>
         <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
       </table>
       <p>This person has requested an AI Readiness Assessment. Please follow up.</p>`;

  try {
    const postmarkResponse = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": POSTMARK_API_TOKEN,
      },
      body: JSON.stringify({
        From: "teamred@reelaxis.com",
        To: "info@zinfinity.tech,teamred@reelaxis.com",
        Subject: subject,
        HtmlBody: htmlBody,
        ReplyTo: email,
        MessageStream: "outbound",
      }),
    });

    if (!postmarkResponse.ok) {
      const errorData = await postmarkResponse.text();
      console.error("Postmark API error:", errorData);
      return new Response(
        JSON.stringify({ error: `Postmark API returned ${postmarkResponse.status}` }),
        { status: 500 }
      );
    }

    const result = (await postmarkResponse.json()) as PostmarkResult;
    console.log("Email sent successfully:", result.MessageID);
    return new Response(JSON.stringify({ success: true, messageId: result.MessageID }), {
      status: 200,
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const message = error instanceof Error ? error.message : "Failed to send email";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
