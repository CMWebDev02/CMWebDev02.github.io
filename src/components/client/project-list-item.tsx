import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";
import Link from "next/link";

interface ProjectListItemProps {
  projectTitle: string;
  projectImage: string;
  imageDescription: string;
  projectDemoLink: string | null;
  projectGitHubLink: string;
  isImageLeftAligned: boolean;
  children: ReactNode;
}

export default function ProjectListItem({
  projectTitle,
  projectImage,
  imageDescription,
  projectDemoLink,
  projectGitHubLink,
  isImageLeftAligned,
  children,
}: ProjectListItemProps) {
  return (
    <Card className="h-1/4 w-full bg-primary-background/70">
      <CardHeader className="h-1/12 w-full">
        <CardTitle>{projectTitle}</CardTitle>
      </CardHeader>
      <CardContent
        className={` 
          ${isImageLeftAligned ? "flex-row" : "flex-row-reverse"}
          flex
          h-10/12
          gap-5
          w-full
          `}
      >
        <Image
          src={projectImage}
          alt={imageDescription}
          width={400}
          height={400}
          className="
            aspect-auto
            object-contain
            w-1/12
          "
        />
        <CardDescription className="w-11/12 ">
          <p>{children}</p>
          <div>
            {projectDemoLink !== null && <Link href={{ href: projectDemoLink }}>Demo</Link>}
            <Link href={{ href: projectGitHubLink }}>GitHub</Link>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
