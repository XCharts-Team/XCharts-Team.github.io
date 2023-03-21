import React from 'react';
import Layout from '@theme/Layout';
import './style.css';


export class App extends React.Component{
  componentDidMount(){
    let data = localStorage.getItem("Xcharts-Demo-Version");
    if (!data && typeof(data)!="undefined" && data!=0) {
      data = document.getElementsByClassName('mr-3')[0].textContent;
    }else{
    document.getElementsByClassName('mr-3')[0].innerHTML = data;
    }
    createScript('TemplateData/UnityProgress.js',()=>{});
    createScript(data+'/Build/UnityLoader.js', ()=>{
      var unityInstance = UnityLoader.instantiate("unityContainer", data+"/Build/WebGL.json", {onProgress: UnityProgress});
      var fullscreen = document.getElementsByClassName("fullscreen")[0];
      fullscreen.onclick = function(){
        unityInstance.SetFullscreen(1);
      }
      });
    function createScript(url, callback){
      var oScript = document.createElement('script');
      oScript.type = 'text/javascript';
      oScript.async = true;
      oScript.src = url;
      /*
      ** script标签的onload和onreadystatechange事件
      ** IE6/7/8支持onreadystatechange事件
      ** IE9/10支持onreadystatechange和onload事件
      ** Firefox/Chrome/Opera支持onload事件
      */
      
      // 判断IE8及以下浏览器
      var isIE = !-[1,];
      if(isIE){
      alert('IE')
      oScript.onreadystatechange = function(){
      if(this.readyState == 'loaded' || this.readyState == 'complete'){
      callback();
      }
      }
      } else {
      // IE9及以上浏览器，Firefox，Chrome，Opera
      oScript.onload = function(){
      callback();
      }
      }
      document.body.appendChild(oScript);
      }

  }
  render(){
    return (
      <Layout title="XCharts Demo" description="图表demo">
        <>
          <div className="webgl-content">
          <div id="unityContainer"></div>
          <div className="footer">
            <div className="webgl-logo"></div>
            <div className="fullscreen"></div>
            <div className="title">XCharts</div>
          </div>
          </div>
        </>
      </Layout>
    );
  }
}

export default App;