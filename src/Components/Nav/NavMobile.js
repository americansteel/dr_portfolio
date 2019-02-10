import React, { Component } from 'react'
import { fallDown as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

class NavMobile extends Component {
    render() {
        return (
            <div className="burger-menu">
                <Menu>
                    <ul className="links">
                        <li><NavLink to="/about">about</NavLink></li>
                        <li><NavLink to="/work">work</NavLink></li>
                        <li><NavLink to="/resume">resume</NavLink></li>
                    </ul>
                </Menu>
            </div>
        )
    }
}

export default NavMobile
