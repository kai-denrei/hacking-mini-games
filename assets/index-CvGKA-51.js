(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="170",Mi={ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zc=0,sa=1,Hc=2,Dl=1,Vc=2,hn=3,Dn=0,Re=1,un=2,pn=0,Yn=1,Hs=2,ra=3,oa=4,Gc=5,Hn=100,Wc=101,Xc=102,$c=103,Yc=104,qc=200,jc=201,Kc=202,Zc=203,Br=204,kr=205,Jc=206,Qc=207,th=208,eh=209,nh=210,ih=211,sh=212,rh=213,oh=214,zr=0,Hr=1,Vr=2,Ei=3,Gr=4,Wr=5,Xr=6,$r=7,Ll=0,ah=1,lh=2,Pn=0,Ul=1,Il=2,Nl=3,Fl=4,ch=5,Ol=6,Bl=7,kl=300,Ti=301,bi=302,Yr=303,qr=304,$s=306,jr=1e3,Gn=1001,Kr=1002,qe=1003,hh=1004,ss=1005,Qe=1006,or=1007,Wn=1008,xn=1009,zl=1010,Hl=1011,$i=1012,Uo=1013,Kn=1014,dn=1015,mn=1016,Io=1017,No=1018,Ai=1020,Vl=35902,Gl=1021,Wl=1022,$e=1023,Xl=1024,$l=1025,Si=1026,wi=1027,Yl=1028,Fo=1029,ql=1030,Oo=1031,Bo=1033,Ls=33776,Us=33777,Is=33778,Ns=33779,Zr=35840,Jr=35841,Qr=35842,to=35843,eo=36196,no=37492,io=37496,so=37808,ro=37809,oo=37810,ao=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,Fs=36492,vo=36494,Mo=36495,jl=36283,So=36284,yo=36285,Eo=36286,uh=3200,dh=3201,fh=0,ph=1,Cn="",Oe="srgb",Di="srgb-linear",Ys="linear",Qt="srgb",ii=7680,aa=519,mh=512,gh=513,_h=514,Kl=515,xh=516,vh=517,Mh=518,Sh=519,la=35044,ca="300 es",fn=2e3,Vs=2001;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,To=180/Math.PI;function ji(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function yh(n,t){return(n%t+t)%t}function ar(n,t,e){return(1-e)*n+e*t}function Fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Eh={DEG2RAD:Os};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],x=s[0],p=s[3],h=s[6],b=s[1],M=s[4],y=s[7],z=s[2],R=s[5],P=s[8];return r[0]=o*x+a*b+l*z,r[3]=o*p+a*M+l*R,r[6]=o*h+a*y+l*P,r[1]=c*x+u*b+d*z,r[4]=c*p+u*M+d*R,r[7]=c*h+u*y+d*P,r[2]=f*x+m*b+g*z,r[5]=f*p+m*M+g*R,r[8]=f*h+m*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=e*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*c-u*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lr.makeScale(t,e)),this}rotate(t){return this.premultiply(lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lr=new Gt;function Zl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Th(){const n=Gs("canvas");return n.style.display="block",n}const ha={};function Vi(n){n in ha||(ha[n]=!0,console.warn(n))}function bh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ah(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(n.r=gn(n.r),n.g=gn(n.g),n.b=gn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Cn?Ys:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ua=[.64,.33,.3,.6,.15,.06],da=[.2126,.7152,.0722],fa=[.3127,.329],pa=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ma=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Di]:{primaries:ua,whitePoint:fa,transfer:Ys,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:da,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:ua,whitePoint:fa,transfer:Qt,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:da,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let si;class Rh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=Gs("canvas")),si.width=t.width,si.height=t.height;const i=si.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gn(e[i]/255)*255):e[i]=gn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ch=0;class Jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cr(s[o].image)):r.push(cr(s[o]))}else r=cr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function cr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ph=0;class Ce extends ti{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=Gn,s=Gn,r=Qe,o=Wn,a=$e,l=xn,c=Ce.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ji(),this.name="",this.source=new Jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=kl;Ce.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(m+1)/2,z=(h+1)/2,R=(u+f)/4,P=(d+x)/4,N=(g+p)/4;return M>y&&M>z?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=P/i):y>z?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=N/s):z<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),i=P/r,s=N/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends ti{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ce(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class je extends Dh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ql extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lh extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==f||c!==m||u!==g){let p=1-a;const h=l*f+c*m+u*g+d*x,b=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const z=Math.sqrt(M),R=Math.atan2(z,h*b);p=Math.sin(p*R)/z,a=Math.sin(a*R)/z}const y=a*b;if(l=l*p+f*y,c=c*p+m*y,u=u*p+g*y,d=d*p+x*y,p===1-a){const z=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=z,c*=z,u*=z,d*=z}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*m-c*f,t[e+1]=l*g+u*f+c*d-a*m,t[e+2]=c*g+u*m+a*f-l*d,t[e+3]=u*g-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,i=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ga.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ga.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hr.copy(this).projectOnVector(t),this.sub(hr)}reflect(t){return this.sub(hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new W,ga=new en;class Ki{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ze):ze.fromBufferAttribute(r,o),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rs.copy(i.boundingBox)),rs.applyMatrix4(t.matrixWorld),this.union(rs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),os.subVectors(this.max,Oi),ri.subVectors(t.a,Oi),oi.subVectors(t.b,Oi),ai.subVectors(t.c,Oi),yn.subVectors(oi,ri),En.subVectors(ai,oi),In.subVectors(ri,ai);let e=[0,-yn.z,yn.y,0,-En.z,En.y,0,-In.z,In.y,yn.z,0,-yn.x,En.z,0,-En.x,In.z,0,-In.x,-yn.y,yn.x,0,-En.y,En.x,0,-In.y,In.x,0];return!ur(e,ri,oi,ai,os)||(e=[1,0,0,0,1,0,0,0,1],!ur(e,ri,oi,ai,os))?!1:(as.crossVectors(yn,En),e=[as.x,as.y,as.z],ur(e,ri,oi,ai,os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new W,new W,new W,new W,new W,new W,new W,new W],ze=new W,rs=new Ki,ri=new W,oi=new W,ai=new W,yn=new W,En=new W,In=new W,Oi=new W,os=new W,as=new W,Nn=new W;function ur(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Nn.fromArray(n,r);const a=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),l=t.dot(Nn),c=e.dot(Nn),u=i.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Uh=new Ki,Bi=new W,dr=new W;class qs{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Uh.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Bi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(dr)),this.expandByPoint(Bi.copy(t.center).sub(dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new W,fr=new W,ls=new W,Tn=new W,pr=new W,cs=new W,mr=new W;class js{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){fr.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(fr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ls),a=Tn.dot(this.direction),l=-Tn.dot(ls),c=Tn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fr).addScaledVector(ls,f),m}intersectSphere(t,e){on.subVectors(t.center,this.origin);const i=on.dot(this.direction),s=on.dot(on)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,i,s,r){pr.subVectors(e,t),cs.subVectors(i,t),mr.crossVectors(pr,cs);let o=this.direction.dot(mr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,t);const l=a*this.direction.dot(cs.crossVectors(Tn,cs));if(l<0)return null;const c=a*this.direction.dot(pr.cross(Tn));if(c<0||l+c>o)return null;const u=-a*Tn.dot(mr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,r,o,a,l,c,u,d,f,m,g,x,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,m,g,x,p)}set(t,e,i,s,r,o,a,l,c,u,d,f,m,g,x,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),o=1/li.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*d,g=a*u,x=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*d,g=c*u,x=c*d;e[0]=f+x*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*d,g=c*u,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*d,g=a*u,x=a*d;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*d+g,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+x,e[5]=o*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*u,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ih,t,Nh)}lookAt(t,e,i){const s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),bn.crossVectors(i,Le),bn.lengthSq()===0&&(Math.abs(i.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),bn.crossVectors(i,Le)),bn.normalize(),hs.crossVectors(Le,bn),s[0]=bn.x,s[4]=hs.x,s[8]=Le.x,s[1]=bn.y,s[5]=hs.y,s[9]=Le.y,s[2]=bn.z,s[6]=hs.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],h=i[14],b=i[3],M=i[7],y=i[11],z=i[15],R=s[0],P=s[4],N=s[8],E=s[12],v=s[1],w=s[5],K=s[9],j=s[13],nt=s[2],G=s[6],L=s[10],C=s[14],U=s[3],V=s[7],st=s[11],rt=s[15];return r[0]=o*R+a*v+l*nt+c*U,r[4]=o*P+a*w+l*G+c*V,r[8]=o*N+a*K+l*L+c*st,r[12]=o*E+a*j+l*C+c*rt,r[1]=u*R+d*v+f*nt+m*U,r[5]=u*P+d*w+f*G+m*V,r[9]=u*N+d*K+f*L+m*st,r[13]=u*E+d*j+f*C+m*rt,r[2]=g*R+x*v+p*nt+h*U,r[6]=g*P+x*w+p*G+h*V,r[10]=g*N+x*K+p*L+h*st,r[14]=g*E+x*j+p*C+h*rt,r[3]=b*R+M*v+y*nt+z*U,r[7]=b*P+M*w+y*G+z*V,r[11]=b*N+M*K+y*L+z*st,r[15]=b*E+M*j+y*C+z*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],g=t[3],x=t[7],p=t[11],h=t[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+x*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+e*c*d-e*a*m-r*o*d+i*o*m+r*a*u-i*c*u)+h*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],g=t[12],x=t[13],p=t[14],h=t[15],b=d*p*c-x*f*c+x*l*m-a*p*m-d*l*h+a*f*h,M=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,y=u*x*c-g*d*c+g*a*m-o*x*m-u*a*h+o*d*h,z=g*d*l-u*x*l-g*a*f+o*x*f+u*a*p-o*d*p,R=e*b+i*M+s*y+r*z;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=b*P,t[1]=(x*f*r-d*p*r-x*s*m+i*p*m+d*s*h-i*f*h)*P,t[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*h+i*l*h)*P,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*P,t[4]=M*P,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*h+e*f*h)*P,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*h-e*l*h)*P,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*m+e*l*m)*P,t[8]=y*P,t[9]=(g*d*r-u*x*r-g*i*m+e*x*m+u*i*h-e*d*h)*P,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*h+e*a*h)*P,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*m-e*a*m)*P,t[12]=z*P,t[13]=(u*x*s-g*d*s+g*i*f-e*x*f-u*i*p+e*d*p)*P,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*p-e*a*p)*P,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,m=r*u,g=r*d,x=o*u,p=o*d,h=a*d,b=l*c,M=l*u,y=l*d,z=i.x,R=i.y,P=i.z;return s[0]=(1-(x+h))*z,s[1]=(m+y)*z,s[2]=(g-M)*z,s[3]=0,s[4]=(m-y)*R,s[5]=(1-(f+h))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(g+M)*P,s[9]=(p-b)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const o=li.set(s[4],s[5],s[6]).length(),a=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);const c=1/r,u=1/o,d=1/a;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=u,He.elements[5]*=u,He.elements[6]*=u,He.elements[8]*=d,He.elements[9]*=d,He.elements[10]*=d,e.setFromRotationMatrix(He),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=fn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let m,g;if(a===fn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fn){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,m=(i+s)*u;let g,x;if(a===fn)g=(o+r)*d,x=-2*d;else if(a===Vs)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const li=new W,He=new le,Ih=new W(0,0,0),Nh=new W(1,1,1),bn=new W,hs=new W,Le=new W,_a=new le,xa=new en;class vn{constructor(t=0,e=0,i=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _a.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_a,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xa.setFromEuler(this),this.setFromQuaternion(xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fh=0;const va=new W,ci=new en,an=new le,us=new W,ki=new W,Oh=new W,Bh=new en,Ma=new W(1,0,0),Sa=new W(0,1,0),ya=new W(0,0,1),Ea={type:"added"},kh={type:"removed"},hi={type:"childadded",child:null},gr={type:"childremoved",child:null};class Pe extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new W,e=new vn,i=new en,s=new W(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Gt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Ma,t)}rotateY(t){return this.rotateOnAxis(Sa,t)}rotateZ(t){return this.rotateOnAxis(ya,t)}translateOnAxis(t,e){return va.copy(t).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ma,t)}translateY(t){return this.translateOnAxis(Sa,t)}translateZ(t){return this.translateOnAxis(ya,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?us.copy(t):us.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(ki,us,this.up):an.lookAt(us,ki,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(an),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ea),hi.child=t,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kh),gr.child=t,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ea),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new W(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new W,ln=new W,_r=new W,cn=new W,ui=new W,di=new W,Ta=new W,xr=new W,vr=new W,Mr=new W,Sr=new he,yr=new he,Er=new he;class Xe{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ve.subVectors(t,e),s.cross(Ve);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ve.subVectors(s,e),ln.subVectors(i,e),_r.subVectors(t,e);const o=Ve.dot(Ve),a=Ve.dot(ln),l=Ve.dot(_r),c=ln.dot(ln),u=ln.dot(_r),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Sr.setScalar(0),yr.setScalar(0),Er.setScalar(0),Sr.fromBufferAttribute(t,e),yr.fromBufferAttribute(t,i),Er.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sr,r.x),o.addScaledVector(yr,r.y),o.addScaledVector(Er,r.z),o}static isFrontFacing(t,e,i,s){return Ve.subVectors(i,e),ln.subVectors(t,e),Ve.cross(ln).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ve.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ui.subVectors(s,i),di.subVectors(r,i),xr.subVectors(t,i);const l=ui.dot(xr),c=di.dot(xr);if(l<=0&&c<=0)return e.copy(i);vr.subVectors(t,s);const u=ui.dot(vr),d=di.dot(vr);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ui,o);Mr.subVectors(t,r);const m=ui.dot(Mr),g=di.dot(Mr);if(g>=0&&m<=g)return e.copy(r);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(di,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Ta.subVectors(r,s),a=(d-u)/(d-u+(m-g)),e.copy(s).addScaledVector(Ta,a);const h=1/(p+x+f);return o=x*h,a=f*h,e.copy(i).addScaledVector(ui,o).addScaledVector(di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Tr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=$t.workingColorSpace){if(t=yh(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Tr(o,r,t+1/3),this.g=Tr(o,r,t),this.b=Tr(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const i=tc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return $t.fromWorkingColorSpace(Me.copy(this),t),Math.round(Te(Me.r*255,0,255))*65536+Math.round(Te(Me.g*255,0,255))*256+Math.round(Te(Me.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Me.copy(this),e);const i=Me.r,s=Me.g,r=Me.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Oe){$t.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,s=Me.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(ds);const i=ar(An.h,ds.h,e),s=ar(An.s,ds.s,e),r=ar(An.l,ds.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Xt;Xt.NAMES=tc;let zh=0;class Zi extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=ji(),this.name="",this.blending=Yn,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Br,this.blendDst=kr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(i.blending=this.blending),this.side!==Dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Br&&(i.blendSrc=this.blendSrc),this.blendDst!==kr&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zo extends Zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new W,fs=new Ft;class ae{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=la,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==la&&(t.usage=this.usage),t}}class ec extends ae{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class nc extends ae{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _n extends ae{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Hh=0;const Ne=new le,br=new Pe,fi=new W,Ue=new Ki,zi=new Ki,me=new W;class Ke extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zl(t)?nc:ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,i){return Ne.makeTranslation(t,e,i),this.applyMatrix4(Ne),this}scale(t,e,i){return Ne.makeScale(t,e,i),this.applyMatrix4(Ne),this}lookAt(t){return br.lookAt(t),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const i=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zi.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Ue.min,zi.min),Ue.expandByPoint(me),me.addVectors(Ue.max,zi.max),Ue.expandByPoint(me)):(Ue.expandByPoint(zi.min),Ue.expandByPoint(zi.max))}Ue.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)me.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(t,c),me.add(fi)),s=Math.max(s,i.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new W,l[N]=new W;const c=new W,u=new W,d=new W,f=new Ft,m=new Ft,g=new Ft,x=new W,p=new W;function h(N,E,v){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,v),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),u.sub(c),d.sub(c),m.sub(f),g.sub(f);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(w),a[N].add(x),a[E].add(x),a[v].add(x),l[N].add(p),l[E].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,E=b.length;N<E;++N){const v=b[N],w=v.start,K=v.count;for(let j=w,nt=w+K;j<nt;j+=3)h(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const M=new W,y=new W,z=new W,R=new W;function P(N){z.fromBufferAttribute(s,N),R.copy(z);const E=a[N];M.copy(E),M.sub(z.multiplyScalar(z.dot(E))).normalize(),y.crossVectors(R,E);const w=y.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,w)}for(let N=0,E=b.length;N<E;++N){const v=b[N],w=v.start,K=v.count;for(let j=w,nt=w+K;j<nt;j+=3)P(t.getX(j+0)),P(t.getX(j+1)),P(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,d=new W;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new ae(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ba=new le,Fn=new js,ps=new qs,Aa=new W,ms=new W,gs=new W,_s=new W,Ar=new W,xs=new W,wa=new W,vs=new W;class tn extends Pe{constructor(t=new Ke,e=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ar.fromBufferAttribute(d,t),o?xs.addScaledVector(Ar,u):xs.addScaledVector(Ar.sub(e),u))}e.add(xs)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(ps.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(ps,Aa)===null||Fn.origin.distanceToSquared(Aa)>(t.far-t.near)**2))&&(ba.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(ba),!(i.boundingBox!==null&&Fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=o[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,z=M;y<z;y+=3){const R=a.getX(y),P=a.getX(y+1),N=a.getX(y+2);s=Ms(this,h,t,i,c,u,d,R,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const b=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);s=Ms(this,o,t,i,c,u,d,b,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=o[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,z=M;y<z;y+=3){const R=y,P=y+1,N=y+2;s=Ms(this,h,t,i,c,u,d,R,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const b=p,M=p+1,y=p+2;s=Ms(this,o,t,i,c,u,d,b,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Vh(n,t,e,i,s,r,o,a){let l;if(t.side===Re?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Dn,a),l===null)return null;vs.copy(a),vs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(vs);return c<e.near||c>e.far?null:{distance:c,point:vs.clone(),object:n}}function Ms(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ms),n.getVertexPosition(l,gs),n.getVertexPosition(c,_s);const u=Vh(n,t,e,i,ms,gs,_s,wa);if(u){const d=new W;Xe.getBarycoord(wa,ms,gs,_s,d),s&&(u.uv=Xe.getInterpolatedAttribute(s,a,l,c,d,new Ft)),r&&(u.uv1=Xe.getInterpolatedAttribute(r,a,l,c,d,new Ft)),o&&(u.normal=Xe.getInterpolatedAttribute(o,a,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};Xe.getNormal(ms,gs,_s,f.normal),u.face=f,u.barycoord=d}return u}class Ji extends Ke{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function g(x,p,h,b,M,y,z,R,P,N,E){const v=y/P,w=z/N,K=y/2,j=z/2,nt=R/2,G=P+1,L=N+1;let C=0,U=0;const V=new W;for(let st=0;st<L;st++){const rt=st*w-j;for(let at=0;at<G;at++){const bt=at*v-K;V[x]=bt*b,V[p]=rt*M,V[h]=nt,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[h]=R>0?1:-1,u.push(V.x,V.y,V.z),d.push(at/P),d.push(1-st/N),C+=1}}for(let st=0;st<N;st++)for(let rt=0;rt<P;rt++){const at=f+rt+G*st,bt=f+rt+G*(st+1),I=f+(rt+1)+G*(st+1),F=f+(rt+1)+G*st;l.push(at,bt,F),l.push(bt,I,F),U+=6}a.addGroup(m,U,E),m+=U,f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ye(n){const t={};for(let e=0;e<n.length;e++){const i=Ri(n[e]);for(const s in i)t[s]=i[s]}return t}function Gh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ic(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Yi={clone:Ri,merge:ye};var Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _e extends Zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=Gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class sc extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new W,Ra=new Ft,Ca=new Ft;class We extends sc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,Ra,Ca),e.subVectors(Ca,Ra)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pi=-90,mi=1;class $h extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(pi,mi,t,e);s.layers=this.layers,this.add(s);const r=new We(pi,mi,t,e);r.layers=this.layers,this.add(r);const o=new We(pi,mi,t,e);o.layers=this.layers,this.add(o);const a=new We(pi,mi,t,e);a.layers=this.layers,this.add(a);const l=new We(pi,mi,t,e);l.layers=this.layers,this.add(l);const c=new We(pi,mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rc extends Ce{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yh extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new rc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:Ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:pn});r.uniforms.tEquirect.value=e;const o=new tn(s,r),a=e.minFilter;return e.minFilter===Wn&&(e.minFilter=Qe),new $h(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const wr=new W,qh=new W,jh=new Gt;class Rn{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wr.subVectors(i,e).cross(qh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jh.getNormalMatrix(t),s=this.coplanarPoint(wr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new qs,Ss=new W;class oc{constructor(t=new Rn,e=new Rn,i=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],h=s[12],b=s[13],M=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,p-m,y-h).normalize(),i[1].setComponents(l+r,f+c,p+m,y+h).normalize(),i[2].setComponents(l+o,f+u,p+g,y+b).normalize(),i[3].setComponents(l-o,f-u,p-g,y-b).normalize(),i[4].setComponents(l-a,f-d,p-x,y-M).normalize(),e===fn)i[5].setComponents(l+a,f+d,p+x,y+M).normalize();else if(e===Vs)i[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ss.x=s.normal.x>0?t.max.x:t.min.x,Ss.y=s.normal.y>0?t.max.y:t.min.y,Ss.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ac(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Kh(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ks extends Ke{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,m=[],g=[],x=[],p=[];for(let h=0;h<u;h++){const b=h*f-o;for(let M=0;M<c;M++){const y=M*d-r;g.push(y,-b,0),x.push(0,0,1),p.push(M/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const M=b+c*h,y=b+c*(h+1),z=b+1+c*(h+1),R=b+1+c*h;m.push(M,y,R),m.push(y,z,R)}this.setIndex(m),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jh=`#ifdef USE_ALPHAHASH
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
#endif`,Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
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
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru=`#ifdef USE_BATCHING
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
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hu=`#ifdef USE_IRIDESCENCE
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
#endif`,uu=`#ifdef USE_BUMPMAP
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mu=`#define PI 3.141592653589793
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
} // validated`,Su=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yu=`vec3 transformedNormal = objectNormal;
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
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
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
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vu=`uniform bool receiveShadow;
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
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
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
#endif`,ju=`struct PhysicalMaterial {
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
}`,Ku=`
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nd=`float getShadowMask() {
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
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
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
}`,sf=`#if DEPTH_PACKING == 3200
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
}`,rf=`#define DISTANCE
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
}`,of=`#define DISTANCE
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`uniform float scale;
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#define LAMBERT
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
}`,pf=`#define LAMBERT
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
}`,mf=`#define MATCAP
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
}`,gf=`#define MATCAP
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
}`,_f=`#define NORMAL
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
}`,xf=`#define NORMAL
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
}`,vf=`#define PHONG
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
}`,Mf=`#define PHONG
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
}`,Sf=`#define STANDARD
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
}`,yf=`#define STANDARD
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
}`,Ef=`#define TOON
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
}`,Tf=`#define TOON
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
}`,bf=`uniform float size;
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
}`,Af=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Rf=`uniform vec3 color;
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
}`,Cf=`uniform float rotation;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Zh,alphahash_pars_fragment:Jh,alphamap_fragment:Qh,alphamap_pars_fragment:tu,alphatest_fragment:eu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:su,batching_pars_vertex:ru,batching_vertex:ou,begin_vertex:au,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:hu,bumpmap_pars_fragment:uu,clipping_planes_fragment:du,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:gu,color_pars_fragment:_u,color_pars_vertex:xu,color_vertex:vu,common:Mu,cube_uv_reflection_fragment:Su,defaultnormal_vertex:yu,displacementmap_pars_vertex:Eu,displacementmap_vertex:Tu,emissivemap_fragment:bu,emissivemap_pars_fragment:Au,colorspace_fragment:wu,colorspace_pars_fragment:Ru,envmap_fragment:Cu,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Du,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Gu,envmap_vertex:Uu,fog_vertex:Iu,fog_pars_vertex:Nu,fog_fragment:Fu,fog_pars_fragment:Ou,gradientmap_pars_fragment:Bu,lightmap_pars_fragment:ku,lights_lambert_fragment:zu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Vu,lights_toon_fragment:Wu,lights_toon_pars_fragment:Xu,lights_phong_fragment:$u,lights_phong_pars_fragment:Yu,lights_physical_fragment:qu,lights_physical_pars_fragment:ju,lights_fragment_begin:Ku,lights_fragment_maps:Zu,lights_fragment_end:Ju,logdepthbuf_fragment:Qu,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:sd,map_particle_fragment:rd,map_particle_pars_fragment:od,metalnessmap_fragment:ad,metalnessmap_pars_fragment:ld,morphinstance_vertex:cd,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:xd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:Ed,opaque_fragment:Td,packing:bd,premultiplied_alpha_fragment:Ad,project_vertex:wd,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Ud,shadowmap_vertex:Id,shadowmask_pars_fragment:Nd,skinbase_vertex:Fd,skinning_pars_vertex:Od,skinning_vertex:Bd,skinnormal_vertex:kd,specularmap_fragment:zd,specularmap_pars_fragment:Hd,tonemapping_fragment:Vd,tonemapping_pars_fragment:Gd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:$d,uv_pars_vertex:Yd,uv_vertex:qd,worldpos_vertex:jd,background_vert:Kd,background_frag:Zd,backgroundCube_vert:Jd,backgroundCube_frag:Qd,cube_vert:tf,cube_frag:ef,depth_vert:nf,depth_frag:sf,distanceRGBA_vert:rf,distanceRGBA_frag:of,equirect_vert:af,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:hf,meshbasic_vert:uf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:_f,meshnormal_frag:xf,meshphong_vert:vf,meshphong_frag:Mf,meshphysical_vert:Sf,meshphysical_frag:yf,meshtoon_vert:Ef,meshtoon_frag:Tf,points_vert:bf,points_frag:Af,shadow_vert:wf,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Pf},Mt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Je={basic:{uniforms:ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:ye([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:ye([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:ye([Mt.points,Mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:ye([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:ye([Mt.common,Mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:ye([Mt.sprite,Mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:ye([Mt.common,Mt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:ye([Mt.lights,Mt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Je.physical={uniforms:ye([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const ys={r:0,b:0,g:0},Bn=new vn,Df=new le;function Lf(n,t,e,i,s,r,o){const a=new Xt(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1;const y=g(b);y===null?h(a,l):y&&y.isColor&&(h(y,1),M=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===$s)?(u===void 0&&(u=new tn(new Ji(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Ri(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bn.copy(M.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(Bn)),u.material.toneMapped=$t.getTransfer(y.colorSpace)!==Qt,(d!==y||f!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new tn(new Ks(2,2),new _e({name:"BackgroundMaterial",uniforms:Ri(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$t.getTransfer(y.colorSpace)!==Qt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,M){b.getRGB(ys,ic(n)),i.buffers.color.setClear(ys.r,ys.g,ys.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(a,l)},render:x,addToRenderList:p}}function Uf(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(v,w,K,j,nt){let G=!1;const L=d(j,K,w);r!==L&&(r=L,c(r.object)),G=m(v,j,K,nt),G&&g(v,j,K,nt),nt!==null&&t.update(nt,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(v,w,K,j),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,w,K){const j=K.wireframe===!0;let nt=i[v.id];nt===void 0&&(nt={},i[v.id]=nt);let G=nt[w.id];G===void 0&&(G={},nt[w.id]=G);let L=G[j];return L===void 0&&(L=f(l()),G[j]=L),L}function f(v){const w=[],K=[],j=[];for(let nt=0;nt<e;nt++)w[nt]=0,K[nt]=0,j[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:K,attributeDivisors:j,object:v,attributes:{},index:null}}function m(v,w,K,j){const nt=r.attributes,G=w.attributes;let L=0;const C=K.getAttributes();for(const U in C)if(C[U].location>=0){const st=nt[U];let rt=G[U];if(rt===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),st===void 0||st.attribute!==rt||rt&&st.data!==rt.data)return!0;L++}return r.attributesNum!==L||r.index!==j}function g(v,w,K,j){const nt={},G=w.attributes;let L=0;const C=K.getAttributes();for(const U in C)if(C[U].location>=0){let st=G[U];st===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(st=v.instanceColor));const rt={};rt.attribute=st,st&&st.data&&(rt.data=st.data),nt[U]=rt,L++}r.attributes=nt,r.attributesNum=L,r.index=j}function x(){const v=r.newAttributes;for(let w=0,K=v.length;w<K;w++)v[w]=0}function p(v){h(v,0)}function h(v,w){const K=r.newAttributes,j=r.enabledAttributes,nt=r.attributeDivisors;K[v]=1,j[v]===0&&(n.enableVertexAttribArray(v),j[v]=1),nt[v]!==w&&(n.vertexAttribDivisor(v,w),nt[v]=w)}function b(){const v=r.newAttributes,w=r.enabledAttributes;for(let K=0,j=w.length;K<j;K++)w[K]!==v[K]&&(n.disableVertexAttribArray(K),w[K]=0)}function M(v,w,K,j,nt,G,L){L===!0?n.vertexAttribIPointer(v,w,K,nt,G):n.vertexAttribPointer(v,w,K,j,nt,G)}function y(v,w,K,j){x();const nt=j.attributes,G=K.getAttributes(),L=w.defaultAttributeValues;for(const C in G){const U=G[C];if(U.location>=0){let V=nt[C];if(V===void 0&&(C==="instanceMatrix"&&v.instanceMatrix&&(V=v.instanceMatrix),C==="instanceColor"&&v.instanceColor&&(V=v.instanceColor)),V!==void 0){const st=V.normalized,rt=V.itemSize,at=t.get(V);if(at===void 0)continue;const bt=at.buffer,I=at.type,F=at.bytesPerElement,Q=I===n.INT||I===n.UNSIGNED_INT||V.gpuType===Uo;if(V.isInterleavedBufferAttribute){const Y=V.data,X=Y.stride,et=V.offset;if(Y.isInstancedInterleavedBuffer){for(let ht=0;ht<U.locationSize;ht++)h(U.location+ht,Y.meshPerAttribute);v.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ht=0;ht<U.locationSize;ht++)p(U.location+ht);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let ht=0;ht<U.locationSize;ht++)M(U.location+ht,rt/U.locationSize,I,st,X*F,(et+rt/U.locationSize*ht)*F,Q)}else{if(V.isInstancedBufferAttribute){for(let Y=0;Y<U.locationSize;Y++)h(U.location+Y,V.meshPerAttribute);v.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Y=0;Y<U.locationSize;Y++)p(U.location+Y);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Y=0;Y<U.locationSize;Y++)M(U.location+Y,rt/U.locationSize,I,st,rt*F,rt/U.locationSize*Y*F,Q)}}else if(L!==void 0){const st=L[C];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(U.location,st);break;case 3:n.vertexAttrib3fv(U.location,st);break;case 4:n.vertexAttrib4fv(U.location,st);break;default:n.vertexAttrib1fv(U.location,st)}}}}b()}function z(){N();for(const v in i){const w=i[v];for(const K in w){const j=w[K];for(const nt in j)u(j[nt].object),delete j[nt];delete w[K]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const w=i[v.id];for(const K in w){const j=w[K];for(const nt in j)u(j[nt].object),delete j[nt];delete w[K]}delete i[v.id]}function P(v){for(const w in i){const K=i[w];if(K[v.id]===void 0)continue;const j=K[v.id];for(const nt in j)u(j[nt].object),delete j[nt];delete K[v.id]}}function N(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:z,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function If(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,i,1)}function l(c,u,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Nf(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==$e&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==xn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==dn&&!N)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:z,maxSamples:R}}function Ff(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Rn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:i,M=b*4;let y=h.clippingState||null;l.value=y,y=u(g,f,M,m);for(let z=0;z!==M;++z)y[z]=e[z];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const h=m+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,y=m;M!==x;++M,y+=4)o.copy(d[M]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Of(n){let t=new WeakMap;function e(o,a){return a===Yr?o.mapping=Ti:a===qr&&(o.mapping=bi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yr||a===qr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yh(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class ei extends sc{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,Pa=[.125,.215,.35,.446,.526,.582],Vn=20,Rr=new ei,Da=new Xt;let Cr=null,Pr=0,Dr=0,Lr=!1;const zn=(1+Math.sqrt(5))/2,gi=1/zn,La=[new W(-zn,gi,0),new W(zn,gi,0),new W(-gi,0,zn),new W(gi,0,zn),new W(0,zn,-gi),new W(0,zn,gi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr,Pr,Dr),this._renderer.xr.enabled=Lr,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:mn,format:$e,colorSpace:Di,depthBuffer:!1},s=Ia(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bf(r)),this._blurMaterial=kf(r,t,e)}return s}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,i,s){const a=new We(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Da),u.toneMapping=Pn,u.autoClear=!1;const m=new zo({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new tn(new Ji,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(Da),x=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):b===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const M=this._cubeSize;Es(s,b*M,h>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ti||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Rr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=La[(s-r-1)%La.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new tn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):Vn;p>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const h=[];let b=0;for(let P=0;P<Vn;++P){const N=P/x,E=Math.exp(-N*N/2);h.push(E),P===0?b+=E:P<p&&(b+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const y=this._sizeLods[s],z=3*y*(s>M-vi?s-M+vi:0),R=4*(this._cubeSize-y);Es(e,z,R,3*y,2*y),l.setRenderTarget(e),l.render(d,Rr)}}function Bf(n){const t=[],e=[],i=[];let s=n;const r=n-vi+1+Pa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-vi?l=Pa[o-n+vi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,x=3,p=2,h=1,b=new Float32Array(x*g*m),M=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,N=R>2?0:-1,E=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];b.set(E,x*g*R),M.set(f,p*g*R);const v=[R,R,R,R,R,R];y.set(v,h*g*R)}const z=new Ke;z.setAttribute("position",new ae(b,x)),z.setAttribute("uv",new ae(M,p)),z.setAttribute("faceIndex",new ae(y,h)),t.push(z),s>vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ia(n,t,e){const i=new je(n,t,e);return i.texture.mapping=$s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function kf(n,t,e){const i=new Float32Array(Vn),s=new W(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Na(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Fa(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function zf(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yr||l===qr,u=l===Ti||l===bi;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ua(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Ua(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Hf(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Vi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vf(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let p=0,h=x.length;p<h;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const x=m[g];for(let p=0,h=x.length;p<h;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let M=0,y=b.length;M<y;M+=3){const z=b[M+0],R=b[M+1],P=b[M+2];f.push(z,R,R,P,P,z)}}else if(g!==void 0){const b=g.array;x=g.version;for(let M=0,y=b.length/3-1;M<y;M+=3){const z=M+0,R=M+1,P=M+2;f.push(z,R,R,P,P,z)}}else return;const p=new(Zl(f)?nc:ec)(f,1);p.version=x;const h=r.get(d);h&&t.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Gf(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*o,g),e.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,i,1)}function d(f,m,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/o,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,x,0,g);let h=0;for(let b=0;b<g;b++)h+=m[b]*x[b];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Wf(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Xf(n,t,e){const i=new WeakMap,s=new he;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let v=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let z=a.attributes.position.count*y,R=1;z>t.maxTextureSize&&(R=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*R*4*d),N=new Ql(P,z,R,d);N.type=dn,N.needsUpdate=!0;const E=y*4;for(let w=0;w<d;w++){const K=h[w],j=b[w],nt=M[w],G=z*R*4*w;for(let L=0;L<K.count;L++){const C=L*E;g===!0&&(s.fromBufferAttribute(K,L),P[G+C+0]=s.x,P[G+C+1]=s.y,P[G+C+2]=s.z,P[G+C+3]=0),x===!0&&(s.fromBufferAttribute(j,L),P[G+C+4]=s.x,P[G+C+5]=s.y,P[G+C+6]=s.z,P[G+C+7]=0),p===!0&&(s.fromBufferAttribute(nt,L),P[G+C+8]=s.x,P[G+C+9]=s.y,P[G+C+10]=s.z,P[G+C+11]=nt.itemSize===4?s.w:1)}}f={count:d,texture:N,size:new Ft(z,R)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function $f(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class lc extends Ce{constructor(t,e,i,s,r,o,a,l,c,u=Si){if(u!==Si&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=Kn),i===void 0&&u===wi&&(i=Ai),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cc=new Ce,Oa=new lc(1,1),hc=new Ql,uc=new Lh,dc=new rc,Ba=[],ka=[],za=new Float32Array(16),Ha=new Float32Array(9),Va=new Float32Array(4);function Li(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ba[s];if(r===void 0&&(r=new Float32Array(s),Ba[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Zs(n,t){let e=ka[t];e===void 0&&(e=new Int32Array(t),ka[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Yf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2fv(this.addr,t),pe(e,t)}}function jf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;n.uniform3fv(this.addr,t),pe(e,t)}}function Kf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4fv(this.addr,t),pe(e,t)}}function Zf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;Va.set(i),n.uniformMatrix2fv(this.addr,!1,Va),pe(e,i)}}function Jf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;Ha.set(i),n.uniformMatrix3fv(this.addr,!1,Ha),pe(e,i)}}function Qf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,i))return;za.set(i),n.uniformMatrix4fv(this.addr,!1,za),pe(e,i)}}function tp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ep(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2iv(this.addr,t),pe(e,t)}}function np(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3iv(this.addr,t),pe(e,t)}}function ip(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4iv(this.addr,t),pe(e,t)}}function sp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function rp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2uiv(this.addr,t),pe(e,t)}}function op(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3uiv(this.addr,t),pe(e,t)}}function ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4uiv(this.addr,t),pe(e,t)}}function lp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Oa.compareFunction=Kl,r=Oa):r=cc,e.setTexture2D(t||r,s)}function cp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||uc,s)}function hp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||dc,s)}function up(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hc,s)}function dp(n){switch(n){case 5126:return Yf;case 35664:return qf;case 35665:return jf;case 35666:return Kf;case 35674:return Zf;case 35675:return Jf;case 35676:return Qf;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return op;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}function fp(n,t){n.uniform1fv(this.addr,t)}function pp(n,t){const e=Li(t,this.size,2);n.uniform2fv(this.addr,e)}function mp(n,t){const e=Li(t,this.size,3);n.uniform3fv(this.addr,e)}function gp(n,t){const e=Li(t,this.size,4);n.uniform4fv(this.addr,e)}function _p(n,t){const e=Li(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function xp(n,t){const e=Li(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function vp(n,t){const e=Li(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Mp(n,t){n.uniform1iv(this.addr,t)}function Sp(n,t){n.uniform2iv(this.addr,t)}function yp(n,t){n.uniform3iv(this.addr,t)}function Ep(n,t){n.uniform4iv(this.addr,t)}function Tp(n,t){n.uniform1uiv(this.addr,t)}function bp(n,t){n.uniform2uiv(this.addr,t)}function Ap(n,t){n.uniform3uiv(this.addr,t)}function wp(n,t){n.uniform4uiv(this.addr,t)}function Rp(n,t,e){const i=this.cache,s=t.length,r=Zs(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cc,r[o])}function Cp(n,t,e){const i=this.cache,s=t.length,r=Zs(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uc,r[o])}function Pp(n,t,e){const i=this.cache,s=t.length,r=Zs(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dc,r[o])}function Dp(n,t,e){const i=this.cache,s=t.length,r=Zs(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hc,r[o])}function Lp(n){switch(n){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return xp;case 35676:return vp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return yp;case 35669:case 35673:return Ep;case 5125:return Tp;case 36294:return bp;case 36295:return Ap;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Dp}}class Up{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=dp(e.type)}}class Ip{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lp(e.type)}}class Np{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function Ga(n,t){n.seq.push(t),n.map[t.id]=t}function Fp(n,t,e){const i=n.name,s=i.length;for(Ur.lastIndex=0;;){const r=Ur.exec(i),o=Ur.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ga(e,c===void 0?new Up(a,n,t):new Ip(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Np(a),Ga(e,d)),e=d}}}class Bs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Fp(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Wa(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Op=37297;let Bp=0;function kp(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Xa=new Gt;function zp(n){$t._getMatrix(Xa,$t.workingColorSpace,n);const t=`mat3( ${Xa.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case Ys:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $a(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+kp(n.getShaderSource(t),o)}else return s}function Hp(n,t){const e=zp(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vp(n,t){let e;switch(t){case Ul:e="Linear";break;case Il:e="Reinhard";break;case Nl:e="Cineon";break;case Fl:e="ACESFilmic";break;case Ol:e="AgX";break;case Bl:e="Neutral";break;case ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new W;function Gp(){$t.getLuminanceCoefficients(Ts);const n=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function Xp(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $p(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Gi(n){return n!==""}function Ya(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qa(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(n){return n.replace(Yp,jp)}const qp=new Map;function jp(n,t){let e=Wt[t];if(e===void 0){const i=qp.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bo(e)}const Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(n){return n.replace(Kp,Zp)}function Zp(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ka(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Jp(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qp(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ti:case bi:t="ENVMAP_TYPE_CUBE";break;case $s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function em(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ll:t="ENVMAP_BLENDING_MULTIPLY";break;case ah:t="ENVMAP_BLENDING_MIX";break;case lh:t="ENVMAP_BLENDING_ADD";break}return t}function nm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function im(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Jp(e),c=Qp(e),u=tm(e),d=em(e),f=nm(e),m=Wp(e),g=Xp(r),x=s.createProgram();let p,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),h.length>0&&(h+=`
`)):(p=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),h=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Vp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Hp("linearToOutputTexel",e.outputColorSpace),Gp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),o=bo(o),o=Ya(o,e),o=qa(o,e),a=bo(a),a=Ya(a,e),a=qa(a,e),o=ja(o),a=ja(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=b+p+o,y=b+h+a,z=Wa(s,s.VERTEX_SHADER,M),R=Wa(s,s.FRAGMENT_SHADER,y);s.attachShader(x,z),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(w){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(x).trim(),j=s.getShaderInfoLog(z).trim(),nt=s.getShaderInfoLog(R).trim();let G=!0,L=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,z,R);else{const C=$a(s,z,"vertex"),U=$a(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+K+`
`+C+`
`+U)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(j===""||nt==="")&&(L=!1);L&&(w.diagnostics={runnable:G,programLog:K,vertexShader:{log:j,prefix:p},fragmentShader:{log:nt,prefix:h}})}s.deleteShader(z),s.deleteShader(R),N=new Bs(s,x),E=$p(s,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Op)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=R,this}let sm=0;class rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new om(t),e.set(t,i)),i}}class om{constructor(t){this.id=sm++,this.code=t,this.usedTimes=0}}function am(n,t,e,i,s,r,o){const a=new ko,l=new rm,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,v,w,K,j){const nt=K.fog,G=j.geometry,L=E.isMeshStandardMaterial?K.environment:null,C=(E.isMeshStandardMaterial?e:t).get(E.envMap||L),U=C&&C.mapping===$s?C.image.height:null,V=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=st!==void 0?st.length:0;let at=0;G.morphAttributes.position!==void 0&&(at=1),G.morphAttributes.normal!==void 0&&(at=2),G.morphAttributes.color!==void 0&&(at=3);let bt,I,F,Q;if(V){const Zt=Je[V];bt=Zt.vertexShader,I=Zt.fragmentShader}else bt=E.vertexShader,I=E.fragmentShader,l.update(E),F=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);const Y=n.getRenderTarget(),X=n.state.buffers.depth.getReversed(),et=j.isInstancedMesh===!0,ht=j.isBatchedMesh===!0,At=!!E.map,gt=!!E.matcap,_t=!!C,D=!!E.aoMap,kt=!!E.lightMap,wt=!!E.bumpMap,It=!!E.normalMap,it=!!E.displacementMap,Ot=!!E.emissiveMap,St=!!E.metalnessMap,T=!!E.roughnessMap,_=E.anisotropy>0,A=E.clearcoat>0,H=E.dispersion>0,q=E.iridescence>0,$=E.sheen>0,dt=E.transmission>0,lt=_&&!!E.anisotropyMap,ft=A&&!!E.clearcoatMap,Dt=A&&!!E.clearcoatNormalMap,ct=A&&!!E.clearcoatRoughnessMap,xt=q&&!!E.iridescenceMap,Nt=q&&!!E.iridescenceThicknessMap,mt=$&&!!E.sheenColorMap,ut=$&&!!E.sheenRoughnessMap,Ut=!!E.specularMap,Bt=!!E.specularColorMap,Kt=!!E.specularIntensityMap,O=dt&&!!E.transmissionMap,vt=dt&&!!E.thicknessMap,tt=!!E.gradientMap,ot=!!E.alphaMap,Tt=E.alphaTest>0,yt=!!E.alphaHash,Ht=!!E.extensions;let re=Pn;E.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(re=n.toneMapping);const xe={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:bt,fragmentShader:I,defines:E.defines,customVertexShaderID:F,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ht,batchingColor:ht&&j._colorsTexture!==null,instancing:et,instancingColor:et&&j.instanceColor!==null,instancingMorph:et&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Di,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:gt,envMap:_t,envMapMode:_t&&C.mapping,envMapCubeUVHeight:U,aoMap:D,lightMap:kt,bumpMap:wt,normalMap:It,displacementMap:f&&it,emissiveMap:Ot,normalMapObjectSpace:It&&E.normalMapType===ph,normalMapTangentSpace:It&&E.normalMapType===fh,metalnessMap:St,roughnessMap:T,anisotropy:_,anisotropyMap:lt,clearcoat:A,clearcoatMap:ft,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ct,dispersion:H,iridescence:q,iridescenceMap:xt,iridescenceThicknessMap:Nt,sheen:$,sheenColorMap:mt,sheenRoughnessMap:ut,specularMap:Ut,specularColorMap:Bt,specularIntensityMap:Kt,transmission:dt,transmissionMap:O,thicknessMap:vt,gradientMap:tt,opaque:E.transparent===!1&&E.blending===Yn&&E.alphaToCoverage===!1,alphaMap:ot,alphaTest:Tt,alphaHash:yt,combine:E.combine,mapUv:At&&x(E.map.channel),aoMapUv:D&&x(E.aoMap.channel),lightMapUv:kt&&x(E.lightMap.channel),bumpMapUv:wt&&x(E.bumpMap.channel),normalMapUv:It&&x(E.normalMap.channel),displacementMapUv:it&&x(E.displacementMap.channel),emissiveMapUv:Ot&&x(E.emissiveMap.channel),metalnessMapUv:St&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:lt&&x(E.anisotropyMap.channel),clearcoatMapUv:ft&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&x(E.sheenRoughnessMap.channel),specularMapUv:Ut&&x(E.specularMap.channel),specularColorMapUv:Bt&&x(E.specularColorMap.channel),specularIntensityMapUv:Kt&&x(E.specularIntensityMap.channel),transmissionMapUv:O&&x(E.transmissionMap.channel),thicknessMapUv:vt&&x(E.thicknessMap.channel),alphaMapUv:ot&&x(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(It||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!G.attributes.uv&&(At||ot),fog:!!nt,useFog:E.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:X,skinning:j.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:at,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===Qt,decodeVideoTextureEmissive:Ot&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===un,flipSided:E.side===Re,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ht&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&E.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function h(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)v.push(w),v.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(b(v,E),M(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function b(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function M(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const v=g[E.type];let w;if(v){const K=Je[v];w=Yi.clone(K.uniforms)}else w=E.uniforms;return w}function z(E,v){let w;for(let K=0,j=u.length;K<j;K++){const nt=u[K];if(nt.cacheKey===v){w=nt,++w.usedTimes;break}}return w===void 0&&(w=new im(n,v,E,r),u.push(w)),w}function R(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:z,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:N}}function lm(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Za(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ja(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,m,g,x,p){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=p),t++,h}function a(d,f,m,g,x,p){const h=o(d,f,m,g,x,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(d,f,m,g,x,p){const h=o(d,f,m,g,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||cm),i.length>1&&i.sort(f||Za),s.length>1&&s.sort(f||Za)}function u(){for(let d=t,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function hm(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ja,n.set(i,[o])):s>=r.length?(o=new Ja,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function um(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Xt};break;case"SpotLight":e={position:new W,direction:new W,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function dm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let fm=0;function pm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mm(n){const t=new um,e=dm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new le,o=new le;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,b=0,M=0,y=0,z=0,R=0,P=0;c.sort(pm);for(let E=0,v=c.length;E<v;E++){const w=c[E],K=w.color,j=w.intensity,nt=w.distance,G=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=K.r*j,d+=K.g*j,f+=K.b*j;else if(w.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(w.sh.coefficients[L],j);P++}else if(w.isDirectionalLight){const L=t.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const C=w.shadow,U=e.get(w);U.shadowIntensity=C.intensity,U.shadowBias=C.bias,U.shadowNormalBias=C.normalBias,U.shadowRadius=C.radius,U.shadowMapSize=C.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=w.shadow.matrix,b++}i.directional[m]=L,m++}else if(w.isSpotLight){const L=t.get(w);L.position.setFromMatrixPosition(w.matrixWorld),L.color.copy(K).multiplyScalar(j),L.distance=nt,L.coneCos=Math.cos(w.angle),L.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),L.decay=w.decay,i.spot[x]=L;const C=w.shadow;if(w.map&&(i.spotLightMap[z]=w.map,z++,C.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[x]=C.matrix,w.castShadow){const U=e.get(w);U.shadowIntensity=C.intensity,U.shadowBias=C.bias,U.shadowNormalBias=C.normalBias,U.shadowRadius=C.radius,U.shadowMapSize=C.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=G,y++}x++}else if(w.isRectAreaLight){const L=t.get(w);L.color.copy(K).multiplyScalar(j),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=L,p++}else if(w.isPointLight){const L=t.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),L.distance=w.distance,L.decay=w.decay,w.castShadow){const C=w.shadow,U=e.get(w);U.shadowIntensity=C.intensity,U.shadowBias=C.bias,U.shadowNormalBias=C.normalBias,U.shadowRadius=C.radius,U.shadowMapSize=C.mapSize,U.shadowCameraNear=C.camera.near,U.shadowCameraFar=C.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=w.shadow.matrix,M++}i.point[g]=L,g++}else if(w.isHemisphereLight){const L=t.get(w);L.skyColor.copy(w.color).multiplyScalar(j),L.groundColor.copy(w.groundColor).multiplyScalar(j),i.hemi[h]=L,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==h||N.numDirectionalShadows!==b||N.numPointShadows!==M||N.numSpotShadows!==y||N.numSpotMaps!==z||N.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+z-R,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,N.directionalLength=m,N.pointLength=g,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=h,N.numDirectionalShadows=b,N.numPointShadows=M,N.numSpotShadows=y,N.numSpotMaps=z,N.numLightProbes=P,i.version=fm++)}function l(c,u){let d=0,f=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const M=c[h];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Qa(n){const t=new mm(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gm(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qa(n),t.set(s,[a])):r>=o.length?(a=new Qa(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class _m extends Zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xm extends Zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mm=`uniform sampler2D shadow_pass;
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
}`;function Sm(n,t,e){let i=new oc;const s=new Ft,r=new Ft,o=new he,a=new _m({depthPacking:dh}),l=new xm,c={},u=e.maxTextureSize,d={[Dn]:Re,[Re]:Dn,[un]:un},f=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:vm,fragmentShader:Mm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new tn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let h=this.type;this.render=function(R,P,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),K=n.state;K.setBlending(pn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const j=h!==hn&&this.type===hn,nt=h===hn&&this.type!==hn;for(let G=0,L=R.length;G<L;G++){const C=R[G],U=C.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const V=U.getFrameExtents();if(s.multiply(V),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,U.mapSize.y=r.y)),U.map===null||j===!0||nt===!0){const rt=this.type!==hn?{minFilter:qe,magFilter:qe}:{};U.map!==null&&U.map.dispose(),U.map=new je(s.x,s.y,rt),U.map.texture.name=C.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const st=U.getViewportCount();for(let rt=0;rt<st;rt++){const at=U.getViewport(rt);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),K.viewport(o),U.updateMatrices(C,rt),i=U.getFrustum(),y(P,N,U.camera,C,this.type)}U.isPointLightShadow!==!0&&this.type===hn&&b(U,N),U.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(E,v,w)};function b(R,P){const N=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new je(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,N,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,N,m,x,null)}function M(R,P,N,E){let v=null;const w=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)v=w;else if(v=N.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const K=v.uuid,j=P.uuid;let nt=c[K];nt===void 0&&(nt={},c[K]=nt);let G=nt[j];G===void 0&&(G=v.clone(),nt[j]=G,P.addEventListener("dispose",z)),v=G}if(v.visible=P.visible,v.wireframe=P.wireframe,E===hn?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:d[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const K=n.properties.get(v);K.light=N}return v}function y(R,P,N,E,v){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===hn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const j=t.update(R),nt=R.material;if(Array.isArray(nt)){const G=j.groups;for(let L=0,C=G.length;L<C;L++){const U=G[L],V=nt[U.materialIndex];if(V&&V.visible){const st=M(R,V,E,v);R.onBeforeShadow(n,R,P,N,j,st,U),n.renderBufferDirect(N,null,j,st,R,U),R.onAfterShadow(n,R,P,N,j,st,U)}}}else if(nt.visible){const G=M(R,nt,E,v);R.onBeforeShadow(n,R,P,N,j,G,null),n.renderBufferDirect(N,null,j,G,R,null),R.onAfterShadow(n,R,P,N,j,G,null)}}const K=R.children;for(let j=0,nt=K.length;j<nt;j++)y(K[j],P,N,E,v)}function z(R){R.target.removeEventListener("dispose",z);for(const N in c){const E=c[N],v=R.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const ym={[zr]:Hr,[Vr]:Xr,[Gr]:$r,[Ei]:Wr,[Hr]:zr,[Xr]:Vr,[$r]:Gr,[Wr]:Ei};function Em(n,t){function e(){let O=!1;const vt=new he;let tt=null;const ot=new he(0,0,0,0);return{setMask:function(Tt){tt!==Tt&&!O&&(n.colorMask(Tt,Tt,Tt,Tt),tt=Tt)},setLocked:function(Tt){O=Tt},setClear:function(Tt,yt,Ht,re,xe){xe===!0&&(Tt*=re,yt*=re,Ht*=re),vt.set(Tt,yt,Ht,re),ot.equals(vt)===!1&&(n.clearColor(Tt,yt,Ht,re),ot.copy(vt))},reset:function(){O=!1,tt=null,ot.set(-1,0,0,0)}}}function i(){let O=!1,vt=!1,tt=null,ot=null,Tt=null;return{setReversed:function(yt){if(vt!==yt){const Ht=t.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const re=Tt;Tt=null,this.setClear(re)}vt=yt},getReversed:function(){return vt},setTest:function(yt){yt?Y(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(yt){tt!==yt&&!O&&(n.depthMask(yt),tt=yt)},setFunc:function(yt){if(vt&&(yt=ym[yt]),ot!==yt){switch(yt){case zr:n.depthFunc(n.NEVER);break;case Hr:n.depthFunc(n.ALWAYS);break;case Vr:n.depthFunc(n.LESS);break;case Ei:n.depthFunc(n.LEQUAL);break;case Gr:n.depthFunc(n.EQUAL);break;case Wr:n.depthFunc(n.GEQUAL);break;case Xr:n.depthFunc(n.GREATER);break;case $r:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=yt}},setLocked:function(yt){O=yt},setClear:function(yt){Tt!==yt&&(vt&&(yt=1-yt),n.clearDepth(yt),Tt=yt)},reset:function(){O=!1,tt=null,ot=null,Tt=null,vt=!1}}}function s(){let O=!1,vt=null,tt=null,ot=null,Tt=null,yt=null,Ht=null,re=null,xe=null;return{setTest:function(Zt){O||(Zt?Y(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(Zt){vt!==Zt&&!O&&(n.stencilMask(Zt),vt=Zt)},setFunc:function(Zt,Be,nn){(tt!==Zt||ot!==Be||Tt!==nn)&&(n.stencilFunc(Zt,Be,nn),tt=Zt,ot=Be,Tt=nn)},setOp:function(Zt,Be,nn){(yt!==Zt||Ht!==Be||re!==nn)&&(n.stencilOp(Zt,Be,nn),yt=Zt,Ht=Be,re=nn)},setLocked:function(Zt){O=Zt},setClear:function(Zt){xe!==Zt&&(n.clearStencil(Zt),xe=Zt)},reset:function(){O=!1,vt=null,tt=null,ot=null,Tt=null,yt=null,Ht=null,re=null,xe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,h=null,b=null,M=null,y=null,z=null,R=null,P=new Xt(0,0,0),N=0,E=!1,v=null,w=null,K=null,j=null,nt=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,C=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(U)[1]),L=C>=1):U.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),L=C>=2);let V=null,st={};const rt=n.getParameter(n.SCISSOR_BOX),at=n.getParameter(n.VIEWPORT),bt=new he().fromArray(rt),I=new he().fromArray(at);function F(O,vt,tt,ot){const Tt=new Uint8Array(4),yt=n.createTexture();n.bindTexture(O,yt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<tt;Ht++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(vt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return yt}const Q={};Q[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(Ei),wt(!1),It(sa),Y(n.CULL_FACE),D(pn);function Y(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function X(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function et(O,vt){return d[O]!==vt?(n.bindFramebuffer(O,vt),d[O]=vt,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=vt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ht(O,vt){let tt=m,ot=!1;if(O){tt=f.get(vt),tt===void 0&&(tt=[],f.set(vt,tt));const Tt=O.textures;if(tt.length!==Tt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Ht=Tt.length;yt<Ht;yt++)tt[yt]=n.COLOR_ATTACHMENT0+yt;tt.length=Tt.length,ot=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ot=!0);ot&&n.drawBuffers(tt)}function At(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const gt={[Hn]:n.FUNC_ADD,[Wc]:n.FUNC_SUBTRACT,[Xc]:n.FUNC_REVERSE_SUBTRACT};gt[$c]=n.MIN,gt[Yc]=n.MAX;const _t={[qc]:n.ZERO,[jc]:n.ONE,[Kc]:n.SRC_COLOR,[Br]:n.SRC_ALPHA,[nh]:n.SRC_ALPHA_SATURATE,[th]:n.DST_COLOR,[Jc]:n.DST_ALPHA,[Zc]:n.ONE_MINUS_SRC_COLOR,[kr]:n.ONE_MINUS_SRC_ALPHA,[eh]:n.ONE_MINUS_DST_COLOR,[Qc]:n.ONE_MINUS_DST_ALPHA,[ih]:n.CONSTANT_COLOR,[sh]:n.ONE_MINUS_CONSTANT_COLOR,[rh]:n.CONSTANT_ALPHA,[oh]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,vt,tt,ot,Tt,yt,Ht,re,xe,Zt){if(O===pn){x===!0&&(X(n.BLEND),x=!1);return}if(x===!1&&(Y(n.BLEND),x=!0),O!==Gc){if(O!==p||Zt!==E){if((h!==Hn||y!==Hn)&&(n.blendEquation(n.FUNC_ADD),h=Hn,y=Hn),Zt)switch(O){case Yn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hs:n.blendFunc(n.ONE,n.ONE);break;case ra:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ra:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,M=null,z=null,R=null,P.set(0,0,0),N=0,p=O,E=Zt}return}Tt=Tt||vt,yt=yt||tt,Ht=Ht||ot,(vt!==h||Tt!==y)&&(n.blendEquationSeparate(gt[vt],gt[Tt]),h=vt,y=Tt),(tt!==b||ot!==M||yt!==z||Ht!==R)&&(n.blendFuncSeparate(_t[tt],_t[ot],_t[yt],_t[Ht]),b=tt,M=ot,z=yt,R=Ht),(re.equals(P)===!1||xe!==N)&&(n.blendColor(re.r,re.g,re.b,xe),P.copy(re),N=xe),p=O,E=!1}function kt(O,vt){O.side===un?X(n.CULL_FACE):Y(n.CULL_FACE);let tt=O.side===Re;vt&&(tt=!tt),wt(tt),O.blending===Yn&&O.transparent===!1?D(pn):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ot=O.stencilWrite;a.setTest(ot),ot&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ot(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(O){v!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),v=O)}function It(O){O!==zc?(Y(n.CULL_FACE),O!==w&&(O===sa?n.cullFace(n.BACK):O===Hc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),w=O}function it(O){O!==K&&(L&&n.lineWidth(O),K=O)}function Ot(O,vt,tt){O?(Y(n.POLYGON_OFFSET_FILL),(j!==vt||nt!==tt)&&(n.polygonOffset(vt,tt),j=vt,nt=tt)):X(n.POLYGON_OFFSET_FILL)}function St(O){O?Y(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function T(O){O===void 0&&(O=n.TEXTURE0+G-1),V!==O&&(n.activeTexture(O),V=O)}function _(O,vt,tt){tt===void 0&&(V===null?tt=n.TEXTURE0+G-1:tt=V);let ot=st[tt];ot===void 0&&(ot={type:void 0,texture:void 0},st[tt]=ot),(ot.type!==O||ot.texture!==vt)&&(V!==tt&&(n.activeTexture(tt),V=tt),n.bindTexture(O,vt||Q[O]),ot.type=O,ot.texture=vt)}function A(){const O=st[V];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(O){bt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),bt.copy(O))}function ut(O){I.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),I.copy(O))}function Ut(O,vt){let tt=c.get(vt);tt===void 0&&(tt=new WeakMap,c.set(vt,tt));let ot=tt.get(O);ot===void 0&&(ot=n.getUniformBlockIndex(vt,O.name),tt.set(O,ot))}function Bt(O,vt){const ot=c.get(vt).get(O);l.get(vt)!==ot&&(n.uniformBlockBinding(vt,ot,O.__bindingPointIndex),l.set(vt,ot))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},V=null,st={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,h=null,b=null,M=null,y=null,z=null,R=null,P=new Xt(0,0,0),N=0,E=!1,v=null,w=null,K=null,j=null,nt=null,bt.set(0,0,n.canvas.width,n.canvas.height),I.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:X,bindFramebuffer:et,drawBuffers:ht,useProgram:At,setBlending:D,setMaterial:kt,setFlipSided:wt,setCullFace:It,setLineWidth:it,setPolygonOffset:Ot,setScissorTest:St,activeTexture:T,bindTexture:_,unbindTexture:A,compressedTexImage2D:H,compressedTexImage3D:q,texImage2D:xt,texImage3D:Nt,updateUBOMapping:Ut,uniformBlockBinding:Bt,texStorage2D:Dt,texStorage3D:ct,texSubImage2D:$,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:mt,viewport:ut,reset:Kt}}function tl(n,t,e,i){const s=Tm(i);switch(e){case Gl:return n*t;case Xl:return n*t;case $l:return n*t*2;case Yl:return n*t/s.components*s.byteLength;case Fo:return n*t/s.components*s.byteLength;case ql:return n*t*2/s.components*s.byteLength;case Oo:return n*t*2/s.components*s.byteLength;case Wl:return n*t*3/s.components*s.byteLength;case $e:return n*t*4/s.components*s.byteLength;case Bo:return n*t*4/s.components*s.byteLength;case Ls:case Us:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ns:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jr:case to:return Math.max(n,16)*Math.max(t,8)/4;case Zr:case Qr:return Math.max(n,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Fs:case vo:case Mo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case jl:case So:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yo:case Eo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tm(n){switch(n){case xn:case zl:return{byteLength:1,components:1};case $i:case Hl:case mn:return{byteLength:2,components:1};case Io:case No:return{byteLength:2,components:4};case Kn:case Uo:case dn:return{byteLength:4,components:1};case Vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bm(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return m?new OffscreenCanvas(T,_):Gs("canvas")}function x(T,_,A){let H=1;const q=St(T);if((q.width>A||q.height>A)&&(H=A/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(H*q.width),dt=Math.floor(H*q.height);d===void 0&&(d=g($,dt));const lt=_?g($,dt):d;return lt.width=$,lt.height=dt,lt.getContext("2d").drawImage(T,0,0,$,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+$+"x"+dt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function p(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,_,A,H,q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=_;if(_===n.RED&&(A===n.FLOAT&&($=n.R32F),A===n.HALF_FLOAT&&($=n.R16F),A===n.UNSIGNED_BYTE&&($=n.R8)),_===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&($=n.R8UI),A===n.UNSIGNED_SHORT&&($=n.R16UI),A===n.UNSIGNED_INT&&($=n.R32UI),A===n.BYTE&&($=n.R8I),A===n.SHORT&&($=n.R16I),A===n.INT&&($=n.R32I)),_===n.RG&&(A===n.FLOAT&&($=n.RG32F),A===n.HALF_FLOAT&&($=n.RG16F),A===n.UNSIGNED_BYTE&&($=n.RG8)),_===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&($=n.RG8UI),A===n.UNSIGNED_SHORT&&($=n.RG16UI),A===n.UNSIGNED_INT&&($=n.RG32UI),A===n.BYTE&&($=n.RG8I),A===n.SHORT&&($=n.RG16I),A===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&($=n.RGB8UI),A===n.UNSIGNED_SHORT&&($=n.RGB16UI),A===n.UNSIGNED_INT&&($=n.RGB32UI),A===n.BYTE&&($=n.RGB8I),A===n.SHORT&&($=n.RGB16I),A===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&($=n.RGBA8UI),A===n.UNSIGNED_SHORT&&($=n.RGBA16UI),A===n.UNSIGNED_INT&&($=n.RGBA32UI),A===n.BYTE&&($=n.RGBA8I),A===n.SHORT&&($=n.RGBA16I),A===n.INT&&($=n.RGBA32I)),_===n.RGB&&A===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),_===n.RGBA){const dt=q?Ys:$t.getTransfer(H);A===n.FLOAT&&($=n.RGBA32F),A===n.HALF_FLOAT&&($=n.RGBA16F),A===n.UNSIGNED_BYTE&&($=dt===Qt?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,_){let A;return T?_===null||_===Kn||_===Ai?A=n.DEPTH24_STENCIL8:_===dn?A=n.DEPTH32F_STENCIL8:_===$i&&(A=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Kn||_===Ai?A=n.DEPTH_COMPONENT24:_===dn?A=n.DEPTH_COMPONENT32F:_===$i&&(A=n.DEPTH_COMPONENT16),A}function z(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==qe&&T.minFilter!==Qe?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){const _=T.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&u.delete(_)}function P(T){const _=T.target;_.removeEventListener("dispose",P),v(_)}function N(T){const _=i.get(T);if(_.__webglInit===void 0)return;const A=T.source,H=f.get(A);if(H){const q=H[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(T),Object.keys(H).length===0&&f.delete(A)}i.remove(T)}function E(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const A=T.source,H=f.get(A);delete H[_.__cacheKey],o.memory.textures--}function v(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let q=0;q<_.__webglFramebuffer[H].length;q++)n.deleteFramebuffer(_.__webglFramebuffer[H][q]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const A=T.textures;for(let H=0,q=A.length;H<q;H++){const $=i.get(A[H]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(A[H])}i.remove(T)}let w=0;function K(){w=0}function j(){const T=w;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),w+=1,T}function nt(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function G(T,_){const A=i.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&A.__version!==T.version){const H=T.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(A,T,_);return}}e.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+_)}function L(T,_){const A=i.get(T);if(T.version>0&&A.__version!==T.version){I(A,T,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+_)}function C(T,_){const A=i.get(T);if(T.version>0&&A.__version!==T.version){I(A,T,_);return}e.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+_)}function U(T,_){const A=i.get(T);if(T.version>0&&A.__version!==T.version){F(A,T,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+_)}const V={[jr]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[Kr]:n.MIRRORED_REPEAT},st={[qe]:n.NEAREST,[hh]:n.NEAREST_MIPMAP_NEAREST,[ss]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[or]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},rt={[mh]:n.NEVER,[Sh]:n.ALWAYS,[gh]:n.LESS,[Kl]:n.LEQUAL,[_h]:n.EQUAL,[Mh]:n.GEQUAL,[xh]:n.GREATER,[vh]:n.NOTEQUAL};function at(T,_){if(_.type===dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Qe||_.magFilter===or||_.magFilter===ss||_.magFilter===Wn||_.minFilter===Qe||_.minFilter===or||_.minFilter===ss||_.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,V[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,V[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,V[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,st[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,st[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,rt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qe||_.minFilter!==ss&&_.minFilter!==Wn||_.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const A=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function bt(T,_){let A=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));const H=_.source;let q=f.get(H);q===void 0&&(q={},f.set(H,q));const $=nt(_);if($!==T.__cacheKey){q[$]===void 0&&(q[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,A=!0),q[$].usedTimes++;const dt=q[T.__cacheKey];dt!==void 0&&(q[T.__cacheKey].usedTimes--,dt.usedTimes===0&&E(_)),T.__cacheKey=$,T.__webglTexture=q[$].texture}return A}function I(T,_,A){let H=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=n.TEXTURE_3D);const q=bt(T,_),$=_.source;e.bindTexture(H,T.__webglTexture,n.TEXTURE0+A);const dt=i.get($);if($.version!==dt.__version||q===!0){e.activeTexture(n.TEXTURE0+A);const lt=$t.getPrimaries($t.workingColorSpace),ft=_.colorSpace===Cn?null:$t.getPrimaries(_.colorSpace),Dt=_.colorSpace===Cn||lt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ct=x(_.image,!1,s.maxTextureSize);ct=Ot(_,ct);const xt=r.convert(_.format,_.colorSpace),Nt=r.convert(_.type);let mt=M(_.internalFormat,xt,Nt,_.colorSpace,_.isVideoTexture);at(H,_);let ut;const Ut=_.mipmaps,Bt=_.isVideoTexture!==!0,Kt=dt.__version===void 0||q===!0,O=$.dataReady,vt=z(_,ct);if(_.isDepthTexture)mt=y(_.format===wi,_.type),Kt&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,mt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,mt,ct.width,ct.height,0,xt,Nt,null));else if(_.isDataTexture)if(Ut.length>0){Bt&&Kt&&e.texStorage2D(n.TEXTURE_2D,vt,mt,Ut[0].width,Ut[0].height);for(let tt=0,ot=Ut.length;tt<ot;tt++)ut=Ut[tt],Bt?O&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ut.width,ut.height,xt,Nt,ut.data):e.texImage2D(n.TEXTURE_2D,tt,mt,ut.width,ut.height,0,xt,Nt,ut.data);_.generateMipmaps=!1}else Bt?(Kt&&e.texStorage2D(n.TEXTURE_2D,vt,mt,ct.width,ct.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,xt,Nt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,mt,ct.width,ct.height,0,xt,Nt,ct.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,mt,Ut[0].width,Ut[0].height,ct.depth);for(let tt=0,ot=Ut.length;tt<ot;tt++)if(ut=Ut[tt],_.format!==$e)if(xt!==null)if(Bt){if(O)if(_.layerUpdates.size>0){const Tt=tl(ut.width,ut.height,_.format,_.type);for(const yt of _.layerUpdates){const Ht=ut.data.subarray(yt*Tt/ut.data.BYTES_PER_ELEMENT,(yt+1)*Tt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,yt,ut.width,ut.height,1,xt,Ht)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ut.width,ut.height,ct.depth,xt,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,mt,ut.width,ut.height,ct.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ut.width,ut.height,ct.depth,xt,Nt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,mt,ut.width,ut.height,ct.depth,0,xt,Nt,ut.data)}else{Bt&&Kt&&e.texStorage2D(n.TEXTURE_2D,vt,mt,Ut[0].width,Ut[0].height);for(let tt=0,ot=Ut.length;tt<ot;tt++)ut=Ut[tt],_.format!==$e?xt!==null?Bt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,ut.width,ut.height,xt,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,mt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?O&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ut.width,ut.height,xt,Nt,ut.data):e.texImage2D(n.TEXTURE_2D,tt,mt,ut.width,ut.height,0,xt,Nt,ut.data)}else if(_.isDataArrayTexture)if(Bt){if(Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,mt,ct.width,ct.height,ct.depth),O)if(_.layerUpdates.size>0){const tt=tl(ct.width,ct.height,_.format,_.type);for(const ot of _.layerUpdates){const Tt=ct.data.subarray(ot*tt/ct.data.BYTES_PER_ELEMENT,(ot+1)*tt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,ct.width,ct.height,1,xt,Nt,Tt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Nt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,ct.width,ct.height,ct.depth,0,xt,Nt,ct.data);else if(_.isData3DTexture)Bt?(Kt&&e.texStorage3D(n.TEXTURE_3D,vt,mt,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Nt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,mt,ct.width,ct.height,ct.depth,0,xt,Nt,ct.data);else if(_.isFramebufferTexture){if(Kt)if(Bt)e.texStorage2D(n.TEXTURE_2D,vt,mt,ct.width,ct.height);else{let tt=ct.width,ot=ct.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,mt,tt,ot,0,xt,Nt,null),tt>>=1,ot>>=1}}else if(Ut.length>0){if(Bt&&Kt){const tt=St(Ut[0]);e.texStorage2D(n.TEXTURE_2D,vt,mt,tt.width,tt.height)}for(let tt=0,ot=Ut.length;tt<ot;tt++)ut=Ut[tt],Bt?O&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,xt,Nt,ut):e.texImage2D(n.TEXTURE_2D,tt,mt,xt,Nt,ut);_.generateMipmaps=!1}else if(Bt){if(Kt){const tt=St(ct);e.texStorage2D(n.TEXTURE_2D,vt,mt,tt.width,tt.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Nt,ct)}else e.texImage2D(n.TEXTURE_2D,0,mt,xt,Nt,ct);p(_)&&h(H),dt.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function F(T,_,A){if(_.image.length!==6)return;const H=bt(T,_),q=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+A);const $=i.get(q);if(q.version!==$.__version||H===!0){e.activeTexture(n.TEXTURE0+A);const dt=$t.getPrimaries($t.workingColorSpace),lt=_.colorSpace===Cn?null:$t.getPrimaries(_.colorSpace),ft=_.colorSpace===Cn||dt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Dt=_.isCompressedTexture||_.image[0].isCompressedTexture,ct=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let ot=0;ot<6;ot++)!Dt&&!ct?xt[ot]=x(_.image[ot],!0,s.maxCubemapSize):xt[ot]=ct?_.image[ot].image:_.image[ot],xt[ot]=Ot(_,xt[ot]);const Nt=xt[0],mt=r.convert(_.format,_.colorSpace),ut=r.convert(_.type),Ut=M(_.internalFormat,mt,ut,_.colorSpace),Bt=_.isVideoTexture!==!0,Kt=$.__version===void 0||H===!0,O=q.dataReady;let vt=z(_,Nt);at(n.TEXTURE_CUBE_MAP,_);let tt;if(Dt){Bt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ut,Nt.width,Nt.height);for(let ot=0;ot<6;ot++){tt=xt[ot].mipmaps;for(let Tt=0;Tt<tt.length;Tt++){const yt=tt[Tt];_.format!==$e?mt!==null?Bt?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,yt.width,yt.height,mt,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,yt.width,yt.height,mt,ut,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,Ut,yt.width,yt.height,0,mt,ut,yt.data)}}}else{if(tt=_.mipmaps,Bt&&Kt){tt.length>0&&vt++;const ot=St(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ut,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ct){Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,xt[ot].width,xt[ot].height,mt,ut,xt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Ut,xt[ot].width,xt[ot].height,0,mt,ut,xt[ot].data);for(let Tt=0;Tt<tt.length;Tt++){const Ht=tt[Tt].image[ot].image;Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Ht.width,Ht.height,mt,ut,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,Ut,Ht.width,Ht.height,0,mt,ut,Ht.data)}}else{Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,mt,ut,xt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Ut,mt,ut,xt[ot]);for(let Tt=0;Tt<tt.length;Tt++){const yt=tt[Tt];Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,mt,ut,yt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,Ut,mt,ut,yt.image[ot])}}}p(_)&&h(n.TEXTURE_CUBE_MAP),$.__version=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,A,H,q,$){const dt=r.convert(A.format,A.colorSpace),lt=r.convert(A.type),ft=M(A.internalFormat,dt,lt,A.colorSpace),Dt=i.get(_),ct=i.get(A);if(ct.__renderTarget=_,!Dt.__hasExternalTextures){const xt=Math.max(1,_.width>>$),Nt=Math.max(1,_.height>>$);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,$,ft,xt,Nt,_.depth,0,dt,lt,null):e.texImage2D(q,$,ft,xt,Nt,0,dt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),It(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,q,ct.__webglTexture,0,wt(_)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,q,ct.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(T,_,A){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const H=_.depthTexture,q=H&&H.isDepthTexture?H.type:null,$=y(_.stencilBuffer,q),dt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=wt(_);It(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,$,_.width,_.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,$,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,$,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,T)}else{const H=_.textures;for(let q=0;q<H.length;q++){const $=H[q],dt=r.convert($.format,$.colorSpace),lt=r.convert($.type),ft=M($.internalFormat,dt,lt,$.colorSpace),Dt=wt(_);A&&It(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,ft,_.width,_.height):It(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt,ft,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ft,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);const q=H.__webglTexture,$=wt(_);if(_.depthTexture.format===Si)It(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(_.depthTexture.format===wi)It(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function et(T){const _=i.get(T),A=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const H=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=H}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");X(_.__webglFramebuffer,T)}else if(A){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=n.createRenderbuffer(),Y(_.__webglDepthbuffer[H],T,!1);else{const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Y(_.__webglDepthbuffer,T,!1);else{const H=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(T,_,A){const H=i.get(T);_!==void 0&&Q(H.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&et(T)}function At(T){const _=T.texture,A=i.get(T),H=i.get(_);T.addEventListener("dispose",P);const q=T.textures,$=T.isWebGLCubeRenderTarget===!0,dt=q.length>1;if(dt||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,o.memory.textures++),$){A.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer[lt]=[];for(let ft=0;ft<_.mipmaps.length;ft++)A.__webglFramebuffer[lt][ft]=n.createFramebuffer()}else A.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)A.__webglFramebuffer[lt]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(dt)for(let lt=0,ft=q.length;lt<ft;lt++){const Dt=i.get(q[lt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&It(T)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let lt=0;lt<q.length;lt++){const ft=q[lt];A.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[lt]);const Dt=r.convert(ft.format,ft.colorSpace),ct=r.convert(ft.type),xt=M(ft.internalFormat,Dt,ct,ft.colorSpace,T.isXRRenderTarget===!0),Nt=wt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,xt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,A.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(A.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),at(n.TEXTURE_CUBE_MAP,_);for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)Q(A.__webglFramebuffer[lt][ft],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else Q(A.__webglFramebuffer[lt],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(_)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let lt=0,ft=q.length;lt<ft;lt++){const Dt=q[lt],ct=i.get(Dt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),at(n.TEXTURE_2D,Dt),Q(A.__webglFramebuffer,T,Dt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),p(Dt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,H.__webglTexture),at(lt,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)Q(A.__webglFramebuffer[ft],T,_,n.COLOR_ATTACHMENT0,lt,ft);else Q(A.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,lt,0);p(_)&&h(lt),e.unbindTexture()}T.depthBuffer&&et(T)}function gt(T){const _=T.textures;for(let A=0,H=_.length;A<H;A++){const q=_[A];if(p(q)){const $=b(T),dt=i.get(q).__webglTexture;e.bindTexture($,dt),h($),e.unbindTexture()}}}const _t=[],D=[];function kt(T){if(T.samples>0){if(It(T)===!1){const _=T.textures,A=T.width,H=T.height;let q=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(T),lt=_.length>1;if(lt)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const Dt=i.get(_[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Dt,0)}n.blitFramebuffer(0,0,A,H,0,0,A,H,q,n.NEAREST),l===!0&&(_t.length=0,D.length=0,_t.push(n.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_t.push($),D.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const Dt=i.get(_[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function wt(T){return Math.min(s.maxSamples,T.samples)}function It(T){const _=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function it(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Ot(T,_){const A=T.colorSpace,H=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||A!==Di&&A!==Cn&&($t.getTransfer(A)===Qt?(H!==$e||q!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),_}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=K,this.setTexture2D=G,this.setTexture2DArray=L,this.setTexture3D=C,this.setTextureCube=U,this.rebindTextures=ht,this.setupRenderTarget=At,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=It}function Am(n,t){function e(i,s=Cn){let r;const o=$t.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===No)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zl)return n.BYTE;if(i===Hl)return n.SHORT;if(i===$i)return n.UNSIGNED_SHORT;if(i===Uo)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===dn)return n.FLOAT;if(i===mn)return n.HALF_FLOAT;if(i===Gl)return n.ALPHA;if(i===Wl)return n.RGB;if(i===$e)return n.RGBA;if(i===Xl)return n.LUMINANCE;if(i===$l)return n.LUMINANCE_ALPHA;if(i===Si)return n.DEPTH_COMPONENT;if(i===wi)return n.DEPTH_STENCIL;if(i===Yl)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===ql)return n.RG;if(i===Oo)return n.RG_INTEGER;if(i===Bo)return n.RGBA_INTEGER;if(i===Ls||i===Us||i===Is||i===Ns)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zr||i===Jr||i===Qr||i===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eo||i===no||i===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eo||i===no)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===io)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===so||i===ro||i===oo||i===ao||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===so)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ro)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ao)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===co)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_o)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fs||i===vo||i===Mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Fs)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===So||i===yo||i===Eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ai?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class wm extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bs extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),h=this._getHandJoint(c,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new bs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pm=`
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

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new _e({vertexShader:Cm,fragmentShader:Pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tn(new Ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lm extends ti{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const x=new Dm,p=e.getContextAttributes();let h=null,b=null;const M=[],y=[],z=new Ft;let R=null;const P=new We;P.viewport=new he;const N=new We;N.viewport=new he;const E=[P,N],v=new wm;let w=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let F=M[I];return F===void 0&&(F=new Ir,M[I]=F),F.getTargetRaySpace()},this.getControllerGrip=function(I){let F=M[I];return F===void 0&&(F=new Ir,M[I]=F),F.getGripSpace()},this.getHand=function(I){let F=M[I];return F===void 0&&(F=new Ir,M[I]=F),F.getHandSpace()};function j(I){const F=y.indexOf(I.inputSource);if(F===-1)return;const Q=M[F];Q!==void 0&&(Q.update(I.inputSource,I.frame,c||o),Q.dispatchEvent({type:I.type,data:I.inputSource}))}function nt(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",G);for(let I=0;I<M.length;I++){const F=y[I];F!==null&&(y[I]=null,M[I].disconnect(F))}w=null,K=null,x.reset(),t.setRenderTarget(h),m=null,f=null,d=null,s=null,b=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){const F={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new je(m.framebufferWidth,m.framebufferHeight,{format:$e,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let F=null,Q=null,Y=null;p.depth&&(Y=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=p.stencil?wi:Si,Q=p.stencil?Ai:Kn);const X={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(X),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new je(f.textureWidth,f.textureHeight,{format:$e,type:xn,depthTexture:new lc(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(I){for(let F=0;F<I.removed.length;F++){const Q=I.removed[F],Y=y.indexOf(Q);Y>=0&&(y[Y]=null,M[Y].disconnect(Q))}for(let F=0;F<I.added.length;F++){const Q=I.added[F];let Y=y.indexOf(Q);if(Y===-1){for(let et=0;et<M.length;et++)if(et>=y.length){y.push(Q),Y=et;break}else if(y[et]===null){y[et]=Q,Y=et;break}if(Y===-1)break}const X=M[Y];X&&X.connect(Q)}}const L=new W,C=new W;function U(I,F,Q){L.setFromMatrixPosition(F.matrixWorld),C.setFromMatrixPosition(Q.matrixWorld);const Y=L.distanceTo(C),X=F.projectionMatrix.elements,et=Q.projectionMatrix.elements,ht=X[14]/(X[10]-1),At=X[14]/(X[10]+1),gt=(X[9]+1)/X[5],_t=(X[9]-1)/X[5],D=(X[8]-1)/X[0],kt=(et[8]+1)/et[0],wt=ht*D,It=ht*kt,it=Y/(-D+kt),Ot=it*-D;if(F.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ot),I.translateZ(it),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),X[10]===-1)I.projectionMatrix.copy(F.projectionMatrix),I.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const St=ht+it,T=At+it,_=wt-Ot,A=It+(Y-Ot),H=gt*At/T*St,q=_t*At/T*St;I.projectionMatrix.makePerspective(_,A,H,q,St,T),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function V(I,F){F===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(F.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let F=I.near,Q=I.far;x.texture!==null&&(x.depthNear>0&&(F=x.depthNear),x.depthFar>0&&(Q=x.depthFar)),v.near=N.near=P.near=F,v.far=N.far=P.far=Q,(w!==v.near||K!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,K=v.far),P.layers.mask=I.layers.mask|2,N.layers.mask=I.layers.mask|4,v.layers.mask=P.layers.mask|N.layers.mask;const Y=I.parent,X=v.cameras;V(v,Y);for(let et=0;et<X.length;et++)V(X[et],Y);X.length===2?U(v,P,N):v.projectionMatrix.copy(P.projectionMatrix),st(I,v,Y)};function st(I,F,Q){Q===null?I.matrix.copy(F.matrixWorld):(I.matrix.copy(Q.matrixWorld),I.matrix.invert(),I.matrix.multiply(F.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(F.projectionMatrix),I.projectionMatrixInverse.copy(F.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=To*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let rt=null;function at(I,F){if(u=F.getViewerPose(c||o),g=F,u!==null){const Q=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Y=!1;Q.length!==v.cameras.length&&(v.cameras.length=0,Y=!0);for(let et=0;et<Q.length;et++){const ht=Q[et];let At=null;if(m!==null)At=m.getViewport(ht);else{const _t=d.getViewSubImage(f,ht);At=_t.viewport,et===0&&(t.setRenderTargetTextures(b,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(b))}let gt=E[et];gt===void 0&&(gt=new We,gt.layers.enable(et),gt.viewport=new he,E[et]=gt),gt.matrix.fromArray(ht.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ht.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(At.x,At.y,At.width,At.height),et===0&&(v.matrix.copy(gt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Y===!0&&v.cameras.push(gt)}const X=s.enabledFeatures;if(X&&X.includes("depth-sensing")){const et=d.getDepthInformation(Q[0]);et&&et.isValid&&et.texture&&x.init(t,et,s.renderState)}}for(let Q=0;Q<M.length;Q++){const Y=y[Q],X=M[Q];Y!==null&&X!==void 0&&X.update(Y,F,c||o)}rt&&rt(I,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),g=null}const bt=new ac;bt.setAnimationLoop(at),this.setAnimationLoop=function(I){rt=I},this.dispose=function(){}}}const kn=new vn,Um=new le;function Im(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,ic(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,b,M,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,b,M):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Re&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Re&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=t.get(h),M=b.envMap,y=b.envMapRotation;M&&(p.envMap.value=M,kn.copy(y),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),p.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(kn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=M*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Re&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const b=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Nm(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const y=M.program;i.uniformBlockBinding(b,y)}function c(b,M){let y=s[b.id];y===void 0&&(g(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",p));const z=M.program;i.updateUBOMapping(b,z);const R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function u(b){const M=d();b.__bindingPointIndex=M;const y=n.createBuffer(),z=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,z,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=s[b.id],y=b.uniforms,z=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,P=y.length;R<P;R++){const N=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,v=N.length;E<v;E++){const w=N[E];if(m(w,R,E,z)===!0){const K=w.__offset,j=Array.isArray(w.value)?w.value:[w.value];let nt=0;for(let G=0;G<j.length;G++){const L=j[G],C=x(L);typeof L=="number"||typeof L=="boolean"?(w.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,K+nt,w.__data)):L.isMatrix3?(w.__data[0]=L.elements[0],w.__data[1]=L.elements[1],w.__data[2]=L.elements[2],w.__data[3]=0,w.__data[4]=L.elements[3],w.__data[5]=L.elements[4],w.__data[6]=L.elements[5],w.__data[7]=0,w.__data[8]=L.elements[6],w.__data[9]=L.elements[7],w.__data[10]=L.elements[8],w.__data[11]=0):(L.toArray(w.__data,nt),nt+=C.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,y,z){const R=b.value,P=M+"_"+y;if(z[P]===void 0)return typeof R=="number"||typeof R=="boolean"?z[P]=R:z[P]=R.clone(),!0;{const N=z[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return z[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(b){const M=b.uniforms;let y=0;const z=16;for(let P=0,N=M.length;P<N;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let v=0,w=E.length;v<w;v++){const K=E[v],j=Array.isArray(K.value)?K.value:[K.value];for(let nt=0,G=j.length;nt<G;nt++){const L=j[nt],C=x(L),U=y%z,V=U%C.boundary,st=U+V;y+=V,st!==0&&z-st<C.storage&&(y+=z-st),K.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=y,y+=C.storage}}}const R=y%z;return R>0&&(y+=z-R),b.__size=y,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Qi{constructor(t={}){const{canvas:e=Th(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,h=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Pn,this.toneMappingExposure=1;const y=this;let z=!1,R=0,P=0,N=null,E=-1,v=null;const w=new he,K=new he;let j=null;const nt=new Xt(0);let G=0,L=e.width,C=e.height,U=1,V=null,st=null;const rt=new he(0,0,L,C),at=new he(0,0,L,C);let bt=!1;const I=new oc;let F=!1,Q=!1;const Y=new le,X=new le,et=new W,ht=new he,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function _t(){return N===null?U:1}let D=i;function kt(S,B){return e.getContext(S,B)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lo}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),D===null){const B="webgl2";if(D=kt(B,S),D===null)throw kt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let wt,It,it,Ot,St,T,_,A,H,q,$,dt,lt,ft,Dt,ct,xt,Nt,mt,ut,Ut,Bt,Kt,O;function vt(){wt=new Hf(D),wt.init(),Bt=new Am(D,wt),It=new Nf(D,wt,t,Bt),it=new Em(D,wt),It.reverseDepthBuffer&&f&&it.buffers.depth.setReversed(!0),Ot=new Wf(D),St=new lm,T=new bm(D,wt,it,St,It,Bt,Ot),_=new Of(y),A=new zf(y),H=new Kh(D),Kt=new Uf(D,H),q=new Vf(D,H,Ot,Kt),$=new $f(D,q,H,Ot),mt=new Xf(D,It,T),ct=new Ff(St),dt=new am(y,_,A,wt,It,Kt,ct),lt=new Im(y,St),ft=new hm,Dt=new gm(wt),Nt=new Lf(y,_,A,it,$,m,l),xt=new Sm(y,$,It),O=new Nm(D,Ot,It,it),ut=new If(D,wt,Ot),Ut=new Gf(D,wt,Ot),Ot.programs=dt.programs,y.capabilities=It,y.extensions=wt,y.properties=St,y.renderLists=ft,y.shadowMap=xt,y.state=it,y.info=Ot}vt();const tt=new Lm(y,D);this.xr=tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(S){S!==void 0&&(U=S,this.setSize(L,C,!1))},this.getSize=function(S){return S.set(L,C)},this.setSize=function(S,B,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=S,C=B,e.width=Math.floor(S*U),e.height=Math.floor(B*U),Z===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(L*U,C*U).floor()},this.setDrawingBufferSize=function(S,B,Z){L=S,C=B,U=Z,e.width=Math.floor(S*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(rt)},this.setViewport=function(S,B,Z,J){S.isVector4?rt.set(S.x,S.y,S.z,S.w):rt.set(S,B,Z,J),it.viewport(w.copy(rt).multiplyScalar(U).round())},this.getScissor=function(S){return S.copy(at)},this.setScissor=function(S,B,Z,J){S.isVector4?at.set(S.x,S.y,S.z,S.w):at.set(S,B,Z,J),it.scissor(K.copy(at).multiplyScalar(U).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(S){it.setScissorTest(bt=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,B=!0,Z=!0){let J=0;if(S){let k=!1;if(N!==null){const pt=N.texture.format;k=pt===Bo||pt===Oo||pt===Fo}if(k){const pt=N.texture.type,Et=pt===xn||pt===Kn||pt===$i||pt===Ai||pt===Io||pt===No,Rt=Nt.getClearColor(),Ct=Nt.getClearAlpha(),zt=Rt.r,Vt=Rt.g,Pt=Rt.b;Et?(g[0]=zt,g[1]=Vt,g[2]=Pt,g[3]=Ct,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=zt,x[1]=Vt,x[2]=Pt,x[3]=Ct,D.clearBufferiv(D.COLOR,0,x))}else J|=D.COLOR_BUFFER_BIT}B&&(J|=D.DEPTH_BUFFER_BIT),Z&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),ft.dispose(),Dt.dispose(),St.dispose(),_.dispose(),A.dispose(),$.dispose(),Kt.dispose(),O.dispose(),dt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Ko),tt.removeEventListener("sessionend",Zo),Un.stop()};function ot(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const S=Ot.autoReset,B=xt.enabled,Z=xt.autoUpdate,J=xt.needsUpdate,k=xt.type;vt(),Ot.autoReset=S,xt.enabled=B,xt.autoUpdate=Z,xt.needsUpdate=J,xt.type=k}function yt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ht(S){const B=S.target;B.removeEventListener("dispose",Ht),re(B)}function re(S){xe(S),St.remove(S)}function xe(S){const B=St.get(S).programs;B!==void 0&&(B.forEach(function(Z){dt.releaseProgram(Z)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,Z,J,k,pt){B===null&&(B=At);const Et=k.isMesh&&k.matrixWorld.determinant()<0,Rt=Oc(S,B,Z,J,k);it.setMaterial(J,Et);let Ct=Z.index,zt=1;if(J.wireframe===!0){if(Ct=q.getWireframeAttribute(Z),Ct===void 0)return;zt=2}const Vt=Z.drawRange,Pt=Z.attributes.position;let Yt=Vt.start*zt,ee=(Vt.start+Vt.count)*zt;pt!==null&&(Yt=Math.max(Yt,pt.start*zt),ee=Math.min(ee,(pt.start+pt.count)*zt)),Ct!==null?(Yt=Math.max(Yt,0),ee=Math.min(ee,Ct.count)):Pt!=null&&(Yt=Math.max(Yt,0),ee=Math.min(ee,Pt.count));const ne=ee-Yt;if(ne<0||ne===1/0)return;Kt.setup(k,J,Rt,Z,Ct);let be,qt=ut;if(Ct!==null&&(be=H.get(Ct),qt=Ut,qt.setIndex(be)),k.isMesh)J.wireframe===!0?(it.setLineWidth(J.wireframeLinewidth*_t()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(k.isLine){let Lt=J.linewidth;Lt===void 0&&(Lt=1),it.setLineWidth(Lt*_t()),k.isLineSegments?qt.setMode(D.LINES):k.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else k.isPoints?qt.setMode(D.POINTS):k.isSprite&&qt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)qt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))qt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,sn=k._multiDrawCounts,jt=k._multiDrawCount,ke=Ct?H.get(Ct).bytesPerElement:1,ni=St.get(J).currentProgram.getUniforms();for(let De=0;De<jt;De++)ni.setValue(D,"_gl_DrawID",De),qt.render(Lt[De]/ke,sn[De])}else if(k.isInstancedMesh)qt.renderInstances(Yt,ne,k.count);else if(Z.isInstancedBufferGeometry){const Lt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,sn=Math.min(Z.instanceCount,Lt);qt.renderInstances(Yt,ne,sn)}else qt.render(Yt,ne)};function Zt(S,B,Z){S.transparent===!0&&S.side===un&&S.forceSinglePass===!1?(S.side=Re,S.needsUpdate=!0,is(S,B,Z),S.side=Dn,S.needsUpdate=!0,is(S,B,Z),S.side=un):is(S,B,Z)}this.compile=function(S,B,Z=null){Z===null&&(Z=S),h=Dt.get(Z),h.init(B),M.push(h),Z.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),S!==Z&&S.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights();const J=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pt=k.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const Rt=pt[Et];Zt(Rt,Z,k),J.add(Rt)}else Zt(pt,Z,k),J.add(pt)}),M.pop(),h=null,J},this.compileAsync=function(S,B,Z=null){const J=this.compile(S,B,Z);return new Promise(k=>{function pt(){if(J.forEach(function(Et){St.get(Et).currentProgram.isReady()&&J.delete(Et)}),J.size===0){k(S);return}setTimeout(pt,10)}wt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Be=null;function nn(S){Be&&Be(S)}function Ko(){Un.stop()}function Zo(){Un.start()}const Un=new ac;Un.setAnimationLoop(nn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(S){Be=S,tt.setAnimationLoop(S),S===null?Un.stop():Un.start()},tt.addEventListener("sessionstart",Ko),tt.addEventListener("sessionend",Zo),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(B),B=tt.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,B,N),h=Dt.get(S,M.length),h.init(B),M.push(h),X.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),I.setFromProjectionMatrix(X),Q=this.localClippingEnabled,F=ct.init(this.clippingPlanes,Q),p=ft.get(S,b.length),p.init(),b.push(p),tt.enabled===!0&&tt.isPresenting===!0){const pt=y.xr.getDepthSensingMesh();pt!==null&&rr(pt,B,-1/0,y.sortObjects)}rr(S,B,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(V,st),gt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,gt&&Nt.addToRenderList(p,S),this.info.render.frame++,F===!0&&ct.beginShadows();const Z=h.state.shadowsArray;xt.render(Z,S,B),F===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=p.opaque,k=p.transmissive;if(h.setupLights(),B.isArrayCamera){const pt=B.cameras;if(k.length>0)for(let Et=0,Rt=pt.length;Et<Rt;Et++){const Ct=pt[Et];Qo(J,k,S,Ct)}gt&&Nt.render(S);for(let Et=0,Rt=pt.length;Et<Rt;Et++){const Ct=pt[Et];Jo(p,S,Ct,Ct.viewport)}}else k.length>0&&Qo(J,k,S,B),gt&&Nt.render(S),Jo(p,S,B);N!==null&&(T.updateMultisampleRenderTarget(N),T.updateRenderTargetMipmap(N)),S.isScene===!0&&S.onAfterRender(y,S,B),Kt.resetDefaultState(),E=-1,v=null,M.pop(),M.length>0?(h=M[M.length-1],F===!0&&ct.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function rr(S,B,Z,J){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||I.intersectsSprite(S)){J&&ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(X);const Et=$.update(S),Rt=S.material;Rt.visible&&p.push(S,Et,Rt,Z,ht.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||I.intersectsObject(S))){const Et=$.update(S),Rt=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ht.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ht.copy(Et.boundingSphere.center)),ht.applyMatrix4(S.matrixWorld).applyMatrix4(X)),Array.isArray(Rt)){const Ct=Et.groups;for(let zt=0,Vt=Ct.length;zt<Vt;zt++){const Pt=Ct[zt],Yt=Rt[Pt.materialIndex];Yt&&Yt.visible&&p.push(S,Et,Yt,Z,ht.z,Pt)}}else Rt.visible&&p.push(S,Et,Rt,Z,ht.z,null)}}const pt=S.children;for(let Et=0,Rt=pt.length;Et<Rt;Et++)rr(pt[Et],B,Z,J)}function Jo(S,B,Z,J){const k=S.opaque,pt=S.transmissive,Et=S.transparent;h.setupLightsView(Z),F===!0&&ct.setGlobalState(y.clippingPlanes,Z),J&&it.viewport(w.copy(J)),k.length>0&&ns(k,B,Z),pt.length>0&&ns(pt,B,Z),Et.length>0&&ns(Et,B,Z),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Qo(S,B,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[J.id]===void 0&&(h.state.transmissionRenderTarget[J.id]=new je(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?mn:xn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const pt=h.state.transmissionRenderTarget[J.id],Et=J.viewport||w;pt.setSize(Et.z,Et.w);const Rt=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(nt),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),gt&&Nt.render(Z);const Ct=y.toneMapping;y.toneMapping=Pn;const zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),h.setupLightsView(J),F===!0&&ct.setGlobalState(y.clippingPlanes,J),ns(S,Z,J),T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Pt=0,Yt=B.length;Pt<Yt;Pt++){const ee=B[Pt],ne=ee.object,be=ee.geometry,qt=ee.material,Lt=ee.group;if(qt.side===un&&ne.layers.test(J.layers)){const sn=qt.side;qt.side=Re,qt.needsUpdate=!0,ta(ne,Z,J,be,qt,Lt),qt.side=sn,qt.needsUpdate=!0,Vt=!0}}Vt===!0&&(T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt))}y.setRenderTarget(Rt),y.setClearColor(nt,G),zt!==void 0&&(J.viewport=zt),y.toneMapping=Ct}function ns(S,B,Z){const J=B.isScene===!0?B.overrideMaterial:null;for(let k=0,pt=S.length;k<pt;k++){const Et=S[k],Rt=Et.object,Ct=Et.geometry,zt=J===null?Et.material:J,Vt=Et.group;Rt.layers.test(Z.layers)&&ta(Rt,B,Z,Ct,zt,Vt)}}function ta(S,B,Z,J,k,pt){S.onBeforeRender(y,B,Z,J,k,pt),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,B,Z,J,S,pt),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Re,k.needsUpdate=!0,y.renderBufferDirect(Z,B,J,k,S,pt),k.side=Dn,k.needsUpdate=!0,y.renderBufferDirect(Z,B,J,k,S,pt),k.side=un):y.renderBufferDirect(Z,B,J,k,S,pt),S.onAfterRender(y,B,Z,J,k,pt)}function is(S,B,Z){B.isScene!==!0&&(B=At);const J=St.get(S),k=h.state.lights,pt=h.state.shadowsArray,Et=k.state.version,Rt=dt.getParameters(S,k.state,pt,B,Z),Ct=dt.getProgramCacheKey(Rt);let zt=J.programs;J.environment=S.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(S.isMeshStandardMaterial?A:_).get(S.envMap||J.environment),J.envMapRotation=J.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",Ht),zt=new Map,J.programs=zt);let Vt=zt.get(Ct);if(Vt!==void 0){if(J.currentProgram===Vt&&J.lightsStateVersion===Et)return na(S,Rt),Vt}else Rt.uniforms=dt.getUniforms(S),S.onBeforeCompile(Rt,y),Vt=dt.acquireProgram(Rt,Ct),zt.set(Ct,Vt),J.uniforms=Rt.uniforms;const Pt=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=ct.uniform),na(S,Rt),J.needsLights=kc(S),J.lightsStateVersion=Et,J.needsLights&&(Pt.ambientLightColor.value=k.state.ambient,Pt.lightProbe.value=k.state.probe,Pt.directionalLights.value=k.state.directional,Pt.directionalLightShadows.value=k.state.directionalShadow,Pt.spotLights.value=k.state.spot,Pt.spotLightShadows.value=k.state.spotShadow,Pt.rectAreaLights.value=k.state.rectArea,Pt.ltc_1.value=k.state.rectAreaLTC1,Pt.ltc_2.value=k.state.rectAreaLTC2,Pt.pointLights.value=k.state.point,Pt.pointLightShadows.value=k.state.pointShadow,Pt.hemisphereLights.value=k.state.hemi,Pt.directionalShadowMap.value=k.state.directionalShadowMap,Pt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pt.spotShadowMap.value=k.state.spotShadowMap,Pt.spotLightMatrix.value=k.state.spotLightMatrix,Pt.spotLightMap.value=k.state.spotLightMap,Pt.pointShadowMap.value=k.state.pointShadowMap,Pt.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=Vt,J.uniformsList=null,Vt}function ea(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=Bs.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function na(S,B){const Z=St.get(S);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Oc(S,B,Z,J,k){B.isScene!==!0&&(B=At),T.resetTextureUnits();const pt=B.fog,Et=J.isMeshStandardMaterial?B.environment:null,Rt=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Di,Ct=(J.isMeshStandardMaterial?A:_).get(J.envMap||Et),zt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Vt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Pt=!!Z.morphAttributes.position,Yt=!!Z.morphAttributes.normal,ee=!!Z.morphAttributes.color;let ne=Pn;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ne=y.toneMapping);const be=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,qt=be!==void 0?be.length:0,Lt=St.get(J),sn=h.state.lights;if(F===!0&&(Q===!0||S!==v)){const Ie=S===v&&J.id===E;ct.setState(J,S,Ie)}let jt=!1;J.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==sn.state.version||Lt.outputColorSpace!==Rt||k.isBatchedMesh&&Lt.batching===!1||!k.isBatchedMesh&&Lt.batching===!0||k.isBatchedMesh&&Lt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Lt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Lt.instancing===!1||!k.isInstancedMesh&&Lt.instancing===!0||k.isSkinnedMesh&&Lt.skinning===!1||!k.isSkinnedMesh&&Lt.skinning===!0||k.isInstancedMesh&&Lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Lt.instancingMorph===!1&&k.morphTexture!==null||Lt.envMap!==Ct||J.fog===!0&&Lt.fog!==pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ct.numPlanes||Lt.numIntersection!==ct.numIntersection)||Lt.vertexAlphas!==zt||Lt.vertexTangents!==Vt||Lt.morphTargets!==Pt||Lt.morphNormals!==Yt||Lt.morphColors!==ee||Lt.toneMapping!==ne||Lt.morphTargetsCount!==qt)&&(jt=!0):(jt=!0,Lt.__version=J.version);let ke=Lt.currentProgram;jt===!0&&(ke=is(J,B,k));let ni=!1,De=!1,Ii=!1;const ie=ke.getUniforms(),Ze=Lt.uniforms;if(it.useProgram(ke.program)&&(ni=!0,De=!0,Ii=!0),J.id!==E&&(E=J.id,De=!0),ni||v!==S){it.buffers.depth.getReversed()?(Y.copy(S.projectionMatrix),Ah(Y),wh(Y),ie.setValue(D,"projectionMatrix",Y)):ie.setValue(D,"projectionMatrix",S.projectionMatrix),ie.setValue(D,"viewMatrix",S.matrixWorldInverse);const Mn=ie.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,et.setFromMatrixPosition(S.matrixWorld)),It.logarithmicDepthBuffer&&ie.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ie.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,De=!0,Ii=!0)}if(k.isSkinnedMesh){ie.setOptional(D,k,"bindMatrix"),ie.setOptional(D,k,"bindMatrixInverse");const Ie=k.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ie.setValue(D,"boneTexture",Ie.boneTexture,T))}k.isBatchedMesh&&(ie.setOptional(D,k,"batchingTexture"),ie.setValue(D,"batchingTexture",k._matricesTexture,T),ie.setOptional(D,k,"batchingIdTexture"),ie.setValue(D,"batchingIdTexture",k._indirectTexture,T),ie.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ie.setValue(D,"batchingColorTexture",k._colorsTexture,T));const Ni=Z.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&mt.update(k,Z,ke),(De||Lt.receiveShadow!==k.receiveShadow)&&(Lt.receiveShadow=k.receiveShadow,ie.setValue(D,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ze.envMap.value=Ct,Ze.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(Ze.envMapIntensity.value=B.environmentIntensity),De&&(ie.setValue(D,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&Bc(Ze,Ii),pt&&J.fog===!0&&lt.refreshFogUniforms(Ze,pt),lt.refreshMaterialUniforms(Ze,J,U,C,h.state.transmissionRenderTarget[S.id]),Bs.upload(D,ea(Lt),Ze,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Bs.upload(D,ea(Lt),Ze,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ie.setValue(D,"center",k.center),ie.setValue(D,"modelViewMatrix",k.modelViewMatrix),ie.setValue(D,"normalMatrix",k.normalMatrix),ie.setValue(D,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ie=J.uniformsGroups;for(let Mn=0,Sn=Ie.length;Mn<Sn;Mn++){const ia=Ie[Mn];O.update(ia,ke),O.bind(ia,ke)}}return ke}function Bc(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function kc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,B,Z){St.get(S.texture).__webglTexture=B,St.get(S.depthTexture).__webglTexture=Z;const J=St.get(S);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){const Z=St.get(S);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,Z=0){N=S,R=B,P=Z;let J=!0,k=null,pt=!1,Et=!1;if(S){const Ct=St.get(S);if(Ct.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Ct.__hasExternalTextures)T.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pt=S.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&St.has(Pt)&&(S.width!==Pt.image.width||S.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Et=!0);const Vt=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][Z]:k=Vt[B],pt=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?k=St.get(S).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[Z]:k=Vt,w.copy(S.viewport),K.copy(S.scissor),j=S.scissorTest}else w.copy(rt).multiplyScalar(U).floor(),K.copy(at).multiplyScalar(U).floor(),j=bt;if(it.bindFramebuffer(D.FRAMEBUFFER,k)&&J&&it.drawBuffers(S,k),it.viewport(w),it.scissor(K),it.setScissorTest(j),pt){const Ct=St.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,Z)}else if(Et){const Ct=St.get(S.texture),zt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.__webglTexture,Z||0,zt)}E=-1},this.readRenderTargetPixels=function(S,B,Z,J,k,pt,Et){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){it.bindFramebuffer(D.FRAMEBUFFER,Rt);try{const Ct=S.texture,zt=Ct.format,Vt=Ct.type;if(!It.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-J&&Z>=0&&Z<=S.height-k&&D.readPixels(B,Z,J,k,Bt.convert(zt),Bt.convert(Vt),pt)}finally{const Ct=N!==null?St.get(N).__webglFramebuffer:null;it.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,B,Z,J,k,pt,Et){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){const Ct=S.texture,zt=Ct.format,Vt=Ct.type;if(!It.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-J&&Z>=0&&Z<=S.height-k){it.bindFramebuffer(D.FRAMEBUFFER,Rt);const Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(B,Z,J,k,Bt.convert(zt),Bt.convert(Vt),0);const Yt=N!==null?St.get(N).__webglFramebuffer:null;it.bindFramebuffer(D.FRAMEBUFFER,Yt);const ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bh(D,ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(Pt),D.deleteSync(ee),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,Z=0){S.isTexture!==!0&&(Vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);const J=Math.pow(2,-Z),k=Math.floor(S.image.width*J),pt=Math.floor(S.image.height*J),Et=B!==null?B.x:0,Rt=B!==null?B.y:0;T.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Et,Rt,k,pt),it.unbindTexture()},this.copyTextureToTexture=function(S,B,Z=null,J=null,k=0){S.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,S=arguments[1],B=arguments[2],k=arguments[3]||0,Z=null);let pt,Et,Rt,Ct,zt,Vt,Pt,Yt,ee;const ne=S.isCompressedTexture?S.mipmaps[k]:S.image;Z!==null?(pt=Z.max.x-Z.min.x,Et=Z.max.y-Z.min.y,Rt=Z.isBox3?Z.max.z-Z.min.z:1,Ct=Z.min.x,zt=Z.min.y,Vt=Z.isBox3?Z.min.z:0):(pt=ne.width,Et=ne.height,Rt=ne.depth||1,Ct=0,zt=0,Vt=0),J!==null?(Pt=J.x,Yt=J.y,ee=J.z):(Pt=0,Yt=0,ee=0);const be=Bt.convert(B.format),qt=Bt.convert(B.type);let Lt;B.isData3DTexture?(T.setTexture3D(B,0),Lt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(T.setTexture2DArray(B,0),Lt=D.TEXTURE_2D_ARRAY):(T.setTexture2D(B,0),Lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const sn=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ke=D.getParameter(D.UNPACK_SKIP_PIXELS),ni=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ne.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt);const Ii=S.isDataArrayTexture||S.isData3DTexture,ie=B.isDataArrayTexture||B.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Ze=St.get(S),Ni=St.get(B),Ie=St.get(Ze.__renderTarget),Mn=St.get(Ni.__renderTarget);it.bindFramebuffer(D.READ_FRAMEBUFFER,Ie.__webglFramebuffer),it.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Sn=0;Sn<Rt;Sn++)Ii&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(S).__webglTexture,k,Vt+Sn),S.isDepthTexture?(ie&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(B).__webglTexture,k,ee+Sn),D.blitFramebuffer(Ct,zt,pt,Et,Pt,Yt,pt,Et,D.DEPTH_BUFFER_BIT,D.NEAREST)):ie?D.copyTexSubImage3D(Lt,k,Pt,Yt,ee+Sn,Ct,zt,pt,Et):D.copyTexSubImage2D(Lt,k,Pt,Yt,ee+Sn,Ct,zt,pt,Et);it.bindFramebuffer(D.READ_FRAMEBUFFER,null),it.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ie?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Lt,k,Pt,Yt,ee,pt,Et,Rt,be,qt,ne.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,k,Pt,Yt,ee,pt,Et,Rt,be,ne.data):D.texSubImage3D(Lt,k,Pt,Yt,ee,pt,Et,Rt,be,qt,ne):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Pt,Yt,pt,Et,be,qt,ne.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Pt,Yt,ne.width,ne.height,be,ne.data):D.texSubImage2D(D.TEXTURE_2D,k,Pt,Yt,pt,Et,be,qt,ne);D.pixelStorei(D.UNPACK_ROW_LENGTH,sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,ni),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),k===0&&B.generateMipmaps&&D.generateMipmap(Lt),it.unbindTexture()},this.copyTextureToTexture3D=function(S,B,Z=null,J=null,k=0){return S.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,S=arguments[2],B=arguments[3],k=arguments[4]||0),Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,Z,J,k)},this.initRenderTarget=function(S){St.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),it.unbindTexture()},this.resetState=function(){R=0,P=0,N=null,it.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class ts extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fm extends Zi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const el=new le,Ao=new js,As=new qs,ws=new W;class fc extends Pe{constructor(t=new Ke,e=new Fm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),As.radius+=r,t.ray.intersectsSphere(As)===!1)return;el.copy(s).invert(),Ao.copy(t.ray).applyMatrix4(el);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,x=m;g<x;g++){const p=c.getX(g);ws.fromBufferAttribute(d,p),nl(ws,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,x=m;g<x;g++)ws.fromBufferAttribute(d,g),nl(ws,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nl(n,t,e,i,s,r,o){const a=Ao.distanceSqToPoint(n);if(a<e){const l=new W;Ao.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Om extends _e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Bm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=il(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=il();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function il(){return performance.now()}const sl=new le;class km{constructor(t,e,i=0,s=1/0){this.ray=new js(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sl),this}intersectObject(t,e=!0,i=[]){return wo(t,this,i,e),i.sort(rl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)wo(t[s],this,i,e);return i.sort(rl),i}}function rl(n,t){return n.distance-t.distance}function wo(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)wo(r[o],t,e,!0)}}class ol{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zm extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);const al={type:"change"},Vo={type:"start"},pc={type:"end"},Rs=new js,ll=new Rn,Hm=Math.cos(70*Eh.DEG2RAD),de=new W,we=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nr=1e-6;class Vm extends zm{constructor(t,e=null){super(t,e),this.state=te.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new en,this._lastTargetPosition=new W,this._quat=new en().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ol,this._sphericalDelta=new ol,this._scale=1,this._panOffset=new W,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new W,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wm.bind(this),this._onPointerDown=Gm.bind(this),this._onPointerUp=Xm.bind(this),this._onContextMenu=Jm.bind(this),this._onMouseWheel=qm.bind(this),this._onKeyDown=jm.bind(this),this._onTouchStart=Km.bind(this),this._onTouchMove=Zm.bind(this),this._onMouseDown=$m.bind(this),this._onMouseMove=Ym.bind(this),this._interceptControlDown=Qm.bind(this),this._interceptControlUp=tg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(al),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;de.copy(e).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=we:i>Math.PI&&(i-=we),s<-Math.PI?s+=we:s>Math.PI&&(s-=we),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),e.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=de.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new W(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rs.origin.copy(this.object.position),Rs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rs.direction))<Hm?this.object.lookAt(this.target):(ll.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rs.intersectPlane(ll,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nr||this._lastTargetPosition.distanceToSquared(this.target)>Nr?(this.dispatchEvent(al),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?we/60*this.autoRotateSpeed*t:we/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){de.setFromMatrixColumn(e,0),de.multiplyScalar(-t),this._panOffset.add(de)}_panUp(t,e){this.screenSpacePanning===!0?de.setFromMatrixColumn(e,1):(de.setFromMatrixColumn(e,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(t),this._panOffset.add(de)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;de.copy(s).sub(this.target);let r=de.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(we*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-we*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(we*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-we*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Gm(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Wm(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Xm(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pc),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $m(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=te.DOLLY;break;case Mi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=te.ROTATE}break;case Mi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Vo)}function Ym(n){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function qm(n){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(n.preventDefault(),this.dispatchEvent(Vo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(pc))}function jm(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Km(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=te.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=te.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Vo)}function Zm(n){switch(this._trackPointer(n),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=te.NONE}}function Jm(n){this.enabled!==!1&&n.preventDefault()}function Qm(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const eg=`
  uniform float uSizeNear;
  uniform float uSizeFar;
  uniform float uInkNear;
  uniform float uInkFar;
  uniform float uRadius;
  uniform float uFocusDepth;
  uniform float uPixelRatio;
  uniform highp float uFlash; // 0..1 momentary "found" bloom (precision pinned: shared with frag)
  attribute float emphasis;   // per-point highlight; <0 dims, >0 brightens
  attribute float picked;     // 1 = extracted (locked in)
  varying float vInk;
  varying float vEmph;
  varying float vPicked;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float viewZ = -mv.z;                       // distance in front of camera
    float depth01 = clamp(
      (viewZ - (uFocusDepth - uRadius)) / (2.0 * uRadius),
      0.0, 1.0
    );                                          // 0 = nearest, 1 = farthest
    vInk = mix(uInkNear, uInkFar, depth01);
    vEmph = emphasis;
    vPicked = picked;
    float hi = max(max(emphasis, 0.0), picked);
    float bloom = 1.0 + 0.6 * hi + uFlash * max(emphasis, 0.0) * 1.1;
    gl_PointSize = mix(uSizeNear, uSizeFar, depth01) * uPixelRatio * bloom;
    gl_Position = projectionMatrix * mv;
  }
`,ng=`
  precision mediump float;
  uniform float uEmphasisGain;
  uniform highp float uFlash;  // precision pinned to match the vertex shader
  uniform vec3 uFlashColor;
  uniform vec3 uPickedColor;
  varying float vInk;
  varying float vEmph;
  varying float vPicked;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float alpha = 1.0 - smoothstep(0.44, 0.5, d);   // soft round dot (AA edge)
    if (alpha <= 0.0) discard;
    float ink = clamp(vInk + uEmphasisGain * max(vEmph, vPicked), 0.0, 1.0);
    vec3 col = mix(vec3(ink), uFlashColor, clamp(vEmph, 0.0, 1.0) * uFlash);
    col = mix(col, uPickedColor, vPicked);          // extracted points read as locked-in
    gl_FragColor = vec4(col, alpha);
  }
`;class ig{points;material;geometry;constructor(t,e={}){this.geometry=new Ke,this.geometry.setAttribute("position",new ae(t,3)),this.geometry.setAttribute("emphasis",new ae(new Float32Array(t.length/3),1)),this.geometry.setAttribute("picked",new ae(new Float32Array(t.length/3),1)),this.material=new _e({uniforms:{uSizeNear:{value:e.sizeNear??7},uSizeFar:{value:e.sizeFar??3},uInkNear:{value:e.inkNear??.95},uInkFar:{value:e.inkFar??.22},uRadius:{value:e.radius??1},uFocusDepth:{value:4},uPixelRatio:{value:e.pixelRatio??1},uEmphasisGain:{value:e.emphasisGain??.85},uFlash:{value:0},uFlashColor:{value:new Xt(e.flashColor??16764778)},uPickedColor:{value:new Xt(e.pickedColor??7332024)}},vertexShader:eg,fragmentShader:ng,transparent:!0,depthTest:!0,depthWrite:!0}),this.points=new fc(this.geometry,this.material),this.points.frustumCulled=!1}setPositions(t){this.geometry.setAttribute("position",new ae(t,3)),this.geometry.attributes.position.needsUpdate=!0}updatePositions(t){const e=this.geometry.getAttribute("position");e.array.set(t),e.needsUpdate=!0}updateEmphasis(t){const e=this.geometry.getAttribute("emphasis");e.array.set(t),e.needsUpdate=!0}setFlash(t){this.material.uniforms.uFlash.value=t}updatePicked(t){const e=this.geometry.getAttribute("picked");e.array.set(t),e.needsUpdate=!0}sync(t,e,i){this.material.uniforms.uFocusDepth.value=t.position.distanceTo(e),this.material.uniforms.uPixelRatio.value=i}dispose(){this.geometry.dispose(),this.material.dispose()}}function sg(n){let t=n>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function rg(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}const Zn=n=>sg(typeof n=="string"?rg(n):n),Go=(n,t,e)=>t+(e-t)*n();function ce(n,t){const e=t.length,i=t[0]?.length??0;for(const s of t)if(s.length!==i)throw new Error(`glyph "${n}": ragged row (${s.length} != ${i})`);return{name:n,w:i,h:e,rows:t}}const Ro=[ce("ARROW_UP",["..#..",".###.","##.##","..#..","..#..","..#..","..#.."]),ce("ARROW_DOWN",["..#..","..#..","..#..","..#..","##.##",".###.","..#.."]),ce("DIAMOND",["..#..",".#.#.","#...#","#...#","#...#",".#.#.","..#.."]),ce("CROSS_X",["#...#",".#.#.","..#..","..#..","..#..",".#.#.","#...#"]),ce("SQUARE",["#####","#...#","#...#","#...#","#...#","#...#","#####"]),ce("PLUS",["..#..","..#..","..#..","#####","..#..","..#..","..#.."]),ce("TRIANGLE",["..#..","..#..",".#.#.",".#.#.","#...#","#...#","#####"]),ce("ESS",[".####","#....","#....",".###.","....#","....#","####."]),ce("ZED",["#####","....#","...#.","..#..",".#...","#....","#####"]),ce("H_BAR",["#...#","#...#","#...#","#####","#...#","#...#","#...#"]),ce("VEE",["#...#","#...#",".#.#.",".#.#.",".#.#.","..#..","..#.."]),ce("TEE",["#####","..#..","..#..","..#..","..#..","..#..","..#.."]),ce("ELL",["#....","#....","#....","#....","#....","#....","#####"]),ce("KAY",["#...#","#..#.","#.#..","##...","#.#..","#..#.","#...#"]),ce("STAR",["..#..","#.#.#",".###.","#####",".###.","#.#.#","..#.."])];ce("B0",["##","..","..","##"]),ce("B1",["#.","#.","#.","#."]),ce("B2",[".#",".#",".#",".#"]),ce("B3",["##","##","..",".."]),ce("B4",["..","..","##","##"]),ce("B5",["#.",".#","#.",".#"]);function og(n){const t=[];for(const e of n.rows)for(const i of e)t.push(i==="#");return t}function mc(n){return og(n).reduce((t,e)=>t+(e?1:0),0)}function ag(n){const t=[];for(let e=0;e<n.h;e++){const i=n.rows[e];for(let s=0;s<n.w;s++)i[s]==="#"&&t.push({col:s,row:e})}return t}function gc(n){return ag(n).map(({col:t,row:e})=>({x:t-(n.w-1)/2,y:(n.h-1)/2-e}))}const cl=(n,t,e)=>t>=0&&e>=0&&t<n.w&&e<n.h&&n.rows[e][t]==="#";function lg(n){const t=[];for(let e=-1;e<=n.h;e++)for(let i=-1;i<=n.w;i++){if(cl(n,i,e))continue;let s=!1;for(let r=-1;r<=1&&!s;r++)for(let o=-1;o<=1;o++)if((r||o)&&cl(n,i+o,e+r)){s=!0;break}s&&t.push({x:i-(n.w-1)/2,y:(n.h-1)/2-e})}return t}const hl=(n,t)=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]],ul=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],qn=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],Jn=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Co=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],cg=n=>Math.sqrt(Jn(n,n));function Qn(n){const t=cg(n);return t>1e-12?qn(n,1/t):[0,0,1]}const hg=(n,t)=>Math.acos(Math.max(-1,Math.min(1,Jn(Qn(n),Qn(t))))),Ws=(n,t)=>hg(n,t)*180/Math.PI;function _c(n){const t=Qn(n),e=Math.abs(t[2])<.9?[0,0,1]:[1,0,0],i=Qn(Co(t,e)),s=Co(t,i);return[i,s]}function Js(n){const t=2*n()-1,e=2*Math.PI*n(),i=Math.sqrt(Math.max(0,1-t*t));return[i*Math.cos(e),i*Math.sin(e),t]}function ug(n,t){return qn(Js(n),t*Math.cbrt(n()))}function dl(n,t,e){const i=Qn(t),s=Math.cos(e),r=Math.sin(e),o=Co(i,n),a=Jn(i,n)*(1-s);return[n[0]*s+o[0]*r+i[0]*a,n[1]*s+o[1]*r+i[1]*a,n[2]*s+o[2]*r+i[2]*a]}const xc={1:{M:60,K:12,H:0,L:1,thetaLockDeg:6,tRun:60,tSweep:null,drift:!1},2:{M:90,K:14,H:2,L:1,thetaLockDeg:5,tRun:60,tSweep:12,drift:!1},3:{M:120,K:16,H:4,L:2,thetaLockDeg:4,tRun:75,tSweep:10,drift:!1},4:{M:150,K:18,H:6,L:2,thetaLockDeg:3.5,tRun:75,tSweep:8,drift:!0},5:{M:200,K:20,H:8,L:3,thetaLockDeg:3,tRun:90,tSweep:7,drift:!0}},ge={glyphScale:.15,depthMin:.3,depthMax:1,depthScale:.875,noiseRadius:.9,defaultViewDir:[0,0,1],minAxisFromViewDeg:15,minAxisSeparationDeg:35,checkViewpoints:400,checkSkipDeg:30,coherenceSigmaCells:1,coherenceThreshold:.7,maxBoardRerolls:24};function dg(n,t){const e=t.slice();for(let i=e.length-1;i>0;i--){const s=Math.floor(n()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}function fg(n,t,e){const i=Ro.filter(l=>!e.has(l.name)),r=(i.length?i:Ro).map(l=>({g:l,d:Math.abs(mc(l)-t)})),o=Math.min(...r.map(l=>l.d)),a=r.filter(l=>l.d===o).map(l=>l.g);return a[Math.floor(n()*a.length)]}function pg(n,t){for(let e=0;e<1e3;e++){const i=Js(n);if(!(Ws(i,ge.defaultViewDir)<ge.minAxisFromViewDeg)&&!t.some(s=>Ws(i,s)<ge.minAxisSeparationDeg))return i}throw new Error("pickAxis: could not satisfy separation constraints")}function fl(n,t,e,i,s){const r=(n()<.5?-1:1)*Go(n,ge.depthMin,ge.depthMax)*ge.depthScale;return hl(hl(qn(e,t.x*ge.glyphScale),qn(i,t.y*ge.glyphScale)),qn(s,r))}function vc(n,t,e){const i=gc(t),s=i.length;if(s===0||n.length<s)return 0;const[r,o]=_c(e),a=ge.glyphScale,l=[],c=[],u=[],d=[];let f=0,m=0,g=0,x=0;for(let N=0;N<s;N++){const E=i[N],v=n[N].pos,w=E.x*a,K=E.y*a,j=Jn(v,r),nt=Jn(v,o);l.push(w),c.push(K),u.push(j),d.push(nt),f+=w,m+=K,g+=j,x+=nt}f/=s,m/=s,g/=s,x/=s;let p=0,h=0;for(let N=0;N<s;N++){const E=l[N]-f,v=c[N]-m,w=u[N]-g,K=d[N]-x;p+=E*w+v*K,h+=E*K-v*w}const b=Math.atan2(h,p),M=Math.cos(b),y=Math.sin(b);let z=0;for(let N=0;N<s;N++){const E=l[N]-f,v=c[N]-m,w=M*E-y*v,K=y*E+M*v,j=w-(u[N]-g),nt=K-(d[N]-x);z+=j*j+nt*nt}const R=Math.sqrt(z/s),P=ge.glyphScale*ge.coherenceSigmaCells;return Math.exp(-((R/P)**2))}function mg(n,t,e,i){let s=0;for(let r=0;r<ge.checkViewpoints;r++){const o=Js(i);if(Ws(o,e)<ge.checkSkipDeg)continue;const a=vc(n,t,o);a>s&&(s=a)}return s}function gg(n,t){const e=xc[n],i=Zn(`${t}:constellation:${n}`);for(let s=1;s<=ge.maxBoardRerolls;s++){const r=[],o=[],a=[],l=new Set,c=[];for(let g=0;g<e.L;g++){const x=pg(i,c);c.push(x);const p=fg(i,e.K,l);l.add(p.name),o.push(p);const[h,b]=_c(x);for(const y of gc(p))a.push({pos:fl(i,y,h,b,x),pop:"SIGNAL",lock:g});const M=dg(i,lg(p));for(let y=0;y<Math.min(e.H,M.length);y++)a.push({pos:fl(i,M[y],h,b,x),pop:"TRIP",lock:g});r.push({index:g,axis:x,glyph:p.name,signalCount:mc(p)})}const u=e.M-a.length;if(u<0)continue;let d=0,f=!0;for(let g=0;g<e.L;g++){const x=a.filter(h=>h.pop==="SIGNAL"&&h.lock===g),p=mg(x,o[g],c[g],Zn(`${t}:check:${n}:${g}`));if(p>d&&(d=p),p>=ge.coherenceThreshold){f=!1;break}}if(!f)continue;const m=a.slice();for(let g=0;g<u;g++)m.push({pos:ug(i,ge.noiseRadius),pop:"NOISE",lock:-1});return{seed:t,difficulty:n,params:e,points:m,locks:r,genStats:{boardAttempts:s,noiseRerolls:0,maxOffAxisCoherence:d}}}throw new Error(`generateBoard: failed to produce a unique board after ${ge.maxBoardRerolls} attempts (seed=${t}, D${n})`)}const _g=1,xg=.1;class vg{board;tRun;tSweep;drift;maxTrips=3;phase="PLAN";timeLeft;trips=0;sweepT=0;sweepCount=0;extracted;constructor(t){this.board=t,this.tRun=t.params.tRun,this.tSweep=t.params.tSweep,this.drift=t.params.drift,this.timeLeft=this.tRun,this.extracted=t.locks.map(()=>new Set)}lockDone(t){return this.extracted[t].size>=this.board.locks[t].signalCount}allDone(){return this.board.locks.every((t,e)=>this.lockDone(e))}extractedCount(t){return this.extracted[t].size}get over(){return this.phase==="WON"||this.phase==="LOST_SOFT"||this.phase==="LOST_CRIT"}select(t,e){if(this.over||e<0)return"ignored";const i=this.board.points[t];if(!i)return"ignored";if(this.phase==="PLAN"&&(this.phase="RUN"),i.pop==="SIGNAL"&&i.lock===e){const s=this.extracted[e];return s.has(t)?"ignored":(s.add(t),this.lockDone(e)?this.allDone()?(this.phase="WON","won"):"lockDone":"extract")}return i.pop==="TRIP"?(this.trips+=1,this.timeLeft=Math.max(0,this.timeLeft-xg*this.tRun),this.trips>=this.maxTrips?this.phase="LOST_CRIT":this.timeLeft<=0&&(this.phase="LOST_SOFT"),"trip"):(this.timeLeft=Math.max(0,this.timeLeft-_g),this.timeLeft<=0&&(this.phase="LOST_SOFT"),"dud")}tick(t,e,i){if(this.phase!=="RUN")return{wrapped:!1};if(this.timeLeft-=t,this.timeLeft<=0)return this.timeLeft=0,this.phase="LOST_SOFT",{wrapped:!1};if(!this.tSweep)return{wrapped:!1};if(this.sweepT+=t/this.tSweep,this.sweepT<1)return{wrapped:!1};if(this.sweepT-=1,this.sweepCount+=1,i>=0&&this.extracted[i].size>0&&!this.lockDone(i)&&!e){const r=this.extracted[i],o=r.values().next().value;o!==void 0&&r.delete(o)}return{wrapped:!0}}result(){const t=this.board.locks.filter((i,s)=>this.lockDone(s)).map(i=>i.glyph),e=Math.max(0,this.timeLeft)+(this.maxTrips-this.trips);return{outcome:this.phase,margin:e,timeUsed:this.tRun-this.timeLeft,trips:this.trips,keys:t}}}const Mg=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)},Sg=n=>{const t=Ro.find(e=>e.name===n);if(!t)throw new Error(`glyph ${n} not found`);return t},Cs=30,yg=[93,202,165],pl=[224,176,112],Eg=[208,96,90],ml=(n,t,e)=>`rgb(${Math.round(n[0]+(t[0]-n[0])*e)},${Math.round(n[1]+(t[1]-n[1])*e)},${Math.round(n[2]+(t[2]-n[2])*e)})`,gl=n=>n>.5?ml(yg,pl,(1-n)/.5):ml(pl,Eg,Math.max(0,(.5-n)/.5));function Tg(n,t){const e=new Qi({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(526349,1);const i=new ts,s=new W(0,0,0),r=1.12,o=.7,a=new ei(-1,1,1,-1,.01,100);a.position.set(0,0,4),a.lookAt(s);const l=new Vm(a,n);l.enableDamping=!0,l.enablePan=!1,l.target.copy(s);const c=new km;c.params.Points.threshold=.1;const u="http://www.w3.org/2000/svg",d=(A,H)=>{const q=document.createElement(A);return q.style.cssText=H,document.body.appendChild(q),q},f="ui-monospace,SFMono-Regular,Menlo,monospace",m=document.createElementNS(u,"svg");m.setAttribute("viewBox","0 0 220 130"),m.style.cssText="position:fixed;left:50%;bottom:14px;transform:translateX(-50%);width:220px;height:130px;pointer-events:none";const g=[];for(let A=0;A<Cs;A++){const H=Math.PI*(1-A/(Cs-1)),q=document.createElementNS(u,"circle");q.setAttribute("cx",String(110+96*Math.cos(H))),q.setAttribute("cy",String(120-96*Math.sin(H))),q.setAttribute("r","2.6"),q.setAttribute("fill","#2a2a34"),m.appendChild(q),g.push(q)}const x=document.createElementNS(u,"text");x.setAttribute("x","110"),x.setAttribute("y","112"),x.setAttribute("text-anchor","middle"),x.setAttribute("fill","#e8c06a"),x.setAttribute("style",`font:11px ${f};letter-spacing:.15em;opacity:0`),m.appendChild(x),t.skill>=1&&document.body.appendChild(m);const p=document.createElementNS(u,"svg");p.setAttribute("viewBox","0 0 48 48"),p.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:46px;height:46px;pointer-events:none";const h=document.createElementNS(u,"circle");h.setAttribute("cx","24"),h.setAttribute("cy","24"),h.setAttribute("r","21"),h.setAttribute("fill","none"),h.setAttribute("stroke",gl(1)),h.setAttribute("stroke-width","1.6"),p.appendChild(h),document.body.appendChild(p);const b=d("div",`position:fixed;top:10px;right:12px;display:flex;gap:6px;font:13px ${f};color:#5a5a64;pointer-events:none`),M=[0,1,2].map(()=>{const A=document.createElement("span");return A.textContent="✕",b.appendChild(A),A}),y=d("div",`position:fixed;left:50%;top:30px;transform:translateX(-50%);font:11px ${f};color:#8fd0b6;pointer-events:none;opacity:0`),z=d("div",`position:fixed;left:12px;bottom:12px;font:11px ${f};color:#55555f;pointer-events:none`),R=d("div","position:fixed;width:16px;height:16px;border:1px solid #6fe0b8;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .1s"),P=d("div","position:fixed;inset:0;pointer-events:none;box-shadow:inset 0 0 120px 20px #d0403a;opacity:0;transition:opacity .3s"),N=d("div",`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${f};text-align:center;pointer-events:none`);let E,v,w,K,j,nt,G,L=null,C=[],U=5,V,st=Zn("drift"),rt=!1,at=!1,bt=-1e9;function I(A,H){E=gg(A,H),V=new vg(E),st=Zn(`${H}:drift`),U=xc[A].thetaLockDeg;const q=E.points.length;v=new Float32Array(q*3),E.points.forEach(($,dt)=>{v[dt*3]=$.pos[0],v[dt*3+1]=$.pos[1],v[dt*3+2]=$.pos[2]}),w=v.slice(),K=new Float32Array(q),j=new Float32Array(q),nt=new Uint8Array(q),G=new Float32Array(q),C=E.locks.map($=>{const dt=[],lt=[],ft=new Map;return E.points.forEach((Dt,ct)=>{Dt.pop==="SIGNAL"&&Dt.lock===$.index&&(dt.push(ct),lt.push(Dt),nt[ct]=1,ft.set(ct,ul(Dt.pos,qn($.axis,Jn(Dt.pos,$.axis)))))}),{axis:$.axis,axisV3:new W(...$.axis),glyph:Sg($.glyph),signalIdx:dt,signalPts:lt,flat:ft,coherence:0}}),L&&(i.remove(L.points),L.dispose()),L=new ig(w,{radius:1,sizeNear:6,sizeFar:2.5,inkNear:.9,inkFar:.14,emphasisGain:.85,pixelRatio:e.getPixelRatio()}),i.add(L.points),z.textContent=`D${A} · ${H} · ${E.locks.length} lock(s) · drag to orbit · click to extract · R`,N.style.display="none",rt=!1,at=!1}I(t.difficulty,t.seed);function F(){const A=window.innerWidth,H=window.innerHeight;e.setSize(A,H);const q=A/H;a.left=-r*q,a.right=r*q,a.top=r,a.bottom=-r,a.updateProjectionMatrix()}window.addEventListener("resize",F),F();function Q(A){const H=C[A];if(!H)return;const q=2*Math.PI/180*st(),$=Js(st);H.axis=Qn(dl(H.axis,$,q)),H.axisV3.set(...H.axis),E.points.forEach((dt,lt)=>{dt.lock===A&&(dt.pos=dl(dt.pos,$,q),v[lt*3]=dt.pos[0],v[lt*3+1]=dt.pos[1],v[lt*3+2]=dt.pos[2])}),H.flat.clear();for(const dt of H.signalIdx){const lt=E.points[dt].pos;H.flat.set(dt,ul(lt,qn(H.axis,Jn(lt,H.axis))))}}let Y=0,X=0,et=-1,ht=-1;const At=(A,H)=>{const q=n.getBoundingClientRect();return[(A-q.left)/q.width*2-1,-((H-q.top)/q.height)*2+1]};function gt(A,H){if(!L)return-1;const[q,$]=At(A,H);c.setFromCamera(new Ft(q,$),a);const dt=c.intersectObject(L.points,!1);if(!dt.length)return-1;dt.sort((lt,ft)=>(lt.distanceToRay??9)-(ft.distanceToRay??9));for(const lt of dt){const ft=lt.index;if(ft==null)continue;const Dt=E.points[ft];if(Dt&&Dt.pop==="SIGNAL"&&Dt.lock===_t&&!V.extracted[_t]?.has(ft))return ft}return dt[0].index??-1}let _t=-1;n.addEventListener("pointerdown",A=>{Y=A.clientX,X=A.clientY}),n.addEventListener("pointermove",A=>{et=A.clientX,ht=A.clientY}),n.addEventListener("pointerup",A=>{if(Math.hypot(A.clientX-Y,A.clientY-X)>5||!rt||V.over||_t<0)return;const q=gt(A.clientX,A.clientY);if(q<0)return;const $=V.select(q,_t);$==="extract"||$==="lockDone"||$==="won"?G[q]=performance.now()/1e3:$==="trip"&&(P.style.opacity="0.9",setTimeout(()=>P.style.opacity="0",60))});const D=new W,kt=new en,wt=new en,It=new en,it=new W;function Ot(){const A=V.result();let H="#8fd0b6",q="",$="";V.phase==="WON"?(H="#8fd0b6",q="◆ EXTRACTED",$=`keys: ${A.keys.join(" · ")}
margin ${A.margin.toFixed(0)} · ${A.trips} strike(s)`):V.phase==="LOST_CRIT"?(H="#d0605a",q="⚠ ALARM",$="intrusion traced — three tripwires"):(H="#e0b070",q="⌛ SIGNAL LOST",$="the run timed out"),N.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${H}">${q}</div><div style="font-size:12px;color:#9a9aa6;white-space:pre-line">${$}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,N.style.display="flex"}let St=performance.now(),T=0;function _(){const A=performance.now(),H=A/1e3,q=Math.min(.05,(A-St)/1e3);St=A,l.update();const $=a.position,dt=Qn([$.x-s.x,$.y-s.y,$.z-s.z]);let lt=0;_t=-1;let ft=180;C.forEach((mt,ut)=>{mt.coherence=vc(mt.signalPts,mt.glyph,dt),mt.coherence>lt&&(lt=mt.coherence,_t=ut);const Ut=Ws(dt,mt.axis);Ut<ft&&(ft=Ut)}),w.set(v),K.fill(0);let Dt=0;for(const mt of C){const ut=Mg(.12,.9,mt.coherence);if(ut>Dt&&(Dt=ut),!(ut<=.001))for(const Ut of mt.signalIdx){const Bt=mt.flat.get(Ut),Kt=v[Ut*3],O=v[Ut*3+1],vt=v[Ut*3+2];w[Ut*3]=Kt+(Bt[0]-Kt)*ut,w[Ut*3+1]=O+(Bt[1]-O)*ut,w[Ut*3+2]=vt+(Bt[2]-vt)*ut,K[Ut]=ut}}if(Dt>.001){const mt=.85*Dt;for(let ut=0;ut<K.length;ut++)nt[ut]||(K[ut]=-mt)}const ct=rt&&lt>.6,{wrapped:xt}=V.tick(q,ct,_t);if(xt&&V.drift&&_t>=0&&Q(_t),V.phase==="RUN"&&V.tSweep){const mt=-1+2*V.sweepT,ut=.14;for(let Ut=0;Ut<K.length;Ut++){const Bt=Math.abs(w[Ut*3+1]-mt);Bt<ut&&(K[Ut]=K[Ut]+(1-Bt/ut)*.7)}}for(let mt=0;mt<G.length;mt++){const ut=G[mt];if(ut>0){const Ut=1-(H-ut)/.3;Ut>0?K[mt]=K[mt]+Ut*.9:G[mt]=0}}if(rt&&!V.over&&et>=0){const mt=gt(et,ht),ut=n.getBoundingClientRect();mt>=0?(K[mt]=K[mt]+.5,it.set(w[mt*3],w[mt*3+1],w[mt*3+2]).project(a),R.style.left=`${ut.left+(it.x*.5+.5)*ut.width}px`,R.style.top=`${ut.top+(-it.y*.5+.5)*ut.height}px`,R.style.borderColor=E.points[mt]?.pop==="TRIP"?"#d0605a":"#6fe0b8"):(R.style.left=`${et}px`,R.style.top=`${ht}px`,R.style.borderColor="#44444c"),R.style.opacity="1"}else R.style.opacity="0";j.fill(0);for(const mt of V.extracted)for(const ut of mt)j[ut]=1;if(L.updatePositions(w),L.updateEmphasis(K),L.updatePicked(j),L.sync(a,l.target,e.getPixelRatio()),!rt&&ft<U&&!V.over?rt=!0:rt&&ft>U*1.6&&(rt=!1),rt&&_t>=0){const mt=a.position.distanceTo(s);D.set(dt[0],dt[1],dt[2]),wt.setFromUnitVectors(D,C[_t].axisV3),kt.copy(It).slerp(wt,.16),D.applyQuaternion(kt),a.position.copy(s).addScaledVector(D,mt)}if(rt&&!at&&(bt=H),at=rt,L.setFlash(Math.max(0,1-(H-bt)/o)),t.skill>=1){const mt=Math.round(lt*Cs);for(let ut=0;ut<Cs;ut++)g[ut].setAttribute("fill",ut<mt?rt?"#e8c06a":"#5dcaa5":"#2a2a34");rt&&_t>=0?(x.textContent=`⟡ ${C[_t].glyph.name}`,x.style.opacity="1"):x.style.opacity="0"}const Nt=Math.max(0,V.timeLeft/V.tRun);h.setAttribute("r",String(3+18*Nt)),h.setAttribute("stroke",gl(Nt)),M.forEach((mt,ut)=>mt.style.color=ut<V.trips?"#d0605a":"#3a3a44"),rt&&_t>=0&&!V.over?(y.textContent=`EXTRACT ${V.extractedCount(_t)} / ${E.locks[_t].signalCount}`,y.style.opacity="1"):y.style.opacity="0",V.over&&N.style.display==="none"&&Ot(),e.render(i,a),T=requestAnimationFrame(_)}return _(),{regenerate(A,H){I(A,H)},alignLock(A){const H=C[A];if(!H)return;const q=a.position.distanceTo(s);a.position.copy(s).addScaledVector(H.axisV3,q),l.update()},debugExtract(A,H){const q=C[A];if(!q)return;let $=0;for(const dt of q.signalIdx){if($++>=H)break;V.select(dt,A)}},debugSolve(){for(let A=0;A<C.length;A++)for(const H of C[A].signalIdx)V.select(H,A)},debugTime(A){V.phase="RUN",V.timeLeft=Math.max(0,A)*V.tRun},dispose(){cancelAnimationFrame(T),window.removeEventListener("resize",F),l.dispose(),L?.dispose(),[m,p,b,y,z,R,P,N].forEach(A=>A.remove()),e.dispose()}}}const bg=`
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
`,Ag=`
  precision mediump float;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float a = (1.0 - smoothstep(0.44, 0.5, d)) * vAlpha;
    if (a <= 0.0) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;class Qs{points;material;geo;pos;col;sz;al;cap;n=0;constructor(t,e={}){this.cap=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.sz=new Float32Array(t),this.al=new Float32Array(t),this.geo=new Ke,this.geo.setAttribute("position",new ae(this.pos,3)),this.geo.setAttribute("color",new ae(this.col,3)),this.geo.setAttribute("size",new ae(this.sz,1)),this.geo.setAttribute("alpha",new ae(this.al,1)),this.material=new _e({uniforms:{uPixelRatio:{value:1}},vertexShader:bg,fragmentShader:Ag,transparent:!0,depthTest:!1,depthWrite:!1,blending:e.additive?Hs:Yn}),this.points=new fc(this.geo,this.material),this.points.frustumCulled=!1}begin(){this.n=0}grow(){const t=this.cap*2,e=(i,s)=>{const r=new Float32Array(t*s);return r.set(i),r};this.pos=e(this.pos,3),this.col=e(this.col,3),this.sz=e(this.sz,1),this.al=e(this.al,1),this.cap=t,this.geo.setAttribute("position",new ae(this.pos,3)),this.geo.setAttribute("color",new ae(this.col,3)),this.geo.setAttribute("size",new ae(this.sz,1)),this.geo.setAttribute("alpha",new ae(this.al,1))}dot(t,e,i,s,r,o,a=1){this.n>=this.cap&&this.grow();const l=this.n++;this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=0,this.col[l*3]=i,this.col[l*3+1]=s,this.col[l*3+2]=r,this.sz[l]=o,this.al[l]=a}commit(t){this.material.uniforms.uPixelRatio.value=t,["position","color","size","alpha"].forEach(e=>{this.geo.getAttribute(e).needsUpdate=!0}),this.geo.setDrawRange(0,this.n)}dispose(){this.geo.dispose(),this.material.dispose()}}const ks=12,_l=7,xl=4,wg=16;function Rg(n){return n<=2?"naive":n<=5?"greedy":n<=7?"greedy+":"optimal-ish"}function Cg(n){const t=Rg(n.defender),e=t==="optimal-ish"?1:0;return{tMatch:wg,pPulses:xl+n.attacker+e,ePulses:xl+n.defender,traps:Math.min(6,1+Math.round(n.defender*.6)),repeats:n.defender>=6?2:n.defender>=3?1:0,ai:t}}const qi=[{attacker:5,defender:2},{attacker:5,defender:3},{attacker:4,defender:4},{attacker:4,defender:6},{attacker:3,defender:7},{attacker:2,defender:8},{attacker:2,defender:9}];function Wo(n){let t=0;for(const e of n.outcomes)e.kind==="CLAIM"?t+=1:e.kind==="REPEAT"?t+=2:e.kind==="INVERT"&&(t+=.5);return t}function Ge(n){return n.terminals.reduce((t,e)=>t+Wo(e),0)}function Fr(n){const t=new Set;for(const e of n.terminals)for(const i of e.outcomes)i.kind!=="DEAD"&&t.add(i.cell);return t}const Ci=(n,t)=>t==="left"?n.left:n.right;function vl(n,t,e,i,s,r,o){const a=new Array(ks).fill("NEUTRAL"),l=[];let c=0;const u=(g,x,p,h)=>{const b=x.filter(M=>M.t>=0&&M.t<=o).sort((M,y)=>M.t-y.t).slice(0,p);for(const M of b){const y=g.terminals[M.terminal];if(y)for(const z of y.outcomes){if(z.kind==="DEAD")continue;const R=M.t+z.delay;if(z.kind==="REPEAT"){const P=z.repeatPeriod??2;for(let N=R;N<=o;N+=P)l.push({time:N,seq:c++,cell:z.cell,kind:"CLAIM",owner:h})}else l.push({time:R,seq:c++,cell:z.cell,kind:z.kind,owner:h})}}};u(n,e,s,"P"),u(t,i,r,"E"),l.sort((g,x)=>g.time-x.time||g.seq-x.seq);for(const g of l)if(g.kind==="CLAIM")a[g.cell]=g.owner;else if(g.kind==="INVERT"){const x=a[g.cell];a[g.cell]=x==="NEUTRAL"?g.owner:x==="P"?"E":"P"}let d=0,f=0,m=0;for(const g of a)g==="P"?d++:g==="E"?f++:m++;return{p:d,e:f,neutral:m,owners:a}}const Ml=n=>n.outcomes.filter(t=>t.kind!=="DEAD").map(t=>t.cell),Pg=n=>Math.max(0,...n.outcomes.map(t=>t.delay));function Mc(n,t){const e=[],i=new Set;for(;e.length<t;){let s=-1,r=-1;if(n.terminals.forEach((o,a)=>{if(e.includes(a))return;const l=Ml(o).filter(c=>!i.has(c)).length+Wo(o)*.01;l>r&&(r=l,s=a)}),s<0)break;e.push(s);for(const o of Ml(n.terminals[s]))i.add(o)}return e}function Dg(n,t,e){return Mc(n,t).map(i=>({t:Math.max(0,e-Pg(n.terminals[i])-.05),terminal:i}))}function Lg(n,t,e){return Mc(n,t).map((i,s)=>({t:s*.03,terminal:i}))}function Sc(n,t,e,i,s){const r=t.terminals.map((u,d)=>({i:d,v:Wo(u),repeat:u.outcomes.some(f=>f.kind==="REPEAT")})).filter(u=>u.v>0);if(r.sort((u,d)=>d.v-u.v),r.length===0)return[];if(n==="naive"){const u=r.slice().sort(()=>s()-.5).slice(0,e);return u.map((d,f)=>({t:(f+.5)/Math.max(1,u.length)*i*.9,terminal:d.i}))}if(n==="greedy"){const u=r.slice(0,e);return u.map((d,f)=>({t:f/Math.max(1,u.length)*i*.7,terminal:d.i}))}const o=n==="optimal-ish"?r.slice().sort((u,d)=>Number(d.repeat)-Number(u.repeat)||d.v-u.v):r,a=Math.min(2,e),l=o.slice(0,Math.max(0,e-a)),c=l.map((u,d)=>({t:d/Math.max(1,l.length)*i*.6,terminal:u.i}));for(let u=0;u<a;u++)c.push({t:i*(.85+.03*u),terminal:o[u%o.length].i});return c}const Fe={splitChance:.35,reachMin:9,valueMin:8,ratioLo:.75,ratioHi:.95,maxBoardAttempts:60};function Ug(n,t){const e=t.slice();for(let i=e.length-1;i>0;i--){const s=Math.floor(n()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}const Hi=n=>Go(n,.6,1.4);function Sl(n,t){const e=Ug(n,Array.from({length:12},(r,o)=>o)),i=[];for(let r=0;r<8;r++){const o=[{cell:e[r],delay:Hi(n),kind:"CLAIM"}];i.push({id:r,outcomes:o})}i[0].outcomes.push({cell:e[8],delay:Hi(n),kind:"CLAIM"}),i[1].outcomes.push({cell:e[9],delay:Hi(n),kind:"CLAIM"});for(let r=2;r<8;r++)if(n()<Fe.splitChance){const o=e[(r+5)%12];i[r].outcomes.some(a=>a.cell===o)||i[r].outcomes.push({cell:o,delay:Hi(n),kind:"CLAIM"})}for(let r=0;r<t.repeats;r++){const a=i[r%4].outcomes.find(l=>l.kind==="CLAIM");a&&(a.kind="REPEAT",a.repeatPeriod=Go(n,1.8,2.6))}let s=t.traps;for(const r of[7,6,5])for(let o=0;o<2&&s>0;o++){const a=n()<.5?"DEAD":"INVERT";i[r].outcomes.push({cell:e[(r+o+3)%12],delay:Hi(n),kind:a}),s--}return{terminals:i}}const Ig=n=>n.terminals.find(t=>t.outcomes.some(e=>e.kind==="CLAIM")),Ng=n=>{for(const t of n.terminals)for(const e of t.outcomes)if(e.kind==="DEAD")return e};function Fg(n,t){for(let e=0;e<30;e++){const i=Ge(t)/Ge(n);if(i>Fe.ratioHi){const r=Ig(t)?.outcomes.find(o=>o.kind==="CLAIM");if(r)r.kind="DEAD";else break}else if(i<Fe.ratioLo){const s=Ng(t);if(s)s.kind="CLAIM";else break}else return}}function Og(n,t){const e=Cg(n),i=Zn(`${t}:transfer:${n.attacker}:${n.defender}`),s=n.defender>=3;for(let r=1;r<=Fe.maxBoardAttempts;r++){const o=Sl(i,e),a=Sl(i,e);if(Fr(o).size<Fe.reachMin||Fr(a).size<Fe.reachMin||Ge(o)<Fe.valueMin||Ge(a)<Fe.valueMin)continue;const l=Ge(o)>=Ge(a)?o:a,c=l===o?a:o;if(Fg(l,c),Ge(c)<Fe.valueMin||Fr(c).size<Fe.reachMin)continue;const u=Ge(c)/Ge(l);if(u<Fe.ratioLo||u>Fe.ratioHi)continue;const d=Zn(`${t}:ai:${n.defender}:${r}`),f=Sc(e.ai,c,e.ePulses,e.tMatch,d);if(vl(l,c,Dg(l,e.pPulses,e.tMatch),f,e.pPulses,e.ePulses,e.tMatch).p<_l||s&&vl(l,c,Lg(l,e.pPulses,e.tMatch),f,e.pPulses,e.ePulses,e.tMatch).p>=_l)continue;const g=o,x=a;return{seed:t,spec:n,params:e,left:g,right:x,better:l===g?"left":"right",genStats:{boardAttempts:r,qLeft:Ge(g),qRight:Ge(x)}}}return null}function tr(n,t){for(let e=n.defender;e>=1;e--){const i=Og({attacker:n.attacker,defender:e},t);if(i)return i}throw new Error(`transfer generateBoard: no valid board even at defender 1 (seed=${t}, attacker=${n.attacker})`)}class er{board;playerSide=null;owners=new Array(ks).fill("NEUTRAL");pBudget;eBudget;timeLeft;matchElapsed=0;pulses=[];claimFlash=new Float32Array(ks);phase="PLAN";result=null;guns=[];eSchedule=[];eFired=[];aiRng;constructor(t){this.board=t,this.pBudget=t.params.pPulses,this.eBudget=t.params.ePulses,this.timeLeft=t.params.tMatch,this.aiRng=Zn(`${t.seed}:liveai:${t.spec.defender}`)}enemySide(){return this.playerSide==="left"?"right":this.playerSide==="right"?"left":null}chooseSide(t){if(this.phase!=="PLAN")return;this.playerSide=t;const e=t==="left"?"right":"left";this.eSchedule=Sc(this.board.params.ai,Ci(this.board,e),this.eBudget,this.board.params.tMatch,this.aiRng).slice().sort((i,s)=>i.t-s.t),this.eFired=this.eSchedule.map(()=>!1),this.phase="RUN"}firePlayer(t){return this.phase!=="RUN"||!this.playerSide||this.pBudget<=0||this.timeLeft<=0?!1:(this.spawn(this.playerSide,"P",t),this.pBudget--,!0)}spawn(t,e,i){const s=Ci(this.board,t).terminals[i];if(s)for(const r of s.outcomes)this.pulses.push({side:t,owner:e,terminalId:i,cell:r.cell,kind:r.kind,delay:r.delay,elapsed:0,repeatPeriod:r.repeatPeriod??2})}resolve(t){if(t.kind!=="DEAD"){if(t.kind==="CLAIM")this.owners[t.cell]=t.owner;else if(t.kind==="INVERT"){const e=this.owners[t.cell];this.owners[t.cell]=e==="NEUTRAL"?t.owner:e==="P"?"E":"P"}else t.kind==="REPEAT"&&(this.owners[t.cell]=t.owner,this.guns.push({cell:t.cell,period:t.repeatPeriod,nextAt:this.matchElapsed+t.repeatPeriod,owner:t.owner}));this.claimFlash[t.cell]=.35}}tick(t){if(this.phase!=="RUN")return;this.matchElapsed+=t,this.timeLeft=Math.max(0,this.board.params.tMatch-this.matchElapsed);const e=this.enemySide();if(e)for(let s=0;s<this.eSchedule.length;s++)!this.eFired[s]&&this.eSchedule[s].t<=this.matchElapsed&&this.eBudget>0&&this.timeLeft>0&&(this.eFired[s]=!0,this.spawn(e,"E",this.eSchedule[s].terminal),this.eBudget--);const i=[];for(const s of this.pulses)s.elapsed+=t,s.elapsed>=s.delay?this.resolve(s):i.push(s);this.pulses=i;for(const s of this.guns)for(;this.matchElapsed>=s.nextAt&&s.nextAt<=this.board.params.tMatch;)this.owners[s.cell]=s.owner,this.claimFlash[s.cell]=.35,s.nextAt+=s.period;for(let s=0;s<ks;s++)this.claimFlash[s]>0&&(this.claimFlash[s]=Math.max(0,this.claimFlash[s]-t));this.timeLeft<=0&&this.pulses.length===0&&this.finish()}finish(){let t=0,e=0;for(const i of this.owners)i==="P"?t++:i==="E"&&e++;this.result={p:t,e},this.phase=t>e?"WON":"LOST"}counts(){let t=0,e=0,i=0;for(const s of this.owners)s==="P"?t++:s==="E"?e++:i++;return{p:t,e,n:i}}}let nr=1;const ir=n=>{nr=n},Pi=()=>nr,sr=n=>Math.max(1,Math.min(3.2,.72*n/.82)),jn=n=>[0,(.86-n*(1.72/11))*nr],Ye=(n,t)=>[n==="left"?-1.32:1.32,(.82-t*(1.64/7))*nr],Se={neutral:[.3,.3,.36],p:[.36,.79,.65],e:[.82,.88,1],pDim:[.14,.26,.22],eDim:[.19,.21,.27],gray:[.16,.16,.2],pBright:[.62,1,.86],eBright:[1.05,1.08,1.16]},yl=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],Bg=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],kg=n=>n%2===0?1:.76,El=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,o,a)=>`rgb(${Math.round(r[0]+(o[0]-r[0])*a)},${Math.round(r[1]+(o[1]-r[1])*a)},${Math.round(r[2]+(o[2]-r[2])*a)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))};function zg(n,t){const e=new Qi({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(526349,1);const i=new ts,s=1.46,r=1.04,o=new ei(-1,1,1,-1,.01,100);o.position.set(0,0,4),o.lookAt(0,0,0);const a=new Qs(2e3);i.add(a.points);const l="http://www.w3.org/2000/svg",c="ui-monospace,SFMono-Regular,Menlo,monospace",u=G=>{const L=document.createElement("div");return L.style.cssText=G,document.body.appendChild(L),L},d=document.createElementNS(l,"svg");d.setAttribute("viewBox","0 0 48 48"),d.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const f=document.createElementNS(l,"circle");f.setAttribute("cx","24"),f.setAttribute("cy","24"),f.setAttribute("r","21"),f.setAttribute("fill","none"),f.setAttribute("stroke",El(1)),f.setAttribute("stroke-width","1.6"),d.appendChild(f),document.body.appendChild(d);const m=u(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${c};color:#9a9aa6;pointer-events:none;text-align:center`),g=u(`position:fixed;left:12px;bottom:12px;font:11px ${c};color:#55555f;pointer-events:none`),x=u(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${c};text-align:center;pointer-events:none`);let p,h,b=-1,M=null;function y(G,L){p=tr(G,L),h=new er(p),x.style.display="none",b=-1}y(t.spec,t.seed);function z(){const G=window.innerWidth,L=window.innerHeight;e.setSize(G,L);const C=G/L,U=Math.max(r,s/C);o.top=U,o.bottom=-U,o.right=U*C,o.left=-U*C,o.updateProjectionMatrix(),ir(sr(U))}window.addEventListener("resize",z),z();const R=(G,L)=>{const C=n.getBoundingClientRect(),U=(G-C.left)/C.width*2-1,V=-((L-C.top)/C.height)*2+1;return[U*o.right,V*o.top]},P=(G,L,C)=>{let U=-1,V=.2;for(let st=0;st<8;st++){const[rt,at]=Ye(G,st),bt=Math.hypot(L-rt,C-at);bt<V&&(V=bt,U=st)}return U};n.addEventListener("pointermove",G=>{M=R(G.clientX,G.clientY)}),n.addEventListener("pointerup",G=>{const[L,C]=R(G.clientX,G.clientY);if(h.phase==="PLAN")h.chooseSide(L<0?"left":"right");else if(h.phase==="RUN"&&h.playerSide){const U=P(h.playerSide,L,C);U>=0&&h.firePlayer(U)}});const N=(G,L,C,U,V=1)=>{for(let rt=-1;rt<=1;rt++)for(let at=-1;at<=1;at++)a.dot(G+rt*.026,L+at*.026,C[0],C[1],C[2],U,V)},E=(G,L,C,U)=>{a.dot(G,L,C[0],C[1],C[2],U);const V=.03;for(const[st,rt]of[[1,0],[-1,0],[0,1],[0,-1]])a.dot(G+st*V,L+rt*V,C[0],C[1],C[2],U*.8)},v=(G,L,C)=>{const U=Math.hypot(L[0]-G[0],L[1]-G[1]),V=Math.max(3,Math.round(U/.05));for(let st=1;st<V;st++){const rt=st/V;a.dot(G[0]+(L[0]-G[0])*rt,G[1]+(L[1]-G[1])*rt,C[0],C[1],C[2],2.6,.85)}};function w(){const G=h.counts(),L=h.phase==="WON";x.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${L?"#8fd0b6":"#d0605a"}">${L?"◆ CIRCUIT TAKEN":"✕ REPELLED"}</div><div style="font-size:12px;color:#9a9aa6">you ${G.p} · host ${G.e} · neutral ${G.n}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,x.style.display="flex"}let K=performance.now(),j=0;function nt(){const G=performance.now(),L=Math.min(.05,(G-K)/1e3);K=G,h.tick(L),b=-1;const C=h.phase==="RUN"?h.playerSide:M?M[0]<0?"left":"right":null;M&&C&&(b=P(C,M[0],M[1])),a.begin();const U=.5+.5*Math.sin(G/220);for(const at of["left","right"]){const bt=h.playerSide?at===h.playerSide?"P":"E":"N",I=bt==="P"?Se.pDim:bt==="E"?Se.eDim:Se.gray;Ci(p,at).terminals.forEach((Q,Y)=>{const X=Bg(I,kg(Y));for(const et of Q.outcomes)v(Ye(at,Y),jn(et.cell),X)})}for(let at=0;at<12;at++){const[bt,I]=jn(at),F=h.owners[at],Q=F==="P"?Se.p:F==="E"?Se.e:Se.neutral,Y=h.claimFlash[at]/.35;N(bt,I,yl(Q,[1,1,1],Y*.8),F==="NEUTRAL"?4.5:5.5)}for(const at of["left","right"]){const bt=h.playerSide?at===h.playerSide?"P":"E":"N",I=bt==="P"?Se.p:bt==="E"?Se.e:Se.neutral,F=h.phase==="RUN"&&at===h.playerSide||h.phase==="PLAN";for(let Q=0;Q<8;Q++){const[Y,X]=Ye(at,Q),et=F&&C===at&&b===Q,ht=h.phase==="PLAN"?.4+.6*U:1,At=et?yl(I,[1,1,1],.5):I;E(Y,X,[At[0]*ht,At[1]*ht,At[2]*ht],et?7:5.5)}}for(const at of h.pulses){const bt=Ye(at.side,at.terminalId),I=jn(at.cell),F=Math.min(1,at.elapsed/at.delay),Q=at.kind==="DEAD"?Se.gray:at.owner==="P"?Se.pBright:Se.eBright;for(let Y=0;Y<3;Y++){const X=Math.max(0,F-Y*.06);a.dot(bt[0]+(I[0]-bt[0])*X,bt[1]+(I[1]-bt[1])*X,Q[0],Q[1],Q[2],8-Y*2,1-Y*.3)}}const V=.99*Pi();for(let at=0;at<h.pBudget;at++)a.dot(-.24+at*.05,-V,Se.p[0],Se.p[1],Se.p[2],5);a.commit(e.getPixelRatio()),e.render(i,o);const st=Math.max(0,h.timeLeft/p.params.tMatch);f.setAttribute("r",String(3+18*st)),f.setAttribute("stroke",El(st));const rt=h.counts();g.textContent=`you c${p.spec.attacker} vs host c${p.spec.defender} · ${rt.p}–${rt.e} · lead wins`,h.phase==="PLAN"?(m.textContent="CHOOSE A SIDE — click the left or right layer to take it",m.style.opacity="1"):h.phase==="RUN"?(m.textContent="click your terminals to fire · later pulse wins the cell",m.style.opacity="0.7"):m.style.opacity="0",(h.phase==="WON"||h.phase==="LOST")&&x.style.display==="none"&&w(),j=requestAnimationFrame(nt)}return nt(),{regenerate:(G,L)=>y(G,L),chooseSide:G=>h.chooseSide(G),fire:G=>h.firePlayer(G),game:()=>h,dispose(){cancelAnimationFrame(j),window.removeEventListener("resize",z),a.dispose(),[d,m,g,x].forEach(G=>G.remove()),e.dispose()}}}const yc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ui{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hg=new ei(-1,1,1,-1,0,1);class Vg extends Ke{constructor(){super(),this.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _n([0,2,0,0,2,0],2))}}const Gg=new Vg;class Xo{constructor(t){this._mesh=new tn(Gg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Hg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Wg extends Ui{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Yi.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Xo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Tl extends Ui{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Xg extends Ui{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class $o{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Ft);this._width=i.width,this._height=i.height,e=new je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wg(yc),this.copyPass.material.blending=pn,this.clock=new Bm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Tl!==void 0&&(o instanceof Tl?i=!0:o instanceof Xg&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yo extends Ui{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const $g={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ln extends Ui{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Ft(t.x,t.y):new Ft(256,256),this.clearColor=new Xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new je(r,o,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new je(r,o,{type:mn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new je(r,o,{type:mn});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=$g;this.highPassUniforms=Yi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ft(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=yc;this.copyUniforms=Yi.clone(u.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Hs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xt,this.oldClearAlpha=1,this.basic=new zo,this.fsQuad=new Xo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ft(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ln.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ln.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ft(.5,.5)},direction:{value:new Ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ln.BlurDirectionX=new Ft(1,0);Ln.BlurDirectionY=new Ft(0,1);const Yg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class qo extends Ui{constructor(){super();const t=Yg;this.uniforms=Yi.clone(t.uniforms),this.material=new Om({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Xo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function jo(n,t,e,i=.028){const[s,r]=Ye(n,t),o=s*(.72-t*.045),[,a]=jn(e),l=s>0?.16:-.16,c=[[s,r],[o,r],[o,a],[l,a],[0,a]];let u=0;const d=[];for(let g=1;g<c.length;g++){const x=Math.hypot(c[g][0]-c[g-1][0],c[g][1]-c[g-1][1]);d.push(x),u+=x}const f=[];let m=0;for(let g=1;g<c.length;g++){const[x,p]=c[g-1],[h,b]=c[g],M=d[g-1],y=Math.max(1,Math.round(M/i));for(let z=0;z<y;z++){const R=z/y;f.push({x:x+(h-x)*R,y:p+(b-p)*R,u:u>0?(m+R*M)/u:0})}m+=M}return f.push({x:c[c.length-1][0],y:c[c.length-1][1],u:1}),f}const oe={cellN:[.22,.22,.28],cellP:[.3,.85,.62],cellE:[.82,.88,1],dimP:[.09,.2,.16],dimE:[.19,.21,.27],dimN:[.12,.12,.16],litP:[.5,1.1,.85],litE:[1.05,1.08,1.16],litD:[.4,.4,.42],white:[1,1,1]},Ps=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],qg=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],jg=n=>n%2===0?1:.76,bl=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,o,a)=>`rgb(${Math.round(r[0]+(o[0]-r[0])*a)},${Math.round(r[1]+(o[1]-r[1])*a)},${Math.round(r[2]+(o[2]-r[2])*a)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))};function Kg(n,t){const e=new Qi({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(329226,1);const i=new ts,s=1.46,r=1.04,o=new ei(-1,1,1,-1,.01,100);o.position.set(0,0,4),o.lookAt(0,0,0);const a=new Qs(3e3,{additive:!0});i.add(a.points);const l=new $o(e);l.addPass(new Yo(i,o));const c=new Ln(new Ft(1,1),.9,.55,.18);l.addPass(c),l.addPass(new qo);const u="http://www.w3.org/2000/svg",d="ui-monospace,SFMono-Regular,Menlo,monospace",f=C=>{const U=document.createElement("div");return U.style.cssText=C,document.body.appendChild(U),U},m=document.createElementNS(u,"svg");m.setAttribute("viewBox","0 0 48 48"),m.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const g=document.createElementNS(u,"circle");g.setAttribute("cx","24"),g.setAttribute("cy","24"),g.setAttribute("r","21"),g.setAttribute("fill","none"),g.setAttribute("stroke",bl(1)),g.setAttribute("stroke-width","1.6"),m.appendChild(g),document.body.appendChild(m);const x=f(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${d};color:#9a9aa6;pointer-events:none;text-align:center`),p=f(`position:fixed;left:12px;bottom:12px;font:11px ${d};color:#55555f;pointer-events:none`),h=f(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${d};text-align:center;pointer-events:none`);let b,M,y=[],z=new Map,R=null;function P(){y=[],z=new Map;for(const C of["left","right"])Ci(b,C).terminals.forEach((U,V)=>{for(const st of U.outcomes){const rt=jo(C,V,st.cell);y.push({side:C,term:V,cell:st.cell,dots:rt}),z.set(`${C}:${V}:${st.cell}`,rt)}})}function N(C,U){b=tr(C,U),M=new er(b),P(),h.style.display="none"}N(t.spec,t.seed);function E(){const C=window.innerWidth,U=window.innerHeight;e.setSize(C,U),l.setSize(C,U);const V=C/U,st=Math.max(r,s/V);o.top=st,o.bottom=-st,o.right=st*V,o.left=-st*V,o.updateProjectionMatrix(),ir(sr(st)),P()}window.addEventListener("resize",E),E();const v=(C,U)=>{const V=n.getBoundingClientRect(),st=(C-V.left)/V.width*2-1,rt=-((U-V.top)/V.height)*2+1;return[st*o.right,rt*o.top]},w=(C,U,V)=>{let st=-1,rt=.2;for(let at=0;at<8;at++){const[bt,I]=Ye(C,at),F=Math.hypot(U-bt,V-I);F<rt&&(rt=F,st=at)}return st};n.addEventListener("pointermove",C=>R=v(C.clientX,C.clientY)),n.addEventListener("pointerup",C=>{const[U,V]=v(C.clientX,C.clientY);if(M.phase==="PLAN")M.chooseSide(U<0?"left":"right");else if(M.phase==="RUN"&&M.playerSide){const st=w(M.playerSide,U,V);st>=0&&M.firePlayer(st)}});const K=(C,U,V,st)=>{for(let at=-1;at<=1;at++)for(let bt=-1;bt<=1;bt++)a.dot(C+at*.026,U+bt*.026,V[0],V[1],V[2],st)};function j(){const C=M.counts(),U=M.phase==="WON";h.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${U?"#8fd0b6":"#d0605a"}">${U?"◆ CIRCUIT TAKEN":"✕ REPELLED"}</div><div style="font-size:12px;color:#9a9aa6">you ${C.p} · host ${C.e} · neutral ${C.n}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,h.style.display="flex"}let nt=performance.now(),G=0;function L(){const C=performance.now(),U=Math.min(.05,(C-nt)/1e3);nt=C,M.tick(U);const V=new Map;for(const F of M.pulses){const Q=`${F.side}:${F.terminalId}:${F.cell}`,Y=V.get(Q)??[];Y.push({p:F.elapsed/F.delay,owner:F.owner,kind:F.kind}),V.set(Q,Y)}let st=-1;const rt=M.phase==="RUN"?M.playerSide:R?R[0]<0?"left":"right":null;R&&rt&&(st=w(rt,R[0],R[1])),a.begin();for(const F of y){const Q=M.playerSide?F.side===M.playerSide?"P":"E":"N",Y=qg(Q==="P"?oe.dimP:Q==="E"?oe.dimE:oe.dimN,jg(F.term)),X=V.get(`${F.side}:${F.term}:${F.cell}`);for(const et of F.dots){let ht=0,At=oe.white;if(X)for(const _t of X){const D=et.u<=_t.p?Math.exp(-(_t.p-et.u)/.13):Math.exp(-(et.u-_t.p)/.025);D>ht&&(ht=D,At=_t.kind==="DEAD"?oe.litD:_t.owner==="P"?oe.litP:oe.litE)}const gt=Ps(Y,At,ht);a.dot(et.x,et.y,gt[0],gt[1],gt[2],2.3+ht*4.2,.9)}}for(const F of M.pulses){const Q=z.get(`${F.side}:${F.terminalId}:${F.cell}`);if(!Q)continue;const Y=Math.min(1,F.elapsed/F.delay);let X=0,et=9;for(let gt=0;gt<Q.length;gt++){const _t=Math.abs(Q[gt].u-Y);_t<et&&(et=_t,X=gt)}const ht=Q[X],At=F.kind==="DEAD"?oe.litD:Ps(F.owner==="P"?oe.litP:oe.litE,oe.white,.4);a.dot(ht.x,ht.y,At[0],At[1],At[2],9)}for(let F=0;F<12;F++){const[Q,Y]=jn(F),X=M.owners[F],et=X==="P"?oe.cellP:X==="E"?oe.cellE:oe.cellN,ht=M.claimFlash[F]/.35;K(Q,Y,Ps(et,oe.white,ht*.7),X==="NEUTRAL"?4.5:5.5)}for(const F of["left","right"]){const Q=M.playerSide?F===M.playerSide?"P":"E":"N",Y=Q==="P"?oe.cellP:Q==="E"?oe.cellE:oe.cellN,X=M.phase==="PLAN"?.5+.5*Math.sin(C/220):1;for(let et=0;et<8;et++){const[ht,At]=Ye(F,et),gt=rt===F&&st===et&&(M.phase==="PLAN"||F===M.playerSide),_t=gt?Ps(Y,oe.white,.5):Y,D=gt?1.3:X;a.dot(ht,At,_t[0]*D,_t[1]*D,_t[2]*D,gt?8:6);for(const[kt,wt]of[[1,0],[-1,0],[0,1],[0,-1]])a.dot(ht+kt*.03,At+wt*.03,_t[0]*D*.7,_t[1]*D*.7,_t[2]*D*.7,4)}}const at=.99*Pi();for(let F=0;F<M.pBudget;F++)a.dot(-.24+F*.05,-at,oe.cellP[0],oe.cellP[1],oe.cellP[2],5);a.commit(e.getPixelRatio()),l.render();const bt=Math.max(0,M.timeLeft/b.params.tMatch);g.setAttribute("r",String(3+18*bt)),g.setAttribute("stroke",bl(bt));const I=M.counts();p.textContent=`you c${b.spec.attacker} vs host c${b.spec.defender} · ${I.p}–${I.e} · lead wins`,M.phase==="PLAN"?(x.textContent="CHOOSE A SIDE — click the left or right circuit to take it",x.style.opacity="1"):M.phase==="RUN"?(x.textContent="click your terminals — light claims the cell it reaches · later pulse wins",x.style.opacity="0.7"):x.style.opacity="0",(M.phase==="WON"||M.phase==="LOST")&&h.style.display==="none"&&j(),G=requestAnimationFrame(L)}return L(),{regenerate:(C,U)=>N(C,U),chooseSide:C=>M.chooseSide(C),fire:C=>M.firePlayer(C),game:()=>M,dispose(){cancelAnimationFrame(G),window.removeEventListener("resize",E),a.dispose(),l.dispose(),[m,x,p,h].forEach(C=>C.remove()),e.dispose()}}}const Or=(n,t)=>{const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},Zg=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t)),Al=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Jg=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Ec=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Tc=n=>{const t=Math.hypot(n[0],n[1],n[2])||1e-6;return[n[0]/t,n[1]/t,n[2]/t]};function Qg(n,t){return t.map(e=>{let i=Tc(Jg(Al(n[e[1]],n[e[0]]),Al(n[e[2]],n[e[0]]))),s=Ec(i,n[e[0]]);return s<0&&(i=[-i[0],-i[1],-i[2]],s=-s),{n:i,d:s}})}const t_=n=>t=>{const e=Tc(t);let i=1/0;for(const s of n){const r=Ec(e,s.n);if(r>1e-6){const o=s.d/r;o<i&&(i=o)}}return[e[0]*i,e[1]*i,e[2]*i]};function e_(n,t,e){const i=[],s=n[t[0]];for(let r=1;r<t.length-1;r++){const o=n[t[r]],a=n[t[r+1]];for(let l=0;l<=e;l++)for(let c=0;c<=e-l;c++){const u=l/e,d=c/e,f=1-u-d;i.push([s[0]*f+o[0]*u+a[0]*d,s[1]*f+o[1]*u+a[1]*d,s[2]*f+o[2]*u+a[2]*d])}}return i}function n_(n){const t=[],e=[];for(let i=0;i<n;i++)e.push(-1+2*i/(n-1));for(const i of[-1,1])for(const s of e)for(const r of e)t.push([i,s,r]),t.push([s,i,r]),t.push([s,r,i]);return t}const i_=n=>{const t=Math.max(Math.abs(n[0]),Math.abs(n[1]),Math.abs(n[2]))||1e-6;return[n[0]/t,n[1]/t,n[2]/t]},bc=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Ac=[[0,2,4],[0,2,5],[0,3,4],[0,3,5],[1,2,4],[1,2,5],[1,3,4],[1,3,5]],s_=t_(Qg(bc,Ac)),r_=n_(4),o_=Ac.flatMap(n=>e_(bc,n,4));function a_(n,t,e,i){const s=2*t*e+i,r=n%s,o=new Array(t).fill(0);let a=-1;if(r<2*t*e){const l=Math.floor(r/e),c=(r-l*e)/e,u=1-(1-Math.min(1,c/.7))**3;if(l<t){for(let d=0;d<l;d++)o[d]=1;o[l]=u,a=l}else{const d=2*t-1-l;for(let f=0;f<d;f++)o[f]=1;o[d]=1-u,a=d}}return{amount:o,active:a}}function l_(n){const t=[-1,-.3333333333333333,.3333333333333333],e=[];for(let i=0;i<n;i++){const s=Math.min(2,Math.floor(Or(i,2.3)*3)),r=t[Math.min(2,Math.floor(Or(i,5.9)*3))],o=Or(i,7.7)<.5?1:-1;e.push({axis:s,lo:r,hi:r+2/3+1e-4,ang:o*Math.PI/2})}return e}const wl=l_(12);function c_(n,t){let[e,i,s]=n,r=!1;for(let o=0;o<wl.length;o++){if(t.amount[o]<=0)continue;const a=wl[o],l=a.axis===0?e:a.axis===1?i:s;if(l<a.lo||l>=a.hi)continue;o===t.active&&(r=!0);const c=a.ang*t.amount[o],u=Math.cos(c),d=Math.sin(c);if(a.axis===0){const f=i*u-s*d;s=i*d+s*u,i=f}else if(a.axis===1){const f=e*u+s*d;s=-e*d+s*u,e=f}else{const f=e*u-i*d;i=e*d+i*u,e=f}}return[e,i,s,r]}const wc=(n,t)=>{const e=Math.sin(t),i=Math.cos(t),s=Math.sin(n),r=Math.cos(n);return(o,a,l)=>{const c=o*r+l*s,u=-o*s+l*r,d=a*i-u*e,f=a*e+u*i;return[c,d,f]}},Rc=n=>n==="cube"?1:1.7,h_=n=>n==="cube"?i_:s_;function Cc(n,t){const e=h_(n),i=Rc(n),s=.5,r=t*s,o=wc(r,.4+.06*Math.sin(t*.35)),a=t*(s+(1.7-s)*4.08),l=10,c=18,u=[];for(let d=0;d<=l;d++){const f=-Math.PI/2+d/l*Math.PI,m=Math.cos(f),g=Math.sin(f),x=Math.max(1,Math.round(Math.abs(m)*c));for(let p=0;p<x;p++){const h=p/x*2*Math.PI,b=e([m*Math.cos(h),g,m*Math.sin(h)]),[M,y,z]=o(b[0],b[1],b[2]),R=Zg(h+r,a),P=Math.exp(-(R*R)/.18)*Math.max(0,z);u.push({x:M*i,y:y*i,depth:(z+1)/2,scan:Math.min(1,P)})}}return u}function Pc(n,t){const e=n==="cube"?r_:o_,i=Rc(n),s=wc(t*.5,.5+.1*Math.sin(t*.9)),r=a_(t,12,.42,1.2),o=[];for(const a of e){const[l,c,u,d]=c_(a,r),[f,m,g]=s(l,c,u);o.push({x:f*i,y:m*i,depth:(g+1)/2,scan:d?1:0})}return o}const se={cellN:[.2,.2,.26],p:[.34,.9,.66],e:[.82,.88,1],dimP:[.09,.2,.16],dimE:[.19,.21,.27],dimN:[.12,.12,.16],litP:[.5,1.1,.85],litE:[1.05,1.08,1.16],litD:[.4,.4,.42],white:[1,1,1]},Ds=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],u_=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],d_=n=>n%2===0?1:.76,Rl=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,o,a)=>`rgb(${Math.round(r[0]+(o[0]-r[0])*a)},${Math.round(r[1]+(o[1]-r[1])*a)},${Math.round(r[2]+(o[2]-r[2])*a)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))};function f_(n,t){const e=new Qi({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(329226,1);const i=new ts,s=1.46,r=1.04,o=new ei(-1,1,1,-1,.01,100);o.position.set(0,0,4),o.lookAt(0,0,0);const a=new Qs(6e3,{additive:!0});i.add(a.points);const l=new $o(e);l.addPass(new Yo(i,o)),l.addPass(new Ln(new Ft(1,1),.6,.5,.25)),l.addPass(new qo);const c="http://www.w3.org/2000/svg",u="ui-monospace,SFMono-Regular,Menlo,monospace",d=L=>{const C=document.createElement("div");return C.style.cssText=L,document.body.appendChild(C),C},f=document.createElementNS(c,"svg");f.setAttribute("viewBox","0 0 48 48"),f.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const m=document.createElementNS(c,"circle");m.setAttribute("cx","24"),m.setAttribute("cy","24"),m.setAttribute("r","21"),m.setAttribute("fill","none"),m.setAttribute("stroke",Rl(1)),m.setAttribute("stroke-width","1.6"),f.appendChild(m),document.body.appendChild(f);const g=d(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${u};color:#9a9aa6;pointer-events:none;text-align:center`),x=d(`position:fixed;left:12px;bottom:12px;font:11px ${u};color:#55555f;pointer-events:none`),p=d(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${u};text-align:center;pointer-events:none`);let h,b,M=[],y=new Map,z=null;function R(){M=[],y=new Map;for(const L of["left","right"])Ci(h,L).terminals.forEach((C,U)=>{for(const V of C.outcomes){const st=jo(L,U,V.cell);M.push({side:L,term:U,cell:V.cell,dots:st}),y.set(`${L}:${U}:${V.cell}`,st)}})}function P(L,C){h=tr(L,C),b=new er(h),R(),p.style.display="none"}P(t.spec,t.seed);function N(){const L=window.innerWidth,C=window.innerHeight;e.setSize(L,C),l.setSize(L,C);const U=L/C,V=Math.max(r,s/U);o.top=V,o.bottom=-V,o.right=V*U,o.left=-V*U,o.updateProjectionMatrix(),ir(sr(V)),R()}window.addEventListener("resize",N),N();const E=(L,C)=>{const U=n.getBoundingClientRect();return[((L-U.left)/U.width*2-1)*o.right,(-((C-U.top)/U.height)*2+1)*o.top]},v=(L,C,U)=>{let V=-1,st=.2;for(let rt=0;rt<8;rt++){const[at,bt]=Ye(L,rt),I=Math.hypot(C-at,U-bt);I<st&&(st=I,V=rt)}return V};n.addEventListener("pointermove",L=>z=E(L.clientX,L.clientY)),n.addEventListener("pointerup",L=>{const[C,U]=E(L.clientX,L.clientY);if(b.phase==="PLAN")b.chooseSide(C<0?"left":"right");else if(b.phase==="RUN"&&b.playerSide){const V=v(b.playerSide,C,U);V>=0&&b.firePlayer(V)}});const w=(L,C,U,V,st,rt)=>{for(const at of L){const bt=(.3+.7*at.depth+at.scan*.7)*rt;a.dot(C+at.x*V,U+at.y*V,st[0]*bt,st[1]*bt,st[2]*bt,1.5+2.4*at.depth+at.scan*3,.95)}};function K(){const L=b.counts(),C=b.phase==="WON";p.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${C?"#8fd0b6":"#d0605a"}">${C?"◆ RESOLVED":"✕ SCATTERED"}</div><div style="font-size:12px;color:#9a9aa6">you ${L.p} · host ${L.e} · neutral ${L.n}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,p.style.display="flex"}let j=performance.now(),nt=0;function G(){const L=performance.now(),C=L/1e3,U=Math.min(.05,(L-j)/1e3);j=L,b.tick(U);const V=b.playerSide?b.playerSide==="left"?"right":"left":null,st=X=>X==="P"?b.playerSide:X==="E"?V:null,rt=new Map;for(const X of b.pulses){const et=`${X.side}:${X.terminalId}:${X.cell}`,ht=rt.get(et)??[];ht.push({p:X.elapsed/X.delay,owner:X.owner,kind:X.kind}),rt.set(et,ht)}let at=-1;const bt=b.phase==="RUN"?b.playerSide:z?z[0]<0?"left":"right":null;z&&bt&&(at=v(bt,z[0],z[1])),a.begin();for(const X of M){const et=b.playerSide?X.side===b.playerSide?"P":"E":"N",ht=u_(et==="P"?se.dimP:et==="E"?se.dimE:se.dimN,d_(X.term)),At=rt.get(`${X.side}:${X.term}:${X.cell}`);for(const gt of X.dots){let _t=0,D=se.white;if(At)for(const wt of At){const It=gt.u<=wt.p?Math.exp(-(wt.p-gt.u)/.13):Math.exp(-(gt.u-wt.p)/.025);It>_t&&(_t=It,D=wt.kind==="DEAD"?se.litD:wt.owner==="P"?se.litP:se.litE)}const kt=Ds(ht,D,_t);a.dot(gt.x,gt.y,kt[0],kt[1],kt[2],2.2+_t*4,.85)}}for(const X of b.pulses){const et=y.get(`${X.side}:${X.terminalId}:${X.cell}`);if(!et)continue;const ht=Math.min(1,X.elapsed/X.delay);let At=0,gt=9;for(let kt=0;kt<et.length;kt++){const wt=Math.abs(et[kt].u-ht);wt<gt&&(gt=wt,At=kt)}const _t=et[At],D=X.kind==="DEAD"?se.litD:Ds(X.owner==="P"?se.litP:se.litE,se.white,.4);a.dot(_t.x,_t.y,D[0],D[1],D[2],9)}for(let X=0;X<12;X++){const[et,ht]=jn(X),At=b.owners[X],gt=st(At),_t=b.claimFlash[X]/.35;if(gt){const D=gt==="left"?"octa":"cube",kt=Ds(At==="P"?se.p:se.e,se.white,_t*.6);w(Pc(D,C+X*.5),et,ht,.042,kt,.9+_t)}else for(let kt=-1;kt<=1;kt++)for(let wt=-1;wt<=1;wt++)a.dot(et+kt*.024,ht+wt*.024,se.cellN[0],se.cellN[1],se.cellN[2],4)}const I=.055*Math.min(1.45,.86+.14*Pi());for(const X of["left","right"]){const et=X==="left"?"octa":"cube",ht=b.playerSide?X===b.playerSide?"P":"E":"N",At=ht==="P"?se.p:ht==="E"?se.e:se.cellN;for(let gt=0;gt<8;gt++){const[_t,D]=Ye(X,gt),kt=bt===X&&at===gt&&(b.phase==="PLAN"||X===b.playerSide),wt=kt?1.6:b.phase==="PLAN"?.7+.4*Math.sin(L/240+gt):1;w(Cc(et,C+gt*.7),_t,D,I,kt?Ds(At,se.white,.4):At,wt)}}const F=.99*Pi();for(let X=0;X<b.pBudget;X++)a.dot(-.24+X*.05,-F,se.p[0],se.p[1],se.p[2],5);a.commit(e.getPixelRatio()),l.render();const Q=Math.max(0,b.timeLeft/h.params.tMatch);m.setAttribute("r",String(3+18*Q)),m.setAttribute("stroke",Rl(Q));const Y=b.counts();x.textContent=`you c${h.spec.attacker} vs host c${h.spec.defender} · ${Y.p}–${Y.e} · lead wins`,b.phase==="PLAN"?(g.textContent="CHOOSE A SIDE — searching octahedra (left) vs searching cubes (right)",g.style.opacity="1"):b.phase==="RUN"?(g.textContent="fire your terminals — a claimed cell resolves into your solid",g.style.opacity="0.7"):g.style.opacity="0",(b.phase==="WON"||b.phase==="LOST")&&p.style.display==="none"&&K(),nt=requestAnimationFrame(G)}return G(),{regenerate:(L,C)=>P(L,C),chooseSide:L=>b.chooseSide(L),fire:L=>b.firePlayer(L),game:()=>b,dispose(){cancelAnimationFrame(nt),window.removeEventListener("resize",N),a.dispose(),l.dispose(),[f,g,x,p].forEach(L=>L.remove()),e.dispose()}}}const Jt={cellN:[.22,.22,.28],p:[.34,.9,.66],e:[.82,.88,1],litP:[.5,1.1,.85],litE:[1.05,1.08,1.16],invert:[.62,.5,1],repeat:[1,.82,.4],dead:[.7,.34,.32],white:[1,1,1]},_i=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],p_=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],m_=[[.34,.9,.62],[.52,1,.8],[.24,.7,.48]],g_=[[.82,.88,1],[.98,.98,1],[.64,.72,.9]],Cl=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,o,a)=>`rgb(${Math.round(r[0]+(o[0]-r[0])*a)},${Math.round(r[1]+(o[1]-r[1])*a)},${Math.round(r[2]+(o[2]-r[2])*a)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))},Pl=n=>n==="INVERT"?Jt.invert:n==="REPEAT"?Jt.repeat:n==="DEAD"?Jt.dead:Jt.white;function __(n,t){const e=new Qi({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(329226,1);const i=new ts,s=1.46,r=1.04,o=new ei(-1,1,1,-1,.01,100);o.position.set(0,0,4),o.lookAt(0,0,0);const a=new Qs(9e3,{additive:!0});i.add(a.points);const l=new $o(e);l.addPass(new Yo(i,o)),l.addPass(new Ln(new Ft(1,1),.6,.5,.22)),l.addPass(new qo);const c="http://www.w3.org/2000/svg",u="ui-monospace,SFMono-Regular,Menlo,monospace",d=I=>{const F=document.createElement("div");return F.style.cssText=I,document.body.appendChild(F),F},f=document.createElementNS(c,"svg");f.setAttribute("viewBox","0 0 48 48"),f.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const m=document.createElementNS(c,"circle");m.setAttribute("cx","24"),m.setAttribute("cy","24"),m.setAttribute("r","21"),m.setAttribute("fill","none"),m.setAttribute("stroke",Cl(1)),m.setAttribute("stroke-width","1.6"),f.appendChild(m),document.body.appendChild(f);const g=d(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${u};color:#9a9aa6;pointer-events:none;text-align:center`),x=d(`position:fixed;left:12px;bottom:12px;font:11px ${u};color:#55555f;pointer-events:none`),p=d(`position:fixed;right:12px;bottom:12px;font:11px ${u};color:#6a6a76;pointer-events:none;text-align:right`);p.innerHTML='<span style="color:#9e80ff">◍ invert</span> · <span style="color:#ffd166">◆ repeat</span> · <span style="color:#b35754">✕ dead</span>';const h=d(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${u};text-align:center;pointer-events:none`);let b,M,y=[],z=new Map,R=null;function P(){y=[],z=new Map;for(const I of["left","right"])Ci(b,I).terminals.forEach((F,Q)=>{for(const Y of F.outcomes){const X=jo(I,Q,Y.cell);y.push({side:I,term:Q,cell:Y.cell,kind:Y.kind,dots:X}),z.set(`${I}:${Q}:${Y.cell}`,X)}})}function N(I,F){b=tr(I,F),M=new er(b),P(),h.style.display="none"}N(t.spec,t.seed);function E(){const I=window.innerWidth,F=window.innerHeight;e.setSize(I,F),l.setSize(I,F);const Q=I/F,Y=Math.max(r,s/Q);o.top=Y,o.bottom=-Y,o.right=Y*Q,o.left=-Y*Q,o.updateProjectionMatrix(),ir(sr(Y)),P()}window.addEventListener("resize",E),E();const v=(I,F)=>{const Q=n.getBoundingClientRect();return[((I-Q.left)/Q.width*2-1)*o.right,(-((F-Q.top)/Q.height)*2+1)*o.top]},w=(I,F,Q)=>{let Y=-1,X=.22;for(let et=0;et<8;et++){const[ht,At]=Ye(I,et),gt=Math.hypot(F-ht,Q-At);gt<X&&(X=gt,Y=et)}return Y};n.addEventListener("pointermove",I=>R=v(I.clientX,I.clientY)),n.addEventListener("pointerup",I=>{const[F,Q]=v(I.clientX,I.clientY);if(M.phase==="PLAN")M.chooseSide(F<0?"left":"right");else if(M.phase==="RUN"&&M.playerSide){const Y=w(M.playerSide,F,Q);Y>=0&&M.firePlayer(Y)}});const K=.012,j=(I,F)=>{const Q=I[Math.max(0,F-1)],Y=I[Math.min(I.length-1,F+1)];let X=Y.x-Q.x,et=Y.y-Q.y;const ht=Math.hypot(X,et)||1;return X/=ht,et/=ht,[X,et,-et,X]},nt=(I,F)=>{let Q=0;for(;Q<I.length-2&&I[Q+1].u<F;)Q++;const Y=I[Q],X=I[Math.min(Q+1,I.length-1)],et=Math.max(0,Math.min(1,(F-Y.u)/(X.u-Y.u||1)));let ht=X.x-Y.x,At=X.y-Y.y;const gt=Math.hypot(ht,At)||1;return ht/=gt,At/=gt,{x:Y.x+(X.x-Y.x)*et,y:Y.y+(X.y-Y.y)*et,nx:-At,ny:ht}};function G(I,F,Q,Y,X,et,ht){const At=[F[0]*.7,F[1]*.7,F[2]*.7];for(let _t=0;_t<I.length;_t++){const D=I[_t];if(D.u>X)break;const[,,kt,wt]=j(I,_t),{b:It,col:it}=Y(D.u),Ot=.16*Math.max(0,Math.sin((D.u*2.2-et*.09+ht)*Math.PI*2)),St=_i(F,it,Math.min(1,It)),T=.45+Ot+.85*It;a.dot(D.x,D.y,St[0]*T,St[1]*T,St[2]*T,2.3+It*3.6,.95);for(const _ of[1,-1]){const A=_i(At,it,Math.min(1,It*.8)),H=.3+Ot*.7+.6*It;a.dot(D.x+kt*_*K,D.y+wt*_*K,A[0]*H,A[1]*H,A[2]*H,1.6+It*2.2,.85)}}const gt=5;for(let _t=0;_t<gt;_t++){const D=(et*.13+_t/gt+ht*.13)%1;for(let kt=0;kt<5;kt++){const wt=D-kt*.022;if(wt<=.005||wt>X)continue;const It=nt(I,wt),it=Math.sin(wt*24+et*2.2+ht)*K,Ot=(1-kt/5)*.85;a.dot(It.x+It.nx*it,It.y+It.ny*it,Q[0]*Ot,Q[1]*Ot,Q[2]*Ot,2.8-kt*.4,.92)}}}const L=(I,F,Q,Y,X,et)=>{for(const ht of I){const At=(.3+.7*ht.depth+ht.scan*.7)*et;a.dot(F+ht.x*Y,Q+ht.y*Y,X[0]*At,X[1]*At,X[2]*At,1.4+2.2*ht.depth+ht.scan*2.6,.95)}},C=(I,F)=>{let Q=0,Y=9;for(let X=0;X<I.length;X++){const et=Math.abs(I[X].u-F);et<Y&&(Y=et,Q=X)}return I[Q]},U=(I,F,Q,Y,X,et)=>{for(let ht=0;ht<8;ht++){const At=ht/8*Math.PI*2;a.dot(I+Math.cos(At)*Q,F+Math.sin(At)*Q,Y[0]*et,Y[1]*et,Y[2]*et,X,.9)}},V=(I,F,Q,Y,X)=>{for(let et=-2;et<=2;et++)a.dot(I+et*Q,F+et*Q,Y[0]*X,Y[1]*X,Y[2]*X,3,.9),a.dot(I+et*Q,F-et*Q,Y[0]*X,Y[1]*X,Y[2]*X,3,.9)};function st(){const I=M.counts(),F=M.phase==="WON";h.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${F?"#8fd0b6":"#d0605a"}">${F?"◆ CIRCUIT TAKEN":"✕ REPELLED"}</div><div style="font-size:12px;color:#9a9aa6">you ${I.p} · host ${I.e} · neutral ${I.n}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,h.style.display="flex"}let rt=performance.now(),at=0;function bt(){const I=performance.now(),F=I/1e3,Q=Math.min(.05,(I-rt)/1e3);rt=I,M.tick(Q);const Y=new Map;for(const it of M.pulses){const Ot=`${it.side}:${it.terminalId}:${it.cell}`,St=Y.get(Ot)??[];St.push({p:it.elapsed/it.delay,owner:it.owner,kind:it.kind}),Y.set(Ot,St)}let X=-1;const et=M.phase==="RUN"?M.playerSide:R?R[0]<0?"left":"right":null;R&&et&&(X=w(et,R[0],R[1]));const ht=X>=0&&et;a.begin();for(const it of y){const Ot=M.playerSide?it.side===M.playerSide?"P":"E":"N",T=Ot==="P"||Ot==="N"&&it.side==="left"?m_:g_,_=T[it.term%T.length],A=p_(_,Ot==="N"?.24:.2),H=_,q=ht&&it.side===et&&it.term===X,$=Y.get(`${it.side}:${it.term}:${it.cell}`),dt=it.kind==="DEAD"?.66:1;G(it.dots,A,H,ft=>{let Dt=q?.42:0,ct=q?Pl(it.kind):Jt.white;if($)for(const xt of $){const Nt=ft<=xt.p?Math.exp(-(xt.p-ft)/.12):Math.exp(-(ft-xt.p)/.025);Nt>Dt&&(Dt=Nt,ct=xt.kind==="DEAD"?Jt.dead:xt.owner==="P"?Jt.litP:Jt.litE)}return{b:Dt,col:ct}},dt,F,it.term*.6+(it.side==="left"?0:1.7));const lt=q?1:.7;if(it.kind==="INVERT"){const ft=C(it.dots,.5);U(ft.x,ft.y,.02,Jt.invert,2.4,lt)}else if(it.kind==="REPEAT"){const ft=C(it.dots,.5),Dt=.7+.3*Math.sin(I/200);for(let ct=-1;ct<=1;ct++)for(let xt=-1;xt<=1;xt++)a.dot(ft.x+ct*.014,ft.y+xt*.014,Jt.repeat[0]*lt*Dt,Jt.repeat[1]*lt*Dt,Jt.repeat[2]*lt*Dt,3)}else if(it.kind==="DEAD"){const ft=C(it.dots,.66);V(ft.x,ft.y,.012,Jt.dead,lt)}}for(const it of M.pulses){const Ot=z.get(`${it.side}:${it.terminalId}:${it.cell}`);if(!Ot)continue;const St=C(Ot,Math.min(1,it.elapsed/it.delay)),T=it.kind==="DEAD"?Jt.dead:_i(it.owner==="P"?Jt.litP:Jt.litE,Jt.white,.4);a.dot(St.x,St.y,T[0],T[1],T[2],9)}const At=M.playerSide?M.playerSide==="left"?"right":"left":null,gt=it=>it==="P"?M.playerSide:it==="E"?At:null,_t=new Map;if(ht)for(const it of y)it.side===et&&it.term===X&&it.kind!=="DEAD"&&_t.set(it.cell,it.kind);for(let it=0;it<12;it++){const[Ot,St]=jn(it),T=M.owners[it],_=M.claimFlash[it]/.35,A=gt(T);if(A){const q=A==="left"?"octa":"cube",$=_i(T==="P"?Jt.p:Jt.e,Jt.white,_*.6);L(Pc(q,F+it*.5),Ot,St,.04,$,.95+_)}else{const $=_i(Jt.cellN,Jt.white,_*.7);for(let dt=-1;dt<=1;dt++)for(let lt=-1;lt<=1;lt++)a.dot(Ot+dt*.026,St+lt*.026,$[0],$[1],$[2],4.5)}const H=_t.get(it);H&&U(Ot,St,.058,Pl(H),3,.9)}const D=.05*Math.min(1.45,.86+.14*Pi());for(const it of["left","right"]){const Ot=it==="left"?"octa":"cube",St=M.playerSide?it===M.playerSide?"P":"E":"N",T=St==="P"?Jt.p:St==="E"?Jt.e:Jt.cellN;for(let _=0;_<8;_++){const[A,H]=Ye(it,_),q=et===it&&X===_&&(M.phase==="PLAN"||it===M.playerSide),$=q?1.6:M.phase==="PLAN"?.7+.35*Math.sin(I/240+_):1;L(Cc(Ot,F+_*.7),A,H,D,q?_i(T,Jt.white,.4):T,$)}}const kt=.99*Pi();for(let it=0;it<M.pBudget;it++)a.dot(-.24+it*.05,-kt,Jt.p[0],Jt.p[1],Jt.p[2],5);a.commit(e.getPixelRatio()),l.render();const wt=Math.max(0,M.timeLeft/b.params.tMatch);m.setAttribute("r",String(3+18*wt)),m.setAttribute("stroke",Cl(wt));const It=M.counts();x.textContent=`you c${b.spec.attacker} vs host c${b.spec.defender} · ${It.p}–${It.e} · lead wins`,M.phase==="PLAN"?(g.textContent="READ BOTH CIRCUITS — hover a terminal to preview its reach, then click a side to take it",g.style.opacity="1"):M.phase==="RUN"?(g.textContent="fire your terminals · dead stubs waste a pulse · later light wins the cell",g.style.opacity="0.7"):g.style.opacity="0",(M.phase==="WON"||M.phase==="LOST")&&h.style.display==="none"&&st(),at=requestAnimationFrame(bt)}return bt(),{regenerate:(I,F)=>N(I,F),chooseSide:I=>M.chooseSide(I),fire:I=>M.firePlayer(I),game:()=>M,dispose(){cancelAnimationFrame(at),window.removeEventListener("resize",E),a.dispose(),l.dispose(),[f,g,x,p,h].forEach(I=>I.remove()),e.dispose()}}}const x_="Five games. CONSTELLATION, TRANSFER, CIRCUIT, SHAPES, and TUBES — the read-the-circuit model: wires are dotted tubes carrying visible elements (invert / repeat / dead), and you hover a terminal to preview its reach. Reading the two circuits to pick the better side is the skill. Press 1–5; R reseeds.",v_=[{build:"live",date:"2026-08-11",title:"TUBES (game 5) — the read-the-circuit model",added:["Wires are thin dotted tubes (a cut-and-straightened torus: lit round core + dim walls).","Every terminal is legible: a fork is two tubes, and each tube carries a visible element — an INVERT ring, a REPEAT node, or a DEAD stub that never reaches a cell.","Hover a terminal to preview its reach (its tubes light up and the cells it reaches are ringed by element colour). Reading both circuits to pick the better side is the skill.","Terminals are the searching primitives from SHAPES (octahedra left, cubes right); a very slow ambient band drifts along every tube so the circuit is always gently alive. Mechanics reuse TRANSFER."]},{build:null,date:"2026-08-11",title:"SHAPES (game 4, experimental) — Modes × Primitives",added:["Terminals are Braille-Lab “searching” primitives — octahedra on the left, cubes on the right (lat/long lattice + scan meridian).","A claimed cell resolves into the “solving” (rubik) primitive of the side that took it, in that side’s colour.","Ported the searching + solving modes and the cube/octahedron warps into src/render/primitives.ts; kept the lit angular traces + bloom.","Reuses TRANSFER’s mechanics. Press 4."]},{build:null,date:"2026-08-11",title:"CIRCUIT (game 3) — lit circuit board",added:["A separate tab (press 3): the Paradroid duel rendered as a real circuit — right-angle traces routed through per-terminal vertical buses into the cell strip.","Light flows through the traces as pulses travel: a bright head with a trailing glow that lights each trace segment it passes, plus a bloom pass for the “deeper light”.","Reuses TRANSFER’s verified mechanics; the renderer (angular routing + additive dots + UnrealBloom) is the whole difference."]},{build:null,date:"2026-08-11",title:"TRANSFER (game 2) — playable",added:["The circuit renders as a flat dot-field: a central 12-cell strip flanked by two 8-terminal wiring layers, wires threading terminal → cell.","PLAN: click a side to take it. RUN: click your terminals to fire pulses that travel the wires (with tails) and claim cells — later pulse wins.","Owner colour (you teal / host coral), claim flash, REPEAT guns, the enemy AI firing back, shrinking timer ring, budget dots, win/lose.","Built on the logic core (deterministic sim + solution-first generator, verified across 200 boards). 6-6 rematch still TODO."]},{build:null,date:"2026-08-11",title:"CONSTELLATION: feel + content pass",added:["Extraction magnetism (cursor grabs the nearest glyph point) + reticle snap + extract-pop.","Glyph bank grown to 15 (min Hamming 8).","Timer is a hollow thin ring that shrinks and shifts teal → amber → red."]},{build:null,date:"2026-08-11",title:"Phase 2 — extraction, sweep, win/lose",added:["Click the glyph’s points while aligned to extract them; all points → lock solved, all locks → win.","TRIP hazards cost a strike + 10% of the timer (3 strikes = alarm); NOISE clicks are duds.","A scan wavefront sweeps the cloud; a pass caught mid-extraction while misaligned wipes a point back. Axis drift on D4+.","HUD: depleting timer, strike pips, extraction progress; win / alarm / timeout end screens with margin + extracted keys."]},{build:null,date:"2026-08-11",title:"Phase 1 polish",added:["θ_lock soft-snap with hysteresis (magnetic assist, hands-off).","Coherence → per-point brightness; the noise dims as a lock forms so the glyph reads cleanly.","A gold “found” shine (color tint + bloom) fires the moment a lock completes.","Diegetic dotted-arc coherence meter."]},{build:null,date:"2026-08-11",title:"Board wired into the renderer",added:["A generated CONSTELLATION board renders as a halftone point cloud.","Orbit-to-align: as your view nears a hidden axis, that lock’s signal contracts and the glyph resolves out of the noise.","R to reseed; this dev-log panel on the version badge."]},{build:null,date:"2026-08-11",title:"CONSTELLATION generator",added:["Solution-first, seeded board generator (spec §6): hidden axis, back-projected key glyph, TRIP hazards in the margin ring, noise fill.","Rigid-Procrustes coherence metric (fits the whole signal set to the glyph) — also the gameplay alignment cue.","False-constellation uniqueness check: verified across 1000 boards, zero spurious, all first-try.","Dependency-free vec3 math so the logic runs headless in Node for testing."]},{build:null,date:"2026-08-11",title:"Shared glyph bank",added:["10× 5×7 key glyphs (CONSTELLATION) + 6× 2×4 braille symbols (BREACH) — one cross-game visual language.","Distinctness verified numerically (min Hamming 9 and 4).","Helpers: back-projection points, the 1-dot TRIP margin ring, Hamming distance."]},{build:"e059300d",date:"2026-08-11",title:"Scaffold, renderer & cache-busting",added:["TypeScript + Vite + Three.js project.","Dotted-halftone look as a GPU point shader (depth → grayscale + size), ported from the Braille PoC.","Seeded RNG (mulberry32) + the shared session contract.","Cache-busting toolkit wired into the build (this badge)."]}],M_=[{phase:"Now",note:"CONSTELLATION full loop",items:[{label:"Board renders + resolves on alignment",done:!0},{label:"θ_lock soft-snap; coherence → brightness; found-shine",done:!0},{label:"Extraction, sweep + axis drift, TRIP strikes, win/lose + scoring",done:!0},{label:"Trace-stroke extraction variant + audio (coherence tone, ticks)"},{label:"SKILL modifiers (hint band, TRIP shimmer) + OVERRIDE + exfil rule"}]},{phase:"Next",note:"Harden + present",items:[{label:"Difficulty/skill/seed selector UI (PLAN screen)"},{label:"Feel tuning pass (extraction radius, sweep pressure, drift)"},{label:"Deterministic replay (seed + input log) as an acceptance test"}]},{phase:"Later",note:"The rest of the series",items:[{label:"Braille dot-matrix renderer (second render target)"},{label:"TRANSFER (Paradroid duel), TRACE (node capture), BREACH (matrix)"},{label:"Write the 4 missing specs (deduction, flow-routing, timing, crosslink)"},{label:"Host integration + deploy"}]}],S_=[{name:"CONSTELLATION",status:"playable",fantasy:"An encrypted datastructure hangs in space as a cloud of noise. From exactly one viewpoint the noise collapses into a key. Find the angle, read the key, extract it without touching the tripwires.",how:["Orbit the cloud (drag). One hidden viewing angle makes the scattered dots snap into a glyph.","As you near that angle the signal dots contract and brighten; within tolerance the view soft-snaps and the glyph is legible. The dotted arc fills toward a lock.","While aligned, click every glyph point to extract it (they light up). All points solves the lock; a gold shine confirms the key.","A NOISE click is a dud (small time cost); a TRIP dot — just outside the glyph outline — is a hazard hit. Harder boards hide several glyphs on different axes; solve them in any order."],fail:["Critical: 3 TRIP hits trips the alarm.","Soft: the run timer expires — attempt lost, retry allowed. You can jack out any time.","Pressure: a scan wavefront sweeps the cloud; caught mid-extraction while misaligned, it wipes a recovered point. Top tiers slowly drift the axis."],note:"Playable end to end. Still to come: trace-stroke variant, audio, and SKILL/OVERRIDE modifiers."},{name:"TRANSFER",status:"playable",fantasy:"Your influence device fights a host machine’s processor for control of its 12 registers. Majority wins; you become what you defeat. (Paradroid / Quazatron.)",how:["Press 2 to play. PLAN: click the left or right wiring layer to take it (the two differ in quality — read before you commit).","RUN: click your terminals to fire a limited stock of pulses. Each travels its wire and claims (or inverts) central cells; REPEAT guns keep re-claiming.","Later pulse wins a contested cell — hold some back to overwrite the host late, after its claims land."],fail:["Fail to hold the majority of 12 cells when the timer runs out. (6-6 rematch is still TODO.)"],note:"Playable MVP: firing, pulses, claims, AI, win/lose. Still to come: 6-6 rematch, richer wire visuals, side-select timer."},{name:"TRACE",status:"planned",fantasy:"Breach a network at an I/O port and capture a path to the registry before the system’s diagnostic subroutine traces the intrusion back to your entry.",how:["Capture adjacent nodes; each attempt rolls a visible detection chance (node rating vs your level).","Fortify nodes to slow the tracer; spend NUKE (silent capture) / FREEZE (halt tracer); grab STORE loot on detours.","On detection a tracer crawls back toward your entry on per-node countdowns — outrun it or get cut off."],fail:["Critical: the tracer reaches your entry node. Soft: jack out early, keep nothing."]},{name:"CIRCUIT",status:"playable",fantasy:"The same takeover fight as TRANSFER, but you are inside the board: a live circuit of glowing traces. Light you fire flows through the wiring and claims the cells it reaches.",how:["Press 3 to play. Same rules as TRANSFER — choose a side, then fire your terminals.","Each pulse is light travelling the right-angle traces; watch it thread the circuit and light the cell it lands on. Later light wins a contested cell."],fail:["Fail to hold the majority when the timer runs out."],note:"Game 3: TRANSFER’s mechanics with an angular, lit-circuit renderer (bloom + light-through-trace)."},{name:"SHAPES",status:"playable",fantasy:"The takeover duel as a lattice of thinking solids. The two sides are living primitives — octahedra searching on the left, cubes on the right — and every register you win resolves into your solid, turning like a solved puzzle.",how:["Press 4 (experimental). Same rules as TRANSFER — choose a side, fire your terminals.","Your terminals are “searching” primitives; a cell you claim becomes a “solving” one (octahedron if you took the left side, cube if the right)."],fail:["Fail to hold the majority when the timer runs out."],note:"Game 4: a Braille-Lab Modes × Primitives experiment over TRANSFER’s mechanics."},{name:"TUBES",status:"playable",fantasy:"The takeover duel where you can finally read the wiring. Two circuits of glowing tubes; each terminal fans out through inverters, repeaters and dead-ends to the register strip. Read them, take the better side, spend your pulses well.",how:["Press 5. PLAN: hover any terminal to light its tubes and preview which cells it reaches (rings coloured by element). Read both sides, then click the better circuit to take it.","A tube carrying an ◍ inverts the cell it reaches; a ◆ arms a repeat-gun; a ✕ dead-ends and wastes the pulse. A fork is two tubes.","RUN: fire your terminals; light threads the tubes and claims cells. Later light wins a contested cell."],fail:["Fail to hold the majority when the timer runs out."],note:"Game 5: the read-the-circuit model. Elements are derived from the (verified) outcome sim; the deeper 8×4 lane grid with JOIN is a later step."},{name:"BREACH",status:"planned",fantasy:"A code matrix scrolls before you. You have a tiny buffer. Chain one path through the grid that smuggles every daemon in at once. (Cyberpunk 2077 Breach Protocol.)",how:["Pick glyphs into a small buffer; picks alternate axis — row, then column, then row…","Complete each daemon (a target sub-sequence) as a contiguous run in the buffer; overlap them so one path completes several.","Avoid the WORM hazard cell, which wastes a slot and speeds the clock."],fail:["Soft: timer or buffer runs out with zero daemons completed. Margin = spare buffer + time."]}],Dc=()=>(document.querySelector('meta[name="cb"]')?.getAttribute("content")||"").replace(/#.*$/,"")||"——",Ee=n=>n.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),y_=n=>n.build==="live"?Dc():n.build??"—";function E_(){const n=v_.map(e=>{const i=e.added.map(s=>`<li>${Ee(s)}</li>`).join("");return`
      <div class="cx-ms">
        <div class="cx-ms-h"><span class="cx-tok">${Ee(y_(e))}</span>
          <span class="cx-ms-t">${Ee(e.title)}</span><span class="cx-date">${Ee(e.date)}</span></div>
        <ul>${i}</ul>
      </div>`}).join(""),t=M_.map(e=>{const i=e.items.map(s=>`<li class="${s.done?"done":""}">${s.done?"✓":"○"} ${Ee(s.label)}</li>`).join("");return`
      <div class="cx-rm">
        <div class="cx-rm-h">${Ee(e.phase)}${e.note?` <span class="cx-note">— ${Ee(e.note)}</span>`:""}</div>
        <ul>${i}</ul>
      </div>`}).join("");return`
    <div class="cx-status">${Ee(x_)}</div>
    <div class="cx-scroll">
      <div class="cx-sec">Changelog</div>${n}
      <div class="cx-sec">Roadmap</div>${t}
    </div>`}function T_(){return`<div class="cx-scroll">${S_.map(t=>{const e=t.how.map(r=>`<li>${Ee(r)}</li>`).join(""),i=t.fail.map(r=>`<li>${Ee(r)}</li>`).join(""),s=t.note?`<div class="cx-gnote">${Ee(t.note)}</div>`:"";return`
      <div class="cx-game">
        <div class="cx-game-h"><span class="cx-game-n">${Ee(t.name)}</span>
          <span class="cx-badge cx-${t.status.replace(/\s/g,"")}">${Ee(t.status)}</span></div>
        <div class="cx-fantasy">${Ee(t.fantasy)}</div>
        <div class="cx-lbl">How to play</div><ul>${e}</ul>
        <div class="cx-lbl">Failure</div><ul class="cx-fail">${i}</ul>
        ${s}
      </div>`}).join("")}</div>`}function b_(n){return`
    <div class="cx-head">
      <div>
        <div class="cx-title">hacking-mini-games</div>
        <div class="cx-sub">build <b>${Ee(Dc())}</b></div>
      </div>
      <button class="cx-close" aria-label="close">✕</button>
    </div>
    <div class="cx-tabs">
      <button class="cx-tab ${n==="log"?"on":""}" data-tab="log">Dev Log</button>
      <button class="cx-tab ${n==="rules"?"on":""}" data-tab="rules">Rules</button>
    </div>
    ${n==="log"?E_():T_()}`}const A_=`
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
`;function w_(){const n=document.createElement("style");n.textContent=A_,document.head.appendChild(n);const t=document.createElement("div");t.id="cx-panel",document.body.appendChild(t);let e="log";const i=()=>{t.innerHTML=b_(e),t.querySelector(".cx-close")?.addEventListener("click",()=>s(!1)),t.querySelectorAll(".cx-tab").forEach(a=>{a.addEventListener("click",()=>{e=a.dataset.tab??"log",i()})})},s=a=>{a&&i(),t.classList.toggle("open",a)};let r=0;const o=()=>{const a=document.getElementById("cb-badge");if(a){a.title="click for dev log · token copied too",a.addEventListener("click",()=>s(!t.classList.contains("open")));return}r++<100&&setTimeout(o,50)};o(),window.addEventListener("keydown",a=>{a.key==="Escape"&&s(!1)})}w_();const Po={difficulty:2,skill:2},Lc=new Set(["transfer","circuit","shapes","tubes"]);let Xn=0;function Uc(n){const t=document.createElement("div");t.style.cssText="position:fixed;top:12px;left:12px;right:12px;padding:10px 14px;z-index:2147483645;background:#2a0f12;border:1px solid #5a2a2f;border-radius:8px;color:#e6a6a6;font:12px/1.5 ui-monospace,Menlo,monospace;white-space:pre-wrap",t.textContent=`game failed to start:
${n instanceof Error?n.stack??n.message:String(n)}`,document.body.appendChild(t)}const Xs=["constellation","transfer","circuit","shapes","tubes"],Do="/hacking-mini-games/";let $n=null,Wi="constellation",zs=0;function R_(){document.getElementById("scene")?.remove();const n=document.createElement("canvas");return n.id="scene",document.getElementById("app").appendChild(n),n}function Ic(n){$n?.dispose(),zs=0,Wi=n,history.replaceState(null,"",`${Do}${Xs.indexOf(n)+1}`);const t=R_(),e=i=>({spec:qi[Xn],seed:i,skill:Po.skill});try{$n=n==="transfer"?zg(t,e("circuit")):n==="circuit"?Kg(t,e("grid")):n==="shapes"?f_(t,e("solids")):n==="tubes"?__(t,e("wired")):Tg(t,{...Po,seed:"aurora"}),window.__cx=$n}catch(i){console.error(i),Uc(i)}Fc()}function Nc(){if($n){zs+=1;try{if(Lc.has(Wi)){const n=$n.game();let t="";n.phase==="WON"?(Xn<qi.length-1&&Xn++,t="up"):n.phase==="LOST"&&n.result&&n.result.p<n.result.e&&(Xn=0,t="down"),$n.regenerate(qi[Xn],`${Wi}-${zs}`),Fc(t)}else $n.regenerate(Po.difficulty,`${Wi}-${zs}`)}catch(n){console.error(n),Uc(n)}}}const es=document.createElement("button");es.textContent="⟳";es.setAttribute("aria-label","reset / reseed");es.style.cssText="position:fixed;top:8px;right:10px;z-index:2147483646;width:44px;height:44px;border-radius:50%;border:1px solid #2c2c38;background:rgba(12,13,20,.6);color:#9a9aa6;font:20px/44px ui-monospace,Menlo,monospace;text-align:center;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation";es.addEventListener("click",Nc);document.body.appendChild(es);const Xi=document.createElement("div");Xi.style.cssText="position:fixed;top:9px;left:12px;z-index:2147483646;pointer-events:none;font:11px/1.5 ui-monospace,Menlo,monospace;color:#8a8a96";document.body.appendChild(Xi);function Fc(n=""){if(!Lc.has(Wi)){Xi.style.display="none";return}Xi.style.display="block";const t=qi[Xn],e=n==="up"?' <span style="color:#8fd0b6">▲ climbed</span>':n==="down"?' <span style="color:#d0605a">▼ reset</span>':"";Xi.innerHTML=`<span style="color:#c2c2ce">LADDER ${Xn+1}/${qi.length}</span>${e}<br>you c${t.attacker} · host c${t.defender}<br><span style="color:#5a5a64">win → climb · lose → reset</span>`}const C_=location.pathname.startsWith(Do)?location.pathname.slice(Do.length):location.pathname.replace(/^\//,""),P_=parseInt(C_.replace(/\D/g,""),10);Ic(Xs[P_-1]??"tubes");window.addEventListener("keydown",n=>{const t=parseInt(n.key,10);t>=1&&t<=Xs.length?Ic(Xs[t-1]):(n.key==="r"||n.key==="R")&&Nc()});
//# sourceMappingURL=index-CvGKA-51.js.map
