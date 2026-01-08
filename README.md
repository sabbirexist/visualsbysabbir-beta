# Visuals by Sabbir – Portfolio (Next.js)

This is Muhammad Sabbir's portfolio website built with **Next.js (App Router)** and Tailwind.

## Deploy
- Works on **Vercel** and **Netlify**.

## Contact Form (Resend)
1. Create a Resend API key.
2. Add these environment variables in Vercel:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (recommended: a verified domain sender in Resend)

## Admin Panel (Sanity Studio)
This repo includes a Sanity Studio mounted at:

- `/admin` (example: `https://your-domain.com/admin`)

### Setup steps
1. Create a Sanity account & project.
2. In **Vercel → Project → Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your Sanity project id
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
3. Redeploy.
4. Open `/admin` and log in.

> Note: The public website content is still coming from `lib/site.ts` and `lib/projects.ts`.
> The `/admin` panel is ready for you to start adding content in Sanity. Hooking the homepage to Sanity is the next step.
