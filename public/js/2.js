(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{315:function(e,n,t){"use strict";t.r(n);var i=t(313),o=t(312);function u(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_header",Object(i.a)("#header")),r(this,"_burgerButton",this._header.$(".header--burger-button")),r(this,"_signButtons",this._header.$(".header--sing-buttons")),r(this,"_menuBgComponent",i.a.clone("menu-bg")),r(this,"_subscribeComponent",i.a.clone("subscribe"))}var n,t,s;return n=e,s=[{key:"init",value:function(){var n=new e;n._burgerButton.on("click",n._burgerButtonClickHandler.bind(n)),o.a.on("close-menu",(function(){n._header.remove(".is-menu-open"),n._closeMenu()}))}}],(t=[{key:"_burgerButtonClickHandler",value:function(e){var n=e.clientX,t=e.clientY;this._header.toggle(".is-menu-open"),this._header.has(".is-menu-open")?this._openMenu({top:t,left:n}):this._closeMenu()}},{key:"_openMenu",value:function(e){var n=e.top,t=e.left;i.a.body.block(),this._menuBgComponent.styles({top:n+"px",left:t+"px"}),this._header.append(this._menuBgComponent),this._isWindowWithTabletWidth()&&(this._signButtons.prepend(this._subscribeComponent),o.a.emit("init-subscribe-events"))}},{key:"_closeMenu",value:function(){var e=this;i.a.body.unblock(),this._header.add(".is-menu-close"),setTimeout((function(){e._header.$(".menu-bg").remove(),e._header.remove(".is-menu-close"),e._isWindowWithTabletWidth()&&e._signButtons.$(".subscribe").remove()}),400)}},{key:"_isWindowWithTabletWidth",value:function(){return document.documentElement.clientWidth>=768}}])&&u(n.prototype,t),s&&u(n,s),e}();n.default=s}}]);