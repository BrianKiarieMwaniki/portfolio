import { useScrollAnimation, useStaggerAnimation } from "../hooks";
import { motion } from "framer-motion";
import { backendDev, desktopDev, webDev } from "../assets";

const AboutMe = () => {
  const { ref, isInView } = useScrollAnimation();
  const scope = useStaggerAnimation({ isInView, element: "article" });

  return (
    <div ref={ref} id="aboutme">
      <section className="section about">
        <h4 className="sub-heading">Introduction</h4>
        <h1 className="heading">Overview.</h1>
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

        <motion.div
          ref={scope}
          transition={{ staggerChildren: 0.5, delayChildren: 0.25 }}
          className="about__cards"
        >
          <article className="about__card hexagon">
            <div className="hexagon-inner">
              <img src={webDev} alt="web development" />
              <h1>
                Web <br /> Developement
              </h1>
            </div>
          </article>
          <article className="about__card    hexagon">
            <div className="hexagon-inner">
              <img src={desktopDev} alt="desktop development" />
              <h1>
                Desktop <br /> Developement
              </h1>
            </div>
          </article>
          <article className="about__card hexagon">
            <div className="hexagon-inner">
              <img src={backendDev} alt="backend services development" />
              <h1>
                Backend <br /> Services
              </h1>
            </div>
          </article>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutMe;
