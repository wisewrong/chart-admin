import React from 'react';
import { Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserInfo: React.FC = () => {
  const overlay = <div>wisewrong</div>;

  return (
    <Dropdown overlay={overlay} trigger={['click']}>
      <Avatar className="cursor-pointer user-avatar" icon={<UserOutlined />} />
    </Dropdown>
  );
};

export default UserInfo;
