import React from 'react';
import "../styles/PreFooter.css";
import "../styles/Footer.css";

const Footer = ({ footer }) => {
    const repeatIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
        </svg>
    );

    // Similarly, define other icons here...

    return (
        <>
            <div className="PreFooter">
                <div>
                    {repeatIcon}
                    <p><b>Hassle-free replacement</b><br />10-day easy replacement policy on mi.com</p>
                </div>
                <div>{/* shieldIcon and paragraph here... */}</div>
                <div>{/* mapIcon and paragraph here... */}</div>
            </div>
            <div className="PreFooter2">
                <div>
                    <p>LET'S STAY IN TOUCH</p>
                    <span>Get updates on sales specials and more</span>
                </div>
                <div>
                    <div>
                        <input type="email" name="email" placeholder="Enter Email Address" />
                        <button>›</button>
                    </div>
                    <span>Thanks. You're on our email list for special offers.</span>
                </div>
                <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
                </div>
                <div>
                    {/* Icons for social media here... */}
                </div>
            </div>
            <div className="footer">
                <div>
                    <p>SUPPORT</p>
                    {footer.support.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>SHOP AND LEARN</p>
                    {footer.shopAndLearn.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>RETAIL STORE</p>
                    {footer.retailStore.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>ABOUT</p>
                    {footer.aboutUS.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>CONTACT US</p>
                    {footer.contactUs.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
                    <button>CHAT NOW</button>
                </div>
            </div>
            <div className="footerBorder">
                <div>Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
            </div>
        </>
    );
};

export default Footer;
