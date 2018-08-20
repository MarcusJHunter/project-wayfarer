import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";
import London from '../img/London1.jpg';
import Sydney from '../img/Sydney1.jpg';
import NY from '../img/NYC1.jpeg';
import SF from '../img/SF1.jpg';

class DemoCarousel extends Component{
    render() {
      return(
      <div className="carousel">
        <Carousel autoPlay showThumbs={false}>
          <div >
            <img className="slide" src={London} alt="London"/>
            <p>London</p>
          </div>
          <div>
            <img className="slide" src={SF} alt="SF" />
            <p>SF</p>
          </div>
          <div>
            <img className="slide" src={Sydney} alt="London" />
            <p>Sydney</p>
          </div>
          <div>
            <img className="slide" src={NY} alt="NYC" />
            <p>NYC</p>
          </div>
        </Carousel>
      </div>

      );
    }
}

export default DemoCarousel
