
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
 
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  
} from '../assets'

import project4 from "../assets/project4.webp";
import makan from "../assets/makan.png";
// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
  {
    id:"CV",
    title:"CV",
  }
];

const services = [
  {
    title: "MERN-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "MERN-Stack Developer",
    company_name: "Self-Initiated Projects",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jul 2025 - Present",
    points: [
      "Developed and maintained Full-stack web applications using **MERN technologies** (MongoDB, Express.js, React, Node.js) as part of academic and personal projects.",
      "Worked closely with peers and online communities (GitHub, forums) to discuss UI/UX design ideas and get feedback.",
      "Implemented responsive design using **Tailwind CSS and Bootstrap**, ensuring consistent performance across devices and browsers.",
      "Regularly reviewed code for optimization and readability during personal projects and group work.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Campus Facility Booking System",
    description:
      "A web-based application designed for students and staff to book campus facilities like seminar halls, labs, and sports grounds. It streamlines the booking process with admin approval and real-time availability, making campus resource management efficient and transparent.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    live_demo_link: "https://campus-facility-booking.onrender.com/",
    source_code_link: "https://github.com/shriyashpachpande/mgm-cfbs",
  },
  {
    name: "Scholarship Portal",
    description:
      "A web-based system to help students apply for scholarships with ease. It includes secure login, document upload, eligibility checks, status tracking, and admin approval—all on a clean Bootstrap-based interface backed by Node.js and MongoDB for smooth performance.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert, // Add the image in assets and import it at the top
    live_demo_link: "https://scholarship-1-e5hi.onrender.com/",
    source_code_link: "https://github.com/shriyashpachpande/Scholarship",
  },
  
  {
    name: "QuickShow",
    description:
      "QuickShow is a movie ticket booking web app where users can explore movies, view showtimes, and book tickets. It includes seat selection, admin movie management. Built using React.js, Bootstrap, Node.js, and MongoDB. The interface is fully responsive & optimized for performance. Real-time updates ensure accurate smooth booking experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    live_demo_link: "https://quickshow-beryl.vercel.app/",  // optional
    source_code_link: "https://github.com/shriyashpachpande/QuickShow", // optional
  },
  {
    name: "Platform Occupancy Management System",
    description:
      " The Platform Occupancy Management System is a web-based application designed to optimize the usage of railway platforms at various stations. The system allows railway administrators to monitor, manage, and allocate platforms effectively based on train schedules and real-time occupancy data. This application provides a user-friendly interface where station staff can view the current status of all platforms, identify which are occupied or free, and assign platforms to incoming trains accordingly.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    live_demo_link: "https://hackshri.free.nf/login.php",  // optional
    source_code_link: "https://github.com/shriyashpachpande/Platform_Occupancy_Management_System", // optional
  },
  {
    name: "Makan",
    description:
      "  This website is a comprehensive platform for users looking to explore and book various types of accommodations. Whether you're searching for a vacation rental, a new home, or a convenient place to park your car, this site has you covered. Users can browse and book houses, villas, apartments, and even garage spaces. The platform allows users to easily find and reserve the perfect property for their needs, providing a seamless booking experience.It is made by only HTML and css that is frontend. This website is creted in second year in the college.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      
    ],
    image: makan,
    live_demo_link: "https://makans.netlify.app/",  // optional
    source_code_link: "https://github.com/shriyashpachpande/Makan", // optional
  },
];

export { services, technologies, experiences, testimonials, projects };
