import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsArray } from "@/lib/utils";
import ProjectDisplay from "@/containers/projects/project-display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortfolioPage() {
  const projectTypes = ["Electron", "React", "Node JS", "JavaScript", "HTML"];

  const ProjectTabTriggers = projectTypes.map((type) => {
    return (
      <TabsTrigger
        value={type}
        key={`${type}-trigger`}
        className="text-sm md:text-2xl w-1/5"
      >
        {type}
      </TabsTrigger>
    );
  });

  const ProjectTabContents = projectTypes.map((type) => {
    const filteredProjects = projectsArray.filter(
      (project) => project.projectType === type
    );
    return (
      <TabsContent
        value={type}
        key={`${type}-content`}
        className="w-full h-full max-h-full overflow-y-auto flex justify-center"
      >
        <ProjectDisplay projectsArray={filteredProjects} />
      </TabsContent>
    );
  });

  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-full md:h-11/12 p-0">
      <Tabs className="w-full h-full">
        <CardHeader className="h-1/6 p-1 flex flex-col gap-1">
          <CardTitle className="text-xl md:text-3xl">Portfolio</CardTitle>
          <TabsList className="flex gap-2 w-full">
            {ProjectTabTriggers}
          </TabsList>
        </CardHeader>
        <CardContent className="w-full h-5/6 max-h-5/6 p-1">
          {ProjectTabContents}
        </CardContent>
      </Tabs>
    </Card>
  );
}
