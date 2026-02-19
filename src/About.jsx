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
    </div>
  );
}
