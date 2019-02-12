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
            <div className="work">
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
                        <div><img src={require('../../img/breadmin/breadmin-dashboard.png')} alt="Breadmin Dashboard"></img></div>
                        <div><img src={require('../../img/breadmin/breadmin-dashboard-mobile.png')} alt="Breadmin Mobile Dashboard"></img></div>
                        <div><img src={require('../../img/breadmin/breadmin-products.png')} alt="Breadmin Products"></img></div>
                        <div><img src={require('../../img/breadmin/breadmin-users-mobile.png')} alt="Breadmin Users Mobile"></img></div>
                    </Slider>
                    <h2>Breadmin</h2>
                    <p>Breadmin is a bakery management management application with a RESTful API
                    my team and I created in the MEAN Stack. We worked with Forno Cultura, a
                    local bakery to create an application that suited their needs</p>
                </div>
            </div>
        )
    }
}

export default Work