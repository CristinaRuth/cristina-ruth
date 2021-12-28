import React from 'react';
import './PostAbout.css';

export function PostAbout() {
    return (
        <section id="about-cristina">
            <h2 className="block-title underline">About Cristina</h2>
            <div>
                <p>I'm currently a Software Engineering Manager at CUNA Mutual Group in Madison, WI, where I manage 4 development teams to deliver software in the FinTech space. I've only started the role back in June 2021, so it's a learning process on how to be a good leader. Through my previous experience leading 1 team through similar work, I've grown to value trust, culture, enablement, empowerment and high-quality software.</p>
          </div>
            <div class="social">
                {/* <a href="/contact"><span class="fa fa-envelope" aria-hidden="true"></span><span class="screen-reader-text">Contact</span></a> */}
                <a href="https://www.linkedin.com/in/cristinaruth/" target="_blank" rel="noopener"><span class="fab fa-linkedin" aria-hidden="true"></span><span class="screen-reader-text">LinkedIn</span></a>
                <a href="https://github.com/CristinaRuth" target="_blank" rel="noopener"><span class="fab fa-github" aria-hidden="true"></span><span class="screen-reader-text">GitHub</span></a>
            </div>
        </section>
    );
}