import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "qjawy5b2",
  dataset: "production",
  title: "Samson Sisay",
  apiVersion: "27-09-2026",
  basePath: "/cmsd",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
