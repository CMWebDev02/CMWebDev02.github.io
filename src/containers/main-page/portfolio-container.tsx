import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import ProjectCarousel from "@/components/client/project-carousel";
import ProjectList from "@/components/client/project-list";
import { Button } from "@/components/ui/button";
import { projectsArray } from "@/lib/utils";
import Link from "next/link";

export default function PortfolioContainer() {
  return (
    <Card className="container w-full h-min bg-secondary-background">
      <CardHeader className="h-1/12">
        <CardTitle className="">Portfolio Project Highlights</CardTitle>
      </CardHeader>
      <CardContent className="h-11/12 w-full p-3 flex justify-center">
        <ProjectCarousel projectsArray={projectsArray} />
        <ProjectList projectsArray={projectsArray} />
      </CardContent>
      <CardFooter className="w-full flex justify-center">
        <Link href={"./portfolio"}>
          <Button className="text-2xl">View More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
