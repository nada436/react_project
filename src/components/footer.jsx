import React, { Component } from 'react';

class Footer extends Component {
  currentyear = new Date().getFullYear();

  render() {
    return (
      <div className='fixed bottom-0 w-full flex items-center justify-around p-4'>
        <p>© {this.currentyear} Movix. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    );
  }
}

export default Footer;