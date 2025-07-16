import type { ReactNode } from "react";
import { CarouselItem } from "../ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import ProjectLinks from "./project-links";

interface ProjectCarouselItemProps {
  projectTitle: string;
  projectImage: string;
  imageDescription: string;
  projectDemoLink: string | null;
  projectGitHubLink: string;
  children: ReactNode;
}

export default function ProjectCarouselItem({
  projectTitle,
  projectImage,
  imageDescription,
  projectDemoLink,
  projectGitHubLink,
  children,
}: ProjectCarouselItemProps) {
  return (
    <CarouselItem className="w-full h-full">
      <Card className="w-full h-full flex flex-col gap-1 p-1 bg-primary-background/70">
        <CardHeader className="w-full h-1/5 flex flex-row">
          <CardTitle className="text-base">{projectTitle}</CardTitle>
          <Image
            layout="auto"
            src={projectImage}
            alt={imageDescription}
            className="object-contain w-full h-full"
          />
        </CardHeader>
        <CardContent className="w-full h-3/5 max-h-3/5 overflow-y-auto">
          {children}
        </CardContent>
        <CardFooter className="w-full h-1/5">
          <ProjectLinks
            projectDemoLink={projectDemoLink}
            projectGitHubLink={projectGitHubLink}
          />
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
