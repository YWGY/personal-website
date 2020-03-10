import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/sections/home";
import Aboutme from "./components/sections/aboutme";
import Experience from "./components/sections/experience";
import Project from "./components/sections/project";
import Skill from "./components/sections/skill";
import Footer from "./components/structure/footer";
import Sign from "./components/sections/sign";
import Login from "./components/elements/login";

class BasicRoute extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={Aboutme} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/sign" component={Sign} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default BasicRoute;
