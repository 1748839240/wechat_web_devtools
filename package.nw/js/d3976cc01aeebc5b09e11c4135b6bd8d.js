;!function(require, directRequire){;'use strict';const fs=require('fs'),path=require('path'),QueryString=require('querystring'),errcodeConfig=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),locales=require('./common/locales/index.js'),weappConfig=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),compiletypeConfig=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),topTools=require('./84b183688a46c9e2626d3e6f83365e13.js');function parseCgiErrorCode(a,b){const c=locales.config;return a===errcodeConfig.NOT_LOGIN||a===errcodeConfig.INVALID_LOGIN||a===errcodeConfig.INVALID_TOKEN||a===errcodeConfig.DEV_INVALID_SIGNATURE||a===errcodeConfig.DEV_NEED_RELOGIN?c.CGI_ERR_NEED_RELOGIN:a===errcodeConfig.NOT_LIMITS_CARD?c.CGI_ERR_NO_PERMISSION:a===errcodeConfig.DEV_APP_NOT_BAND?c.CGI_ERR_NOT_BAND:a===errcodeConfig.DEV_NEED_ADMIN?c.CGI_ERR_NEED_ADMIN:a===errcodeConfig.DEV_NEED_UPDATE?c.CGI_ERR_NEED_UPDATE:a===errcodeConfig.DEV_NEED_SCAN_CODE?c.CGI_ERR_NEED_SCAN_CODE:a===errcodeConfig.DEV_COMPILE_EMPTY_SOURCE?c.CGI_ERR_EMPTY_SOURCE:a===errcodeConfig.DEV_COMPILE_SOURCE_MAX_LIMIT?c.CGI_ERR_SOURCE_MAX_LIMIT:a===errcodeConfig.DEV_COMPILE_WXPKG_MAX_LIMIT?c.CGI_ERR_WXPKG_MAX_LIMIT:a===errcodeConfig.DEV_COMPILE_INVALID_WXPKG?c.CGI_ERR_INVALID_WXPKG:a===errcodeConfig.DEV_COMPILE_WXML_FAIL?c.CGI_ERR_WXML_FAIL.format(b):a===errcodeConfig.DEV_COMPILE_WXSS_FAIL?c.CGI_ERR_WXSS_FAIL.format(b):a===errcodeConfig.DEV_COMPILE_INVALID_FILE?c.CGI_ERR_INVALID_FILE.format(b):a===errcodeConfig.DEV_COMPILE_INVALID_JSON_FILE?c.CGI_ERR_INVALID_JSON.format(b):a===errcodeConfig.DEV_COMPILE_LACK_OF_FILE?c.CGI_ERR_LACK_OF_FILE.format(b):a===errcodeConfig.DEV_BIND_NOT_24H?c.CGI_ERR_BIND_NOT_24H:a===errcodeConfig.DEV_PLATFORM_NOT_BAND_DEV?c.CGI_ERR_PLATFORM_NOT_BAND:a===errcodeConfig.DEV_PLATFORM_INVALID_EXT_APPID?c.CGI_ERR_PLATFORM_INVALID_EXT_APPID:a===errcodeConfig.DEV_PLATFORM_EXT_APPID_NOT_AUTH?c.CGI_ERR_PLATFORM_EXT_APPID_NOT_AUTH:a===errcodeConfig.NOT_LIMITS?c.CGI_ERR_NOT_LIMITS:a===errcodeConfig.NOT_LIMITS_QY?c.CGI_ERR_NOT_LIMITS_QY:a===errcodeConfig.DEV_INVALID_APPID?c.CGI_ERR_DEV_INVALID_APPID:a===errcodeConfig.DEV_CLOUD_NO_PERMISSION?c.CGI_ERR_DEV_CLOUD_NO_PERMISSION:a===errcodeConfig.DEV_CLOUD_NO_PRODUCT_ENV?c.CGI_ERR_DEV_CLOUD_NO_PRODUCT_ENV:a===errcodeConfig.DEV_CLOUD_INVALID_RESP_DATA?c.CGI_ERR_DEV_CLOUD_INVALID_RESP_DATA:a===errcodeConfig.DEV_CLOUD_SYNC_CALLBACK_ERR||a===errcodeConfig.DEV_CLOUD_ASYNC_CALLBACK_ERR?c.CGI_ERR_DEV_CLOUD_CALLBACK_ERR.format(a):a===errcodeConfig.DEV_CLOUD_NO_CLOUD_ACCOUNT?c.CGI_ERR_DEV_CLOUD_NO_CLOUD_ACCOUNT:a===errcodeConfig.DEV_CLOUD_EVENT_EXPIRED?c.CGI_ERR_DEV_CLOUD_EVENT_EXPIRED:a===errcodeConfig.DEV_CLOUD_INVALID_ACTION?c.CGI_ERR_DEV_CLOUD_INVALID_ACTION:a===errcodeConfig.CGI_ERR_USER_CAN_NOT_ACCESS_APP?c.CGI_ERR_USER_CAN_NOT_ACCESS_APP:a===errcodeConfig.CGI_ERR_APP_NOT_EXIST?c.CGI_ERR_APP_NOT_EXIST:a===errcodeConfig.CGI_ERR_APP_VERSION_NOT_EXIST?c.CGI_ERR_APP_VERSION_NOT_EXIST:a===errcodeConfig.DEV_CLOUD_NO_DEVELOP_ENV?c.CGI_ERR_DEV_CLOUD_NO_DEVELOP_ENV:a===errcodeConfig.DEV_CLOUD_NO_AUTH?c.CGI_ERR_DEV_CLOUD_NO_AUTH:a===errcodeConfig.DEV_LIMIT?c.CGI_ERR_NOT_DEV_LIMIT||b:a===errcodeConfig.DEV_INVALID_PLUGIN_VERSION?c.CGI_ERR_DEV_INVALID_PLUGIN_VERSION+','+b:a===errcodeConfig.DEV_PLUGIN_NOT_FOUND?c.CGI_ERR_DEV_PLUGIN_NOT_FOUND+','+b:a===errcodeConfig.DEV_DEVPLUGIN_NOT_DEFINED?c.CGI_ERR_DEV_DEVPLUGIN_NOT_DEFINED:a===errcodeConfig.DEV_PLUGIN_ROOT_NOT_DEFINED?c.CGI_ERR_DEV_PLUGIN_ROOT_NOT_DEFINED:a===errcodeConfig.DEV_TWO_SAME_PLUGIN_FOUND?c.CGI_ERR_DEV_TWO_SAME_PLUGIN_FOUND+','+b:a===errcodeConfig.DEV_COMPILE_SOURCE_MAX_LIMIT_SUBPKG?c.CGI_ERR_DEV_COMPILE_SOURCE_MAX_LIMIT_SUBPKG+','+b:a===errcodeConfig.DEV_PLUGIN_NOT_INITTED?c.CGI_ERR_DEV_PLUGIN_NOT_INITTED+','+b:a===errcodeConfig.DEV_CLOUD_NO_TGIT_PROJECT?c.CGI_ERR_DEV_CLOUD_NO_TGIT_PROJECT:b||c.CGI_ERR_SYSTEM_ERROR.format(a)}function parseUrl(a){const b=a.split('?');return{pathName:b[0].replace(/\.html$/,''),query:QueryString.parse(b[1])}}function getProjectHashFromURL(a){const b=a.replace(/https?:\/\//,'').split('.');return b[0]}function bindActionCreator(a,b){return function(){return b(a(...arguments))}}function bindActionCreators(a,b){if('[object Function]'===Object.prototype.toString.call(a))return bindActionCreator(a,b);const c=Object.keys(a),d={};for(const e of c){const c=a[e];'[object Function]'===Object.prototype.toString.call(c)&&(d[e]=bindActionCreator(c,b))}return d}function getWidgetOffset(a,b){if(a===compiletypeConfig.search)return{width:b.screenWidth-30,height:(b.screenWidth-30)*weappConfig.default_search_widget_radio};let c=0.6*b.screenWidth;return('iPhone 6'===b.title||'iPhone 6 Plus'===b.title)&&(c=0.56*b.screenWidth),{height:c*weappConfig.default_conversation_widget_radio,width:c}}function getWidgetDirectory(a,b){try{for(let c=0,d=b.widgets.length;c<d;c++){const d=b.widgets[c];if(d.type===a)return d.path}}catch(a){}return''}function strToHash(a){let b,c,d,e=0;if(0===a.length)return e;for(b=0,d=a.length;b<d;b++)c=a.charCodeAt(b),e=(e<<5)-e+c,e|=0;return 0<e?e:0-e}function checkIsInSubPackage(a,b){let c;if(a.subPackages)for(let d=0,e=a.subPackages.length;d<e;d++){const e=a.subPackages[d];if(0===b.indexOf(e.root)){c=e;break}}return c}function checkIsIndependentSubpackage(a,b){const c=checkIsInSubPackage(a,b);return c&&!0===c.independent?c:void 0}function checkInGameSubPackage(a,b=''){b.startsWith('/')||(b='/'+b),b=topTools.normalizePath(b);let c;if(a.subPackages)for(let d=0,e=a.subPackages.length;d<e;d++){const e=a.subPackages[d];if(/\.js$/.test(e.root)){if(b===e.root){c=e;break}}else if(0===b.indexOf(e.root)){c=e;break}}return c}function getLibVersionNumber(a){try{let b=a.split('.').reduce(function(a,b,c,d){return a+parseInt(b,10)*Math.pow(1e3,d.length-c-1)},0);return isNaN(b)&&(b=999999999),b}catch(a){return 999999999}}function calculatePathSize(a,b){if(!fs.existsSync(a))return 0;const c=fs.statSync(a);if(c.isDirectory()){const c=fs.readdirSync(a);return c.reduce((c,d)=>c+calculatePathSize(path.join(a,d),b),0)}const d=path.extname(a);return!b||b[d]?c.size:0}module.exports={parseCgiErrorCode,parseUrl,getProjectHashFromURL,bindActionCreators,getWidgetOffset,getWidgetDirectory,strToHash,checkIsInSubPackage,checkInGameSubPackage,getLibVersionNumber,calculatePathSize,checkIsIndependentSubpackage};
;}(require("lazyload"), require);
