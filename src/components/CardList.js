import React from 'react';
import Card from './Card';
import { sites } from '../data/data';
import { result } from '../utlis/filter';

const CardList = () => {
    return (
        <>
            <div className='grid grid-flow-row grid-cols-3 sm:grid-rows-2 gap-y-4 gap-x-0'>
                {result.map((res, index) => (
                    <Card
                        title={res.item.title}
                        key={index}
                        element={res.item.element}
                        color={res.item.color}
                    ></Card>
                ))}
            </div>
        </>
    );
};

export default CardList;
