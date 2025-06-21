export const ABOUT_ME_TEXT = "A passionate and driven Software Developer with over six months of hands-on experience at BitChief Technology Services Pvt Ltd. I specialize in building robust, full-stack web applications from the ground up using Node.js, Express, and React with MySQL. I excel at architecting custom solutions, enhancing existing software with innovative features, and managing the full project lifecycle from development to deployment on production servers using Nginx. I'm dedicated to writing clean, efficient code and thrive in collaborative environments where I can learn and contribute to cutting-edge projects.";

export const SKILLS_DATA = {
  "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
  "Frameworks": ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  "Tools": ["Docker", "Git & GitHub", "Nginx", "Figma", "Jenkins"],
};

export const EXPERIENCE_DATA = [
  {
    company: "BitChief Technology Services Pvt Ltd",
    role: "Software Developer",
    period: "Nov 2023 - Present",
    responsibilities: [
      "Led the ground-up development of a full-stack internal documentation portal, improving information accessibility and license management.",
      "Engineered a custom Privileged Access Management (PAM) solution, enhancing Apache Guacamole with a branded UI and superior, granular permission controls.",
      "Innovated a time-based access policy system for the PAM tool, a feature not available in the original software, which was successfully deployed to production.",
      "Managed the full lifecycle of projects, including deployment and configuration on production and demo environments using Nginx.",
      "Currently re-architecting the PAM application from scratch to achieve deeper integration and more granular system control.",
    ],
  },
];

export const PROJECTS_DATA = [
  {
    title: "Internal Documentation Portal",
    description: "Built from scratch, this portal centralizes all IDAM documentation and manages organization-specific licenses. It features a dynamic UI with an auto-resizing sidebar, content-aware scrolling, and other UX enhancements. I have taken full ownership from development to production deployment.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Nginx"],
  },
  {
    title: "Privileged Access Management (PAM)",
    description: "A custom-built, branded version of Apache Guacamole. I implemented all core features with a focus on a robust, fine-grained permission system. Deployed on both local demo and client-facing production servers. I also designed and added a unique time-based access policy feature for enhanced security.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Nginx"],
  },
];
