import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const server = http.createServer(app);

// ✅ allow frontend to connect in real-time
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // your client address
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

// health check for uptime / readiness
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), now: new Date().toISOString() });
});

// ===== MongoDB connection =====
mongoose
 mongoose.connect("mongodb://localhost:27017/helphub")
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// ===== Socket.IO connection =====
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  // receive a new post from frontend
  socket.on("new_post", (post) => {
    // broadcast to everyone
    io.emit("receive_post", post);
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
