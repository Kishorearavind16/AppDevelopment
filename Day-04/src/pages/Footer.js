import React from "react";
import '../assets/css/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Address</h3>
          <p>139, nehru street<br />Coimbatore, Tamil Nadu<br />641035</p>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: woodenarts@gmail.com<br />Phone: +91 98456 67346</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.whatsapp.com/">
              <WhatsAppIcon />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;