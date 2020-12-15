import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

const useClickedOutsideTarget = (node) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  useEffect(() => {
    const handleMouseClick = (event) => {
      if (node.current && !node.current.contains(event.target)) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    };
    document.addEventListener("mousedown", handleMouseClick);
    return () => {
      document.removeEventListener("mousedown", handleMouseClick);
    };
  }, [node]);
  return clickedOutside;
};

const ReactInputSearch = (props) => {
  const [userInput, setUserInput] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [activeItem, setActiveItem] = useState(-1);

  const searchResultsNode = useRef();
  const clickedOutside = useClickedOutsideTarget(searchResultsNode);


  useEffect(() => {
    if (clickedOutside) {
      setActiveItem(-1);
      setShowOptions(false);
    }
  }, [clickedOutside]);

  const onKeyDownHandler = ((event) => {
    switch (event.key) {
      case 'ArrowDown':
        if (activeItem < (filteredOptions.length - 1)) {
          setActiveItem(activeItem + 1);
        }
        break;
      case 'ArrowUp':
        if (activeItem > 0) {
          setActiveItem(activeItem - 1);
        }
        break;
      case 'Enter':
        setShowOptions(false);
        setUserInput(filteredOptions[activeItem].value);
        setActiveItem(-1);
        break;
      default:
        break;
    }
  });

  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
    searchHandler(e.target.value);
    setActiveItem(-1);
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

  const onListItemHover = (key, status) => {
    setActiveItem(-1);
    if (status) {
      setActiveItem(key);
    }
  };

  return (
    <div className='container'>
      <input
        className='input'
        type='text'
        name='search'
        placeholder='Enter Text'
        value={userInput}
        onFocus={onChangeHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        autoComplete='off'
      />
      {filteredOptions.length > 0 && showOptions && (
        <ul className='searchResults' ref={searchResultsNode}>
          {filteredOptions.map((item, key) => (
            <li
              key={key}
              onClick={() => onItemClickHandler(item)}
              className={`${activeItem === key && 'active'}`}
              onMouseEnter={() => onListItemHover(key, true)}
              onMouseLeave={() => onListItemHover(key, false)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )
      }
    </div >
  );
};

export default ReactInputSearch;
