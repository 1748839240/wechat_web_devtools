'use strict';!function(require,directRequire){const a=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),b=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),c=require('./72653d4b93cdd7443296229431a7aa9a.js');module.exports={updateSearchQueryConfig:function(b){return{type:a.CONFIG_UPDATE_SEARCH_QUERY,data:b}},updateSceneConfig:function(d){return(e)=>{try{const c=b.getState(),f=c.config.sceneMap.version,g=JSON.parse(d.scene);g.version>f&&e({type:a.CONFIG_UPDATE_SCENE_INFO,data:g})}catch(a){c.error(`updateSceneConfig ${a}`)}}},updateBBSConfig:function(b){return{type:a.CONFIG_UPDATE_BBS_CONFIG,data:b}},updateLocaleSceneConfig:function(){return{type:a.CONFIG_CHANGE_LOCALE}},syncConfig:(b={},c)=>(d)=>{d({type:a.CONFIG_SYNC_STORE,data:b,syncTime:c})},setPluginManifests:(b)=>{return{type:a.CONFIG_SET_PLUGIN_MANIFEST,data:b}}}}(require('lazyload'),require);