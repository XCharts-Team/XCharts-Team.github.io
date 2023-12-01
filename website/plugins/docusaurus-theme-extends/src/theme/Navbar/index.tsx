/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useState, useEffect, useMemo } from 'react';
import Translate from '@docusaurus/Translate';
import Toggle from '@theme/Toggle';
import {
  useThemeConfig,
  useColorMode,
  useLockBodyScroll,
} from '@docusaurus/theme-common';

import useMobileSidebar from '../../utils/useMobile';

import ArrowRightIcon from '../icons/arrow-right.svg';

import WebchatImg from '../icons/wechat-community.jpg'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import AsyncImage from '@theme/AsyncImage'

import {
  CollapseDropDown,
  DropdownNavbarItem,
  LocaleDropdownNavbarItem,
  SimpleDropdown,
  VersionDropdownNavbarItem,
} from './DropdownNavbarItem';

import clsx from 'clsx';

import { GithubStars } from './githubStar';

import MenuIcon from './menu.svg';
import LogoIcon from './logo.svg';
import CloseIcon from './x.svg';
import { NavLink, WithLocalLink, WithVersionLink } from './WithVersionUrl';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';

const resources = [
  {
    label: translate({
      id: 'theme.text.blog',
      message: 'Blogs',
    }),
    href: '/blog',
  },
  // {
  //   label: translate({
  //     id: 'theme.text.newsletters',
  //     message: 'Newsletters',
  //   }),
  //   href: '/newsletter',
  // }
];

const communities = [
  // {
  //   label: translate({
  //     id: 'theme.text.wechat',
  //     message: 'Wechat',
  //   }),
  //   href: '',
  //   popover: <AsyncImage src={WebchatImg} />
  // },
  {
    label: translate({
      id: 'theme.text.globalforum',
      message: 'Global Forum',
    }),
    href: 'https://github.com/XCharts-Team/XCharts/discussions',
    // popover: <AsyncImage src={WebchatImg} />
  },
  {
    label: translate({
      id: 'theme.text.qq',
      message: 'QQ Group: 202030963',
    }),
    href: '',
    // popover: <AsyncImage src={WebchatImg} />
  },
];

function useColorModeToggle() {
  const {
    colorMode: { disableSwitch },
  } = useThemeConfig();
  const { isDarkTheme, setLightTheme, setDarkTheme } = useColorMode();
  const toggle = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme]
  );
  return { isDarkTheme, toggle, disabled: disableSwitch };
}

type NavbarMobileSidebarProps = {
  sidebarShown: boolean;
  toggleSidebar: () => void;
};

function NavbarMobileSidebar({
  sidebarShown,
  toggleSidebar,
}: NavbarMobileSidebarProps) {
  useLockBodyScroll(sidebarShown);

  const colorModeToggle = useColorModeToggle();

  return (
    <div className="navbar-sidebar flex flex-col overflow-hidden">
      <div className="desktop:h-20 h-16 flex items-center px-3 border-b border-grey-3">
        <div className="flex items-center space-x-3">
          <a href="/">
            {/* <LogoIcon width={120} /> */}
            <h1>XCharts</h1>
          </a>
          <GithubStars />
        </div>
        <button
          type="button"
          className="clean-btn navbar-sidebar__close"
          onClick={toggleSidebar}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="px-3 py-4 flex-1 overflow-hidden relative">
        <ul className="space-y-3 overflow-auto h-full">
          <li className="px-2 py-1">
            <WithLocalLink
              className="block"
              href="/docs/"
              label="Doc Home"
              matchPath="/docs"
            />
          </li>
          <li className="px-2 py-1">
            <WithVersionLink
              className="block"
              href="/api/"
              label="API"
              matchPath="/api"
            />
          </li>
          <CollapseDropDown label="Resource" items={resources} />
          <CollapseDropDown label="Community" items={communities} />
        </ul>
      </div>
      <div className="border-t py-3">
        <ul className="flex items-center justify-around space-x-3">
          <li className="flex-1">
            <VersionDropdownNavbarItem position="top" />
          </li>
          <li className="flex-1">
            <LocaleDropdownNavbarItem position="top" />
          </li>
          <li>
            <Toggle
              checked={colorModeToggle.isDarkTheme}
              onChange={colorModeToggle.toggle}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

function Navbar(props): JSX.Element {
  const colorModeToggle = useColorModeToggle();

  const mobileSidebar = useMobileSidebar();

  const { pathname } = useLocation();

  const {
    i18n: { defaultLocale, currentLocale },
  } = useDocusaurusContext();

  const resourceswithactive = resources.map((item) => {
    let matchpath = item.href
    if (defaultLocale !== currentLocale) matchpath = '/' + currentLocale + matchpath
    const active = pathname.startsWith(matchpath)
    return { ...item, active }
  })

  return (
    <nav
      id="header-nav"
      className={clsx(
        'bg-grey-0 border-b border-grey-3 flex items-center justify-between sticky top-0 desktop:h-14 h-18 z-30 px-3 desktop:px-8',
        { 'navbar-sidebar--show': mobileSidebar.shown }
      )}
    >
      <div className="flex items-center space-x-5">
        <a href="/">
          {/* <LogoIcon /> */}
          <h1>XCharts</h1>
        </a>
        {/* <div className="hidden desktop:inline-block">
          <GithubStars />
        </div> */}
      </div>
      <ul className="hidden desktop:flex items-center">
        <li className="pr-6 navitem">
          <GithubStars />
        </li>
        
        <li className="pr-6 navitem">
          <WithLocalLink
            href="/docs/"
            label={translate({
              id: 'theme.text.dochome',
              message: 'Doc Home',
            })}
            matchPath="/docs"
          />
        </li>
        
        {<li className="pr-6 navitem">
          <WithLocalLink
            href="/examples/"
            label={translate({
              id: 'theme.text.onlinedemo',
              message: 'Demo',
            })}
            matchPath="/examples"
          />
        </li> }
        <li className="pr-6 navitem">
          <WithLocalLink
            href="/blog/"
            label={translate({
              id: 'theme.text.blog',
              message: 'Blog',
            })}
            matchPath="/blog"
          />
        </li>
        
        {/* <li className="pr-6 navitem">
          <WithLocalLink
            href="/contact-us/"
            label={translate({
              id: 'theme.text.contactus',
              message: 'Contact Us',
            })}
            matchPath="/contact-us"
          />
        </li> */}
        <li className="pr-6">
          <SimpleDropdown
            labelNode={
              <div className="cursor-pointer hover:text-brand-cyan p-[6px]">
                {translate({
                  id: 'theme.text.community',
                  message: 'Community',
                })}
              </div>
            }
            description={
              <>
                <div className="pb-4">
                  {translate({
                    id: 'theme.navbar.communityinfo',
                    message: "Join XCharts's Community.",
                  })}
                </div>
                <a
                  href="https://github.com/XCharts-Team/XCharts"
                  className="text-h4 flex justify-between items-center text-black hover:text-white"
                >
                  {translate({
                    id: 'theme.text.learnmore',
                    message: 'Learn more',
                  })}
                  <ArrowRightIcon />
                </a>
              </>
            }
            label={translate({
              id: 'theme.text.community',
              message: 'Community',
            })}
            items={communities}
          />
        </li>
        <li className="mr-4">
          <VersionDropdownNavbarItem />
        </li>
        <li className="mr-4">
          <LocaleDropdownNavbarItem />
        </li>
        <li className="mr-4">
          <Toggle
            checked={colorModeToggle.isDarkTheme}
            onChange={colorModeToggle.toggle}
          />
        </li>
        {/* <iframe src="https://ghbtns.com/github-btn.html?user=XCharts-Team&amp;repo=XCharts&amp;type=star&amp;count=true&amp;size=large" width="160" height="30" title="GitHub Stars"></iframe> */}
      </ul>
      <div
        className="inline-block desktop:hidden cursor-pointer"
        onClick={mobileSidebar.toggle}
      >
        <MenuIcon />
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />
      {mobileSidebar.shouldRender && (
        <NavbarMobileSidebar
          sidebarShown={mobileSidebar.shown}
          toggleSidebar={mobileSidebar.toggle}
        />
      )}
    </nav>
  );
}

export default Navbar;
