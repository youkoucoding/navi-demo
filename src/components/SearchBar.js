import React from 'react';

const SearchBar = () => {



    return (
        <>
            <form className='flex mt-20 mb-10'>
                <input
                    className='input-blue'
                    value={''}
                    onChange={''}
                />
                <button className='btn-blue'>
                    Search
                </button>
            </form>

        </>
    );
};

export default SearchBar;
