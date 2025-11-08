import PropTypes from "prop-types";

export default function About(props) {
  return (
    <div className="about">
      <span className="hello">Hello,</span>
      <span className="name-det">
        I am <span className="name">{props.name}</span>
      </span>
      <div className="about-det">
        <div className="abt-det">
          Currently working as a  Associate Sales Ops (Front End Developer) at{" "}
          <u>Times Internet Limited, Noida</u>, where I focus on advancing my
          skills and expanding my expertise.
        </div>
        <div className="abt-det">
          I&apos;m all about making websites look cool and work smoothly. I love
          turning designs into real, clickable things on the internet. With over
          2.5 years of experience with React.js, Next.js and JavaScript.
        </div>
        <div className="abt-det">
          My code is more than syntax; it&apos;s a language that speaks to
          users, creating web experiences that seamlessly bridge the gap between
          technology and human connection.
        </div>
        <div className="abt-det">
          With a keyboard as my paintbrush and a browser as my canvas, I
          transform visions into digital reality, one meticulously written line
          of code at a time.
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  name: PropTypes.string.isRequired,
};
