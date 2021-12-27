import React from 'react';
import './PostAbout.css';

export function PostAbout() {
    return (
        <section id="about-cristina">
            <h2 className="block-title underline">About Cristina</h2>
            <div>
                <b>Cristina Ruth</b> is a Software Engineering leader at CUNA Mutual Group in Madison, WI, where she manages 4 scrum teams to deliver software in the FinTech space. In her day-to-day leadership role, Cristina values culture, trust, team enablement, team empowerment and high-quality, operationally stable software delivery.
          </div>
            <div class="social">
                {/* <a href="/contact"><span class="fa fa-envelope" aria-hidden="true"></span><span class="screen-reader-text">Contact</span></a> */}
                <a href="https://www.linkedin.com/in/cristinaruth/" target="_blank" rel="noopener"><span class="fab fa-linkedin" aria-hidden="true"></span><span class="screen-reader-text">LinkedIn</span></a>
                <a href="https://github.com/CristinaRuth" target="_blank" rel="noopener"><span class="fab fa-github" aria-hidden="true"></span><span class="screen-reader-text">GitHub</span></a>
            </div>
        </section>
    );
}