import { Link } from "react-router";

const projects = [
  {
    title: "Full Stack Task Manager",
    description:
      "A MERN stack task management app with authentication and CRUD operations.",
    tech: ["React", "Node", "PostgreSQL"],
    image: "/images/task-app.png",
    live: "https://your-live-link.com",
    github: "https://github.com/yourrepo",
  },
  {
    title: "E-Commerce Store",
    description: "Shopping platform with cart, payments, and admin dashboard.",
    tech: ["React", "Redux", "Stripe"],
    image: "/images/ecommerce.png",
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <div className="buttons">
              <a href={project.live} target="_blank">
                live
              </a>
              <a href={project.github} target="_blank">
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn">
        <Link to="/Contact">Next</Link>
      </button>
    </div>
  );
}

export default Projects;
