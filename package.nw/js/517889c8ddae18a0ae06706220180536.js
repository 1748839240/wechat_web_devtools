;!function(require, directRequire){;"use strict";const tslib_1=require("tslib"),React=require("react"),PropTypes=require("prop-types"),path=require("path"),{connect}=require("react-redux"),infoActions=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),tools=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),Animation=require('./875171e7b864aa58d026d4fa0999fbd1.js'),ms=require('./ff946754202ecf377034d29daac7c8d9.js'),locales=require('./common/locales/index.js'),mapStateToProps=(a)=>{const b=a.simulator,c=b.scene,d=b.currentWebviewID,e=b.webviewInfos,f=e&&e[d]||{},g=f.pathName||"",h=[],i=a.project,j=(i.current||{}).miniprogramRoot||"";for(const b in f.query)h.push(`${b}=${f.query[b]}`);return{scene:c,pathName:g,query:h.join("&"),sceneMap:a.config.sceneMap||[],clientPath:j}},mapDispatchToProps=(a)=>({showSuccessTip:tools.bindActionCreators(infoActions.showSuccessTip,a)});let InfoDropdown=class extends React.Component{constructor(a){super(a),this.handleDropdownClick=(a)=>{a.stopPropagation()},this.handleCopyClick=(a)=>{const b=a.currentTarget.dataset.type,c=nw.Clipboard.get();c.set(this.props[b].toString());const d=this.blinkObjects[b];d&&(d.style.opacity="0.5",!this._blinkTimeout&&(this._blinkTimeout=setTimeout(()=>{d.style.opacity="1",this._blinkTimeout=null},200))),this.props.showSuccessTip(locales.config.CONSOLE_COPY_SUCCESS)},this.blinkObjects={},this.state={position:{left:0,top:0}}}componentDidMount(){this.checkDropdownPosition()}componentDidUpdate(a){this.context.isPopup&&!a.show&&this.props.show&&this.checkDropdownPosition()}checkDropdownPosition(){if(this.context.isPopup&&this.context.window&&this.props.left+260>this.context.window.width){let a=this.context.window.width-260;0>a&&(a=0),this.setState({position:Object.assign({},this.state.position,{left:a})})}}handlePathOpenClick(){ms.sendMessage("EDITOR",JSON.stringify({type:"COMMAND",command:"openFile",data:{path:("/"+path.posix.join(this.props.clientPath,(this.props.pathName||"")+".js")).replace(/\/+/g,"/")}}))}render(){if(global.onlySimulator)return null;const a=this.props;return React.createElement(Animation,{show:a.show,style:{left:this.state.position.left||this.props.left,top:this.state.position.top||this.props.top,width:260},inClassName:"ui-popover",outClassName:"ui-animate-fadeOut ui-popover"},React.createElement("div",{className:"ui-dropdown",onClick:this.handleDropdownClick},React.createElement("div",{className:"ui-dropdown-item"},React.createElement("div",{className:"ui-dropdown-item-bd"},React.createElement("div",{className:"ui-flex ui-dropdown-status-item"},React.createElement("label",{htmlFor:""},locales.config.PAGE_PATH),React.createElement("div",{className:"ui-flex-item"},React.createElement("p",{ref:(a)=>this.blinkObjects.pathName=a,className:"ui-selectable",title:a.pathName},a.pathName?a.pathName:`(${locales.config.EMPTY})`)),React.createElement("div",null,a.pathName?React.createElement("a",{onClick:this.handleCopyClick,"data-type":"pathName"},locales.config.COPY):null,a.pathName?React.createElement("a",{onClick:this.handlePathOpenClick.bind(this)},locales.config.OPEN):null)))),React.createElement("div",{className:"ui-dropdown-item"},React.createElement("div",{className:"ui-dropdown-item-bd"},React.createElement("div",{className:"ui-flex ui-dropdown-status-item"},React.createElement("label",{htmlFor:""},locales.config.SCENE_VALUE),React.createElement("div",{className:"ui-flex-item"},React.createElement("p",{ref:(a)=>this.blinkObjects.scene=a,className:"ui-selectable"},a.scene?a.scene:`(${locales.config.EMPTY})`,a.scene?" "+a.sceneMap[a.scene]||"":null))))),React.createElement("div",{className:"ui-dropdown-item"},React.createElement("div",{className:"ui-dropdown-item-bd"},React.createElement("div",{className:"ui-flex ui-dropdown-status-item"},React.createElement("label",{htmlFor:""},locales.config.PAGE_PARAMETERS),React.createElement("div",{className:"ui-flex-item"},React.createElement("p",{ref:(a)=>this.blinkObjects.query=a,className:"ui-selectable"},a.query?a.query:`(${locales.config.EMPTY})`),a.query?React.createElement("a",{onClick:this.handleCopyClick,"data-type":"query"},locales.config.COPY):null))))))}};InfoDropdown=tslib_1.__decorate([locales.mixin],InfoDropdown),InfoDropdown.contextTypes={isPopup:PropTypes.bool,window:PropTypes.object},module.exports=connect(mapStateToProps,mapDispatchToProps)(InfoDropdown);
;}(require("lazyload"), require);
