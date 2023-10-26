import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from '../../../public/image/Toiackinhhoang.png'
import Image from "next/image";
import ItemMovie from "../itemMovie/ItemMovie";
export default function Responsive({ image, title, styleImage, styleTitle, style }: any) {

  var settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,

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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };




  return (
    <div className="pd-wrap-slide">
      <h2 className="pd-text"> PHIM HOT </h2>
      <Slider {...settings} className="pd-slide">
        <ItemMovie image={image} title={title} styleImage={styleImage} styleTitle={styleTitle} style={style} />
        <ItemMovie image={image} title={title} styleImage={styleImage} styleTitle={styleTitle} style={style} />
        <ItemMovie image={image} title={title} styleImage={styleImage} styleTitle={styleTitle} style={style} />
        <ItemMovie image={image} title={title} styleImage={styleImage} styleTitle={styleTitle} style={style} />
        <ItemMovie image={image} title={title} styleImage={styleImage} styleTitle={styleTitle} style={style} />
        <ItemMovie image={image} title={title} styleImage={styleImage} styleTitle={styleTitle} style={style} />

      </Slider>
    </div>
  );
}
