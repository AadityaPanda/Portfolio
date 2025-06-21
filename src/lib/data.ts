export const SKILLS_DATA = {
  "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
  "Frameworks": ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Vue.js"],
  "Databases": ["PostgreSQL", "MongoDB", "Firebase", "Redis", "MySQL"],
  "Tools": ["Docker", "Git & GitHub", "Webpack", "Figma", "Jenkins", "Kubernetes", "Nginx"],
};

export const EXPERIENCE_DATA = [
  {
    company: "BitChief Technology Services Pvt Ltd",
    role: "Software Developer",
    period: "November 2023 - Present",
    responsibilities: [
      "Developed a comprehensive internal documentation portal from scratch using React, Node.js, and Express, enhancing accessibility of critical information.",
      "Engineered a Privileged Access Management (PAM) solution, a clone of Apache Guacamole, with a custom UI and significantly improved role-based permissions.",
      "Innovated beyond the core Guacamole feature set by designing and implementing a time-based access policy system for enhanced security.",
      "Spearheaded the deployment of applications on production and demo environments using Nginx, taking full ownership of the project lifecycle.",
      "Currently re-architecting the PAM application from the ground up to enable more granular control and custom features.",
    ],
  },
];

export const PROJECTS_DATA = [
  {
    title: "Internal Documentation Portal",
    description: "A comprehensive portal built from scratch to house all internal IDAM documentation and manage organization-specific license details. Features include a responsive sidebar, auto-scrolling content navigation, and a scroll-to-top utility.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Nginx"],
  },
  {
    title: "Privileged Access Management (PAM)",
    description: "A custom-built clone of Apache Guacamole with a branded UI. Key features include robust permission handling and an innovative time-based access policy system for connections, a feature not present in the original software. Currently being rebuilt from scratch for greater control.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Nginx"],
  },
];
