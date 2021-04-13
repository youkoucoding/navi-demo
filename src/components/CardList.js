import React from 'react';
import Card from './Card';
import { sites } from '../data/data';

const CardList = () => {
    return (
        <>
            <div className='grid grid-flow-row grid-cols-3 grid-rows-3 gap-y-3 gap-x-1'>
                {sites.map((item, id) => (
                    <Card title={item.title} key={id} element={item.element}></Card>
                ))}
            </div>
        </>
    );
};

export default CardList;
