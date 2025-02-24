import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p4 from "../assets/p4.webp";
import p5 from "../assets/p5.webp";


export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "education", name: "education" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "Git, Github, React, Javascript, Tailwind, HTML, Bootstrap, Figma, Canva, ";

export const PROJECTS = [
  {
    id: 1,
    title: "Zentry Clone",
    description:
      "A high-quality replica of the Zentry website, built using React, Tailwind CSS, and GSAP for smooth animations and a modern UI. This project showcases dynamic scrolling effects, responsive design, and performance optimization. It demonstrates expertise in frontend development, interactive UI/UX, and component-based architecture.",
    imgSrc: p1,
    link: "https://github.com/VivekMalaviya18/Zentry-clone",
  },
  {
    id: 2,
    title: "V Chatbot",
    description:
      "An AI-powered chatbot built with React, Tailwind CSS, and the Gemini API, offering real-time responses and an intuitive UI. It features smooth animations, dynamic user interactions, and a sleek, modern design. This project highlights expertise in API integration, conversational AI, and interactive frontend development.",
    imgSrc: p2,
    link: "https://github.com/VivekMalaviya18/v-chat",
  },
  
  {
    id: 3,
    title: "PARK.ME",
    description:
      "Park.Me is a parking management system built with PHP and MySQL, designed to streamline parking slot reservations and management. It offers real-time slot availability, user-friendly booking, and efficient vehicle tracking. With a focus on database optimization and smooth UI/UX, this project highlights my skills in web development and backend management.",
    imgSrc: p3,
    link: "https://github.com/VivekMalaviya18/Park.Me",
  },
  {
    id: 4,
    title: "Tradesmint",
    description: "TradesMint is a trading course selling platform built with ASP.NET and C#, designed to offer a seamless browsing and purchasing experience. It features intuitive course categorization, a dynamic UI, and efficient data management. Developed with a scalable and maintainable architecture. ",
    imgSrc: p4,
    link: "https://example.com/task-management-tool",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "An online learning platform offering various courses and resources.",
    imgSrc: p5,
    link: "https://github.com/VivekMalaviya18/Vivek-Portfolio",
  },
  
  
];

export const ABOUT =
  "Motivated and detail-oriented fresher with a strong foundation in front-end development,specializing in HTML, CSS, JavaScript, and React. Proficient in creating dynamic, responsive,and user-friendly web interfaces with a keen eye for design and functionality. Skilled in implementing modern web development practices and passionate about crafting engaging user experiences. Eager to apply academic knowledge and project experience to contribute to innovative development teams and enhance technical expertise in a professional environment";

export const EXPERIENCES = [
  {
    company: "Google",
    role: "Software Engineer",
    year: "12/2023 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  
];

export const EDUCATION = [ 
  {
    school: "Parul University",
    degree: "Master of Computer Application",
    year: "2023 - 2025",
  },
  {
    school: "Saurashtra University",
    degree: "Bachelor of Computer Application",
    year: "2020 - 2023",
  },
  
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discordapp.com/users/962022056814334043",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://instagram.com/",
  //   icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  // },
  {
    href: "https://x.com/Vivek41465785?t=JhrkxpU79Nf5CoF3sfMxMQ&s=09",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/VivekMalaviya18",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/vivekmalaviya404/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "malaviyavivek56@gmail.com",
  phone: "+91 9328340255",
};
