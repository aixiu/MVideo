(window.MIP=window.MIP||[]).push({name:"mip-stats-baidu",func:function(){define("mip-stats-baidu/mip-stats-baidu",["require","viewer","util","customElement"],function(e){function t(){for(var e=document.querySelectorAll("*[data-stats-baidu-obj]"),t=0;t<e.length;t++){var o=e[t].getAttribute("data-stats-baidu-obj");if(o){try{o=JSON.parse(decodeURIComponent(o))}catch(e){console.warn("事件追踪data-stats-baidu-obj数据不正确");continue}var r=o.type;if(o.data){var a=n(o.data);if("click"===r||"mouseup"===r||"load"===r)if(!e[t].classList.contains("mip-stats-eventload"))if(e[t].classList.add("mip-stats-eventload"),"load"===r)window._hmt.push(a);else if("click"===r&&e[t].hasAttribute("on")&&e[t].getAttribute("on").match("tap:")&&p.hasTouch()){var s=new l(e[t]);s.on("tap",i)}else e[t].addEventListener(r,i,!1)}}}}function i(e){var t=this.getAttribute("data-stats-baidu-obj");if(t){var i;try{i=JSON.parse(decodeURIComponent(t))}catch(e){return void console.warn("事件追踪data-stats-baidu-obj数据不正确")}if(i.data){var o=n(i.data);window._hmt.push(o)}}}function n(e){if(e){if("object"==typeof e)return e;for(var t=e.slice(1,e.length-1).split(","),i=[],n=0;n<t.length;n++){var o=t[n].replace(/(^\s*)|(\s*$)/g,"").replace(/\'/g,"");if("false"===o||"true"===o)o=Boolean(o);i.push(o)}return i}}function o(){var e="",t={},i=MIP.hash.get("word")||"",n=MIP.hash.get("eqid")||"";if(r(MIP.hash.get("from")||"","result")){if((i||n)&&document.referrer)t.url="",t.eqid=n,t.word=i,e=document.referrer}else t.url="",e=location.origin+location.pathname+location.search;window._hmt.push(["_setReferrerOverride",a(e,t)])}function r(e,t){if(e&&t&&e===t)return!0;else return!1}function a(e,t){var i="",n=e.indexOf("?")<0?"?":"&",o="";for(var r in t)o+="&"+r+"="+t[r];if(o=o.slice(1),e.indexOf("#")<0&&o)i=e+n+o;else i=e.replace("#",n+o+"#");return i}var s=e("viewer"),c=e("util"),l=c.Gesture,p=e("util").fn,d=e("customElement").create();return d.prototype.createdCallback=function(){var e=this.element,i=this.getConfig(),n=i.token;if(n){if(window._hmt=window._hmt||[],window._hmt.push(["_setAccount",n]),s.isIframed)o();if(i&&Array.isArray(i.conf)&&i.conf.length)for(var r=i.conf,a=0;a<r.length;a++)window._hmt.push(r[a]);t();var c=document.createElement("script");c.src="https://hm.baidu.com/hm.js?"+n,e.appendChild(c)}else console.warn("token is unavailable")},d.prototype.getConfig=function(){var e={},t=this.element.getAttribute("setconfig");try{var i=this.element.querySelector('script[type="application/json"]');if(i){var o=JSON.parse(i.textContent);if("{}"!==JSON.stringify(o))e.token=o.token,c.fn.del(o,"token"),e.conf=this.objToArray(o);return e}}catch(e){console.warn("json is illegal"),console.warn(e)}return{token:this.element.getAttribute("token"),conf:t?new Array(n(decodeURIComponent(t))):null}},d.prototype.objToArray=function(e){var t=[];if(e){for(var i in e)if(e.hasOwnProperty(i)&&Array.isArray(e[i]))e[i].unshift(i),t.push(e[i]);return t}},d}),define("mip-stats-baidu",["mip-stats-baidu/mip-stats-baidu"],function(e){return e}),function(){function e(e,t){e.registerMipElement("mip-stats-baidu",t)}if(window.MIP)require(["mip-stats-baidu"],function(t){e(window.MIP,t)});else require(["mip","mip-stats-baidu"],e)}()}});