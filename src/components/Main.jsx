import React from 'react'
import Slider from "react-slick";
 function Main({sliders}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true
  };
  return (
    <Slider {...settings}>
     
        {
          sliders.map((items , i) => (
            <div className="main">
            <img src={items.imageUrl}></img>
            </div>
          ))
        }
    </Slider>
  );
}

export default Main