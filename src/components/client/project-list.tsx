import type { Project } from "@/lib/types";
import ProjectListItem from "./project-list-item";

interface ProjectListProps {
  projectsArray: Project[];
}

export default function ProjectList({
  projectsArray,
}: ProjectListProps) {
    const projectCards = projectsArray.map((projectObj, index) => {
      return (
        <ProjectListItem
          key={`${projectObj.projectTitle} + ${index}`}
          projectTitle={projectObj.projectTitle}
          projectImage={projectObj.projectImage}
          projectDemoLink={projectObj.projectDemoLink}
          projectGitHubLink={projectObj.projectGitHubLink}
          imageDescription={projectObj.imageDescription}
          isImageLeftAligned={index % 2 == 0 || index == 0}
        >
          {projectObj.projectDescription}
        </ProjectListItem>
      );
    });

    return (
        <>
            {projectCards}
        </>
    )
}