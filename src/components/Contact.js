import React from "react";

const Contact = ({ contacts }) => {
  return (
    <div className="contact-container">
      {/* <div className="hello">Contact Me</div>
      <div className="bio">
        Let's Connect. Please reach out to me by sending me a mail.
      </div>
      <form className="contactForm">
        <input type="text" className="yourName" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
      </form> */}
      <div className="hello">Contact Me</div>
      <div className="bio">
        Let's connect! Feel free to reach out to me through my social media.
      </div>
      <div className="links">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="linksAnchor"
          >
            <img
              src={contact.image}
              alt={`${contact.title} Logo`}
              className="link"
            />
            <div className="socialMedia">{contact.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
