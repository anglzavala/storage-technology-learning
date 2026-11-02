const technologyData = {
  HDD: { capacity: '500 GB – 20 TB', speed: 'Moderate', durability: 'Moderate', portability: 'Low', cost: 'Low', best: 'Backup storage and archival data' },
  'SATA SSD': { capacity: '120 GB – 4 TB', speed: 'Fast', durability: 'High', portability: 'Medium', cost: 'Medium', best: 'Laptops and general everyday computing' },
  'NVMe SSD': { capacity: '256 GB – 8 TB', speed: 'Very fast', durability: 'Very high', portability: 'Medium', cost: 'Medium-high', best: 'Gaming PCs, video editing, and performance systems' },
  'USB Flash': { capacity: '8 GB – 2 TB', speed: 'Fast', durability: 'Good', portability: 'High', cost: 'Low-medium', best: 'Portable file transfer and quick backups' },
  'Memory Card': { capacity: '16 GB – 1 TB', speed: 'Medium-fast', durability: 'Good', portability: 'High', cost: 'Low-medium', best: 'Cameras, drones, and phones' },
  Optical: { capacity: '700 MB – 128 GB', speed: 'Slow', durability: 'Medium', portability: 'Medium', cost: 'Low', best: 'Software distribution and long-term archival copies' },
  Cloud: { capacity: 'Scales with subscription', speed: 'Depends on internet', durability: 'Very high with redundancy', portability: 'Very high', cost: 'Variable', best: 'Collaboration, backups, and remote storage' }
};

const comparisonBody = document.getElementById('comparisonBody');
const techToggles = document.querySelectorAll('.tech-toggle');

function updateComparisonTable() {
  const selected = [...techToggles].filter((button) => button.classList.contains('active')).map((button) => button.dataset.tech);

  comparisonBody.innerHTML = '';
  const rows = [
    ['capacity', 'Capacity'],
    ['speed', 'Speed'],
    ['durability', 'Durability'],
    ['portability', 'Portability'],
    ['cost', 'Cost'],
    ['best', 'Best for']
  ];

  rows.forEach(([key, label]) => {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = label;
    tr.appendChild(th);

    selected.forEach((tech) => {
      const td = document.createElement('td');
      td.textContent = technologyData[tech][key];
      tr.appendChild(td);
    });

    comparisonBody.appendChild(tr);
  });
}

techToggles.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    updateComparisonTable();
  });
});

updateComparisonTable();

const storageCalculatorForm = document.getElementById('storageCalculator');
const calculatorResult = document.getElementById('calculatorResult');

storageCalculatorForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const capacityGB = Number(document.getElementById('deviceCapacity').value || 0);
  const photoSizeMB = Number(document.getElementById('photoSize').value || 0);
  const songSizeMB = Number(document.getElementById('songSize').value || 0);
  const videoSizeGB = Number(document.getElementById('videoSize').value || 0);

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
  gaming: { title: 'Gaming setup', summary: 'Choose a high-speed NVMe SSD for games, updates, and fast load times. Keep a larger HDD or cloud backup for extra storage.' },
  schoolwork: { title: 'Schoolwork and study files', summary: 'A 500 GB–1 TB SATA SSD gives a good balance of speed and storage for essays, research files, and project folders.' },
  photography: { title: 'Photography and video projects', summary: 'Use a large SSD or USB flash drive for working files, and a memory card for camera capture. Add cloud storage for backup.' },
  business: { title: 'Business files and shared documents', summary: 'Cloud storage plus a reliable SSD helps teams collaborate securely, while USB drives are useful for travel and quick transfers.' },
  backups: { title: 'Reliable backups', summary: 'Use a combination of HDDs for affordable backups and cloud storage for offsite data protection. Include encryption for sensitive files.' }
};

const recommendationResult = document.getElementById('recommendationResult');
const recButtons = document.querySelectorAll('.rec-btn');

function renderRecommendation(usecase) {
  const recommendation = recommendationData[usecase];
  recommendationResult.innerHTML = `<strong>${recommendation.title}</strong><br>${recommendation.summary}`;
}

recButtons.forEach((button) => {
  button.addEventListener('click', () => {
    recButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderRecommendation(button.dataset.usecase);
  });
});

renderRecommendation('gaming');

const quizData = [
  { question: 'Which type of storage is best for fast boot times and large game libraries?', options: ['HDD', 'SATA SSD', 'Optical disc', 'Cloud only'], answer: 'SATA SSD', explanation: 'SATA SSDs are much faster than HDDs and are common for performance and storage.' },
  { question: 'What is the main advantage of cloud storage?', options: ['It never needs internet', 'It lets users access files remotely and keeps copies offsite', 'It is always free', 'It replaces all local storage'], answer: 'It lets users access files remotely and keeps copies offsite', explanation: 'Cloud storage allows remote access and provides backup copies in secure data centers.' },
  { question: 'Why is encryption useful for storage devices?', options: ['It increases speed', 'It cannot be removed', 'It protects data if a device is lost or stolen', 'It makes files larger'], answer: 'It protects data if a device is lost or stolen', explanation: 'Encryption helps secure sensitive information and reduces the risk of unauthorized access.' },
  { question: 'Which storage technology is most portable for transferring files between computers?', options: ['HDD', 'USB flash drive', 'Blu-ray disc', 'Motherboard RAM'], answer: 'USB flash drive', explanation: 'USB flash drives are compact and easy to carry for quick transfers.' },
  { question: 'Why do businesses often use both SSDs and cloud storage?', options: ['Because all storage is the same', 'Because SSDs are slower than HDDs', 'Because they combine speed with remote backup and sharing', 'Because cloud storage is not secure'], answer: 'Because they combine speed with remote backup and sharing', explanation: 'A hybrid strategy gives fast local access and flexible remote storage.' }
];

const quizContainer = document.getElementById('quizContainer');
let score = 0;
let currentQuestionIndex = 0;
const answeredQuestions = new Set();

function renderQuiz() {
  if (currentQuestionIndex >= quizData.length) {
    quizContainer.innerHTML = `
      <h3>Quiz complete</h3>
      <p class="quiz-summary">Final score: ${score} / ${quizData.length}</p>
      <p>Great job. Keep reviewing storage concepts to improve your understanding.</p>
    `;
    return;
  }

  const question = quizData[currentQuestionIndex];
  const wrapper = document.createElement('div');
  wrapper.className = 'quiz-question';
  wrapper.innerHTML = `<h3>${currentQuestionIndex + 1}. ${question.question}</h3><div class="quiz-options"></div>`;

  const optionsContainer = wrapper.querySelector('.quiz-options');
  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = option;

    button.addEventListener('click', () => {
      if (answeredQuestions.has(currentQuestionIndex)) return;
      answeredQuestions.add(currentQuestionIndex);

      const allButtons = [...optionsContainer.querySelectorAll('.quiz-option')];
      allButtons.forEach((btn) => (btn.disabled = true));

      allButtons.forEach((btn) => {
        if (btn.textContent === question.answer) btn.classList.add('correct');
        if (btn.textContent === option && btn.textContent !== question.answer) btn.classList.add('incorrect');
      });

      if (option === question.answer) score += 1;

      const feedback = document.createElement('div');
      feedback.className = 'quiz-feedback';
      feedback.innerHTML = `<strong>${option === question.answer ? 'Correct!' : 'Not quite.'}</strong><br>${question.explanation}`;
      wrapper.appendChild(feedback);

      setTimeout(() => {
        currentQuestionIndex += 1;
        renderQuiz();
      }, 1500);
    });

    optionsContainer.appendChild(button);
  });

  quizContainer.innerHTML = '';
  quizContainer.appendChild(wrapper);
}

renderQuiz();

const tracks = [
  { title: 'Bright Horizon', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { title: 'Morning Signals', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { title: 'Digital Sunrise', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const trackTitle = document.getElementById('trackTitle');
const progressBar = document.getElementById('progressBar');
const currentTimeLabel = document.getElementById('currentTime');
const durationLabel = document.getElementById('duration');
const volumeControl = document.getElementById('volumeControl');
const playlist = document.getElementById('playlist');
const toggleMusicBtn = document.getElementById('toggleMusic');

let currentTrackIndex = 0;
let backgroundMusicEnabled = false;

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

function renderPlaylist() {
  playlist.innerHTML = tracks.map((track, index) => `
    <div class="playlist-item ${index === currentTrackIndex ? 'active' : ''}" data-index="${index}">
      <div>
        <strong>${track.title}</strong>
        <span>Track ${index + 1}</span>
      </div>
      <button type="button" class="secondary-btn">${index === currentTrackIndex && !audioPlayer.paused ? 'Pause' : 'Play'}</button>
    </div>
  `).join('');

  playlist.querySelectorAll('.playlist-item').forEach((item) => {
    item.addEventListener('click', () => {
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
    playPauseBtn.textContent = 'Play';
  });
}

function updateProgress() {
  const progress = audioPlayer.duration ? (audioPlayer.currentTime / audioPlayer.duration) * 100 : 0;
  progressBar.style.width = `${progress}%`;
  currentTimeLabel.textContent = formatTime(audioPlayer.currentTime);
  durationLabel.textContent = formatTime(audioPlayer.duration);
}

playPauseBtn.addEventListener('click', () => {
  if (!backgroundMusicEnabled) {
    backgroundMusicEnabled = true;
    toggleMusicBtn.textContent = 'Music on';
  }

  if (audioPlayer.paused) {
    if (!audioPlayer.src) playTrack(currentTrackIndex);
    else audioPlayer.play().catch(() => {});
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});

toggleMusicBtn.addEventListener('click', () => {
  backgroundMusicEnabled = !backgroundMusicEnabled;
  toggleMusicBtn.textContent = backgroundMusicEnabled ? 'Music on' : 'Enable background music';

  if (!backgroundMusicEnabled) {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
    playPauseBtn.disabled = true;
    return;
  }

  playPauseBtn.disabled = false;
  if (!audioPlayer.src) playTrack(currentTrackIndex);
});

audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('loadedmetadata', updateProgress);
audioPlayer.addEventListener('play', () => { playPauseBtn.textContent = 'Pause'; renderPlaylist(); });
audioPlayer.addEventListener('pause', () => { playPauseBtn.textContent = 'Play'; renderPlaylist(); });
audioPlayer.addEventListener('ended', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  playTrack(currentTrackIndex);
});

volumeControl.addEventListener('input', (event) => {
  audioPlayer.volume = Number(event.target.value);
});

renderPlaylist();

const map = L.map('map').setView([40.7128, -74.006], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
  { name: 'Google Data Center', coords: [37.7749, -122.4194], desc: 'Cloud and data infrastructure hub.' },
  { name: 'Amazon Web Services', coords: [47.6062, -122.3321], desc: 'Major cloud provider and storage platform.' },
  { name: 'MIT Media Lab', coords: [42.3601, -71.0942], desc: 'Educational technology research center.' }
];

locations.forEach((location) => {
  const marker = L.marker(location.coords).addTo(map);
  marker.bindPopup(`<strong>${location.name}</strong><br>${location.desc}`);
});

const mapSearchInput = document.getElementById('mapSearch');
const searchMapBtn = document.getElementById('searchMapBtn');

searchMapBtn.addEventListener('click', async () => {
  const query = mapSearchInput.value.trim();
  if (!query) return;

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}`);
    const data = await response.json();
    if (!data.length) {
      alert('No matching location found. Try a larger city or place name.');
      return;
    }

    const result = data[0];
    const lat = Number(result.lat);
    const lon = Number(result.lon);
    map.setView([lat, lon], 10);
    const marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(`<strong>${result.display_name}</strong>`).openPopup();
  } catch (error) {
    alert('Map search failed. Please try again in a moment.');
  }
});

const weatherCityInput = document.getElementById('weatherSearch');
const weatherStatus = document.getElementById('weatherStatus');
const weatherCity = document.getElementById('weatherCity');
const weatherTemp = document.getElementById('weatherTemp');
const weatherCondition = document.getElementById('weatherCondition');
const humidityValue = document.getElementById('humidityValue');
const windValue = document.getElementById('windValue');
const feelsValue = document.getElementById('feelsValue');
const forecastList = document.getElementById('forecastList');

const weatherCodeMap = {
  0: { label: 'Clear', icon: '☀️' },
  1: { label: 'Mostly clear', icon: '🌤️' },
  2: { label: 'Partly cloudy', icon: '⛅' },
  3: { label: 'Cloudy', icon: '☁️' },
  45: { label: 'Foggy', icon: '🌫️' },
  51: { label: 'Light drizzle', icon: '🌦️' },
  53: { label: 'Drizzle', icon: '🌦️' },
  61: { label: 'Rain', icon: '🌧️' },
  71: { label: 'Snow', icon: '❄️' },
  80: { label: 'Rain showers', icon: '🌦️' },
  95: { label: 'Thunderstorm', icon: '⛈️' }
};

async function getWeather(cityName) {
  weatherStatus.textContent = 'Loading weather…';

  try {
    const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
    const geoData = await geoResponse.json();

    if (!geoData.results || !geoData.results.length) throw new Error('City not found.');

    const location = geoData.results[0];
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    if (!weatherData.current) throw new Error('Weather data unavailable.');

    const current = weatherData.current;
    const currentInfo = weatherCodeMap[current.weather_code] || { label: 'Weather', icon: '🌤️' };

    weatherCity.textContent = location.name;
    weatherTemp.textContent = `${Math.round(current.temperature_2m)}°C`;
    weatherCondition.textContent = currentInfo.label;
    humidityValue.textContent = `${current.relative_humidity_2m}%`;
    windValue.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
    feelsValue.textContent = `${Math.round(current.apparent_temperature)}°C`;

    const daily = weatherData.daily;
    forecastList.innerHTML = daily.time.slice(0, 5).map((date, index) => {
      const code = daily.weather_code[index];
      const info = weatherCodeMap[code] || { label: 'Weather', icon: '🌤️' };
      const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
      return `
        <div class="forecast-item">
          <h4>${dayName}</h4>
          <div class="condition-icon">${info.icon}</div>
          <strong>${Math.round(daily.temperature_2m_max[index])}° / ${Math.round(daily.temperature_2m_min[index])}°</strong>
        </div>
      `;
    }).join('');

    weatherStatus.textContent = 'Live weather from Open-Meteo';
  } catch (error) {
    weatherStatus.textContent = error.message || 'Unable to load weather data.';
    weatherCity.textContent = 'Location unavailable';
    weatherTemp.textContent = '--°C';
    weatherCondition.textContent = '--';
    humidityValue.textContent = '--';
    windValue.textContent = '--';
    feelsValue.textContent = '--';
    forecastList.innerHTML = '';
  }
}

document.getElementById('weatherSearchBtn').addEventListener('click', () => {
  const city = weatherCityInput.value.trim() || 'New York';
  getWeather(city);
});

weatherCityInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const city = weatherCityInput.value.trim() || 'New York';
    getWeather(city);
  }
});

document.querySelectorAll('.city-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.city-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    weatherCityInput.value = button.dataset.city;
    getWeather(button.dataset.city);
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')));

const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

function addMessage(text, sender) {
  const message = document.createElement('div');
  message.className = `message ${sender}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function chatbotReply(input) {
  const text = input.toLowerCase();

  if (text.includes('hdd') && text.includes('ssd')) {
    return 'HDDs use spinning disks and are usually cheaper, while SSDs use flash memory and are much faster. HDDs are good for large, low-cost storage, and SSDs are better for speed and durability.';
  }

  if (text.includes('cloud')) {
    return 'Cloud storage keeps copies of files on remote servers. It is useful for backup, sharing, and access from different devices, but you still need a reliable internet connection and secure login details.';
  }

  if (text.includes('usb') || text.includes('flash drive')) {
    return 'USB flash drives are portable, convenient, and easy to carry. They are great for moving files between devices and for quick backups, but they can be lost or damaged if not handled carefully.';
  }

  if (text.includes('capacity') || text.includes('gb') || text.includes('tb')) {
    return 'Storage capacity is the amount of data a device can hold. For example, 1 GB is roughly 1,000 MB, and a 1 TB drive can hold about 1,000 GB. The exact number of files depends on file sizes.';
  }

  if (text.includes('backup')) {
    return 'A good backup plan uses at least two copies of important information, such as one local storage device and one offsite option like cloud storage. This reduces the risk of permanent data loss.';
  }

  if (text.includes('encryption') || text.includes('security')) {
    return 'Encryption turns data into a coded form so unauthorized people cannot read it easily. It is important when storing sensitive information on laptops, USB drives, or cloud accounts.';
  }

  if (text.includes('recommend') || text.includes('best') || text.includes('need')) {
    return 'For gaming, choose a fast SSD. For schoolwork, a 500 GB–1 TB SSD is usually enough. For photography, use a large SSD and cloud backup. For business, combine cloud storage with secure local backups.';
  }

  if (text.includes('memory card') || text.includes('sd card')) {
    return 'Memory cards are common in cameras, phones, and drones. They are portable and useful for capturing photos and videos, but they are not always the best choice for long-term backups.';
  }

  return 'Digital storage is any device or service used to save and retrieve data. The best option depends on speed, capacity, portability, and security needs. Ask me to compare HDDs, SSDs, cloud storage, USB drives, or backups.';
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = chatInput.value.trim();
  if (!value) return;

  addMessage(value, 'user');
  chatInput.value = '';

  setTimeout(() => {
    addMessage(chatbotReply(value), 'bot');
  }, 350);
});

getWeather('New York');

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) navLinks.classList.remove('open');
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.scrollBehavior = 'auto';
}































































