/* ── DATA ──────────────────────────────── */
const DATA = [
  {
    id:1, cat:'Nature', eye:'001',
    title:'The Silent Climber',
    sub:'Strength in the smallest steps',
    loc:'Rajbari, Bangladesh', season:'Summer',
    img:'assets/PXL_20230821_092954258_1776340171013.jpg',
    story:`<p>সবুজ পাতার উপর দিয়ে একা হেঁটে যাচ্ছে ছোট্ট একটা পিঁপড়া।
তার পৃথিবী আমাদের চোখে ক্ষুদ্র,
কিন্তু তার কাছে এই পথটাই বিশাল এক যাত্রা।
প্রতিটি পদক্ষেপে আছে লক্ষ্য,
প্রতিটি বাঁকে আছে সিদ্ধান্ত।
কেউ দেখছে না, তবুও সে থামে না।
তার কাজের মধ্যে নেই কোনো অহংকার,
আছে শুধু নিরব ধারাবাহিকতা।</p>
<p>এই ছোট্ট প্রাণীটা জানে—
ধীরে হলেও এগিয়ে যাওয়া মানেই জয়।
প্রকৃতি কখনো শব্দ করে শেখায় না,
কিন্তু এই দৃশ্যটা চুপচাপ একটা সত্য বলে যায়।</p>
<p>বড় হতে গেলে বড় হওয়া লাগে না,
লাগে শুধু থেমে না যাওয়ার মানসিকতা।</p>`
  },
  {
    id:2, cat:'Flower', eye:'002',
    title:'Whispers of the Wind',
    sub:'A fragile moment before everything lets go',
    loc:'Rajbari, Bangladesh', season:'Late Winter',
    img:'assets/PXL_20240105_113433807.PORTRAIT_1776340171070.jpg',
    story:`<p>সূক্ষ্ম, নরম সাদা তুলোর মতো এই ফুলটা দাঁড়িয়ে আছে এক অদৃশ্য অপেক্ষায়।
হালকা বাতাস এলেই তার প্রতিটি অংশ ছড়িয়ে যাবে অজানার পথে।
এই ছোট্ট গঠনটার ভেতর লুকিয়ে আছে হাজারো সম্ভাবনা,
যেন প্রতিটি বীজ একেকটা নতুন গল্পের শুরু।
কেউ দেখে সৌন্দর্য, কেউ দেখে বিদায়।</p>
<p>কিন্তু প্রকৃতির কাছে এটা কেবলই একটি চক্র—
ধরা, ধরা রাখা, আর শেষে ছেড়ে দেওয়া।
এই মুহূর্তটা স্থির, অথচ ভীষণ গতিশীল।
যেন সময় থেমে আছে, কিন্তু ভিতরে ভিতরে সব কিছু এগিয়ে যাচ্ছে।
হয়তো জীবনও এমনই—
আমরা ধরে রাখতে চাই, অথচ ছড়িয়ে পড়াটাই তার নিয়তি।
একটা নিঃশ্বাস, একটা হাওয়া,
আর সব কিছু বদলে যায়।</p>`
  },
  {
    id:3, cat:'Memory', eye:'003',
    title:"Silent Anchor",
    sub:'A lone boatman pauses as giants rest behind him.',
    loc:'Chittagong, Bangladesh', season:'Winter',
    img:'assets/Photo2_1776338153904.jpg',
    story:`<p>He stands still, one hand resting on the worn wood of his boat.
The river barely moves, holding its breath with him.
Behind him, rows of massive ships sleep in silence.
Their metal bodies reflect the fading light of the sky.
He looks small, almost forgotten in their shadow.
Yet his presence feels stronger than the anchored giants.
His boat carries stories, not cargo.
The ships carry weight, but no soul.
A soft breeze touches the water, creating ripples around him.
He does not move, as if time has paused just for this moment.
The contrast is striking—simplicity against industry.
He knows the river in ways those ships never will.
For him, this is not just water; it is life.
The silence speaks louder than noise ever could.</p>`
  },
  {
    id:4, cat:'Macro', eye:'004',
    title:'Still Visitor',
    sub:'A tiny insect rests in a quiet green world',
    loc:'Rangpur, Bangladesh', season:'Monsoon',
    img:'assets/Hm.Photo1_(16)_77ac39_1776340170933.jpg',
    story:`<p>On a single leaf, a small insect sits still.
Its legs grip the surface gently.
The leaf moves slightly with the wind.
But the insect remains calm and balanced.
The world around it feels enormous.
Yet it finds its place effortlessly.
The texture of the leaf is clearly visible.
Every vein forms a natural pattern beneath it.
The insect seems to observe everything silently.
It does not rush, it does not panic.
Just a moment of rest in a busy life.
Sunlight falls softly on its tiny body.
Highlighting details that often go unnoticed.
In stillness, even the smallest life feels significant.</p>`
  },
  {
    id:5, cat:'Flower', eye:'005',
    title:'Tomato Bloom',
    sub:'The beginning of something simple yet essential',
    loc:'Rangpur, Bangladesh', season:'Winter',
    img:'assets/PXL_20240105_112556053_1776340171044.jpg',
    story:`<p>Tiny yellow flowers bloom on a tomato plant.
They are small, almost easy to ignore.
But they hold the promise of something more.
Each flower is a future fruit waiting to happen.
The plant stretches upward under the sunlight.
Its leaves spread wide, protecting the blooms.
A soft breeze makes them gently sway.
The garden feels alive with quiet energy.
These flowers are not flashy or bold.
Yet they are full of purpose.
In time, they will transform completely.
From delicate petals to ripe red tomatoes.
Nature works patiently, step by step.
Even the smallest bloom carries great meaning.</p>`
  },
  {
    id:6, cat:'Flower', eye:'006',
    title:'Secret Petal',
    sub:'Beauty thrives even where no one looks.',
    loc:'Rajbari, Bangladesh', season:'Early Summer',
    img:'assets/PXL_20260321_124444527_1776340171089.jpg',
    story:`<p>Among dense leaves, something bright catches the eye.
A small flower reveals itself between shadows.
It is surrounded by chaos, yet remains untouched.
Its petals unfold like a silent secret.
The jungle hums with unseen life around it.
Still, the flower stands calm and composed.
It does not compete; it simply exists.
Each petal holds a soft glow.
The air feels heavier here, filled with mystery.
Yet the flower brings a sense of peace.
No one notices it, but it does not mind.
Its purpose is not to be seen, but to be.
Even in isolation, it feels complete.
A quiet reminder that beauty does not need an audience.</p>`
  },
  {
    id:7, cat:'Flower', eye:'007',
    title:'Wild Bloom',
    sub:'A hidden flower whispers its quiet story.',
    loc:'Rangpur, Bangladesh', season:'Rainy',
    img:'assets/Photo5_1776338154023.jpg',
    story:`<p>Deep inside the jungle, a single flower blooms.
No path leads to it, no footsteps disturb its ground.
It grows quietly among tangled roots and wild leaves.
Sunlight barely reaches, yet it shines brightly.
Its petals glow with unexpected color.
The forest around it feels rough and untamed.
But this flower stands delicate and calm.
No one planted it, no one tends to it.
Still, it survives and flourishes.
Its beauty is not meant for attention.
It exists simply because it can.
A soft wind brushes past, making it sway gently.
In that moment, it feels alive in its own world.
Hidden, yet perfect in every way.</p>`
  },
  {
    id:8, cat:'Flower', eye:'008',
    title:'Lost Beauty',
    sub:'A flower shines quietly in the wild unknown.',
    loc:'Rajbari, Bangladesh', season:'Early Summer',
    img:'assets/PXL_20260321_122043556_1776340171117.jpg',
    story:`<p>Far from any path, a flower blooms alone.
Its colors stand out against the dark green jungle.
It feels like a piece of art in a wild frame.
The air around it is still and untouched.
No noise, no disturbance—just silence.
The flower opens itself to the unseen sky.
It does not wait for admiration.
It simply grows, naturally and freely.
The jungle hides many secrets like this.
Beauty that exists without purpose or praise.
A drop of water rests on one of its petals.
Reflecting a tiny piece of the world.
In that reflection, everything feels connected.
Even the unseen holds extraordinary beauty.</p>`
  },
  {
  id:9, cat:'Memory', eye:'009',
    title:'Evening Game',
    sub:'Laughter and energy fill the fading light.',
    loc:'Kushtia, Bangladesh', season:'Autumn',
    img:'assets/PXL_20231025_164423266_1776340171141.jpg',
    story:`<p>The sun begins to set over the open field.
A group of boys gather with a cricket bat.
Their voices echo with excitement and joy.
Dust rises as they run across the ground.
Every shot brings cheers and laughter.
The golden light creates long shadows behind them.
Time feels slower in this moment.
No pressure, no worries—just the game.
A ball flies high into the evening sky.
All eyes follow it with anticipation.
Friendship grows stronger with every play.
The field becomes their world.
Even as the light fades, they continue.
Holding onto the last moments of the day.</p>`
  }
  
];

/* addmore-prompt __________

  {
    id:5, cat:'MEMORY', eye:'005',
    title:'',
    sub:'',
    loc:'', season:'',
    img:'assets/PXL_20260321_124444527_1776340171089.jpg',
    story:`<p></p>`
  },
  
  ________ */
  
/* ── STATE ─────────────────────────────── */
let stories  = [...DATA];
let activeF  = 'all';
let counter  = DATA.length;

/* ── INTERSECTION OBSERVER ─────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

/* ── SLOT ASSIGNMENT ───────────────────── */
// Pattern: 0,1 | 2,3,4 | 5,6 | then 7,8,9…
function getSlot(i) {
  const pattern = [0,1,2,3,4,5,6];
  return i < pattern.length ? pattern[i] : 7 + (i % 3);
}

/* ── Active nav link ─────────────────────── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (
      (href === 'index.html' && (page === '' || page === 'index.html')) ||
      href === page
    ) {
      link.classList.add('active');
    }
  });
  
  
   

  /* ── Custom Cursor ───────────────────────── */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    let mx = 0, my = 0;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    document.addEventListener('mouseover', e => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, label');
      if (el) {
        ring.classList.add('hovering');
      } else {
        ring.classList.remove('hovering');
      }
    });

    document.addEventListener('mousedown', () => dot.classList.add('clicking'));
    document.addEventListener('mouseup',   () => dot.classList.remove('clicking'));
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });

    function animateCursor() {
      dotX  += (mx - dotX) * 0.9;
      dotY  += (my - dotY) * 0.9;
      ringX += (mx - ringX) * 0.12;
      ringY += (my - ringY) * 0.12;

      dot.style.left  = dotX  + 'px';
      dot.style.top   = dotY  + 'px';
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';

      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }

  /* ── Scroll Progress Bar ─────────────────── */
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress  = docHeight > 0 ? scrollTop / docHeight : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ── Navbar Scroll Effect ────────────────── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    function updateNavbar() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }

  /* ── Mobile Menu ─────────────────────────── */
  const toggleBtn    = document.getElementById('menuToggle');
  const mobileMenu   = document.getElementById('mobileMenu');
  const menuIconOpen = document.getElementById('iconOpen');
  const menuIconClose= document.getElementById('iconClose');

  if (toggleBtn && mobileMenu) {
    let menuOpen = false;
    toggleBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
      if (menuIconOpen)  menuIconOpen.style.display  = menuOpen ? 'none' : 'block';
      if (menuIconClose) menuIconClose.style.display = menuOpen ? 'block' : 'none';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        if (menuIconOpen)  menuIconOpen.style.display  = 'block';
        if (menuIconClose) menuIconClose.style.display = 'none';
      });
    });
  }

  /* ── Scroll Reveal ───────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-40px 0px' });

    reveals.forEach(el => revealObserver.observe(el));
  }

/* ── BUILD CARD ────────────────────────── */
function buildCard(s, i) {
  const slot  = getSlot(i);
  const delay = (i % 4) * 0.09;

  const card = document.createElement('article');
  card.className = 'card';
  card.tabIndex  = 0;
  card.setAttribute('data-slot', slot);
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Read story: ' + s.title);
  card.style.animationDelay = delay + 's';
  card.dataset.cat = s.cat;

  card.innerHTML =
    '<div class="card-photo">' +
      '<img src="' + s.img + '" alt="' + s.title + '" loading="lazy"/>' +
      '<div class="card-overlay"></div>' +
      '<div class="card-line"></div>' +
      '<span class="card-chip">' + s.cat + '</span>' +
      '<span class="card-index">' + s.eye + '</span>' +
      '<div class="card-text">' +
        '<div class="card-loc">' + s.loc + '</div>' +
        '<h2 class="card-title">' + s.title + '</h2>' +
        '<p class="card-sub">' + s.sub + '</p>' +
        '<div class="card-action">' +
          '<span class="card-cta">Read Story</span>' +
          '<span class="card-arrow">→</span>' +
        '</div>' +
      '</div>' +
    '</div>';

  card.addEventListener('click', () => openModal(s));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(s); }
  });

  return card;
}

/* ── RENDER ────────────────────────────── */
const grid = document.getElementById('grid');

function render(filter) {
  grid.innerHTML = '';
  const list = filter === 'all' ? stories : stories.filter(s => s.cat === filter);
  document.getElementById('countNum').textContent = list.length;

  if (!list.length) {
    const msg = document.createElement('p');
    msg.style.cssText = 'grid-column:span 12;text-align:center;padding:80px 0;color:rgba(243,238,231,0.25);font-style:italic';
    msg.textContent = 'No stories in this category yet.';
    grid.appendChild(msg);
    return;
  }

  list.forEach((s, i) => {
    const card = buildCard(s, i);
    grid.appendChild(card);
    // Small delay before observing so layout is settled
    requestAnimationFrame(() => io.observe(card));
  });
}

render('all');

/* ── FILTER TABS ───────────────────────── */
document.getElementById('filterTabs').addEventListener('click', e => {
  const tab = e.target.closest('.ftab');
  if (!tab) return;
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('on'));
  tab.classList.add('on');
  activeF = tab.dataset.f;
  render(activeF);
});

/* ── MODAL ─────────────────────────────── */
const modalWrap  = document.getElementById('modalWrap');
const modalClose = document.getElementById('modalClose');
const modalBg    = document.getElementById('modalBg');

function openModal(s) {
  document.getElementById('mImg').src          = s.img;
  document.getElementById('mImg').alt          = s.title;
  document.getElementById('mChip').textContent = s.cat;
  document.getElementById('mLoc').textContent  = s.loc;
  document.getElementById('mSeason').textContent = s.season || '';
  document.getElementById('mEye').textContent  = 'Story \u2116 ' + s.eye;
  document.getElementById('mTitle').textContent = s.title;
  document.getElementById('mSub').textContent  = s.sub;
  document.getElementById('mStory').innerHTML  = s.story;
  document.getElementById('mScroll').scrollTop = 0;

  modalWrap.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── Modal index tracker ── */
let currentModalIndex = 0;

function getFilteredList() {
  return activeF === 'all' ? stories : stories.filter(s => s.cat === activeF);
}

function openModal(s) {
  const list = getFilteredList();
  currentModalIndex = list.findIndex(x => x.id === s.id);
  populateModal(list[currentModalIndex], list);
  modalWrap.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function populateModal(s, list) {
  const scroll = document.getElementById('mScroll');

  /* Fade out */
  scroll.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
  scroll.style.opacity    = '0';
  scroll.style.transform  = 'translateY(10px)';

  setTimeout(() => {
    /* Update content while invisible */
    document.getElementById('mImg').style.transition = 'opacity 0.3s ease';
    document.getElementById('mImg').style.opacity    = '0';

    document.getElementById('mChip').textContent   = s.cat;
    document.getElementById('mLoc').textContent    = s.loc;
    document.getElementById('mSeason').textContent = s.season || '';
    document.getElementById('mEye').textContent    = 'Story \u2116 ' + s.eye;
    document.getElementById('mTitle').textContent  = s.title;
    document.getElementById('mSub').textContent    = s.sub;
    document.getElementById('mStory').innerHTML    = s.story;
    scroll.scrollTop = 0;

    /* Counter */
    document.getElementById('navCurrent').textContent = currentModalIndex + 1;
    document.getElementById('navTotal').textContent   = list.length;

    /* Button states */
    document.getElementById('modalPrev').disabled = currentModalIndex === 0;
    document.getElementById('modalNext').disabled = currentModalIndex === list.length - 1;

    /* Swap photo */
    const img = document.getElementById('mImg');
    img.src = s.img;
    img.onload = () => {
      img.style.opacity = '1';
    };

    /* Fade in */
    scroll.style.transform = 'translateY(-10px)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scroll.style.opacity   = '1';
        scroll.style.transform = 'translateY(0)';
      });
    });
  }, 220);
}

document.getElementById('modalPrev').addEventListener('click', () => {
  const list = getFilteredList();
  if (currentModalIndex > 0) {
    currentModalIndex--;
    populateModal(list[currentModalIndex], list);
  }
});

document.getElementById('modalNext').addEventListener('click', () => {
  const list = getFilteredList();
  if (currentModalIndex < list.length - 1) {
    currentModalIndex++;
    populateModal(list[currentModalIndex], list);
  }
});

/* Keyboard arrow navigation */
document.addEventListener('keydown', e => {
  if (!modalWrap.classList.contains('open')) return;
  if (e.key === 'ArrowRight') document.getElementById('modalNext').click();
  if (e.key === 'ArrowLeft')  document.getElementById('modalPrev').click();
});

function closeModal() {
  modalWrap.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBg.addEventListener('click', closeModal);

/* ── ADD STORY ─────────────────────────── */
const addWrap  = document.getElementById('addWrap');
const closeAdd = document.getElementById('closeAdd');

function openAdd()  { addWrap.classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeAdd_() { addWrap.classList.remove('open'); document.body.style.overflow = ''; }

document.getElementById('openAdd').addEventListener('click', openAdd);
closeAdd.addEventListener('click', closeAdd_);
addWrap.querySelector('.add-bg').addEventListener('click', closeAdd_);

document.getElementById('doSubmit').addEventListener('click', () => {
  const img    = document.getElementById('nImg').value.trim();
  const title  = document.getElementById('nTitle').value.trim();
  const sub    = document.getElementById('nSub').value.trim();
  const stTxt  = document.getElementById('nStory').value.trim();
  const cat    = document.getElementById('nCat').value.trim()    || 'Uncategorised';
  const loc    = document.getElementById('nLoc').value.trim()    || 'Unknown';
  const season = document.getElementById('nSeason').value.trim() || '';

  if (!title) { alert('Please add a title.'); return; }

  counter++;
  const ns = {
    id: counter,
    cat, eye: String(counter).padStart(3,'0'),
    title, sub: sub || '',
    loc, season,
    img: img || 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=90',
    story: stTxt
      ? '<p>' + stTxt.replace(/\n\n+/g, '</p><p>').replace(/\n/g, ' ') + '</p>'
      : '<p>No story written yet.</p>'
  };

  stories.push(ns);
  closeAdd_();
  ['nImg','nTitle','nSub','nStory','nCat','nLoc','nSeason'].forEach(id => {
    document.getElementById(id).value = '';
  });

  // Back to All filter and scroll to new card
  activeF = 'all';
  document.querySelectorAll('.ftab').forEach(t => t.classList.toggle('on', t.dataset.f === 'all'));
  render('all');
  setTimeout(() => {
    const last = grid.lastElementChild;
    if (last) last.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 420);
});

/* ── KEYBOARD ──────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeAdd_(); }
});

