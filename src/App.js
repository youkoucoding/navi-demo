import React from 'react';
import Card from './components/Card';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className='flex flex-col items-center min-w-screen min-h-screen bg-my-bg'>
      <SearchBar />
      <div className="">
        <div className='grid grid-flow-row grid-cols-3 grid-rows-3 gap-2'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
