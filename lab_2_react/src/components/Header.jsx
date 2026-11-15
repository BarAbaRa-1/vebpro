import { useState } from 'react';

function Header(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <header className="bg-white dark:bg-[#1e1b4b] border-2 border-purple-600 p-6 rounded-xl text-center mb-6">
      <h1 className="text-3xl font-bold text-[#1e1b4b] dark:text-white">Христина Лукащик</h1>
      <p className="text-slate-600 dark:text-slate-300 mt-1">Студентка 2 курсу | Кібербезпека | Група КБ-203</p>

      {/* кнопка для зміни теми */}
      <button
        onClick={props.changeTheme}
        className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer"
      >
        {props.theme === 'dark' ? '🌙 Нічна тема' : '☀️ Денна тема'}
      </button>
      <br />

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-3 text-sm text-purple-600 dark:text-purple-400 underline hover:text-purple-300 cursor-pointer"
      >
        {showDetails ? 'Сховати деталі' : 'Показати деталі'}
      </button>

      {showDetails && (
        <div className="mt-3 text-slate-600 dark:text-slate-300 text-sm border-t border-purple-500/30 pt-3">
          <p>📍 Львівська політехніка</p>
          <p>✉️ Email: khrystyna.lukashchyk@lpnu.ua</p>
        </div>
      )}
    </header>
  );
}

export default Header;
