import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState("About");

  const renderPage = () => {
    if (page === "About") return <About />
    if (page === "Contact") return <ContactForm />
    if (page === "Projects") return <Cards />
  }

  return (
    <div>
      <Nav
        page={page}
        setPage={setPage}
      />
      <main>
        {renderPage()}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;