import ProjectCard from "@/components/client/project-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import MonthlyTemplateGeneratorImage from "../../../public/assets/project-icons/Monthly-Template-Generator.svg";
import type { Project } from "@/lib/types";

export default function PortfolioContainer() {
  const projectsArray: Project[] = [
    {
      projectTitle: "Monthly Template Generator",
      projectImage: MonthlyTemplateGeneratorImage,
      imageDescription: "A copy of a file being generated.",
      projectDescription:
        "Autofill the date onto a pdf file. The user can choose any date range, and include or exclude specific weekdays, to ease the process of creating monthly schedules or reports.",
    },
  ];

  const ProjectCards = () => {
    return projectsArray.map((projectObj, index) => {
      return (
        <ProjectCard
          key={`${projectObj.projectTitle} + ${index}`}
          projectTitle={projectObj.projectTitle}
          projectImage={projectObj.projectImage}
          imageDescription={projectObj.imageDescription}
          isImageLeftAligned={index % 2 == 0 || index == 0}
        >
          {projectObj.projectDescription}
        </ProjectCard>
      );
    });
  };

  return (
    <Card className="container w-11/12 sm:w-5/6 lg:w-3/4">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
        <CardDescription>
          Some of my personal favorite projects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectCards />
      </CardContent>
    </Card>
  );
}
