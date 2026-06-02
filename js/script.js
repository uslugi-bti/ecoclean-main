// ========== ПОПАП ДЛЯ ПОСЛУГ (Сервіси) ==========
(function() {
    const servicesData = [
        { title: "Генеральне прибирання", description: "Професійне генеральне прибирання — це комплексна та глибока очистка приміщення, яка охоплює всі зони, включаючи важкодоступні місця, що зазвичай залишаються поза увагою під час регулярного прибирання. Ми ретельно очищаємо підлогу, стіни, меблі, техніку, санвузли та кухонні поверхні, видаляємо пил, жир, наліт і забруднення будь-якої складності.<br><br>Наша команда використовує професійне обладнання та безпечні миючі засоби, щоб забезпечити ідеальну чистоту без шкоди для здоров’я та матеріалів. Генеральне прибирання ідеально підходить після ремонту, перед важливими подіями або як періодичне оновлення чистоти у вашому домі чи офісі. Це не просто прибирання — це повне перезавантаження простору, яке створює комфорт і відчуття свіжості." },
        { title: "Прибирання після ремонту", description: "Прибирання після ремонту — це складний і трудомісткий процес, який потребує професійного підходу та спеціального обладнання. Ми видаляємо будівельний пил, залишки фарби, клею, шпаклівки та інших матеріалів з усіх поверхонь: підлоги, стін, вікон, меблів і техніки. Особливу увагу приділяємо важкодоступним місцям, де найчастіше накопичується дрібнодисперсний пил.<br><br>Наша команда використовує професійні пилососи, ефективні миючі засоби та перевірені методи очищення, щоб швидко та безпечно привести приміщення до ідеального стану. Після нашої роботи простір стає повністю готовим до проживання або використання — без пилу, запахів і слідів ремонту." },
        { title: "Миття вікон", description: "Професійне миття вікон — це якісне очищення скла, рам і підвіконь від пилу, бруду, слідів дощу та інших забруднень. Ми ретельно миємо внутрішню та зовнішню сторону вікон, приділяючи увагу кожній деталі, щоб досягти ідеальної прозорості без розводів.<br><br>Використовуємо спеціалізовані засоби та інструменти, які забезпечують швидкий і безпечний результат навіть на великих висотах або складних конструкціях. Чисті вікна пропускають більше світла, покращують вигляд приміщення та створюють відчуття свіжості й комфорту у вашому домі чи офісі." },
        { title: "Хімічне чищення", description: "Хімічне чищення — це ефективний спосіб глибокого очищення м’яких меблів, килимів, матраців та текстильних покриттів від складних забруднень, пилу, алергенів і неприємних запахів. Ми використовуємо професійні засоби та обладнання, які проникають у структуру матеріалу, розчиняють бруд і обережно виводять його без пошкодження тканини.<br><br>Наші спеціалісти підбирають оптимальні методи очищення залежно від типу матеріалу та ступеня забруднення, щоб забезпечити максимальний результат і зберегти зовнішній вигляд виробів. Хімічне чищення допомагає не лише повернути чистоту, а й продовжити термін служби ваших меблів і текстилю, створюючи здорову та комфортну атмосферу у приміщенні." }
    ];

    // Стилі для попапу послуг
    if (!document.getElementById('service-popup-styles')) {
        const style = document.createElement('style');
        style.id = 'service-popup-styles';
        style.textContent = `.service-popup, .service-popup * { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif !important; }`;
        document.head.appendChild(style);
    }

    function createServicePopup(service, imageUrl) {
        const popup = document.createElement('div');
        popup.className = 'service-popup fixed inset-0 z-[100] flex items-center justify-center p-4';
        popup.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
        popup.innerHTML = `
            <div class="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
                <div class="relative h-52 overflow-hidden">
                    <img class="w-full h-full object-cover" src="${imageUrl}" alt="${service.title}">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button class="close-service-popup absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                    <div class="absolute bottom-4 left-4 right-4"><h3 class="text-xl font-black text-white">${service.title}</h3></div>
                </div>
                <div class="p-7">
                    <p class="text-gray-600 text-sm mb-7 leading-relaxed">${service.description}</p>
                    <a href="#contact">
                        <button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg">Замовити →</button>
                    </a>
                </div>
            </div>
        `;
        return popup;
    }

    function openServicePopup(service, imageUrl) {
        const oldPopup = document.querySelector('.service-popup');
        if (oldPopup) oldPopup.remove();
        
        const popup = createServicePopup(service, imageUrl);
        document.body.appendChild(popup);
        document.body.style.overflow = 'hidden';
        
        const close = () => {
            popup.remove();
            document.body.style.overflow = '';
        };
        
        popup.addEventListener('click', (e) => { if (e.target === popup) close(); });
        popup.querySelector('.close-service-popup').addEventListener('click', close);
        popup.querySelector('.order-service-btn').addEventListener('click', () => {
            alert(`Замовлено: ${service.title}`);
            close();
        });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); }, { once: true });
    }

    // Ініціалізація кнопок послуг
    function initServicePopups() {
        document.querySelectorAll('.grid > .group').forEach((card, i) => {
            const btn = card.querySelector('button');
            if (btn && servicesData[i]) {
                const img = card.querySelector('img');
                const imgUrl = img?.src && !img.src.includes('data:image') ? img.src : 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800';
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    openServicePopup(servicesData[i], imgUrl);
                });
            }
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initServicePopups);
    else initServicePopups();
})();

// ========== ПОПАП ДЛЯ ПОРТФОЛІО (Роботи) ==========
(function() {
    const portfolioItems = [
        { category: "Генеральне прибирання", title: "Ідеальна чистота в кожному куточку кухні.", img: "img/portfolio/01.jpg" },
        { category: "Генеральне прибирання", title: "Сяюча чистота навіть у найскладніших місцях.", img: "img/portfolio/02.jpg" },
        { category: "Генеральне прибирання", title: "Професійне обладнання для бездоганного результату прибирання.", img: "img/portfolio/03.jpg" },
        { category: "Після ремонту", title: "Приберемо весь будівельний пил до блиску.", img: "img/portfolio/04.jpg" },
        { category: "Після ремонту", title: "Готова до використання ванна без пилу.", img: "img/portfolio/05.jpg" },
        { category: "Хімчистка", title: "Глибоке очищення оббивки для свіжості меблів.", img: "img/portfolio/06.jpg" },
        { category: "Хімчистка", title: "Очищення дивана від плям та пилу.", img: "img/portfolio/07.jpg" },
        { category: "Хімчистка", title: "Професійна чистка дивана: свіжість та чистота.", img: "img/portfolio/08.jpg" },
        { category: "Генеральне прибирання", title: "Повертаємо затишок та охайність вашій кухні.", img: "img/portfolio/09.jpg" },
        { category: "Після ремонту", title: "Очистимо кожен сантиметр після будівельних робіт.", img: "img/portfolio/10.jpg" },
        { category: "Хімчистка", title: "Дбайливе видалення забруднень з вашої оббивки.", img: "img/portfolio/11.jpg" },
        { category: "Генеральне прибирання", title: "Сяюча чистота та порядок у вітальні.", img: "img/portfolio/12.jpg" },
    ];

    // Стилі для попапу портфоліо
    if (!document.getElementById('portfolio-popup-styles')) {
        const style = document.createElement('style');
        style.id = 'portfolio-popup-styles';
        style.textContent = `.portfolio-popup, .portfolio-popup * { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif !important; }`;
        document.head.appendChild(style);
    }

    function createPortfolioPopup(item) {
        const popup = document.createElement('div');
        popup.className = 'portfolio-popup fixed inset-0 z-[100] flex items-center justify-center p-4';
        popup.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
        popup.innerHTML = `
            <div class="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl">
                <img class="w-full h-auto max-h-[80vh] object-cover" src="${item.img}" alt="${item.title}">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span class="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">${item.category}</span>
                    <h4 class="text-white font-black text-xl">${item.title}</h4>
                </div>
                <button class="close-portfolio-popup absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
            </div>
        `;
        return popup;
    }

    function openPortfolioPopup(item) {
        const oldPopup = document.querySelector('.portfolio-popup');
        if (oldPopup) oldPopup.remove();
        
        const popup = createPortfolioPopup(item);
        document.body.appendChild(popup);
        document.body.style.overflow = 'hidden';
        
        const close = () => {
            popup.remove();
            document.body.style.overflow = '';
        };
        
        popup.addEventListener('click', (e) => { if (e.target === popup) close(); });
        popup.querySelector('.close-portfolio-popup').addEventListener('click', close);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); }, { once: true });
    }

    function renderPortfolio(container, items, showAll = false) {
        const itemsToShow = showAll ? items : items.slice(0, 8);
        container.innerHTML = itemsToShow.map(item => `
            <button class="portfolio-item group relative overflow-hidden rounded-2xl aspect-square cursor-pointer w-full">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="${item.img}" alt="${item.title}">
                <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span class="text-green-400 text-[10px] font-bold uppercase tracking-widest mb-1">${item.category}</span>
                    <h4 class="text-white font-bold text-sm leading-tight">${item.title}</h4>
                </div>
                <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-100">${item.category}</div>
            </button>
        `).join('');
        
        document.querySelectorAll('.portfolio-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const title = btn.querySelector('h4')?.innerText;
                const item = items.find(i => i.title === title);
                if (item) openPortfolioPopup(item);
            });
        });
    }

    function initPortfolio() {
        const portfolioGrid = document.querySelector('#portfolio .grid');
        const loadMoreBtn = document.querySelector('#portfolio .mt-10 button');
        
        if (portfolioGrid && loadMoreBtn) {
            renderPortfolio(portfolioGrid, portfolioItems, false);
            loadMoreBtn.addEventListener('click', () => {
                renderPortfolio(portfolioGrid, portfolioItems, true);
                loadMoreBtn.style.display = 'none';
            });
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPortfolio);
    else initPortfolio();
})();

// ========== FAQ АКОРДЕОН ==========
(function() {
    // Дані для FAQ (питання та відповіді)
    const faqItems = [
        {
            question: "Коли потрібно робити генеральне прибирання?",
            answer: "Ми рекомендуємо проводити генеральне прибирання кожні 3–6 місяців для підтримки здорової атмосфери в оселі."
        },
        {
            question: "Які роботи включає послуга генеральне прибирання?",
            answer: "Вона включає миття вікон, знепилення всіх поверхонь, миття підлоги, чистку санвузлів, кухні (включаючи техніку всередині) та багато іншого."
        },
        {
            question: "Чи входить миття вікон у прибирання?",
            answer: "Миття вікон входить до послуги генерального прибирання. Для щоденного прибирання миття вікон виконується за окремим запитом."
        },
        {
            question: "Чи надаються гарантії якості?",
            answer: "Так, якщо ви виявите недоліки протягом 24 годин після прибирання, ми виправимо їх безкоштовно."
        },
        {
            question: "Скільки тривалість прибирання / хімчистки?",
            answer: "Тривалість залежить від площі та виду послуги. Стандартне прибирання квартири 50–70 м² займає 2–4 години."
        },
        {
            question: "Наскільки ефективно видаляються плями?",
            answer: "Ми використовуємо професійну хімію Chemspec (США) та Kiehl (Німеччина), що забезпечує видалення навіть застарілих плям у 95% випадків."
        },
        {
            question: "Чи безпечно перебувати під час хімчистки в приміщенні?",
            answer: "Наші засоби гіпоалергенні та безпечні для людей і домашніх тварин. Після хімчистки рекомендуємо провітрити приміщення 30 хвилин."
        }
    ];

    // Стилі для анімації акордеону
    if (!document.getElementById('faq-styles')) {
        const style = document.createElement('style');
        style.id = 'faq-styles';
        style.textContent = `
            .faq-answer {
                max-height: 0;
                opacity: 0;
                overflow: hidden;
                transition: max-height 0.3s ease-out, opacity 0.2s ease-out;
            }
            .faq-answer.active {
                max-height: 300px;
                opacity: 1;
                transition: max-height 0.4s ease-in, opacity 0.3s ease-in;
            }
            .faq-icon {
                transition: transform 0.3s ease;
            }
            .faq-icon.rotated {
                transform: rotate(45deg);
            }
        `;
        document.head.appendChild(style);
    }

    // Функція для створення FAQ блоку
    function createFAQ(faqContainer) {
        faqContainer.innerHTML = faqItems.map((item, index) => `
            <div class="faq-item bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-green-200 transition-colors">
                <button class="faq-btn w-full flex items-center justify-between gap-4 p-5 text-left" data-index="${index}">
                    <span class="font-semibold text-gray-900 text-sm pr-2">${item.question}</span>
                    <span class="shrink-0">
                        <svg class="faq-icon w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </span>
                </button>
                <div class="faq-answer" data-answer="${index}">
                    <p class="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">${item.answer}</p>
                </div>
            </div>
        `).join('');

        // Додаємо обробники подій
        document.querySelectorAll('.faq-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = btn.getAttribute('data-index');
                const answerDiv = document.querySelector(`.faq-answer[data-answer="${index}"]`);
                const icon = btn.querySelector('.faq-icon');
                
                // Закриваємо всі інші відповіді
                document.querySelectorAll('.faq-answer').forEach(answer => {
                    if (answer !== answerDiv && answer.classList.contains('active')) {
                        answer.classList.remove('active');
                        const otherBtn = document.querySelector(`.faq-btn[data-index="${answer.getAttribute('data-answer')}"]`);
                        const otherIcon = otherBtn?.querySelector('.faq-icon');
                        if (otherIcon) otherIcon.classList.remove('rotated');
                    }
                });
                
                // Відкриваємо/закриваємо поточну відповідь
                answerDiv.classList.toggle('active');
                icon.classList.toggle('rotated');
            });
        });
    }

    // Ініціалізація FAQ
    function initFAQ() {
        const faqContainer = document.querySelector('.space-y-3');
        if (faqContainer) {
            createFAQ(faqContainer);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQ);
    } else {
        initFAQ();
    }
})();

// ========== ФОРМА ЗВОРОТНОГО ЗВ'ЯЗКУ ==========
(function() {
    // Стилі для попапу форми
    if (!document.getElementById('form-popup-styles')) {
        const style = document.createElement('style');
        style.id = 'form-popup-styles';
        style.textContent = `
            .form-popup, .form-popup * {
                font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Функція створення попапу з формою
    function createFormPopup() {
        const popup = document.createElement('div');
        popup.className = 'form-popup fixed inset-0 z-[200] flex items-center justify-center p-4';
        popup.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
        popup.innerHTML = `
            <div class="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <h3 class="text-xl font-black text-gray-900">Залишити заявку</h3>
                        <p class="text-sm text-gray-500 mt-0.5">на безкоштовну консультацію</p>
                    </div>
                    <button class="close-form-popup w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <form class="contact-form space-y-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2">Ваше ім'я</label>
                        <input type="text" name="name" placeholder="Ім'я" class="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2">Телефон</label>
                        <input type="tel" name="phone" placeholder="+38 (___) ___-__-__" class="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2">Електронна пошта</label>
                        <input type="email" name="email" placeholder="email@example.com" class="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2">Ваше повідомлення</label>
                        <textarea name="message" rows="3" placeholder="Опишіть, що вас цікавить..." class="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-xl text-base transition-all shadow-lg shadow-green-200 hover:-translate-y-0.5 active:translate-y-0">
                        Надіслати
                    </button>
                </form>
            </div>
        `;
        return popup;
    }

    // Функція відкриття попапу
    function openFormPopup() {
        const oldPopup = document.querySelector('.form-popup');
        if (oldPopup) oldPopup.remove();
        
        const popup = createFormPopup();
        document.body.appendChild(popup);
        document.body.style.overflow = 'hidden';
        
        const close = () => {
            popup.remove();
            document.body.style.overflow = '';
        };
        
        // Закриття по кліку на фон
        popup.addEventListener('click', (e) => {
            if (e.target === popup) close();
        });
        
        // Закриття по хрестику
        popup.querySelector('.close-form-popup').addEventListener('click', close);
        
        // Закриття по Escape
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                close();
                document.removeEventListener('keydown', handleKeyDown);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        
        // Відправка форми
        const form = popup.querySelector('.contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: form.querySelector('[name="name"]').value,
                phone: form.querySelector('[name="phone"]').value,
                email: form.querySelector('[name="email"]').value,
                message: form.querySelector('[name="message"]').value
            };
            
            console.log('Форма відправлена:', formData);
            alert(`Дякуємо, ${formData.name}! Вашу заявку прийнято. Ми зв'яжемося з вами найближчим часом.`);
            close();
        });
    }

    // Ініціалізація: знаходимо всі кнопки "Замовити чистку"
    function initFormPopup() {
        // Шукаємо всі кнопки, які містять текст "Замовити чистку"
        const buttons = document.querySelectorAll('button, a');
        
        buttons.forEach(btn => {
            const btnText = btn.innerText || btn.textContent;
            if (btnText && btnText.includes('Замовити чистку')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    openFormPopup();
                });
            }
        });
    }

    // Запускаємо після завантаження DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFormPopup);
    } else {
        initFormPopup();
    }
})();

// ========== МОБІЛЬНЕ МЕНЮ (з ID) ==========
(function() {
    if (!document.getElementById('mobile-menu-styles')) {
        const style = document.createElement('style');
        style.id = 'mobile-menu-styles';
        style.textContent = `
            #mobileMenu {
                max-height: 0;
                opacity: 0;
                overflow: hidden;
                transition: max-height 0.4s ease-out, opacity 0.3s ease-out;
            }
            #mobileMenu.open {
                max-height: 500px;
                opacity: 1;
                transition: max-height 0.5s ease-in, opacity 0.4s ease-in;
            }
        `;
        document.head.appendChild(style);
    }

    function initMobileMenu() {
        const menuBtn = document.querySelector('button[aria-label="Відкрити меню"]');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (!menuBtn || !mobileMenu) return;

        const menuIcon = menuBtn.querySelector('svg');
        if (menuIcon) menuIcon.classList.add('menu-icon');

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('open');
            if (menuIcon) menuIcon.classList.toggle('open');
        });

        // Закриття при кліку на будь-яке посилання або кнопку всередині
        mobileMenu.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                if (menuIcon) menuIcon.classList.remove('open');
            });
        });

        // Закриття при зміні розміру вікна на десктоп
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                mobileMenu.classList.remove('open');
                if (menuIcon) menuIcon.classList.remove('open');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();