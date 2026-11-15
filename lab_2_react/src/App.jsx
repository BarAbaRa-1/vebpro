import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('dark');

    // при завантаженні дивимось котра година
    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 7 && hours < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className={theme}>
            <div className="min-h-screen bg-purple-50 dark:bg-[#0f172a] p-6">
                <div className="max-w-4xl mx-auto">
                    <Header theme={theme} changeTheme={changeTheme} />
                    <About />
                    <Education />
                    <Skills />
                    <Experience />
                    <Contact />
                    <Reviews />
                    <Footer />
                </div>
            </div>
            <ContactForm />
        </div>
    );
}

export default App;
