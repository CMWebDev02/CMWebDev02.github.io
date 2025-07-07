import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/lib/types";
import ProjectCarouselItem from "./project-carousel-item";

interface ProjectCarouselProps {
  projectsArray: Project[];
}

export default function ProjectCarousel({
  projectsArray,
}: ProjectCarouselProps) {
  const carouselItems = projectsArray.map((projectObj, index) => {
    return (
      <ProjectCarouselItem
        key={`${projectObj.projectTitle} + ${index}`}
        projectTitle={projectObj.projectTitle}
        projectImage={projectObj.projectImage}
        projectDemoLink={projectObj.projectDemoLink}
        projectGitHubLink={projectObj.projectGitHubLink}
        imageDescription={projectObj.imageDescription}
      >
        {projectObj.projectDescription}
      </ProjectCarouselItem>
    );
  });

  return (
    <Carousel className="flex md:hidden h-full w-8/12 sm:w-4/5">
      <CarouselContent>{carouselItems}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
