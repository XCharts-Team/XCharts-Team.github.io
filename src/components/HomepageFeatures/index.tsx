import React from 'react';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  id: string;
  titleKey: string;
  title: string;
  descKey: string;
  desc: string;
  tags: {key: string; label: string}[];
};

const features: FeatureItem[] = [
  {
    id: '01',
    titleKey: 'feature1.title',
    title: '开箱即用',
    descKey: 'feature1.desc',
    desc: '挂载图表组件、填入数据，即可在 UGUI 中渲染。无需额外贴图、材质或 Shader。',
    tags: [
      {key: 'feature1.tag1', label: 'Inspector 配置'},
      {key: 'feature1.tag2', label: '实时预览'},
      {key: 'feature1.tag3', label: '零资源依赖'},
    ],
  },
  {
    id: '02',
    titleKey: 'feature2.title',
    title: '功能强大',
    descKey: 'feature2.desc',
    desc: '20+ 图表类型、多种坐标系与丰富组件，支持大数据量采样渲染和多图表组合。',
    tags: [
      {key: 'feature2.tag1', label: '20+ 图表'},
      {key: 'feature2.tag2', label: '多坐标系'},
      {key: 'feature2.tag3', label: '大数据量'},
    ],
  },
  {
    id: '03',
    titleKey: 'feature3.title',
    title: '自由定制',
    descKey: 'feature3.desc',
    desc: '主题、JSON、代码与自定义绘制四条路径，从配色到扩展图表都能按需改造。',
    tags: [
      {key: 'feature3.tag1', label: '明暗主题'},
      {key: 'feature3.tag2', label: 'JSON 导入导出'},
      {key: 'feature3.tag3', label: '自定义绘制'},
    ],
  },
];

function FeatureIcon({index}: {index: number}): JSX.Element {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l1-8Z" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1" />
      <circle cx="15" cy="6" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function Feature({feature, index}: {feature: FeatureItem; index: number}): JSX.Element {
  return (
    <article className={styles.card}>
      <span className={styles.index} aria-hidden="true">
        {feature.id}
      </span>
      <div className={styles.icon}>
        <FeatureIcon index={index} />
      </div>
      <h3 className={styles.title}>
        {translate({id: feature.titleKey, message: feature.title})}
      </h3>
      <p className={styles.desc}>
        {translate({id: feature.descKey, message: feature.desc})}
      </p>
      <ul className={styles.tags}>
        {feature.tags.map((tag) => (
          <li key={tag.key}>{translate({id: tag.key, message: tag.label})}</li>
        ))}
      </ul>
    </article>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features} id="features">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>
            {translate({id: 'home.features.eyebrow', message: '为什么选择 XCharts'})}
          </p>
          <h2 className={styles.heading}>
            {translate({id: 'home.features.title', message: '简单，强大，随你定制'})}
          </h2>
          <p className={styles.subtitle}>
            {translate({
              id: 'home.features.subtitle',
              message: '从一行数据到一整套数据看板，XCharts 覆盖你需要的每一个环节。',
            })}
          </p>
        </header>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Feature key={feature.titleKey} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
