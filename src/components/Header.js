import React, { Component } from 'react'
import logo from '../images/mariameira-small2.png'
import logobig from '../images/mmm2.png'

export default class Header extends Component {
    render() {
        return (
                <header className="header" >
                    <div className="header-content animated fadeIn delay-1s">
                        <img className="logo" src="../images/mariameira-small2.png" srcSet="../images/mmm2.png 2000w" alt="MM Logo" />
                    </div>
                </header>
        )
    }
}
