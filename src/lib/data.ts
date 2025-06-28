export const CV_PATH = "/media/AadityaPanda_CV.pdf";

export const ABOUT_ME_TEXT = "A passionate and driven Software Developer with hands-on experience in building robust, full-stack web applications from the ground up. I specialize in Node.js, React, and Express, with a proven ability to architect custom solutions, enhance existing software with innovative features, and manage the full project lifecycle from development to deployment. I am dedicated to writing clean, efficient code and thrive in collaborative environments where I can contribute to cutting-edge projects.";

export const SKILLS_DATA = {
  "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
  "Frameworks & Libraries": ["React", "Next.js", "Express.js", "Tailwind CSS"],
  "Platforms & Tools": ["Git", "Firebase", "Nginx"],
};

export const EXPERIENCE_DATA = [
  {
    company: "Bitchief Technology Services Pvt Ltd",
    role: "Software Developer",
    period: "Nov 2024 - Present",
    responsibilities: [
      "Led the ground-up development of a full-stack internal documentation portal, improving information accessibility and license management.",
      "Engineered a custom Privileged Access Management (PAM) solution, enhancing Apache Guacamole with a branded UI and superior, granular permission controls.",
      "Innovated a time-based access policy system for the PAM tool, a feature not available in the original software, which was successfully deployed to production.",
      "Managed the full lifecycle of projects, including deployment and configuration on production and demo environments using Nginx.",
      "Currently re-architecting the PAM application from scratch to achieve deeper integration and more granular system control.",
    ],
  },
  {
    company: "Qmansys Infosolutions",
    role: "Internet of Things Intern",
    period: "Apr 2023 - Jul 2023",
    responsibilities: [
      "Worked on ESP32 Microcontrollers and firmware.",
      "Developed and tested IoT solutions for various applications.",
      "Gained hands-on experience with embedded systems and real-time data processing."
    ],
  },
  {
    company: "Qmansys Infosolutions",
    role: "Internet of Things Trainee",
    period: "Apr 2022 - Apr 2023",
    responsibilities: [
      "Learnt the basics of IoT, including introductions to Arduino and Raspberry Pi.",
      "Built numerous projects using Arduino, demonstrating practical application of learned concepts.",
      "Underwent training and demonstrated competency in the internationally recognized Certification Course on \"Internet Of Things (Expert Level)\"."
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
    description: "A comprehensive internal portal for documentation and license management, built from the ground up.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Nginx"],
    details: [
      "Architected and developed a full-stack documentation portal from scratch, serving as a central hub for all IDAM documentation.",
      "Integrated a license management module to display organization-specific license details for authenticated users.",
      "Implemented key UI/UX enhancements such as a responsive, auto-resizing sidebar, content-aware scrolling for sub-headings, and a 'scroll to top' feature.",
      "Managed the complete project lifecycle, from initial development and learning to taking full ownership of deployment and maintenance on production servers."
    ],
    repoLink: null,
    liveLink: null,
    thumbnail: "/media/project-docs-portal.png",
    gallery: [],
  },
  {
    title: "Privileged Access Management (PAM)",
    description: "A custom-built, branded version of Apache Guacamole with a focus on a robust, fine-grained permission system.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Nginx"],
    details: [
        "Cloned and customized the Apache Guacamole software, developing a new branded UI and front-end from scratch.",
        "Engineered a highly granular, role-based permission system, significantly improving on the original software's capabilities.",
        "Developed and implemented a unique Proof of Concept (POC) for time-based connection access policies, a feature not present in the official version.",
        "Managed deployment on multiple servers for demo, testing, and client presentation purposes.",
        "Currently leading the re-architecture of the entire application from scratch for more granular control and deeper system integration."
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
    description: "An IoT and RFID-based system to revolutionize tollbooth operations, optimizing traffic flow and enhancing user experience.",
    techStack: ["ESP32", "Arduino", "RFID", "C++", "Google Sheets API", "AppSheet"],
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
    description: "An engaging two-player fighting game built with Python and Pygame, featuring unique characters and dynamic animations.",
    techStack: ["Python", "Pygame", "OpenCV"],
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
    quote: "Aaditya is a rare talent. His ability to tackle complex architectural challenges and deliver clean, efficient code was instrumental to our project's success. He's a proactive problem-solver and a fantastic team player.",
    name: "Jane Doe",
    title: "Senior Project Manager, Bitchief",
    avatar: "/media/avatar-jane-doe.png",
    hint: "woman portrait"
  },
  {
    quote: "Working with Aaditya was a pleasure. He has a deep understanding of full-stack development and a keen eye for detail. His contributions to our PAM solution were invaluable, especially his work on the time-based access policies.",
    name: "John Smith",
    title: "Lead Engineer, Bitchief",
    avatar: "/media/avatar-john-smith.png",
    hint: "man portrait"
  }
];
