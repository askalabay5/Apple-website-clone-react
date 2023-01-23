
import cart from '../../commonResource/images/icons/cart-sm.png'
import logo from '../../commonResource/images/icons/logo-sm.png'
import search from '../../commonResource/images/icons/search-icon-sm.png'
import React, { Component } from 'react'
import HLink from './HeaderLink/HLink'
export default class Header extends Component {
    render() {
        return (
            <div>

                <header className="nav-wrapper fixed-top">
                    <div className="container">
                        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                                ☰
                            </button>
                            <a className="navbar-brand mx-auto" href="#"><img src={logo} /></a>

                            <div className="navbar-collapse collapse">
                                <ul className="navbar-nav nav-justified w-100 nav-fill">
                                    <HLink url='/mac' name='Mac' />
                                    <HLink url='/iphone' name='iphone' />
                                    <HLink url='/ipad' name='ipad' />
                                    <HLink url='/watch' name='Watch' />
                                    <HLink url='/tv' name='Tv' />
                                    <HLink url='/music' name='Music' />
                                    <HLink url='/support' name='support' />
                                    <HLink url='/search' pic={search} />
                                    <HLink url='/cart' pic={cart} />

                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

            </div>
        )
    }
}
