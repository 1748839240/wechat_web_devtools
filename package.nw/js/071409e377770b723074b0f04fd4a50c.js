;!function(require, directRequire){;"use strict";const React=require("react"),{connect}=require("react-redux"),_=require("lodash"),tools=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),simulatorActions=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),projectActions=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),weappConfig=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),assdkActions=require('./dca9191eced65b3831d60c02d8d487c2.js'),infoActions=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),devtoolsMessager=require('./9a24eb4fb7a49d4dd24531943fc3c899.js'),gameserviceMessager=require('./e3681b47a6ce46a8998b8cdff40bdb12.js'),webviewPool=require('./a78e6d6a87de1708226375ca4c320d76.js'),fileSystem=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),{enterForeground}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),consoleDisplay=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),C=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),locales=require('./common/locales/index.js'),log=require('./72653d4b93cdd7443296229431a7aa9a.js'),runTask=require('./41168dca39589e852da6631126d0f94d.js'),interfaceCallback=require('./a7261ee5e1a26dddf8d07b048ad1c94d.js'),getSubPackage=require('./3f9531346c6c094597bd9070946ab489.js'),grabberWebviewManager=require('./87822abadd12d18b00ea00716f2410f6.js'),messageCenter=require('./ff946754202ecf377034d29daac7c8d9.js'),URL=require("url"),{validType,tokenManager}=require('./dc244a5ba483ad6e0acd267d3b91b282.js'),{setWebSocketHeader}=require('./ffc9a3cdcc5036d1fb62a2324c72a2b0.js'),getMainPackage=require('./c80fb8a6ab09d0e8e3198cf81f58bc19.js'),TaskPromise=require('./32de5d16fa0407815a081d7c2ff94d8b.js'),performanceUtils=require('./344232cd2199c9c3a024b4005d054672.js'),performanceObserver=require('./5f3c86137d346ddffec99d08c1ac2bb0.js').default,topTools=require('./84b183688a46c9e2626d3e6f83365e13.js'),systemCommand=require('./56646b0ffe5c7ea492bcc44ea72277a8.js'),DEATH_DETECTTIME=6e4,{weappStoreFileReqular,weappTmpFileReqular,weappUsrFileReqular,weappOpendataFileRegular,weappStoreFilePathPrefix,weappTmpFilePathPrefix,weappUsrFilePathPrefix}=weappConfig;function randomNumber(a,b){return Math.floor(Math.random()*(b-a+1))+a}const mapStateToProps=(a)=>{const b=a.window.simulator||{},c=a.toolbar.deviceInfo,d=a.project.current,e=a.simulator.appConfig||{},f=a.simulator.orientation&&/^landscape(Left|Right)?$/.test(a.simulator.orientation.value),g=f?c.screenWidth:c.screenHeight,h=a.toolbar.muted;return{popup:b.popup,position:b.position,ua:c.ua||"",width:f?c.screenHeight:c.screenWidth,height:g,dpr:c.dpr,id:2e4,project:a.project.current,ready:a.simulator.game&&a.simulator.game.ready,appConfig:e,device:c,appLaunched:a.simulator.appLaunched,appLaunchInfo:a.simulator.appLaunchInfo||{},compileCommand:a.simulator.compileCommand,libVersion:d.libVersion,assdkCallbackInfo:a.simulator.assdkCallbackInfo,interfaceCallbackInfo:a.simulator.interfaceCallbackInfo,deviceScale:a.toolbar.deviceScale,captureScreen:a.simulator.captureScreen,networkType:a.toolbar.network.list[a.toolbar.network.current]||"wifi",bbsConfig:a.config.bbsConfig,simulateUpdate:a.simulator.simulateUpdate,subPackageLoaded:a.simulator.gameSubPackageLoaded,muted:h}},mapDispatchToProps=(a)=>({simulatorActions:tools.bindActionCreators(simulatorActions,a),projectActions:tools.bindActionCreators(projectActions,a),assdkActions:tools.bindActionCreators(assdkActions,a),setGame:tools.bindActionCreators(simulatorActions.setGame,a),setAppLaunched:tools.bindActionCreators(simulatorActions.setAppLaunched,a),gameLaunch:tools.bindActionCreators(simulatorActions.gameLaunch,a),infoActions:tools.bindActionCreators(infoActions,a)});class Webview extends React.Component{constructor(a){super(a),this.onMessage=(a)=>{const{command:b,data:c}=a;"APPSERVICE_INVOKE"===b?setTimeout(()=>{const{callbackID:a}=c;this.props.assdkActions.exec(c).then((b)=>{b&&gameserviceMessager.invokeCallback(a,b)})}):"SYSTEM"===b&&this.onSystemCommand(c.api,c.data)},this.syncDialogMap={},this.restartTimer=null,this.loaded=!1,this.session=+new Date,this.bbsConfig=_.cloneDeep(this.props.bbsConfig||[]),this.subPackageLoading={},this._captureTryCount=0,this.state={loading:!0},this.taskMap=new TaskPromise}componentDidMount(){gameserviceMessager.register(this.onMessage),this.restart(),this.container.addEventListener("mouseleave",()=>{devtoolsMessager.send({command:"SET_TOUCH_MODE",data:!1})}),this.container.addEventListener("mouseenter",()=>{devtoolsMessager.send({command:"SET_TOUCH_MODE",data:!0})})}componentWillReceiveProps(a){if((a.compileCommand!==this.props.compileCommand||a.device!==this.props.device)&&this.restart(),a.interfaceCallbackInfo!==this.props.interfaceCallbackInfo){const{data:b}=a.interfaceCallbackInfo;b&&this.handleInterfaceInvocation(a.interfaceCallbackInfo)}if(a.assdkCallbackInfo!==this.props.assdkCallbackInfo){const{callbackID:b,res:c}=a.assdkCallbackInfo;this.syncDialogMap[b]?(this.syncDialogMap[b].ok(JSON.stringify(c)),delete this.syncDialogMap[b]):gameserviceMessager.invokeCallback(b,c)}(a.height!==this.props.height||a.width!==this.props.width)&&setTimeout(()=>{this.setWebviewOffset()}),a.networkType!==this.props.networkType&&gameserviceMessager.triggerOnEvent({eventName:"onNetworkStatusChange",data:{isConnected:"none"!==a.networkType,networkType:a.networkType}}),a.captureScreen!==this.props.captureScreen&&setTimeout(()=>{this.captureScreen()}),a.subPackageLoaded!==this.props.subPackageLoaded&&setTimeout(()=>{this.checkSubPackages()}),(a.muted&&!this.props.muted||!a.muted&&this.props.muted)&&this.webview&&this.webview.setAudioMuted(a.muted),a.appLaunched!==this.props.appLaunched&&a.appLaunched&&this.taskMap.onTaskDone("appLaunched")}componentWillUnmount(){this.webview&&(this.webview.detach(),global.online&&grabberWebviewManager.manager.removeWebview("game")),simulatorActions.simulatorReset(),gameserviceMessager.unRegister(this.onMessage);try{global.worker.bbsLogWorker&&(global.worker.bbsLogWorker.onmessage=null)}catch(a){log.error(a)}}handleInterfaceInvocation(a){function b(a){interfaceCallback.invokeCallback({callbackID:c,data:a})}const{callbackID:c,method:d,data:e}=a;switch(d){case"getWebviewHTML":{this.loaded?topTools.executeScript({code:"document.body.innerHTML",webview:this.webview},(a)=>{a&&a[0]?b(a[0]):b("")}):b("");break}case"getScreenShot":{this.webview.captureVisibleRegion({format:"png"},(a)=>{b(a)});break}}}setupBBSLogWorkerListener(){this._bbsLogWorkerListener=(a)=>{if(a.data){if(a.data.error)return void log.info(a.data.error);try{if(a.data.ext.session!==this.session)return;const b=a.data.result.config,c=a.data.ext;consoleDisplay.display({command:C.DISPLAY_INFO,type:C.DISPLAY_TYPES.BBS_LOG_LINK,data:{messageLevel:c.level,message:c.message,explanation:b.explanation,link:b.link,linkType:b.linkType}})}catch(a){log.error(a)}}};try{global.worker.bbsLogWorker.onmessage=this._bbsLogWorkerListener}catch(a){log.error(a)}}captureScreen(){this.webview.captureVisibleRegion({format:"png"},(a)=>{const b=Buffer.from(a.replace("data:image/png;base64,",""),"base64"),c=fileSystem.copyFileDataToTemp(this.props.project,b,".png"),{webviewID:d,callbackID:e}=this.props.captureScreen;this.props.simulatorActions.assdkCallback({callbackID:e,res:{errMsg:"captureScreen:ok",tempFilePath:c}})})}tryCaptureScreenForBackground(){this._captureTryCount||(this._captureTryCount=0),this._captureTryCount++;try{this.webview.captureVisibleRegion({format:"png"},async(a)=>{try{const b=await runTask({taskName:"isSameColorImage",config:{type:"dataURI",format:"png"},dataStr:a,maxTimeout:60000,useBackup:!1,downgrade:!0});if(b.error)throw new Error(b.error);if(b.same){if(3<this._captureTryCount)return;setTimeout(this.tryCaptureScreenForBackground.bind(this),5e3)}else this.props.projectActions.updateProjectCover({image:a})}catch(a){log.error("process capture screen failure with err: "+a.toString(),a.stack)}})}catch(a){log.error("gamewebview chrome capture screen failure with err: "+a.toString())}}onSystemCommand(a,b){systemCommand[a]&&systemCommand[a](b)}setWebviewOffset(){const a=this.props;let b=a.height/a.deviceScale,c=a.width/a.deviceScale;a.popup&&(b=a.height,c=a.width),this.webview&&this.webview.setAttribute("style",`position:absolute;height:${b}px;width:${c}px`)}setUserAgentOverride(){if(this.webview){const a=tokenManager.getSessionToken(validType.UA_TOKEN);let b=this.props.ua.replace("{{webviewID}}",this.props.id);b+=` gameservice port/${global.messageCenterPort} token/${a}`,this.webview.setUserAgentOverride(b)}}doSimulateUpdate(){const a=this.props.simulateUpdate;a?(this.props.simulatorActions.setSimulateUpdate(!1),setTimeout(()=>{gameserviceMessager.triggerOnEvent({eventName:"onUpdateStatusChange",data:{state:"updating"}}),setTimeout(()=>{gameserviceMessager.triggerOnEvent({eventName:"onUpdateStatusChange",data:{state:"updateReady"}})},randomNumber(1e3,5e3))},randomNumber(1e3,5e3))):setTimeout(()=>{gameserviceMessager.triggerOnEvent({eventName:"onUpdateStatusChange",data:{state:"noUpdate"}})},randomNumber(1e3,5e3))}initWebview(){this.session=+new Date;const a=this.props;this.resetStatus();const b=webviewPool.get("simulator",{width:a.width,height:a.height,dpr:a.dpr});b.disabledContextMenu(),this.webview&&(this.webview.detach(),global.online&&grabberWebviewManager.manager.removeWebview("game")),this.webview=b,this.props.muted&&b.setAudioMuted(!0),this.setWebviewOffset(),b.attach(this.container),this.setUserAgentOverride(),this.setupBBSLogWorkerListener(),this.initEvent(b);const c=a.simulateUpdate,d=()=>{this.props.setGame({webview:b});const a=()=>{b.off("loadcommit",a),this.loaded=!0};b.src=`http://127.0.0.1:${global.proxyPort}/game/gamePage.html`,b.on("loadcommit",a),consoleDisplay.initWebview(b._webview),performanceObserver.registerFirstCompileListener(),this.props.gameLaunch(),setTimeout(this.tryCaptureScreenForBackground.bind(this),5e3),b.off("loadcommit",d),this.doSimulateUpdate()};b.on("loadcommit",d),b.src="about:blank",this.bbsConfig=_.cloneDeep(this.props.bbsConfig||[]);try{global.worker.bbsLogWorker.postMessage({msgType:"updateConfig",msgData:this.bbsConfig})}catch(a){}global.online&&grabberWebviewManager.manager.addWebview("game",b._webview)}initEvent(a){a.onRequestBeforeSendHeaders=(a)=>{const b=this.props.project;if(b){const c=a.url;if("main_frame"===a.type&&c.match(/\?load$/))return this.restart(),{cancel:!0};if("main_frame"===a.type&&`http://127.0.0.1:${global.proxyPort}/game/gamePage.html`!==c)return{cancel:!0};if(0!==c.indexOf(`http://127.0.0.1:${global.proxyPort}`)&&"none"===this.props.networkType)return consoleDisplay.display({command:C.DISPLAY_ERROR,data:{title:locales.config.NO_NETWORK_TIPS_TITLE,error:{message:locales.config.NO_NETWORK_TIPS_CONTENT.format(c)}}}),{cancel:!0};if(0===c.indexOf(`http://127.0.0.1:${global.proxyPort}/game/`)){const a=URL.parse(c),b=a.pathname.replace(/^\/game\//,"").replace(/\?.*/,"").replace(/#.*/,"");if(2001000<=tools.getLibVersionNumber(this.props.project.libVersion)&&this.props.appConfig){const a=tools.checkInGameSubPackage(this.props.appConfig,b);if(a&&!this.subPackageLoading[a.root])return consoleDisplay.display({command:C.DISPLAY_ERROR,data:{title:locales.config.RESOURCE_RELATIVE_TIPS_TITLE,error:{message:locales.config.RESOURCE_SUBPACKAGE_TIPS.format(b)}}}),{cancel:!0}}if(this.props.appConfig&&this.props.appConfig.loadingImageInfo&&this.props.appConfig.loadingImageInfo.path&&this.props.appConfig.loadingImageInfo.path===b)return consoleDisplay.display({command:C.DISPLAY_ERROR,data:{title:locales.config.RESOURCE_RELATIVE_TIPS_TITLE,error:{message:locales.config.RESOURCE_LOADING_IMAGE.format(this.props.appConfig.loadingImageInfo.path)}}}),{cancel:!0}}const d=a.requestHeaders||[],e=d.findIndex((a)=>"cookie"===a.name.toLowerCase());d.splice(e,1);for(const a of d)if("_Cookie"===a.name&&(a.name="Cookie"),"Referer"===a.name){const c=b.appid;a.value=`https://servicewechat.com/${c}/devtools/page-frame.html`}return{requestHeaders:a.requestHeaders}}},a.onRequestHeadersReceived=(a)=>{const{type:b}=a;if("xmlhttprequest"===b){const b=a.responseHeaders||[],c={};return b.forEach((a)=>{const{name:b,value:d}=a;c[b]||(c[b]=[]),c[b].push(d)}),b.push({name:"for-weapp-devtools",value:JSON.stringify(c)}),{responseHeaders:b}}return{}},a.onBeforeRequest=(a)=>{const b=a.url;if(weappStoreFileReqular.test(b)||weappTmpFileReqular.test(b)||weappUsrFileReqular.test(b)||weappOpendataFileRegular.test(b))return{redirectUrl:b.replace(/^https?:\/\//,`$&127.0.0.1:${global.proxyPort}/`)};return /^https?:\/\//.test(b)?void 0:{cancel:!0}},a.on("dialog",(a)=>{const b=a.messageType||"",c=a.messageText,d=a.dialog;if("alert"===b){if("DOCUMENT_READY"===c)this.onDocumentReady();else if("MAIN_PACKAGE_LOADED"===c)this.onMainPackageLoaded(),this.setState({loading:!1});else if(0===c.indexOf("SET_SOCKET_HEADER:"))try{const a=JSON.parse(c.replace("SET_SOCKET_HEADER:",""));setWebSocketHeader(a)}catch(a){}else if("NEED_ENTER_FOREGROUND"===c){const a=Object.assign({scene:weappConfig.SCENE_DEFAULT,query:{}},this.props.appLaunchInfo);enterForeground("",Object.assign({},a))}else if(0===c.indexOf("SUBPACKAGE_READY_")){const a=c.replace(/^SUBPACKAGE_READY_/,"");gameserviceMessager.triggerOnEvent({eventName:"onLoadSubPackageTaskStateChange",data:{moduleName:a,state:"success",taskId:this.props.subPackageLoaded[a]&&this.props.subPackageLoaded[a].taskId}}),this.props.simulatorActions.setGameSubPackage(a,!0)}else if(0===c.indexOf("SUBPACKAGE_PROGRESS_")){const a=c.match(/SUBPACKAGE_PROGRESS_([0-9\.]*)_([0-9\.]*)/),b=c.replace(/SUBPACKAGE_PROGRESS_([0-9\.]*)_([0-9\.]*)_/,""),d=parseInt(100*parseFloat(a[1]),10),e=parseInt(a[2],10),f=parseInt(e*d/100,10);gameserviceMessager.triggerOnEvent({eventName:"onLoadSubPackageTaskStateChange",data:{moduleName:b,progress:d,state:"progressUpdate",totalBytesWritten:f,totalBytesExpectedToWrite:e,taskId:this.props.subPackageLoaded[b]&&this.props.subPackageLoaded[b].taskId}})}}else if("confirm"===b)a.preventDefault();else if("prompt"===b)if(a.preventDefault(),/^____sdk____/.test(c)){const b=JSON.parse(c.replace(/^____sdk____/,"")),d=b.command;if("APPSERVICE_INVOKE"===d){const c=b.data.callbackID;this.syncDialogMap[c]=a.dialog,this.props.assdkActions.exec(b.data).then((a)=>{a&&this.syncDialogMap[c]&&(this.syncDialogMap[c].ok(JSON.stringify(a)),delete this.syncDialogMap[c])})}}else c===C.GET_MESSAGE_TOKEN?a.dialog.ok(messageCenter.getToken("GAMESERVICE")):0===c.indexOf("EVALUATE_SCRIPT_FILE")?a.dialog.ok(c):a.dialog.ok("")}),a.on("consolemessage",(a)=>{if(a.sourceId.match(/http:\/\/127\.0\.0\.1:\d+\/game\/__dev__\//)&&!(1>a.level)){const b=a.message;if(b)try{this.bbsConfig&&global.worker.bbsLogWorker.postMessage({msgType:"evaluate",msgData:{message:a.message,context:{libVersion:this.props.project&&this.props.project.libVersion},ext:{session:this.session,level:a.level,message:a.message}}})}catch(a){log.error(a)}}})}restart(){this.session=+new Date,clearTimeout(this.restartTimer),this.restartTimer=setTimeout(()=>{if(!this.webview)return this.initWebview();if(!this.loaded||!this.webview||!this.props.appConfig)return;this.resetStatus(),this.doSimulateUpdate();const a=()=>{clearTimeout(this.deathDetectTimer),this.webview.off("loadcommit",a),this.loaded=!0};this.webview.src=`http://127.0.0.1:${global.proxyPort}/game/gamePage.html`,this.webview.on("loadcommit",a),this.props.gameLaunch(),this.bbsConfig=_.cloneDeep(this.props.bbsConfig||[]);try{global.worker.bbsLogWorker.postMessage({msgType:"updateConfig",msgData:this.bbsConfig})}catch(a){}this.deathDetectTimer=setTimeout(()=>{this.props.infoActions.showError(locales.config.MINI_PROGRAM_CONSUME_TIMING),this.initWebview()},DEATH_DETECTTIME)},1e3)}resetStatus(){this.loaded=!1,this.taskMap.clear(),this.subPackageLoading={},this.syncDialogMap={},this.setState({loading:!0})}onDocumentReady(){this.setWebviewOffset(),this.loadMainPackage(),performanceUtils.markFirstCompileComplete()}async loadMainPackage(){const a=await getMainPackage(this.props.project);topTools.executeScript({code:a,webview:this.webview})}onMainPackageLoaded(){this.props.setAppLaunched(!0)}checkSubPackages(){for(const a in this.props.subPackageLoaded){if(this.props.subPackageLoaded[a].loaded){this.taskMap.onTaskDone(a);continue}this.subPackageLoading[a]=!0;this.taskMap.checkTaskPromise("appLaunched",async()=>{const b=await getSubPackage(this.props.project,a);topTools.executeScript({code:b,webview:this.webview})})}}getLoadingImage(){if(!this.props.appConfig||!this.props.appConfig.loadingImageInfo||!this.props.appConfig.loadingImageInfo.path||!this.state.loading)return null;const a=this.props.appConfig.loadingImageInfo.path;return React.createElement("img",{style:{width:this.props.width,height:this.props.height,position:"absolute"},src:`http://127.0.0.1:${global.proxyPort}/game/${a}`})}render(){const a=this.props,b={height:a.height,width:a.width,position:"absolute"};return React.createElement("div",{className:"webview",ref:(a)=>this.container=a,style:b},this.getLoadingImage())}}module.exports=connect(mapStateToProps,mapDispatchToProps)(Webview);
;}(require("lazyload"), require);
