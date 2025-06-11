import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function IntroContainer() {
  return (
    <Card className="container w-11/12 sm:w-5/6 lg:w-3/4">
      <CardHeader>
        <CardTitle>Allow me to introduce myself...</CardTitle>
        <CardDescription>I am Cristiano Miranda.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          I currently pursuing a Bachelor Degree in Computer Science and in my
          free time I work on personal and volunteer projects. I have well over
          2 years of experience with HTML, CSS, and JavaScript. Along with
          almost 1 year of experience with React. As of now, I am currently
          working with NextJs and NodeJs and so that I continue working towards
          a career as a fullstack engineer.
        </p>
      </CardContent>
    </Card>
  );
}
