"use client";
import LinkBadge from "@/components/client/link-badge";
import {
  Card,
  CardContent,
  CardDescription,
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
    <Card className="container w-full h-full p-1">
      <CardHeader className="w-full h-auto flex flex-col col-span-1">
        <CardTitle className="text-md md:text-3xl">
          <span className="text-2xl md:text-5xl">Hello</span>, I am Cristiano
          Miranda and I am a Junior Web Developer.
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row-reverse h-auto gap-2">
        <Image
          src={"/assets/Personal Photo.jpg"}
          alt="Personal Photo"
          width={918}
          height={1212}
          className="
          object-contain
          max-h-96
          md:w-1/2
          lg:w-1/3
          "
        ></Image>
        <div className="flex w-full md:w-1/2 lg:w-2/3 flex-col md:flex-col-reverse md:justify-around gap-5">
          <div className="flex items-center flex-row justify-center gap-5">
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
          <CardDescription>
            <h2 className="text-lg md:text-2xl font-medium md:font-bold">
              Allow me to introduce myself...
            </h2>
            <p className="text-md md:text-lg">
              I currently pursuing a Bachelor Degree in Computer Science and in
              my free time I work on personal and volunteer projects. I have
              well over 2 years of experience with HTML, CSS, and JavaScript.
              Along with almost 1 year of experience with React. As of now, I am
              currently working with NextJs and NodeJs and so that I continue
              working towards a career as a fullstack engineer.
            </p>
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
