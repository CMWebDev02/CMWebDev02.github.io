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
        <CardDescription>
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
