// ---------------------------------------------------------------
// BLOG POSTS
// This is the space to actually write about her. Each entry below
// becomes its own full-screen page between the landing page and
// the ask at the end. To add a new post, just add another object
// to this array — nothing else needs to change.
//
//   eyebrow    small label above the title
//   title      the post heading
//   paragraphs array of strings, each becomes its own paragraph
//   photos     optional — array of { caption }. Leave it out for a
//              text-only post. To use a real photo once you have
//              one, add an image and set it as this photo-slot's
//              background in the CSS/inline style, e.g.
//              style="background-image: url('assets/images/photo1.jpg')"
// ---------------------------------------------------------------

const posts = [
  {
    eyebrow: 'how it started',
    title: 'The first time I saw you',
    paragraphs: [
      'Write about how you met, or the first time she caught your eye. This is your space — say it exactly how you’d say it out loud.',
      'Add as many paragraphs as you want here; the page scrolls if it runs long, so there’s no real limit.',
    ],
  },
  {
    eyebrow: 'about you',
    title: 'Everything I love about you',
    paragraphs: [
      'This is the spot for all the little things — her laugh, the way she talks about the things she loves, how she makes ordinary days feel good.',
    ],
    photos: [
      { caption: 'Add a caption here' },
      { caption: 'Add a caption here' },
    ],
  },
  {
    eyebrow: 'memories',
    title: 'Some of my favorite moments with you',
    paragraphs: [
      'Pick a few memories that mean the most to you and write about them here.',
    ],
    photos: [
      { caption: 'Add a caption here' },
      { caption: 'Add a caption here' },
      { caption: 'Add a caption here' },
      { caption: 'Add a caption here' },
    ],
  },
];

function renderPost(post) {
  const section = document.createElement('section');
  section.className = 'slide';

  let photosHtml = '';
  if (post.photos && post.photos.length) {
    const items = post.photos
      .map(
        (photo) => `
        <div class="photo-item">
          <div class="photo-slot"></div>
          <p class="photo-caption">${photo.caption || ''}</p>
        </div>`
      )
      .join('');
    photosHtml = `<div class="photo-grid">${items}</div>`;
  }

  const paragraphsHtml = post.paragraphs.map((p) => `<p>${p}</p>`).join('');

  section.innerHTML = `
    <div class="slide-content blog-post">
      <p class="eyebrow">${post.eyebrow}</p>
      <h2>${post.title}</h2>
      <svg class="lily-divider" aria-hidden="true"><use href="#lily-icon"></use></svg>
      <div class="blog-text">${paragraphsHtml}</div>
      ${photosHtml}
      <div class="nav-row">
        <button class="btn btn-ghost back-btn">← Back</button>
        <button class="btn btn-primary next-btn">Next <span class="arrow">→</span></button>
      </div>
    </div>
  `;
  return section;
}

const postsContainer = document.getElementById('postsContainer');
posts.forEach((post) => {
  postsContainer.appendChild(renderPost(post));
});

// ---------------------------------------------------------------
// PROGRESS DOTS
// Built to match however many slides ended up on the page (landing
// + however many posts + the ask), so this stays correct even as
// the posts array above grows or shrinks.
// ---------------------------------------------------------------

const slides = document.querySelectorAll('.slide');
const progressDots = document.getElementById('progressDots');

slides.forEach((slide, i) => {
  slide.dataset.slide = String(i);
  const dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.dataset.index = String(i);
  progressDots.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// ---------------------------------------------------------------
// SLIDE NAVIGATION
// We keep track of which slide is showing with a single number
// (currentIndex) and just toggle an "active" CSS class on/off.
// The CSS transition on .slide handles the actual animation.
// ---------------------------------------------------------------

let currentIndex = 0;

function goToSlide(index) {
  // guard clause: ignore anything outside the valid range
  if (index < 0 || index >= slides.length) return;

  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');

  currentIndex = index;

  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

// querySelectorAll returns a NodeList, not an Array, but it does support
// forEach. We attach the same handler to every "Next"/"Back" button on
// the page rather than writing one listener per slide.
document.querySelectorAll('.next-btn').forEach((btn) => {
  btn.addEventListener('click', () => goToSlide(currentIndex + 1));
});

document.querySelectorAll('.back-btn').forEach((btn) => {
  btn.addEventListener('click', () => goToSlide(currentIndex - 1));
});

// ---------------------------------------------------------------
// SWIPE SUPPORT (mobile)
// touchstart fires when a finger touches the screen, touchend when
// it lifts off. Comparing the x position at each tells us whether
// it was a left-swipe (next) or right-swipe (back).
// ---------------------------------------------------------------

const slidesContainer = document.getElementById('slides');
let touchStartX = 0;

slidesContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
});

slidesContainer.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  const SWIPE_THRESHOLD = 50; // pixels — ignore tiny accidental drags

  if (deltaX < -SWIPE_THRESHOLD) goToSlide(currentIndex + 1); // swiped left
  if (deltaX > SWIPE_THRESHOLD) goToSlide(currentIndex - 1);  // swiped right
});

// ---------------------------------------------------------------
// THE RUNAWAY "NO" BUTTON
// On desktop it dodges when the mouse hovers it (pointerenter).
// On mobile there's no hover, so we also dodge on touchstart and
// stop that touch from turning into a click.
// ---------------------------------------------------------------

const noBtn = document.getElementById('noBtn');
const noTaunts = [
  'No',
  'Try again 😏',
  "Nope, can't catch me",
  'So close!',
  "You're persistent 😂",
  'Not happening',
];
let dodgeCount = 0;

function dodgeNoButton() {
  const margin = 24; // keep the button fully on-screen
  const rect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - rect.width - margin;
  const maxY = window.innerHeight - rect.height - margin;

  const randomX = margin + Math.random() * (maxX - margin);
  const randomY = margin + Math.random() * (maxY - margin);

  noBtn.classList.add('dodging'); // switches the button to position: fixed
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  dodgeCount += 1;
  noBtn.textContent = noTaunts[dodgeCount % noTaunts.length];
}

noBtn.addEventListener('pointerenter', dodgeNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // stop the touch from also firing a click
  dodgeNoButton();
}, { passive: false });

// ---------------------------------------------------------------
// THE "YES" BUTTON
// Swap the question for a celebration message and fire confetti.
// ---------------------------------------------------------------

const yesBtn = document.getElementById('yesBtn');
const askStage = document.getElementById('askStage');
const celebrateStage = document.getElementById('celebrateStage');

yesBtn.addEventListener('click', () => {
  askStage.classList.add('hidden');
  celebrateStage.classList.remove('hidden');
  launchConfetti();
});

// ---------------------------------------------------------------
// CONFETTI
// A small particle system drawn on a full-screen <canvas>. Each
// particle is a colored rectangle with its own position, velocity,
// and rotation; every animation frame we move it a little and
// redraw. No external library needed.
// ---------------------------------------------------------------

const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
const confettiColors = ['#e8628f', '#c2447a', '#f2b134', '#8ea888', '#fff2f8'];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function launchConfetti() {
  const particles = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.3,
    size: 6 + Math.random() * 6,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    vx: -2 + Math.random() * 4,
    vy: 2 + Math.random() * 3,
    rotation: Math.random() * 360,
    rotationSpeed: -6 + Math.random() * 12,
  }));

  const durationMs = 3800;
  const startTime = performance.now();

  function frame(now) {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    });

    if (elapsed < durationMs) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(frame);
}
