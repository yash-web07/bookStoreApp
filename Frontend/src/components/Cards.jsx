import React from 'react';
import list from '../../public/list.json';

function Cards({ item }) {
  if (!item) {
    return null; // if item is undefined, don't render the card
  }

  return (
    <>
    <div className="w-92 max-w-sm mx-auto p-2 mt-3 py-4 hover:scale-105 duration-200 ">
      <div className="card bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt={item.name || "Course Image"}
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name || "Card Title"}
            <div className="badge badge-secondary ">{item.category }</div>
          </h2>
          <p>{item.description || "No description available."}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">₹{item.price}</div>
            <div className="border-[2px] rounded-full badge badge-outline hover:bg-pink-500 hover:text-white duration-200 px-2">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
