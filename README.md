# Эвикс — маркетинговый сайт

Лендинг для AI-студии контента «Эвикс». Сценарии, аватары, монтаж, обложки и трекинг публикаций — в одном кабинете.

## Структура

```
.
├── index.html              Главная
├── functions.html          Функции (16 модулей продукта)
├── pricing.html            Тарифы (Free / Pro)
├── clients.html            Кейсы и отзывы
├── about.html              О компании
├── blog.html               Блог
├── contacts.html           Контакты
├── faq.html                Часто задаваемые вопросы
├── knowledge-base.html     База знаний
├── implementation.html     Внедрение
├── training.html           Обучение
├── integrations.html       Интеграции (подключение соцсетей)
└── assets/
    ├── css/custom.css
    └── js/
        ├── tw-config.js    Tailwind extend (цвета, шрифты, тени)
        ├── landing.js      Логика сайта (бургер, ревил, счётчики)
        └── functions.js    Динамика на странице «Функции»
```

## Стек

- **Tailwind CSS** (CDN, JIT) + кастомный `custom.css`
- **Шрифт** Montserrat (Google Fonts)
- Ванильный JS, без сборки
