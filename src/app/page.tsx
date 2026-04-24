'use client';

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // CURSOR - Only on devices with fine pointer (not touch)
    if (window.matchMedia("(pointer: fine)").matches) {
      const cur = document.getElementById('cur');
      let mx = 0, my = 0;

      const moveCursor = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        if (cur) {
          requestAnimationFrame(() => {
            cur.style.left = mx + 'px';
            cur.style.top = my + 'px';
          });
        }
      };

      document.addEventListener('mousemove', moveCursor);
      cleanups.push(() => document.removeEventListener('mousemove', moveCursor));
    }

    // REVEAL
    const obs = new IntersectionObserver(e => {
      e.forEach(x => {
        if (x.isIntersecting) {
          x.target.classList.add('v');
          obs.unobserve(x.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.r').forEach(el => obs.observe(el));
    cleanups.push(() => obs.disconnect());

    return () => cleanups.forEach(cleanup => cleanup());
  }, []);

  return (
    <main>
      <div id="cur"></div>

      <Header />
      <Hero />

      {/* NAMEPLATE */}
      <div className="nameplate r" id="about">
        <div className="np-name" id="np-name">KHAI TA</div>
        <div className="np-portrait"><span>PORTRAIT</span></div>
      </div>

      {/* MOMENTS SECTION */}
      <div className="strip">
        <div className="strip-item r r1"><span>PHOTO · MOMENT</span></div>
        <div className="strip-item r r2"><span>PHOTO · MOMENT</span></div>
        <div className="strip-item r r3"><span>PHOTO · MOMENT</span></div>
      </div>

      {/* EXPERIENCE & SKILLS */}
      <div className="index">
        <div className="idx-col" id="experience">
          <div className="idx-label r">Experience</div>
          <div className="idx-rows">
            <div className="idx-row r r1">
              <div>
                <div className="row-title">Lockheed Martin</div>
                <div className="row-sub">AI/ML Research Engineer Intern</div>
                <div className="row-year">May – Aug 2026</div>
              </div>
              <span className="row-arrow">↗</span>
            </div>
            <div className="idx-row r r2">
              <div>
                <div className="row-title">Lockheed Martin</div>
                <div className="row-sub">AI/ML Research Engineer Intern</div>
                <div className="row-year">Aug – Nov 2025</div>
              </div>
              <span className="row-arrow">↗</span>
            </div>
            <div className="idx-row r r3">
              <div>
                <div className="row-title">ACM @ Penn State</div>
                <div className="row-sub">Development Team Director</div>
                <div className="row-year">Mar 2026 – Present</div>
              </div>
              <span className="row-arrow">↗</span>
            </div>
            <div className="idx-row r r4">
              <div>
                <div className="row-title">HackPSU</div>
                <div className="row-sub">Full Stack Engineer</div>
                <div className="row-year">Aug 2024 – Present</div>
              </div>
              <span className="row-arrow">↗</span>
            </div>
            <div className="idx-row r">
              <div>
                <div className="row-title">Nittany AI</div>
                <div className="row-sub">Machine Learning Apprentice</div>
                <div className="row-year">Aug 2024 – May 2025</div>
              </div>
              <span className="row-arrow">↗</span>
            </div>
          </div>
        </div>

        <div className="idx-col">
          <div className="idx-label r">Skills</div>
          <div className="skill-block r r1">
            <div className="skill-row">Python · PyTorch · TensorFlow · OpenCV · Hugging Face</div>
            <div className="skill-row">TypeScript · React · Next.js · NestJS · Node</div>
            <div className="skill-row">Swift · Core ML · Docker · GCP · MySQL</div>
            <div className="skill-row">LangGraph · Pinecone · Neo4j · DSPy</div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="proj-section">
        <div className="proj-header r">
          <span className="sec-label">Selected Projects</span>
        </div>
        <div className="proj-rows">
          <div className="proj-row r r1">
            <span className="pn">01</span>
            <div className="pt">Siren</div>
            <div>
              <div className="pd">Autonomous Incident Investigation</div>
              <div className="ptk">LangGraph · Claude · Pinecone · Neo4j · DSPy</div>
            </div>
            <span className="py">APR 2026</span>
            <div className="pa">↗</div>
          </div>
          <div className="proj-row r r2">
            <span className="pn">02</span>
            <div className="pt">Surviv</div>
            <div>
              <div className="pd">Offline Emergency Mesh Network iOS App</div>
              <div className="ptk">Swift · PyTorch · Core ML · MapKit · MultipeerConnectivity</div>
            </div>
            <span className="py">MAR 2026</span>
            <div className="pa">↗</div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact">
        <div className="contact-links r">
          <a href="mailto:kqt5461@psu.edu" className="clink">✉ kqt5461@psu.edu</a>
          <a href="https://github.com/khai-ta" target="_blank" rel="noopener noreferrer" className="clink">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom'}}>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            github.com/khai-ta
          </a>
          <a href="https://linkedin.com/in/khai-ta" target="_blank" rel="noopener noreferrer" className="clink">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom'}}>
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            linkedin.com/in/khai-ta
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{justifyContent: 'center'}}>
        <span className="fm">KHAI TA</span>
      </footer>
    </main>
  )
}
