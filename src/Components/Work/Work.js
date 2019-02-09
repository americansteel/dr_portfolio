import React, { Component } from 'react'
import './Work.scss'
import Slider from 'react-slick'
import { HookMapInterceptor } from 'tapable';

class Work extends Component {
    render() {
        var settings = {
            arrows: true,
            infinite: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div className="work content">
                <div className="work-example">
                <Slider {...settings}>
                    <div><img src={require('../../img/dabacana/dabacana-main.png')}></img></div>
                    <div><img src={require('../../img/dabacana/dabacana-tablet.png')}></img></div>
                    <div><img src={require('../../img/dabacana/dabacana-mobile.png')}></img></div>
                </Slider>
                <h2>BLVD MTL</h2>
                </div><div className="work-example">
                <Slider {...settings}>
                    <div><h3>img1</h3></div>
                    <div><h3>img2</h3></div>
                    <div><h3>img3</h3></div>
                    <div><h3>img4</h3></div>
                </Slider>
                <h2>Dabacana</h2>
                </div><div className="work-example">
                <Slider {...settings}>
                    <div><h3>img1</h3></div>
                    <div><h3>img2</h3></div>
                    <div><h3>img3</h3></div>
                    <div><h3>img4</h3></div>
                </Slider>
                <h2>Breadmin</h2>
                </div>
            </div>
        )
    }
}

export default Work