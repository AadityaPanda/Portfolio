
export const CV_PATH = "/media/AadityaPanda_CV.pdf";

export const ABOUT_ME_TEXT = "As a dedicated and passionate full-stack software developer, I specialize in architecting and building robust, elegant web applications from the ground up. My expertise lies in transforming complex problems into seamless and intuitive digital experiences. With a strong foundation in both front-end and back-end technologies, I am adept at managing the entire project lifecycle, from conceptualization and design to deployment and maintenance. I thrive in collaborative environments, continuously seeking to innovate and contribute to projects that push the boundaries of technology.";

export const SKILLS_DATA = {
  "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL", "C++"],
  "Frameworks & Libraries": ["React", "Next.js", "Express.js", "Tailwind CSS"],
  "Platforms & Tools": ["Node.js", "Git", "Firebase", "Nginx"],
  "Hardware & IoT": ["Arduino IDE", "Arduino Uno", "ESP32"],
};

export const EXPERIENCE_DATA = [
  {
    company: "Bitchief Technology Services Pvt Ltd",
    role: "Software Developer",
    period: "Nov 2024 - Present",
    logo: "/media/bitchief-logo.png",
    responsibilities: [
      "Architected a full-stack documentation portal from concept to deployment, centralizing knowledge and streamlining license management.",
      "Engineered a custom Privileged Access Management (PAM) solution on top of Apache Guacamole, delivering a branded UI and a more granular permission system.",
      "Pioneered a time-based access policy for the PAM tool, a feature not available in the core software, and successfully deployed it to production.",
      "Managed the full project lifecycle, including Nginx deployment and configuration for production and demo environments.",
      "Currently leading the re-architecture of the PAM solution to achieve deeper system integration and more granular control.",
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
    title: "Internal Documentation Portal",
    description: "A full-stack internal portal designed to centralize documentation and streamline license management.",
    techStack: ["React", "Node.js", "Express.js", "SQL", "Nginx"],
    details: [
      "Built as a central source of truth for all Identity and Access Management (IDAM) documentation.",
      "Features a secure module for displaying organization-specific license details to authenticated users.",
      "Enhanced with a responsive, auto-resizing sidebar and content-aware scrolling for improved UX.",
      "Oversaw the full project lifecycle, from development to production deployment and maintenance."
    ],
    repoLink: null,
    liveLink: null,
    thumbnail: "/media/project-docs-portal.png",
    gallery: [],
  },
  {
    title: "Privileged Access Management (PAM)",
    description: "An enterprise-grade security platform designed to safeguard privileged accounts, manage credentials, and enforce strong access governance across critical IT assets.",
    techStack: ["React", "Node.js", "Express.js", "SQL", "Nginx"],
    details: [
        "Ensures privileged access is secured with credential vaulting and MFA.",
        "Controlled via granular role-based workflows and custom time-based access policies.",
        "Achieves zero direct credential exposure for heightened security.",
        "Monitored using session recording and real-time supervision.",
        "Audited with complete, comprehensive logs and reporting.",
        "Optimized for deployments ranging from 200 to 1000+ devices across cloud and on-premise environments."
    ],
    repoLink: null,
    liveLink: null,
    thumbnail: "/media/project-pam.png",
    gallery: [],
  },
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

