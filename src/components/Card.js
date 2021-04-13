import React from 'react';

const Card = ({ title, element, color }) => {
    return (

        <div className={`card bg-gradient-to-b from-${color}-300 to-${color}-100 border-${color}-600`}>
            <div className="flex flex-row ">
                <p className='font-japan-maru text-2xl'>{title}</p>
            </div>

            <div className='grid grid-flow-row grid-cols-3 grid-rows-3 gap-y-6 mt-2'>
                {element.map((e, index) => (
                    <div className='card-item'>
                        <a key={index}
                            className='font-semibold font-nunito text-gray-800 py-2 px-3 mx-1 my-1 leading-2'
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
