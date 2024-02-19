import { skills } from "../constants";
import { motion } from "framer-motion";


type SkillCardProps = {
  name: string;
  icon: string;
};
const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05}}
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
  return (   
      <section       
        className="section skills"
      >
       
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
      </section>
    
  );
};

export default Skills;
