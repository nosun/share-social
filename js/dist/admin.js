module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=12)}([function(t,n,e){"use strict";function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",function(){return r})},,,,,,,function(t,n){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,n){t.exports=flarum.core.compat["components/Switch"]},function(t,n){t.exports=flarum.core.compat.Component},function(t,n){t.exports=flarum.core.compat["components/Select"]},,function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(7),i=e.n(o),s=e(8),a=e.n(s),p=e(9),u=function(t){function n(){return t.apply(this,arguments)||this}Object(r.a)(n,t);var e=n.prototype;return e.init=function(){this.key=this.props.key,this.cast=this.props.cast||function(t){return t}},e.setting=function(){return app.modal.component.setting(this.key)},e.getValue=function(){return this.cast(this.setting()())},n}(e.n(p).a),c=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.view=function(){return a.a.component({state:!!Number(this.getValue()),children:this.props.label||this.props.children,onchange:this.setting()})},n}(u);function l(){return(l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var f=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.view=function(){var t=l({},this.props),n=this.props.label||this.props.children;return t.className="FormControl "+(t.className||""),t.bidi=this.setting(),t.simple?m("input",t):m("div.Form-group",[m("label",n),m("input",t)])},n}(u),h=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.init=function(){f.prototype.init.call(this),this.cast=function(t){return Number(t)},this.props.type="number"},n}(f),d=(e(10),{boolean:c,string:f,integer:h,number:h}),y=function(t){function n(){return t.apply(this,arguments)||this}Object(r.a)(n,t);var e=n.prototype;return e.init=function(){this.props.items=Array.from(this.props.items||[]),this.settings={},this.setting=this.setting.bind(this),this.props.onsaved&&(this.onsaved=this.props.onsaved.bind(this))},e.className=function(){return[this.props.className,this.props.size&&"Modal--"+this.props.size].filter(Boolean).join(" ")},e.title=function(){return this.props.title},e.form=function(){return this.props.form||[].concat(this.props.items).map(function(t){return!t||"div"===t.tag||t.attrs&&t.attrs.className&&t.attrs.className.contains("Form-group")?t:m("div.Form-group",t)})},n.createItemsFromValidationRules=function(t,n,e){var r=[];for(var o in t){var i=n+o.toLowerCase(),s=t[o].split("|"),a=s.find(function(t){return d[t]})||"string",p=a&&d[a]||f,u=s.includes("required"),c=e&&(app.translator.trans[""+e+o.toLowerCase()+"-label"]||o)||o,l=app.translator.translations[""+e+o.toLowerCase()+"-description"];r.push(m.prop("div.Form-group"+(u?".required":""),["boolean"!==a&&m("label",c),p.component({type:a,key:i,required:u,children:c,simple:!0}),l&&m("span",l)]))}return r},n}(i.a),b=[["facebook","twitter","linkedin","reddit"],["vkontakte","odnoklassniki","my_mail"],["qq"]];app.initializers.add("fof/share-social",function(){app.extensionSettings["fof-share-social"]=function(){return app.modal.show(new y({title:app.translator.trans("fof-share-social.admin.settings.title"),className:"FofShareSocialSettingsModal",size:"small",items:[].concat(b.map(function(t){return t.map(function(t){return m(c,{key:"fof-share-social.networks."+t},app.translator.trans("fof-share-social.lib.networks."+t))})}))}))}})}]);
//# sourceMappingURL=admin.js.map