import React, { Component } from "react";
import Slider from "react-slick";
import {RiArrowRightCircleLine, RiArrowLeftCircleLine } from 'react-icons/ri'
import imagehome1 from "../images/imagehome1.jpg"
import imagehome2 from "../images/imagehome2.jpg"
import imagehome3 from "../images/imagehome3.jpg"
import imagehome4 from "../images/imagehome4.jpg"
import imagehome5 from "../images/imagehome5.jpg"



export default class MultipleItems extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div>
        <div className='button-div'>
          <RiArrowLeftCircleLine className='left-arrow' onClick={this.previous}/>
          <RiArrowRightCircleLine className='right-arrow' onClick={this.next}/>
        </div>
        <Slider className='slider' ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <img className='image' alt='carousel-img-one' src={imagehome1}/>
            <div className='slider-detail'>
            <h3 className='text-one'>01</h3>
            <h3 className='text-two'>CULTURES</h3>
            </div>
          </div>
          <div key={2}>
            <img className='image' alt='carousel-img-two' src={imagehome2}/>
            <div className='slider-detail'>
            <h3 className='text-one'>02</h3>
            <h3 className='text-two'>WILDLIFE</h3>
            </div>
          </div>
          <div key={3}>
            <img className='image' alt='carousel-img-three' src={imagehome3}/>
            <div className='slider-detail'>
            <h3 className='text-one'>03</h3>
            <h3 className='text-two'>SCENERY</h3>
            </div>
          </div>
          <div key={4}>
            <img className='image' alt='carousel-img-four' src={imagehome4}/>
            <div className='slider-detail'>
            <h3 className='text-one'>04</h3>
            <h3 className='text-two'>ADVENTURES</h3>
            </div>
          </div>
          <div key={5}>
            <img className='image' alt='carousel-img-five' src={imagehome5}/>
            <div className='slider-detail'>
            <h3 className='text-one'>05</h3>
            <h3 className='text-two'>BEACHES</h3>
            </div>
          </div> 
        </Slider>
        
      </div>
    );
  }
}