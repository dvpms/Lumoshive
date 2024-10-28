const Team = () => {
  return (
    <>
    <section className="team-section">
      <div className="team-header">
        <h2>
          <span className="highlight">Team</span>
        </h2>
        <h3>Our Leaders</h3>
      </div>

      <div className="team-container">
        <div className="team-card">
          <img
            src="https://picsum.photos/200?random=1"
            alt="Larry F. Burnett"
          />
          <h4>Larry F. Burnett</h4>
          <p>CEO</p>
        </div>

        <div className="team-card">
          <img
            src="https://picsum.photos/200?random=2"
            alt="Meghan J. Webb"
          />
          <h4>Meghan J. Webb</h4>
          <p>CTO</p>
        </div>

        <div className="team-card">
          <img
            src="https://picsum.photos/200?random=3"
            alt="Yvonne J. Cullum"
          />
          <h4>Yvonne J. Cullum</h4>
          <p>CFO</p>
        </div>

        <div className="team-card">
          <img
            src="https://picsum.photos/200?random=4"
            alt="Diana H. Williams"
          />
          <h4>Diana H. Williams</h4>
          <p>COO</p>
        </div>

        <div className="team-card">
          <img
            src="https://picsum.photos/200?random=5"
            alt="Larry F. Burnett"
          />
          <h4>Larry F. Burnett</h4>
          <p>CEO</p>
        </div>

        <div className="team-card">
          <img
            src="https://picsum.photos/200?random=6"
            alt="Meghan J. Webb"
          />
          <h4>Meghan J. Webb</h4>
          <p>CTO</p>
        </div>

        <div className="team-card">
          <img
            src="https://picsum.photos/200?random=7"
            alt="Yvonne J. Cullum"
          />
          <h4>Yvonne J. Cullum</h4>
          <p>CFO</p>
        </div>

        <div className="team-card">
          <img
            src="https://picsum.photos/200?random=8"
            alt="Diana H. Williams"
          />
          <h4>Diana H. Williams</h4>
          <p>COO</p>
        </div>
      </div>
    </section>

    <section className="quote-section">
      <div className="quote-container">
        <blockquote>
          “Some of the History of Our Company is that we are Catching up
          through Video”
        </blockquote>
        <a href="#" className="btn-contact">
          Get In Touch
        </a>
      </div>
    </section>
    </>
  );
};

export default Team;

