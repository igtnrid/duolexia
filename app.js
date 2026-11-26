/* =========================================================
   Duolexia â€” logika aplikasi
   ========================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. DATA
     --------------------------------------------------------- */
  var AVATARS = [
    { id: 1, src: 'img/avatar-1.png', alt: 'Pilihan avatar 1' },
    { id: 2, src: 'img/avatar-2.png', alt: 'Pilihan avatar 2' },
    { id: 3, src: 'img/avatar-3.png', alt: 'Pilihan avatar 3' },
    { id: 4, src: 'img/avatar-4.png', alt: 'Pilihan avatar 4' },
    { id: 5, src: 'img/avatar-5.png', alt: 'Pilihan avatar 5' },
    { id: 6, src: 'img/avatar-6.png', alt: 'Pilihan avatar 6' }
  ];

  var MODULES = [
    {
      n: 1,
      title: 'Sound Explorer',
      sub: 'Bunyi & suku kata',
      icon: 'graphic_eq',
      chips: ['Kesadaran Bunyi', 'Bunyi awal & akhir'],
      questions: [
        { id: 'PA01', text: 'Apakah kata batu dan satu memiliki bunyi akhir yang mirip?', options: ['Ya', 'Tidak'], answer: 'Ya', say: 'batu, satu', hint: 'Dengarkan bunyi akhir kedua kata: ba-tu, sa-tu.', explain: 'Bagus! Bunyi akhir kedua kata mirip.' },
        { id: 'PA02', text: 'Berapa suku kata pada kata meja?', options: ['1', '2', '3'], answer: '2', say: 'meja', hint: 'Hitung dengan tepukan: me-ja.', explain: 'Benar! Meja terdiri dari dua suku kata.' },
        { id: 'PA03', text: 'Apa bunyi awal dari kata mata?', options: ['/m/', '/b/', '/s/'], answer: '/m/', say: 'mata', hint: 'Dengarkan bunyi pertama kata mata.', explain: 'Tepat! Mata diawali bunyi /m/.' },
        { id: 'PA04', text: 'Kata mana yang diawali bunyi /k/?', options: ['Kucing', 'Sapi', 'Bola'], answer: 'Kucing', say: 'kucing, sapi, bola', emoji: 'ðŸˆ', hint: 'Dengarkan huruf pertama setiap kata.', explain: 'Benar! Kucing diawali bunyi /k/.' },
        { id: 'PA05', text: 'Berapa suku kata pada kata kelapa?', options: ['2', '3', '4'], answer: '3', say: 'kelapa', emoji: 'ðŸ¥¥', hint: 'Ucapkan pelan: ke-la-pa.', explain: 'Tepat! Kelapa terdiri dari tiga suku kata.' },
        { id: 'PA06', text: 'Apa bunyi akhir kata tas?', options: ['/t/', '/s/', '/m/'], answer: '/s/', say: 'tas', hint: 'Dengarkan bunyi terakhir kata tas.', explain: 'Benar! Tas diakhiri bunyi /s/.' }
      ]
    },
    {
      n: 2,
      title: 'Letter Explorer',
      sub: 'Mengenal huruf',
      icon: 'abc',
      chips: ['Mengenal Huruf', 'Huruf & bunyi'],
      questions: [
        { id: 'AK01', text: 'Pilih huruf b.', options: ['b', 'd', 'p'], answer: 'b', say: 'be', hint: 'Huruf b punya tongkat di kiri dan perut di kanan.', explain: 'Benar! Huruf itu b.' },
        { id: 'AK02', text: 'Huruf kecil dari B adalah â€¦', options: ['b', 'd', 'p'], answer: 'b', say: 'be besar', hint: 'Huruf besar B dan huruf kecilnya berpasangan.', explain: 'Tepat! Huruf kecil dari B adalah b.' },
        { id: 'AK03', text: 'Huruf apa yang menghasilkan bunyi /m/?', options: ['M', 'S', 'B'], answer: 'M', say: 'em', hint: 'Bunyi /m/ seperti di kata mata.', explain: 'Benar! Huruf M berbunyi /m/.' },
        { id: 'AK04', text: 'Pilih huruf yang sama dengan A.', options: ['a', 'e', 'o'], answer: 'a', say: 'a', hint: 'Bentuk hurufnya sama, hanya lebih kecil.', explain: 'Tepat! Huruf kecil dari A adalah a.' },
        { id: 'AK05', text: 'Huruf apa yang mengawali kata sapi?', options: ['S', 'P', 'T'], answer: 'S', say: 'sapi', emoji: 'ðŸ„', hint: 'Dengarkan bunyi pertama kata sapi.', explain: 'Benar! Sapi diawali huruf S.' },
        { id: 'AK06', text: 'Pilih huruf vokal.', options: ['B', 'A', 'K'], answer: 'A', say: 'a, i, u, e, o', hint: 'Huruf vokal: a, i, u, e, o.', explain: 'Tepat! A adalah huruf vokal.' }
      ]
    },
    {
      n: 3,
      title: 'Syllable Builder',
      sub: 'Menyusun kata',
      icon: 'train',
      chips: ['Suku Kata', 'Menyusun kata'],
      questions: [
        { id: 'SB01', text: 'Gabungkan bo + la.', options: ['bola', 'boba', 'lobo'], answer: 'bola', say: 'bo, la', emoji: 'âš½', hint: 'Ucapkan pelan: bo-la.', explain: 'Benar! bo + la menjadi bola.' },
        { id: 'SB02', text: 'Gabungkan sa + pi.', options: ['sapi', 'sapa', 'pisa'], answer: 'sapi', say: 'sa, pi', emoji: 'ðŸ„', hint: 'Ucapkan pelan: sa-pi.', explain: 'Tepat! sa + pi menjadi sapi.' },
        { id: 'SB03', text: 'Gabungkan bu + ku.', options: ['buku', 'bubu', 'kuku'], answer: 'buku', say: 'bu, ku', emoji: 'ðŸ“–', hint: 'Ucapkan pelan: bu-ku.', explain: 'Benar! bu + ku menjadi buku.' },
        { id: 'SB04', text: 'Kata mata terdiri dari â€¦', options: ['ma-ta', 'mat-a', 'm-ata'], answer: 'ma-ta', say: 'mata', emoji: 'ðŸ‘€', hint: 'Mata punya dua suku kata: ma dan ta.', explain: 'Tepat! Mata terdiri dari ma-ta.' },
        { id: 'SB05', text: 'Suku kata pertama dari kata kelapa adalah â€¦', options: ['ke', 'la', 'pa'], answer: 'ke', say: 'kelapa', emoji: 'ðŸ¥¥', hint: 'Ucapkan pelan: ke-la-pa.', explain: 'Benar! Suku kata pertamanya ke.' },
        { id: 'SB06', text: 'Pilih susunan yang membentuk kata roti.', options: ['ro-ti', 'ti-ro', 'ri-to'], answer: 'ro-ti', say: 'roti', emoji: 'ðŸž', hint: 'Roti dimulai dengan bunyi ro.', explain: 'Tepat! ro-ti membentuk kata roti.' }
      ]
    },
    {
      n: 4,
      title: 'Word Detective',
      sub: 'Membaca kata',
      icon: 'science',
      chips: ['Membaca Kata', 'Ejaan'],
      questions: [
        { id: 'WD01', text: 'Lengkapi kata _api agar menjadi sapi.', options: ['s', 'm', 'b'], answer: 's', say: 'sapi', emoji: 'ðŸ„', hint: 'Kata yang benar: sapi.', explain: 'Benar! Huruf s membuat kata itu menjadi sapi.' },
        { id: 'WD02', text: 'Susun huruf b-u-k-u.', options: ['buku', 'kubu', 'bubu'], answer: 'buku', say: 'buku', emoji: 'ðŸ“–', hint: 'Huruf pertama b, lalu u, k, u.', explain: 'Tepat! b-u-k-u menjadi buku.' },
        { id: 'WD03', text: 'Pilih kata yang sesuai dengan gambar rumah.', options: ['rumah', 'ramah', 'murah'], answer: 'rumah', say: 'rumah', emoji: 'ðŸ ', hint: 'Tempat tinggal disebut rumah.', explain: 'Benar! Gambar itu rumah.' },
        { id: 'WD04', text: 'Kata mana yang memiliki dua suku kata?', options: ['meja', 'sekolah', 'keluarga'], answer: 'meja', say: 'meja, sekolah, keluarga', hint: 'Hitung suku kata dengan tepukan.', explain: 'Tepat! Meja terdiri dari dua suku kata.' },
        { id: 'WD05', text: "Pilih kata yang mengandung 'ng'.", options: ['bangun', 'batu', 'bola'], answer: 'bangun', say: 'bangun', hint: 'Cari kata yang ada huruf n dan g berdekatan.', explain: 'Benar! Bangun mengandung ng.' },
        { id: 'WD06', text: 'Pisahkan kata kelapa menjadi suku kata.', options: ['ke-la-pa', 'kel-ap-a', 'kela-pa'], answer: 'ke-la-pa', say: 'kelapa', emoji: 'ðŸ¥¥', hint: 'Ucapkan pelan: ke-la-pa.', explain: 'Tepat! Kelapa menjadi ke-la-pa.' }
      ]
    },
    {
      n: 5,
      title: 'Sentence Reader',
      sub: 'Membaca kalimat',
      icon: 'menu_book',
      chips: ['Membaca Kalimat', 'Tanda baca'],
      questions: [
        { id: 'SR01', text: 'Lengkapi: Ibu memasak ....', options: ['nasi', 'tidur', 'meja'], answer: 'nasi', say: 'Ibu memasak nasi', emoji: 'ðŸš', hint: 'Ibu memasak sesuatu untuk dimakan.', explain: 'Benar! Ibu memasak nasi.' },
        { id: 'SR02', text: 'Kalimat mana yang benar?', options: ['Ayah membaca buku.', 'Buku membaca Ayah.'], answer: 'Ayah membaca buku.', say: 'Ayah membaca buku', emoji: 'ðŸ“š', hint: 'Yang membaca adalah Ayah, bukan buku.', explain: 'Tepat! Kalimat yang benar: Ayah membaca buku.' },
        { id: 'SR03', text: 'Tanda baca untuk mengakhiri kalimat berita adalah â€¦', options: ['.', '?', ','], answer: '.', say: 'titik', hint: 'Kalimat berita diakhiri titik.', explain: 'Benar! Kalimat berita diakhiri titik.' },
        { id: 'SR04', text: "Apa yang dilakukan Budi? 'Budi sedang berlari.'", options: ['Berlari', 'Tidur', 'Makan'], answer: 'Berlari', say: 'Budi sedang berlari', hint: 'Cari kata kerja di dalam kalimat.', explain: 'Tepat! Budi sedang berlari.' },
        { id: 'SR05', text: 'Lengkapi: Adik minum ....', options: ['air', 'sepatu', 'kursi'], answer: 'air', say: 'Adik minum air', emoji: 'ðŸ’§', hint: 'Sesuatu yang bisa diminum.', explain: 'Benar! Adik minum air.' },
        { id: 'SR06', text: 'Kalimat tanya diakhiri dengan â€¦', options: ['?', '!', ','], answer: '?', say: 'tanda tanya', hint: 'Kalimat tanya memakai tanda tanya.', explain: 'Tepat! Kalimat tanya diakhiri tanda tanya.' }
      ]
    },
    {
      n: 6,
      title: 'Story Explorer',
      sub: 'Memahami cerita',
      icon: 'auto_stories',
      chips: ['Pemahaman Cerita', 'Tokoh & urutan'],
      story: 'Pada hari Minggu, Rani pergi ke taman bersama ibunya. Di taman, Rani melihat kupu-kupu berwarna kuning. Setelah bermain, Rani dan ibu membeli es krim. Mereka kemudian pulang ke rumah.',
      questions: [
        { id: 'SE01', text: 'Kapan Rani pergi ke taman?', options: ['Minggu', 'Senin', 'Jumat'], answer: 'Minggu', say: 'Pada hari Minggu, Rani pergi ke taman', emoji: 'ðŸŒ³', hint: 'Lihat kalimat pertama pada cerita.', explain: 'Benar! Rani pergi pada hari Minggu.' },
        { id: 'SE02', text: 'Dengan siapa Rani pergi?', options: ['Ayah', 'Ibu', 'Teman'], answer: 'Ibu', say: 'Rani pergi ke taman bersama ibunya', hint: 'Cari kata setelah "bersama".', explain: 'Tepat! Rani pergi bersama ibunya.' },
        { id: 'SE03', text: 'Apa yang dilihat Rani?', options: ['Burung', 'Kupu-kupu', 'Kucing'], answer: 'Kupu-kupu', say: 'Rani melihat kupu-kupu berwarna kuning', emoji: 'ðŸ¦‹', hint: 'Ada di kalimat kedua.', explain: 'Benar! Rani melihat kupu-kupu.' },
        { id: 'SE04', text: 'Apa yang mereka beli?', options: ['Roti', 'Es krim', 'Buku'], answer: 'Es krim', say: 'Rani dan ibu membeli es krim', emoji: 'ðŸ¦', hint: 'Cari kata setelah "membeli".', explain: 'Tepat! Mereka membeli es krim.' },
        { id: 'SE05', text: 'Ke mana mereka pergi setelah membeli es krim?', options: ['Sekolah', 'Rumah', 'Pasar'], answer: 'Rumah', say: 'Mereka kemudian pulang ke rumah', hint: 'Kata "pulang" menuju ke tempat apa?', explain: 'Benar! Mereka pulang ke rumah.' }
      ]
    }
  ];

  var BADGES = [
    { title: 'Kesadaran Bunyi', need: 1, icon: 'graphic_eq' },
    { title: 'Mengenal Huruf', need: 2, icon: 'abc' },
    { title: 'Menyusun Kata', need: 3, icon: 'train' },
    { title: 'Membaca Kalimat', need: 5, icon: 'menu_book' }
  ];

  var DEFAULT_STATE = {
    version: 1,
    profile: null,
    stars: 0,
    completed: 0,
    modulePoints: {},
    days: {},
    createdAt: null,
    settings: {
      scale: 'md',
      speed: 'normal',
      autoRepeat: false,
      showExample: true,
      reduceMotion: false,
      highContrast: false,
      sfx: true
    }
  };

  var TEST_MODE = /[?&]selftest=1/.test(window.location.search);
  var STORAGE_KEY = TEST_MODE ? 'duolexia:state:test' : 'duolexia:state:v1';
  var LEGACY_KEY = 'duolexia-progress-v2';

  /* ---------------------------------------------------------
     2. UTIL
     --------------------------------------------------------- */
  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function clampInt(value, min, max, fallback) {
    var n = parseInt(value, 10);
    if (!isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, n));
  }
  function esc(text) {
    return String(text == null ? '' : text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function dayKey(date) {
    var d = date || new Date();
    var m = String(d.getMonth() + 1);
    var day = String(d.getDate());
    if (m.length < 2) m = '0' + m;
    if (day.length < 2) day = '0' + day;
    return d.getFullYear() + '-' + m + '-' + day;
  }
  function sumPoints(points) {
    var total = 0;
    for (var key in points) {
      if (Object.prototype.hasOwnProperty.call(points, key)) {
        total += clampInt(points[key], 0, 10, 0);
      }
    }
    return total;
  }
  function ratingFromFirstTry(firstTry, total) {
    var n = total || 5;
    if (firstTry >= n) return 3;
    if (firstTry >= Math.ceil(n * 0.6)) return 2;
    return 1;
  }

  /* ---------------------------------------------------------
     3. STATE
     --------------------------------------------------------- */
  var state = loadState();

  function loadState() {
    var base = deepCopy(DEFAULT_STATE);
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return normalizeState(JSON.parse(raw), base);
      var legacy = window.localStorage.getItem(LEGACY_KEY);
      if (legacy) {
        var old = JSON.parse(legacy) || {};
        base.stars = clampInt(old.stars, 0, 999, 0);
        base.completed = clampInt(old.completedLevels, 0, MODULES.length, 0);
        return base;
      }
    } catch (err) {
      /* data rusak / localStorage diblokir -> mulai bersih */
    }
    return base;
  }

  function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function normalizeState(saved, base) {
    var s = base || deepCopy(DEFAULT_STATE);
    if (!saved || typeof saved !== 'object') return s;

    s.profile = normalizeProfile(saved.profile);
    s.stars = clampInt(saved.stars, 0, 9999, 0);
    s.completed = clampInt(saved.completed, 0, MODULES.length, 0);
    s.createdAt = typeof saved.createdAt === 'string' ? saved.createdAt : null;

    s.modulePoints = {};
    if (saved.modulePoints && typeof saved.modulePoints === 'object') {
      for (var i = 1; i <= MODULES.length; i++) {
        if (saved.modulePoints[i] != null) {
          s.modulePoints[i] = clampInt(saved.modulePoints[i], 0, 12, 0);
        }
      }
    }

    s.days = {};
    if (saved.days && typeof saved.days === 'object') {
      for (var key in saved.days) {
        if (!Object.prototype.hasOwnProperty.call(saved.days, key)) continue;
        if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
          s.days[key] = clampInt(saved.days[key], 0, 200, 0);
        }
      }
    }

    var st = saved.settings || {};
    s.settings.scale = st.scale === 'sm' || st.scale === 'lg' ? st.scale : 'md';
    s.settings.speed = st.speed === 'slow' ? 'slow' : 'normal';
    s.settings.autoRepeat = !!st.autoRepeat;
    s.settings.showExample = st.showExample !== false;
    s.settings.reduceMotion = !!st.reduceMotion;
    s.settings.highContrast = !!st.highContrast;
    s.settings.sfx = st.sfx !== false;
    return s;
  }

  function normalizeProfile(profile) {
    if (!profile || typeof profile !== 'object') return null;
    var name = typeof profile.name === 'string' ? profile.name.trim().slice(0, 20) : '';
    if (!name) return null;
    var mode = profile.mode === 'kelas' ? 'kelas' : 'usia';
    var value = mode === 'usia' ? clampInt(profile.value, 6, 8, 7) : clampInt(profile.value, 1, 2, 1);
    return {
      name: name,
      mode: mode,
      value: value,
      avatar: clampInt(profile.avatar, 1, AVATARS.length, 1)
    };
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      toast('Penyimpanan penuh. Progres mungkin tidak tersimpan.');
    }
  }

  /* ---------------------------------------------------------
     4. AUDIO
     --------------------------------------------------------- */
  var voices = [];
  var hasGesture = false;
  var audioCtx = null;

  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    try {
      voices = window.speechSynthesis.getVoices() || [];
    } catch (err) {
      voices = [];
    }
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
  }

  function pickVoice() {
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang && voices[i].lang.toLowerCase().indexOf('id') === 0) return voices[i];
    }
    return null;
  }

  function speak(text, slow) {
    if (!text) return;
    if (!('speechSynthesis' in window)) {
      toast('Suara belum tersedia di perangkat ini.');
      return;
    }
    try {
      window.speechSynthesis.cancel();
      var utter = new window.SpeechSynthesisUtterance(String(text));
      utter.lang = 'id-ID';
      utter.rate = slow || state.settings.speed === 'slow' ? 0.72 : 0.94;
      utter.pitch = 1.04;
      var voice = pickVoice();
      if (voice) utter.voice = voice;
      window.speechSynthesis.speak(utter);
    } catch (err) {
      /* diamkan: audio bukan fitur wajib */
    }
  }

  function tone(freq, duration) {
    if (!state.settings.sfx) return;
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.16, audioCtx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration + 0.02);
    } catch (err) {
      /* abaikan */
    }
  }

  /* ---------------------------------------------------------
     5. UI DASAR
     --------------------------------------------------------- */
  var toastTimer = null;
  function toast(message) {
    var el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      el.classList.remove('is-visible');
    }, 2400);
  }

  var SCREEN_IDS = ['login', 'peta', 'latihan', 'hadiah', 'profil', 'sesi', 'selesai', 'istirahat', 'pengaturan'];
  var TAB_SCREENS = { peta: 1, latihan: 1, hadiah: 1, profil: 1 };
  var currentScreen = '';

  function show(name) {
    if (SCREEN_IDS.indexOf(name) === -1) return;

    if (name !== 'istirahat') stopBreak();
    if (name !== 'sesi') closeSheet();
    if (name !== 'login') closeModal();

    SCREEN_IDS.forEach(function (id) {
      var el = document.getElementById('screen-' + id);
      if (el) el.classList.toggle('is-active', id === name);
    });

    currentScreen = name;

    var nav = $('#bottom-nav');
    if (nav) nav.classList.toggle('is-hidden', !TAB_SCREENS[name]);

    $$('#bottom-nav [data-tab]').forEach(function (btn) {
      var active = btn.getAttribute('data-tab') === name;
      if (active) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    });

    window.scrollTo(0, 0);

    if (name === 'peta') renderPeta();
    if (name === 'latihan') renderLatihan();
    if (name === 'hadiah') renderHadiah();
    if (name === 'profil') renderProfil();
    if (name === 'pengaturan') renderSettings();
  }

  function refreshStars() {
    var shown = state.stars;
    if (currentScreen === 'sesi') {
      var best = state.modulePoints[session.module] || 0;
      shown += Math.max(0, session.earned - best);
    }
    $$('[data-stars]').forEach(function (el) {
      el.textContent = String(shown);
    });
  }

  function avatarSrc(id) {
    var found = null;
    AVATARS.forEach(function (a) {
      if (a.id === id) found = a;
    });
    return (found || AVATARS[0]).src;
  }

  function starSvg(filled) {
    return (
      '<span class="material-symbols-outlined text-[22px]" aria-hidden="true" style="font-variation-settings:\'FILL\' ' +
      (filled ? 1 : 0) +
      ';color:' +
      (filled ? '#FFC53D' : '#CFC6B8') +
      '">star</span>'
    );
  }

  /* ---------------------------------------------------------
     6. LOGIN / PROFIL BARU
     --------------------------------------------------------- */
  var draft = { name: '', mode: 'usia', value: 7, avatar: 0 };
  var loginMode = 'create';

  function openLogin(mode) {
    loginMode = mode === 'edit' ? 'edit' : 'create';
    var profile = state.profile;

    if (loginMode === 'edit' && profile) {
      draft = { name: profile.name, mode: profile.mode, value: profile.value, avatar: profile.avatar };
    } else if (!profile) {
      draft = { name: '', mode: 'usia', value: 7, avatar: 0 };
    }

    var title = $('#login-title');
    if (title) title.textContent = loginMode === 'edit' ? 'Ubah profilmu' : 'Halo! Siapa namamu?';

    var submit = $('#btn-login');
    if (submit) submit.querySelector('span[data-label]').textContent = loginMode === 'edit' ? 'Simpan' : 'Siap, mulai!';

    var cancel = $('#btn-login-cancel');
    if (cancel) cancel.classList.toggle('hidden', loginMode !== 'edit');

    var note = $('#login-note');
    if (note) {
      note.textContent =
        loginMode === 'edit'
          ? 'Perubahan langsung dipakai di seluruh aplikasi.'
          : 'Bisa diganti nanti di Profil.';
    }

    var input = $('#name-input');
    if (input) input.value = draft.name;

    renderModeToggle();
    renderAgeOptions();
    renderAvatarChoices();
    syncLoginButton();
    show('login');
  }

  function renderModeToggle() {
    $$('[data-action="login-mode"]').forEach(function (btn) {
      var on = btn.getAttribute('data-mode') === draft.mode;
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
      btn.classList.toggle('bg-primary', on);
      btn.classList.toggle('text-white', on);
      btn.classList.toggle('text-muted', !on);
    });
  }

  function renderAgeOptions() {
    var wrap = $('#age-options');
    if (!wrap) return;
    var html = '';
    var values = draft.mode === 'usia' ? [6, 7, 8] : [1, 2];
    values.forEach(function (value) {
      var selected = draft.value === value;
      var label = draft.mode === 'usia' ? 'tahun' : 'SD';
      var big = draft.mode === 'usia' ? String(value) : 'Kelas ' + value;
      html +=
        '<button type="button" class="age-card" role="radio" aria-checked="' + (selected ? 'true' : 'false') + '" data-action="login-value" data-value="' + value + '">' +
        '<span class="age-badge" aria-hidden="true"><span class="material-symbols-outlined text-[14px]" style="font-variation-settings:\'FILL\' 1;">check</span></span>' +
        '<span class="font-head font-bold ' + (draft.mode === 'usia' ? 'text-[24px] leading-none' : 'text-[17px] leading-tight') + ' ' + (selected ? 'text-primary' : 'text-ink') + '">' + esc(big) + '</span>' +
        '<span class="text-[12px] ' + (selected ? 'text-primary font-bold' : 'text-muted') + '">' + esc(label) + '</span>' +
        '</button>';
    });
    wrap.innerHTML = html;
    wrap.setAttribute('aria-label', draft.mode === 'usia' ? 'Pilih usia' : 'Pilih kelas');
    wrap.className = 'grid gap-2.5 ' + (draft.mode === 'usia' ? 'grid-cols-3' : 'grid-cols-2');
  }

  function renderAvatarChoices() {
    var wrap = $('#avatar-grid');
    if (!wrap) return;
    var html = '';
    AVATARS.forEach(function (avatar) {
      var selected = draft.avatar === avatar.id;
      html +=
        '<button type="button" class="avatar-choice" role="radio" aria-checked="' + (selected ? 'true' : 'false') +
        '" aria-label="' + esc(avatar.alt) + '" data-action="login-avatar" data-avatar="' + avatar.id + '">' +
        '<span class="avatar-badge" aria-hidden="true"><span class="material-symbols-outlined text-[14px]" style="font-variation-settings:\'FILL\' 1;">check</span></span>' +
        '<img src="' + avatar.src + '" alt="" class="w-[54px] h-[54px] rounded-full object-cover bg-primary-fixed/40" width="54" height="54" />' +
        '</button>';
    });
    wrap.innerHTML = html;
  }

  function syncLoginButton() {
    var btn = $('#btn-login');
    if (!btn) return;
    var ok = draft.name.trim().length >= 2 && draft.avatar > 0;
    btn.disabled = !ok;
  }

  function submitLogin() {
    var name = draft.name.trim();
    if (name.length < 2) {
      toast('Tulis namamu dulu ya.');
      var input = $('#name-input');
      if (input) input.focus();
      return;
    }
    if (!draft.avatar) {
      toast('Pilih satu avatar dulu ya.');
      return;
    }

    state.profile = {
      name: name.slice(0, 20),
      mode: draft.mode,
      value: draft.mode === 'usia' ? clampInt(draft.value, 6, 8, 7) : clampInt(draft.value, 1, 2, 1),
      avatar: clampInt(draft.avatar, 1, AVATARS.length, 1)
    };
    if (!state.createdAt) state.createdAt = new Date().toISOString();
    saveState();

    var wasEdit = loginMode === 'edit';
    renderProfileChrome();
    renderPeta();
    show(wasEdit ? 'profil' : 'peta');
    toast(wasEdit ? 'Profil diperbarui.' : 'Selamat belajar, ' + state.profile.name + '!');
    if (!wasEdit) speak('Halo ' + state.profile.name + '. Ayo mulai belajar membaca.');
  }

  function renderProfileChrome() {
    var p = state.profile;
    var src = avatarSrc(p ? p.avatar : 1);
    $$('[data-avatar-img]').forEach(function (img) {
      img.src = src;
    });
    $$('[data-child-name]').forEach(function (el) {
      el.textContent = p ? p.name : '';
    });
    refreshStars();
  }

  /* ---------------------------------------------------------
     7. PETA BELAJAR
     --------------------------------------------------------- */
  var ISLANDS = [
    { name: 'Pulau Bunyi', icon: 'music_note' },
    { name: 'Lembah Huruf', icon: 'search' },
    { name: 'Danau Suku Kata', icon: 'extension' },
    { name: 'Hutan Kata', icon: 'travel_explore' },
    { name: 'Bukit Kalimat', icon: 'menu_book' },
    { name: 'Istana Cerita', icon: 'fort' }
  ];

  var MAP_NODES = [
    { left: 73.5, top: 86.4 },
    { left: 26.5, top: 71.2 },
    { left: 50.0, top: 54.5 },
    { left: 76.5, top: 37.8 },
    { left: 25.0, top: 22.7 },
    { left: 50.0, top: 8.5 }
  ];

  var TRAIL = [
    'M 250 570',
    'C 190 555, 120 535, 90 470',
    'C 60 405, 120 380, 170 360',
    'C 220 340, 290 310, 260 250',
    'C 230 190, 125 200, 85 150',
    'C 55 105, 130 75, 170 55'
  ];

  function starsFor(rating, size) {
    var html = '';
    for (var i = 1; i <= 3; i++) {
      html +=
        '<span class="material-symbols-outlined" aria-hidden="true" style="font-size:' + (size || 22) + 'px;line-height:1;font-variation-settings:\'FILL\' ' + (i <= rating ? 1 : 0) + ';color:' + (i <= rating ? '#FFC53D' : '#D9CFC0') + '">star</span>';
    }
    return html;
  }

  function moduleRating(mod, points) {
    var max = mod.questions.length * 2;
    if (!max) return 0;
    return Math.max(1, Math.min(3, Math.round((points / max) * 3)));
  }

  function reducedMotion() {
    if (document.body.classList.contains('reduce-motion')) return true;
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (err) {
      return false;
    }
  }

  function renderTrail(active) {
    var trail = $('#trail');
    if (!trail) return;
    var donePath = TRAIL.slice(0, active).join(' ');
    var todoPath = TRAIL.slice(active - 1).join(' ');
    trail.innerHTML =
      '<path d="' + TRAIL.join(' ') + '" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" filter="url(#trailShadow)"></path>' +
      '<path d="' + donePath + '" fill="none" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"></path>' +
      '<path class="trail-future" d="' + todoPath + '" fill="none" stroke="#CBD5E1" stroke-width="6" stroke-dasharray="6 12" stroke-linecap="round"></path>';
  }

  function renderPeta() {
    var path = $('#path');
    if (!path) return;

    var complete = state.completed;
    var active = Math.min(complete + 1, MODULES.length);
    var mod = MODULES[active - 1];
    var island = ISLANDS[active - 1];
    var profile = state.profile;

    var greet = $('#peta-greeting');
    if (greet) greet.textContent = profile ? 'Halo, ' + profile.name + '!' : 'Halo!';

    var progress = $('#peta-progress');
    if (progress) progress.textContent = 'Level ' + active + ' / ' + MODULES.length + ' Terbuka';

    var count = $('#peta-count');
    if (count) count.textContent = complete + ' Pulau Terbuka';

    var walkLabel = $('#walk-label');
    if (walkLabel) walkLabel.textContent = 'Jalan ke Level ' + active;

    renderTrail(active);

    var nodes = '';
    MODULES.forEach(function (m, i) {
      var num = i + 1;
      var isDone = num <= complete;
      var isActive = num === complete + 1;
      var isLocked = num > complete + 1;
      var info = ISLANDS[i];
      var rating = isDone ? moduleRating(m, state.modulePoints[num] || 0) : 0;
      var cls = isDone ? 'is-done' : isActive ? 'is-active' : 'is-locked';
      var badge = isDone
        ? '<span class="node-badge is-check"><span class="material-symbols-outlined">check</span></span>'
        : isLocked
          ? '<span class="node-badge is-lock"><span class="material-symbols-outlined">lock</span></span>'
          : '<span class="node-badge is-star"><span class="material-symbols-outlined">hotel_class</span></span>';

      nodes +=
        '<div class="map-node ' + cls + '" style="left:' + MAP_NODES[i].left + '%;top:' + MAP_NODES[i].top + '%" data-action="open-module" data-module="' + num + '"' + (isLocked ? ' data-locked="1"' : '') + ' role="button" tabindex="0" aria-label="Level ' + num + ': ' + esc(info.name) + ' (' + (isDone ? 'selesai' : isActive ? 'sekarang' : 'terkunci') + ')">' +
        '<span class="node-stack">' +
        (isActive ? '<span class="pulse-ring" aria-hidden="true"></span>' : '') +
        '<span class="node-bubble"><span class="material-symbols-outlined" aria-hidden="true" style="font-variation-settings:\'FILL\' 1;">' + info.icon + '</span>' + badge + '</span>' +
        '</span>' +
        '<span class="node-label' + (isActive ? ' is-blue' : '') + '">' +
        (isActive ? '<span class="ping-dot" aria-hidden="true"></span>' : '') +
        '<span class="node-title">' + num + '. ' + esc(info.name) + '</span>' +
        (!isActive && !isLocked ? '<span class="node-stars" aria-hidden="true">' + starsFor(rating, 12) + '</span>' : '') +
        '</span>' +
        (isActive ? '<span class="node-new"><span class="material-symbols-outlined">auto_awesome</span> Baru Terbuka!</span>' : '') +
        '</div>';
    });
    path.innerHTML = nodes;

    var walker = $('#walker');
    if (walker) {
      walker.style.left = MAP_NODES[active - 1].left + '%';
      walker.style.top = (MAP_NODES[active - 1].top - 13) + '%';
    }
    var bubble = $('#walker-bubble');
    if (bubble) {
      bubble.textContent = (profile ? profile.name : 'Kamu') + ' sampai di ' + island.name + '! 🎉';
    }
    var walkImg = $('#walker-img');
    if (walkImg) walkImg.src = avatarSrc(profile ? profile.avatar : 1);

    var quest = $('#peta-current');
    if (quest && mod) {
      var pts = state.modulePoints[active] || 0;
      var maxPts = mod.questions.length * 2;
      var pct = Math.max(6, Math.min(100, Math.round((pts / maxPts) * 100)));
      quest.innerHTML =
        '<div class="flex items-center justify-between gap-2 mb-2.5">' +
        '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF3D6] text-[#7A4A00] text-[11px] font-extrabold"><span class="material-symbols-outlined text-[15px]">bolt</span>Baru Terbuka!</span>' +
        '<span class="text-[11px] font-bold text-muted">Level ' + active + ' • ' + mod.questions.length + ' latihan</span>' +
        '</div>' +
        '<div class="flex items-start justify-between gap-3">' +
        '<div class="min-w-0 flex-1">' +
        '<h2 class="font-head font-extrabold text-[22px] leading-tight text-primary">' + esc(mod.title) + '</h2>' +
        '<p class="text-[13px] text-muted mt-0.5">' + esc(mod.sub) + ' di <span class="inline-block px-2 py-0.5 rounded-md bg-[#EFF4FF] text-primary font-bold">' + esc(island.name) + '</span></p>' +
        '</div>' +
        '<span class="w-12 h-12 rounded-xl bg-[#DBE1FF] text-primary flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[30px]" aria-hidden="true" style="font-variation-settings:\'FILL\' 1;">' + island.icon + '</span></span>' +
        '</div>' +
        '<div class="h-2.5 rounded-full bg-[#E9EDFB] mt-3 overflow-hidden"><div class="h-full rounded-full bg-primary transition-all" style="width:' + pct + '%"></div></div>' +
        '<button type="button" class="btn-primary mt-3.5 !min-h-[58px]" data-action="open-module" data-module="' + active + '">' +
        '<span>Mulai Level ' + active + '</span>' +
        '<span class="material-symbols-outlined text-[22px]" aria-hidden="true">arrow_forward</span>' +
        '</button>';
    }

    var review = $('#review-card');
    if (review) {
      var reviewLevel = active > 1 ? active - 1 : 1;
      var reviewIsland = ISLANDS[reviewLevel - 1];
      review.innerHTML =
        '<div class="card p-3.5 mt-3 flex items-center justify-between gap-2.5">' +
        '<div class="flex items-center gap-2.5 min-w-0">' +
        '<span class="w-11 h-11 rounded-full bg-[#FFF3D6] text-[#7A4A00] flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[24px]" aria-hidden="true">replay</span></span>' +
        '<div class="min-w-0">' +
        '<p class="font-head font-bold text-[15px] leading-tight text-ink">Latihan Lagi</p>' +
        '<p class="text-[12px] text-muted truncate">' + esc(reviewIsland.name) + ' (Level ' + reviewLevel + ')</p>' +
        '</div></div>' +
        '<button type="button" class="min-h-[46px] px-4 rounded-full bg-[#F7BE36] text-[#261900] font-bold text-[13px] flex items-center gap-1 shrink-0" data-action="open-module" data-module="' + reviewLevel + '">' +
        '<span class="material-symbols-outlined text-[18px]" aria-hidden="true">play_circle</span><span>Ulangi</span></button>' +
        '</div>';
    }
  }

  function walkTheTrail() {
    var walker = $('#walker');
    if (!walker) return;

    var active = Math.min(state.completed + 1, MODULES.length);
    var island = ISLANDS[active - 1];
    var name = state.profile ? state.profile.name : 'Rani';

    if (reducedMotion()) {
      toast('Rani sudah sampai di ' + island.name + '!');
      return;
    }

    var frames = [];
    for (var i = 0; i < active; i++) {
      frames.push({ left: MAP_NODES[i].left + '%', top: (MAP_NODES[i].top - 13) + '%' });
    }
    frames.push({ left: MAP_NODES[active - 1].left + '%', top: (MAP_NODES[active - 1].top - 13) + '%' });

    try {
      walker.animate(frames, { duration: 700 + 450 * active, easing: 'ease-in-out' });
    } catch (err) {
      /* abaikan */
    }

    sparkle(walker);
    window.setTimeout(function () {
      toast('Hore! ' + name + ' tiba di ' + island.name + '! 🎉');
    }, 700 + 450 * active);
  }

  function sparkle(anchor) {
    var layer = $('#sparkles');
    if (!layer) return;
    var rect = anchor.getBoundingClientRect();
    var mapRect = layer.getBoundingClientRect();
    for (var i = 0; i < 10; i++) {
      var s = document.createElement('span');
      s.className = 'sparkle';
      s.textContent = '✨';
      s.style.left = (rect.left - mapRect.left + rect.width / 2 + (Math.random() * 90 - 45)) + 'px';
      s.style.top = (rect.top - mapRect.top + rect.height / 2 + (Math.random() * 40 - 20)) + 'px';
      s.style.animationDelay = (Math.random() * 0.25) + 's';
      layer.appendChild(s);
      window.setTimeout(function (el) {
        return function () {
          if (el.parentNode) el.parentNode.removeChild(el);
        };
      }(s), 1600);
    }
  }

  /* ---------------------------------------------------------
     8. TAB LATIHAN
     --------------------------------------------------------- */
  function renderLatihan() {
    var cont = $('#lat-continue');
    if (cont) {
      var next = Math.min(state.completed + 1, MODULES.length);
      var mod = MODULES[next - 1];
      var done = state.completed >= MODULES.length;
      cont.innerHTML =
        '<div class="card p-4">' +
        '<div class="flex items-center gap-3 mb-3">' +
        '<div class="w-12 h-12 rounded-full bg-[#FFF3D6] text-[#7A4A00] flex items-center justify-center shrink-0">' +
        '<span class="material-symbols-outlined text-[26px]" aria-hidden="true" style="font-variation-settings:\'FILL\' 1;">play_arrow</span>' +
        '</div>' +
        '<div class="min-w-0 flex-1">' +
        '<p class="text-[13px] text-muted">' + (done ? 'Semua level selesai' : 'Lanjutkan belajar') + '</p>' +
        '<p class="font-head font-bold text-[18px] text-ink truncate">' + esc(mod.title) + '</p>' +
        '</div>' +
        '</div>' +
        '<p class="text-[14px] text-muted mb-3">' + (done ? 'Ulangi level mana saja untuk menjaga ingatanmu.' : 'Level ' + next + ' dari ' + MODULES.length + ' Â· ' + mod.questions.length + ' soal singkat') + '</p>' +
        '<button type="button" class="btn-primary" data-action="open-module" data-module="' + next + '">' +
        '<span>' + (done ? 'Ulangi Level 6' : 'Mulai Level ' + next) + '</span>' +
        '<span class="material-symbols-outlined text-[22px]" aria-hidden="true">arrow_forward</span>' +
        '</button>' +
        '</div>';
    }

    var quick = $('#lat-quick');
    if (quick) {
      var picks = [MODULES[0], MODULES[1], MODULES[2]];
      var html = '';
      picks.forEach(function (mod) {
        var unlocked = mod.n <= state.completed + 1;
        html +=
          '<button type="button" class="card-flat p-3 flex flex-col items-start gap-1 text-left active:scale-[0.98] transition-transform" data-action="open-module" data-module="' + mod.n + '"' + (unlocked ? '' : ' data-locked="1"') + '>' +
          '<span class="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">' + mod.icon + '</span>' +
          '<span class="font-head font-bold text-[14px] leading-tight text-ink">' + esc(mod.chips[0]) + '</span>' +
          '<span class="text-[12px] text-muted">Level ' + mod.n + '</span>' +
          '</button>';
      });
      quick.innerHTML = html;
    }

    var skills = $('#lat-skills');
    if (skills) {
      var rows = '';
      MODULES.forEach(function (mod) {
        var done = mod.n <= state.completed;
        var active = mod.n === state.completed + 1;
        var locked = mod.n > state.completed + 1;
        var points = state.modulePoints[mod.n] || 0;
        var rating = Math.min(3, Math.ceil(points / 3.34));
        var stars = '';
        for (var s = 1; s <= 3; s++) stars += starSvg(s <= rating);
        rows +=
          '<button type="button" class="w-full flex items-center gap-3 py-3 text-left" data-action="open-module" data-module="' + mod.n + '"' + (locked ? ' data-locked="1"' : '') + '>' +
          '<span class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 ' + (locked ? 'bg-[#F1ECE3] text-[#9A8F80]' : 'bg-[#EFF4FF] text-primary') + '">' +
          '<span class="material-symbols-outlined text-[22px]" aria-hidden="true">' + (locked ? 'lock' : mod.icon) + '</span></span>' +
          '<span class="min-w-0 flex-1">' +
          '<span class="block font-bold text-[15px] text-ink truncate">' + esc(mod.title) + '</span>' +
          '<span class="block text-[13px] text-muted truncate">' + esc(mod.sub) + '</span>' +
          '</span>' +
          '<span class="flex items-center gap-0.5 shrink-0">' + (locked ? '<span class="text-[12px] text-muted">Terkunci</span>' : stars) + '</span>' +
          '</button>' +
          (done ? '' : '');
      });
      skills.innerHTML = rows;
    }
  }

  /* ---------------------------------------------------------
     9. TAB HADIAH
     --------------------------------------------------------- */
  function renderHadiah() {
    var total = $('#hadiah-total');
    if (total) total.textContent = String(state.stars);

    var badges = $('#badges');
    if (badges) {
      var html = '';
      BADGES.forEach(function (b) {
        var unlocked = state.completed >= b.need;
        html +=
          '<div class="badge-tile' + (unlocked ? '' : ' is-locked') + '">' +
          '<span class="w-12 h-12 rounded-full flex items-center justify-center ' + (unlocked ? 'bg-[#FFF3D6] text-[#B47800]' : 'bg-[#EFE7DA] text-[#9A8F80]') + '">' +
          '<span class="material-symbols-outlined text-[26px]" aria-hidden="true" style="font-variation-settings:\'FILL\' ' + (unlocked ? 1 : 0) + ';">' + (unlocked ? b.icon : 'lock') + '</span></span>' +
          '<p class="font-head font-bold text-[14px] leading-tight text-ink">' + esc(b.title) + '</p>' +
          '<p class="text-[12px] text-muted">' + (unlocked ? 'Terbuka' : 'Selesaikan Level ' + b.need) + '</p>' +
          '</div>';
      });
      badges.innerHTML = html;
    }

    var week = $('#week');
    if (week) {
      var names = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
      var cells = '';
      for (var i = 6; i >= 0; i--) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        var key = dayKey(d);
        var count = state.days[key] || 0;
        var today = i === 0;
        cells +=
          '<div class="flex flex-col items-center gap-1">' +
          '<span class="day ' + (count > 0 ? 'day-on' : 'day-off') + (today ? ' day-today' : '') + '">' +
          '<span class="material-symbols-outlined text-[18px]" aria-hidden="true" style="font-variation-settings:\'FILL\' ' + (count > 0 ? 1 : 0) + ';">star</span></span>' +
          '<span class="text-[11px] ' + (today ? 'text-primary font-bold' : 'text-muted') + '">' + names[d.getDay()] + '</span>' +
          '</div>';
      }
      week.innerHTML = cells;
    }
  }

  /* ---------------------------------------------------------
     10. TAB PROFIL
     --------------------------------------------------------- */
  function renderProfil() {
    var p = state.profile;
    if (!p) {
      show('login');
      return;
    }
    var nameEl = $('#profil-name');
    if (nameEl) nameEl.textContent = p.name;

    var meta = $('#profil-meta');
    if (meta) meta.textContent = p.mode === 'usia' ? 'Usia ' + p.value + ' tahun' : 'Kelas ' + p.value + ' SD';

    var level = Math.min(state.completed + 1, MODULES.length);
    var levelEl = $('#profil-level');
    if (levelEl) levelEl.textContent = 'Level ' + level;

    var starsEl = $('#profil-stars');
    if (starsEl) starsEl.textContent = String(state.stars);

    var badgesEl = $('#profil-badges');
    if (badgesEl) {
      var count = 0;
      BADGES.forEach(function (b) {
        if (state.completed >= b.need) count++;
      });
      badgesEl.textContent = String(count);
    }

    var img = $('#profil-avatar');
    if (img) img.src = avatarSrc(p.avatar);
  }

  /* ---------------------------------------------------------
     11. SESI LATIHAN
     --------------------------------------------------------- */
  var session = { module: 1, index: 0, selected: null, tried: false, firstTry: 0, earned: 0, awarded: 0 };
  var sheetOpen = false;

  function currentQuestion() {
    var mod = MODULES[session.module - 1];
    return mod ? mod.questions[session.index] : null;
  }

  function openModule(moduleNumber) {
    if (!state.profile) {
      openLogin('create');
      return;
    }
    var n = clampInt(moduleNumber, 1, MODULES.length, 1);
    if (n > state.completed + 1) {
      toast('Selesaikan level sebelumnya dulu ya!');
      return;
    }
    session = { module: n, index: 0, selected: null, tried: false, firstTry: 0, earned: 0, awarded: 0 };
    show('sesi');
    renderQuestion();
  }

  function renderQuestion() {
    var mod = MODULES[session.module - 1];
    var q = currentQuestion();
    if (!mod || !q) return;

    var title = $('#sesi-title');
    if (title) title.textContent = 'Level ' + session.module + ' Â· ' + mod.title;

    var label = $('#sesi-progress-text');
    if (label) label.textContent = 'Soal ' + (session.index + 1) + ' dari ' + mod.questions.length;

    var bar = $('#sesi-progress-bar');
    if (bar) bar.style.width = Math.round(((session.index + 1) / mod.questions.length) * 100) + '%';

    var qText = $('#q-text');
    if (qText) qText.textContent = q.text;

    var emoji = $('#q-emoji');
    if (emoji) {
      if (q.emoji) {
        emoji.textContent = q.emoji;
        emoji.classList.remove('hidden');
      } else {
        emoji.textContent = '';
        emoji.classList.add('hidden');
      }
    }

    var storyBox = $('#story-box');
    var storyText = $('#story-text');
    if (storyBox && storyText) {
      if (mod.story) {
        storyText.textContent = mod.story;
        storyBox.classList.remove('hidden');
      } else {
        storyText.textContent = '';
        storyBox.classList.add('hidden');
      }
    }

    var options = $('#options');
    if (options) {
      var html = '';
      q.options.forEach(function (option, index) {
        var length = String(option).length;
        var sizeClass = length > 18 ? ' is-very-long' : length > 9 ? ' is-long' : '';
        html +=
          '<button type="button" class="option" data-action="select" data-index="' + index + '" aria-pressed="false">' +
          '<span class="t-option' + sizeClass + '">' + esc(option) + '</span>' +
          '</button>';
      });
      options.innerHTML = html;
    }

    var check = $('#btn-check');
    if (check) {
      check.disabled = true;
      check.textContent = 'Periksa';
    }

    var example = $('#btn-example');
    if (example) example.classList.toggle('hidden', !state.settings.showExample);

    closeSheet();
    refreshStars();

    if (state.settings.autoRepeat && hasGesture) {
      window.setTimeout(function () {
        if (currentScreen === 'sesi') speak(q.text);
      }, 280);
    }
  }

  function selectOption(index) {
    var q = currentQuestion();
    if (!q) return;
    var value = q.options[index];
    if (value == null) return;

    session.selected = value;

    $$('#options .option').forEach(function (btn) {
      var on = parseInt(btn.getAttribute('data-index'), 10) === index;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    var check = $('#btn-check');
    if (check) check.disabled = false;
  }

  function checkAnswer() {
    var q = currentQuestion();
    if (!q) return;
    if (session.selected == null) {
      toast('Pilih dulu salah satu jawabannya, ya.');
      return;
    }

    if (session.selected === q.answer) {
      var gain = session.tried ? 1 : 2;
      session.earned += gain;
      if (!session.tried) session.firstTry += 1;
      refreshStars();
      tone(784, 0.14);
      showSheet('correct', q);
    } else {
      session.tried = true;
      tone(392, 0.12);
      showSheet('retry', q);
    }
  }

  function addDayStars(amount) {
    var key = dayKey();
    state.days[key] = clampInt(state.days[key], 0, 200, 0) + amount;
  }

  function nextQuestion() {
    if (!sheetOpen) return;
    closeSheet();
    var mod = MODULES[session.module - 1];
    session.index += 1;
    if (session.index >= mod.questions.length) {
      finishSession();
      return;
    }
    session.selected = null;
    session.tried = false;
    renderQuestion();
  }

  function finishSession() {
    var mod = MODULES[session.module - 1];
    var rating = ratingFromFirstTry(session.firstTry, mod.questions.length);
    var previous = state.modulePoints[session.module] || 0;
    var best = Math.max(previous, session.earned);
    var delta = best - previous;

    state.modulePoints[session.module] = best;
    state.stars += delta;
    session.awarded = delta;
    if (delta > 0) addDayStars(delta);

    if (session.module === state.completed + 1) state.completed = session.module;
    saveState();
    refreshStars();
    renderSelesai(rating);
    show('selesai');
  }

  function renderSelesai(rating) {
    var mod = MODULES[session.module - 1];
    var starsWrap = $('#selesai-stars');
    if (starsWrap) {
      var html = '';
      for (var i = 1; i <= 3; i++) {
        html +=
          '<span class="material-symbols-outlined text-[46px]" aria-hidden="true" style="font-variation-settings:\'FILL\' ' + (i <= rating ? 1 : 0) + ';color:' + (i <= rating ? '#FFC53D' : '#D9CFC0') + '">star</span>';
      }
      starsWrap.innerHTML = html;
      starsWrap.setAttribute('aria-label', rating + ' dari 3 bintang');
    }

    var title = $('#selesai-title');
    if (title) title.textContent = 'Level ' + session.module + ' selesai!';

    var sub = $('#selesai-sub');
    if (sub) sub.textContent = 'Kamu menyelesaikan ' + mod.questions.length + ' soal ' + mod.title + '.';

    var chips = $('#selesai-chips');
    if (chips) {
      chips.innerHTML =
        '<span class="px-3 py-1.5 rounded-full bg-[#EFF4FF] text-primary text-[13px] font-bold">' + esc(mod.chips[0]) + '</span>' +
        '<span class="px-3 py-1.5 rounded-full bg-[#EFF4FF] text-primary text-[13px] font-bold">' + esc(mod.chips[1]) + '</span>';
    }

    var gain = $('#selesai-gain');
    if (gain) gain.textContent = '+' + (session.awarded || 0) + ' bintang';

    var next = $('#btn-next-level');
    if (next) {
      if (session.module < MODULES.length) {
        next.classList.remove('hidden');
        var label = next.querySelector('[data-label]');
        if (label) label.textContent = 'Lanjut ke Level ' + (session.module + 1);
      } else {
        next.classList.add('hidden');
      }
    }
  }

  function repeatSession() {
    openModule(session.module);
  }

  /* ---------------------------------------------------------
     12. SHEET UMPAN BALIK
     --------------------------------------------------------- */
  function showSheet(kind, q) {
    var backdrop = $('#sheet-backdrop');
    var sheet = $('#sheet');
    var card = $('#sheet-card');
    if (!backdrop || !sheet || !card) return;

    var titleEl = $('#sheet-title');
    var bodyEl = $('#sheet-body');
    var iconEl = $('#sheet-icon');
    var actions = $('#sheet-actions');

    card.setAttribute('data-kind', kind);

    if (kind === 'correct') {
      card.className = 'card p-5';
      card.setAttribute('data-kind', 'correct');
      if (iconEl) {
        iconEl.className = 'w-12 h-12 rounded-full flex items-center justify-center shrink-0';
        iconEl.setAttribute('data-kind', 'correct');
        iconEl.innerHTML = '<span class="material-symbols-outlined text-[26px]" aria-hidden="true" style="font-variation-settings:\'FILL\' 1;">check_circle</span>';
      }
      if (titleEl) titleEl.textContent = 'Hebat! Jawabanmu tepat.';
      if (bodyEl) bodyEl.textContent = q.explain || '';
      if (actions) {
        actions.innerHTML =
          '<button type="button" class="btn-primary" data-action="next">' +
          '<span>Lanjut</span>' +
          '<span class="material-symbols-outlined text-[22px]" aria-hidden="true">arrow_forward</span>' +
          '</button>' +
          '<button type="button" class="btn-soft w-full mt-2" data-action="listen-question">' +
          '<span class="material-symbols-outlined text-[20px]" aria-hidden="true">volume_up</span>' +
          '<span>Dengarkan lagi</span>' +
          '</button>';
      }
    } else {
      card.className = 'card p-5';
      card.setAttribute('data-kind', 'retry');
      if (iconEl) {
        iconEl.className = 'w-12 h-12 rounded-full flex items-center justify-center shrink-0';
        iconEl.setAttribute('data-kind', 'retry');
        iconEl.innerHTML = '<span class="material-symbols-outlined text-[26px]" aria-hidden="true">replay</span>';
      }
      if (titleEl) titleEl.textContent = 'Belum tepat. Coba dengarkan sekali lagi.';
      if (bodyEl) bodyEl.textContent = q.hint || '';
      if (actions) {
        actions.innerHTML =
          '<button type="button" class="btn-primary" data-action="listen-question">' +
          '<span class="material-symbols-outlined text-[22px]" aria-hidden="true">volume_up</span>' +
          '<span>Dengarkan lagi</span>' +
          '</button>' +
          '<button type="button" class="btn-soft w-full mt-2" data-action="retry">Coba lagi</button>';
      }
    }

    backdrop.classList.add('is-open');
    sheet.classList.add('is-open');
    sheetOpen = true;

    if (card) card.focus({ preventScroll: true });
  }

  function closeSheet() {
    var backdrop = $('#sheet-backdrop');
    var sheet = $('#sheet');
    if (backdrop) backdrop.classList.remove('is-open');
    if (sheet) sheet.classList.remove('is-open');
    sheetOpen = false;
  }

  function retryQuestion() {
    closeSheet();
    session.selected = null;
    $$('#options .option').forEach(function (btn) {
      btn.setAttribute('aria-pressed', 'false');
    });
    var check = $('#btn-check');
    if (check) check.disabled = true;
  }

  /* ---------------------------------------------------------
     13. ISTIRAHAT
     --------------------------------------------------------- */
  var breakTimer = null;
  var breakLeft = 60;

  function startBreak() {
    breakLeft = 60;
    show('istirahat');
    updateBreakUI();
    stopBreak();
    breakTimer = window.setInterval(function () {
      breakLeft -= 1;
      if (breakLeft <= 0) {
        breakLeft = 0;
        updateBreakUI();
        stopBreak();
        return;
      }
      updateBreakUI();
    }, 1000);
  }

  function updateBreakUI() {
    var time = $('#break-time');
    if (time) {
      var m = Math.floor(breakLeft / 60);
      var s = breakLeft % 60;
      time.textContent = m + ':' + (s < 10 ? '0' + s : s);
    }
    var cont = $('#btn-break-continue');
    if (cont) {
      cont.disabled = breakLeft > 0;
      cont.textContent = breakLeft > 0 ? 'Lanjut belajar' : 'Ayo mulai lagi';
    }
  }

  function stopBreak() {
    if (breakTimer) {
      window.clearInterval(breakTimer);
      breakTimer = null;
    }
  }

  /* ---------------------------------------------------------
     14. PENGATURAN
     --------------------------------------------------------- */
  function applySettings() {
    var s = state.settings;
    document.documentElement.setAttribute('data-scale', s.scale);
    document.body.classList.toggle('reduce-motion', s.reduceMotion);
    document.body.classList.toggle('high-contrast', s.highContrast);
  }

  function renderSettings() {
    var s = state.settings;

    $$('#set-scale [data-scale]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-scale') === s.scale ? 'true' : 'false');
    });
    $$('#set-speed [data-speed]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-speed') === s.speed ? 'true' : 'false');
    });

    $$('[data-setting]').forEach(function (btn) {
      var key = btn.getAttribute('data-setting');
      btn.setAttribute('aria-checked', s[key] ? 'true' : 'false');
    });

    var preview = $('#set-preview');
    if (preview) preview.style.fontSize = s.scale === 'sm' ? '18px' : s.scale === 'lg' ? '24px' : '20px';
  }

  function toggleSetting(key) {
    if (!(key in state.settings)) return;
    state.settings[key] = !state.settings[key];
    applySettings();
    renderSettings();
    saveState();
  }

  function setScale(value) {
    state.settings.scale = value === 'sm' || value === 'lg' ? value : 'md';
    applySettings();
    renderSettings();
    saveState();
  }

  function setSpeed(value) {
    state.settings.speed = value === 'slow' ? 'slow' : 'normal';
    renderSettings();
    saveState();
  }

  /* ---------------------------------------------------------
     15. MODAL
     --------------------------------------------------------- */
  function openModal(html) {
    var modal = $('#modal');
    var body = $('#modal-body');
    if (!modal || !body) return;
    body.innerHTML = html;
    modal.classList.add('is-open');
  }

  function closeModal() {
    var modal = $('#modal');
    if (modal) modal.classList.remove('is-open');
  }

  function openAvatarModal() {
    var p = state.profile;
    if (!p) return;
    var current = p.avatar;
    var items = '';
    AVATARS.forEach(function (a) {
      items +=
        '<button type="button" class="avatar-choice" role="radio" aria-checked="' + (a.id === current ? 'true' : 'false') + '" data-action="modal-avatar" data-avatar="' + a.id + '" aria-label="' + esc(a.alt) + '">' +
        '<span class="avatar-badge" aria-hidden="true"><span class="material-symbols-outlined text-[14px]" style="font-variation-settings:\'FILL\' 1;">check</span></span>' +
        '<img src="' + a.src + '" alt="" class="w-[56px] h-[56px] rounded-full object-cover bg-primary-fixed/40" width="56" height="56" />' +
        '</button>';
    });

    openModal(
      '<h2 class="font-head font-bold text-[22px] text-ink mb-1">Ganti avatar</h2>' +
      '<p class="text-[14px] text-muted mb-4">Pilih yang paling kamu suka.</p>' +
      '<div id="modal-avatars" class="grid grid-cols-4 gap-2 mb-4" role="radiogroup" aria-label="Pilihan avatar">' + items + '</div>' +
      '<button type="button" class="btn-primary" data-action="save-avatar"><span>Simpan</span></button>' +
      '<button type="button" class="btn-soft w-full mt-2" data-action="close-modal">Batal</button>'
    );
  }

  function openAbout() {
    openModal(
      '<h2 class="font-head font-bold text-[22px] text-ink mb-2">Tentang Duolexia</h2>' +
      '<p class="t-body text-ink mb-3">Duolexia membantu anak usia 6â€“8 tahun berlatih membaca lewat enam level singkat: huruf, bunyi, suku kata, kata, kalimat, dan cerita.</p>' +
      '<p class="t-body text-muted mb-4">Setiap soal punya audio, dan tidak ada skor yang menghakimi. Bintang hanya untuk memberi semangat.</p>' +
      '<p class="text-[13px] text-muted mb-4">Versi 1.0 Â· Bahasa Indonesia</p>' +
      '<button type="button" class="btn-primary" data-action="close-modal"><span>Mengerti</span></button>'
    );
  }

  function openDeleteModal() {
    openModal(
      '<h2 class="font-head font-bold text-[22px] text-ink mb-2">Hapus profil?</h2>' +
      '<p class="t-body text-ink mb-4">Nama, avatar, bintang, dan riwayat latihan akan dihapus dari perangkat ini.</p>' +
      '<button type="button" class="btn-primary !bg-[#8A4B2A]" data-action="confirm-delete"><span>Ya, hapus</span></button>' +
      '<button type="button" class="btn-soft w-full mt-2" data-action="close-modal">Batal</button>'
    );
  }

  function deleteProfile() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      /* abaikan */
    }
    state = deepCopy(DEFAULT_STATE);
    applySettings();
    closeModal();
    renderProfileChrome();
    show('login');
    openLogin('create');
    toast('Profil dihapus.');
  }

  /* ---------------------------------------------------------
     16. AKSI
     --------------------------------------------------------- */
  var ACTIONS = {
    'tab': function (el) {
      show(el.getAttribute('data-tab'));
    },
    'speak-screen': function (el) {
      speak(el.getAttribute('data-say') || '');
    },
    'open-module': function (el) {
      if (el.getAttribute('data-locked')) {
        toast('Selesaikan level sebelumnya dulu ya!');
        return;
      }
      openModule(el.getAttribute('data-module'));
    },
    'login-mode': function (el) {
      draft.mode = el.getAttribute('data-mode') === 'kelas' ? 'kelas' : 'usia';
      draft.value = draft.mode === 'usia' ? 7 : 1;
      renderModeToggle();
      renderAgeOptions();
    },
    'login-value': function (el) {
      draft.value = clampInt(el.getAttribute('data-value'), 1, 8, 7);
      renderAgeOptions();
    },
    'login-avatar': function (el) {
      draft.avatar = clampInt(el.getAttribute('data-avatar'), 1, AVATARS.length, 1);
      renderAvatarChoices();
      syncLoginButton();
    },
    'submit-login': function () {
      submitLogin();
    },
    'cancel-edit': function () {
      show('profil');
    },
    'edit-profile': function () {
      openLogin('edit');
    },
    'open-settings': function () {
      renderSettings();
      show('pengaturan');
    },
    'back-profil': function () {
      show('profil');
    },
    'set-scale': function (el) {
      setScale(el.getAttribute('data-scale'));
    },
    'set-speed': function (el) {
      setSpeed(el.getAttribute('data-speed'));
    },
    'toggle-setting': function (el) {
      toggleSetting(el.getAttribute('data-setting'));
    },
    'change-avatar': function () {
      openAvatarModal();
    },
    'modal-avatar': function (el) {
      var id = clampInt(el.getAttribute('data-avatar'), 1, AVATARS.length, 1);
      $$('#modal-avatars .avatar-choice').forEach(function (btn) {
        btn.setAttribute('aria-checked', btn.getAttribute('data-avatar') === String(id) ? 'true' : 'false');
      });
    },
    'save-avatar': function () {
      var selected = $('#modal-avatars .avatar-choice[aria-checked="true"]');
      if (selected && state.profile) {
        state.profile.avatar = clampInt(selected.getAttribute('data-avatar'), 1, AVATARS.length, 1);
        saveState();
        renderProfileChrome();
        renderProfil();
        toast('Avatar diperbarui.');
      }
      closeModal();
    },
    'close-modal': function () {
      closeModal();
    },
    'about': function () {
      openAbout();
    },
    'delete-profile': function () {
      openDeleteModal();
    },
    'confirm-delete': function () {
      deleteProfile();
    },
    'select': function (el) {
      selectOption(clampInt(el.getAttribute('data-index'), 0, 3, 0));
    },
    'check': function () {
      checkAnswer();
    },
    'next': function () {
      nextQuestion();
    },
    'retry': function () {
      retryQuestion();
    },
    'listen-question': function () {
      var q = currentQuestion();
      if (q) speak(q.text);
    },
    'listen-slow': function () {
      var q = currentQuestion();
      if (q) speak(q.text, true);
    },
    'walk': function () {
      walkTheTrail();
    },
    'listen-story': function () {
      var mod = MODULES[session.module - 1];
      if (mod && mod.story) speak(mod.story);
    },
    'example': function () {
      var q = currentQuestion();
      if (!q) return;
      toast(q.hint || 'Dengarkan lagi kata kuncinya.');
      speak(q.hint || q.text);
    },
    'close-session': function () {
      show('peta');
      toast('Latihan disimpan sampai soal terakhir, ya.');
    },
    'repeat-session': function () {
      repeatSession();
    },
    'next-level': function () {
      if (session.module < MODULES.length) {
        openModule(session.module + 1);
      } else {
        show('peta');
      }
    },
    'start-break': function () {
      startBreak();
    },
    'end-break': function () {
      show('peta');
    },
    'skip-break': function () {
      stopBreak();
      show('peta');
    }
  };

  document.addEventListener('click', function (event) {
    var el = event.target.closest ? event.target.closest('[data-action]') : null;
    if (!el) return;
    var action = el.getAttribute('data-action');
    var fn = ACTIONS[action];
    if (!fn) return;
    event.preventDefault();
    fn(el);
  });

  document.addEventListener('pointerdown', function () {
    hasGesture = true;
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    var el = event.target && event.target.closest ? event.target.closest('[data-action][role="button"]') : null;
    if (!el) return;
    event.preventDefault();
    el.click();
  });

  /* input nama */
  document.addEventListener('input', function (event) {
    if (event.target && event.target.id === 'name-input') {
      draft.name = event.target.value;
      syncLoginButton();
    }
  });

  /* ketuk latar sheet / modal untuk menutup */
  document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'sheet-backdrop') closeSheet();
    if (event.target && event.target.id === 'modal') closeModal();
  });

  /* keyboard */
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (sheetOpen) {
      closeSheet();
      return;
    }
    var modal = $('#modal');
    if (modal && modal.classList.contains('is-open')) closeModal();
  });

  /* ---------------------------------------------------------
     17. SELFTEST (hanya dengan ?selftest=1)
     --------------------------------------------------------- */
  function runSelfTest() {
    var out = [];
    function check(name, condition) {
      out.push((condition ? 'PASS' : 'FAIL') + ' â€” ' + name);
    }

    try {
      check('rating 6/6 -> 3', ratingFromFirstTry(6, 6) === 3);
      check('rating 4/6 -> 2', ratingFromFirstTry(4, 6) === 2);
      check('rating 1/6 -> 1', ratingFromFirstTry(1, 6) === 1);
      check('dayKey format', /^\d{4}-\d{2}-\d{2}$/.test(dayKey()));
      check('data 6 modul', MODULES.length === 6);
      check('setiap modul 5-6 soal', MODULES.every(function (m) { return m.questions.length >= 5 && m.questions.length <= 6; }));
      check('setiap soal 2-4 opsi', MODULES.every(function (m) {
        return m.questions.every(function (q) { return q.options.length >= 2 && q.options.length <= 4; });
      }));
      check('jawaban ada di opsi', MODULES.every(function (m) {
        return m.questions.every(function (q) { return q.options.indexOf(q.answer) !== -1; });
      }));
      check('opsi tidak duplikat', MODULES.every(function (m) {
        return m.questions.every(function (q) {
          return q.options.filter(function (o, i) { return q.options.indexOf(o) === i; }).length === q.options.length;
        });
      }));

      var input = $('#name-input');
      var btn = $('#btn-login');
      check('login: tombol awal nonaktif', btn && btn.disabled === true);

      if (input) {
        input.value = 'Uji';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
      check('login: nama 3 huruf belum aktif tanpa avatar', btn && btn.disabled === true);

      var avatarBtn = $('#avatar-grid [data-avatar="1"]');
      if (avatarBtn) avatarBtn.click();
      check('login: tombol aktif setelah nama + avatar', btn && btn.disabled === false);

      if (btn) btn.click();
      check('login: masuk ke peta', currentScreen === 'peta');
      check('login: profil tersimpan', state.profile && state.profile.name === 'Uji');

      openModule(1);
      check('sesi: layar aktif', currentScreen === 'sesi');
      check('sesi: opsi dirender', $$('#options .option').length >= 2);

      var q = currentQuestion();
      var idx = q.options.indexOf(q.answer);
      var optionBtn = $('#options .option[data-index="' + idx + '"]');
      if (optionBtn) optionBtn.click();
      check('sesi: opsi terpilih', session.selected === q.answer && $$('#options .option[aria-pressed="true"]').length === 1);

      var checkBtn = $('#btn-check');
      if (checkBtn) checkBtn.click();
      check('sesi: umpan balik benar muncul', sheetOpen === true && $('#sheet-card').getAttribute('data-kind') === 'correct');

      var nextBtn = $('#sheet [data-action="next"]');
      if (nextBtn) nextBtn.click();
      check('sesi: lanjut ke soal 2', session.index === 1);

      for (var step = 0; step < MODULES[0].questions.length - 1; step++) {
        var qq = currentQuestion();
        var ii = qq.options.indexOf(qq.answer);
        var ob = $('#options .option[data-index="' + ii + '"]');
        if (ob) ob.click();
        var cb = $('#btn-check');
        if (cb) cb.click();
        var nb = $('#sheet [data-action="next"]');
        if (nb) nb.click();
      }

      check('sesi: selesai setelah semua soal', currentScreen === 'selesai');
      check('sesi: level 1 terbuka', state.completed === 1);
      check('sesi: bintang bertambah', state.stars >= 10);

      show('peta');
      check('peta: level 2 aktif', $$('#path .is-active').length === 1);
      show('latihan');
      check('latihan: 6 baris keterampilan', $$('#lat-skills [data-module]').length === 6);
      show('hadiah');
      check('hadiah: 4 lencana', $$('#badges .badge-tile').length === 4);
      show('profil');
      check('profil: nama tampil', $('#profil-name').textContent === 'Uji');

      setScale('lg');
      check('setelan: skala teks', document.documentElement.getAttribute('data-scale') === 'lg');
      setScale('md');
      toggleSetting('reduceMotion');
      check('setelan: kurangi animasi', document.body.classList.contains('reduce-motion'));
      toggleSetting('reduceMotion');
    } catch (err) {
      out.push('ERROR â€” ' + (err && err.message ? err.message : String(err)));
    }

    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      /* ignore */
    }

    var pre = document.createElement('pre');
    pre.id = 'selftest-output';
    pre.style.cssText = 'position:fixed;left:0;top:0;z-index:9999;background:#fff;font-size:10px;padding:4px;white-space:pre-wrap;max-width:100%';
    pre.textContent = out.join('\n');
    document.body.appendChild(pre);
  }

  /* ---------------------------------------------------------
     18. INIT
     --------------------------------------------------------- */
  function init() {
    applySettings();
    renderProfileChrome();
    refreshStars();

    var yearEl = $('#app-year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    if (state.profile) {
      renderPeta();
      show('peta');
    } else {
      openLogin('create');
    }

    if (TEST_MODE) {
      window.setTimeout(runSelfTest, 60);
      return;
    }


  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Service worker hanya didaftarkan lewat http(s); membuka file:// tetap aman.
  if ('serviceWorker' in navigator && window.location.protocol.indexOf('http') === 0) {
    window.addEventListener('load', function () {
      try {
        navigator.serviceWorker.register('sw.js').catch(function () {});
      } catch (err) {
        /* abaikan: PWA opsional */
      }
    });
  }
})();
