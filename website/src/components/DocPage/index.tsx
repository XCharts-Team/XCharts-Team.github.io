import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

import { ThemeClassNames, useDocsPreferredVersion } from '@docusaurus/theme-common';

import DocPageLayout from '../DocPageLayout';

import Translate, { translate } from '@docusaurus/Translate';

import AsyncImage from '@theme/AsyncImage'

import ArrowRight from './arrow-right.svg';
import UserIcon from './user.svg';
import PackageIcon from './package.svg';
import NormalUserBg from './simple.svg';
import DeveloperUserBg from './complex.svg';
import AnotherWorldGif from './Another-World.gif';

import type {
  PropSidebarItemCategory,
  PropSidebarItem,
} from '@docusaurus/plugin-content-docs';
import {
  useLatestVersion
} from '@docusaurus/plugin-content-docs/client'
import Link from '@docusaurus/Link';

const ArticleCategoryCard: React.FC<{ category: PropSidebarItemCategory }> = ({
  category,
}) => {
  return (
    <div className="flex flex-col shadow rounded-sm border border-grey-2 p-4 space-y-3">
      <div className="flex">
        <div className="text-h5 font-bold">{category.label}</div>
      </div>
      <div className="flex-1">
        <ul className="list-disc pl-4">
          {category.items.map((item, index) => {
            if (index >= 5) return null;
            return (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
};

const LandingPageView = (props) => {
  const { savePreferredVersionName } = useDocsPreferredVersion('default');
  const version = useLatestVersion()
  useEffect(() => {
    if (version) {
      savePreferredVersionName(version.name);
    }
  }, [version]);
  return (
    <DocPageLayout sidebar={props.sidebar}>
      <div className="max-w-[988px] mx-auto">
        <div className="text-h3 desktop:pb-5 pb-4 font-bold">
          {translate({
            id: 'theme.text.dochome',
            message: 'Doc Home',
          })}
        </div>
        <div className="space-y-4 md:space-y-5">
          <div className="text-h2 font-bold">
            {translate({
              id: 'theme.docs.docHome.expandedviewofdocs',
              message: 'Expanded View of Docs',
            })}
          </div>
          <div className="grid grid-cols-1 desktop:grid-cols-3 gap-4 desktop:gap-5">
            {props.sidebar.map((item: PropSidebarItem, index) => {
              if (item.type === 'category' && item.items.length > 0) {
                return <ArticleCategoryCard key={index} category={item} />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </DocPageLayout>
  );
};

export default (props) => {
  return <Layout wrapperClassName={ThemeClassNames.wrapper.docsPages}
  pageClassName={ThemeClassNames.page.docsDocPage}>
    <LandingPageView {...props} />
  </Layout>
}
