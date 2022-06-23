import { useCallback } from 'react';
import { Locale as AntdLocale } from 'antd/lib/locale-provider';
// 项目内的语言包
import zhCN from '@/locales/zh_CN.json';
import enUS from '@/locales/en_US.json';
// antd 国际化
import antdZhCN from 'antd/lib/locale/zh_CN';
import antdEnUS from 'antd/lib/locale/en_US';

// 将当前语种记录到 localstorage 中
export const LOCALES_KEY = 'LANG_KEY';

export enum Locales {
  zh_CN = 'zh-CN',
  en_US = 'en-US',
}

export type LanguageItem = {
  key: Locales;
  label: string;
};

// 语言包的类型
type LocaleMessageType = Record<string, string>;

type LocaleMessageItem = {
  antd: AntdLocale;
  local: LocaleMessageType;
};

// 可切换的语言列表
const Langs: LanguageItem[] = [
  {
    key: Locales.zh_CN,
    label: '简体中文',
  },
  {
    key: Locales.en_US,
    label: 'English',
  },
];

// 通过函数导出语言列表，防止引用类型修改
export const getLangs = () => Langs;

// 获取默认语种
export function getDefaultLocale(): Locales {
  const langKeys = getLangs().map((x) => x.key);
  const systemLang = navigator.language as Locales;
  return (
    // 本地缓存
    (localStorage.getItem(LOCALES_KEY) as Locales) ||
    // 系统默认语言
    (langKeys.includes(systemLang) && systemLang) ||
    // 中文
    Locales.zh_CN
  );
}

// 获取语种对应的语言包
export function getLocaleMessage(loc: Locales): LocaleMessageItem {
  const localeMsg: Record<Locales, LocaleMessageItem> = {
    [Locales.zh_CN]: {
      local: zhCN,
      antd: antdZhCN,
    },
    [Locales.en_US]: {
      local: enUS,
      antd: antdEnUS,
    },
  };
  return localeMsg[loc] || localeMsg[Locales.zh_CN];
}

// 修改 <html> 的 lang 属性
export function setLocaleToHTMLLang(locale: Locales = getDefaultLocale()) {
  const html = window.document.querySelector('html');
  html && locale && (html.lang = locale);
}

export default function useChangeLocale() {
  // 切换语言
  const changeLocale = useCallback((locale: Locales) => {
    localStorage.setItem(LOCALES_KEY, locale);
    // setLocaleToHTMLLang(locale);
    window.location.reload();
  }, []);

  return changeLocale;
}
