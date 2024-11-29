import { useState } from 'react';
import styled from 'styled-components';

// Styled Components for search input and button
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const SearchField = () => {
  const [query, setQuery] = useState('');

  // Handle the input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle the search action (e.g., log query or call a search API)
  const handleSearch = () => {
    console.log('Searching for:', query);
    // Here you can add the functionality to fetch search results from an API
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
};

export default SearchField;
