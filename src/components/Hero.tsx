import { FC } from "react";
import { heroDp, hero_bg } from "../assets";
import {
  useDispatchSectionInView,
  useScrollAnimation,
  useTypewriter,
} from "../hooks";
import gsap from "gsap";

type Props = {};

const Hero: FC = (props: Props) => {
  const animatedText = useTypewriter({
    data: [
      "Full-stack development",
      "Front-end development",
      "Back-end development",
    ],
    typingSpeed: 300,
    deletingSpeed: 300,
    delayBetweenWords: 2500,
  });

  const { ref, isInView } = useScrollAnimation();

  useDispatchSectionInView(isInView, "hero");

  const scrollTo = () => {
    gsap.to(window, {
      duration: 1.8,
      scrollTo: { y: "#about", offsetY: 200 },
      ease:'power2.out'
    });
  };

  return (
    <section
      ref={ref}
      className="hero"
      style={{ backgroundImage: `url(${hero_bg})` }}
    >
      <div className="hero__info">
        <h1 className="heading">
          Hi, I'm <span className="primary-color">Brian</span>{" "}
        </h1>
        <p className="paragraph">
          I specialize in <span className="primary-color">#{animatedText}</span>
        </p>
      </div>
      <div className="hero__img-container">
        <div className="hexagon">
          <div className="hexagon-inner">
            <img src={heroDp} alt="developer" />
          </div>
        </div>
      </div>

      <div className="hero__btn-container">
        <button onClick={scrollTo} className="btn btn--primary btn--animated">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
