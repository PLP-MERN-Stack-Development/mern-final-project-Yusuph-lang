🌍 HelpHub – Connect. Support. Empower.

HelpHub is a community-driven MERN application that connects people who need help with those who can offer support — in real time.
It promotes compassion, collaboration, and empowerment through technology.

🚀 Features

🤝 Real-time communication (Socket.IO)

📢 Post and share opportunities

🔍 Search for help or volunteering opportunities

🧠 Community discussion area

💬 Feedback and personal support forms

🌐 Responsive React frontend (Vite)

⚙️ Secure Express + MongoDB backend

🛠️ Tech Stack
Layer	Technology
Frontend	React + Vite + React Router
Backend	Node.js + Express
Database	MongoDB (Mongoose ORM)
Real-time	Socket.IO
Hosting	Vercel (Frontend) + Render (Backend)
Version Control	Git + GitHub
⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/yourusername/helphub.git
cd helphub

2. Install dependencies

Frontend

cd client
npm install
npm run dev


Backend

cd ../server
npm install
npm run dev

🌐 Environment Variables

Create a .env file in your server folder and add:

MONGO_URI=mongodb+srv://<your-cluster-url>
PORT=5000

🧩 API Documentation
Method	Endpoint	Description
GET	/api/posts	Fetch all posts
POST	/api/posts	Create a new post
GET	/api/users/:id	Fetch user details
POST	/api/feedback	Submit feedback
🧑‍💻 Contributors

Yusuph Joee – Developer & Project Lead

HelpHub Community

📊 Architecture Overview
Frontend (React + Vite)
   ↓
Backend (Express + Node.js)
   ↓
Database (MongoDB)
   ↕
Socket.IO for real-time updates

🌱 Mission & Vision

Mission: To create a safe and accessible platform where communities can connect, support, and empower each other.
Vision: A world where every person finds help and hope through collaboration.

💬 Contact

📧 support@helphub.com

📍 Nairobi, Kenya
🌐 HelpHub Website

🌐Render url: https://mern-final-project-yusuph-lang.onrender.com
🌐Vercel url: https://mern-final-project-yusuph-lang.vercel.app/

