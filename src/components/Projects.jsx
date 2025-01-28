export default function Projects({ projects }) {
  return (
    <div className="project-container">
      <div className="pro-head">Here are my top Projects:</div>

      <div className="projects">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="myCard">
              <div className="innerCard">
                <div className="frontSide">
                  <img
                    src={project.image}
                    alt={`${project.title} Logo`}
                    className="logo-img"
                  />
                  <p className="project-des">{project.title}</p>
                </div>
                <div className="backSide">
                  <p className="project-des">{project.title}:</p>
                  <p className="project-des">{project.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
