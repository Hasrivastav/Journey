import "./styles/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Timeline from "./components/timiline";
import Footer from "./components/footer";

import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/arrow.scss";
import "./styles/About.scss";
import "./styles/timeline.scss";
import "./styles/footer.scss";
import "./styles/contact.scss"
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
