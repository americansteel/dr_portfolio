import React, { Component } from 'react'
import './Resume.scss'
import resume from '../../img/dylanroberts-cv.jpg'
class Resume extends Component {
    render() {
        return (
            <div className="resume content">
                <img src={resume} alt="Dylan Roberts Resume"></img>
            </div>
        )
    }
}

export default Resume
