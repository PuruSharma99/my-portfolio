import React from "react";

export default function Contact({ contacts }) {
  return (
    <div className="contact-container">
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
}
