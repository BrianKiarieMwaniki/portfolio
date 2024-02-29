import { skills } from "../constants";
import { motion } from "framer-motion";
import { useScrollAnimation, useStaggerAnimation } from "../hooks";

type SkillCardProps = {
  name: string;
  icon: string;
};
const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="skill-card hexagon"
    >
      <div className="hexagon-inner">
        <img src={icon} alt={name} />
        <p>{name}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, isInView } = useScrollAnimation({ triggerOnce: true });
  const scope = useStaggerAnimation({
    isInView,
    element: "article",
    type: "spring",
    bounce: 1.25,
    stiffness: 100,
    staggerEase: [0.01, 0.94, 1, 0.81],
  });
  return (
    <div ref={ref}>
      <section className="section skills">
        <motion.div ref={scope} className="skills__cards">
          {skills.map((skill, index) => (
            <article key={index}>
              <SkillCard {...skill} />
            </article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
