import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import About from "./components/About";
import Experience from "./components/Experience";
import Eduction from "./components/Education"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Home from "./components/Home"

const Routing = ()=>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/skill" component={Skill} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/eduction" component={Eduction} />
      <Route exact path="/project" component={Project} />
    </Switch>  
  )
}

function App() {
  return (
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
  );
}

export default App;
