<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Storage Learning Hub</title>
    <meta
      name="description"
      content="Interactive educational website on digital storage technologies, data backup, cybersecurity, comparison tools, and quizzes."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin=""
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <nav class="navbar container" aria-label="Main navigation">
        <div class="brand-wrap">
          <div class="brand-mark">DS</div>
          <div>
            <div class="brand-name">Digital Storage</div>
            <div class="brand-subtitle">Learning Hub</div>
          </div>
        </div>
        <button class="nav-toggle" aria-label="Toggle menu">☰</button>
        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#fundamentals">Fundamentals</a>
          <a href="#comparison">Comparison</a>
          <a href="#tools">Tools</a>
          <a href="#music">Music</a>
          <a href="#map">Map</a>
          <a href="#weather">Weather</a>
          <a href="#videos">Videos</a>
          <a href="#movie">Movie</a>
          <a href="#chatbot">AI Chatbot</a>
          <a href="#quiz">Quiz</a>
        </div>
      </nav>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="container hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">Chapter 7 · Digital Storage</span>
            <h1>Choose the right storage solution for every digital task.</h1>
            <p>
              Explore how HDDs, SSDs, USB drives, memory cards, optical media, and cloud
              storage work, compare their strengths, and learn how to protect digital data.
            </p>
            <div class="hero-actions">
              <a class="primary-btn" href="#comparison">Compare storage</a>
              <a class="secondary-btn" href="#quiz">Start quiz</a>
            </div>
            <ul class="hero-metrics">
              <li><strong>7+</strong><span>storage types</span></li>
              <li><strong>5</strong><span>interactive tools</span></li>
              <li><strong>24/7</strong><span>learning support</span></li>
            </ul>
          </div>
          <div class="hero-visual">
            <div class="device-stack">
              <div class="device-card device-large">
                <span>Cloud</span>
                <strong>1 PB</strong>
              </div>
              <div class="device-card device-medium">
                <span>NVMe SSD</span>
                <strong>2 TB</strong>
              </div>
              <div class="device-card device-small">
                <span>USB</span>
                <strong>256 GB</strong>
              </div>
            </div>
            <div class="floating-badge badge-one">Fast</div>
            <div class="floating-badge badge-two">Secure</div>
            <div class="floating-badge badge-three">Portable</div>
          </div>
        </div>
      </section>

      <section id="fundamentals" class="section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Digital Storage Fundamentals</span>
            <h2>Understanding digital storage</h2>
          </div>
          <div class="feature-grid">
            <article class="info-card">
              <div class="card-icon">💾</div>
              <h3>What is digital storage?</h3>
              <p>
                Digital storage is any device or system used to save data so it can be used,
                copied, backup, or retrieved later. It stores files, videos, documents, and system
                programs in binary form.
              </p>
            </article>
            <article class="info-card">
              <div class="card-icon">⚡</div>
              <h3>Capacity and speed</h3>
              <p>
                Storage capacity tells us how much data can fit, while speed tells us how quickly
                the data is read and written. Storage choices depend on both user needs and cost.
              </p>
            </article>
            <article class="info-card">
              <div class="card-icon">🛡️</div>
              <h3>Security and backups</h3>
              <p>
                Data backup protects against loss, while encryption helps keep private information
                secure. Good storage practices include backups, strong passwords, and secure transfers.
              </p>
            </article>
            <article class="info-card">
              <div class="card-icon">📦</div>
              <h3>Portability and durability</h3>
              <p>
                Some storage devices are built for travel and rugged use, while others are designed
                for long-term archival storage or large-scale cloud access.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="comparison" class="section alt-section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Storage Technology Comparison</span>
            <h2>Compare storage devices side by side</h2>
          </div>

          <div class="compare-selector">
            <button class="tech-toggle active" data-tech="HDD" type="button">HDD</button>
            <button class="tech-toggle active" data-tech="SATA SSD" type="button">SATA SSD</button>
            <button class="tech-toggle active" data-tech="NVMe SSD" type="button">NVMe SSD</button>
            <button class="tech-toggle active" data-tech="USB Flash" type="button">USB Flash</button>
            <button class="tech-toggle active" data-tech="Memory Card" type="button">Memory Card</button>
            <button class="tech-toggle active" data-tech="Optical" type="button">Optical</button>
            <button class="tech-toggle active" data-tech="Cloud" type="button">Cloud</button>
          </div>

          <div class="compare-table-wrap">
            <table class="compare-table">
              <thead>
                <tr>
                  <th>Technology</th>
                  <th>Capacity</th>
                  <th>Speed</th>
                  <th>Durability</th>
                  <th>Portability</th>
                  <th>Cost</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody id="comparisonBody"></tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="tools" class="section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Interactive Tools</span>
            <h2>Storage calculators and recommendations</h2>
          </div>
          <div class="tool-grid">
            <div class="tool-panel">
              <h3>Storage Calculator</h3>
              <form id="storageCalculator" class="calculator-form">
                <label>
                  Device capacity (GB)
                  <input id="deviceCapacity" type="number" min="1" value="512" />
                </label>
                <label>
                  Photo size (MB)
                  <input id="photoSize" type="number" min="1" value="8" step="0.5" />
                </label>
                <label>
                  Song size (MB)
                  <input id="songSize" type="number" min="1" value="4" step="0.5" />
                </label>
                <label>
                  Video size (GB)
                  <input id="videoSize" type="number" min="0.1" value="2" step="0.1" />
                </label>
                <button type="submit" class="primary-btn">Calculate</button>
              </form>
              <div id="calculatorResult" class="result-box"></div>
            </div>

            <div class="tool-panel">
              <h3>Recommendation Tool</h3>
              <div class="recommendation-options">
                <button class="rec-btn active" data-usecase="gaming">Gaming</button>
                <button class="rec-btn" data-usecase="schoolwork">Schoolwork</button>
                <button class="rec-btn" data-usecase="photography">Photography</button>
                <button class="rec-btn" data-usecase="business">Business</button>
                <button class="rec-btn" data-usecase="backups">Backups</button>
              </div>
              <div id="recommendationResult" class="result-box"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="music" class="section alt-section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Music Player</span>
            <h2>Listen while learning</h2>
          </div>
          <div class="music-panel">
            <div class="music-meta">
              <div class="music-art">♫</div>
              <div>
                <p class="music-label">Now playing</p>
                <h3 id="trackTitle">Select a track</h3>
                <div class="track-bar">
                  <div id="progressBar"></div>
                </div>
                <div class="time-row">
                  <span id="currentTime">0:00</span>
                  <span id="duration">0:00</span>
                </div>
              </div>
            </div>

            <div class="music-controls">
              <button id="toggleMusic" class="primary-btn">Enable background music</button>
              <button id="playPauseBtn" class="secondary-btn" disabled>Play</button>
              <label class="volume-control">
                <span>Volume</span>
                <input id="volumeControl" type="range" min="0" max="1" step="0.01" value="0.6" />
              </label>
            </div>

            <div class="playlist" id="playlist"></div>
            <audio id="audioPlayer" preload="none"></audio>
          </div>
        </div>
      </section>

      <section id="map" class="section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Interactive Map</span>
            <h2>Storage locations and technology hubs</h2>
          </div>
          <div class="map-controls">
            <input id="mapSearch" type="text" placeholder="Search for a city or place" />
            <button id="searchMapBtn" class="primary-btn">Search</button>
          </div>
          <div id="map" aria-label="Storage map"></div>
        </div>
      </section>

      <section id="weather" class="section alt-section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Weather Dashboard</span>
            <h2>Check local conditions and forecast</h2>
          </div>
          <div class="weather-card">
            <div class="weather-search">
              <input id="weatherSearch" type="text" placeholder="Search for a city" />
              <button id="weatherSearchBtn" class="primary-btn">Search</button>
            </div>
            <div class="quick-cities">
              <button type="button" class="city-btn active" data-city="New York">New York</button>
              <button type="button" class="city-btn" data-city="London">London</button>
              <button type="button" class="city-btn" data-city="Tokyo">Tokyo</button>
              <button type="button" class="city-btn" data-city="Sydney">Sydney</button>
            </div>
            <div id="weatherStatus" class="status-message">Loading weather…</div>
            <div class="weather-current">
              <div>
                <p class="weather-label">Current weather</p>
                <h3 id="weatherCity">New York</h3>
              </div>
              <div class="weather-temp-box">
                <span id="weatherTemp">--°C</span>
                <small id="weatherCondition">--</small>
              </div>
            </div>
            <div class="weather-detail-grid">
              <div><span>Humidity</span><strong id="humidityValue">--</strong></div>
              <div><span>Wind</span><strong id="windValue">--</strong></div>
              <div><span>Feels like</span><strong id="feelsValue">--</strong></div>
            </div>
            <div id="forecastList" class="forecast-row"></div>
          </div>
        </div>
      </section>

      <section id="videos" class="section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Educational Videos</span>
            <h2>Learn how computers store data</h2>
          </div>
          <div class="video-grid">
            <article class="video-card">
              <iframe src="https://www.youtube.com/embed/5m6ZYObJ3xM?si=Q7sPjaEsm5w8mQ-C" title="How hard drives work" loading="lazy" allowfullscreen></iframe>
              <div class="video-body">
                <h3>How HDDs and SSDs Work</h3>
                <p>Explore the internal components and process behind mechanical and solid-state drives.</p>
              </div>
            </article>
            <article class="video-card">
              <iframe src="https://www.youtube.com/embed/_n8C8D9l4N4?si=2PAhWhcXq5Bf4hQw" title="HDD vs SSD differences" loading="lazy" allowfullscreen></iframe>
              <div class="video-body">
                <h3>HDD vs SSD</h3>
                <p>Compare performance, cost, durability, and use cases for everyday and enterprise storage.</p>
              </div>
            </article>
            <article class="video-card">
              <iframe src="https://www.youtube.com/embed/uxk3rFKI_dw?si=Wxh0ipm7I8F-CW8p" title="Cloud storage and data centers" loading="lazy" allowfullscreen></iframe>
              <div class="video-body">
                <h3>Cloud Storage and Data Centers</h3>
                <p>Understand how businesses store large amounts of data in distributed, remote systems.</p>
              </div>
            </article>
            <article class="video-card">
              <iframe src="https://www.youtube.com/embed/2BvP2s6P5Q0?si=6jD3d2xX2x1gDffY" title="Data backup and cybersecurity" loading="lazy" allowfullscreen></iframe>
              <div class="video-body">
                <h3>Data Backup and Cybersecurity</h3>
                <p>Learn how backup strategies and encryption protect information from loss and attacks.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="movie" class="section alt-section">
        <div class="container movie-layout">
          <div class="movie-poster-wrap">
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
              alt="Movie poster about technology"
              class="movie-poster"
            />
          </div>
          <div class="movie-content">
            <span class="eyebrow">Movie Theater</span>
            <h2>Inside the Digital World</h2>
            <p>
              This short feature highlights how information moves through modern systems and how data
              is stored, protected, and retrieved in digital environments.
            </p>
            <video controls playsinline preload="metadata" class="movie-player">
              <source src="https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section id="chatbot" class="section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">AI Chatbot</span>
            <h2>Ask about storage concepts</h2>
          </div>
          <div class="chatbot-panel">
            <div id="chatMessages" class="chat-messages" aria-live="polite">
              <div class="message bot">
                Hello! I’m the demo digital storage tutor. Ask me to compare HDDs and SSDs or recommend a storage solution.
              </div>
            </div>
            <form id="chatForm" class="chat-form">
              <input id="chatInput" type="text" placeholder="Ask about storage, backup, or cloud storage..." />
              <button class="primary-btn" type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>

      <section id="quiz" class="section alt-section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Quiz and Learning Resources</span>
            <h2>Test your knowledge</h2>
          </div>
          <div id="quizContainer" class="quiz-card"></div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <p>Digital Storage Learning Hub</p>
        <p>Chapter 7 • Information and Communication Technology</p>
      </div>
    </footer>

    <script
      src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      crossorigin=""
    ></script>
    <script src="script.js"></script>
  </body>
</html>











































































































































































"},{"content":"* {
  box-sizing: border-box;
}

:root {
  --navy-900: #071c3d;
  --navy-800: #0d2b52;
  --navy-700: #15396d;
  --blue-600: #2f7ae7;
  --blue-500: #4ca3ff;
  --blue-300: #cfe4ff;
  --slate-100: #edf4ff;
  --white: #ffffff;
  --gray-100: #e7edf8;
  --gray-300: #bfcfe6;
  --gray-500: #5d7291;
  --gray-900: #1c2940;
  --shadow: 0 20px 45px rgba(11, 32, 62, 0.15);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f7faff 0%, #edf4ff 100%);
  color: var(--gray-900);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 88px 0;
}

.alt-section {
  background: rgba(214, 229, 255, 0.35);
}

.section-heading {
  margin-bottom: 32px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--blue-600);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  color: var(--navy-900);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  background: rgba(7, 28, 61, 0.82);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--white);
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--blue-500), var(--navy-700));
  font-weight: 800;
  box-shadow: var(--shadow);
}

.brand-name {
  font-size: 0.9rem;
  font-weight: 700;
}

.brand-subtitle {
  font-size: 0.72rem;
  opacity: 0.8;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.93rem;
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--white);
}

.nav-toggle {
  display: none;
  background: none;
  color: var(--white);
  border: none;
  font-size: 1.5rem;
}

.hero {
  position: relative;
  background: radial-gradient(circle at top left, rgba(93, 156, 255, 0.35), transparent 35%),
    linear-gradient(140deg, #0a1f3c 0%, #123765 38%, #1a3473 100%);
  color: var(--white);
  padding: 86px 0 90px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 42px;
  align-items: center;
}

.eyebrow {
  color: #a8d0ff;
}

.hero-copy h1 {
  margin: 0 0 18px;
  font-size: clamp(2.4rem, 4vw, 4.5rem);
  line-height: 1.04;
}

.hero-copy p {
  margin: 0;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.08rem;
  line-height: 1.75;
}

.hero-actions {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.primary-btn,
.secondary-btn,
.tech-toggle,
.rec-btn,
.city-btn {
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  font-weight: 700;
}

.primary-btn {
  background: linear-gradient(135deg, var(--blue-500), var(--blue-600));
  color: var(--white);
  box-shadow: 0 10px 24px rgba(47, 122, 231, 0.35);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.primary-btn:hover,
.secondary-btn:hover,
.tech-toggle:hover,
.rec-btn:hover,
.city-btn:hover {
  transform: translateY(-2px);
}

.hero-metrics {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding: 0;
  margin: 30px 0 0;
  color: rgba(255, 255, 255, 0.9);
}

.hero-metrics li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero-metrics strong {
  font-size: 1.7rem;
  color: var(--white);
}

.hero-visual {
  position: relative;
  min-height: 420px;
  display: grid;
  place-items: center;
}

.device-stack {
  position: relative;
  width: min(340px, 90%);
  height: 360px;
  margin: 0 auto;
}

.device-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  color: var(--navy-900);
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.device-large {
  inset: 40px 40px 70px 40px;
  background: linear-gradient(135deg, #dfeeff, #8ec1ff);
}

.device-medium {
  width: 58%;
  height: 120px;
  right: 0;
  bottom: 28px;
  background: linear-gradient(135deg, #f2f7ff, #bfd5ff);
}

.device-small {
  width: 42%;
  height: 100px;
  left: 18px;
  bottom: 0;
  background: linear-gradient(135deg, #eff7ff, #d7e8ff);
}

.device-card span {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.75;
}

.device-card strong {
  margin-top: 8px;
  font-size: clamp(1.2rem, 2vw, 2.2rem);
}

.floating-badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  min-height: 36px;
  padding: 0 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-weight: 700;
  backdrop-filter: blur(6px);
}

.badge-one {
  top: 0;
  right: 0;
  animation: float 4s ease-in-out infinite;
}

.badge-two {
  top: 28%;
  left: 4%;
  animation: float 5s ease-in-out infinite reverse;
}

.badge-three {
  bottom: 8%;
  right: 12%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.feature-grid,
.tool-grid,
.video-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.info-card,
.tool-panel,
.video-card,
.quizzes,
.weather-card,
.chatbot-panel,
.music-panel,
.compare-table-wrap {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(26, 78, 153, 0.09);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.info-card {
  min-height: 260px;
  padding: 26px 22px;
}

.card-icon {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--blue-300), #eaf3ff);
  font-size: 1.8rem;
}

.info-card h3 {
  margin: 16px 0 10px;
  font-size: 1.2rem;
  color: var(--navy-900);
}

.info-card p {
  margin: 0;
  line-height: 1.7;
  color: var(--gray-500);
}

.compare-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 22px;
}

.tech-toggle,
.rec-btn,
.city-btn {
  background: var(--white);
  color: var(--navy-800);
  border: 1px solid rgba(8, 31, 63, 0.08);
  padding: 11px 18px;
  font-weight: 700;
}

.tech-toggle.active,
.rec-btn.active,
.city-btn.active {
  background: linear-gradient(135deg, var(--navy-700), var(--blue-600));
  color: var(--white);
  box-shadow: 0 10px 20px rgba(17, 59, 111, 0.18);
}

.compare-table-wrap {
  overflow: auto;
  padding: 10px;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 820px;
}

.compare-table th,
.compare-table td {
  padding: 18px 14px;
  text-align: left;
  border-bottom: 1px solid rgba(17, 52, 94, 0.08);
  color: var(--gray-900);
}

.compare-table th {
  background: rgba(73, 131, 223, 0.08);
  color: var(--navy-900);
  font-weight: 800;
  letter-spacing: 0.02em;
}

.compare-table td {
  font-weight: 500;
}

.tool-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.tool-panel {
  padding: 28px 22px;
}

.tool-panel h3 {
  margin-top: 0;
  font-size: 1.5rem;
}

.calculator-form {
  display: grid;
  gap: 14px;
}

.calculator-form label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.calculator-form input,
#mapSearch,
#weatherSearch,
#chatInput {
  width: 100%;
  min-height: 44px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(17, 56, 101, 0.1);
  background: rgba(239, 245, 255, 0.8);
}

.result-box {
  margin-top: 18px;
  padding: 16px 18px;
  border-radius: 16px;
  background: linear-gradient(135deg, #edf4ff, #eef9ff);
  color: var(--navy-800);
  line-height: 1.6;
}

.recommendation-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.music-panel {
  padding: 28px 24px;
}

.music-meta {
  display: flex;
  align-items: center;
  gap: 18px;
}

.music-art {
  display: grid;
  place-items: center;
  width: 120px;
  height: 120px;
  border-radius: 28px;
  background: linear-gradient(135deg, #2d76e2, #0f2d58);
  color: var(--white);
  font-size: 3.2rem;
  box-shadow: var(--shadow);
}

.music-label {
  margin: 0 0 8px;
  color: var(--gray-500);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.music-meta h3 {
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.track-bar {
  margin-top: 16px;
  width: min(420px, 100%);
  height: 8px;
  background: rgba(16, 45, 86, 0.12);
  border-radius: 999px;
  overflow: hidden;
}

#progressBar {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, var(--blue-600), var(--blue-500));
}

.time-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: var(--gray-500);
  font-size: 0.9rem;
}

.music-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--gray-500);
  font-weight: 600;
}

.volume-control input {
  width: 140px;
}

.playlist {
  margin-top: 26px;
  display: grid;
  gap: 12px;
}

.playlist-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  background: rgba(227, 238, 255, 0.82);
  border: 1px solid rgba(17, 52, 94, 0.08);
  border-radius: 14px;
  cursor: pointer;
}

.playlist-item.active {
  background: rgba(108, 164, 255, 0.15);
  border-color: rgba(47, 122, 231, 0.28);
}

.playlist-item strong {
  display: block;
  color: var(--navy-900);
}

.playlist-item span {
  color: var(--gray-500);
  font-size: 0.8rem;
}

.map-controls,
.weather-search {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.map-controls input,
.weather-search input {
  flex: 1;
}

#map {
  height: 480px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.weather-card {
  padding: 28px 22px;
}

.quick-cities {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.status-message {
  min-height: 24px;
  margin-bottom: 16px;
  color: var(--gray-500);
  font-weight: 600;
}

.weather-current {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 18px;
}

.weather-label {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gray-500);
  font-size: 0.7rem;
}

.weather-current h3 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.5rem);
}

.weather-temp-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--navy-800);
}

#weatherTemp {
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 800;
}

.weather-detail-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.weather-detail-grid div {
  background: rgba(221, 236, 255, 0.7);
  border-radius: 16px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--navy-800);
}

.weather-detail-grid span {
  color: var(--gray-500);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.forecast-row {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

.forecast-item {
  background: rgba(239, 246, 255, 0.9);
  border-radius: 16px;
  padding: 14px 12px;
  text-align: center;
  border: 1px solid rgba(19, 55, 102, 0.07);
}

.forecast-item h4 {
  margin: 0 0 6px;
  font-size: 0.8rem;
  color: var(--gray-500);
}

.forecast-item .condition-icon {
  font-size: 1.6rem;
}

.forecast-item strong {
  display: block;
  margin-top: 6px;
  color: var(--navy-900);
}

.video-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.video-card {
  overflow: hidden;
}

.video-card iframe {
  width: 100%;
  height: 230px;
  border: 0;
  display: block;
}

.video-body {
  padding: 18px 18px 22px;
}

.video-body h3 {
  margin: 0 0 10px;
}

.video-body p {
  margin: 0;
  line-height: 1.7;
  color: var(--gray-500);
}

.movie-layout {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 32px;
  align-items: center;
}

.movie-poster {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  border-radius: 26px;
  box-shadow: var(--shadow);
}

.movie-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.movie-content h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.movie-content p {
  margin: 0;
  line-height: 1.8;
  color: var(--gray-500);
}

.movie-player {
  width: 100%;
  height: 360px;
  margin-top: 18px;
  border-radius: 18px;
  background: #000;
}

.chatbot-panel {
  padding: 24px;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 360px;
  overflow-y: auto;
  padding-right: 8px;
}

.message {
  max-width: 80%;
  padding: 14px 16px;
  border-radius: 18px;
  line-height: 1.6;
}

.message.bot {
  align-self: flex-start;
  background: #ebf4ff;
  color: var(--navy-900);
}

.message.user {
  align-self: flex-end;
  background: linear-gradient(135deg, var(--blue-600), var(--navy-700));
  color: var(--white);
}

.chat-form {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.quiz-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(17, 55, 100, 0.08);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 24px;
}

.quiz-question {
  padding: 12px 0;
}

.quiz-question h3 {
  margin: 0 0 12px;
  font-size: 1.2rem;
  color: var(--navy-900);
}

.quiz-options {
  display: grid;
  gap: 12px;
}

.quiz-option {
  width: 100%;
  text-align: left;
  border-radius: 14px;
  padding: 12px 14px;
  border: 1px solid rgba(16, 46, 84, 0.1);
  background: rgba(241, 245, 255, 0.8);
  cursor: pointer;
}

.quiz-option.correct {
  background: rgba(50, 155, 97, 0.12);
  border-color: rgba(50, 155, 97, 0.4);
  color: var(--navy-900);
}

.quiz-option.incorrect {
  background: rgba(211, 82, 82, 0.09);
  border-color: rgba(211, 82, 82, 0.22);
}

.quiz-feedback {
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(247, 250, 255, 0.9);
  color: var(--navy-900);
}

.quiz-summary {
  margin-top: 18px;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--navy-900);
}

.site-footer {
  background: var(--navy-900);
  color: rgba(255, 255, 255, 0.7);
  padding: 22px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 1080px) {
  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .video-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .movie-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .nav-toggle {
    display: block;
  }

  .navbar {
    position: relative;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: min(300px, calc(100vw - 32px));
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    border-radius: 16px;
    background: rgba(9, 29, 58, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: var(--shadow);
  }

  .nav-links.open {
    display: flex;
  }

  .hero-grid,
  .tool-grid,
  .feature-grid,
  .video-grid,
  .weather-detail-grid,
  .forecast-row {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 60px;
  }
}

@media (max-width: 560px) {
  .section {
    padding: 72px 0;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .map-controls,
  .weather-search,
  .chat-form {
    flex-direction: column;
  }

  .music-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .music-art {
    width: 84px;
    height: 84px;
    font-size: 2.4rem;
  }

  .movie-player {
    height: 260px;
  }
}
"},{"content":"const technologyData = {
  HDD: {
    capacity: "500 GB – 20 TB",
    speed: "Moderate",
    durability: "Moderate",
    portability: "Low",
    cost: "Low",
    best: "Backup storage and archival data"
  },
  "SATA SSD": {
    capacity: "120 GB – 4 TB",
    speed: "Fast",
    durability: "High",
    portability: "Medium",
    cost: "Medium",
    best: "Laptops and general everyday computing"
  },
  "NVMe SSD": {
    capacity: "256 GB – 8 TB",
    speed: "Very fast",
    durability: "Very high",
    portability: "Medium",
    cost: "Medium-high",
    best: "Gaming PCs, video editing, and performance systems"
  },
  "USB Flash": {
    capacity: "8 GB – 2 TB",
    speed: "Fast",
    durability: "Good",
    portability: "High",
    cost: "Low-medium",
    best: "Portable file transfer and quick backups"
  },
  "Memory Card": {
    capacity: "16 GB – 1 TB",
    speed: "Medium-fast",
    durability: "Good",
    portability: "High",
    cost: "Low-medium",
    best: "Cameras, drones, and phones"
  },
  Optical: {
    capacity: "700 MB – 128 GB",
    speed: "Slow",
    durability: "Medium",
    portability: "Medium",
    cost: "Low",
    best: "Software distribution and long-term archival copies"
  },
  Cloud: {
    capacity: "Scales with subscription",
    speed: "Depends on internet",
    durability: "Very high with redundancy",
    portability: "Very high",
    cost: "Variable",
    best: "Collaboration, backups, and remote storage"
  }
};

const comparisonBody = document.getElementById("comparisonBody");
const techToggles = document.querySelectorAll(".tech-toggle");

function updateComparisonTable() {
  const selected = [...techToggles]
    .filter((button) => button.classList.contains("active"))
    .map((button) => button.dataset.tech);

  comparisonBody.innerHTML = "";

  const rows = [
    ["capacity", "Capacity"],
    ["speed", "Speed"],
    ["durability", "Durability"],
    ["portability", "Portability"],
    ["cost", "Cost"],
    ["best", "Best for"]
  ];

  rows.forEach(([key, label]) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = label;
    tr.appendChild(th);

    selected.forEach((tech) => {
      const td = document.createElement("td");
      td.textContent = technologyData[tech][key];
      tr.appendChild(td);
    });

    comparisonBody.appendChild(tr);
  });
}

techToggles.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    updateComparisonTable();
  });
});

updateComparisonTable();

const storageCalculatorForm = document.getElementById("storageCalculator");
const calculatorResult = document.getElementById("calculatorResult");

storageCalculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const capacityGB = Number(document.getElementById("deviceCapacity").value || 0);
  const photoSizeMB = Number(document.getElementById("photoSize").value || 0);
  const songSizeMB = Number(document.getElementById("songSize").value || 0);
  const videoSizeGB = Number(document.getElementById("videoSize").value || 0);

  const capacityMB = capacityGB * 1024;
  const photos = Math.floor(capacityMB / photoSizeMB);
  const songs = Math.floor(capacityMB / songSizeMB);
  const videos = Math.floor(capacityGB / videoSizeGB);

  calculatorResult.innerHTML = `
    <strong>Estimated fit:</strong><br>
    • Photos: ${photos.toLocaleString()} photos<br>
    • Songs: ${songs.toLocaleString()} songs<br>
    • Videos: ${videos.toLocaleString()} videos
  `;
});

const recommendationData = {
  gaming: {
    title: "Gaming setup",
    summary: "Choose a high-speed NVMe SSD for games, updates, and fast load times. Keep a larger HDD or cloud backup for extra storage."
  },
  schoolwork: {
    title: "Schoolwork and study files",
    summary: "A 500 GB–1 TB SATA SSD gives a good balance of speed and storage for essays, research files, and project folders."
  },
  photography: {
    title: "Photography and video projects",
    summary: "Use a large SSD or USB flash drive for working files, and a memory card for camera capture. Add cloud storage for backup."
  },
  business: {
    title: "Business files and shared documents",
    summary: "Cloud storage plus a reliable SSD helps teams collaborate securely, while USB drives are useful for travel and quick transfers."
  },
  backups: {
    title: "Reliable backups",
    summary: "Use a combination of HDDs for affordable backups and cloud storage for offsite data protection. Include encryption for sensitive files."
  }
};

const recommendationResult = document.getElementById("recommendationResult");
const recButtons = document.querySelectorAll(".rec-btn");

function renderRecommendation(usecase) {
  const recommendation = recommendationData[usecase];
  recommendationResult.innerHTML = `
    <strong>${recommendation.title}</strong><br>
    ${recommendation.summary}
  `;
}

recButtons.forEach((button) => {
  button.addEventListener("click", () => {
    recButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderRecommendation(button.dataset.usecase);
  });
});

renderRecommendation("gaming");

const quizData = [
  {
    question: "Which type of storage is best for fast boot times and large game libraries?",
    options: ["HDD", "SATA SSD", "Optical disc", "Cloud only"],
    answer: "SATA SSD",
    explanation: "SATA SSDs are much faster than HDDs and are a common choice for everyday performance and storage needs."
  },
  {
    question: "What is the main advantage of cloud storage?",
    options: ["It never needs internet", "It lets users access files remotely and keeps copies offsite", "It is always free", "It replaces all local storage"],
    answer: "It lets users access files remotely and keeps copies offsite",
    explanation: "Cloud storage allows access from many devices and helps protect data through remote copies and redundancy."
  },
  {
    question: "Why is encryption useful for storage devices?",
    options: ["It increases speed", "It cannot be removed", "It protects data if a device is lost or stolen", "It makes files larger"],
    answer: "It protects data if a device is lost or stolen",
    explanation: "Encryption helps secure sensitive information and reduces the risk of unauthorized access."
  },
  {
    question: "Which storage technology is most portable for transferring files between computers?",
    options: ["HDD", "USB flash drive", "Blu-ray disc", "Motherboard RAM"],
    answer: "USB flash drive",
    explanation: "USB flash drives are compact, easy to carry, and often used for quick transfer and backup."
  },
  {
    question: "Why do businesses often use both SSDs and cloud storage?",
    options: ["Because all storage is the same", "Because SSDs are slower than HDDs", "Because they combine speed with remote backup and sharing", "Because cloud storage is not secure"],
    answer: "Because they combine speed with remote backup and sharing",
    explanation: "A hybrid strategy provides fast local access and flexible remote storage for backup, sharing, and collaboration."
  }
];

const quizContainer = document.getElementById("quizContainer");
let score = 0;
let currentQuestionIndex = 0;
let answeredQuestions = new Set();

function renderQuiz() {
  if (currentQuestionIndex >= quizData.length) {
    quizContainer.innerHTML = `
      <h3>Quiz complete</h3>
      <p class="quiz-summary">Final score: ${score} / ${quizData.length}</p>
      <p>Great job. Review the explanations and keep practicing to improve your understanding of storage technologies.</p>
    `;
    return;
  }

  const question = quizData[currentQuestionIndex];
  const questionBlock = document.createElement("div");
  questionBlock.className = "quiz-question";
  questionBlock.innerHTML = `
    <h3>${currentQuestionIndex + 1}. ${question.question}</h3>
    <div class="quiz-options"></div>
  `;

  const optionsContainer = questionBlock.querySelector(".quiz-options");

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      if (answeredQuestions.has(currentQuestionIndex)) return;
      answeredQuestions.add(currentQuestionIndex);

      const optionButtons = [...optionsContainer.querySelectorAll(".quiz-option")];
      optionButtons.forEach((btn) => {
        btn.disabled = true;
      });

      optionButtons.forEach((btn) => {
        if (btn.textContent === question.answer) {
          btn.classList.add("correct");
        }
        if (btn.textContent === option && btn.textContent !== question.answer) {
          btn.classList.add("incorrect");
        }
      });

      if (option === question.answer) {
        score += 1;
      }

      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      feedback.innerHTML = `<strong>${option === question.answer ? "Correct!" : "Not quite."}</strong><br>${question.explanation}`;
      questionBlock.appendChild(feedback);

      setTimeout(() => {
        currentQuestionIndex += 1;
        renderQuiz();
      }, 1600);
    });

    optionsContainer.appendChild(button);
  });

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionBlock);
}

renderQuiz();

const tracks = [
  { title: "Bright Horizon", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Morning Signals", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Digital Sunrise", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];

const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const trackTitle = document.getElementById("trackTitle");
const progressBar = document.getElementById("progressBar");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");
const volumeControl = document.getElementById("volumeControl");
const playlist = document.getElementById("playlist");
const toggleMusicBtn = document.getElementById("toggleMusic");

let currentTrackIndex = 0;
let backgroundMusicEnabled = false;

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function renderPlaylist() {
  playlist.innerHTML = tracks
    .map(
      (track, index) => `
        <div class="playlist-item ${index === currentTrackIndex ? "active" : ""}" data-index="${index}">
          <div>
            <strong>${track.title}</strong>
            <span>Track ${index + 1}</span>
          </div>
          <button type="button" class="secondary-btn">${index === currentTrackIndex && !audioPlayer.paused ? "Pause" : "Play"}</button>
        </div>
      `
    )
    .join("");

  playlist.querySelectorAll(".playlist-item").forEach((item) => {
    item.addEventListener("click", () => {
      const index = Number(item.dataset.index);
      currentTrackIndex = index;
      playTrack(index);
    });
  });
}

function playTrack(index) {
  const track = tracks[index];
  currentTrackIndex = index;
  audioPlayer.src = track.url;
  trackTitle.textContent = track.title;
  renderPlaylist();

  if (!backgroundMusicEnabled) return;
  audioPlayer.play().catch(() => {
    playPauseBtn.textContent = "Play";
  });
}

function updateProgress() {
  const progress = audioPlayer.duration ? (audioPlayer.currentTime / audioPlayer.duration) * 100 : 0;
  progressBar.style.width = `${progress}%`;
  currentTimeLabel.textContent = formatTime(audioPlayer.currentTime);
  durationLabel.textContent = formatTime(audioPlayer.duration);
}

playPauseBtn.addEventListener("click", () => {
  if (!backgroundMusicEnabled) {
    backgroundMusicEnabled = true;
    toggleMusicBtn.textContent = "Music on";
  }

  if (audioPlayer.paused) {
    if (!audioPlayer.src) {
      playTrack(currentTrackIndex);
    } else {
      audioPlayer.play().catch(() => {});
    }
    playPauseBtn.textContent = "Pause";
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
  }
});

toggleMusicBtn.addEventListener("click", () => {
  backgroundMusicEnabled = !backgroundMusicEnabled;
  toggleMusicBtn.textContent = backgroundMusicEnabled ? "Music on" : "Enable background music";

  if (!backgroundMusicEnabled) {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
    playPauseBtn.disabled = true;
    return;
  }

  playPauseBtn.disabled = false;
  if (!audioPlayer.src) {
    playTrack(currentTrackIndex);
  }
});

audioPlayer.addEventListener("timeupdate", updateProgress);
audioPlayer.addEventListener("loadedmetadata", updateProgress);
audioPlayer.addEventListener("play", () => {
  playPauseBtn.textContent = "Pause";
  renderPlaylist();
});
audioPlayer.addEventListener("pause", () => {
  playPauseBtn.textContent = "Play";
  renderPlaylist();
});

audioPlayer.addEventListener("ended", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  playTrack(currentTrackIndex);
});

volumeControl.addEventListener("input", (event) => {
  audioPlayer.volume = Number(event.target.value);
});

renderPlaylist();

const map = L.map("map").setView([40.7128, -74.006], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const defaultLocations = [
  { name: "Google Data Center", coords: [37.7749, -122.4194], desc: "Large cloud and data infrastructure hub." },
  { name: "Amazon Web Services", coords: [47.6062, -122.3321], desc: "Major cloud provider and storage platform." },
  { name: "MIT Media Lab", coords: [42.3601, -71.0942], desc: "Educational technology research center." },
  { name: "Microsoft Azure", coords: [47.6062, -122.3321], desc: "Cloud platform and enterprise storage services." }
];

const markers = [];

defaultLocations.forEach((location) => {
  const marker = L.marker(location.coords).addTo(map);
  marker.bindPopup(`<strong>${location.name}</strong><br>${location.desc}`);
  markers.push(marker);
});

const mapSearchInput = document.getElementById("mapSearch");
const searchMapBtn = document.getElementById("searchMapBtn");

searchMapBtn.addEventListener("click", async () => {
  const query = mapSearchInput.value.trim();
  if (!query) return;

  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" }
    });
    const data = await response.json();

    if (!data.length) {
      alert("No matching location found. Try a larger city or place name.");
      return;
    }

    const result = data[0];
    const lat = Number(result.lat);
    const lon = Number(result.lon);
    map.setView([lat, lon], 10);

    const placeMarker = L.marker([lat, lon]).addTo(map);
    placeMarker.bindPopup(`<strong>${result.display_name}</strong>`);
    placeMarker.openPopup();
  } catch (error) {
    alert("Map search failed. Please try again in a moment.");
  }
});

const weatherCityInput = document.getElementById("weatherSearch");
const weatherStatus = document.getElementById("weatherStatus");
const weatherCity = document.getElementById("weatherCity");
const weatherTemp = document.getElementById("weatherTemp");
const weatherCondition = document.getElementById("weatherCondition");
const humidityValue = document.getElementById("humidityValue");
const windValue = document.getElementById("windValue");
const feelsValue = document.getElementById("feelsValue");
const forecastList = document.getElementById("forecastList");

const weatherCodeMap = {
  0: { label: "Clear", icon: "☀️" },
  1: { label: "Mainly clear", icon: "🌤️" },
  2: { label: "Partly cloudy", icon: "⛅" },
  3: { label: "Cloudy", icon: "☁️" },
  45: { label: "Foggy", icon: "🌫️" },
  48: { label: "Foggy", icon: "🌫️" },
  51: { label: "Light drizzle", icon: "🌦️" },
  53: { label: "Drizzle", icon: "🌦️" },
  55: { label: "Heavy drizzle", icon: "🌧️" },
  61: { label: "Rain", icon: "🌧️" },
  63: { label: "Rain", icon: "🌧️" },
  65: { label: "Heavy rain", icon: "🌧️" },
  71: { label: "Snow", icon: "❄️" },
  73: { label: "Snow", icon: "❄️" },
  75: { label: "Heavy snow", icon: "❄️" },
  80: { label: "Rain showers", icon: "🌦️" },
  81: { label: "Heavy showers", icon: "🌧️" },
  82: { label: "Storm showers", icon: "⛈️" },
  95: { label: "Thunderstorm", icon: "⛈️" }
};

async function getWeather(cityName) {
  weatherStatus.textContent = "Loading weather…";

  try {
    const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
    const geoData = await geoResponse.json();

    if (!geoData.results || !geoData.results.length) {
      throw new Error("City not found.");
    }

    const location = geoData.results[0];
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    if (!weatherData.current) {
      throw new Error("Weather data unavailable.");
    }

    const current = weatherData.current;
    const weatherInfo = weatherCodeMap[current.weather_code] || { label: "Weather", icon: "🌤️" };

    weatherCity.textContent = location.name;
    weatherTemp.textContent = `${Math.round(current.temperature_2m)}°C`;
    weatherCondition.textContent = weatherInfo.label;
    humidityValue.textContent = `${current.relative_humidity_2m}%`;
    windValue.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
    feelsValue.textContent = `${Math.round(current.apparent_temperature)}°C`;

    const daily = weatherData.daily;
    forecastList.innerHTML = daily.time.slice(0, 5).map((date, index) => {
      const code = daily.weather_code[index];
      const info = weatherCodeMap[code] || { label: "Weather", icon: "🌤️" };
      const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "short" });
      return `
        <div class="forecast-item">
          <h4>${dayName}</h4>
          <div class="condition-icon">${info.icon}</div>
          <strong>${Math.round(daily.temperature_2m_max[index])}° / ${Math.round(daily.temperature_2m_min[index])}°</strong>
        </div>
      `;
    }).join("");

    weatherStatus.textContent = "Live weather from Open-Meteo";
  } catch (error) {
    weatherStatus.textContent = error.message || "Unable to load weather data.";
    weatherCity.textContent = "Location unavailable";
    weatherTemp.textContent = "--°C";
    weatherCondition.textContent = "--";
    humidityValue.textContent = "--";
    windValue.textContent = "--";
    feelsValue.textContent = "--";
    forecastList.innerHTML = "";
  }
}

document.getElementById("weatherSearchBtn").addEventListener("click", () => {
  const city = weatherCityInput.value.trim() || "New York";
  getWeather(city);
});

weatherCityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const city = weatherCityInput.value.trim() || "New York";
    getWeather(city);
  }
});

document.querySelectorAll(".city-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".city-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    weatherCityInput.value = button.dataset.city;
    getWeather(button.dataset.city);
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function chatbotReply(input) {
  const text = input.toLowerCase();

  if (text.includes("hdd") && text.includes("ssd")) {
    return "HDDs use spinning disks and are usually cheaper, while SSDs use flash memory and are much faster. HDDs are good for large, low-cost storage, and SSDs are better for speed and durability.";
  }

  if (text.includes("cloud")) {
    return "Cloud storage keeps copies of files on remote servers. It is useful for backup, sharing, and access from different devices, but you still need a reliable internet connection and secure login details.";
  }

  if (text.includes("usb") || text.includes("flash drive")) {
    return "USB flash drives are portable, convenient, and easy to carry. They are great for moving files between devices and for quick backups, but they can be lost or damaged if not handled carefully.";
  }

  if (text.includes("capacity") || text.includes("gb") || text.includes("tb")) {
    return "Storage capacity is the amount of data a device can hold. For example, 1 GB is roughly 1,000 MB, and a 1 TB drive can hold about 1,000 GB. The number of photos, songs, or videos depends on file sizes.";
  }

  if (text.includes("backup")) {
    return "A good backup plan uses at least two copies of important information, such as one local storage device and one offsite option like cloud storage. This reduces the risk of permanent data loss.";
  }

  if (text.includes("encryption") || text.includes("security")) {
    return "Encryption turns data into a coded form so unauthorized people cannot read it easily. It is important when storing sensitive information on laptops, USB drives, or cloud accounts.";
  }

  if (text.includes("recommend") || text.includes("best") || text.includes("need")) {
    return "For gaming, choose a fast SSD. For schoolwork, a 500 GB–1 TB SSD is usually enough. For photography, use a large SSD and cloud backup. For business, combine cloud storage with secure local backups.";
  }

  if (text.includes("memory card") || text.includes("sd card")) {
    return "Memory cards are common in cameras, phones, and drones. They are portable and useful for capturing photos and videos, but they are not always the best choice for long-term backups.";
  }

  return "Digital storage is any device or service used to save and retrieve data. The best option depends on speed, capacity, portability, and security needs. Ask me to compare HDDs, SSDs, cloud storage, USB drives, or backups.";
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = chatInput.value.trim();
  if (!value) return;

  addMessage(value, "user");
  chatInput.value = "";

  setTimeout(() => {
    const reply = chatbotReply(value);
    addMessage(reply, "bot");
  }, 350);
});

getWeather("New York");

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    navLinks.classList.remove("open");
  }
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "auto";
}
















































































































































































































































































































































































































"}]}  
