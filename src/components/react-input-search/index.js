import React, { useState } from 'react';
import './styles.css';
const ReactInputSearch = (props) => {
  const [userInput, setUserInput] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOption, setShowOptions] = useState(false);

  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
    searchHandler(e.target.value);
  };

  const search = (value) => {
    if (value.length) {
      return props.options.filter(
        (item) => item.value.includes(value) || item.key.includes(value)
      );
    } else {
      return [];
    }
  };

  const searchHandler = (value) => {
    setFilteredOptions([]);
    const results = search(value);
    setFilteredOptions(results);
    setShowOptions(true);
  };

  const onItemClickHandler = (item) => {
    setShowOptions(false);
    setUserInput(item.value);
  };

  return (
    <div className='container'>
      <input
        className='input'
        type='text'
        name='search'
        placeholder='Enter Text'
        value={userInput}
        onChange={onChangeHandler}
        autoComplete='off'
      />
      {filteredOptions.length > 0 && showOption && (
        <ul className='searchResults'>
          {filteredOptions.map((item, key) => (
            <li key={key} onClick={() => onItemClickHandler(item)}>
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReactInputSearch;
