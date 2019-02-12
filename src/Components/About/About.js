import React, { Component } from 'react'
import './About.scss'
import dylan from '../../img/dr2.jpg'

class About extends Component {
    render() {
        return (
            <div class="about">
            <img src={dylan} alt="dylan roberts"></img>
                <h1>dylan roberts</h1>
                <p>Toronto based web developer specializing in full stack Javascript. Currently looking to join a team to
                    develop effective and well designed web applications.   </p>
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
