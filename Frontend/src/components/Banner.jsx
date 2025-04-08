import React from 'react';
import banner from "../assets/banner.jpg";
function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-20">
                    <div className='space-y-12'>
                        <h1 className="text-4xl font-bold ">Hello, welcome here to learn something
                            <span className='text-pink-500'>new everyday!!!</span>
                        </h1>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, inventore. Eius quam non possimus dignissimos ipsum! Iusto, aliquid quam ad laborum mollitia eum libero perspiciatis dicta animi tempora autem temporibus?
                        </p>
                        <label className="input validator w-full outline-none">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            <input type="email" placeholder="mail@site.com" className='grow' />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className='btn btn-secondary mt-6'>Secondry</button>
                </div>

                <div className="w-full md:w-1/2 order-1 dark:bg-slate-900 dark:text-white">
                    <img src={banner} className='w-92 h-92' alt='book'></img>
                </div>
            </div>
        </>
    )
}

export default Banner