import ProjectCard from "@/components/client/project-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import MonthlyTemplateGeneratorImage from "../../../public/assets/project-icons/Monthly-Template-Generator.svg";

export default function PortfolioContainer() {
  return (
    <Card className="container w-11/12 sm:w-5/6 lg:w-3/4">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
        <CardDescription>
          Some of my personal favorite projects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectCard projectTitle="Monthly Template Generator" projectImage={MonthlyTemplateGeneratorImage} imageDescription="A copy of a file being generated." isLeftAligned={true} >
          Autofill the date onto a pdf file. The user can choose any date range, and include or exclude specific weekdays, to ease the process of creating monthly schedules or reports.
        </ProjectCard>
        
      </CardContent>
    </Card>
  );
}
