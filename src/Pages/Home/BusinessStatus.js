import React from 'react';
import {FcBusinessman } from 'react-icons/fc';
import {BsGraphUp, BsTools} from 'react-icons/bs';
import {FaComments} from 'react-icons/fa';

const BusinessStatus = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='uppercase text-center text-xl sm:text-2xl md:text-4xl my-10'>business summary</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        <div class="stats shadow">
        <div class="stat">
        <div class="stat-figure text-primary">
        <FcBusinessman class="inline-block w-8 h-8 stroke-current" />
        </div>
        <div class="stat-title capitalize"> customers</div>
        <div class="stat-value text-primary">5.6K</div>
        <div class="stat-desc">21% more than last month</div>
        </div>
        </div>
        <div class="stats shadow">
        <div class="stat">
        <div class="stat-figure text-secondary">
           <BsGraphUp class="inline-block w-8 h-8 stroke-current" />
        </div>
        <div class="stat-title">Annual revenue</div>
            <div class="stat-value text-secondary">5.6 M</div>
            <div class="stat-desc">5% More Than Last Year</div>
        </div>
        </div>
        <div class="stats shadow">
        <div class="stat">
        <div class="stat-figure text-secondary">
            <BsTools class="inline-block w-8 h-8 stroke-current" />
        </div>
        <div class="stat-title">Total Parts</div>
            <div class="stat-value text-secondary">100+</div>
        </div>
        </div>
        <div class="stats shadow">
        <div class="stat">
        <div class="stat-figure text-secondary">
            <FaComments class="inline-block w-8 h-8 stroke-current" />
        </div>
        <div class="stat-title">Reviews</div>
            <div class="stat-value text-secondary">20 Lakh +</div>
        </div>
       </div>
       </div>
    </div>
       
    );
};

export default BusinessStatus;