"use client";
import LinkBadge from "@/components/client/link-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function HeroContainer() {
  function redirectCredentials() {
    redirect("./credentials");
  }

  function redirectPortfolio() {
    redirect("./portfolio");
  }

  return (
    <Card className="container w-11/12 sm:w-5/6 lg:w-3/4 flex-row flex-wrap justify-between p-2">
      <CardHeader className="w-1/3 md:w-1/4 p-0 md:order-1">
        <Image
          src={"/assets/Personal Photo.jpg"}
          alt="Personal Photo"
          width={918}
          height={1212}
          className="aspect-auto"
        ></Image>
      </CardHeader>
      <CardContent className="flex flex-col justify-around w-1/2 md:w-2/3 p-0">
        <div>
          <CardTitle>Hello, I am Cristiano Miranda</CardTitle>
          <CardDescription>and I am a Junior Web Developer.</CardDescription>
        </div>

        <div className="hidden md:block">
          <h2>Allow me to introduce myself...</h2>
          <p>
            I currently pursuing a Bachelor Degree in Computer Science and in my
            free time I work on personal and volunteer projects. I have well
            over 2 years of experience with HTML, CSS, and JavaScript. Along
            with almost 1 year of experience with React. As of now, I am
            currently working with NextJs and NodeJs and so that I continue
            working towards a career as a fullstack engineer.
          </p>
        </div>

        <div className="flex items-center flex-row md:justify-center gap-5">
          <LinkBadge redirectFunction={redirectCredentials} linkText="2+">
            Years of Web
            <br /> Development
            <br /> Experience
          </LinkBadge>
          <LinkBadge redirectFunction={redirectPortfolio} linkText="20+">
            Web
            <br />
            Projects
          </LinkBadge>
        </div>
      </CardContent>
      <CardContent className="w-full flex flex-col md:hidden">
        <h2>Allow me to introduce myself...</h2>
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
