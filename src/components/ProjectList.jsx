
function ProjectList({ projects, onDeleteProject }) {
  return (
    <section className="project-list">
      <h2>My Projects</h2>
       
       {projects.length === 0 ?  (
        <p>No projects found.</p>
       ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <button onClick={() => onDeleteProject(project.id)}>
                Delete Project
              </button>
            </div>
          ))}
        </div>
       )} 

    </section>
  )
}

export default ProjectList;
