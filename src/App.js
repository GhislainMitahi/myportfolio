import React from "react";
import Header from "./components/header"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact" 

const App = () => {
const dataName = {
  firstName: "Ghislain",
  lastName: "Mitahi",
}
  return (
    <div>
        <Nav data={dataName}/>
        <Header data={dataName}/>
        <Projects/>
        <About/>
        <Contact/>
    </div>
  );
}

export default App;
