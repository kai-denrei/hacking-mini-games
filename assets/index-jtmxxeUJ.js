(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="170",Ti={ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,pa=1,_h=2,$l=1,xh=2,fn=3,On=0,Re=1,mn=2,xn=0,Zn=1,$s=2,ma=3,ga=4,vh=5,Yn=100,Mh=101,Sh=102,yh=103,Eh=104,Th=200,bh=201,Ah=202,wh=203,jr=204,Kr=205,Rh=206,Ch=207,Ph=208,Lh=209,Dh=210,Ih=211,Uh=212,Nh=213,Fh=214,Zr=0,Jr=1,Qr=2,Ci=3,to=4,eo=5,no=6,io=7,Yl=0,Oh=1,Bh=2,Fn=0,ql=1,jl=2,Kl=3,Zl=4,kh=5,Jl=6,Ql=7,tc=300,Pi=301,Li=302,so=303,ro=304,tr=306,oo=1e3,jn=1001,ao=1002,Ze=1003,zh=1004,cs=1005,en=1006,hr=1007,Kn=1008,yn=1009,ec=1010,nc=1011,Ji=1012,Wo=1013,ti=1014,gn=1015,vn=1016,Xo=1017,$o=1018,Di=1020,ic=35902,sc=1021,rc=1022,je=1023,oc=1024,ac=1025,bi=1026,Ii=1027,lc=1028,Yo=1029,cc=1030,qo=1031,jo=1033,Fs=33776,Os=33777,Bs=33778,ks=33779,lo=35840,co=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,go=37808,_o=37809,xo=37810,vo=37811,Mo=37812,So=37813,yo=37814,Eo=37815,To=37816,bo=37817,Ao=37818,wo=37819,Ro=37820,Co=37821,zs=36492,Po=36494,Lo=36495,hc=36283,Do=36284,Io=36285,Uo=36286,Hh=3200,Vh=3201,Gh=0,Wh=1,Un="",ke="srgb",Ni="srgb-linear",er="linear",ee="srgb",oi=7680,_a=519,Xh=512,$h=513,Yh=514,uc=515,qh=516,jh=517,Kh=518,Zh=519,xa=35044,va="300 es",_n=2e3,Ys=2001;class si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,No=180/Math.PI;function es(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function Jh(n,t){return(n%t+t)%t}function ur(n,t,e){return(1-e)*n+e*t}function Vi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qh={DEG2RAD:Hs};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,s,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],u=s[6],M=s[1],T=s[4],x=s[7],D=s[2],A=s[5],w=s[8];return r[0]=o*_+a*M+l*D,r[3]=o*p+a*T+l*A,r[6]=o*u+a*x+l*w,r[1]=c*_+h*M+d*D,r[4]=c*p+h*T+d*A,r[7]=c*u+h*x+d*w,r[2]=f*_+m*M+g*D,r[5]=f*p+m*T+g*A,r[8]=f*u+m*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dr.makeScale(t,e)),this}rotate(t){return this.premultiply(dr.makeRotation(-t)),this}translate(t,e){return this.premultiply(dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new Bt;function dc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tu(){const n=qs("canvas");return n.style.display="block",n}const Ma={};function Yi(n){n in Ma||(Ma[n]=!0,console.warn(n))}function eu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function nu(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function iu(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(n.r=Mn(n.r),n.g=Mn(n.g),n.b=Mn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Un?er:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ai(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Sa=[.64,.33,.3,.6,.15,.06],ya=[.2126,.7152,.0722],Ea=[.3127,.329],Ta=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ba=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Ni]:{primaries:Sa,whitePoint:Ea,transfer:er,toXYZ:Ta,fromXYZ:ba,luminanceCoefficients:ya,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:Sa,whitePoint:Ea,transfer:ee,toXYZ:Ta,fromXYZ:ba,luminanceCoefficients:ya,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let ai;class su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=qs("canvas")),ai.width=t.width,ai.height=t.height;const i=ai.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mn(e[i]/255)*255):e[i]=Mn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ru=0;class fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fr(s[o].image)):r.push(fr(s[o]))}else r=fr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function fr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?su.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ou=0;class Ce extends si{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=jn,s=jn,r=en,o=Kn,a=je,l=yn,c=Ce.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=es(),this.name="",this.source=new fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=tc;Ce.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,x=(m+1)/2,D=(u+1)/2,A=(h+f)/4,w=(d+_)/4,L=(g+p)/4;return T>x&&T>D?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=A/i,r=w/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=L/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=w/r,s=L/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class au extends si{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ce(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Je extends au{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class pc extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lu extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-a;const u=l*f+c*m+h*g+d*_,M=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const D=Math.sqrt(T),A=Math.atan2(D,u*M);p=Math.sin(p*A)/D,a=Math.sin(a*A)/D}const x=a*M;if(l=l*p+f*x,c=c*p+m*x,h=h*p+g*x,d=d*p+_*x,p===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-a*m,t[e+2]=c*g+h*m+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Aa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Aa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new V,Aa=new sn;class ns{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ve):Ve.fromBufferAttribute(r,o),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),us.subVectors(this.max,Gi),li.subVectors(t.a,Gi),ci.subVectors(t.b,Gi),hi.subVectors(t.c,Gi),wn.subVectors(ci,li),Rn.subVectors(hi,ci),kn.subVectors(li,hi);let e=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-kn.z,kn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,kn.z,0,-kn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-kn.y,kn.x,0];return!mr(e,li,ci,hi,us)||(e=[1,0,0,0,1,0,0,0,1],!mr(e,li,ci,hi,us))?!1:(ds.crossVectors(wn,Rn),e=[ds.x,ds.y,ds.z],mr(e,li,ci,hi,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new V,new V,new V,new V,new V,new V,new V,new V],Ve=new V,hs=new ns,li=new V,ci=new V,hi=new V,wn=new V,Rn=new V,kn=new V,Gi=new V,us=new V,ds=new V,zn=new V;function mr(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zn.fromArray(n,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),h=i.dot(zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const cu=new ns,Wi=new V,gr=new V;class nr{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):cu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Wi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(gr)),this.expandByPoint(Wi.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new V,_r=new V,fs=new V,Cn=new V,xr=new V,ps=new V,vr=new V;class Ko{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_r.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(_r);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fs),a=Cn.dot(this.direction),l=-Cn.dot(fs),c=Cn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_r).addScaledVector(fs,f),m}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const i=cn.dot(this.direction),s=cn.dot(cn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,i,s,r){xr.subVectors(e,t),ps.subVectors(i,t),vr.crossVectors(xr,ps);let o=this.direction.dot(vr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);const l=a*this.direction.dot(ps.crossVectors(Cn,ps));if(l<0)return null;const c=a*this.direction.dot(xr.cross(Cn));if(c<0||l+c>o)return null;const h=-a*Cn.dot(vr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),o=1/ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hu,t,uu)}lookAt(t,e,i){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),Pn.crossVectors(i,De),Pn.lengthSq()===0&&(Math.abs(i.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Pn.crossVectors(i,De)),Pn.normalize(),ms.crossVectors(De,Pn),s[0]=Pn.x,s[4]=ms.x,s[8]=De.x,s[1]=Pn.y,s[5]=ms.y,s[9]=De.y,s[2]=Pn.z,s[6]=ms.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],M=i[3],T=i[7],x=i[11],D=i[15],A=s[0],w=s[4],L=s[8],E=s[12],S=s[1],R=s[5],X=s[9],G=s[13],Q=s[2],nt=s[6],K=s[10],it=s[14],C=s[3],tt=s[7],J=s[11],at=s[15];return r[0]=o*A+a*S+l*Q+c*C,r[4]=o*w+a*R+l*nt+c*tt,r[8]=o*L+a*X+l*K+c*J,r[12]=o*E+a*G+l*it+c*at,r[1]=h*A+d*S+f*Q+m*C,r[5]=h*w+d*R+f*nt+m*tt,r[9]=h*L+d*X+f*K+m*J,r[13]=h*E+d*G+f*it+m*at,r[2]=g*A+_*S+p*Q+u*C,r[6]=g*w+_*R+p*nt+u*tt,r[10]=g*L+_*X+p*K+u*J,r[14]=g*E+_*G+p*it+u*at,r[3]=M*A+T*S+x*Q+D*C,r[7]=M*w+T*R+x*nt+D*tt,r[11]=M*L+T*X+x*K+D*J,r[15]=M*E+T*G+x*it+D*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+_*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],M=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,T=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,x=h*_*c-g*d*c+g*a*m-o*_*m-h*a*u+o*d*u,D=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,A=e*M+i*T+s*x+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(_*f*r-d*p*r-_*s*m+i*p*m+d*s*u-i*f*u)*w,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*u+i*l*u)*w,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*w,t[4]=T*w,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*w,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*u-e*l*u)*w,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*w,t[8]=x*w,t[9]=(g*d*r-h*_*r-g*i*m+e*_*m+h*i*u-e*d*u)*w,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*u+e*a*u)*w,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*m-e*a*m)*w,t[12]=D*w,t[13]=(h*_*s-g*d*s+g*i*f-e*_*f-h*i*p+e*d*p)*w,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*w,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*f+e*a*f)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,M=l*c,T=l*h,x=l*d,D=i.x,A=i.y,w=i.z;return s[0]=(1-(_+u))*D,s[1]=(m+x)*D,s[2]=(g-T)*D,s[3]=0,s[4]=(m-x)*A,s[5]=(1-(f+u))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+T)*w,s[9]=(p-M)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ui.set(s[0],s[1],s[2]).length();const o=ui.set(s[4],s[5],s[6]).length(),a=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ge.copy(this);const c=1/r,h=1/o,d=1/a;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=d,Ge.elements[9]*=d,Ge.elements[10]*=d,e.setFromRotationMatrix(Ge),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=_n){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let m,g;if(a===_n)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ys)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=_n){const l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),f=(e+t)*c,m=(i+s)*h;let g,_;if(a===_n)g=(o+r)*d,_=-2*d;else if(a===Ys)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ui=new V,Ge=new ce,hu=new V(0,0,0),uu=new V(1,1,1),Pn=new V,ms=new V,De=new V,wa=new ce,Ra=new sn;class En{constructor(t=0,e=0,i=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wa,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let du=0;const Ca=new V,di=new sn,hn=new ce,gs=new V,Xi=new V,fu=new V,pu=new sn,Pa=new V(1,0,0),La=new V(0,1,0),Da=new V(0,0,1),Ia={type:"added"},mu={type:"removed"},fi={type:"childadded",child:null},Mr={type:"childremoved",child:null};class Pe extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new V,e=new En,i=new sn,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Bt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(Pa,t)}rotateY(t){return this.rotateOnAxis(La,t)}rotateZ(t){return this.rotateOnAxis(Da,t)}translateOnAxis(t,e){return Ca.copy(t).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pa,t)}translateY(t){return this.translateOnAxis(La,t)}translateZ(t){return this.translateOnAxis(Da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gs.copy(t):gs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Xi,gs,this.up):hn.lookAt(gs,Xi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(hn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ia),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mu),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ia),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new V(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new V,un=new V,Sr=new V,dn=new V,pi=new V,mi=new V,Ua=new V,yr=new V,Er=new V,Tr=new V,br=new le,Ar=new le,wr=new le;class Ye{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),We.subVectors(t,e),s.cross(We);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){We.subVectors(s,e),un.subVectors(i,e),Sr.subVectors(t,e);const o=We.dot(We),a=We.dot(un),l=We.dot(Sr),c=un.dot(un),h=un.dot(Sr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return br.setScalar(0),Ar.setScalar(0),wr.setScalar(0),br.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,i),wr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(br,r.x),o.addScaledVector(Ar,r.y),o.addScaledVector(wr,r.z),o}static isFrontFacing(t,e,i,s){return We.subVectors(i,e),un.subVectors(t,e),We.cross(un).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),un.subVectors(this.a,this.b),We.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;pi.subVectors(s,i),mi.subVectors(r,i),yr.subVectors(t,i);const l=pi.dot(yr),c=mi.dot(yr);if(l<=0&&c<=0)return e.copy(i);Er.subVectors(t,s);const h=pi.dot(Er),d=mi.dot(Er);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(pi,o);Tr.subVectors(t,r);const m=pi.dot(Tr),g=mi.dot(Tr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(mi,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Ua.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Ua,a);const u=1/(p+_+f);return o=_*u,a=f*u,e.copy(i).addScaledVector(pi,o).addScaledVector(mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Rr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Wt.workingColorSpace){if(t=Jh(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Rr(o,r,t+1/3),this.g=Rr(o,r,t),this.b=Rr(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const i=gc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Wt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Te(Se.r*255,0,255))*65536+Math.round(Te(Se.g*255,0,255))*256+Math.round(Te(Se.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Se.copy(this),e);const i=Se.r,s=Se.g,r=Se.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=ke){Wt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,i=Se.g,s=Se.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(_s);const i=ur(Ln.h,_s.h,e),s=ur(Ln.s,_s.s,e),r=ur(Ln.l,_s.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new $t;$t.NAMES=gc;let gu=0;class is extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=es(),this.name="",this.blending=Zn,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Kr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jr&&(i.blendSrc=this.blendSrc),this.blendDst!==Kr&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_a&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zo extends is{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new V,xs=new It;class _e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xa,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class _c extends _e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xc extends _e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Sn extends _e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let _u=0;const Fe=new ce,Cr=new Pe,gi=new V,Ie=new ns,$i=new ns,ge=new V;class rn extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dc(t)?xc:_c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,i){return Fe.makeTranslation(t,e,i),this.applyMatrix4(Fe),this}scale(t,e,i){return Fe.makeScale(t,e,i),this.applyMatrix4(Fe),this}lookAt(t){return Cr.lookAt(t),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Ie.min,$i.min),Ie.expandByPoint(ge),ge.addVectors(Ie.max,$i.max),Ie.expandByPoint(ge)):(Ie.expandByPoint($i.min),Ie.expandByPoint($i.max))}Ie.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ge.fromBufferAttribute(a,c),l&&(gi.fromBufferAttribute(t,c),ge.add(gi)),s=Math.max(s,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new V,l[L]=new V;const c=new V,h=new V,d=new V,f=new It,m=new It,g=new It,_=new V,p=new V;function u(L,E,S){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),a[L].add(_),a[E].add(_),a[S].add(_),l[L].add(p),l[E].add(p),l[S].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,E=M.length;L<E;++L){const S=M[L],R=S.start,X=S.count;for(let G=R,Q=R+X;G<Q;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const T=new V,x=new V,D=new V,A=new V;function w(L){D.fromBufferAttribute(s,L),A.copy(D);const E=a[L];T.copy(E),T.sub(D.multiplyScalar(D.dot(E))).normalize(),x.crossVectors(A,E);const R=x.dot(l[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,R)}for(let L=0,E=M.length;L<E;++L){const S=M[L],R=S.start,X=S.count;for(let G=R,Q=R+X;G<Q;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new _e(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new ce,Hn=new Ko,vs=new nr,Fa=new V,Ms=new V,Ss=new V,ys=new V,Pr=new V,Es=new V,Oa=new V,Ts=new V;class nn extends Pe{constructor(t=new rn,e=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Pr.fromBufferAttribute(d,t),o?Es.addScaledVector(Pr,h):Es.addScaledVector(Pr.sub(e),h))}e.add(Es)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(vs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(vs,Fa)===null||Hn.origin.distanceToSquared(Fa)>(t.far-t.near)**2))&&(Na.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(Na),!(i.boundingBox!==null&&Hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],M=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=M,D=T;x<D;x+=3){const A=a.getX(x),w=a.getX(x+1),L=a.getX(x+2);s=bs(this,u,t,i,c,h,d,A,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const M=a.getX(p),T=a.getX(p+1),x=a.getX(p+2);s=bs(this,o,t,i,c,h,d,M,T,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],M=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=M,D=T;x<D;x+=3){const A=x,w=x+1,L=x+2;s=bs(this,u,t,i,c,h,d,A,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const M=p,T=p+1,x=p+2;s=bs(this,o,t,i,c,h,d,M,T,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function xu(n,t,e,i,s,r,o,a){let l;if(t.side===Re?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===On,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ts);return c<e.near||c>e.far?null:{distance:c,point:Ts.clone(),object:n}}function bs(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ms),n.getVertexPosition(l,Ss),n.getVertexPosition(c,ys);const h=xu(n,t,e,i,Ms,Ss,ys,Oa);if(h){const d=new V;Ye.getBarycoord(Oa,Ms,Ss,ys,d),s&&(h.uv=Ye.getInterpolatedAttribute(s,a,l,c,d,new It)),r&&(h.uv1=Ye.getInterpolatedAttribute(r,a,l,c,d,new It)),o&&(h.normal=Ye.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};Ye.getNormal(Ms,Ss,ys,f.normal),h.face=f,h.barycoord=d}return h}class ss extends rn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(d,2));function g(_,p,u,M,T,x,D,A,w,L,E){const S=x/w,R=D/L,X=x/2,G=D/2,Q=A/2,nt=w+1,K=L+1;let it=0,C=0;const tt=new V;for(let J=0;J<K;J++){const at=J*R-G;for(let Mt=0;Mt<nt;Mt++){const bt=Mt*S-X;tt[_]=bt*M,tt[p]=at*T,tt[u]=Q,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[p]=0,tt[u]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Mt/w),d.push(1-J/L),it+=1}}for(let J=0;J<L;J++)for(let at=0;at<w;at++){const Mt=f+at+nt*J,bt=f+at+nt*(J+1),I=f+(at+1)+nt*(J+1),O=f+(at+1)+nt*J;l.push(Mt,bt,O),l.push(bt,I,O),C+=6}a.addGroup(m,C,E),m+=C,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ee(n){const t={};for(let e=0;e<n.length;e++){const i=Ui(n[e]);for(const s in i)t[s]=i[s]}return t}function vu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Qi={clone:Ui,merge:Ee};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ye extends is{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Mc extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new V,Ba=new It,ka=new It;class $e extends Mc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=No*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Ba,ka),e.subVectors(ka,Ba)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,xi=1;class yu extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(_i,xi,t,e);s.layers=this.layers,this.add(s);const r=new $e(_i,xi,t,e);r.layers=this.layers,this.add(r);const o=new $e(_i,xi,t,e);o.layers=this.layers,this.add(o);const a=new $e(_i,xi,t,e);a.layers=this.layers,this.add(a);const l=new $e(_i,xi,t,e);l.layers=this.layers,this.add(l);const c=new $e(_i,xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sc extends Ce{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eu extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ss(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:Ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:xn});r.uniforms.tEquirect.value=e;const o=new nn(s,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=en),new yu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Lr=new V,Tu=new V,bu=new Bt;class In{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Lr.subVectors(i,e).cross(Tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Lr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||bu.getNormalMatrix(t),s=this.coplanarPoint(Lr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new nr,As=new V;class yc{constructor(t=new In,e=new In,i=new In,s=new In,r=new In,o=new In){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_n){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],M=s[13],T=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,p-m,x-u).normalize(),i[1].setComponents(l+r,f+c,p+m,x+u).normalize(),i[2].setComponents(l+o,f+h,p+g,x+M).normalize(),i[3].setComponents(l-o,f-h,p-g,x-M).normalize(),i[4].setComponents(l-a,f-d,p-_,x-T).normalize(),e===_n)i[5].setComponents(l+a,f+d,p+_,x+T).normalize();else if(e===Ys)i[5].setComponents(a,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(As.x=s.normal.x>0?t.max.x:t.min.x,As.y=s.normal.y>0?t.max.y:t.min.y,As.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Au(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ir extends rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const M=u*f-o;for(let T=0;T<c;T++){const x=T*d-r;g.push(x,-M,0),_.push(0,0,1),p.push(T/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){const T=M+c*u,x=M+c*(u+1),D=M+1+c*(u+1),A=M+1+c*u;m.push(T,x,A),m.push(x,D,A)}this.setIndex(m),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.widthSegments,t.heightSegments)}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ad=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$f=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:wu,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Iu,aomap_pars_fragment:Uu,batching_pars_vertex:Nu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:Bu,bsdfs:ku,iridescence_fragment:zu,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:$u,color_pars_fragment:Yu,color_pars_vertex:qu,color_vertex:ju,common:Ku,cube_uv_reflection_fragment:Zu,defaultnormal_vertex:Ju,displacementmap_pars_vertex:Qu,displacementmap_vertex:td,emissivemap_fragment:ed,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:od,envmap_pars_fragment:ad,envmap_pars_vertex:ld,envmap_physical_pars_fragment:vd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:dd,fog_pars_fragment:fd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:xd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:yd,lights_phong_pars_fragment:Ed,lights_physical_fragment:Td,lights_physical_pars_fragment:bd,lights_fragment_begin:Ad,lights_fragment_maps:wd,lights_fragment_end:Rd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Dd,map_fragment:Id,map_pars_fragment:Ud,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Bd,morphinstance_vertex:kd,morphcolor_vertex:zd,morphnormal_vertex:Hd,morphtarget_pars_vertex:Vd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:$d,normal_pars_vertex:Yd,normal_vertex:qd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:Zd,clearcoat_pars_fragment:Jd,iridescence_pars_fragment:Qd,opaque_fragment:tf,packing:ef,premultiplied_alpha_fragment:nf,project_vertex:sf,dithering_fragment:rf,dithering_pars_fragment:of,roughnessmap_fragment:af,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:df,skinbase_vertex:ff,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:xf,tonemapping_fragment:vf,tonemapping_pars_fragment:Mf,transmission_fragment:Sf,transmission_pars_fragment:yf,uv_pars_fragment:Ef,uv_pars_vertex:Tf,uv_vertex:bf,worldpos_vertex:Af,background_vert:wf,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:Lf,cube_frag:Df,depth_vert:If,depth_frag:Uf,distanceRGBA_vert:Nf,distanceRGBA_frag:Ff,equirect_vert:Of,equirect_frag:Bf,linedashed_vert:kf,linedashed_frag:zf,meshbasic_vert:Hf,meshbasic_frag:Vf,meshlambert_vert:Gf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:$f,meshnormal_vert:Yf,meshnormal_frag:qf,meshphong_vert:jf,meshphong_frag:Kf,meshphysical_vert:Zf,meshphysical_frag:Jf,meshtoon_vert:Qf,meshtoon_frag:tp,points_vert:ep,points_frag:np,shadow_vert:ip,shadow_frag:sp,sprite_vert:rp,sprite_frag:op},_t={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},tn={basic:{uniforms:Ee([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ee([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ee([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ee([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ee([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ee([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ee([_t.points,_t.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ee([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ee([_t.common,_t.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ee([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ee([_t.sprite,_t.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ee([_t.common,_t.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ee([_t.lights,_t.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};tn.physical={uniforms:Ee([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const ws={r:0,b:0,g:0},Gn=new En,ap=new ce;function lp(n,t,e,i,s,r,o){const a=new $t(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?e:t).get(T)),T}function _(M){let T=!1;const x=g(M);x===null?u(a,l):x&&x.isColor&&(u(x,1),T=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,T){const x=g(T);x&&(x.isCubeTexture||x.mapping===tr)?(h===void 0&&(h=new nn(new ss(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:Ui(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(T.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(Gn)),h.material.toneMapped=Wt.getTransfer(x.colorSpace)!==ee,(d!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new nn(new ir(2,2),new ye({name:"BackgroundMaterial",uniforms:Ui(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,T){M.getRGB(ws,vc(n)),i.buffers.color.setClear(ws.r,ws.g,ws.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),l=T,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(a,l)},render:_,addToRenderList:p}}function cp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,R,X,G,Q){let nt=!1;const K=d(G,X,R);r!==K&&(r=K,c(r.object)),nt=m(S,G,X,Q),nt&&g(S,G,X,Q),Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,x(S,R,X,G),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function d(S,R,X){const G=X.wireframe===!0;let Q=i[S.id];Q===void 0&&(Q={},i[S.id]=Q);let nt=Q[R.id];nt===void 0&&(nt={},Q[R.id]=nt);let K=nt[G];return K===void 0&&(K=f(l()),nt[G]=K),K}function f(S){const R=[],X=[],G=[];for(let Q=0;Q<e;Q++)R[Q]=0,X[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,R,X,G){const Q=r.attributes,nt=R.attributes;let K=0;const it=X.getAttributes();for(const C in it)if(it[C].location>=0){const J=Q[C];let at=nt[C];if(at===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;K++}return r.attributesNum!==K||r.index!==G}function g(S,R,X,G){const Q={},nt=R.attributes;let K=0;const it=X.getAttributes();for(const C in it)if(it[C].location>=0){let J=nt[C];J===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const at={};at.attribute=J,J&&J.data&&(at.data=J.data),Q[C]=at,K++}r.attributes=Q,r.attributesNum=K,r.index=G}function _(){const S=r.newAttributes;for(let R=0,X=S.length;R<X;R++)S[R]=0}function p(S){u(S,0)}function u(S,R){const X=r.newAttributes,G=r.enabledAttributes,Q=r.attributeDivisors;X[S]=1,G[S]===0&&(n.enableVertexAttribArray(S),G[S]=1),Q[S]!==R&&(n.vertexAttribDivisor(S,R),Q[S]=R)}function M(){const S=r.newAttributes,R=r.enabledAttributes;for(let X=0,G=R.length;X<G;X++)R[X]!==S[X]&&(n.disableVertexAttribArray(X),R[X]=0)}function T(S,R,X,G,Q,nt,K){K===!0?n.vertexAttribIPointer(S,R,X,Q,nt):n.vertexAttribPointer(S,R,X,G,Q,nt)}function x(S,R,X,G){_();const Q=G.attributes,nt=X.getAttributes(),K=R.defaultAttributeValues;for(const it in nt){const C=nt[it];if(C.location>=0){let tt=Q[it];if(tt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const J=tt.normalized,at=tt.itemSize,Mt=t.get(tt);if(Mt===void 0)continue;const bt=Mt.buffer,I=Mt.type,O=Mt.bytesPerElement,j=I===n.INT||I===n.UNSIGNED_INT||tt.gpuType===Wo;if(tt.isInterleavedBufferAttribute){const Z=tt.data,st=Z.stride,ht=tt.offset;if(Z.isInstancedInterleavedBuffer){for(let ut=0;ut<C.locationSize;ut++)u(C.location+ut,Z.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ut=0;ut<C.locationSize;ut++)p(C.location+ut);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let ut=0;ut<C.locationSize;ut++)T(C.location+ut,at/C.locationSize,I,J,st*O,(ht+at/C.locationSize*ut)*O,j)}else{if(tt.isInstancedBufferAttribute){for(let Z=0;Z<C.locationSize;Z++)u(C.location+Z,tt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Z=0;Z<C.locationSize;Z++)p(C.location+Z);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Z=0;Z<C.locationSize;Z++)T(C.location+Z,at/C.locationSize,I,J,at*O,at/C.locationSize*Z*O,j)}}else if(K!==void 0){const J=K[it];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(C.location,J);break;case 3:n.vertexAttrib3fv(C.location,J);break;case 4:n.vertexAttrib4fv(C.location,J);break;default:n.vertexAttrib1fv(C.location,J)}}}}M()}function D(){L();for(const S in i){const R=i[S];for(const X in R){const G=R[X];for(const Q in G)h(G[Q].object),delete G[Q];delete R[X]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const X in R){const G=R[X];for(const Q in G)h(G[Q].object),delete G[Q];delete R[X]}delete i[S.id]}function w(S){for(const R in i){const X=i[R];if(X[S.id]===void 0)continue;const G=X[S.id];for(const Q in G)h(G[Q].object),delete G[Q];delete X[S.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function hp(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,i,1)}function l(c,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function up(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==je&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==yn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==gn&&!L)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function dp(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new In,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:i,T=M*4;let x=u.clippingState||null;l.value=x,x=h(g,f,T,m);for(let D=0;D!==T;++D)x[D]=e[D];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,x=m;T!==_;++T,x+=4)o.copy(d[T]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function fp(n){let t=new WeakMap;function e(o,a){return a===so?o.mapping=Pi:a===ro&&(o.mapping=Li),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===so||a===ro)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Eu(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class rs extends Mc{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,za=[.125,.215,.35,.446,.526,.582],qn=20,Dr=new rs,Ha=new $t;let Ir=null,Ur=0,Nr=0,Fr=!1;const $n=(1+Math.sqrt(5))/2,vi=1/$n,Va=[new V(-$n,vi,0),new V($n,vi,0),new V(-vi,0,$n),new V(vi,0,$n),new V(0,$n,-vi),new V(0,$n,vi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Ur,Nr),this._renderer.xr.enabled=Fr,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:vn,format:je,colorSpace:Ni,depthBuffer:!1},s=Wa(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wa(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,t,e)}return s}_compileMaterial(t){const e=new nn(this._lodPlanes[0],t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,i,s){const a=new $e(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ha),h.toneMapping=Fn,h.autoClear=!1;const m=new Zo({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new nn(new ss,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Ha),_=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const T=this._cubeSize;Rs(s,M*T,u>2?T:0,T,T),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Pi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Rs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Dr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Va[(s-r-1)%Va.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new nn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):qn;p>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qn}`);const u=[];let M=0;for(let w=0;w<qn;++w){const L=w/_,E=Math.exp(-L*L/2);u.push(E),w===0?M+=E:w<p&&(M+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const x=this._sizeLods[s],D=3*x*(s>T-Ei?s-T+Ei:0),A=4*(this._cubeSize-x);Rs(e,D,A,3*x,2*x),l.setRenderTarget(e),l.render(d,Dr)}}function pp(n){const t=[],e=[],i=[];let s=n;const r=n-Ei+1+za.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ei?l=za[o-n+Ei-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,M=new Float32Array(_*g*m),T=new Float32Array(p*g*m),x=new Float32Array(u*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,L=A>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];M.set(E,_*g*A),T.set(f,p*g*A);const S=[A,A,A,A,A,A];x.set(S,u*g*A)}const D=new rn;D.setAttribute("position",new _e(M,_)),D.setAttribute("uv",new _e(T,p)),D.setAttribute("faceIndex",new _e(x,u)),t.push(D),s>Ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wa(n,t,e){const i=new Je(n,t,e);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function mp(n,t,e){const i=new Float32Array(qn),s=new V(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Xa(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function $a(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===ro,h=l===Pi||l===Li;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ga(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Ga(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function _p(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Yi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function xp(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let T=0,x=M.length;T<x;T+=3){const D=M[T+0],A=M[T+1],w=M[T+2];f.push(D,A,A,w,w,D)}}else if(g!==void 0){const M=g.array;_=g.version;for(let T=0,x=M.length/3-1;T<x;T+=3){const D=T+0,A=T+1,w=T+2;f.push(D,A,A,w,w,D)}}else return;const p=new(dc(f)?xc:_c)(f,1);p.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function vp(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*o,g),e.update(m,i,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,i,1)}function d(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let u=0;for(let M=0;M<g;M++)u+=m[M]*_[M];e.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Mp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Sp(n,t,e){const i=new WeakMap,s=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let D=a.attributes.position.count*x,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*A*4*d),L=new pc(w,D,A,d);L.type=gn,L.needsUpdate=!0;const E=x*4;for(let R=0;R<d;R++){const X=u[R],G=M[R],Q=T[R],nt=D*A*4*R;for(let K=0;K<X.count;K++){const it=K*E;g===!0&&(s.fromBufferAttribute(X,K),w[nt+it+0]=s.x,w[nt+it+1]=s.y,w[nt+it+2]=s.z,w[nt+it+3]=0),_===!0&&(s.fromBufferAttribute(G,K),w[nt+it+4]=s.x,w[nt+it+5]=s.y,w[nt+it+6]=s.z,w[nt+it+7]=0),p===!0&&(s.fromBufferAttribute(Q,K),w[nt+it+8]=s.x,w[nt+it+9]=s.y,w[nt+it+10]=s.z,w[nt+it+11]=Q.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new It(D,A)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function yp(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Tc extends Ce{constructor(t,e,i,s,r,o,a,l,c,h=bi){if(h!==bi&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bi&&(i=ti),i===void 0&&h===Ii&&(i=Di),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bc=new Ce,Ya=new Tc(1,1),Ac=new pc,wc=new lu,Rc=new Sc,qa=[],ja=[],Ka=new Float32Array(16),Za=new Float32Array(9),Ja=new Float32Array(4);function Fi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=qa[s];if(r===void 0&&(r=new Float32Array(s),qa[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function sr(n,t){let e=ja[t];e===void 0&&(e=new Int32Array(t),ja[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ep(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2fv(this.addr,t),pe(e,t)}}function bp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;n.uniform3fv(this.addr,t),pe(e,t)}}function Ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4fv(this.addr,t),pe(e,t)}}function wp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;Ja.set(i),n.uniformMatrix2fv(this.addr,!1,Ja),pe(e,i)}}function Rp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;Za.set(i),n.uniformMatrix3fv(this.addr,!1,Za),pe(e,i)}}function Cp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;Ka.set(i),n.uniformMatrix4fv(this.addr,!1,Ka),pe(e,i)}}function Pp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Lp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2iv(this.addr,t),pe(e,t)}}function Dp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3iv(this.addr,t),pe(e,t)}}function Ip(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4iv(this.addr,t),pe(e,t)}}function Up(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Np(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2uiv(this.addr,t),pe(e,t)}}function Fp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3uiv(this.addr,t),pe(e,t)}}function Op(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4uiv(this.addr,t),pe(e,t)}}function Bp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ya.compareFunction=uc,r=Ya):r=bc,e.setTexture2D(t||r,s)}function kp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||wc,s)}function zp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rc,s)}function Hp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ac,s)}function Vp(n){switch(n){case 5126:return Ep;case 35664:return Tp;case 35665:return bp;case 35666:return Ap;case 35674:return wp;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Ip;case 5125:return Up;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Gp(n,t){n.uniform1fv(this.addr,t)}function Wp(n,t){const e=Fi(t,this.size,2);n.uniform2fv(this.addr,e)}function Xp(n,t){const e=Fi(t,this.size,3);n.uniform3fv(this.addr,e)}function $p(n,t){const e=Fi(t,this.size,4);n.uniform4fv(this.addr,e)}function Yp(n,t){const e=Fi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qp(n,t){const e=Fi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function jp(n,t){const e=Fi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Kp(n,t){n.uniform1iv(this.addr,t)}function Zp(n,t){n.uniform2iv(this.addr,t)}function Jp(n,t){n.uniform3iv(this.addr,t)}function Qp(n,t){n.uniform4iv(this.addr,t)}function tm(n,t){n.uniform1uiv(this.addr,t)}function em(n,t){n.uniform2uiv(this.addr,t)}function nm(n,t){n.uniform3uiv(this.addr,t)}function im(n,t){n.uniform4uiv(this.addr,t)}function sm(n,t,e){const i=this.cache,s=t.length,r=sr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bc,r[o])}function rm(n,t,e){const i=this.cache,s=t.length,r=sr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wc,r[o])}function om(n,t,e){const i=this.cache,s=t.length,r=sr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rc,r[o])}function am(n,t,e){const i=this.cache,s=t.length,r=sr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ac,r[o])}function lm(n){switch(n){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return $p;case 35674:return Yp;case 35675:return qp;case 35676:return jp;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return Qp;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return am}}class cm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}}class hm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}}class um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function Qa(n,t){n.seq.push(t),n.map[t.id]=t}function dm(n,t,e){const i=n.name,s=i.length;for(Or.lastIndex=0;;){const r=Or.exec(i),o=Or.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qa(e,c===void 0?new cm(a,n,t):new hm(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new um(a),Qa(e,d)),e=d}}}class Vs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dm(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function tl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const fm=37297;let pm=0;function mm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const el=new Bt;function gm(n){Wt._getMatrix(el,Wt.workingColorSpace,n);const t=`mat3( ${el.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case er:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mm(n.getShaderSource(t),o)}else return s}function _m(n,t){const e=gm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xm(n,t){let e;switch(t){case ql:e="Linear";break;case jl:e="Reinhard";break;case Kl:e="Cineon";break;case Zl:e="ACESFilmic";break;case Jl:e="AgX";break;case Ql:e="Neutral";break;case kh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cs=new V;function vm(){Wt.getLuminanceCoefficients(Cs);const n=Cs.x.toFixed(4),t=Cs.y.toFixed(4),e=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function Sm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ym(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qi(n){return n!==""}function il(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(n){return n.replace(Em,bm)}const Tm=new Map;function bm(n,t){let e=Ht[t];if(e===void 0){const i=Tm.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fo(e)}const Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(n){return n.replace(Am,wm)}function wm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ol(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function Lm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yl:t="ENVMAP_BLENDING_MULTIPLY";break;case Oh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function Dm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Im(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rm(e),c=Cm(e),h=Pm(e),d=Lm(e),f=Dm(e),m=Mm(e),g=Sm(r),_=s.createProgram();let p,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),u.length>0&&(u+=`
`)):(p=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),u=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Fn?xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),vm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),o=Fo(o),o=il(o,e),o=sl(o,e),a=Fo(a),a=il(a,e),a=sl(a,e),o=rl(o),a=rl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===va?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=M+p+o,x=M+u+a,D=tl(s,s.VERTEX_SHADER,T),A=tl(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(D).trim(),Q=s.getShaderInfoLog(A).trim();let nt=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,A);else{const it=nl(s,D,"vertex"),C=nl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+it+`
`+C)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||Q==="")&&(K=!1);K&&(R.diagnostics={runnable:nt,programLog:X,vertexShader:{log:G,prefix:p},fragmentShader:{log:Q,prefix:u}})}s.deleteShader(D),s.deleteShader(A),L=new Vs(s,_),E=ym(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,fm)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let Um=0;class Nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Fm(t),e.set(t,i)),i}}class Fm{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}}function Om(n,t,e,i,s,r,o){const a=new mc,l=new Nm,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,R,X,G){const Q=X.fog,nt=G.geometry,K=E.isMeshStandardMaterial?X.environment:null,it=(E.isMeshStandardMaterial?e:t).get(E.envMap||K),C=it&&it.mapping===tr?it.image.height:null,tt=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const J=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,at=J!==void 0?J.length:0;let Mt=0;nt.morphAttributes.position!==void 0&&(Mt=1),nt.morphAttributes.normal!==void 0&&(Mt=2),nt.morphAttributes.color!==void 0&&(Mt=3);let bt,I,O,j;if(tt){const Xt=tn[tt];bt=Xt.vertexShader,I=Xt.fragmentShader}else bt=E.vertexShader,I=E.fragmentShader,l.update(E),O=l.getVertexShaderID(E),j=l.getFragmentShaderID(E);const Z=n.getRenderTarget(),st=n.state.buffers.depth.getReversed(),ht=G.isInstancedMesh===!0,ut=G.isBatchedMesh===!0,yt=!!E.map,Et=!!E.matcap,Gt=!!it,N=!!E.aoMap,me=!!E.lightMap,kt=!!E.bumpMap,Vt=!!E.normalMap,Ct=!!E.displacementMap,Zt=!!E.emissiveMap,et=!!E.metalnessMap,b=!!E.roughnessMap,v=E.anisotropy>0,P=E.clearcoat>0,z=E.dispersion>0,H=E.iridescence>0,W=E.sheen>0,lt=E.transmission>0,ot=v&&!!E.anisotropyMap,dt=P&&!!E.clearcoatMap,Tt=P&&!!E.clearcoatNormalMap,rt=P&&!!E.clearcoatRoughnessMap,pt=H&&!!E.iridescenceMap,St=H&&!!E.iridescenceThicknessMap,Pt=W&&!!E.sheenColorMap,xt=W&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Nt=!!E.specularColorMap,qt=!!E.specularIntensityMap,U=lt&&!!E.transmissionMap,gt=lt&&!!E.thicknessMap,F=!!E.gradientMap,q=!!E.alphaMap,ct=E.alphaTest>0,mt=!!E.alphaHash,Ut=!!E.extensions;let Jt=Fn;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Jt=n.toneMapping);const Qt={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:bt,fragmentShader:I,defines:E.defines,customVertexShaderID:O,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ut,batchingColor:ut&&G._colorsTexture!==null,instancing:ht,instancingColor:ht&&G.instanceColor!==null,instancingMorph:ht&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ni,alphaToCoverage:!!E.alphaToCoverage,map:yt,matcap:Et,envMap:Gt,envMapMode:Gt&&it.mapping,envMapCubeUVHeight:C,aoMap:N,lightMap:me,bumpMap:kt,normalMap:Vt,displacementMap:f&&Ct,emissiveMap:Zt,normalMapObjectSpace:Vt&&E.normalMapType===Wh,normalMapTangentSpace:Vt&&E.normalMapType===Gh,metalnessMap:et,roughnessMap:b,anisotropy:v,anisotropyMap:ot,clearcoat:P,clearcoatMap:dt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:rt,dispersion:z,iridescence:H,iridescenceMap:pt,iridescenceThicknessMap:St,sheen:W,sheenColorMap:Pt,sheenRoughnessMap:xt,specularMap:zt,specularColorMap:Nt,specularIntensityMap:qt,transmission:lt,transmissionMap:U,thicknessMap:gt,gradientMap:F,opaque:E.transparent===!1&&E.blending===Zn&&E.alphaToCoverage===!1,alphaMap:q,alphaTest:ct,alphaHash:mt,combine:E.combine,mapUv:yt&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:me&&_(E.lightMap.channel),bumpMapUv:kt&&_(E.bumpMap.channel),normalMapUv:Vt&&_(E.normalMap.channel),displacementMapUv:Ct&&_(E.displacementMap.channel),emissiveMapUv:Zt&&_(E.emissiveMap.channel),metalnessMapUv:et&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:ot&&_(E.anisotropyMap.channel),clearcoatMapUv:dt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:St&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(E.sheenRoughnessMap.channel),specularMapUv:zt&&_(E.specularMap.channel),specularColorMapUv:Nt&&_(E.specularColorMap.channel),specularIntensityMapUv:qt&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:gt&&_(E.thicknessMap.channel),alphaMapUv:q&&_(E.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Vt||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!nt.attributes.uv&&(yt||q),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:st,skinning:G.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:yt&&E.map.isVideoTexture===!0&&Wt.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:Zt&&E.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mn,flipSided:E.side===Re,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)S.push(R),S.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(M(S,E),T(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function M(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let R;if(S){const X=tn[S];R=Qi.clone(X.uniforms)}else R=E.uniforms;return R}function D(E,S){let R;for(let X=0,G=h.length;X<G;X++){const Q=h[X];if(Q.cacheKey===S){R=Q,++R.usedTimes;break}}return R===void 0&&(R=new Im(n,S,E,r),h.push(R)),R}function A(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:L}}function Bm(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function km(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function al(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ll(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,m,g,_,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function a(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||km),i.length>1&&i.sort(f||al),s.length>1&&s.sort(f||al)}function h(){for(let d=t,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function zm(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new ll,n.set(i,[o])):s>=r.length?(o=new ll,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Hm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new $t};break;case"SpotLight":e={position:new V,direction:new V,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function Vm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Gm=0;function Wm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xm(n){const t=new Hm,e=Vm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new ce,o=new ce;function a(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,M=0,T=0,x=0,D=0,A=0,w=0;c.sort(Wm);for(let E=0,S=c.length;E<S;E++){const R=c[E],X=R.color,G=R.intensity,Q=R.distance,nt=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=X.r*G,d+=X.g*G,f+=X.b*G;else if(R.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(R.sh.coefficients[K],G);w++}else if(R.isDirectionalLight){const K=t.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const it=R.shadow,C=e.get(R);C.shadowIntensity=it.intensity,C.shadowBias=it.bias,C.shadowNormalBias=it.normalBias,C.shadowRadius=it.radius,C.shadowMapSize=it.mapSize,i.directionalShadow[m]=C,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=R.shadow.matrix,M++}i.directional[m]=K,m++}else if(R.isSpotLight){const K=t.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(X).multiplyScalar(G),K.distance=Q,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,i.spot[_]=K;const it=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,it.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=it.matrix,R.castShadow){const C=e.get(R);C.shadowIntensity=it.intensity,C.shadowBias=it.bias,C.shadowNormalBias=it.normalBias,C.shadowRadius=it.radius,C.shadowMapSize=it.mapSize,i.spotShadow[_]=C,i.spotShadowMap[_]=nt,x++}_++}else if(R.isRectAreaLight){const K=t.get(R);K.color.copy(X).multiplyScalar(G),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=K,p++}else if(R.isPointLight){const K=t.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),K.distance=R.distance,K.decay=R.decay,R.castShadow){const it=R.shadow,C=e.get(R);C.shadowIntensity=it.intensity,C.shadowBias=it.bias,C.shadowNormalBias=it.normalBias,C.shadowRadius=it.radius,C.shadowMapSize=it.mapSize,C.shadowCameraNear=it.camera.near,C.shadowCameraFar=it.camera.far,i.pointShadow[g]=C,i.pointShadowMap[g]=nt,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=K,g++}else if(R.isHemisphereLight){const K=t.get(R);K.skyColor.copy(R.color).multiplyScalar(G),K.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[u]=K,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==u||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=x+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=u,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=w,i.version=Gm++)}function l(c,h){let d=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let u=0,M=c.length;u<M;u++){const T=c[u];if(T.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(T.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(T.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function cl(n){const t=new Xm(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $m(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cl(n),t.set(s,[a])):r>=o.length?(a=new cl(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Ym extends is{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qm extends is{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zm(n,t,e){let i=new yc;const s=new It,r=new It,o=new le,a=new Ym({depthPacking:Vh}),l=new qm,c={},h=e.maxTextureSize,d={[On]:Re,[Re]:On,[mn]:mn},f=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:jm,fragmentShader:Km}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let u=this.type;this.render=function(A,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),X=n.state;X.setBlending(xn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const G=u!==fn&&this.type===fn,Q=u===fn&&this.type!==fn;for(let nt=0,K=A.length;nt<K;nt++){const it=A[nt],C=it.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);const tt=C.getFrameExtents();if(s.multiply(tt),r.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,C.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,C.mapSize.y=r.y)),C.map===null||G===!0||Q===!0){const at=this.type!==fn?{minFilter:Ze,magFilter:Ze}:{};C.map!==null&&C.map.dispose(),C.map=new Je(s.x,s.y,at),C.map.texture.name=it.name+".shadowMap",C.camera.updateProjectionMatrix()}n.setRenderTarget(C.map),n.clear();const J=C.getViewportCount();for(let at=0;at<J;at++){const Mt=C.getViewport(at);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),X.viewport(o),C.updateMatrices(it,at),i=C.getFrustum(),x(w,L,C.camera,it,this.type)}C.isPointLightShadow!==!0&&this.type===fn&&M(C,L),C.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(E,S,R)};function M(A,w){const L=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Je(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,L,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,L,m,_,null)}function T(A,w,L,E){let S=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=S.uuid,G=w.uuid;let Q=c[X];Q===void 0&&(Q={},c[X]=Q);let nt=Q[G];nt===void 0&&(nt=S.clone(),Q[G]=nt,w.addEventListener("dispose",D)),S=nt}if(S.visible=w.visible,S.wireframe=w.wireframe,E===fn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=n.properties.get(S);X.light=L}return S}function x(A,w,L,E,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===fn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const G=t.update(A),Q=A.material;if(Array.isArray(Q)){const nt=G.groups;for(let K=0,it=nt.length;K<it;K++){const C=nt[K],tt=Q[C.materialIndex];if(tt&&tt.visible){const J=T(A,tt,E,S);A.onBeforeShadow(n,A,w,L,G,J,C),n.renderBufferDirect(L,null,G,J,A,C),A.onAfterShadow(n,A,w,L,G,J,C)}}}else if(Q.visible){const nt=T(A,Q,E,S);A.onBeforeShadow(n,A,w,L,G,nt,null),n.renderBufferDirect(L,null,G,nt,A,null),A.onAfterShadow(n,A,w,L,G,nt,null)}}const X=A.children;for(let G=0,Q=X.length;G<Q;G++)x(X[G],w,L,E,S)}function D(A){A.target.removeEventListener("dispose",D);for(const L in c){const E=c[L],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Jm={[Zr]:Jr,[Qr]:no,[to]:io,[Ci]:eo,[Jr]:Zr,[no]:Qr,[io]:to,[eo]:Ci};function Qm(n,t){function e(){let U=!1;const gt=new le;let F=null;const q=new le(0,0,0,0);return{setMask:function(ct){F!==ct&&!U&&(n.colorMask(ct,ct,ct,ct),F=ct)},setLocked:function(ct){U=ct},setClear:function(ct,mt,Ut,Jt,Qt){Qt===!0&&(ct*=Jt,mt*=Jt,Ut*=Jt),gt.set(ct,mt,Ut,Jt),q.equals(gt)===!1&&(n.clearColor(ct,mt,Ut,Jt),q.copy(gt))},reset:function(){U=!1,F=null,q.set(-1,0,0,0)}}}function i(){let U=!1,gt=!1,F=null,q=null,ct=null;return{setReversed:function(mt){if(gt!==mt){const Ut=t.get("EXT_clip_control");gt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const Jt=ct;ct=null,this.setClear(Jt)}gt=mt},getReversed:function(){return gt},setTest:function(mt){mt?Z(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(mt){F!==mt&&!U&&(n.depthMask(mt),F=mt)},setFunc:function(mt){if(gt&&(mt=Jm[mt]),q!==mt){switch(mt){case Zr:n.depthFunc(n.NEVER);break;case Jr:n.depthFunc(n.ALWAYS);break;case Qr:n.depthFunc(n.LESS);break;case Ci:n.depthFunc(n.LEQUAL);break;case to:n.depthFunc(n.EQUAL);break;case eo:n.depthFunc(n.GEQUAL);break;case no:n.depthFunc(n.GREATER);break;case io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=mt}},setLocked:function(mt){U=mt},setClear:function(mt){ct!==mt&&(gt&&(mt=1-mt),n.clearDepth(mt),ct=mt)},reset:function(){U=!1,F=null,q=null,ct=null,gt=!1}}}function s(){let U=!1,gt=null,F=null,q=null,ct=null,mt=null,Ut=null,Jt=null,Qt=null;return{setTest:function(Xt){U||(Xt?Z(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(Xt){gt!==Xt&&!U&&(n.stencilMask(Xt),gt=Xt)},setFunc:function(Xt,ze,on){(F!==Xt||q!==ze||ct!==on)&&(n.stencilFunc(Xt,ze,on),F=Xt,q=ze,ct=on)},setOp:function(Xt,ze,on){(mt!==Xt||Ut!==ze||Jt!==on)&&(n.stencilOp(Xt,ze,on),mt=Xt,Ut=ze,Jt=on)},setLocked:function(Xt){U=Xt},setClear:function(Xt){Qt!==Xt&&(n.clearStencil(Xt),Qt=Xt)},reset:function(){U=!1,gt=null,F=null,q=null,ct=null,mt=null,Ut=null,Jt=null,Qt=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,M=null,T=null,x=null,D=null,A=null,w=new $t(0,0,0),L=0,E=!1,S=null,R=null,X=null,G=null,Q=null;const nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,it=0;const C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(C)[1]),K=it>=1):C.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),K=it>=2);let tt=null,J={};const at=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),bt=new le().fromArray(at),I=new le().fromArray(Mt);function O(U,gt,F,q){const ct=new Uint8Array(4),mt=n.createTexture();n.bindTexture(U,mt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<F;Ut++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(gt+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return mt}const j={};j[n.TEXTURE_2D]=O(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=O(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=O(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=O(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(Ci),kt(!1),Vt(pa),Z(n.CULL_FACE),N(xn);function Z(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function st(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function ht(U,gt){return d[U]!==gt?(n.bindFramebuffer(U,gt),d[U]=gt,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=gt),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function ut(U,gt){let F=m,q=!1;if(U){F=f.get(gt),F===void 0&&(F=[],f.set(gt,F));const ct=U.textures;if(F.length!==ct.length||F[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Ut=ct.length;mt<Ut;mt++)F[mt]=n.COLOR_ATTACHMENT0+mt;F.length=ct.length,q=!0}}else F[0]!==n.BACK&&(F[0]=n.BACK,q=!0);q&&n.drawBuffers(F)}function yt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Et={[Yn]:n.FUNC_ADD,[Mh]:n.FUNC_SUBTRACT,[Sh]:n.FUNC_REVERSE_SUBTRACT};Et[yh]=n.MIN,Et[Eh]=n.MAX;const Gt={[Th]:n.ZERO,[bh]:n.ONE,[Ah]:n.SRC_COLOR,[jr]:n.SRC_ALPHA,[Dh]:n.SRC_ALPHA_SATURATE,[Ph]:n.DST_COLOR,[Rh]:n.DST_ALPHA,[wh]:n.ONE_MINUS_SRC_COLOR,[Kr]:n.ONE_MINUS_SRC_ALPHA,[Lh]:n.ONE_MINUS_DST_COLOR,[Ch]:n.ONE_MINUS_DST_ALPHA,[Ih]:n.CONSTANT_COLOR,[Uh]:n.ONE_MINUS_CONSTANT_COLOR,[Nh]:n.CONSTANT_ALPHA,[Fh]:n.ONE_MINUS_CONSTANT_ALPHA};function N(U,gt,F,q,ct,mt,Ut,Jt,Qt,Xt){if(U===xn){_===!0&&(st(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),U!==vh){if(U!==p||Xt!==E){if((u!==Yn||x!==Yn)&&(n.blendEquation(n.FUNC_ADD),u=Yn,x=Yn),Xt)switch(U){case Zn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $s:n.blendFunc(n.ONE,n.ONE);break;case ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ga:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $s:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ga:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,T=null,D=null,A=null,w.set(0,0,0),L=0,p=U,E=Xt}return}ct=ct||gt,mt=mt||F,Ut=Ut||q,(gt!==u||ct!==x)&&(n.blendEquationSeparate(Et[gt],Et[ct]),u=gt,x=ct),(F!==M||q!==T||mt!==D||Ut!==A)&&(n.blendFuncSeparate(Gt[F],Gt[q],Gt[mt],Gt[Ut]),M=F,T=q,D=mt,A=Ut),(Jt.equals(w)===!1||Qt!==L)&&(n.blendColor(Jt.r,Jt.g,Jt.b,Qt),w.copy(Jt),L=Qt),p=U,E=!1}function me(U,gt){U.side===mn?st(n.CULL_FACE):Z(n.CULL_FACE);let F=U.side===Re;gt&&(F=!F),kt(F),U.blending===Zn&&U.transparent===!1?N(xn):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const q=U.stencilWrite;a.setTest(q),q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Zt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function Vt(U){U!==gh?(Z(n.CULL_FACE),U!==R&&(U===pa?n.cullFace(n.BACK):U===_h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),R=U}function Ct(U){U!==X&&(K&&n.lineWidth(U),X=U)}function Zt(U,gt,F){U?(Z(n.POLYGON_OFFSET_FILL),(G!==gt||Q!==F)&&(n.polygonOffset(gt,F),G=gt,Q=F)):st(n.POLYGON_OFFSET_FILL)}function et(U){U?Z(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function b(U){U===void 0&&(U=n.TEXTURE0+nt-1),tt!==U&&(n.activeTexture(U),tt=U)}function v(U,gt,F){F===void 0&&(tt===null?F=n.TEXTURE0+nt-1:F=tt);let q=J[F];q===void 0&&(q={type:void 0,texture:void 0},J[F]=q),(q.type!==U||q.texture!==gt)&&(tt!==F&&(n.activeTexture(F),tt=F),n.bindTexture(U,gt||j[U]),q.type=U,q.texture=gt)}function P(){const U=J[tt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(U){bt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),bt.copy(U))}function xt(U){I.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),I.copy(U))}function zt(U,gt){let F=c.get(gt);F===void 0&&(F=new WeakMap,c.set(gt,F));let q=F.get(U);q===void 0&&(q=n.getUniformBlockIndex(gt,U.name),F.set(U,q))}function Nt(U,gt){const q=c.get(gt).get(U);l.get(gt)!==q&&(n.uniformBlockBinding(gt,q,U.__bindingPointIndex),l.set(gt,q))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,J={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,M=null,T=null,x=null,D=null,A=null,w=new $t(0,0,0),L=0,E=!1,S=null,R=null,X=null,G=null,Q=null,bt.set(0,0,n.canvas.width,n.canvas.height),I.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:st,bindFramebuffer:ht,drawBuffers:ut,useProgram:yt,setBlending:N,setMaterial:me,setFlipSided:kt,setCullFace:Vt,setLineWidth:Ct,setPolygonOffset:Zt,setScissorTest:et,activeTexture:b,bindTexture:v,unbindTexture:P,compressedTexImage2D:z,compressedTexImage3D:H,texImage2D:pt,texImage3D:St,updateUBOMapping:zt,uniformBlockBinding:Nt,texStorage2D:Tt,texStorage3D:rt,texSubImage2D:W,texSubImage3D:lt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Pt,viewport:xt,reset:qt}}function hl(n,t,e,i){const s=tg(i);switch(e){case sc:return n*t;case oc:return n*t;case ac:return n*t*2;case lc:return n*t/s.components*s.byteLength;case Yo:return n*t/s.components*s.byteLength;case cc:return n*t*2/s.components*s.byteLength;case qo:return n*t*2/s.components*s.byteLength;case rc:return n*t*3/s.components*s.byteLength;case je:return n*t*4/s.components*s.byteLength;case jo:return n*t*4/s.components*s.byteLength;case Fs:case Os:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bs:case ks:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case co:case uo:return Math.max(n,16)*Math.max(t,8)/4;case lo:case ho:return Math.max(n,8)*Math.max(t,8)/2;case fo:case po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zs:case Po:case Lo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hc:case Do:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Io:case Uo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tg(n){switch(n){case yn:case ec:return{byteLength:1,components:1};case Ji:case nc:case vn:return{byteLength:2,components:1};case Xo:case $o:return{byteLength:2,components:4};case ti:case Wo:case gn:return{byteLength:4,components:1};case ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function eg(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return m?new OffscreenCanvas(b,v):qs("canvas")}function _(b,v,P){let z=1;const H=et(b);if((H.width>P||H.height>P)&&(z=P/Math.max(H.width,H.height)),z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(z*H.width),lt=Math.floor(z*H.height);d===void 0&&(d=g(W,lt));const ot=v?g(W,lt):d;return ot.width=W,ot.height=lt,ot.getContext("2d").drawImage(b,0,0,W,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+W+"x"+lt+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),b;return b}function p(b){return b.generateMipmaps}function u(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,v,P,z,H=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===n.RED&&(P===n.FLOAT&&(W=n.R32F),P===n.HALF_FLOAT&&(W=n.R16F),P===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.R8UI),P===n.UNSIGNED_SHORT&&(W=n.R16UI),P===n.UNSIGNED_INT&&(W=n.R32UI),P===n.BYTE&&(W=n.R8I),P===n.SHORT&&(W=n.R16I),P===n.INT&&(W=n.R32I)),v===n.RG&&(P===n.FLOAT&&(W=n.RG32F),P===n.HALF_FLOAT&&(W=n.RG16F),P===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RG8UI),P===n.UNSIGNED_SHORT&&(W=n.RG16UI),P===n.UNSIGNED_INT&&(W=n.RG32UI),P===n.BYTE&&(W=n.RG8I),P===n.SHORT&&(W=n.RG16I),P===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RGB8UI),P===n.UNSIGNED_SHORT&&(W=n.RGB16UI),P===n.UNSIGNED_INT&&(W=n.RGB32UI),P===n.BYTE&&(W=n.RGB8I),P===n.SHORT&&(W=n.RGB16I),P===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),P===n.UNSIGNED_INT&&(W=n.RGBA32UI),P===n.BYTE&&(W=n.RGBA8I),P===n.SHORT&&(W=n.RGBA16I),P===n.INT&&(W=n.RGBA32I)),v===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const lt=H?er:Wt.getTransfer(z);P===n.FLOAT&&(W=n.RGBA32F),P===n.HALF_FLOAT&&(W=n.RGBA16F),P===n.UNSIGNED_BYTE&&(W=lt===ee?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(b,v){let P;return b?v===null||v===ti||v===Di?P=n.DEPTH24_STENCIL8:v===gn?P=n.DEPTH32F_STENCIL8:v===Ji&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ti||v===Di?P=n.DEPTH_COMPONENT24:v===gn?P=n.DEPTH_COMPONENT32F:v===Ji&&(P=n.DEPTH_COMPONENT16),P}function D(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ze&&b.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function A(b){const v=b.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&h.delete(v)}function w(b){const v=b.target;v.removeEventListener("dispose",w),S(v)}function L(b){const v=i.get(b);if(v.__webglInit===void 0)return;const P=b.source,z=f.get(P);if(z){const H=z[v.__cacheKey];H.usedTimes--,H.usedTimes===0&&E(b),Object.keys(z).length===0&&f.delete(P)}i.remove(b)}function E(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const P=b.source,z=f.get(P);delete z[v.__cacheKey],o.memory.textures--}function S(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let H=0;H<v.__webglFramebuffer[z].length;H++)n.deleteFramebuffer(v.__webglFramebuffer[z][H]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=b.textures;for(let z=0,H=P.length;z<H;z++){const W=i.get(P[z]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(P[z])}i.remove(b)}let R=0;function X(){R=0}function G(){const b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function Q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function nt(b,v){const P=i.get(b);if(b.isVideoTexture&&Ct(b),b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){const z=b.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(P,b,v);return}}e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function K(b,v){const P=i.get(b);if(b.version>0&&P.__version!==b.version){I(P,b,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function it(b,v){const P=i.get(b);if(b.version>0&&P.__version!==b.version){I(P,b,v);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function C(b,v){const P=i.get(b);if(b.version>0&&P.__version!==b.version){O(P,b,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}const tt={[oo]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[ao]:n.MIRRORED_REPEAT},J={[Ze]:n.NEAREST,[zh]:n.NEAREST_MIPMAP_NEAREST,[cs]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[hr]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},at={[Xh]:n.NEVER,[Zh]:n.ALWAYS,[$h]:n.LESS,[uc]:n.LEQUAL,[Yh]:n.EQUAL,[Kh]:n.GEQUAL,[qh]:n.GREATER,[jh]:n.NOTEQUAL};function Mt(b,v){if(v.type===gn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===hr||v.magFilter===cs||v.magFilter===Kn||v.minFilter===en||v.minFilter===hr||v.minFilter===cs||v.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,tt[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,tt[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,tt[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,J[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,J[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,at[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ze||v.minFilter!==cs&&v.minFilter!==Kn||v.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function bt(b,v){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",A));const z=v.source;let H=f.get(z);H===void 0&&(H={},f.set(z,H));const W=Q(v);if(W!==b.__cacheKey){H[W]===void 0&&(H[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),H[W].usedTimes++;const lt=H[b.__cacheKey];lt!==void 0&&(H[b.__cacheKey].usedTimes--,lt.usedTimes===0&&E(v)),b.__cacheKey=W,b.__webglTexture=H[W].texture}return P}function I(b,v,P){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);const H=bt(b,v),W=v.source;e.bindTexture(z,b.__webglTexture,n.TEXTURE0+P);const lt=i.get(W);if(W.version!==lt.__version||H===!0){e.activeTexture(n.TEXTURE0+P);const ot=Wt.getPrimaries(Wt.workingColorSpace),dt=v.colorSpace===Un?null:Wt.getPrimaries(v.colorSpace),Tt=v.colorSpace===Un||ot===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let rt=_(v.image,!1,s.maxTextureSize);rt=Zt(v,rt);const pt=r.convert(v.format,v.colorSpace),St=r.convert(v.type);let Pt=T(v.internalFormat,pt,St,v.colorSpace,v.isVideoTexture);Mt(z,v);let xt;const zt=v.mipmaps,Nt=v.isVideoTexture!==!0,qt=lt.__version===void 0||H===!0,U=W.dataReady,gt=D(v,rt);if(v.isDepthTexture)Pt=x(v.format===Ii,v.type),qt&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,Pt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Pt,rt.width,rt.height,0,pt,St,null));else if(v.isDataTexture)if(zt.length>0){Nt&&qt&&e.texStorage2D(n.TEXTURE_2D,gt,Pt,zt[0].width,zt[0].height);for(let F=0,q=zt.length;F<q;F++)xt=zt[F],Nt?U&&e.texSubImage2D(n.TEXTURE_2D,F,0,0,xt.width,xt.height,pt,St,xt.data):e.texImage2D(n.TEXTURE_2D,F,Pt,xt.width,xt.height,0,pt,St,xt.data);v.generateMipmaps=!1}else Nt?(qt&&e.texStorage2D(n.TEXTURE_2D,gt,Pt,rt.width,rt.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,pt,St,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,rt.width,rt.height,0,pt,St,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Pt,zt[0].width,zt[0].height,rt.depth);for(let F=0,q=zt.length;F<q;F++)if(xt=zt[F],v.format!==je)if(pt!==null)if(Nt){if(U)if(v.layerUpdates.size>0){const ct=hl(xt.width,xt.height,v.format,v.type);for(const mt of v.layerUpdates){const Ut=xt.data.subarray(mt*ct/xt.data.BYTES_PER_ELEMENT,(mt+1)*ct/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,mt,xt.width,xt.height,1,pt,Ut)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,xt.width,xt.height,rt.depth,pt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,F,Pt,xt.width,xt.height,rt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,xt.width,xt.height,rt.depth,pt,St,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,F,Pt,xt.width,xt.height,rt.depth,0,pt,St,xt.data)}else{Nt&&qt&&e.texStorage2D(n.TEXTURE_2D,gt,Pt,zt[0].width,zt[0].height);for(let F=0,q=zt.length;F<q;F++)xt=zt[F],v.format!==je?pt!==null?Nt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,F,0,0,xt.width,xt.height,pt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,F,Pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?U&&e.texSubImage2D(n.TEXTURE_2D,F,0,0,xt.width,xt.height,pt,St,xt.data):e.texImage2D(n.TEXTURE_2D,F,Pt,xt.width,xt.height,0,pt,St,xt.data)}else if(v.isDataArrayTexture)if(Nt){if(qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Pt,rt.width,rt.height,rt.depth),U)if(v.layerUpdates.size>0){const F=hl(rt.width,rt.height,v.format,v.type);for(const q of v.layerUpdates){const ct=rt.data.subarray(q*F/rt.data.BYTES_PER_ELEMENT,(q+1)*F/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,rt.width,rt.height,1,pt,St,ct)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,pt,St,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,rt.width,rt.height,rt.depth,0,pt,St,rt.data);else if(v.isData3DTexture)Nt?(qt&&e.texStorage3D(n.TEXTURE_3D,gt,Pt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,pt,St,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,rt.width,rt.height,rt.depth,0,pt,St,rt.data);else if(v.isFramebufferTexture){if(qt)if(Nt)e.texStorage2D(n.TEXTURE_2D,gt,Pt,rt.width,rt.height);else{let F=rt.width,q=rt.height;for(let ct=0;ct<gt;ct++)e.texImage2D(n.TEXTURE_2D,ct,Pt,F,q,0,pt,St,null),F>>=1,q>>=1}}else if(zt.length>0){if(Nt&&qt){const F=et(zt[0]);e.texStorage2D(n.TEXTURE_2D,gt,Pt,F.width,F.height)}for(let F=0,q=zt.length;F<q;F++)xt=zt[F],Nt?U&&e.texSubImage2D(n.TEXTURE_2D,F,0,0,pt,St,xt):e.texImage2D(n.TEXTURE_2D,F,Pt,pt,St,xt);v.generateMipmaps=!1}else if(Nt){if(qt){const F=et(rt);e.texStorage2D(n.TEXTURE_2D,gt,Pt,F.width,F.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,St,rt)}else e.texImage2D(n.TEXTURE_2D,0,Pt,pt,St,rt);p(v)&&u(z),lt.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function O(b,v,P){if(v.image.length!==6)return;const z=bt(b,v),H=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+P);const W=i.get(H);if(H.version!==W.__version||z===!0){e.activeTexture(n.TEXTURE0+P);const lt=Wt.getPrimaries(Wt.workingColorSpace),ot=v.colorSpace===Un?null:Wt.getPrimaries(v.colorSpace),dt=v.colorSpace===Un||lt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,rt=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let q=0;q<6;q++)!Tt&&!rt?pt[q]=_(v.image[q],!0,s.maxCubemapSize):pt[q]=rt?v.image[q].image:v.image[q],pt[q]=Zt(v,pt[q]);const St=pt[0],Pt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),zt=T(v.internalFormat,Pt,xt,v.colorSpace),Nt=v.isVideoTexture!==!0,qt=W.__version===void 0||z===!0,U=H.dataReady;let gt=D(v,St);Mt(n.TEXTURE_CUBE_MAP,v);let F;if(Tt){Nt&&qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,zt,St.width,St.height);for(let q=0;q<6;q++){F=pt[q].mipmaps;for(let ct=0;ct<F.length;ct++){const mt=F[ct];v.format!==je?Pt!==null?Nt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct,0,0,mt.width,mt.height,Pt,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct,zt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct,0,0,mt.width,mt.height,Pt,xt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct,zt,mt.width,mt.height,0,Pt,xt,mt.data)}}}else{if(F=v.mipmaps,Nt&&qt){F.length>0&&gt++;const q=et(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,zt,q.width,q.height)}for(let q=0;q<6;q++)if(rt){Nt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pt[q].width,pt[q].height,Pt,xt,pt[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,zt,pt[q].width,pt[q].height,0,Pt,xt,pt[q].data);for(let ct=0;ct<F.length;ct++){const Ut=F[ct].image[q].image;Nt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct+1,0,0,Ut.width,Ut.height,Pt,xt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct+1,zt,Ut.width,Ut.height,0,Pt,xt,Ut.data)}}else{Nt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Pt,xt,pt[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,zt,Pt,xt,pt[q]);for(let ct=0;ct<F.length;ct++){const mt=F[ct];Nt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct+1,0,0,Pt,xt,mt.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct+1,zt,Pt,xt,mt.image[q])}}}p(v)&&u(n.TEXTURE_CUBE_MAP),W.__version=H.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function j(b,v,P,z,H,W){const lt=r.convert(P.format,P.colorSpace),ot=r.convert(P.type),dt=T(P.internalFormat,lt,ot,P.colorSpace),Tt=i.get(v),rt=i.get(P);if(rt.__renderTarget=v,!Tt.__hasExternalTextures){const pt=Math.max(1,v.width>>W),St=Math.max(1,v.height>>W);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?e.texImage3D(H,W,dt,pt,St,v.depth,0,lt,ot,null):e.texImage2D(H,W,dt,pt,St,0,lt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),Vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,H,rt.__webglTexture,0,kt(v)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,H,rt.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(b,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const z=v.depthTexture,H=z&&z.isDepthTexture?z.type:null,W=x(v.stencilBuffer,H),lt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=kt(v);Vt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,W,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,b)}else{const z=v.textures;for(let H=0;H<z.length;H++){const W=z[H],lt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),dt=T(W.internalFormat,lt,ot,W.colorSpace),Tt=kt(v);P&&Vt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,dt,v.width,v.height):Vt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,dt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,dt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(v.depthTexture);z.__renderTarget=v,(!z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),nt(v.depthTexture,0);const H=z.__webglTexture,W=kt(v);if(v.depthTexture.format===bi)Vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0);else if(v.depthTexture.format===Ii)Vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function ht(b){const v=i.get(b),P=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const z=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const H=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",H)};z.addEventListener("dispose",H),v.__depthDisposeCallback=H}v.__boundDepthTexture=z}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");st(v.__webglFramebuffer,b)}else if(P){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=n.createRenderbuffer(),Z(v.__webglDepthbuffer[z],b,!1);else{const H=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Z(v.__webglDepthbuffer,b,!1);else{const z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,H)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(b,v,P){const z=i.get(b);v!==void 0&&j(z.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&ht(b)}function yt(b){const v=b.texture,P=i.get(b),z=i.get(v);b.addEventListener("dispose",w);const H=b.textures,W=b.isWebGLCubeRenderTarget===!0,lt=H.length>1;if(lt||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,o.memory.textures++),W){P.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[ot]=[];for(let dt=0;dt<v.mipmaps.length;dt++)P.__webglFramebuffer[ot][dt]=n.createFramebuffer()}else P.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)P.__webglFramebuffer[ot]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(lt)for(let ot=0,dt=H.length;ot<dt;ot++){const Tt=i.get(H[ot]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Vt(b)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ot=0;ot<H.length;ot++){const dt=H[ot];P.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ot]);const Tt=r.convert(dt.format,dt.colorSpace),rt=r.convert(dt.type),pt=T(dt.internalFormat,Tt,rt,dt.colorSpace,b.isXRRenderTarget===!0),St=kt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,pt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,P.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(P.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)j(P.__webglFramebuffer[ot][dt],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else j(P.__webglFramebuffer[ot],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(v)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let ot=0,dt=H.length;ot<dt;ot++){const Tt=H[ot],rt=i.get(Tt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),Mt(n.TEXTURE_2D,Tt),j(P.__webglFramebuffer,b,Tt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(Tt)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,z.__webglTexture),Mt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)j(P.__webglFramebuffer[dt],b,v,n.COLOR_ATTACHMENT0,ot,dt);else j(P.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,ot,0);p(v)&&u(ot),e.unbindTexture()}b.depthBuffer&&ht(b)}function Et(b){const v=b.textures;for(let P=0,z=v.length;P<z;P++){const H=v[P];if(p(H)){const W=M(b),lt=i.get(H).__webglTexture;e.bindTexture(W,lt),u(W),e.unbindTexture()}}}const Gt=[],N=[];function me(b){if(b.samples>0){if(Vt(b)===!1){const v=b.textures,P=b.width,z=b.height;let H=n.COLOR_BUFFER_BIT;const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(b),ot=v.length>1;if(ot)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);const Tt=i.get(v[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,P,z,0,0,P,z,H,n.NEAREST),l===!0&&(Gt.length=0,N.length=0,Gt.push(n.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Gt.push(W),N.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);const Tt=i.get(v[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function kt(b){return Math.min(s.maxSamples,b.samples)}function Vt(b){const v=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(b){const v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Zt(b,v){const P=b.colorSpace,z=b.format,H=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==Ni&&P!==Un&&(Wt.getTransfer(P)===ee?(z!==je||H!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=nt,this.setTexture2DArray=K,this.setTexture3D=it,this.setTextureCube=C,this.rebindTextures=ut,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Vt}function ng(n,t){function e(i,s=Un){let r;const o=Wt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ic)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ec)return n.BYTE;if(i===nc)return n.SHORT;if(i===Ji)return n.UNSIGNED_SHORT;if(i===Wo)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===gn)return n.FLOAT;if(i===vn)return n.HALF_FLOAT;if(i===sc)return n.ALPHA;if(i===rc)return n.RGB;if(i===je)return n.RGBA;if(i===oc)return n.LUMINANCE;if(i===ac)return n.LUMINANCE_ALPHA;if(i===bi)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===lc)return n.RED;if(i===Yo)return n.RED_INTEGER;if(i===cc)return n.RG;if(i===qo)return n.RG_INTEGER;if(i===jo)return n.RGBA_INTEGER;if(i===Fs||i===Os||i===Bs||i===ks)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lo||i===co||i===ho||i===uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fo||i===po||i===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fo||i===po)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===go||i===_o||i===xo||i===vo||i===Mo||i===So||i===yo||i===Eo||i===To||i===bo||i===Ao||i===wo||i===Ro||i===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===go)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_o)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===So)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===To)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ao)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ro)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Co)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zs||i===Po||i===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zs)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===Do||i===Io||i===Uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class ig extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ps extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ye({vertexShader:rg,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nn(new ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lg extends si{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=new ag,p=e.getContextAttributes();let u=null,M=null;const T=[],x=[],D=new It;let A=null;const w=new $e;w.viewport=new le;const L=new $e;L.viewport=new le;const E=[w,L],S=new ig;let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=T[I];return O===void 0&&(O=new Br,T[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=T[I];return O===void 0&&(O=new Br,T[I]=O),O.getGripSpace()},this.getHand=function(I){let O=T[I];return O===void 0&&(O=new Br,T[I]=O),O.getHandSpace()};function G(I){const O=x.indexOf(I.inputSource);if(O===-1)return;const j=T[O];j!==void 0&&(j.update(I.inputSource,I.frame,c||o),j.dispatchEvent({type:I.type,data:I.inputSource}))}function Q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",nt);for(let I=0;I<T.length;I++){const O=x[I];O!==null&&(x[I]=null,T[I].disconnect(O))}R=null,X=null,_.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,M=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",nt),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const O={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,O),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Je(m.framebufferWidth,m.framebufferHeight,{format:je,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,j=null,Z=null;p.depth&&(Z=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=p.stencil?Ii:bi,j=p.stencil?Di:ti);const st={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(st),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Je(f.textureWidth,f.textureHeight,{format:je,type:yn,depthTexture:new Tc(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function nt(I){for(let O=0;O<I.removed.length;O++){const j=I.removed[O],Z=x.indexOf(j);Z>=0&&(x[Z]=null,T[Z].disconnect(j))}for(let O=0;O<I.added.length;O++){const j=I.added[O];let Z=x.indexOf(j);if(Z===-1){for(let ht=0;ht<T.length;ht++)if(ht>=x.length){x.push(j),Z=ht;break}else if(x[ht]===null){x[ht]=j,Z=ht;break}if(Z===-1)break}const st=T[Z];st&&st.connect(j)}}const K=new V,it=new V;function C(I,O,j){K.setFromMatrixPosition(O.matrixWorld),it.setFromMatrixPosition(j.matrixWorld);const Z=K.distanceTo(it),st=O.projectionMatrix.elements,ht=j.projectionMatrix.elements,ut=st[14]/(st[10]-1),yt=st[14]/(st[10]+1),Et=(st[9]+1)/st[5],Gt=(st[9]-1)/st[5],N=(st[8]-1)/st[0],me=(ht[8]+1)/ht[0],kt=ut*N,Vt=ut*me,Ct=Z/(-N+me),Zt=Ct*-N;if(O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Zt),I.translateZ(Ct),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),st[10]===-1)I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const et=ut+Ct,b=yt+Ct,v=kt-Zt,P=Vt+(Z-Zt),z=Et*yt/b*et,H=Gt*yt/b*et;I.projectionMatrix.makePerspective(v,P,z,H,et,b),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function tt(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let O=I.near,j=I.far;_.texture!==null&&(_.depthNear>0&&(O=_.depthNear),_.depthFar>0&&(j=_.depthFar)),S.near=L.near=w.near=O,S.far=L.far=w.far=j,(R!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,X=S.far),w.layers.mask=I.layers.mask|2,L.layers.mask=I.layers.mask|4,S.layers.mask=w.layers.mask|L.layers.mask;const Z=I.parent,st=S.cameras;tt(S,Z);for(let ht=0;ht<st.length;ht++)tt(st[ht],Z);st.length===2?C(S,w,L):S.projectionMatrix.copy(w.projectionMatrix),J(I,S,Z)};function J(I,O,j){j===null?I.matrix.copy(O.matrixWorld):(I.matrix.copy(j.matrixWorld),I.matrix.invert(),I.matrix.multiply(O.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=No*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let at=null;function Mt(I,O){if(h=O.getViewerPose(c||o),g=O,h!==null){const j=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Z=!1;j.length!==S.cameras.length&&(S.cameras.length=0,Z=!0);for(let ht=0;ht<j.length;ht++){const ut=j[ht];let yt=null;if(m!==null)yt=m.getViewport(ut);else{const Gt=d.getViewSubImage(f,ut);yt=Gt.viewport,ht===0&&(t.setRenderTargetTextures(M,Gt.colorTexture,f.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(M))}let Et=E[ht];Et===void 0&&(Et=new $e,Et.layers.enable(ht),Et.viewport=new le,E[ht]=Et),Et.matrix.fromArray(ut.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(ut.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(yt.x,yt.y,yt.width,yt.height),ht===0&&(S.matrix.copy(Et.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Z===!0&&S.cameras.push(Et)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")){const ht=d.getDepthInformation(j[0]);ht&&ht.isValid&&ht.texture&&_.init(t,ht,s.renderState)}}for(let j=0;j<T.length;j++){const Z=x[j],st=T[j];Z!==null&&st!==void 0&&st.update(Z,O,c||o)}at&&at(I,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const bt=new Ec;bt.setAnimationLoop(Mt),this.setAnimationLoop=function(I){at=I},this.dispose=function(){}}}const Wn=new En,cg=new ce;function hg(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,vc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,M,T,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,M,T):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Re&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Re&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const M=t.get(u),T=M.envMap,x=M.envMapRotation;T&&(p.envMap.value=T,Wn.copy(x),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Wn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,M,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=T*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Re&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const M=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ug(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const x=T.program;i.uniformBlockBinding(M,x)}function c(M,T){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",p));const D=T.program;i.updateUBOMapping(M,D);const A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const T=d();M.__bindingPointIndex=T;const x=n.createBuffer(),D=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=s[M.id],x=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let A=0,w=x.length;A<w;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=L.length;E<S;E++){const R=L[E];if(m(R,A,E,D)===!0){const X=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let Q=0;for(let nt=0;nt<G.length;nt++){const K=G[nt],it=_(K);typeof K=="number"||typeof K=="boolean"?(R.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,X+Q,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=0,R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=0,R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=0):(K.toArray(R.__data,Q),Q+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,T,x,D){const A=M.value,w=T+"_"+x;if(D[w]===void 0)return typeof A=="number"||typeof A=="boolean"?D[w]=A:D[w]=A.clone(),!0;{const L=D[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(M){const T=M.uniforms;let x=0;const D=16;for(let w=0,L=T.length;w<L;w++){const E=Array.isArray(T[w])?T[w]:[T[w]];for(let S=0,R=E.length;S<R;S++){const X=E[S],G=Array.isArray(X.value)?X.value:[X.value];for(let Q=0,nt=G.length;Q<nt;Q++){const K=G[Q],it=_(K),C=x%D,tt=C%it.boundary,J=C+tt;x+=tt,J!==0&&D-J<it.storage&&(x+=D-J),X.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=it.storage}}}const A=x%D;return A>0&&(x+=D-A),M.__size=x,M.__cache={},this}function _(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),T}function p(M){const T=M.target;T.removeEventListener("dispose",p);const x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function u(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Cc{constructor(t={}){const{canvas:e=tu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,u=null;const M=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let D=!1,A=0,w=0,L=null,E=-1,S=null;const R=new le,X=new le;let G=null;const Q=new $t(0);let nt=0,K=e.width,it=e.height,C=1,tt=null,J=null;const at=new le(0,0,K,it),Mt=new le(0,0,K,it);let bt=!1;const I=new yc;let O=!1,j=!1;const Z=new ce,st=new ce,ht=new V,ut=new le,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Gt(){return L===null?C:1}let N=i;function me(y,B){return e.getContext(y,B)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Go}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){const B="webgl2";if(N=me(B,y),N===null)throw me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let kt,Vt,Ct,Zt,et,b,v,P,z,H,W,lt,ot,dt,Tt,rt,pt,St,Pt,xt,zt,Nt,qt,U;function gt(){kt=new _p(N),kt.init(),Nt=new ng(N,kt),Vt=new up(N,kt,t,Nt),Ct=new Qm(N,kt),Vt.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),Zt=new Mp(N),et=new Bm,b=new eg(N,kt,Ct,et,Vt,Nt,Zt),v=new fp(x),P=new gp(x),z=new Au(N),qt=new cp(N,z),H=new xp(N,z,Zt,qt),W=new yp(N,H,z,Zt),Pt=new Sp(N,Vt,b),rt=new dp(et),lt=new Om(x,v,P,kt,Vt,qt,rt),ot=new hg(x,et),dt=new zm,Tt=new $m(kt),St=new lp(x,v,P,Ct,W,m,l),pt=new Zm(x,W,Vt),U=new ug(N,Zt,Vt,Ct),xt=new hp(N,kt,Zt),zt=new vp(N,kt,Zt),Zt.programs=lt.programs,x.capabilities=Vt,x.extensions=kt,x.properties=et,x.renderLists=dt,x.shadowMap=pt,x.state=Ct,x.info=Zt}gt();const F=new lg(x,N);this.xr=F,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=kt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=kt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(y){y!==void 0&&(C=y,this.setSize(K,it,!1))},this.getSize=function(y){return y.set(K,it)},this.setSize=function(y,B,$=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,it=B,e.width=Math.floor(y*C),e.height=Math.floor(B*C),$===!0&&(e.style.width=y+"px",e.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(K*C,it*C).floor()},this.setDrawingBufferSize=function(y,B,$){K=y,it=B,C=$,e.width=Math.floor(y*$),e.height=Math.floor(B*$),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(at)},this.setViewport=function(y,B,$,Y){y.isVector4?at.set(y.x,y.y,y.z,y.w):at.set(y,B,$,Y),Ct.viewport(R.copy(at).multiplyScalar(C).round())},this.getScissor=function(y){return y.copy(Mt)},this.setScissor=function(y,B,$,Y){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,B,$,Y),Ct.scissor(X.copy(Mt).multiplyScalar(C).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(y){Ct.setScissorTest(bt=y)},this.setOpaqueSort=function(y){tt=y},this.setTransparentSort=function(y){J=y},this.getClearColor=function(y){return y.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(y=!0,B=!0,$=!0){let Y=0;if(y){let k=!1;if(L!==null){const ft=L.texture.format;k=ft===jo||ft===qo||ft===Yo}if(k){const ft=L.texture.type,vt=ft===yn||ft===ti||ft===Ji||ft===Di||ft===Xo||ft===$o,At=St.getClearColor(),wt=St.getClearAlpha(),Ft=At.r,Ot=At.g,Rt=At.b;vt?(g[0]=Ft,g[1]=Ot,g[2]=Rt,g[3]=wt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ft,_[1]=Ot,_[2]=Rt,_[3]=wt,N.clearBufferiv(N.COLOR,0,_))}else Y|=N.COLOR_BUFFER_BIT}B&&(Y|=N.DEPTH_BUFFER_BIT),$&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),dt.dispose(),Tt.dispose(),et.dispose(),v.dispose(),P.dispose(),W.dispose(),qt.dispose(),U.dispose(),lt.dispose(),F.dispose(),F.removeEventListener("sessionstart",oa),F.removeEventListener("sessionend",aa),Bn.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=Zt.autoReset,B=pt.enabled,$=pt.autoUpdate,Y=pt.needsUpdate,k=pt.type;gt(),Zt.autoReset=y,pt.enabled=B,pt.autoUpdate=$,pt.needsUpdate=Y,pt.type=k}function mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ut(y){const B=y.target;B.removeEventListener("dispose",Ut),Jt(B)}function Jt(y){Qt(y),et.remove(y)}function Qt(y){const B=et.get(y).programs;B!==void 0&&(B.forEach(function($){lt.releaseProgram($)}),y.isShaderMaterial&&lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,$,Y,k,ft){B===null&&(B=yt);const vt=k.isMesh&&k.matrixWorld.determinant()<0,At=fh(y,B,$,Y,k);Ct.setMaterial(Y,vt);let wt=$.index,Ft=1;if(Y.wireframe===!0){if(wt=H.getWireframeAttribute($),wt===void 0)return;Ft=2}const Ot=$.drawRange,Rt=$.attributes.position;let Yt=Ot.start*Ft,ie=(Ot.start+Ot.count)*Ft;ft!==null&&(Yt=Math.max(Yt,ft.start*Ft),ie=Math.min(ie,(ft.start+ft.count)*Ft)),wt!==null?(Yt=Math.max(Yt,0),ie=Math.min(ie,wt.count)):Rt!=null&&(Yt=Math.max(Yt,0),ie=Math.min(ie,Rt.count));const se=ie-Yt;if(se<0||se===1/0)return;qt.setup(k,Y,At,$,wt);let be,jt=xt;if(wt!==null&&(be=z.get(wt),jt=zt,jt.setIndex(be)),k.isMesh)Y.wireframe===!0?(Ct.setLineWidth(Y.wireframeLinewidth*Gt()),jt.setMode(N.LINES)):jt.setMode(N.TRIANGLES);else if(k.isLine){let Lt=Y.linewidth;Lt===void 0&&(Lt=1),Ct.setLineWidth(Lt*Gt()),k.isLineSegments?jt.setMode(N.LINES):k.isLineLoop?jt.setMode(N.LINE_LOOP):jt.setMode(N.LINE_STRIP)}else k.isPoints?jt.setMode(N.POINTS):k.isSprite&&jt.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)jt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))jt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,an=k._multiDrawCounts,Kt=k._multiDrawCount,He=wt?z.get(wt).bytesPerElement:1,ri=et.get(Y).currentProgram.getUniforms();for(let Le=0;Le<Kt;Le++)ri.setValue(N,"_gl_DrawID",Le),jt.render(Lt[Le]/He,an[Le])}else if(k.isInstancedMesh)jt.renderInstances(Yt,se,k.count);else if($.isInstancedBufferGeometry){const Lt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,an=Math.min($.instanceCount,Lt);jt.renderInstances(Yt,se,an)}else jt.render(Yt,se)};function Xt(y,B,$){y.transparent===!0&&y.side===mn&&y.forceSinglePass===!1?(y.side=Re,y.needsUpdate=!0,ls(y,B,$),y.side=On,y.needsUpdate=!0,ls(y,B,$),y.side=mn):ls(y,B,$)}this.compile=function(y,B,$=null){$===null&&($=y),u=Tt.get($),u.init(B),T.push(u),$.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),y!==$&&y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const Y=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ft=k.material;if(ft)if(Array.isArray(ft))for(let vt=0;vt<ft.length;vt++){const At=ft[vt];Xt(At,$,k),Y.add(At)}else Xt(ft,$,k),Y.add(ft)}),T.pop(),u=null,Y},this.compileAsync=function(y,B,$=null){const Y=this.compile(y,B,$);return new Promise(k=>{function ft(){if(Y.forEach(function(vt){et.get(vt).currentProgram.isReady()&&Y.delete(vt)}),Y.size===0){k(y);return}setTimeout(ft,10)}kt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ze=null;function on(y){ze&&ze(y)}function oa(){Bn.stop()}function aa(){Bn.start()}const Bn=new Ec;Bn.setAnimationLoop(on),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(y){ze=y,F.setAnimationLoop(y),y===null?Bn.stop():Bn.start()},F.addEventListener("sessionstart",oa),F.addEventListener("sessionend",aa),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(B),B=F.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,B,L),u=Tt.get(y,T.length),u.init(B),T.push(u),st.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),I.setFromProjectionMatrix(st),j=this.localClippingEnabled,O=rt.init(this.clippingPlanes,j),p=dt.get(y,M.length),p.init(),M.push(p),F.enabled===!0&&F.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&cr(ft,B,-1/0,x.sortObjects)}cr(y,B,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(tt,J),Et=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Et&&St.addToRenderList(p,y),this.info.render.frame++,O===!0&&rt.beginShadows();const $=u.state.shadowsArray;pt.render($,y,B),O===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,k=p.transmissive;if(u.setupLights(),B.isArrayCamera){const ft=B.cameras;if(k.length>0)for(let vt=0,At=ft.length;vt<At;vt++){const wt=ft[vt];ca(Y,k,y,wt)}Et&&St.render(y);for(let vt=0,At=ft.length;vt<At;vt++){const wt=ft[vt];la(p,y,wt,wt.viewport)}}else k.length>0&&ca(Y,k,y,B),Et&&St.render(y),la(p,y,B);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(x,y,B),qt.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(u=T[T.length-1],O===!0&&rt.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function cr(y,B,$,Y){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||I.intersectsSprite(y)){Y&&ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(st);const vt=W.update(y),At=y.material;At.visible&&p.push(y,vt,At,$,ut.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||I.intersectsObject(y))){const vt=W.update(y),At=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ut.copy(y.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ut.copy(vt.boundingSphere.center)),ut.applyMatrix4(y.matrixWorld).applyMatrix4(st)),Array.isArray(At)){const wt=vt.groups;for(let Ft=0,Ot=wt.length;Ft<Ot;Ft++){const Rt=wt[Ft],Yt=At[Rt.materialIndex];Yt&&Yt.visible&&p.push(y,vt,Yt,$,ut.z,Rt)}}else At.visible&&p.push(y,vt,At,$,ut.z,null)}}const ft=y.children;for(let vt=0,At=ft.length;vt<At;vt++)cr(ft[vt],B,$,Y)}function la(y,B,$,Y){const k=y.opaque,ft=y.transmissive,vt=y.transparent;u.setupLightsView($),O===!0&&rt.setGlobalState(x.clippingPlanes,$),Y&&Ct.viewport(R.copy(Y)),k.length>0&&as(k,B,$),ft.length>0&&as(ft,B,$),vt.length>0&&as(vt,B,$),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ca(y,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Y.id]===void 0&&(u.state.transmissionRenderTarget[Y.id]=new Je(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?vn:yn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const ft=u.state.transmissionRenderTarget[Y.id],vt=Y.viewport||R;ft.setSize(vt.z,vt.w);const At=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(Q),nt=x.getClearAlpha(),nt<1&&x.setClearColor(16777215,.5),x.clear(),Et&&St.render($);const wt=x.toneMapping;x.toneMapping=Fn;const Ft=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),u.setupLightsView(Y),O===!0&&rt.setGlobalState(x.clippingPlanes,Y),as(y,$,Y),b.updateMultisampleRenderTarget(ft),b.updateRenderTargetMipmap(ft),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Rt=0,Yt=B.length;Rt<Yt;Rt++){const ie=B[Rt],se=ie.object,be=ie.geometry,jt=ie.material,Lt=ie.group;if(jt.side===mn&&se.layers.test(Y.layers)){const an=jt.side;jt.side=Re,jt.needsUpdate=!0,ha(se,$,Y,be,jt,Lt),jt.side=an,jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(b.updateMultisampleRenderTarget(ft),b.updateRenderTargetMipmap(ft))}x.setRenderTarget(At),x.setClearColor(Q,nt),Ft!==void 0&&(Y.viewport=Ft),x.toneMapping=wt}function as(y,B,$){const Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ft=y.length;k<ft;k++){const vt=y[k],At=vt.object,wt=vt.geometry,Ft=Y===null?vt.material:Y,Ot=vt.group;At.layers.test($.layers)&&ha(At,B,$,wt,Ft,Ot)}}function ha(y,B,$,Y,k,ft){y.onBeforeRender(x,B,$,Y,k,ft),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(x,B,$,Y,y,ft),k.transparent===!0&&k.side===mn&&k.forceSinglePass===!1?(k.side=Re,k.needsUpdate=!0,x.renderBufferDirect($,B,Y,k,y,ft),k.side=On,k.needsUpdate=!0,x.renderBufferDirect($,B,Y,k,y,ft),k.side=mn):x.renderBufferDirect($,B,Y,k,y,ft),y.onAfterRender(x,B,$,Y,k,ft)}function ls(y,B,$){B.isScene!==!0&&(B=yt);const Y=et.get(y),k=u.state.lights,ft=u.state.shadowsArray,vt=k.state.version,At=lt.getParameters(y,k.state,ft,B,$),wt=lt.getProgramCacheKey(At);let Ft=Y.programs;Y.environment=y.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(y.isMeshStandardMaterial?P:v).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Ft===void 0&&(y.addEventListener("dispose",Ut),Ft=new Map,Y.programs=Ft);let Ot=Ft.get(wt);if(Ot!==void 0){if(Y.currentProgram===Ot&&Y.lightsStateVersion===vt)return da(y,At),Ot}else At.uniforms=lt.getUniforms(y),y.onBeforeCompile(At,x),Ot=lt.acquireProgram(At,wt),Ft.set(wt,Ot),Y.uniforms=At.uniforms;const Rt=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),da(y,At),Y.needsLights=mh(y),Y.lightsStateVersion=vt,Y.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMap.value=k.state.directionalShadowMap,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotShadowMap.value=k.state.spotShadowMap,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMap.value=k.state.pointShadowMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ot,Y.uniformsList=null,Ot}function ua(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Vs.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function da(y,B){const $=et.get(y);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function fh(y,B,$,Y,k){B.isScene!==!0&&(B=yt),b.resetTextureUnits();const ft=B.fog,vt=Y.isMeshStandardMaterial?B.environment:null,At=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ni,wt=(Y.isMeshStandardMaterial?P:v).get(Y.envMap||vt),Ft=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ot=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Rt=!!$.morphAttributes.position,Yt=!!$.morphAttributes.normal,ie=!!$.morphAttributes.color;let se=Fn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(se=x.toneMapping);const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,jt=be!==void 0?be.length:0,Lt=et.get(Y),an=u.state.lights;if(O===!0&&(j===!0||y!==S)){const Ne=y===S&&Y.id===E;rt.setState(Y,y,Ne)}let Kt=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==an.state.version||Lt.outputColorSpace!==At||k.isBatchedMesh&&Lt.batching===!1||!k.isBatchedMesh&&Lt.batching===!0||k.isBatchedMesh&&Lt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Lt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Lt.instancing===!1||!k.isInstancedMesh&&Lt.instancing===!0||k.isSkinnedMesh&&Lt.skinning===!1||!k.isSkinnedMesh&&Lt.skinning===!0||k.isInstancedMesh&&Lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Lt.instancingMorph===!1&&k.morphTexture!==null||Lt.envMap!==wt||Y.fog===!0&&Lt.fog!==ft||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==rt.numPlanes||Lt.numIntersection!==rt.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==Ot||Lt.morphTargets!==Rt||Lt.morphNormals!==Yt||Lt.morphColors!==ie||Lt.toneMapping!==se||Lt.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,Lt.__version=Y.version);let He=Lt.currentProgram;Kt===!0&&(He=ls(Y,B,k));let ri=!1,Le=!1,zi=!1;const re=He.getUniforms(),Qe=Lt.uniforms;if(Ct.useProgram(He.program)&&(ri=!0,Le=!0,zi=!0),Y.id!==E&&(E=Y.id,Le=!0),ri||S!==y){Ct.buffers.depth.getReversed()?(Z.copy(y.projectionMatrix),nu(Z),iu(Z),re.setValue(N,"projectionMatrix",Z)):re.setValue(N,"projectionMatrix",y.projectionMatrix),re.setValue(N,"viewMatrix",y.matrixWorldInverse);const bn=re.map.cameraPosition;bn!==void 0&&bn.setValue(N,ht.setFromMatrixPosition(y.matrixWorld)),Vt.logarithmicDepthBuffer&&re.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&re.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Le=!0,zi=!0)}if(k.isSkinnedMesh){re.setOptional(N,k,"bindMatrix"),re.setOptional(N,k,"bindMatrixInverse");const Ne=k.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),re.setValue(N,"boneTexture",Ne.boneTexture,b))}k.isBatchedMesh&&(re.setOptional(N,k,"batchingTexture"),re.setValue(N,"batchingTexture",k._matricesTexture,b),re.setOptional(N,k,"batchingIdTexture"),re.setValue(N,"batchingIdTexture",k._indirectTexture,b),re.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&re.setValue(N,"batchingColorTexture",k._colorsTexture,b));const Hi=$.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&Pt.update(k,$,He),(Le||Lt.receiveShadow!==k.receiveShadow)&&(Lt.receiveShadow=k.receiveShadow,re.setValue(N,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Qe.envMap.value=wt,Qe.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Qe.envMapIntensity.value=B.environmentIntensity),Le&&(re.setValue(N,"toneMappingExposure",x.toneMappingExposure),Lt.needsLights&&ph(Qe,zi),ft&&Y.fog===!0&&ot.refreshFogUniforms(Qe,ft),ot.refreshMaterialUniforms(Qe,Y,C,it,u.state.transmissionRenderTarget[y.id]),Vs.upload(N,ua(Lt),Qe,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vs.upload(N,ua(Lt),Qe,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&re.setValue(N,"center",k.center),re.setValue(N,"modelViewMatrix",k.modelViewMatrix),re.setValue(N,"normalMatrix",k.normalMatrix),re.setValue(N,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ne=Y.uniformsGroups;for(let bn=0,An=Ne.length;bn<An;bn++){const fa=Ne[bn];U.update(fa,He),U.bind(fa,He)}}return He}function ph(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function mh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,B,$){et.get(y.texture).__webglTexture=B,et.get(y.depthTexture).__webglTexture=$;const Y=et.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,B){const $=et.get(y);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,$=0){L=y,A=B,w=$;let Y=!0,k=null,ft=!1,vt=!1;if(y){const wt=et.get(y);if(wt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(wt.__hasExternalTextures)b.rebindTextures(y,et.get(y.texture).__webglTexture,et.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Rt=y.depthTexture;if(wt.__boundDepthTexture!==Rt){if(Rt!==null&&et.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(vt=!0);const Ot=et.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?k=Ot[B][$]:k=Ot[B],ft=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?k=et.get(y).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[$]:k=Ot,R.copy(y.viewport),X.copy(y.scissor),G=y.scissorTest}else R.copy(at).multiplyScalar(C).floor(),X.copy(Mt).multiplyScalar(C).floor(),G=bt;if(Ct.bindFramebuffer(N.FRAMEBUFFER,k)&&Y&&Ct.drawBuffers(y,k),Ct.viewport(R),Ct.scissor(X),Ct.setScissorTest(G),ft){const wt=et.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,$)}else if(vt){const wt=et.get(y.texture),Ft=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.__webglTexture,$||0,Ft)}E=-1},this.readRenderTargetPixels=function(y,B,$,Y,k,ft,vt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=et.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){Ct.bindFramebuffer(N.FRAMEBUFFER,At);try{const wt=y.texture,Ft=wt.format,Ot=wt.type;if(!Vt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-Y&&$>=0&&$<=y.height-k&&N.readPixels(B,$,Y,k,Nt.convert(Ft),Nt.convert(Ot),ft)}finally{const wt=L!==null?et.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,B,$,Y,k,ft,vt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=et.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){const wt=y.texture,Ft=wt.format,Ot=wt.type;if(!Vt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=y.width-Y&&$>=0&&$<=y.height-k){Ct.bindFramebuffer(N.FRAMEBUFFER,At);const Rt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Rt),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(B,$,Y,k,Nt.convert(Ft),Nt.convert(Ot),0);const Yt=L!==null?et.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,Yt);const ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await eu(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Rt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.deleteBuffer(Rt),N.deleteSync(ie),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,B=null,$=0){y.isTexture!==!0&&(Yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1]);const Y=Math.pow(2,-$),k=Math.floor(y.image.width*Y),ft=Math.floor(y.image.height*Y),vt=B!==null?B.x:0,At=B!==null?B.y:0;b.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,vt,At,k,ft),Ct.unbindTexture()},this.copyTextureToTexture=function(y,B,$=null,Y=null,k=0){y.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],B=arguments[2],k=arguments[3]||0,$=null);let ft,vt,At,wt,Ft,Ot,Rt,Yt,ie;const se=y.isCompressedTexture?y.mipmaps[k]:y.image;$!==null?(ft=$.max.x-$.min.x,vt=$.max.y-$.min.y,At=$.isBox3?$.max.z-$.min.z:1,wt=$.min.x,Ft=$.min.y,Ot=$.isBox3?$.min.z:0):(ft=se.width,vt=se.height,At=se.depth||1,wt=0,Ft=0,Ot=0),Y!==null?(Rt=Y.x,Yt=Y.y,ie=Y.z):(Rt=0,Yt=0,ie=0);const be=Nt.convert(B.format),jt=Nt.convert(B.type);let Lt;B.isData3DTexture?(b.setTexture3D(B,0),Lt=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(b.setTexture2DArray(B,0),Lt=N.TEXTURE_2D_ARRAY):(b.setTexture2D(B,0),Lt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const an=N.getParameter(N.UNPACK_ROW_LENGTH),Kt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),He=N.getParameter(N.UNPACK_SKIP_PIXELS),ri=N.getParameter(N.UNPACK_SKIP_ROWS),Le=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot);const zi=y.isDataArrayTexture||y.isData3DTexture,re=B.isDataArrayTexture||B.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Qe=et.get(y),Hi=et.get(B),Ne=et.get(Qe.__renderTarget),bn=et.get(Hi.__renderTarget);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let An=0;An<At;An++)zi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.get(y).__webglTexture,k,Ot+An),y.isDepthTexture?(re&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.get(B).__webglTexture,k,ie+An),N.blitFramebuffer(wt,Ft,ft,vt,Rt,Yt,ft,vt,N.DEPTH_BUFFER_BIT,N.NEAREST)):re?N.copyTexSubImage3D(Lt,k,Rt,Yt,ie+An,wt,Ft,ft,vt):N.copyTexSubImage2D(Lt,k,Rt,Yt,ie+An,wt,Ft,ft,vt);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else re?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Lt,k,Rt,Yt,ie,ft,vt,At,be,jt,se.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Lt,k,Rt,Yt,ie,ft,vt,At,be,se.data):N.texSubImage3D(Lt,k,Rt,Yt,ie,ft,vt,At,be,jt,se):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,Rt,Yt,ft,vt,be,jt,se.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,Rt,Yt,se.width,se.height,be,se.data):N.texSubImage2D(N.TEXTURE_2D,k,Rt,Yt,ft,vt,be,jt,se);N.pixelStorei(N.UNPACK_ROW_LENGTH,an),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,He),N.pixelStorei(N.UNPACK_SKIP_ROWS,ri),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le),k===0&&B.generateMipmaps&&N.generateMipmap(Lt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(y,B,$=null,Y=null,k=0){return y.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],B=arguments[3],k=arguments[4]||0),Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,B,$,Y,k)},this.initRenderTarget=function(y){et.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),Ct.unbindTexture()},this.resetState=function(){A=0,w=0,L=null,Ct.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Pc extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dg extends is{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ul=new ce,Oo=new Ko,Ls=new nr,Ds=new V;class fg extends Pe{constructor(t=new rn,e=new dg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=r,t.ray.intersectsSphere(Ls)===!1)return;ul.copy(s).invert(),Oo.copy(t.ray).applyMatrix4(ul);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Ds.fromBufferAttribute(d,p),dl(Ds,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Ds.fromBufferAttribute(d,g),dl(Ds,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dl(n,t,e,i,s,r,o){const a=Oo.distanceSqToPoint(n);if(a<e){const l=new V;Oo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class pg extends ye{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class mg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fl(){return performance.now()}class pl{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gg extends si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);const ml={type:"change"},Qo={type:"start"},Lc={type:"end"},Is=new Ko,gl=new In,_g=Math.cos(70*Qh.DEG2RAD),ue=new V,we=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kr=1e-6;class xg extends gg{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new sn,this._lastTargetPosition=new V,this._quat=new sn().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pl,this._sphericalDelta=new pl,this._scale=1,this._panOffset=new V,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new V,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Mg.bind(this),this._onPointerDown=vg.bind(this),this._onPointerUp=Sg.bind(this),this._onContextMenu=Rg.bind(this),this._onMouseWheel=Tg.bind(this),this._onKeyDown=bg.bind(this),this._onTouchStart=Ag.bind(this),this._onTouchMove=wg.bind(this),this._onMouseDown=yg.bind(this),this._onMouseMove=Eg.bind(this),this._interceptControlDown=Cg.bind(this),this._interceptControlUp=Pg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ml),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;ue.copy(e).sub(this.target),ue.applyQuaternion(this._quat),this._spherical.setFromVector3(ue),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=we:i>Math.PI&&(i-=we),s<-Math.PI?s+=we:s>Math.PI&&(s-=we),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ue.setFromSpherical(this._spherical),ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ue.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Is.origin.copy(this.object.position),Is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Is.direction))<_g?this.object.lookAt(this.target):(gl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Is.intersectPlane(gl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kr||this._lastTargetPosition.distanceToSquared(this.target)>kr?(this.dispatchEvent(ml),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?we/60*this.autoRotateSpeed*t:we/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ue.setFromMatrixColumn(e,0),ue.multiplyScalar(-t),this._panOffset.add(ue)}_panUp(t,e){this.screenSpacePanning===!0?ue.setFromMatrixColumn(e,1):(ue.setFromMatrixColumn(e,0),ue.crossVectors(this.object.up,ue)),ue.multiplyScalar(t),this._panOffset.add(ue)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ue.copy(s).sub(this.target);let r=ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(we*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-we*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(we*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-we*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function vg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Mg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Sg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lc),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yg(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case Ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case Ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Qo)}function Eg(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Tg(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(Qo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Lc))}function bg(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ag(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Qo)}function wg(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function Rg(n){this.enabled!==!1&&n.preventDefault()}function Cg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lg(n){let t=n>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Dg(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}const Tn=n=>Lg(typeof n=="string"?Dg(n):n),Jn=(n,t,e)=>t+(e-t)*n(),pn=(n,t,e)=>Math.floor(Jn(n,t,e+1));function ae(n,t){const e=t.length,i=t[0]?.length??0;for(const s of t)if(s.length!==i)throw new Error(`glyph "${n}": ragged row (${s.length} != ${i})`);return{name:n,w:i,h:e,rows:t}}const Bo=[ae("ARROW_UP",["..#..",".###.","##.##","..#..","..#..","..#..","..#.."]),ae("ARROW_DOWN",["..#..","..#..","..#..","..#..","##.##",".###.","..#.."]),ae("DIAMOND",["..#..",".#.#.","#...#","#...#","#...#",".#.#.","..#.."]),ae("CROSS_X",["#...#",".#.#.","..#..","..#..","..#..",".#.#.","#...#"]),ae("SQUARE",["#####","#...#","#...#","#...#","#...#","#...#","#####"]),ae("PLUS",["..#..","..#..","..#..","#####","..#..","..#..","..#.."]),ae("TRIANGLE",["..#..","..#..",".#.#.",".#.#.","#...#","#...#","#####"]),ae("ESS",[".####","#....","#....",".###.","....#","....#","####."]),ae("ZED",["#####","....#","...#.","..#..",".#...","#....","#####"]),ae("H_BAR",["#...#","#...#","#...#","#####","#...#","#...#","#...#"]),ae("VEE",["#...#","#...#",".#.#.",".#.#.",".#.#.","..#..","..#.."]),ae("TEE",["#####","..#..","..#..","..#..","..#..","..#..","..#.."]),ae("ELL",["#....","#....","#....","#....","#....","#....","#####"]),ae("KAY",["#...#","#..#.","#.#..","##...","#.#..","#..#.","#...#"]),ae("STAR",["..#..","#.#.#",".###.","#####",".###.","#.#.#","..#.."])];ae("B0",["##","..","..","##"]),ae("B1",["#.","#.","#.","#."]),ae("B2",[".#",".#",".#",".#"]),ae("B3",["##","##","..",".."]),ae("B4",["..","..","##","##"]),ae("B5",["#.",".#","#.",".#"]);function Ig(n){const t=[];for(const e of n.rows)for(const i of e)t.push(i==="#");return t}function Dc(n){return Ig(n).reduce((t,e)=>t+(e?1:0),0)}function Ug(n){const t=[];for(let e=0;e<n.h;e++){const i=n.rows[e];for(let s=0;s<n.w;s++)i[s]==="#"&&t.push({col:s,row:e})}return t}function Ic(n){return Ug(n).map(({col:t,row:e})=>({x:t-(n.w-1)/2,y:(n.h-1)/2-e}))}const _l=(n,t,e)=>t>=0&&e>=0&&t<n.w&&e<n.h&&n.rows[e][t]==="#";function Ng(n){const t=[];for(let e=-1;e<=n.h;e++)for(let i=-1;i<=n.w;i++){if(_l(n,i,e))continue;let s=!1;for(let r=-1;r<=1&&!s;r++)for(let o=-1;o<=1;o++)if((r||o)&&_l(n,i+o,e+r)){s=!0;break}s&&t.push({x:i-(n.w-1)/2,y:(n.h-1)/2-e})}return t}const xl=(n,t)=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]],vl=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Qn=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],ei=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],ko=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Fg=n=>Math.sqrt(ei(n,n));function ni(n){const t=Fg(n);return t>1e-12?Qn(n,1/t):[0,0,1]}const Og=(n,t)=>Math.acos(Math.max(-1,Math.min(1,ei(ni(n),ni(t))))),js=(n,t)=>Og(n,t)*180/Math.PI;function Uc(n){const t=ni(n),e=Math.abs(t[2])<.9?[0,0,1]:[1,0,0],i=ni(ko(t,e)),s=ko(t,i);return[i,s]}function rr(n){const t=2*n()-1,e=2*Math.PI*n(),i=Math.sqrt(Math.max(0,1-t*t));return[i*Math.cos(e),i*Math.sin(e),t]}function Bg(n,t){return Qn(rr(n),t*Math.cbrt(n()))}function Ml(n,t,e){const i=ni(t),s=Math.cos(e),r=Math.sin(e),o=ko(i,n),a=ei(i,n)*(1-s);return[n[0]*s+o[0]*r+i[0]*a,n[1]*s+o[1]*r+i[1]*a,n[2]*s+o[2]*r+i[2]*a]}const Nc={1:{M:60,K:12,H:0,L:1,thetaLockDeg:6,tRun:60,tSweep:null,drift:!1},2:{M:90,K:14,H:2,L:1,thetaLockDeg:5,tRun:60,tSweep:12,drift:!1},3:{M:120,K:16,H:4,L:2,thetaLockDeg:4,tRun:75,tSweep:10,drift:!1},4:{M:150,K:18,H:6,L:2,thetaLockDeg:3.5,tRun:75,tSweep:8,drift:!0},5:{M:200,K:20,H:8,L:3,thetaLockDeg:3,tRun:90,tSweep:7,drift:!0}},ve={glyphScale:.15,depthMin:.3,depthMax:1,depthScale:.875,noiseRadius:.9,defaultViewDir:[0,0,1],minAxisFromViewDeg:15,minAxisSeparationDeg:35,checkViewpoints:400,checkSkipDeg:30,coherenceSigmaCells:1,coherenceThreshold:.7,maxBoardRerolls:24};function kg(n,t){const e=t.slice();for(let i=e.length-1;i>0;i--){const s=Math.floor(n()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}function zg(n,t,e){const i=Bo.filter(l=>!e.has(l.name)),r=(i.length?i:Bo).map(l=>({g:l,d:Math.abs(Dc(l)-t)})),o=Math.min(...r.map(l=>l.d)),a=r.filter(l=>l.d===o).map(l=>l.g);return a[Math.floor(n()*a.length)]}function Hg(n,t){for(let e=0;e<1e3;e++){const i=rr(n);if(!(js(i,ve.defaultViewDir)<ve.minAxisFromViewDeg)&&!t.some(s=>js(i,s)<ve.minAxisSeparationDeg))return i}throw new Error("pickAxis: could not satisfy separation constraints")}function Sl(n,t,e,i,s){const r=(n()<.5?-1:1)*Jn(n,ve.depthMin,ve.depthMax)*ve.depthScale;return xl(xl(Qn(e,t.x*ve.glyphScale),Qn(i,t.y*ve.glyphScale)),Qn(s,r))}function Fc(n,t,e){const i=Ic(t),s=i.length;if(s===0||n.length<s)return 0;const[r,o]=Uc(e),a=ve.glyphScale,l=[],c=[],h=[],d=[];let f=0,m=0,g=0,_=0;for(let L=0;L<s;L++){const E=i[L],S=n[L].pos,R=E.x*a,X=E.y*a,G=ei(S,r),Q=ei(S,o);l.push(R),c.push(X),h.push(G),d.push(Q),f+=R,m+=X,g+=G,_+=Q}f/=s,m/=s,g/=s,_/=s;let p=0,u=0;for(let L=0;L<s;L++){const E=l[L]-f,S=c[L]-m,R=h[L]-g,X=d[L]-_;p+=E*R+S*X,u+=E*X-S*R}const M=Math.atan2(u,p),T=Math.cos(M),x=Math.sin(M);let D=0;for(let L=0;L<s;L++){const E=l[L]-f,S=c[L]-m,R=T*E-x*S,X=x*E+T*S,G=R-(h[L]-g),Q=X-(d[L]-_);D+=G*G+Q*Q}const A=Math.sqrt(D/s),w=ve.glyphScale*ve.coherenceSigmaCells;return Math.exp(-((A/w)**2))}function Vg(n,t,e,i){let s=0;for(let r=0;r<ve.checkViewpoints;r++){const o=rr(i);if(js(o,e)<ve.checkSkipDeg)continue;const a=Fc(n,t,o);a>s&&(s=a)}return s}function Gg(n,t){const e=Nc[n],i=Tn(`${t}:constellation:${n}`);for(let s=1;s<=ve.maxBoardRerolls;s++){const r=[],o=[],a=[],l=new Set,c=[];for(let g=0;g<e.L;g++){const _=Hg(i,c);c.push(_);const p=zg(i,e.K,l);l.add(p.name),o.push(p);const[u,M]=Uc(_);for(const x of Ic(p))a.push({pos:Sl(i,x,u,M,_),pop:"SIGNAL",lock:g});const T=kg(i,Ng(p));for(let x=0;x<Math.min(e.H,T.length);x++)a.push({pos:Sl(i,T[x],u,M,_),pop:"TRIP",lock:g});r.push({index:g,axis:_,glyph:p.name,signalCount:Dc(p)})}const h=e.M-a.length;if(h<0)continue;let d=0,f=!0;for(let g=0;g<e.L;g++){const _=a.filter(u=>u.pop==="SIGNAL"&&u.lock===g),p=Vg(_,o[g],c[g],Tn(`${t}:check:${n}:${g}`));if(p>d&&(d=p),p>=ve.coherenceThreshold){f=!1;break}}if(!f)continue;const m=a.slice();for(let g=0;g<h;g++)m.push({pos:Bg(i,ve.noiseRadius),pop:"NOISE",lock:-1});return{seed:t,difficulty:n,params:e,points:m,locks:r,genStats:{boardAttempts:s,noiseRerolls:0,maxOffAxisCoherence:d}}}throw new Error(`generateBoard: failed to produce a unique board after ${ve.maxBoardRerolls} attempts (seed=${t}, D${n})`)}const Wg=1,Xg=.1;class $g{board;tRun;tSweep;drift;maxTrips=3;phase="PLAN";timeLeft;trips=0;sweepT=0;sweepCount=0;extracted;constructor(t){this.board=t,this.tRun=t.params.tRun,this.tSweep=t.params.tSweep,this.drift=t.params.drift,this.timeLeft=this.tRun,this.extracted=t.locks.map(()=>new Set)}lockDone(t){return this.extracted[t].size>=this.board.locks[t].signalCount}allDone(){return this.board.locks.every((t,e)=>this.lockDone(e))}extractedCount(t){return this.extracted[t].size}get over(){return this.phase==="WON"||this.phase==="LOST_SOFT"||this.phase==="LOST_CRIT"}select(t,e){if(this.over||e<0)return"ignored";const i=this.board.points[t];if(!i)return"ignored";if(this.phase==="PLAN"&&(this.phase="RUN"),i.pop==="SIGNAL"&&i.lock===e){const s=this.extracted[e];return s.has(t)?"ignored":(s.add(t),this.lockDone(e)?this.allDone()?(this.phase="WON","won"):"lockDone":"extract")}return i.pop==="TRIP"?(this.trips+=1,this.timeLeft=Math.max(0,this.timeLeft-Xg*this.tRun),this.trips>=this.maxTrips?this.phase="LOST_CRIT":this.timeLeft<=0&&(this.phase="LOST_SOFT"),"trip"):(this.timeLeft=Math.max(0,this.timeLeft-Wg),this.timeLeft<=0&&(this.phase="LOST_SOFT"),"dud")}tick(t,e,i){if(this.phase!=="RUN")return{wrapped:!1};if(this.timeLeft-=t,this.timeLeft<=0)return this.timeLeft=0,this.phase="LOST_SOFT",{wrapped:!1};if(!this.tSweep)return{wrapped:!1};if(this.sweepT+=t/this.tSweep,this.sweepT<1)return{wrapped:!1};if(this.sweepT-=1,this.sweepCount+=1,i>=0&&this.extracted[i].size>0&&!this.lockDone(i)&&!e){const r=this.extracted[i],o=r.values().next().value;o!==void 0&&r.delete(o)}return{wrapped:!0}}result(){const t=this.board.locks.filter((i,s)=>this.lockDone(s)).map(i=>i.glyph),e=Math.max(0,this.timeLeft)+(this.maxTrips-this.trips);return{outcome:this.phase,margin:e,timeUsed:this.tRun-this.timeLeft,trips:this.trips,keys:t}}}const Gs=(n,t)=>{const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},Yg=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t));function ta(n,t,e,i,s){const r=Math.sin(t),o=Math.cos(t),a=Math.sin(n),l=Math.cos(n);return(c,h,d)=>{const f=c*l+d*a,m=-c*a+d*l,g=h*o-m*r,_=h*r+m*o;return[e+f*s,i-g*s,_]}}function qg(n,t,e,i){const s=2*t*e+i,r=n%s,o=new Array(t).fill(0);let a=-1;if(r<2*t*e){const l=Math.floor(r/e),c=(r-l*e)/e,h=1-(1-Math.min(1,c/.7))**3;if(l<t){for(let d=0;d<l;d++)o[d]=1;o[l]=h,a=l}else{const d=2*t-1-l;for(let f=0;f<d;f++)o[f]=1;o[d]=1-h,a=d}}return{amount:o,active:a}}function jg(n){const t=[];for(let e=0;e<n;e++){const i=Math.min(2,Math.floor(Gs(e,2.3)*3)),s=-1+.5*Math.min(3,Math.floor(Gs(e,5.9)*4)),r=Gs(e,7.7)<.5?1:-1;t.push({axis:i,lo:s,hi:s+.5,ang:r*Math.PI/2})}return t}const yl=jg(12);function Kg(n,t,e,i){let s=n,r=t,o=e,a=!1;for(let l=0;l<yl.length;l++){if(i.amount[l]<=0)continue;const c=yl[l],h=c.axis===0?s:c.axis===1?r:o;if(h<c.lo||h>=c.hi)continue;l===i.active&&(a=!0);const d=c.ang*i.amount[l],f=Math.cos(d),m=Math.sin(d);if(c.axis===0){const g=r*f-o*m;o=r*m+o*f,r=g}else if(c.axis===1){const g=s*f+o*m;o=-s*m+o*f,s=g}else{const g=s*f-r*m;r=s*m+r*f,s=g}}return[s,r,o,a]}function Zg(n,t,e,i){const r=ta(i*.5,.4+.06*Math.sin(i*.35),n,t,e),o=i*(.5+(1.7-.5)*4),a=e/11,l=[],c=6,h=12;for(let d=0;d<=c;d++){const f=-Math.PI/2+d/c*Math.PI,m=Math.cos(f),g=Math.sin(f),_=Math.max(1,Math.round(Math.abs(m)*h));for(let p=0;p<_;p++){const u=p/_*2*Math.PI,[M,T,x]=r(m*Math.cos(u),g,m*Math.sin(u)),D=(x+1)/2,A=Yg(u+i*.5,o),w=Math.exp(-(A*A)/.18)*Math.max(0,x);l.push({x:M,y:T,z:x,r:(.4+1*D+.8*w)*a,white:.62-.54*D,a:.6+.4*Math.min(1,w)})}}return l}function Jg(n,t,e,i){const s=ta(i*.55,.35+.1*Math.sin(i*.9),n,t,e),r=e/11,o=qg(i,12,.42,1.2),a=[],l=5,c=10;for(let h=0;h<=l;h++){const d=-Math.PI/2+h/l*Math.PI,f=Math.cos(d),m=Math.sin(d),g=Math.max(1,Math.round(Math.abs(f)*c));for(let _=0;_<g;_++){const p=_/g*2*Math.PI,[u,M,T,x]=Kg(f*Math.cos(p),m,f*Math.sin(p),o),[D,A,w]=s(u,M,T),L=(w+1)/2;a.push({x:D,y:A,z:w,r:(.4+1*L+(x?.4:0))*r,white:.62-.54*L-(x?.16:0),a:.85})}}return a}function Qg(n,t,e,i){const s=ta(i*.18,.38,n,t,1),r=e/11,o=[],a=6,l=11;for(let c=0;c<=a;c++){const h=-Math.PI/2+c/a*Math.PI,d=Math.cos(h),f=Math.sin(h),m=.62*Math.sin(i*2.1-c*.52)+.38*Math.sin(i*1.27+c*.83),g=e*(.9+.11*m),_=Math.max(1,Math.round(Math.abs(d)*l));for(let p=0;p<_;p++){const u=p/_*2*Math.PI,[M,T,x]=s(d*Math.cos(u)*g,f*g,d*Math.sin(u)*g),D=(x/e+1)/2,A=Math.max(0,m);o.push({x:M,y:T,z:x,r:(.4+1*D)*(1+.4*A)*r,white:.66-.56*D-.1*A,a:.8})}}return o}const t0={searching:Zg,listening:Qg,solving:Jg};function e0(n){return["searching","listening","solving"][Math.floor(Gs(n,3.7)*3)%3]}function Oc(n,t,e,i,s,r,o,a){const l=t0[t](e,i,s,r);l.sort((h,d)=>h.z-d.z);const c=1+.35*Math.max(0,a-1);for(const h of l){const d=Math.min(1,(h.a??1)*a);if(d<.02)continue;const f=Math.max(0,Math.min(1,1-h.white));n.fillStyle=`rgba(${Math.round(f*255*o[0])},${Math.round(f*255*o[1])},${Math.round(f*255*o[2])},${d})`,n.beginPath(),n.arc(h.x,h.y,Math.max(.35,h.r*c),0,Math.PI*2),n.fill()}}const n0=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)},i0=n=>{const t=Bo.find(e=>e.name===n);if(!t)throw new Error(`glyph ${n} not found`);return t},Us=30,s0=[93,202,165],El=[224,176,112],r0=[208,96,90],Tl=(n,t,e)=>`rgb(${Math.round(n[0]+(t[0]-n[0])*e)},${Math.round(n[1]+(t[1]-n[1])*e)},${Math.round(n[2]+(t[2]-n[2])*e)})`,bl=n=>n>.5?Tl(s0,El,(1-n)/.5):Tl(El,r0,Math.max(0,(.5-n)/.5)),o0=[.74,.82,.96],a0=[.44,.9,.74],l0=[.96,.6,.54],c0=1.6,Al=15,h0=3.5;function u0(n,t){const e=n.getContext("2d"),i=Math.min(2,window.devicePixelRatio||1),s=new V(0,0,0),r=1.12,o=.7,a=new rs(-1,1,1,-1,.01,100);a.position.set(0,0,4),a.lookAt(s);const l=new xg(a,n);l.enableDamping=!0,l.enablePan=!1,l.enableZoom=!1,l.target.copy(s);const c="http://www.w3.org/2000/svg",h="ui-monospace,SFMono-Regular,Menlo,monospace",d=(P,z)=>{const H=document.createElement(P);return H.style.cssText=z,document.body.appendChild(H),H},f=document.createElementNS(c,"svg");f.setAttribute("viewBox","0 0 220 130"),f.style.cssText="position:fixed;left:50%;bottom:14px;transform:translateX(-50%);width:220px;height:130px;pointer-events:none";const m=[];for(let P=0;P<Us;P++){const z=Math.PI*(1-P/(Us-1)),H=document.createElementNS(c,"circle");H.setAttribute("cx",String(110+96*Math.cos(z))),H.setAttribute("cy",String(120-96*Math.sin(z))),H.setAttribute("r","2.6"),H.setAttribute("fill","#2a2a34"),f.appendChild(H),m.push(H)}const g=document.createElementNS(c,"text");g.setAttribute("x","110"),g.setAttribute("y","112"),g.setAttribute("text-anchor","middle"),g.setAttribute("fill","#e8c06a"),g.setAttribute("style",`font:11px ${h};letter-spacing:.15em;opacity:0`),f.appendChild(g),t.skill>=1&&document.body.appendChild(f);const _=document.createElementNS(c,"svg");_.setAttribute("viewBox","0 0 48 48"),_.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:46px;height:46px;pointer-events:none";const p=document.createElementNS(c,"circle");p.setAttribute("cx","24"),p.setAttribute("cy","24"),p.setAttribute("r","21"),p.setAttribute("fill","none"),p.setAttribute("stroke",bl(1)),p.setAttribute("stroke-width","1.6"),_.appendChild(p),document.body.appendChild(_);const u=d("div",`position:fixed;top:10px;right:12px;display:flex;gap:6px;font:13px ${h};color:#5a5a64;pointer-events:none`),M=[0,1,2].map(()=>{const P=document.createElement("span");return P.textContent="✕",u.appendChild(P),P}),T=d("div",`position:fixed;left:50%;top:30px;transform:translateX(-50%);font:11px ${h};color:#8fd0b6;pointer-events:none;opacity:0`),x=d("div",`position:fixed;left:12px;bottom:12px;font:11px ${h};color:#55555f;pointer-events:none`),D=d("div","position:fixed;width:16px;height:16px;border:1px solid #6fe0b8;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .1s"),A=d("div","position:fixed;inset:0;pointer-events:none;box-shadow:inset 0 0 120px 20px #d0403a;opacity:0;transition:opacity .3s"),w=d("div",`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${h};text-align:center;pointer-events:none`);let L,E,S,R,X,G,Q,nt,K=[],it=5,C,tt=Tn("drift"),J=!1,at=!1,Mt=-1e9;function bt(P,z){L=Gg(P,z),C=new $g(L),tt=Tn(`${z}:drift`),it=Nc[P].thetaLockDeg;const H=L.points.length;E=new Float32Array(H*3),L.points.forEach((W,lt)=>{E[lt*3]=W.pos[0],E[lt*3+1]=W.pos[1],E[lt*3+2]=W.pos[2]}),S=E.slice(),R=new Float32Array(H),X=new Float32Array(H*2),G=new Uint8Array(H),Q=new Uint8Array(H),nt=new Float32Array(H),K=L.locks.map(W=>{const lt=[],ot=[],dt=new Map;return L.points.forEach((Tt,rt)=>{Tt.pop==="SIGNAL"&&Tt.lock===W.index&&(lt.push(rt),ot.push(Tt),Q[rt]=1,dt.set(rt,vl(Tt.pos,Qn(W.axis,ei(Tt.pos,W.axis)))))}),{axis:W.axis,glyph:i0(W.glyph),signalIdx:lt,signalPts:ot,flat:dt,coherence:0}}),x.textContent=`D${P} · ${z} · ${L.locks.length} lock(s) · orbit to align · click to extract · R`,w.style.display="none",J=!1,at=!1}bt(t.difficulty,t.seed);function I(){const P=window.innerWidth,z=window.innerHeight;n.width=Math.round(P*i),n.height=Math.round(z*i),n.style.width=P+"px",n.style.height=z+"px";const H=P/z;a.left=-r*H,a.right=r*H,a.top=r,a.bottom=-r,a.updateProjectionMatrix()}window.addEventListener("resize",I),I();function O(P){const z=K[P];if(!z)return;const H=2*Math.PI/180*tt(),W=rr(tt);z.axis=ni(Ml(z.axis,W,H)),L.points.forEach((lt,ot)=>{lt.lock===P&&(lt.pos=Ml(lt.pos,W,H),E[ot*3]=lt.pos[0],E[ot*3+1]=lt.pos[1],E[ot*3+2]=lt.pos[2])}),z.flat.clear();for(const lt of z.signalIdx){const ot=L.points[lt].pos;z.flat.set(lt,vl(ot,Qn(z.axis,ei(ot,z.axis))))}}let j=0,Z=0,st=-1,ht=-1,ut=-1;const yt=new V,Et=new V;function Gt(P,z){const H=n.getBoundingClientRect(),W=P-H.left,lt=z-H.top;let ot=-1,dt=676,Tt=-1,rt=400;for(let pt=0;pt<G.length;pt++){if(!G[pt])continue;const St=X[pt*2]-W,Pt=X[pt*2+1]-lt,xt=St*St+Pt*Pt,zt=L.points[pt];zt.pop==="SIGNAL"&&zt.lock===ut&&!C.extracted[ut]?.has(pt)&&xt<dt&&(dt=xt,ot=pt),xt<rt&&(rt=xt,Tt=pt)}return ot>=0?ot:Tt}n.addEventListener("pointerdown",P=>{j=P.clientX,Z=P.clientY}),n.addEventListener("pointermove",P=>{st=P.clientX,ht=P.clientY}),n.addEventListener("pointerup",P=>{if(Math.hypot(P.clientX-j,P.clientY-Z)>5||!J||C.over||ut<0)return;const H=Gt(P.clientX,P.clientY);if(H<0)return;C.select(H,ut)==="trip"&&(nt[H]=.5,A.style.opacity="0.9",setTimeout(()=>A.style.opacity="0",60))});const N=new V,me=new sn,kt=new sn,Vt=new sn,Ct=new V;function Zt(){const P=C.result();let z="#8fd0b6",H="",W="";C.phase==="WON"?(H="◆ EXTRACTED",W=`keys: ${P.keys.join(" · ")}
margin ${P.margin.toFixed(0)} · ${P.trips} strike(s)`):C.phase==="LOST_CRIT"?(z="#d0605a",H="⚠ ALARM",W="intrusion traced — three tripwires"):(z="#e0b070",H="⌛ SIGNAL LOST",W="the run timed out"),w.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${z}">${H}</div><div style="font-size:12px;color:#9a9aa6;white-space:pre-line">${W}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,w.style.display="flex"}let et=performance.now(),b=0;function v(){const P=performance.now(),z=P/1e3,H=Math.min(.05,(P-et)/1e3);et=P,l.update(),a.updateMatrixWorld();const W=a.position,lt=ni([W.x-s.x,W.y-s.y,W.z-s.z]);let ot=0;ut=-1;let dt=180;K.forEach((F,q)=>{F.coherence=Fc(F.signalPts,F.glyph,lt),F.coherence>ot&&(ot=F.coherence,ut=q);const ct=js(lt,F.axis);ct<dt&&(dt=ct)}),S.set(E),R.fill(0);let Tt=0;for(const F of K){const q=n0(.12,.9,F.coherence);if(q>Tt&&(Tt=q),!(q<=.001))for(const ct of F.signalIdx){const mt=F.flat.get(ct),Ut=E[ct*3],Jt=E[ct*3+1],Qt=E[ct*3+2];S[ct*3]=Ut+(mt[0]-Ut)*q,S[ct*3+1]=Jt+(mt[1]-Jt)*q,S[ct*3+2]=Qt+(mt[2]-Qt)*q,R[ct]=q}}if(Tt>.001){const F=.85*Tt;for(let q=0;q<R.length;q++)Q[q]||(R[q]=-F)}const rt=J&&ot>.6,{wrapped:pt}=C.tick(H,rt,ut);if(pt&&C.drift&&ut>=0&&O(ut),C.phase==="RUN"&&C.tSweep){const F=-1+2*C.sweepT,q=.14;for(let ct=0;ct<R.length;ct++){const mt=Math.abs(S[ct*3+1]-F);mt<q&&(R[ct]=R[ct]+(1-mt/q)*.7)}}let St=-1;J&&!C.over&&st>=0&&(St=Gt(st,ht),St>=0&&(R[St]=R[St]+.5));const Pt=W.distanceTo(s),xt=Math.max(0,1-(z-Mt)/o),zt=L.points.length,Nt=[],qt=new Float32Array(zt);for(let F=0;F<zt;F++)Et.set(S[F*3],S[F*3+1],S[F*3+2]).applyMatrix4(a.matrixWorldInverse),qt[F]=Math.max(0,Math.min(1,(-Et.z-(Pt-1))/2)),yt.set(S[F*3],S[F*3+1],S[F*3+2]).project(a),X[F*2]=(yt.x*.5+.5)*window.innerWidth,X[F*2+1]=(-yt.y*.5+.5)*window.innerHeight,G[F]=1,Nt.push(F),nt[F]>0&&(nt[F]=Math.max(0,nt[F]-H));Nt.sort((F,q)=>qt[q]-qt[F]);const U=new Set;for(const F of C.extracted)for(const q of F)U.add(q);e.setTransform(i,0,0,i,0,0),e.clearRect(0,0,window.innerWidth,window.innerHeight);for(const F of Nt){const q=qt[F],ct=R[F],mt=U.has(F);let Ut=(1-.55*q)*(ct<0?1+ct:1);if(ct>0&&(Ut+=ct*.95),mt&&(Ut+=.4),Ut<.05)continue;let Jt=(Al+(h0-Al)*q)*(1+.28*Math.max(0,ct)+(mt?.2:0));Jt=Math.max(2.2,Jt);let Qt=mt?a0:o0;if(nt[F]>0)Qt=l0;else if(xt>0&&ct>0){const Xt=Math.min(1,ct)*xt;Qt=[Qt[0]+(.95-Qt[0])*Xt,Qt[1]+(.82-Qt[1])*Xt,Qt[2]+(.42-Qt[2])*Xt]}Oc(e,e0(F),X[F*2],X[F*2+1],Jt,z*c0+F*.7,Qt,Ut)}if(!J&&dt<it&&!C.over?J=!0:J&&dt>it*1.6&&(J=!1),J&&ut>=0){const F=W.distanceTo(s);N.set(lt[0],lt[1],lt[2]),Ct.set(...K[ut].axis),kt.setFromUnitVectors(N,Ct),me.copy(Vt).slerp(kt,.16),N.applyQuaternion(me),a.position.copy(s).addScaledVector(N,F)}if(J&&!at&&(Mt=z),at=J,J&&!C.over&&St>=0){const F=n.getBoundingClientRect();D.style.left=`${F.left+X[St*2]}px`,D.style.top=`${F.top+X[St*2+1]}px`,D.style.borderColor=L.points[St]?.pop==="TRIP"?"#d0605a":"#6fe0b8",D.style.opacity="1"}else J&&!C.over&&st>=0?(D.style.left=`${st}px`,D.style.top=`${ht}px`,D.style.borderColor="#44444c",D.style.opacity="1"):D.style.opacity="0";if(t.skill>=1){const F=Math.round(ot*Us);for(let q=0;q<Us;q++)m[q].setAttribute("fill",q<F?J?"#e8c06a":"#5dcaa5":"#2a2a34");J&&ut>=0?(g.textContent=`⟡ ${K[ut].glyph.name}`,g.style.opacity="1"):g.style.opacity="0"}const gt=Math.max(0,C.timeLeft/C.tRun);p.setAttribute("r",String(3+18*gt)),p.setAttribute("stroke",bl(gt)),M.forEach((F,q)=>F.style.color=q<C.trips?"#d0605a":"#3a3a44"),J&&ut>=0&&!C.over?(T.textContent=`EXTRACT ${C.extractedCount(ut)} / ${L.locks[ut].signalCount}`,T.style.opacity="1"):T.style.opacity="0",C.over&&w.style.display==="none"&&Zt(),b=requestAnimationFrame(v)}return v(),{regenerate(P,z){bt(P,z)},alignLock(P){const z=K[P];if(!z)return;const H=a.position.distanceTo(s);Ct.set(...z.axis),a.position.copy(s).addScaledVector(Ct,H),l.update()},debugExtract(P,z){const H=K[P];if(!H)return;let W=0;for(const lt of H.signalIdx){if(W++>=z)break;C.select(lt,P)}},debugSolve(){for(let P=0;P<K.length;P++)for(const z of K[P].signalIdx)C.select(z,P)},debugTime(P){C.phase="RUN",C.timeLeft=Math.max(0,P)*C.tRun},dispose(){cancelAnimationFrame(b),window.removeEventListener("resize",I),l.dispose(),[f,_,u,T,x,D,A,w].forEach(P=>P.remove())}}}const Bc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Oi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const d0=new rs(-1,1,1,-1,0,1);class f0 extends rn{constructor(){super(),this.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Sn([0,2,0,0,2,0],2))}}const p0=new f0;class ea{constructor(t){this._mesh=new nn(p0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,d0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class m0 extends Oi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Qi.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ea(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wl extends Oi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class g0 extends Oi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class kc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new It);this._width=i.width,this._height=i.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new m0(Bc),this.copyPass.material.blending=xn,this.clock=new mg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wl!==void 0&&(o instanceof wl?i=!0:o instanceof g0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zc extends Oi{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $t}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const _0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $t(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ii extends Oi{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new $t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Je(r,o,{type:vn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Je(r,o,{type:vn});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=_0;this.highPassUniforms=Qi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new It(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Bc;this.copyUniforms=Qi.clone(h.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$s,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $t,this.oldClearAlpha=1,this.basic=new Zo,this.fsQuad=new ea(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ii.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ii.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ii.BlurDirectionX=new It(1,0);ii.BlurDirectionY=new It(0,1);const x0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Hc extends Oi{constructor(){super();const t=x0;this.uniforms=Qi.clone(t.uniforms),this.material=new pg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ea(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ql&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const v0=`
  attribute vec3 color;
  attribute float size;
  attribute float alpha;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = color;
    vAlpha = alpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * uPixelRatio;
    gl_Position = projectionMatrix * mv;
  }
`,M0=`
  precision mediump float;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float a = (1.0 - smoothstep(0.44, 0.5, d)) * vAlpha;
    if (a <= 0.0) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;class Vc{points;material;geo;pos;col;sz;al;cap;n=0;constructor(t,e={}){this.cap=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.sz=new Float32Array(t),this.al=new Float32Array(t),this.geo=new rn,this.geo.setAttribute("position",new _e(this.pos,3)),this.geo.setAttribute("color",new _e(this.col,3)),this.geo.setAttribute("size",new _e(this.sz,1)),this.geo.setAttribute("alpha",new _e(this.al,1)),this.material=new ye({uniforms:{uPixelRatio:{value:1}},vertexShader:v0,fragmentShader:M0,transparent:!0,depthTest:!1,depthWrite:!1,blending:e.additive?$s:Zn}),this.points=new fg(this.geo,this.material),this.points.frustumCulled=!1}begin(){this.n=0}grow(){const t=this.cap*2,e=(i,s)=>{const r=new Float32Array(t*s);return r.set(i),r};this.pos=e(this.pos,3),this.col=e(this.col,3),this.sz=e(this.sz,1),this.al=e(this.al,1),this.cap=t,this.geo.setAttribute("position",new _e(this.pos,3)),this.geo.setAttribute("color",new _e(this.col,3)),this.geo.setAttribute("size",new _e(this.sz,1)),this.geo.setAttribute("alpha",new _e(this.al,1))}dot(t,e,i,s,r,o,a=1){this.n>=this.cap&&this.grow();const l=this.n++;this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=0,this.col[l*3]=i,this.col[l*3+1]=s,this.col[l*3+2]=r,this.sz[l]=o,this.al[l]=a}commit(t){this.material.uniforms.uPixelRatio.value=t,["position","color","size","alpha"].forEach(e=>{this.geo.getAttribute(e).needsUpdate=!0}),this.geo.setDrawRange(0,this.n)}dispose(){this.geo.dispose(),this.material.dispose()}}const S0={1:{nodes:8,maxRatingCritical:2,oneWay:0,tracerBase:1.6,alarms:0,spams:0,fog:!1,nukes:1,freezes:1},2:{nodes:10,maxRatingCritical:3,oneWay:0,tracerBase:1.4,alarms:0,spams:1,fog:!1,nukes:1,freezes:1},3:{nodes:12,maxRatingCritical:3,oneWay:1,tracerBase:1.2,alarms:1,spams:1,fog:!1,nukes:1,freezes:1},4:{nodes:14,maxRatingCritical:4,oneWay:2,tracerBase:1,alarms:1,spams:2,fog:!0,nukes:1,freezes:2},5:{nodes:16,maxRatingCritical:5,oneWay:3,tracerBase:.85,alarms:2,spams:2,fog:!0,nukes:1,freezes:1}},y0=n=>.8*n,Ks=(n,t)=>Math.max(.05,Math.min(.85,.05+.12*(n-t))),Ns=(n,t,e)=>n.a===t&&n.b===e||!n.oneWay&&n.a===e&&n.b===t,E0=(n,t,e)=>n+(t-n)*e,Rl=(n,t,e)=>Math.max(t,Math.min(e,n)),Ki={maxAttempts:100,pathMin:4,pathMax:7,cumDetectMax:.85};function T0(n,t){const e=pn(n,1,t);return n()<.5?Math.min(e,pn(n,1,t)):e}function b0(n,t,e,i){const s=new Array(i).fill(!1),r=[t];for(s[t]=!0;r.length;){const o=r.pop();if(o===e)return!0;for(const a of n){let l=-1;a.a===o?l=a.b:!a.oneWay&&a.b===o&&(l=a.a),l>=0&&!s[l]&&(s[l]=!0,r.push(l))}}return!1}function A0(n,t,e){const i=S0[n],s=Tn(`${t}:trace:${n}:${e}`),r=Math.min(pn(s,Ki.pathMin,Ki.pathMax),i.nodes-1),o=[],a=[],l=[];for(let _=0;_<r;_++){const p=_===0?"ENTRY":_===r-1?"REGISTRY":"DIR",u=p==="ENTRY"?1:p==="REGISTRY"?pn(s,1,Math.min(3,i.maxRatingCritical)):T0(s,i.maxRatingCritical),M=E0(-.85,.85,r===1?.5:_/(r-1)),T=Jn(s,-.12,.12);o.push({id:_,type:p,rating:u,pos:[M,T]}),l.push(_),_>0&&a.push({a:_-1,b:_,oneWay:!1})}let c=i.alarms,h=i.spams,d=r;for(;d<i.nodes;){const _=pn(s,1,r-1);let p="DIR";c>0&&s()<.45?(p="ALARM",c--):h>0&&s()<.45?(p="SPAM",h--):s()<.5&&(p="STORE");const u=p==="STORE"?pn(s,2,5):p==="DIR"?pn(s,1,5):pn(s,2,4),M=o[_],T=s()<.5?-1:1,x=Rl(M.pos[0]+Jn(s,-.18,.18),-.95,.95),D=Rl(M.pos[1]+T*Jn(s,.34,.62),-.9,.9),A=d++;if(o.push({id:A,type:p,rating:u,pos:[x,D]}),a.push({a:_,b:A,oneWay:!1}),s()<.3){const w=pn(s,1,A-1);w!==_&&!a.some(L=>L.a===A&&L.b===w||L.a===w&&L.b===A)&&a.push({a:w,b:A,oneWay:!1})}}if(i.oneWay>0){const _=a.filter(p=>p.a>=r||p.b>=r);for(let p=0;p<i.oneWay&&p<_.length;p++){const u=_[Math.floor(s()*_.length)];u.oneWay=!0}}const f=r-1;if(!b0(a,0,f,i.nodes))return null;let m=1;for(let _=1;_<r;_++)m*=1-Ks(o[_].rating,1);const g=1-m;return g>Ki.cumDetectMax?null:{seed:t,difficulty:n,params:i,nodes:o,edges:a,entry:0,registries:[f],criticalPath:l,genStats:{attempts:e,pathLen:r,cumulativeDetect:g}}}function w0(n,t){for(let e=1;e<=Ki.maxAttempts;e++){const i=A0(n,t,e);if(i)return i}throw new Error(`trace generateBoard: no valid board after ${Ki.maxAttempts} attempts (seed=${t}, D${n})`)}const R0=2.5,C0=2,P0=1.25,L0=.6,D0=10,I0=5,U0=.7;class N0{board;captureLevel;phase="PLAN";owner;captured=new Set;fortified=new Set;capturing=null;tracer=null;playerAt;moving=null;nukes;freezes;loot=0;trips=0;matchElapsed=0;alarmTriggered=!1;spamSlowUntil=-1;freezeUntil=-1;rng;constructor(t,e=0){this.board=t,this.captureLevel=1+e,this.nukes=t.params.nukes,this.freezes=t.params.freezes,this.owner=t.nodes.map(i=>i.id===t.entry?"P":"SYS"),this.captured.add(t.entry),this.playerAt=t.entry,this.rng=Tn(`${t.seed}:trace-roll:${t.difficulty}`)}get over(){return this.phase==="WON"||this.phase==="LOST_SOFT"||this.phase==="LOST_CRIT"}capturable(){const t=[];for(const e of this.board.nodes)this.owner[e.id]!=="P"&&this.adjacentToOwned(e.id)&&t.push(e.id);return t}adjacentToOwned(t){for(const e of this.captured)for(const i of this.board.edges)if(Ns(i,e,t))return!0;return!1}beginCapture(t){return this.over||this.capturing||this.owner[t]==="P"||!this.adjacentToOwned(t)?!1:(this.phase==="PLAN"&&(this.phase="RUN"),this.capturing={node:t,elapsed:0,total:y0(this.board.nodes[t].rating)},!0)}fortify(t){if(this.over||this.owner[t]!=="P"||this.fortified.has(t))return!1;this.phase==="PLAN"&&(this.phase="RUN"),this.fortified.add(t);const e=Ks(this.board.nodes[t].rating,this.captureLevel)/2;return this.rng()<e&&this.trigger(!1),!0}nuke(t){return this.over||this.nukes<=0||this.owner[t]==="P"||!this.adjacentToOwned(t)?!1:(this.phase==="PLAN"&&(this.phase="RUN"),this.nukes--,this.claim(t,!0),!0)}freeze(){return this.over||this.freezes<=0||!this.tracer?!1:(this.freezes--,this.freezeUntil=this.matchElapsed+I0,!0)}retreat(t){return this.phase!=="EXFIL"||this.moving||this.owner[t]!=="P"||!this.board.edges.some(e=>Ns(e,this.playerAt,t))?!1:(this.moving={to:t,elapsed:0,total:this.board.params.tracerBase*U0},!0)}retreatable(){if(this.phase!=="EXFIL")return[];const t=[];for(const e of this.board.nodes)this.owner[e.id]==="P"&&this.board.edges.some(i=>Ns(i,this.playerAt,e.id))&&t.push(e.id);return t}cancel(){this.over||(this.phase="LOST_SOFT")}claim(t,e){this.owner[t]="P",this.captured.add(t);const i=this.board.nodes[t].type;if(i==="STORE"&&this.loot++,i==="REGISTRY"){this.playerAt=t,this.phase="EXFIL",this.trigger(!1);return}if(e)return;const s=this.board.nodes[t].rating;let r=this.rng()<Ks(s,this.captureLevel);i==="SPAM"&&(r=!0,this.spamSlowUntil=this.matchElapsed+D0),r&&this.trigger(i==="ALARM")}trigger(t){if(this.trips++,t&&(this.alarmTriggered=!0),this.tracer)return;const e=this.board.registries[0];this.tracer={node:e,next:e,countdown:0},this.planTracerHop()}stepCost(t){const e=this.board.params.tracerBase,i=this.fortified.has(t)?R0:1,s=this.captured.has(t)?1:C0;return e*i*s}nextHop(t){const e=this.board.nodes.length,i=new Array(e).fill(1/0),s=new Array(e).fill(-1),r=new Array(e).fill(!1);i[t]=0;for(let a=0;a<e;a++){let l=-1,c=1/0;for(let h=0;h<e;h++)!r[h]&&i[h]<c&&(c=i[h],l=h);if(l<0)break;r[l]=!0;for(const h of this.board.edges){let d=-1;if(Ns(h,l,h.a===l?h.b:h.a)&&(d=h.a===l?h.b:h.a),d<0)continue;const f=i[l]+this.stepCost(d);f<i[d]&&(i[d]=f,s[d]=l===t?d:s[l])}}const o=this.board.entry;return!isFinite(i[o])||s[o]<0?null:{node:s[o],cost:this.stepCost(s[o])}}planTracerHop(){if(!this.tracer)return;const t=this.nextHop(this.tracer.node);if(!t){this.tracer.next=this.tracer.node,this.tracer.countdown=1/0;return}this.tracer.next=t.node,this.tracer.countdown=t.cost}tracerSpeed(){if(this.matchElapsed<this.freezeUntil)return 0;let t=1;return this.alarmTriggered&&(t*=P0),this.matchElapsed<this.spamSlowUntil&&(t*=L0),t}tick(t){if(!(this.phase!=="RUN"&&this.phase!=="EXFIL")){if(this.matchElapsed+=t,this.phase==="RUN"&&this.capturing&&(this.capturing.elapsed+=t,this.capturing.elapsed>=this.capturing.total)){const e=this.capturing.node;if(this.capturing=null,this.claim(e,!1),this.over)return}if(this.phase==="EXFIL"&&this.moving&&(this.moving.elapsed+=t,this.moving.elapsed>=this.moving.total&&(this.playerAt=this.moving.to,this.moving=null,this.playerAt===this.board.entry))){this.phase="WON";return}if(this.tracer){const e=t*this.tracerSpeed();this.tracer.countdown-=e;let i=0;for(;this.tracer&&this.tracer.countdown<=0&&i++<this.board.nodes.length+2;){const s=this.tracer.next;if(this.tracer.node=s,s!==this.board.entry&&(this.owner[s]="SYS",this.captured.delete(s),this.fortified.delete(s)),s===this.board.entry){this.phase="LOST_CRIT";return}const r=this.tracer.countdown;this.planTracerHop(),this.tracer.countdown+=r}}}}tracerHopsToEntry(){if(!this.tracer)return this.board.nodes.length;if(this.tracer.node===this.board.entry)return 0;const t=this.board.nodes.length,e=new Array(t).fill(1/0),i=[this.tracer.node];for(e[this.tracer.node]=0;i.length;){const s=i.shift();for(const r of this.board.edges){const o=r.a===s?r.b:!r.oneWay&&r.b===s?r.a:-1;o>=0&&e[o]===1/0&&(e[o]=e[s]+1,i.push(o))}}return isFinite(e[this.board.entry])?e[this.board.entry]:t}result(){const t=this.tracerHopsToEntry()+this.loot;return{outcome:this.phase,margin:t,loot:this.loot,trips:this.trips}}}const te={entry:[.42,.88,.72],registry:[1,.82,.4],store:[.92,.72,.36],alarm:[.9,.4,.36],spam:[.72,.52,1],dir:[.42,.46,.56],player:[.36,.92,.64],tracer:[1,.34,.3],white:[1,1,1],dim:[.16,.17,.22]},Cl=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],F0=n=>n==="ENTRY"?te.entry:n==="REGISTRY"?te.registry:n==="STORE"?te.store:n==="ALARM"?te.alarm:n==="SPAM"?te.spam:te.dir;function O0(n,t){const e=new Cc({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(329226,1);const i=new Pc,s=1.12,r=new rs(-1,1,1,-1,.01,100);r.position.set(0,0,4),r.lookAt(0,0,0);const o=new Vc(4e3,{additive:!0});i.add(o.points);const a=new kc(e);a.addPass(new zc(i,r)),a.addPass(new ii(new It(1,1),.7,.6,.2)),a.addPass(new Hc);const l="ui-monospace,SFMono-Regular,Menlo,monospace",c=C=>{const tt=document.createElement("div");return tt.style.cssText=C,document.body.appendChild(tt),tt},h=c(`position:fixed;left:50%;top:12px;transform:translateX(-50%);font:12px ${l};color:#9a9aa6;pointer-events:none;text-align:center`),d=c(`position:fixed;left:12px;bottom:12px;font:11px ${l};color:#6a6a76;pointer-events:none;line-height:1.5`),f=c(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.6);font:${l};text-align:center;pointer-events:none`),m=c("position:fixed;left:50%;bottom:14px;transform:translateX(-50%);display:flex;gap:10px;z-index:5"),g=C=>{const tt=document.createElement("button");return tt.textContent=C,tt.style.cssText=`all:unset;cursor:pointer;font:11px ${l};letter-spacing:.08em;color:#b6b8c4;padding:7px 12px;border:1px solid #262735;border-radius:7px;background:rgba(14,15,22,.7);-webkit-tap-highlight-color:transparent`,m.appendChild(tt),tt},_=g("❄ FREEZE"),p=g("✚ NUKE");let u,M,T=null,x=!1;function D(C,tt){u=w0(C,tt),M=new N0(u,t.skill),x=!1,f.style.display="none"}D(t.difficulty,t.seed);function A(){const C=window.innerWidth,tt=window.innerHeight;e.setSize(C,tt),a.setSize(C,tt);const J=C/tt;r.top=s,r.bottom=-s,r.left=-s*J,r.right=s*J,r.updateProjectionMatrix()}window.addEventListener("resize",A),A();const w=(C,tt)=>{const J=n.getBoundingClientRect();return[((C-J.left)/J.width*2-1)*r.right,(-((tt-J.top)/J.height)*2+1)*r.top]},L=(C,tt,J=.12)=>{let at=-1,Mt=J*J;for(const bt of u.nodes){const I=(bt.pos[0]-C)**2+(bt.pos[1]-tt)**2;I<Mt&&(Mt=I,at=bt.id)}return at};n.addEventListener("pointermove",C=>T=w(C.clientX,C.clientY)),n.addEventListener("pointerup",C=>{const[tt,J]=w(C.clientX,C.clientY),at=L(tt,J);at<0||(M.phase==="EXFIL"?M.retreat(at):x?M.nuke(at)&&(x=!1):M.beginCapture(at))}),_.addEventListener("click",()=>M.freeze()),p.addEventListener("click",()=>x=M.nukes>0&&!x);const E=(C,tt,J,at,Mt,bt,I=1)=>{o.dot(C,tt,J[0]*I,J[1]*I,J[2]*I,bt+1.5,1);for(let O=0;O<at;O++){const j=O/at*Math.PI*2+O*.7,Z=Mt*(.4+.6*(O*7%5)/5);o.dot(C+Math.cos(j)*Z,tt+Math.sin(j)*Z,J[0]*I,J[1]*I,J[2]*I,bt,.95)}},S=(C,tt,J,at,Mt,bt,I=1,O=0)=>{for(let j=0;j<Mt;j++){const Z=j/Mt*Math.PI*2+O;o.dot(C+Math.cos(Z)*J,tt+Math.sin(Z)*J,at[0]*I,at[1]*I,at[2]*I,bt,.9)}},R=(C,tt,J,at,Mt=1)=>{for(const[bt,I]of[[0,1],[1,0],[0,-1],[-1,0]])o.dot(C+bt*J,tt+I*J,at[0]*Mt,at[1]*Mt,at[2]*Mt,3.2,.95)},X=(C,tt,J,at,Mt=1)=>{for(let bt=-2;bt<=2;bt++)o.dot(C+bt*J*.5,tt+bt*J*.5,at[0]*Mt,at[1]*Mt,at[2]*Mt,2.6,.9),o.dot(C+bt*J*.5,tt-bt*J*.5,at[0]*Mt,at[1]*Mt,at[2]*Mt,2.6,.9)},G=(C,tt,J,at,Mt,bt)=>{const I=Math.hypot(tt[0]-C[0],tt[1]-C[1]),O=Math.max(4,Math.round(I/.045));for(let j=1;j<O;j++){const Z=j/O;let st=at;if(Mt){const ht=bt*.25%1,ut=Math.abs(Z-ht);st=at*(.5+.9*Math.exp(-(ut*ut)/.02))}o.dot(C[0]+(tt[0]-C[0])*Z,C[1]+(tt[1]-C[1])*Z,J[0]*st,J[1]*st,J[2]*st,2.1,.8)}};function Q(){const C=M.result(),tt=M.phase==="WON",J=tt?"◆ EXTRACTED":M.phase==="LOST_CRIT"?"⚠ TRACED":"✕ JACKED OUT",at=tt?"#8fd0b6":M.phase==="LOST_CRIT"?"#d0605a":"#e0b070";f.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${at}">${J}</div><div style="font-size:12px;color:#9a9aa6">loot ${C.loot} · ${C.trips} detection(s) · margin ${C.margin}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,f.style.display="flex"}let nt=performance.now(),K=0;function it(){const C=performance.now(),tt=C/1e3,J=Math.min(.05,(C-nt)/1e3);nt=C,M.tick(J);const at=T?L(T[0],T[1]):-1,Mt=new Set(M.phase==="EXFIL"?M.retreatable():M.capturable());o.begin();for(const I of u.edges){const O=u.nodes[I.a].pos,j=u.nodes[I.b].pos,Z=M.owner[I.a]==="P"&&M.owner[I.b]==="P";G(O,j,Z?te.player:te.dim,Z?.5:.32,I.oneWay,tt)}for(const I of u.nodes){const O=M.owner[I.id]==="P",j=F0(I.type),Z=M.tracer&&M.tracer.node===I.id;let st=O?te.player:Cl(j,te.dim,.35);Z&&(st=te.tracer);const ht=Mt.has(I.id),ut=at===I.id&&ht,yt=ht?.85+.15*Math.sin(C/220):1,Et=(O?1.15:I.type==="REGISTRY"||I.type==="ENTRY"?1:.7)*yt*(ut?1.5:1),Gt=.02+.006*I.rating;E(I.pos[0],I.pos[1],ut?Cl(st,te.white,.4):st,3+I.rating*2,Gt,3+I.rating*.5,Et),I.type==="REGISTRY"?S(I.pos[0],I.pos[1],.055,te.registry,12,2.4,1,C/600):I.type==="ENTRY"?S(I.pos[0],I.pos[1],.05,te.entry,10,2.2,1):I.type==="STORE"?R(I.pos[0],I.pos[1],.05,te.store,O?.6:1):I.type==="ALARM"?X(I.pos[0],I.pos[1],.05,te.alarm):I.type==="SPAM"&&S(I.pos[0],I.pos[1],.04,te.spam,6,2.2,1,C/300),M.fortified.has(I.id)&&S(I.pos[0],I.pos[1],.07,te.player,8,2,.7)}if(M.capturing){const I=u.nodes[M.capturing.node],O=M.capturing.elapsed/M.capturing.total,j=Math.round(16*O);for(let Z=0;Z<j;Z++){const st=-Math.PI/2+Z/16*Math.PI*2;o.dot(I.pos[0]+Math.cos(st)*.065,I.pos[1]+Math.sin(st)*.065,te.player[0],te.player[1],te.player[2],3,.95)}}if(M.tracer){const I=u.nodes[M.tracer.node].pos,O=u.nodes[M.tracer.next].pos,j=1-Math.max(0,Math.min(1,M.tracer.countdown/(u.params.tracerBase||1))),Z=I[0]+(O[0]-I[0])*j,st=I[1]+(O[1]-I[1])*j,ht=.7+.3*Math.sin(C/90);o.dot(Z,st,te.tracer[0]*ht,te.tracer[1]*ht,te.tracer[2]*ht,9),S(O[0],O[1],.05*(1-j)+.02,te.tracer,10,2.2,ht)}if(M.phase==="EXFIL"){let I=u.nodes[M.playerAt].pos[0],O=u.nodes[M.playerAt].pos[1];if(M.moving){const Z=u.nodes[M.moving.to].pos,st=M.moving.elapsed/M.moving.total;I+=(Z[0]-I)*st,O+=(Z[1]-O)*st}const j=.8+.2*Math.sin(C/120);o.dot(I,O,te.white[0]*j,te.white[1]*j,te.white[2]*j,10),S(I,O,.03,te.player,8,2.4,j)}o.commit(e.getPixelRatio()),a.render();const bt=at>=0&&Mt.has(at)&&M.phase!=="EXFIL"?Math.round(Ks(u.nodes[at].rating,M.captureLevel)*100):-1;_.style.opacity=M.freezes>0&&M.tracer?"1":"0.4",p.style.opacity=M.nukes>0?"1":"0.4",p.style.borderColor=x?"#6fe0b8":"#262735",_.textContent=`❄ FREEZE ${M.freezes}`,p.textContent=`✚ NUKE ${M.nukes}`,M.phase==="PLAN"||M.phase==="RUN"?h.textContent=x?"NUKE armed — click a node to capture it silently":"capture toward a REGISTRY ◇ · risk rises with rating · avoid the ✕ alarms":M.phase==="EXFIL"&&(h.textContent="REGISTRY TAKEN — retreat to your ENTRY ◎ before the tracer traces you home"),h.style.opacity=M.over?"0":"1",d.innerHTML=`D${u.difficulty} · ${u.seed}<br>loot ${M.loot} · tracer ${M.tracer?`${M.tracerHopsToEntry()} hops out`:"dormant"}`+(bt>=0?`<br><span style="color:#e0b070">detect ${bt}%</span>`:""),m.style.display=M.over?"none":"flex",M.over&&f.style.display==="none"&&Q(),K=requestAnimationFrame(it)}return it(),{regenerate:(C,tt)=>D(C,tt),dispose(){cancelAnimationFrame(K),window.removeEventListener("resize",A),o.dispose(),a.dispose(),[h,d,f,m].forEach(C=>C.remove()),e.dispose()}}}const zr=(n,t)=>{const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},B0=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t)),Pl=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],k0=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Gc=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Wc=n=>{const t=Math.hypot(n[0],n[1],n[2])||1e-6;return[n[0]/t,n[1]/t,n[2]/t]};function z0(n,t){return t.map(e=>{let i=Wc(k0(Pl(n[e[1]],n[e[0]]),Pl(n[e[2]],n[e[0]]))),s=Gc(i,n[e[0]]);return s<0&&(i=[-i[0],-i[1],-i[2]],s=-s),{n:i,d:s}})}const H0=n=>t=>{const e=Wc(t);let i=1/0;for(const s of n){const r=Gc(e,s.n);if(r>1e-6){const o=s.d/r;o<i&&(i=o)}}return[e[0]*i,e[1]*i,e[2]*i]};function V0(n,t,e){const i=[],s=n[t[0]];for(let r=1;r<t.length-1;r++){const o=n[t[r]],a=n[t[r+1]];for(let l=0;l<=e;l++)for(let c=0;c<=e-l;c++){const h=l/e,d=c/e,f=1-h-d;i.push([s[0]*f+o[0]*h+a[0]*d,s[1]*f+o[1]*h+a[1]*d,s[2]*f+o[2]*h+a[2]*d])}}return i}function G0(n){const t=[],e=[];for(let i=0;i<n;i++)e.push(-1+2*i/(n-1));for(const i of[-1,1])for(const s of e)for(const r of e)t.push([i,s,r]),t.push([s,i,r]),t.push([s,r,i]);return t}const W0=n=>{const t=Math.max(Math.abs(n[0]),Math.abs(n[1]),Math.abs(n[2]))||1e-6;return[n[0]/t,n[1]/t,n[2]/t]},Xc=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],$c=[[0,2,4],[0,2,5],[0,3,4],[0,3,5],[1,2,4],[1,2,5],[1,3,4],[1,3,5]],X0=H0(z0(Xc,$c)),$0=G0(4),Y0=$c.flatMap(n=>V0(Xc,n,4));function q0(n,t,e,i){const s=2*t*e+i,r=n%s,o=new Array(t).fill(0);let a=-1;if(r<2*t*e){const l=Math.floor(r/e),c=(r-l*e)/e,h=1-(1-Math.min(1,c/.7))**3;if(l<t){for(let d=0;d<l;d++)o[d]=1;o[l]=h,a=l}else{const d=2*t-1-l;for(let f=0;f<d;f++)o[f]=1;o[d]=1-h,a=d}}return{amount:o,active:a}}function j0(n){const t=[-1,-.3333333333333333,.3333333333333333],e=[];for(let i=0;i<n;i++){const s=Math.min(2,Math.floor(zr(i,2.3)*3)),r=t[Math.min(2,Math.floor(zr(i,5.9)*3))],o=zr(i,7.7)<.5?1:-1;e.push({axis:s,lo:r,hi:r+2/3+1e-4,ang:o*Math.PI/2})}return e}const Ll=j0(12);function K0(n,t){let[e,i,s]=n,r=!1;for(let o=0;o<Ll.length;o++){if(t.amount[o]<=0)continue;const a=Ll[o],l=a.axis===0?e:a.axis===1?i:s;if(l<a.lo||l>=a.hi)continue;o===t.active&&(r=!0);const c=a.ang*t.amount[o],h=Math.cos(c),d=Math.sin(c);if(a.axis===0){const f=i*h-s*d;s=i*d+s*h,i=f}else if(a.axis===1){const f=e*h+s*d;s=-e*d+s*h,e=f}else{const f=e*h-i*d;i=e*d+i*h,e=f}}return[e,i,s,r]}const Yc=(n,t)=>{const e=Math.sin(t),i=Math.cos(t),s=Math.sin(n),r=Math.cos(n);return(o,a,l)=>{const c=o*r+l*s,h=-o*s+l*r,d=a*i-h*e,f=a*e+h*i;return[c,d,f]}},qc=n=>n==="cube"?1:1.7,Z0=n=>n==="cube"?W0:X0;function J0(n,t){const e=Z0(n),i=qc(n),s=.5,r=t*s,o=Yc(r,.4+.06*Math.sin(t*.35)),a=t*(s+(1.7-s)*4.08),l=10,c=18,h=[];for(let d=0;d<=l;d++){const f=-Math.PI/2+d/l*Math.PI,m=Math.cos(f),g=Math.sin(f),_=Math.max(1,Math.round(Math.abs(m)*c));for(let p=0;p<_;p++){const u=p/_*2*Math.PI,M=e([m*Math.cos(u),g,m*Math.sin(u)]),[T,x,D]=o(M[0],M[1],M[2]),A=B0(u+r,a),w=Math.exp(-(A*A)/.18)*Math.max(0,D);h.push({x:T*i,y:x*i,depth:(D+1)/2,scan:Math.min(1,w)})}}return h}function Q0(n,t){const e=n==="cube"?$0:Y0,i=qc(n),s=Yc(t*.5,.5+.1*Math.sin(t*.9)),r=q0(t,12,.42,1.2),o=[];for(const a of e){const[l,c,h,d]=K0(a,r),[f,m,g]=s(l,c,h);o.push({x:f*i,y:m*i,depth:(g+1)/2,scan:d?1:0})}return o}const Ke=(n,t)=>{const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},t_=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t)),e_=n=>n-Math.floor(n),Hr=(n,t,e)=>n+(t-n)*e,Dl=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],n_=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],jc=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],or=n=>{const t=Math.hypot(n[0],n[1],n[2])||1e-6;return[n[0]/t,n[1]/t,n[2]/t]},Kc=(n,t)=>{const e=Math.PI*(3-Math.sqrt(5)),i=1-2*(n+.5)/t,s=Math.sqrt(Math.max(0,1-i*i)),r=n*e;return[s*Math.cos(r),i,s*Math.sin(r)]};function Vr(n,t){const e=Math.floor(n),i=Math.floor(t);let s=n-e,r=t-i;s=s*s*(3-2*s),r=r*r*(3-2*r);const o=Ke(e,i),a=Ke(e+1,i),l=Ke(e,i+1),c=Ke(e+1,i+1);return o+(a-o)*s+(l-o)*r+(o-a-l+c)*s*r}const os=(n,t)=>{const e=Math.sin(t),i=Math.cos(t),s=Math.sin(n),r=Math.cos(n);return(o,a,l)=>{const c=o*r+l*s,h=-o*s+l*r,d=a*i-h*e,f=a*e+h*i;return[c,d,f]}};function Zc(n,t){return t.map(e=>{let i=or(n_(Dl(n[e[1]],n[e[0]]),Dl(n[e[2]],n[e[0]]))),s=jc(i,n[e[0]]);return s<0&&(i=[-i[0],-i[1],-i[2]],s=-s),{n:i,d:s}})}const Jc=n=>t=>{const e=or(t);let i=1/0;for(const s of n){const r=jc(e,s.n);if(r>1e-6){const o=s.d/r;o<i&&(i=o)}}return[e[0]*i,e[1]*i,e[2]*i]};function i_(n,t,e){const i=[],s=n[t[0]];for(let r=1;r<t.length-1;r++){const o=n[t[r]],a=n[t[r+1]];for(let l=0;l<=e;l++)for(let c=0;c<=e-l;c++){const h=l/e,d=c/e,f=1-h-d;i.push([s[0]*f+o[0]*h+a[0]*d,s[1]*f+o[1]*h+a[1]*d,s[2]*f+o[2]*h+a[2]*d])}}return i}const s_=n=>{const t=[0,0,0];for(const e of n)t[0]+=e[0],t[1]+=e[1],t[2]+=e[2];return t[0]/=n.length,t[1]/=n.length,t[2]/=n.length,n.map(e=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]])},Qc=n=>{let t=1e-6;for(const e of n)t=Math.max(t,Math.hypot(e[0],e[1],e[2]));return n.map(e=>[e[0]/t,e[1]/t,e[2]/t])};function r_(n,t,e,i){const s=2*t*e+i,r=n%s,o=new Array(t).fill(0);let a=-1;if(r<2*t*e){const l=Math.floor(r/e),c=(r-l*e)/e,h=1-(1-Math.min(1,c/.7))**3;if(l<t){for(let d=0;d<l;d++)o[d]=1;o[l]=h,a=l}else{const d=2*t-1-l;for(let f=0;f<d;f++)o[f]=1;o[d]=1-h,a=d}}return{amount:o,active:a}}const Il=(()=>{const n=[-1,-.3333333333333333,.3333333333333333],t=[];for(let e=0;e<12;e++){const i=Math.min(2,Math.floor(Ke(e,2.3)*3)),s=n[Math.min(2,Math.floor(Ke(e,5.9)*3))],r=Ke(e,7.7)<.5?1:-1;t.push({axis:i,lo:s,hi:s+2/3+1e-4,ang:r*Math.PI/2})}return t})();function o_(n,t){let[e,i,s]=n,r=!1;for(let o=0;o<Il.length;o++){if(t.amount[o]<=0)continue;const a=Il[o],l=a.axis===0?e:a.axis===1?i:s;if(l<a.lo||l>=a.hi)continue;o===t.active&&(r=!0);const c=a.ang*t.amount[o],h=Math.cos(c),d=Math.sin(c);if(a.axis===0){const f=i*h-s*d;s=i*d+s*h,i=f}else if(a.axis===1){const f=e*h+s*d;s=-e*d+s*h,e=f}else{const f=e*h-i*d;i=e*d+i*h,e=f}}return[e,i,s,r]}const th=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],eh=[[0,2,4],[0,2,5],[0,3,4],[0,3,5],[1,2,4],[1,2,5],[1,3,4],[1,3,5]],a_=Jc(Zc(th,eh)),l_=eh.flatMap(n=>i_(th,n,4)),c_=s_([[0,1,0],[.85,-.7,.85],[-.85,-.7,.85],[-.85,-.7,-.85],[.85,-.7,-.85]]),h_=[[1,2,3,4],[0,1,2],[0,2,3],[0,3,4],[0,4,1]],u_=Jc(Zc(c_,h_)),d_=1,Ul=.42,nh=(n,t)=>{const e=d_+Ul*Math.cos(t);return[e*Math.cos(n),e*Math.sin(n),Ul*Math.sin(t)]},f_=n=>{const t=or(n),e=Math.atan2(t[1],t[0]),i=Math.asin(Math.max(-1,Math.min(1,t[2])));return nh(e,i*2)},p_=(()=>{const n=[];for(let t=0;t<30;t++){const e=t/30*2*Math.PI;for(let i=0;i<10;i++)n.push(nh(e,i/10*2*Math.PI))}return n})(),m_=(()=>{const n=[];for(let i=0;i<20;i++){const s=i/19,r=s*Math.PI,o=Math.cos(r),a=.95*Math.sin(r)*Math.pow(s,.6);for(let l=0;l<12;l++){const c=l/12*2*Math.PI;n.push([a*Math.cos(c),o,a*Math.sin(c)])}}return Qc(n)})(),Gr=(n,t,e)=>{const i=n,s=e,r=t,o=i*i+2.25*s*s+r*r-1;return o*o*o-i*i*r*r*r-.1125*s*s*r*r*r},ih=n=>{const t=or(n);let e=.1,i=Gr(t[0]*e,t[1]*e,t[2]*e),s=0;for(;i<0&&e<5&&s<50;)e*=1.35,i=Gr(t[0]*e,t[1]*e,t[2]*e),s++;let r=0,o=e;for(let l=0;l<20;l++){const c=(r+o)*.5;Gr(t[0]*c,t[1]*c,t[2]*c)<0?r=c:o=c}const a=(r+o)*.5;return[t[0]*a,t[1]*a,t[2]*a]},g_=Qc(Array.from({length:200},(n,t)=>ih(Kc(t,200)))),__={octa:{warp:a_,pts:l_,Rf:1.6},pyramid:{warp:u_,pts:[],Rf:1.3},torus:{warp:f_,pts:p_,Rf:1.25},teardrop:{pts:m_,Rf:1.5},heart:{warp:ih,pts:g_,Rf:1.55}};function x_(n,t){const e=n.warp,i=.5,s=t*i,r=os(s,.4+.06*Math.sin(t*.35)),o=t*(i+(1.7-i)*4.08),a=[],l=12,c=26;for(let h=0;h<=l;h++){const d=-Math.PI/2+h/l*Math.PI,f=Math.cos(d),m=Math.sin(d),g=Math.max(1,Math.round(Math.abs(f)*c));for(let _=0;_<g;_++){const p=_/g*2*Math.PI,u=e([f*Math.cos(p),m,f*Math.sin(p)]),[M,T,x]=r(u[0],u[1],u[2]),D=t_(p+s,o),A=Math.exp(-(D*D)/.18)*Math.max(0,x);a.push({x:M*n.Rf,y:T*n.Rf,depth:(x+1)/2,scan:Math.min(1,A),a:.5+.5*Math.min(1,A)})}}return a}function v_(n,t){const e=os(t*.5,.5+.1*Math.sin(t*.9)),i=r_(t,12,.42,1.2),s=[];for(const r of n.pts){const[o,a,l,c]=o_(r,i),[h,d,f]=e(o,a,l);s.push({x:h*n.Rf,y:d*n.Rf,depth:(f+1)/2,scan:c?1:0,a:1})}return s}function M_(n,t){const e=n.warp,i=os(t*.12,.35),s=22,r=[];for(let a=0;a<s;a++){const l=Kc(a,s);r.push(e([l[0]+.25*(Vr(a*.31+9,t*.24)-.5)*2,l[1]+.25*(Vr(a*.53+27,t*.21)-.5)*2,l[2]+.25*(Vr(a*.77+55,t*.27)-.5)*2]))}const o=[];for(let a=0;a<s;a++){const[l,c,h]=i(r[a][0],r[a][1],r[a][2]),d=.6+.4*(.5+.5*Math.sin(t*1.4+a*2.7));o.push({x:l*n.Rf,y:c*n.Rf,depth:(h+1)/2,scan:d,a:.85})}for(let a=0;a<5;a++){const l=Math.floor(t*.55+a*7.31),c=Math.floor(Ke(l,a*3.1+1.7)*s),h=Math.floor(Ke(l,a*5.7+4.2)*s);if(c===h)continue;const d=e_(t*.55+a*7.31),f=e([Hr(r[c][0],r[h][0],d),Hr(r[c][1],r[h][1],d),Hr(r[c][2],r[h][2],d)]),[m,g,_]=i(f[0],f[1],f[2]);o.push({x:m*n.Rf,y:g*n.Rf,depth:(_+1)/2,scan:1,a:.9})}return o}function S_(n,t){const e=n.warp,i=os(t*.18,.32),s=1,r=0,o=0,a=.55,l=0,c=Math.cos(a),h=Math.sin(a),d=r*h-o*c,f=o*l-s*h,m=s*c-r*l,g=9,_=34,p=[];for(let u=0;u<g;u++){const M=(u-(g-1)/2)*.075,T=Math.abs(u-(g-1)/2)/Math.max(1,(g-1)/2);for(let x=0;x<_;x++){const D=x/_*2*Math.PI,A=.16*Math.sin(D*3-t*1.7+u*.22)+.07*Math.sin(D*5+t*1.1),w=M+A,L=e([s*Math.cos(D)+l*Math.sin(D)+d*w,r*Math.cos(D)+c*Math.sin(D)+f*w,o*Math.cos(D)+h*Math.sin(D)+m*w]),[E,S,R]=i(L[0],L[1],L[2]);p.push({x:E*n.Rf,y:S*n.Rf,depth:(R+1)/2,scan:(1-T)*.5,a:.4+.6*((R+1)/2)})}}return p}function ar(n,t,e,i){const s=os(t*.3,.42),r=[];return n.pts.forEach((o,a)=>{const l=e(o,a),[c,h,d]=s(l[0],l[1],l[2]);r.push({x:c*n.Rf,y:h*n.Rf,depth:(d+1)/2,scan:i(a),a:1})}),r}const y_=(n,t)=>ar(n,t,e=>{const i=1+.14*Math.sin(3*Math.atan2(e[2],e[0])+t*3-e[1]*2);return[e[0]*i,e[1],e[2]*i]},()=>.15),E_=(n,t)=>ar(n,t,(e,i)=>{const s=Ke(i,1.3)*6.283;return[e[0]+.07*Math.sin(t*2+s),e[1]+.07*Math.cos(t*1.7+s),e[2]+.07*Math.sin(t*2.3+s)]},()=>.1),T_=(n,t)=>{const e=1+.24*Math.sin(t*3),i=1/Math.sqrt(e);return ar(n,t,s=>[s[0]*i,s[1]*e,s[2]*i],()=>.15)},b_=(n,t)=>ar(n,t,e=>e,e=>.5+.5*Math.sin(t*4+Ke(e,2.1)*6.283)),A_={searching:x_,solving:v_,connecting:M_,composing:S_,wave:y_,orbit:E_,jelly:T_,twinkle:b_};function Nl(n,t,e){return A_[n](__[t],e)}const Fl=[{key:"white-octa",label:"White Octahedron",shape:"octa",terminal:"searching",node:"solving",color:[.82,.88,1],dim:[.19,.21,.27]},{key:"purple-pyramid",label:"Purple Pyramid",shape:"pyramid",terminal:"searching",node:"connecting",color:[.7,.5,1],dim:[.18,.14,.28]},{key:"turquoise-torus",label:"Turquoise Torus",shape:"torus",terminal:"searching",node:"composing",color:[.3,.86,.82],dim:[.12,.24,.24]},{key:"darkred-teardrop",label:"Dark Red Teardrop",shape:"teardrop",terminal:"wave",node:"orbit",color:[.86,.32,.3],dim:[.26,.11,.11]},{key:"pink-heart",label:"Pink Heart",shape:"heart",terminal:"jelly",node:"twinkle",color:[1,.5,.72],dim:[.3,.14,.22]}],Ol=n=>{let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return Fl[(t>>>0)%Fl.length]},Ws=12,zo=7,w_=6,Bl=4,R_=16;function C_(n){return n<=2?"naive":n<=5?"greedy":n<=7?"greedy+":"optimal-ish"}const P_=n=>n<=2?2:n<=4?1:0;function L_(n){const t=C_(n.defender),e=t==="optimal-ish"?1:0;return{tMatch:R_,pPulses:Bl+n.attacker+e,ePulses:Math.max(2,Bl+n.defender-P_(n.defender)),traps:Math.min(6,1+Math.round(n.defender*.6)),repeats:n.defender>=6?2:n.defender>=3?1:0,ai:t}}const wi=[{attacker:5,defender:2},{attacker:5,defender:3},{attacker:4,defender:4},{attacker:4,defender:6},{attacker:3,defender:7},{attacker:2,defender:8},{attacker:2,defender:9}];function na(n){let t=0;for(const e of n.outcomes)e.kind==="CLAIM"?t+=1:e.kind==="REPEAT"||e.kind==="LOCK"?t+=2:e.kind==="INVERT"||e.kind==="CONVERT"?t+=.5:e.kind==="FLIP"&&(t-=1);return t}function Xe(n){return n.terminals.reduce((t,e)=>t+na(e),0)}function Wr(n){const t=new Set;for(const e of n.terminals)for(const i of e.outcomes)i.kind!=="DEAD"&&i.kind!=="SHORT"&&t.add(i.cell);return t}const Zs=(n,t)=>t==="left"?n.left:n.right;function kl(n,t,e,i,s,r,o){const a=new Array(Ws).fill("NEUTRAL"),l=[];let c=0;const h=(_,p,u,M)=>{const T=p.filter(x=>x.t>=0&&x.t<=o).sort((x,D)=>x.t-D.t).slice(0,u);for(const x of T){const D=_.terminals[x.terminal];if(D)for(const A of D.outcomes){if(A.kind==="DEAD")continue;const w=x.t+A.delay;if(A.kind==="REPEAT"){const L=A.repeatPeriod??2;for(let E=w;E<=o;E+=L)l.push({time:E,seq:c++,cell:A.cell,kind:"CLAIM",owner:M})}else l.push({time:w,seq:c++,cell:A.cell,kind:A.kind,owner:M})}}};h(n,e,s,"P"),h(t,i,r,"E"),l.sort((_,p)=>_.time-p.time||_.seq-p.seq);const d=new Set;for(const _ of l){if(_.kind==="DEAD"||_.kind==="SHORT"||d.has(_.cell))continue;const p=_.owner,u=p==="P"?"E":"P",M=a[_.cell];_.kind==="CLAIM"?a[_.cell]=p:_.kind==="LOCK"?(a[_.cell]=p,d.add(_.cell)):_.kind==="FLIP"?a[_.cell]=u:_.kind==="CONVERT"?a[_.cell]=M===u?"NEUTRAL":p:_.kind==="INVERT"&&(a[_.cell]=M==="NEUTRAL"?p:M==="P"?"E":"P")}let f=0,m=0,g=0;for(const _ of a)_==="P"?f++:_==="E"?m++:g++;return{p:f,e:m,neutral:g,owners:a}}const zl=n=>n.outcomes.filter(t=>t.kind!=="DEAD"&&t.kind!=="SHORT").map(t=>t.cell),D_=n=>Math.max(0,...n.outcomes.map(t=>t.delay));function sh(n,t){const e=[],i=new Set;for(;e.length<t;){let s=-1,r=-1;if(n.terminals.forEach((o,a)=>{if(e.includes(a))return;const l=zl(o).filter(c=>!i.has(c)).length+na(o)*.01;l>r&&(r=l,s=a)}),s<0)break;e.push(s);for(const o of zl(n.terminals[s]))i.add(o)}return e}function I_(n,t,e){return sh(n,t).map(i=>({t:Math.max(0,e-D_(n.terminals[i])-.05),terminal:i}))}function U_(n,t,e){return sh(n,t).map((i,s)=>({t:s*.03,terminal:i}))}function rh(n,t,e,i,s){const r=t.terminals.map((h,d)=>({i:d,v:na(h),repeat:h.outcomes.some(f=>f.kind==="REPEAT")})).filter(h=>h.v>0);if(r.sort((h,d)=>d.v-h.v),r.length===0)return[];if(n==="naive"){const h=r.slice().sort(()=>s()-.5).slice(0,e),d=.25,f=.75;return h.map((m,g)=>({t:(d+(g+.5)/Math.max(1,h.length)*(f-d))*i,terminal:m.i}))}if(n==="greedy"){const h=r.slice(0,e);return h.map((d,f)=>({t:f/Math.max(1,h.length)*i*.7,terminal:d.i}))}const o=n==="optimal-ish"?r.slice().sort((h,d)=>Number(d.repeat)-Number(h.repeat)||d.v-h.v):r,a=Math.min(2,e),l=o.slice(0,Math.max(0,e-a)),c=l.map((h,d)=>({t:d/Math.max(1,l.length)*i*.6,terminal:h.i}));for(let h=0;h<a;h++)c.push({t:i*(.85+.03*h),terminal:o[h%o.length].i});return c}const Be={splitChance:.35,reachMin:9,valueMin:8,ratioLo:.75,ratioHi:.95,maxBoardAttempts:60};function N_(n,t){const e=t.slice();for(let i=e.length-1;i>0;i--){const s=Math.floor(n()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}const Xn=n=>Jn(n,.6,1.4);function Hl(n,t,e="legacy"){const i=N_(n,Array.from({length:12},(a,l)=>l)),s=[];for(let a=0;a<8;a++){const l=[{cell:i[a],delay:Xn(n),kind:"CLAIM"}];s.push({id:a,outcomes:l})}s[0].outcomes.push({cell:i[8],delay:Xn(n),kind:"CLAIM"}),s[1].outcomes.push({cell:i[9],delay:Xn(n),kind:"CLAIM"});for(let a=2;a<8;a++)if(n()<Be.splitChance){const l=i[(a+5)%12];s[a].outcomes.some(c=>c.cell===l)||s[a].outcomes.push({cell:l,delay:Xn(n),kind:"CLAIM"})}for(let a=0;a<t.repeats;a++){const c=s[a%4].outcomes.find(h=>h.kind==="CLAIM");c&&(c.kind="REPEAT",c.repeatPeriod=Jn(n,1.8,2.6))}let r=t.traps;for(const a of[7,6,5])for(let l=0;l<2&&r>0;l++){const c=n()<.5?"DEAD":"INVERT";s[a].outcomes.push({cell:i[(a+l+3)%12],delay:Xn(n),kind:c}),r--}let o;if(e==="full"){const a=s[0].outcomes.find(p=>p.kind==="CLAIM");a&&(a.kind="LOCK");const c=s[7].outcomes.find(p=>p.kind==="DEAD"||p.kind==="INVERT");c&&(c.kind="FLIP");const d=s[6].outcomes.find(p=>p.kind==="DEAD");d&&(d.kind="SHORT");const f=s[5],m=i[12%12];if(!f.outcomes.some(p=>p.cell===m))f.outcomes.push({cell:m,delay:Xn(n),kind:"CONVERT"});else{const p=i[3];f.outcomes.some(u=>u.cell===p)||f.outcomes.push({cell:p,delay:Xn(n),kind:"CONVERT"})}const g=s[1].outcomes.find((p,u)=>u>0&&p.kind==="CLAIM"),_=s[2].outcomes.find(p=>p.kind==="CLAIM");g&&_&&(g.cell=_.cell,o=[1,2]);for(const p of s)for(const u of p.outcomes)u.kind==="INVERT"&&(u.kind="CONVERT")}return{layer:{terminals:s},joinerPair:o}}const F_=n=>n.terminals.find(t=>t.outcomes.some(e=>e.kind==="CLAIM")),O_=n=>{for(const t of n.terminals)for(const e of t.outcomes)if(e.kind==="DEAD")return e};function B_(n,t){for(let e=0;e<30;e++){const i=Xe(t)/Xe(n);if(i>Be.ratioHi){const r=F_(t)?.outcomes.find(o=>o.kind==="CLAIM");if(r)r.kind="DEAD";else break}else if(i<Be.ratioLo){const s=O_(t);if(s)s.kind="CLAIM";else break}else return}}function k_(n,t,e={}){const i=L_(n),s=e.elements??"legacy",r=Tn(`${t}:transfer:${n.attacker}:${n.defender}`),o=n.defender>=3;for(let a=1;a<=Be.maxBoardAttempts;a++){const l=Hl(r,i,s),c=Hl(r,i,s),h=l.layer,d=c.layer;if(Wr(h).size<Be.reachMin||Wr(d).size<Be.reachMin||Xe(h)<Be.valueMin||Xe(d)<Be.valueMin)continue;const f=Xe(h)>=Xe(d)?h:d,m=f===h?d:h;if(B_(f,m),Xe(m)<Be.valueMin||Wr(m).size<Be.reachMin)continue;const g=Xe(m)/Xe(f);if(g<Be.ratioLo||g>Be.ratioHi)continue;const _=Tn(`${t}:ai:${n.defender}:${a}`),p=rh(i.ai,m,i.ePulses,i.tMatch,_);if(kl(f,m,I_(f,i.pPulses,i.tMatch),p,i.pPulses,i.ePulses,i.tMatch).p<zo||o&&kl(f,m,U_(f,i.pPulses,i.tMatch),p,i.pPulses,i.ePulses,i.tMatch).p>=zo)continue;const M=h,T=d,x=[];return l.joinerPair&&x.push(l.joinerPair),c.joinerPair&&x.push(c.joinerPair),{seed:t,spec:n,params:i,left:M,right:T,better:f===M?"left":"right",genStats:{boardAttempts:a,qLeft:Xe(M),qRight:Xe(T)},...x.length>0?{joiners:x}:{}}}return null}function z_(n,t,e={}){for(let i=n.defender;i>=1;i--){const s=k_({attacker:n.attacker,defender:i},t,e);if(s)return s}throw new Error(`transfer generateBoard: no valid board even at defender 1 (seed=${t}, attacker=${n.attacker})`)}class H_{board;playerSide=null;owners=new Array(Ws).fill("NEUTRAL");pBudget;eBudget;timeLeft;matchElapsed=0;pulses=[];claimFlash=new Float32Array(Ws);phase="PLAN";result=null;locked=new Set;guns=[];eSchedule=[];eFired=[];aiRng;constructor(t){this.board=t,this.pBudget=t.params.pPulses,this.eBudget=t.params.ePulses,this.timeLeft=t.params.tMatch,this.aiRng=Tn(`${t.seed}:liveai:${t.spec.defender}`)}enemySide(){return this.playerSide==="left"?"right":this.playerSide==="right"?"left":null}chooseSide(t){if(this.phase!=="PLAN")return;this.playerSide=t;const e=t==="left"?"right":"left";this.eSchedule=rh(this.board.params.ai,Zs(this.board,e),this.eBudget,this.board.params.tMatch,this.aiRng).slice().sort((i,s)=>i.t-s.t),this.eFired=this.eSchedule.map(()=>!1),this.phase="RUN"}firePlayer(t){return this.phase!=="RUN"||!this.playerSide||this.pBudget<=0||this.timeLeft<=0?!1:(this.spawn(this.playerSide,"P",t),this.pBudget--,!0)}spawn(t,e,i){const s=Zs(this.board,t).terminals[i];if(s)for(const r of s.outcomes)this.pulses.push({side:t,owner:e,terminalId:i,cell:r.cell,kind:r.kind,delay:r.delay,elapsed:0,repeatPeriod:r.repeatPeriod??2})}resolve(t){if(t.kind==="DEAD"||t.kind==="SHORT"||this.locked.has(t.cell))return;const e=t.owner==="P"?"P":"E",i=e==="P"?"E":"P",s=this.owners[t.cell];t.kind==="CLAIM"?this.owners[t.cell]=e:t.kind==="LOCK"?(this.owners[t.cell]=e,this.locked.add(t.cell)):t.kind==="FLIP"?this.owners[t.cell]=i:t.kind==="CONVERT"?this.owners[t.cell]=s===i?"NEUTRAL":e:t.kind==="INVERT"?this.owners[t.cell]=s==="NEUTRAL"?e:s==="P"?"E":"P":t.kind==="REPEAT"&&(this.owners[t.cell]=e,this.guns.push({cell:t.cell,period:t.repeatPeriod,nextAt:this.matchElapsed+t.repeatPeriod,owner:t.owner})),this.claimFlash[t.cell]=.35}tick(t){if(this.phase!=="RUN")return;this.matchElapsed+=t,this.timeLeft=Math.max(0,this.board.params.tMatch-this.matchElapsed);const e=this.enemySide();if(e)for(let s=0;s<this.eSchedule.length;s++)!this.eFired[s]&&this.eSchedule[s].t<=this.matchElapsed&&this.eBudget>0&&this.timeLeft>0&&(this.eFired[s]=!0,this.spawn(e,"E",this.eSchedule[s].terminal),this.eBudget--);const i=[];for(const s of this.pulses)s.elapsed+=t,s.elapsed>=s.delay?this.resolve(s):i.push(s);this.pulses=i;for(const s of this.guns)for(;this.matchElapsed>=s.nextAt&&s.nextAt<=this.board.params.tMatch&&!this.locked.has(s.cell);)this.owners[s.cell]=s.owner,this.claimFlash[s.cell]=.35,s.nextAt+=s.period;for(let s=0;s<Ws;s++)this.claimFlash[s]>0&&(this.claimFlash[s]=Math.max(0,this.claimFlash[s]-t));this.timeLeft<=0&&this.pulses.length===0&&this.finish()}finish(){let t=0;for(const e of this.owners)e==="P"&&t++;this.result={p:t,e:this.owners.filter(e=>e==="E").length},this.phase=t>=zo?"WON":t===w_?"DEADLOCK":"LOST"}counts(){let t=0,e=0,i=0;for(const s of this.owners)s==="P"?t++:s==="E"?e++:i++;return{p:t,e,n:i}}}let lr=1;const V_=n=>{lr=n},Vl=()=>lr,G_=n=>Math.max(1,Math.min(3.2,.72*n/.82)),oh=n=>[0,(.86-n*(1.72/11))*lr],Ho=(n,t)=>[n==="left"?-1.32:1.32,(.82-t*(1.64/7))*lr];function W_(n,t,e,i=.028){const[s,r]=Ho(n,t),o=s*(.72-t*.045),[,a]=oh(e),l=s>0?.16:-.16,c=[[s,r],[o,r],[o,a],[l,a],[0,a]];let h=0;const d=[];for(let g=1;g<c.length;g++){const _=Math.hypot(c[g][0]-c[g-1][0],c[g][1]-c[g-1][1]);d.push(_),h+=_}const f=[];let m=0;for(let g=1;g<c.length;g++){const[_,p]=c[g-1],[u,M]=c[g],T=d[g-1],x=Math.max(1,Math.round(T/i));for(let D=0;D<x;D++){const A=D/x;f.push({x:_+(u-_)*A,y:p+(M-p)*A,u:h>0?(m+A*T)/h:0})}m+=T}return f.push({x:c[c.length-1][0],y:c[c.length-1][1],u:1}),f}const Gl=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],Xr=.012,X_=(n,t)=>{const e=n[Math.max(0,t-1)],i=n[Math.min(n.length-1,t+1)];let s=i.x-e.x,r=i.y-e.y;const o=Math.hypot(s,r)||1;return s/=o,r/=o,[s,r,-r,s]},$_=(n,t)=>{let e=0;for(;e<n.length-2&&n[e+1].u<t;)e++;const i=n[e],s=n[Math.min(e+1,n.length-1)],r=Math.max(0,Math.min(1,(t-i.u)/(s.u-i.u||1)));let o=s.x-i.x,a=s.y-i.y;const l=Math.hypot(o,a)||1;return o/=l,a/=l,{x:i.x+(s.x-i.x)*r,y:i.y+(s.y-i.y)*r,nx:-a,ny:o}};function Y_(n,t,e,i,s,r,o,a,l=!0){const c=[e[0]*.7,e[1]*.7,e[2]*.7];for(let d=0;d<t.length;d++){const f=t[d];if(f.u>r)break;const[,,m,g]=X_(t,d),{b:_,col:p}=s(f.u),u=.16*Math.max(0,Math.sin((f.u*2.2-o*.09+a)*Math.PI*2)),M=Gl(e,p,Math.min(1,_)),T=.45+u+.85*_;n.dot(f.x,f.y,M[0]*T,M[1]*T,M[2]*T,2.3+_*3.6,.95);for(const x of[1,-1]){const D=Gl(c,p,Math.min(1,_*.8)),A=.3+u*.7+.6*_;n.dot(f.x+m*x*Xr,f.y+g*x*Xr,D[0]*A,D[1]*A,D[2]*A,1.6+_*2.2,.85)}}if(!l)return;const h=5;for(let d=0;d<h;d++){const f=(o*.13+d/h+a*.13)%1;for(let m=0;m<5;m++){const g=f-m*.022;if(g<=.005||g>r)continue;const _=$_(t,g),p=Math.sin(g*24+o*2.2+a)*Xr,u=(1-m/5)*.85;n.dot(_.x+_.nx*p,_.y+_.ny*p,i[0]*u,i[1]*u,i[2]*u,2.8-m*.4,.92)}}}const Oe=[.4,.95,.7],Ue=[.95,.4,.36],xe=[.95,.78,.4],$r=[1,.82,.4],Mi=[1,.6,.3];function Dt(n,t,e,i,s){return{x:n,y:t,r:e,col:i,a:s}}function q_(n){return[Dt(0,0,.38,Oe,1),Dt(0,0,.6,Oe,.18)]}function j_(n){return[Dt(0,-.75,.15,Oe,.9),Dt(0,-.45,.15,Oe,.85),Dt(0,-.15,.15,Oe,.8),Dt(0,.1,.2,Oe,1),Dt(-.3,.42,.14,Oe,.85),Dt(-.55,.7,.14,Oe,.8),Dt(-.7,.9,.18,Oe,.9),Dt(.3,.42,.14,Oe,.85),Dt(.55,.7,.14,Oe,.8),Dt(.7,.9,.18,Oe,.9)]}function K_(n){const t=[];for(let r=0;r<8;r++){const o=r/8*Math.PI*2+n*.4,a=Math.cos(o)*.65,l=Math.sin(o)*.65;t.push(Dt(a,l,.15,$r,.9))}t.push(Dt(0,0,.22,$r,1));const s=4;for(let r=0;r<s;r++){const o=r/s*Math.PI*2+Math.PI/4;t.push(Dt(Math.cos(o)*.33,Math.sin(o)*.33,.11,$r,.75))}return t}function Z_(n){return[Dt(-.7,.85,.16,xe,.85),Dt(-.5,.55,.14,xe,.8),Dt(-.28,.3,.14,xe,.8),Dt(.7,.85,.16,xe,.85),Dt(.5,.55,.14,xe,.8),Dt(.28,.3,.14,xe,.8),Dt(0,.05,.22,xe,1),Dt(0,-.25,.15,xe,.9),Dt(0,-.55,.15,xe,.85),Dt(0,-.82,.18,xe,.9)]}function J_(n){return[Dt(0,-.85,.14,Ue,.7),Dt(0,-.55,.14,Ue,.75),Dt(0,-.25,.16,Ue,.8),Dt(-.28,.1,.14,Ue,.9),Dt(-.55,.35,.16,Ue,1),Dt(.28,.1,.14,Ue,.9),Dt(.55,.35,.16,Ue,1),Dt(-.28,.6,.14,Ue,.9),Dt(-.55,.85,.16,Ue,1),Dt(.28,.6,.14,Ue,.9),Dt(.55,.85,.16,Ue,1),Dt(0,.35,.18,Ue,.85)]}function Q_(n){const t=.75+Math.sin(n*6)*.25;return[Dt(-.9,0,.13,xe,.8),Dt(-.65,0,.13,xe,.8),Dt(-.4,0,.13,xe,.8),Dt(.4,0,.13,xe,.8),Dt(.65,0,.13,xe,.8),Dt(.9,0,.13,xe,.8),Dt(-.2,-.3,.14,Mi,t),Dt(-.05,0,.16,Mi,t),Dt(.1,.3,.14,Mi,t),Dt(.05,0,.15,Mi,t*.8),Dt(.2,-.3,.13,Mi,t),Dt(0,0,.2,Mi,t)]}function tx(n){const t=[];for(let i=0;i<4;i++)for(let s=0;s<4;s++){const r=-.7+s/3*1.4,o=-.7+i/3*1.4;t.push(Dt(r,o,.16,Ue,.88))}return t}function ex(n){const t=[];for(let i=0;i<4;i++)for(let s=0;s<4;s++){const r=-.7+s/3*1.4,o=-.7+i/3*1.4,a=s<2;t.push(Dt(r,o,a?.16:.1,xe,a?.9:.3))}return t}const nx={CLAIM:q_,SPLIT:j_,LOCK:K_,JOINER:Z_,DEAD:J_,SHORT:Q_,FLIP:tx,CONVERT:ex};function ah(n,t){return nx[n](t)}const Js=[{kind:"CLAIM",name:"Claim",meaning:"Captures the cell for the firing side.",tag:"good"},{kind:"SPLIT",name:"Split",meaning:"One pulse becomes two, claiming the cell twice.",tag:"good"},{kind:"LOCK",name:"Lock",meaning:"Claims and freezes the cell — enemy pulses cannot change its owner.",tag:"good"},{kind:"JOINER",name:"Joiner",meaning:"Two incoming pulses merge into one outgoing pulse.",tag:"tool"},{kind:"DEAD",name:"Dead End",meaning:"Pulse is absorbed — no ownership change.",tag:"bad"},{kind:"SHORT",name:"Short",meaning:"Circuit shorts out — pulse is lost with a spark, no effect.",tag:"bad"},{kind:"FLIP",name:"Flip",meaning:"Inverts ownership: your pulse gives the cell to your opponent.",tag:"bad"},{kind:"CONVERT",name:"Convert",meaning:"Converts the cell one step toward neutral, then toward the firing side.",tag:"tool"}],oe={cellN:[.22,.22,.28],p:[.34,.9,.66],litP:[.5,1.1,.85],dead:[.7,.34,.32],white:[1,1,1],offDim:[.16,.17,.2],offGlyph:[.42,.44,.5]},Si=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],Yr=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],ix=[[.34,.9,.62],[.52,1,.8],[.24,.7,.48]],sx=[[.82,.88,1],[.98,.98,1],[.64,.72,.9]],Wl=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,o,a)=>`rgb(${Math.round(r[0]+(o[0]-r[0])*a)},${Math.round(r[1]+(o[1]-r[1])*a)},${Math.round(r[2]+(o[2]-r[2])*a)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))},rx=n=>{switch(n){case"CLAIM":return"CLAIM";case"LOCK":return"LOCK";case"DEAD":return"DEAD";case"SHORT":return"SHORT";case"FLIP":return"FLIP";case"CONVERT":return"CONVERT";case"REPEAT":return"CLAIM";case"INVERT":return"CONVERT";default:return"CLAIM"}},ox=n=>n==="DEAD"?.66:.5,Xl=n=>n==="DEAD"?.66:n==="SHORT"?.55:1;function ax(n,t){const e=new Cc({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(329226,1);const i=new Pc,s=1.46,r=1.04,o=new rs(-1,1,1,-1,.01,100);o.position.set(0,0,4),o.lookAt(0,0,0);const a=new Vc(9e3,{additive:!0});i.add(a.points);const l=new kc(e);l.addPass(new zc(i,o)),l.addPass(new ii(new It(1,1),.6,.5,.22)),l.addPass(new Hc);const c="http://www.w3.org/2000/svg",h="ui-monospace,SFMono-Regular,Menlo,monospace",d=O=>{const j=document.createElement("div");return j.style.cssText=O,document.body.appendChild(j),j},f=document.createElementNS(c,"svg");f.setAttribute("viewBox","0 0 48 48"),f.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const m=document.createElementNS(c,"circle");m.setAttribute("cx","24"),m.setAttribute("cy","24"),m.setAttribute("r","21"),m.setAttribute("fill","none"),m.setAttribute("stroke",Wl(1)),m.setAttribute("stroke-width","1.6"),f.appendChild(m),document.body.appendChild(f);const g=d(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${h};color:#9a9aa6;pointer-events:none;text-align:center`),_=d(`position:fixed;left:12px;bottom:12px;font:11px ${h};color:#55555f;pointer-events:none`),p=d(`position:fixed;right:12px;bottom:12px;font:11px ${h};color:#6a6a76;pointer-events:none;text-align:right`),u=Object.fromEntries(Js.map(O=>[O.kind,O.tag==="bad"?"#f26660":O.tag==="tool"?"#f0c766":"#66f0b0"]));p.innerHTML=Js.map(O=>`<span style="color:${u[O.kind]}">${O.name.toLowerCase()}</span>`).join(" · ");const M=d(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${h};text-align:center;pointer-events:none`);let T,x,D=[],A=new Map,w=[],L=null,E=Ol(t.seed);const S=()=>Si(E.color,oe.white,.28);function R(){D=[],A=new Map;for(const O of["left","right"])Zs(T,O).terminals.forEach((j,Z)=>{const st=j.outcomes.length>=2;j.outcomes.forEach((ht,ut)=>{const yt=W_(O,Z,ht.cell);D.push({side:O,term:Z,cell:ht.cell,kind:ht.kind,dots:yt,fork:st,primary:ut===0}),A.set(`${O}:${Z}:${ht.cell}`,yt)})})}function X(O,j){T=z_(O,j,{elements:"full"}),x=new H_(T),E=Ol(j),w=T.joiners??[],R(),M.style.display="none"}X(t.spec,t.seed);function G(){const O=window.innerWidth,j=window.innerHeight;e.setSize(O,j),l.setSize(O,j);const Z=O/j,st=Math.max(r,s/Z);o.top=st,o.bottom=-st,o.right=st*Z,o.left=-st*Z,o.updateProjectionMatrix(),V_(G_(st)),R()}window.addEventListener("resize",G),G();const Q=(O,j)=>{const Z=n.getBoundingClientRect();return[((O-Z.left)/Z.width*2-1)*o.right,(-((j-Z.top)/Z.height)*2+1)*o.top]},nt=(O,j,Z)=>{let st=-1,ht=.22;for(let ut=0;ut<8;ut++){const[yt,Et]=Ho(O,ut),Gt=Math.hypot(j-yt,Z-Et);Gt<ht&&(ht=Gt,st=ut)}return st};n.addEventListener("pointermove",O=>L=Q(O.clientX,O.clientY)),n.addEventListener("pointerup",O=>{const[j,Z]=Q(O.clientX,O.clientY);if(x.phase==="PLAN")x.chooseSide(j<0?"left":"right");else if(x.phase==="RUN"&&x.playerSide){const st=nt(x.playerSide,j,Z);st>=0&&x.firePlayer(st)}});const K=(O,j,Z,st,ht,ut)=>{for(const yt of O){const Et=(.3+.7*yt.depth+yt.scan*.7)*ut;a.dot(j+yt.x*st,Z+yt.y*st,ht[0]*Et,ht[1]*Et,ht[2]*Et,1.4+2.2*yt.depth+yt.scan*2.6,.95)}},it=(O,j,Z,st,ht,ut)=>{for(const yt of O){const Et=(.3+.7*yt.depth+yt.scan*.7)*ut;a.dot(j+yt.x*st,Z+yt.y*st,ht[0]*Et,ht[1]*Et,ht[2]*Et,1.4+2.2*yt.depth+yt.scan*2.6,Math.min(1,yt.a))}},C=(O,j)=>{let Z=0,st=9;for(let ht=0;ht<O.length;ht++){const ut=Math.abs(O[ht].u-j);ut<st&&(st=ut,Z=ht)}return O[Z]},tt=(O,j,Z,st,ht,ut)=>{for(let yt=0;yt<8;yt++){const Et=yt/8*Math.PI*2;a.dot(O+Math.cos(Et)*Z,j+Math.sin(Et)*Z,st[0]*ut,st[1]*ut,st[2]*ut,ht,.9)}},J=(O,j,Z,st,ht,ut,yt)=>{for(const Et of ah(O,st)){const Gt=yt??Et.col,N=ht*Et.a;a.dot(j+Et.x*ut,Z+Et.y*ut,Gt[0]*N,Gt[1]*N,Gt[2]*N,1.4+Et.r*6,Math.min(1,Et.a))}};function at(){const O=x.counts(),j=x.phase==="DEADLOCK",Z=x.phase==="WON",st=Z?"◆ COMPLETE":j?"⟳ DEADLOCK · 6–6 replays":"✕ REJECTED",ht=Z?"#8fd0b6":j?"#e0b070":"#d0605a";M.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${ht}">${st}</div>`+(j?'<div style="font-size:12px;color:#9a9aa6">6–6 — the battle replays</div>':`<div style="font-size:12px;color:#9a9aa6">you ${O.p} · host ${O.e} · neutral ${O.n}</div>`)+'<div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>',M.style.display="flex"}let Mt=performance.now(),bt=0;function I(){const O=performance.now(),j=O/1e3,Z=Math.min(.05,(O-Mt)/1e3);Mt=O,x.tick(Z);const st=x.phase!=="PLAN",ht=new Map;for(const et of x.pulses){const b=`${et.side}:${et.terminalId}:${et.cell}`,v=ht.get(b)??[];v.push({p:et.elapsed/et.delay,owner:et.owner,kind:et.kind}),ht.set(b,v)}let ut=-1;const yt=x.phase==="RUN"?x.playerSide:L?L[0]<0?"left":"right":null;L&&yt&&(ut=nt(yt,L[0],L[1]));const Et=ut>=0&&yt;a.begin();for(const et of D){const b=x.playerSide?et.side===x.playerSide?"P":"E":"N";let v,P;if(!st)v=oe.offDim,P=oe.offDim;else if(b==="E"){const rt=.8+.2*(et.term%2);v=Yr(E.dim,rt),P=Yr(E.color,rt)}else{const pt=b==="P"||b==="N"&&et.side==="left"?ix:sx,St=pt[et.term%pt.length];v=Yr(St,b==="N"?.24:.2),P=St}const z=Et&&et.side===yt&&et.term===ut,H=ht.get(`${et.side}:${et.term}:${et.cell}`),W=Xl(et.kind);Y_(a,et.dots,v,P,rt=>{let pt=z?.42:0,St=oe.white;if(H)for(const Pt of H){const xt=rt<=Pt.p?Math.exp(-(Pt.p-rt)/.12):Math.exp(-(rt-Pt.p)/.025);xt>pt&&(pt=xt,St=Pt.kind==="DEAD"?oe.dead:Pt.owner==="P"?oe.litP:S())}return{b:pt,col:St}},W,j,et.term*.6+(et.side==="left"?0:1.7),st);const lt=(z?1:.7)*(st?1:.85),ot=st?void 0:oe.offGlyph,dt=rx(et.kind),Tt=C(et.dots,ox(et.kind));if(J(dt,Tt.x,Tt.y,j,lt,.03,ot),et.fork&&et.primary){const rt=C(et.dots,.22);J("SPLIT",rt.x,rt.y,j,lt*.85,.026,ot)}}for(const[et,b]of w)for(const v of["left","right"]){const P=Zs(T,v),z=new Set(P.terminals[et]?.outcomes.map(W=>W.cell)??[]),H=P.terminals[b]?.outcomes.find(W=>z.has(W.cell))?.cell;for(const W of[et,b]){const lt=D.find(Tt=>Tt.side===v&&Tt.term===W&&Tt.kind==="CLAIM"&&(H===void 0||Tt.cell===H));if(!lt)continue;const ot=st?void 0:oe.offGlyph,dt=C(lt.dots,.82);J("JOINER",dt.x,dt.y,j,.75*(st?1:.85),.026,ot)}}for(const et of x.pulses){const b=A.get(`${et.side}:${et.terminalId}:${et.cell}`);if(!b)continue;const v=Xl(et.kind),P=Math.min(v,et.elapsed/et.delay),z=C(b,P),H=et.kind==="DEAD"||et.kind==="SHORT"?oe.dead:Si(et.owner==="P"?oe.litP:S(),oe.white,.4);a.dot(z.x,z.y,H[0],H[1],H[2],9)}const Gt=x.playerSide?x.playerSide==="left"?"right":"left":null,N=et=>et==="P"?x.playerSide:et==="E"?Gt:null,me=new Map;if(Et)for(const et of D)et.side===yt&&et.term===ut&&et.kind!=="DEAD"&&me.set(et.cell,et.kind);for(let et=0;et<12;et++){const[b,v]=oh(et),P=x.owners[et],z=x.claimFlash[et]/.35,H=N(P);if(H&&P==="E"){const lt=Si(E.color,oe.white,z*.5);it(Nl(E.node,E.shape,j+et*.5),b,v,.042,lt,.95+z)}else if(H){const lt=H==="left"?"octa":"cube",ot=Si(oe.p,oe.white,z*.6);K(Q0(lt,j+et*.5),b,v,.04,ot,.95+z)}else{const ot=Si(oe.cellN,oe.white,z*.7);for(let dt=-1;dt<=1;dt++)for(let Tt=-1;Tt<=1;Tt++)a.dot(b+dt*.026,v+Tt*.026,ot[0],ot[1],ot[2],4.5)}const W=me.get(et);W&&tt(b,v,.058,lx(W),3,.9)}const kt=.05*Math.min(1.45,.86+.14*Vl());for(const et of["left","right"]){const b=et==="left"?"octa":"cube",v=x.playerSide?et===x.playerSide?"P":"E":"N",P=v==="P"?oe.p:v==="E"?E.color:oe.cellN;for(let z=0;z<8;z++){const[H,W]=Ho(et,z),lt=yt===et&&ut===z&&(x.phase==="PLAN"||et===x.playerSide),ot=lt?1.6:x.phase==="PLAN"?.7+.35*Math.sin(O/240+z):1,dt=lt?Si(P,oe.white,.4):P;v==="E"?it(Nl(E.terminal,E.shape,j+z*.7),H,W,kt,dt,ot):K(J0(b,j+z*.7),H,W,kt,dt,ot)}}const Vt=.99*Vl();for(let et=0;et<x.pBudget;et++)a.dot(-.24+et*.05,-Vt,oe.p[0],oe.p[1],oe.p[2],5);a.commit(e.getPixelRatio()),l.render();const Ct=Math.max(0,x.timeLeft/T.params.tMatch);m.setAttribute("r",String(3+18*Ct)),m.setAttribute("stroke",Wl(Ct));const Zt=x.counts();_.textContent=`you c${T.spec.attacker} vs ${E.label} c${T.spec.defender} · you ${Zt.p}/12 · need 7`,x.phase==="PLAN"?(g.textContent="READ BOTH CIRCUITS (unpowered) — hover a terminal to preview its reach, then click a side to power it up",g.style.opacity="1"):x.phase==="RUN"?(g.textContent="fire your terminals · dead/short waste a pulse · later light wins the cell",g.style.opacity="0.7"):g.style.opacity="0",(x.phase==="WON"||x.phase==="LOST"||x.phase==="DEADLOCK")&&M.style.display==="none"&&at(),bt=requestAnimationFrame(I)}return I(),{regenerate:(O,j)=>X(O,j),chooseSide:O=>x.chooseSide(O),fire:O=>x.firePlayer(O),game:()=>x,dispose(){cancelAnimationFrame(bt),window.removeEventListener("resize",G),a.dispose(),l.dispose(),[f,g,_,p,M].forEach(O=>O.remove()),e.dispose()}}}const lx=n=>{const t=(()=>{switch(n){case"CLAIM":case"REPEAT":return"CLAIM";case"LOCK":return"LOCK";case"DEAD":return"DEAD";case"SHORT":return"SHORT";case"FLIP":return"FLIP";default:return"CONVERT"}})(),e=Js.find(i=>i.kind===t);return e?.tag==="bad"?[.95,.4,.36]:e?.tag==="tool"?[.95,.78,.4]:[.4,.95,.7]},cx="Five games. CONSTELLATION, TRANSFER, CIRCUIT, SHAPES, and TUBES — the read-the-circuit model: wires are dotted tubes carrying visible elements (invert / repeat / dead), and you hover a terminal to preview its reach. Reading the two circuits to pick the better side is the skill. Press 1–5; R reseeds.",hx=[{build:"live",date:"2026-08-11",title:"TUBES (game 5) — the read-the-circuit model",added:["Wires are thin dotted tubes (a cut-and-straightened torus: lit round core + dim walls).","Every terminal is legible: a fork is two tubes, and each tube carries a visible element — an INVERT ring, a REPEAT node, or a DEAD stub that never reaches a cell.","Hover a terminal to preview its reach (its tubes light up and the cells it reaches are ringed by element colour). Reading both circuits to pick the better side is the skill.","Terminals are the searching primitives from SHAPES (octahedra left, cubes right); a very slow ambient band drifts along every tube so the circuit is always gently alive. Mechanics reuse TRANSFER."]},{build:null,date:"2026-08-11",title:"SHAPES (game 4, experimental) — Modes × Primitives",added:["Terminals are Braille-Lab “searching” primitives — octahedra on the left, cubes on the right (lat/long lattice + scan meridian).","A claimed cell resolves into the “solving” (rubik) primitive of the side that took it, in that side’s colour.","Ported the searching + solving modes and the cube/octahedron warps into src/render/primitives.ts; kept the lit angular traces + bloom.","Reuses TRANSFER’s mechanics. Press 4."]},{build:null,date:"2026-08-11",title:"CIRCUIT (game 3) — lit circuit board",added:["A separate tab (press 3): the Paradroid duel rendered as a real circuit — right-angle traces routed through per-terminal vertical buses into the cell strip.","Light flows through the traces as pulses travel: a bright head with a trailing glow that lights each trace segment it passes, plus a bloom pass for the “deeper light”.","Reuses TRANSFER’s verified mechanics; the renderer (angular routing + additive dots + UnrealBloom) is the whole difference."]},{build:null,date:"2026-08-11",title:"TRANSFER (game 2) — playable",added:["The circuit renders as a flat dot-field: a central 12-cell strip flanked by two 8-terminal wiring layers, wires threading terminal → cell.","PLAN: click a side to take it. RUN: click your terminals to fire pulses that travel the wires (with tails) and claim cells — later pulse wins.","Owner colour (you teal / host coral), claim flash, REPEAT guns, the enemy AI firing back, shrinking timer ring, budget dots, win/lose.","Built on the logic core (deterministic sim + solution-first generator, verified across 200 boards). 6-6 rematch still TODO."]},{build:null,date:"2026-08-11",title:"CONSTELLATION: feel + content pass",added:["Extraction magnetism (cursor grabs the nearest glyph point) + reticle snap + extract-pop.","Glyph bank grown to 15 (min Hamming 8).","Timer is a hollow thin ring that shrinks and shifts teal → amber → red."]},{build:null,date:"2026-08-11",title:"Phase 2 — extraction, sweep, win/lose",added:["Click the glyph’s points while aligned to extract them; all points → lock solved, all locks → win.","TRIP hazards cost a strike + 10% of the timer (3 strikes = alarm); NOISE clicks are duds.","A scan wavefront sweeps the cloud; a pass caught mid-extraction while misaligned wipes a point back. Axis drift on D4+.","HUD: depleting timer, strike pips, extraction progress; win / alarm / timeout end screens with margin + extracted keys."]},{build:null,date:"2026-08-11",title:"Phase 1 polish",added:["θ_lock soft-snap with hysteresis (magnetic assist, hands-off).","Coherence → per-point brightness; the noise dims as a lock forms so the glyph reads cleanly.","A gold “found” shine (color tint + bloom) fires the moment a lock completes.","Diegetic dotted-arc coherence meter."]},{build:null,date:"2026-08-11",title:"Board wired into the renderer",added:["A generated CONSTELLATION board renders as a halftone point cloud.","Orbit-to-align: as your view nears a hidden axis, that lock’s signal contracts and the glyph resolves out of the noise.","R to reseed; this dev-log panel on the version badge."]},{build:null,date:"2026-08-11",title:"CONSTELLATION generator",added:["Solution-first, seeded board generator (spec §6): hidden axis, back-projected key glyph, TRIP hazards in the margin ring, noise fill.","Rigid-Procrustes coherence metric (fits the whole signal set to the glyph) — also the gameplay alignment cue.","False-constellation uniqueness check: verified across 1000 boards, zero spurious, all first-try.","Dependency-free vec3 math so the logic runs headless in Node for testing."]},{build:null,date:"2026-08-11",title:"Shared glyph bank",added:["10× 5×7 key glyphs (CONSTELLATION) + 6× 2×4 braille symbols (BREACH) — one cross-game visual language.","Distinctness verified numerically (min Hamming 9 and 4).","Helpers: back-projection points, the 1-dot TRIP margin ring, Hamming distance."]},{build:"e059300d",date:"2026-08-11",title:"Scaffold, renderer & cache-busting",added:["TypeScript + Vite + Three.js project.","Dotted-halftone look as a GPU point shader (depth → grayscale + size), ported from the Braille PoC.","Seeded RNG (mulberry32) + the shared session contract.","Cache-busting toolkit wired into the build (this badge)."]}],ux=[{phase:"Now",note:"CONSTELLATION full loop",items:[{label:"Board renders + resolves on alignment",done:!0},{label:"θ_lock soft-snap; coherence → brightness; found-shine",done:!0},{label:"Extraction, sweep + axis drift, TRIP strikes, win/lose + scoring",done:!0},{label:"Trace-stroke extraction variant + audio (coherence tone, ticks)"},{label:"SKILL modifiers (hint band, TRIP shimmer) + OVERRIDE + exfil rule"}]},{phase:"Next",note:"Harden + present",items:[{label:"Difficulty/skill/seed selector UI (PLAN screen)"},{label:"Feel tuning pass (extraction radius, sweep pressure, drift)"},{label:"Deterministic replay (seed + input log) as an acceptance test"}]},{phase:"Later",note:"The rest of the series",items:[{label:"Braille dot-matrix renderer (second render target)"},{label:"TRANSFER (Paradroid duel), TRACE (node capture), BREACH (matrix)"},{label:"Write the 4 missing specs (deduction, flow-routing, timing, crosslink)"},{label:"Host integration + deploy"}]}],dx=[{name:"CONSTELLATION",status:"playable",fantasy:"An encrypted datastructure hangs in space as a cloud of noise. From exactly one viewpoint the noise collapses into a key. Find the angle, read the key, extract it without touching the tripwires.",how:["Orbit the cloud (drag). One hidden viewing angle makes the scattered dots snap into a glyph.","As you near that angle the signal dots contract and brighten; within tolerance the view soft-snaps and the glyph is legible. The dotted arc fills toward a lock.","While aligned, click every glyph point to extract it (they light up). All points solves the lock; a gold shine confirms the key.","A NOISE click is a dud (small time cost); a TRIP dot — just outside the glyph outline — is a hazard hit. Harder boards hide several glyphs on different axes; solve them in any order."],fail:["Critical: 3 TRIP hits trips the alarm.","Soft: the run timer expires — attempt lost, retry allowed. You can jack out any time.","Pressure: a scan wavefront sweeps the cloud; caught mid-extraction while misaligned, it wipes a recovered point. Top tiers slowly drift the axis."],note:"Playable end to end. Still to come: trace-stroke variant, audio, and SKILL/OVERRIDE modifiers."},{name:"TRACE",status:"playable",fantasy:"Breach a network at an I/O port and capture a path to the registry before the system’s diagnostic subroutine traces the intrusion back to your entry.",how:["Capture adjacent nodes; each attempt rolls a visible detection chance (node rating vs your level).","Fortify nodes to slow the tracer; spend NUKE (silent capture) / FREEZE (halt tracer); grab STORE loot on detours.","On detection a tracer crawls back toward your entry on per-node countdowns — outrun it or get cut off."],fail:["Critical: the tracer reaches your entry node. Soft: jack out early, keep nothing."]},{name:"HDT",status:"playable",fantasy:"HanDouTai (半導体 — semiconductor). The board is dead. Flip every node from OFF to ON by reading the wire vocabulary first, then activating each element in the correct sequence. One misread shorts the circuit.",how:["Press 8. The board starts fully OFF. Read each wire element before you touch anything — hover to inspect its type.","Activate elements in sequence: a CLAIM node captures its cell; a SPLIT fans one pulse into two; a LOCK freezes the cell permanently against enemy writes.","JOINER and CONVERT reshape the signal flow — plan your order so dependent nodes are ready before their inputs fire.","Win rule (1985 standard): ≥ 7 cells Complete → board accepted. Exactly 6 Complete → Deadlock, replay the board. ≤ 5 Complete → Rejected."],fail:["Critical: triggering a DEAD END, SHORT, or FLIP node wastes the pulse — the cell stays off and the element is spent.","A FLIP node gives the cell to the opponent side; FLIP-owned cells count against your total.","Deadlock (6 Complete) replays the board from scratch — no win, no loss, just another try."],note:"Game 8: the read-the-circuit model brought to a duel against the host with the full wire vocabulary. Shared with TUBES (game 5).",glossary:Js},{name:"BREACH",status:"planned",fantasy:"A code matrix scrolls before you. You have a tiny buffer. Chain one path through the grid that smuggles every daemon in at once. (Cyberpunk 2077 Breach Protocol.)",how:["Pick glyphs into a small buffer; picks alternate axis — row, then column, then row…","Complete each daemon (a target sub-sequence) as a contiguous run in the buffer; overlap them so one path completes several.","Avoid the WORM hazard cell, which wastes a slot and speeds the clock."],fail:["Soft: timer or buffer runs out with zero daemons completed. Margin = spare buffer + time."]}],lh=()=>(document.querySelector('meta[name="cb"]')?.getAttribute("content")||"").replace(/#.*$/,"")||"——",de=n=>n.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),fx=n=>n.build==="live"?lh():n.build??"—";function px(){const n=hx.map(e=>{const i=e.added.map(s=>`<li>${de(s)}</li>`).join("");return`
      <div class="cx-ms">
        <div class="cx-ms-h"><span class="cx-tok">${de(fx(e))}</span>
          <span class="cx-ms-t">${de(e.title)}</span><span class="cx-date">${de(e.date)}</span></div>
        <ul>${i}</ul>
      </div>`}).join(""),t=ux.map(e=>{const i=e.items.map(s=>`<li class="${s.done?"done":""}">${s.done?"✓":"○"} ${de(s.label)}</li>`).join("");return`
      <div class="cx-rm">
        <div class="cx-rm-h">${de(e.phase)}${e.note?` <span class="cx-note">— ${de(e.note)}</span>`:""}</div>
        <ul>${i}</ul>
      </div>`}).join("");return`
    <div class="cx-status">${de(cx)}</div>
    <div class="cx-scroll">
      <div class="cx-sec">Changelog</div>${n}
      <div class="cx-sec">Roadmap</div>${t}
    </div>`}function mx(n){return`<div class="cx-lbl">Wire vocabulary</div><div class="cx-glossary">${n.map(e=>{const i=`cx-gtag cx-gtag-${e.tag}`;return`
      <div class="cx-grow">
        <canvas class="cx-gcanvas" data-kind="${de(e.kind)}" width="40" height="40" aria-hidden="true"></canvas>
        <div class="cx-ginfo">
          <span class="cx-gname">${de(e.name)}</span>
          <span class="cx-gmeaning">${de(e.meaning)}</span>
          <span class="${i}">${de(e.tag)}</span>
        </div>
      </div>`}).join("")}</div>`}function gx(){return`<div class="cx-scroll">${dx.map(t=>{const e=t.how.map(o=>`<li>${de(o)}</li>`).join(""),i=t.fail.map(o=>`<li>${de(o)}</li>`).join(""),s=t.note?`<div class="cx-gnote">${de(t.note)}</div>`:"",r=t.glossary?mx(t.glossary):"";return`
      <div class="cx-game">
        <div class="cx-game-h"><span class="cx-game-n">${de(t.name)}</span>
          <span class="cx-badge cx-${t.status.replace(/\s/g,"")}">${de(t.status)}</span></div>
        <div class="cx-fantasy">${de(t.fantasy)}</div>
        <div class="cx-lbl">How to play</div><ul>${e}</ul>
        <div class="cx-lbl">Failure</div><ul class="cx-fail">${i}</ul>
        ${s}
        ${r}
      </div>`}).join("")}</div>`}function _x(n){return`
    <div class="cx-head">
      <div>
        <div class="cx-title">hacking-mini-games</div>
        <div class="cx-sub">build <b>${de(lh())}</b></div>
      </div>
      <button class="cx-close" aria-label="close">✕</button>
    </div>
    <div class="cx-tabs">
      <button class="cx-tab ${n==="log"?"on":""}" data-tab="log">Dev Log</button>
      <button class="cx-tab ${n==="rules"?"on":""}" data-tab="rules">Rules</button>
    </div>
    ${n==="log"?px():gx()}`}function xx(n){const t=Math.min(2,devicePixelRatio||1),e=40,i=e*t,s=e/2,r=e/2,o=16;n.querySelectorAll("canvas.cx-gcanvas").forEach(a=>{const l=a.dataset.kind;if(!l)return;a.width=i,a.height=i,a.style.width=`${e}px`,a.style.height=`${e}px`;const c=a.getContext("2d");if(!c)return;c.scale(t,t),c.fillStyle="#0a0a10",c.fillRect(0,0,e,e);const h=ah(l,.7);for(const d of h){const f=s+d.x*o,m=r+d.y*o,g=Math.max(.6,d.r*o*.5),[_,p,u]=d.col;c.beginPath(),c.arc(f,m,g,0,Math.PI*2),c.fillStyle=`rgba(${Math.round(_*255)},${Math.round(p*255)},${Math.round(u*255)},${d.a})`,c.fill()}})}const vx=`
  #cx-panel{position:fixed;right:8px;bottom:44px;width:min(410px,calc(100vw - 16px));
    max-height:min(76vh,660px);display:none;flex-direction:column;z-index:2147483646;
    background:#0d0d12;border:1px solid #2a2a34;border-radius:10px;overflow:hidden;
    box-shadow:0 12px 40px rgba(0,0,0,.6);color:#c7c7cf;
    font:12px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace}
  #cx-panel.open{display:flex}
  #cx-panel .cx-head{display:flex;justify-content:space-between;align-items:flex-start;
    padding:12px 14px 10px;border-bottom:1px solid #20202a}
  #cx-panel .cx-title{color:#e6e6ee;font-weight:600}
  #cx-panel .cx-sub{color:#6f6f7a;margin-top:2px}
  #cx-panel .cx-sub b{color:#8fd0b6;font-weight:600}
  #cx-panel .cx-close{background:none;border:none;color:#777;cursor:pointer;font-size:14px;padding:2px 4px}
  #cx-panel .cx-close:hover{color:#ccc}
  #cx-panel .cx-tabs{display:flex;gap:4px;padding:8px 10px 0;border-bottom:1px solid #20202a}
  #cx-panel .cx-tab{background:none;border:none;border-bottom:2px solid transparent;color:#777;
    cursor:pointer;padding:6px 10px;font:inherit}
  #cx-panel .cx-tab.on{color:#e6e6ee;border-bottom-color:#8fd0b6}
  #cx-panel .cx-status{padding:10px 14px;color:#9a9aa6;border-bottom:1px solid #20202a}
  #cx-panel .cx-scroll{overflow:auto;padding:8px 14px 14px}
  #cx-panel .cx-sec{color:#7a7a86;text-transform:uppercase;letter-spacing:.08em;font-size:10px;margin:12px 0 6px}
  #cx-panel .cx-ms{margin:0 0 12px;padding:8px 10px;background:#111119;border:1px solid #1e1e28;border-radius:7px}
  #cx-panel .cx-ms-h{display:flex;align-items:baseline;gap:8px;margin-bottom:4px}
  #cx-panel .cx-tok{color:#8fd0b6;font-size:11px}
  #cx-panel .cx-ms-t{color:#e0e0e8;font-weight:600;flex:1}
  #cx-panel .cx-date{color:#5a5a64;font-size:10px}
  #cx-panel ul{margin:0;padding-left:16px}
  #cx-panel .cx-ms li{margin:2px 0;color:#a7a7b2}
  #cx-panel .cx-rm{margin:0 0 10px}
  #cx-panel .cx-rm-h{color:#c9c9d3;font-weight:600;margin-bottom:3px}
  #cx-panel .cx-note{color:#6f6f7a;font-weight:400}
  #cx-panel .cx-rm ul{list-style:none;padding-left:2px}
  #cx-panel .cx-rm li{margin:2px 0;color:#9a9aa6}
  #cx-panel .cx-rm li.done{color:#8fd0b6}
  #cx-panel .cx-game{margin:0 0 14px;padding:10px 12px;background:#111119;border:1px solid #1e1e28;border-radius:7px}
  #cx-panel .cx-game-h{display:flex;align-items:center;gap:8px;margin-bottom:6px}
  #cx-panel .cx-game-n{color:#e6e6ee;font-weight:700;letter-spacing:.06em;flex:1}
  #cx-panel .cx-badge{font-size:9px;text-transform:uppercase;letter-spacing:.08em;padding:2px 6px;border-radius:4px;
    background:#20202a;color:#8a8a96}
  #cx-panel .cx-phase1{background:#20321f;color:#8fd0a0}
  #cx-panel .cx-playable{background:#20321f;color:#8fd0a0}
  #cx-panel .cx-fantasy{color:#9a9aa6;font-style:italic;margin-bottom:8px}
  #cx-panel .cx-lbl{color:#7a7a86;text-transform:uppercase;letter-spacing:.06em;font-size:9px;margin:8px 0 3px}
  #cx-panel .cx-game li{margin:2px 0;color:#a7a7b2}
  #cx-panel .cx-fail li{color:#c9a0a0}
  #cx-panel .cx-gnote{margin-top:8px;padding-top:7px;border-top:1px solid #20202a;color:#6f6f7a}
  #cx-panel .cx-glossary{display:flex;flex-direction:column;gap:6px;margin-bottom:4px}
  #cx-panel .cx-grow{display:flex;align-items:center;gap:10px;padding:4px 0}
  #cx-panel .cx-gcanvas{flex:0 0 40px;height:40px;border-radius:5px;background:#0a0a10;display:block}
  #cx-panel .cx-ginfo{display:flex;flex-direction:column;gap:2px;min-width:0}
  #cx-panel .cx-gname{color:#e0e0e8;font-weight:700;font-size:11px}
  #cx-panel .cx-gmeaning{color:#8a8a96;font-size:10px;line-height:1.4}
  #cx-panel .cx-gtag{font-size:8px;text-transform:uppercase;letter-spacing:.08em;padding:1px 5px;border-radius:3px;
    background:#20202a;color:#8a8a96;align-self:flex-start}
  #cx-panel .cx-gtag-good{background:#1a2e20;color:#6fe0b8}
  #cx-panel .cx-gtag-bad{background:#2e1a1a;color:#d0605a}
  #cx-panel .cx-gtag-tool{background:#2c2414;color:#e0b070}
`;function Mx(){const n=document.createElement("style");n.textContent=vx,document.head.appendChild(n);const t=document.createElement("div");t.id="cx-panel",document.body.appendChild(t);let e="log";const i=()=>{t.innerHTML=_x(e),t.querySelector(".cx-close")?.addEventListener("click",()=>s(!1)),t.querySelectorAll(".cx-tab").forEach(a=>{a.addEventListener("click",()=>{e=a.dataset.tab??"log",i()})}),e==="rules"&&xx(t)},s=a=>{a&&i(),t.classList.toggle("open",a)};let r=0;const o=()=>{const a=document.getElementById("cb-badge");if(a){a.title="click for dev log · token copied too",a.addEventListener("click",()=>s(!t.classList.contains("open")));return}r++<100&&setTimeout(o,50)};o(),window.addEventListener("keydown",a=>{a.key==="Escape"&&s(!1)})}const Sx=[{game:"constellation-orbs",slot:"01",name:"CONSTELLATION",desc:"Orbit a cloud of thinking-orbs until one hidden angle snaps the scatter into a glyph, then extract it before the sweep.",accent:"#6fe0b8",tint:[.44,.88,.72],motif:"globe"},{game:"trace",slot:"02",name:"TRACE",desc:"Capture a path across the network to a registry, then race your own tracer back to the entry before it traces you home.",accent:"#e0b070",tint:[.95,.72,.4],motif:"network"},{game:"circuit-duel-2",slot:"03",name:"HDT",desc:"Read an unpowered circuit, take the better side, and fire pulses so your light claims 7 of 12 registers — dead ends, short-circuits and color-traps waste a pulse.",accent:"#8aa0ff",tint:[.58,.68,1],motif:"tube"}];function yx(n){const t="ui-monospace,SFMono-Regular,Menlo,monospace",e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=Math.min(2,window.devicePixelRatio||1),s=document.createElement("div");s.style.cssText="position:fixed;inset:0;z-index:2147483644;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.4rem;padding:2rem;background:#07070c;overflow:auto";const r=document.createElement("div");r.style.cssText="text-align:center",r.innerHTML=`<div style="font:11px ${t};letter-spacing:.3em;text-transform:uppercase;color:#5a5c6a">dotted-halftone intrusion puzzles</div><h1 style="margin:.7rem 0 0;font:400 24px/1.2 ${t};letter-spacing:.16em;color:#dfe1ea">HACKING&nbsp;MINI-GAMES</h1>`,s.appendChild(r);const o=document.createElement("div");o.style.cssText="display:flex;gap:20px;flex-wrap:wrap;justify-content:center;max-width:600px",s.appendChild(o);const a=document.createElement("div");a.style.cssText=`font:11px ${t};letter-spacing:.05em;color:#3f414d;text-align:center`,a.textContent="press 1–3 anytime · more games soon",s.appendChild(a);const l=[];for(const u of Sx){const M=document.createElement("button");M.type="button",M.setAttribute("aria-label",`play ${u.name}`),M.style.cssText="all:unset;box-sizing:border-box;cursor:pointer;width:258px;background:#0e0f16;border:1px solid #1c1d29;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:border-color .18s,transform .18s;-webkit-tap-highlight-color:transparent";const T=document.createElement("div");T.style.cssText="position:relative;height:132px;background:#090a10;display:flex;align-items:center;justify-content:center";const x=document.createElement("canvas");x.style.cssText="display:block",x.width=Math.round(258*i),x.height=Math.round(132*i),x.style.width="258px",x.style.height="132px",T.appendChild(x);const D=document.createElement("div");D.textContent=u.slot,D.style.cssText=`position:absolute;top:8px;left:12px;font:300 26px ${t};letter-spacing:.05em;color:${u.accent};opacity:.55`,T.appendChild(D),M.appendChild(T);const A=document.createElement("div");A.style.cssText="padding:.9rem 1.1rem 1.1rem;text-align:left",A.innerHTML=`<div style="font:500 15px ${t};letter-spacing:.14em;color:#e6e8f0">${u.name}</div><div style="margin-top:.5rem;font:12px/1.6 ${t};color:#71737f">${u.desc}</div><div style="margin-top:.9rem;font:11px ${t};letter-spacing:.14em;color:${u.accent}">PLAY →</div>`,M.appendChild(A),M.addEventListener("mouseenter",()=>{M.style.borderColor=u.accent,M.style.transform="translateY(-2px)"}),M.addEventListener("mouseleave",()=>{M.style.borderColor="#1c1d29",M.style.transform="none"}),M.addEventListener("focus",()=>M.style.borderColor=u.accent),M.addEventListener("blur",()=>M.style.borderColor="#1c1d29"),M.addEventListener("click",()=>n(u.game)),o.appendChild(M),l.push({canvas:x,ctx:x.getContext("2d"),spec:u})}document.body.appendChild(s);function c(u,M,T,x,D){const A=M/2,w=T/2,L=M*.78,E=34,S=R=>Math.sin(R*3.1+x*.6)*9+Math.sin(R*6.7-x*.9)*4;for(let R=0;R<=E;R++){const X=R/E,G=A-L/2+X*L,Q=w+S(X),nt=60;u.fillStyle=`rgba(${Math.round(nt*D[0])},${Math.round(nt*D[1])},${Math.round(nt*D[2])},0.9)`,u.beginPath(),u.arc(G,Q,1.5,0,Math.PI*2),u.fill()}for(let R=0;R<3;R++){const X=(x*.13+R/3)%1;for(let G=0;G<6;G++){const Q=X-G*.03;if(Q<0||Q>1)continue;const nt=A-L/2+Q*L,K=w+S(Q),it=(1-G/6)*.95;u.fillStyle=`rgba(${Math.round(210*D[0]+45)},${Math.round(210*D[1]+45)},${Math.round(210*D[2]+45)},${it})`,u.beginPath(),u.arc(nt,K,2.4-G*.25,0,Math.PI*2),u.fill()}}}function h(u,M,T,x,D){const A=M/2,w=T/2,L=7,E=[];for(let C=0;C<L;C++){const tt=C/L*Math.PI*2+.6,J=34+10*Math.sin(C*2.3);E.push([A+Math.cos(tt)*J*1.6,w+Math.sin(tt)*J])}const S=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,3],[2,5]],R=C=>`rgba(${Math.round(210*D[0]+30)},${Math.round(210*D[1]+30)},${Math.round(210*D[2]+30)},${C})`;for(const[C,tt]of S){const[J,at]=E[C],[Mt,bt]=E[tt],I=8;for(let O=1;O<I;O++){const j=O/I;u.fillStyle=R(.28),u.beginPath(),u.arc(J+(Mt-J)*j,at+(bt-at)*j,1,0,Math.PI*2),u.fill()}}const X=[E[0],E[3],E[4],E[5]],G=x*.5%(X.length-1),Q=Math.floor(G),nt=G-Q,K=X[Q],it=X[Q+1];u.fillStyle=R(1),u.beginPath(),u.arc(K[0]+(it[0]-K[0])*nt,K[1]+(it[1]-K[1])*nt,3,0,Math.PI*2),u.fill();for(let C=0;C<L;C++){const tt=C<=Q;u.fillStyle=R(tt?.9:.5),u.beginPath(),u.arc(E[C][0],E[C][1],tt?2.6:2,0,Math.PI*2),u.fill()}}function d(u,M){u.ctx.setTransform(i,0,0,i,0,0),u.ctx.clearRect(0,0,258,132),u.spec.motif==="globe"?Oc(u.ctx,"searching",258/2,132/2,42,M*1.4,u.spec.tint,1):u.spec.motif==="network"?h(u.ctx,258,132,M,u.spec.tint):c(u.ctx,258,132,M,u.spec.tint)}let f=0,m=!1;function g(){const u=performance.now()/1e3;for(const M of l)d(M,u);m&&(f=requestAnimationFrame(g))}function _(){if(!m){if(e){for(const u of l)d(u,.8);return}m=!0,f=requestAnimationFrame(g)}}function p(){m=!1,cancelAnimationFrame(f)}return{show(){s.style.display="flex",_()},hide(){s.style.display="none",p()},dispose(){p(),s.remove()}}}Mx();const Xs={difficulty:2,skill:2},ch=new Set(["circuit-duel-2"]);let Nn=0;function hh(n){const t=document.createElement("div");t.style.cssText="position:fixed;top:12px;left:12px;right:12px;padding:10px 14px;z-index:2147483645;background:#2a0f12;border:1px solid #5a2a2f;border-radius:8px;color:#e6a6a6;font:12px/1.5 ui-monospace,Menlo,monospace;white-space:pre-wrap",t.textContent=`game failed to start:
${n instanceof Error?n.stack??n.message:String(n)}`,document.body.appendChild(t)}const ts=["constellation-orbs","trace","circuit-duel-2"],Qs="/hacking-mini-games/";let qe=null,Zi="constellation-orbs",ji=0;function Ex(){document.getElementById("scene")?.remove();const n=document.createElement("canvas");return n.id="scene",document.getElementById("app").appendChild(n),n}function ia(n){qe?.dispose(),ji=0,Zi=n,ra.hide(),sa(!0),history.replaceState(null,"",`${Qs}${ts.indexOf(n)+1}`);const t=Ex(),e=i=>({spec:wi[Nn],seed:i,skill:Xs.skill});try{qe=n==="circuit-duel-2"?ax(t,e("hdt")):n==="trace"?O0(t,{...Xs,seed:"net"}):u0(t,{...Xs,seed:"orbs"}),window.__cx=qe}catch(i){console.error(i),hh(i)}Vo()}function uh(){if(qe)try{if(ch.has(Zi)){const n=qe.game();if(n.phase==="DEADLOCK"){qe.regenerate(wi[Nn],n.board.seed),Vo();return}ji+=1;let t="";n.phase==="WON"?(Nn<wi.length-1&&Nn++,t="up"):n.phase==="LOST"&&n.result&&n.result.p<n.result.e&&(Nn=0,t="down"),qe.regenerate(wi[Nn],`${Zi}-${ji}`),Vo(t)}else ji+=1,qe.regenerate(Xs.difficulty,`${Zi}-${ji}`)}catch(n){console.error(n),hh(n)}}const Bi=document.createElement("button");Bi.textContent="⟳";Bi.setAttribute("aria-label","reset / reseed");Bi.style.cssText="position:fixed;top:8px;right:10px;z-index:2147483646;width:44px;height:44px;border-radius:50%;border:1px solid #2c2c38;background:rgba(12,13,20,.6);color:#9a9aa6;font:20px/44px ui-monospace,Menlo,monospace;text-align:center;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation";Bi.addEventListener("click",uh);document.body.appendChild(Bi);const ki=document.createElement("button");ki.textContent="⌂";ki.setAttribute("aria-label","back to game picker");ki.style.cssText="position:fixed;top:8px;right:60px;z-index:2147483646;width:44px;height:44px;border-radius:50%;border:1px solid #2c2c38;background:rgba(12,13,20,.6);color:#9a9aa6;font:18px/44px ui-monospace,Menlo,monospace;text-align:center;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation";ki.addEventListener("click",dh);document.body.appendChild(ki);function sa(n){Bi.style.display=n?"block":"none",ki.style.display=n?"block":"none"}function dh(){qe?.dispose(),qe=null,window.__cx=null,sa(!1),Ri.style.display="none",history.replaceState(null,"",Qs),ra.show()}const Ri=document.createElement("div");Ri.style.cssText="position:fixed;top:9px;left:12px;z-index:2147483646;pointer-events:none;font:11px/1.5 ui-monospace,Menlo,monospace;color:#8a8a96";document.body.appendChild(Ri);function Vo(n=""){if(!ch.has(Zi)){Ri.style.display="none";return}Ri.style.display="block";const t=wi[Nn],e=n==="up"?' <span style="color:#8fd0b6">▲ climbed</span>':n==="down"?' <span style="color:#d0605a">▼ reset</span>':"";Ri.innerHTML=`<span style="color:#c2c2ce">LADDER ${Nn+1}/${wi.length}</span>${e}<br>you c${t.attacker} · host c${t.defender}<br><span style="color:#5a5a64">win → climb · lose → reset</span>`}const ra=yx(n=>ia(n)),Tx=location.pathname.startsWith(Qs)?location.pathname.slice(Qs.length):location.pathname.replace(/^\//,""),qr=parseInt(Tx.replace(/\D/g,""),10);qr>=1&&qr<=ts.length?ia(ts[qr-1]):(sa(!1),ra.show());window.addEventListener("keydown",n=>{const t=parseInt(n.key,10);t>=1&&t<=ts.length?ia(ts[t-1]):n.key==="Escape"?dh():(n.key==="r"||n.key==="R")&&qe&&uh()});
//# sourceMappingURL=index-jtmxxeUJ.js.map
