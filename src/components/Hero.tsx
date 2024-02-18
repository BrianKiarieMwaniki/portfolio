import { FC } from "react";
import { heroDp, hero_bg, logo } from "../assets";
import { useTypewriter } from "../hooks";

type Props = {};

const Hero: FC = (props: Props) => {
  const animatedText = useTypewriter({
    data: [
      "Software Developer",
      "Front-end Developer",
      "Back-end Developer",
    ],
    typingSpeed: 300,
    deletingSpeed: 300,
    delayBetweenWords: 2500,
  });
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero_bg})` }}>
      <div className="hero__logo-box">
        <img src={logo} alt="logo" className="hero__logo" />
      </div>
      <h1 className="heading">
        Hi, I'm a <span className="primary-color">#{animatedText}</span>{" "}
      </h1>
      <div className="hero__img-container">
        <div className="hexagon">
          <div className="hexagon-inner">
            <img src={heroDp} alt="developer" />
          </div>
        </div>
      </div>

      <div className="hero__btn-container">
        <a href="#aboutme" className="btn btn--primary btn--animated">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
