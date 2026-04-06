import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface FormRequest {
  name: string;
  email: string;
  company: string;
  message?: string;
  formType: "contact" | "ai-readiness";
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message, formType }: FormRequest = await req.json();

    // Validate required fields
    if (!name || !email || !formType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, formType" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (formType === "contact" && !message) {
      return new Response(
        JSON.stringify({ error: "Message is required for contact form" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
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
           <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${escapeHtml(company)}</td></tr>
           <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
         </table>
         <p>This person has requested an AI Readiness Assessment. Please follow up.</p>`;

    const POSTMARK_API_TOKEN = (Deno.env.get("POSTMARK_API_TOKEN") || "").trim();
    if (!POSTMARK_API_TOKEN) {
      throw new Error("POSTMARK_API_TOKEN is not configured");
    }

    console.log("Sending email via Postmark, token length:", POSTMARK_API_TOKEN.length);

    const postmarkResponse = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
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
      throw new Error(`Postmark API returned ${postmarkResponse.status}`);
    }

    const result = await postmarkResponse.json();
    console.log("Email sent successfully:", result.MessageID);

    return new Response(
      JSON.stringify({ success: true, messageId: result.MessageID }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-form-email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

serve(handler);
