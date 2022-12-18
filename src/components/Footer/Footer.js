import './Footer.css';

const Footer = () => {
    return (
        <footer className="footerPage">
            <section>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/alyson-eiti" target="_blank" rel="noreferrer">
                            <img src="/images/linkedin.png" alt="Linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/AlysonEiti" target="_blank" rel="noreferrer">
                            <img src="/images/github.png" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/alyson.eiti" target="_blank" rel="noreferrer">
                            <img src="/images/instagram.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Powered by <a href="https://www.linkedin.com/in/alyson-eiti" target="_blank" rel="noreferrer">Alyson Eiti</a>
                </p>
            </section>
        </footer>
    )
}

export default Footer;