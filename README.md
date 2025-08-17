💰 Personal Finance Dashboard

A MERN Stack application to manage personal finances with features like income & expense tracking, category management, authentication, and insightful dashboard analytics.

🚀 Features

🔐 User Authentication – JWT-based signup/login/logout

📊 Dashboard – Overview of total income, expenses, and balance

💵 Income & Expense Management – Add, edit, delete, and categorize transactions

🔄 Protected Routes – Only authenticated users can access finance data

✨ Interactive UI – Responsive React frontend with modern styling

📈 Insights – Visual representation of financial data

🛠️ Tech Stack

Frontend: React.js, Context API, Styled Components / TailwindCSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: JWT (JSON Web Token)
Other: bcrypt for password hashing

📂 Project Structure
personal-finance-dashboard/
│── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── context/     # Global context (Auth, Transactions)
│   │   ├── pages/       # Dashboard, Login, Signup, Income, Expenses
│   │   └── App.js       
│
│── server/              # Node.js backend
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── controllers/     # Business logic
│   └── server.js        
│
│── README.md
│── package.json

⚡ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/personal-finance-dashboard.git
cd personal-finance-dashboard

2. Install Dependencies
# For backend
cd server
npm install

# For frontend
cd ../client
npm install

3. Environment Variables

Create a .env file inside the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run the Application
# Start backend
cd server
npm start

# Start frontend
cd ../client
npm start


The app will be available at http://localhost:3000 🚀

✅ Future Enhancements

📊 Advanced financial analytics

📅 Event calendar for recurring expenses

☁️ Cloud deployment (Vercel + Render/Heroku)

📱 Mobile-friendly PWA

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Fork the repo and submit a pull request.
