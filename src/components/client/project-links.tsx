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
    <div className="w-full h-fit flex flex-row landscape:flex-row gap-2 justify-center items-center">
      {projectDemoLink !== null && (
        <Link href={projectDemoLink} className="h-full">
          <Button className="flex h-full gap-5">
            <span className="text-base">Demo</span>
            <FontAwesomeIcon
              size="2xl"
              transform={"grow-20"}
              icon={faLaptopCode}
            />
          </Button>
        </Link>
      )}
      <Link href={projectGitHubLink} className="h-full">
        <Button className="flex h-full gap-5">
          <span className="text-base">Github</span>
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
