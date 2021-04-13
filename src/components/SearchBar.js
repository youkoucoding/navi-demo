import React from 'react';

const SearchBar = () => {



    return (
        <>
            <div className='flex mt-20 mb-10'>
                <input
                    className='input-blue'
                    value={''}
                    onChange={''}
                />
                <button className='btn-blue'>
                    Search
                </button>
            </div>

        </>
    );
};

export default SearchBar;
