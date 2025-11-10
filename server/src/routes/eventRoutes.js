import express from "express";
import {
  createEvent,
  getEvents,
  getEventById,
  joinEvent,
  leaveEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", authenticate, createEvent);
router.put("/:id", authenticate, updateEvent);
router.delete("/:id", authenticate, deleteEvent);
router.post("/:id/join", authenticate, joinEvent);
router.post("/:id/leave", authenticate, leaveEvent);

export default router;
