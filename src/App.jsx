import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BookOpenText,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Church,
  Download,
  Facebook,
  MapPin,
  Menu,
  MessageCircle,
  MoonStar,
  Music,
  Phone,
  Play,
  Search,
  SunMedium,
  Trash2,
  Tv,
  UserRound,
  X,
} from 'lucide-react';

const books = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'
];

const versions = [
  { value: 'kjv', label: 'KJV' },
  { value: 'web', label: 'WEB' },
  { value: 'nasb', label: 'NASB' },
  { value: 'niv', label: 'NIV' },
  { value: 'esv', label: 'ESV' },
  { value: 'nlt', label: 'NLT' },
  { value: 'amp', label: 'AMP' },
];

const weeklyActivities = [
  {
    day: 'Sunday',
    title: 'Worship Service',
    time: '9:00 AM',
    description: 'A spirit-filled time of praise, prayer, and preaching, where the Word of God is released for transformation and breakthrough.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Tuesday',
    title: 'Bible Study',
    time: '5:30 PM',
    description: 'Feasting on the Word of God with biblical teaching, fervent prayer, and personal application for daily living.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Wednesday',
    title: 'Counselling',
    time: '4:00 PM',
    description: 'Focused pastoral care and support for individuals facing life challenges, emotional burdens, and spiritual questions.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    day: 'Friday',
    title: 'Emancipation Hour',
    time: '6:00 PM',
    description: 'An hour of freedom, deliverance, worship, and prophetic prayer for healing, restoration, and spiritual renewal.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  },
];

const quickLinks = [
  { label: 'Bible Reader', href: '/bible-reader', icon: BookOpenText },
  { label: 'Live Stream', href: '/live-stream', icon: Tv },
  { label: 'Sunday School', href: '/sunday-school', icon: Church },
  { label: 'Contact', href: '/contact', icon: MessageCircle },
];

const sermonSchedule = [
  { day: 'Sunday', time: '9:00 AM', title: 'Worship & Word', type: 'Live' },
  { day: 'Tuesday', time: '5:30 PM', title: 'Bible Study', type: 'Weekly' },
  { day: 'Wednesday', time: '4:00 PM', title: 'Counselling & Prayer', type: 'Open' },
  { day: 'Friday', time: '6:00 PM', title: 'Emancipation Hour', type: 'Live' },
];

const pastSermons = [
  { title: 'The Power of the Word', date: '12 Oct 2026', duration: '45 mins' },
  { title: 'Walking in Divine Freedom', date: '28 Sep 2026', duration: '52 mins' },
  { title: 'Prayer That Prevails', date: '14 Sep 2026', duration: '40 mins' },
  { title: 'The Birth of Revival', date: '31 Aug 2026', duration: '48 mins' },
];

const sundaySchoolTopics = [
  {
    title: 'This Sunday’s Topic',
    scripture: '2 Timothy 3:16-17',
    summary: 'The Bible is inspired by God and is useful for teaching, correction, and spiritual maturity. We explore how the Word shapes and transforms lives.',
    discussion: ['How does God speak to us through His Word?', 'What changes when we receive Scripture with humility?', 'What is our responsibility to obey what God says?'],
    category: 'Doctrine',
  },
  {
    title: 'Faith That Works',
    scripture: 'James 2:14-26',
    summary: 'True faith is active and evidenced by obedient living. We learn to live out the gospel in practical ways and not just with words.',
    discussion: ['What is the difference between belief and obedience?', 'How can our actions reflect genuine faith?', 'Where do we need to align our walk with God’s truth?'],
    category: 'Faith',
  },
  {
    title: 'The Power of Prayer',
    scripture: '1 Thessalonians 5:16-18',
    summary: 'Prayer is a lifeline of fellowship with God. We examine how prayer strengthens us, brings peace, and keeps us aligned with God’s will.',
    discussion: ['Why do we pray when God already knows our needs?', 'How can we build a stronger prayer life?', 'What can we learn from Jesus’ example of prayer?'],
    category: 'Prayer',
  },
  {
    title: 'Freedom in Christ',
    scripture: 'Romans 8:1-4',
    summary: 'Believers are called to live in the liberty of Christ, free from condemnation and empowered to walk in righteousness.',
    discussion: ['How does grace protect us from spiritual shame?', 'What does walking in freedom look like daily?', 'How can we resist fear and condemnation?'],
    category: 'Deliverance',
  },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Bible Reader', to: '/bible-reader' },
  { label: 'Live Stream', to: '/live-stream' },
  { label: 'Sunday School', to: '/sunday-school' },
  { label: 'Contact', to: '/contact' },
];

const footerLinks = navLinks;
const easeOut = [0.22, 1, 0.36, 1];

function LogoMark({ large = false }) {
  return (
    <img
      src="/cea-logo.png"
      alt="Christ Emancipation Assembly logo"
      className={large ? 'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain' : 'h-10 w-10 sm:h-12 sm:w-12 object-contain'}
    />
  );
}

function fadeUpVariant(delay = 0) {
  return {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut, delay } },
  };
}

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071427]"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <LogoMark large />
        </motion.div>
        <div className="text-center">
          <p className="font-display text-3xl text-white tracking-[0.2em]">CEA</p>
          <div className="mt-2 h-1 w-28 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-full rounded-full bg-accent"
              initial={{ x: '-100%' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      <h2 className="font-display text-4xl text-white sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base text-slate-300 sm:text-lg">{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [musicOn, setMusicOn] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => setMusicOn((prev) => !prev);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <div className="min-h-screen bg-[#050b14] text-white selection:bg-accent/80 selection:text-white">
        <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#071427]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="font-display text-xl tracking-wider text-white sm:text-2xl">CEA</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">Christ Emancipation Assembly</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${isActive ? 'text-gold' : 'text-slate-200 hover:text-white'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={toggleMusic}
                aria-label="Toggle worship music"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 transition hover:border-gold/60 hover:text-gold"
              >
                {musicOn ? <Music className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
              </button>
              <Link to="/live-stream" className="btn-primary inline-flex items-center gap-2">
                Watch Live <Play className="h-4 w-4" fill="currentColor" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/10 bg-[#071427] lg:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 text-base font-medium ${isActive ? 'bg-white/8 text-gold' : 'text-slate-200 hover:bg-white/5'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-2 flex items-center justify-between gap-3">
                  <button type="button" onClick={toggleMusic} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200">
                    {musicOn ? 'Music On' : 'Music Off'}
                  </button>
                  <Link to="/live-stream" onClick={() => setMenuOpen(false)} className="btn-primary inline-flex items-center gap-2">
                    Watch Live <Play className="h-4 w-4" fill="currentColor" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bible-reader" element={<BibleReaderPage />} />
            <Route path="/live-stream" element={<LiveStreamPage />} />
            <Route path="/sunday-school" element={<SundaySchoolPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="border-t border-white/10 bg-[#040b16]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1.5fr] lg:px-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <LogoMark />
                <div>
                  <p className="font-display text-2xl text-white">CEA</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">Christ Emancipation Assembly</p>
                </div>
              </div>
              <p className="max-w-sm text-sm leading-7 text-slate-300">
                Setting captives free through the Word of God, prayer, worship, and the power of the Holy Spirit.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {footerLinks.map((link) => (
                  <li key={link.to}><Link to={link.to} className="hover:text-gold">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Service Days</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {weeklyActivities.map((item) => (
                  <li key={item.day}><span className="text-white">{item.day}</span> — {item.time}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Social</h3>
              <div className="flex flex-wrap gap-3">
                <a href="https://chat.whatsapp.com/Dkm5sT72qDE3xhxXUbmfgh?s=sh&p=a&iam=2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:border-accent/60 hover:text-gold">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href="https://www.facebook.com/profile.php?id=61563743077449" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:border-accent/60 hover:text-gold">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
            © 2026 Christ Emancipation Assembly
          </div>
        </footer>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <div className="pt-20">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(230,57,70,0.18),transparent_34%),linear-gradient(120deg,#071427,#0a1d3f,#071427)]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(16)].map((_, index) => (
            <span
              key={index}
              className="floating-particle"
              style={{
                left: `${(index * 11) % 100}%`,
                top: `${(index * 23) % 100}%`,
                animationDelay: `${index * 0.6}s`,
                animationDuration: `${12 + (index % 5) * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant()} className="z-10 max-w-xl">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: easeOut }} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <LogoMark />
              <span className="text-xs uppercase tracking-[0.25em] text-slate-200">Christ Emancipation Assembly</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: easeOut }} className="font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
              Christ Emancipation Assembly
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: easeOut }} className="mt-6 max-w-lg text-base leading-8 text-slate-200 sm:text-lg">
              Setting captives free through the Word of God.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: easeOut }} className="mt-8 flex flex-wrap gap-4">
              <Link to="/live-stream" className="btn-primary inline-flex items-center gap-2">
                Watch Live <Play className="h-4 w-4" fill="currentColor" />
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                Join Us This Sunday <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easeOut }} className="relative z-10 mx-auto flex w-full max-w-md items-center justify-center">
            <div className="hero-logo-container">
              <img src="/cea-logo.png" alt="Christ Emancipation Assembly logo" className="w-full max-w-md drop-shadow-[0_20px_60px_rgba(11,42,143,0.58)] object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Weekly rhythm" title="A life of worship, prayer, and discipleship" text="Each gathering is designed to equip the believer, renew the heart, and release God’s power into everyday life." />

          <div className="space-y-6">
            {weeklyActivities.map((item, index) => (
              <motion.article
                key={item.day}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: easeOut }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70"
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-60 transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071427] via-[#071427]/75 to-[#071427]/35" />
                <div className="relative grid min-h-[420px] items-end gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
                  <div className="max-w-lg">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{item.day}</p>
                    <h3 className="font-display text-4xl text-white sm:text-5xl">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-200">{item.description}</p>
                    <div className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100">
                      {item.time} • Admin-editable schedule
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#071427]/60 p-5 backdrop-blur-sm">
                    <p className="text-sm uppercase tracking-[0.25em] text-gold">Focus</p>
                    <p className="mt-4 text-2xl font-display text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">Expect prayer, teaching, fellowship, and biblical practical guidance for spiritual growth.</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Quick access" title="Start your journey" text="Find the right place to worship, study, and connect." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <Link key={label} to={href} className="group rounded-[28px] border border-white/10 bg-white/5 p-6 text-left transition hover:-translate-y-1 hover:border-accent/50 hover:bg-white/8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-3xl text-white">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Open the place that best fits your next step in faith, fellowship, and learning.</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(11,42,143,0.4),transparent_48%)]" />
        <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-[#071427]/80 p-8 text-center shadow-[0_0_80px_rgba(11,42,143,0.36)] sm:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Scripture</p>
          <blockquote className="mt-6 font-display text-3xl leading-tight text-white sm:text-5xl">
            “And you shall know the truth, and the truth shall make you free.”
          </blockquote>
          <p className="mt-5 text-lg text-slate-300">John 8:32</p>
        </div>
      </section>
    </div>
  );
}

function BibleReaderPage() {
  const [version, setVersion] = React.useState('kjv');
  const [book, setBook] = React.useState('John');
  const [chapter, setChapter] = React.useState(1);
  const [verse, setVerse] = React.useState(1);
  const [fontSize, setFontSize] = React.useState(18);
  const [mode, setMode] = React.useState('light');
  const [search, setSearch] = React.useState('');
  const [text, setText] = React.useState([]);
  const [notes, setNotes] = React.useState({});
  const [bookmarks, setBookmarks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const storageKey = 'cea-reader-notes';
  const bookmarkKey = 'cea-reader-bookmarks';

  const fetchChapter = React.useCallback(async () => {
    setLoading(true);
    try {
      const safeBook = encodeURIComponent(book);
      const response = await fetch(`https://bible-api.com/${safeBook}+${chapter}?translation=${version}`);
      if (!response.ok) throw new Error('Unable to load chapter');
      const data = await response.json();
      setText(data.verses || [{ verse: 1, text: 'Scripture text could not be loaded. Please try another translation or chapter.' }]);
    } catch (error) {
      setText([{ verse: 1, text: 'Scripture text could not be loaded. Please try another translation or chapter.' }]);
    } finally {
      setLoading(false);
    }
  }, [book, chapter, version]);

  React.useEffect(() => {
    const savedNotes = localStorage.getItem(storageKey);
    const savedBookmarks = localStorage.getItem(bookmarkKey);
    if (savedNotes) setNotes(JSON.parse(savedNotes));
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
  }, []);

  React.useEffect(() => {
    fetchChapter();
  }, [fetchChapter]);

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(notes));
  }, [notes]);

  React.useEffect(() => {
    localStorage.setItem(bookmarkKey, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const verseRef = `${book} ${chapter}:${verse}`;
  const currentNote = notes[`${version}-${book}-${chapter}`] || '';

  const updateNotes = (value) => {
    setNotes((prev) => ({ ...prev, [`${version}-${book}-${chapter}`]: value }));
  };

  const toggleBookmark = (ref) => {
    setBookmarks((prev) =>
      prev.includes(ref) ? prev.filter((item) => item !== ref) : [...prev, ref]
    );
  };

  const downloadNotes = () => {
    const blob = new Blob([currentNote || 'No notes recorded yet.'], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${book}-${chapter}-notes.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const exportPdf = () => {
    window.print();
  };

  const filteredVerses = text.filter((item) =>
    item.text?.toLowerCase().includes(search.toLowerCase()) || `${item.verse}`.includes(search)
  );

  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Bible Reader</p>
          <h1 className="mt-2 font-display text-4xl text-white sm:text-5xl">Study the Word</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            <span className="mr-2 uppercase tracking-[0.2em] text-slate-400">Version</span>
            <select value={version} onChange={(e) => setVersion(e.target.value)} className="bg-transparent text-white outline-none">
              {versions.map((option) => (
                <option key={option.value} value={option.value} className="text-slate-900">{option.label}</option>
              ))}
            </select>
          </label>
          <button type="button" onClick={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100">
            {mode === 'light' ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="mb-6 grid gap-4 rounded-[28px] border border-white/10 bg-[#071427]/80 p-4 md:grid-cols-[1fr_1fr_1fr_1.2fr]">
        <label className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
          <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Book</span>
          <select value={book} onChange={(e) => setBook(e.target.value)} className="w-full bg-transparent text-white outline-none">
            {books.map((bookName) => (
              <option key={bookName} value={bookName} className="text-slate-900">{bookName}</option>
            ))}
          </select>
        </label>

        <label className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
          <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Chapter</span>
          <input value={chapter} onChange={(e) => setChapter(Number(e.target.value || 1))} type="number" min="1" className="w-full bg-transparent text-white outline-none" />
        </label>

        <label className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
          <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Verse</span>
          <input value={verse} onChange={(e) => setVerse(Number(e.target.value || 1))} type="number" min="1" className="w-full bg-transparent text-white outline-none" />
        </label>

        <label className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
          <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Search</span>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search verse text" className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
          </div>
        </label>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setChapter((v) => Math.max(1, v - 1))} className="btn-secondary inline-flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" /> Prev Chapter
        </button>
        <button type="button" onClick={() => setChapter((v) => v + 1)} className="btn-secondary inline-flex items-center gap-2">
          Next Chapter <ChevronRight className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
          <span>Font</span>
          <input type="range" min="16" max="28" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
          <span>{fontSize}px</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.9fr_1fr]">
        <div className={`rounded-[28px] border border-white/10 p-5 sm:p-7 ${mode === 'dark' ? 'bg-[#091220] text-white' : 'bg-[#f7f3ee] text-slate-900'}`}>
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-current/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">{version.toUpperCase()}</p>
              <h2 className="font-display text-3xl">{book} {chapter}</h2>
            </div>
            <button type="button" onClick={() => toggleBookmark(verseRef)} className="inline-flex items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-sm">
              <Bookmark className={`h-4 w-4 ${bookmarks.includes(verseRef) ? 'fill-current text-accent' : ''}`} />
              {bookmarks.includes(verseRef) ? 'Saved' : 'Bookmark'}
            </button>
          </div>

          <div style={{ fontSize: `${fontSize}px` }} className="space-y-4 leading-relaxed">
            {loading ? (
              <p>Loading scripture…</p>
            ) : filteredVerses.length ? (
              filteredVerses.map((item) => (
                <div key={item.verse} className="rounded-2xl border border-current/10 bg-current/5 p-3">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{item.verse}</span>
                    <button type="button" onClick={() => setVerse(item.verse)} className="text-xs uppercase tracking-[0.2em] hover:text-accent">Focus</button>
                  </div>
                  <p className={item.verse === verse ? 'rounded-xl bg-accent/10 p-2 text-current' : ''}>{item.text}</p>
                </div>
              ))
            ) : (
              <p>No matching verses were found.</p>
            )}
          </div>
        </div>

        <aside className="rounded-[28px] border border-white/10 bg-[#071427]/85 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-display text-3xl text-white">Notes</h3>
            <div className="flex gap-2">
              <button type="button" onClick={downloadNotes} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100" aria-label="Download notes as text">
                <Download className="h-4 w-4" />
              </button>
              <button type="button" onClick={exportPdf} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100" aria-label="Download notes as PDF">
                <UserRound className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => setNotes((prev) => ({ ...prev, [`${version}-${book}-${chapter}`]: '' }))} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100" aria-label="Delete notes">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          <textarea
            value={currentNote}
            onChange={(e) => updateNotes(e.target.value)}
            placeholder="Write your reflection, prayer points, or application for this chapter…"
            className="h-[320px] w-full rounded-2xl border border-white/10 bg-[#0e1d35] p-4 text-sm text-slate-100 outline-none placeholder:text-slate-500"
          />

          <div className="mt-5 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Bookmarks</p>
            {bookmarks.length ? (
              <div className="space-y-2">
                {bookmarks.map((entry) => (
                  <button key={entry} type="button" onClick={() => setVerse(Number(entry.split(':')[1]) || 1)} className="block w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-slate-200">
                    {entry}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400">No bookmarks yet.</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function LiveStreamPage() {
  const [isLive] = React.useState(false);
  const countdownText = 'In 2 days • 09:00 AM';
  const liveUrl = 'https://www.youtube.com/embed/live_stream?channel=UC4mH5TVS6FXM1wLCj4e6d5A';

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Live Streaming</p>
          <h1 className="mt-2 font-display text-4xl text-white sm:text-5xl">Join the online gathering</h1>
        </div>
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <span className={`h-3 w-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-slate-400'}`} />
          <span className="text-sm uppercase tracking-[0.2em] text-slate-200">{isLive ? 'LIVE NOW' : 'Next service'}</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#071427]/90 shadow-[0_0_60px_rgba(230,57,70,0.18)]">
        <div className="aspect-video w-full bg-black">
          <iframe
            src={liveUrl}
            title="Christ Emancipation Assembly live stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-[#071427]/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">This service</p>
          <h2 className="mt-3 font-display text-4xl text-white">Sunday Worship Experience</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">A spirit-filled worship service with prayer, teaching, and prophetic encouragement from the Word of God.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full border border-accent/40 bg-accent/15 px-3 py-2 text-sm text-red-200">{isLive ? 'Live now' : 'Service begins Sunday at 9:00 AM'}</span>
            <span className="text-sm text-slate-300">{countdownText}</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#071427]/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Upcoming Services</p>
          <div className="mt-4 space-y-3">
            {sermonSchedule.map((item) => (
              <div key={item.day} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.day}</p>
                  <p className="mt-1 font-medium text-white">{item.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-300">{item.time}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SectionHeader eyebrow="Archive" title="Past sermon recordings" text="Listen again to previous teachings and worship experiences." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pastSermons.map((sermon) => (
            <div key={sermon.title} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="mb-5 flex h-28 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(230,57,70,0.25),rgba(11,42,143,0.5))] text-3xl text-white">
                ▶
              </div>
              <h3 className="font-display text-3xl text-white">{sermon.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{sermon.date} • {sermon.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SundaySchoolPage() {
  const [query, setQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Doctrine', 'Faith', 'Prayer', 'Deliverance'];
  const filteredTopics = sundaySchoolTopics.filter((topic) => {
    const matchesQuery =
      topic.title.toLowerCase().includes(query.toLowerCase()) ||
      topic.summary.toLowerCase().includes(query.toLowerCase()) ||
      topic.scripture.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,_rgba(230,57,70,0.12),rgba(11,42,143,0.3))] p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">Sunday School</p>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display text-4xl text-white sm:text-6xl">This Sunday’s Topic</h1>
            <p className="mt-3 max-w-xl text-base text-slate-200">{sundaySchoolTopics[0].summary}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#081325]/80 px-5 py-4 text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Key Scripture</p>
            <p className="mt-2 font-display text-3xl text-white">{sundaySchoolTopics[0].scripture}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search topics" className="bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm ${selectedCategory === category ? 'bg-accent text-white' : 'border border-white/10 bg-white/5 text-slate-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filteredTopics.map((topic) => (
          <article key={topic.title} className="rounded-[28px] border border-white/10 bg-[#071427]/80 p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">{topic.category}</span>
              <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-200">
                <Download className="h-3.5 w-3.5" /> PDF
              </button>
            </div>
            <h3 className="font-display text-4xl text-white">{topic.title}</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gold">{topic.scripture}</p>
            <p className="mt-4 text-base leading-7 text-slate-300">{topic.summary}</p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Discussion Questions</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
                {topic.discussion.map((question) => (
                  <li key={question} className="flex gap-2"><span className="mt-1 text-accent">•</span> {question}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Contact" title="Connect with the church" text="We’d love to pray with you, welcome you to service, and stay connected to your spiritual journey." />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <a href="https://chat.whatsapp.com/Dkm5sT72qDE3xhxXUbmfgh?s=sh&p=a&iam=2" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-[28px] border border-emerald-500/30 bg-emerald-500/10 p-5 text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">WhatsApp Group</p>
              <p className="mt-2 text-lg text-white">Join the community</p>
            </div>
            <MessageCircle className="h-6 w-6 text-emerald-300" />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61563743077449" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-[28px] border border-blue-400/30 bg-blue-500/10 p-5 text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Facebook Page</p>
              <p className="mt-2 text-lg text-white">Follow updates</p>
            </div>
            <Facebook className="h-6 w-6 text-blue-200" />
          </a>

          <a href="tel:+234802329838" className="flex items-center justify-between rounded-[28px] border border-accent/30 bg-accent/10 p-5 text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-red-200">Phone</p>
              <p className="mt-2 text-lg text-white">+234802329838</p>
            </div>
            <Phone className="h-6 w-6 text-red-200" />
          </a>

          <div className="rounded-[28px] border border-white/10 bg-[#071427]/80 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Address</p>
            <div className="mt-4 flex items-start gap-3 text-slate-200">
              <MapPin className="mt-1 h-5 w-5 text-gold" />
              <p className="leading-7">27B Uyo Street, Rumuomasi, Port Harcourt, Rivers State, Nigeria.</p>
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Church map"
                src="https://www.google.com/maps?q=27B%20Uyo%20Street%2C%20Rumuomasi%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria&output=embed"
                className="h-52 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#071427]/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Send a message</p>
          <h3 className="mt-3 font-display text-4xl text-white">We’re here to help</h3>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Name</span>
                <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-[#0d1630] p-3 text-white outline-none placeholder:text-slate-500" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Phone</span>
                <input type="tel" placeholder="Your phone number" className="w-full rounded-2xl border border-white/10 bg-[#0d1630] p-3 text-white outline-none placeholder:text-slate-500" />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Email</span>
              <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-white/10 bg-[#0d1630] p-3 text-white outline-none placeholder:text-slate-500" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Message</span>
              <textarea rows="6" placeholder="How can we pray with you?" className="w-full rounded-2xl border border-white/10 bg-[#0d1630] p-3 text-white outline-none placeholder:text-slate-500" />
            </label>

            <button type="submit" className="btn-primary inline-flex items-center gap-2">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
            {submitted && <p className="text-sm text-emerald-300">Thank you! Your message has been prepared successfully.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
