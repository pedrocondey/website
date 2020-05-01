import React, { Component } from 'react'
import logoNav from '../images/logo-about.png'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-white">
                    <Link className="navbar-brand" to="/">
                        <img src={logoNav} width="30" height="30" alt="" />
                    </Link>
                </nav>
            </div>
        )
    }
}
