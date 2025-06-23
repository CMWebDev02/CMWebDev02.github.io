import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/lib/types";
import ProjectCard from "./project-card";

interface ProjectCarouselProps {
  projectsArray: Project[];
}

export default function ProjectCarousel({
  projectsArray,
}: ProjectCarouselProps) {
  const carouselItems = projectsArray.map((projectObj, index) => {
    return (
      <CarouselItem key={`${projectObj.projectTitle} + ${index}`}>
        {/* Create a project-carousel-item for this */}
        <ProjectCard
          projectTitle={projectObj.projectTitle}
          projectImage={projectObj.projectImage}
          imageDescription={projectObj.imageDescription}
          isImageLeftAligned={index % 2 == 0 || index == 0}
        >
          {projectObj.projectDescription}
        </ProjectCard>
      </CarouselItem>
    );
  });

  return (
    <Carousel>
      <CarouselContent>{carouselItems}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
