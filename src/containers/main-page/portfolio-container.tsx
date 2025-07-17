import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { examplesProjectArray } from "@/lib/utils";
import Link from "next/link";
import ProjectDisplay from "../projects/project-display";

export default function PortfolioContainer() {
  return (
    <Card className="container w-full h-full">
      <CardHeader className="h-1/12">
        <CardTitle className="text-base md:text-3xl">
          Portfolio Project Highlights
        </CardTitle>
      </CardHeader>
      <CardContent className="h-10/12 w-full p-3 flex justify-center">
        <ProjectDisplay projectsArray={examplesProjectArray} />
      </CardContent>
      <CardFooter className="w-full h-1/12 flex justify-center">
        <Link href={"./portfolio"}>
          <Button className="text-2xl">View More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
