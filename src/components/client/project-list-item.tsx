import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import ProjectLinks from "./project-links";

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
        <CardTitle className="text-md md:text-xl">{projectTitle}</CardTitle>
      </CardHeader>
      <CardContent
        className={cn(
          ` 
          ${isImageLeftAligned ? "flex-row" : "flex-row-reverse"}`,
          "flex h-10/12 gap-5 w-full"
        )}
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
        <CardDescription className="w-10/12">
          <p className="text-lg text-card-text">{children}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="h-1/12 w-full">
        <ProjectLinks projectDemoLink={projectDemoLink} projectGitHubLink={projectGitHubLink} />
      </CardFooter>
    </Card>
  );
}
