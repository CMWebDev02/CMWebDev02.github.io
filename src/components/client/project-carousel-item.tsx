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
      <Card className="w-full h-full flex flex-col gap-1 bg-primary-background/70">
        <CardHeader className="w-full h-1/12">
          <CardTitle className="text-md md:text-xl">{projectTitle}</CardTitle>
        </CardHeader>
        <CardContent className="w-full h-10/12 flex flex-col gap-2">
          <Image
            layout="auto"
            src={projectImage}
            alt={imageDescription}
            className="aspect-auto object-contain h-20"
          />
          {children}
        </CardContent>
        <CardFooter className="w-full h-1/12">
          <ProjectLinks projectDemoLink={projectDemoLink} projectGitHubLink={projectGitHubLink} />
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
