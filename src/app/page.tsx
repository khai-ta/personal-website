'use client';

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // CURSOR
    const cur = document.getElementById('cur');
    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      if (cur) {
        cur.style.left = mx + 'px';
        cur.style.top = my + 'px';
      }
    });


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
          <a href="mailto:kqt5461@psu.edu" className="clink">kqt5461@psu.edu</a>
          <a href="https://github.com/khai-ta" target="_blank" rel="noopener noreferrer" className="clink">github.com/khai-ta</a>
          <a href="https://linkedin.com/in/khai-ta" target="_blank" rel="noopener noreferrer" className="clink">linkedin.com/in/khai-ta</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{justifyContent: 'center'}}>
        <span className="fm">KHAI TA</span>
      </footer>
    </main>
  )
}
