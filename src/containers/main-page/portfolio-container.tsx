import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import ProjectCarousel from "@/components/client/project-carousel";
import ProjectList from "@/components/client/project-list";
import { projectsArray } from "@/lib/utils";

export default function PortfolioContainer() {

  return (
    <Card className="container w-full h-min">
      <CardHeader className="h-1/12">
        <CardTitle>
          <h2>Portfolio</h2>
          <h3>Some of my personal favorite projects.</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-11/12 w-full p-3 flex justify-center">
        <ProjectCarousel projectsArray={projectsArray} />
        <ProjectList projectsArray={projectsArray} />
      </CardContent>
    </Card>
  );
}
