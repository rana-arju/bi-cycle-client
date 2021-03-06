import React from 'react';
import {  DiJavascript,DiReact, DiMongodb, DiHtml5, DiCss3,DiBootstrap, DiWordpress,DiGit, DiFirebase,DiHeroku } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const Portfolio = () => {
    return (
        <div>
            <PageTitle title="Portfolio" />
            <h2 className='text-center text-xl sm:text-2xl md:text-4xl text-secondary my-5 uppercase'>About Me</h2>
            {/* About Me Section */}
            <div className='container mx-auto mb-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='md:w-1/2'><img className='h-full w-full md:h-[400px] md:w-[400px]' src="https://i.ibb.co/hB9grZD/rana-arju-2-1.png" alt="Album" /></figure>
                <div className="card-body md:w-1/2">
                   <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
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
                    <div className="card w-full md:w-10/12 bg-base-100 shadow-xl">
                    <div className="card-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiJavascript />
                       Javascript
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiWordpress />
                       WordPress
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiMongodb />
                       MongoDb
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiReact />
                       React js
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success">
                       <DiBootstrap />
                      Bootstrap
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiHtml5 />
                       HTML5
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiCss3 />
                       CSS3
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <BsGithub />
                      Github
                    </div>
                    </button> 
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiGit />
                      Git
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiFirebase />
                      Firebase
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
                       <DiHeroku />
                      Heroku
                    </div>
                    </button>
                    <button className="btn gap-2 btn-success">
                    <div className="badge badge-success gap-2">
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
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/1fVqpSn/logika-full-view-1-1.png" className='h-full w-[400px]' alt="Logisco" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Logisco</h2>
                         <div className="card-actions justify-end">
                            <div className="badge badge-outline">react js</div> 
                            <div className="badge badge-outline">mongodb</div> 
                            <div className="badge badge-outline">expressjs</div>
                            <div className="badge badge-outline">bootstrap</div>
                            <div className="badge badge-outline">html,css</div>
                            </div>
                            <div className="card-actions justify-center mt-5">
                        <a href='https://logica-f4803.web.app/'><button className="btn btn-primary">Live Preview </button></a>
                        </div>
                    </div>
                    </div>
                    {/* project 2 */}
                    <div className="card card-compact w-full md:w-96  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/7yDmsHS/business-1-1.png" className='h-full w-[400px]' alt="Business one page" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Business one page</h2>
                         <div className="card-actions justify-end">
                            
                            <div className="badge badge-outline">jQuery</div>
                            <div className="badge badge-outline">bootstrap</div>
                            <div className="badge badge-outline">html,css</div>
                            </div>
                            <div className="card-actions justify-center mt-5">
                        <a href='https://rana-arju.github.io/one-page-website/'><button className="btn btn-primary">Live Preview </button></a>
                        </div>
                    </div>
                    </div>
                    {/* project 3 */}
                    <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/J3TCQkw/screencapture-rana-arju-github-io-css-ecommerces-2022-05-25-15-58-59-1-1-1.png" className='h-full w-[400px]' alt="Business one page" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Business one page</h2>
                         <div className="card-actions justify-end">
                            
                            <div className="badge badge-outline">jQuery</div>
                            <div className="badge badge-outline">bootstrap</div>
                            <div className="badge badge-outline">html,css</div>
                            </div>
                            <div className="card-actions justify-center mt-5">
                        <a href='https://rana-arju.github.io/css-ecommerces/'><button className="btn btn-primary">Live Preview </button></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Portfolio;