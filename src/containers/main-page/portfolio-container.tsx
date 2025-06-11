import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

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
        <div>
          <h2>Project One</h2>
        </div>
        <div>
          <h2>Project Two</h2>
        </div>
      </CardContent>
    </Card>
  );
}
