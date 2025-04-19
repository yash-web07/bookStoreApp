import React, { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';
import { Link } from "react-router-dom";
import axios from 'axios';

const Course = () => {
  const [book,setBook]=useState([])
  useState(() =>{
    const getBook= async ()=>{
      try {
      const res= await axios.get('http://127.0.0.1:4001/book');
      console.log(res.data);
      setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <>
        <div className="mt-20 max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className=" items-center justify-center text-center ">
                <h1 className="text-2xl md:text-4xl">We're delighted to have you {""} <span className="text-pink-500">Here! :)</span></h1>
                <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione temporibus vel iusto odit doloribus earum sint repellendus dolorem officia sapiente voluptatum totam laboriosam culpa, praesentium consequuntur deleniti corporis itaque.</p>
                <Link to="/">
                <button  className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>           
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
    book
      .filter((item) => item.category === "Paid")
      .map((item) => (
        <Cards key={item.id} item={item} />
      ))
  }
            </div>
        </div>
        </>
      </div>
      <Footer />
    </>
  );
};

export default Course;
