# Эвикс — маркетинговый сайт

React-приложение маркетингового сайта AI-студии контента «Эвикс».

## Стек

- **Vite** + **React 18** + **React Router 6**
- **Tailwind CSS** + кастомный `custom.css`
- Шрифт **Montserrat** (Google Fonts)

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production-сборка в dist/
npm run preview  # просмотр собранной версии
```

## Структура

```
src/
├── main.jsx                    BrowserRouter
├── App.jsx                     роуты
├── styles/
│   ├── tailwind.css            @tailwind base/components/utilities
│   └── custom.css              глобальные стили, анимации
├── hooks/
│   └── useScrollReveal.js      IntersectionObserver для .reveal
├── components/
│   ├── Header.jsx              навигация + дропдауны + мобильное меню
│   ├── Footer.jsx
│   └── Layout.jsx              Outlet + scroll-to-top
├── data/
│   └── functionsData.js        каталог модулей и ниш
└── pages/
    ├── Home.jsx                /
    ├── Functions.jsx           /functions (16 модулей)
    ├── Pricing.jsx             /pricing (Free / Pro)
    ├── Clients.jsx             /clients (кейсы и отзывы)
    ├── About.jsx               /about
    ├── Blog.jsx                /blog
    ├── Contacts.jsx            /contacts
    ├── Faq.jsx                 /faq
    ├── KnowledgeBase.jsx       /knowledge-base
    ├── Implementation.jsx      /implementation
    ├── Training.jsx            /training
    └── Integrations.jsx        /integrations
```
