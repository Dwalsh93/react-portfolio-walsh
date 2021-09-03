import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';

// import '@fortawesome/fontawesome-free/css/all.min.css'; import
// 'bootstrap-css-only/css/bootstrap.min.css'; import
// 'mdbreact/dist/css/mdb.css';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
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