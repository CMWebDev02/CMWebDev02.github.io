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
    <CarouselItem>
      <Card>
        <CardHeader>{projectTitle}</CardHeader>
        <CardContent>
          <Image layout="auto" src={projectImage} alt={imageDescription} />
          {children}
        </CardContent>
        <CardFooter>
          {projectDemoLink !== null && (
            <Link href={{ href: projectDemoLink }}>Demo</Link>
          )}
          <Link href={{ href: projectGitHubLink }}>GitHub</Link>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
