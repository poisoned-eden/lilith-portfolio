import React from 'react';
import emailLogo from '../../assets/images/email-logo.png';
import phoneLogo from '../../assets/images/phone-call.png';
import githubLogo from '../../assets/images/github-mark.png';

export default function Contact() {
    return (
        <article id="contact-me">
            <div class="article-heading"><h2>Contact Me</h2></div>
            <address class="content">
                <div>
                    <img src={emailLogo} alt="" />
                    <a href="mailto:dev@lilithmf.com">dev@lilithmf.com</a>
                </div>
                
                <div>
                    <img src={phoneLogo} alt="" />
                    <a href="tel:+447557911251">
                        +44 7557 911 251
                    </a>
                </div>
                <div>
                    <img src={githubLogo} alt="" />
                    <a href="https://github.com/poisoned-eden">
                        github.com/poisoned-eden
                    </a>
                </div>
            </address>
        </article>
    );
}
