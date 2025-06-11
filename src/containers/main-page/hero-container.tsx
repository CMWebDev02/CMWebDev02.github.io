"use client";
import LinkBadge from "@/components/client/link-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";

export default function HeroContainer() {
  function redirectCredentials() {
    redirect("./credentials");
  }

  function redirectPortfolio() {
    redirect("./portfolio");
  }

  return (
    <Card className="container w-11/12 sm:w-5/6 lg:w-3/4">
      <CardHeader>
        <CardTitle>Hello, I am Cristiano Miranda</CardTitle>
        <CardDescription>and I am a Junior Web Developer.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row">
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
      </CardContent>
    </Card>
  );
}
