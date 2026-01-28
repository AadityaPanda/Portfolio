
export const CV_PATH = "/media/AadityaPanda_CV.pdf";

export const ABOUT_ME_TEXT = "As a dedicated and passionate full-stack software developer, I specialize in architecting and building robust, elegant web applications from the ground up. My expertise lies in transforming complex problems into seamless and intuitive digital experiences. With a strong foundation in both front-end and back-end technologies, I am adept at managing the entire project lifecycle, from conceptualization and design to deployment and maintenance. I thrive in collaborative environments, continuously seeking to innovate and contribute to projects that push the boundaries of technology.";

export const SKILLS_DATA = {
  "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL", "C++"],
  "Frameworks & Libraries": ["React", "Next.js", "Express.js", "Tailwind CSS"],
  "Platforms & Tools": ["Node.js", "Git", "Firebase", "Nginx", "REST APIs"],
  "Hardware & IoT": ["Arduino IDE", "Arduino Uno", "ESP32"],
};

export const EXPERIENCE_DATA = [
  {
    company: "Bitchief Technology Services Pvt Ltd",
    role: "Software Developer",
    period: "Nov 2024 - Present",
    logo: "/media/bitchief-logo.png",
    responsibilities: [
      "Owned the end-to-end development of multiple production applications, including a client-facing documentation portal, an internal CMS, and a customer support platform.",
      "Served as the primary developer for a new enterprise-grade Privileged Access Management (PAM) product, architecting the frontend and building core features.",
      "Designed and implemented scalable UI architecture for security-sensitive workflows, including role-based access control and secure UI flows.",
      "Managed the full project lifecycle for internal tools, including deployment and Nginx configuration.",
      "Currently responsible for ongoing maintenance, feature enhancements, and production stability across multiple applications."
    ],
  },
  {
    company: "Qmansys Infosolutions",
    role: "Internet of Things Intern",
    period: "Apr 2022 - Jul 2023",
    logo: "/media/qmansys-logo.png",
    responsibilities: [
      "Developed and tested firmware for ESP32 microcontrollers in various IoT solutions.",
      "Collaborated on testing and deploying end-to-end IoT solutions for client applications.",
      "Gained hands-on experience with embedded systems and real-time data processing.",
      "Acquired foundational knowledge in IoT, including Arduino and Raspberry Pi platforms.",
      "Demonstrated practical skills by building and programming numerous Arduino-based projects.",
      "Achieved certification in \"Internet Of Things (Expert Level)\", demonstrating comprehensive competency."
    ],
  },
];

export const EDUCATION_DATA = [
    {
        school: "Raj Kumar Goel Institute of Technology, Ghaziabad",
        degree: "Bachelor of Technology - BTech, Computer Science and Engineering (Internet of Things)",
        period: "Mar 2020 - Jul 2024",
        details: [
            "Activities: Line Following Robot Competition, Pushpak - The Drone Competition, GD Competition by Image Boosters.",
            "Society: IOTuino Club (Member).",
            "Successfully completed a rigorous curriculum, gaining a comprehensive understanding of computer programming, software development, and network administration.",
            "Collaborated with a team of students to design and develop projects, showcasing strong problem-solving skills.",
            "Actively participated in industry-related workshops and seminars to stay updated with the latest trends."
        ]
    },
    {
        school: "Seth Anandram Jaipuria School Vasundhara, Ghaziabad",
        degree: "Intermediate, Science",
        period: "Mar 2019 - Feb 2020",
        details: [
            "Society: Cyber Crew.",
            "Activities: Sports (Football, Badminton, Volleyball).",
            "Completed a rigorous curriculum that included advanced coursework in mathematics, science, and literature.",
            "Developed excellent written and oral communication skills through presentations, essays, and research projects.",
            "Engaged in extracurricular activities, successfully organizing events and leading initiatives."
        ]
    }
];

export const PROFESSIONAL_PROJECTS_DATA = [
  {
    title: "PAM (Privileged Access Management)",
    overview: "An enterprise-grade Privileged Access Management (PAM) application designed to securely manage and monitor privileged access to critical systems and servers.",
    role: "Primary developer with ownership of the majority of the application, including frontend architecture, core features, and long-term maintenance. The server connection layer and connection group functionality were implemented separately; all other modules were designed, developed, and maintained independently.",
    techStack: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Authentication & Authorization Systems"],
    contributions: [
        "Built and maintained core PAM features excluding the remote connection layer.",
        "Designed scalable frontend architecture for security-sensitive workflows.",
        "Implemented role-based access control and secure UI flows.",
        "Collaborated with existing integration to ensure seamless user experience.",
        "Actively handled production bug fixes and feature enhancements."
    ],
    architectureNote: null,
    maintenance: "Currently responsible for ongoing maintenance, enhancements, and production stability of the application.",
    repoLink: null,
    liveLink: null,
    thumbnail: "/media/project-pam.png",
    gallery: [],
  },
  {
    title: "Docs Portal (Client-Facing Documentation Platform)",
    overview: "A centralized documentation portal used by all clients to access official documentation for Tanflow’s IDAM and PAM products across multiple versions.",
    role: "Sole developer with end-to-end ownership, responsible for designing, developing, deploying, and maintaining the platform.",
    techStack: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Shared Database"],
    contributions: [
      "Designed a scalable documentation structure supporting multiple products and versions.",
      "Implemented dynamic content rendering driven entirely by database-managed content.",
      "Built responsive and accessible layouts for consistent client experience.",
      "Integrated the portal with a centralized database shared with the internal Admin Docs Portal."
    ],
    architectureNote: "The Docs Portal functions as a read-only, client-facing application. Documentation content is authored and managed internally through a separate Admin Docs Portal, with updates reflected in real time via a shared database.",
    maintenance: "Actively maintained in production, including content updates, bug fixes, and performance improvements.",
    repoLink: null,
    liveLink: null,
    thumbnail: "/media/project-docs-portal.png",
    gallery: [],
  },
  {
    title: "Tanflow Admin Docs Portal (Internal Documentation CMS)",
    overview: "An internal documentation management system built to create, edit, and manage content published on the client-facing Docs Portal.",
    role: "Sole developer responsible for the complete design, development, and maintenance of the internal CMS.",
    techStack: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Shared Database"],
    contributions: [
      "Designed and implemented an internal editor for managing documentation content.",
      "Built workflows for creating, updating, and organizing documentation across products and versions.",
      "Implemented access control to restrict usage to authorized team members.",
      "Designed the system to reflect content updates instantly on the client-facing Docs Portal.",
      "Owned the full documentation lifecycle from internal authoring to client publication."
    ],
    architectureNote: "This application shares a centralized database with the Docs Portal, enabling a clean separation between internal content management and external content consumption.",
    maintenance: "Actively maintained and enhanced based on internal team requirements.",
    repoLink: null,
    liveLink: null,
    thumbnail: "https://picsum.photos/seed/admindocs/800/450",
    gallery: [],
  },
  {
    title: "Tanflow Support Portal (Client-Facing)",
    overview: "A client-facing support portal that allows customers to raise, track, and manage support requests.",
    role: "Sole developer responsible for building and maintaining the application from initial development to production usage.",
    techStack: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    contributions: [
        "Built the complete support request workflow for client interactions.",
        "Designed responsive UI components for request creation and tracking.",
        "Implemented integration with backend services for support request handling.",
        "Maintained the application in production, addressing bugs and feature updates."
    ],
    architectureNote: null,
    maintenance: "Fully responsible for ongoing maintenance and stability of the application.",
    repoLink: null,
    liveLink: null,
    thumbnail: "https://picsum.photos/seed/supportportal/800/450",
    gallery: [],
  }
];

export const PERSONAL_PROJECTS_DATA = [
  {
    title: "IoT Tollbooth System Supervisor",
    description: "An IoT and RFID-based system that revolutionizes tollbooth operations by optimizing traffic flow and enhancing user experience.",
    techStack: ["C++", "Arduino IDE", "Arduino Uno", "ESP32"],
    repoLink: "https://github.com/AadityaPanda/ITSS",
    liveLink: "https://ieeexplore.ieee.org/document/10993585",
    thumbnail: "/media/project-iot-tollbooth.png",
    details: [
      "Automated Vehicle Detection: Authenticates vehicle RFID tags for seamless entry.",
      "Automated Gate Control: Utilizes a servo motor to control gate opening and closing.",
      "Real-time Data Logging: Logs all transaction data directly to Google Sheets via an ESP32.",
      "Enhanced Security: Ensures that only authorized RFID tags are granted access.",
      "Customizable Alerts: Provides distinct buzzer alerts for valid and invalid entries."
    ],
    gallery: [
        { type: 'image' as const, src: "/media/project-iot-tollbooth.png", alt: "IoT Tollbooth System Supervisor", hint: "iot project" },
        { type: 'image' as const, src: "/media/iot-tollbooth-setup.png", alt: "Project Setup", hint: "circuit board project" },
        { type: 'image' as const, src: "/media/iot-tollbooth-diagram.png", alt: "Circuit Diagram", hint: "circuit diagram" },
        { type: 'image' as const, src: "/media/iot-tollbooth-app.png", alt: "Mobile App", hint: "mobile app interface" },
        { type: 'video' as const, src: "/media/iot-tollbooth-demo.mp4", alt: "Project Demo Video", hint: "project demo video" },
    ]
  },
  {
    title: "Street Fighter",
    description: "A classic two-player fighting game built with Python and Pygame, featuring unique characters and dynamic animations.",
    techStack: ["Python"],
    repoLink: "https://github.com/AadityaPanda/Street_Fighter",
    liveLink: null,
    thumbnail: "/media/project-street-fighter.png",
    details: [
        "Features two distinct fighters, Warrior and Wizard, each with unique attacks and abilities.",
        "Includes classic gameplay mechanics like health bars, a scoring system, and smooth character animations.",
        "Implements dynamic background effects and immersive sound design for an engaging experience.",
        "Provides a full user interface including a main menu and victory screens.",
        "Supports two-player battles with fully customizable controls."
    ],
    gallery: [
        { type: 'image' as const, src: "/media/project-street-fighter.png", alt: "Street Fighter Game", hint: "python game" },
        { type: 'video' as const, src: "/media/street-fighter-gameplay.mp4", alt: "Street Fighter Gameplay", hint: "retro fighting game" },
        { type: 'image' as const, src: "/media/street-fighter-characters.png", alt: "Street Fighter Characters", hint: "pixel art character" },
    ]
  }
];


export const TESTIMONIALS_DATA = [
    {
      name: "John Doe",
      title: "Project Manager, Tech Solutions",
      quote: "Aaditya is a rare talent. His ability to dissect complex problems and architect elegant, scalable solutions is second to none. He was instrumental in the success of our flagship product.",
      avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=JD",
      hint: "male professional"
    },
    {
      name: "Jane Smith",
      title: "Lead Designer, Creative Minds",
      quote: "Working with Aaditya was a breath of fresh air. He has a keen eye for design and a deep understanding of user experience, which made our collaboration seamless and highly productive.",
      avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=JS",
      hint: "female professional"
    }
];

    
