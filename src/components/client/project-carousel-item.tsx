import type { ReactNode } from "react";
import { CarouselItem } from "../ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

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
      <Card className="w-full h-full flex flex-col gap-1 bg-secondary-background/80">
        <CardHeader className="w-full h-1/12">{projectTitle}</CardHeader>
        <CardContent className="w-full h-10/12 flex flex-col gap-2">
          <Image
            layout="auto"
            src={projectImage}
            alt={imageDescription}
            className="aspect-auto object-contain h-20"
          />
          {children}
        </CardContent>
        <CardFooter className="w-full h-1/12 flex gap-2 justify-center">
          {projectDemoLink !== null && (
            <Link href={{ href: projectDemoLink }}>Demo</Link>
          )}
          <Link href={{ href: projectGitHubLink }}>GitHub</Link>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
