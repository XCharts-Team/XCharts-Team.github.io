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
      <div className={clsx('w-full flex items-end', styles.topbg)}>
        <div className="desktop:w-docmain mx-auto">
          {/* <div className="mb-14">
            <div className="text-black mb-4">User story</div>
            <h1 className="max-w-[530px] text-white font-bold">
              “ XCharts, a charting and data visualization library for Unity.”
            </h1>
          </div> */}
        </div>
      </div>
      <div className="mx-auto max-w-[908px] mt-12">
        <div className="text-brand-cyan flex items-center max-w-[908px]">
          <h4>
            一款基于UGUI的功能强大，简单易用的Unity数据可视化图表插件。
          </h4>
          <h4><a href="/docs"> ☞ 了解更多</a></h4>
        </div>
        <div className="flex items-center space-x-6">
          <div>
            <div className="mb-6">
              <h3 className={clsx('text-brand-cyan-gradients font-bold')}>
                目标
              </h3>
            </div>
            <h4>
              XCharts致力于为Unity开发者和创意人员提供一套强大易用的图表库，能快速的在Unity中实现各种图表的展示。
            </h4>
          </div>
          <div>
            <Movement />
          </div>
        </div>
      </div>
      {/* <div className="bg-brand-cyan-dark h-[330px]">
        <div className="max-w-[1140px] mx-auto flex justify-between items-center h-full">
          <div className="max-w-[560px] text-white">
            <h3 className="mb-6 font-bold">Challenges</h3>
            <ul className="list-disc pl-4">
              <li>
                Challenges1
              </li>
              <li>
                Challenges2
              </li>
              <li>
                Challenges3
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className={clsx(styles.cardContainer, 'space-x-6')}>
        <ProgressIcon />
        <div className="max-w-[560px]">
          <div className="mb-6">
            <h3 className={clsx('text-brand-cyan-gradients font-bold')}>
              为什么使用XCharts
            </h3>
          </div>
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

      <div className={clsx(styles.cardContainer)}>
        <div className="max-w-[560px]">
          <h3 className="mb-6 text-brand-cyan-gradients font-bold">
            将来
          </h3>
          <ul className="list-disc pl-4">
            <li>完善图表编辑体验，让非开发人员也能轻松制作图表。</li>
            <li>增强图表数据展示能力，支持更多图表类型。</li>
            <li>增加地图支持。</li>
            <li>增加AR/VR支持。</li>
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
          <div className="mb-14">
            <div className="text-black mb-4">User story</div>
            <h1 className="max-w-[530px] text-white font-bold">
              “ XCharts, a charting libray for Unity.”
            </h1>
          </div>
          <div className="flex justify-end mb-10">
            {/* <img src={SignImage} /> */}
          </div>
        </div>
      </div>
      <div className="p-4 text-brand-cyan">
        <h4>
          In Fall 2021, the Computer Graphics Laboratory (CGL) at ETH Zurich
          offered a course on physically based simulation, which requires
          students to create a small game or a demo scene using techniques they
          learned in class.
        </h4>
        <h4>
          The vast majority of the student groups chose the XCharts programming
          language for real-time physical simulation.
        </h4>
      </div>
      <div className="px-4 space-y-6">
        <div className="flex justify-between items-end">
          <h3 className={clsx('text-brand-cyan-gradients font-bold')}>GOAL</h3>
          <Movement width={132} height={132} />
        </div>
        <div>
          <h4>
            Select an efficient parallel programming language and use it to
            implement a physically based simulation project.
          </h4>
        </div>
      </div>
      <div className="bg-brand-cyan-dark px-4 pt-8 pb-6 relative">
        <div className="absolute top-0 right-0">
        </div>
        <div>
          <h3 className="mb-4 font-bold">Challenges</h3>
          <ul className="list-disc pl-4">
            <li>
              The bar to parallel programming is set high: Few students have
              previous experience with CUDA.
            </li>
            <li>
              The language must provide rich utilities, such as 3D
              visualization, to facilitate development.
            </li>
            <li>
              Run the same parallel programming projects from different
              computing platforms.
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 space-y-6">
        <div className="flex justify-between items-end">
          <h3 className={clsx('text-brand-cyan-gradients font-bold')}>Why XCharts</h3>
          <ProgressIcon width={132} height={132} />
        </div>
        <div>
          <ul className="list-disc pl-4">
            <li>
              Seamlessly embedded in Python: Easier to learn, more intuitive,
              and as fast as CUDA.
            </li>
            <li>XCharts's GGUI system makes 3D rendering a breeze.</li>
            <li>
              A single-source framework: Automatically falls back to CPUs if
              your system doesn't have CUDA or a powerful GPU.
            </li>
            <li>
              An active community and a wide range of reference code make it
              easy to get started.
            </li>
          </ul>
        </div>
      </div>
      <div className='px-4 space-y-6'>
        <h3 className="font-bold text-brand-cyan-gradients">Results</h3>
        {/* <video src={Sand} width="100%" controls></video> */}
        <ul className="list-disc pl-4">
          <li>
            90% of the projects chose XCharts, and all were completed with
            flying colors.
          </li>
          <li>
            Achieved comparable performance to C++/CUDA with much less code.
          </li>
        </ul>
      </div>
      <div className="px-4 space-y-6">
        <div className="flex justify-between items-end">
          <h3 className={clsx('text-brand-cyan-gradients font-bold')}>Requests for improvement: The future</h3>
          <MomentIcon width={132} height={132} />
        </div>
        <div>
          <ul className="list-disc pl-4">
            <li>Enriched GGUI tooling.</li>
            <li>More descriptive error reports.</li>
            <li>Move comprehensive benchmark reports.</li>
            <li>Further reduced compile time.</li>
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
