import React, { useCallback, useMemo } from 'react';
import { Avatar, Popover, Menu } from 'antd';
import { useIntl } from 'react-intl';
import {
  UserOutlined,
  GlobalOutlined,
  LockOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import useChangeLocale, {
  getLangs,
  Locales,
  getDefaultLocale,
} from '@/hooks/useChangeLocale';

const langs = getLangs();

const UserInfo: React.FC = () => {
  const { formatMessage } = useIntl();
  const changeLocale = useChangeLocale();

  // 切换语言
  const handleChange = useCallback(
    (v) => {
      const lang = v.key as Locales;
      changeLocale(lang);
    },
    [changeLocale],
  );

  // 当前语种
  const currentLocal = useMemo(getDefaultLocale, []);

  // 可切换的语种
  const langMenu = (
    <Menu items={langs} onClick={handleChange} selectedKeys={[currentLocal]} />
  );

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
            <span>{formatMessage({ id: 'common.user.language' })}</span>
          </div>
        </Popover>
        <div className="item flex flex-align-center cursor-pointer">
          <LockOutlined />
          <span>{formatMessage({ id: 'common.user.password.edit' })}</span>
        </div>
        <div className="item flex flex-align-center cursor-pointer">
          <PoweroffOutlined />
          <span>{formatMessage({ id: 'common.user.signout' })}</span>
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
