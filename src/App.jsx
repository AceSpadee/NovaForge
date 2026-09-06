import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Problems from "./components/Problems.jsx";
import Process from "./components/Process.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <Navbar />

            <main id="main-content" tabIndex="-1">
                <Hero />
                <Services />
                <Problems />
                <Process />
                <FAQ />
                <Contact />
            </main>
            
            <Footer />
        </>
    )
}

export default App