# 🔗 Short URL

A simple Node.js URL shortener with click analytics, built using Express and MongoDB.

## 🚀 Features

- Shortens long URLs
- Redirects using short codes
- Tracks total clicks for each short URL
- Stores data in MongoDB

## 🛠️ Setup

```bash
git clone https://github.com/sunny21sep/Short-URL.git
cd Short-URL
npm install
```

Create a `.env` file with:

```env
MONGO_URI=your_mongodb_uri
BASE_URL=http://localhost:5000
PORT=5000
```

Start the server:

```bash
npm run dev
```

## 📦 API

- `POST /api/url/shorten` – Provide `longUrl` in JSON to get a short URL.
- `GET /:code` – Redirects to the original long URL and increments click count.

## 📊 Analytics

- Each short URL tracks the total number of clicks and can be accessed directly from the database.

---

Made with ❤️ by [@sunny21sep](https://github.com/sunny21sep)
```
