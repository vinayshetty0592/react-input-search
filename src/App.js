import ReactInputSearch from './components/react-input-search/index';

function App() {
  return (
    <div className="App">
      <ReactInputSearch
        options={[
          { key: 'apple', value: 'Apple' },
          { key: 'ball', value: 'Ball' },
          { key: 'cat', value: 'Cat' },
        ]} />
    </div>
  );
}

export default App;
