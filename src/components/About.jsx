function About() {
  return (
    <>
      <p className="about">// About Me</p>
      <section className="middle-part">
        <div className="center-section">
          <div className="mid-section">
            <div className="impressions">
              <div className="column">
                <h1>3+</h1>
                <p>Months</p>
              </div>
              <div className="column">
                <p>Industry</p>
                <p>Experience</p>
              </div>
            </div>
            <div className="impressions">
              <div className="column">
                <h1>1+</h1>
                <p>Years</p>
              </div>
              <div className="column">
                <p>Coding</p>
                <p>Experience</p>
              </div>
            </div>
            <div className="impressions">
              <div className="column">
                <h1>1+</h1>
              </div>
              <div className="column">
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="descp">
              <p className="name-detail">Raksha Sinha</p>
              <p className="student">Student</p>
              <div className="college-details">
                <p className="college">@ K.R. Mangalam University
                <p className="college">Gurugram, Haryana</p>
                <p className="branch">B.Tech CSE (AI & ML)</p>
                <p className="grad-year">Graduation: 2027</p>
                <p className="cgpa">CGPA: 7.86</p> 
              </p>
              </div>
            </div>

            <div>
              <div className="text-container">
                <p className="text">
                  I turn concepts into code and algorithms into experiences — building sleek interfaces and smart systems at the intersection of web and AI.
                </p>
              </div>

              <div className="focus">
                <div className="focus-box">
                  <div className="focus-text">
                    <i className="fa-solid fa-circle twinkle-icon"></i>
                    <p>Current Focus</p>
                  </div>
                  <p className="focus-small">
                    Building interactive full-stack projects infused with AI, combining clean design with purposeful functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
