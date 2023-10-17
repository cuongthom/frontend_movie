import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from '../../../public/image/Toiackinhhoang.png'
import Image from "next/image";
export default class Responsive extends Component {
  render() {
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="pd-slide">
        <h2 style={{ color: 'white' }}> Phim Hot </h2>
        <Slider {...settings} >
          <div>
            <Image
              src={Movie}
              className='movie-item'
              alt="logo"
              priority={false || true}
            />
            <h3>Tội ác kinh hoàng</h3>
          </div>
          <div>
            <Image
              src={Movie}
              className='movie-item'
              alt="logo"
              priority={false || true}
            />
            <h3>Tội ác kinh hoàng</h3>
          </div>
          <div>
            <Image
              src={Movie}
              className='movie-item'
              alt="logo"
              priority={false || true}
            />
            <h3>Tội ác kinh hoàng</h3>
          </div>
          <div>
            <Image
              src={Movie}
              className='movie-item'
              alt="logo"
              priority={false || true}
            />
            <h3>Tội ác kinh hoàng</h3>
          </div>
          <div>
            <Image
              src={Movie}
              className='movie-item'
              alt="logo"
              priority={false || true}
            />
            <h3>Tội ác kinh hoàng</h3>
          </div>
          <div>
            <Image
              src={Movie}
              className='movie-item'
              alt="logo"
              priority={false || true}
            />
            <h3>Tội ác kinh hoàng</h3>
          </div>
          <div>
            <Image
              src={Movie}
              className='movie-item'
              alt="logo"
              priority={false || true}
            />
            <h3>Tội ác kinh hoàng</h3>
          </div>
          <div>
            <Image
              src={Movie}
              className='movie-item'
              alt="logo"
              priority={false || true}
            />
            <h3>Tội ác kinh hoàng</h3>
          </div>
        </Slider>
      </div>
    );
  }
}