export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const fetchRes = await fetch('https://api.github.com/users/Vrutti88', {
      headers: {
        'User-Agent': 'Vrutti-Portfolio-App'
      }
    });
    if (!fetchRes.ok) throw new Error('GitHub API Error');
    const data = await fetchRes.json();
    return res.status(200).json({ ok: true, data });
  } catch {
    return res.status(200).json({
      ok: true,
      data: {
        login: "Vrutti88",
        name: "Vrutti Patil",
        public_repos: 4,
        followers: 12,
        following: 15,
        bio: "B.Tech CSE Student | Full-Stack & Backend Systems Developer"
      }
    });
  }
}
