import React, { Component } from 'react'
import { fallDown as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

class NavMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }
    closeMenu() {
        this.setState({ menuOpen: false })
    }
    render() {
        return (
            <div className="burger-menu">
                <Menu isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}>
                        <ul className="links">
                            <li><NavLink to="/about" onClick={() => this.closeMenu()}>about</NavLink></li>
                            <li><NavLink to="/work" onClick={() => this.closeMenu()}>work</NavLink></li>
                            <li><NavLink to="/resume" onClick={() => this.closeMenu()}>resume</NavLink></li>
                        </ul>
                </Menu>
            </div>
        )
    }
}

export default NavMobile
