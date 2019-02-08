import React, { Component } from 'react'
import './Nav.scss'
import { NavLink} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
            <h1 className="name"><NavLink to="/about">dylan roberts</NavLink></h1>
            <ul className="links">
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/work">work</NavLink></li>
                <li><NavLink to="/resume">resume</NavLink></li>
            </ul>
            </div>
        )
    }
}

export default Nav