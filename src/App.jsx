
import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import './App.css';


function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal website showcasing my skills and projects.'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'An application that displays current weather information.'
    },
    {
      id: 3,
      title: 'Recipe Manager',
      description: 'An application for organizing and managing recipes.'   
     }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  function deleteProject(projectId) {
    setProjects(
      projects.filter((project) => project.id !== projectId)
    );
  }

  const filteredProjects = projects.filter((project) => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())  
  );

  return (
    <div className="app">
      <Header/>

      <main>
        <ProjectForm onAddProject={addProject} />
        
        <SearchBar 
           searchTerm={searchTerm}
           onSearchChange={setSearchTerm}    
       />

       <ProjectList 
       projects={filteredProjects}
       onDeleteProject={deleteProject} />

      </main>
    </div>
  );

}

export default App;
