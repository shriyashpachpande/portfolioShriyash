import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css"; // Move all CSS to this file
import {
  FaCode,
  FaBug,
  FaBookOpen,
  FaAtom,
  FaCodeBranch,
  FaRocket,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaLocationDot
} from "react-icons/fa6";

const memories = [
  {
    id: 1,
    date: "LANGUAGE: Python",
    title: "First Line of Code",
    icon: <FaCode />,
    preview: "The terminal glowed, displaying my first 'Hello, World!'...",
    description:
      "I remember the thrill of typing my first 'Hello, World!' in Python...",
    location: "console: ~",
    time: "09:00:00"
  },
  {
    id: 2,
    date: "FRAMEWORK: ReactJS",
    title: "Debugging the Matrix",
    icon: <FaBug />,
    preview: "The error messages multiplied, haunting my console...",
    description:
      "They appeared from the depths of the console, cryptic error messages...",
    location: "localhost:3000",
    time: "14:30:15"
  },
  {
    id: 3,
    date: "FRAMEWORK: ReactJS",
    title: "Debugging the Matrix",
    icon: <FaBug />,
    preview: "The error messages multiplied, haunting my console...",
    description:
      "They appeared from the depths of the console, cryptic error messages...",
    location: "localhost:3000",
    time: "14:30:15"
  },
  {
    id: 4,
    date: "FRAMEWORK: ReactJS",
    title: "Debugging the Matrix",
    icon: <FaBug />,
    preview: "The error messages multiplied, haunting my console...",
    description:
      "They appeared from the depths of the console, cryptic error messages...",
    location: "localhost:3000",
    time: "14:30:15"
  },
  {
    id: 5,
    date: "FRAMEWORK: ReactJS",
    title: "Debugging the Matrix",
    icon: <FaBug />,
    preview: "The error messages multiplied, haunting my console...",
    description:
      "They appeared from the depths of the console, cryptic error messages...",
    location: "localhost:3000",
    time: "14:30:15"
  },
  // Add other memory objects here...
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [theta, setTheta] = useState(0);
  const [radius, setRadius] = useState(window.innerWidth <= 768 ? 250 : 400);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = memories.length;

  const rotateCarousel = (angle) => {
    setTheta((prev) => {
      const newTheta = prev + angle;
      carouselRef.current.style.transform = `rotateY(${newTheta}deg)`;
      const index = Math.round(Math.abs(newTheta / (360 / totalCards)) % totalCards);
      setCurrentIndex(index);
      return newTheta;
    });
  };

  const arrangeCards = () => {
    const angle = 360 / totalCards;
    const cards = document.querySelectorAll(".memory-card");
    cards.forEach((card, index) => {
      const cardAngle = angle * index;
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
      card.setAttribute("data-index", index);
    });
  };

  useEffect(() => {
    arrangeCards();
    window.addEventListener("resize", () => {
      const newRadius = window.innerWidth <= 768 ? 250 : 400;
      setRadius(newRadius);
    });
  }, [radius]);

  return (
    <div className="cosmos-background">
      <div className="stars-container"></div>
      <main className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {memories.map((memory, index) => (
            <div key={memory.id} className="memory-card" data-index={index}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <div className="memory-date">{memory.date}</div>
                    <h3>{memory.title}</h3>
                    <div className="memory-image">
                      {memory.icon}
                      <div className="glitch-effect"></div>
                    </div>
                    <p className="memory-preview">{memory.preview}</p>
                    <div className="card-glow"></div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-content">
                    <h3>{memory.title}</h3>
                    <p>{memory.description}</p>
                    <div className="memory-coordinates">
                      <span><FaLocationDot /> {memory.location}</span>
                      <span className="time-stamp"><FaClock /> {memory.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="control-btn" onClick={() => rotateCarousel(360 / totalCards)}>
            <FaChevronLeft />
          </button>
          <button className="control-btn" onClick={() => rotateCarousel(-360 / totalCards)}>
            <FaChevronRight />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Carousel;
