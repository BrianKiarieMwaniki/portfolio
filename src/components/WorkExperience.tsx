import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { useScrollAnimation } from "../hooks";
import { useDispatchSectionInView } from "../hooks/useDispatchSectionInView";

type ExperienceCardProps = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

const ExperienceCard = (experience: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      className="experience-card"
      contentStyle={{ background: "#fff", color: "rgb(var(--color-black))" }}
      contentArrowStyle={{ borderRight: "7px solid rgb(var(--color-accent))" }}
      date={experience.date}
      dateClassName="experience-card__date"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="experience-card__icon">
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
    >
      <div className="">
        <h3 className="experience-card__title">{experience.title}</h3>
        <p className="experience-card__company-name">
          {experience.company_name}
        </p>
        <ul className="experience-card__points">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`}>{point}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  const { ref,isInView, animation } = useScrollAnimation();

  useDispatchSectionInView(isInView, "experience");

  return (
    <section ref={ref} className="section experience" id="experience">
      <motion.div variants={textVariant()} initial="hidden" animate={animation}>
        <h4 className="sub-heading">What I have done</h4>
        <h1 className="heading">Work Experience.</h1>
      </motion.div>

      <div className="experience__cards">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;
