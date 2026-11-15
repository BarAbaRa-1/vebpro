import { useState, useEffect } from 'react';

function Footer() {
    const [userAgent, setUserAgent] = useState('');
    const [platform, setPlatform] = useState('');

    useEffect(() => {

        localStorage.setItem('userAgent', navigator.userAgent);
        localStorage.setItem('platform', navigator.platform);


        setUserAgent(localStorage.getItem('userAgent'));
        setPlatform(localStorage.getItem('platform'));
    }, []);

    return (
        <footer className="text-center text-slate-500 dark:text-slate-400 text-sm mt-10">
            <p>&copy; 2026 Христина Лукащик | Група КБ-203</p>
            <h3 className="font-bold mt-3">Системна інформація:</h3>
            <p>Платформа: {platform}</p>
            <p className="break-all">Браузер: {userAgent}</p>
        </footer>
    );
}

export default Footer;
