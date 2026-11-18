/* ---------- Colors (change these to restyle the whole page) ---------- */
:root {
  --primary: #2563eb;
  --dark: #0f172a;
  --text: #1e293b;
  --muted: #64748b;
  --bg: #f8fafc;
  --card: #ffffff;
  --border: #e2e8f0;
}

body.dark {
  --text: #e2e8f0;
  --muted: #94a3b8;
  --bg: #0f172a;
  --card: #1e293b;
  --border: #334155;
}

/* ---------- Base ---------- */
* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.7;
  color: var(--text);
  background-color: var(--bg);
  transition: background-color 0.3s, color 0.3s;
}

a { color: var(--primary); }

/* ---------- Hero ---------- */
.hero {
  text-align: center;
  padding: 110px 20px;
  color: white;
  background: linear-gradient(135deg, #0f172a, #2563eb);
}

.greeting { margin: 0; font-size: 1.1rem; opacity: 0.85; }
.hero h1 { margin: 5px 0; font-size: 3.2rem; }
.tagline { font-size: 1.2rem; opacity: 0.9; }

.buttons { margin-top: 28px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

.btn {
  padding: 12px 26px;
  border-radius: 6px;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid white;
  transition: transform 0.2s;
}
.btn:hover { transform: translateY(-2px); }
.btn.primary { background: white; color: var(--dark); }
.btn.secondary { background: transparent; color: white; }

/* ---------- Sections ---------- */
section {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px 20px;
}

section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 3px solid var(--primary);
  display: inline-block;
}

/* ---------- Cards ---------- */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 22px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); }
.card h3 { margin: 0 0 8px; color: var(--primary); }
.card p { margin: 0; color: var(--muted); }

#contact { padding-bottom: 60px; }