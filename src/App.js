import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';


// import '@fortawesome/fontawesome-free/css/all.min.css'; import
// 'bootstrap-css-only/css/bootstrap.min.css'; import
// 'mdbreact/dist/css/mdb.css';


function App() {
  const [contactSelected, setContactSelected] = useState(true);
  const [projectsSelected, setProjectsSelected] = useState(true);

  // render() {
  //   if (contactSelected) {
  //     return <ContactForm></ContactForm>;
  //   } else if (projectsSelected) {
  //     <Projects></Projects>
  //   }
  //   else {
  //     return <About></About>
  //   }
  // }

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;