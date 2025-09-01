import {
  web,
  javascript,
  html,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
} from "../assets";

// ✅ Import missing images explicitly
import DjangoImg from "../assets/django.png";
import PythonImg from "../assets/Python.png";
import NetworkSecurityImg from "../assets/Network-Security.png";
import CyberSecurityImg from "../assets/Cyber-Security-Specialist.png";
import BlenderImg from "../assets/Blender.png";
import BisagnImg from "../assets/bisagn.png";
import BytexlImg from "../assets/bytexl.png";
import SubDImg from "../assets/SubD.png";
import NoteAppImg from "../assets/Note-app.png";
import ToursTravelImg from "../assets/Tours-and-Travel.png";
import VisuallyImpairedImg from "../assets/Website-for-Visually-Impaired.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer (Django/REST)",
    icon: DjangoImg,
  },
  {
    title: "Python Developer",
    icon: PythonImg,
  },
  {
    title: "Full Stack Developer (Django/React.js)",
    icon: reactjs,
  },
  {
    title: "Network Security Engineer",
    icon: NetworkSecurityImg,
  },
  {
    title: "Cyber Security Specialist",
    icon: CyberSecurityImg,
  },
  {
    title: "3D Model and User Interface (Blender/Figma)",
    icon: BlenderImg,
  },
];

const technologies = [
  {
    name: "Python",
    title: "Python",
    icon: PythonImg,
  },
  {
    name: "Django",
    icon: DjangoImg,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Network-Security",
    title: "Network Security",
    icon: NetworkSecurityImg,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Blender",
    title: "Blender",
    icon: BlenderImg,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "web",
    icon: web,
  },
  {
    name: "Html",
    icon: html,
  },
];

const experiences = [
  {
    title: "Cyber Security Intern",
    company_name: "BISAG-N |(Meity Gov.)",
    icon: BisagnImg,
    iconBg: "#383E56",
    date: "December 2024 - April 2025",
    points: [
      "Contributed to the development of a centralized security system for subdomain enumeration, malware analysis, threat mapping, and automated reporting",
      "Improved efficiency by streamlining multiple security checks into a single platform, reducing manual effort.",
      "Delivered data-driven insights and automated reports with actionable recommendations to strengthen organizational security posture.",
      "The project was recognized and selected for the Dewang Mehta IT Awards 2025 🏆.",
    ],
  },
  {
    title: "Software developer Intern",
    company_name: "Byte XL",
    icon: BytexlImg,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Developed and maintained web applications using React.js, enhancing functionality and performance.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Jatin Sharma",
    designation: "CFO",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Devashish Laxkar",
    designation: "COO",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vishal Talaicha",
    designation: "CTO",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sub-domain Enumeration",
    description: (
      <>
        I developed a centralized system for{" "}
        <strong>
          subdomain enumeration, malware analysis, threat mapping, and automated
          reporting
        </strong>
        , built using <strong>Django</strong> and <strong>REST</strong>{" "}
        framework. The platform helped the organization by streamlining security
        checks into one solution, reducing manual effort, and providing
        data-driven insights for faster <strong>vulnerability assessment</strong>
        . It offered features like real-time monitoring, automated report
        generation, and actionable recommendations to strengthen their security
        posture. This impactful project was recognized and selected for the{" "}
        <strong>Dewang Mehta IT Awards 2025</strong>.
      </>
    ),
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: SubDImg,
    source_code_link:
      "https://github.com/DevSharma2458/Subdomain-Enumeration",
  },
  {
    name: "Shopping Website for Visually Impaired",
    description: (
      <>
        This project is a <strong>Full-stack E-commerce</strong> platform
        designed especially for <strong>visually impaired users</strong>. The{" "}
        <strong>React frontend</strong> integrates accessibility features such
        as <strong>voice search, text-to-speech, and speech recognition</strong>{" "}
        using <strong>Web Speech API</strong>, ensuring effortless navigation
        without relying solely on visuals. <strong>The Django backend</strong>{" "}
        (Currently Under-maintainance) manages product data, user accounts, and
        secure transactions, providing a robust and scalable system. Beyond
        standard e-commerce functionality, the project emphasizes inclusivity by
        offering <strong>high-contrast design, keyboard navigation, and audio
        assistance</strong>, making online shopping more accessible,
        independent, and user-friendly.
      </>
    ),
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: VisuallyImpairedImg,
    source_code_link:
      "https://github.com/DevSharma2458/REACT-E-Commerce-Website-for-Visually-Impaired-",
  },
  {
    name: "Note-app with Security Authentication ",
    description: (
      <>
        The <strong>Note-App</strong> is a secure and efficient application
        built using <strong>Django REST Framework</strong> for the backend and{" "}
        <strong>React</strong> for the frontend. It implements{" "}
        <strong>JWT Authentication</strong> to ensure user data protection and
        session security. Users can seamlessly create, update, and manage their
        personal notes with an intuitive interface. The app emphasizes{" "}
        <strong>high security</strong> standards while delivering smooth
        performance. With features like token-based access, responsive design,
        and efficient API handling, this project highlights expertise in{" "}
        <strong>full-stack development</strong> and modern security practices.
      </>
    ),
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: NoteAppImg,
    source_code_link:
      "https://github.com/DevSharma2458/Django-React-Project-NOTE-APP-with-Authentication-and-high-security",
  },
  {
    name: "Tours and Travels",
    description: (
      <>
        I developed a <strong>Tours and Travels Website</strong> designed to
        provide users with a seamless experience for exploring destinations and
        booking services. The <strong>frontend</strong> was built using{" "}
        <strong>React</strong>, offering a responsive and user-friendly
        interface with features like <strong>blogs</strong>,{" "}
        <strong>testimonials</strong>, <strong>hotel booking</strong>, and{" "}
        <strong>flight booking</strong>. The <strong>backend</strong> is
        currently in the <strong>underdevelopment stage</strong> with{" "}
        <strong>Django</strong>, aimed at delivering secure data handling and
        dynamic content. This project reflects my skills in <strong>UI/UX</strong> 
        and full-stack development.
      </>
    ),
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: ToursTravelImg,
    source_code_link:
      "https://github.com/DevSharma2458/Tours-and-Travel-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
