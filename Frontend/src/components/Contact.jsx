import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Contact() {
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
        
          const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar/>
    <div className='pt-[28px]'>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[400px] py-3 px-3">

    <form onSubmit={handleSubmit(onSubmit)} method="dialog">

    <h3 className="font-semibold text-2xl text-center">Contact Us</h3>

    {/* Name input */}
    <div className='mt-4 space-y-2'>
      <span>Name</span>
      <br></br>
      <input type='text' placeholder='Enter your name' className='w-80 px-3 py-1 rounded-md outline-none border-2 border-gray-200' {...register("name" ,{required: true})}/>
      <br/>
      {errors.name && <span className='text-sm text-red-500'>This field is required*</span>}
    </div>

    {/* Email input */}
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br></br>
      <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 rounded-md outline-none border-2 border-gray-200'{...register("email" ,{required: true})}/>
      <br/>
      {errors.email && <span className='text-sm text-red-500'>This field is required*</span>}
    </div>

    {/* Password input */}
    <div className='mt-4 space-y-2'>
      <span>Message</span>
      <br></br>
      <textarea type='text' placeholder='Write something!!!' className='w-80 px-3 py-1 rounded-md outline-none border-2 border-gray-200'{...register("password" ,{required: true})}/>
      <br/>
      <span className='text-sm text-red-500'>(Optional)</span>
    </div>

    {/* button */}
    <div className='flex  mt-4 '>
      <button type='submit' className='bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>
    
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Contact