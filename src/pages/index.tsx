import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Highlight, themes as prismThemes} from 'prism-react-renderer';
import {translate} from '@docusaurus/Translate';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroVisual from '@site/src/components/home/HeroVisual';
import ChartGallery from '@site/src/components/home/ChartGallery';

import styles from './index.module.css';

const GIT_URL = 'https://github.com/XCharts-Team/XCharts.git';
const GITHUB_URL = 'https://github.com/XCharts-Team/XCharts';

const defaultCodeSample = `// 在 Canvas 节点上创建折线图
var chart = gameObject.AddComponent<LineChart>();
chart.Init();
chart.SetSize(580, 300);

chart.AddXAxisData("周一");
chart.AddXAxisData("周二");
chart.AddXAxisData("周三");

chart.AddData(0, 120);
chart.AddData(0, 200);
chart.AddData(0, 150);`;

function copyText(text: string): void {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    return;
  }
  fallbackCopy(text);
}

function fallbackCopy(text: string): void {
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.select();
  try {
    document.execCommand('copy');
  } catch {
    // Clipboard is unavailable; nothing else to do here.
  }
  document.body.removeChild(el);
}

function CopyInstall(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const onCopy = () => {
    copyText(GIT_URL);
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      className={styles.copyBtn}
      onClick={onCopy}
      aria-live="polite"
      aria-label={translate({id: 'home.hero.copyAria', message: '复制安装地址'})}>
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m4 12 5 5L20 6" />
          </svg>
          {translate({id: 'home.hero.copied', message: '已复制'})}
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
          {translate({id: 'home.hero.copy', message: '复制'})}
        </>
      )}
    </button>
  );
}

function Hero(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const version = (siteConfig.customFields?.version as string) ?? '3.15.0';
  const changelogAnchor = `#v${version.replace(/\./g, '')}`;
  const suffix = translate({id: 'home.hero.titleSuffix', message: '图表库'});

  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <Link className={styles.versionBadge} to={`/docs/changelog${changelogAnchor}`}>
            <span className={styles.versionDot} aria-hidden="true" />
            <span>v{version}</span>
            <span className={styles.versionDivider} aria-hidden="true" />
            <span>Unity 2017.4+</span>
          </Link>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>
              {translate({id: 'home.hero.titlePrefix', message: '为 Unity 打造的'})}
            </span>
            <span className={styles.heroTitleLine}>
              <span className={styles.gradient}>
                {translate({id: 'home.hero.titleHighlight', message: '数据可视化'})}
              </span>
              {suffix}
            </span>
          </h1>

          <p className={styles.heroSubtitle}>
            {translate({
              id: 'home.hero.subtitle',
              message:
                '纯代码绘制 · 20+ 图表类型 · 可视化配置与 JSON 驱动，帮你在 UGUI 中快速搭建专业级图表。',
            })}
          </p>

          <div className={styles.heroActions}>
            <Link className={styles.primaryBtn} to="/docs/tutorial01">
              {translate({id: 'home.hero.ctaStart', message: '5 分钟快速上手'})}
              <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.ghostBtn} to="/examples">
              {translate({id: 'home.hero.ctaDemo', message: '在线 Demo'})}
            </Link>
            <a className={styles.githubLink} href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              GitHub
            </a>
          </div>

          <div className={styles.install}>
            <span className={styles.installTag}>UPM</span>
            <code className={styles.installUrl}>{GIT_URL}</code>
            <CopyInstall />
          </div>

          <p className={styles.heroNote}>
            {translate({
              id: 'home.hero.note',
              message: 'MIT 开源 · 纯代码渲染 · 支持 TextMeshPro 与 New Input System',
            })}
          </p>
        </div>

        <div className={styles.heroVisual}>
          <HeroVisual />
        </div>
      </div>
    </header>
  );
}

function Stats(): JSX.Element {
  const stats = [
    {valueKey: 'home.stats.charts.value', value: '20+', labelKey: 'home.stats.charts.label', label: '图表类型'},
    {valueKey: 'home.stats.time.value', value: '5 分钟', labelKey: 'home.stats.time.label', label: '上手时间'},
    {valueKey: 'home.stats.assets.value', value: '0', labelKey: 'home.stats.assets.label', label: '额外贴图 / Shader'},
    {valueKey: 'home.stats.license.value', value: 'MIT', labelKey: 'home.stats.license.label', label: '开源协议'},
  ];

  return (
    <section className={styles.statsWrap} aria-label={translate({id: 'home.stats.aria', message: 'XCharts 概览'})}>
      <dl className={styles.stats}>
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.labelKey}>
            <dt>{translate({id: stat.valueKey, message: stat.value})}</dt>
            <dd>{translate({id: stat.labelKey, message: stat.label})}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function CodePanel(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const codeSample = translate({
    id: 'home.code.sample',
    message: defaultCodeSample,
  });

  useEffect(() => () => clearTimeout(timer.current), []);

  const onCopy = () => {
    copyText(codeSample);
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className={styles.codePanel}>
      <div className={styles.codeBar}>
        <span className={styles.codeDots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.codeFile}>ChartDemo.cs</span>
        <span className={styles.codeLang}>C#</span>
        <button
          type="button"
          className={styles.codeCopy}
          onClick={onCopy}
          aria-live="polite"
          aria-label={translate({id: 'home.code.copyAria', message: '复制代码'})}>
          {copied ? (
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m4 12 5 5L20 6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
          )}
          {copied
            ? translate({id: 'home.code.copied', message: '已复制'})
            : translate({id: 'home.code.copy', message: '复制代码'})}
        </button>
      </div>

      <Highlight theme={prismThemes.dracula} code={codeSample} language="csharp">
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={`${styles.codePre} ${className}`} style={{...style, background: 'transparent'}}>
            <code>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({line});
                return (
                  <div key={i} {...lineProps} className={`${lineProps.className} ${styles.codeLine}`}>
                    <span className={styles.lineNo} aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className={styles.lineContent}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({token})} />
                      ))}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}

function CodeSection(): JSX.Element {
  const benefits = [
    {key: 'home.code.benefit1', label: '纯 C# API，无第三方运行时依赖'},
    {key: 'home.code.benefit2', label: '运行时动态更新数据与样式'},
    {key: 'home.code.benefit3', label: 'JSON 配置导入导出，方便接入工具链'},
    {key: 'home.code.benefit4', label: '浅色 / 深色主题开箱即用'},
  ];

  return (
    <section className={styles.codeSection} id="developers">
      <div className={styles.sectionInner}>
        <div className={styles.codeIntro}>
          <p className={styles.eyebrow}>
            {translate({id: 'home.code.eyebrow', message: '开发者体验'})}
          </p>
          <h2 className={styles.sectionTitle}>
            {translate({
              id: 'home.code.title',
              message: '代码、JSON、Inspector，三种方式随你选',
            })}
          </h2>
          <p className={styles.sectionSubtitle}>
            {translate({
              id: 'home.code.subtitle',
              message: '无论是运行时动态更新，还是把配置交给策划同学，XCharts 都能接得住。',
            })}
          </p>
          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li key={benefit.key}>
                <span className={styles.check} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4 12 5 5L20 6" />
                  </svg>
                </span>
                {translate({id: benefit.key, message: benefit.label})}
              </li>
            ))}
          </ul>
          <Link className={styles.textLink} to="/docs/api">
            {translate({id: 'home.code.cta', message: '查看 API 手册'})}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <CodePanel />
      </div>
    </section>
  );
}

function SupportSection(): JSX.Element {
  return (
    <section className={styles.supportSection} id="support">
      <div className={styles.supportGrid} aria-hidden="true" />
      <div className={styles.sectionInner}>
        <div className={styles.supportHead}>
          <p className={styles.eyebrowLight}>
            {translate({id: 'home.support.eyebrow', message: '获取支持'})}
          </p>
          <h2 className={styles.supportTitle}>
            {translate({id: 'home.support.title', message: '从开源到商业，按需选择'})}
          </h2>
          <p className={styles.supportSubtitle}>
            {translate({
              id: 'home.support.subtitle',
              message: '核心功能永久免费；需要扩展图表或一对一支持时，可以订阅 XCharts 服务。',
            })}
          </p>
        </div>

        <div className={styles.plans}>
          <article className={styles.plan}>
            <div className={styles.planHead}>
              <h3>{translate({id: 'home.support.oss.title', message: '开源版'})}</h3>
              <span className={styles.planPrice}>
                {translate({id: 'home.support.oss.price', message: '免费'})}
              </span>
            </div>
            <p className={styles.planDesc}>
              {translate({
                id: 'home.support.oss.desc',
                message: '适合大多数项目和团队，开箱即用。',
              })}
            </p>
            <ul className={styles.planList}>
              {[
                {key: 'home.support.oss.item1', label: '全部内置图表与组件'},
                {key: 'home.support.oss.item2', label: '完整 C# 源码'},
                {key: 'home.support.oss.item3', label: 'MIT 开源协议'},
                {key: 'home.support.oss.item4', label: 'GitHub Issue 社区支持'},
              ].map((item) => (
                <li key={item.key}>
                  <span aria-hidden="true">✓</span>
                  {translate({id: item.key, message: item.label})}
                </li>
              ))}
            </ul>
            <Link className={styles.planBtn} to="/docs/about">
              {translate({id: 'home.support.oss.cta', message: '开始使用'})}
            </Link>
          </article>

          <article className={`${styles.plan} ${styles.planFeatured}`}>
            <span className={styles.planBadge}>
              {translate({id: 'home.support.pro.badge', message: '推荐'})}
            </span>
            <div className={styles.planHead}>
              <h3>{translate({id: 'home.support.pro.title', message: '订阅服务'})}</h3>
              <span className={styles.planPrice}>
                {translate({id: 'home.support.pro.price', message: '按需订阅'})}
              </span>
            </div>
            <p className={styles.planDesc}>
              {translate({
                id: 'home.support.pro.desc',
                message: '解锁扩展图表，获得优先技术支持。',
              })}
            </p>
            <ul className={styles.planList}>
              {[
                {key: 'home.support.pro.item1', label: '扩展图表与扩展组件'},
                {key: 'home.support.pro.item2', label: '优先技术支持'},
                {key: 'home.support.pro.item3', label: '一对一咨询'},
                {key: 'home.support.pro.item4', label: '定制开发与授权'},
              ].map((item) => (
                <li key={item.key}>
                  <span aria-hidden="true">✓</span>
                  {translate({id: item.key, message: item.label})}
                </li>
              ))}
            </ul>
            <Link className={styles.planBtnSolid} to="/docs/support">
              {translate({id: 'home.support.pro.cta', message: '查看订阅方案'})}
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({id: 'home.meta.title', message: 'Unity 数据可视化图表库'})}
      description={translate({
        id: 'home.meta.description',
        message:
          'XCharts 是面向 Unity UGUI 的纯代码图表库，支持折线图、柱状图、饼图、雷达图等 20+ 图表类型，可视化配置、JSON 驱动，MIT 开源。',
      })}>
      <Hero />
      <main>
        <Stats />
        <HomepageFeatures />
        <ChartGallery />
        <CodeSection />
        <SupportSection />
      </main>
    </Layout>
  );
}
