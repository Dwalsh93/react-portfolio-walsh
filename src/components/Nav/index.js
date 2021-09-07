import React from 'react';

function Nav(props) {
    const {
        page, setPage
    } = props;


    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="books"> 📚</span> Dwalsh
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${page === "About" && 'navActive'}`} onClick={() => setPage("About")}>
                        About me
                    </li>
                    <li className={`mx-2 ${page === "Contact" && 'navActive'}`} onClick={() => setPage("Contact")} >
                        Contact
                    </li>
                    <li className={`mx-2 ${page === "Projects" && 'navActive'}`} onClick={() => setPage("Projects")} >
                        Projects
                    </li>
                    <li>
                        <span><a href="https://github.com/Dwalsh93/dwresume/raw/main/Dillon%20Walsh-Resume-V2%20(1).pdf">Resume</a></span>
                    </li>
                    <li>
                        <span><a href="https://github.com/Dwalsh93">GitHub</a></span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;