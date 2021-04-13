import React from 'react';

const Card = ({ title, element }) => {
    return (

        <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg bg-opacity-20 shadow-xl p-5 mt-1 mx-3">
            <div className="flex flex-row ">
                <p className='font-japan-maru text-2xl'>{title}</p>
            </div>

            <div className='grid grid-flow-row grid-cols-3 grid-rows-3 gap-y-3 mt-2'>
                {element.map((e, index) => (
                    <div className='flex flex-wrap items-center justify-center mx-5 shadow-lg rounded-lg bg-blue-400 hover:bg-yellow-500'>
                        <a key={index}
                            className='font-semibold font-nunito text-gray-800 py-4 px-6 mx-3 my-1 leading-5'
                            href={e.url}
                            target='_blank'
                        >{e.name}
                        </a>
                    </div>
                ))
                }
            </div >
        </div >
    );
};

export default Card;
