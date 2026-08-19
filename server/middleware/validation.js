export const validateContactInput = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: Name must be at least 2 characters long.'
    });
  }

  if (name.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: Name cannot exceed 100 characters.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: Please provide a valid email address.'
    });
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: Subject must be at least 2 characters long.'
    });
  }

  if (subject.length > 150) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: Subject cannot exceed 150 characters.'
    });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: Message must be at least 5 characters long.'
    });
  }

  if (message.length > 3000) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: Message cannot exceed 3000 characters.'
    });
  }

  // Sanitize trimmed strings
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.subject = subject.trim();
  req.body.message = message.trim();

  next();
};
