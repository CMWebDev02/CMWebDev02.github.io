"use client";
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
        {/* Break into component */}
        <div className="flex flex-row group cursor-pointer select-none" onClick={redirectCredentials}>
          <h3 className="text-4xl transition-[color] duration-1000 ease-in-out group-hover:text-blue-600">2+</h3>
          <span className="text-xs transition-[color] duration-1000 ease-in-out group-hover:text-green-500">
            Years of Web
            <br /> Development
            <br /> Experience
          </span>
        </div>

        <div className="flex flex-row" onClick={redirectPortfolio}>
          <h3 className="text-4xl">20+</h3>
          <span className="text-xs">
            Web
            <br />
            Projects
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
