import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsArray } from "@/lib/utils";
import ProjectDisplay from "@/containers/projects/project-display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortfolioPage() {
  const projectTypes = ["Electron", "React", "Node JS", "JavaScript", "HTML"];

  const ProjectTabTriggers = projectTypes.map((type) => {
    return (
      <TabsTrigger value={type} key={`${type}-trigger`}>
        {type}
      </TabsTrigger>
    );
  });

  const ProjectTabContents = projectTypes.map((type) => {
    const filteredProjects = projectsArray.filter(
      (project) => project.projectType === type
    );
    return (
      <TabsContent value={type} key={`${type}-content`} className="w-full">
        <ProjectDisplay projectsArray={filteredProjects} />
      </TabsContent>
    );
  });

  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-full md:h-11/12 max-h-full md:max-h-11/12 overflow-scroll p-0">
      <CardHeader className="h-1/12 p-1">
        <CardTitle className="text-md md:text-3xl">Portfolio</CardTitle>
      </CardHeader>
      <CardContent className="h-11/12 max-h-11/12 overflow-y-auto w-full p-0">
        <Tabs>
          <TabsList>{ProjectTabTriggers}</TabsList>
          {ProjectTabContents}
        </Tabs>
      </CardContent>
    </Card>
  );
}
