import profile from '../assets/photo.jpg';

function Hero() {
  return (
    <section>
      <div className="details">
        <div className="info-container">
          <div>
            <div className="hi">Hi, I'm</div>
            <p className="name">Raksha Sinha</p>
          </div>
          <div className="role">
            <p className="typing-text">An Aspiring Software Developer</p>
          </div>
          <div className="social-links">
            <br />
            <div className="download">
              <div className="resume button">
                <i className="fa-solid fa-file-arrow-down"></i>
                <h5>Resume</h5>
              </div>
              <a className="contact button" href="https://wa.me/918700475361" target="_blank" rel="noreferrer">
                <h5>Contact</h5>
              </a>
            </div>
            <div className="socials">
              <a className="fab fa-linkedin" href="https://www.linkedin.com/in/raksha-sinha-7771b8278/" target="_blank" rel="noreferrer"></a>
              <a className="fab fa-github" href="https://github.com/rakshasinha1908" target="_blank" rel="noreferrer"></a>
              <a className="fa-brands fa-square-x-twitter" href="https://x.com/rakshasinha__" target="_blank" rel="noreferrer"></a>
              <a className="fa-solid fa-envelope" href="mailto:rakshasinha1908@gmail.com" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
          <h3 className="quote"><em>Code with logic, design with love.</em></h3>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={profile} className="fit-image" alt="Raksha" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
