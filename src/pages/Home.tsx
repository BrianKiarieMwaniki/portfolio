import { StarsCanvas } from "../components/canvas";
import {
  AboutMe,
  Contact,
  Hero,
  Projects,
  Skills,
  WorkExperience,
} from "./../components/index";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Skills />
      <Projects />
      {/* <section>
        Services:
        <ul>
          <li>
            If you offer specific services, outline them here. Briefly describe
          </li>
          <li>
            each service and how you can help potential clients or employers.
          </li>
        </ul>
      </section> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
