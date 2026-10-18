import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen bg-[#0f172a] p-6 max-w-4xl mx-auto">
            <Header />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;