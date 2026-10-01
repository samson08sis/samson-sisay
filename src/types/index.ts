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

export type Availability = "AVAILABLE" | "LIMITED" | "UNAVAILABLE";

export interface Status {
  availability: Availability;
}

export interface AvailabilityConfig {
  label: string;
  t_label: string;
  styles: {
    border: string;
    bg: string;
    text: string;
    dot: string;
  };
}
