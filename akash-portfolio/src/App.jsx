import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const profile = {
  name: "Akash More",
  role: "Aspiring Full-Stack Developer",
  email: "akashmore2042003@gmail.com",
  phone: "7028247582",
  location: "Satara, India",
  github: "https://github.com/devakashmore",
  linkedin: "https://linkedin.com/in/akash-a-more",
  portfolio: "https://portfolio-six-liard-61.vercel.app",
};

const skills = [
  ["JavaScript", "Language"],
  ["Java", "Language"],
  ["React.js", "Frontend"],
  ["HTML5 / CSS3", "Frontend"],
  ["Tailwind CSS", "Frontend"],
  ["Bootstrap", "Frontend"],
  ["Node.js", "Backend"],
  ["Express.js", "Backend"],
  ["REST APIs", "Backend"],
  ["JWT Auth", "Security"],
  ["MongoDB", "Database"],
  ["PostgreSQL", "Database"],
  ["Git / GitHub", "Tools"],
  ["Postman", "Tools"],
  ["Core Java", "Java"],
  ["OOP / Collections", "Java"],
  // ["JDBC", "Java"],
  // ["Multithreading", "Java"],
];

const projects = [
  {
    number: "01",
    title: "DevFlow AI",
    type: "AI-Powered Developer Collaboration Platform",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
    description:
      "A full-stack collaboration platform with secure authentication, project and task management, protected APIs, role-based access control, and AI-assisted development features.",
    href: "https://devflow-ai-snowy.vercel.app/",
    status: "ONGOING",
  },
  {
    number: "02",
    title: "Blog Application",
    type: "Responsive Full-Stack Blog",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "Appwrite"],
    description:
      "A responsive blog platform with Appwrite authentication, database and storage, complete CRUD operations, reusable React components, image uploads, validation, loading states and error handling.",
    href: "#",
    status: "COMPLETED",
  },
];

const experience = {
  company: "Sit Solutions",
  role: "Intern Software Developer",
  date: "08/2025 — 01/2026",
  location: "Pune, Maharashtra",
  bullets: [
    "Contributed to a Banking Management System using PHP, Laravel, JavaScript and MySQL.",
    "Assisted with frontend and backend modules based on application requirements.",
    "Debugged and resolved application issues to improve functionality and reliability.",
    "Worked with senior developers to implement new features and maintain existing functionality.",
    "Gained hands-on experience with MVC architecture, JavaScript and MySQL.",
  ],
};

const education = [
  {
    degree: "M.Sc. in Computer Science",
    school: "Asian College of Science and Commerce, Pune",
    score: "CGPA 8.07",
    date: "2024 — 2026",
    location: "Pune, Maharashtra",
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "YCIS, Satara",
    score: "CGPA 8.9",
    date: "2021 — 2024",
    location: "Satara, Maharashtra",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 border-b-2 border-black pb-2">
      <span className="text-[10px] font-black uppercase tracking-[0.25em]">{children}</span>
      <span className="h-2 w-2 rounded-full bg-black" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["about", "About"],
    ["skills", "Skills"],
    ["work", "Work"],
    ["education", "Education"],
    ["contact", "Contact"],
  ];

  return (
    <main className="min-h-screen px-3 py-4 sm:px-6 sm:py-8 lg:px-10">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-[#f8f7f2] shadow-[0_30px_100px_rgba(0,0,0,.35)] paper-grid">
        {/* Header */}
        <header className="border-b-2 border-black bg-white/90 px-5 py-4 backdrop-blur sm:px-8">
          <div className="flex items-center justify-between">
            <a href="#top" className="group flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border-2  border-black bg-black  text-sm font-black text-white transition group-hover:rotate-6">
                AM
              </span>
              <div>
                <p className="text-sm font-black tracking-tight">AKASH MORE</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Full-Stack Developer
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-5 md:flex">
              {nav.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-[10px] font-black uppercase tracking-wider transition hover:underline"
                >
                  {label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border-2 border-black bg-black px-4 py-2 text-[10px] font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5"
              >
                Let's talk
              </a>
            </nav>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-black md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="mt-4 grid gap-2 border-t-2 border-black pt-4 md:hidden">
              {nav.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-xs font-black uppercase tracking-wider hover:bg-black hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </header>

        {/* Hero / ID card */}
        <section id="top" className="grid lg:grid-cols-[1.1fr_.9fr]">
          <div className="border-b-2 border-black p-6 sm:p-9 lg:border-r-2 lg:border-b-0 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-8 flex items-start justify-between gap-5"
            >
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-black text-3xl font-black text-white shadow-[7px_7px_0_#fff,8px_8px_0_#111] sm:h-36 sm:w-36 sm:text-4xl">
                AM
                {/* <img src="/Akash.jpeg" alt="" srcset="" className="grid place-items-center font-black text-white transition h-35 w-35 rounded-2xl group-hover:rotate-6" /> */}
              </div>

              <div className="min-w-0">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                  Portfolio / 2026
                </p>
                <h1 className="text-4xl font-black leading-[.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  AKASH
                  <br />
                  MORE<span className="text-neutral-400">.</span>
                </h1>
              </div>
            </motion.div>

            <div className="grid gap-1 border-y-2 border-black py-4 text-[11px] font-bold sm:grid-cols-2">
              <p><span className="text-neutral-400">ROLE ........ </span>FULL-STACK DEVELOPER</p>
              <p><span className="text-neutral-400">BASE ........ </span>PUNE / SATARA, INDIA</p>
              <p><span className="text-neutral-400">FOCUS ....... </span>WEB APPLICATIONS</p>
              <p><span className="text-neutral-400">STACK ....... </span>REACT + NODE + DB</p>
            </div>

            <p className="mt-7 max-w-2xl text-sm font-medium leading-6 text-neutral-700 sm:text-base">
              Aspiring Full-Stack Developer building responsive web applications with
              React.js, JavaScript, Node.js, Express.js, MongoDB and PostgreSQL, with a
              strong foundation in Java, REST APIs and JWT authentication.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:scale-[1.02]"
              >
                <Mail size={15} /> Contact me
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black px-5 py-3 text-xs font-black uppercase tracking-wider transition hover:bg-black hover:text-white"
              >
                <Github size={15} /> GitHub
              </a>
              {/* <a
                href="/Akash-More-Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border-2 border-black px-5 py-3 text-xs font-black uppercase tracking-wider transition hover:bg-black hover:text-white"
              >
                <Download size={15} /> Resume
              </a> */}
            </div>
          </div>

          <div className="bg-black p-6 text-white sm:p-9 lg:p-12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400">
                  CURRENT STATUS
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-white" />
                  <span className="text-lg font-black">OPEN TO OPPORTUNITIES</span>
                </div>
                <p className="mt-4 max-w-md text-sm leading-6 text-neutral-300">
                  Looking for an entry-level software developer role where I can build
                  scalable applications, solve real problems and keep learning.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/30 p-4 transition hover:bg-white hover:text-black"
                >
                  <Linkedin size={18} />
                  <p className="mt-8 text-xs font-black">LINKEDIN</p>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/30 p-4 transition hover:bg-white hover:text-black"
                >
                  <Github size={18} />
                  <p className="mt-8 text-xs font-black">GITHUB</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-b-2 border-black bg-white py-3">
          <div className="marquee flex w-max gap-8 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em]">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                React.js ✦ Node.js ✦ Express.js ✦ PostgreSQL ✦ MongoDB ✦ Java ✦ Tailwind CSS ✦ JWT ✦ REST APIs ✦
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section id="about" className="grid border-b-2 border-black lg:grid-cols-[.35fr_1fr]">
          <div className="border-b-2 border-black p-6 sm:p-9 lg:border-r-2 lg:border-b-0">
            <SectionLabel>01 / About</SectionLabel>
            <div className="mt-6 text-6xl font-black leading-none">01</div>
            <p className="mt-3 text-xs font-bold text-neutral-500">PROFILE / INTRO</p>
          </div>
          <div className="p-6 sm:p-9 lg:p-12">
            <p className="max-w-3xl text-xl font-black leading-tight tracking-tight sm:text-3xl">
              I build clean, responsive and practical web experiences — from polished
              React interfaces to secure backend APIs and database-driven applications.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [Code2, "Frontend", "React, JS, HTML, CSS, Tailwind"],
                [BriefcaseBusiness, "Backend", "Node, Express, REST, JWT"],
                [Sparkles, "Problem Solving", "Java, OOP, APIs, databases"],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl border-2 border-black bg-white p-4">
                  <Icon size={20} />
                  <h3 className="mt-6 text-sm font-black uppercase">{title}</h3>
                  <p className="mt-2 text-xs font-medium leading-5 text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="grid border-b-2 border-black lg:grid-cols-[.35fr_1fr]">
          <div className="border-b-2 border-black p-6 sm:p-9 lg:border-r-2 lg:border-b-0">
            <SectionLabel>02 / Skills</SectionLabel>
            <div className="mt-6 text-6xl font-black leading-none">18</div>
            <p className="mt-3 text-xs font-bold text-neutral-500">TECHNOLOGIES / TOOLS</p>
          </div>
          <div className="p-6 sm:p-9 lg:p-12">
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {skills.map(([name, group], i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.025 }}
                  className="group flex items-center justify-between rounded-xl border-2 border-black bg-white px-4 py-3"
                >
                  <div>
                    <p className="text-xs font-black">{name}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-neutral-400">{group}</p>
                  </div>
                  <CheckCircle2 size={16} className="opacity-20 transition group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="work" className="grid border-b-2 border-black lg:grid-cols-[.35fr_1fr]">
          <div className="border-b-2 border-black p-6 sm:p-9 lg:border-r-2 lg:border-b-0">
            <SectionLabel>03 / Experience</SectionLabel>
            <div className="mt-6 text-6xl font-black leading-none">01</div>
            <p className="mt-3 text-xs font-bold text-neutral-500">PROFESSIONAL ROLE</p>
          </div>
          <div className="p-6 sm:p-9 lg:p-12">
            <div className="flex flex-col justify-between gap-4 border-b-2 border-black pb-5 sm:flex-row">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                  {experience.date}
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">
                  {experience.role}
                </h2>
                <p className="mt-1 text-sm font-bold">{experience.company}</p>
              </div>
              <p className="flex items-center gap-1 text-xs font-bold text-neutral-500">
                <MapPin size={13} /> {experience.location}
              </p>
            </div>

            <ul className="mt-6 space-y-4">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-neutral-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="border-b-2 border-black">
          <div className="p-6 sm:p-9 lg:p-12">
            <SectionLabel>04 / Selected Projects</SectionLabel>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -5 }}
                  className="relative overflow-hidden rounded-3xl border-2 border-black bg-white p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-black tracking-[-0.08em]">{project.number}</span>
                    <span className="rounded-full border-2 border-black px-3 py-1 text-[9px] font-black">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-8 text-3xl font-black tracking-tight">{project.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-neutral-500">
                    {project.type}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-neutral-600">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-black px-3 py-1 text-[9px] font-black text-white">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.href !== "#" && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase underline underline-offset-4"
                    >
                      View project <ExternalLink size={14} />
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="grid border-b-2 border-black lg:grid-cols-[.35fr_1fr]">
          <div className="border-b-2 border-black p-6 sm:p-9 lg:border-r-2 lg:border-b-0">
            <SectionLabel>05 / Education</SectionLabel>
            <GraduationCap className="mt-7" size={44} />
          </div>
          <div className="grid sm:grid-cols-2">
            {education.map((item, i) => (
              <div
                key={item.degree}
                className={`p-6 sm:p-9 ${i === 0 ? "border-b-2 sm:border-r-2 lg:border-b-0" : ""}`}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                  {item.date}
                </p>
                <h3 className="mt-5 text-xl font-black leading-tight">{item.degree}</h3>
                <p className="mt-2 text-sm font-bold">{item.school}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border-2 border-black px-3 py-1 text-[9px] font-black">{item.score}</span>
                  <span className="rounded-full border-2 border-black px-3 py-1 text-[9px] font-black">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="grid bg-black text-white lg:grid-cols-[.55fr_1fr]">
          <div className="border-b border-white/20 p-6 sm:p-9 lg:border-r lg:border-b-0 lg:p-12">
            <SectionLabel>06 / Contact</SectionLabel>
            <h2 className="mt-8 text-5xl font-black leading-[.9] tracking-[-0.06em] sm:text-7xl">
              LET'S
              <br />
              BUILD.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-neutral-300">
              Have a project, internship or developer opportunity? Let's connect and
              build something useful.
            </p>
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <div className="grid gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between rounded-2xl border border-white/20 p-5 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-3 text-sm font-bold">
                  <Mail size={18} /> {profile.email}
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center justify-between rounded-2xl border border-white/20 p-5 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-3 text-sm font-bold">
                  <Phone size={18} /> {profile.phone}
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/20 p-5 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-3 text-sm font-bold">
                  <Github size={18} /> github.com/devakashmore
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/20 p-5 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-3 text-sm font-bold">
                  <Linkedin size={18} /> linkedin.com/in/akash-a-more
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-[1fr_110px] gap-4 border-t border-white/20 pt-5">
              {/* <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">REFERENCE NO.</p>
                <p className="mt-2 font-mono text-lg font-black">AM-2026-001</p>
              </div> */}
              <div className="barcode h-10 self-end bg-white" />
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t-2 border-black bg-white px-5 py-5 text-[9px] font-black uppercase tracking-[0.15em] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Akash More</span>
          <span>Designed as a personal developer identity card</span>
          <a href="#top" className="underline underline-offset-4">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}

export default App;