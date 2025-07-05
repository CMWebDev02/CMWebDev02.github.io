import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-fit max-h-full">
      <CardHeader>
        <CardTitle>Contact</CardTitle>
      </CardHeader>
      <CardContent className="h-full max-h-full overflow-scroll">
        <p>
          If you wish to get into contact with me, the best way would be to
          reach out to me via email or by reaching out to me on linkedIn. Feel
          free to contact me with any questions about my projects, about this
          website, or web development in general.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h2>My Contacts</h2>
        <ul>
          <li>
            Email: <span className="select-all">CMWebDev02@gmail.com</span>
          </li>
          <li>
            LinkedIn:{" "}
            <Link
              href={"https://www.linkedin.com/in/cristiano-miranda-8b30b829a/"}
            >
              Cristiano Miranda
            </Link>
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
