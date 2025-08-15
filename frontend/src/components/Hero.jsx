// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {

  
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div className="mt-28 md:mt-5 lg:5">
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Shriyash</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop modern, user <br/>
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

      

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



//--------------------------------------------------------------------------------------------
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import myBodyImage from "../assets/shriyash.png"; // Transparent background image

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       {/* 🔹 Intro Text */}
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* Left line and dot */}
//         <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         {/* Text */}
//         <div className="mt-28 md:mt-5 lg:5">
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Shriyash</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop modern, user <br />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       {/* 💻 3D CPU Canvas */}
//       <ComputersCanvas />

//       {/* 🖼️ Stylish Transparent Body Image */}
//       <div className="absolute bottom-[90px] right-[40px] z-10">
//         <img
//           src={myBodyImage}
//           alt="Shriyash Body"
//           className="w-[300px] h-[500px] object-contain rounded-2xl shadow-[0_10px_20px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-500 ease-in-out"
//         />
//       </div>

//       {/* ⬇️ Scroll Down Indicator */}
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;




//------------------------------------------------------------------------------------


// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import myBodyImage from "../assets/shriyash.png"; // Transparent background image

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       {/* 🔹 Intro Text */}
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* Left line and dot */}
//         <div className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         {/* Text */}
//         <div className="mt-28 md:mt-5 lg:5">
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Shriyash</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop modern, user <br />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       {/* 💻 3D CPU Canvas */}
//       <ComputersCanvas />

//       {/* 🖼️ Responsive Body Image */}
//       {/* ✅ Large Screens – Bottom Right */}
//       <div className="absolute bottom-[90px] right-[40px] z-10 hidden sm:block">
//         <img
//           src={myBodyImage}
//           alt="Shriyash Body"
//           className="w-[250px] h-[450px] object-contain rounded-2xl shadow-[0_10px_20px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-500 ease-in-out"
//         />
//       </div>

//       {/* 📱 Mobile View – Centered Below Text */}
//       <div className="sm:hidden flex justify-center mt-10">
//         <img
//           src={myBodyImage}
//           alt="Shriyash Body"
//           className="w-[160px] h-auto object-contain rounded-2xl shadow-[0_6px_12px_rgba(255,255,255,0.15)]"
//         />
//       </div>

//       {/* ⬇️ Scroll Down Indicator */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import myBodyImage from "../assets/shriyash.png"; // Transparent background image

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* 🔹 Intro Text */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left line and dot */}
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text */}
        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Shriyash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern user interfaces <br />
            and full-stack web applications
          </p>
          <p className="text-sm text-gray-400 mt-2">
            MERN Stack Developer | Node.js Enthusiast | UI Designer
          </p>
        </div>
      </div>

      {/* 💻 3D CPU Canvas */}
      <div className="absolute inset-0 top-[180px] left-[-100px] sm:left-[-50px] md:left-0 lg:left-[-200px] z-0">
  <ComputersCanvas />
</div>
      {/* 🖼️ Responsive Body Image */}
      {/* ✅ Large Screens – Bottom Right */}
      <div className="absolute bottom-[60px] right-[40px] z-10 hidden sm:block">
        <img
          src={myBodyImage}
          alt="Shriyash Body"
          className="w-[440px] h-[550px] object-contain rounded-2xl shadow-[0_10px_20px_rgba(255,255,255,0.7)] hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>

      {/* 📱 Mobile View – Centered Below Text */}
      <div className="sm:hidden flex justify-center mt-10">
        <img
          src={myBodyImage}
          alt="Shriyash Body"
          className="w-[160px] h-auto object-contain rounded-2xl shadow-[0_6px_12px_rgba(255,255,255,0.15)]"
        />
      </div>

      {/* ⬇️ Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
