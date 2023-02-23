import React from 'react';
import Layout from '@theme/Layout';

import { ThemeClassNames, useWindowSize } from '@docusaurus/theme-common';

import { translate } from '@docusaurus/Translate';

import clsx from 'clsx';
import { Unity, useUnityContext } from "react-unity-webgl";

const DesktopUserStories = (props) => {
  const { unityProvider } = new useUnityContext({
    loaderUrl: "./Build/UnityLoader.js",
    dataUrl: "./Build/WebGL.data.unityweb",
    frameworkUrl: "./Build/WebGL.framework.js",
    codeUrl: "Build/WebGL.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
  return (
    <h1 className={clsx('text-brand-cyan-gradients font-bold')}>
      A charting and data visualization library for Unity.
    </h1>
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
        <DesktopUserStories {...props} />
      )}
    </Layout>
  );
};
