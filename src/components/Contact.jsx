import { useState } from "react";
import { FaPaperPlane, FaCheck, FaTimes } from "react-icons/fa";

function Contact({id}) {
  const [status, setStatus] = useState("Send"); // default button

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbabrew", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("Send"), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  // button text/icon logic
  const renderButtonContent = () => {
    if (status === "Send") return (<><FaPaperPlane className="icon" /> Send</>);
    if (status === "Sending...") return "Sending...";
    if (status === "sent") return (<><FaCheck className="icon" style={{ color: "white" }} /> Sent</>);
    if (status === "error") return (<><FaTimes className="icon" style={{ color: "white" }} /> Error</>);
  };

  return (
    <section id={id} className="contact-section">
      <div className="contact-container">
        <div className="contact-box">
          <h1 className="contact-title">Let's Talk</h1>
          <p>Have a project in mind or just want to connect? Feel free to send me a message.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Full Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="yourmail@domain.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Share your message" rows="5" required></textarea>
            </div>

            <button type="submit" className="contact-btn">
              {renderButtonContent()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
