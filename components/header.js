import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PlaceHolder from './place-holder'

const Header = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`header-header ${props.rootClassName} `}
      >
        <nav className="header-nav">
          <div className="header-container">
            <Link href="/incio">
              <a className="header-link">Poseidon</a>
            </Link>
            <div className="header-menu">
              <Link href="/incio">
                <a className="header-link1">Início</a>
              </Link>
              <Link href="/projetos">
                <a className="header-link3">
                  <span>Projetos</span>
                </a>
              </Link>
            </div>
            <div className="header-container1">
              <div className="header-container2">
                <PlaceHolder rootClassName="place-holder-root-class-name"></PlaceHolder>
              </div>
              <div data-type="BurgerMenu" className="header-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-type="MobileMenu" className="header-mobile-menu">
          <div className="header-top">
            <Link href="/incio">
              <a className="header-link4">Poseidon</a>
            </Link>
            <div data-type="CloseMobileMenu" className="header-close-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-menu1">
              <Link href="/incio">
                <a className="header-link5">Início</a>
              </Link>
              <Link href="/projetos">
                <a className="header-link6">Projetos</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 3;
            position: fixed;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: rgba(51, 48, 48, 0.8);
          }
          .header-container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link {
            color: #ffffff;
            font-size: 1.3rem;
            transition: 0.3s;
            font-family: NMSFuturaProBook;
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            letter-spacing: -0.025rem;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link:hover {
            color: #c19696;
            cursor: pointer;
            transform: scale(1.1);
          }
          .header-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-link1 {
            color: #ffffff;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header-link1:hover {
            cursor: pointer;
            transform: scale(1.2);
          }
          .header-link3 {
            color: #ffffff;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header-link3:hover {
            cursor: pointer;
            transform: scale(1.2);
          }
          .header-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .header-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 761px;
            display: none;
            padding: var(--dl-space-space-unitandahalfunit);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .header-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link4 {
            color: var(--dl-color-secondary-700);
            font-size: 2rem;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 800;
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-icon2 {
            width: 24px;
            height: 24px;
          }
          .header-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-link5 {
            font-size: 1.5rem;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header-link5:hover {
            transform: scale(1.2);
          }
          .header-link6 {
            font-size: 1.5rem;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header-link6:hover {
            transform: scale(1.2);
          }
          .header-root-class-name {
            top: 0px;
            right: 0px;
          }
          @media (max-width: 991px) {
            .header-nav {
              max-width: 960px;
            }
          }
          @media (max-width: 767px) {
            .header-menu {
              display: none;
            }
            .header-burger-menu {
              display: flex;
            }
            .header-icon {
              fill: #ffffff;
            }
            .header-mobile-menu {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .header-container2 {
              display: none;
            }
            .header-icon {
              fill: #ffffff;
            }
            .header-mobile-menu {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
