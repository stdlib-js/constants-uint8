// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,a,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,s=parseInt(a,10),!isFinite(s)){if(!i(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(a=(-s).toString(r),e.precision&&(a=t(a,e.precision,e.padRight)),a="-"+a):(a=s.toString(r),s||e.precision?e.precision&&(a=t(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===o.call(e.specifier)?o.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":p(t)<1e-4?((r=e.precision)>0&&(r-=1),a=t.toExponential(r)):a=t.toPrecision(e.precision),e.alternate||(a=f.call(a,y,"$1e"),a=f.call(a,v,"e"),a=f.call(a,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=f.call(a,g,"e+0$1"),a=f.call(a,d,"e-0$1"),e.alternate&&(a=f.call(a,h,"$1."),a=f.call(a,w,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===u.call(e.specifier)?u.call(a):l.call(a)}function _(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function E(e,r,i){var a=r-e.length;return a<0?e:e=i?e+_(a):_(a)+e}var k=String.fromCharCode,x=isNaN,S=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,i,a,n,o,p,l,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(a=e[u]))p+=a;else{if(r=void 0!==a.precision,!(a=V(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+a+"`.");for(a.mapping&&(l=a.mapping),i=a.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[l],10),l+=1,x(a.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[l],10),l+=1,x(a.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[l],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=s(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!x(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=x(o)?String(a.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=m(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=E(a.arg,a.width,a.padRight)),p+=a.arg||"",l+=1}return p}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,i,a,t;for(i=[],t=0,a=A.exec(e);a;)(r=e.slice(t,A.lastIndex-a[0].length)).length&&i.push(r),i.push(T(a)),t=A.lastIndex,a=A.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function F(e){return"string"==typeof e}function I(e){var r,i,a;if(!F(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(i=new Array(arguments.length))[0]=r,a=1;a<i.length;a++)i[a]=arguments[a];return j.apply(null,i)}var C=Object.prototype,R=C.toString,M=C.__defineGetter__,O=C.__defineSetter__,P=C.__lookupGetter__,Z=C.__lookupSetter__;var G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var a,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(P.call(e,r)||Z.call(e,r)?(a=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=a):e[r]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&M&&M.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};function N(e,r,i){G(e,r,{configurable:!1,enumerable:!0,writable:!1,value:i})}var U=255,W=1,X={};N(X,"MAX",255),N(X,"NUM_BYTES",1);export{U as MAX,W as NUM_BYTES,X as default};
//# sourceMappingURL=mod.js.map
