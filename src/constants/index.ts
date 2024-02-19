import {
  azure,
  blazor,
  csharp,
  css,
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
} from "../assets";

const experiences = [
  {
    title: "Freelance Software Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#FFFFFF",
    date: "Nov 2023 - Present",
    points: [
      "Developed custom software solutions for diverse client needs, emphasizing modular and maintainable code.",
      "Worked closely with clients to define requirements, leading to a 100% project success rate based on client feedback.",
      "Reviewed and optimized existing codebases, enhancing application performance and maintainability for several clients.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Selltime Pty Ltd, AU",
    icon: selltime,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing and managing web application development using Asp.Net Core MVC, focusing on modular and scalable code design.",
      "Collaborating with cross-functional teams to deliver high-quality products, resulting in a 15% increase in customer satisfaction.",
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
      "Implemented responsive web design principles, achieving 95% compatibility across major browsers.",
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
    name:"Javascript",
    icon:javascript
  },
  {
    name:"Typescript",
    icon:typescript
  },
  {
    name:"React",
    icon: reactjs
  },{
    name: "Blazor",
    icon:blazor
  },
  {
    name:"Azure",
    icon:azure
  },
  {
    name:"NodeJs",
    icon:nodejs
  },
  {
    name: "SQL",
    icon:sql
  },{
    name:"Git",
    icon:git
  }
];

export { experiences, skills };
