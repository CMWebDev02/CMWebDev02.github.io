import ProjectCarousel from "@/components/client/project-carousel";
import ProjectList from "@/components/client/project-list";
import { Project } from "@/lib/types";

interface ProjectDisplayProps {
  projectsArray: Project[];
}

export default function ProjectDisplay({ projectsArray }: ProjectDisplayProps) {
  return (
    <>
      <ProjectCarousel projectsArray={projectsArray} />
      <ProjectList projectsArray={projectsArray} />
    </>
  );
}
