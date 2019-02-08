import React, { Component } from 'react'
import './Resume.scss'
import resume from '../../img/dylanroberts-cv.jpg'
class Resume extends Component {
    render() {
        return (
            <div className="resume content">
                <img src={resume} height="1280" width="100%"></img>
            </div>
        )
    }
}

export default Resume
