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
//       A photo with a caption underneath. Drop your photos into
//       assets/images/ and put the path in `src`. Leave src as '' to
//       keep the dashed "add a photo" placeholder while you write.
//       Two optional extras let you place pictures freely:
//         size:  'medium' or 'small'   (default is full column width)
//         align: 'left' or 'right'     (tucks the photo beside the
//                story and the text wraps around it — perfect for
//                screenshots you reference mid-sentence)
//       e.g. { type: 'image', src: '...', caption: '...', size: 'small', align: 'right' }
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
    nav: 'The Beginning',                    // tab label in the masthead
    kicker: 'why have i known you for so long thats insane',               // small label above the headline
    title: 'River Trails',
    deck: '',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'I remember 4th grade science class. There was a girl named Sanaa that I thought was the prettiest girl I had ever seen, and I just hadddd to find a way to impress her. This led me to bring my biggest, fastest fidget spinner to class, with hopes that my expert spinning skills would win her over.',
          'One fateful day, after a long dance break to GoNoodle, I whipped out the spinner and showed it to her. To my dismay, she did not seem impressed. I knew I had to keep fighting for her attention.',
          'I then tried Pokemon cards. Sanaa has no interest in Pokemon. Furthermore, they were stolen near christmas. Double Whammy.',
          'I then tried sports.',
          'I would go to recess prepared to play like prime Randy Moss in the last 5 minutes of the Super Bowl. Despite my countless touchdowns (probably like 5), I did not seem to win her attention.',
          'The pacer test was my final option. I remember being physically nervous on the day of the pacer test. I had to show out.',
          'I began to seem cooler and cooler with every beep from the pacer machine, and every person that dropped out - I was LIVING for this.',
          'Finally, I got the perfect angle during lap 58 of the test to look Sanaa in the eyes. In the brief 3 seconds we made eye contact, she smiled. Genuinely, that made my year.',
        ],
      },
      {
        type: 'image',
        src: '',
        caption: 'A photo can go anywhere in the story — or delete this block.',
        size: 'medium',
      },
      {
        type: 'text',
        paragraphs: [
          'Sometime after this I managed to start real conversations with her. Somehow we managed to get on the topic of how she makes bracelets. She offered to make me one, and without hesitation I said yes. She brought me one the next day.',
          'Near the end of the school year my mom informed me that I would not be returning to River Trails the following year. This crushed my heart, as I would not get to make awkward approaches at Sanaa anymore.',
          "After countless more interactions that I'm sure my brain erased from my memory for my own sanity, the final day of school arrived. Our teacher lined us up to bring us to the front, and as we were walking down the stairs, Sanaa gave me a hug. My life was complete. Unfortunately, between my embarrassing hug and my parents picking me up, I never asked her for her phone number.",
        ],
      },
    ],
  },
  {
    nav: 'The Stalking Era',
    kicker: 'chapter two',
    title: 'My Stalking Era',
    deck: '',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'After a few years, and a lot of changes in my life, I had finally settled into a permanent school and routine. This led me to begin reminiscing on the friends I had lost from moving schools, in particular Sanaa.',
          'This led me to do what any sensible young man would do when he misses someone.',
          'I went on a stalking spree.',
          'Lucky for me I had just downloaded instagram regardless of my parents countless discussions about the trouble I would get in for having it.',
          'I immediately searched “Sanaa Washington,” and of course, her handle is literally sanaawashington_',
        ],
      },
      {
        type: 'image',
        src: '',
        caption: 'The DM, preserved for the historical record.',
        align: 'right',
        size: 'small',
      },
      {
        type: 'text',
        paragraphs: [
          "I sent her a message that said something along the lines of “Hi!! I don't know if you remember me but I'm Walker, we went to River Trails together!!”",
          'A day goes by… no response',
          '2 days…',
          '3 days…',
          'Finally I caved, and texted her cousin Brooklyn, who I knew for a fact Sanaa was in close contact with.',
          "I politely asked her to notify Sanaa of my presence in her DM's, which Brooklyn did, and I will be forever grateful for.",
          'Me and Sanaa caught up about life, and at some point I mentioned I still have the bracelet she gave me a few years ago.',
          'This bracelet had become a memento of sorts to me.',
        ],
      },
    ],
  },
  {
    nav: 'The Texting Years',
    kicker: 'chapter three',
    title: 'The Awkward Texting for 2–3 Years Phase',
    deck: '',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'This is the period in time in which I had no car, and I was too scared to talk to her in person. The only logical thing for me to do was text her randomly and have strong conversations for a few weeks then realize it was going nowhere for different reasons, then mutually give up.',
          'This cycle repeated multiple times',
          'Throughout this period there were many notable embarrassing moments. Some of which I am genuinely too embarrassed to mention here, but I am sure Sanaa will remind me.',
          "Near the beginning of this time when me and Sanaa talked, there was a period when I was genuinely convinced me and Sanaa would never work out. Out of frustration and as an attempt to let go, I threw away the beloved bracelet Sanaa had gifted me in 4th grade. I lied and said my mom threw it away, because I didn't want her to be offended, but now you know the truth.",
          'In hindsight, that was a horrible decision and I miss that bracelet everyday. Fortunately for me, my feelings for her were stronger than that, and the destruction of the memento did not hinder me from pursuing her.',
          'During the summer going into senior year, I used all of my strength and dignity to ask Sanaa out to grab some food. Of course, she drove me. This was one of the first times I really got to catch up with her about life.',
          "After that encounter with her we didn't talk much, mostly because I was scared.",
        ],
      },
    ],
  },
  {
    nav: 'College',
    kicker: 'chapter four',
    title: 'College',
    deck: '',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          "In the summer leading into college, I was surprised to receive an invite to Sanaa's graduation party. On the drive there I was genuinely sweating bullets. I thought I would surely find a way to embarrass myself in front of her and her family.",
          'When I walked up to the house Sanaa let me in, and I genuinely thought she was the most beautiful woman ever. It had been some time since I had seen her, and I had completely forgotten how pretty she was.',
          "Something possessed me and I actually made great conversation with her and her family (Especially Nana, we're besties for real).",
          'Sanaa was so kind and sweet and I remember trying so hard to not be awkward in front of her friends. She 100% won me over again on this day.',
          'After the graduation party, I left and all I could think about was her.',
          'The problem was she was going to Texas State and I was going to UT, we both had a huge chapter in our lives coming and I felt it would be unfair to try to rope her into anything at this time. So, once again I bailed.',
          "When college started we stayed in contact and kept up with each other. There was even a period where we “talked” for a while. That was probably the most delightful period of time I had in college. Despite that, we mutually agreed it wasn't a good idea because we had a lot of commitments. That genuinely broke my heart.",
          'Later in the semester Sanaa came to Austin to visit me. When I tell you, I was sh*ting bricks. I showed her around the campus then we sat down and studied on the rooftop of the WCP.',
          "When I tell you, she looked so beautiful I mean it. The sun was setting and it was reflecting on her face perfectly. I should've taken a picture.",
        ],
      },
      {
        type: 'image',
        src: '',
        caption: 'No picture exists of that sunset — so this space is reserved for the next one.',
        size: 'medium',
      },
    ],
  },
  {
    nav: 'This Summer',
    kicker: 'chapter five',
    title: 'This Summer',
    deck: '',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'At some point during my daily mindless instagram scrolling, I posted a picture of my many hats and head pieces. I will include a picture of this image.',
        ],
      },
      {
        type: 'image',
        src: '',
        caption: 'The hat post in question.',
        size: 'medium',
      },
      {
        type: 'image',
        src: '',
        caption: 'My response, included to the right as promised.',
        align: 'right',
        size: 'small',
      },
      {
        type: 'text',
        paragraphs: [
          "For some reason, of all my posts, this got Sanaa's attention (I'm not complaining). She said “I want the wig”",
          'I immediately started physically sweating, because I knew this was my chance to ask her out on an outing.',
          'I will include the picture of my response to the right.',
        ],
      },
    ],
  },
  {
    nav: 'About Her',
    kicker: 'before you turn the last page',
    title: 'What I Love About Her',
    deck: '',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          "This section is still being written — put the 'what I love about her' part here. It's the last thing she reads before the final tab, so it can be short, as long as it's honest.",
        ],
      },
      {
        type: 'quote',
        text: 'One line that sums her up goes here.',
      },
      {
        type: 'imageRow',
        images: [
          { src: '', caption: 'A favorite picture of her' },
          { src: '', caption: 'And one more' },
        ],
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
  const classes = ['figure', 'reveal'];
  if (image.align === 'right') classes.push('figure-right');
  if (image.align === 'left') classes.push('figure-left');
  if (image.size === 'small') classes.push('figure-small');
  if (image.size === 'medium') classes.push('figure-medium');
  return `
    <figure class="${classes.join(' ')}" ${rowItem ? 'style="margin:0"' : ''}>
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
  resetNoButton(); // if the "no" button is mid-chase, put it back home
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
  'Why the hell did you click this',
  'oh youre funny',
  'wow',
  'alright jokes over',
  'seriously',
  'dude',
  'the other button works',
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

// Called on every tab switch: if the button ran off mid-chase, move it
// back into its spot next to "Yes" and start the game fresh.
function resetNoButton() {
  if (!noBtn.classList.contains('dodging')) return;
  noBtn.classList.remove('dodging', 'shaking');
  noBtn.style.left = '';
  noBtn.style.top = '';
  noBtn.textContent = 'No';
  dodgeCount = 0;
  document.getElementById('askButtons').appendChild(noBtn);
}

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

// ---------- background music ----------
// Browsers block sound until the visitor interacts with the page, so
// the song starts on her very first click/tap anywhere. After that the
// floating ♪ button is the only thing that pauses or resumes it.
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
music.volume = 0.45;

let musicStarted = false;

function startMusicOnFirstInteraction() {
  if (musicStarted) return;
  music
    .play()
    .then(() => {
      musicStarted = true;
      document.removeEventListener('pointerdown', startMusicOnFirstInteraction);
    })
    .catch(() => {}); // no song file yet, or the browser said not yet
}

document.addEventListener('pointerdown', startMusicOnFirstInteraction);

musicToggle.addEventListener('click', () => {
  musicStarted = true; // hand over control to the button
  if (music.paused) {
    music.play().catch(() => {});
  } else {
    music.pause();
  }
});

// keep the button's look in sync with whatever the audio is doing
music.addEventListener('play', () => {
  musicToggle.classList.add('playing');
  musicToggle.classList.remove('paused');
});
music.addEventListener('pause', () => {
  musicToggle.classList.remove('playing');
  musicToggle.classList.add('paused');
});

// if the song file isn't there (or the path is wrong), hide the button
music.addEventListener('error', () => musicToggle.classList.add('hidden'));

// ---------- start on the first article ----------
showPage('0');
