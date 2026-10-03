// =====================================================================
// FOR SANAA
// ---------------------------------------------------------------------
// This file holds everything on the site, in two parts:
//
//   1. `memories`        — the ongoing journal. THIS IS WHAT SHE SEES
//                          FIRST when she opens the site.
//   2. `proposalChapters`— the original proposal story, archived under
//                          "The Proposal ♥" so she can relive it anytime.
//
// ---------------------------------------------------------------------
// HOW TO ADD A NEW MEMORY
// ---------------------------------------------------------------------
// Copy this and paste it at the TOP of the `memories` array (newest
// first — whatever is first in the list shows up first on her screen):
//
//   {
//     date: 'August 14, 2026',
//     title: 'The night we tried to make pasta',
//     blocks: [
//       { type: 'text', paragraphs: ['...', '...'] },
//       { type: 'image', src: 'assets/images/pasta.jpg', caption: '...' },
//     ],
//   },
//
// That's it — the entry shows up on the front page with its date, and
// gets its own page when she taps it. Nothing else needs changing.
//
// ---------------------------------------------------------------------
// THE BLOCKS YOU CAN USE (in any order, as many as you want)
// ---------------------------------------------------------------------
//   { type: 'text',  paragraphs: ['...', '...'] }
//       Long-form writing. Each string is one paragraph. The very first
//       text block of an entry automatically gets a drop cap.
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
//       A big centered pull quote. `cite` is optional.
//
// The first photo in an entry is also used as its thumbnail on the
// front page. No photo is fine too — the card just shows text.
// =====================================================================

const memories = [
  {
    date: 'October 2, 2026',
    title: 'The Start of College',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'It is October 2nd as I am writing this, and Sanaa and I are en route to our 3-month anniversary, which is a 4th of a year together, and a 40th of a decade together!',
          "Since my last edition of this blog, me and Sanaa's relationship has consisted of 40-minute car rides back and forth between San Marcos and Austin. We have spent almost every weekend together, and I have valued every moment. There is nothing I like doing more than spending my weekends watching movies with her, even if my friends seem to be half-jealous (cough David).",
          'Although I see her almost every week, I still get nervous looking at her. There is always a brief 60-second period of pure anxious sweating between the moment of me receiving the “Here” text and walking out the Moore-Hill doors to see my elegant girlfriend waiting in her car for me.',
          'Due to the stress of school, birthdays, track, band, and jobs, our 3-month relationship has genuinely felt like 6 months. The truth is, we have had our bumps in the road throughout these simulated 6 months. I believe this is a blessing in disguise, because our persistence in committing to the relationship through these trials has only deepened my love for her.',
          'This is a good segue into my next point: Birthdays!!!!!!',
          "August 27th was Sanaa's birthday. This day was so much fun! She hosted a birthday bash at her house and invited all her friends. Although I did not get to speak with her much that night, as she was preoccupied with her friends, I thoroughly enjoyed meeting with everyone! Granted, I also spent part of the night making sure the party went somewhat smoothly, but even that was kind of enjoyable! Her friends are all truly so kind, and I believe this is a reflection of Sanaa directly. The entire night, her eyes were lit up like the moon. She was whipping around her apartment, doing her usual people-pleaser routine of making sure everyone was enjoying themselves, and of course everyone was. Each conversation she had was filled with laughter, and the entire night I was overwhelmed with admiration for her because of this. That night reinforced, and was a testament to why I love her.",
          'About 2 weeks later, my birthday arrived, and it went beautifully because Sanaa was there.',
          'As I am sitting here writing this, I am overwhelmed with a feeling of emotional safety and love. I look around her apartment and see traces of our relationship, sitting there so casually. A picture of us on the way, the moodang I gifted her over a year ago, the whiplash poster, the Echo Dot that periodically displays pictures of us, the whiteboard that has a love message on it, and of course the ambient lights that are hung so unevenly. These little things remind me how much I love her.',
        ],
      },
      {
        // TWO PHOTO SLOTS — set each src to a file in assets/images/
        type: 'imageRow',
        images: [
          { src: 'assets/images/image11.jpeg', caption: 'Terry Black! (On Meme and Papa <3)' },
          { src: 'assets/images/image10.jpeg', caption: 'Birthday shot :O' },
        ],
      },
    ],
  },
  {
    date: 'July 17, 2026',
    title: 'The best day of my life',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'This was the best day of my life.',
          'I started the day off by spending 2 hours trying to get the perfect assortment of flowers for her. I settled on pink and white as the color scheme, and made sure to throw in some lilies because I know she loves them.',
          'I drove to her house and presented the flowers. The smile on her face was priceless.',
          'We then had a lovely meal at Olive garden. The whole time I was nervous about what was coming. I knew she would say yes, but regardless it was terrifying.',
          "After we had finished eating, I drove her to the River Trails neighborhood. During this adventure she said “uhh Brooklyn’s house is that way,” while pointing down a street I had just passed. I guess she assumed I was trying to surprise her with a visit to her cousin's house, which still makes me giggle because that probably terrified her.",
          'I finally found the school and parked out front. I said “this is the place we first met!” (obviously)',
          'I told her I had something to show her, and at this point I’m sure she knew that I was about to ask her.',
          'I opened my laptop, connected to my hotspot, and showed her the website.',
          'Not even 3 paragraphs into reading she began to tear up.',
          'She read very slowly because she couldn’t see, which I thought was very cute.',
          'She doesn’t know this but I began to tear up at this point as well, but I fought it off because it’d be so ridiculous if we were both crying.',
          'After about 15 minutes of reading, she got to the final tab and clicked yes to being my girlfriend (THANK GOODNESS)',
          'The previous day I had gone shopping for gifts and selected 3 gifts I knew she would like. Fugglers, an otter, and a squishy.',
          'I presented these gifts to her one by one, and she broke down more and more.',
        ],
      },
      {
        // FILLER PHOTO — put the picture you took that night here.
        // Just set src to its path, e.g. 'assets/images/that-photo.jpg'
        type: 'image',
        src: 'assets/images/image0.jpeg',
        caption: 'The photo I snapped in that moment.',
        align: 'right',
        size: 'small',
      },
      {
        type: 'text',
        paragraphs: [
          'In this moment, I felt a deep feeling of appreciation and love that I had never experienced before, so naturally I snapped a photo to savor the moment forever.',
          'After we collected ourselves we talked for what seemed like an hour.',
          'We then went home and spent the rest of the night playing chess and watching movies.',
          'I spend most of my days now thinking about her, and this day lives in the forefront of my memories with her, and it will live there forever.',
        ],
      },
    ],
  },
];

// =====================================================================
// THE ARCHIVE — the original proposal, kept exactly as she first read it
// =====================================================================

const proposalChapters = [
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
          'I then tried sports. I would go to recess prepared to play like prime Randy Moss in the last 5 minutes of the Super Bowl. Despite my countless touchdowns (probably like 5), I did not seem to win her attention.',
          'The pacer test was my final option. I remember being physically nervous on the day of the pacer test. I had to show out.',
          'I began to seem cooler and cooler with every beep from the pacer machine - I was LIVING for this.',
          'Finally, I got the perfect angle during lap 58 of the test to look Sanaa in the eyes. In the brief 3 seconds we made eye contact, she smiled. Genuinely, that made my year.',
        ],
      },
      {
        type: 'text',
        paragraphs: [
          'Sometime after this I managed to start real conversations with her. Somehow we managed to get on the topic of how she makes bracelets. She offered to make me one, and without hesitation I said yes. She brought me one the next day.',
          'Near the end of the school year my mom informed me that I would not be returning to River Trails the following year. This crushed my heart, as I would not get to make awkward approaches at Sanaa anymore.',
          "After countless more interactions that I'm sure my brain erased from my memory for my own sanity, the final day of school arrived. Our teacher lined us up to bring us to the front, and as we were walking down the stairs, Sanaa gave me a hug. My life was complete. Unfortunately, between my embarrassing hug and my parents picking me up, I never asked her for her phone number.",
        ],
      },
      {
        type: 'image',
        src: 'assets/images/image3.jpeg',
        caption: 'The Sanaa I knew when I was younger :D',
        size: 'small',
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
          "I sent her a message that said something along the lines of “Hi!! I don't know if you remember me but I'm Walker, we went to River Trails together!!”",
          'A day goes by… no response',
          '2 days…',
          '3 days…',
          "Finally I caved, and texted her cousin Brooklyn, who I knew for a fact Sanaa was in close contact with. I politely asked her to notify Sanaa of my presence in her DM's, which Brooklyn did, and I will be forever grateful for.",
        ],
      },
      {
        type: 'image',
        src: 'assets/images/image2.jpeg',
        caption: 'Her and Brooklyn!!',
        align: 'right',
        size: 'small',
      },
      {
        type: 'text',
        paragraphs: [
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
        ],
      },
      {
        type: 'image',
        src: 'assets/images/image8.jpeg',
        caption: 'Our little outing to Canes!!',
        size: 'small',
        allign: 'right',
      },
      {
        type: 'text',
        paragraphs: [
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
          'When I walked up to the house Sanaa let me in, and I genuinely thought she was the most beautiful woman ever. It had been some time since I had seen her, and she was just as pretty as I remembered her.',
          "Something possessed me and I actually made great conversation with her and her family (Especially Nana, we're besties for real).",
          'Sanaa was so kind and sweet and I remember trying so hard to not be awkward in front of her friends. She 100% won me over again on this day.',
          'After the graduation party, I left and all I could think about was her.',
          'The problem was she was going to Texas State and I was going to UT, we both had a huge chapter in our lives coming and I felt it would be unfair to try to rope her into anything at this time. So, once again I bailed.',
          "When college started we stayed in contact and kept up with each other. There was even a period where we “talked” for a while. That was probably the most delightful period of time I had in college. Despite that, we mutually agreed it wasn't a good idea because we had a lot of commitments. That genuinely broke my heart.",
          'Later in the semester Sanaa came to Austin to visit me. When I tell you, I was pooping bricks. I showed her around the campus then we sat down and studied on the rooftop of the WCP.',
          "She looked so beautiful. The sun was setting and it was reflecting on her face perfectly. I should've taken a picture.",
        ],
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
        src: 'assets/images/image6.png',
        caption: 'The hat post in question.',
        size: 'small',
      },
      {
        type: 'image',
        src: 'assets/images/image0.png',
        caption: 'My response, included to the right as promised.',
        align: 'right',
        size: 'small',
      },
      {
        type: 'text',
        paragraphs: [
          "For some reason, of all my posts, this got Sanaa's attention (I'm not complaining).",
          'I immediately started physically sweating, because I knew this was my chance to ask her out on an outing.',
          'I will include the picture of my response to the right.',
          "I took her out for Gyros. We talked for hours. I don't think I have ever smiled so much in my life. My face literally hurt.",
          "After we had Gyros, we got Brauhms. We sat and talked and got a little deeper. I don't know what it was, but something in this conversation made it click in my mind, and I truly knew I had deep feelings for Sanaa.",
          'A few days later we went and saw Obsession. I bought us tickets for the second to last row, but I messed up and was sure it was the very last row. We arrived at the movie theater early and I led us to what I thought were our correct seats.',
          'Then, someone made us scoot over because “we were in their seats”',
          'Then another person made us scoot again.',
          'Then again.',
          'Then again.',
          'I am not kidding, I will highlight all the seats we gradually moved through.',
        ],
      },
      {
        type: 'image',
        src: 'assets/images/seat-migration.png',
        caption: 'The great seat migration, highlighted as promised.',
        size: 'small',
      },
      {
        type: 'text',
        paragraphs: [
          "It was humiliating, and I could feel Sanaa's anger the entire movie, but I couldn't help but laugh.",
          'As we walked out of the theater Sanaa gave me an earful about her embarrassment.',
          'In an attempt to cheer her up, I handed her her first (of many) flowers.',
          'She smiled beautifully and stopped getting on to me.',
          'That was one of the funniest nights of my life.',
          'We have gone on many dates since then, and my feelings for her have only grown stronger. When she is now reading this, we should have just finished eating dinner at a restaurant of HER CHOOSING, and if all goes correctly, be in front of River Trails.',
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
          "To start, Sanaa has the most beautiful smile ever. Everytime she laughs I genuinely get butterflies. Sometimes she does this thing when we're in a social setting when we both pick up on a reference where we side eye each other and grin. I would go to war and fight for those moments.",
          'She is so kind. She speaks to people around her with such kindness that I often see the other person smile just from a simple interaction. She listens and cares like no one I have ever met.',
          "She feels things so deeply. I once told her about the passing of my Step-Step Great Grandmother, and she started to tear up at a restaurant. She cares about everything I say, and truly has emotional reactions to my stories. She hates this about herself, but I think it's insanely admirable and I love it.",
          'She is outgoing. She could literally talk to a brick wall. This is amazing for me, because I could also talk to a brick wall. We just talk and talk like two peas in a pod.',
          "She is genuinely interesting! There are so many small things she has/says/does that make her unique. Did you know her toilet lights up like a disco ball? She even poops with the lights off. She has poop parties. That's hilarious. She also is really good at track, but is too humble to admit how good she is. To top it all off, she is obsessed with Minions. Yes, the yellow creatures. I love these little things about her.",
          "Finally, she is beautiful. Even when she's not all dressed up, I can't help but admire how breathtaking she is.",
        ],
      },
      {
        type: 'quote',
        text: 'These are just a few of the things I love about her.',
      },
      {
        type: 'imageRow',
        images: [
          { 
            src: 'assets/images/image9.jpeg', 
            caption: 'A favorite picture of her',
            size: 'small',
          },
          { 
            src: 'assets/images/image1.jpeg', 
            caption: 'And one more',
            size: 'small', 
          },
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

// ---------- render ----------
const memoriesContainer = document.getElementById('memoriesContainer');
const archiveContainer = document.getElementById('archiveContainer');

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

// Turns an entry's blocks into the page body, with a drop cap on the
// first paragraph.
function blocksToHtml(blocks) {
  let firstTextUsed = false;
  return blocks
    .map((block) => {
      const isFirstText = block.type === 'text' && !firstTextUsed;
      if (isFirstText) firstTextUsed = true;
      return blockHtml(block, isFirstText);
    })
    .join('');
}

// Grabs the first photo in an entry to use as its thumbnail, and the
// opening sentences to use as the preview text on the index card.
function firstImageOf(entry) {
  for (const block of entry.blocks) {
    if (block.type === 'image' && block.src) return block.src;
    if (block.type === 'imageRow') {
      const found = block.images.find((img) => img.src);
      if (found) return found.src;
    }
  }
  return '';
}

function excerptOf(entry, maxLength = 165) {
  const firstText = entry.blocks.find((b) => b.type === 'text');
  if (!firstText || !firstText.paragraphs.length) return '';
  const text = firstText.paragraphs[0];
  return text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}…` : text;
}

function makePage(id, className, innerHtml) {
  const section = document.createElement('section');
  section.className = `page ${className}`;
  section.dataset.page = id;
  section.innerHTML = innerHtml;
  return section;
}

// ---------- the memories index (her home screen) ----------
const memoryCards = memories
  .map((entry, i) => {
    const thumb = firstImageOf(entry);
    return `
      <article class="entry-card reveal" data-goto="memory-${i}" tabindex="0" role="link">
        ${
          thumb
            ? `<div class="entry-thumb"><img src="${thumb}" alt=""></div>`
            : '<div class="entry-thumb entry-thumb-empty" aria-hidden="true"><svg class="thumb-lily"><use href="#lily-icon"></use></svg></div>'
        }
        <div class="entry-body">
          ${entry.date ? `<p class="entry-date">${entry.date}</p>` : ''}
          <h3 class="entry-card-title">${entry.title}</h3>
          <p class="entry-excerpt">${excerptOf(entry)}</p>
          <span class="entry-read">Read this one <span class="arrow">→</span></span>
        </div>
      </article>`;
  })
  .join('');

memoriesContainer.appendChild(
  makePage(
    'home',
    'index-page',
    `
    <div class="index-head">
      <p class="kicker reveal">since you said yes</p>
      <h2 class="index-title reveal">Our Memories</h2>
      <p class="index-note reveal">Everything we get up to from here. I'll keep adding to it.</p>
      <div class="rule-fancy reveal" aria-hidden="true">
        <span class="rule-line"></span>
        <svg class="rule-lily"><use href="#lily-icon"></use></svg>
        <span class="rule-line"></span>
      </div>
    </div>
    <div class="entry-list">
      ${memoryCards || '<p class="entry-empty reveal">The first memory is on its way. ♥</p>'}
    </div>
    <div class="archive-callout reveal">
      <p>Want to read how all of this started again?</p>
      <button class="btn btn-reveal" data-goto="archive">Revisit the proposal ♥</button>
    </div>`
  )
);

// ---------- one page per memory ----------
memories.forEach((entry, i) => {
  memoriesContainer.appendChild(
    makePage(
      `memory-${i}`,
      '',
      `
      <article class="article">
        <div class="back-row reveal">
          <button class="back-link" data-goto="home">← All memories</button>
        </div>
        ${entry.date ? `<p class="kicker reveal">${entry.date}</p>` : ''}
        <h2 class="article-title reveal">${entry.title}</h2>
        <div class="rule-fancy reveal" aria-hidden="true">
          <span class="rule-line"></span>
          <svg class="rule-lily"><use href="#lily-icon"></use></svg>
          <span class="rule-line"></span>
        </div>
        ${blocksToHtml(entry.blocks)}
        <div class="continue reveal">
          ${
            i < memories.length - 1
              ? `<button class="continue-btn" data-goto="memory-${i + 1}">Older: “${memories[i + 1].title}” <span class="arrow">→</span></button>`
              : '<button class="continue-btn" data-goto="home">Back to all memories <span class="arrow">→</span></button>'
          }
        </div>
      </article>`
    )
  );
});

// ---------- the proposal archive index ----------
const chapterCards = proposalChapters
  .map(
    (chapter, i) => `
      <button class="chapter-card reveal" data-goto="chapter-${i}">
        <span class="chapter-number">${String(i + 1).padStart(2, '0')}</span>
        <span class="chapter-name">${chapter.title}</span>
        <span class="arrow">→</span>
      </button>`
  )
  .join('');

archiveContainer.appendChild(
  makePage(
    'archive',
    'index-page',
    `
    <div class="index-head">
      <p class="kicker reveal">the archive</p>
      <h2 class="index-title reveal">The Proposal</h2>
      <p class="index-note reveal"></p>
      <div class="rule-fancy reveal" aria-hidden="true">
        <span class="rule-line"></span>
        <svg class="rule-lily"><use href="#lily-icon"></use></svg>
        <span class="rule-line"></span>
      </div>
    </div>
    <div class="chapter-list">
      ${chapterCards}
      <button class="chapter-card chapter-card-final reveal" data-goto="ask">
        <span class="chapter-number">♥</span>
        <span class="chapter-name">The question</span>
        <span class="arrow">→</span>
      </button>
    </div>`
  )
);

// ---------- one page per archived chapter ----------
proposalChapters.forEach((chapter, i) => {
  const isLast = i === proposalChapters.length - 1;
  const nextLabel = isLast ? 'The question ♥' : proposalChapters[i + 1].title;
  const nextPage = isLast ? 'ask' : `chapter-${i + 1}`;

  archiveContainer.appendChild(
    makePage(
      `chapter-${i}`,
      '',
      `
      <article class="article">
        <div class="back-row reveal">
          <button class="back-link" data-goto="archive">← Back to the proposal</button>
        </div>
        ${chapter.kicker ? `<p class="kicker reveal">${chapter.kicker}</p>` : ''}
        <h2 class="article-title reveal">${chapter.title}</h2>
        ${chapter.deck ? `<p class="article-deck reveal">${chapter.deck}</p>` : ''}
        <div class="rule-fancy reveal" aria-hidden="true">
          <span class="rule-line"></span>
          <svg class="rule-lily"><use href="#lily-icon"></use></svg>
          <span class="rule-line"></span>
        </div>
        ${blocksToHtml(chapter.blocks)}
        <div class="continue reveal">
          <button class="continue-btn" data-goto="${nextPage}">
            Continue to “${nextLabel}” <span class="arrow">→</span>
          </button>
        </div>
      </article>`
    )
  );
});

// ---------- navigation ----------
// Every page is in the DOM at once; we just toggle which one is active.
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

// which top-level nav item should light up for a given page
function navSectionFor(id) {
  if (id === 'archive' || id === 'ask' || id.startsWith('chapter-')) return 'archive';
  return 'home';
}

function showPage(id) {
  resetNoButton(); // if the "no" button is mid-chase, put it back home
  if (id === 'ask') resetAskPage(); // let her replay the proposal
  pages.forEach((p) => p.classList.toggle('active', p.dataset.page === id));
  const section = navSectionFor(id);
  navLinks.forEach((l) => l.classList.toggle('active', l.dataset.page === section));
  window.scrollTo({ top: 0, behavior: 'instant' });
  observeReveals(); // new page's blocks need watching
}

// One listener on the whole page: anything with data-goto navigates.
// This covers nav links, cards, back links and continue buttons —
// including ones rendered later.
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-goto], .nav-link');
  if (!target) return;
  showPage(target.dataset.goto || target.dataset.page);
});

// memory cards are keyboard-reachable too
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.entry-card');
  if (!card) return;
  e.preventDefault();
  showPage(card.dataset.goto);
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

// ---------- revealing the question ----------
// The lead-in paragraph and its button fade out, then the question
// (hidden until now) pops in.
const revealBtn = document.getElementById('revealBtn');
const askIntro = document.getElementById('askIntro');
const questionStage = document.getElementById('questionStage');

revealBtn.addEventListener('click', () => {
  askIntro.classList.add('fading');
  setTimeout(() => {
    askIntro.classList.add('hidden');
    questionStage.classList.remove('hidden');
  }, 360);
});

// Rewind the whole proposal every time she opens that page, so it can
// be replayed from the top instead of being stuck on the celebration.
function resetAskPage() {
  askStage.classList.remove('hidden');
  askIntro.classList.remove('hidden', 'fading');
  questionStage.classList.add('hidden');
  celebrateStage.classList.add('hidden');
  noBtn.classList.remove('hidden');
}

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
  const startRect = noBtn.getBoundingClientRect();

  if (!noBtn.classList.contains('dodging')) {
    // first click: freeze it at its current spot, then let the
    // transition carry it from there to the random target.
    // It must live directly under <body> while position:fixed — the
    // page's slide-in animation leaves a transform on the article
    // section, which would otherwise hijack the fixed coordinates.
    noBtn.style.left = `${startRect.left}px`;
    noBtn.style.top = `${startRect.top}px`;
    noBtn.classList.add('dodging');
    document.body.appendChild(noBtn);
    // force the browser to apply the starting position before moving
    noBtn.getBoundingClientRect();
  }

  // swap in the new taunt BEFORE measuring, so the landing spot is
  // computed with the button's real (possibly wider) size
  dodgeCount += 1;
  noBtn.textContent = noTaunts[Math.min(dodgeCount, noTaunts.length - 1)];
  const rect = noBtn.getBoundingClientRect();

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

// ---------- open on the memories index ----------
showPage('home');
