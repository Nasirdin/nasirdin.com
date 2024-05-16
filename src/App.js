import React, { Suspense } from "react";
// import Contacts from "./components/Contacts";
// import Experience from "./components/Experience";
import Home from "./components/Home";
// import Numbers from "./components/Numbers";
// import Portfolio from "./components/Portfolio";
// import Skills from "./components/Skills";
import "./index.scss";
const Experience = React.lazy(() => import("./components/Experience"));
const Numbers = React.lazy(() => import("./components/Numbers"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Skills = React.lazy(() => import("./components/Skills"));
const Contacts = React.lazy(() => import("./components/Contacts"));

function App() {
  return (
    <div className="App">
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Numbers />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contacts />
      </Suspense>
    </div>
  );
}

export default App;
