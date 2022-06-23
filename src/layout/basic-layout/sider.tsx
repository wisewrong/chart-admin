import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const list: {
  label: string;
  key: string;
  href: string;
}[] = [
  {
    label: 'Chart',
    key: 'chart',
    href: '/chart',
  },
  // {
  //   label: 'Form',
  //   key: 'form',
  //   href: '/form',
  // },
];

const BasicLayoutSider: React.FC = () => {
  return (
    <Sider className="basic-layout-sider">
      <Menu>
        {list.map((x) => (
          <Menu.Item key={x.key}>
            <Link to={x.href}>{x.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default BasicLayoutSider;
