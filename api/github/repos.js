export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const fetchRes = await fetch('https://api.github.com/users/Vrutti88/repos?sort=updated&per_page=6', {
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
      data: [
        { name: "LinguaHub", html_url: "https://github.com/Vrutti88/LinguaHub", language: "JavaScript", stargazers_count: 5, forks_count: 1 },
        { name: "Peer-Tutor", html_url: "https://github.com/Vrutti88/Peer-Tutor", language: "JavaScript", stargazers_count: 3, forks_count: 0 },
        { name: "HUFT-Clone", html_url: "https://github.com/Vrutti88/HUFT-Clone", language: "HTML", stargazers_count: 4, forks_count: 1 },
        { name: "HomeConnect", html_url: "https://github.com/Vrutti88/HomeConnect", language: "JavaScript", stargazers_count: 2, forks_count: 0 }
      ]
    });
  }
}
