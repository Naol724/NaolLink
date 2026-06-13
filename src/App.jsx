import React from 'react'

const links = [
  {
    href: 'https://t.me/nilegt',
    iconClass: 'ic-tg',
    label: 'Telegram',
    sub: '@nilegt',
    delay: '0.05s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D3FF">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
      </svg>
    ),
  },
  {
    href: 'https://t.me/bluenilestudio',
    iconClass: 'ic-tg',
    label: 'Telegram Channel',
    sub: 'Tech, Science, Learning & Career',
    delay: '0.08s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D3FF">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/nilegt_',
    iconClass: 'ic-ig',
    label: 'Instagram',
    sub: '@nilegt_',
    delay: '0.10s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="url(#ig)">
        <defs>
          <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FCAF45" />
            <stop offset="50%" stopColor="#E1306C" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/naol-gonfa-61b7a9363/',
    iconClass: 'ic-li',
    label: 'LinkedIn',
    sub: 'Naol Gonfa — Connect with me',
    delay: '0.15s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/Naol724',
    iconClass: 'ic-gh',
    label: 'GitHub',
    sub: '49 repos · Full Stack & AI projects',
    delay: '0.20s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#E8EEFF">
        <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.8 18 5.1 18 5.1c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3 24 5.7 18.6.3 12 .3z" />
      </svg>
    ),
  },
  {
    href: 'https://leetcode.com/u/Nilegt/',
    iconClass: 'ic-lc',
    label: 'LeetCode',
    sub: 'Nilegt — Problem Solving',
    delay: '0.22s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFA116">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    href: 'https://naol.online',
    iconClass: 'ic-web',
    label: 'Portfolio Website',
    sub: 'naol.online',
    delay: '0.25s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    href: 'https://stackoverflow.com/users/31433702/naol-gonfa',
    iconClass: 'ic-so',
    label: 'Stack Overflow',
    sub: 'Naol Gonfa — Ask & Answer',
    delay: '0.30s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#F48024">
        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H17.78v-2.137H6.111v2.137zm.259-4.852l11.446 2.38.451-2.136-11.446-2.38-.451 2.136zm1.359-5.056l10.117 4.79.94-1.977L8.67 7.844l-.94 1.979zm2.716-4.49l8.276 7.009 1.386-1.737-8.276-7.009-1.386 1.737zM15.653 0l-1.735 1.361 6.506 8.316 1.735-1.361L15.653 0z" />
      </svg>
    ),
  },
  {
    href: 'https://www.youtube.com/@Ethio-man-d9u',
    iconClass: 'ic-yt',
    label: 'YouTube',
    sub: '@Ethio-man-d9u',
    delay: '0.28s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/qr/772JB525K5ZJE1',
    iconClass: 'ic-wa',
    label: 'WhatsApp',
    sub: 'Message me directly',
    delay: '0.31s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.251.646 4.355 1.757 6.133L.318 24l6.269-1.947C8.747 23.362 10.308 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.455 0-2.862-.344-4.123-1.02l-.296-.158-3.071.953.97-3.054-.19-.304A10 10 0 112 12c0 5.515 4.486 10 10 10z" />
        <path d="M17.415 14.382c-.315-.158-.894-.443-1.03-.49-.137-.047-.237-.047-.337.047-.1.094-.386.486-.472.584-.087.099-.174.112-.489.035-.314-.076-1.276-.467-2.43-1.482-.898-.777-1.501-1.738-1.677-2.052-.176-.315-.018-.485.132-.642.135-.134.298-.35.447-.525.15-.175.199-.298.299-.497.1-.198.05-.373-.025-.523-.074-.15-.337-.803-.462-1.1-.122-.299-.245-.259-.337-.264-.087-.004-.187-.004-.287-.004-.1 0-.263.037-.4.186-.137.149-.524.51-.524 1.243s.537 1.441.611 1.54c.074.099 1.043 1.589 2.523 2.227.352.15.626.239.84.307.353.113.674.098.93-.06.276-.18.565-.498.72-.968.155-.47.155-.87.111-.955-.045-.085-.154-.135-.322-.184z" />
      </svg>
    ),
  },
  {
    href: 'https://www.snapchat.com/add/nilegt?share_id=5DflIZ9EjJw&locale=en-GB',
    iconClass: 'ic-sc',
    label: 'Snapchat',
    sub: '@nilegt',
    delay: '0.34s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFC00">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.15 11.5c.265 0 .48.214.48.478 0 .264-.215.478-.48.478-.264 0-.48-.214-.48-.478 0-.264.216-.478.48-.478zM6.85 11.5c.265 0 .48.214.48.478 0 .264-.215.478-.48.478-.264 0-.48-.214-.48-.478 0-.264.216-.478.48-.478zm3.71 6.11c-1.006 1.185-2.475 1.885-4.095 1.885-.503 0-.908-.408-.908-.91 0-.483.386-.88.86-.906.152 0 .305-.01.456-.027.456-.045.89-.16 1.284-.35.363-.175.703-.41 1.01-.695.263-.243.48-.526.648-.835.084-.155.157-.316.22-.48.132.143.32.26.54.26.26 0 .477-.182.537-.427.028-.113.045-.228.052-.344.035-.525.232-1.015.57-1.41.34-.398.8-.7 1.32-.865.232-.07.468-.102.707-.102.24 0 .475.032.707.102.52.165.98.467 1.32.865.337.395.535.885.569 1.41.008.116.024.231.052.344.06.245.277.427.538.427.22 0 .408-.117.54-.26.063.164.136.325.22.48.168.31.385.592.648.835.307.285.648.52 1.01.695.394.19.828.305 1.284.35.151.017.304.027.456.027.473.026.86.423.86.906 0 .502-.405.91-.908.91-1.62 0-3.09-.7-4.095-1.885z" />
      </svg>
    ),
  },
  {
    href: 'tel:+251913678845',
    iconClass: 'ic-phone',
    label: 'Call Me',
    sub: '+251 913 678 845',
    delay: '0.37s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    href: 'mailto:naolgonfa39@gmail.com',
    iconClass: 'ic-mail',
    label: 'Email Me',
    sub: 'naolgonfa39@gmail.com',
    delay: '0.40s',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C6FFF" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
]

const skills = ['React', 'Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'Cypress', 'Postman', 'Git & GitHub', 'REST APIs', 'QA Testing', 'Tailwind CSS', 'Flask']

const iconBg = {
  'ic-tg': 'rgba(37,211,255,0.12)',
  'ic-ig': 'rgba(225,48,108,0.12)',
  'ic-li': 'rgba(10,102,194,0.12)',
  'ic-gh': 'rgba(255,255,255,0.08)',
  'ic-lc': 'rgba(255,161,22,0.12)',
  'ic-web': 'rgba(0,212,255,0.1)',
  'ic-so': 'rgba(244,128,36,0.12)',
  'ic-mail': 'rgba(124,111,255,0.12)',
  'ic-yt': 'rgba(255,0,0,0.12)',
  'ic-wa': 'rgba(37,211,102,0.12)',
  'ic-sc': 'rgba(255,252,0,0.12)',
  'ic-phone': 'rgba(0,212,255,0.1)',
}

export default function App() {
  return (
    <div
      className="relative z-10 flex justify-center items-start min-h-screen px-5 pt-12 pb-16"
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      <div
        className="w-full max-w-[480px] flex flex-col items-center"
        style={{ animation: 'containerFade 0.6s ease' }}
      >
        {/* Avatar */}
        <div className="relative mb-5">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-[2.6rem] font-bold border-[3px]"
            style={{
              background: 'linear-gradient(135deg,#00D4FF 0%,#7C6FFF 100%)',
              color: '#08091A',
              borderColor: 'rgba(0,212,255,0.35)',
              boxShadow: '0 0 32px rgba(0,212,255,0.2)',
              animation: 'avatarFloat 3s ease-in-out infinite',
            }}
          >
            NG
          </div>
          <div
            className="absolute bottom-1 right-1 w-[18px] h-[18px] bg-green-500 rounded-full border-[3px]"
            style={{ borderColor: '#08091A', animation: 'pulse-dot 2.5s ease-in-out infinite' }}
          />
        </div>

        {/* Name */}
        <h1
          className="text-[1.7rem] font-bold tracking-tight text-center mb-1 cursor-default transition-all"
          style={{ color: '#E8EEFF' }}
        >
          Naol <span style={{ color: '#00D4FF' }}>Gonfa</span>
        </h1>

        <p className="text-center text-sm mb-3" style={{ color: '#7A85AA', fontFamily: '"JetBrains Mono", monospace' }}>
          Local name: <strong style={{ color: '#00D4FF' }}>nilegt</strong>
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="badge font-mono text-[0.72rem] px-3 py-1 rounded-full border" style={{ color: '#00D4FF', background: 'rgba(0,212,255,0.06)', borderColor: 'rgba(0,212,255,0.13)' }}>Full Stack Developer</span>
          <span className="badge font-mono text-[0.72rem] px-3 py-1 rounded-full border" style={{ color: '#7C6FFF', background: 'rgba(124,111,255,0.07)', borderColor: 'rgba(124,111,255,0.2)' }}>QA Engineer</span>
          <span className="badge font-mono text-[0.72rem] px-3 py-1 rounded-full border" style={{ color: '#22C55E', background: 'rgba(34,197,94,0.07)', borderColor: 'rgba(34,197,94,0.2)' }}>Open to Work</span>
        </div>

        {/* Bio */}
        <p className="bio text-center text-[0.9rem] leading-[1.7] max-w-[400px] mb-6 px-2" style={{ color: '#7A85AA' }}>
          3rd Year <strong>Computer Science Student</strong> at <strong>Haramaya University</strong>, Ethiopia 🇪🇹<br /><br />
          <strong>Full Stack Developer</strong> & <strong>QA Engineer</strong> building scalable web applications and reliable software systems.<br /><br />
          Specialized in production-level development with modern JavaScript & Python ecosystems. Experienced in third-party API integrations (Stripe, Firebase) and Agile team collaboration with up to 11 developers. Actively seeking remote internship or junior developer opportunities.<br /><br />
          <strong>Join my Telegram channel</strong> for tech insights, career tips, and learning resources. 📢<br /><br />
          <strong>10+ projects shipped.</strong> Consistency builds mastery.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-[0.4rem] mb-8">
          {skills.map((s, i) => (
            <span
              key={s}
              className="skill-pill font-mono text-[0.68rem] px-3 py-1 rounded border"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.08)',
                color: '#7A85AA',
                animationDelay: `${0.1 + i * 0.05}s`,
                opacity: 0,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="divider w-full flex items-center gap-3 mb-5 transition-all"
          style={{ '--divider-color': 'rgba(0,212,255,0.13)' }}
        >
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.13)', transition: 'background 0.3s' }} />
          <span className="font-mono text-[0.7rem] tracking-widest whitespace-nowrap" style={{ color: '#7A85AA' }}>// find me here</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,212,255,0.13)', transition: 'background 0.3s' }} />
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map(({ href, iconClass, label, sub, delay, icon }) => (
            <a
              key={href + label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="link-card flex items-center gap-4 px-5 py-4 rounded-[14px] no-underline font-semibold text-[0.95rem] relative overflow-hidden border"
              style={{
                background: '#0F1629',
                borderColor: 'rgba(0,212,255,0.13)',
                color: '#E8EEFF',
                animationDelay: delay,
              }}
            >
              <div
                className="link-icon w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-[1.3rem] shrink-0 transition-all"
                style={{ background: iconBg[iconClass] }}
              >
                {icon}
              </div>
              <div className="flex-1">
                <span className="link-label block text-[0.95rem] font-semibold transition-all">{label}</span>
                <span className="link-sub block text-[0.76rem] font-normal mt-[0.1rem] transition-all" style={{ color: '#7A85AA' }}>{sub}</span>
              </div>
              <span className="arrow text-[1.1rem] transition-all" style={{ color: '#7A85AA' }}>›</span>
            </a>
          ))}
        </div>

        {/* Quote */}
        <p
          className="mt-8 text-center text-[0.78rem] leading-[1.7] px-4 transition-all"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#7A85AA', animation: 'fadeInQuote 0.8s ease 0.5s both' }}
        >
          <em style={{ fontStyle: 'italic', color: 'rgba(0,212,255,0.6)' }}>"Consistency builds mastery."</em><br />
          Built with React · Tailwind CSS &nbsp;·&nbsp; © 2025 Naol Gonfa
        </p>
      </div>
    </div>
  )
}
