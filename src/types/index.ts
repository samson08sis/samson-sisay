export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  title: string;
  description: string;
  tags: string[];
}

export interface Education {
  title: string;
  institution: string;
  description: string;
  year: string;
}
