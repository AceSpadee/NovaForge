function Footer() {
    return (
        <footer className="footer">
            <p className="footer-brand">NovaForge</p>
            <p className="footer-tagline">
                Modern websites and web solutions for small businesses.
            </p>

            <nav aria-label="Footer navigation">
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <p>&copy; {new Date().getFullYear()} NovaForge. All rights reserved.</p>
        </footer>
    )
};

export default Footer;