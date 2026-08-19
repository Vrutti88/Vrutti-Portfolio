import { store } from '../config/db.js';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
    const userAgent = req.headers['user-agent'] || 'unknown';

    const newContact = await store.createContactMessage({
      name,
      email,
      subject,
      message,
      ip: typeof ip === 'string' ? ip.split(',')[0] : '127.0.0.1',
      userAgent
    });

    res.status(201).json({
      success: true,
      message: 'Message transmitted and logged successfully to server queue.',
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        subject: newContact.subject,
        createdAt: newContact.createdAt
      }
    });
  } catch (err) {
    next(err);
  }
};

export const getContactMessages = async (req, res, next) => {
  try {
    const messages = await store.getContactMessages();
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (err) {
    next(err);
  }
};
