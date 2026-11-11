
function ProjectForm({ onAddProject }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value.trim()
    const description = form.description.value.trim();

    if (title === "" || description === "") {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title,
      description: description 
    };

    onAddProject(newProject);

    form.reset();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Project</h2>

      <label htmlFor="title">Project Title</label>
      <input 
      type="text"
      id="title"
      name="title"
      placeholder="Enter project title"
      required    
      />

      <label htmlFor="description">Project Description</label>
      <textarea 
         id="description"
         name="description"
         placeholder="Describe your project"
         required      
      />

       <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm
 
  