import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { projectsArray } from "@/lib/utils";
import ProjectCarousel from "@/components/client/project-carousel";
import ProjectList from "@/components/client/project-list";

export default function PortfolioPage() {
    
    return (
        <>
            <Card className="w-full h-fit">
                <CardHeader>
                    <CardTitle>Portfolio Page</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible>
                        <AccordionItem  value="React">
                            <AccordionTrigger>React</AccordionTrigger>
                            <AccordionContent>
                                <ProjectCarousel projectsArray={projectsArray} />
                                <ProjectList projectsArray={projectsArray} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem  value="JavaScript">
                            <AccordionTrigger>JavaScript</AccordionTrigger>
                            <AccordionContent>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem  value="HTML">
                            <AccordionTrigger>HTML</AccordionTrigger>
                            <AccordionContent>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem  value="CMS">
                            <AccordionTrigger>CMS</AccordionTrigger>
                            <AccordionContent>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </>
    )
}