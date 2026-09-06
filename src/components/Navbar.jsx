function Navbar() {
    return (
        <nav className="navbar" aria-label="Primary navigation">
            <a href="#top" className="navbar-brand">NovaForge</a>

            <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>

            <a href="#contact" className="nav-contact">Contact</a>
        </nav>
    )
};

export default Navbar;