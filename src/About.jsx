import "./Components/About.css";
import Typewriter from "./Components/Typewriter";


export default function About() {
  return (
    <div className="page">
      <div className="selected-wrap">
        <img
          src="/assets/selectedtext.PNG"
          alt="selected text"
          className="top-left"
        />

        <div className="typewriter-on-image">
          <Typewriter text="Hello, I'm Judith!" />
        </div>
      </div>

      <div className="about-text">
        "I am a college student in my third year and majoring in computer science with a concentration in cybersecurity and cloud! I have an IT internship that has fostered a growing interest in the application of tech in the real-world solving real problems." 
      </div>

      <div className="comp-sci">
        <img src="/assets/menjosie.jpg" alt="compsci" className="comp-sci-image" />
        <img src="/assets/hackathon.jpg" alt="hackathon" className="hackathon-img" />
      </div>

      <div className = "digi">
        <img src="/assets/digicam.PNG" alt="digi" className="digicam" />
      </div>
    </div>
  );
}
