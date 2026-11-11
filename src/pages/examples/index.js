import React, {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import './style.css';

const DEMO_VERSION = 'master';

function loadScript(src, marker) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-xcharts-demo="${marker}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.xchartsDemo = marker;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function UnityDemo() {
  const examplesBaseUrl = useBaseUrl('/examples');
  const demoBaseUrl = useBaseUrl(`/examples/${DEMO_VERSION}`);
  const fullscreenCleanup = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function boot() {
      try {
        await loadScript(
          `${examplesBaseUrl}/TemplateData/UnityProgress.js`,
          'unity-progress',
        );
        await loadScript(
          `${demoBaseUrl}/Build/UnityLoader.js`,
          'unity-loader',
        );

        if (cancelled) {
          return;
        }

        if (!window.UnityLoader) {
          throw new Error('UnityLoader is not available.');
        }

        const unityInstance = window.UnityLoader.instantiate(
          'unityContainer',
          `${demoBaseUrl}/Build/WebGL.json`,
          {onProgress: window.UnityProgress},
        );

        const fullscreen = document.querySelector('.fullscreen');
        if (fullscreen) {
          const onFullscreen = () => unityInstance.SetFullscreen(1);
          fullscreen.addEventListener('click', onFullscreen);
          fullscreenCleanup.current = () =>
            fullscreen.removeEventListener('click', onFullscreen);
        }
      } catch (error) {
        if (!cancelled) {
          console.error('[XCharts Demo]', error);
          setFailed(true);
        }
      }
    }

    boot();

    return () => {
      cancelled = true;
      if (fullscreenCleanup.current) {
        fullscreenCleanup.current();
        fullscreenCleanup.current = null;
      }
    };
  }, [demoBaseUrl, examplesBaseUrl]);

  return (
    <>
      {failed && (
        <div className="demo-error" role="alert">
          <strong>
            {translate({id: 'examples.error.title', message: '示例加载失败'})}
          </strong>
          <p>
            {translate({
              id: 'examples.error.desc',
              message: '请检查网络后刷新页面，或下载 XCharts 在本地体验。',
            })}
          </p>
          <a
            href="https://github.com/XCharts-Team/XCharts/releases"
            target="_blank"
            rel="noopener noreferrer">
            {translate({id: 'examples.error.cta', message: '下载 XCharts'})}
          </a>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <Layout title="XCharts Demo" description="XCharts 图表示例" noFooter={true}>
      <div className="webgl-content">
        <div id="unityContainer"></div>
        <div className="footer">
          <button
            type="button"
            className="fullscreen"
            aria-label={translate({id: 'examples.fullscreen', message: '全屏显示'})}
          />
          <div className="title">XCharts</div>
        </div>
      </div>

      <BrowserOnly>{() => <UnityDemo />}</BrowserOnly>
    </Layout>
  );
}
