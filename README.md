# KT Partners — статический сайт

## Состав
- `index.html` — одностраничный лендинг
- `assets/style.css` — стили
- `assets/script.js` — калькулятор вознаграждения

## Деплой
- GitHub Pages / любой статический хостинг:
  1. Залейте файлы в корень ветки `gh-pages` или `/docs` вашего репозитория.
  2. Включите Pages.
- Nginx/Apache: раздавайте папку как `root`.

## Где править тексты
Откройте `index.html` и замените тексты в секциях: Hero, Продукты, Как работает, Выплаты, О нас, Команда.

## Примечание про WordPress
WordPress нельзя хостить на GitHub Pages (нужен PHP + база данных). Для WordPress используйте тариф с PHP/MySQL (VPS/Shared) и тему из архива `kt-partners-wp-theme.zip`.
