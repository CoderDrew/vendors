import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-drew navbar-bg-drew'>
          <a className='navbar-brand' href='http://www.wyodrew.com'>
            <i className={this.props.icon}></i> {this.props.title}
          </a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a className='nav-link' href='http://www.wyodrew.com'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
