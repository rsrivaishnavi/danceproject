import React, { useState } from 'react';

const classesData = [
  { id: 1, danceStyle: 'Hip-Hop', level: 'Beginner' },
  { id: 2, danceStyle: 'Salsa', level: 'Intermediate' },
  { id: 3, danceStyle: 'Ballet', level: 'Advanced' }
];

const SearchClasses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClasses, setFilteredClasses] = useState(classesData);

  const handleSearch = () => {
    const filtered = classesData.filter((cls) =>
      cls.danceStyle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClasses(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by dance style"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredClasses.map((cls) => (
          <li key={cls.id}>{cls.danceStyle} - {cls.level}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchClasses;
