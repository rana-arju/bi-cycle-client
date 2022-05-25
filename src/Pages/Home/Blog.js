import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='uppercase text-center text-xl sm:text-2xl md:text-4xl my-10'>Latest Blog</h2>
                    {/* Blog/Article 1 */}
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            <div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/WN9kBs3/blog3.jpg" className='h-[250px] w-[400px]' alt=".." /></figure>
            <div class="card-body">
                <h2 class="card-title">Cycling for health and fitness</h2>
                <p>To be fit and healthy you need to be physically active. Regular physical activity can help protect you from serious diseases such as obesity, heart disease, cancer, mental illness, diabetes and arthritis</p>
                <div class="card-actions justify-center my-5">
                <button class="btn btn-primary btn-block">Read More</button>
                </div>
            </div>
            </div>
        
        {/* Blog/Article 2 */}
            <div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/m985Md0/blog.jpg" className='h-[250px] w-[400px]' alt=".." /></figure>
            <div class="card-body">
                <h2 class="card-title">Cardiovascular disease and cycling</h2>
                <p>Cardiovascular diseases include stroke, high blood pressure and heart attack. Regular cycling stimulates and improves your heart, lungs and circulation, reducing your risk of cardiovascular diseases.</p>
                <div class="card-actions justify-center my-5">
                <button class="btn btn-primary btn-block">Read More</button>
                </div>
            </div>
            </div>
        
        {/* Blog/Article 3 */}
            <div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/4R1FCt7/blog2.jpg" className='h-[250px] w-[400px]' alt=".." /></figure>
            <div class="card-body">
                <h2 class="card-title">Health benefits of regular cycling</h2>
                <p>Cycling is mainly an aerobic activity, which means that your heart, blood vessels and lungs all get a workout. You will breathe deeper, perspire and experience increased body temperature, which will improve your overall fitness level.</p>
                <div class="card-actions justify-center my-5">
                <button class="btn btn-primary btn-block">Read More</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;