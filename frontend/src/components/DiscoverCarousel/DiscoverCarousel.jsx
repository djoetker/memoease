import React from "react";
import Silder from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";
import "../../css/discover.scss";
const DiscoverCarousel = () => {
  const settings = {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="discover-content">
      <div className="DiscoverCarousel-container">
        <h2>Discover</h2>
        <Silder {...settings}>
          {data.map((item, id) => (
            <div className="cards" key={id}>
              <div className="DiscoverCardsContent">
                <h3>{item.name}</h3>
                <button>{item.card}</button>
                <p className="discropt-created">{item.description}</p>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Silder>
      </div>
    </div>
  );
};

export default DiscoverCarousel;
