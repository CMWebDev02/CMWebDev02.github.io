import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const SNHULink =
    "https://degrees.snhu.edu/?utm_campaign=PFBranded&pfsegment=BR&utm_source=google&utm_medium=pdsearch&utm_content=619164999348&snhu_segment=ol&adkeyword=southern%20new%20hampshire%20university&admatchtype=e&addevice=c&adnetwork=g&adcampaignid=314118801&adcampaignname=G:Brand_General:US&adgroupid=24994550241&adgroupname=Southern-New-Hampshire-University-ONLY-EXACT-BRAND-GENERAL:US&adlocationid=9032282&adplacement=&venpubid=ppcbrand&gclsrc=aw.ds&gad_source=1&gad_campaignid=314118801";
  const MJCLink = "https://www.mjc.edu/";
  const BVTLink = "https://www.bayvalleytech.com/";
  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-fit">
      <CardHeader>
        <CardTitle className="text-xl md:text-3xl">About</CardTitle>
        <CardDescription className="text-base md:text-xl">
          Hello, my name is Cristiano Miranda and I am currently a Junior Web
          Developer.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full flex flex-col md:flex-row-reverse gap-5">
        <Image
          src={"/assets/Personal Photo.jpg"}
          alt="Personal Photo"
          width={918}
          height={1212}
          className="
                object-contain
                max-h-96
                md:w-1/3
                "
        />
        <p className="w-full md:w-2/3">
          As of now, I am attending{" "}
          <Link href={SNHULink}>Southern New Hampshire University</Link> in
          pursuit of a Bachelor degree in Computer science. Previously, I have
          completed two associate degrees at <Link href={MJCLink}>MJC</Link>,
          one in Computer Electronics and one in Computer Science - Programming
          and have attended a coding boot camp,{" "}
          <Link href={BVTLink}>Bay Valley Tech</Link>, that helped me become
          proficient in web development. I have almost four year of experience
          in programming, and have learned various languages like Python, C++,
          and Visual Basic, with my main focus currently being HTML and
          JavaScript. I am coming up on almost two of experience in web
          development and plan to continue pursuing for a career as my ultimate
          goal is to eventually work my way up to becoming a fullstack engineer.
          Feel free to browse this site to see my{" "}
          <Link href={"/portfolio"}>portfolio</Link> and the
          <Link href={"/credentials"}>certifications</Link> I have acquired.
          Thank you for visiting my site and if wish to contact me, visit my
          <Link href={"/contact"}>contact</Link> page to find the best way to
          reach me.
        </p>
      </CardContent>
    </Card>
  );
}
