import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const list: {
  label: string;
  key: string;
}[] = [
  {
    label: 'Chart',
    key: 'chart',
  },
  {
    label: 'Form',
    key: 'form',
  },
];

const SiderMenu: React.FC = () => {
  return (
    <Sider>
      <Menu>
        {list.map((x) => (
          <Menu.Item key={x.key}>
            <Link to={`/${x.key}`}>{x.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
