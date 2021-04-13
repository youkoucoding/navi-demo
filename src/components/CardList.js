import React from 'react';
import Card from './Card';
import { sites } from '../data/data';

export const CardList = ({ result }) => {
    return (
        <>
            {
                (result.length == 0) ? <div className='grid grid-flow-row grid-cols-3 sm:grid-rows-2 gap-y-4 gap-x-0'>
                    {sites.map((item, index) => (
                        <Card
                            title={item.title}
                            key={index}
                            element={item.element}
                            color={item.color}
                        />
                    ))}
                </div> :
                    <div className='grid grid-flow-row grid-cols-3 sm:grid-rows-2 gap-y-4 gap-x-0'>
                        {result.map((res, index) => (
                            <Card
                                title={res.item.title}
                                key={index}
                                element={res.item.element}
                                color={res.item.color}
                            />
                        ))}
                    </div>

            }
        </>
    );
};