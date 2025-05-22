import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { PageLink } from "@/lib/types";

interface CardContainerProps {
    title: string;
    description: string;
    links: PageLink[];
    children: React.ReactNode;
}

export default function CardContainer({title, description, links, children}: CardContainerProps) {
    const pageLinks = links.map(({linkName, href}) => <Link key={`${linkName}-link`} href={href}>{linkName}</Link>);

    return (
        <Card className="container w-11/12 sm:w-5/6 lg:w-3/4">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                {pageLinks}
            </CardFooter>
        </Card>
    )
}