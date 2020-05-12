import React from 'react';
import Menu, { MenuItem, SubMenu, Divider } from 'rc-menu';

import './TitleBar.scss';

const TitleBarMenu = () => {
  return (
    <Menu>
      <SubMenu title="2">
        <MenuItem>2-1</MenuItem>
        <MenuItem>2-2</MenuItem>
        <MenuItem>2-3</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const TitleBar = () => {
  return (
    <div className="title-bar bg-lighter-3">
      <div className="title-bar-icon">
        <i className="fas fa-tag"></i>
      </div>
      <TitleBarMenu className="title-bar-menu" />
      <div className="title-bar-main">Hello!</div>
    </div>
  );
};

export default TitleBar;
