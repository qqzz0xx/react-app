import React from 'react';
import { Menu, Dropdown } from 'antd';

import './TitleBar.scss';

const FileMenu = (
  <Menu>
    <Menu.Item>
      <a href="#Exit">Exit</a>
    </Menu.Item>
  </Menu>
);

const EditMenu = (
  <Menu>
    <Menu.Item>
      <a href="#Undo">Undo</a>
    </Menu.Item>

    <Menu.Item>
      <a href="#Redo">Redo</a>
    </Menu.Item>
  </Menu>
);

const TitleBar = () => {
  return (
    <div className="title-bar bg-lighter-3">
      <div className="title-bar-icon">
        <i className="fas fa-tag"></i>
      </div>
      <div className="title-bar-menu">
        <Dropdown
          trigger={['click']}
          className="title-bar-file"
          overlay={FileMenu}
        >
          <a onClick={(e) => e.preventDefault()}>File</a>
        </Dropdown>

        <Dropdown
          trigger={['click']}
          className="title-bar-editor"
          overlay={EditMenu}
        >
          <a onClick={(e) => e.preventDefault()}>Edit</a>
        </Dropdown>
      </div>
      <div className="title-bar-main">Hello!</div>
      <div className="title-bar-right">
        <i className="far fa-window-minimize"></i>
        <i className="far fa-window-maximize"></i>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
};

export default TitleBar;
