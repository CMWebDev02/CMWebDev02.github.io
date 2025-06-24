import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import type { Project } from "@/lib/types";
import ProjectCarousel from "@/components/client/project-carousel";
import { projectIcons } from "@/lib/utils";
import ProjectList from "@/components/client/project-list";

export default function PortfolioContainer() {
  const projectIconsImports = projectIcons();

  const projectsArray: Project[] = [
    {
      projectTitle: "Monthly Template Generator",
      projectImage: projectIconsImports.monthly_template_generator_icon,
      imageDescription: "A copy of a file being generated.",
      projectDescription:
        "Autofill the date onto a pdf file. The user can choose any date range, and include or exclude specific weekdays, to ease the process of creating monthly schedules or reports.",
      projectDemoLink: "https://monthly-template-generator.netlify.app/",
      projectGitHubLink: "https://github.com/CMBVT2023/monthly-template-generator"
    },
  ];

  return (
    <Card className="container w-11/12 sm:w-5/6 lg:w-3/4">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
        <CardDescription>
          Some of my personal favorite projects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectCarousel projectsArray={projectsArray} />
        <ProjectList projectsArray={projectsArray} />
      </CardContent>
    </Card>
  );
}
