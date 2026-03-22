import { useEffect } from "react";

const COURSE_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

.mkms-sanctuary-page {
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
  --accent: #c8963a;
  --accent-dim: #7a5518;
  --accent-soft: rgba(200, 150, 58, 0.12);
  --mod0: #b87333;
  --mod0-soft: rgba(184, 115, 51, 0.12);
  --mod1: #c8963a;
  --mod1-soft: rgba(200, 150, 58, 0.12);
  --mod2: #4a9e8a;
  --mod2-soft: rgba(74, 158, 138, 0.12);
  --mod3: #8a6ed4;
  --mod3-soft: rgba(138, 110, 212, 0.12);
  --mod4: #c85a6a;
  --mod4-soft: rgba(200, 90, 106, 0.12);
  --amber: #d4920a;
  --amber-soft: rgba(212, 146, 10, 0.12);
}

.mkms-sanctuary-page * { box-sizing: border-box; margin: 0; padding: 0; }

.mkms-sanctuary-page .site-header {
  border-bottom: 1px solid var(--border);
  padding: 0 48px;
}
.mkms-sanctuary-page .header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 16px;
  border-bottom: 1px solid var(--border);
}
.mkms-sanctuary-page .school-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
}
.mkms-sanctuary-page .course-meta {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.mkms-sanctuary-page .hero { padding: 40px 0 36px; }
.mkms-sanctuary-page .hero-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}
.mkms-sanctuary-page .hero h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 72px;
  line-height: 0.92;
  letter-spacing: 0.02em;
  color: var(--text);
  margin-bottom: 20px;
}
.mkms-sanctuary-page .hero h1 em { color: var(--accent); font-style: normal; }
.mkms-sanctuary-page .hero-desc {
  font-family: 'Instrument Serif', serif;
  font-size: 17px;
  font-style: italic;
  color: #a09890;
  max-width: 620px;
  line-height: 1.55;
  margin-bottom: 28px;
}
.mkms-sanctuary-page .hero-stats { display: flex; gap: 32px; flex-wrap: wrap; }
.mkms-sanctuary-page .stat { display: flex; flex-direction: column; gap: 3px; }
.mkms-sanctuary-page .stat-val {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  color: var(--text);
  line-height: 1;
}
.mkms-sanctuary-page .stat-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
.mkms-sanctuary-page .stat-divider { width: 1px; background: var(--border); align-self: stretch; }

.mkms-sanctuary-page .module-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid var(--border);
  border-bottom: 3px solid var(--border);
}
.mkms-sanctuary-page .module-tab {
  padding: 16px 18px;
  border-right: 1px solid var(--border);
  cursor: default;
  transition: background 0.15s;
}
.mkms-sanctuary-page .module-tab:last-child { border-right: none; }
.mkms-sanctuary-page .module-tab:hover { background: var(--surface); }
.mkms-sanctuary-page .module-num {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.mkms-sanctuary-page .module-tab-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 15px;
  letter-spacing: 0.04em;
  line-height: 1.2;
  margin-bottom: 6px;
}
.mkms-sanctuary-page .module-tab-weeks {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 0.1em;
}
.mkms-sanctuary-page .module-tab.m0 .module-num,
.mkms-sanctuary-page .module-tab.m0 .module-tab-title { color: var(--mod0); }
.mkms-sanctuary-page .module-tab.m1 .module-num,
.mkms-sanctuary-page .module-tab.m1 .module-tab-title { color: var(--mod1); }
.mkms-sanctuary-page .module-tab.m2 .module-num,
.mkms-sanctuary-page .module-tab.m2 .module-tab-title { color: var(--mod2); }
.mkms-sanctuary-page .module-tab.m3 .module-num,
.mkms-sanctuary-page .module-tab.m3 .module-tab-title { color: var(--mod3); }
.mkms-sanctuary-page .module-tab.m4 .module-num,
.mkms-sanctuary-page .module-tab.m4 .module-tab-title { color: var(--mod4); }

.mkms-sanctuary-page .main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 48px 80px;
}

.mkms-sanctuary-page .orientation-banner {
  background: var(--surface2);
  border: 1px solid var(--border-bright);
  border-left: 6px solid var(--mod0);
  padding: 24px 28px;
  margin-bottom: 56px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  align-items: start;
}
.mkms-sanctuary-page .orientation-icon { font-size: 32px; line-height: 1; margin-top: 2px; }
.mkms-sanctuary-page .orientation-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--mod0);
  margin-bottom: 6px;
}
.mkms-sanctuary-page .orientation-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.04em;
  color: var(--text);
  margin-bottom: 10px;
}
.mkms-sanctuary-page .orientation-desc {
  font-size: 13px;
  color: #9a928a;
  line-height: 1.65;
  margin-bottom: 14px;
  max-width: 680px;
}
.mkms-sanctuary-page .orientation-topics { display: flex; flex-wrap: wrap; gap: 8px; }
.mkms-sanctuary-page .orientation-topic {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 10px;
  background: var(--mod0-soft);
  border: 1px solid rgba(184,115,51,0.3);
  color: var(--mod0);
}

.mkms-sanctuary-page .module-section { margin-bottom: 64px; }
.mkms-sanctuary-page .module-header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0;
  margin-bottom: 28px;
  border: 1px solid var(--border);
  overflow: hidden;
}
.mkms-sanctuary-page .module-color-bar { width: 6px; }
.mkms-sanctuary-page .module-header-inner {
  padding: 20px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.mkms-sanctuary-page .module-header-left .module-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.mkms-sanctuary-page .module-header-left h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  letter-spacing: 0.03em;
  line-height: 1;
  margin-bottom: 8px;
}
.mkms-sanctuary-page .module-header-left p {
  font-family: 'Instrument Serif', serif;
  font-size: 14px;
  font-style: italic;
  color: #8a8278;
  max-width: 500px;
  line-height: 1.5;
}
.mkms-sanctuary-page .module-header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
}
.mkms-sanctuary-page .module-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 1px;
}
.mkms-sanctuary-page .module-note {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.08em;
  color: var(--muted);
  text-align: right;
  line-height: 1.5;
}

.mkms-sanctuary-page .module-section.m1 .module-color-bar { background: var(--mod1); }
.mkms-sanctuary-page .module-section.m1 .module-label { color: var(--mod1); }
.mkms-sanctuary-page .module-section.m1 .module-header-left h2 { color: var(--mod1); }
.mkms-sanctuary-page .module-section.m1 .module-badge { background: var(--mod1-soft); color: var(--mod1); border: 1px solid rgba(200,150,58,0.3); }
.mkms-sanctuary-page .module-section.m2 .module-color-bar { background: var(--mod2); }
.mkms-sanctuary-page .module-section.m2 .module-label { color: var(--mod2); }
.mkms-sanctuary-page .module-section.m2 .module-header-left h2 { color: var(--mod2); }
.mkms-sanctuary-page .module-section.m2 .module-badge { background: var(--mod2-soft); color: var(--mod2); border: 1px solid rgba(74,158,138,0.3); }
.mkms-sanctuary-page .module-section.m3 .module-color-bar { background: var(--mod3); }
.mkms-sanctuary-page .module-section.m3 .module-label { color: var(--mod3); }
.mkms-sanctuary-page .module-section.m3 .module-header-left h2 { color: var(--mod3); }
.mkms-sanctuary-page .module-section.m3 .module-badge { background: var(--mod3-soft); color: var(--mod3); border: 1px solid rgba(138,110,212,0.3); }
.mkms-sanctuary-page .module-section.m4 .module-color-bar { background: var(--mod4); }
.mkms-sanctuary-page .module-section.m4 .module-label { color: var(--mod4); }
.mkms-sanctuary-page .module-section.m4 .module-header-left h2 { color: var(--mod4); }
.mkms-sanctuary-page .module-section.m4 .module-badge { background: var(--mod4-soft); color: var(--mod4); border: 1px solid rgba(200,90,106,0.3); }

.mkms-sanctuary-page .units-grid { display: flex; flex-direction: column; gap: 2px; }
.mkms-sanctuary-page .unit-card {
  background: var(--surface);
  border: 1px solid var(--border);
  overflow: hidden;
}
.mkms-sanctuary-page .unit-header {
  display: grid;
  grid-template-columns: 52px 1fr auto;
  align-items: center;
  gap: 0;
  border-bottom: 1px solid var(--border);
}
.mkms-sanctuary-page .unit-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  text-align: center;
  padding: 12px 8px;
  border-right: 1px solid var(--border);
  color: var(--muted);
  line-height: 1;
}
.mkms-sanctuary-page .unit-title-wrap { padding: 12px 16px; }
.mkms-sanctuary-page .unit-week {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2px;
}
.mkms-sanctuary-page .unit-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  letter-spacing: 0.01em;
}
.mkms-sanctuary-page .unit-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 3px 10px;
  margin-right: 16px;
  border-radius: 1px;
}
.mkms-sanctuary-page .unit-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0;
}
.mkms-sanctuary-page .unit-col { padding: 14px 16px; border-right: 1px solid var(--border); }
.mkms-sanctuary-page .unit-col:last-child { border-right: none; }
.mkms-sanctuary-page .col-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--border);
}
.mkms-sanctuary-page .col-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.mkms-sanctuary-page .col-list li {
  font-size: 12px;
  color: #b0a89e;
  line-height: 1.45;
  padding-left: 12px;
  position: relative;
}
.mkms-sanctuary-page .col-list li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--muted);
  font-size: 11px;
}
.mkms-sanctuary-page .col-list li.leadership { color: var(--amber); }
.mkms-sanctuary-page .col-list li.leadership::before {
  content: '★';
  font-size: 8px;
  top: 2px;
  color: var(--amber);
}

.mkms-sanctuary-page .m1 .unit-tag { background: var(--mod1-soft); color: var(--mod1); border: 1px solid rgba(200,150,58,0.3); }
.mkms-sanctuary-page .m2 .unit-tag { background: var(--mod2-soft); color: var(--mod2); border: 1px solid rgba(74,158,138,0.3); }
.mkms-sanctuary-page .m3 .unit-tag { background: var(--mod3-soft); color: var(--mod3); border: 1px solid rgba(138,110,212,0.3); }
.mkms-sanctuary-page .m4 .unit-tag { background: var(--mod4-soft); color: var(--mod4); border: 1px solid rgba(200,90,106,0.3); }

.mkms-sanctuary-page .leadership-legend {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  padding: 10px 14px;
  background: var(--surface2);
  border: 1px solid var(--border);
  width: fit-content;
}
.mkms-sanctuary-page .legend-star { color: var(--amber); font-size: 11px; }
.mkms-sanctuary-page .legend-text {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.mkms-sanctuary-page .resources-section { margin-bottom: 64px; }
.mkms-sanctuary-page .resources-header {
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
.mkms-sanctuary-page .resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
.mkms-sanctuary-page .resource-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 16px 18px;
}
.mkms-sanctuary-page .resource-type {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 6px;
}
.mkms-sanctuary-page .resource-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 4px;
  line-height: 1.3;
}
.mkms-sanctuary-page .resource-note { font-size: 11px; color: var(--muted); line-height: 1.45; }

.mkms-sanctuary-page .capstone-note {
  background: var(--surface);
  border: 1px solid var(--border-bright);
  padding: 24px 28px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: start;
  margin-bottom: 48px;
}
.mkms-sanctuary-page .capstone-icon { font-size: 28px; line-height: 1; margin-top: 4px; }
.mkms-sanctuary-page .capstone-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--mod4);
  margin-bottom: 6px;
}
.mkms-sanctuary-page .capstone-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  letter-spacing: 0.04em;
  color: var(--text);
  margin-bottom: 8px;
}
.mkms-sanctuary-page .capstone-desc { font-size: 13px; color: #9a928a; line-height: 1.6; }

.mkms-sanctuary-page .section-divider { border: none; border-top: 1px solid var(--border); margin: 48px 0; }

.mkms-sanctuary-page .outcomes-section { margin-bottom: 64px; }
.mkms-sanctuary-page .outcomes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  margin-top: 16px;
}
.mkms-sanctuary-page .outcome-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 18px 20px;
}
.mkms-sanctuary-page .outcome-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 6px;
}
.mkms-sanctuary-page .outcome-text { font-size: 13px; color: #b0a89e; line-height: 1.55; }
.mkms-sanctuary-page .outcome-text strong { color: var(--text); font-weight: 500; }
`;

const COURSE_HTML = `
<div class="site-header">
  <div class="header-top">
    <div class="school-tag">Master Key Music School · MKMS</div>
    <div class="course-meta">Group Cohort · Online · 12 Weeks · 2026</div>
  </div>
  <div class="hero">
    <div class="hero-eyebrow">Course Outline · Draft 1.0</div>
    <h1>Theory for<br>the <em>Sanctuary</em></h1>
    <p class="hero-desc">A 12-week online cohort for adults in church music ministry — building the musical language to name what they already hear, read what they already sing, and lead what they already feel.</p>
    <div class="hero-stats">
      <div class="stat"><div class="stat-val">4</div><div class="stat-label">Modules</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">12</div><div class="stat-label">Weeks</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">13</div><div class="stat-label">Units</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">60</div><div class="stat-label">Min / Session</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">1×</div><div class="stat-label">Live / Week</div></div>
      <div class="stat-divider"></div>
      <div class="stat"><div class="stat-val">Online</div><div class="stat-label">Cohort Format</div></div>
    </div>
  </div>
</div>

<div class="module-strip">
  <div class="module-tab m0">
    <div class="module-num">Pre-Course</div>
    <div class="module-tab-title">Orientation &amp; Context</div>
    <div class="module-tab-weeks">Async · Before Week 1</div>
  </div>
  <div class="module-tab m1">
    <div class="module-num">Module 01</div>
    <div class="module-tab-title">Rhythm Literacy</div>
    <div class="module-tab-weeks">Weeks 1–3 · 3 units</div>
  </div>
  <div class="module-tab m2">
    <div class="module-num">Module 02</div>
    <div class="module-tab-title">Pitch, Staff &amp; Solfège</div>
    <div class="module-tab-weeks">Weeks 4–6 · 3 units</div>
  </div>
  <div class="module-tab m3">
    <div class="module-num">Module 03</div>
    <div class="module-tab-title">Harmony Foundations</div>
    <div class="module-tab-weeks">Weeks 7–11 · 5 units</div>
  </div>
  <div class="module-tab m4">
    <div class="module-num">Module 04</div>
    <div class="module-tab-title">Integration &amp; Application</div>
    <div class="module-tab-weeks">Week 12 · Capstone</div>
  </div>
</div>

<div class="main">

  <div class="leadership-legend">
    <span class="legend-star">★</span>
    <span class="legend-text">Items marked with ★ are leadership formation prompts — embedded throughout every module for students pursuing the director/teacher track</span>
  </div>

  <div class="orientation-banner">
    <div class="orientation-icon">✦</div>
    <div>
      <div class="orientation-label">Pre-Course · Async · Before Week 1</div>
      <div class="orientation-title">Orientation — Roots, Tradition &amp; Why This Matters</div>
      <div class="orientation-desc">Before the first live session, students complete a short async orientation that grounds the course in its cultural and spiritual context. This is not a music theory lesson — it is an invitation. It establishes that this course was designed for this tradition, not adapted from somewhere else. Topics include the roots of Black sacred music (spirituals, gospel, the choir tradition), the evolution of worship music from ring shout to contemporary gospel, and a personal reflection: what does it mean to steward this tradition with musical intentionality? No prior knowledge required. No grade. Just context.</div>
      <div class="orientation-topics">
        <span class="orientation-topic">Spirituals &amp; the Ring Shout</span>
        <span class="orientation-topic">Gospel Tradition &amp; Its Architects</span>
        <span class="orientation-topic">The Black Church Choir</span>
        <span class="orientation-topic">Contemporary Worship Evolution</span>
        <span class="orientation-topic">Personal Reflection Prompt</span>
      </div>
    </div>
  </div>

  <div class="module-section m1">
    <div class="module-header">
      <div class="module-color-bar"></div>
      <div class="module-header-inner">
        <div class="module-header-left">
          <div class="module-label">Module 01 · Weeks 1–3</div>
          <h2>Rhythm Literacy</h2>
          <p>Establish a shared rhythmic vocabulary — note values, meter, counting systems — rooted in the music this cohort already performs. The goal is not academic precision for its own sake, but functional fluency: holding your part, counting through a hard passage, following a director's cues.</p>
        </div>
        <div class="module-header-right">
          <span class="module-badge">3 Units · 3 Weeks</span>
          <div class="module-note">Format: 60-min live session<br>+ async practice weekly</div>
        </div>
      </div>
    </div>
    <div class="units-grid">
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">01</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 1</div>
            <div class="unit-title">Note Values, Beat vs. Rhythm &amp; Counting Systems</div>
          </div>
          <span class="unit-tag">Rhythm</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Name and write whole, half, quarter, and eighth notes</li>
              <li>Distinguish beat (steady pulse) from rhythm (note pattern)</li>
              <li>Count and clap basic patterns in 4/4</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Group clapping drill: teacher taps beat, students clap rhythm over it</li>
              <li>Identify note values in a hymn or gospel chart the group knows</li>
              <li>Counting system introduction: 1-e-and-a framework</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>MKMS Rhythm Workbook — Unit 01 exercises</li>
              <li>Clap and count 3 written rhythm patterns, 5 min/day</li>
              <li>Listen to a familiar worship song — tap beat AND melody rhythm separately</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">How would you explain the difference between beat and rhythm to a new choir member?</li>
              <li class="leadership">Practice giving a "count-off" — how do you set the tempo and feel before a song begins?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">02</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 2</div>
            <div class="unit-title">Time Signatures — Reading and Feeling Meter</div>
          </div>
          <span class="unit-tag">Rhythm</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Decode both numbers in a time signature</li>
              <li>Feel the difference between duple and triple meter in the body</li>
              <li>Identify time signatures in worship music they already know</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Move to duple vs. triple meter — feel it before naming it</li>
              <li>Decode 4/4, 3/4, 6/8, and 2/2 as a group</li>
              <li>Match 3 familiar worship songs to their time signatures</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>MKMS Rhythm Workbook — Unit 01 Exercises 1.1–1.3</li>
              <li>True/False worksheet on time signature rules</li>
              <li>Listen to 5 songs — write down the time signature of each</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">How does knowing the time signature change how you cue an entrance or a cutoff?</li>
              <li class="leadership">If a singer keeps rushing the 3rd beat in 3/4, how would you address it in rehearsal?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">03</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 3</div>
            <div class="unit-title">Dotted Notes, Ties &amp; Syncopation in Worship Music</div>
          </div>
          <span class="unit-tag">Rhythm</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Apply the dot rule: a dot adds half the note's value</li>
              <li>Distinguish a tie (sustain) from a slur (articulation)</li>
              <li>Identify and clap syncopated patterns common in gospel and contemporary worship</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Dotted note math drill as a group — show the work out loud</li>
              <li>Clap a syncopated gospel rhythm pattern together</li>
              <li>Pull a printed choral part — find ties, dots, and syncopation in context</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>MKMS Rhythm Workbook — Units 03 &amp; 04 (dotted notes + rhythm math)</li>
              <li>Spot-the-error exercise: find measures with too many or too few beats</li>
              <li>Identify one syncopated phrase in a song they perform this week</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">Syncopation is a feature of this tradition, not a problem to fix. How do you teach a choir to lock in on a syncopated phrase without losing the feel?</li>
              <li class="leadership">How would you explain a dotted quarter note to a singer who doesn't read music?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="module-section m2">
    <div class="module-header">
      <div class="module-color-bar"></div>
      <div class="module-header-inner">
        <div class="module-header-left">
          <div class="module-label">Module 02 · Weeks 4–6</div>
          <h2>Pitch, Staff &amp; Solfège</h2>
          <p>Give students the tools to follow a printed choral part, connect written notes to the pitches they already sing, and use solfège as a navigation system — not just a classroom exercise, but a real-time ear-to-page bridge in rehearsal.</p>
        </div>
        <div class="module-header-right">
          <span class="module-badge">3 Units · 3 Weeks</span>
          <div class="module-note">Format: 60-min live session<br>+ async practice weekly</div>
        </div>
      </div>
    </div>
    <div class="units-grid">
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">04</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 4</div>
            <div class="unit-title">The Staff, Clef &amp; Note Names — From Page to Pitch</div>
          </div>
          <span class="unit-tag">Pitch + Notation</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Name lines and spaces in the treble clef</li>
              <li>Identify landmark notes: Middle C, E, G, B, D (spaces), F, A, C, E (lines)</li>
              <li>Connect staff position to pitch — page becomes sound</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Draw and label a treble staff together as a group</li>
              <li>Flashcard drill: staff position → pitch name (speed round)</li>
              <li>Find familiar pitches in a printed choral score excerpt</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>Note name identification worksheet (MKMS-generated)</li>
              <li>Draw and label 5 staves with landmark notes, 3x this week</li>
              <li>Pull out a hymnal or choir folder — circle every note they can name</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">When distributing printed music to a choir, what basic staff literacy do you assume vs. teach?</li>
              <li class="leadership">How do you help a singer who can hear their part but can't follow the printed score?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">05</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 5</div>
            <div class="unit-title">The Major Scale &amp; Solfège — Ear Meets Page</div>
          </div>
          <span class="unit-tag">Pitch + Solfège</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Build and sing a major scale using solfège (Do–Re–Mi through Do)</li>
              <li>Understand the W-W-H-W-W-W-H pattern as the major scale formula</li>
              <li>Use solfège as a sight-singing aid on a simple melody</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Sing up and down the major scale together on solfège syllables</li>
              <li>Teacher plays a scale fragment — group identifies syllables by ear</li>
              <li>Sight-sing a simple 4-bar melody using solfège as a group</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>Sing C major scale on solfège daily — forward and backward</li>
              <li>Identify a familiar worship melody by its solfège pattern (e.g., "Amazing Grace" begins Mi–Do–Mi–Sol)</li>
              <li>Write the solfège syllables above 4 bars of a printed melody</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">How can solfège help you teach a new song to a section without a recording? Practice the method.</li>
              <li class="leadership">In your church context, is solfège used? If not, how do parts typically get taught?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">06</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 6</div>
            <div class="unit-title">Minor Scales, Accidentals &amp; the Sound of Worship Tonality</div>
          </div>
          <span class="unit-tag">Pitch + Ear</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Sing and identify a natural minor scale; feel the contrast with major</li>
              <li>Define sharp, flat, and natural; recognize them in a score</li>
              <li>Connect major/minor tonality to emotional vocabulary in worship repertoire</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Sing C major, then A minor — same notes, different tonal center, different feel</li>
              <li>Group discussion: what worship songs feel major? Which feel minor?</li>
              <li>Identify accidentals in a printed choral score excerpt</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>Sing A minor scale on solfège (La–Ti–Do–Re–Mi–Fa–Sol–La)</li>
              <li>Listen to 3 worship songs — identify each as major or minor by ear</li>
              <li>Write the enharmonic equivalent of 5 given notes (e.g., F# = G♭)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">A director asks you to transpose a song from C major to D major for the congregation's range. What do you need to know to do that?</li>
              <li class="leadership">How does understanding major vs. minor help you choose repertoire intentionally for a worship set?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="module-section m3">
    <div class="module-header">
      <div class="module-color-bar"></div>
      <div class="module-header-inner">
        <div class="module-header-left">
          <div class="module-label">Module 03 · Weeks 7–11</div>
          <h2>Harmony Foundations</h2>
          <p>Build harmonic understanding from the interval up — how notes relate, how chords are constructed, how chord types function, and how the harmonic language of urban gospel and Black church worship operates. This is where theory and tradition meet most directly.</p>
        </div>
        <div class="module-header-right">
          <span class="module-badge">5 Units · 5 Weeks</span>
          <div class="module-note">Format: 60-min live session<br>+ async practice weekly</div>
        </div>
      </div>
    </div>
    <div class="units-grid">
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">07</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 7</div>
            <div class="unit-title">Melodic &amp; Harmonic Intervals — Hearing Distance</div>
          </div>
          <span class="unit-tag">Harmony + Ear</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Name intervals 2nd through octave by number</li>
              <li>Distinguish melodic (sequential) from harmonic (simultaneous) intervals</li>
              <li>Identify perfect, major, and minor intervals by ear</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Teacher sings or plays interval pairs — group names them by ear first, then by number</li>
              <li>Identify intervals in a familiar gospel melody (melodic) and in a chord voicing (harmonic)</li>
              <li>Ear drill: major 3rd or minor 3rd? (preview of chord quality)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>Write and sing intervals above 5 given notes</li>
              <li>Ear drill: identify 10 recorded interval examples as major or minor 3rd</li>
              <li>Find a melodic interval of a perfect 5th in a song you sing this week</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">Interval awareness is how a director hears if a section is in tune. Practice listening for a perfect 5th between soprano and alto — is it clean or is there a half-step drag?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">08</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 8</div>
            <div class="unit-title">Triad Construction — Building Chords from Intervals</div>
          </div>
          <span class="unit-tag">Harmony</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Build major and minor triads from any root using interval stacking</li>
              <li>Sing and identify root, third, and fifth within a triad</li>
              <li>Understand root position vs. inversions (introduction)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Build a C major triad as a group: root + M3 + P5</li>
              <li>Lower the third — hear it shift from major to minor</li>
              <li>Each cohort member sings a different triad tone — hear the chord as a group</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>Build and write major triads on C, D, E, F, G, A, B</li>
              <li>Sing root, third, and fifth of each triad — label your voice part</li>
              <li>Identify which triad tones you typically sing in your choir section</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">Knowing triad structure helps you assign voice parts intentionally. If you're arranging a 3-part choir, how do you decide who sings the root, third, and fifth?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">09</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 9</div>
            <div class="unit-title">Chord Types — Major, Minor, Diminished &amp; Augmented</div>
          </div>
          <span class="unit-tag">Harmony + Ear</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Build and distinguish all four triad types by structure and sound</li>
              <li>Recognize lead-sheet symbols: C, Cm, C°, C+</li>
              <li>Identify chord types by ear in a harmonic context</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Play or sing all four chord types from C — group describes each by feel</li>
              <li>Lead-sheet symbol speed drill: teacher calls symbol, group sings the chord</li>
              <li>Ear drill: what type of chord is this? (teacher plays, group answers)</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>Build all four chord types from D and G — write the notes and symbols</li>
              <li>Identify chord types in a printed chord chart from a song they know</li>
              <li>Ear drill: 10 recorded examples — major, minor, diminished, or augmented?</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">Diminished chords appear frequently in gospel passing progressions. Start listening for the tension-and-release moment — when does it show up in songs you lead?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card" style="border-color: rgba(138,110,212,0.4);">
        <div class="unit-header" style="background: rgba(138,110,212,0.06);">
          <div class="unit-num" style="color: var(--mod3);">10</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 10</div>
            <div class="unit-title">Choral Movements &amp; Harmonies of the Urban Black Church — Vamps, Turnarounds &amp; the Gospel Chord Language</div>
          </div>
          <span class="unit-tag">Culture + Harmony</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Identify and name common harmonic structures in Black church worship: vamps, turnarounds, the I–IV–I–V progression</li>
              <li>Understand call-and-response as a structural device — not just a stylistic one</li>
              <li>Recognize extended chord voicings (7ths, 9ths) by ear as characteristic of gospel harmony</li>
              <li>Connect theory vocabulary to the musical language they've been hearing their whole lives</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Listen together to a classic gospel selection — map the chord movement in real time</li>
              <li>Identify the vamp: where does the music linger? What's the harmonic loop?</li>
              <li>Group sings a call-and-response phrase — leader calls, cohort responds</li>
              <li>Introduction to the gospel turnaround: I–VI–II–V and its variations</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>Choose one song from your choir's current repertoire — identify the vamp section and write out the chord movement</li>
              <li>Listen to two recordings of the same gospel standard (e.g., "Total Praise") — how do the chord voicings differ between them?</li>
              <li>Write a one-paragraph reflection: what musical elements make this tradition distinct?</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">A vamp can build or kill a worship moment depending on how it's led. What musical and pastoral cues tell you when to extend, when to resolve, and when to move on?</li>
              <li class="leadership">How do you rehearse a call-and-response section so it feels spontaneous in performance but the choir is prepared?</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">11</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 11</div>
            <div class="unit-title">Chord Progressions &amp; Harmonic Function in Worship Songs</div>
          </div>
          <span class="unit-tag">Harmony + Ear</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Understand tonic, dominant, and subdominant function</li>
              <li>Identify I–IV–V–I and common variations by ear and by symbol</li>
              <li>Analyze the chord progression of one worship song they perform</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Live Session Activities</div>
            <ul class="col-list">
              <li>Teacher plays I–IV–V–I in multiple keys — group identifies function (home, away, almost home)</li>
              <li>Pull a chord chart from current choir repertoire — analyze it together using the terms learned</li>
              <li>Preview capstone: what song will each student analyze and present?</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Work</div>
            <ul class="col-list">
              <li>Analyze the chord progression of one worship song — label each chord by function</li>
              <li>Sing root of each chord in the progression while listening to a recording</li>
              <li>Begin capstone preparation: choose song, gather score or chart</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Thread</div>
            <ul class="col-list">
              <li class="leadership">Harmonic function is the language of musical tension and release — which is the language of worship. How does understanding I–IV–V change how you plan a worship set's emotional arc?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="module-section m4">
    <div class="module-header">
      <div class="module-color-bar"></div>
      <div class="module-header-inner">
        <div class="module-header-left">
          <div class="module-label">Module 04 · Week 12</div>
          <h2>Integration &amp; Application</h2>
          <p>The final week is not a test — it is a demonstration. Each student selects a worship song, applies every skill from the course to analyze it, and presents their findings to the cohort. For students on the leadership track, the presentation is structured as a teaching moment, not a report.</p>
        </div>
        <div class="module-header-right">
          <span class="module-badge">1 Unit · Capstone Week</span>
          <div class="module-note">Format: Extended live session<br>Student presentations + feedback</div>
        </div>
      </div>
    </div>
    <div class="units-grid">
      <div class="unit-card">
        <div class="unit-header">
          <div class="unit-num">12</div>
          <div class="unit-title-wrap">
            <div class="unit-week">Week 12</div>
            <div class="unit-title">Capstone — Analyze, Teach &amp; Present One Worship Song</div>
          </div>
          <span class="unit-tag">Integration</span>
        </div>
        <div class="unit-body">
          <div class="unit-col">
            <div class="col-label">Objectives</div>
            <ul class="col-list">
              <li>Apply rhythm, pitch, staff reading, solfège, and harmonic analysis to one complete song</li>
              <li>Communicate musical observations using the vocabulary built over 12 weeks</li>
              <li>Demonstrate readiness to use this knowledge in a worship context — Sunday morning, not just the classroom</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Capstone Requirements</div>
            <ul class="col-list">
              <li>Identify: key, time signature, tempo character</li>
              <li>Map: chord progression with lead-sheet symbols</li>
              <li>Analyze: one rhythmic challenge in the song (dotted notes, syncopation, meter)</li>
              <li>Identify: any call-and-response, vamp, or gospel harmonic movement</li>
              <li>Present: 3–5 minutes to the cohort, using the score or chart</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Leadership Track Addition</div>
            <ul class="col-list">
              <li class="leadership">Present as if you are teaching your choir section — not just reporting what you found</li>
              <li class="leadership">Include: how you would rehearse the hardest passage, what you'd say to explain a tricky rhythm, how you'd set the emotional tone before the song begins</li>
              <li class="leadership">Receive feedback from Gene and the cohort on your teaching clarity and musical accuracy</li>
            </ul>
          </div>
          <div class="unit-col">
            <div class="col-label">Async Prep (Week 11→12)</div>
            <ul class="col-list">
              <li>Complete full written analysis of chosen song</li>
              <li>Prepare a 1-page reference sheet (score markings, chord chart, notes)</li>
              <li>Practice the presentation out loud at least twice before the live session</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="section-divider">

  <div class="capstone-note">
    <div class="capstone-icon">🎯</div>
    <div>
      <div class="capstone-label">Course Completion Standard</div>
      <div class="capstone-title">What "Done" Looks Like</div>
      <div class="capstone-desc">A student who completes this course should be able to sit down with a choral score or chord chart they have never seen, identify the key and time signature, count through a syncopated passage, name the chords in the progression, and describe the harmonic function of each section — all in their own words, without looking anything up. For students on the leadership track, the bar is one step further: they should be able to explain any of those things clearly enough that a singer who can't read music understands it. That is the standard. That is the goal.</div>
    </div>
  </div>

  <div class="outcomes-section">
    <div class="resources-header">What Students Walk Away With</div>
    <div class="outcomes-grid">
      <div class="outcome-card">
        <div class="outcome-num">01</div>
        <div class="outcome-text"><strong>Rhythm fluency in rehearsal.</strong> Read and count notation, hold their part through syncopated passages, and follow a director's rhythmic cues with confidence.</div>
      </div>
      <div class="outcome-card">
        <div class="outcome-num">02</div>
        <div class="outcome-text"><strong>Functional staff literacy.</strong> Follow a printed choral score, identify note names and accidentals, and use solfège to navigate a melody they've never sung before.</div>
      </div>
      <div class="outcome-card">
        <div class="outcome-num">03</div>
        <div class="outcome-text"><strong>Harmonic ear and vocabulary.</strong> Name what they hear — intervals, chord types, progressions — and connect the formal language to the gospel and worship tradition they already know.</div>
      </div>
      <div class="outcome-card">
        <div class="outcome-num">04</div>
        <div class="outcome-text"><strong>Director/teacher readiness (optional track).</strong> Communicate musical concepts clearly to singers, run a section rehearsal, and make intentional musical decisions about repertoire, arrangement, and worship flow.</div>
      </div>
    </div>
  </div>

  <div class="resources-section">
    <div class="resources-header">Recommended Resources &amp; Materials</div>
    <div class="resources-grid">
      <div class="resource-card">
        <div class="resource-type">Workbook</div>
        <div class="resource-title">MKMS Rhythm &amp; Time Signature Workbook</div>
        <div class="resource-note">MKMS-developed. Covers time signatures, note values, dotted notes, and rhythm mathematics. Used in Modules 1 and reinforced through Module 3. Fillable PDF distributed to cohort.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">Workbook</div>
        <div class="resource-title">MKMS Vocabulary Worksheet Series</div>
        <div class="resource-note">Student-facing vocabulary sheets distributed after key sessions. Students define terms in their own words and answer application prompts. Developed per lesson as the course runs.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">Primary Reference</div>
        <div class="resource-title">Music Theory for the 21st-Century Classroom</div>
        <div class="resource-note">Robert Hutchinson · University of Puget Sound · Free online at musictheory.pugetsound.edu · Used selectively for Ch. 1–6. Students do not need to purchase anything.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">Cultural Reference</div>
        <div class="resource-title">Pre-Course Orientation Materials</div>
        <div class="resource-note">Curated readings, recordings, and a guided reflection prompt. Teacher-assembled. Covers spirituals, gospel history, and the evolution of Black church choral tradition. Distributed before Week 1.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">Ear Training</div>
        <div class="resource-title">Teacher-Generated Audio Drills</div>
        <div class="resource-note">Short recorded examples for interval ID, chord type recognition, and major/minor distinction. Distributed weekly as async homework. No app required — a keyboard and a microphone is enough.</div>
      </div>
      <div class="resource-card">
        <div class="resource-type">Assessment</div>
        <div class="resource-title">Cohort Capstone Presentation · Week 12</div>
        <div class="resource-note">Each student presents a full analysis of one worship song. Evaluated on accuracy, vocabulary use, and — for the leadership track — clarity of teaching. Primary summative assessment for the course.</div>
      </div>
    </div>
  </div>

</div>
`;

export default function TheoryForTheSanctuary() {
  useEffect(() => {
    document.title = "Theory for the Sanctuary — MKMS";
    const style = document.createElement("style");
    style.id = "mkms-sanctuary-styles";
    style.textContent = COURSE_STYLES;
    document.head.appendChild(style);
    return () => {
      document.getElementById("mkms-sanctuary-styles")?.remove();
      document.title = "Gene Burke";
    };
  }, []);

  return (
    <div
      className="mkms-sanctuary-page pt-16 min-h-screen"
      dangerouslySetInnerHTML={{ __html: COURSE_HTML }}
    />
  );
}
