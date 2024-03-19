import { AnimationControls, motion } from "framer-motion";
import React, { FC } from "react";
import { Tilt } from "react-tilt";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { useScrollAnimation } from "../hooks";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  codeLink: string;
  siteLink: string;
  published: boolean;
  animation: AnimationControls;
};
const ProjectCard: FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  codeLink,
  siteLink,
  published,
  animation,
}) => {
  return (
    <motion.div
      variants={slideIn({
        direction: "up",
        type: "tween",
        delay: index * 0.5,
        duration: 0.75,
      })}
      initial="hidden"
      animate={animation}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="project-card"
      >
        <div className="project-card__content">
          <img src={image} alt={name} className="project-card__img" />
          <div className="project-card__icons-holder">
            <div
              className="project-card__icon"
              onClick={() => window.open(codeLink, "_blank")}
            >
              <svg className="icon">
                <use xlinkHref="/icons.svg#icon-github"></use>
              </svg>
            </div>
            <div
              className="project-card__icon"
              onClick={() => window.open(siteLink, "_blank")}
            >
              <svg className="icon">
                <use xlinkHref="/icons.svg#icon-link"></use>
              </svg>
            </div>
          </div>
          <h3 className="heading project-card__name">{name}</h3>
          <p className="paragraph project-card__description">{description}</p>
          <div className="project-card__tags">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="project-card__tag"
                style={{ color: `${tag.color}` }}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, animation } = useScrollAnimation();

  return (
    <section ref={ref} className="section projects" id="projects">
      <motion.div variants={textVariant()} initial="hidden" animate={animation}>
        <h4 className="sub-heading">My work</h4>
        <h1 className="heading">Projects.</h1>
      </motion.div>
      <motion.p
        variants={fadeIn({
          direction: "down",
          type: "tween",
          duration: 0.2,
          delay: 0.1,
        })}
        initial="hidden"
        animate={animation}
        className="paragraph"
      >
        Welcome to the showcase of my professional journey, where each project
        is a testament to my technical prowess and problem-solving capabilities.
        Within this portfolio, you'll find a curated selection of my work, each
        accompanied by a succinct description, along with accessible links to
        both the code repositories and live demonstrations. These projects not
        only highlight my proficiency in handling a variety of technologies but
        also illustrate my effective project management skills and my knack for
        navigating and resolving complex challenges. Dive in to see how my
        expertise is put into action, creating impactful and innovative
        solutions
      </motion.p>

      <div className="projects__cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            animation={animation}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
