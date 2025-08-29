import { useEffect, useState, useRef } from "react";

function RheaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "rhea", text: "Hey👋 I'm Rhea — your personal guide through Raksha's portfolio! Ask me about skills, projects, or anything you are curious about." },
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openRhea", handler);
    return () => window.removeEventListener("openRhea", handler);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const responses = {
    who: "Raksha is a passionate developer and learner.",
    age: "Raksha is 20 years old.",
    dob: "Raksha was born on 19th August 2005.",
    born: "Raksha was born on 19th August 2005.",
    location: "Raksha is based in New Delhi, India.",
    based: "Raksha is based in New Delhi, India.",
    hobbies: "Raksha loves reading books, cooking, coding, and exploring new tech.",
    food: "Raksha’s favorite food is biryani.",
    strengths: "Consistency, problem-solving, and creativity are Raksha's strengths.",
    weakness: "Raksha sometimes feels she isn’t progressing fast enough, but always bounces back.",
    fact: "Fun fact: Raksha can cook without needing recipes! 👩‍🍳",

    skills: "Raksha is skilled in React, Java, Python, SQL, and basic TypeScript.",
    stack: "Her tech stack includes React, Vite, Node.js basics, Java, Python, and SQL.",
    tools: "She often works with Git, GitHub, Vite, VS Code, and Figma",
    technologies: "She often works with Git, GitHub, Vite, VS Code, and Figma",
    experience: "Raksha has interned as an AI Quant Research Intern at CITeSERT (worked on stock data analysis, clustering, and LLM automation) and as an AI/ML Intern at Prodigal AI (focused on LLM deployment, RAG pipelines, and vector DBs).",
    education: "Raksha completed her schooling at Vishwa Bharati Public School, Dwarka, and is currently pursuing a Bachelor's degree in Computer Science at K.R. Mangalam University, Gurugram.",
    certifications: "Raksha has completed certifications in Java and Python basics.",
    achievements: "Built multiple full-stack apps and a portfolio showcasing them.",
    Goals: "Raksha aspires to become a Software Developer and build innovative, user-centric tech solutions by seamlessly integrating AI/ML into their core functionality.",
    availability: "Currently exploring opportunities and open to collaborations.",
    zone: "Raksha works in IST (Indian Standard Time).",
    projects: "Raksha built QuickJot (note-taking app), To-Do List app, and small projects like calculator, tic-tac-toe, and weather app. 🚀 More projects are on the way!",
    website: "This website is Raksha’s personal website.",
    resume: "You can find Raksha’s resume on the homepage.",
    blog: "Raksha occasionally shares notes and insights on tech via twitter. (Blog page coming soon!)",
    source: "Raksha plans to contribute to open source projects soon!",
    open: "Raksha plans to contribute to open source projects soon!",

    contact: "You can contact Raksha via email: rakshasinha1908@gmail.com",
    email: "rakshasinha1908@gmail.com",
    github: "Raksha’s GitHub: https://github.com/rakshasinha1908",
    linkedin: "Raksha’s LinkedIn: https://www.linkedin.com/in/raksha-sinha-7771b8278/",
    twitter: "Raksha’s Twitter/X: https://x.com/rakshasinha__",
    instagram: "Raksha’s Instagram: https://www.instagram.com/rakshasinha_/",
    leetcode: "Raksha’s LeetCode: https://leetcode.com/u/rakshasinha_/",

    hello: "Hey there! 😊",
    hi: "Hi! How can I help you today?",
    about: "Raksha is a developer who enjoys building projects and learning new skills.",
    thanks: "You're welcome! 💙",
    bye: "Goodbye! Have a wonderful day!",

    color: "Raksha’s favorite color is Blue 💙.",
    motto: "Her motto is: Keep learning, keep building.",
    rhea: "Rhea is Raksha’s personal portfolio assistant, here to answer your questions 😉",
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const lower = input.toLowerCase();
    let reply =
      Object.keys(responses).find((k) => lower.includes(k)) &&
      responses[Object.keys(responses).find((k) => lower.includes(k)) || ""];

    if (!reply)
      reply =
        "I haven’t cracked that one yet 🤔 — but I can tell you all about Raksha’s skills, her latest projects, and how she’s blending code with creativity!";

    setMessages((prev) => [...prev, { sender: "rhea", text: reply }]);
    setInput("");
  };

  return (
    <>
      <div className="rhea-floating-bubble" onClick={() => setIsOpen(!isOpen)}>
        <div className="rhea-text">
          Hi! I’m Rhea
          <br />— Raksha’s digital brain.
        </div>
        <img src="/rhea-avatar.png" alt="Rhea" className="rhea-avatar" />
      </div>

      {isOpen && (
        <div className="rhea-chatbox">
          <div className="rhea-header">
            <span>Rhea 🤖</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="rhea-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="rhea-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}

export default RheaAssistant;
