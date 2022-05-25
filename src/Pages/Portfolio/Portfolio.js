import React from 'react';
import {  DiJavascript,DiReact, DiMongodb, DiHtml5, DiCss3,DiBootstrap, DiWordpress,DiGit, DiFirebase,DiHeroku } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';

const Portfolio = () => {
    return (
        <div>
            <h2 className='text-center text-xl sm:text-2xl md:text-4xl text-secondary my-5 uppercase'>About Me</h2>
            {/* About Me Section */}
            <div className='container mx-auto mb-10'>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure className='md:w-1/2'><img className='h-full w-full md:h-[400px] md:w-[400px]' src="https://i.ibb.co/hB9grZD/rana-arju-2-1.png" alt="Album" /></figure>
                <div class="card-body md:w-1/2">
                   <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">
                       
                        <tbody>
                        <tr>
                            <td>Name: </td>
                            <td>Mohammad Rana Arju</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>ranaarju20@gmail.com</td>
                        </tr>
                        <tr>
                            <td className='text-center text-secondary font-bold'>Educational Background</td>
                            
                        </tr>
                        <tr>
                            <td>Education: </td>
                            <td>Diploma Engineering</td>
                        </tr>
                        <tr>
                            <td>Department: </td>
                            <td>Computer Technology (CMT)</td>
                        </tr>
                        <tr>
                            <td>Semester: </td>
                            <td>5th</td>
                        </tr>

                  
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
                </div>
                {/* i have know technology as a web developer */}
                <div className='container mx-auto w-full md:w-1/2 grid justify-center content-center  items-center'>
                    <h1 className='text-xl sm:text-2xl md:text-4xl text-center uppercase text-secondary font-bold '>skills</h1>
                
                <div >
                    <div class="card w-full md:w-10/12 bg-base-100 shadow-xl">
                    <div class="card-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiJavascript />
                       Javascript
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiWordpress />
                       WordPress
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiMongodb />
                       MongoDb
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiReact />
                       React js
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success">
                       <DiBootstrap />
                      Bootstrap
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiHtml5 />
                       HTML5
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiCss3 />
                       CSS3
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <BsGithub />
                      Github
                    </div>
                    </button> 
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiGit />
                      Git
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiFirebase />
                      Firebase
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <DiHeroku />
                      Heroku
                    </div>
                    </button>
                    <button class="btn gap-2 btn-success">
                    <div class="badge badge-success gap-2">
                       <SiNetlify />
                      Netlify
                    </div>
                    </button>
                    </div>
                    </div>
                </div>
            
            </div>
            <div>
                <h2 className="text-xl sm:text-2xl md:text-4xl uppercase text-center text-secondary my-10">My recent Project</h2>
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/1fVqpSn/logika-full-view-1-1.png" className='h-full w-[400px]' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Logisco</h2>
                         <div class="card-actions justify-end">
                            <div class="badge badge-outline">react js</div> 
                            <div class="badge badge-outline">mongodb</div> 
                            <div class="badge badge-outline">expressjs</div>
                            <div class="badge badge-outline">bootstrap</div>
                            <div class="badge badge-outline">html,css</div>
                            </div>
                            <div class="card-actions justify-end">
                        <a href='https://logica-f4803.web.app/'><button class="btn btn-primary btn-block">Live Preview </button></a>
                        </div>
                    </div>
                    </div>
                    {/* project 2 */}
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/7yDmsHS/business-1-1.png" className='h-full w-[400px]' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Business one page</h2>
                         <div class="card-actions justify-end">
                            
                            <div class="badge badge-outline">jQuery</div>
                            <div class="badge badge-outline">bootstrap</div>
                            <div class="badge badge-outline">html,css</div>
                            </div>
                            <div class="card-actions justify-end">
                        <a href='https://rana-arju.github.io/one-page-website/'><button class="btn btn-primary btn-block">Live Preview </button></a>
                        </div>
                    </div>
                    </div>
                    {/* project 3 */}
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/J3TCQkw/screencapture-rana-arju-github-io-css-ecommerces-2022-05-25-15-58-59-1-1-1.png" className='h-full w-[400px]' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Business one page</h2>
                         <div class="card-actions justify-end">
                            
                            <div class="badge badge-outline">jQuery</div>
                            <div class="badge badge-outline">bootstrap</div>
                            <div class="badge badge-outline">html,css</div>
                            </div>
                            <div class="card-actions justify-end">
                        <a href='https://rana-arju.github.io/css-ecommerces/'><button class="btn btn-primary btn-block">Live Preview </button></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
      
    );
};

export default Portfolio;