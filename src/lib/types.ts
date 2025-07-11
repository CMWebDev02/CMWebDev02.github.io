import { Url } from "next/dist/shared/lib/router/router";

export type PageLink = {
  linkName: string;
  href: Url;
};

export type Project = {
  projectTitle: string;
  projectType: string;
  projectImage: string;
  imageDescription: string;
  projectDescription: string;
  projectDemoLink: string | null;
  projectGitHubLink: string;
  isExampleProject: boolean;
};

export type Credential = {
  credentialTitle: string;
  credentialInstitute: string;
  credentialDescription: string;
};
