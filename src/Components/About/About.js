import React, { Component } from 'react'
import './About.scss'
import dylan from '../../img/dr2.jpg'

class About extends Component {
    render() {
        return (
            <div class="about content">
            <img src={dylan} alt="dylan roberts"></img>
                <h1>dylan roberts</h1>
                <h2>full stack developer</h2>
                <div>
                    <a href="mailto:dylanllewelynroberts@gmail.com" target="_blank" rel="noopener noreferrer">e-mail</a>
                    <a href="https://github.com/americansteel"  target="_blank" rel="noopener noreferrer">github</a>
                    <a href="https://linkedin.com/in/dylan-roberts-dev"  target="_blank" rel="noopener noreferrer">linkedin</a>
                </div>
            </div>
        )
    }
}

export default About
