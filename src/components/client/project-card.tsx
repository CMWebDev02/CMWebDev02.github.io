import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";

interface ProjectCardProps {
    projectTitle: string;
    projectImage: string;
    imageDescription: string;
    isLeftAligned: boolean;
    children: ReactNode;
}

export default function ProjectCard({projectTitle, projectImage, imageDescription, isLeftAligned, children}: ProjectCardProps) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{projectTitle}</CardTitle>
            </CardHeader>
            <CardContent className={`${isLeftAligned ? "flex-row" : "flex-row-reverse"}`}>
                <Image src={projectImage} alt={imageDescription} width={400} height={400} />
                <p>
                    {children}
                </p>
            </CardContent>
        </Card>
    )
}