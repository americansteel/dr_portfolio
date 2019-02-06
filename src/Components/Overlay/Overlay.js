import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './Overlay.scss'
import fence from '../../img/fence.jpg'
import enter from '../../img/enter.gif'

class Overlay extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showOverlay: true
        };
    }
    hideOverlay () {
        this.setState({
            showOverlay: false
        });
    }
 
    render() {
        return (
            <div className={`overlay ${this.state.showOverlay ? '' : 'hide'}`}>
                <div id="overlay-container">
                    <div id="img-container">
                        <img id="fence" src={fence} alt={"Fence"}/>
                        <img id="enter-btn" src={enter} alt={"Enter"} onClick= {this.hideOverlay.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Overlay
