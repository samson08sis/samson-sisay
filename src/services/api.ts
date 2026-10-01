import { Status, Skill, Project, Education } from "@/types";

export interface Result {
  status: Status;
  skills: Skill[];
  projects: Project[];
  education: Education[];
}
export async function getData(): Promise<Result> {
  const res = await fetch(`${process.env.URL}/api/data`, {
    next: {
      revalidate: 86400, // 24hrs
      tags: ["data"], // revalidation tag
    },
  });

  if (!res.ok) {
    throw new Error(`[ISR Error] Status request returned HTTP ${res.status}`);
  }

  return await res.json();
}
