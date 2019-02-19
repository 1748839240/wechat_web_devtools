'use strict';!function(require,directRequire){async function a(){return new Promise((a)=>{p.getAdapterState(function(b){const c=b.available,d=b.powered,e=b.discovering;r={available:c,powered:d,discovering:e},a(r)})})}async function b(){return p.onDeviceAdded.addListener(c),p.onDeviceChanged.addListener(d),p.onAdapterStateChanged.addListener(B),q.onCharacteristicValueChanged.addListener(e),s=!0,await a()}function c(a){if(h(a)&&r.discovering&&s&&(u||!x[a.address])){const b={name:a.name,deviceId:a.address,RSSI:a.inquiryRssi,advertisServiceUUIDs:a.uuids};x[b.deviceId]=b,v?w[b.deviceId]=b:i([b])}}function d(a){if(y.hasOwnProperty(a.address)&&s&&y[a.address]!==a.connected){const b={connected:a.connected,deviceId:a.address};y[a.address]=a.connected,l.triggerOnEvent({eventName:'onBLEConnectionStateChanged',data:b})}}function e(a){if(s){const b=a.instanceId||a.uuid,c=z[b],d={value:n(a.value),deviceId:c.deviceId,serviceId:c.serviceId,characteristicId:b};l.triggerOnEvent({eventName:'onBLECharacteristicValueChange',data:d})}}async function f(){for(const a in z)z[a]&&q.stopCharacteristicNotifications(a,function(){z[a]=!1});for(const a in y)y[a]&&q.disconnect(a,function(){y[a]=!1});return r.discovering&&j({},function(){}),r={available:!1,powered:!1,discovering:!1},s=!1,r}async function g(){return p.onDeviceAdded.removeListener(c),p.onDeviceChanged.removeListener(d),p.onAdapterStateChanged.removeListener(B),q.onCharacteristicValueChanged.removeListener(e),await f()}function h(a){if(!t.length)return!0;const b=a.uuids,c=t.some(function(a){return b.some(function(b){return 0<=b.toUpperCase().indexOf(a.toUpperCase())})});return c}function i(){}async function j(a,b){return new Promise((a)=>{p.stopDiscovery(A(b,function(c){c?a({errMsg:`${b.api}:fail ${c.message}`}):(r.discovering=!1,a({errMsg:`${b.api}:ok`,isDiscovering:!1}),v&&(clearInterval(v),v=null),u=!1,w={},x={})}))})}const k=require('./72653d4b93cdd7443296229431a7aa9a.js'),l=require('./a1dd553cc059d528bb0ef56afed53968.js'),m=require('./common/locales/index.js'),{arrayBufferToBase64:n,base64ToArrayBuffer:o}=require('./db24ed4552e3b37097723f3b900374cf.js'),p=chrome.bluetooth,q=chrome.bluetoothLowEnergy||{};let r={available:!1,powered:!1,discovering:!1},s=!1,t=[],u=!1,v=null,w={},x={};const y={},z={},A=function(a,b){return function(){if(chrome.runtime.lastError)b(chrome.runtime.lastError);else{const a=Array.from(arguments);b(...[null].concat(a))}}},B=A('',function(a,b){if(!a){const a=b.available,c=b.powered,d=b.discovering;r={available:a,powered:c,discovering:d},!s}}),C={openBluetoothAdapter:async function(a,c){if(s)return{errMsg:`${c.api}:fail already opened`};const d=await b();return d.available&&d.powered?{errMsg:`${c.api}:ok`}:{errMsg:`${c.api}:fail bluetooth adapter unavailable`}},closeBluetoothAdapter:async function(a,b){return s?(await g(),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail already closed`}},getBluetoothAdapterState:async function(a,b){return new Promise((a)=>{p.getAdapterState(A(b,function(c,d){c?a({errMsg:`${b.api}:fail ${c.message}`}):(r={available:d.available,powered:d.powered,discovering:d.discovering},a({errMsg:`${b.api}:ok`,adapterState:r}))}))})},startBluetoothDevicesDiscovery:async function(a,b){if(r.discovering)return{errMsg:`${b.api}:fail already discovering devices`};t=b.args.services||[],u=b.args.allowDuplicatesKey||!1;const d=b.args.interval||0;return new Promise((a)=>{p.getDevices(function(e){p.startDiscovery(A(b,function(f){if(f)a({errMsg:`${b.api}:fail ${f.message}`});else if(r.discovering=!0,a({errMsg:`${b.api}:ok`,isDiscovering:!0}),0===d)e.forEach(function(a){c(a)});else{const a=e.map(function(a){const b={name:a.name,deviceId:a.address,RSSI:a.inquiryRssi,advertisServiceUUIDs:a.uuids};return x[b.deviceId]=b,b});i(a),v=setInterval(function(){const a=Object.keys(w);if(0!==a.length){const b=a.reduce(function(a,b){return a.push(w[b]),a},[]);i(b),w={}}},d)}}))})})},stopBluetoothDevicesDiscovery:j,getBluetoothDevices:async function(a){return new Promise((b)=>{p.getDevices(A(a,function(c,d){if(c)b({errMsg:`${a.api}:fail ${c.message}`});else{d=d||[];const c=d.filter(h).map(function(a){return{name:a.name,deviceId:a.address,RSSI:a.inquiryRssi,advertisServiceUUIDs:a.uuids}});b({errMsg:`${a.api}:ok`,devices:c})}}))})},getConnectedBluetoothDevices:async function(a,b){return new Promise((a)=>{p.getDevices(A(b,function(c,d){if(c);else{d=d||[];const c=b.args.services,e=d.filter(function(a){return a.connected});Promise.all(e.map(function(a){return new Promise(function(b){q.getServices(a.address,function(a){const d=a.some(function(a){return a.isPrimary&&c.some(function(b){return b===a.uuid})});b(d)})})})).then(function(c){const d=e.reduce(function(a,b,d){return c[d]&&a.push({name:b.name,deviceId:b.address,RSSI:b.inquiryRssi}),a},[]);a({errMsg:`${b.api}:ok`,devices:d})})}}))})},createBLEConnection:async function(a,b){const c=b.args.deviceId;return y[c]=!1,new Promise((a)=>{q.connect(c,A(b,function(c){c?a({errMsg:`${b.api}:fail ${c.message}`}):a({errMsg:`${b.api}:ok`})}))})},closeBLEConnection:async function(a,b){return new Promise((a)=>{const c=b.args.deviceId;q.disconnect(c,A(b,function(d){d?a({errMsg:`${b.api}:fail ${d.message}`}):(y[c]=!1,a({errMsg:`${b.api}:ok`}))}))})},getBLEDeviceServices:async function(a,b){return new Promise((a)=>{const c=b.args.deviceId;q.getServices(c,A(b,function(c,d){if(c)a({errMsg:`${b.api}:fail ${c.message}`});else{d=d||[];const c=d.map(function(a){return{uuid:a.instanceId?a.instanceId:a.uuid,isPrimary:a.isPrimary}});a({errMsg:`${b.api}:ok`,services:c})}}))})},getBLEDeviceCharacteristics:async function(a){return new Promise((b)=>{const c=a.args.serviceId;q.getCharacteristics(c,A(a,function(c,d){if(c)b({errMsg:`${a.api}:fail ${c.message}`});else{const c=['read','write','notify','indicate'];d=d||[];const e=d.map(function(a){return{uuid:a.instanceId||a.uuid,properties:a.properties.reduce(function(a,b){return a[b]=0<=c.indexOf(b),a},{})}});b({errMsg:`${a.api}:ok`,characteristics:e})}}))})},readBLECharacteristicValue:async function(a){return new Promise((b)=>{const c=a.args.deviceId,d=a.args.serviceId,f=a.args.characteristicId;q.readCharacteristicValue(f,A(a,function(f,g){f?b({errMsg:`${a.api}:fail ${f.message}`}):(g.deviceId=c,g.serviceId=d,e(g),b({errMsg:`${a.api}:ok`}))}))})},writeBLECharacteristicValue:async function(a){return new Promise((b)=>{const c=a.args.characteristicId,d=o(a.args.value);q.writeCharacteristicValue(c,d,A(a,function(c){c?b({errMsg:`${a.api}:fail ${c.message}`}):b({errMsg:`${a.api}:ok`})}))})},notifyBLECharacteristicValueChanged:async function(a){return new Promise((b)=>{const c=a.args.deviceId,d=a.args.serviceId,e=a.args.characteristicId,f=a.args.state,g=A(a,function(c){c?b({errMsg:`${a.api}:fail ${c.message}`}):b({errMsg:`${a.api}:ok`})});if(f){if(z[e])return;q.startCharacteristicNotifications(e,g),z[e]={deviceId:c,serviceId:d}}else{if(!z[e])return;q.stopCharacteristicNotifications(e,g),z[e]=null}})}},D='darwin'===process.platform;Object.getOwnPropertyNames(C).forEach(function(a){const b=C[a];C[a]=async function(a,c){if(!D)return{errMsg:`${c.api}:fail ${m.config.BLUETOOTH_DEBUG_SUPPORT}`};return s||'openBluetoothAdapter'===c.api?await b.apply(C,arguments):{errMsg:`${c.api}:fail ${m.config.BLUETOOTH_INITIALIZE}`}}}),module.exports=C}(require('lazyload'),require);