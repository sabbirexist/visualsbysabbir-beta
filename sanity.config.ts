import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import siteSettings from "./sanity/schemas/siteSettings";
import category from "./sanity/schemas/category";
import project from "./sanity/schemas/project";

export default defineConfig({
  name: "default",
  title: "Visuals by Sabbir",

  // Configure these in Vercel: NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  // Mount Studio at /admin (works with app/admin/[[...index]] route)
  basePath: "/admin",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [siteSettings, category, project],
  },
});
