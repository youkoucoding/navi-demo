import React from 'react';

const SearchBar = () => {
    return (
        <>
            <div className='flex mt-20'>
                <input className='focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-32  sm:text-sm border-gray-300 rounded-md font-nunito border border-gray-300'></input>
                <button className='mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full font-nunito sm:w-auto border border-transparent px-6 py-3 font-semibold leading-snug bg-blue-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-blue-800 transition ease-in-out duration-150 hover:bg-blue-600'>
                    Search
                </button>
            </div>

        </>
    );
};

export default SearchBar;
