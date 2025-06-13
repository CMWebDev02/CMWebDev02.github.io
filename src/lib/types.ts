import { Url } from "next/dist/shared/lib/router/router";

export type PageLink = {
    linkName: string;
    href: Url;
}

export type Project = {
    projectTitle: string;
    projectImage: string;
    imageDescription: string;
    projectDescription: string;
}