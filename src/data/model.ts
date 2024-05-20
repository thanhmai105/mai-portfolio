export type ExperienceItemResponse = {
  years: number;
  months: number;
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  description: string;
};

export type ProjectItemResponse = {
  id: string;
  platform: string;
  name: string;
  startDate: string;
  endDate: string;
  company: string;
  client: string;
  description: string;
  skillStudied: string;
  teamSize: string;
  role: string;
  responsibilities: string[];
  technologies: string[];
  imageUrl: string;
};
