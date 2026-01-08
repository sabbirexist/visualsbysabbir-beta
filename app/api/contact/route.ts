import { Resend } from "resend";

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "visualsbysabbir.bd@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!resendKey) {
      return Response.json({ ok: false, error: "RESEND_API_KEY missing" }, { status: 500 });
    }

    if (!from) {
      return Response.json({ ok: false, error: "CONTACT_FROM_EMAIL missing" }, { status: 500 });
    }

    const resend = new Resend(resendKey);

    const subject = `New portfolio inquiry — ${name}`;

    const text = [
      "New message from your portfolio site.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message
    ].join("\n");

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.6; color:#111;">
        <h2 style="margin:0 0 12px; font-size:16px; font-weight:700;">New portfolio inquiry</h2>
        <div style="margin:0 0 12px; padding:12px; background:#f6f6f6; border-radius:12px;">
          <p style="margin:0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:6px 0 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        </div>
        <div style="margin:0; padding:12px; border:1px solid #eee; border-radius:12px;">
          <p style="margin:0 0 8px; font-weight:600;">Message</p>
          <p style="margin:0; white-space:pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="margin:14px 0 0; font-size:12px; color:#666;">Reply directly to this email to respond.</p>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html
    });

    // Resend often returns { data, error }
    // @ts-ignore
    if (result?.error) {
      // @ts-ignore
      return Response.json(
        { ok: false, error: result.error?.message || "Resend error" },
        { status: 500 }
      );
    }

    // @ts-ignore
    return Response.json({ ok: true, id: result?.data?.id || null });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
