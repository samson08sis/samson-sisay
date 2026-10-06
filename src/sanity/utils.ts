import { Project } from "@/types";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "qjawy5b2",
    dataset: "production",
    apiVersion: "2026-09-27",
    useCdn: true,
  });

  return await client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      description,
      tags,
      liveUrl,
      githubUrl,
      "slug": slug.current
    }`,
    {},
    { next: { revalidate: 300 } }
  );
}

export async function getEducation() {
  const client = createClient({
    projectId: "qjawy5b2",
    dataset: "production",
    apiVersion: "2026-09-27",
    useCdn: true,
  });

  return await client.fetch(
    groq`*[_type == "education"]{
      _id,
      _createdAt,
      title,
      institution,
      description,
      year,
    }`,
    {},
    { next: { revalidate: 300 } }
  );
}

export async function getSkills() {
  const client = createClient({
    projectId: "qjawy5b2",
    dataset: "production",
    apiVersion: "2026-09-27",
    useCdn: true,
  });

  return await client.fetch(
    groq`*[_type == "skill"]{
      _id,
      _createdAt,
      title,
      description,
      tags,
    }`,
    {},
    { next: { revalidate: 300 } }
  );
}
