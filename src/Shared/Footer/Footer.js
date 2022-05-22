import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-5 bg-base-200'>
            <div class="footer p-10 container mx-auto  text-base-content">
            <div>
                <span class="footer-title">Services</span> 
                <a class="link link-hover">Branding</a> 
                <a class="link link-hover">Design</a> 
                <a class="link link-hover">Marketing</a> 
                <a class="link link-hover">Advertisement</a>
            </div> 
            <div>
                <span class="footer-title">Company</span> 
                <a class="link link-hover">About us</a> 
                <a class="link link-hover">Contact</a> 
                <a class="link link-hover">Jobs</a> 
                <a class="link link-hover">Press kit</a>
            </div> 
            <div>
                <span class="footer-title">Legal</span> 
                <a class="link link-hover">Terms of use</a> 
                <a class="link link-hover">Privacy policy</a> 
                <a class="link link-hover">Cookie policy</a>
            </div> 
            <div>
                <span class="footer-title">Newsletter</span> 
                <div class="form-control w-80">
                <label class="label">
                    <span class="label-text">Enter your email address</span>
                </label> 
                <div class="relative">
                    <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
                    <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
                </div>
            </div>
            </div>
            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                &copy; 2022 Copyright ❤
                <a className="text-reset fw-bold" href="https://github.com/rana-arju"> Rana Arju</a>
            </div>
            </footer>
    );
};

export default Footer;