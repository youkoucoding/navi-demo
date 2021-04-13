import React from 'react';

const Card = ({ title, element, color }) => {
    return (
        <div className={`card bg-gradient-to-b from-${color}-300 to-${color}-100 border-${color}-600`}>
            <div className="flex flex-row ">
                <p className='font-japan-maru text-2xl'>{title}</p>
            </div>

            <div className='grid grid-flow-row grid-cols-3 grid-rows-3 gap-y-6 mt-2'>
                {element.map((e, index) => (
                    <a key={index} className='card-item' target='_blank' href={e.url}>
                        {e.name}
                    </a>
                ))
                }
            </div >
        </div >
    );
};

export default Card;
