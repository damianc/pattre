var Pattern;(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};(()=>{function r(){return this.anchors.push([1,e=>"^"+e]),this}function n(){return this.anchors.push([1,e=>e+"$"]),this}function s(){return this.anchors.push([3,e=>"\\b"+e+"\\b"]),this}function o(e){return this.anchors.push([2,t=>`(?<=${e})`+t]),this}function c(e){return this.anchors.push([2,t=>t+`(?=${e})`]),this}function i(e){return this.anchors.push([2,t=>`(?<!${e})`+t]),this}function u(e){return this.anchors.push([2,t=>t+`(?!${e})`]),this}function a(e){if(!e)throw new Error("Capturing group label not passed.");return this.anchors.push([4,t=>"(?<"+e+">"+t+")"]),this}e.d(t,{default:()=>v});class p{anchors=[];isFirst=r.bind(this);isLast=n.bind(this);isWord=s.bind(this);hasBefore=o.bind(this);hasAfter=c.bind(this);hasNotBefore=i.bind(this);hasNotAfter=u.bind(this);as=a.bind(this)}const h={optional:Symbol("[Pattern Quantifier]: Optional"),oneOrMore:Symbol("[Pattern Quantifier]: One or More"),zeroOrMore:Symbol("[Pattern Quantifier]: Zero or More"),min:e=>e+"+",range:(e,t)=>e+"-"+t};class l extends p{restr;constructor(e,t=1){super();const r=function(e=1){if(1==e)return"";if("number"==typeof e)return"{"+e+"}";if("string"==typeof e){if(/^\d+$/.test(e))return"{"+e+"}";if(/\d+\+/.test(e))return"{"+e.slice(0,-1)+",}";if(/\d+\-\d+/.test(e)){const[,t,r]=e.match(/(\d+)\-(\d+)/);return"{"+t+","+r+"}"}if("?"===e)return e;if("??"===e||"?+"===e)return"*";if("+?"===e)return"+"}if("symbol"==typeof e)switch(e){case h.optional:return"?";case h.oneOrMore:return"+";case h.zeroOrMore:return"*"}return""}(t);this.restr=e+r}toString(){return this.anchors.sort((([e],[t])=>t-e)).reduce(((e,t)=>t[1](e)),this.restr)}}class d extends l{constructor(e){super("\\p{L}",e)}}class f extends l{constructor(e){super("\\p{Ll}",e)}}class w extends l{constructor(e){super("\\p{Lu}",e)}}class x extends l{constructor(e){super("[a-zA-Z]",e)}}class b extends l{constructor(e){super("[a-z]",e)}}class g extends l{constructor(e){super("[A-Z]",e)}}function L(e){const t=e.replace(/([$*+{}()\[\].?^])/g,"\\$1");return console.log(t,new RegExp(t)),t}class y extends l{constructor(e,t){super(L(""+e),t)}}class m extends l{constructor(e,t){super(L(String(e)[0]),t)}}class S extends l{constructor(e){super("\\d",e)}}class C extends l{constructor(e){super("[01]",e)}}class O extends l{constructor(e){super("[0-9a-fA-F]",e)}}class $ extends l{constructor(e){super("[a-zA-Z0-9]",e)}}class j extends l{constructor(e){super(".",e)}}class A extends l{constructor(e){super("\\x20",e)}}class E extends l{constructor(e){super("\\t",e)}}class P extends l{constructor(e){super("\\n",e)}}class M extends l{constructor(e){super("\\s",e)}}class N extends l{constructor(e){super("\\p{Emoji}",e)}}const z={Letter:e=>new d(e),LCLetter:e=>new f(e),UCLetter:e=>new w(e),Latin:e=>new x(e),LCLatin:e=>new b(e),UCLatin:e=>new g(e),String:(e,t)=>new y(e,t),Char:(e,t)=>new m(e,t),Digit:e=>new S(e),Bin:e=>new C(e),Hex:e=>new O(e),AlphaNum:e=>new $(e),Any:e=>new j(e),Space:e=>new A(e),Tab:e=>new E(e),NewLine:e=>new P(e),WhiteSpace:e=>new M(e),Emoji:e=>new N(e)};z.LC=z.Lowercase=z.LCLetter,z.UC=z.Uppercase=z.UCLetter,z.Newline=z.NewLine,z.Whitespace=z.WhiteSpace;const R=z;class U extends l{constructor(e,t){super(e,t)}}const W={block:function(e,t){return new U("(?:"+e.join("")+")",t)},group:function(e,t){return`(?<${e}>`+t.join("")+")"},oneOf:function(e){return"(?:"+e.join("|")+")"}},Z={...R,...W,...h};function v(e){const t=e(Z).join(""),r=new RegExp(t,"gu");return console.log("RE",r),{[Symbol.replace](e,t){if("function"==typeof t){const n=new RegExp(r);let s,o=e;for(;s=n.exec(o);){const e=s[0],r=t(e,s.groups);o=o.slice(0,s.index)+r+o.slice(s.index+e.length)}return o}return e.replace(r,t)},[Symbol.search](e){const t=new RegExp(r);return e.search(t)}}}})(),Pattern=t.default})();