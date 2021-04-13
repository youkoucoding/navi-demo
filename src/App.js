import React from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className='flex flex-col items-center min-w-screen min-h-screen bg-fixed bg-hero bg-no-repeat bg-center'>
      <SearchBar />
      <CardList />
    </div>
  );
}

export default App;
