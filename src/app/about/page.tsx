import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-fit max-h-full">
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent className="h-full max-h-full overflow-scroll">
        <h2>
          Hello, my name is Cristiano Miranda and I am currently a junior Web
          Developer.
        </h2>
        <p>
          As of now, I am attending Southern New Hampshire University in pursuit
          of a Bachelor degree in Computer science. Previously, I have completed
          two associate degrees at MJC, one in Computer Electronics and one in
          Computer Science - Programming and have attended a coding boot camp
          that helped me become proficient in web development. I have almost
          four year of experience in programming, and have learned various
          languages like Python, C++, and Visual Basic, with my main focus
          currently being HTML and JavaScript. I am coming up on almost two of
          experience in web development and plan to continue pursuing for a
          career as my ultimate goal is to eventually work my way up to becoming
          a fullstack engineer. Feel free to browse this site to see my
          portfolio and the certifications I have acquired. Thank you for
          visiting my site and if wish to contact me, visit my contact page to
          find the best way to reach me.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start"></CardFooter>
    </Card>
  );
}
