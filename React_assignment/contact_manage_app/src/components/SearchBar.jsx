const SearchBar = ({ searchQuery, setSearchQuery }) => {
	return (
	  <input
		type="text"
		value={searchQuery}
		onChange={(e) => setSearchQuery(e.target.value)}
		placeholder="Search by name"
		className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
	  />
	);
  };
  
  export default SearchBar;
  