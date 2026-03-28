# 🎬 MovieRank - PWA для оценки фильмов

Progressive Web App для ранжирования и оценки кинопродукции. Позволяет оценивать фильмы, создавать списки, получать рекомендации и делиться с друзьями.

## 📋 Возможности

### 🔐 Регистрация и авторизация
- Регистрация через email
- Вход через социальные сети (Google, Apple, VK) - демо
- Редактирование профиля

### 🎥 Работа с фильмами
- Поиск по названию, жанру, году, актёрам
- Карточка фильма с описанием и рейтингом
- Оценка по шкале 1-10
- Добавление в списки: просмотренные, избранные, к просмотру
- Фильтрация и сортировка

### ⭐ Ранжировка и рекомендации
- Автоматические топы: лучшие/худшие фильмы
- Персональные рекомендации на основе оценок
- Сравнение с друзьями
- Глобальный рейтинг

### 👥 Социальные функции
- Подписка на друзей
- Лента активности друзей
- Шаринг в Telegram, WhatsApp, VK, Twitter

### ⚙️ Настройки
- Тёмная/светлая тема
- Выбор языка
- Настройки уведомлений
- Управление приватностью

### 💎 Premium (демо)
- Без рекламы
- Экспорт списков
- Расширенная статистика

## 🚀 Деплой на GitHub Pages

### Шаг 1: Создайте репозиторий
```bash
git init
git add .
git commit -m "Initial commit - MovieRank PWA"
git remote add origin https://github.com/USERNAME/movierank.git
git branch -M main
git push -u origin main
```

### Шаг 2: Включите GitHub Pages
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save

### Шаг 3: Готово! 🎉
Приложение будет доступно: `https://USERNAME.github.io/movierank/`

## 📱 Установка PWA

### Android (Chrome)
1. Открыть сайт
2. Меню → "Добавить на главный экран"

### iOS (Safari)
1. Открыть сайт
2. Поделиться → "На экран Домой"

### Компьютер (Chrome/Edge)
1. Нажать иконку установки в адресной строке

## 🎨 Генерация иконок

1. Откройте `generate-icons.html` в браузере
2. Скачайте иконки 192x192 и 512x512
3. Поместите в папку `icons/`

## 📁 Структура проекта

```
movierank/
├── index.html          # Главная страница
├── styles.css          # Стили (тёмная/светлая тема)
├── app.js              # Логика приложения
├── sw.js               # Service Worker
├── manifest.json       # PWA манифест
├── icons/              # Иконки
│   ├── icon-192.png
│   └── icon-512.png
├── generate-icons.html # Генератор иконок
└── README.md
```

## 🛠 Технологии

- **HTML5** - семантическая разметка
- **CSS3** - CSS Variables, Flexbox, Grid, анимации
- **JavaScript (ES6+)** - классы, async/await, localStorage
- **Service Worker** - кэширование, офлайн-режим
- **Web App Manifest** - установка как приложение

## 📊 Архитектура

### Хранение данных
- `localStorage` - состояние приложения
- Демо-данные встроены в `app.js`

### Структура данных
```javascript
state = {
    user: { id, name, email },
    ratings: { [movieId]: { value, date } },
    lists: {
        watched: [movieIds],
        favorites: [movieIds],
        towatch: [movieIds],
        custom: [{ id, name, movies[] }]
    },
    friends: [userIds],
    settings: { theme, language, notifications, privacy },
    notifications: []
}
```

## 🎓 Для университета

Этот проект демонстрирует технологию **PWA (Progressive Web Apps)**:

1. **Устанавливаемость** - веб-приложение можно установить как нативное
2. **Офлайн-работа** - Service Worker обеспечивает кэширование
3. **Кроссплатформенность** - работает на любых устройствах
4. **Адаптивность** - responsive дизайн для всех экранов

## 📝 Лицензия

MIT License - свободное использование

---

Создано для демонстрации PWA технологии 🎬