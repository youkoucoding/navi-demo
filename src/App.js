import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { sites } from './data/data';
import { CardList } from './components/CardList';

const Search = (pattern) => {
    const options = {
        keys: ['element.name']
    };
    const fuse = new Fuse(sites, options);
    const result = fuse.search(pattern);
    return result;
};

const App = () => {

    const [value, setValue] = useState('');

    return (
        <div className="flex flex-col items-center min-w-screen min-h-screen bg-hero">
            <form className='flex mt-20 mb-10'>
                <input
                    className='input-blue'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Input What you like"
                />
                <button className='btn-blue'>
                    Search
            </button>
            </form>
            <CardList result={Search(value)} value={value} />
        </div>
    );
};

export default App;
