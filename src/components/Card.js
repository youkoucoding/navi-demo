import React from 'react';
import { sites } from '../data/data';

const Card = ({ title, element }) => {
    return (

        <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5 mt-1">
            <div className="flex flex-row ">
                {/* <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-green-500"><svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg></div>
                </div> */}
                <p className='font-japan-maru text-2xl'>{title}</p>
            </div>

            <div className='grid grid-flow-col shadow grid-cols-3 grid-rows-3 gap-7 rounded-md mt-6'>
                {element.map((e, index) => (

                    <div key={index} className='font-semibold font-mont py-4 px-6 mx-4 my-3 flex-wrap bg-my-blue text-my-white rounded-lg'>
                        <a
                            href={e.url}
                            target='_blank'
                        >{e.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
