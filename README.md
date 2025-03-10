# Easy Rent
- Frontend: React
- Backend: Laravel

## Prerequisites
- **PHP**
- **Composer**
- **Git**
- **Node.js & npm**
- **MySQL**

## Instace

### 1. Instalace PHP závislostí

```sh
composer install
```

### 2. Instalace Node.js závislostí (pro React)

```sh
npm install
```


### 3. Konfigurace prostředí

Zkopírujte soubor `.env.example` do `.env`:

```sh
cp .env.example .env
```

Poté upravte `.env` a nastavte **připojení k databázi** (např. MySQL).

### 4. Generování aplikačního klíče

```sh
php artisan key:generate
```

### 5. Migrace databáze

Vytvořte databázové tabulky:

```sh
php artisan migrate
```

📌 Ujistěte se, že máte správně nastavené připojení k databázi v `.env`.

### 6. Spuštění backendu

Spusťte Laravel server:

```sh
php artisan serve
```

Aplikace poběží na `http://127.0.0.1:8000/`.

### 9. Spuštění frontend aplikace (React)

V jiném terminálu spusťte:

```sh
npm run dev
```

Frontend poběží na `http://localhost:5173/` (nebo jiném portu dle Vite konfigurace).

### Další užitečné příkazy

🔹 **Vymazání cache:**
```sh
php artisan cache:clear
php artisan config:clear
```

🔹 **Restart db migrací:**
```sh
php artisan migrate:fresh --seed
```

🔹 **Sestavení frontend aplikace pro produkci:**
```sh
npm run build
```