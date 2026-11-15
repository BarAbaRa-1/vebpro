import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/13/comments')
      .then((res) => res.json())
      .then((data) => {
        const ukrainianData = [
          {
            title: "ТОВ «Кібер Захист»",
            email: "hr@cybersecurity.ua",
            body: "Христина проявила себе як висококваліфікований фахівець у галузі кібербезпеки. Відповідально ставиться до виконання завдань."
          },
          {
            title: "IT-Студія «Secure Web»",
            email: "tech-lead@secureweb.com",
            body: "Відмінний рівень знань у сфері мережевих технологій та аудіту систем безпеки. Рекомендую до співпраці!"
          },
          {
            title: "Центр мережевих рішень",
            email: "admin@net-solutions.ua",
            body: "Швидко засвоює нові технології, чудово працює в команді та завжди дотримується дедлайнів."
          },
          {
            title: "Департамент безпеки даних",
            email: "info@datasec.org",
            body: "Чудові навички веб-розробки та аналізу вразливостей. Проєкт було виконано якісно та вчасно."
          },
          {
            title: "Аналітична компанія «Lviv Tech»",
            email: "contact@lvivtech.ua",
            body: "Професіонал своєї справи. Завжди пропонує ефективні рішення складних технічних завдань."
          }
        ];

        const mappedComments = data.map((item, index) => {
          const info = ukrainianData[index % ukrainianData.length];
          return {
            id: item.id,
            name: info.title,
            email: info.email,
            body: info.body
          };
        });

        setComments(mappedComments);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження відгуків:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ color: '#c084fc' }}>Завантаження відгуків...</p>;

  return (
    <section className="reviews-section" style={{ marginTop: '2rem' }}>
      <h2 style={{ color: '#c084fc', marginBottom: '1rem', fontSize: '1.5rem' }}>
        Відгуки попередніх роботодавців
      </h2>

      <div className="reviews-list">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            style={{ 
              border: '2px solid #8b5cf6', 
              borderRadius: '12px', 
              padding: '1.2rem', 
              marginBottom: '1rem',
              backgroundColor: 'rgba(30, 27, 75, 0.5)',
              boxShadow: '0 4px 10px rgba(139, 92, 246, 0.15)'
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#e9d5ff', fontSize: '1.1rem' }}>
              {comment.name} <span style={{ color: '#a855f7', fontSize: '0.9rem' }}>({comment.email})</span>
            </h3>

            <p style={{ margin: 0, color: '#c084fc', lineHeight: '1.5', fontSize: '1rem' }}>
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;