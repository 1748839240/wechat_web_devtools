'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(...a){return function(){this.enabled&&j[a[0]].apply(this,a.slice(1))}}function b(){const a=n.getState();return a&&a.settings&&a.settings.shortcuts?a.settings.shortcuts:s.settings.shortcuts}function c(a,c){if(c||(c=b()),c[a]){const b=c[a];return{key:b.key?b.key:'',modifiers:b.modifiers?b.modifiers.join('+'):''}}return{}}function d(a){if(t.hasOwnProperty(a)){const b=t[a];return{key:b.key?b.key:'',modifiers:b.modifiers?b.modifiers.join('+')||'':''}}return{}}function e(){const e=b(),f=n.getState(),g=f.project.current||{},h=g.attr||{};return[{label:k.config.MENU_TITLE_APP,submenu:[{label:k.config.MENU_SWITCH_ACCOUNT,click:a('switchAccount'),shouldEnabled:'!inLoginWindow'},{type:'separator'},{label:k.config.MENU_ABOUT,click:a('about')},{label:k.config.MENU_CHECK_UPDATE,click:a('checkUpdate')},{label:k.config.MENU_BBS,click:a('BBS')},{label:k.config.MENU_DOC,click:a('Doc')},{type:'separator'},{label:k.config.MENU_INSPECT,submenu:[{label:k.config.MENU_INSPECT_APP,click:a('inspectApp')},{label:k.config.MENU_INSPECT_EDITOR,click:a('inspectEditor'),shouldEnabled:'isMiniProgramDev'},{label:k.config.MENU_INSPECT_GIT_MANAGER,click:a('inspectGitManager'),shouldEnabled:'isGitManagerShown'}]},{type:'separator'},{label:k.config.MENU_SWITCH_DEV_MODE,submenu:[{type:'checkbox',label:k.config.MENU_WEB_DEV,click:a('switchToWebDev'),shouldEnabled:'isMiniProgramDev'},{type:'checkbox',label:k.config.MENU_MINI_PROGRAM_DEV,click:a('switchToMiniProgramDev'),shouldEnabled:'isWebDev'}],shouldEnabled:'isMiniProgramDev || isWebDev'},_extends({label:k.config.MENU_EXIT},d('exit'),{click:a('exit')})]},{label:k.config.MENU_TITLE_PROJECT,submenu:[_extends({label:k.config.MENU_NEW_PROJECT},d('newProject'),{click:a('newProject'),shouldEnabled:'(inSelectProjectWindow || isMiniProgramDev) && !inLoginWindow'}),{label:k.config.MENU_IMPORT_PROJECT,click:a('importProject'),shouldEnabled:'(inSelectProjectWindow || isMiniProgramDev) && !inLoginWindow'},{label:k.config.MENU_OPEN_RECENT_PROJECT,submenu:[],shouldEnabled:'(inSelectProjectWindow || isMiniProgramDev) && !inLoginWindow'},{type:'separator'},{label:k.config.MENU_NEW_MINI_CODE,click:a('newMiniCode'),shouldEnabled:'(inSelectProjectWindow || isMiniProgramDev) && !inLoginWindow'},{label:k.config.MENU_IMPORT_MINI_CODE,click:a('importMiniCode'),shouldEnabled:'(inSelectProjectWindow || isMiniProgramDev) && !inLoginWindow'},{type:'separator'},{label:k.config.MENU_PROJECTS,click:a('viewProjects'),shouldEnabled:'(inSelectProjectWindow || isMiniProgramDev) && !inLoginWindow'},{type:'separator'},_extends({label:k.config.MENU_CLOSE_PROJECT},d('closeProject'),{click:a('closeProject'),shouldEnabled:'isMiniProgramDev && !inLoginWindow'})]},{label:k.config.MENU_TITLE_FILE,submenu:[_extends({label:k.config.MENU_NEW_FILE},d('newFile'),{click:a('newFile'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused && isEditorFocused'}),_extends({label:k.config.MENU_SAVE},d('save'),{click:a('save'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused && isEditorFocused'}),_extends({label:k.config.MENU_SAVE_ALL},d('saveAll'),{click:a('saveAll'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused && isEditorFocused'}),{type:'separator'},_extends({label:k.config.MENU_CLOSE_FILE},d('closeFile'),{click:a('closeFile'),shouldEnabled:'isMiniProgramDev && !isDevtoolsFocused && inMainWindow'})]},{label:k.config.MENU_TITLE_EDIT,submenu:[_extends({label:k.config.MENU_UNDO},d('undo'),{click:a('undo')}),_extends({label:k.config.MENU_REDO},d('redo'),{click:a('redo')}),{type:'separator'},_extends({label:k.config.MENU_COPY},d('copy'),{click:a('copy')}),_extends({label:k.config.MENU_CUT},d('cut'),{click:a('cut')}),_extends({label:k.config.MENU_PASTE},d('paste'),{click:a('paste')}),_extends({label:k.config.MENU_SELECT_ALL},d('selectAll'),{click:a('selectAll')}),{type:'separator'},_extends({label:k.config.MENU_UNINDENT},d('unindent'),{click:a('unindent'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_INDENT},d('indent'),{click:a('indent'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_FORMAT_CODE,shortcutName:'format'},c('format',e),{click:a('format'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),{type:'separator'},_extends({label:k.config.MENU_MOVE_LINES_UP},d('moveLineUp'),{click:a('moveLineUp'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_MOVE_LINES_DOWN},d('moveLineDown'),{click:a('moveLineDown'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_COPY_LINES_UP},d('copyLineUp'),{click:a('copyLineUp'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_COPY_LINES_DOWN},d('copyLineDown'),{click:a('copyLineDown'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),{type:'separator'},_extends({label:k.config.MENU_GOTO_FILE,shortcutName:'gotoFile'},c('gotoFile',e),{click:a('gotoFile'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_GOTO_RECENT,shortcutName:'gotoRecentFile'},c('gotoRecentFile',e),{click:a('gotoRecentFile'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_GOTO_PREVIOUS_EDITOR},d('gotoPreviousEditor'),{click:a('gotoPreviousEditor'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_GOTO_NEXT_EDITOR},d('gotoNextEditor'),{click:a('gotoNextEditor'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),{type:'separator'},_extends({label:k.config.MENU_FIND},d('find'),{click:a('find'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_FIND_IN_FILES},d('findInFiles'),{click:a('findInFiles'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'}),_extends({label:k.config.MENU_REPLACE},d('replace'),{click:a('replace'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused && isEditorFocused'}),{type:'separator'},_extends({label:k.config.MENU_COLLAPSE_ALL},d('collapseAll'),{click:a('collapseAll'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isDevtoolsFocused'})]},{label:k.config.MENU_TITLE_TOOLS,submenu:v.compact([_extends({label:k.config.MENU_BUILD,shortcutName:'rebuild'},c('rebuild',e),{click:a('rebuild'),shouldEnabled:'isMiniProgramDev && inMainWindow'}),_extends({label:k.config.MENU_REFRESH,shortcutName:'refresh'},c('refresh',e),{click:a('rebuild'),shouldEnabled:'isMiniProgramDev && inMainWindow'}),_extends({label:k.config.MENU_PREVIEW,shortcutName:'preview'},c('preview',e),{click:a('preview'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isTourist && userbanded'}),{label:k.config.MENU_BUILD_SETTINGS,click:a('openBuildSettings'),shouldEnabled:'isMiniProgramDev && inMainWindow',submenu:[{type:'checkbox',label:k.config.MENU_NORMAL_BUILD,checked:!0,click:a('customRebuild',-1)},{type:'separator'},{label:k.config.MENU_NEW_CUSTOM_BUILD}]},{type:'separator'},_extends({label:k.config.MENU_SIMULATOR_TOGGLE_FOREGROUND_BACKGROUND,shortcutName:'toggleForegroundBackgroundStatus'},c('toggleForegroundBackgroundStatus',e),{click:a('toggleForegroundBackgroundStatus'),shouldEnabled:'isMiniProgramDev && inMainWindow'}),{type:'separator'},{label:k.config.MENU_CLEAR_CACHE,shouldEnabled:'isMiniProgramDev && inMainWindow',submenu:[{label:k.config.MENU_CLEAR_FILE_CACHE,click:a('clearFileCache'),shouldEnabled:'isMiniProgramDev && inMainWindow'},{label:k.config.MENU_CLEAR_STORAGE_CACHE,click:a('clearStorageCache'),shouldEnabled:'isMiniProgramDev && inMainWindow'},{label:k.config.MENU_CLEAR_AUTH_CACHE,click:a('clearAuthCache'),shouldEnabled:'isMiniProgramDev && inMainWindow'},{label:k.config.MENU_CLEAR_WEBVIEW_CACHE,click:a('clearWebviewCache'),shouldEnabled:'isMiniProgramDev && inMainWindow'},{label:k.config.MENU_CLEAR_SESSION,click:a('clearSession'),shouldEnabled:'isMiniProgramDev && inMainWindow'},{type:'separator'},{label:k.config.MENU_CLEAR_ALL,click:a('clearAllCache'),shouldEnabled:'isMiniProgramDev && inMainWindow'}]},{type:'separator'},_extends({label:k.config.MENU_UPLOAD,shortcutName:'upload'},c('upload',e),{click:a('upload'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isTourist && !isGameTourist && userbanded && !isMiniCode'}),{label:k.config.MENU_CUSTOM_ANALYSIS,click:a('customAnalysis'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isTourist && !isGameTourist && userbanded && !isMiniCode && !isGameProject'},{label:k.config.MENU_AUTO_TEST,click:a('autoTest'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isTourist && !isGameTourist && userbanded && !isMiniCode && !isGameProject'},{label:k.config.MENU_COS,click:a('toggleCos'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isTourist && !isGameTourist && userbanded && !isMiniCode'},h.hasTGit?{label:k.config.MENU_TGIT,click:a('jumpTGit'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isTourist && !isGameTourist && userbanded && !isMiniCode'}:null,{label:k.config.MENU_WXGIT,click:a('jumpWXGit'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isTourist && !isGameTourist && userbanded && !isMiniCode'},{label:k.config.MENU_PROJECT_DETAILS,click:a('openProjectDetailInformation'),shouldEnabled:'isMiniProgramDev && inMainWindow'},{label:k.config.MENU_MULTI_ACCOUNT,click:a('showMultiAccountBox'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isTourist && !isGameTourist && userbanded && !isMiniCode'},{type:'separator'},{label:k.config.MENU_TOOLS_MGR,click:a('toolsManager'),shouldEnabled:'isMiniProgramDev && inMainWindow'},{type:'separator'},{label:k.config.BUILD_NPM,click:a('buildNpm'),shouldEnabled:'inMainWindow'}])},{label:k.config.MENU_TITLE_WINDOW,submenu:(global.online?[{label:k.config.MENU_TOGGLE_LOCK_WINDOW_SIZE,click:a('toggleMiniMode')}]:[]).concat([_extends({type:'checkbox',shortcutName:'toggleToolbar',label:k.config.MENU_TOOLBAR},c('toggleToolbar',e),{click:a('toggleToolbar'),shouldEnabled:'isMiniProgramDev && inMainWindow',shouldChecked:'isToolbarVisible'}),_extends({type:'checkbox',shortcutName:'toggleSimulatorWindow',label:k.config.MENU_SIMULATOR},c('toggleSimulatorWindow',e),{click:a('toggleSimulatorWindow'),shouldEnabled:'isMiniProgramDev && inMainWindow',shouldChecked:'isSimulatorVisible'}),_extends({type:'checkbox',label:k.config.MENU_EDITOR,shortcutName:'toggleEditorWindow'},c('toggleEditorWindow',e),{click:a('toggleEditorWindow'),shouldEnabled:'isMiniProgramDev && inMainWindow',shouldChecked:'isEditorVisible'}),_extends({type:'checkbox',label:k.config.MENU_FILE_TREE,shortcutName:'toggleFileTree'},c('toggleFileTree',e),{click:a('toggleFileTree'),shouldEnabled:'isMiniProgramDev && inMainWindow && isEditorVisible',shouldChecked:'isFileTreeVisible'}),_extends({type:'checkbox',label:k.config.MENU_DEVTOOLS,shortcutName:'toggleDebugWindow'},c('toggleDebugWindow',e),{click:a('toggleDebugWindow'),shouldEnabled:'isMiniProgramDev && inMainWindow',shouldChecked:'isDevtoolsVisible'}),{type:'separator'},{label:p.MENU_MOVE_SIMULATOR_LEFT,click:a('moveSimulatorLeft'),shouldEnabled:'isMiniProgramDev && inMainWindow && !isSimulatorLeft && !isSimulatorPopup'},{label:p.MENU_MOVE_SIMULATOR_RIGHT,click:a('moveSimulatorRight'),shouldEnabled:'isMiniProgramDev && inMainWindow && isSimulatorLeft && !isSimulatorPopup'}])},{label:k.config.MENU_TITLE_SETTINGS,submenu:[_extends({label:k.config.MENU_APPEARANCE_SETTINGS},d('openAppearanceSettings'),{click:a('openAppearanceSettings'),shouldEnabled:'isMiniProgramDev && inMainWindow'}),_extends({label:k.config.MENU_SHORTCUT_SETTINGS},d('openShortcutSettings'),{click:a('openShortcutSettings'),shouldEnabled:'isMiniProgramDev && inMainWindow'}),{label:k.config.MENU_EDIT_SETTINGS,click:a('openEditSettings'),shouldEnabled:'isMiniProgramDev && inMainWindow'},{label:k.config.MENU_PROXY_SETTINGS,click:a('openProxySettings')},{label:k.config.MENU_SECURITY_SETTINGS,click:a('openSecuritySettings')},{label:k.config.MENU_LANGUAGE_SETTINGS,submenu:[{type:'checkbox',checked:k.systemLocale===k.getSourceLocale(),label:k.config.MENU_SYSTEM_LANGUAGE,click:a('changeLocale',k.systemLocale)},...k.supportedLanguages.map(({locale:b,dec:c})=>({type:'checkbox',checked:b===k.getSourceLocale(),label:c,click:a('changeLocale',b)}))]},{type:'separator'},{label:k.config.MENU_PROJECT_SETTINGS,click:a('openProjectSettings'),shouldEnabled:'isMiniProgramDev && inMainWindow'}]}]}function f(){const a=e(),b=a[0];return a.shift(),a.push(b),a[2].submenu=a[2].submenu.slice(7),a}function g(a,b){for(const c of b)if(c.submenu){const b=new nw.Menu;g(b,c.submenu);const d=new nw.MenuItem({label:c.label,submenu:b});d.enabled=!c.shouldEnabled||l.evaluate(c.shouldEnabled),a.append(d),c.instance=d}else{const b={};for(const a in c)b[a]=c[a];const d=new nw.MenuItem(b);d.enabled=!b.shouldEnabled||l.evaluate(b.shouldEnabled),a.append(d),c.instance=d}}function h(a){const b=new nw.Menu({type:'menubar'});b.createMacBuiltin('temp',{hideEdit:!1,hideWindow:!0}),b.items[1].label=k.config.MENU_TITLE_EDIT;const c=b.items[1].submenu.items[0];b.items[1].submenu.removeAt(0),c.label=k.config.MENU_UNDO;const d=b.items[1].submenu.items[0];b.items[1].submenu.removeAt(0),d.label=k.config.MENU_REDO;const e=b.items[1].submenu.items[2];b.items[1].submenu.removeAt(2),e.label=k.config.MENU_COPY;const f=b.items[1].submenu.items[1];b.items[1].submenu.removeAt(1),f.label=k.config.MENU_CUT;const g=b.items[1].submenu.items[1];b.items[1].submenu.removeAt(1),g.label=k.config.MENU_PASTE;const h=b.items[1].submenu.items[2];b.items[1].submenu.removeAt(2),h.label=k.config.MENU_SELECT_ALL;const i=a.items[3].submenu;i.removeAt(0),i.insert(c,0),i.removeAt(1),i.insert(d,1),i.removeAt(3),i.insert(e,3),i.removeAt(4),i.insert(f,4),i.removeAt(5),i.insert(g,5),i.removeAt(6),i.insert(h,6)}const i=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),j=require('./25d0beb4120ce2acafb4e03b95444fda.js'),k=require('./common/locales/index.js'),l=require('./41f4eba9fb17703b7d61eca8b05aa076.js'),m=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),n=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),o=require('./72653d4b93cdd7443296229431a7aa9a.js'),p=k.config,q='darwin'===process.platform,r=q?'cmd':'ctrl',s=require('./5498e660c05c574f739a28bd5d202cfa.js'),{preservedShortcuts:t}=require('./f87ad2ec2a5cfdfc5b7856a3adcf63ef.js'),u=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),v=require('lodash'),w=new Map;let x=null;const y=(a)=>a[1].submenu[2].instance,z=(a)=>a[4].submenu[3].instance,A=(a)=>a[0].submenu[2].instance,B=(a)=>a[3].submenu[3].instance,C=(a)=>`${a}`,D=(b,c,d)=>new nw.MenuItem({label:C(c,d),click:a('openProject',b)}),E=(a)=>{a||(a=global.Win);const b=new nw.Menu({type:'menubar'}),c=q?e():f();w.set(a,{menu:b,structure:c}),g(b,c),q&&h(b),I(c),a.menu=b},F=(a)=>{return q?a[4].instance.submenu:a[3].instance.submenu},G=(b)=>{const c=n.getState(),d=c.config.pluginManifests,e=F(b);for(const c in d){const b=d[c];if(b.menu){const d=e.items.findIndex((a)=>{return a.pluginId==c});if(-1==d){const d=new nw.MenuItem({label:b.name,click:a('openPlugin',c)});d.pluginId=c,e.append(d)}}}},H=(b)=>{const c=n.getState(),d=c.project.current,e=q?z(b):B(b);if(d&&e){const b=e.submenu;let c=d.compileType;c==u.plugin&&(c=u.weapp);const f=d.condiction[c];if(!f)return;const g=f.list;for(;b.items[0];)b.removeAt(0);b.append(new nw.MenuItem({type:'checkbox',label:k.config.MENU_NORMAL_BUILD,checked:-1===f.current,click:a('customRebuild',-1)})),b.append(new nw.MenuItem({type:'separator'}));for(let c=0,d=g.length;c<d;c++){const d=g[c];b.append(new nw.MenuItem({type:'checkbox',label:d.name,checked:f.current==c,click:a('customRebuild',c)}))}0<g.length&&b.append(new nw.MenuItem({type:'separator'})),b.append(new nw.MenuItem({label:k.config.MENU_NEW_CUSTOM_BUILD,click:a('createCustomCompile',d.compileType)}))}},I=(b)=>{const c=q?y(b):A(b);if(c){const b=n.getState(),d=b.project.current;if(d){const e=c.submenu,f=b.project.list,g=m.recentProjects.filter((a)=>a!==d.projectid);for(let b=0,c=g.length;b<c;b++){const c=g[b],d=e.items[b],h=f[c],i=decodeURIComponent(h.projectname);if(!d)e.append(D(h.projectid,i,h.projectpath));else{const b=C(i,h.projectpath);d.label!==b&&(d.label=b,d.click=a('openProject',h.projectid,i))}}}}};module.exports={set:()=>{},init:E,update:(a)=>{a||(a=global.Win);const d=w.get(a),e=b();let f=!1;if(!d)return;const g=d.menu,h=d.structure,i=(a)=>{for(const b of a){if(b.instance){if(b.shouldEnabled){const a=b.instance.enabled,c=l.evaluate(b.shouldEnabled);a!==c&&(b.instance.enabled=c),e._editingShortcuts&&(b.instance.key||b.instance.modifiers)&&(b.instance.enabled=!1)}if(b.shouldChecked){const a=b.instance.checked,c=l.evaluate(b.shouldChecked);a!==c&&(b.instance.checked=c)}if(b.shortcutName){const a=b.instance.key,d=b.instance.modifiers,{key:g,modifiers:h}=c(b.shortcutName,e);(g!==a||h!==d)&&(f=!0,b.instance.key=g,b.instance.modifiers=h)}}b.submenu&&(b.instance?b.instance.enabled&&i(b.submenu):i(b.submenu))}};i(h);try{I(h)}catch(a){o.error(`update recent projects menu catch error ${a}`)}try{H(h)}catch(a){o.error(`update compile condiction menu catch error ${a}`)}try{G(h)}catch(a){o.error(`update plugin menu catch error ${a}`)}q||!f||x||(x=setTimeout(()=>{E(global.windowMap.get('MAIN')),x=null},400))}}}(require('lazyload'),require);