import {
  azure,
  backendDev,
  blazor,
  csharp,
  css,
  desktopDev,
  ezzybooks,
  git,
  html,
  javascript,
  netcore,
  nodejs,
  reactjs,
  selltime,
  sql,
  typescript,
  upwork,
  weatherApp,
  webDev,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const services = [
  {
    title: "Web <br /> Development",
    icon: webDev,
  },
  {
    title: "Desktop <br /> Development",
    icon: desktopDev,
  },
  {
    title: "Back-end <br /> Services",
    icon: backendDev,
  },
];

const experiences = [
  {
    title: "Freelance Software Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#FFFFFF",
    date: "Nov 2023 - Present",
    points: [
      "Developed custom software solutions for diverse client needs, emphasizing modular and maintainable code.",
      "Worked closely with clients to define requirements.",
      "Reviewed and optimized existing codebases, enhancing application performance and maintainability for several clients.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Selltime Pty Ltd, AU",
    icon: selltime,
    iconBg: "#383E56",
    date: "July 2023 - July 2024",
    points: [
      "Developing and managing web application development using Asp.Net Core MVC, focusing on modular and scalable code design.",
      "Collaborating with cross-functional teams to deliver high-quality products.",
      "Led a team initiative to standardize responsive design practices, improving consistency across projects.",
    ],
  },
  {
    title: "Desktop App Developer",
    company_name: "CompWeb Systems Ltd, KE",
    icon: ezzybooks,
    iconBg: "#E6DEDD",
    date: "September 2022 - June 2023",
    points: [
      "Developed and maintained desktop applications using the .NET Framework and SQL.",
      "Integrated applications with third-party APIs, enhancing functionality and user options.",
      "Wrote and maintained hardware integration modules.",
      "Provided technical support and expertise to customer support teams.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Selltime Pty Ltd, AU",
    icon: selltime,
    iconBg: "#383E56",
    date: "June 2021 - July 2022",
    points: [
      "Led the development of a dynamic web rendering system using Blazor and .NET Core, enhancing user experience and system efficiency.",
      "Implemented responsive web design principles",
      "Actively contributed to code reviews, focusing on improving code quality and maintainability.",
    ],
  },
];

const skills = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET Core",
    icon: netcore,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Blazor",
    icon: blazor,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "NodeJs",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "This intuitive weather app provides real-time weather updates tailored to the user's current location, ensuring up-to-date information at a glance. Additionally, it offers the flexibility to retrieve weather forecasts for any searched location, delivering a personalized and comprehensive meteorological experience.",
    tags: [
      {
        name: "react",
        color: "#61DAFB",
      },
      {
        name: "rapid api",
        color: "#00FF00",
      },
      {
        name: "scss",
        color: "#C6538C",
      },
    ],
    image: weatherApp,
    codeLink: "https://github.com/BrianKiarieMwaniki/weatherapp",
    siteLink: "https://weatherapp-ruby-eight.vercel.app/",
    published: true,
  },
];

export { experiences, navLinks, projects, services, skills };
