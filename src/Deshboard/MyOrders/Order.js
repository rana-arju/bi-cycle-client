import React from 'react';

const Order = ({order}) => {
    const {name} = order;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Order;