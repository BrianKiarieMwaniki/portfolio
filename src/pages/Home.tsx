import {
  Hero,
  AboutMe,
  Projects,
  Skills,
  Contact,
  WorkExperience,
} from "./../components/index";

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
      <>
        <WorkExperience />
      </>
      <>
        <Skills />
      </>
      <>
        <Projects />
      </>
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
        <Contact />
      </section>
    </>
  );
};

export default Home;
