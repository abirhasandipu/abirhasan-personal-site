import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

//css
import classes from "./Pages/home/home.module.css";
//components and pages
import Home from "./Pages/home/Home";
import Projects from "./Pages/projects/Projects";
import Blog from "./Pages/blog/Blog";
import Experience from "./Pages/experience/Experience";
import Skills from "./Pages/skills/Skills";
import Interests from "./Pages/interests/Interests";
import About from "./Pages/about/About";
import CV from "./Pages/cv/CV";
import Sidebar from "./Components/sidebar/Sidebar";

function App() {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isPortrait = useMediaQuery({ maxWidth: 767, orientation: "portrait" });

  return (
    <div className="App">
      <Router>
        <div className={classes.homeParentDiv}>
          {!isPortrait && <Sidebar />}
          <div className={classes.homeBody}>
            <Switch>
              <Route
                path="/"
                exact
                component={() => <Home isPortrait={isPortrait} />}
              />
              <Route path="/projects" component={Projects} />
              <Route path="/blog" component={Blog} />
              <Route path="/experience" component={Experience} />
              <Route path="/skills" component={Skills} />
              <Route path="/interests" component={Interests} />
              <Route path="/about" component={About} />
              <Route path="/cv" component={CV} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
