export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: 'Please provide name, email, and message.'
    });
  }

  return res.status(201).json({
    ok: true,
    message: `Thank you ${name}! Transmission successfully routed to Vrutti Patil.`,
    data: {
      name,
      email,
      subject: subject || 'Portfolio Inquery',
      receivedAt: new Date().toISOString()
    }
  });
}
