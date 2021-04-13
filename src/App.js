import React from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className='flex flex-col items-center min-w-screen min-h-screen bg-hero'>
      <SearchBar />
      <CardList />
    </div>
  );
}

export default App;
