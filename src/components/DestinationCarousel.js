import React, { Component } from "react";
import Slider from "react-slick";
import {RiArrowRightCircleLine, RiArrowLeftCircleLine } from 'react-icons/ri'


export default class DestinationCarousel extends Component {
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
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div>
        <div className='button-div'>
          <RiArrowLeftCircleLine className='left-arrow-dest' onClick={this.previous}/>
          <RiArrowRightCircleLine className='right-arrow-dest' onClick={this.next}/>
        </div>
        <Slider className='slider' ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <img className='image' alt='carousel-img-one' src='https://images.unsplash.com/photo-1585523658894-cc78fc2c8f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Nairobi</h3>
            </div>
          </div>
          <div key={2}>
            <img className='image' alt='carousel-img-two' src='https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtlbnlhfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Mombasa</h3>
            </div>
          </div>
          <div key={3}>
            <img className='image' alt='carousel-img-three' src='https://images.unsplash.com/photo-1609849012254-828f19a1b9b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrdXJ1fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Nakuru</h3>
            </div>
          </div>
          <div key={4}>
            <img className='image' alt='carousel-img-four' src='https://images.unsplash.com/photo-1627716144992-f34c2afb920e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hYXNhaSUyMG1hcmF8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Maasai Mara</h3>
            </div>
          </div>
          <div key={5}>
            <img className='image' alt='carousel-img-five' src='https://images.unsplash.com/photo-1611252666149-f96f312d2b36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1ib3NlbGl8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Amboseli</h3>
            </div>
          </div> 
          <div key={6}>
            <img className='image' alt='carousel-img-five' src='https://images.unsplash.com/photo-1605302596013-fccbe2f06298?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHNhdm98ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Tsavo</h3>
            </div>
          </div> 
          <div key={7}>
            <img className='image' alt='carousel-img-five' src='https://images.unsplash.com/photo-1619550481986-5751a79d0d1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtdXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Lamu</h3>
            </div>
          </div>
          <div key={8}>
            <img className='image' alt='carousel-img-five' src='https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Naivasha</h3>
            </div>
          </div>
          <div key={9}>
            <img className='image' alt='carousel-img-five' src='https://images.unsplash.com/photo-1627981584479-9605e4e7d1d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsaW5kaXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <div className='slider-detail-dest'>
            <h3 className='text-two-dest'>Malindi</h3>
            </div>
          </div>
        </Slider>
        
      </div>
    );
  }
}