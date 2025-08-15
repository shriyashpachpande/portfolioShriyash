// import React, { useEffect, useRef } from "react";
// import { Tilt } from "react-tilt";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const el = cardRef.current;

//     // ScrollTrigger for animating project cards with stagger
//     gsap.fromTo(
//       el,
//       {
//         opacity: 0,
//         y: 100, // Start off-screen
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: el,
//           start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
//           end: "top center",    // End when the top reaches the center of the viewport
//           scrub: true,          // Smoothly sync scroll and animation
//           markers: false,       // Set to `true` to see debug markers
//         },
//       }
//     );
//   }, []);

//   return (
//     <div ref={cardRef}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt="project_image"
//             className="w-full h-full object-cover object-left rounded-2xl"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="source code"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </div>
//   );
// };

// const Works = () => {
//   useEffect(() => {
//     // Stagger effect for project cards
//     gsap.fromTo(
//       ".project-card", // Select all project cards
//       {
//         opacity: 0,
//         y: 100,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.1, // Stagger delay of 0.3 seconds between each card
//         scrollTrigger: {
//           trigger: ".works-container",
//           start: "top bottom",  // Trigger when the top of the container reaches the bottom
//           end: "top center",
//           scrub: true,
//           markers: false, // Set to true to see debug markers
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       <div>
//         <p className={`${styles.sectionSubText}`}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </div>

//       <div className="w-full flex">
//         <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
//         These projects showcase the skills I’ve developed through personal and academic work. Each one includes source code and live demos, reflecting my ability to learn independently, build full-stack applications, and work with modern technologies.
//         </p>
//       </div>

//       <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
//         {projects.map((project, index) => (
//           <div key={`project-${index}`} className="project-card">
//             <ProjectCard index={index} {...project} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");



// import React, { useEffect, useRef } from "react";
// import { Tilt } from "react-tilt";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   live_demo_link,
// }) => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const el = cardRef.current;

//     gsap.fromTo(
//       el,
//       {
//         opacity: 0,
//         y: 100,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: el,
//           start: "top bottom",
//           end: "top center",
//           scrub: true,
//           markers: false,
//         },
//       }
//     );
//   }, []);

//   return (
//     <div ref={cardRef}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt="project_image"
//             className="w-full h-full object-cover object-left rounded-2xl"
//           />
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px] text-justify">
//             {description}
//           </p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>

//         <div className="mt-4 flex justify-between items-center gap-3">
//           {/* GitHub */}
//           <button
//             onClick={() => window.open(source_code_link, "_blank")}
//             className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-[#333]"
//           >
//             View Code
//           </button>

//           {/* Live Demo */}
//           {live_demo_link && (
//             <button
//               onClick={() => window.open(live_demo_link, "_blank")}
//               className="bg-[#915EFF] text-white text-sm px-4 py-2 rounded-md hover:bg-[#7b4ae4]"
//             >
//               Live Demo
//             </button>
//           )}
//         </div>
//       </Tilt>
//     </div>
//   );
// };

// const Works = () => {
//   useEffect(() => {
//     gsap.fromTo(
//       ".project-card",
//       {
//         opacity: 0,
//         y: 100,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: ".works-container",
//           start: "top bottom",
//           end: "top center",
//           scrub: true,
//           markers: false,
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       <div>
//         <p className={`${styles.sectionSubText}`}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </div>

//       <div className="w-full flex">
//         <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify">
//           These projects showcase the skills I’ve developed through personal and academic work. Each one includes source code and live demos, reflecting my ability to learn independently, build full-stack applications, and work with modern technologies.
//         </p>
//       </div>

//       <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
//         {projects.map((project, index) => (
//           <div key={`project-${index}`} className="project-card">
//             <ProjectCard index={index} {...project} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");


// File: components/Works.jsx

import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="p-[1px] rounded-2xl animated-gradient-border"
      >
        <div className="bg-tertiary rounded-2xl sm:w-[360px] w-full h-full p-5">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover object-left rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] text-justify">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center gap-3">
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-[#333]"
            >
              View Code
            </button>

            {live_demo_link && (
              <button
                onClick={() => window.open(live_demo_link, "_blank")}
                className="bg-[#915EFF] text-white text-sm px-4 py-2 rounded-md hover:bg-[#7b4ae4]"
              >
                Live Demo
              </button>
            )}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify">
          These projects showcase the skills I’ve developed through personal and academic work. Each one includes source code and live demos, reflecting my ability to learn independently, build full-stack applications, and work with modern technologies.
        </p>
      </div>

      <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
