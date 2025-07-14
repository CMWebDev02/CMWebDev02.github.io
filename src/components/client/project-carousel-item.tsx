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
      <Card className="w-full h-full flex flex-col gap-0 p-1 bg-primary-background/70">
        <CardHeader className="w-full h-1/5">
          <CardTitle className="text-md md:text-xl">{projectTitle}</CardTitle>
          <Image
            layout="auto"
            src={projectImage}
            alt={imageDescription}
            className="aspect-auto object-contain h-20"
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
