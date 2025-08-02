# 👤 User Management App (React + JSONPlaceholder)

A beautiful and responsive **CRUD (Create, Read, Update, Delete)** user management web app built with **React**, **Axios**, and the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) fake API.

This project is fully functional, deployed on **Netlify** and **Vercel**, and styled with clean custom CSS (no Tailwind or frameworks).

---

## 🔗 Live Links

- 🌐 **Netlify**: [https://ffghgfcvh.netlify.app/](https://ffghgfcvh.netlify.app/)
- 🚀 **Vercel**: [https://user-management-app-six-blush.vercel.app/](https://user-management-app-six-blush.vercel.app/)
- 📁 **GitHub Repo**: [https://github.com/jshdghs/user-management-app](https://github.com/jshdghs/user-management-app)

---

## ⚙️ Features

- ✅ Fetch user list from JSONPlaceholder
- ➕ Add new users with validation
- 🔄 Edit existing users
- ❌ Delete users with confirmation
- 📬 Real-time email validation
- 💡 Form reset and UI feedback
- 💅 Fully responsive, beautiful UI using `App.css`

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Axios**
- **JSONPlaceholder API**
- **Vanilla CSS (App.css)**

---

## 📁 Folder Structure

src/
├── components/
│ ├── UserForm.js // Form for add/edit
│ └── UserList.js // User display cards
├── pages/
│ └── HomePage.js // Main page with logic
├── App.js // Routing
├── App.css // Custom CSS
├── api.js // Axios functions
└── index.js

---

## 🧪 Validation Logic

- All fields are **required**
- Email must match standard format (`name@example.com`)
- Error shown using `alert()` if invalid input is entered

---

## 🚀 Deployment Instructions

1. Clone repo:  
   `git clone https://github.com/jshdghs/user-management-app.git`

2. Install dependencies:  
   `npm install`

3. Run locally:  
   `npm start`

4. Build:  
   `npm run build`

5. Deploy via:
   - **Netlify**: Drag `build/` folder or connect GitHub repo
   - **Vercel**: Import GitHub repo and deploy

---

## 🧠 Author

Built by **Akhilesh Mandal**  
Feel free to fork, star, or contribute to the project.

---

## 📜 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).
