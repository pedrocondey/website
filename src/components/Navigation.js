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
                    <span class="navbar-text">
                    <Link to="/sub">sub</Link>{' '}
                    <Link to="/muto">muto</Link>{' '}
                    <Link to="/informis">informis</Link>{' '}
                    <Link to="/voice">voice</Link>{' '}
                    <Link to="/shadow">shadow</Link>{' '}

                    </span>

                    <span class="navbar-text">
                    <a type="button" href="https://www.instagram.com/by.mariameira" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </span>

                </nav>
            </div>
        )
    }
}
