export type Project = {
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  color: string;
  github: string;
  demo: string;
  image?: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type Skill = {
  name: string;
  pct: number;
  color: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type TechStack = string[];
