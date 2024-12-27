(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const _ of r)if(_.type==="childList")for(const l of _.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const _={};return r.integrity&&(_.integrity=r.integrity),r.referrerPolicy&&(_.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?_.credentials="include":r.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function i(r){if(r.ep)return;r.ep=!0;const _=n(r);fetch(r.href,_)}})();var F,d,Z,P,J,ee,H,te,j,R,B,D={},ne=[],se=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function S(t,e){for(var n in e)t[n]=e[n];return t}function z(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e,n){var i,r,_,l={};for(_ in e)_=="key"?i=e[_]:_=="ref"?r=e[_]:l[_]=e[_];if(arguments.length>2&&(l.children=arguments.length>3?F.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)l[_]===void 0&&(l[_]=t.defaultProps[_]);return U(t,l,i,r,null)}function U(t,e,n,i,r){var _={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Z,__i:-1,__u:0};return r==null&&d.vnode!=null&&d.vnode(_),_}function O(t){return t.children}function M(t,e){this.props=t,this.context=e}function x(t,e){if(e==null)return t.__?x(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?x(t):null}function _e(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return _e(t)}}function Q(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!A.__r++||J!==d.debounceRendering)&&((J=d.debounceRendering)||ee)(A)}function A(){var t,e,n,i,r,_,l,s;for(P.sort(H);t=P.shift();)t.__d&&(e=P.length,i=void 0,_=(r=(n=t).__v).__e,l=[],s=[],n.__P&&((i=S({},r)).__v=r.__v+1,d.vnode&&d.vnode(i),V(n.__P,i,r,n.__n,n.__P.namespaceURI,32&r.__u?[_]:null,l,_??x(r),!!(32&r.__u),s),i.__v=r.__v,i.__.__k[i.__i]=i,ie(l,i,s),i.__e!=_&&_e(i)),P.length>e&&P.sort(H));A.__r=0}function re(t,e,n,i,r,_,l,s,c,u,p){var o,v,f,y,g,m,a=i&&i.__k||ne,h=e.length;for(c=ce(n,e,a,c,h),o=0;o<h;o++)(f=n.__k[o])!=null&&(v=f.__i===-1?D:a[f.__i]||D,f.__i=o,m=V(t,f,v,r,_,l,s,c,u,p),y=f.__e,f.ref&&v.ref!=f.ref&&(v.ref&&G(v.ref,null,f),p.push(f.ref,f.__c||y,f)),g==null&&y!=null&&(g=y),4&f.__u||v.__k===f.__k?c=oe(f,c,t):typeof f.type=="function"&&m!==void 0?c=m:y&&(c=y.nextSibling),f.__u&=-7);return n.__e=g,c}function ce(t,e,n,i,r){var _,l,s,c,u,p=n.length,o=p,v=0;for(t.__k=new Array(r),_=0;_<r;_++)(l=e[_])!=null&&typeof l!="boolean"&&typeof l!="function"?(c=_+v,(l=t.__k[_]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?U(null,l,null,null,null):q(l)?U(O,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?U(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=t,l.__b=t.__b+1,s=null,(u=l.__i=fe(l,n,c,o))!==-1&&(o--,(s=n[u])&&(s.__u|=2)),s==null||s.__v===null?(u==-1&&v--,typeof l.type!="function"&&(l.__u|=4)):u!=c&&(u==c-1?v--:u==c+1?v++:(u>c?v--:v++,l.__u|=4))):t.__k[_]=null;if(o)for(_=0;_<p;_++)(s=n[_])!=null&&!(2&s.__u)&&(s.__e==i&&(i=x(s)),le(s,s));return i}function oe(t,e,n){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=oe(i[r],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=x(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function fe(t,e,n,i){var r,_,l=t.key,s=t.type,c=e[n];if(c===null||c&&l==c.key&&s===c.type&&!(2&c.__u))return n;if(i>(c!=null&&!(2&c.__u)?1:0))for(r=n-1,_=n+1;r>=0||_<e.length;){if(r>=0){if((c=e[r])&&!(2&c.__u)&&l==c.key&&s===c.type)return r;r--}if(_<e.length){if((c=e[_])&&!(2&c.__u)&&l==c.key&&s===c.type)return _;_++}}return-1}function X(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||se.test(e)?n:n+"px"}function N(t,e,n,i,r){var _;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||X(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||X(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")_=e!=(e=e.replace(te,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?i?n.u=i.u:(n.u=j,t.addEventListener(e,_?B:R,_)):t.removeEventListener(e,_?B:R,_);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function Y(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=j++;else if(e.t<n.u)return;return n(d.event?d.event(e):e)}}}function V(t,e,n,i,r,_,l,s,c,u){var p,o,v,f,y,g,m,a,h,L,w,I,C,K,E,$,W,b=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),_=[s=e.__e=n.__e]),(p=d.__b)&&p(e);e:if(typeof b=="function")try{if(a=e.props,h="prototype"in b&&b.prototype.render,L=(p=b.contextType)&&i[p.__c],w=p?L?L.props.value:p.__:i,n.__c?m=(o=e.__c=n.__c).__=o.__E:(h?e.__c=o=new b(a,w):(e.__c=o=new M(a,w),o.constructor=b,o.render=ae),L&&L.sub(o),o.props=a,o.state||(o.state={}),o.context=w,o.__n=i,v=o.__d=!0,o.__h=[],o._sb=[]),h&&o.__s==null&&(o.__s=o.state),h&&b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=S({},o.__s)),S(o.__s,b.getDerivedStateFromProps(a,o.__s))),f=o.props,y=o.state,o.__v=e,v)h&&b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),h&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(h&&b.getDerivedStateFromProps==null&&a!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(a,w),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(a,o.__s,w)===!1||e.__v==n.__v)){for(e.__v!=n.__v&&(o.props=a,o.state=o.__s,o.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(T){T&&(T.__=e)}),I=0;I<o._sb.length;I++)o.__h.push(o._sb[I]);o._sb=[],o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(a,o.__s,w),h&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,y,g)})}if(o.context=w,o.props=a,o.__P=t,o.__e=!1,C=d.__r,K=0,h){for(o.state=o.__s,o.__d=!1,C&&C(e),p=o.render(o.props,o.state,o.context),E=0;E<o._sb.length;E++)o.__h.push(o._sb[E]);o._sb=[]}else do o.__d=!1,C&&C(e),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++K<25);o.state=o.__s,o.getChildContext!=null&&(i=S(S({},i),o.getChildContext())),h&&!v&&o.getSnapshotBeforeUpdate!=null&&(g=o.getSnapshotBeforeUpdate(f,y)),s=re(t,q($=p!=null&&p.type===O&&p.key==null?p.props.children:p)?$:[$],e,n,i,r,_,l,s,c,u),o.base=e.__e,e.__u&=-161,o.__h.length&&l.push(o),m&&(o.__E=o.__=null)}catch(T){if(e.__v=null,c||_!=null)if(T.then){for(e.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;_[_.indexOf(s)]=null,e.__e=s}else for(W=_.length;W--;)z(_[W]);else e.__e=n.__e,e.__k=n.__k;d.__e(T,e,n)}else _==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):s=e.__e=pe(n.__e,e,n,i,r,_,l,c,u);return(p=d.diffed)&&p(e),128&e.__u?void 0:s}function ie(t,e,n){for(var i=0;i<n.length;i++)G(n[i],n[++i],n[++i]);d.__c&&d.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(_){_.call(r)})}catch(_){d.__e(_,r.__v)}})}function pe(t,e,n,i,r,_,l,s,c){var u,p,o,v,f,y,g,m=n.props,a=e.props,h=e.type;if(h=="svg"?r="http://www.w3.org/2000/svg":h=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),_!=null){for(u=0;u<_.length;u++)if((f=_[u])&&"setAttribute"in f==!!h&&(h?f.localName==h:f.nodeType==3)){t=f,_[u]=null;break}}if(t==null){if(h==null)return document.createTextNode(a);t=document.createElementNS(r,h,a.is&&a),s&&(d.__m&&d.__m(e,_),s=!1),_=null}if(h===null)m===a||s&&t.data===a||(t.data=a);else{if(_=_&&F.call(t.childNodes),m=n.props||D,!s&&_!=null)for(m={},u=0;u<t.attributes.length;u++)m[(f=t.attributes[u]).name]=f.value;for(u in m)if(f=m[u],u!="children"){if(u=="dangerouslySetInnerHTML")o=f;else if(!(u in a)){if(u=="value"&&"defaultValue"in a||u=="checked"&&"defaultChecked"in a)continue;N(t,u,null,f,r)}}for(u in a)f=a[u],u=="children"?v=f:u=="dangerouslySetInnerHTML"?p=f:u=="value"?y=f:u=="checked"?g=f:s&&typeof f!="function"||m[u]===f||N(t,u,f,m[u],r);if(p)s||o&&(p.__html===o.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(o&&(t.innerHTML=""),re(t,q(v)?v:[v],e,n,i,h=="foreignObject"?"http://www.w3.org/1999/xhtml":r,_,l,_?_[0]:n.__k&&x(n,0),s,c),_!=null)for(u=_.length;u--;)z(_[u]);s||(u="value",h=="progress"&&y==null?t.removeAttribute("value"):y!==void 0&&(y!==t[u]||h=="progress"&&!y||h=="option"&&y!==m[u])&&N(t,u,y,m[u],r),u="checked",g!==void 0&&g!==t[u]&&N(t,u,g,m[u],r))}return t}function G(t,e,n){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(r){d.__e(r,n)}}function le(t,e,n){var i,r;if(d.unmount&&d.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||G(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(_){d.__e(_,e)}i.base=i.__P=null}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&le(i[r],e,n||typeof t.type!="function");n||z(t.__e),t.__c=t.__=t.__e=void 0}function ae(t,e,n){return this.constructor(t,n)}function he(t,e,n){var i,r,_,l;e==document&&(e=document.documentElement),d.__&&d.__(t,e),r=(i=typeof n=="function")?null:e.__k,_=[],l=[],V(e,t=e.__k=ue(O,null,[t]),r||D,D,e.namespaceURI,r?null:e.firstChild?F.call(e.childNodes):null,_,r?r.__e:e.firstChild,i,l),ie(_,t,l)}F=ne.slice,d={__e:function(t,e,n,i){for(var r,_,l;e=e.__;)if((r=e.__c)&&!r.__)try{if((_=r.constructor)&&_.getDerivedStateFromError!=null&&(r.setState(_.getDerivedStateFromError(t)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,i||{}),l=r.__d),l)return r.__E=r}catch(s){t=s}throw t}},Z=0,M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},n),this.props)),t&&S(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Q(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Q(this))},M.prototype.render=O,P=[],ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(t,e){return t.__v.__b-e.__v.__b},A.__r=0,te=/(PointerCapture)$|Capture$/i,j=0,R=Y(!1),B=Y(!0);var de=0;function k(t,e,n,i,r,_){e||(e={});var l,s,c=e;if("ref"in c)for(s in c={},e)s=="ref"?l=e[s]:c[s]=e[s];var u={type:t,props:c,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--de,__i:-1,__u:0,__source:r,__self:_};if(typeof t=="function"&&(l=t.defaultProps))for(s in l)c[s]===void 0&&(c[s]=l[s]);return d.vnode&&d.vnode(u),u}function ve(t){if(typeof t!="number")throw new Error("Length should be a number");if(t<0)throw new Error("No negative length");const e="*",n=e.length;let i="",r,_;for(;t>0;)r?(i=r.toString()+i,_=r.toString().length,r=null):(i=e+i,r=t,_=n),t-=_;return i}class ye extends M{constructor(){super(...arguments),this.state={value:"",stringLength:""},this.onInput=e=>{this.setState({value:e.currentTarget.value})},this.onSubmit=e=>{e.preventDefault(),this.setState({stringLength:this.state.value})}}render(){return k("div",{children:[k("h1",{children:"Perlclip's counterstring but on the web"}),k("section",{children:k("form",{onSubmit:this.onSubmit,children:[k("input",{type:"text",value:this.state.value,onInput:this.onInput}),k("button",{type:"submit",children:"Generate"})]})}),k("section",{children:k("p",{children:["counterstring: ",ve(parseInt(this.state.stringLength))]})})]})}}he(k(ye,{}),document.getElementById("app"));