import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component{
    componentDidMount(){
      const header = document.querySelector('#header')
      const navMenu = document.querySelector('.fazz-nav__menu')
      const headerTop = header.offsetTop;
  
      function handleScroll() {
        if (window.scrollY > headerTop) {
          header.classList.add('fazz-header--onscroll')
        } else {
          header.classList.remove('fazz-header--onscroll')
          navMenu.classList.remove('open')
        }
      }
      window.addEventListener('scroll', handleScroll)
      console.log(this.props.sticky)
    }

    toggleMenu = () => {
      const header = document.querySelector('#header')
      const navMenu = document.querySelector('.fazz-nav__menu')
      header.classList.add('fazz-header--onscroll')
      navMenu.classList.toggle('open')
    }
    
    render(){
        return(
            <header id="header" className="fazz-header">
                <div className="fazz-container">
                    <nav className="fazz-nav" role="navigation">
                        <div className="fazz-nav__toogle" onClick={this.toggleMenu}>
                            <span></span>
                        </div>
                        <div className="fazz-nav__brand">
                            <Link prefetch href="/">
                                <a>
                                <img className="faz-header__logo" src="/static/images/garuda-logo-01@2x.png" alt="garuda"/>
                                </a>
                            </Link>
                        </div>
                        <ul className="fazz-menu fazz-nav__menu">
                            <li><a href="#pengenalan">Apa itu AGEN GARUDA</a></li>
                            <li><a href="#keuntungan">Keuntungan</a></li>
                            <li><a href="#syarat">Syarat Masuk</a></li>
                            <li><a href="#daftar">Daftar</a></li>
                        </ul>
                    </nav>
                    
                </div>
            </header>
        )
    }
}

export default Header