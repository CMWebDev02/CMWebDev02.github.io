import type { Project } from "@/lib/types";
import ProjectListItem from "./project-list-item";
import { ScrollArea } from "../ui/scroll-area";

interface ProjectListProps {
  projectsArray: Project[];
}

export default function ProjectList({ projectsArray }: ProjectListProps) {
  const projectCards = projectsArray.map((projectObj, index) => {
    return (
      <div key={`${projectObj.projectTitle} + ${index}`} className="p-1">
        <ProjectListItem
          projectTitle={projectObj.projectTitle}
          projectImage={projectObj.projectImage}
          projectDemoLink={projectObj.projectDemoLink}
          projectGitHubLink={projectObj.projectGitHubLink}
          imageDescription={projectObj.imageDescription}
          isImageLeftAligned={index % 2 == 0 || index == 0}
        >
          {projectObj.projectDescription}
        </ProjectListItem>
      </div>
    );
  });

  return (
    <ScrollArea className="w-full h-full max-h-full hidden md:flex">
      {projectCards}
    </ScrollArea>
  );
}
