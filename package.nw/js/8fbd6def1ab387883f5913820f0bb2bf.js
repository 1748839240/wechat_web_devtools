'use strict';!function(require,directRequire){const a=require('path'),b=require('react'),c=require('./a1dd553cc059d528bb0ef56afed53968.js'),d=require('./a15851ca252a104aad8b3fd3fc114574.js'),e=require('./dd93307b3045531926d5a6645f6f3455.js'),f=require('./51a8f674caffc4c2fa2358314af90837.js'),g=require('./9a24eb4fb7a49d4dd24531943fc3c899.js'),h=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),i=require('./72653d4b93cdd7443296229431a7aa9a.js'),j=require('./99fff845d6c7bff564f99e38e435f827.js'),k=require('./6fc66cd42da3e8c155b22db441702cda.js'),l=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),m=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),n=require('./92320c1386e6db6a6f2556736a9bc280.js'),o=require('./ea653f45dc25181ca4f1b108175009b7.js'),p=require('./2a36cc34e5f44e62f9188b9fc0871d70.js'),q=require('classnames'),r=require('./0794878a22a26634e42df858bbaca543.js'),s=require('./ff946754202ecf377034d29daac7c8d9.js'),t=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),u=require('./common/locales/index.js'),v=require('./3bfffbe88b3d923921f851c0697974fe.js'),w=require('./71734cad2a6081d396ea668ffa405627.js'),x=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),y=require('moment'),{resetBackgroundStatus:z}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),A=require('./949d8235c744ced2a80121e4dba34c28.js'),B='about:blank';let C;chrome.webRequest.onBeforeSendHeaders.addListener((a)=>{let{type:b,url:c}=a;if('websocket'===b&&0!==c.indexOf(`ws://127.0.0.1:${global.messageCenterPort}`)){let b=a.requestHeaders||[],c=v.getProjectAppID();if(b.push({name:'Referer',value:`https://servicewechat.com/${c}/devtools/page-frame.html`}),C){for(let a in C)b.push({name:a,value:C[a]});C=void 0}return{requestHeaders:b}}},{urls:['<all_urls>']},['blocking','requestHeaders']);class D extends b.Component{constructor(a){super(a),this.onResizeStop=(a,b,c)=>{this.props.windowActions.setDebuggerWindow({height:c})},this.syncDialogMap={},this.restartTimer=null,this.subPackageLoading={},this.taskMap={}}componentDidMount(){this._onAppServiceMessage=this.onAppServiceMessage.bind(this),c.register(this._onAppServiceMessage),this._onAppDataMessage=this.onAppDataMessage.bind(this),e.register(this._onAppDataMessage),this._onStorageMessage=this.onStorageMessage.bind(this),f.register(this._onStorageMessage),this._onDevtoolsMessage=this.onDevtoolsMessage.bind(this),g.register(this._onDevtoolsMessage),h.initHelper({setDebuggerWindow:this.props.setDebuggerWindow.bind(this)}),this.initWebview()}componentWillUnmount(){this.devtoolsview&&this.devtoolsview.remove(),this.webview&&(this.webview.removeEventListener('newwindow',this._newwindow),this.webview.remove()),c.unRegister(this._onAppServiceMessage),e.unRegister(this._onAppDataMessage),f.unRegister(this._onStorageMessage),g.unRegister(this._onDevtoolsMessage)}componentWillReceiveProps(a){if(a.assdkCallbackInfo!=this.props.assdkCallbackInfo){let{callbackID:b,res:d}=a.assdkCallbackInfo;this.syncDialogMap[b]?(this.syncDialogMap[b].ok(JSON.stringify(d)),delete this.syncDialogMap[b]):c.invokeCallback(b,d)}(a.compileCommand!=this.props.compileCommand||a.device!=this.props.device)&&(c.ready=!1,this.restart()),a.appLaunched!=this.props.appLaunched&&a.appLaunched&&this.taskMap.appLaunched&&(this.taskMap.appLaunched.forEach((a)=>{a()}),delete this.taskMap.appLaunched),a.appRoute!=this.props.appRoute&&('ready'==a.appRoute.status?'appLaunch'==a.appRoute.openType?setTimeout(()=>{this.triggerLaunch()}):this.triggerAppRoute(a):'done'==a.appRoute.status&&this.triggerAppRouteDone(a)),a.networkType!=this.props.networkType&&c.triggerOnEvent({eventName:'onNetworkStatusChange',data:{isConnected:'none'!==a.networkType,networkType:a.networkType}}),a.storage!=this.props.storage&&f.send({command:'UPDATE_STORAGE',data:a.storage}),a.subPackageLoaded!=this.props.subPackageLoaded&&setTimeout(()=>{this.checkSubPackages()})}triggerAppRouteDone(a){let b=a.currentWebview,d=b.pathName;const e=()=>{let e={};for(let a in b.query)e[a]=encodeURIComponent(b.query[a]);c.triggerOnEvent({eventName:'onAppRouteDone',data:{webviewId:b.id,path:d+'.html',query:e,openType:a.appRoute.openType}})};let f=x.checkIsInSubPackage(a.appConfig,d);!f||a.subPackageLoaded[f.root]?e():(!this.taskMap[f.root]&&(this.taskMap[f.root]=[]),this.taskMap[f.root].push(e))}triggerAppRoute(a){let b=a.currentWebview,d=b.pathName;const e=()=>{let e={};for(let a in b.query)e[a]=encodeURIComponent(b.query[a]);c.triggerOnEvent({eventName:'onAppRoute',data:{webviewId:b.id,path:d+'.html',query:e,openType:a.appRoute.openType}})};let f=x.checkIsInSubPackage(a.appConfig,d);!f||a.subPackageLoaded[f.root]?e():(!this.taskMap[f.root]&&(this.taskMap[f.root]=[]),this.taskMap[f.root].push(e))}triggerLaunch(){let a=this.props.currentWebview,b=a.pathName;const d=()=>{c.triggerOnEvent({eventName:'onAppRoute',data:{webviewId:a.id,path:b+'.html',query:a.query,scene:this.props.scene,openType:'appLaunch'}})};let e=x.checkIsInSubPackage(this.props.appConfig,b);e?this.props.subPackageLoaded[e.root]?d():(!this.taskMap[e.root]&&(this.taskMap[e.root]=[]),this.taskMap[e.root].push(d)):this.props.appLaunched?d():(!this.taskMap.appLaunched&&(this.taskMap.appLaunched=[]),this.taskMap.appLaunched.push(d))}initWebview(){this.devtoolsview&&(this.container.removeChild(this.devtoolsview),this.devtoolsview.remove()),this.webview&&(this.appservicecontainer.removeChild(this.webview),this.webview.remove());let a=this.devtoolsview=document.createElement('webview'),b=this.webview=document.createElement('webview');b.setUserAgentOverride(`wechatdevtools appservice port/${global.messageCenterPort}`),b.setAttribute('partition','persist:appservice'),b.setAttribute('tabIndex','-1'),b.addEventListener('exit',(a)=>{('abnormal'===a.reason||'crash'===a.reason||'killed'===a.reason)&&this.initWebview()}),this.initWebviewEvent(b);let c=`${a.getUserAgent()} appservicedevtools port/${global.messageCenterPort} proxy/${global.proxyPort}`;a.setUserAgentOverride(c),a.setAttribute('partition','persist:devtools'),a.setAttribute('style','height:100%;width:100%;position:relative;display:block;'),a.addEventListener('exit',(a)=>{('abnormal'===a.reason||'crash'===a.reason||'killed'===a.reason)&&this.initWebview()}),this.appservicecontainer.appendChild(b),this.showDevTools()}initWebviewEvent(a){a.addEventListener('dialog',(a)=>{let b=a.messageType||'',d=a.messageText;if('prompt'===b){if(a.preventDefault(),/^____sdk____/.test(d)){let b=JSON.parse(d.replace(/^____sdk____/,'')),c=b.command;'APPSERVICE_INVOKE'===c&&(this.syncDialogMap[b.data.callbackID]=a.dialog,this.props.assdkActions.exec(b.data))}}else if('alert'==b)if('DOCUMENT_READY'==d)c.ready=!0,this.props.simulatorActions.setAppLaunched(!0);else if(0==d.indexOf('SUBPACKAGE_READY_')){let a=d.replace(/^SUBPACKAGE_READY_/,'');this.props.simulatorActions.setSubPackage(a,!0)}else if(0===d.indexOf('SET_SOCKET_HEADER:'))try{let a=JSON.parse(d.replace('SET_SOCKET_HEADER:',''));C=a}catch(a){}});let b=a.request;b.onErrorOccurred.addListener((a)=>{let{type:b}=a;if('main_frame'===b&&0===a.error.indexOf('net::')&&'net::ERR_BLOCKED_BY_CLIENT'!==a.error)return void h.display({command:t.DISPLAY_ERROR,data:{code:A.APPSERVICE_NETWORK_ERROR,error:{details:a}}})},{urls:['<all_urls>']}),b.onBeforeSendHeaders.addListener((a)=>{let b=this.props.project;if(b){let b=a.url;if('main_frame'===a.type&&b.match(/\?load$/))return this.restart(),{cancel:!0};if(0!=b.indexOf(`http://127.0.0.1:${global.proxyPort}/appservice`)&&!/favicon\.ico$/.test(b)&&'none'==this.props.networkType)return h.display({command:t.DISPLAY_ERROR,data:{title:u.config.NO_NETWORK_TIPS_TITLE,error:{message:u.config.NO_NETWORK_TIPS_CONTENT.format(b)}}}),{cancel:!0};let d=a.requestHeaders||[],e=d.findIndex((a)=>{return'cookie'===a.name.toLowerCase()});d.splice(e,1);for(var c=0;c<d.length;++c)if('_Cookie'===d[c].name&&(d[c].name='Cookie'),'Referer'===d[c].name){let a=v.getProjectAppID();d[c].value=`https://servicewechat.com/${a}/devtools/page-frame.html`}return{requestHeaders:a.requestHeaders}}},{urls:['<all_urls>']},['blocking','requestHeaders']),b.onHeadersReceived.addListener((a)=>{let{type:b}=a;if('xmlhttprequest'===b){let b=a.responseHeaders||[],c={};return b.forEach((a)=>{let{name:b,value:d}=a;c[b]||(c[b]=[]),c[b].push(d)}),b.push({name:'for-weapp-devtools',value:JSON.stringify(c)}),{responseHeaders:b}}return{}},{urls:['<all_urls>']},['blocking','responseHeaders'])}_newwindow(a){a.preventDefault();let b=a.targetUrl;0===b.indexOf(`http://127.0.0.1:${global.proxyPort}/appservice/appservice`)||`http://127.0.0.1:${global.proxyPort}/favicon.ico`===b||0===b.indexOf('ws://')||0===b.indexOf('wss://')||b&&('https://developers.google.com/web/tools/chrome-devtools/'===b&&(b='https://mp.weixin.qq.com/debug/wxadoc/dev/index.html'),'https://developers.google.com/web/updates/2017/05/devtools-release-notes'===b&&(b='https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/new.html'),0==b.indexOf('wxfile://')&&(b=b.replace('wxfile://','http://wxfile.open.weixin.qq.com/')),nw.Window.open(b,{width:799,height:799}))}hackNewWindow(a){a.addEventListener('newwindow',this._newwindow.bind(this))}showDevTools(){let a=this.devtoolsview,b=this.webview;this.container.appendChild(a),this.hackNewWindow(a);const c=()=>{a.removeEventListener('loadstop',c);const d=()=>{b.removeEventListener('loadstop',d),b.showDevTools(!0,a),this.loaded=!0,this.onWebviewLoadCommit(),this.restart()};b.addEventListener('loadstop',d),this.resetStatus(),b.src=B};a.addEventListener('loadstop',c),a.src=B}resetStatus(){this.loaded=!1,this.taskMap={},this.subPackageLoading={},z()}restart(){clearTimeout(this.restartTimer),this.restartTimer=setTimeout(()=>{if(!this.loaded||!this.webview||!this.props.appConfig)return;h.cleanQueue(),this.props.simulatorActions.launch();let a=()=>{this.webview.removeEventListener('loadcommit',a),this.loaded=!0,c.ready=!0},b=`http://127.0.0.1:${global.proxyPort}/appservice/appservice`;this.resetStatus(),this.webview.src=b,this.webview.addEventListener('loadcommit',a)})}onWebviewLoadCommit(){h.initWebview(this.webview)}onDevtoolsMessage(a){if('CLICK'===a.command&&this.devtoolsview){const a=new UIEvent('click',{bubbles:!0});this.devtoolsview.dispatchEvent(a)}}onAppServiceMessage(a){let{command:b,data:d}=a;'APPSERVICE_PUBLISH'==b?c.publish(a):'APPSERVICE_INVOKE'==b?setTimeout(()=>{this.props.assdkActions.exec(d)}):'SEND_APP_DATA'==b?e.ready&&e.send({command:'SEND_APP_DATA',data:d}):'SYSTEM'==b&&this.onSystemCommand(d.api,d.data)}checkSubPackages(){for(let a in this.props.subPackageLoaded)if(!this.props.subPackageLoaded[a]&&!this.subPackageLoading[a]){this.subPackageLoading[a]=!0;let b=async()=>{let b=await w(this.props.project,a);this.webview.executeScript({code:b},()=>{})};this.props.appLaunched?b():(!this.taskMap.appLaunched&&(this.taskMap.appLaunched=[]),this.taskMap.appLaunched.push(b))}else this.taskMap[a]&&0<this.taskMap[a].length&&(this.taskMap[a].forEach((a)=>{a()}),delete this.taskMap[a])}onSystemCommand(a,b){switch(a){case'checkProxy':{try{let a=nw.App.getProxyForURL(b);c.send({command:'SYSTEM_CALLBACK',data:{api:'checkProxy',data:[{url:b,proxy:a}]}})}catch(a){}break}case'showDecryptedInfo':{c.send({command:'SYSTEM_CALLBACK',data:{api:'showDecryptedInfo',data:this.props.decryptedInfo}});break}case'showSystemInfo':{chrome.processes.getProcessInfo([],!0,(a)=>{let b=0,d=[];for(let c in a){let e=a[c];e.privateMemory&&(b+=e.privateMemory);let{tasks:f,type:g}=e;'extension'===g&&(g='',f.forEach((a)=>{a.tabId||(title=a.title.replace(/.*open\.weixin\.qq\.com\//g,'').replace(/\?.*/,''),g+=`${title};`)}),g=g.replace(/网页视图：/g,'')),g=g.replace('\u7F51\u9875',''),d.push({type:g,osProcessId:e.osProcessId,privateMemory:(e.privateMemory/1024/1024).toFixed(2)})}b=b/1024/1024,c.send({command:'SYSTEM_CALLBACK',data:{api:'showSystemInfo',data:{restartInfo:{restartTimes:this.props.restartTimes,beginTime:y(global.beginTime).calendar()},memory:b,info:d}}})});break}case'openToolsLog':{nw.Shell.openItem(n.WeappLog);break}case'openVendor':{nw.Shell.openItem(n.WeappVendor);break}case'syncMessage':{p.sync();break}case'qcloudup':{(async(a={})=>{let b=await r.operate(this.props.project,a);c.send({command:'SYSTEM_CALLBACK',data:{api:'qcloudup',data:b}})})(b);break}case'build':{this.props.simulatorActions.compile({origin:t.COMPILE_ORIGIN.CONSOLE});break}case'preview':{this.props.toolbarActions.togglePreviewCode();break}case'upload':{this.props.infoActions.setUploadInfo({show:!0});break}default:}}onAppDataMessage(a){let{command:b,data:d}=a;'GET_APP_DATA'==b?(e.ready=!0,c.send({command:'GET_APP_DATA'})):'WRITE_APP_DATA'==b?c.send({command:'WRITE_APP_DATA',data:d}):'ON_PANEL_HIDE'==b&&(e.ready=!1)}onStorageMessage(a){let{command:b,data:c}=a;'EXEC_STORAGE_SDK'==b?this.props.assdkActions.exec(c):'STORAGE_PANNEL_SHOW'==b?(f.ready=!0,this.props.assdkActions.exec({api:'getStorage',args:{},callbackID:-1})):'STORAGE_PANNEL_HIDE'==b&&(f.ready=!1)}render(){let a=this.props,c={height:a.height};a.show&&!a.editorShow&&(c.flex='1');let d=q('devtools',{"ui-invisible":!a.show});return b.createElement(o,{innerRef:(a)=>this.container=a,width:'100%',height:a.height,className:d,style:c,topResizable:!0,onResizeStop:this.onResizeStop},b.createElement(j,null),b.createElement(k,null),b.createElement('div',{className:'ui-divider ui-divider-horizontal',style:{pointerEvents:'none'}}),b.createElement('div',{ref:(a)=>this.appservicecontainer=a,style:{width:0,height:0},tabIndex:-1}))}}module.exports=D}(require('lazyload'),require);