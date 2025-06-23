import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";

interface ProjectCardProps {
  projectTitle: string;
  projectImage: string;
  imageDescription: string;
  isImageLeftAligned: boolean;
  children: ReactNode;
}

export default function ProjectCard({
  projectTitle,
  projectImage,
  imageDescription,
  isImageLeftAligned,
  children,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{projectTitle}</CardTitle>
      </CardHeader>
      <CardContent
        className={`flex ${
          isImageLeftAligned ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <Image
          src={projectImage}
          alt={imageDescription}
          width={400}
          height={400}
        />
        <p>{children}</p>
      </CardContent>
    </Card>
  );
}
