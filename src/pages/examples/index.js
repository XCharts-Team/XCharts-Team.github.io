import React from 'react';
import Layout from '@theme/Layout';
import './style.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

let data;

const UntiyComponent = (props) => {
  if (!props.data && typeof (props.data) != "undefined" && props.data != 0) {
    props.data = 'master';
  }
  props.data = 'examples/master';
  createScript('examples/TemplateData/UnityProgress.js', () => { });
  createScript(props.data + '/Build/UnityLoader.js', () => {
    var unityInstance = UnityLoader.instantiate("unityContainer", props.data + "/Build/WebGL.json", { onProgress: UnityProgress });
    var fullscreen = document.getElementsByClassName("fullscreen")[0];
    fullscreen.onclick = function () {
      unityInstance.SetFullscreen(1);
    }
  });

  function createScript(url, callback) {
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.async = true;
    oScript.src = url;
    var isIE = !-[1,];

    if (isIE) {
      alert('IE')
      oScript.onreadystatechange = function () {
        if (this.readyState == 'loaded' || this.readyState == 'complete') {
          callback();
        }
      }
    } else {
      oScript.onload = function () {
        callback();
      }
    }
    document.body.appendChild(oScript);
  }

  return (

    <>

    </>

  );

};

export class App extends React.Component {

  render() {
    return (
      <Layout title="XCharts Demo" description="图表demo" noFooter={true}>
        <>
          <div className="webgl-content">
            <div id="unityContainer"></div>
            <div className="footer">
              {/* <div className="webgl-logo"></div> */}
              <div className="fullscreen"></div>
              <div className="title">XCharts</div>
            </div>
          </div>

          <BrowserOnly>
            {() => {
              var bool = window.location.href.indexOf("examples");
              if (bool > 0) {
                data = localStorage.getItem("Xcharts-Demo-Version");
                return <UntiyComponent data={data} />
              } else {
                return <></>
              }
            }}
          </BrowserOnly>
        </>
      </Layout>
    );
  }
}

export default App;
