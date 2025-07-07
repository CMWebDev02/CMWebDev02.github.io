import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projectsArray } from "@/lib/utils";
import ProjectDisplay from "@/containers/projects/project-display";

export default function PortfolioPage() {
  const AccordionItems = ["React", "JavaScript", "HTML", "CMS"].map((type) => {
    const filteredProjects = projectsArray.filter(
      (project) => project.projectType === type
    );
    return (
      <AccordionItem value={type} key={type}>
        <AccordionTrigger>{type}</AccordionTrigger>
        <AccordionContent>
          <ProjectDisplay projectsArray={filteredProjects} />
        </AccordionContent>
      </AccordionItem>
    );
  });

  return (
    <>
      <Card className="w-full lg:w-11/12 xl:w-4/5 h-full md:h-11/12 max-h-full">
        <CardHeader>
          <CardTitle className="text-md md:text-3xl">Portfolio</CardTitle>
        </CardHeader>
        <CardContent className="h-full max-h-full overflow-scroll">
          <Accordion type="single" collapsible>
            {AccordionItems}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
