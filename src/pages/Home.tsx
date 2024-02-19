import React from "react";
import { Hero, AboutMe, Projects, Skills, Contact } from "./../components/index";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <>
        <Hero />
      </>

      <>
        <AboutMe />
      </>

      <section>
        <Projects />
      </section>

      <section>
        Services:
        <ul>
          <li>
            If you offer specific services, outline them here. Briefly describe
          </li>
          <li>
            each service and how you can help potential clients or employers.
          </li>
        </ul>
      </section>
      <section>
        <Skills/>
      </section>
      <section>
        <Contact/>
      </section>
    </>
  );
};

export default Home;
