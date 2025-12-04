frontend:https://fin-track-b6da.vercel.app/login
backend:https://fintrack-y1nt.onrender.com

## [cite_start]🚀 FinTrack - Smart Expense Management System [cite: 2]

[cite_start]FinTrack is a centralized platform designed to record, visualize, and analyze user expenses, offering full control and financial clarity[cite: 7]. [cite_start]It solves the common problem of tracking costs across multiple apps, notebooks, or spreadsheets by providing a unified system with structured categorization, powerful search, and visual insights[cite: 4, 5, 6].

---

## ✨ Key Features

### [cite_start]A. Core Expense Management [cite: 21]
* [cite_start]Add, edit, and delete expenses[cite: 22, 23, 24].
* [cite_start]Categorize expenses (e.g., Food, Travel, Shopping)[cite: 25].

### [cite_start]B. Data Access & Usability (NEW) [cite: 30, 52]
* [cite_start]**Searching:** Search expenses by Title/description, Category, or Amount[cite: 32, 33, 34, 35].
* [cite_start]**Filtering:** Filter expenses by Category, Date range (Monthly/Custom), or Amount range[cite: 37, 38, 39, 40].
* [cite_start]**Sorting:** Sort by Date, Amount, or Category[cite: 42, 43, 45, 47].
* [cite_start]**Pagination:** Retrieve page-wise results (e.g., 10 expenses per page) with backend-supported pagination[cite: 48, 49, 50].

### [cite_start]C. Visual Analytics [cite: 26]
* [cite_start]Pie chart showing category-wise spending[cite: 27].
* [cite_start]Bar chart visualizing monthly expense trends[cite: 28].
* [cite_start]Budget tracker with limit alerts[cite: 29].

### [cite_start]D. Authentication & Authorization [cite: 18]
* [cite_start]User signup, login, and logout[cite: 19].
* [cite_start]JWT-protected routes[cite: 20].

---

## [cite_start]🛠️ Tech Stack Summary [cite: 66]

| Layer | Technologies | Hosting |
| :--- | :--- | :--- |
| **Frontend** | [cite_start]React.js, React Router, TailwindCSS [cite: 11, 70] | [cite_start]Vercel [cite: 16, 79] |
| **Backend** | [cite_start]Node.js, Express.js [cite: 12, 72] | [cite_start]Render/Railway [cite: 16, 79] |
| **Database** | [cite_start]MongoDB / PostgreSQL [cite: 13, 73] | [cite_start]MongoDB Atlas [cite: 16] |
| **Auth** | [cite_start]JWT (JSON Web Tokens) [cite: 14, 75] | - |
| **Charts** | [cite_start]Chart.js / Recharts [cite: 15, 77] | - |

---

## [cite_start]🛣️ Routing Overview [cite: 53]

The application will feature multi-page routing using React Router:

* [cite_start]`/` - Home [cite: 55]
* [cite_start]`/login` - Login [cite: 56]
* [cite_start]`/signup` - Signup [cite: 57]
* [cite_start]`/dashboard` - User dashboard [cite: 59]
* [cite_start]`/expenses` - Expense list (with search, filter, pagination) [cite: 61]
* [cite_start]`/add-expense` - Add new expense [cite: 63]
* [cite_start]`/profile` - User profile & settings [cite: 64]

---

## [cite_start]🔗 API Endpoints Overview [cite: 81]

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/auth/signup` | POST | Register user |
| `/api/auth/login` | POST | Login user |
| `/api/expenses` | GET | Get expenses with search, filter, sort, pagination |
| `/api/expenses` | POST | Add new expense |
| `/api/expenses/:id` | PUT | Update expense |
| `/api/expenses/:id` | DELETE | Delete expense |

---
