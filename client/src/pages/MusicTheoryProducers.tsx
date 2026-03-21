import { useEffect } from "react";

const COURSE_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

.mkms-course-page {
  background: #0e0e0e;
  color: #e8e4dc;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  --bg: #0e0e0e;
  --surface: #161616;
  --surface2: #1e1e1e;
  --border: #2a2a2a;
  --border-bright: #3a3a3a;
  --text: #e8e4dc;
  --muted: #6a6660;
  --accent: #e8622a;
  --accent-dim: #7a3318;
  --accent-soft: rgba(232, 98, 42, 0.12);
  --green: #4a9e6a;
  --green-soft: rgba(74, 158, 106, 0.12);
  --amber: #d4920a;
  --amber-soft: rgba(212, 146, 10, 0.12);
  --blue: #4a8ec4;
  --blue-soft: rgba(74, 142, 196, 0.12);
  --purple: #8a6ed4;
  --purple-soft: rgba(138, 110, 212, 0.12);
  --phase1: #e8622a;
  --phase2: #4a9e6a;
  --phase3: #4a8ec4;
  --phase4: #8a6ed4;
}

.mkms-course-page * { box-sizing: border-box; margin: 0; padding: 0; }

.mkms-course-page .site-header {
  border-bottom: 1px solid var(--border);
  padding: 0 48px;
}
.mkms-course-page .header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 16px;
  border-bottom: 1px solid var(--border);
}
.mkms-course-page .school-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
}
.mkms-course-page .course-meta {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.mkms-course-page .hero { padding: 40px 0 36px; }
.mkms-course-page .hero-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}
.mkms-course-page .hero h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 72px;
  line-height: 0.92;
  letter-spacing: 0.02em;
  color: var(--text);
  margin-bottom: 20px;
}
.mkms-course-page .hero h1 em { color: var(--accent); font-style: normal; }
.mkms-course-page .hero-desc {
  font-family: 'Instrument Serif', serif;
  font-size: 17px;
  font-style: italic;
  color: #a09890;
  max-width: 600px;
  line-height: 1.55;
  margin-bottom: 28px;
}
.mkms-course-page .hero-stats { display: flex; gap: 32px; flex-wrap: wrap; }
.mkms-course-page .stat { display: flex; flex-direction: column; gap: 3px; }
.mkms-course-page .stat-val {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  color: var(--text);
  line-height: 1;
}
.mkms-course-page .stat-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
.mkms-course-page .stat-divider { width: 1px; background: var(--border); align-self: stretch; }

.mkms-course-page .phase-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--border);
  border-bottom: 3px solid var(--border);
}
.mkms-course-page .phase-tab {
  padding: 16px 20px;
  border-right: 1px solid var(--border);
  cursor: default;
  transition: background 0.15s;
}
.mkms-course-page .phase-tab:last-child { border-right: none; }
.mkms-course-page .phase-tab:hover { background: var(--surface); }
.mkms-course-page .phase-num {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.mkms-course-page .phase-tab-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 16px;
  letter-spacing: 0.04em;
  line-height: 1.2;
  margin-bottom: 6px;
}
.mkms-course-page .phase-tab-weeks {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 0.1em;
}
.mkms-course-page .phase-tab.p1 .phase-num,
.mkms-course-page .phase-tab.p1 .phase-tab-title { color: var(--phase1); }
.mkms-course-page .phase-tab.p2 .phase-num,
.mkms-course-page .phase-tab.p2 .phase-tab-title { color: var(--phase2); }
.mkms-course-page .phase-tab.p3 .phase-num,
.mkms-course-page .phase-tab.p3 .phase-tab-title { color: var(--phase3); }
.mkms-course-page .phase-tab.p4 .phase-num,
.mkms-course-page .phase-tab.p4 .phase-tab-title { color: var(--phase4); }

.mkms-course-page .main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 48px 80px;
}
.mkms-course-page .phase-section { margin-bottom: 64px; }
.mkms-course-page .phase-header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0;
  margin-bottom: 28px;
  border: 1px solid var(--border);
  overflow: hidden;
}
.mkms-course-page .phase-color-bar { width: 6px; }
.mkms-course-page .phase-header-inner {
  padding: 20px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.mkms-course-page .phase-header-left .phase-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.mkms-course-page .phase-header-left h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  letter-spacing: 0.03em;
  line-height: 1;
  margin-bottom: 8px;
}
.mkms-course-page .phase-header-left p {
  font-family: 'Instrument Serif', serif;
  font-size: 14px;
  font-style: italic;
  color: #8a8278;
  max-width: 480px;
  line-height: 1.5;
}
.mkms-course-page .phase-header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
}
.mkms-course-page .phase-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 1px;
}
.mkms-course-page .phase-book-ref {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.08em;
  color: var(--muted);
  text-align: right;
  line-height: 1.5;
}

.mkms-course-page .phase-section.p1 .phase-color-bar { background: var(--phase1); }
.mkms-course-page .phase-section.p1 .phase-label { color: var(--phase1); }
.mkms-course-page .phase-section.p1 .phase-header-left h2 { color: var(--phase1); }
.mkms-course-page .phase-section.p1 .phase-badge { background: var(--accent-soft); color: var(--phase1); border: 1px solid var(--accent-dim); }
.mkms-course-page .phase-section.p2 .phase-color-bar { background: var(--phase2); }
.mkms-course-page .phase-section.p2 .phase-label { color: var(--phase2); }
.mkms-course-page .phase-section.p2 .phase-header-left h2 { color: var(--phase2); }
.mkms-course-page .phase-section.p2 .phase-badge { background: var(--green-soft); color: var(--phase2); border: 1px solid rgba(74,158,106,0.3); }
.mkms-course-page .phase-section.p3 .phase-color-bar { background: var(--phase3); }
.mkms-course-page .phase-section.p3 .phase-label { color: var(--phase3); }
.mkms-course-page .phase-section.p3 .phase-header-left h2 { color: var(--phase3); }
.mkms-course-page .phase-section.p3 .phase-badge { background: var(--blue-soft); color: var(--phase3); border: 1px solid rgba(74,142,196,0.3); }
.mkms-course-page .phase-section.p4 .phase-color-bar { background: var(--phase4); }
.mkms-course-page .phase-section.p4 .phase-label { color: var(--phase4); }
.mkms-course-page .phase-section.p4 .phase-header-left h2 { color: var(--phase4); }
.mkms-course-page .phase-section.p4 .phase-badge { background: var(--purple-soft); color: var(--phase4); border: 1px solid rgba(138,110,212,0.3); }

.mkms-course-page .units-grid { display: flex; flex-direction: column; gap: 2px; }
.mkms-course-page .unit-card {
  background: var(--surface);
  border: 1px solid var(--border);
  overflow: hidden;
}
.mkms-course-page .unit-header {
  display: grid;
  grid-template-columns: 52px 1fr auto;
  align-items: center;
  gap: 0;
  border-bottom: 1px solid var(--border);
}
.mkms-course-page .unit-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  text-align: center;
  padding: 12px 8px;
  border-right: 1px solid var(--border);
  color: var(--muted);
  line-height: 1;
}
.mkms-course-page .unit-title-wrap { padding: 12px 16px; }
.mkms-course-page .unit-week {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2px;
}
.mkms-course-page .unit-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  letter-spacing: 0.01em;
}
.mkms-course-page .unit-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 3px 10px;
  margin-right: 16px;
  border-radius: 1px;
}
.mkms-course-page .unit-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
}
.mkms-course-page .unit-col { padding: 14px 16px; border-right: 1px solid var(--border); }
.mkms-course-page .unit-col:last-child { border-right: none; }
.mkms-course-page .col-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--border);
}
.mkms-course-page .col-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.mkms-course-page .col-list li {
  font-size: 12px;
  color: #b0a89e;
  line-height: 1.45;
  padding-left: 12px;
  position: relative;
}
.mkms-course-page .col-list li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--muted);
  font-size: 11px;
}

.mkms-course-page .p1 .unit-tag { background: var(--accent-soft); color: var(--phase1); border: 1px solid var(--accent-dim); }
.mkms-course-page .p2 .unit-tag { background: var(--green-soft); color: var(--phase2); border: 1px solid rgba(74,158,106,0.3); }
.mkms-course-page .p3 .unit-tag { background: var(--blue-soft); color: var(--phase3); border: 1px solid rgba(74,142,196,0.3); }
.mkms-course-page .p4 .unit-tag { background: var(--purple-soft); color: var(--phase4); border: 1px solid rgba(138,110,212,0.3); }

.mkms-course-page .resources-section { margin-bottom: 64px; }
.mkms-course-page .resources-header {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 12px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-bottom: 16px;
}
.mkms-course-page .resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
.mkms-course-page .resource-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 16px 18px;
}
.mkms-course-page .resource-type {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 6px;
}
.mkms-course-page .resource-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 4px;
  line-height: 1.3;
}
.mkms-course-page .resource-note { font-size: 11px; color: var(--muted); line-height: 1.45; }

.mkms-course-page .transition-note {
  background: var(--surface2);
  border: 1px solid var(--border-bright);
  border-left: 4px solid var(--phase3);
  padding: 18px 22px;
  margin: -12px 0 64px;
  font-size: 12.5px;
  color: #9a928a;
  line-height: 1.6;
  font-style: italic;
}
.mkms-course-page .transition-note strong {
  color: var(--phase3);
  font-style: normal;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.mkms-course-page .graduation-note {
  background: var(--surface);
  border: 1px solid var(--border-bright);
  padding: 24px 28px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: start;
}
.mkms-course-page .grad-icon { font-size: 28px; line-height: 1; margin-top: 4px; }
.mkms-course-page .grad-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 6px;
}
.mkms-course-page .grad-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  letter-spacing: 0.04em;
  color: var(--text);
  margin-bottom: 8px;
}
.mkms-course-page .grad-desc { font-size: 13px; color: #9a928a; line-height: 1.6; }
.mkms-course-page .section-divider { border: none; border-top: 1px solid var(--border); margin: 48px 0; }
`;

const COURSE_HTML = `
<div class="site-header">
  <div class="header-top">
    <div class="school-tag">Master Key Music School · MKMS</div>
    <div class="course-meta">Private Instruction · Custom Curriculum · 2026</div>
  </div>
  <div class="hero">
    <div class="hero-eyebrow">Course Outline · Draft 1.0</div>
    <h1>Music Theory<br>for <em>Emerging</em><br>Producers</h1>
    <p class="hero-desc">A sequenced curriculum bridging music fundamentals, ear training, and keyboard literacy into DAW-based production and songwriting mentorship.</p>
    <div class="hero-stats">
      <div class="stat"><div class="stat-val">4</div><div class="stat-label">Phases</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">24</div><div class="stat-label">Units</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">~24</div><div class="stat-label">Weeks</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">30</div><div class="stat-label">Min / Session</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">1×</div><div class="stat-label">Per Week</div></div>
    </div>
  </div>
</div>

<div class="phase-strip">
  <div class="phase-tab p1">
    <div class="phase-num">Phase 01</div>
    <div class="phase-tab-title">Keyboard &amp; Notation Foundation</div>
    <div class="phase-tab-weeks">Weeks 1–8 · 8 units</div>
  </div>
  <div class="phase-tab p2">
    <div class="phase-num">Phase 02</div>
    <div class="phase-tab-title">Harmony &amp; Ear Development</div>
    <div class="phase-tab-weeks">Weeks 9–16 · 8 units</div>
  </div>
  <div class="phase-tab p3">
    <div class="phase-num">Phase 03</div>
    <div class="phase-tab-title">DAW Entry &amp; Production Bridge</div>
    <div class="phase-tab-weeks">Weeks 14–20 · overlapping · 6 units</div>
  </div>
  <div class="phase-tab p4">
    <div class="phase-num">Phase 04</div>
    <div class="phase-tab-title">Production Mentorship</div>
    <div class="phase-tab-weeks">Weeks 20–24+ · ongoing</div>
  </div>
</div>

<div class="main">

  <div class="phase-section p1">
    <div class="phase-header">
      <div class="phase-color-bar"></div>
      <div class="phase-header-inner">
        <div class="phase-header-left">
          <div class="phase-label">Phase 01 · Weeks 1–8</div>
          <h2>Keyboard &amp; Notation Foundation</h2>
          <p>Build physical comfort at the keyboard, establish note-name fluency, introduce staff reading, and give rhythm a formal vocabulary. Every concept is tied directly to the keyboard in front of her.</p>
        </div>
        <div class="phase-header-right">
          <span class="phase-badge">8 Units · 8 Weeks</span>
          <div class="phase-book-ref">Primary Reference:<br>MT21C Ch. 1, 4<br>Faber Adult All-in-One Bk. 1</div>
        </div>
      </div>
    </div>
    <div class="units-grid">
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">01</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 1</div>
            <div class="unit-title">Keyboard Geography — Black Key Navigation &amp; Finding C</div>
          </div>
          <span class="unit-tag">Keyboard</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Identify groups of 2 and 3 black keys across the full keyboard</li>
              <li>Locate all C's using the 2-black-key pattern</li>
              <li>Establish correct hand position and finger numbering</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Black key group identification drill (verbal + physical)</li>
              <li>Find and name every C, low to high, out loud</li>
              <li>Hand position setup and finger number check</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Faber Adult: pp. 2–5 (keyboard diagram, hand position)</li>
              <li>HW: Find all C's daily, say letter names aloud</li>
              <li>HW: Tap finger numbers 1–5 on a flat surface</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">02</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 2</div>
            <div class="unit-title">Note Names — The Musical Alphabet &amp; White Key Navigation</div>
          </div>
          <span class="unit-tag">Keyboard</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Name all white keys using C as anchor point</li>
              <li>Navigate A–G alphabet forward and backward</li>
              <li>Locate any named white key within 5 seconds</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Teacher calls a note name, student finds it; increase speed</li>
              <li>Play C-D-E-F-G five-finger pattern, both hands separately</li>
              <li>Name each key as it's played</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Faber Adult: pp. 6–9</li>
              <li>HW: Random note name drill — 5 min/day, 4 days</li>
              <li>HW: Play and say C position five-finger pattern x5 daily</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">03</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 3</div>
            <div class="unit-title">The Staff — Treble Clef, Lines, Spaces &amp; Landmark Notes</div>
          </div>
          <span class="unit-tag">Notation</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Identify treble clef, staff lines, and spaces by name</li>
              <li>Locate Middle C, G (line 2), and E (space 1) on staff and keyboard</li>
              <li>Connect staff position to physical keyboard location</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Draw and label a treble staff together</li>
              <li>Landmark note flashcard drill (staff → keyboard)</li>
              <li>MT21C Ch. 1.1–1.2: pitch and notation overview</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 1 (online) — pitch and notation sections</li>
              <li>HW: Draw staff and label landmark notes x3</li>
              <li>HW: Find Middle C on keyboard, play it 10x naming it</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">04</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 4</div>
            <div class="unit-title">Reading Notes on the Staff — Steps, Skips &amp; C Position</div>
          </div>
          <span class="unit-tag">Notation</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Distinguish steps (line to space) from skips (line to line / space to space)</li>
              <li>Read and play a simple 5-note melody in C position</li>
              <li>Begin connecting written note to physical key without pause</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Step vs. skip recognition drill on printed staff</li>
              <li>Play a simple teacher-written C position melody from notation</li>
              <li>Ear check: does she hear steps vs. skips before reading?</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Faber Adult: first simple reading exercises</li>
              <li>HW: Practice teacher-written melody 5x daily</li>
              <li>HW: MT21C Ch. 1 practice exercises (online)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">05</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 5</div>
            <div class="unit-title">Rhythm Fundamentals — Note Values, Time Signatures &amp; the Beat</div>
          </div>
          <span class="unit-tag">Rhythm</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Name and write whole, half, quarter, and eighth notes</li>
              <li>Read and clap basic rhythmic patterns in 4/4</li>
              <li>Understand beat vs. rhythm distinction</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Clap and count a written 4/4 rhythm pattern</li>
              <li>Teacher taps beat, student claps rhythm over it</li>
              <li>Connect: "this is what you're already doing in your beats"</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 4.1–4.3 (time sig, note values, dots/ties)</li>
              <li>HW: Clap and count 3 written rhythms from MT21C exercises</li>
              <li>HW: Listen to "Rest Stop" — tap the beat AND the melody rhythm separately</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">06</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 6</div>
            <div class="unit-title">Meter &amp; Subdivision — How Time Is Organized in Music</div>
          </div>
          <span class="unit-tag">Rhythm</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Identify and feel duple vs. triple meter</li>
              <li>Subdivide the beat into eighth notes (1-and, 2-and)</li>
              <li>Connect meter to production: how beats are structured in a DAW grid</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Subdivision clapping drill with counting out loud</li>
              <li>Play and count a simple keyboard melody with subdivided rhythm</li>
              <li>Show how 4/4 maps to a DAW grid visually (concept introduction)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 4.4–4.5 (meter, tuplets)</li>
              <li>HW: Clap and count subdivided rhythms, 5 min/day</li>
              <li>HW: Find a beat in her Launchpad library — identify the meter</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">07</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 7</div>
            <div class="unit-title">Black Keys &amp; Accidentals — Sharps, Flats &amp; the Full Keyboard</div>
          </div>
          <span class="unit-tag">Keyboard + Notation</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Define sharp, flat, and natural; locate on keyboard and staff</li>
              <li>Understand enharmonic equivalents (F# = G♭)</li>
              <li>Play a simple melody that uses one black key</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Find all F#'s and B♭'s on the keyboard</li>
              <li>MT21C Ch. 1.4–1.5: accidentals and enharmonic notes</li>
              <li>Play teacher-written melody using one accidental</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 1.4–1.5 + practice exercises</li>
              <li>HW: Write the enharmonic equivalent of 5 given notes</li>
              <li>HW: Play melody with accidental 5x daily</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">08</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 8</div>
            <div class="unit-title">Phase 1 Review &amp; Check-In — Consolidation + Goal Alignment</div>
          </div>
          <span class="unit-tag">Review</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Confirm fluency: keyboard geography, note names, basic staff reading, rhythm counting</li>
              <li>Identify any gaps before moving to harmony</li>
              <li>Reconnect instruction to Jenaiya's production goals — show the bridge ahead</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Short informal check: note name speed, staff reading, clap a rhythm</li>
              <li>Play one short piece from notation (teacher-chosen, appropriate level)</li>
              <li>Preview Phase 2: "Next we learn chords — this is where your production work starts clicking in"</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 1 practice test (download from pugetsound.edu)</li>
              <li>Teacher assessment notes → update NSAP tracker</li>
              <li>No new HW — consolidate and rest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="phase-section p2">
    <div class="phase-header">
      <div class="phase-color-bar"></div>
      <div class="phase-header-inner">
        <div class="phase-header-left">
          <div class="phase-label">Phase 02 · Weeks 9–16</div>
          <h2>Harmony &amp; Ear Development</h2>
          <p>Build harmonic vocabulary from the ground up — scales, intervals, and triads — with direct connections to her ear and her productions at every step. Lead-sheet symbols are introduced as the bridge language between theory and the DAW.</p>
        </div>
        <div class="phase-header-right">
          <span class="phase-badge">8 Units · 8 Weeks</span>
          <div class="phase-book-ref">Primary Reference:<br>MT21C Ch. 2, 3, 5, 6<br>Ear training: teacher-generated</div>
        </div>
      </div>
    </div>
    <div class="units-grid">
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">09</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 9</div>
            <div class="unit-title">Half Steps &amp; Whole Steps — The Building Blocks of All Scales</div>
          </div>
          <span class="unit-tag">Theory</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Define and play half steps and whole steps on the keyboard</li>
              <li>Identify them by ear</li>
              <li>Understand why these matter: all scales and chords are built from them</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Play half step and whole step pairs — listen and feel the difference</li>
              <li>Ear identification drill: half or whole?</li>
              <li>MT21C Ch. 2.1 reading + discussion</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 2.1</li>
              <li>HW: Play and write 5 half steps and 5 whole steps from given starting notes</li>
              <li>HW: Ear drill — listen to teacher-recorded examples, identify HS or WS</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">10</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 10</div>
            <div class="unit-title">The Major Scale — Pattern, Sound &amp; Feeling</div>
          </div>
          <span class="unit-tag">Theory + Ear</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Build a C major scale using W-W-H-W-W-W-H pattern</li>
              <li>Play it hands separately with correct fingering</li>
              <li>Recognize the major scale sound by ear</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Build C major scale step by step on keyboard</li>
              <li>Sing scale degrees (do-re-mi) over her playing</li>
              <li>Ask: does this sound bright or dark? (major = bright)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 2.2</li>
              <li>HW: Play C major scale slowly, hands separately, 5x/day</li>
              <li>HW: Can she hear the scale in one of her own beats?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">11</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 11</div>
            <div class="unit-title">The Minor Scale — The Sound of Her Productions</div>
          </div>
          <span class="unit-tag">Theory + Ear</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Build a natural minor scale (A minor) on keyboard</li>
              <li>Distinguish major vs. minor by ear and by feel</li>
              <li>Identify minor tonality in her own productions</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Build A minor scale; compare directly to C major — same notes, different feel</li>
              <li>Play "Rest Stop" (or a clip) — is it major or minor?</li>
              <li>Ear drill: major or minor? (teacher plays examples)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 3.1–3.2</li>
              <li>HW: Play A minor scale 5x/day; sing along</li>
              <li>HW: Listen to 3 songs she likes — major or minor?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">12</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 12</div>
            <div class="unit-title">Intervals — The Distance Between Notes</div>
          </div>
          <span class="unit-tag">Theory + Ear</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Name intervals 2nd through octave by number</li>
              <li>Identify perfect, major, and minor intervals</li>
              <li>Hear the quality difference between a major 3rd and minor 3rd</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Play and name intervals from C upward</li>
              <li>Ear drill: major 3rd or minor 3rd? (this is where chords come from)</li>
              <li>MT21C Ch. 5.1–5.2 overview</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 5.1–5.2 + practice exercises</li>
              <li>HW: Write and play intervals above 5 given notes</li>
              <li>HW: Ear drill — identify major vs. minor 3rd in 10 teacher-recorded examples</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">13</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 13</div>
            <div class="unit-title">Triads — Building Chords from Intervals</div>
          </div>
          <span class="unit-tag">Harmony</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Build major and minor triads from any root</li>
              <li>Play C, F, and G major triads in root position</li>
              <li>Hear the difference between major and minor triads</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Build a C major triad from intervals: root + M3 + P5</li>
              <li>Build C minor by lowering the third — hear the shift</li>
              <li>Play C, F, G major as a simple I–IV–V progression</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 6.1</li>
              <li>HW: Build and play major triads on C, D, E, F, G</li>
              <li>HW: Can she play a chord under one of her own melodies?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">14</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 14</div>
            <div class="unit-title">Lead-Sheet Symbols — The Language of Production</div>
          </div>
          <span class="unit-tag">Harmony + Production</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Read and play chords from lead-sheet symbols (C, Cm, F, Am, G)</li>
              <li>Understand that lead-sheet symbols are the chord language of DAWs and charts</li>
              <li>Play a simple 4-chord progression from symbols alone</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>MT21C Ch. 6.2: lead-sheet symbols overview</li>
              <li>Play I–V–vi–IV (C–G–Am–F) from symbols — the most common pop progression</li>
              <li>Show the same symbols in GarageBand chord strip (bridge moment)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 6.2 + practice exercises</li>
              <li>HW: Play C–G–Am–F progression, slow and steady, 10x/day</li>
              <li>HW: Find lead-sheet symbols in one song she knows</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">15</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 15</div>
            <div class="unit-title">Chord Progressions by Ear — Hearing What You Already Know</div>
          </div>
          <span class="unit-tag">Ear + Harmony</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Identify I, IV, and V chords by ear in a simple progression</li>
              <li>Recognize when a chord feels "home," "away," or "almost home"</li>
              <li>Connect harmonic function to emotional instinct she already has as a producer</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Teacher plays I–IV–V–I; student identifies by feel first, then by name</li>
              <li>Play one of her beats — can she name the chords she used?</li>
              <li>Introduction: tonic, dominant, subdominant as concepts (not just labels)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Teacher-generated ear training examples</li>
              <li>HW: Play I–IV–V–I in C major 10x/day, singing root of each chord</li>
              <li>HW: Identify chords by ear in one reference track she loves</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">16</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 16</div>
            <div class="unit-title">Phase 2 Review &amp; Graduation Check — Triads &amp; Lead Sheet Fluency</div>
          </div>
          <span class="unit-tag">Review</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Play major and minor triads on any root from lead-sheet symbol</li>
              <li>Identify major vs. minor by ear reliably</li>
              <li>Play a 4-chord progression fluently — this is the Phase 1→2 graduation requirement</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Random lead-sheet symbol drill: teacher calls symbol, student plays chord</li>
              <li>Play a short piece using chords + simple RH melody</li>
              <li>Preview Phase 3: "Next session you're opening GarageBand"</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>MT21C Ch. 5–6 practice test</li>
              <li>Teacher assessment notes → update NSAP tracker</li>
              <li>HW: Record herself playing the 4-chord progression</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="transition-note">
    <strong>Phase Transition Note</strong> — Phases 3 and 4 are not a clean handoff from theory instruction. Beginning in Week 14, GarageBand is introduced alongside keyboard work. By Week 16, it runs in parallel. The DAW becomes the primary vehicle from Week 20 onward — but theory concepts continue to deepen through production problems Jenaiya actually encounters, not from additional textbook chapters.
  </div>

  <div class="phase-section p3">
    <div class="phase-header">
      <div class="phase-color-bar"></div>
      <div class="phase-header-inner">
        <div class="phase-header-left">
          <div class="phase-label">Phase 03 · Weeks 14–20 (overlapping)</div>
          <h2>DAW Entry &amp; Production Bridge</h2>
          <p>Move Jenaiya's existing production instincts into a desktop DAW environment. Apply the theory vocabulary she now has to the tools she wants to work with. This phase bridges the formal curriculum into her actual creative practice.</p>
        </div>
        <div class="phase-header-right">
          <span class="phase-badge">6 Units · Overlapping</span>
          <div class="phase-book-ref">Primary Reference:<br>GarageBand / Logic<br>Teacher-guided DAW exploration</div>
        </div>
      </div>
    </div>
    <div class="units-grid">
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">17</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 14–15</div>
            <div class="unit-title">GarageBand Orientation — Interface, Tracks &amp; the Grid</div>
          </div>
          <span class="unit-tag">DAW</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Navigate GarageBand interface: tracks, timeline, transport</li>
              <li>Connect the DAW grid to what she learned about meter and subdivision</li>
              <li>Import or build a simple 4-bar loop</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Screen-share GarageBand; walk through layout together</li>
              <li>Show the piano roll — connect to keyboard geography and note names</li>
              <li>Build a basic 4/4 drum pattern to anchor the grid concept</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>GarageBand (free, Mac/iOS)</li>
              <li>HW: Open GarageBand, create a new project, build 4-bar loop</li>
              <li>HW: Import one of her Launchpad ideas into GarageBand if possible</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">18</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 16–17</div>
            <div class="unit-title">Piano Roll &amp; MIDI — Drawing and Playing Notes in the DAW</div>
          </div>
          <span class="unit-tag">DAW + Theory</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Draw notes in the piano roll using correct pitch and rhythm values</li>
              <li>Understand how MIDI note data maps to the keyboard she's been learning</li>
              <li>Build a simple 4-bar melodic idea in the piano roll</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Open piano roll — identify C, note grid, velocity</li>
              <li>Draw the C major scale in the piano roll; listen back</li>
              <li>Draw a simple 4-note melodic motif and loop it</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>GarageBand piano roll tutorial (Apple support docs)</li>
              <li>HW: Draw a 4-bar melody using notes from C major scale</li>
              <li>HW: Add a chord (C major triad) as a sustained note below the melody</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">19</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 17–18</div>
            <div class="unit-title">Chord Progressions in the DAW — From Lead Sheet to Piano Roll</div>
          </div>
          <span class="unit-tag">DAW + Harmony</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Build her 4-chord progression (C–G–Am–F) in the piano roll</li>
              <li>Understand how chords are voiced in a production context</li>
              <li>Begin hearing her theory knowledge as sound in her own work</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Draw C–G–Am–F as block chords in piano roll, 2 bars each</li>
              <li>Add a simple melody over the top</li>
              <li>Compare to "Rest Stop" — what key/chords is it in?</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Teacher-generated chord chart reference</li>
              <li>HW: Build a 4-chord loop in GarageBand and send to Gene for feedback</li>
              <li>HW: Try changing one chord — what happens to the feel?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">20</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 18–19</div>
            <div class="unit-title">Song Structure — Verse, Chorus &amp; the 8-Bar Section</div>
          </div>
          <span class="unit-tag">DAW + Songwriting</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Understand basic song structure: intro, verse, chorus, bridge, outro</li>
              <li>Build a 2-section arrangement (verse + chorus) in GarageBand</li>
              <li>Use harmonic contrast between sections intentionally</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Map a song she knows onto the arrangement view</li>
              <li>Build verse section (minor feel) and chorus section (major or brighter) in GarageBand</li>
              <li>Play back and discuss: does the chorus feel different? Why?</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Reference track analysis: map structure of 1 song she loves</li>
              <li>HW: Build a 16-bar arrangement with 2 distinct sections</li>
              <li>HW: Write a title and one-sentence description of each section's feeling</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">21</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 19–20</div>
            <div class="unit-title">Sounds &amp; Patches — Timbre, Texture &amp; Instrument Selection</div>
          </div>
          <span class="unit-tag">DAW + Production</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Understand timbre: why the same note sounds different on different instruments</li>
              <li>Navigate GarageBand's instrument library intentionally (not randomly)</li>
              <li>Make instrument choices that serve the emotional feel of a section</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Play the same chord on 5 different patches — describe each one</li>
              <li>Apply her existing theory vocabulary: "this patch makes the minor chord feel heavier"</li>
              <li>Choose instruments for her current working project</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>GarageBand instrument library exploration</li>
              <li>HW: Rebuild one section of a beat using 3 different patch combinations — which feels best?</li>
              <li>HW: Write 2 sentences about why she chose each instrument</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">22</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 20</div>
            <div class="unit-title">Phase 3 Review — First Full Production Critique</div>
          </div>
          <span class="unit-tag">Review</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Present a complete (or near-complete) GarageBand project for feedback</li>
              <li>Receive professional critique using theory vocabulary both parties now share</li>
              <li>Identify 2–3 specific areas to develop in Phase 4</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Jenaiya plays her current project — Gene listens without interrupting</li>
              <li>Structured feedback: what's working, what to develop, what to try next</li>
              <li>Set Phase 4 goals together based on what she brings</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Teacher assessment notes → update NSAP tracker</li>
              <li>HW: Revise project based on one piece of feedback from the session</li>
              <li>HW: Identify one producer or artist whose work she wants to study in Phase 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="phase-section p4">
    <div class="phase-header">
      <div class="phase-color-bar"></div>
      <div class="phase-header-inner">
        <div class="phase-header-left">
          <div class="phase-label">Phase 04 · Weeks 20–24+ (Ongoing)</div>
          <h2>Production Mentorship</h2>
          <p>The relationship shifts from teacher-student to mentor-artist. Jenaiya's own projects become the primary text. Theory deepens through production problems she actually encounters. The goal is not course completion — it is a developing artist with her own voice and the tools to execute it.</p>
        </div>
        <div class="phase-header-right">
          <span class="phase-badge">Ongoing · Project-Based</span>
          <div class="phase-book-ref">Primary Reference:<br>Jenaiya's own productions<br>Reference tracks · Logic Pro</div>
        </div>
      </div>
    </div>
    <div class="units-grid">
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">23</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Weeks 21–22</div>
            <div class="unit-title">Reference Track Analysis — Reverse-Engineering Music She Loves</div>
          </div>
          <span class="unit-tag">Mentorship</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Identify key, tempo, chord progression, and structure in a chosen reference track</li>
              <li>Connect what she hears to theory vocabulary she now has</li>
              <li>Extract 1–2 specific production techniques to try in her own work</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Listen together, pause and discuss: "what key is this? what's that chord?"</li>
              <li>Map the structure in real time on paper or in the DAW</li>
              <li>Identify one element to steal (intentionally) for her next beat</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Student-chosen reference track(s)</li>
              <li>HW: Write a 1-page production breakdown of the track</li>
              <li>HW: Build a beat inspired by one element she identified</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">24</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Weeks 23–24+</div>
            <div class="unit-title">Original Project Development — Finish Something</div>
          </div>
          <span class="unit-tag">Mentorship</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Complete one full production to a shareable state</li>
              <li>Make intentional decisions about every element: key, chords, structure, sound design, arrangement</li>
              <li>Develop a habit of finishing, not just starting</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">In-Lesson Activities</div>
            <ul class="col-list">
              <li>Weekly project check-in: where is it, what's the next step</li>
              <li>Targeted feedback on the specific element she's working on</li>
              <li>Gene brings professional ear: mix notes, arrangement feedback, emotional read</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Exercises / Resources</div>
            <ul class="col-list">
              <li>Logic Pro (upgrade from GarageBand when ready)</li>
              <li>HW: Advance the project by one defined step each week</li>
              <li>Goal: one completed, shareable track by Week 24</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="section-divider">

  <div class="graduation-note" style="margin-bottom:48px;">
    <div class="grad-icon">🎯</div>
    <div>
      <div class="grad-label">Phase 1 → Phase 2 Graduation Requirement</div>
      <div class="grad-title">Triad &amp; Lead-Sheet Fluency Check</div>
      <div class="grad-desc">Before moving fully into DAW instruction, Jenaiya must be able to: (1) play major and minor triads in root position from any lead-sheet symbol within 5 seconds, (2) identify major vs. minor by ear reliably, and (3) play a 4-chord progression (e.g., C–G–Am–F) smoothly at a slow tempo. This is not a formal test — it is a readiness check that ensures she has the harmonic vocabulary to make the DAW work meaningful rather than mechanical.</div>
    </div>
  </div>

  <div class="resources-section">
    <div class="resources-header">Recommended Resources &amp; Materials</div>
    <div class="resources-grid">
      <div class="resource-card">
        <div class="resource-type">Primary Text</div>
        <div class="resource-title">Music Theory for the 21st-Century Classroom</div>
        <div class="resource-note">Robert Hutchinson · University of Puget Sound · Free online at musictheory.pugetsound.edu · Use Ch. 1–6 selectively, not sequentially</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">Keyboard Reference</div>
        <div class="resource-title">Faber Adult Piano Adventures — All-in-One Book 1</div>
        <div class="resource-note">Use for keyboard geography, hand position, and early reading exercises only. Not a program to complete — a structural reference to borrow from.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">DAW — Entry Level</div>
        <div class="resource-title">GarageBand (Mac / iOS)</div>
        <div class="resource-note">Free. Strong enough for Phase 3 and early Phase 4. Piano roll, MIDI, loops, and basic arrangement all available. Upgrade to Logic when she's ready.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">DAW — Advanced</div>
        <div class="resource-title">Logic Pro</div>
        <div class="resource-note">Natural upgrade from GarageBand. Same interface, significantly more depth. Introduce when she's outgrowing GarageBand's constraints — likely mid Phase 4.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">Ear Training</div>
        <div class="resource-title">Teacher-Generated Exercises</div>
        <div class="resource-note">Higher/lower, interval identification, major vs. minor quality. Short drills (2–3 min) at the top of each session. No app required — a keyboard and a teacher is enough.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">Assessment</div>
        <div class="resource-title">NSAP Re-Assessment · June 15, 2026</div>
        <div class="resource-note">90-day re-assessment from initial intake (March 17, 2026). Measure progress across all six domains. Adjust Phase 2–3 pacing based on results.</div>
      </div>
    </div>
  </div>

</div>
`;

export default function MusicTheoryProducers() {
  useEffect(() => {
    document.title = "Music Theory for Emerging Producers — MKMS";
    const style = document.createElement("style");
    style.id = "mkms-course-styles";
    style.textContent = COURSE_STYLES;
    document.head.appendChild(style);
    return () => {
      document.getElementById("mkms-course-styles")?.remove();
      document.title = "Gene Burke";
    };
  }, []);

  return (
    <div
      className="mkms-course-page pt-16 min-h-screen"
      dangerouslySetInnerHTML={{ __html: COURSE_HTML }}
    />
  );
}
