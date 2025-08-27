

import { motion } from "framer-motion";
import profile from "../assets/photo.jpg";

function Hero() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section>
      <div className="details">
        <motion.div
          className="info-container"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item}>
            <div className="hi">Hi, I'm</div>
            <p className="name">Raksha Sinha</p>
          </motion.div>

          <motion.div className="role" variants={item}>
            <p className="typing-text">An Aspiring Software Developer</p>
          </motion.div>

          <motion.div className="social-links" variants={item}>
            <br />
            <div className="download">
              <motion.a
                href="/Raksha_Sinha_Resume.pdf"
                download
                className="resume button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fa-solid fa-file-arrow-down"></i>
                <h5>Resume</h5>
              </motion.a>

              <motion.a
                className="contact button"
                href="https://wa.me/918700475361"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h5>Contact</h5>
              </motion.a>
            </div>

            <motion.div
              className="socials"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  icon: "fab fa-linkedin",
                  link: "https://www.linkedin.com/in/raksha-sinha-7771b8278/",
                },
                {
                  icon: "fab fa-github",
                  link: "https://github.com/rakshasinha1908",
                },
                {
                  icon: "fa-brands fa-square-x-twitter",
                  link: "https://x.com/rakshasinha__",
                },
                {
                  icon: "fa-solid fa-envelope",
                  link: "mailto:rakshasinha1908@gmail.com",
                },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className={s.icon}
                  variants={item}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.h3 className="quote" variants={item}>
            <em>Code with logic, design with love.</em>
          </motion.h3>
        </motion.div>

        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="image"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img src={profile} className="fit-image" alt="Raksha" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
