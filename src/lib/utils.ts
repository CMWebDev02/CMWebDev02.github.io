import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import monthly_template_generator_icon from "../../public/assets/project-icons/monthly-template-generator-icon.svg";
import recipe_book_icon from "../../public/assets/project-icons/recipe-book-meal-planner-icon.svg";
import chess_ai_icon from "../../public/assets/project-icons/chess-ai-icon.svg";
import employee_business_card_icon from "../../public/assets/project-icons/employee-business-card-icon.svg";
import rpg_adventure_game_icon from "../../public/assets/project-icons/rpg-adventure-game-icon.svg";
import todo_application_icon from "../../public/assets/project-icons/todo-application-icon.svg";
import login_ui_icon from "../../public/assets/project-icons/login-ui-icon.svg";
import email_interface_icon from "../../public/assets/project-icons/email-interface-icon.svg";
import cookie_crumb_clicker_icon from "../../public/assets/project-icons/cookie-crumb-clicker-icon.svg";
import pdf_splitter_icon from "../../public/assets/project-icons/pdf-splitter-icon.svg";
import invoice_organizer_icon from "../../public/assets/project-icons/invoice-organizer.svg";
import financial_tracker_icon from "../../public/assets/project-icons/financial-tracker-icon.svg";
import doffy_project_icon from "../../public/assets/project-icons/doffy-project-icon.png";
import type { Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const projectIcons = {
  monthly_template_generator_icon,
  recipe_book_icon,
  chess_ai_icon,
  employee_business_card_icon,
  rpg_adventure_game_icon,
  todo_application_icon,
  login_ui_icon,
  email_interface_icon,
  cookie_crumb_clicker_icon,
  pdf_splitter_icon,
  invoice_organizer_icon,
  financial_tracker_icon,
  doffy_project_icon
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
      isExampleProject: true
  },
  {
    projectTitle: "Doffy Project",
    projectType: "React",
    projectImage: projectIcons.doffy_project_icon,
    imageDescription: "A light bulb containing the various continents of the world.",
    projectDescription:
      "A NextJS web page that scraped all job postings from various sites like Zip Recruiter, Monster, Dice, and Indeed. In addition, the site also allowed users to store various job postings and their resumes to share with one another. For this project, in terms of the back end, I was responsible for constructing the WebScraping API and setting up the scraping for all the job site, along with initializing the database to store all the scraped jobs. For the front end, I was responsible for creating the Saved Jobs and the Profile page, along with constructing the resume uploading form.",
    projectDemoLink: "https://doffy-delta.vercel.app/",
    projectGitHubLink:
      "https://github.com/Bay-Valley-Tech-Code-Academy/doffy",
      isExampleProject: true
  },
  {
    projectTitle: "PDF Splitter",
    projectType: "Electron",
    projectImage: projectIcons.pdf_splitter_icon,
    imageDescription: "A file with the word PDF in the bottom right corner.",
    projectDescription:
      "Convert any PDF document into separate files. The user can select any amount of pages from the original file split them into a new PDF file. The app features the ability to save the new PDF files in any location on the user's computer as well. This app is developed using electron and can be run on various operating system like Windows, MacOS, and various Linux distributions. ",
    projectDemoLink: null,
    projectGitHubLink: "https://github.com/CMWebDev02/pdf-splitter",
    isExampleProject: true
  },
  {
    projectTitle: "Recipe Book and Meal Planner Project",
    projectType: "React",
    projectImage: projectIcons.recipe_book_icon,
    imageDescription: "A carrot.",
    projectDescription:
      "Search through a plethora of recipes and save them to a recipe book. The project also includes meal planning and generates the nutritional information for any saved recipe.",
    projectDemoLink: "https://recipe-book-and-meal-planner.netlify.app/",
    projectGitHubLink: "https://github.com/CMWebDev02/recipe-book-miranda",
    isExampleProject: false
  },
  {
    projectTitle: "Invoice Organizer Font End",
    projectType: "React",
    projectImage: projectIcons.invoice_organizer_icon,
    imageDescription: "A file icon.",
    projectDescription:
      "Receive PDF invoices and sort them into their appropriate directories, and allows the quick creation of directories while sorting through the files. The application also features a user system via a user login and user creator. This front end application is intended to be utilized with the invoice sorter back end api.",
    projectDemoLink: null,
    projectGitHubLink:
      "https://github.com/CMWebDev02/invoice-organizer-miranda",
      isExampleProject: false
  },
  {
    projectTitle: "Invoice Sorter Back End",
    projectType: "Node JS",
    projectImage: projectIcons.invoice_organizer_icon,
    imageDescription: "A file icon.",
    projectDescription:
      "An API that access a file system to move files based on the actions received from the front end. The API creates various directories to store PDF invoices by the year they are generated and the name they are associated with.The API also stores and receives the user login and creation via a database. This back end application is intended to be utilized with the invoice organizer front end.",
    projectDemoLink: null,
    projectGitHubLink: "https://github.com/CMWebDev02/invoice-sorter-api",
    isExampleProject: false
  },
  {
    projectTitle: "Financial Tracker Font End",
    projectType: "React",
    projectImage: projectIcons.financial_tracker_icon,
    imageDescription: "A file with lines of text.",
    projectDescription:
      "Tracker all financial purchases or income for a person. The application features a user system so that multiple people can enter their finances and sync it across any device. This front end application is intended to be utilized with the Financial Tracker Back End api.",
    projectDemoLink: null,
    projectGitHubLink:
      "https://github.com/CMWebDev02/financial-tracker-front-end",
      isExampleProject: false
  },
  {
    projectTitle: "Financial Tracker Back End",
    projectType: "Node JS",
    projectImage: projectIcons.financial_tracker_icon,
    imageDescription: "A file with lines of text.",
    projectDescription:
      "An API that accesses various databases to store user information and their associated financial information. The API is responsible for validating a user before sending back their financial information, and for filtering the information based on the request from the front end. This back end application is intended to be utilized with the Financial Tracker front end.",
    projectDemoLink: null,
    projectGitHubLink: "https://github.com/CMWebDev02/financial-tracker-api",
    isExampleProject: false
  },
  {
    projectTitle: "Chess Ai Project",
    projectType: "JavaScript",
    projectImage: projectIcons.chess_ai_icon,
    imageDescription: "A copy of a file being generated.",
    projectDescription:
      "Play against an ai opponent in a game of chess, and choose between different chess algorithms for the opponent to utilize. Alternatively, watch two ai opponents battle against each other using different chess algorithms.",
    projectDemoLink: "https://chess-ai-project-miranda.netlify.app/",
    projectGitHubLink: "https://github.com/CMWebDev02/chess-ai-project-miranda",
    isExampleProject: true
  },
  {
    projectTitle: "Employee Business Card Generator",
    projectType: "JavaScript",
    projectImage: projectIcons.employee_business_card_icon,
    imageDescription: "A card containing an avatar and lines of text.",
    projectDescription:
      "Create business cards for employees within your business. Supports saving multiple businesses and their various employees.",
    projectDemoLink:
      "https://employee-business-cards-project-miran.netlify.app/",
    projectGitHubLink:
      "https://github.com/CMWebDev02/employee-business-cards-project-miranda",
      isExampleProject: false
  },
  {
    projectTitle: "Cookie Crumb Clicker",
    projectType: "JavaScript",
    projectImage: projectIcons.cookie_crumb_clicker_icon,
    imageDescription: "A cookie with a bite taken out of it.",
    projectDescription:
      "A Cookie Clicker Clone with the goal of collecting a certain amount of cookies. The contains dynamic events that randomly occur and powerups that alter the game play. A user system is implemented to allow different users to compete on the same device and compare their score with others.",
    projectDemoLink: "https://cookie-crumb-clicker.netlify.app/",
    projectGitHubLink:
      "https://github.com/CMWebDev02/module-2-js-final-project-cristiano-miranda/settings",
      isExampleProject: false
  },
  {
    projectTitle: "RPG Adventure Game",
    projectType: "JavaScript",
    projectImage: projectIcons.rpg_adventure_game_icon,
    imageDescription: "A magical wand with sparkles coming off of it.",
    projectDescription:
      "An adventure games that takes place in a strip mall. Fight your way through the arcade or laser tag arena, sell your treasures to the various stores in the mall and work your way to fighting the final boss.",
    projectDemoLink: "https://rpg-miranda.netlify.app/",
    projectGitHubLink:
      "https://github.com/CMWebDev02/role-playing-game-miranda",
      isExampleProject: false
  },
  {
    projectTitle: "Todo Application",
    projectType: "JavaScript",
    projectImage: projectIcons.login_ui_icon,
    imageDescription: "An avatar next to a check.",
    projectDescription:
      "An application to store and keep track of your various tasks.",
    projectDemoLink: "https://todo-app-miranda.netlify.app/",
    projectGitHubLink: "https://github.com/CMWebDev02/todo-app-miranda",
    isExampleProject: true
  },
  {
    projectTitle: "Email Interface",
    projectType: "HTML",
    projectImage: projectIcons.email_interface_icon,
    imageDescription: "An envelope.",
    projectDescription: "A response email interface with interactive features.",
    projectDemoLink: "https://bootstrap-email-refresh.netlify.app/",
    projectGitHubLink:
      "https://github.com/CMWebDev02/bootstrap-email-refresh-miranda",
      isExampleProject: true
  },
  {
    projectTitle: "Login UI Application",
    projectType: "HTML",
    projectImage: projectIcons.todo_application_icon,
    imageDescription:
      "A list of todo items with some checked off as completed.",
    projectDescription: "A response login interface with interactive features.",
    projectDemoLink: "https://login-ui-miranda.netlify.app/",
    projectGitHubLink:
      "https://github.com/CMWebDev02/cristiano-miranda-login-ui-project",
      isExampleProject: false
  },
];

export const examplesProjectArray = projectsArray.filter((project) => project.isExampleProject);
