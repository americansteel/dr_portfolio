import React, { Component } from 'react'
import './Work.scss'
import Slider from 'react-slick'

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
                        <div><img src={require('../../img/blvd/blvd-contact.png')} alt="BLVD MTL Contact "></img></div>
                        <div><img src={require('../../img/blvd/blvd-gallery.png')} alt="BLVD MTL Grid Gallery"></img></div>
                        <div><img src={require('../../img/blvd/blvd-modal.png')} alt="BLVD MTL Image Viewer"></img></div>

                    </Slider>
                    <h2>BLVD MTL</h2>
                </div>
                <div className="work-example">
                    <Slider {...settings}>
                        <div><img src={require('../../img/dabacana/dabacana-main.png')} alt="Dabacana Main Page"></img></div>
                        <div><img src={require('../../img/dabacana/dabacana-tablet.png')} alt="Dabacana Tablet"></img></div>
                        <div><img src={require('../../img/dabacana/dabacana-mobile.png')} alt="Dabacana Shop Mobile"></img></div>
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