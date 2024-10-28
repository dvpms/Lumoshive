import ReactLogo from "../assets/react.svg";
import WixLogo from "../assets/wix.svg";
import WordpressLogo from "../assets/wordpress.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at.
          </p>
          <div className="social-icons">
            <div className="social-logo-container">
              <a href="#">
                <i className="bi bi-linkedin social-logo"></i>
              </a>
            </div>
            <div className="social-logo-container">
              <a href="#">
                <i className="bi bi-instagram social-logo"></i>
              </a>
            </div>
            <div className="social-logo-container">
              <a href="#">
                <i className="bi bi-facebook social-logo"></i>
              </a>
            </div>
            <div className="social-logo-container">
              <a href="#">
                <i className="bi bi-twitter social-logo"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-services">
          <h4>Services</h4>
          
          <ul>
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        {/* Career Section */}
        <div className="footer-career">
            <h4>Career</h4>
            <ul className="career-list">
                <li className="career-item">
                    <div className="career-logo-container">
                        <img src={ReactLogo} alt="ReactJs Logo" className="career-logo" />
                    </div>
                    <div className="career-details">
                        <span>ReactJs Dev.</span>
                        <span>1-5 Years of Exp.</span>
                    </div>
                </li>
                <li className="career-item">
                    <div className="career-logo-container">
                        <img src={WordpressLogo} alt="WordPress Logo" className="career-logo" />
                    </div>
                    <div className="career-details">
                        <span>WordPress Dev.</span>
                        <span>1-5 Years of Exp.</span>
                    </div>
                </li>
                <li className="career-item">
                    <div className="career-logo-container">
                        <img src={WixLogo} alt="Wix Logo" className="career-logo" />
                    </div>
                    <div className="career-details">
                        <span>Python Developer</span>
                        <span>1-5 Years of Exp.</span>
                    </div>
                </li>
            </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h4>Subscribe Us</h4>
          
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at.
          </p>
          <input type="email" placeholder="Email" className="email-input" />
          <button className="btn-submit">Submit</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
