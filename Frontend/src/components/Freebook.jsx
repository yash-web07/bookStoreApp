import React from 'react';
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis qui cum voluptatum ipsa autem ullam earum.</p>
        </div>


        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <div key={item.id} className="px-2"> {/* padding between slides */}
                <Cards item={item} />
              </div>
            ))}
          </Slider>

        </div>
      </div>
    </>
  )
}

export default Freebook