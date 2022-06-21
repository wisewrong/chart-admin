import React from 'react';
import { Avatar, Popover, Menu } from 'antd';
import {
  UserOutlined,
  GlobalOutlined,
  LockOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';

const langs = [
  {
    key: '1',
    label: '中文',
  },
  {
    key: '2',
    label: '英文',
  },
];

const UserInfo: React.FC = () => {
  const langMenu = <Menu items={langs} />;

  const overlay = (
    <>
      <div className="user-info-overview">
        <div className="title">Wise.Wrong</div>
        <div className="sub-title">Show me your code</div>
      </div>
      <div className="user-info-menu">
        <Popover
          content={langMenu}
          overlayClassName="lang-menu"
          placement="left"
          align={{
            offset: [16, 0],
          }}
        >
          <div className="item flex flex-align-center cursor-pointer">
            <GlobalOutlined />
            <span>切换语言</span>
          </div>
        </Popover>
        <div className="item flex flex-align-center cursor-pointer">
          <LockOutlined />
          <span>修改密码</span>
        </div>
        <div className="item flex flex-align-center cursor-pointer">
          <PoweroffOutlined />
          <span>退出登录</span>
        </div>
      </div>
    </>
  );

  return (
    <Popover
      placement="bottomRight"
      content={overlay}
      overlayClassName="user-info"
      trigger={['click']}
    >
      <Avatar className="cursor-pointer user-avatar" icon={<UserOutlined />} />
    </Popover>
  );
};

export default UserInfo;
