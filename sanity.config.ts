import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "qjawy5b2",
  dataset: "production",
  title: "Samson Sisay",
  apiVersion: "27-09-2026",
  basePath: "/cmsd",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
