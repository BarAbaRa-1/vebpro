import { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

   
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
                    <div className="bg-white dark:bg-[#1e1b4b] border-2 border-purple-600 rounded-xl p-6 w-80 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-3 text-slate-700 dark:text-white cursor-pointer"
                        >
                            Закрити
                        </button>

                        <h2 className="text-xl font-bold text-pink-500 mb-4">Зворотний зв'язок</h2>

                        <form action="https://formspree.io/f/xjyyadgz" method="POST" className="flex flex-col gap-2 text-slate-700 dark:text-slate-200">
                            <label>Ім'я</label>
                            <input type="text" name="name" required className="border border-purple-500 rounded p-2" />

                            <label>Email</label>
                            <input type="email" name="email" required className="border border-purple-500 rounded p-2" />

                            <label>Номер телефону</label>
                            <input type="tel" name="phone" required className="border border-purple-500 rounded p-2" />

                            <label>Повідомлення</label>
                            <textarea name="message" rows="4" required className="border border-purple-500 rounded p-2"></textarea>

                            <button type="submit" className="mt-2 bg-purple-600 text-white rounded-lg p-2 hover:bg-purple-700 cursor-pointer">
                                Надіслати
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactForm;
