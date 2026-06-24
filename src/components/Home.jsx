import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
"Python Developer",
"Web Developer",
"AI Software Developer"
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-indigo-50 text-gray-900 px-8"
    >
      {/* Avatar */}
      <div className="mb-6 w-28 h-28 rounded-full bg-indigo-200 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
        {/* Replace the div below with <img src="your-photo.jpg" alt="Nidha Kadheeja" className="w-full h-full object-cover" /> */}
        <span className="text-4xl font-bold text-indigo-600 select-none">NK</span>
      </div>

      {/* Name */}
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
        Nidha Kadheeja
      </h1>

      {/* Typed role */}
      <div className="mt-4 h-9 flex items-center justify-center">
        <h2 className="text-xl sm:text-2xl font-medium text-indigo-600">
          {displayed}
          <span className="inline-block w-0.5 h-6 bg-indigo-500 ml-0.5 animate-pulse align-middle" />
        </h2>
      </div>

      {/* Tagline */}
      <p className="mt-5 max-w-lg text-gray-600 text-base sm:text-lg leading-relaxed">
        I build full-stack web apps with Python, Flask, and React — with a
        strong interest in AI-powered products. CGPA 8.45 · Based in Calicut,
        Kerala.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <a
          href="#projects"
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
        >
          View Projects
        </a>
        
      </div>

      {/* Social links */}
      <div className="mt-6 flex gap-5 text-gray-500">
        <a
          href="https://github.com/nidhakadheeja"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-900 transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
        <a
          href="http://linkedin.com/in/nidha-kadheeja"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-5 6.5a2.5 2.5 0 0 0-2.5 2.5V17h2v-5a.5.5 0 0 1 1 0v5h2v-5A2.5 2.5 0 0 0 14 9.5zM8 10H6v7h2v-7zm-1-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </a>
        <a
          href="mailto:nidhakadheeja8089@gmail.com"
          className="hover:text-red-500 transition-colors"
          aria-label="Email"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1 text-gray-400 text-xs animate-bounce">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        scroll
      </div>
    </section>
  );
}

export default Home;