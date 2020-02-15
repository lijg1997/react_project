import React, { Component } from 'react';

import './css/header.less';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="header-top"></div>
        <div className="header-bottom">
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
        </div>
      </div>
    );
  }
}
