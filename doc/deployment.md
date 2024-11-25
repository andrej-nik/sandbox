### Инструкция по развертыванию

1. Сборка проекта:
- Выполните команду сборки из `package.json`:
```bash
npm run build
```
- Результат: папка `build`.

2. Копирование файлов на сервер:
- На сервере создайте папку для приложения:
```bash
mkdir -p /var/sandbox/build
```
- Скопируйте папку `build` на сервер:
```bash
scp -r build/ root@domain.com:/var/sandbox
```

3. Настройка прав доступа:
- Дайте права nginx:
```bash
sudo chown -R www-data:www-data /var/sandbox
sudo chmod -R 755 /var/sandbox
```

4. Установка Basic-аутентификаций:
- Установим утилиту:
```bash
sudo htpasswd -c /etc/nginx/.htpasswd username
```
(Флаг `-c` используется только при создании нового файла)

5. Настройка Nginx:
- Откройте файл конфигураций:
```bash
sudo nano /etc/nginx/sites-available/default
```
- Добавьте настройки:
```nginx
server {
    listen 80;
    server_name domain.com;

    root /var/sandbox/build;
    index index.html;

    auth_basic "Restricted Area";
    auth_basic_user_file /etc/nginx/.htpasswd;

    location / {
        try_files $uri /index.html;
    }

    location /netdata/ {
        proxy_pass http://127.0.0.1:19999/;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. Перезапуск Nginx:
- Примените изменения:
```bash
sudo systemctl restart nginx
```