import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";

function About() {
  return (
    <section className="about-section">
      
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">// About Me</h1>
          Hey there, I’m Raksha Sinha — a Computer Science undergrad exploring AI & ML while building smart, dynamic web apps. <br></br>
          <br></br>
          Over the past year, I’ve honed my frontend and backend skills, and now I’m blending them with AI to create projects that truly wow. <br></br>
          <br></br>
          Most days, I’m deep in code with my go-to fuel: chai + music ☕🎧. I learn best by building—curiosity always pulls me under the hood.<br></br>
          <br></br>
          When I’m not in dev mode, I’m reading, experimenting in the kitchen, or chasing ideas that keep life fun and balanced. <br></br>
        </div>

        {/* Right side animation */}
        <div className="about-animation">
          <Lottie animationData={codingAnimation} loop={true} className="animation-lottie" />
        </div>
      </div>
    </section>
  );
}

export default About;


// import Lottie from "lottie-react";
// import { motion } from "framer-motion";
// import codingAnimation from "../assets/coding.json";

// function About() {
//   return (
//     <section className="about-section">
//       <div className="about-container">
        
//         {/* Left side content */}
//         <div className="about-content">
//           <h1 className="about-title">// About Me</h1>
          
//           {/* New wrapper for text with animation */}
//           <motion.div
//             className="about-text"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             viewport={{ once: false, amount: 0.3 }}
//           >
//             Hey there, I’m Raksha Sinha — a Computer Science undergrad exploring AI & ML while building smart, dynamic web apps. <br /><br />
            
//             Over the past year, I’ve honed my frontend and backend skills, and now I’m blending them with AI to create projects that truly wow. <br /><br />
            
//             Most days, I’m deep in code with my go-to fuel: chai + music ☕🎧. I learn best by building—curiosity always pulls me under the hood. <br /><br />
            
//             When I’m not in dev mode, I’m reading, experimenting in the kitchen, or chasing ideas that keep life fun and balanced. <br /><br />
//           </motion.div>
//         </div>

//         {/* Right side animation */}
//         <div className="about-animation">
//           <Lottie 
//             animationData={codingAnimation} 
//             loop={true} 
//             className="animation-lottie" 
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
