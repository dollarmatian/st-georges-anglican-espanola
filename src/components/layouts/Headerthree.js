import React, { Fragment } from 'react';
import Navhelper from '../../helper/Navhelper';
import Canvas from './Canvas';
import Mobilemenu from './Mobilemenu';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';

class Headerthree extends Navhelper {
  render() {
    const stickyHeader = this.state.stickyHeader ? ' sticky' : '';
    return (
      <Fragment>
        {/* partial:partia/__sidenav.html */}
        <aside
          className={
            this.state.canvasMethod === true
              ? 'sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg open'
              : 'sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg'
          }
        >
          <Canvas />
        </aside>
        <div
          className='sigma_aside-overlay aside-trigger-right'
          onClick={this.toggleCanvas}
        />
        {/* partial */}
        {/* partial:partia/__mobile-nav.html */}
        <aside
          className={
            this.state.navMethod === true
              ? 'sigma_aside sigma_aside-left open'
              : 'sigma_aside sigma_aside-left'
          }
        >
          <Mobilemenu />
        </aside>
        <div
          className='sigma_aside-overlay aside-trigger-left'
          onClick={this.toggleNav}
        />
        {/* partial */}
        {/* partial:partia/__header.html */}
        <header
          className={
            'sigma_header header-3 can-sticky header-absolute' + stickyHeader
          }
        >
          {/* Middle Header Start */}
          <div className='sigma_header-middle'>
            <nav className='navbar'>
              {/* Logo Start */}
              <div className='sigma_logo-wrapper'>
                <Link to='/' className='navbar-brand'>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
                    alt='logo'
                  />
                </Link>
              </div>
              {/* Logo End */}
              {/* Menu */}
              <div className='sigma_header-inner'>
                <div className='d-flex justify-content-center justify-content-lg-between'>
                  <div className='sigma_header-controls style-2 p-0 border-0'>
                    <ul className='sigma_header-top-links'>
                      <li className='menu-item'>
                        {' '}
                        <a rel={'external'} href='tel:+7058691244'>
                          {' '}
                          <i className='fal fa-phone' /> (705) 869-1244
                        </a>{' '}
                      </li>
                      <li className='menu-item'>
                        {' '}
                        <a
                          rel={'external'}
                          href='mailto:stgeorgesespanola@gmail.com'
                        >
                          {' '}
                          <i className='fal fa-envelope' />{' '}
                          stgeorgesespanola@gmail.com
                        </a>{' '}
                      </li>
                    </ul>
                  </div>
                  <ul className='navbar-nav'>
                    {/* Data */}
                    {navigation.map((item, i) => (
                      <li
                        key={i}
                        className={
                          item.child === true
                            ? 'menu-item menu-item-has-children'
                            : 'menu-item'
                        }
                      >
                        {item.child === true ? (
                          <Link to='#'>{item.linkText}</Link>
                        ) : (
                          <Link to={item.link}>{item.linkText}</Link>
                        )}
                        {item.child === true ? (
                          <ul className='sub-menu'>
                            {item.submenu.map((item, i) => (
                              <li
                                key={i}
                                className={
                                  item.child === true
                                    ? 'menu-item menu-item-has-children'
                                    : 'menu-item'
                                }
                              >
                                {item.child === true ? (
                                  <Link to='#'>{item.linkText}</Link>
                                ) : (
                                  <Link to={item.link}>{item.linkText}</Link>
                                )}
                                {item.child === true ? (
                                  <ul className='sub-menu'>
                                    {item.submenu.map((item, i) => (
                                      <li className='menu-item' key={i}>
                                        <Link to={item.link}>
                                          {item.linkText}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  ''
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          ''
                        )}
                      </li>
                    ))}
                    {/* Data */}
                  </ul>
                </div>
              </div>
              {/* Controls */}
              <div className='sigma_header-controls style-2'>
                <Link to='/donation' className='sigma_btn-custom'>
                  {' '}
                  Donate Here
                </Link>
                <ul className='sigma_header-controls-inner'>
                  {/* Mobile Toggler */}
                  <li
                    className='aside-toggler style-2 aside-trigger-left'
                    onClick={this.toggleNav}
                  >
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* Middle Header End */}
        </header>
        {/* partial */}
      </Fragment>
    );
  }
}

export default Headerthree;
