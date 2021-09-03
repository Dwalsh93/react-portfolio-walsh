import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
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
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li>
                        <span>Projects</span>
                        {/* use switch-case / to switch pages */}
                    </li>
                    <li>
                        <span>Resume</span>
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