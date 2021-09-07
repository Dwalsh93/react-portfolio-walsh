import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (

        <footer class="text-center text-lg-start bg-light text-muted">
            <section class="d-flex justify-content-center  p-4 border-bottom">
                <div>
                    <a href="mailto:Dillonwalsh93@gmail.com" class="me-4 text-reset fs-1">
                        <AiFillGoogleCircle />
                    </a>
                    <a href="https://www.linkedin.com/in/dillonrwalsh/" class="me-4 text-reset fs-1">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/Dwalsh93" class="me-4 text-reset fs-1">
                        <AiFillGithub />
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;


