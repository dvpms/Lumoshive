import aboutimg from "../assets/about-img.png";
const About = () => {
  return (
    <>
      <section class="about-section">
        <div class="about-header">
          <h1>About</h1>
          <nav class="breadcrumb">
            <a href="#">Home</a> / <span>About</span>
          </nav>
        </div>

        <div class="about-container">
          <div class="about-image">
            <img src={aboutimg} alt="About Image" />
          </div>
          <div class="about-content">
            <h2>
              <span class="highlight">About us</span>
            </h2>
            <h3>One of the Fastest Way to Business Growth</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'.
            </p>
            <div class="contact-box">
              <img src="https://via.placeholder.com/40" alt="Contact Icon" />
              <div class="contact-info">
                <p>Get Instant Professional Advice</p>
                <span>
                  Ready to Help: <strong>+356 678 7897</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;