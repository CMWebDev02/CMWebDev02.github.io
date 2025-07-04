import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projectsArray } from "@/lib/utils";
import ProjectCarousel from "@/components/client/project-carousel";
import ProjectList from "@/components/client/project-list";

export default function PortfolioPage() {
  return (
    <>
      <Card className="w-full lg:w-11/12 xl:w-4/5 h-full md:h-11/12 max-h-full">
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
        </CardHeader>
        <CardContent className="h-full max-h-full overflow-scroll">
          <Accordion type="single" collapsible>
            <AccordionItem value="React">
              <AccordionTrigger>React</AccordionTrigger>
              <AccordionContent>
                <ProjectCarousel projectsArray={projectsArray} />
                <ProjectList projectsArray={projectsArray} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="JavaScript">
              <AccordionTrigger>JavaScript</AccordionTrigger>
              <AccordionContent>
                <ProjectCarousel projectsArray={projectsArray} />
                <ProjectList projectsArray={projectsArray} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="HTML">
              <AccordionTrigger>HTML</AccordionTrigger>
              <AccordionContent>
                <ProjectCarousel projectsArray={projectsArray} />
                <ProjectList projectsArray={projectsArray} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="CMS">
              <AccordionTrigger>CMS</AccordionTrigger>
              <AccordionContent>
                <ProjectCarousel projectsArray={projectsArray} />
                <ProjectList projectsArray={projectsArray} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
