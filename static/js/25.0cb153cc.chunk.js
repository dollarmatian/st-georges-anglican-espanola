(this.webpackJsonpsacreva=this.webpackJsonpsacreva||[]).push([[25],{100:function(e,t,a){"use strict";var s=a(4),n=a(8),i=a(44),r=a.n(i),c=a(0),o=a.n(c),l=a(74),d=a(66),h=a(47),u=a(71),m=a(73),p=a(67),b=a(63),j=a(64),f=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],g=Object(p.a)("h4");g.displayName="DivStyledAsH4";var v=Object(b.a)("alert-heading",{Component:g}),O=Object(b.a)("alert-link",{Component:j.a}),x={show:!0,transition:u.a,closeLabel:"Close alert"},N=o.a.forwardRef((function(e,t){var a=Object(l.a)(e,{show:"onClose"}),i=a.bsPrefix,c=a.show,p=a.closeLabel,b=a.className,j=a.children,g=a.variant,v=a.onClose,O=a.dismissible,x=a.transition,N=Object(n.a)(a,f),y=Object(h.a)(i,"alert"),_=Object(d.a)((function(e){v&&v(!1,e)})),k=!0===x?u.a:x,C=o.a.createElement("div",Object(s.a)({role:"alert"},k?void 0:N,{ref:t,className:r()(b,y,g&&y+"-"+g,O&&y+"-dismissible")}),O&&o.a.createElement(m.a,{onClick:_,label:p}),j);return k?o.a.createElement(k,Object(s.a)({unmountOnExit:!0},N,{ref:void 0,in:c}),C):c?C:null}));N.displayName="Alert",N.defaultProps=x,N.Link=O,N.Heading=v,t.a=N},374:function(e,t,a){"use strict";a.r(t);var s=a(40),n=a(41),i=a(43),r=a(42),c=a(0),o=a(49),l=a.n(o),d=a(45),h=a(46),u=a(52),m=a(10),p=a(82),b=a(91),j=a(70),f=a(51),g=a(1),v=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"section section-padding",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"section-title text-center",children:[Object(g.jsx)("p",{className:"subtitle",children:"Blog"}),Object(g.jsx)("h4",{className:"title",children:"News Feed"})]}),Object(g.jsx)("div",{className:"row",children:Object(j.d)().map((function(e,t){return Object(g.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(g.jsxs)("article",{className:"sigma_post",children:[Object(g.jsx)("div",{className:"sigma_post-thumb",children:Object(g.jsx)(m.b,{to:"/blog-details/"+e.id,children:Object(g.jsx)("img",{src:"/st-georges-anglican-espanola/"+e.image[0],alt:e.title})})}),Object(g.jsxs)("div",{className:"sigma_post-body",children:[Object(g.jsxs)("div",{className:"sigma_post-meta",children:[Object(g.jsxs)("div",{className:"me-3",children:[Object(g.jsx)("i",{className:"far fa-cross"}),Object(f.e)(e.tags).slice(0,2).map((function(e,t){return Object(g.jsx)(m.b,{to:"/blog/tag/"+e.id,className:"sigma_post-category",children:e.title},t)}))]}),Object(g.jsxs)(m.b,{to:"/blog-details/"+e.id,className:"sigma_post-date",children:[" ",Object(g.jsx)("i",{className:"far fa-calendar"}),e.postdate]})]}),Object(g.jsxs)("h5",{children:[" ",Object(g.jsx)(m.b,{to:"/blog-details/"+e.id,children:e.title})," "]}),Object(f.b)(e.author).map((function(e,t){return Object(g.jsxs)("div",{className:"sigma_post-single-author",children:[Object(g.jsx)("img",{src:"/st-georges-anglican-espanola/"+e.image,alt:e.name}),Object(g.jsxs)("div",{className:"sigma_post-single-author-content",children:["By ",Object(g.jsx)("p",{children:e.name})]})]},t)}))]})]})},t)}))})]})})}}]),a}(c.Component),O=a(83),x=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=[];t=0===e?p:p.filter((function(t){return t.category.includes(e)})),n.setState({filteredProducts:t,activeItem:e})},n.state={filteredProducts:p,activeItem:0},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.state.filteredProducts.map((function(e,t){return Object(g.jsx)("div",{className:"col-lg-4",children:Object(g.jsxs)("div",{className:"sigma_portfolio-item",children:[Object(g.jsx)("img",{src:"/st-georges-anglican-espanola/"+e.image,alt:e.title}),Object(g.jsxs)("div",{className:"sigma_portfolio-item-content",children:[Object(g.jsxs)("div",{className:"sigma_portfolio-item-content-inner",children:[Object(g.jsxs)("h5",{children:[" ",Object(g.jsx)(m.b,{to:"/ministry-details/"+e.id,children:e.title})," "]}),Object(g.jsx)("p",{className:"blockquote bg-transparent",children:e.shorttext.slice(0,70)})]}),Object(g.jsx)(m.b,{to:"/ministry-details/"+e.id,children:Object(g.jsx)("i",{className:"fal fa-plus"})})]})]})},t)}));return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)("div",{className:"section section-padding",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"text-center filter-items",children:[Object(g.jsx)("h5",{className:0===this.state.activeItem?"portfolio-trigger active":"portfolio-trigger",onClick:this.handleClick.bind(this,0),children:"All"}),b.map((function(t,a){return Object(g.jsx)("h5",{className:e.state.activeItem===parseInt(t.id)?"portfolio-trigger active":"portfolio-trigger",onClick:e.handleClick.bind(e,t.id),children:t.title},a)}))]}),Object(g.jsx)("div",{className:"portfolio-filter row",children:t})]})}),Object(g.jsx)(O.a,{}),Object(g.jsx)(v,{})]})}}]),a}(c.Component),N="Ministry Grid",y=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsxs)(l.a,{children:[Object(g.jsxs)("title",{children:["Sacreva - Mega Church & Shop - React Template | ",N]}),Object(g.jsx)("meta",{name:"description",content:"#"})]}),Object(g.jsx)(d.a,{}),Object(g.jsx)(h.a,{breadcrumb:{pagename:N}}),Object(g.jsx)(x,{catId:this.props.match.params.catId,clientId:this.props.match.params.clientId}),Object(g.jsx)("footer",{className:"sigma_footer footer-2 sigma_footer-dark",children:Object(g.jsx)(u.a,{})})]})}}]),a}(c.Component);t.default=y},45:function(e,t,a){"use strict";var s=a(40),n=a(41),i=a(43),r=a(42),c=a(0),o=a(53),l=a(59),d=a(60),h=a(10),u=a(54),m=a(1),p=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state.stickyHeader?" sticky":"";return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)("aside",{className:!0===this.state.canvasMethod?"sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg open":"sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg",children:Object(m.jsx)(l.a,{})}),Object(m.jsx)("div",{className:"sigma_aside-overlay aside-trigger-right",onClick:this.toggleCanvas}),Object(m.jsx)("aside",{className:!0===this.state.navMethod?"sigma_aside sigma_aside-left open":"sigma_aside sigma_aside-left",children:Object(m.jsx)(d.a,{})}),Object(m.jsx)("div",{className:"sigma_aside-overlay aside-trigger-left",onClick:this.toggleNav}),Object(m.jsx)("header",{className:"sigma_header header-3 can-sticky header-absolute"+e,children:Object(m.jsx)("div",{className:"sigma_header-middle",children:Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)("div",{className:"sigma_logo-wrapper",children:Object(m.jsx)(h.b,{to:"/",className:"navbar-brand",children:Object(m.jsx)("img",{src:"/st-georges-anglican-espanola/assets/img/logo.png",alt:"logo"})})}),Object(m.jsx)("div",{className:"sigma_header-inner",children:Object(m.jsxs)("div",{className:"d-flex justify-content-center justify-content-lg-between",children:[Object(m.jsx)("div",{className:"sigma_header-controls style-2 p-0 border-0",children:Object(m.jsxs)("ul",{className:"sigma_header-top-links",children:[Object(m.jsxs)("li",{className:"menu-item",children:[" ",Object(m.jsxs)("a",{rel:"external",href:"tel:+7058691244",children:[" ",Object(m.jsx)("i",{className:"fal fa-phone"})," (705) 869-1244"]})," "]}),Object(m.jsxs)("li",{className:"menu-item",children:[" ",Object(m.jsxs)("a",{rel:"external",href:"mailto:stgeorgesespanola@gmail.com",children:[" ",Object(m.jsx)("i",{className:"fal fa-envelope"})," ","stgeorgesespanola@gmail.com"]})," "]})]})}),Object(m.jsx)("ul",{className:"navbar-nav",children:u.map((function(e,t){return Object(m.jsxs)("li",{className:!0===e.child?"menu-item menu-item-has-children":"menu-item",children:[!0===e.child?Object(m.jsx)(h.b,{to:"#",children:e.linkText}):Object(m.jsx)(h.b,{to:e.link,children:e.linkText}),!0===e.child?Object(m.jsx)("ul",{className:"sub-menu",children:e.submenu.map((function(e,t){return Object(m.jsxs)("li",{className:!0===e.child?"menu-item menu-item-has-children":"menu-item",children:[!0===e.child?Object(m.jsx)(h.b,{to:"#",children:e.linkText}):Object(m.jsx)(h.b,{to:e.link,children:e.linkText}),!0===e.child?Object(m.jsx)("ul",{className:"sub-menu",children:e.submenu.map((function(e,t){return Object(m.jsx)("li",{className:"menu-item",children:Object(m.jsx)(h.b,{to:e.link,children:e.linkText})},t)}))}):""]},t)}))}):""]},t)}))})]})}),Object(m.jsxs)("div",{className:"sigma_header-controls style-2",children:[Object(m.jsxs)(h.b,{to:"/donation",className:"sigma_btn-custom",children:[" ","Donate Here"]}),Object(m.jsx)("ul",{className:"sigma_header-controls-inner",children:Object(m.jsxs)("li",{className:"aside-toggler style-2 aside-trigger-left",onClick:this.toggleNav,children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]})})]})]})})})]})}}]),a}(o.a);t.a=p},46:function(e,t,a){"use strict";var s=a(40),n=a(41),i=a(43),r=a(42),c=a(0),o=a(10),l=a(1),d=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"sigma_subheader dark-overlay dark-overlay-2",style:{backgroundImage:"url(/st-georges-anglican-espanola/assets/img/subheader.jpg)"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"sigma_subheader-inner",children:[Object(l.jsxs)("div",{className:"sigma_subheader-text",children:[Object(l.jsx)("h1",{children:this.props.breadcrumb.pagename}),Object(l.jsx)("p",{className:"blockquote light",children:" We are a church that belives in Jesus christ and the followers and We are a church that belives in Jesus christ "})]}),Object(l.jsx)("nav",{"aria-label":"breadcrumb",children:Object(l.jsxs)("ol",{className:"breadcrumb",children:[Object(l.jsx)("li",{className:"breadcrumb-item",children:Object(l.jsx)(o.b,{to:"/",className:"btn-link",children:"Home"})}),Object(l.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),a}(c.Component);t.a=d},62:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];e.apply(this,s),t.apply(this,s)}}),null)}},63:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var s=a(4),n=a(8),i=a(44),r=a.n(i),c=/-(.)/g;var o=a(0),l=a.n(o),d=a(47),h=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e,t){var a=void 0===t?{}:t,i=a.displayName,c=void 0===i?u(e):i,o=a.Component,m=a.defaultProps,p=l.a.forwardRef((function(t,a){var i=t.className,c=t.bsPrefix,u=t.as,m=void 0===u?o||"div":u,p=Object(n.a)(t,h),b=Object(d.a)(c,e);return l.a.createElement(m,Object(s.a)({ref:a,className:r()(i,b)},p))}));return p.defaultProps=m,p.displayName=c,p}},64:function(e,t,a){"use strict";var s=a(4),n=a(8),i=a(0),r=a.n(i),c=a(62),o=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var d=r.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"a":a,d=e.disabled,h=e.onKeyDown,u=Object(n.a)(e,o),m=function(e){var t=u.href,a=u.onClick;(d||l(t))&&e.preventDefault(),d?e.stopPropagation():a&&a(e)};return l(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),d&&(u.tabIndex=-1,u["aria-disabled"]=!0),r.a.createElement(i,Object(s.a)({ref:t},u,{onClick:m,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),m(e))}),h)}))}));d.displayName="SafeAnchor",t.a=d},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a(0);var n=function(e){var t=Object(s.useRef)(e);return Object(s.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=n(e);return Object(s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},67:function(e,t,a){"use strict";var s=a(4),n=a(0),i=a.n(n),r=a(44),c=a.n(r);t.a=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(s.a)({},t,{ref:a,className:c()(t.className,e)}))}))}},71:function(e,t,a){"use strict";var s,n=a(4),i=a(8),r=a(44),c=a.n(r),o=a(0),l=a.n(o),d=a(81),h=a(80),u=a(79),m=["className","children"],p=((s={})[d.b]="show",s[d.a]="show",s),b=l.a.forwardRef((function(e,t){var a=e.className,s=e.children,r=Object(i.a)(e,m),b=Object(o.useCallback)((function(e){Object(u.a)(e),r.onEnter&&r.onEnter(e)}),[r]);return l.a.createElement(d.e,Object(n.a)({ref:t,addEndListener:h.a},r,{onEnter:b}),(function(e,t){return l.a.cloneElement(s,Object(n.a)({},t,{className:c()("fade",a,s.props.className,p[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",t.a=b},73:function(e,t,a){"use strict";var s=a(4),n=a(8),i=a(9),r=a.n(i),c=a(0),o=a.n(c),l=a(44),d=a.n(l),h=["label","onClick","className"],u={label:r.a.string.isRequired,onClick:r.a.func},m=o.a.forwardRef((function(e,t){var a=e.label,i=e.onClick,r=e.className,c=Object(n.a)(e,h);return o.a.createElement("button",Object(s.a)({ref:t,type:"button",className:d()("close",r),onClick:i},c),o.a.createElement("span",{"aria-hidden":"true"},"\xd7"),o.a.createElement("span",{className:"sr-only"},a))}));m.displayName="CloseButton",m.propTypes=u,m.defaultProps={label:"Close"},t.a=m},75:function(e,t,a){"use strict";var s=a(40),n=a(41),i=a(43),r=a(42),c=a(0),o=a(1),l=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={name:"",phone:"",email:"",subject:"",message:"",isVerified:!1},n}return Object(n.a)(a,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onPhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"reCaptchaLoaded",value:function(e){console.log("Captcha Successfully Loaded",e)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://metropolitanhost.com/scripts/sendmail.php",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){""!==e.id?(document.getElementById("server_response_success").classList.add("d-block"),t.resetForm(),t.setState({isVerified:!0})):document.getElementById("server_response_danger").classList.add("d-block")}))}},{key:"resetForm",value:function(){this.setState({name:"",phone:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return Object(o.jsx)(c.Fragment,{})}}]),a}(c.Component);t.a=l},76:function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/img/clients/1.png"},{"id":2,"image":"assets/img/clients/2.png"},{"id":3,"image":"assets/img/clients/3.png"},{"id":4,"image":"assets/img/clients/4.png"},{"id":5,"image":"assets/img/clients/5.png"},{"id":6,"image":"assets/img/clients/6.png"}]')},77:function(e,t,a){"use strict";var s=a(0),n=a.n(s),i=a(9),r=a.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,a;function s(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(o(t)),t.handleErrored=t.handleErrored.bind(o(t)),t.handleChange=t.handleChange.bind(o(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(o(t)),t}a=e,(t=s).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=s.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,a){e.executionResolve=t,e.executionReject=a,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return n.a.createElement("div",c({},t,{ref:this.handleRecaptchaRef}))},s}(n.a.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:r.a.string.isRequired,onChange:r.a.func,grecaptcha:r.a.object,theme:r.a.oneOf(["dark","light"]),type:r.a.oneOf(["image","audio"]),tabindex:r.a.number,onExpired:r.a.func,onErrored:r.a.func,size:r.a.oneOf(["compact","normal","invisible"]),stoken:r.a.string,hl:r.a.string,badge:r.a.oneOf(["bottomright","bottomleft","inline"])},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var d=a(15),h=a.n(d);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var m={},p=0;var b="onloadcallback";var j,f,g=(j=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+b+"&render=explicit"},f=(f={callbackName:b,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",a=function(t){var a,n;function i(e,a){var s;return(s=t.call(this,e,a)||this).state={},s.__scriptURL="",s}n=t,(a=i).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var r=i.prototype;return r.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+p++),this.__scriptLoaderID},r.setupScriptURL=function(){return this.__scriptURL="function"===typeof j?j():j,this.__scriptURL},r.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},r.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=m[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[f.callbackName]},r.componentDidMount=function(){var e=this,t=this.setupScriptURL(),a=this.asyncScriptLoaderGetScriptLoaderID(),s=f,n=s.globalName,i=s.callbackName,r=s.scriptId;if(n&&"undefined"!==typeof window[n]&&(m[t]={loaded:!0,observers:{}}),m[t]){var c=m[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var o={};o[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)},m[t]={loaded:!1,observers:o};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,f.attributes)l.setAttribute(d,f.attributes[d]);r&&(l.id=r);var h=function(e){if(m[t]){var a=m[t].observers;for(var s in a)e(a[s])&&delete a[s]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=m[t];e&&(e.loaded=!0,h((function(t){return!i&&(t(e),!0)})))},l.onerror=function(){var e=m[t];e&&(e.errored=!0,h((function(t){return t(e),!0})))},document.body.appendChild(l)},r.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===f.removeOnUnmount)for(var t=document.getElementsByTagName("script"),a=0;a<t.length;a+=1)t[a].src.indexOf(e)>-1&&t[a].parentNode&&t[a].parentNode.removeChild(t[a]);var s=m[e];s&&(delete s.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===f.removeOnUnmount&&delete m[e])},r.render=function(){var t=f.globalName,a=this.props,n=(a.asyncScriptOnLoad,a.forwardedRef),i=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(a,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=n,Object(s.createElement)(e,i)},i}(s.Component),n=Object(s.forwardRef)((function(e,t){return Object(s.createElement)(a,u({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:r.a.func},h()(n,e)})(l);t.a=g},83:function(e,t,a){"use strict";var s=a(40),n=a(41),i=a(43),r=a(42),c=(a(0),a(75)),o=a(76),l=a(77),d=a(100),h=a(1),u=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat",style:{backgroundImage:"url(/st-georges-anglican-espanola/assets/img/bg1.jpg)"},children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row align-items-center",children:[Object(h.jsx)("div",{className:"col-lg-6 mb-lg-30",children:Object(h.jsx)("form",{onSubmit:this.handleSubmit.bind(this),method:"Get",children:Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("i",{className:"far fa-user"}),Object(h.jsx)("input",{type:"text",className:"form-control transparent",placeholder:"Full Name",name:"name",value:this.state.name,onChange:this.onNameChange.bind(this),required:!0})]})}),Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("i",{className:"far fa-envelope"}),Object(h.jsx)("input",{type:"email",className:"form-control transparent",placeholder:"Email Id",name:"email",value:this.state.email,onChange:this.onEmailChange.bind(this),required:!0})]})}),Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("i",{className:"far fa-pencil"}),Object(h.jsx)("input",{type:"text",className:"form-control transparent",placeholder:"Subject",name:"subject",value:this.state.subject,onChange:this.onSubjectChange.bind(this),required:!0})]})}),Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("i",{className:"far fa-phone"}),Object(h.jsx)("input",{type:"text",className:"form-control transparent",placeholder:"Phone No.",name:"phone",value:this.state.phone,onChange:this.onPhoneChange.bind(this),required:!0})]})}),Object(h.jsx)("div",{className:"col-lg-12",children:Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("textarea",{className:"form-control transparent",placeholder:"Enter Message",rows:4,name:"message",value:this.state.message,onChange:this.onMessageChange.bind(this),required:!0})})}),Object(h.jsxs)("div",{className:"col-lg-12",children:[Object(h.jsxs)("button",{type:"submit",className:"sigma_btn-custom btn-block",children:[" Get a Quote ",Object(h.jsx)("i",{className:"far fa-arrow-right"})," "]}),Object(h.jsxs)(d.a,{variant:"success",className:"d-none mt-3 mb-0",id:"server_response_success",children:[Object(h.jsx)("strong",{children:"Success!"})," Contact form has been successfully submitted."]}),Object(h.jsxs)(d.a,{variant:"danger",className:"d-none mt-3 mb-0",id:"server_response_danger",children:[Object(h.jsx)("strong",{children:"Oops!"})," Something bad happened. Please try again later."]})]}),Object(h.jsx)(l.a,{sitekey:"6LdxUhMaAAAAAIrQt-_6Gz7F_58S4FlPWaxOh5ib",onChange:this.reCaptchaLoaded.bind(this),size:"invisible"})]})})}),Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsx)("div",{className:"row",children:o.slice(0,6).map((function(e,t){return Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsx)("div",{className:"sigma_client",children:Object(h.jsx)("img",{src:"/st-georges-anglican-espanola/"+e.image,alt:"client"})})},t)}))})})]})})})}}]),a}(c.a);t.a=u}}]);
//# sourceMappingURL=25.0cb153cc.chunk.js.map