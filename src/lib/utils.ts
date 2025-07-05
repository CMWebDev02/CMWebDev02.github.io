import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import monthly_template_generator_icon from "../../public/assets/project-icons/monthly-template-generator-icon.svg";
import type { Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const projectIcons = {
  monthly_template_generator_icon,
};

export const projectsArray: Project[] = [
  {
    projectTitle: "Monthly Template Generator",
    projectType: "React",
    projectImage: projectIcons.monthly_template_generator_icon,
    imageDescription: "A copy of a file being generated.",
    projectDescription:
      "Autofill the date onto a pdf file. The user can choose any date range, and include or exclude specific weekdays, to ease the process of creating monthly schedules or reports.",
    projectDemoLink: "https://monthly-template-generator.netlify.app/",
    projectGitHubLink:
      "https://github.com/CMBVT2023/monthly-template-generator",
  },
  {
    projectTitle: "Monthly Template Generator",
    projectType: "React",
    projectImage: projectIcons.monthly_template_generator_icon,
    imageDescription: "A copy of a file being generated.",
    projectDescription:
      "Autofill the date onto a pdf file. The user can choose any date range, and include or exclude specific weekdays, to ease the process of creating monthly schedules or reports.",
    projectDemoLink: "https://monthly-template-generator.netlify.app/",
    projectGitHubLink:
      "https://github.com/CMBVT2023/monthly-template-generator",
  },
  {
    projectTitle: "Monthly Template Generator",
    projectType: "React",
    projectImage: projectIcons.monthly_template_generator_icon,
    imageDescription: "A copy of a file being generated.",
    projectDescription:
      "Autofill the date onto a pdf file. The user can choose any date range, and include or exclude specific weekdays, to ease the process of creating monthly schedules or reports.",
    projectDemoLink: "https://monthly-template-generator.netlify.app/",
    projectGitHubLink:
      "https://github.com/CMBVT2023/monthly-template-generator",
  },
];
