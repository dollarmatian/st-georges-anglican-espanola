(this.webpackJsonpsacreva=this.webpackJsonpsacreva||[]).push([[6],{138:function(e,t,r){"use strict";var n=r(40),i=r(41),a=r(43),c=r(42),s=r(0),o=r(10),l=r(3),u=r(58),d=r(57),f=r(233),b=r(89),h=r(70),p=r(1),j=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(e){var i;return Object(n.a)(this,r),(i=t.call(this,e)).state={searchText:""},i}return Object(i.a)(r,[{key:"onChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.searchText&&this.props.history.push("/blog/search/"+this.state.searchText)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsxs)("div",{className:"sidebar-widget widget-search",children:[Object(p.jsx)("h5",{className:"widget-title",children:"Search"}),Object(p.jsx)("form",{onSubmit:this.handleSubmit.bind(this),method:"Get",children:Object(p.jsxs)("div",{className:"sigma_search-adv-input",children:[Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Posts",name:"searchText",value:this.state.searchText,onChange:this.onChange.bind(this),required:!0}),Object(p.jsx)("button",{type:"submit",children:Object(p.jsx)("i",{className:"fa fa-search"})})]})})]}),Object(p.jsxs)("div",{className:"sidebar-widget widget-recent-posts",children:[Object(p.jsx)("h5",{className:"widget-title",children:"Recent Posts"}),Object(h.d)().map((function(e,t){return Object(p.jsxs)("article",{className:"sigma_recent-post",children:[Object(p.jsx)(o.b,{to:"/blog-details/"+e.id,children:Object(p.jsx)("img",{src:"/st-georges-anglican-espanola/"+e.image[0],alt:e.title})}),Object(p.jsxs)("div",{className:"sigma_recent-post-body",children:[Object(p.jsxs)("h6",{children:[" ",Object(p.jsx)(o.b,{to:"/blog-details/"+e.id,children:e.title})," "]}),Object(p.jsxs)(o.b,{to:"/blog-details/"+e.id,children:[" ",Object(p.jsx)("i",{className:"far fa-calendar"})," ",e.postdate]})]})]},t)}))]}),Object(p.jsxs)("div",{className:"sidebar-widget widget-categories",children:[Object(p.jsx)("h5",{className:"widget-title",children:" Our Categories "}),Object(p.jsx)("ul",{className:"sidebar-widget-list",children:d.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsxs)(o.b,{to:"/blog/cat/"+e.id,children:[e.title," ",Object(p.jsx)("span",{children:e.count})]})},t)}))})]}),Object(p.jsxs)("div",{className:"sidebar-widget",children:[Object(p.jsx)("h5",{className:"widget-title",children:"Never Miss Out"}),Object(p.jsxs)("ul",{className:"sigma_sm square light",children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"#",children:Object(p.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"#",children:Object(p.jsx)("i",{className:"fab fa-linkedin-in"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"#",children:Object(p.jsx)("i",{className:"fab fa-twitter"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"#",children:Object(p.jsx)("i",{className:"fab fa-youtube"})})})]})]}),Object(p.jsxs)("div",{className:"sidebar-widget widget-twitter",children:[Object(p.jsx)("h5",{className:"widget-title",children:"Twitter Feed"}),f.map((function(e,t){return Object(p.jsxs)("div",{className:"twitter-item d-flex align-items-start",children:[Object(p.jsx)("i",{className:"fab fa-twitter custom-primary me-4 mt-2"}),Object(p.jsxs)("div",{className:"twitter-item-content",children:[Object(p.jsx)("p",{children:e.tweet}),Object(p.jsx)("strong",{children:e.date})]})]},t)}))]}),Object(p.jsxs)("div",{className:"sidebar-widget widget-ig",children:[Object(p.jsx)("h5",{className:"widget-title",children:"Instagram"}),Object(p.jsx)("div",{className:"row",children:b.slice(0,9).map((function(e,t){return Object(p.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-6",children:Object(p.jsx)(o.b,{to:"#",className:"sigma_ig-item",children:Object(p.jsx)("img",{src:"/st-georges-anglican-espanola/"+e.image,alt:"ig"})})},t)}))})]}),Object(p.jsxs)("div",{className:"sidebar-widget",children:[Object(p.jsx)("h5",{className:"widget-title",children:"Popular Tags"}),Object(p.jsx)("div",{className:"tagcloud",children:u.map((function(e,t){return Object(p.jsx)(o.b,{to:"/blog/tag/"+e.id,children:e.title},t)}))})]}),Object(p.jsx)("div",{className:"sidebar-widget widget-ad p-0 border-0",children:Object(p.jsxs)(o.b,{to:"#",children:[Object(p.jsx)("img",{src:"/st-georges-anglican-espanola/assets/img/blog/ad.jpg",alt:"ad"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Add a Custom Text"}),"Add Banner here"]})]})})]})}}]),r}(s.Component);t.a=Object(l.f)(j)},233:function(e){e.exports=JSON.parse('[{"id":1,"tweet":"Rescue - #Hastag ready @ wordpress Theme for Creative Bloggers available on @username https://example/2r1POkkgVC ...","date":"June 30, 2022"},{"id":2,"tweet":"Rescue - #Hastag ready @ wordpress Theme for Creative Bloggers available on @username https://example/2r1POkkgVC ...","date":"June 30, 2022"},{"id":3,"tweet":"Rescue - #Hastag ready @ wordpress Theme for Creative Bloggers available on @username https://example/2r1POkkgVC ...","date":"June 30, 2022"}]')},40:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},41:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return i}))},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(61);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=r(48);function c(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?Object(a.a)(e):t}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=Object(n.a)(e);if(t){var a=Object(n.a)(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return c(this,r)}}},43:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return i}))},45:function(e,t,r){"use strict";var n=r(40),i=r(41),a=r(43),c=r(42),s=r(0),o=r(53),l=r(59),u=r(60),d=r(10),f=r(54),b=r(1),h=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state.stickyHeader?" sticky":"";return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)("aside",{className:!0===this.state.canvasMethod?"sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg open":"sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg",children:Object(b.jsx)(l.a,{})}),Object(b.jsx)("div",{className:"sigma_aside-overlay aside-trigger-right",onClick:this.toggleCanvas}),Object(b.jsx)("aside",{className:!0===this.state.navMethod?"sigma_aside sigma_aside-left open":"sigma_aside sigma_aside-left",children:Object(b.jsx)(u.a,{})}),Object(b.jsx)("div",{className:"sigma_aside-overlay aside-trigger-left",onClick:this.toggleNav}),Object(b.jsx)("header",{className:"sigma_header header-3 can-sticky header-absolute"+e,children:Object(b.jsx)("div",{className:"sigma_header-middle",children:Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("div",{className:"sigma_logo-wrapper",children:Object(b.jsx)(d.b,{to:"/",className:"navbar-brand",children:Object(b.jsx)("img",{src:"/st-georges-anglican-espanola/assets/img/logo.png",alt:"logo"})})}),Object(b.jsx)("div",{className:"sigma_header-inner",children:Object(b.jsxs)("div",{className:"d-flex justify-content-center justify-content-lg-between",children:[Object(b.jsx)("div",{className:"sigma_header-controls style-2 p-0 border-0",children:Object(b.jsxs)("ul",{className:"sigma_header-top-links",children:[Object(b.jsxs)("li",{className:"menu-item",children:[" ",Object(b.jsxs)("a",{rel:"external",href:"tel:+7058691244",children:[" ",Object(b.jsx)("i",{className:"fal fa-phone"})," (705) 869-1244"]})," "]}),Object(b.jsxs)("li",{className:"menu-item",children:[" ",Object(b.jsxs)("a",{rel:"external",href:"mailto:stgeorgesespanola@gmail.com",children:[" ",Object(b.jsx)("i",{className:"fal fa-envelope"})," ","stgeorgesespanola@gmail.com"]})," "]})]})}),Object(b.jsx)("ul",{className:"navbar-nav",children:f.map((function(e,t){return Object(b.jsxs)("li",{className:!0===e.child?"menu-item menu-item-has-children":"menu-item",children:[!0===e.child?Object(b.jsx)(d.b,{to:"#",children:e.linkText}):Object(b.jsx)(d.b,{to:e.link,children:e.linkText}),!0===e.child?Object(b.jsx)("ul",{className:"sub-menu",children:e.submenu.map((function(e,t){return Object(b.jsxs)("li",{className:!0===e.child?"menu-item menu-item-has-children":"menu-item",children:[!0===e.child?Object(b.jsx)(d.b,{to:"#",children:e.linkText}):Object(b.jsx)(d.b,{to:e.link,children:e.linkText}),!0===e.child?Object(b.jsx)("ul",{className:"sub-menu",children:e.submenu.map((function(e,t){return Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)(d.b,{to:e.link,children:e.linkText})},t)}))}):""]},t)}))}):""]},t)}))})]})}),Object(b.jsxs)("div",{className:"sigma_header-controls style-2",children:[Object(b.jsxs)(d.b,{to:"/donation",className:"sigma_btn-custom",children:[" ","Donate Here"]}),Object(b.jsx)("ul",{className:"sigma_header-controls-inner",children:Object(b.jsxs)("li",{className:"aside-toggler style-2 aside-trigger-left",onClick:this.toggleNav,children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})})]})]})})})]})}}]),r}(o.a);t.a=h},46:function(e,t,r){"use strict";var n=r(40),i=r(41),a=r(43),c=r(42),s=r(0),o=r(10),l=r(1),u=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"sigma_subheader dark-overlay dark-overlay-2",style:{backgroundImage:"url(/st-georges-anglican-espanola/assets/img/subheader.jpg)"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"sigma_subheader-inner",children:[Object(l.jsxs)("div",{className:"sigma_subheader-text",children:[Object(l.jsx)("h1",{children:this.props.breadcrumb.pagename}),Object(l.jsx)("p",{className:"blockquote light",children:" We are a church that belives in Jesus christ and the followers and We are a church that belives in Jesus christ "})]}),Object(l.jsx)("nav",{"aria-label":"breadcrumb",children:Object(l.jsxs)("ol",{className:"breadcrumb",children:[Object(l.jsx)("li",{className:"breadcrumb-item",children:Object(l.jsx)(o.b,{to:"/",className:"btn-link",children:"Home"})}),Object(l.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),r}(s.Component);t.a=u},48:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=c(r(55)),i=c(r(56)),a=c(r(69));function c(e){return e&&e.__esModule?e:{default:e}}var s=i.default;t.default=s},55:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=(0,n.createContext)({});t.MetaContext=u;var d=function(e){function t(){return a(this,t),s(this,o(t).apply(this,arguments))}var r,i,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),r=t,(i=[{key:"render",value:function(){return n.default.createElement(u.Provider,{value:{extract:this.props.extract}},n.Children.only(this.props.children))}}])&&c(r.prototype,i),d&&c(r,d),t}(n.Component);t.default=d},56:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=(n=r(14))&&n.__esModule?n:{default:n},c=r(68),s=r(55);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return l(this,t),d(this,f(t).apply(this,arguments))}var r,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=i.default.createElement("div",{className:"react-head-temp"},t);a.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),i=document.head,a=i.innerHTML;(n=(n=n.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(i,r)}else if(e.id){var n=(0,c.getDuplicateElementById)(e);n&&(0,c.removeChild)(i,n)}else if("meta"===t){var a=(0,c.getDuplicateMeta)(e);a&&(0,c.removeChild)(i,a)}else if("link"===t&&"canonical"===e.rel){var s=(0,c.getDuplicateCanonical)(e);s&&(0,c.removeChild)(i,s)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(r.prototype,n),s&&u(r,s),t}(i.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(h,"contextType",s.MetaContext);var p=h;t.default=p,e.exports=t.default},58:function(e){e.exports=JSON.parse('[{"id":1,"title":"Isabella"},{"id":2,"title":"Samantha"},{"id":3,"title":"Emily"},{"id":4,"title":"June"},{"id":5,"title":"Grace"},{"id":6,"title":"Madison"},{"id":7,"title":"Heather"},{"id":8,"title":"Micheal"}]')},61:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},68:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],c=[];return e.forEach((function(e){var i=e.type,a=e.props;"title"===i?t=e:"link"===i&&"canonical"===a.rel?r=e:"meta"===i?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var c=e[n],s=c.props.id;(s?!t.id[s]:0===i.filter((function(e){var r=c.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(c),a.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)n(c);return r}(n)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return n.reduce((function(r,n){var i,a=e.getAttribute(n);return a?r.concat((i=t.querySelectorAll("[".concat(n,' = "').concat(a,'"]')),(i=Array.prototype.slice.call(i||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,i=t.length;n<i;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],i=n.concat(["itemProp"]),a=i.concat(["id"])},69:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=(n=r(56))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return s(this,t),l(this,u(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return i.default.createElement(a.default,null,i.default.createElement("title",null,this.props.title))}}])&&o(r.prototype,n),c&&o(r,c),t}(i.Component);t.default=f,e.exports=t.default}}]);
//# sourceMappingURL=6.86491d7b.chunk.js.map