import { useScrollAnimation } from "../hooks";
import parse from "html-react-parser";
import { AnimationControls, motion } from "framer-motion";
import { services } from "../constants";
import { slideIn, textVariant } from "../utils/motion";
import { useDispatchSectionInView } from "../hooks/useDispatchSectionInView";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
  animation: AnimationControls;
};
const ServiceCard = ({ index, title, icon, animation }: ServiceCardProps) => {
  return (
    <motion.article
      variants={slideIn({
        direction: "right",
        type: "tween",
        delay: 0.5 * index,
        duration: 0.75,
      })}
      initial="hidden"
      animate={animation}
      className="about__card hexagon"
    >
      <div className="hexagon-inner">
        <img src={icon} alt="desktop development" />
        <h1>{parse(title)}</h1>
      </div>
    </motion.article>
  );
};

const AboutMe = () => {
  const { ref,isInView, animation } = useScrollAnimation();

  useDispatchSectionInView(isInView, "about");

  return (
    <div ref={ref} id="about">
      <section className="section about">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate={animation}
        >
          <h4 className="sub-heading">Introduction</h4>
          <h1 className="heading">Overview.</h1>
        </motion.div>
        <p className="paragraph">
          As a Full Stack Developer specializing in web, desktop, and backend
          services, I am deeply passionate about solving complex problems and
          transforming ideas into elegant, functional code. My approach is
          rooted in the belief that the best solutions are not only effective
          but also clear and maintainable. I prioritize writing readable and
          well-organized code, considering it as much an art as it is a science.
        </p>
        <p className="paragraph">
          My process is dynamic; I initially focus on devising a working
          solution swiftly to address the immediate needs of a project. However,
          I firmly believe that there's always room for improvement. This leads
          me back to my initial solutions, refining them with a keen focus on
          readability, performance, and seamless integration.
        </p>
        <p className="paragraph">
          In my journey as a developer, I have honed my skills across various
          platforms, enabling me to adapt and thrive in diverse development
          environments. My experience ranges from crafting responsive web
          interfaces to engineering robust backend systems and building
          efficient desktop applications. Each project is an opportunity for me
          to bring a unique blend of precision, creativity, and a relentless
          pursuit of quality.
        </p>

        <div className="about__cards">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              animation={animation}
              {...service}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
