import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
  title: "QuickJot",
  description: "QuickJot is a fast and minimal note-taking app where users can create, edit, search, and star notes with theme toggle and local storage support.",
  image: "/quickJot.png",
  tech: ["React", "Vite", "React Hooks", "Context API / Props", "Font Awesome", "CSS"],
  links: {
    github: "https://github.com/rakshasinha1908/QuickJot",
    demo: "https://quick-jot-rho.vercel.app"
  }
},
{
  title: "To Do List",
  description: "A lightweight React + Vite to-do list app featuring add, edit, delete, and mark-complete functionality with local state management.",
  image: "/toDo.png",
  tech: ["React", "Vite", "JavaScript", "CSS", "Vite Config"],
  links: {
    github: "https://github.com/rakshasinha1908/toDoList_React",
    demo: "https://rakshasinha1908.github.io/toDoList_React/" 
  }
},

];


function Projects(){ 
    return(
        <section className="projects-section">
            <div className="projects-container">
                <p className="projects-title">Projects</p>

                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={40}
                  slidesPerView={1}
                >
                  {projectsData.map((project, index) => (
                    <SwiperSlide key={index}>
                      <ProjectCard project={project} />
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
        </section>
    ); 
} 
export default Projects;
 