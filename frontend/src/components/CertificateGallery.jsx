<<<<<<< HEAD:frontend/src/components/CertificateGallery.jsx
// import React, { useEffect } from "react";
// import "./CertificateGallery.css";

// const cards = [
//   {
//     id: 1,
//     type: "CONCEPT: Algorithms",
//     title: "The Algorithm Library",
//     icon: "fa-book-open",
//     preview: "Endless tomes of sorting, searching, and optimization...",
//     details:
//       "Endless shelves containing every possible solution. I found my own data structures there—pages still being written as I coded. The Librarian (my senior developer) told me I was never supposed to reinvent the wheel. My solution was already optimized. Now I'm writing outside the margins, trying new approaches.",
//     location: "Stack Overflow",
//     time: "11:05:40",
//   },
//   {
//     id: 2,
//     type: "PARADIGM: Abstraction",
//     title: "The Abstract Void",
//     icon: "fa-atom",
//     preview: "Nothing concrete exists here, yet I feel the underlying logic...",
//     details:
//       "The Abstract Void is the space between concrete implementations, a quantum foam of design patterns. I stayed too long designing and began to dissolve into pure theory. Parts of my ideas are still there, echoing. I'm not whole anymore. Can you feel the gaps in my documentation?",
//     location: "design patterns.md",
//     time: "--:--:--",
//   },
//   {
//     id: 3,
//     type: "TOOL: Git",
//     title: "The Version Control Mirror",
//     icon: "fa-code-branch",
//     preview:
//       "I saw my code, but not as it is now; multiple branches reflecting...",
//     details:
//       "I saw my code, but not as it is now. The mirror of Git showed all my possible branches across different commits. Some were stable, some were experimental. All were my work. The reflection (my `git log`) spoke: 'You're fracturing the codebase by merging conflicts. You need to rebase and stay on one timeline.'",
//     location: "github.com/my-repo",
//     time: "18:55:20",
//   },
//   {
//     id: 4,
//     type: "PROCESS: Deployment",
//     title: "The Deployment Dream",
//     icon: "fa-rocket",
//     preview: "I'm trying to send it live, but which environment is real?",
//     details:
//       "I'm trying to send my application live, but which environment is real? Every server feels familiar yet subtly different. The boundaries between staging and production are thinning. Sometimes I see through the logs of other instances. I'm losing track of which configurations belong to which version of my app.",
//     location: "cloud-server:port",
//     time: "NOW",
//   },
//   {
//     id: 4,
//     type: "PROCESS: Deployment",
//     title: "The Deployment Dream",
//     icon: "fa-rocket",
//     preview: "I'm trying to send it live, but which environment is real?",
//     details:
//       "I'm trying to send my application live, but which environment is real? Every server feels familiar yet subtly different. The boundaries between staging and production are thinning. Sometimes I see through the logs of other instances. I'm losing track of which configurations belong to which version of my app.",
//     location: "cloud-server:port",
//     time: "NOW",
//   },
// ];

// const CertificateGallery = () => {
//   useEffect(() => {
//     const carousel = document.getElementById("memory-carousel");
//     const prevBtn = document.getElementById("prev-btn");
//     const nextBtn = document.getElementById("next-btn");
//     const cardsEl = document.querySelectorAll(".memory-card");

//     let theta = 0;
//     let currentIndex = 0;
//     let isDragging = false;
//     let startX = 0;
//     let radius = window.innerWidth <= 768 ? 250 : 400;
//     const totalCards = cards.length;

//     function arrangeCards() {
//       const angle = 360 / totalCards;
//       cardsEl.forEach((card, index) => {
//         const cardAngle = angle * index;
//         card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
//         card.dataset.index = index;
//       });
//     }

//     function rotateCarousel() {
//       carousel.style.transform = `rotateY(${theta}deg)`;
//       currentIndex = Math.round(Math.abs(theta / (360 / totalCards)) % totalCards);
//     }

//     function prevCard() {
//       theta += 360 / totalCards;
//       rotateCarousel();
//     }

//     function nextCard() {
//       theta -= 360 / totalCards;
//       rotateCarousel();
//     }

//     function flipCard(e) {
//       const card = e.currentTarget;
//       const cardIndex = parseInt(card.dataset.index);
//       if (cardIndex === currentIndex) {
//         card.classList.toggle("flipped");
//       }
//     }

//     function dragStart(e) {
//       isDragging = true;
//       startX = e.pageX || e.touches[0].pageX;
//     }

//     function drag(e) {
//       if (!isDragging) return;
//       const currentX = e.pageX || (e.touches ? e.touches[0].pageX : startX);
//       const diffX = currentX - startX;
//       const sensitivity = 0.5;
//       const newTheta = theta + diffX * sensitivity;
//       carousel.style.transform = `rotateY(${newTheta}deg)`;
//     }

//     function dragEnd(e) {
//       if (!isDragging) return;
//       isDragging = false;
//       const currentX = e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : startX);
//       const diffX = currentX - startX;

//       if (Math.abs(diffX) > 20) {
//         if (diffX > 0) prevCard();
//         else nextCard();
//       } else {
//         const anglePerCard = 360 / totalCards;
//         const snapAngle = Math.round(theta / anglePerCard) * anglePerCard;
//         theta = snapAngle;
//         rotateCarousel();
//       }
//     }

//     function handleKeyDown(e) {
//       if (e.key === "ArrowLeft") nextCard();
//       else if (e.key === "ArrowRight") prevCard();
//       else if (e.key === "Enter" || e.key === " ") {
//         const currentCard = document.querySelector(`.memory-card[data-index="${currentIndex}"]`);
//         if (currentCard) currentCard.classList.toggle("flipped");
//       }
//     }

//     function onResize() {
//       radius = window.innerWidth <= 768 ? 250 : 400;
//       arrangeCards();
//       rotateCarousel();
//     }

//     prevBtn.addEventListener("click", prevCard);
//     nextBtn.addEventListener("click", nextCard);
//     cardsEl.forEach((card) => card.addEventListener("click", flipCard));
//     carousel.addEventListener("mousedown", dragStart);
//     carousel.addEventListener("touchstart", dragStart, { passive: true });
//     document.addEventListener("mousemove", drag);
//     document.addEventListener("touchmove", drag, { passive: false });
//     document.addEventListener("mouseup", dragEnd);
//     document.addEventListener("touchend", dragEnd);
//     document.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("resize", onResize);

//     arrangeCards();
//     rotateCarousel();

//     return () => {
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     <div className="certificate-gallery">
//       <div className="carousel-container">
//         <div className="carousel" id="memory-carousel">
//           {cards.map((card, index) => (
//             <div
//               className="memory-card"
//               key={card.id}
//               data-index={index}
//               style={{ "--i": index }}
//             >
//               <div className="card-inner">
//                 <div className="card-front">
//                   <div className="card-content">
//                     <div className="memory-date">{card.type}</div>
//                     <h3>{card.title}</h3>
//                     <div className="memory-image">
//                       <i className={`fa-solid ${card.icon} fa-3x`}></i>
//                       <div className="glitch-effect"></div>
//                     </div>
//                     <p className="memory-preview">{card.preview}</p>
//                     <div className="card-glow"></div>
//                   </div>
//                 </div>
//                 <div className="card-back">
//                   <div className="card-content">
//                     <h3>{card.title}</h3>
//                     <p>{card.details}</p>
//                     <div className="memory-coordinates">
//                       <span>
//                         <i className="fa-solid fa-location-dot"></i> {card.location}
//                       </span>
//                       <span className="time-stamp">
//                         <i className="fa-regular fa-clock"></i> {card.time}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="carousel-controls">
//           <button id="prev-btn" className="control-btn">
//             <i className="fa-solid fa-chevron-left"></i>
//           </button>
//           <button id="next-btn" className="control-btn">
//             <i className="fa-solid fa-chevron-right"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateGallery;



// File: src/components/CertificateGallery.jsx
import React, { useEffect, useRef, useState } from 'react';
import './CertificateGallery.css';

const certificates = [
  {
    title: 'HackFusion 2.0',
    preview: "Participated in a 3-day national-level hackathon held in Nanded, reached Round 3.",
    details: 'HackFusion 2.0 was a prestigious national-level hackathon conducted on 21st–23rd February 2025 in Nanded. Our team advanced through multiple challenging rounds and successfully reached the 3rd round before elimination. The event tested our technical, problem-solving, and team collaboration skills.',
    date: 'February 21–23, 2025',
    image: '/assets/cert1.png',
  },
  {
    title: 'Visiotech Coordinator',
    preview: 'I am the co-ordinator of the Bug Munch event in the collage.',
    details: 'In  the Bug Munch I am the co ordinator of this event. In this event students solve the problems and wins the price with in the time period.',
    date: 'April 2025',
    image: '/assets/cert4.png',
  },
  {
    title: 'IOT Workshop Done',
    preview: 'In the IOT workshop I learn about the how traffic signals are works.',
    details: 'In the IOT workshop I learn about the how traffic signals are works.',
    date: 'Septamber 15-16, 2023',
    image: '/assets/cert2.png',
  },
  {
    title: 'Pragyaa Event',
    preview: 'Pragyaa Event is the occoured in SGGS, Nanded. I learn Python in DS...',
    details: 'Deep understanding of algorithms helps write better performing code.',
    date: 'March 23, 2024',
    image: '/assets/cert3.png',
  },
 
  {
    title: 'Web Magic Event',
    preview: 'I joined in the Web Magic event in the collage. They teach me How to develop website',
    details: 'Cloud platforms are essential for deploying and managing modern applications.',
    date: 'March 27-28, 2024',
    image: '/assets/cert5.png',
  },
  
];

const CertificateGallery = () => {
  const carouselRef = useRef(null);
  const [angle, setAngle] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragAngle = useRef(angle);

  const rotateCarousel = (direction) => {
    const delta = direction === 'left' ? 1 : -1;
    const newAngle = angle + delta * (360 / certificates.length);
    setAngle(newAngle);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateZ(-480px) rotateY(${angle}deg)`;
    }
  }, [angle]);

  // Mouse Drag Events
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    dragAngle.current = angle;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    const rotationDelta = dx * 0.3; // drag sensitivity
    setAngle(dragAngle.current + rotationDelta);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const flipCard = (e) => {
    const card = e.currentTarget;
    card.classList.toggle('flipped');
  };

  return (
    <section id="certificate" style={{ padding: '100px 0', textAlign: 'center' }}>
      <h2 className="section-title typewriter">Certificates</h2>

      <div className="carousel-container">
        <div
          className="carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
        >
          {certificates.map((item, index) => (
            <div
              key={index}
              className="memory-card"
              style={{
                transform: `rotateY(${(360 / certificates.length) * index}deg) translateZ(480px)`,
              }}
              onClick={flipCard}
            >
              <div className="card-inner">
                {/* FRONT SIDE */}
                <div className="card-front">
                  <div className="card-content">
                    <div className="memory-date">{item.date}</div>
                    <div className="memory-image">
                      <img src={item.image} alt="certificate preview" />
                    </div>
                    <h3>{item.title}</h3>
                    <div className="memory-preview">{item.preview}</div>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="card-back">
                  <div className="card-content">
                    <p>{item.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <div className="control-btn" onClick={() => rotateCarousel('left')}>&lt;</div>
          <div className="control-btn" onClick={() => rotateCarousel('right')}>&gt;</div>
        </div>
      </div>
    </section>
  );
};

export default CertificateGallery;
=======
// import React, { useEffect } from "react";
// import "./CertificateGallery.css";

// const cards = [
//   {
//     id: 1,
//     type: "CONCEPT: Algorithms",
//     title: "The Algorithm Library",
//     icon: "fa-book-open",
//     preview: "Endless tomes of sorting, searching, and optimization...",
//     details:
//       "Endless shelves containing every possible solution. I found my own data structures there—pages still being written as I coded. The Librarian (my senior developer) told me I was never supposed to reinvent the wheel. My solution was already optimized. Now I'm writing outside the margins, trying new approaches.",
//     location: "Stack Overflow",
//     time: "11:05:40",
//   },
//   {
//     id: 2,
//     type: "PARADIGM: Abstraction",
//     title: "The Abstract Void",
//     icon: "fa-atom",
//     preview: "Nothing concrete exists here, yet I feel the underlying logic...",
//     details:
//       "The Abstract Void is the space between concrete implementations, a quantum foam of design patterns. I stayed too long designing and began to dissolve into pure theory. Parts of my ideas are still there, echoing. I'm not whole anymore. Can you feel the gaps in my documentation?",
//     location: "design patterns.md",
//     time: "--:--:--",
//   },
//   {
//     id: 3,
//     type: "TOOL: Git",
//     title: "The Version Control Mirror",
//     icon: "fa-code-branch",
//     preview:
//       "I saw my code, but not as it is now; multiple branches reflecting...",
//     details:
//       "I saw my code, but not as it is now. The mirror of Git showed all my possible branches across different commits. Some were stable, some were experimental. All were my work. The reflection (my `git log`) spoke: 'You're fracturing the codebase by merging conflicts. You need to rebase and stay on one timeline.'",
//     location: "github.com/my-repo",
//     time: "18:55:20",
//   },
//   {
//     id: 4,
//     type: "PROCESS: Deployment",
//     title: "The Deployment Dream",
//     icon: "fa-rocket",
//     preview: "I'm trying to send it live, but which environment is real?",
//     details:
//       "I'm trying to send my application live, but which environment is real? Every server feels familiar yet subtly different. The boundaries between staging and production are thinning. Sometimes I see through the logs of other instances. I'm losing track of which configurations belong to which version of my app.",
//     location: "cloud-server:port",
//     time: "NOW",
//   },
//   {
//     id: 4,
//     type: "PROCESS: Deployment",
//     title: "The Deployment Dream",
//     icon: "fa-rocket",
//     preview: "I'm trying to send it live, but which environment is real?",
//     details:
//       "I'm trying to send my application live, but which environment is real? Every server feels familiar yet subtly different. The boundaries between staging and production are thinning. Sometimes I see through the logs of other instances. I'm losing track of which configurations belong to which version of my app.",
//     location: "cloud-server:port",
//     time: "NOW",
//   },
// ];

// const CertificateGallery = () => {
//   useEffect(() => {
//     const carousel = document.getElementById("memory-carousel");
//     const prevBtn = document.getElementById("prev-btn");
//     const nextBtn = document.getElementById("next-btn");
//     const cardsEl = document.querySelectorAll(".memory-card");

//     let theta = 0;
//     let currentIndex = 0;
//     let isDragging = false;
//     let startX = 0;
//     let radius = window.innerWidth <= 768 ? 250 : 400;
//     const totalCards = cards.length;

//     function arrangeCards() {
//       const angle = 360 / totalCards;
//       cardsEl.forEach((card, index) => {
//         const cardAngle = angle * index;
//         card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
//         card.dataset.index = index;
//       });
//     }

//     function rotateCarousel() {
//       carousel.style.transform = `rotateY(${theta}deg)`;
//       currentIndex = Math.round(Math.abs(theta / (360 / totalCards)) % totalCards);
//     }

//     function prevCard() {
//       theta += 360 / totalCards;
//       rotateCarousel();
//     }

//     function nextCard() {
//       theta -= 360 / totalCards;
//       rotateCarousel();
//     }

//     function flipCard(e) {
//       const card = e.currentTarget;
//       const cardIndex = parseInt(card.dataset.index);
//       if (cardIndex === currentIndex) {
//         card.classList.toggle("flipped");
//       }
//     }

//     function dragStart(e) {
//       isDragging = true;
//       startX = e.pageX || e.touches[0].pageX;
//     }

//     function drag(e) {
//       if (!isDragging) return;
//       const currentX = e.pageX || (e.touches ? e.touches[0].pageX : startX);
//       const diffX = currentX - startX;
//       const sensitivity = 0.5;
//       const newTheta = theta + diffX * sensitivity;
//       carousel.style.transform = `rotateY(${newTheta}deg)`;
//     }

//     function dragEnd(e) {
//       if (!isDragging) return;
//       isDragging = false;
//       const currentX = e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : startX);
//       const diffX = currentX - startX;

//       if (Math.abs(diffX) > 20) {
//         if (diffX > 0) prevCard();
//         else nextCard();
//       } else {
//         const anglePerCard = 360 / totalCards;
//         const snapAngle = Math.round(theta / anglePerCard) * anglePerCard;
//         theta = snapAngle;
//         rotateCarousel();
//       }
//     }

//     function handleKeyDown(e) {
//       if (e.key === "ArrowLeft") nextCard();
//       else if (e.key === "ArrowRight") prevCard();
//       else if (e.key === "Enter" || e.key === " ") {
//         const currentCard = document.querySelector(`.memory-card[data-index="${currentIndex}"]`);
//         if (currentCard) currentCard.classList.toggle("flipped");
//       }
//     }

//     function onResize() {
//       radius = window.innerWidth <= 768 ? 250 : 400;
//       arrangeCards();
//       rotateCarousel();
//     }

//     prevBtn.addEventListener("click", prevCard);
//     nextBtn.addEventListener("click", nextCard);
//     cardsEl.forEach((card) => card.addEventListener("click", flipCard));
//     carousel.addEventListener("mousedown", dragStart);
//     carousel.addEventListener("touchstart", dragStart, { passive: true });
//     document.addEventListener("mousemove", drag);
//     document.addEventListener("touchmove", drag, { passive: false });
//     document.addEventListener("mouseup", dragEnd);
//     document.addEventListener("touchend", dragEnd);
//     document.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("resize", onResize);

//     arrangeCards();
//     rotateCarousel();

//     return () => {
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     <div className="certificate-gallery">
//       <div className="carousel-container">
//         <div className="carousel" id="memory-carousel">
//           {cards.map((card, index) => (
//             <div
//               className="memory-card"
//               key={card.id}
//               data-index={index}
//               style={{ "--i": index }}
//             >
//               <div className="card-inner">
//                 <div className="card-front">
//                   <div className="card-content">
//                     <div className="memory-date">{card.type}</div>
//                     <h3>{card.title}</h3>
//                     <div className="memory-image">
//                       <i className={`fa-solid ${card.icon} fa-3x`}></i>
//                       <div className="glitch-effect"></div>
//                     </div>
//                     <p className="memory-preview">{card.preview}</p>
//                     <div className="card-glow"></div>
//                   </div>
//                 </div>
//                 <div className="card-back">
//                   <div className="card-content">
//                     <h3>{card.title}</h3>
//                     <p>{card.details}</p>
//                     <div className="memory-coordinates">
//                       <span>
//                         <i className="fa-solid fa-location-dot"></i> {card.location}
//                       </span>
//                       <span className="time-stamp">
//                         <i className="fa-regular fa-clock"></i> {card.time}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="carousel-controls">
//           <button id="prev-btn" className="control-btn">
//             <i className="fa-solid fa-chevron-left"></i>
//           </button>
//           <button id="next-btn" className="control-btn">
//             <i className="fa-solid fa-chevron-right"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateGallery;



// File: src/components/CertificateGallery.jsx
import React, { useEffect, useRef, useState } from 'react';
import './CertificateGallery.css';

const certificates = [
  {
    title: 'HackFusion 2.0',
    preview: "Participated in a 3-day national-level hackathon held in Nanded, reached Round 3.",
    details: 'HackFusion 2.0 was a prestigious national-level hackathon conducted on 21st–23rd February 2025 in Nanded. Our team advanced through multiple challenging rounds and successfully reached the 3rd round before elimination. The event tested our technical, problem-solving, and team collaboration skills.',
    date: 'February 21–23, 2025',
    image: '/assets/cert1.png',
  },
  {
    title: 'Visiotech Coordinator',
    preview: 'I am the co-ordinator of the Bug Munch event in the collage.',
    details: 'In  the Bug Munch I am the co ordinator of this event. In this event students solve the problems and wins the price with in the time period.',
    date: 'April 2025',
    image: '/assets/cert4.png',
  },
  {
    title: 'IOT Workshop Done',
    preview: 'In the IOT workshop I learn about the how traffic signals are works.',
    details: 'In the IOT workshop I learn about the how traffic signals are works.',
    date: 'Septamber 15-16, 2023',
    image: '/assets/cert2.png',
  },
  {
    title: 'Pragyaa Event',
    preview: 'Pragyaa Event is the occoured in SGGS, Nanded. I learn Python in DS...',
    details: 'Deep understanding of algorithms helps write better performing code.',
    date: 'March 23, 2024',
    image: '/assets/cert3.png',
  },
 
  {
    title: 'Web Magic Event',
    preview: 'I joined in the Web Magic event in the collage. They teach me How to develop website',
    details: 'Cloud platforms are essential for deploying and managing modern applications.',
    date: 'March 27-28, 2024',
    image: '/assets/cert5.png',
  },
  
];

const CertificateGallery = () => {
  const carouselRef = useRef(null);
  const [angle, setAngle] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragAngle = useRef(angle);

  const rotateCarousel = (direction) => {
    const delta = direction === 'left' ? 1 : -1;
    const newAngle = angle + delta * (360 / certificates.length);
    setAngle(newAngle);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateZ(-480px) rotateY(${angle}deg)`;
    }
  }, [angle]);

  // Mouse Drag Events
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    dragAngle.current = angle;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    const rotationDelta = dx * 0.3; // drag sensitivity
    setAngle(dragAngle.current + rotationDelta);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const flipCard = (e) => {
    const card = e.currentTarget;
    card.classList.toggle('flipped');
  };

  return (
    <section id="certificate" style={{ padding: '100px 0', textAlign: 'center' }}>
      <h2 className="section-title typewriter">Certificates</h2>

      <div className="carousel-container">
        <div
          className="carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
        >
          {certificates.map((item, index) => (
            <div
              key={index}
              className="memory-card"
              style={{
                transform: `rotateY(${(360 / certificates.length) * index}deg) translateZ(480px)`,
              }}
              onClick={flipCard}
            >
              <div className="card-inner">
                {/* FRONT SIDE */}
                <div className="card-front">
                  <div className="card-content">
                    <div className="memory-date">{item.date}</div>
                    <div className="memory-image">
                      <img src={item.image} alt="certificate preview" />
                    </div>
                    <h3>{item.title}</h3>
                    <div className="memory-preview">{item.preview}</div>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="card-back">
                  <div className="card-content">
                    <p>{item.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <div className="control-btn" onClick={() => rotateCarousel('left')}>&lt;</div>
          <div className="control-btn" onClick={() => rotateCarousel('right')}>&gt;</div>
        </div>
      </div>
    </section>
  );
};

export default CertificateGallery;
>>>>>>> 886b6978df8be2c36327f6c715beb347ed34a08c:src/components/CertificateGallery.jsx
