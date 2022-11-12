import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { Layout } from "./components/layout";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <Layout>
      <div className="wrapper">
        {/* <!-- navbar --> */}
        <TopNav />

        {/* <!-- hero section --> */}
        <Hero />

        {/* <!-- skills --> */}
        <Skills />

        {/* <!-- projects --> */}
        <Project />

        {/* <!-- about me --> */}
        <AboutMe />

        {/* <!-- contact me --> */}
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
