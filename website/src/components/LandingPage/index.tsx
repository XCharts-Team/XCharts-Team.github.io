import React from 'react';
import Layout from '@theme/Layout';

import { ThemeClassNames, useWindowSize } from '@docusaurus/theme-common';

import { translate } from '@docusaurus/Translate';

import clsx from 'clsx';
import styles from './styles.module.css';

import ArrowRight from './arrow-right.svg';
import SignImage from './sign.png';

import Movement from './Movement.svg';
import ProgressIcon from './progress.svg';
import MomentIcon from './moments.svg';

const DesktopUserStories = (props) => {
  // const mobile = useMobile
  return (
    <div className="flex-1 pb-16">
      <div className="mx-auto max-w-[908px] mt-12 ">
        <div className="text-brand-cyan flex items-center max-w-[908px] ">
          <h1 className={clsx('text-brand-cyan-gradients font-bold')}>
            A charting and data visualization library for Unity.
          </h1>
        </div>
        <div className="text-brand-cyan flex items-center max-w-[908px]">
          <h1 className={clsx('text-brand-cyan-gradients font-bold')}>
            Unity数据可视化图表插件。
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[908px] mt-12">
        <div className="text-brand-cyan flex items-center max-w-[908px]">
          <button className="bg-brand-cyan py-2 px-3 rounded font-bold text-white hover:bg-brand-cyan-dark" 
          >
            <h3><a href="/docs">Get Started</a></h3>
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-[908px] mt-12">
        <div className="flex items-center space-x-6">
          <div>
            <div className="mb-6">
              <h3 className={clsx('text-brand-cyan-gradients font-bold')}>
                目标
              </h3>
            </div>
            <h4>
              XCharts致力于为Unity开发人员和创意人员提供一套强大易用的图表库，能快速的通过Unity实现和定制各种图表展示。
            </h4>
          </div>
          <div>
            <Movement />
          </div>
        </div>
      </div>
      <div className={clsx(styles.cardContainer, 'space-x-6')}>
        <ProgressIcon />
        <div className="max-w-[560px]">
          <div className="mb-6">
            <h3 className={clsx('text-brand-cyan-gradients font-bold')}>
              为什么用XCharts
            </h3>
          </div>
          <ul className="list-disc pl-4">
            <li>
              Unity上最好用的免费开源图表插件，5分钟即可上手。
            </li>
            <li>
              支持折线图、柱状图、饼图、雷达图、散点图、热力图、环形图、K线图、极坐标、平行坐标等十多种常见的图表。另有多种扩展组件和扩展图表。
            </li>
            <li>
              提供扩展定制支持等服务，满足用户个性化需求。
            </li>
            <li>
              持续维护和更新；稳定；可靠。
            </li>
          </ul>
        </div>

      </div>

      <div className={clsx(styles.cardContainer)}>
        <div className="max-w-[560px]">
          <h3 className="mb-6 text-brand-cyan-gradients font-bold">
            将来
          </h3>
          <ul className="list-disc pl-4">
            <li>完善图表编辑体验，让非开发人员也能轻松制作图表。</li>
            <li>增强图表数据展示能力，增强图表效果。</li>
            <li>增加更多的扩展组件和扩展图表支持。</li>
            <li>完善文档和教程。</li>
          </ul>
        </div>
        <MomentIcon />
      </div>
    </div >
  );
};

const MobileUserStories = (props) => {
  return (
    <div className="flex-1 pb-8 space-y-6">
      <div className={clsx('w-full flex items-end px-4', styles.topbg)}>
        <div className="desktop:w-docmain mx-auto">
          {/* <div className="mb-14">
            <div className="text-black mb-4">User story</div>
            <h1 className="max-w-[530px] text-white font-bold">
              “ XCharts, a charting libray for Unity.”
            </h1>
          </div> */}
        </div>
      </div>
      <div className="p-4 text-brand-cyan">
        <h4>
          一款基于UGUI的功能强大，简单易用的Unity数据可视化图表插件。
        </h4>
        <h4><a href="/docs"> ☞ 了解更多</a></h4>
      </div>
      <div className="px-4 space-y-6">
        <div className="flex justify-between items-end">
          <h3 className={clsx('text-brand-cyan-gradients font-bold')}>目标</h3>
          <Movement width={132} height={132} />
        </div>
        <div>
          <h4>
            XCharts致力于为Unity开发者和创意人员提供一套强大易用的图表库，能快速的在Unity中实现各种图表的展示。
          </h4>
        </div>
      </div>
      <div className="px-4 space-y-6">
        <div className="flex justify-between items-end">
          <h3 className={clsx('text-brand-cyan-gradients font-bold')}>为什么使用XCharts</h3>
          <ProgressIcon width={132} height={132} />
        </div>
        <div>
          <ul className="list-disc pl-4">
            <li>
              Unity上最好用的免费开源图表插件，5分钟即可上手。
            </li>
            <li>
              支持折线图、柱状图、饼图、雷达图、散点图、热力图、环形图、K线图、极坐标、平行坐标等十多种常见的图表。
            </li>
            <li>
              提供扩展定制支持等服务，满足用户个性化需求。
            </li>
            <li>
              持续维护和更新；稳定；可靠。
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 space-y-6">
        <div className="flex justify-between items-end">
          <h3 className={clsx('text-brand-cyan-gradients font-bold')}>将来</h3>
          <MomentIcon width={132} height={132} />
        </div>
        <div>
          <ul className="list-disc pl-4">
            <li>完善图表编辑体验，让非开发人员也能轻松制作图表。</li>
            <li>增强图表数据展示能力，支持更多图表类型。</li>
            <li>增加大屏支持。</li>
            <li>增加地图支持。</li>
            <li>增加AR/VR支持。</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default (props) => {
  const windowSize = useWindowSize();
  return (
    <Layout
      wrapperClassName={ThemeClassNames.wrapper.docsPages}
      pageClassName={ThemeClassNames.page.docsDocPage}
    >
      {(windowSize === 'desktop' || windowSize === 'ssr') && (
        <DesktopUserStories {...props} />
      )}
      {windowSize === 'mobile' && (
        <MobileUserStories {...props} />
      )}
    </Layout>
  );
};
