
function SearchBar({ searchTerm, onSearchChange }) {
    return (
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search projects..."
          value={searchTerm}   
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Search projects"      
        />
      </div>
    );
}

export default SearchBar;




