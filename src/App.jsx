import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"
import "./app.css"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

