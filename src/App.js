import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>gxtnewfolder</title>
      </Helmet>
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
