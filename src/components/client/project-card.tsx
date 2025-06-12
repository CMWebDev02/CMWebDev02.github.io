import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ProjectCardProps {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    imageDescription: string;
    isLeftAligned: boolean;
}

export default function ProjectCard({projectTitle, projectDescription, projectImage, imageDescription, isLeftAligned}: ProjectCardProps) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{projectTitle}</CardTitle>
            </CardHeader>
            <CardContent className={`${isLeftAligned ? "flex-row" : "flex-row-reverse"}`}>
                <Image src={projectImage} alt={imageDescription} />
                {projectDescription}
            </CardContent>
        </Card>
    )
}