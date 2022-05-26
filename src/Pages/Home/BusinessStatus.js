import React from 'react';
import {FcBusinessman } from 'react-icons/fc';
import {BsGraphUp, BsTools} from 'react-icons/bs';
import {FaComments} from 'react-icons/fa';

const BusinessStatus = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='uppercase text-center text-xl sm:text-2xl md:text-4xl my-10'>business summary</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        <div className="stats shadow">
        <div className="stat">
        <div className="stat-figure text-primary">
        <FcBusinessman className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title capitalize"> customers</div>
        <div className="stat-value text-primary">5.6K</div>
        <div className="stat-desc">21% more than last month</div>
        </div>
        </div>
        <div className="stats shadow">
        <div className="stat">
        <div className="stat-figure text-primary">
           <BsGraphUp className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">Annual revenue</div>
            <div className="stat-value text-primary">5.6 M</div>
            <div className="stat-desc">5% More Than Last Year</div>
        </div>
        </div>
        <div className="stats shadow">
        <div className="stat">
        <div className="stat-figure text-primary">
            <BsTools className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">Total Parts</div>
            <div className="stat-value text-primary">100+</div>
        </div>
        </div>
        <div className="stats shadow">
        <div className="stat">
        <div className="stat-figure text-primary">
            <FaComments className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">Reviews</div>
            <div className="stat-value text-primary">20 Lakh +</div>
        </div>
       </div>
       </div>
    </div>
       
    );
};

export default BusinessStatus;