import Event from "../models/Event.js";

export const getEvents = async (req, res) => {
  const events = await Event.find().populate("organization", "name");
  res.json(events);
};

export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id).populate("volunteers", "name");
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
};

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, organization: req.user.id });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const joinEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });

  if (!event.volunteers.includes(req.user.id)) {
    event.volunteers.push(req.user.id);
    await event.save();
  }
  res.json(event);
};

export const leaveEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });

  event.volunteers = event.volunteers.filter(id => id.toString() !== req.user.id);
  await event.save();
  res.json(event);
};
