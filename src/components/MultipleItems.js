import React, { Component } from "react";
import Slider from "react-slick";
import {RiArrowRightCircleLine, RiArrowLeftCircleLine } from 'react-icons/ri'


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
            <img className='image' alt='carousel-img-one' src='https://images.unsplash.com/photo-1580394640019-00d34094ae13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2VueWF8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail'>
            <h3 className='text-one'>01</h3>
            <h3 className='text-two'>CULTURES</h3>
            </div>
          </div>
          <div key={2}>
            <img className='image' alt='carousel-img-two' src='https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtlbnlhfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail'>
            <h3 className='text-one'>02</h3>
            <h3 className='text-two'>WILDLIFE</h3>
            </div>
          </div>
          <div key={3}>
            <img className='image' alt='carousel-img-three' src='https://images.unsplash.com/photo-1558462610-cf8d1b0248a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGtlbnlhfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail'>
            <h3 className='text-one'>03</h3>
            <h3 className='text-two'>SCENERY</h3>
            </div>
          </div>
          <div key={4}>
            <img className='image' alt='carousel-img-four' src='https://images.unsplash.com/photo-1591894509537-c42013bc8bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGtlbnlhfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail'>
            <h3 className='text-one'>04</h3>
            <h3 className='text-two'>ADVENTURES</h3>
            </div>
          </div>
          <div key={5}>
            <img className='image' alt='carousel-img-five' src='https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
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