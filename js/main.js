// =====================================================================
// FOR SANAA
// ---------------------------------------------------------------------
// ALL OF YOUR WRITING LIVES IN THE `articles` ARRAY BELOW.
//
// This site is built to grow with you two. Each entry in the array
// becomes its own tab in the nav — to add a new page later (an
// anniversary, a trip, whatever), just copy one of the entries below,
// give it a new `nav` label, and write. The nav, the page, and the
// "continue reading" links all update themselves.
//
// Within a page, content is a list of "blocks", top to bottom, and you
// can stack as many as you want in any order:
//
//   { type: 'text',  paragraphs: ['...', '...'] }
//       Long-form writing. Each string is one paragraph. The very first
//       text block of an article automatically gets a drop cap.
//
//   { type: 'image', src: 'assets/images/photo.jpg', caption: '...' }
//       A full-width photo with a caption underneath. Drop your photos
//       into assets/images/ and put the path in `src`. Leave src as ''
//       to keep the dashed "add a photo" placeholder while you write.
//
//   { type: 'imageRow', images: [{ src, caption }, { src, caption }] }
//       Two photos side by side (stacks on phones).
//
//   { type: 'quote', text: '...', cite: '...' }
//       A big centered pull quote, like a magazine. `cite` is optional.
//
// Nothing else in this file needs to change when you edit content.
// =====================================================================

const articles = [
  {
    nav: 'Our Story',                    // tab label in the masthead
    kicker: 'chapter one',               // small label above the headline
    title: 'How It All Started',
    deck: 'Every good story has a beginning. Ours is my favorite one to tell.',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'Write the story of how you two met here — where you were, what you noticed first, what you were thinking and too nervous to say. This is the long-form section, so take your time with it. Two or three honest paragraphs beat ten generic ones.',
          'Keep going here. What happened next? When did you realize this was different? The page scrolls as long as you need it to, so there is no limit.',
        ],
      },
      {
        type: 'image',
        src: '',
        caption: 'Where it all began. (Drop a photo into assets/images/ and set its path above.)',
      },
      {
        type: 'text',
        paragraphs: [
          'A closing thought for the chapter — where that beginning led, and why you would not change a thing about it.',
        ],
      },
    ],
  },
  {
    nav: 'About You',
    kicker: 'about you',
    title: 'Everything I Love About You',
    deck: 'A running list of the things that make you, you.',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'This is the spot for all the little things — her laugh, the way she talks about the things she loves, how she makes ordinary days feel good. Be specific: the details only you would notice are the ones that will get her.',
        ],
      },
      {
        type: 'quote',
        text: 'Put one line here that sums her up — something you would actually say about her.',
      },
      {
        type: 'imageRow',
        images: [
          { src: '', caption: 'A caption for this one' },
          { src: '', caption: 'And a caption for this one' },
        ],
      },
      {
        type: 'text',
        paragraphs: [
          'Wrap the profile up here — what all of those little things add up to.',
        ],
      },
    ],
  },
  {
    nav: 'Memories',
    kicker: 'memories',
    title: 'Moments I Keep Coming Back To',
    deck: 'The days I would live over again in a heartbeat.',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'Pick a few favorite memories and tell each one like a short story — the day, the place, the thing she said that you still think about.',
        ],
      },
      {
        type: 'imageRow',
        images: [
          { src: '', caption: 'Memory one' },
          { src: '', caption: 'Memory two' },
        ],
      },
      {
        type: 'text',
        paragraphs: [
          'Another memory, or two. Then set up the turn: all of these moments are why the last tab exists.',
        ],
      },
      {
        type: 'image',
        src: '',
        caption: 'Save a favorite photo for last.',
      },
    ],
  },
];

// =====================================================================
// Everything below renders the site. You should not need to touch it.
// =====================================================================

// ---------- masthead date ----------
document.getElementById('mastheadDate').textContent = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// ---------- render articles ----------
const articlesContainer = document.getElementById('articlesContainer');
const nav = document.getElementById('mastheadNav');
const finalNavLink = nav.querySelector('[data-page="ask"]');

function figureHtml(image, rowItem = false) {
  const media = image.src
    ? `<div class="figure-frame"><img src="${image.src}" alt="${image.caption || 'photo'}"></div>`
    : `<div class="figure-placeholder"><span class="cam">📷</span><span>add a photo here</span></div>`;
  return `
    <figure class="figure reveal" style="margin:${rowItem ? '0' : ''}">
      ${media}
      ${image.caption ? `<figcaption class="figure-caption">${image.caption}</figcaption>` : ''}
    </figure>`;
}

function blockHtml(block, isFirstText) {
  switch (block.type) {
    case 'text':
      return `<div class="article-text reveal ${isFirstText ? 'opener' : ''}">
        ${block.paragraphs.map((p) => `<p>${p}</p>`).join('')}
      </div>`;
    case 'image':
      return figureHtml(block);
    case 'imageRow':
      return `<div class="figure-row reveal">${block.images.map((img) => figureHtml(img, true)).join('')}</div>`;
    case 'quote':
      return `<blockquote class="pull-quote reveal">
        <p>${block.text}</p>
        ${block.cite ? `<cite>${block.cite}</cite>` : ''}
      </blockquote>`;
    default:
      return '';
  }
}

articles.forEach((article, i) => {
  // nav tab (inserted before the always-last "One Last Thing" tab)
  const link = document.createElement('button');
  link.className = 'nav-link';
  link.dataset.page = String(i);
  link.textContent = article.nav;
  nav.insertBefore(link, finalNavLink);

  // page
  const nextLabel = i < articles.length - 1 ? articles[i + 1].nav : 'One Last Thing ♥';
  const nextPage = i < articles.length - 1 ? String(i + 1) : 'ask';

  let firstTextUsed = false;
  const blocksHtml = article.blocks
    .map((block) => {
      const isFirstText = block.type === 'text' && !firstTextUsed;
      if (isFirstText) firstTextUsed = true;
      return blockHtml(block, isFirstText);
    })
    .join('');

  const section = document.createElement('section');
  section.className = 'page';
  section.dataset.page = String(i);
  section.innerHTML = `
    <article class="article">
      <p class="kicker reveal">${article.kicker}</p>
      <h2 class="article-title reveal">${article.title}</h2>
      <p class="article-deck reveal">${article.deck}</p>
      <div class="rule-fancy reveal" aria-hidden="true">
        <span class="rule-line"></span>
        <svg class="rule-lily"><use href="#lily-icon"></use></svg>
        <span class="rule-line"></span>
      </div>
      ${blocksHtml}
      <div class="continue reveal">
        <button class="continue-btn" data-goto="${nextPage}">
          Continue to “${nextLabel}” <span class="arrow">→</span>
        </button>
      </div>
    </article>`;
  articlesContainer.appendChild(section);
});

// ---------- tab navigation ----------
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

function showPage(id) {
  pages.forEach((p) => p.classList.toggle('active', p.dataset.page === id));
  navLinks.forEach((l) => l.classList.toggle('active', l.dataset.page === id));
  window.scrollTo({ top: 0, behavior: 'instant' });
  observeReveals(); // new page's blocks need watching
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => showPage(link.dataset.page));
});

document.querySelectorAll('.continue-btn').forEach((btn) => {
  btn.addEventListener('click', () => showPage(btn.dataset.goto));
});

// ---------- scroll-reveal animations ----------
// Blocks fade up as they enter the viewport. Elements already visible
// when a page opens reveal immediately (with a slight stagger).
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function observeReveals() {
  const activePage = document.querySelector('.page.active');
  if (!activePage) return;
  let stagger = 0;
  activePage.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      // already on screen: reveal now, one after another
      el.style.transitionDelay = `${stagger}ms`;
      el.classList.add('visible');
      stagger += 90;
      // clear the delay so scroll-triggered transitions stay snappy
      el.addEventListener('transitionend', () => (el.style.transitionDelay = ''), { once: true });
    } else {
      observer.observe(el);
    }
  });
}

// ---------- little hearts on click ----------
// A tiny heart floats up from wherever she taps/clicks. Skipped for
// clicks on buttons so it never distracts from the important ones.
document.addEventListener('click', (e) => {
  if (e.target.closest('button')) return;
  const heart = document.createElement('span');
  heart.className = 'click-heart';
  heart.textContent = '♥';
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
});

// ---------- the runaway "no" button ----------
// It behaves like a normal button until she actually clicks it — then
// it glides to a random spot on screen (the CSS transition on left/top
// does the animation) with a little shake and a new taunt each time.
const noBtn = document.getElementById('noBtn');
const noTaunts = [
  'No',
  'Nice try 😏',
  'Nope!',
  'Too slow!',
  "Can't catch me",
  'Still no?',
  'Persistent, huh 😂',
  'The other button works',
];
let dodgeCount = 0;

function dodgeNoButton() {
  const rect = noBtn.getBoundingClientRect();

  if (!noBtn.classList.contains('dodging')) {
    // first click: freeze it at its current spot, then let the
    // transition carry it from there to the random target.
    // It must live directly under <body> while position:fixed — the
    // page's slide-in animation leaves a transform on the article
    // section, which would otherwise hijack the fixed coordinates.
    noBtn.style.left = `${rect.left}px`;
    noBtn.style.top = `${rect.top}px`;
    noBtn.classList.add('dodging');
    document.body.appendChild(noBtn);
    // force the browser to apply the starting position before moving
    noBtn.getBoundingClientRect();
  }

  const margin = 24;
  const maxX = window.innerWidth - rect.width - margin;
  const maxY = window.innerHeight - rect.height - margin;

  // pick a spot at least a third of the screen away so the dodge is obvious
  let x, y;
  do {
    x = margin + Math.random() * Math.max(maxX - margin, 1);
    y = margin + Math.random() * Math.max(maxY - margin, 1);
  } while (Math.hypot(x - rect.left, y - rect.top) < window.innerWidth / 3);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  noBtn.classList.remove('shaking');
  noBtn.getBoundingClientRect(); // restart the shake animation
  noBtn.classList.add('shaking');

  dodgeCount += 1;
  noBtn.textContent = noTaunts[Math.min(dodgeCount, noTaunts.length - 1)];
}

noBtn.addEventListener('click', dodgeNoButton);

// ---------- the "yes" button ----------
const yesBtn = document.getElementById('yesBtn');
const askStage = document.getElementById('askStage');
const celebrateStage = document.getElementById('celebrateStage');

yesBtn.addEventListener('click', () => {
  askStage.classList.add('hidden');
  noBtn.classList.add('hidden'); // in case it's mid-dodge somewhere on screen
  celebrateStage.classList.remove('hidden');
  launchConfetti();
});

// ---------- confetti ----------
// A small canvas particle system — rectangles and hearts with their own
// velocity and spin, redrawn every animation frame. No library needed.
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
const confettiColors = ['#c4507c', '#96355c', '#e9b44c', '#8ea888', '#f7dce7'];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawHeart(size) {
  ctx.beginPath();
  const s = size / 2;
  ctx.moveTo(0, s * 0.6);
  ctx.bezierCurveTo(-s, -s * 0.4, -s * 0.4, -s, 0, -s * 0.3);
  ctx.bezierCurveTo(s * 0.4, -s, s, -s * 0.4, 0, s * 0.6);
  ctx.fill();
}

function launchConfetti() {
  const particles = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.4,
    size: 7 + Math.random() * 7,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    vx: -2 + Math.random() * 4,
    vy: 2 + Math.random() * 3,
    rotation: Math.random() * 360,
    rotationSpeed: -6 + Math.random() * 12,
    isHeart: Math.random() < 0.3,
  }));

  const durationMs = 4500;
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
      if (p.isHeart) {
        drawHeart(p.size);
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }
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

// ---------- start on the first article ----------
showPage('0');
