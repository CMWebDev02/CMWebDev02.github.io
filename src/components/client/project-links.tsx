import Link from "next/link";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

interface ProjectLinksProps {
  projectDemoLink: string | null;
  projectGitHubLink: string;
}

export default function ProjectLinks({
  projectDemoLink,
  projectGitHubLink,
}: ProjectLinksProps) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row landscape:flex-row gap-2 justify-center items-center">
      {projectDemoLink !== null && (
        <Link href={{ href: projectDemoLink }} className="h-full">
          <Button className="flex h-full gap-5">
            <span className="text-md">Demo</span>
            <FontAwesomeIcon
              size="2xl"
              transform={"grow-20"}
              icon={faLaptopCode}
            />
          </Button>
        </Link>
      )}
      <Link href={{ href: projectGitHubLink }} className="h-full">
        <Button className="flex h-full gap-5">
          <span className="text-md">Github</span>
          <FontAwesomeIcon
            size="2xl"
            transform={"grow-20"}
            icon={faGithubSquare}
          />
        </Button>
      </Link>
    </div>
  );
}
