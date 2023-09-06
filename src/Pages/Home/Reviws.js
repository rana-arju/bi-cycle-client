import React, { useEffect, useState } from 'react';

const Reviws = () => {
    const [reviews, setReview] = useState([]);
      useEffect(()=>{
        fetch('https://bi-cycle-server.vercel.app/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[]);
    return (
        <div className='container px-2 my-10 mx-auto'>
             <h2 className='uppercase text-center text-xl sm:text-2xl md:text-4xl my-5'>All Reviews</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                reviews.map(review => <div key={review._id} className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-lg">Buyer: <span className='text-secondary italic'>{review.name}</span></h2>
                    <p><blockquote className='ml-5 italic'>"{review.review}"</blockquote> </p>
                    <div className="card-actions justify-center">
                    <div className="badge badge-primary text-white gap-2">
                        <span className='text-lg p-4'>{review.ratting} out of 5</span>
                    </div>
                    </div>
                </div>
                </div>)
            }
            
        </div>
        </div>
    );
};

export default Reviws;