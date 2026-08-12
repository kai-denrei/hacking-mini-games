(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="170",Si={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Ta=1,wh=2,oc=1,Rh=2,dn=3,Bn=0,Re=1,fn=2,gn=0,ti=1,Ks=2,ba=3,Aa=4,Ch=5,jn=100,Ph=101,Lh=102,Dh=103,Ih=104,Uh=200,Nh=201,Fh=202,Oh=203,eo=204,no=205,Bh=206,kh=207,zh=208,Hh=209,Vh=210,Gh=211,Wh=212,Xh=213,$h=214,io=0,so=1,ro=2,bi=3,oo=4,ao=5,lo=6,co=7,ac=0,Yh=1,qh=2,On=0,lc=1,cc=2,hc=3,uc=4,jh=5,dc=6,fc=7,pc=300,Ai=301,wi=302,ho=303,uo=304,ir=306,fo=1e3,Zn=1001,po=1002,Ke=1003,Kh=1004,hs=1005,en=1006,xr=1007,Jn=1008,Sn=1009,mc=1010,gc=1011,ji=1012,Yo=1013,ni=1014,pn=1015,_n=1016,qo=1017,jo=1018,Ri=1020,_c=35902,xc=1021,vc=1022,Ye=1023,Mc=1024,Sc=1025,yi=1026,Ci=1027,yc=1028,Ko=1029,Ec=1030,Zo=1031,Jo=1033,ks=33776,zs=33777,Hs=33778,Vs=33779,mo=35840,go=35841,_o=35842,xo=35843,vo=36196,Mo=37492,So=37496,yo=37808,Eo=37809,To=37810,bo=37811,Ao=37812,wo=37813,Ro=37814,Co=37815,Po=37816,Lo=37817,Do=37818,Io=37819,Uo=37820,No=37821,Gs=36492,Fo=36494,Oo=36495,Tc=36283,Bo=36284,ko=36285,zo=36286,Zh=3200,Jh=3201,Qh=0,tu=1,Fn="",Be="srgb",Ii="srgb-linear",sr="linear",te="srgb",ri=7680,wa=519,eu=512,nu=513,iu=514,bc=515,su=516,ru=517,ou=518,au=519,Ra=35044,Ca="300 es",mn=2e3,Zs=2001;class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,Ho=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function lu(n,t){return(n%t+t)%t}function vr(n,t,e){return(1-e)*n+e*t}function zi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const cu={DEG2RAD:Ws};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,s,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],h=s[6],b=s[1],v=s[4],y=s[7],O=s[2],C=s[5],w=s[8];return r[0]=a*_+o*b+l*O,r[3]=a*p+o*v+l*C,r[6]=a*h+o*y+l*w,r[1]=c*_+u*b+d*O,r[4]=c*p+u*v+d*C,r[7]=c*h+u*y+d*w,r[2]=f*_+m*b+g*O,r[5]=f*p+m*v+g*C,r[8]=f*h+m*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=e*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Mr.makeScale(t,e)),this}rotate(t){return this.premultiply(Mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mr=new Vt;function Ac(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hu(){const n=Js("canvas");return n.style.display="block",n}const Pa={};function $i(n){n in Pa||(Pa[n]=!0,console.warn(n))}function uu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function du(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fu(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(n.r=xn(n.r),n.g=xn(n.g),n.b=xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(n.r=Ei(n.r),n.g=Ei(n.g),n.b=Ei(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Fn?sr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ei(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const La=[.64,.33,.3,.6,.15,.06],Da=[.2126,.7152,.0722],Ia=[.3127,.329],Ua=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Na=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Ii]:{primaries:La,whitePoint:Ia,transfer:sr,toXYZ:Ua,fromXYZ:Na,luminanceCoefficients:Da,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:La,whitePoint:Ia,transfer:te,toXYZ:Ua,fromXYZ:Na,luminanceCoefficients:Da,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let oi;class pu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=Js("canvas")),oi.width=t.width,oi.height=t.height;const i=oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xn(e[i]/255)*255):e[i]=xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mu=0;class wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sr(s[a].image)):r.push(Sr(s[a]))}else r=Sr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Sr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gu=0;class Ce extends ii{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=Zn,s=Zn,r=en,a=Jn,o=Ye,l=Sn,c=Ce.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=ts(),this.name="",this.source=new wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=pc;Ce.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(m+1)/2,O=(h+1)/2,C=(u+f)/4,w=(d+_)/4,D=(g+p)/4;return v>y&&v>O?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=w/i):y>O?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=D/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=w/r,s=D/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _u extends ii{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ce(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends _u{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rc extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xu extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-o;const h=l*f+c*m+u*g+d*_,b=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const O=Math.sqrt(v),C=Math.atan2(O,h*b);p=Math.sin(p*C)/O,o=Math.sin(o*C)/O}const y=o*b;if(l=l*p+f*y,c=c*p+m*y,u=u*p+g*y,d=d*p+_*y,p===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=O,c*=O,u*=O,d*=O}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*m-c*f,t[e+1]=l*g+u*f+c*d-o*m,t[e+2]=c*g+u*m+o*f-l*d,t[e+3]=u*g-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yr.copy(this).projectOnVector(t),this.sub(yr)}reflect(t){return this.sub(yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new q,Fa=new Ue;class es{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),ds.subVectors(this.max,Hi),ai.subVectors(t.a,Hi),li.subVectors(t.b,Hi),ci.subVectors(t.c,Hi),Rn.subVectors(li,ai),Cn.subVectors(ci,li),Vn.subVectors(ai,ci);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Vn.z,Vn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Vn.z,0,-Vn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Vn.y,Vn.x,0];return!Er(e,ai,li,ci,ds)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,ai,li,ci,ds))?!1:(fs.crossVectors(Rn,Cn),e=[fs.x,fs.y,fs.z],Er(e,ai,li,ci,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new q,new q,new q,new q,new q,new q,new q,new q],He=new q,us=new es,ai=new q,li=new q,ci=new q,Rn=new q,Cn=new q,Vn=new q,Hi=new q,ds=new q,fs=new q,Gn=new q;function Er(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gn.fromArray(n,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),u=i.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vu=new es,Vi=new q,Tr=new q;class rr{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):vu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);const e=Vi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(Tr)),this.expandByPoint(Vi.copy(t.center).sub(Tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new q,br=new q,ps=new q,Pn=new q,Ar=new q,ms=new q,wr=new q;class or{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){br.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(br);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=Pn.dot(this.direction),l=-Pn.dot(ps),c=Pn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(br).addScaledVector(ps,f),m}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const i=ln.dot(this.direction),s=ln.dot(ln)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,i,s,r){Ar.subVectors(e,t),ms.subVectors(i,t),wr.crossVectors(Ar,ms);let a=this.direction.dot(wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(ms.crossVectors(Pn,ms));if(l<0)return null;const c=o*this.direction.dot(Ar.cross(Pn));if(c<0||l+c>a)return null;const u=-o*Pn.dot(wr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,a,o,l,c,u,d,f,m,g,_,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,f,m,g,_,p)}set(t,e,i,s,r,a,o,l,c,u,d,f,m,g,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),a=1/hi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*d,g=c*u,_=c*d;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*d,g=c*u,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=a*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mu,t,Su)}lookAt(t,e,i){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),Ln.crossVectors(i,De),Ln.lengthSq()===0&&(Math.abs(i.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Ln.crossVectors(i,De)),Ln.normalize(),gs.crossVectors(De,Ln),s[0]=Ln.x,s[4]=gs.x,s[8]=De.x,s[1]=Ln.y,s[5]=gs.y,s[9]=De.y,s[2]=Ln.z,s[6]=gs.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],b=i[3],v=i[7],y=i[11],O=i[15],C=s[0],w=s[4],D=s[8],T=s[12],M=s[1],R=s[5],j=s[9],Y=s[13],st=s[2],X=s[6],I=s[10],U=s[14],P=s[3],$=s[7],et=s[11],ct=s[15];return r[0]=a*C+o*M+l*st+c*P,r[4]=a*w+o*R+l*X+c*$,r[8]=a*D+o*j+l*I+c*et,r[12]=a*T+o*Y+l*U+c*ct,r[1]=u*C+d*M+f*st+m*P,r[5]=u*w+d*R+f*X+m*$,r[9]=u*D+d*j+f*I+m*et,r[13]=u*T+d*Y+f*U+m*ct,r[2]=g*C+_*M+p*st+h*P,r[6]=g*w+_*R+p*X+h*$,r[10]=g*D+_*j+p*I+h*et,r[14]=g*T+_*Y+p*U+h*ct,r[3]=b*C+v*M+y*st+O*P,r[7]=b*w+v*R+y*X+O*$,r[11]=b*D+v*j+y*I+O*et,r[15]=b*T+v*Y+y*U+O*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],h=t[15];return g*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*m-i*l*m)+_*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+p*(+e*c*d-e*o*m-r*a*d+i*a*m+r*o*u-i*c*u)+h*(-s*o*u-e*l*d+e*o*f+s*a*d-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],h=t[15],b=d*p*c-_*f*c+_*l*m-o*p*m-d*l*h+o*f*h,v=g*f*c-u*p*c-g*l*m+a*p*m+u*l*h-a*f*h,y=u*_*c-g*d*c+g*o*m-a*_*m-u*o*h+a*d*h,O=g*d*l-u*_*l-g*o*f+a*_*f+u*o*p-a*d*p,C=e*b+i*v+s*y+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=b*w,t[1]=(_*f*r-d*p*r-_*s*m+i*p*m+d*s*h-i*f*h)*w,t[2]=(o*p*r-_*l*r+_*s*c-i*p*c-o*s*h+i*l*h)*w,t[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*m-i*l*m)*w,t[4]=v*w,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*h+e*f*h)*w,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*h-e*l*h)*w,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*m+e*l*m)*w,t[8]=y*w,t[9]=(g*d*r-u*_*r-g*i*m+e*_*m+u*i*h-e*d*h)*w,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*h+e*o*h)*w,t[11]=(u*o*r-a*d*r-u*i*c+e*d*c+a*i*m-e*o*m)*w,t[12]=O*w,t[13]=(u*_*s-g*d*s+g*i*f-e*_*f-u*i*p+e*d*p)*w,t[14]=(g*o*s-a*_*s-g*i*l+e*_*l+a*i*p-e*o*p)*w,t[15]=(a*d*s-u*o*s+u*i*l-e*d*l-a*i*f+e*o*f)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,g=r*d,_=a*u,p=a*d,h=o*d,b=l*c,v=l*u,y=l*d,O=i.x,C=i.y,w=i.z;return s[0]=(1-(_+h))*O,s[1]=(m+y)*O,s[2]=(g-v)*O,s[3]=0,s[4]=(m-y)*C,s[5]=(1-(f+h))*C,s[6]=(p+b)*C,s[7]=0,s[8]=(g+v)*w,s[9]=(p-b)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const a=hi.set(s[4],s[5],s[6]).length(),o=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ve.copy(this);const c=1/r,u=1/a,d=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=u,Ve.elements[5]*=u,Ve.elements[6]*=u,Ve.elements[8]*=d,Ve.elements[9]*=d,Ve.elements[10]*=d,e.setFromRotationMatrix(Ve),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=mn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let m,g;if(o===mn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Zs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=mn){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(a-r),f=(e+t)*c,m=(i+s)*u;let g,_;if(o===mn)g=(a+r)*d,_=-2*d;else if(o===Zs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hi=new q,Ve=new ce,Mu=new q(0,0,0),Su=new q(1,1,1),Ln=new q,gs=new q,De=new q,Oa=new ce,Ba=new Ue;class yn{constructor(t=0,e=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Oa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oa,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yu=0;const ka=new q,ui=new Ue,cn=new ce,_s=new q,Gi=new q,Eu=new q,Tu=new Ue,za=new q(1,0,0),Ha=new q(0,1,0),Va=new q(0,0,1),Ga={type:"added"},bu={type:"removed"},di={type:"childadded",child:null},Rr={type:"childremoved",child:null};class Pe extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new q,e=new yn,i=new Ue,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Vt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(za,t)}rotateY(t){return this.rotateOnAxis(Ha,t)}rotateZ(t){return this.rotateOnAxis(Va,t)}translateOnAxis(t,e){return ka.copy(t).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(za,t)}translateY(t){return this.translateOnAxis(Ha,t)}translateZ(t){return this.translateOnAxis(Va,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_s.copy(t):_s.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Gi,_s,this.up):cn.lookAt(_s,Gi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(cn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ga),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bu),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ga),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new q(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new q,hn=new q,Cr=new q,un=new q,fi=new q,pi=new q,Wa=new q,Pr=new q,Lr=new q,Dr=new q,Ir=new ue,Ur=new ue,Nr=new ue;class $e{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ge.subVectors(t,e),s.cross(Ge);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ge.subVectors(s,e),hn.subVectors(i,e),Cr.subVectors(t,e);const a=Ge.dot(Ge),o=Ge.dot(hn),l=Ge.dot(Cr),c=hn.dot(hn),u=hn.dot(Cr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ir.setScalar(0),Ur.setScalar(0),Nr.setScalar(0),Ir.fromBufferAttribute(t,e),Ur.fromBufferAttribute(t,i),Nr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ir,r.x),a.addScaledVector(Ur,r.y),a.addScaledVector(Nr,r.z),a}static isFrontFacing(t,e,i,s){return Ge.subVectors(i,e),hn.subVectors(t,e),Ge.cross(hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ge.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;fi.subVectors(s,i),pi.subVectors(r,i),Pr.subVectors(t,i);const l=fi.dot(Pr),c=pi.dot(Pr);if(l<=0&&c<=0)return e.copy(i);Lr.subVectors(t,s);const u=fi.dot(Lr),d=pi.dot(Lr);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(fi,a);Dr.subVectors(t,r);const m=fi.dot(Dr),g=pi.dot(Dr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(pi,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Wa.subVectors(r,s),o=(d-u)/(d-u+(m-g)),e.copy(s).addScaledVector(Wa,o);const h=1/(p+_+f);return a=_*h,o=f*h,e.copy(i).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Fr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=lu(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Fr(a,r,t+1/3),this.g=Fr(a,r,t),this.b=Fr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const i=Cc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Yt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Te(Me.r*255,0,255))*65536+Math.round(Te(Me.g*255,0,255))*256+Math.round(Te(Me.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Me.copy(this),e);const i=Me.r,s=Me.g,r=Me.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Be){Yt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,s=Me.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(xs);const i=vr(Dn.h,xs.h,e),s=vr(Dn.s,xs.s,e),r=vr(Dn.l,xs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Xt;Xt.NAMES=Cc;let Au=0;class ns extends ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=ts(),this.name="",this.blending=ti,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eo&&(i.blendSrc=this.blendSrc),this.blendDst!==no&&(i.blendDst=this.blendDst),this.blendEquation!==jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ta extends ns{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new q,vs=new Ft;class le{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ra,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}}class Pc extends le{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Lc extends le{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class vn extends le{constructor(t,e,i){super(new Float32Array(t),e,i)}}let wu=0;const Fe=new ce,Or=new Pe,mi=new q,Ie=new es,Wi=new es,ge=new q;class Je extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Lc:Pc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,i){return Fe.makeTranslation(t,e,i),this.applyMatrix4(Fe),this}scale(t,e,i){return Fe.makeScale(t,e,i),this.applyMatrix4(Fe),this}lookAt(t){return Or.lookAt(t),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ie.min,Wi.min),Ie.expandByPoint(ge),ge.addVectors(Ie.max,Wi.max),Ie.expandByPoint(ge)):(Ie.expandByPoint(Wi.min),Ie.expandByPoint(Wi.max))}Ie.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ge.fromBufferAttribute(o,c),l&&(mi.fromBufferAttribute(t,c),ge.add(mi)),s=Math.max(s,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new q,l[D]=new q;const c=new q,u=new q,d=new q,f=new Ft,m=new Ft,g=new Ft,_=new q,p=new q;function h(D,T,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[D].add(_),o[T].add(_),o[M].add(_),l[D].add(p),l[T].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,T=b.length;D<T;++D){const M=b[D],R=M.start,j=M.count;for(let Y=R,st=R+j;Y<st;Y+=3)h(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const v=new q,y=new q,O=new q,C=new q;function w(D){O.fromBufferAttribute(s,D),C.copy(O);const T=o[D];v.copy(T),v.sub(O.multiplyScalar(O.dot(T))).normalize(),y.crossVectors(C,T);const R=y.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,R)}for(let D=0,T=b.length;D<T;++D){const M=b[D],R=M.start,j=M.count;for(let Y=R,st=R+j;Y<st;Y+=3)w(t.getX(Y+0)),w(t.getX(Y+1)),w(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new q,r=new q,a=new q,o=new q,l=new q,c=new q,u=new q,d=new q;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new le(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new ce,Wn=new or,Ms=new rr,$a=new q,Ss=new q,ys=new q,Es=new q,Br=new q,Ts=new q,Ya=new q,bs=new q;class nn extends Pe{constructor(t=new Je,e=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Br.fromBufferAttribute(d,t),a?Ts.addScaledVector(Br,u):Ts.addScaledVector(Br.sub(e),u))}e.add(Ts)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Ms.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ms,$a)===null||Wn.origin.distanceToSquared($a)>(t.far-t.near)**2))&&(Xa.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(Xa),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,O=v;y<O;y+=3){const C=o.getX(y),w=o.getX(y+1),D=o.getX(y+2);s=As(this,h,t,i,c,u,d,C,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const b=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);s=As(this,a,t,i,c,u,d,b,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,O=v;y<O;y+=3){const C=y,w=y+1,D=y+2;s=As(this,h,t,i,c,u,d,C,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const b=p,v=p+1,y=p+2;s=As(this,a,t,i,c,u,d,b,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ru(n,t,e,i,s,r,a,o){let l;if(t.side===Re?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Bn,o),l===null)return null;bs.copy(o),bs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(bs);return c<e.near||c>e.far?null:{distance:c,point:bs.clone(),object:n}}function As(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ss),n.getVertexPosition(l,ys),n.getVertexPosition(c,Es);const u=Ru(n,t,e,i,Ss,ys,Es,Ya);if(u){const d=new q;$e.getBarycoord(Ya,Ss,ys,Es,d),s&&(u.uv=$e.getInterpolatedAttribute(s,o,l,c,d,new Ft)),r&&(u.uv1=$e.getInterpolatedAttribute(r,o,l,c,d,new Ft)),a&&(u.normal=$e.getInterpolatedAttribute(a,o,l,c,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};$e.getNormal(Ss,ys,Es,f.normal),u.face=f,u.barycoord=d}return u}class is extends Je{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(d,2));function g(_,p,h,b,v,y,O,C,w,D,T){const M=y/w,R=O/D,j=y/2,Y=O/2,st=C/2,X=w+1,I=D+1;let U=0,P=0;const $=new q;for(let et=0;et<I;et++){const ct=et*R-Y;for(let pt=0;pt<X;pt++){const bt=pt*M-j;$[_]=bt*b,$[p]=ct*v,$[h]=st,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[h]=C>0?1:-1,u.push($.x,$.y,$.z),d.push(pt/w),d.push(1-et/D),U+=1}}for(let et=0;et<D;et++)for(let ct=0;ct<w;ct++){const pt=f+ct+X*et,bt=f+ct+X*(et+1),Q=f+(ct+1)+X*(et+1),K=f+(ct+1)+X*et;l.push(pt,bt,K),l.push(bt,Q,K),P+=6}o.addGroup(m,P,T),m+=P,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ye(n){const t={};for(let e=0;e<n.length;e++){const i=Pi(n[e]);for(const s in i)t[s]=i[s]}return t}function Cu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Ki={clone:Pi,merge:ye};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xe extends ns{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=Cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ic extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new q,qa=new Ft,ja=new Ft;class Xe extends Ic{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,qa,ja),e.subVectors(ja,qa)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class Du extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(gi,_i,t,e);s.layers=this.layers,this.add(s);const r=new Xe(gi,_i,t,e);r.layers=this.layers,this.add(r);const a=new Xe(gi,_i,t,e);a.layers=this.layers,this.add(a);const o=new Xe(gi,_i,t,e);o.layers=this.layers,this.add(o);const l=new Xe(gi,_i,t,e);l.layers=this.layers,this.add(l);const c=new Xe(gi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Uc extends Ce{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ai,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iu extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Uc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new is(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Pi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:gn});r.uniforms.tEquirect.value=e;const a=new nn(s,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=en),new Du(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const kr=new q,Uu=new q,Nu=new Vt;class Nn{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=kr.subVectors(i,e).cross(Uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(kr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Nu.getNormalMatrix(t),s=this.coplanarPoint(kr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new rr,ws=new q;class Nc{constructor(t=new Nn,e=new Nn,i=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],h=s[12],b=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,p-m,y-h).normalize(),i[1].setComponents(l+r,f+c,p+m,y+h).normalize(),i[2].setComponents(l+a,f+u,p+g,y+b).normalize(),i[3].setComponents(l-a,f-u,p-g,y-b).normalize(),i[4].setComponents(l-o,f-d,p-_,y-v).normalize(),e===mn)i[5].setComponents(l+o,f+d,p+_,y+v).normalize();else if(e===Zs)i[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ws.x=s.normal.x>0?t.max.x:t.min.x,ws.y=s.normal.y>0?t.max.y:t.min.y,ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Fu(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ar extends Je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const b=h*f-a;for(let v=0;v<c;v++){const y=v*d-r;g.push(y,-b,0),_.push(0,0,1),p.push(v/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const v=b+c*h,y=b+c*(h+1),O=b+1+c*(h+1),C=b+1+c*h;m.push(v,y,C),m.push(y,O,C)}this.setIndex(m),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bu=`#ifdef USE_ALPHAHASH
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
#endif`,ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
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
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu=`#ifdef USE_BATCHING
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
#endif`,$u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Zu=`#ifdef USE_BUMPMAP
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,od=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
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
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
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
#endif`,Nd=`struct PhysicalMaterial {
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
}`,Fd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$d=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
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
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`#include <common>
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
}`,Wf=`#if DEPTH_PACKING == 3200
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
}`,Xf=`#define DISTANCE
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
}`,$f=`#define DISTANCE
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,tp=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,sp=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,op=`#define PHONG
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
}`,ap=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,cp=`#define TOON
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
}`,hp=`#define TOON
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
}`,up=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,gp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Ou,alphahash_pars_fragment:Bu,alphamap_fragment:ku,alphamap_pars_fragment:zu,alphatest_fragment:Hu,alphatest_pars_fragment:Vu,aomap_fragment:Gu,aomap_pars_fragment:Wu,batching_pars_vertex:Xu,batching_vertex:$u,begin_vertex:Yu,beginnormal_vertex:qu,bsdfs:ju,iridescence_fragment:Ku,bumpmap_pars_fragment:Zu,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:td,clipping_planes_vertex:ed,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:rd,common:od,cube_uv_reflection_fragment:ad,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:dd,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:_d,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Cd,envmap_vertex:vd,fog_vertex:Md,fog_pars_vertex:Sd,fog_fragment:yd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Td,lightmap_pars_fragment:bd,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:wd,lights_pars_begin:Rd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Dd,lights_phong_pars_fragment:Id,lights_physical_fragment:Ud,lights_physical_pars_fragment:Nd,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Vd,map_fragment:Gd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:$d,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:qd,morphinstance_vertex:jd,morphcolor_vertex:Kd,morphnormal_vertex:Zd,morphtarget_pars_vertex:Jd,morphtarget_vertex:Qd,normal_fragment_begin:tf,normal_fragment_maps:ef,normal_pars_fragment:nf,normal_pars_vertex:sf,normal_vertex:rf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,opaque_fragment:uf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:Mf,shadowmap_vertex:Sf,shadowmask_pars_fragment:yf,skinbase_vertex:Ef,skinning_pars_vertex:Tf,skinning_vertex:bf,skinnormal_vertex:Af,specularmap_fragment:wf,specularmap_pars_fragment:Rf,tonemapping_fragment:Cf,tonemapping_pars_fragment:Pf,transmission_fragment:Lf,transmission_pars_fragment:Df,uv_pars_fragment:If,uv_pars_vertex:Uf,uv_vertex:Nf,worldpos_vertex:Ff,background_vert:Of,background_frag:Bf,backgroundCube_vert:kf,backgroundCube_frag:zf,cube_vert:Hf,cube_frag:Vf,depth_vert:Gf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:$f,equirect_vert:Yf,equirect_frag:qf,linedashed_vert:jf,linedashed_frag:Kf,meshbasic_vert:Zf,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:tp,meshmatcap_vert:ep,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:sp,meshphong_vert:rp,meshphong_frag:op,meshphysical_vert:ap,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:hp,points_vert:up,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},Et={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},tn={basic:{uniforms:ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ye([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ye([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ye([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ye([Et.points,Et.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ye([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ye([Et.common,Et.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ye([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ye([Et.sprite,Et.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ye([Et.common,Et.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ye([Et.lights,Et.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};tn.physical={uniforms:ye([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Rs={r:0,b:0,g:0},$n=new yn,_p=new ce;function xp(n,t,e,i,s,r,a){const o=new Xt(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function _(b){let v=!1;const y=g(b);y===null?h(o,l):y&&y.isColor&&(h(y,1),v=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===ir)?(u===void 0&&(u=new nn(new is(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Pi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$n.copy(v.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler($n)),u.material.toneMapped=Yt.getTransfer(y.colorSpace)!==te,(d!==y||f!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new nn(new ar(2,2),new xe({name:"BackgroundMaterial",uniforms:Pi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,v){b.getRGB(Rs,Dc(n)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:_,addToRenderList:p}}function vp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(M,R,j,Y,st){let X=!1;const I=d(Y,j,R);r!==I&&(r=I,c(r.object)),X=m(M,Y,j,st),X&&g(M,Y,j,st),st!==null&&t.update(st,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(M,R,j,Y),st!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,R,j){const Y=j.wireframe===!0;let st=i[M.id];st===void 0&&(st={},i[M.id]=st);let X=st[R.id];X===void 0&&(X={},st[R.id]=X);let I=X[Y];return I===void 0&&(I=f(l()),X[Y]=I),I}function f(M){const R=[],j=[],Y=[];for(let st=0;st<e;st++)R[st]=0,j[st]=0,Y[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:j,attributeDivisors:Y,object:M,attributes:{},index:null}}function m(M,R,j,Y){const st=r.attributes,X=R.attributes;let I=0;const U=j.getAttributes();for(const P in U)if(U[P].location>=0){const et=st[P];let ct=X[P];if(ct===void 0&&(P==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),P==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;I++}return r.attributesNum!==I||r.index!==Y}function g(M,R,j,Y){const st={},X=R.attributes;let I=0;const U=j.getAttributes();for(const P in U)if(U[P].location>=0){let et=X[P];et===void 0&&(P==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),P==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),st[P]=ct,I++}r.attributes=st,r.attributesNum=I,r.index=Y}function _(){const M=r.newAttributes;for(let R=0,j=M.length;R<j;R++)M[R]=0}function p(M){h(M,0)}function h(M,R){const j=r.newAttributes,Y=r.enabledAttributes,st=r.attributeDivisors;j[M]=1,Y[M]===0&&(n.enableVertexAttribArray(M),Y[M]=1),st[M]!==R&&(n.vertexAttribDivisor(M,R),st[M]=R)}function b(){const M=r.newAttributes,R=r.enabledAttributes;for(let j=0,Y=R.length;j<Y;j++)R[j]!==M[j]&&(n.disableVertexAttribArray(j),R[j]=0)}function v(M,R,j,Y,st,X,I){I===!0?n.vertexAttribIPointer(M,R,j,st,X):n.vertexAttribPointer(M,R,j,Y,st,X)}function y(M,R,j,Y){_();const st=Y.attributes,X=j.getAttributes(),I=R.defaultAttributeValues;for(const U in X){const P=X[U];if(P.location>=0){let $=st[U];if($===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const et=$.normalized,ct=$.itemSize,pt=t.get($);if(pt===void 0)continue;const bt=pt.buffer,Q=pt.type,K=pt.bytesPerElement,mt=Q===n.INT||Q===n.UNSIGNED_INT||$.gpuType===Yo;if($.isInterleavedBufferAttribute){const G=$.data,W=G.stride,it=$.offset;if(G.isInstancedInterleavedBuffer){for(let Z=0;Z<P.locationSize;Z++)h(P.location+Z,G.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Z=0;Z<P.locationSize;Z++)p(P.location+Z);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Z=0;Z<P.locationSize;Z++)v(P.location+Z,ct/P.locationSize,Q,et,W*K,(it+ct/P.locationSize*Z)*K,mt)}else{if($.isInstancedBufferAttribute){for(let G=0;G<P.locationSize;G++)h(P.location+G,$.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let G=0;G<P.locationSize;G++)p(P.location+G);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let G=0;G<P.locationSize;G++)v(P.location+G,ct/P.locationSize,Q,et,ct*K,ct/P.locationSize*G*K,mt)}}else if(I!==void 0){const et=I[U];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(P.location,et);break;case 3:n.vertexAttrib3fv(P.location,et);break;case 4:n.vertexAttrib4fv(P.location,et);break;default:n.vertexAttrib1fv(P.location,et)}}}}b()}function O(){D();for(const M in i){const R=i[M];for(const j in R){const Y=R[j];for(const st in Y)u(Y[st].object),delete Y[st];delete R[j]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const j in R){const Y=R[j];for(const st in Y)u(Y[st].object),delete Y[st];delete R[j]}delete i[M.id]}function w(M){for(const R in i){const j=i[R];if(j[M.id]===void 0)continue;const Y=j[M.id];for(const st in Y)u(Y[st].object),delete Y[st];delete j[M.id]}}function D(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Mp(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,i,1)}function l(c,u,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Ye&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const D=w===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Sn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==pn&&!D)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:O,maxSamples:C}}function yp(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Nn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:i,v=b*4;let y=h.clippingState||null;l.value=y,y=u(g,f,v,m);for(let O=0;O!==v;++O)y[O]=e[O];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,y=m;v!==_;++v,y+=4)a.copy(d[v]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ep(n){let t=new WeakMap;function e(a,o){return o===ho?a.mapping=Ai:o===uo&&(a.mapping=wi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ho||o===uo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Iu(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class zn extends Ic{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,Ka=[.125,.215,.35,.446,.526,.582],Kn=20,zr=new zn,Za=new Xt;let Hr=null,Vr=0,Gr=0,Wr=!1;const qn=(1+Math.sqrt(5))/2,xi=1/qn,Ja=[new q(-qn,xi,0),new q(qn,xi,0),new q(-xi,0,qn),new q(xi,0,qn),new q(0,qn,-xi),new q(0,qn,xi),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hr,Vr,Gr),this._renderer.xr.enabled=Wr,t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:_n,format:Ye,colorSpace:Ii,depthBuffer:!1},s=tl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(r)),this._blurMaterial=bp(r,t,e)}return s}_compileMaterial(t){const e=new nn(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,i,s){const o=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Za),u.toneMapping=On,u.autoClear=!1;const m=new ta({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new nn(new is,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Za),_=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const v=this._cubeSize;Cs(s,b*v,h>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ai||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Cs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,zr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ja[(s-r-1)%Ja.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new nn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Kn;p>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const h=[];let b=0;for(let w=0;w<Kn;++w){const D=w/_,T=Math.exp(-D*D/2);h.push(T),w===0?b+=T:w<p&&(b+=2*T)}for(let w=0;w<h.length;w++)h[w]=h[w]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const y=this._sizeLods[s],O=3*y*(s>v-Mi?s-v+Mi:0),C=4*(this._cubeSize-y);Cs(e,O,C,3*y,2*y),l.setRenderTarget(e),l.render(d,zr)}}function Tp(n){const t=[],e=[],i=[];let s=n;const r=n-Mi+1+Ka.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Mi?l=Ka[a-n+Mi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,b=new Float32Array(_*g*m),v=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,D=C>2?0:-1,T=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];b.set(T,_*g*C),v.set(f,p*g*C);const M=[C,C,C,C,C,C];y.set(M,h*g*C)}const O=new Je;O.setAttribute("position",new le(b,_)),O.setAttribute("uv",new le(v,p)),O.setAttribute("faceIndex",new le(y,h)),t.push(O),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function tl(n,t,e){const i=new Ze(n,t,e);return i.texture.mapping=ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function bp(n,t,e){const i=new Float32Array(Kn),s=new q(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ea(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function el(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function nl(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ea(){return`

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
	`}function Ap(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ho||l===uo,u=l===Ai||l===wi;if(c||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Qa(n)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Qa(n)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function wp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&$i("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Rp(n,t,e,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let v=0,y=b.length;v<y;v+=3){const O=b[v+0],C=b[v+1],w=b[v+2];f.push(O,C,C,w,w,O)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,y=b.length/3-1;v<y;v+=3){const O=v+0,C=v+1,w=v+2;f.push(O,C,C,w,w,O)}}else return;const p=new(Ac(f)?Lc:Pc)(f,1);p.version=_;const h=r.get(d);h&&t.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Cp(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*a),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*a,g),e.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,i,1)}function d(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let h=0;for(let b=0;b<g;b++)h+=m[b]*_[b];e.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Pp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Lp(n,t,e){const i=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let O=o.attributes.position.count*y,C=1;O>t.maxTextureSize&&(C=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const w=new Float32Array(O*C*4*d),D=new Rc(w,O,C,d);D.type=pn,D.needsUpdate=!0;const T=y*4;for(let R=0;R<d;R++){const j=h[R],Y=b[R],st=v[R],X=O*C*4*R;for(let I=0;I<j.count;I++){const U=I*T;g===!0&&(s.fromBufferAttribute(j,I),w[X+U+0]=s.x,w[X+U+1]=s.y,w[X+U+2]=s.z,w[X+U+3]=0),_===!0&&(s.fromBufferAttribute(Y,I),w[X+U+4]=s.x,w[X+U+5]=s.y,w[X+U+6]=s.z,w[X+U+7]=0),p===!0&&(s.fromBufferAttribute(st,I),w[X+U+8]=s.x,w[X+U+9]=s.y,w[X+U+10]=s.z,w[X+U+11]=st.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new Ft(O,C)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Dp(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Oc extends Ce{constructor(t,e,i,s,r,a,o,l,c,u=yi){if(u!==yi&&u!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yi&&(i=ni),i===void 0&&u===Ci&&(i=Ri),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bc=new Ce,il=new Oc(1,1),kc=new Rc,zc=new xu,Hc=new Uc,sl=[],rl=[],ol=new Float32Array(16),al=new Float32Array(9),ll=new Float32Array(4);function Ui(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=sl[s];if(r===void 0&&(r=new Float32Array(s),sl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function lr(n,t){let e=rl[t];e===void 0&&(e=new Int32Array(t),rl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ip(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Up(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2fv(this.addr,t),me(e,t)}}function Np(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;n.uniform3fv(this.addr,t),me(e,t)}}function Fp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4fv(this.addr,t),me(e,t)}}function Op(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;ll.set(i),n.uniformMatrix2fv(this.addr,!1,ll),me(e,i)}}function Bp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;al.set(i),n.uniformMatrix3fv(this.addr,!1,al),me(e,i)}}function kp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;ol.set(i),n.uniformMatrix4fv(this.addr,!1,ol),me(e,i)}}function zp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Hp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2iv(this.addr,t),me(e,t)}}function Vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3iv(this.addr,t),me(e,t)}}function Gp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4iv(this.addr,t),me(e,t)}}function Wp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Xp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2uiv(this.addr,t),me(e,t)}}function $p(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3uiv(this.addr,t),me(e,t)}}function Yp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4uiv(this.addr,t),me(e,t)}}function qp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(il.compareFunction=bc,r=il):r=Bc,e.setTexture2D(t||r,s)}function jp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||zc,s)}function Kp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hc,s)}function Zp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||kc,s)}function Jp(n){switch(n){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return kp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Xp;case 36295:return $p;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Qp(n,t){n.uniform1fv(this.addr,t)}function tm(n,t){const e=Ui(t,this.size,2);n.uniform2fv(this.addr,e)}function em(n,t){const e=Ui(t,this.size,3);n.uniform3fv(this.addr,e)}function nm(n,t){const e=Ui(t,this.size,4);n.uniform4fv(this.addr,e)}function im(n,t){const e=Ui(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function sm(n,t){const e=Ui(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rm(n,t){const e=Ui(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function om(n,t){n.uniform1iv(this.addr,t)}function am(n,t){n.uniform2iv(this.addr,t)}function lm(n,t){n.uniform3iv(this.addr,t)}function cm(n,t){n.uniform4iv(this.addr,t)}function hm(n,t){n.uniform1uiv(this.addr,t)}function um(n,t){n.uniform2uiv(this.addr,t)}function dm(n,t){n.uniform3uiv(this.addr,t)}function fm(n,t){n.uniform4uiv(this.addr,t)}function pm(n,t,e){const i=this.cache,s=t.length,r=lr(e,s);pe(i,r)||(n.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bc,r[a])}function mm(n,t,e){const i=this.cache,s=t.length,r=lr(e,s);pe(i,r)||(n.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zc,r[a])}function gm(n,t,e){const i=this.cache,s=t.length,r=lr(e,s);pe(i,r)||(n.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hc,r[a])}function _m(n,t,e){const i=this.cache,s=t.length,r=lr(e,s);pe(i,r)||(n.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kc,r[a])}function xm(n){switch(n){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return om;case 35667:case 35671:return am;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}class vm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jp(e.type)}}class Mm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xm(e.type)}}class Sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function cl(n,t){n.seq.push(t),n.map[t.id]=t}function ym(n,t,e){const i=n.name,s=i.length;for(Xr.lastIndex=0;;){const r=Xr.exec(i),a=Xr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cl(e,c===void 0?new vm(o,n,t):new Mm(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Sm(o),cl(e,d)),e=d}}}class Xs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ym(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function hl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Em=37297;let Tm=0;function bm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const ul=new Vt;function Am(n){Yt._getMatrix(ul,Yt.workingColorSpace,n);const t=`mat3( ${ul.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case sr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function dl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bm(n.getShaderSource(t),a)}else return s}function wm(n,t){const e=Am(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rm(n,t){let e;switch(t){case lc:e="Linear";break;case cc:e="Reinhard";break;case hc:e="Cineon";break;case uc:e="ACESFilmic";break;case dc:e="AgX";break;case fc:e="Neutral";break;case jh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ps=new q;function Cm(){Yt.getLuminanceCoefficients(Ps);const n=Ps.x.toFixed(4),t=Ps.y.toFixed(4),e=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function Lm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Yi(n){return n!==""}function fl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(n){return n.replace(Im,Nm)}const Um=new Map;function Nm(n,t){let e=Gt[t];if(e===void 0){const i=Um.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(n){return n.replace(Fm,Om)}function Om(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gl(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Bm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function km(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ai:case wi:t="ENVMAP_TYPE_CUBE";break;case ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ac:t="ENVMAP_BLENDING_MULTIPLY";break;case Yh:t="ENVMAP_BLENDING_MIX";break;case qh:t="ENVMAP_BLENDING_ADD";break}return t}function Vm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Gm(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Bm(e),c=km(e),u=zm(e),d=Hm(e),f=Vm(e),m=Pm(e),g=Lm(r),_=s.createProgram();let p,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yi).join(`
`),h.length>0&&(h+=`
`)):(p=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),h=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Gt.tonemapping_pars_fragment:"",e.toneMapping!==On?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),a=Vo(a),a=fl(a,e),a=pl(a,e),o=Vo(o),o=fl(o,e),o=pl(o,e),a=ml(a),o=ml(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=b+p+a,y=b+h+o,O=hl(s,s.VERTEX_SHADER,v),C=hl(s,s.FRAGMENT_SHADER,y);s.attachShader(_,O),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(_).trim(),Y=s.getShaderInfoLog(O).trim(),st=s.getShaderInfoLog(C).trim();let X=!0,I=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,O,C);else{const U=dl(s,O,"vertex"),P=dl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+j+`
`+U+`
`+P)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Y===""||st==="")&&(I=!1);I&&(R.diagnostics={runnable:X,programLog:j,vertexShader:{log:Y,prefix:p},fragmentShader:{log:st,prefix:h}})}s.deleteShader(O),s.deleteShader(C),D=new Xs(s,_),T=Dm(s,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Em)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=C,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $m(t),e.set(t,i)),i}}class $m{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}}function Ym(n,t,e,i,s,r,a){const o=new Qo,l=new Xm,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,M,R,j,Y){const st=j.fog,X=Y.geometry,I=T.isMeshStandardMaterial?j.environment:null,U=(T.isMeshStandardMaterial?e:t).get(T.envMap||I),P=U&&U.mapping===ir?U.image.height:null,$=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const et=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=et!==void 0?et.length:0;let pt=0;X.morphAttributes.position!==void 0&&(pt=1),X.morphAttributes.normal!==void 0&&(pt=2),X.morphAttributes.color!==void 0&&(pt=3);let bt,Q,K,mt;if($){const qt=tn[$];bt=qt.vertexShader,Q=qt.fragmentShader}else bt=T.vertexShader,Q=T.fragmentShader,l.update(T),K=l.getVertexShaderID(T),mt=l.getFragmentShaderID(T);const G=n.getRenderTarget(),W=n.state.buffers.depth.getReversed(),it=Y.isInstancedMesh===!0,Z=Y.isBatchedMesh===!0,ft=!!T.map,ht=!!T.matcap,dt=!!U,L=!!T.aoMap,Bt=!!T.lightMap,wt=!!T.bumpMap,Nt=!!T.normalMap,Rt=!!T.displacementMap,Wt=!!T.emissiveMap,Tt=!!T.metalnessMap,S=!!T.roughnessMap,x=T.anisotropy>0,A=T.clearcoat>0,N=T.dispersion>0,F=T.iridescence>0,k=T.sheen>0,rt=T.transmission>0,ot=x&&!!T.anisotropyMap,at=A&&!!T.clearcoatMap,St=A&&!!T.clearcoatNormalMap,lt=A&&!!T.clearcoatRoughnessMap,xt=F&&!!T.iridescenceMap,Ct=F&&!!T.iridescenceThicknessMap,_t=k&&!!T.sheenColorMap,ut=k&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,Ot=!!T.specularColorMap,$t=!!T.specularIntensityMap,B=rt&&!!T.transmissionMap,yt=rt&&!!T.thicknessMap,z=!!T.gradientMap,nt=!!T.alphaMap,gt=T.alphaTest>0,Mt=!!T.alphaHash,kt=!!T.extensions;let Jt=On;T.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Jt=n.toneMapping);const Qt={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:bt,fragmentShader:Q,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Z,batchingColor:Z&&Y._colorsTexture!==null,instancing:it,instancingColor:it&&Y.instanceColor!==null,instancingMorph:it&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ii,alphaToCoverage:!!T.alphaToCoverage,map:ft,matcap:ht,envMap:dt,envMapMode:dt&&U.mapping,envMapCubeUVHeight:P,aoMap:L,lightMap:Bt,bumpMap:wt,normalMap:Nt,displacementMap:f&&Rt,emissiveMap:Wt,normalMapObjectSpace:Nt&&T.normalMapType===tu,normalMapTangentSpace:Nt&&T.normalMapType===Qh,metalnessMap:Tt,roughnessMap:S,anisotropy:x,anisotropyMap:ot,clearcoat:A,clearcoatMap:at,clearcoatNormalMap:St,clearcoatRoughnessMap:lt,dispersion:N,iridescence:F,iridescenceMap:xt,iridescenceThicknessMap:Ct,sheen:k,sheenColorMap:_t,sheenRoughnessMap:ut,specularMap:Pt,specularColorMap:Ot,specularIntensityMap:$t,transmission:rt,transmissionMap:B,thicknessMap:yt,gradientMap:z,opaque:T.transparent===!1&&T.blending===ti&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:gt,alphaHash:Mt,combine:T.combine,mapUv:ft&&_(T.map.channel),aoMapUv:L&&_(T.aoMap.channel),lightMapUv:Bt&&_(T.lightMap.channel),bumpMapUv:wt&&_(T.bumpMap.channel),normalMapUv:Nt&&_(T.normalMap.channel),displacementMapUv:Rt&&_(T.displacementMap.channel),emissiveMapUv:Wt&&_(T.emissiveMap.channel),metalnessMapUv:Tt&&_(T.metalnessMap.channel),roughnessMapUv:S&&_(T.roughnessMap.channel),anisotropyMapUv:ot&&_(T.anisotropyMap.channel),clearcoatMapUv:at&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:St&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(T.sheenRoughnessMap.channel),specularMapUv:Pt&&_(T.specularMap.channel),specularColorMapUv:Ot&&_(T.specularColorMap.channel),specularIntensityMapUv:$t&&_(T.specularIntensityMap.channel),transmissionMapUv:B&&_(T.transmissionMap.channel),thicknessMapUv:yt&&_(T.thicknessMap.channel),alphaMapUv:nt&&_(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Nt||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!X.attributes.uv&&(ft||nt),fog:!!st,useFog:T.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:W,skinning:Y.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ft&&T.map.isVideoTexture===!0&&Yt.getTransfer(T.map.colorSpace)===te,decodeVideoTextureEmissive:Wt&&T.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(T.emissiveMap.colorSpace)===te,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fn,flipSided:T.side===Re,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||Z)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function h(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)M.push(R),M.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(b(M,T),v(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function v(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){const M=g[T.type];let R;if(M){const j=tn[M];R=Ki.clone(j.uniforms)}else R=T.uniforms;return R}function O(T,M){let R;for(let j=0,Y=u.length;j<Y;j++){const st=u[j];if(st.cacheKey===M){R=st,++R.usedTimes;break}}return R===void 0&&(R=new Gm(n,M,T,r),u.push(R)),R}function C(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:O,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:D}}function qm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _l(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d,f,m,g,_,p){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),t++,h}function o(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||jm),i.length>1&&i.sort(f||_l),s.length>1&&s.sort(f||_l)}function u(){for(let d=t,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Km(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new xl,n.set(i,[a])):s>=r.length?(a=new xl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Xt};break;case"SpotLight":e={position:new q,direction:new q,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function Jm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Qm=0;function tg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function eg(n){const t=new Zm,e=Jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new ce,a=new ce;function o(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,b=0,v=0,y=0,O=0,C=0,w=0;c.sort(tg);for(let T=0,M=c.length;T<M;T++){const R=c[T],j=R.color,Y=R.intensity,st=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=j.r*Y,d+=j.g*Y,f+=j.b*Y;else if(R.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(R.sh.coefficients[I],Y);w++}else if(R.isDirectionalLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,P=e.get(R);P.shadowIntensity=U.intensity,P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=I,m++}else if(R.isSpotLight){const I=t.get(R);I.position.setFromMatrixPosition(R.matrixWorld),I.color.copy(j).multiplyScalar(Y),I.distance=st,I.coneCos=Math.cos(R.angle),I.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),I.decay=R.decay,i.spot[_]=I;const U=R.shadow;if(R.map&&(i.spotLightMap[O]=R.map,O++,U.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[_]=U.matrix,R.castShadow){const P=e.get(R);P.shadowIntensity=U.intensity,P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=X,y++}_++}else if(R.isRectAreaLight){const I=t.get(R);I.color.copy(j).multiplyScalar(Y),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=I,p++}else if(R.isPointLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),I.distance=R.distance,I.decay=R.decay,R.castShadow){const U=R.shadow,P=e.get(R);P.shadowIntensity=U.intensity,P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,P.shadowCameraNear=U.camera.near,P.shadowCameraFar=U.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,v++}i.point[g]=I,g++}else if(R.isHemisphereLight){const I=t.get(R);I.skyColor.copy(R.color).multiplyScalar(Y),I.groundColor.copy(R.groundColor).multiplyScalar(Y),i.hemi[h]=I,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==h||D.numDirectionalShadows!==b||D.numPointShadows!==v||D.numSpotShadows!==y||D.numSpotMaps!==O||D.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+O-C,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=h,D.numDirectionalShadows=b,D.numPointShadows=v,D.numSpotShadows=y,D.numSpotMaps=O,D.numLightProbes=w,i.version=Qm++)}function l(c,u){let d=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const v=c[h];if(v.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function vl(n){const t=new eg(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ng(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new vl(n),t.set(s,[o])):r>=a.length?(o=new vl(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class ig extends ns{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sg extends ns{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function ag(n,t,e){let i=new Nc;const s=new Ft,r=new Ft,a=new ue,o=new ig({depthPacking:Jh}),l=new sg,c={},u=e.maxTextureSize,d={[Bn]:Re,[Re]:Bn,[fn]:fn},f=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:rg,fragmentShader:og}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let h=this.type;this.render=function(C,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),j=n.state;j.setBlending(gn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Y=h!==dn&&this.type===dn,st=h===dn&&this.type!==dn;for(let X=0,I=C.length;X<I;X++){const U=C[X],P=U.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const $=P.getFrameExtents();if(s.multiply($),r.copy(P.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,P.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,P.mapSize.y=r.y)),P.map===null||Y===!0||st===!0){const ct=this.type!==dn?{minFilter:Ke,magFilter:Ke}:{};P.map!==null&&P.map.dispose(),P.map=new Ze(s.x,s.y,ct),P.map.texture.name=U.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const et=P.getViewportCount();for(let ct=0;ct<et;ct++){const pt=P.getViewport(ct);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),j.viewport(a),P.updateMatrices(U,ct),i=P.getFrustum(),y(w,D,P.camera,U,this.type)}P.isPointLightShadow!==!0&&this.type===dn&&b(P,D),P.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(T,M,R)};function b(C,w){const D=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ze(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,D,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,D,m,_,null)}function v(C,w,D,T){let M=null;const R=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=M.uuid,Y=w.uuid;let st=c[j];st===void 0&&(st={},c[j]=st);let X=st[Y];X===void 0&&(X=M.clone(),st[Y]=X,w.addEventListener("dispose",O)),M=X}if(M.visible=w.visible,M.wireframe=w.wireframe,T===dn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=n.properties.get(M);j.light=D}return M}function y(C,w,D,T,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===dn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const Y=t.update(C),st=C.material;if(Array.isArray(st)){const X=Y.groups;for(let I=0,U=X.length;I<U;I++){const P=X[I],$=st[P.materialIndex];if($&&$.visible){const et=v(C,$,T,M);C.onBeforeShadow(n,C,w,D,Y,et,P),n.renderBufferDirect(D,null,Y,et,C,P),C.onAfterShadow(n,C,w,D,Y,et,P)}}}else if(st.visible){const X=v(C,st,T,M);C.onBeforeShadow(n,C,w,D,Y,X,null),n.renderBufferDirect(D,null,Y,X,C,null),C.onAfterShadow(n,C,w,D,Y,X,null)}}const j=C.children;for(let Y=0,st=j.length;Y<st;Y++)y(j[Y],w,D,T,M)}function O(C){C.target.removeEventListener("dispose",O);for(const D in c){const T=c[D],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const lg={[io]:so,[ro]:lo,[oo]:co,[bi]:ao,[so]:io,[lo]:ro,[co]:oo,[ao]:bi};function cg(n,t){function e(){let B=!1;const yt=new ue;let z=null;const nt=new ue(0,0,0,0);return{setMask:function(gt){z!==gt&&!B&&(n.colorMask(gt,gt,gt,gt),z=gt)},setLocked:function(gt){B=gt},setClear:function(gt,Mt,kt,Jt,Qt){Qt===!0&&(gt*=Jt,Mt*=Jt,kt*=Jt),yt.set(gt,Mt,kt,Jt),nt.equals(yt)===!1&&(n.clearColor(gt,Mt,kt,Jt),nt.copy(yt))},reset:function(){B=!1,z=null,nt.set(-1,0,0,0)}}}function i(){let B=!1,yt=!1,z=null,nt=null,gt=null;return{setReversed:function(Mt){if(yt!==Mt){const kt=t.get("EXT_clip_control");yt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const Jt=gt;gt=null,this.setClear(Jt)}yt=Mt},getReversed:function(){return yt},setTest:function(Mt){Mt?G(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(Mt){z!==Mt&&!B&&(n.depthMask(Mt),z=Mt)},setFunc:function(Mt){if(yt&&(Mt=lg[Mt]),nt!==Mt){switch(Mt){case io:n.depthFunc(n.NEVER);break;case so:n.depthFunc(n.ALWAYS);break;case ro:n.depthFunc(n.LESS);break;case bi:n.depthFunc(n.LEQUAL);break;case oo:n.depthFunc(n.EQUAL);break;case ao:n.depthFunc(n.GEQUAL);break;case lo:n.depthFunc(n.GREATER);break;case co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){gt!==Mt&&(yt&&(Mt=1-Mt),n.clearDepth(Mt),gt=Mt)},reset:function(){B=!1,z=null,nt=null,gt=null,yt=!1}}}function s(){let B=!1,yt=null,z=null,nt=null,gt=null,Mt=null,kt=null,Jt=null,Qt=null;return{setTest:function(qt){B||(qt?G(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(qt){yt!==qt&&!B&&(n.stencilMask(qt),yt=qt)},setFunc:function(qt,ke,rn){(z!==qt||nt!==ke||gt!==rn)&&(n.stencilFunc(qt,ke,rn),z=qt,nt=ke,gt=rn)},setOp:function(qt,ke,rn){(Mt!==qt||kt!==ke||Jt!==rn)&&(n.stencilOp(qt,ke,rn),Mt=qt,kt=ke,Jt=rn)},setLocked:function(qt){B=qt},setClear:function(qt){Qt!==qt&&(n.clearStencil(qt),Qt=qt)},reset:function(){B=!1,yt=null,z=null,nt=null,gt=null,Mt=null,kt=null,Jt=null,Qt=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,b=null,v=null,y=null,O=null,C=null,w=new Xt(0,0,0),D=0,T=!1,M=null,R=null,j=null,Y=null,st=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,U=0;const P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(P)[1]),I=U>=1):P.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),I=U>=2);let $=null,et={};const ct=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),bt=new ue().fromArray(ct),Q=new ue().fromArray(pt);function K(B,yt,z,nt){const gt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(B,Mt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<z;kt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(yt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return Mt}const mt={};mt[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),mt[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mt[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(n.DEPTH_TEST),a.setFunc(bi),wt(!1),Nt(Ta),G(n.CULL_FACE),L(gn);function G(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function W(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function it(B,yt){return d[B]!==yt?(n.bindFramebuffer(B,yt),d[B]=yt,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=yt),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Z(B,yt){let z=m,nt=!1;if(B){z=f.get(yt),z===void 0&&(z=[],f.set(yt,z));const gt=B.textures;if(z.length!==gt.length||z[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,kt=gt.length;Mt<kt;Mt++)z[Mt]=n.COLOR_ATTACHMENT0+Mt;z.length=gt.length,nt=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,nt=!0);nt&&n.drawBuffers(z)}function ft(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const ht={[jn]:n.FUNC_ADD,[Ph]:n.FUNC_SUBTRACT,[Lh]:n.FUNC_REVERSE_SUBTRACT};ht[Dh]=n.MIN,ht[Ih]=n.MAX;const dt={[Uh]:n.ZERO,[Nh]:n.ONE,[Fh]:n.SRC_COLOR,[eo]:n.SRC_ALPHA,[Vh]:n.SRC_ALPHA_SATURATE,[zh]:n.DST_COLOR,[Bh]:n.DST_ALPHA,[Oh]:n.ONE_MINUS_SRC_COLOR,[no]:n.ONE_MINUS_SRC_ALPHA,[Hh]:n.ONE_MINUS_DST_COLOR,[kh]:n.ONE_MINUS_DST_ALPHA,[Gh]:n.CONSTANT_COLOR,[Wh]:n.ONE_MINUS_CONSTANT_COLOR,[Xh]:n.CONSTANT_ALPHA,[$h]:n.ONE_MINUS_CONSTANT_ALPHA};function L(B,yt,z,nt,gt,Mt,kt,Jt,Qt,qt){if(B===gn){_===!0&&(W(n.BLEND),_=!1);return}if(_===!1&&(G(n.BLEND),_=!0),B!==Ch){if(B!==p||qt!==T){if((h!==jn||y!==jn)&&(n.blendEquation(n.FUNC_ADD),h=jn,y=jn),qt)switch(B){case ti:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ks:n.blendFunc(n.ONE,n.ONE);break;case ba:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Aa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ti:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ks:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ba:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Aa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,v=null,O=null,C=null,w.set(0,0,0),D=0,p=B,T=qt}return}gt=gt||yt,Mt=Mt||z,kt=kt||nt,(yt!==h||gt!==y)&&(n.blendEquationSeparate(ht[yt],ht[gt]),h=yt,y=gt),(z!==b||nt!==v||Mt!==O||kt!==C)&&(n.blendFuncSeparate(dt[z],dt[nt],dt[Mt],dt[kt]),b=z,v=nt,O=Mt,C=kt),(Jt.equals(w)===!1||Qt!==D)&&(n.blendColor(Jt.r,Jt.g,Jt.b,Qt),w.copy(Jt),D=Qt),p=B,T=!1}function Bt(B,yt){B.side===fn?W(n.CULL_FACE):G(n.CULL_FACE);let z=B.side===Re;yt&&(z=!z),wt(z),B.blending===ti&&B.transparent===!1?L(gn):L(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const nt=B.stencilWrite;o.setTest(nt),nt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Wt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(B){M!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),M=B)}function Nt(B){B!==Ah?(G(n.CULL_FACE),B!==R&&(B===Ta?n.cullFace(n.BACK):B===wh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),R=B}function Rt(B){B!==j&&(I&&n.lineWidth(B),j=B)}function Wt(B,yt,z){B?(G(n.POLYGON_OFFSET_FILL),(Y!==yt||st!==z)&&(n.polygonOffset(yt,z),Y=yt,st=z)):W(n.POLYGON_OFFSET_FILL)}function Tt(B){B?G(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function S(B){B===void 0&&(B=n.TEXTURE0+X-1),$!==B&&(n.activeTexture(B),$=B)}function x(B,yt,z){z===void 0&&($===null?z=n.TEXTURE0+X-1:z=$);let nt=et[z];nt===void 0&&(nt={type:void 0,texture:void 0},et[z]=nt),(nt.type!==B||nt.texture!==yt)&&($!==z&&(n.activeTexture(z),$=z),n.bindTexture(B,yt||mt[B]),nt.type=B,nt.texture=yt)}function A(){const B=et[$];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(B){bt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),bt.copy(B))}function ut(B){Q.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Q.copy(B))}function Pt(B,yt){let z=c.get(yt);z===void 0&&(z=new WeakMap,c.set(yt,z));let nt=z.get(B);nt===void 0&&(nt=n.getUniformBlockIndex(yt,B.name),z.set(B,nt))}function Ot(B,yt){const nt=c.get(yt).get(B);l.get(yt)!==nt&&(n.uniformBlockBinding(yt,nt,B.__bindingPointIndex),l.set(yt,nt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,et={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,b=null,v=null,y=null,O=null,C=null,w=new Xt(0,0,0),D=0,T=!1,M=null,R=null,j=null,Y=null,st=null,bt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:G,disable:W,bindFramebuffer:it,drawBuffers:Z,useProgram:ft,setBlending:L,setMaterial:Bt,setFlipSided:wt,setCullFace:Nt,setLineWidth:Rt,setPolygonOffset:Wt,setScissorTest:Tt,activeTexture:S,bindTexture:x,unbindTexture:A,compressedTexImage2D:N,compressedTexImage3D:F,texImage2D:xt,texImage3D:Ct,updateUBOMapping:Pt,uniformBlockBinding:Ot,texStorage2D:St,texStorage3D:lt,texSubImage2D:k,texSubImage3D:rt,compressedTexSubImage2D:ot,compressedTexSubImage3D:at,scissor:_t,viewport:ut,reset:$t}}function Ml(n,t,e,i){const s=hg(i);switch(e){case xc:return n*t;case Mc:return n*t;case Sc:return n*t*2;case yc:return n*t/s.components*s.byteLength;case Ko:return n*t/s.components*s.byteLength;case Ec:return n*t*2/s.components*s.byteLength;case Zo:return n*t*2/s.components*s.byteLength;case vc:return n*t*3/s.components*s.byteLength;case Ye:return n*t*4/s.components*s.byteLength;case Jo:return n*t*4/s.components*s.byteLength;case ks:case zs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Vs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(n,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(n,8)*Math.max(t,8)/2;case vo:case Mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case To:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Co:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Po:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Do:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Gs:case Fo:case Oo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tc:case Bo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ko:case zo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(n){switch(n){case Sn:case mc:return{byteLength:1,components:1};case ji:case gc:case _n:return{byteLength:2,components:1};case qo:case jo:return{byteLength:2,components:4};case ni:case Yo:case pn:return{byteLength:4,components:1};case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ug(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):Js("canvas")}function _(S,x,A){let N=1;const F=Tt(S);if((F.width>A||F.height>A)&&(N=A/Math.max(F.width,F.height)),N<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(N*F.width),rt=Math.floor(N*F.height);d===void 0&&(d=g(k,rt));const ot=x?g(k,rt):d;return ot.width=k,ot.height=rt,ot.getContext("2d").drawImage(S,0,0,k,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+k+"x"+rt+")."),ot}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),S;return S}function p(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(S,x,A,N,F=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=x;if(x===n.RED&&(A===n.FLOAT&&(k=n.R32F),A===n.HALF_FLOAT&&(k=n.R16F),A===n.UNSIGNED_BYTE&&(k=n.R8)),x===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(k=n.R8UI),A===n.UNSIGNED_SHORT&&(k=n.R16UI),A===n.UNSIGNED_INT&&(k=n.R32UI),A===n.BYTE&&(k=n.R8I),A===n.SHORT&&(k=n.R16I),A===n.INT&&(k=n.R32I)),x===n.RG&&(A===n.FLOAT&&(k=n.RG32F),A===n.HALF_FLOAT&&(k=n.RG16F),A===n.UNSIGNED_BYTE&&(k=n.RG8)),x===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&(k=n.RG8UI),A===n.UNSIGNED_SHORT&&(k=n.RG16UI),A===n.UNSIGNED_INT&&(k=n.RG32UI),A===n.BYTE&&(k=n.RG8I),A===n.SHORT&&(k=n.RG16I),A===n.INT&&(k=n.RG32I)),x===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&(k=n.RGB8UI),A===n.UNSIGNED_SHORT&&(k=n.RGB16UI),A===n.UNSIGNED_INT&&(k=n.RGB32UI),A===n.BYTE&&(k=n.RGB8I),A===n.SHORT&&(k=n.RGB16I),A===n.INT&&(k=n.RGB32I)),x===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),A===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),A===n.UNSIGNED_INT&&(k=n.RGBA32UI),A===n.BYTE&&(k=n.RGBA8I),A===n.SHORT&&(k=n.RGBA16I),A===n.INT&&(k=n.RGBA32I)),x===n.RGB&&A===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),x===n.RGBA){const rt=F?sr:Yt.getTransfer(N);A===n.FLOAT&&(k=n.RGBA32F),A===n.HALF_FLOAT&&(k=n.RGBA16F),A===n.UNSIGNED_BYTE&&(k=rt===te?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function y(S,x){let A;return S?x===null||x===ni||x===Ri?A=n.DEPTH24_STENCIL8:x===pn?A=n.DEPTH32F_STENCIL8:x===ji&&(A=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ni||x===Ri?A=n.DEPTH_COMPONENT24:x===pn?A=n.DEPTH_COMPONENT32F:x===ji&&(A=n.DEPTH_COMPONENT16),A}function O(S,x){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ke&&S.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function C(S){const x=S.target;x.removeEventListener("dispose",C),D(x),x.isVideoTexture&&u.delete(x)}function w(S){const x=S.target;x.removeEventListener("dispose",w),M(x)}function D(S){const x=i.get(S);if(x.__webglInit===void 0)return;const A=S.source,N=f.get(A);if(N){const F=N[x.__cacheKey];F.usedTimes--,F.usedTimes===0&&T(S),Object.keys(N).length===0&&f.delete(A)}i.remove(S)}function T(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const A=S.source,N=f.get(A);delete N[x.__cacheKey],a.memory.textures--}function M(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(x.__webglFramebuffer[N]))for(let F=0;F<x.__webglFramebuffer[N].length;F++)n.deleteFramebuffer(x.__webglFramebuffer[N][F]);else n.deleteFramebuffer(x.__webglFramebuffer[N]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[N])}else{if(Array.isArray(x.__webglFramebuffer))for(let N=0;N<x.__webglFramebuffer.length;N++)n.deleteFramebuffer(x.__webglFramebuffer[N]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let N=0;N<x.__webglColorRenderbuffer.length;N++)x.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[N]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const A=S.textures;for(let N=0,F=A.length;N<F;N++){const k=i.get(A[N]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(A[N])}i.remove(S)}let R=0;function j(){R=0}function Y(){const S=R;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),R+=1,S}function st(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function X(S,x){const A=i.get(S);if(S.isVideoTexture&&Rt(S),S.isRenderTargetTexture===!1&&S.version>0&&A.__version!==S.version){const N=S.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(A,S,x);return}}e.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+x)}function I(S,x){const A=i.get(S);if(S.version>0&&A.__version!==S.version){Q(A,S,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+x)}function U(S,x){const A=i.get(S);if(S.version>0&&A.__version!==S.version){Q(A,S,x);return}e.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+x)}function P(S,x){const A=i.get(S);if(S.version>0&&A.__version!==S.version){K(A,S,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+x)}const $={[fo]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[po]:n.MIRRORED_REPEAT},et={[Ke]:n.NEAREST,[Kh]:n.NEAREST_MIPMAP_NEAREST,[hs]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[xr]:n.LINEAR_MIPMAP_NEAREST,[Jn]:n.LINEAR_MIPMAP_LINEAR},ct={[eu]:n.NEVER,[au]:n.ALWAYS,[nu]:n.LESS,[bc]:n.LEQUAL,[iu]:n.EQUAL,[ou]:n.GEQUAL,[su]:n.GREATER,[ru]:n.NOTEQUAL};function pt(S,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===xr||x.magFilter===hs||x.magFilter===Jn||x.minFilter===en||x.minFilter===xr||x.minFilter===hs||x.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,$[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,$[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,$[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,et[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,et[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ke||x.minFilter!==hs&&x.minFilter!==Jn||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const A=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function bt(S,x){let A=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",C));const N=x.source;let F=f.get(N);F===void 0&&(F={},f.set(N,F));const k=st(x);if(k!==S.__cacheKey){F[k]===void 0&&(F[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,A=!0),F[k].usedTimes++;const rt=F[S.__cacheKey];rt!==void 0&&(F[S.__cacheKey].usedTimes--,rt.usedTimes===0&&T(x)),S.__cacheKey=k,S.__webglTexture=F[k].texture}return A}function Q(S,x,A){let N=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(N=n.TEXTURE_3D);const F=bt(S,x),k=x.source;e.bindTexture(N,S.__webglTexture,n.TEXTURE0+A);const rt=i.get(k);if(k.version!==rt.__version||F===!0){e.activeTexture(n.TEXTURE0+A);const ot=Yt.getPrimaries(Yt.workingColorSpace),at=x.colorSpace===Fn?null:Yt.getPrimaries(x.colorSpace),St=x.colorSpace===Fn||ot===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let lt=_(x.image,!1,s.maxTextureSize);lt=Wt(x,lt);const xt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type);let _t=v(x.internalFormat,xt,Ct,x.colorSpace,x.isVideoTexture);pt(N,x);let ut;const Pt=x.mipmaps,Ot=x.isVideoTexture!==!0,$t=rt.__version===void 0||F===!0,B=k.dataReady,yt=O(x,lt);if(x.isDepthTexture)_t=y(x.format===Ci,x.type),$t&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,_t,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,_t,lt.width,lt.height,0,xt,Ct,null));else if(x.isDataTexture)if(Pt.length>0){Ot&&$t&&e.texStorage2D(n.TEXTURE_2D,yt,_t,Pt[0].width,Pt[0].height);for(let z=0,nt=Pt.length;z<nt;z++)ut=Pt[z],Ot?B&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,ut.width,ut.height,xt,Ct,ut.data):e.texImage2D(n.TEXTURE_2D,z,_t,ut.width,ut.height,0,xt,Ct,ut.data);x.generateMipmaps=!1}else Ot?($t&&e.texStorage2D(n.TEXTURE_2D,yt,_t,lt.width,lt.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,xt,Ct,lt.data)):e.texImage2D(n.TEXTURE_2D,0,_t,lt.width,lt.height,0,xt,Ct,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,_t,Pt[0].width,Pt[0].height,lt.depth);for(let z=0,nt=Pt.length;z<nt;z++)if(ut=Pt[z],x.format!==Ye)if(xt!==null)if(Ot){if(B)if(x.layerUpdates.size>0){const gt=Ml(ut.width,ut.height,x.format,x.type);for(const Mt of x.layerUpdates){const kt=ut.data.subarray(Mt*gt/ut.data.BYTES_PER_ELEMENT,(Mt+1)*gt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,Mt,ut.width,ut.height,1,xt,kt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,ut.width,ut.height,lt.depth,xt,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,_t,ut.width,ut.height,lt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,ut.width,ut.height,lt.depth,xt,Ct,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,z,_t,ut.width,ut.height,lt.depth,0,xt,Ct,ut.data)}else{Ot&&$t&&e.texStorage2D(n.TEXTURE_2D,yt,_t,Pt[0].width,Pt[0].height);for(let z=0,nt=Pt.length;z<nt;z++)ut=Pt[z],x.format!==Ye?xt!==null?Ot?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,ut.width,ut.height,xt,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,z,_t,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?B&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,ut.width,ut.height,xt,Ct,ut.data):e.texImage2D(n.TEXTURE_2D,z,_t,ut.width,ut.height,0,xt,Ct,ut.data)}else if(x.isDataArrayTexture)if(Ot){if($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,_t,lt.width,lt.height,lt.depth),B)if(x.layerUpdates.size>0){const z=Ml(lt.width,lt.height,x.format,x.type);for(const nt of x.layerUpdates){const gt=lt.data.subarray(nt*z/lt.data.BYTES_PER_ELEMENT,(nt+1)*z/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,lt.width,lt.height,1,xt,Ct,gt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,xt,Ct,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,lt.width,lt.height,lt.depth,0,xt,Ct,lt.data);else if(x.isData3DTexture)Ot?($t&&e.texStorage3D(n.TEXTURE_3D,yt,_t,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,xt,Ct,lt.data)):e.texImage3D(n.TEXTURE_3D,0,_t,lt.width,lt.height,lt.depth,0,xt,Ct,lt.data);else if(x.isFramebufferTexture){if($t)if(Ot)e.texStorage2D(n.TEXTURE_2D,yt,_t,lt.width,lt.height);else{let z=lt.width,nt=lt.height;for(let gt=0;gt<yt;gt++)e.texImage2D(n.TEXTURE_2D,gt,_t,z,nt,0,xt,Ct,null),z>>=1,nt>>=1}}else if(Pt.length>0){if(Ot&&$t){const z=Tt(Pt[0]);e.texStorage2D(n.TEXTURE_2D,yt,_t,z.width,z.height)}for(let z=0,nt=Pt.length;z<nt;z++)ut=Pt[z],Ot?B&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,xt,Ct,ut):e.texImage2D(n.TEXTURE_2D,z,_t,xt,Ct,ut);x.generateMipmaps=!1}else if(Ot){if($t){const z=Tt(lt);e.texStorage2D(n.TEXTURE_2D,yt,_t,z.width,z.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Ct,lt)}else e.texImage2D(n.TEXTURE_2D,0,_t,xt,Ct,lt);p(x)&&h(N),rt.__version=k.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function K(S,x,A){if(x.image.length!==6)return;const N=bt(S,x),F=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+A);const k=i.get(F);if(F.version!==k.__version||N===!0){e.activeTexture(n.TEXTURE0+A);const rt=Yt.getPrimaries(Yt.workingColorSpace),ot=x.colorSpace===Fn?null:Yt.getPrimaries(x.colorSpace),at=x.colorSpace===Fn||rt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const St=x.isCompressedTexture||x.image[0].isCompressedTexture,lt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let nt=0;nt<6;nt++)!St&&!lt?xt[nt]=_(x.image[nt],!0,s.maxCubemapSize):xt[nt]=lt?x.image[nt].image:x.image[nt],xt[nt]=Wt(x,xt[nt]);const Ct=xt[0],_t=r.convert(x.format,x.colorSpace),ut=r.convert(x.type),Pt=v(x.internalFormat,_t,ut,x.colorSpace),Ot=x.isVideoTexture!==!0,$t=k.__version===void 0||N===!0,B=F.dataReady;let yt=O(x,Ct);pt(n.TEXTURE_CUBE_MAP,x);let z;if(St){Ot&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Pt,Ct.width,Ct.height);for(let nt=0;nt<6;nt++){z=xt[nt].mipmaps;for(let gt=0;gt<z.length;gt++){const Mt=z[gt];x.format!==Ye?_t!==null?Ot?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,Pt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,Mt.width,Mt.height,_t,ut,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,Pt,Mt.width,Mt.height,0,_t,ut,Mt.data)}}}else{if(z=x.mipmaps,Ot&&$t){z.length>0&&yt++;const nt=Tt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Pt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(lt){Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,xt[nt].width,xt[nt].height,_t,ut,xt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Pt,xt[nt].width,xt[nt].height,0,_t,ut,xt[nt].data);for(let gt=0;gt<z.length;gt++){const kt=z[gt].image[nt].image;Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,kt.width,kt.height,_t,ut,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,Pt,kt.width,kt.height,0,_t,ut,kt.data)}}else{Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,_t,ut,xt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Pt,_t,ut,xt[nt]);for(let gt=0;gt<z.length;gt++){const Mt=z[gt];Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,_t,ut,Mt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,Pt,_t,ut,Mt.image[nt])}}}p(x)&&h(n.TEXTURE_CUBE_MAP),k.__version=F.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function mt(S,x,A,N,F,k){const rt=r.convert(A.format,A.colorSpace),ot=r.convert(A.type),at=v(A.internalFormat,rt,ot,A.colorSpace),St=i.get(x),lt=i.get(A);if(lt.__renderTarget=x,!St.__hasExternalTextures){const xt=Math.max(1,x.width>>k),Ct=Math.max(1,x.height>>k);F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?e.texImage3D(F,k,at,xt,Ct,x.depth,0,rt,ot,null):e.texImage2D(F,k,at,xt,Ct,0,rt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),Nt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,F,lt.__webglTexture,0,wt(x)):(F===n.TEXTURE_2D||F>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,F,lt.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(S,x,A){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){const N=x.depthTexture,F=N&&N.isDepthTexture?N.type:null,k=y(x.stencilBuffer,F),rt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=wt(x);Nt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,k,x.width,x.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,k,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,k,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,S)}else{const N=x.textures;for(let F=0;F<N.length;F++){const k=N[F],rt=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),at=v(k.internalFormat,rt,ot,k.colorSpace),St=wt(x);A&&Nt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,at,x.width,x.height):Nt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,at,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,at,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function W(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=i.get(x.depthTexture);N.__renderTarget=x,(!N.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const F=N.__webglTexture,k=wt(x);if(x.depthTexture.format===yi)Nt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(x.depthTexture.format===Ci)Nt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function it(S){const x=i.get(S),A=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const N=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),N){const F=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,N.removeEventListener("dispose",F)};N.addEventListener("dispose",F),x.__depthDisposeCallback=F}x.__boundDepthTexture=N}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");W(x.__webglFramebuffer,S)}else if(A){x.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[N]),x.__webglDepthbuffer[N]===void 0)x.__webglDepthbuffer[N]=n.createRenderbuffer(),G(x.__webglDepthbuffer[N],S,!1);else{const F=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),G(x.__webglDepthbuffer,S,!1);else{const N=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,F)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(S,x,A){const N=i.get(S);x!==void 0&&mt(N.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&it(S)}function ft(S){const x=S.texture,A=i.get(S),N=i.get(x);S.addEventListener("dispose",w);const F=S.textures,k=S.isWebGLCubeRenderTarget===!0,rt=F.length>1;if(rt||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=x.version,a.memory.textures++),k){A.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer[ot]=[];for(let at=0;at<x.mipmaps.length;at++)A.__webglFramebuffer[ot][at]=n.createFramebuffer()}else A.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){A.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)A.__webglFramebuffer[ot]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(rt)for(let ot=0,at=F.length;ot<at;ot++){const St=i.get(F[ot]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&Nt(S)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let ot=0;ot<F.length;ot++){const at=F[ot];A.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[ot]);const St=r.convert(at.format,at.colorSpace),lt=r.convert(at.type),xt=v(at.internalFormat,St,lt,at.colorSpace,S.isXRRenderTarget===!0),Ct=wt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,xt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,A.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),G(A.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),pt(n.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let at=0;at<x.mipmaps.length;at++)mt(A.__webglFramebuffer[ot][at],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,at);else mt(A.__webglFramebuffer[ot],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(x)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let ot=0,at=F.length;ot<at;ot++){const St=F[ot],lt=i.get(St);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),pt(n.TEXTURE_2D,St),mt(A.__webglFramebuffer,S,St,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(St)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ot=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,N.__webglTexture),pt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let at=0;at<x.mipmaps.length;at++)mt(A.__webglFramebuffer[at],S,x,n.COLOR_ATTACHMENT0,ot,at);else mt(A.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,ot,0);p(x)&&h(ot),e.unbindTexture()}S.depthBuffer&&it(S)}function ht(S){const x=S.textures;for(let A=0,N=x.length;A<N;A++){const F=x[A];if(p(F)){const k=b(S),rt=i.get(F).__webglTexture;e.bindTexture(k,rt),h(k),e.unbindTexture()}}}const dt=[],L=[];function Bt(S){if(S.samples>0){if(Nt(S)===!1){const x=S.textures,A=S.width,N=S.height;let F=n.COLOR_BUFFER_BIT;const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=i.get(S),ot=x.length>1;if(ot)for(let at=0;at<x.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<x.length;at++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(F|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(F|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);const St=i.get(x[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,St,0)}n.blitFramebuffer(0,0,A,N,0,0,A,N,F,n.NEAREST),l===!0&&(dt.length=0,L.length=0,dt.push(n.COLOR_ATTACHMENT0+at),S.depthBuffer&&S.resolveDepthBuffer===!1&&(dt.push(k),L.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let at=0;at<x.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);const St=i.get(x[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,St,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function wt(S){return Math.min(s.maxSamples,S.samples)}function Nt(S){const x=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(S){const x=a.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function Wt(S,x){const A=S.colorSpace,N=S.format,F=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||A!==Ii&&A!==Fn&&(Yt.getTransfer(A)===te?(N!==Ye||F!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),x}function Tt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.setTexture2D=X,this.setTexture2DArray=I,this.setTexture3D=U,this.setTextureCube=P,this.rebindTextures=Z,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Nt}function dg(n,t){function e(i,s=Fn){let r;const a=Yt.getTransfer(s);if(i===Sn)return n.UNSIGNED_BYTE;if(i===qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_c)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mc)return n.BYTE;if(i===gc)return n.SHORT;if(i===ji)return n.UNSIGNED_SHORT;if(i===Yo)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===_n)return n.HALF_FLOAT;if(i===xc)return n.ALPHA;if(i===vc)return n.RGB;if(i===Ye)return n.RGBA;if(i===Mc)return n.LUMINANCE;if(i===Sc)return n.LUMINANCE_ALPHA;if(i===yi)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===yc)return n.RED;if(i===Ko)return n.RED_INTEGER;if(i===Ec)return n.RG;if(i===Zo)return n.RG_INTEGER;if(i===Jo)return n.RGBA_INTEGER;if(i===ks||i===zs||i===Hs||i===Vs)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===_o||i===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vo||i===Mo||i===So)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vo||i===Mo)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===So)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yo||i===Eo||i===To||i===bo||i===Ao||i===wo||i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Io||i===Uo||i===No)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===To)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ao)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ro)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Co)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Po)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Do)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Io)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===No)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gs||i===Fo||i===Oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Gs)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===Bo||i===ko||i===zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ri?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class fg extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ls extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pg={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new xe({vertexShader:mg,fragmentShader:gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nn(new ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xg extends ii{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const _=new _g,p=e.getContextAttributes();let h=null,b=null;const v=[],y=[],O=new Ft;let C=null;const w=new Xe;w.viewport=new ue;const D=new Xe;D.viewport=new ue;const T=[w,D],M=new fg;let R=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=v[Q];return K===void 0&&(K=new $r,v[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=v[Q];return K===void 0&&(K=new $r,v[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=v[Q];return K===void 0&&(K=new $r,v[Q]=K),K.getHandSpace()};function Y(Q){const K=y.indexOf(Q.inputSource);if(K===-1)return;const mt=v[K];mt!==void 0&&(mt.update(Q.inputSource,Q.frame,c||a),mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function st(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",X);for(let Q=0;Q<v.length;Q++){const K=y[Q];K!==null&&(y[Q]=null,v[Q].disconnect(K))}R=null,j=null,_.reset(),t.setRenderTarget(h),m=null,f=null,d=null,s=null,b=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",st),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Ze(m.framebufferWidth,m.framebufferHeight,{format:Ye,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,mt=null,G=null;p.depth&&(G=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?Ci:yi,mt=p.stencil?Ri:ni);const W={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(W),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ze(f.textureWidth,f.textureHeight,{format:Ye,type:Sn,depthTexture:new Oc(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),bt.setContext(s),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Q){for(let K=0;K<Q.removed.length;K++){const mt=Q.removed[K],G=y.indexOf(mt);G>=0&&(y[G]=null,v[G].disconnect(mt))}for(let K=0;K<Q.added.length;K++){const mt=Q.added[K];let G=y.indexOf(mt);if(G===-1){for(let it=0;it<v.length;it++)if(it>=y.length){y.push(mt),G=it;break}else if(y[it]===null){y[it]=mt,G=it;break}if(G===-1)break}const W=v[G];W&&W.connect(mt)}}const I=new q,U=new q;function P(Q,K,mt){I.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(mt.matrixWorld);const G=I.distanceTo(U),W=K.projectionMatrix.elements,it=mt.projectionMatrix.elements,Z=W[14]/(W[10]-1),ft=W[14]/(W[10]+1),ht=(W[9]+1)/W[5],dt=(W[9]-1)/W[5],L=(W[8]-1)/W[0],Bt=(it[8]+1)/it[0],wt=Z*L,Nt=Z*Bt,Rt=G/(-L+Bt),Wt=Rt*-L;if(K.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Wt),Q.translateZ(Rt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),W[10]===-1)Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Tt=Z+Rt,S=ft+Rt,x=wt-Wt,A=Nt+(G-Wt),N=ht*ft/S*Tt,F=dt*ft/S*Tt;Q.projectionMatrix.makePerspective(x,A,N,F,Tt,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function $(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let K=Q.near,mt=Q.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),M.near=D.near=w.near=K,M.far=D.far=w.far=mt,(R!==M.near||j!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,j=M.far),w.layers.mask=Q.layers.mask|2,D.layers.mask=Q.layers.mask|4,M.layers.mask=w.layers.mask|D.layers.mask;const G=Q.parent,W=M.cameras;$(M,G);for(let it=0;it<W.length;it++)$(W[it],G);W.length===2?P(M,w,D):M.projectionMatrix.copy(w.projectionMatrix),et(Q,M,G)};function et(Q,K,mt){mt===null?Q.matrix.copy(K.matrixWorld):(Q.matrix.copy(mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(K.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ho*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ct=null;function pt(Q,K){if(u=K.getViewerPose(c||a),g=K,u!==null){const mt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let G=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,G=!0);for(let it=0;it<mt.length;it++){const Z=mt[it];let ft=null;if(m!==null)ft=m.getViewport(Z);else{const dt=d.getViewSubImage(f,Z);ft=dt.viewport,it===0&&(t.setRenderTargetTextures(b,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(b))}let ht=T[it];ht===void 0&&(ht=new Xe,ht.layers.enable(it),ht.viewport=new ue,T[it]=ht),ht.matrix.fromArray(Z.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Z.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ft.x,ft.y,ft.width,ft.height),it===0&&(M.matrix.copy(ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),G===!0&&M.cameras.push(ht)}const W=s.enabledFeatures;if(W&&W.includes("depth-sensing")){const it=d.getDepthInformation(mt[0]);it&&it.isValid&&it.texture&&_.init(t,it,s.renderState)}}for(let mt=0;mt<v.length;mt++){const G=y[mt],W=v[mt];G!==null&&W!==void 0&&W.update(G,K,c||a)}ct&&ct(Q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const bt=new Fc;bt.setAnimationLoop(pt),this.setAnimationLoop=function(Q){ct=Q},this.dispose=function(){}}}const Yn=new yn,vg=new ce;function Mg(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Dc(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,b,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,v):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Re&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Re&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=t.get(h),v=b.envMap,y=b.envMapRotation;v&&(p.envMap.value=v,Yn.copy(y),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),p.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Yn)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=v*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Re&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const b=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sg(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const y=v.program;i.uniformBlockBinding(b,y)}function c(b,v){let y=s[b.id];y===void 0&&(g(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",p));const O=v.program;i.updateUBOMapping(b,O);const C=t.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function u(b){const v=d();b.__bindingPointIndex=v;const y=n.createBuffer(),O=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,O,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=s[b.id],y=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,w=y.length;C<w;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,M=D.length;T<M;T++){const R=D[T];if(m(R,C,T,O)===!0){const j=R.__offset,Y=Array.isArray(R.value)?R.value:[R.value];let st=0;for(let X=0;X<Y.length;X++){const I=Y[X],U=_(I);typeof I=="number"||typeof I=="boolean"?(R.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,j+st,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=0,R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=0,R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=0):(I.toArray(R.__data,st),st+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,v,y,O){const C=b.value,w=v+"_"+y;if(O[w]===void 0)return typeof C=="number"||typeof C=="boolean"?O[w]=C:O[w]=C.clone(),!0;{const D=O[w];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return O[w]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(b){const v=b.uniforms;let y=0;const O=16;for(let w=0,D=v.length;w<D;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,R=T.length;M<R;M++){const j=T[M],Y=Array.isArray(j.value)?j.value:[j.value];for(let st=0,X=Y.length;st<X;st++){const I=Y[st],U=_(I),P=y%O,$=P%U.boundary,et=P+$;y+=$,et!==0&&O-et<U.storage&&(y+=O-et),j.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=U.storage}}}const C=y%O;return C>0&&(y+=O-C),b.__size=y,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function h(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class ss{constructor(t={}){const{canvas:e=hu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=On,this.toneMappingExposure=1;const y=this;let O=!1,C=0,w=0,D=null,T=-1,M=null;const R=new ue,j=new ue;let Y=null;const st=new Xt(0);let X=0,I=e.width,U=e.height,P=1,$=null,et=null;const ct=new ue(0,0,I,U),pt=new ue(0,0,I,U);let bt=!1;const Q=new Nc;let K=!1,mt=!1;const G=new ce,W=new ce,it=new q,Z=new ue,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function dt(){return D===null?P:1}let L=i;function Bt(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$o}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),L===null){const H="webgl2";if(L=Bt(H,E),L===null)throw Bt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let wt,Nt,Rt,Wt,Tt,S,x,A,N,F,k,rt,ot,at,St,lt,xt,Ct,_t,ut,Pt,Ot,$t,B;function yt(){wt=new wp(L),wt.init(),Ot=new dg(L,wt),Nt=new Sp(L,wt,t,Ot),Rt=new cg(L,wt),Nt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),Wt=new Pp(L),Tt=new qm,S=new ug(L,wt,Rt,Tt,Nt,Ot,Wt),x=new Ep(y),A=new Ap(y),N=new Fu(L),$t=new vp(L,N),F=new Rp(L,N,Wt,$t),k=new Dp(L,F,N,Wt),_t=new Lp(L,Nt,S),lt=new yp(Tt),rt=new Ym(y,x,A,wt,Nt,$t,lt),ot=new Mg(y,Tt),at=new Km,St=new ng(wt),Ct=new xp(y,x,A,Rt,k,m,l),xt=new ag(y,k,Nt),B=new Sg(L,Wt,Nt,Rt),ut=new Mp(L,wt,Wt),Pt=new Cp(L,wt,Wt),Wt.programs=rt.programs,y.capabilities=Nt,y.extensions=wt,y.properties=Tt,y.renderLists=at,y.shadowMap=xt,y.state=Rt,y.info=Wt}yt();const z=new xg(y,L);this.xr=z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(E){E!==void 0&&(P=E,this.setSize(I,U,!1))},this.getSize=function(E){return E.set(I,U)},this.setSize=function(E,H,J=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,U=H,e.width=Math.floor(E*P),e.height=Math.floor(H*P),J===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(I*P,U*P).floor()},this.setDrawingBufferSize=function(E,H,J){I=E,U=H,P=J,e.width=Math.floor(E*J),e.height=Math.floor(H*J),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,H,J,tt){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,H,J,tt),Rt.viewport(R.copy(ct).multiplyScalar(P).round())},this.getScissor=function(E){return E.copy(pt)},this.setScissor=function(E,H,J,tt){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,H,J,tt),Rt.scissor(j.copy(pt).multiplyScalar(P).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(E){Rt.setScissorTest(bt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(E=!0,H=!0,J=!0){let tt=0;if(E){let V=!1;if(D!==null){const vt=D.texture.format;V=vt===Jo||vt===Zo||vt===Ko}if(V){const vt=D.texture.type,At=vt===Sn||vt===ni||vt===ji||vt===Ri||vt===qo||vt===jo,Lt=Ct.getClearColor(),Dt=Ct.getClearAlpha(),zt=Lt.r,Ht=Lt.g,It=Lt.b;At?(g[0]=zt,g[1]=Ht,g[2]=It,g[3]=Dt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=zt,_[1]=Ht,_[2]=It,_[3]=Dt,L.clearBufferiv(L.COLOR,0,_))}else tt|=L.COLOR_BUFFER_BIT}H&&(tt|=L.DEPTH_BUFFER_BIT),J&&(tt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),at.dispose(),St.dispose(),Tt.dispose(),x.dispose(),A.dispose(),k.dispose(),$t.dispose(),B.dispose(),rt.dispose(),z.dispose(),z.removeEventListener("sessionstart",ga),z.removeEventListener("sessionend",_a),Hn.stop()};function nt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=Wt.autoReset,H=xt.enabled,J=xt.autoUpdate,tt=xt.needsUpdate,V=xt.type;yt(),Wt.autoReset=E,xt.enabled=H,xt.autoUpdate=J,xt.needsUpdate=tt,xt.type=V}function Mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function kt(E){const H=E.target;H.removeEventListener("dispose",kt),Jt(H)}function Jt(E){Qt(E),Tt.remove(E)}function Qt(E){const H=Tt.get(E).programs;H!==void 0&&(H.forEach(function(J){rt.releaseProgram(J)}),E.isShaderMaterial&&rt.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,J,tt,V,vt){H===null&&(H=ft);const At=V.isMesh&&V.matrixWorld.determinant()<0,Lt=Eh(E,H,J,tt,V);Rt.setMaterial(tt,At);let Dt=J.index,zt=1;if(tt.wireframe===!0){if(Dt=F.getWireframeAttribute(J),Dt===void 0)return;zt=2}const Ht=J.drawRange,It=J.attributes.position;let jt=Ht.start*zt,ie=(Ht.start+Ht.count)*zt;vt!==null&&(jt=Math.max(jt,vt.start*zt),ie=Math.min(ie,(vt.start+vt.count)*zt)),Dt!==null?(jt=Math.max(jt,0),ie=Math.min(ie,Dt.count)):It!=null&&(jt=Math.max(jt,0),ie=Math.min(ie,It.count));const se=ie-jt;if(se<0||se===1/0)return;$t.setup(V,tt,Lt,J,Dt);let be,Kt=ut;if(Dt!==null&&(be=N.get(Dt),Kt=Pt,Kt.setIndex(be)),V.isMesh)tt.wireframe===!0?(Rt.setLineWidth(tt.wireframeLinewidth*dt()),Kt.setMode(L.LINES)):Kt.setMode(L.TRIANGLES);else if(V.isLine){let Ut=tt.linewidth;Ut===void 0&&(Ut=1),Rt.setLineWidth(Ut*dt()),V.isLineSegments?Kt.setMode(L.LINES):V.isLineLoop?Kt.setMode(L.LINE_LOOP):Kt.setMode(L.LINE_STRIP)}else V.isPoints?Kt.setMode(L.POINTS):V.isSprite&&Kt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Kt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ut=V._multiDrawStarts,on=V._multiDrawCounts,Zt=V._multiDrawCount,ze=Dt?N.get(Dt).bytesPerElement:1,si=Tt.get(tt).currentProgram.getUniforms();for(let Le=0;Le<Zt;Le++)si.setValue(L,"_gl_DrawID",Le),Kt.render(Ut[Le]/ze,on[Le])}else if(V.isInstancedMesh)Kt.renderInstances(jt,se,V.count);else if(J.isInstancedBufferGeometry){const Ut=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,on=Math.min(J.instanceCount,Ut);Kt.renderInstances(jt,se,on)}else Kt.render(jt,se)};function qt(E,H,J){E.transparent===!0&&E.side===fn&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,cs(E,H,J),E.side=Bn,E.needsUpdate=!0,cs(E,H,J),E.side=fn):cs(E,H,J)}this.compile=function(E,H,J=null){J===null&&(J=E),h=St.get(J),h.init(H),v.push(h),J.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),E!==J&&E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights();const tt=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const vt=V.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){const Lt=vt[At];qt(Lt,J,V),tt.add(Lt)}else qt(vt,J,V),tt.add(vt)}),v.pop(),h=null,tt},this.compileAsync=function(E,H,J=null){const tt=this.compile(E,H,J);return new Promise(V=>{function vt(){if(tt.forEach(function(At){Tt.get(At).currentProgram.isReady()&&tt.delete(At)}),tt.size===0){V(E);return}setTimeout(vt,10)}wt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ke=null;function rn(E){ke&&ke(E)}function ga(){Hn.stop()}function _a(){Hn.start()}const Hn=new Fc;Hn.setAnimationLoop(rn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(E){ke=E,z.setAnimationLoop(E),E===null?Hn.stop():Hn.start()},z.addEventListener("sessionstart",ga),z.addEventListener("sessionend",_a),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(H),H=z.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,H,D),h=St.get(E,v.length),h.init(H),v.push(h),W.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(W),mt=this.localClippingEnabled,K=lt.init(this.clippingPlanes,mt),p=at.get(E,b.length),p.init(),b.push(p),z.enabled===!0&&z.isPresenting===!0){const vt=y.xr.getDepthSensingMesh();vt!==null&&_r(vt,H,-1/0,y.sortObjects)}_r(E,H,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort($,et),ht=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ht&&Ct.addToRenderList(p,E),this.info.render.frame++,K===!0&&lt.beginShadows();const J=h.state.shadowsArray;xt.render(J,E,H),K===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=p.opaque,V=p.transmissive;if(h.setupLights(),H.isArrayCamera){const vt=H.cameras;if(V.length>0)for(let At=0,Lt=vt.length;At<Lt;At++){const Dt=vt[At];va(tt,V,E,Dt)}ht&&Ct.render(E);for(let At=0,Lt=vt.length;At<Lt;At++){const Dt=vt[At];xa(p,E,Dt,Dt.viewport)}}else V.length>0&&va(tt,V,E,H),ht&&Ct.render(E),xa(p,E,H);D!==null&&(S.updateMultisampleRenderTarget(D),S.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,H),$t.resetDefaultState(),T=-1,M=null,v.pop(),v.length>0?(h=v[v.length-1],K===!0&&lt.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function _r(E,H,J,tt){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){tt&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(W);const At=k.update(E),Lt=E.material;Lt.visible&&p.push(E,At,Lt,J,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){const At=k.update(E),Lt=E.material;if(tt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Z.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Z.copy(At.boundingSphere.center)),Z.applyMatrix4(E.matrixWorld).applyMatrix4(W)),Array.isArray(Lt)){const Dt=At.groups;for(let zt=0,Ht=Dt.length;zt<Ht;zt++){const It=Dt[zt],jt=Lt[It.materialIndex];jt&&jt.visible&&p.push(E,At,jt,J,Z.z,It)}}else Lt.visible&&p.push(E,At,Lt,J,Z.z,null)}}const vt=E.children;for(let At=0,Lt=vt.length;At<Lt;At++)_r(vt[At],H,J,tt)}function xa(E,H,J,tt){const V=E.opaque,vt=E.transmissive,At=E.transparent;h.setupLightsView(J),K===!0&&lt.setGlobalState(y.clippingPlanes,J),tt&&Rt.viewport(R.copy(tt)),V.length>0&&ls(V,H,J),vt.length>0&&ls(vt,H,J),At.length>0&&ls(At,H,J),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function va(E,H,J,tt){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[tt.id]===void 0&&(h.state.transmissionRenderTarget[tt.id]=new Ze(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?_n:Sn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const vt=h.state.transmissionRenderTarget[tt.id],At=tt.viewport||R;vt.setSize(At.z,At.w);const Lt=y.getRenderTarget();y.setRenderTarget(vt),y.getClearColor(st),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),ht&&Ct.render(J);const Dt=y.toneMapping;y.toneMapping=On;const zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),h.setupLightsView(tt),K===!0&&lt.setGlobalState(y.clippingPlanes,tt),ls(E,J,tt),S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let It=0,jt=H.length;It<jt;It++){const ie=H[It],se=ie.object,be=ie.geometry,Kt=ie.material,Ut=ie.group;if(Kt.side===fn&&se.layers.test(tt.layers)){const on=Kt.side;Kt.side=Re,Kt.needsUpdate=!0,Ma(se,J,tt,be,Kt,Ut),Kt.side=on,Kt.needsUpdate=!0,Ht=!0}}Ht===!0&&(S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt))}y.setRenderTarget(Lt),y.setClearColor(st,X),zt!==void 0&&(tt.viewport=zt),y.toneMapping=Dt}function ls(E,H,J){const tt=H.isScene===!0?H.overrideMaterial:null;for(let V=0,vt=E.length;V<vt;V++){const At=E[V],Lt=At.object,Dt=At.geometry,zt=tt===null?At.material:tt,Ht=At.group;Lt.layers.test(J.layers)&&Ma(Lt,H,J,Dt,zt,Ht)}}function Ma(E,H,J,tt,V,vt){E.onBeforeRender(y,H,J,tt,V,vt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(y,H,J,tt,E,vt),V.transparent===!0&&V.side===fn&&V.forceSinglePass===!1?(V.side=Re,V.needsUpdate=!0,y.renderBufferDirect(J,H,tt,V,E,vt),V.side=Bn,V.needsUpdate=!0,y.renderBufferDirect(J,H,tt,V,E,vt),V.side=fn):y.renderBufferDirect(J,H,tt,V,E,vt),E.onAfterRender(y,H,J,tt,V,vt)}function cs(E,H,J){H.isScene!==!0&&(H=ft);const tt=Tt.get(E),V=h.state.lights,vt=h.state.shadowsArray,At=V.state.version,Lt=rt.getParameters(E,V.state,vt,H,J),Dt=rt.getProgramCacheKey(Lt);let zt=tt.programs;tt.environment=E.isMeshStandardMaterial?H.environment:null,tt.fog=H.fog,tt.envMap=(E.isMeshStandardMaterial?A:x).get(E.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",kt),zt=new Map,tt.programs=zt);let Ht=zt.get(Dt);if(Ht!==void 0){if(tt.currentProgram===Ht&&tt.lightsStateVersion===At)return ya(E,Lt),Ht}else Lt.uniforms=rt.getUniforms(E),E.onBeforeCompile(Lt,y),Ht=rt.acquireProgram(Lt,Dt),zt.set(Dt,Ht),tt.uniforms=Lt.uniforms;const It=tt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=lt.uniform),ya(E,Lt),tt.needsLights=bh(E),tt.lightsStateVersion=At,tt.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMap.value=V.state.directionalShadowMap,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotShadowMap.value=V.state.spotShadowMap,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMap.value=V.state.pointShadowMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),tt.currentProgram=Ht,tt.uniformsList=null,Ht}function Sa(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function ya(E,H){const J=Tt.get(E);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Eh(E,H,J,tt,V){H.isScene!==!0&&(H=ft),S.resetTextureUnits();const vt=H.fog,At=tt.isMeshStandardMaterial?H.environment:null,Lt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ii,Dt=(tt.isMeshStandardMaterial?A:x).get(tt.envMap||At),zt=tt.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ht=!!J.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),It=!!J.morphAttributes.position,jt=!!J.morphAttributes.normal,ie=!!J.morphAttributes.color;let se=On;tt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(se=y.toneMapping);const be=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Kt=be!==void 0?be.length:0,Ut=Tt.get(tt),on=h.state.lights;if(K===!0&&(mt===!0||E!==M)){const Ne=E===M&&tt.id===T;lt.setState(tt,E,Ne)}let Zt=!1;tt.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==on.state.version||Ut.outputColorSpace!==Lt||V.isBatchedMesh&&Ut.batching===!1||!V.isBatchedMesh&&Ut.batching===!0||V.isBatchedMesh&&Ut.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ut.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ut.instancing===!1||!V.isInstancedMesh&&Ut.instancing===!0||V.isSkinnedMesh&&Ut.skinning===!1||!V.isSkinnedMesh&&Ut.skinning===!0||V.isInstancedMesh&&Ut.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ut.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ut.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ut.instancingMorph===!1&&V.morphTexture!==null||Ut.envMap!==Dt||tt.fog===!0&&Ut.fog!==vt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==lt.numPlanes||Ut.numIntersection!==lt.numIntersection)||Ut.vertexAlphas!==zt||Ut.vertexTangents!==Ht||Ut.morphTargets!==It||Ut.morphNormals!==jt||Ut.morphColors!==ie||Ut.toneMapping!==se||Ut.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,Ut.__version=tt.version);let ze=Ut.currentProgram;Zt===!0&&(ze=cs(tt,H,V));let si=!1,Le=!1,Bi=!1;const re=ze.getUniforms(),Qe=Ut.uniforms;if(Rt.useProgram(ze.program)&&(si=!0,Le=!0,Bi=!0),tt.id!==T&&(T=tt.id,Le=!0),si||M!==E){Rt.buffers.depth.getReversed()?(G.copy(E.projectionMatrix),du(G),fu(G),re.setValue(L,"projectionMatrix",G)):re.setValue(L,"projectionMatrix",E.projectionMatrix),re.setValue(L,"viewMatrix",E.matrixWorldInverse);const An=re.map.cameraPosition;An!==void 0&&An.setValue(L,it.setFromMatrixPosition(E.matrixWorld)),Nt.logarithmicDepthBuffer&&re.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&re.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Le=!0,Bi=!0)}if(V.isSkinnedMesh){re.setOptional(L,V,"bindMatrix"),re.setOptional(L,V,"bindMatrixInverse");const Ne=V.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),re.setValue(L,"boneTexture",Ne.boneTexture,S))}V.isBatchedMesh&&(re.setOptional(L,V,"batchingTexture"),re.setValue(L,"batchingTexture",V._matricesTexture,S),re.setOptional(L,V,"batchingIdTexture"),re.setValue(L,"batchingIdTexture",V._indirectTexture,S),re.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&re.setValue(L,"batchingColorTexture",V._colorsTexture,S));const ki=J.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&_t.update(V,J,ze),(Le||Ut.receiveShadow!==V.receiveShadow)&&(Ut.receiveShadow=V.receiveShadow,re.setValue(L,"receiveShadow",V.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Qe.envMap.value=Dt,Qe.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&H.environment!==null&&(Qe.envMapIntensity.value=H.environmentIntensity),Le&&(re.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&Th(Qe,Bi),vt&&tt.fog===!0&&ot.refreshFogUniforms(Qe,vt),ot.refreshMaterialUniforms(Qe,tt,P,U,h.state.transmissionRenderTarget[E.id]),Xs.upload(L,Sa(Ut),Qe,S)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Xs.upload(L,Sa(Ut),Qe,S),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&re.setValue(L,"center",V.center),re.setValue(L,"modelViewMatrix",V.modelViewMatrix),re.setValue(L,"normalMatrix",V.normalMatrix),re.setValue(L,"modelMatrix",V.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Ne=tt.uniformsGroups;for(let An=0,wn=Ne.length;An<wn;An++){const Ea=Ne[An];B.update(Ea,ze),B.bind(Ea,ze)}}return ze}function Th(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function bh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,H,J){Tt.get(E.texture).__webglTexture=H,Tt.get(E.depthTexture).__webglTexture=J;const tt=Tt.get(E);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=J===void 0,tt.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const J=Tt.get(E);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,J=0){D=E,C=H,w=J;let tt=!0,V=null,vt=!1,At=!1;if(E){const Dt=Tt.get(E);if(Dt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(L.FRAMEBUFFER,null),tt=!1;else if(Dt.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(Dt.__hasExternalTextures)S.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const It=E.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&Tt.has(It)&&(E.width!==It.image.width||E.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(At=!0);const Ht=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[H])?V=Ht[H][J]:V=Ht[H],vt=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?V=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?V=Ht[J]:V=Ht,R.copy(E.viewport),j.copy(E.scissor),Y=E.scissorTest}else R.copy(ct).multiplyScalar(P).floor(),j.copy(pt).multiplyScalar(P).floor(),Y=bt;if(Rt.bindFramebuffer(L.FRAMEBUFFER,V)&&tt&&Rt.drawBuffers(E,V),Rt.viewport(R),Rt.scissor(j),Rt.setScissorTest(Y),vt){const Dt=Tt.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,J)}else if(At){const Dt=Tt.get(E.texture),zt=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,J||0,zt)}T=-1},this.readRenderTargetPixels=function(E,H,J,tt,V,vt,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){Rt.bindFramebuffer(L.FRAMEBUFFER,Lt);try{const Dt=E.texture,zt=Dt.format,Ht=Dt.type;if(!Nt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-tt&&J>=0&&J<=E.height-V&&L.readPixels(H,J,tt,V,Ot.convert(zt),Ot.convert(Ht),vt)}finally{const Dt=D!==null?Tt.get(D).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,H,J,tt,V,vt,At){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){const Dt=E.texture,zt=Dt.format,Ht=Dt.type;if(!Nt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-tt&&J>=0&&J<=E.height-V){Rt.bindFramebuffer(L.FRAMEBUFFER,Lt);const It=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(H,J,tt,V,Ot.convert(zt),Ot.convert(Ht),0);const jt=D!==null?Tt.get(D).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,jt);const ie=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await uu(L,ie,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(It),L.deleteSync(ie),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,J=0){E.isTexture!==!0&&($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const tt=Math.pow(2,-J),V=Math.floor(E.image.width*tt),vt=Math.floor(E.image.height*tt),At=H!==null?H.x:0,Lt=H!==null?H.y:0;S.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,At,Lt,V,vt),Rt.unbindTexture()},this.copyTextureToTexture=function(E,H,J=null,tt=null,V=0){E.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,E=arguments[1],H=arguments[2],V=arguments[3]||0,J=null);let vt,At,Lt,Dt,zt,Ht,It,jt,ie;const se=E.isCompressedTexture?E.mipmaps[V]:E.image;J!==null?(vt=J.max.x-J.min.x,At=J.max.y-J.min.y,Lt=J.isBox3?J.max.z-J.min.z:1,Dt=J.min.x,zt=J.min.y,Ht=J.isBox3?J.min.z:0):(vt=se.width,At=se.height,Lt=se.depth||1,Dt=0,zt=0,Ht=0),tt!==null?(It=tt.x,jt=tt.y,ie=tt.z):(It=0,jt=0,ie=0);const be=Ot.convert(H.format),Kt=Ot.convert(H.type);let Ut;H.isData3DTexture?(S.setTexture3D(H,0),Ut=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(S.setTexture2DArray(H,0),Ut=L.TEXTURE_2D_ARRAY):(S.setTexture2D(H,0),Ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const on=L.getParameter(L.UNPACK_ROW_LENGTH),Zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ze=L.getParameter(L.UNPACK_SKIP_PIXELS),si=L.getParameter(L.UNPACK_SKIP_ROWS),Le=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);const Bi=E.isDataArrayTexture||E.isData3DTexture,re=H.isDataArrayTexture||H.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Qe=Tt.get(E),ki=Tt.get(H),Ne=Tt.get(Qe.__renderTarget),An=Tt.get(ki.__renderTarget);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let wn=0;wn<Lt;wn++)Bi&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.get(E).__webglTexture,V,Ht+wn),E.isDepthTexture?(re&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.get(H).__webglTexture,V,ie+wn),L.blitFramebuffer(Dt,zt,vt,At,It,jt,vt,At,L.DEPTH_BUFFER_BIT,L.NEAREST)):re?L.copyTexSubImage3D(Ut,V,It,jt,ie+wn,Dt,zt,vt,At):L.copyTexSubImage2D(Ut,V,It,jt,ie+wn,Dt,zt,vt,At);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else re?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ut,V,It,jt,ie,vt,At,Lt,be,Kt,se.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,V,It,jt,ie,vt,At,Lt,be,se.data):L.texSubImage3D(Ut,V,It,jt,ie,vt,At,Lt,be,Kt,se):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,It,jt,vt,At,be,Kt,se.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,It,jt,se.width,se.height,be,se.data):L.texSubImage2D(L.TEXTURE_2D,V,It,jt,vt,At,be,Kt,se);L.pixelStorei(L.UNPACK_ROW_LENGTH,on),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,si),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),V===0&&H.generateMipmaps&&L.generateMipmap(Ut),Rt.unbindTexture()},this.copyTextureToTexture3D=function(E,H,J=null,tt=null,V=0){return E.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,tt=arguments[1]||null,E=arguments[2],H=arguments[3],V=arguments[4]||0),$i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,J,tt,V)},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),Rt.unbindTexture()},this.resetState=function(){C=0,w=0,D=null,Rt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class rs extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yg extends ns{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sl=new ce,Go=new or,Ds=new rr,Is=new q;class Vc extends Pe{constructor(t=new Je,e=new yg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;Sl.copy(s).invert(),Go.copy(t.ray).applyMatrix4(Sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Is.fromBufferAttribute(d,p),yl(Is,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)Is.fromBufferAttribute(d,g),yl(Is,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yl(n,t,e,i,s,r,a){const o=Go.distanceSqToPoint(n);if(o<e){const l=new q;Go.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Eg extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Tg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=El(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=El();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function El(){return performance.now()}const Tl=new ce;class bg{constructor(t,e,i=0,s=1/0){this.ray=new or(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tl),this}intersectObject(t,e=!0,i=[]){return Wo(t,this,i,e),i.sort(bl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Wo(t[s],this,i,e);return i.sort(bl),i}}function bl(n,t){return n.distance-t.distance}function Wo(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Wo(r[a],t,e,!0)}}class Al{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ag extends ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);const wl={type:"change"},na={type:"start"},Gc={type:"end"},Us=new or,Rl=new Nn,wg=Math.cos(70*cu.DEG2RAD),fe=new q,we=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yr=1e-6;class Wc extends Ag{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Ue,this._lastTargetPosition=new q,this._quat=new Ue().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Al,this._sphericalDelta=new Al,this._scale=1,this._panOffset=new q,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new q,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cg.bind(this),this._onPointerDown=Rg.bind(this),this._onPointerUp=Pg.bind(this),this._onContextMenu=Og.bind(this),this._onMouseWheel=Ig.bind(this),this._onKeyDown=Ug.bind(this),this._onTouchStart=Ng.bind(this),this._onTouchMove=Fg.bind(this),this._onMouseDown=Lg.bind(this),this._onMouseMove=Dg.bind(this),this._interceptControlDown=Bg.bind(this),this._interceptControlUp=kg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wl),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=we:i>Math.PI&&(i-=we),s<-Math.PI?s+=we:s>Math.PI&&(s-=we),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=fe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Us.origin.copy(this.object.position),Us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Us.direction))<wg?this.object.lookAt(this.target):(Rl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Us.intersectPlane(Rl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yr||this._lastTargetPosition.distanceToSquared(this.target)>Yr?(this.dispatchEvent(wl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?we/60*this.autoRotateSpeed*t:we/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fe.copy(s).sub(this.target);let r=fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(we*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-we*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(we*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-we*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Rg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Cg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Pg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gc),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Lg(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ee.DOLLY;break;case Si.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}break;case Si.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(na)}function Dg(n){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ig(n){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(n.preventDefault(),this.dispatchEvent(na),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Gc))}function Ug(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ng(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ee.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ee.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(na)}function Fg(n){switch(this._trackPointer(n),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ee.NONE}}function Og(n){this.enabled!==!1&&n.preventDefault()}function Bg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zg=`
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
`,Hg=`
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
`;class Vg{points;material;geometry;constructor(t,e={}){this.geometry=new Je,this.geometry.setAttribute("position",new le(t,3)),this.geometry.setAttribute("emphasis",new le(new Float32Array(t.length/3),1)),this.geometry.setAttribute("picked",new le(new Float32Array(t.length/3),1)),this.material=new xe({uniforms:{uSizeNear:{value:e.sizeNear??7},uSizeFar:{value:e.sizeFar??3},uInkNear:{value:e.inkNear??.95},uInkFar:{value:e.inkFar??.22},uRadius:{value:e.radius??1},uFocusDepth:{value:4},uPixelRatio:{value:e.pixelRatio??1},uEmphasisGain:{value:e.emphasisGain??.85},uFlash:{value:0},uFlashColor:{value:new Xt(e.flashColor??16764778)},uPickedColor:{value:new Xt(e.pickedColor??7332024)}},vertexShader:zg,fragmentShader:Hg,transparent:!0,depthTest:!0,depthWrite:!0}),this.points=new Vc(this.geometry,this.material),this.points.frustumCulled=!1}setPositions(t){this.geometry.setAttribute("position",new le(t,3)),this.geometry.attributes.position.needsUpdate=!0}updatePositions(t){const e=this.geometry.getAttribute("position");e.array.set(t),e.needsUpdate=!0}updateEmphasis(t){const e=this.geometry.getAttribute("emphasis");e.array.set(t),e.needsUpdate=!0}setFlash(t){this.material.uniforms.uFlash.value=t}updatePicked(t){const e=this.geometry.getAttribute("picked");e.array.set(t),e.needsUpdate=!0}sync(t,e,i){this.material.uniforms.uFocusDepth.value=t.position.distanceTo(e),this.material.uniforms.uPixelRatio.value=i}dispose(){this.geometry.dispose(),this.material.dispose()}}function Gg(n){let t=n>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Wg(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}const En=n=>Gg(typeof n=="string"?Wg(n):n),ia=(n,t,e)=>t+(e-t)*n();function he(n,t){const e=t.length,i=t[0]?.length??0;for(const s of t)if(s.length!==i)throw new Error(`glyph "${n}": ragged row (${s.length} != ${i})`);return{name:n,w:i,h:e,rows:t}}const Qs=[he("ARROW_UP",["..#..",".###.","##.##","..#..","..#..","..#..","..#.."]),he("ARROW_DOWN",["..#..","..#..","..#..","..#..","##.##",".###.","..#.."]),he("DIAMOND",["..#..",".#.#.","#...#","#...#","#...#",".#.#.","..#.."]),he("CROSS_X",["#...#",".#.#.","..#..","..#..","..#..",".#.#.","#...#"]),he("SQUARE",["#####","#...#","#...#","#...#","#...#","#...#","#####"]),he("PLUS",["..#..","..#..","..#..","#####","..#..","..#..","..#.."]),he("TRIANGLE",["..#..","..#..",".#.#.",".#.#.","#...#","#...#","#####"]),he("ESS",[".####","#....","#....",".###.","....#","....#","####."]),he("ZED",["#####","....#","...#.","..#..",".#...","#....","#####"]),he("H_BAR",["#...#","#...#","#...#","#####","#...#","#...#","#...#"]),he("VEE",["#...#","#...#",".#.#.",".#.#.",".#.#.","..#..","..#.."]),he("TEE",["#####","..#..","..#..","..#..","..#..","..#..","..#.."]),he("ELL",["#....","#....","#....","#....","#....","#....","#####"]),he("KAY",["#...#","#..#.","#.#..","##...","#.#..","#..#.","#...#"]),he("STAR",["..#..","#.#.#",".###.","#####",".###.","#.#.#","..#.."])];he("B0",["##","..","..","##"]),he("B1",["#.","#.","#.","#."]),he("B2",[".#",".#",".#",".#"]),he("B3",["##","##","..",".."]),he("B4",["..","..","##","##"]),he("B5",["#.",".#","#.",".#"]);function Xg(n){const t=[];for(const e of n.rows)for(const i of e)t.push(i==="#");return t}function Xc(n){return Xg(n).reduce((t,e)=>t+(e?1:0),0)}function $g(n){const t=[];for(let e=0;e<n.h;e++){const i=n.rows[e];for(let s=0;s<n.w;s++)i[s]==="#"&&t.push({col:s,row:e})}return t}function $c(n){return $g(n).map(({col:t,row:e})=>({x:t-(n.w-1)/2,y:(n.h-1)/2-e}))}const Cl=(n,t,e)=>t>=0&&e>=0&&t<n.w&&e<n.h&&n.rows[e][t]==="#";function Yg(n){const t=[];for(let e=-1;e<=n.h;e++)for(let i=-1;i<=n.w;i++){if(Cl(n,i,e))continue;let s=!1;for(let r=-1;r<=1&&!s;r++)for(let a=-1;a<=1;a++)if((r||a)&&Cl(n,i+a,e+r)){s=!0;break}s&&t.push({x:i-(n.w-1)/2,y:(n.h-1)/2-e})}return t}const Pl=(n,t)=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]],tr=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Mn=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],Tn=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Xo=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],qg=n=>Math.sqrt(Tn(n,n));function bn(n){const t=qg(n);return t>1e-12?Mn(n,1/t):[0,0,1]}const jg=(n,t)=>Math.acos(Math.max(-1,Math.min(1,Tn(bn(n),bn(t))))),Zi=(n,t)=>jg(n,t)*180/Math.PI;function Yc(n){const t=bn(n),e=Math.abs(t[2])<.9?[0,0,1]:[1,0,0],i=bn(Xo(t,e)),s=Xo(t,i);return[i,s]}function os(n){const t=2*n()-1,e=2*Math.PI*n(),i=Math.sqrt(Math.max(0,1-t*t));return[i*Math.cos(e),i*Math.sin(e),t]}function Kg(n,t){return Mn(os(n),t*Math.cbrt(n()))}function er(n,t,e){const i=bn(t),s=Math.cos(e),r=Math.sin(e),a=Xo(i,n),o=Tn(i,n)*(1-s);return[n[0]*s+a[0]*r+i[0]*o,n[1]*s+a[1]*r+i[1]*o,n[2]*s+a[2]*r+i[2]*o]}const sa={1:{M:60,K:12,H:0,L:1,thetaLockDeg:6,tRun:60,tSweep:null,drift:!1},2:{M:90,K:14,H:2,L:1,thetaLockDeg:5,tRun:60,tSweep:12,drift:!1},3:{M:120,K:16,H:4,L:2,thetaLockDeg:4,tRun:75,tSweep:10,drift:!1},4:{M:150,K:18,H:6,L:2,thetaLockDeg:3.5,tRun:75,tSweep:8,drift:!0},5:{M:200,K:20,H:8,L:3,thetaLockDeg:3,tRun:90,tSweep:7,drift:!0}},_e={glyphScale:.15,depthMin:.3,depthMax:1,depthScale:.875,noiseRadius:.9,defaultViewDir:[0,0,1],minAxisFromViewDeg:15,minAxisSeparationDeg:35,checkViewpoints:400,checkSkipDeg:30,coherenceSigmaCells:1,coherenceThreshold:.7,maxBoardRerolls:24};function Zg(n,t){const e=t.slice();for(let i=e.length-1;i>0;i--){const s=Math.floor(n()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}function Jg(n,t,e){const i=Qs.filter(l=>!e.has(l.name)),r=(i.length?i:Qs).map(l=>({g:l,d:Math.abs(Xc(l)-t)})),a=Math.min(...r.map(l=>l.d)),o=r.filter(l=>l.d===a).map(l=>l.g);return o[Math.floor(n()*o.length)]}function Qg(n,t){for(let e=0;e<1e3;e++){const i=os(n);if(!(Zi(i,_e.defaultViewDir)<_e.minAxisFromViewDeg)&&!t.some(s=>Zi(i,s)<_e.minAxisSeparationDeg))return i}throw new Error("pickAxis: could not satisfy separation constraints")}function Ll(n,t,e,i,s){const r=(n()<.5?-1:1)*ia(n,_e.depthMin,_e.depthMax)*_e.depthScale;return Pl(Pl(Mn(e,t.x*_e.glyphScale),Mn(i,t.y*_e.glyphScale)),Mn(s,r))}function ra(n,t,e){const i=$c(t),s=i.length;if(s===0||n.length<s)return 0;const[r,a]=Yc(e),o=_e.glyphScale,l=[],c=[],u=[],d=[];let f=0,m=0,g=0,_=0;for(let D=0;D<s;D++){const T=i[D],M=n[D].pos,R=T.x*o,j=T.y*o,Y=Tn(M,r),st=Tn(M,a);l.push(R),c.push(j),u.push(Y),d.push(st),f+=R,m+=j,g+=Y,_+=st}f/=s,m/=s,g/=s,_/=s;let p=0,h=0;for(let D=0;D<s;D++){const T=l[D]-f,M=c[D]-m,R=u[D]-g,j=d[D]-_;p+=T*R+M*j,h+=T*j-M*R}const b=Math.atan2(h,p),v=Math.cos(b),y=Math.sin(b);let O=0;for(let D=0;D<s;D++){const T=l[D]-f,M=c[D]-m,R=v*T-y*M,j=y*T+v*M,Y=R-(u[D]-g),st=j-(d[D]-_);O+=Y*Y+st*st}const C=Math.sqrt(O/s),w=_e.glyphScale*_e.coherenceSigmaCells;return Math.exp(-((C/w)**2))}function t0(n,t,e,i){let s=0;for(let r=0;r<_e.checkViewpoints;r++){const a=os(i);if(Zi(a,e)<_e.checkSkipDeg)continue;const o=ra(n,t,a);o>s&&(s=o)}return s}function qc(n,t){const e=sa[n],i=En(`${t}:constellation:${n}`);for(let s=1;s<=_e.maxBoardRerolls;s++){const r=[],a=[],o=[],l=new Set,c=[];for(let g=0;g<e.L;g++){const _=Qg(i,c);c.push(_);const p=Jg(i,e.K,l);l.add(p.name),a.push(p);const[h,b]=Yc(_);for(const y of $c(p))o.push({pos:Ll(i,y,h,b,_),pop:"SIGNAL",lock:g});const v=Zg(i,Yg(p));for(let y=0;y<Math.min(e.H,v.length);y++)o.push({pos:Ll(i,v[y],h,b,_),pop:"TRIP",lock:g});r.push({index:g,axis:_,glyph:p.name,signalCount:Xc(p)})}const u=e.M-o.length;if(u<0)continue;let d=0,f=!0;for(let g=0;g<e.L;g++){const _=o.filter(h=>h.pop==="SIGNAL"&&h.lock===g),p=t0(_,a[g],c[g],En(`${t}:check:${n}:${g}`));if(p>d&&(d=p),p>=_e.coherenceThreshold){f=!1;break}}if(!f)continue;const m=o.slice();for(let g=0;g<u;g++)m.push({pos:Kg(i,_e.noiseRadius),pop:"NOISE",lock:-1});return{seed:t,difficulty:n,params:e,points:m,locks:r,genStats:{boardAttempts:s,noiseRerolls:0,maxOffAxisCoherence:d}}}throw new Error(`generateBoard: failed to produce a unique board after ${_e.maxBoardRerolls} attempts (seed=${t}, D${n})`)}const e0=1,n0=.1;class jc{board;tRun;tSweep;drift;maxTrips=3;phase="PLAN";timeLeft;trips=0;sweepT=0;sweepCount=0;extracted;constructor(t){this.board=t,this.tRun=t.params.tRun,this.tSweep=t.params.tSweep,this.drift=t.params.drift,this.timeLeft=this.tRun,this.extracted=t.locks.map(()=>new Set)}lockDone(t){return this.extracted[t].size>=this.board.locks[t].signalCount}allDone(){return this.board.locks.every((t,e)=>this.lockDone(e))}extractedCount(t){return this.extracted[t].size}get over(){return this.phase==="WON"||this.phase==="LOST_SOFT"||this.phase==="LOST_CRIT"}select(t,e){if(this.over||e<0)return"ignored";const i=this.board.points[t];if(!i)return"ignored";if(this.phase==="PLAN"&&(this.phase="RUN"),i.pop==="SIGNAL"&&i.lock===e){const s=this.extracted[e];return s.has(t)?"ignored":(s.add(t),this.lockDone(e)?this.allDone()?(this.phase="WON","won"):"lockDone":"extract")}return i.pop==="TRIP"?(this.trips+=1,this.timeLeft=Math.max(0,this.timeLeft-n0*this.tRun),this.trips>=this.maxTrips?this.phase="LOST_CRIT":this.timeLeft<=0&&(this.phase="LOST_SOFT"),"trip"):(this.timeLeft=Math.max(0,this.timeLeft-e0),this.timeLeft<=0&&(this.phase="LOST_SOFT"),"dud")}tick(t,e,i){if(this.phase!=="RUN")return{wrapped:!1};if(this.timeLeft-=t,this.timeLeft<=0)return this.timeLeft=0,this.phase="LOST_SOFT",{wrapped:!1};if(!this.tSweep)return{wrapped:!1};if(this.sweepT+=t/this.tSweep,this.sweepT<1)return{wrapped:!1};if(this.sweepT-=1,this.sweepCount+=1,i>=0&&this.extracted[i].size>0&&!this.lockDone(i)&&!e){const r=this.extracted[i],a=r.values().next().value;a!==void 0&&r.delete(a)}return{wrapped:!0}}result(){const t=this.board.locks.filter((i,s)=>this.lockDone(s)).map(i=>i.glyph),e=Math.max(0,this.timeLeft)+(this.maxTrips-this.trips);return{outcome:this.phase,margin:e,timeUsed:this.tRun-this.timeLeft,trips:this.trips,keys:t}}}const i0=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)},s0=n=>{const t=Qs.find(e=>e.name===n);if(!t)throw new Error(`glyph ${n} not found`);return t},Ns=30,r0=[93,202,165],Dl=[224,176,112],o0=[208,96,90],Il=(n,t,e)=>`rgb(${Math.round(n[0]+(t[0]-n[0])*e)},${Math.round(n[1]+(t[1]-n[1])*e)},${Math.round(n[2]+(t[2]-n[2])*e)})`,Ul=n=>n>.5?Il(r0,Dl,(1-n)/.5):Il(Dl,o0,Math.max(0,(.5-n)/.5));function a0(n,t){const e=new ss({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(526349,1);const i=new rs,s=new q(0,0,0),r=1.12,a=.7,o=new zn(-1,1,1,-1,.01,100);o.position.set(0,0,4),o.lookAt(s);const l=new Wc(o,n);l.enableDamping=!0,l.enablePan=!1,l.target.copy(s);const c=new bg;c.params.Points.threshold=.1;const u="http://www.w3.org/2000/svg",d=(A,N)=>{const F=document.createElement(A);return F.style.cssText=N,document.body.appendChild(F),F},f="ui-monospace,SFMono-Regular,Menlo,monospace",m=document.createElementNS(u,"svg");m.setAttribute("viewBox","0 0 220 130"),m.style.cssText="position:fixed;left:50%;bottom:14px;transform:translateX(-50%);width:220px;height:130px;pointer-events:none";const g=[];for(let A=0;A<Ns;A++){const N=Math.PI*(1-A/(Ns-1)),F=document.createElementNS(u,"circle");F.setAttribute("cx",String(110+96*Math.cos(N))),F.setAttribute("cy",String(120-96*Math.sin(N))),F.setAttribute("r","2.6"),F.setAttribute("fill","#2a2a34"),m.appendChild(F),g.push(F)}const _=document.createElementNS(u,"text");_.setAttribute("x","110"),_.setAttribute("y","112"),_.setAttribute("text-anchor","middle"),_.setAttribute("fill","#e8c06a"),_.setAttribute("style",`font:11px ${f};letter-spacing:.15em;opacity:0`),m.appendChild(_),t.skill>=1&&document.body.appendChild(m);const p=document.createElementNS(u,"svg");p.setAttribute("viewBox","0 0 48 48"),p.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:46px;height:46px;pointer-events:none";const h=document.createElementNS(u,"circle");h.setAttribute("cx","24"),h.setAttribute("cy","24"),h.setAttribute("r","21"),h.setAttribute("fill","none"),h.setAttribute("stroke",Ul(1)),h.setAttribute("stroke-width","1.6"),p.appendChild(h),document.body.appendChild(p);const b=d("div",`position:fixed;top:10px;right:12px;display:flex;gap:6px;font:13px ${f};color:#5a5a64;pointer-events:none`),v=[0,1,2].map(()=>{const A=document.createElement("span");return A.textContent="✕",b.appendChild(A),A}),y=d("div",`position:fixed;left:50%;top:30px;transform:translateX(-50%);font:11px ${f};color:#8fd0b6;pointer-events:none;opacity:0`),O=d("div",`position:fixed;left:12px;bottom:12px;font:11px ${f};color:#55555f;pointer-events:none`),C=d("div","position:fixed;width:16px;height:16px;border:1px solid #6fe0b8;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .1s"),w=d("div","position:fixed;inset:0;pointer-events:none;box-shadow:inset 0 0 120px 20px #d0403a;opacity:0;transition:opacity .3s"),D=d("div",`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${f};text-align:center;pointer-events:none`);let T,M,R,j,Y,st,X,I=null,U=[],P=5,$,et=En("drift"),ct=!1,pt=!1,bt=-1e9;function Q(A,N){T=qc(A,N),$=new jc(T),et=En(`${N}:drift`),P=sa[A].thetaLockDeg;const F=T.points.length;M=new Float32Array(F*3),T.points.forEach((k,rt)=>{M[rt*3]=k.pos[0],M[rt*3+1]=k.pos[1],M[rt*3+2]=k.pos[2]}),R=M.slice(),j=new Float32Array(F),Y=new Float32Array(F),st=new Uint8Array(F),X=new Float32Array(F),U=T.locks.map(k=>{const rt=[],ot=[],at=new Map;return T.points.forEach((St,lt)=>{St.pop==="SIGNAL"&&St.lock===k.index&&(rt.push(lt),ot.push(St),st[lt]=1,at.set(lt,tr(St.pos,Mn(k.axis,Tn(St.pos,k.axis)))))}),{axis:k.axis,axisV3:new q(...k.axis),glyph:s0(k.glyph),signalIdx:rt,signalPts:ot,flat:at,coherence:0}}),I&&(i.remove(I.points),I.dispose()),I=new Vg(R,{radius:1,sizeNear:6,sizeFar:2.5,inkNear:.9,inkFar:.14,emphasisGain:.85,pixelRatio:e.getPixelRatio()}),i.add(I.points),O.textContent=`D${A} · ${N} · ${T.locks.length} lock(s) · drag to orbit · click to extract · R`,D.style.display="none",ct=!1,pt=!1}Q(t.difficulty,t.seed);function K(){const A=window.innerWidth,N=window.innerHeight;e.setSize(A,N);const F=A/N;o.left=-r*F,o.right=r*F,o.top=r,o.bottom=-r,o.updateProjectionMatrix()}window.addEventListener("resize",K),K();function mt(A){const N=U[A];if(!N)return;const F=2*Math.PI/180*et(),k=os(et);N.axis=bn(er(N.axis,k,F)),N.axisV3.set(...N.axis),T.points.forEach((rt,ot)=>{rt.lock===A&&(rt.pos=er(rt.pos,k,F),M[ot*3]=rt.pos[0],M[ot*3+1]=rt.pos[1],M[ot*3+2]=rt.pos[2])}),N.flat.clear();for(const rt of N.signalIdx){const ot=T.points[rt].pos;N.flat.set(rt,tr(ot,Mn(N.axis,Tn(ot,N.axis))))}}let G=0,W=0,it=-1,Z=-1;const ft=(A,N)=>{const F=n.getBoundingClientRect();return[(A-F.left)/F.width*2-1,-((N-F.top)/F.height)*2+1]};function ht(A,N){if(!I)return-1;const[F,k]=ft(A,N);c.setFromCamera(new Ft(F,k),o);const rt=c.intersectObject(I.points,!1);if(!rt.length)return-1;rt.sort((ot,at)=>(ot.distanceToRay??9)-(at.distanceToRay??9));for(const ot of rt){const at=ot.index;if(at==null)continue;const St=T.points[at];if(St&&St.pop==="SIGNAL"&&St.lock===dt&&!$.extracted[dt]?.has(at))return at}return rt[0].index??-1}let dt=-1;n.addEventListener("pointerdown",A=>{G=A.clientX,W=A.clientY}),n.addEventListener("pointermove",A=>{it=A.clientX,Z=A.clientY}),n.addEventListener("pointerup",A=>{if(Math.hypot(A.clientX-G,A.clientY-W)>5||!ct||$.over||dt<0)return;const F=ht(A.clientX,A.clientY);if(F<0)return;const k=$.select(F,dt);k==="extract"||k==="lockDone"||k==="won"?X[F]=performance.now()/1e3:k==="trip"&&(w.style.opacity="0.9",setTimeout(()=>w.style.opacity="0",60))});const L=new q,Bt=new Ue,wt=new Ue,Nt=new Ue,Rt=new q;function Wt(){const A=$.result();let N="#8fd0b6",F="",k="";$.phase==="WON"?(N="#8fd0b6",F="◆ EXTRACTED",k=`keys: ${A.keys.join(" · ")}
margin ${A.margin.toFixed(0)} · ${A.trips} strike(s)`):$.phase==="LOST_CRIT"?(N="#d0605a",F="⚠ ALARM",k="intrusion traced — three tripwires"):(N="#e0b070",F="⌛ SIGNAL LOST",k="the run timed out"),D.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${N}">${F}</div><div style="font-size:12px;color:#9a9aa6;white-space:pre-line">${k}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,D.style.display="flex"}let Tt=performance.now(),S=0;function x(){const A=performance.now(),N=A/1e3,F=Math.min(.05,(A-Tt)/1e3);Tt=A,l.update();const k=o.position,rt=bn([k.x-s.x,k.y-s.y,k.z-s.z]);let ot=0;dt=-1;let at=180;U.forEach((_t,ut)=>{_t.coherence=ra(_t.signalPts,_t.glyph,rt),_t.coherence>ot&&(ot=_t.coherence,dt=ut);const Pt=Zi(rt,_t.axis);Pt<at&&(at=Pt)}),R.set(M),j.fill(0);let St=0;for(const _t of U){const ut=i0(.12,.9,_t.coherence);if(ut>St&&(St=ut),!(ut<=.001))for(const Pt of _t.signalIdx){const Ot=_t.flat.get(Pt),$t=M[Pt*3],B=M[Pt*3+1],yt=M[Pt*3+2];R[Pt*3]=$t+(Ot[0]-$t)*ut,R[Pt*3+1]=B+(Ot[1]-B)*ut,R[Pt*3+2]=yt+(Ot[2]-yt)*ut,j[Pt]=ut}}if(St>.001){const _t=.85*St;for(let ut=0;ut<j.length;ut++)st[ut]||(j[ut]=-_t)}const lt=ct&&ot>.6,{wrapped:xt}=$.tick(F,lt,dt);if(xt&&$.drift&&dt>=0&&mt(dt),$.phase==="RUN"&&$.tSweep){const _t=-1+2*$.sweepT,ut=.14;for(let Pt=0;Pt<j.length;Pt++){const Ot=Math.abs(R[Pt*3+1]-_t);Ot<ut&&(j[Pt]=j[Pt]+(1-Ot/ut)*.7)}}for(let _t=0;_t<X.length;_t++){const ut=X[_t];if(ut>0){const Pt=1-(N-ut)/.3;Pt>0?j[_t]=j[_t]+Pt*.9:X[_t]=0}}if(ct&&!$.over&&it>=0){const _t=ht(it,Z),ut=n.getBoundingClientRect();_t>=0?(j[_t]=j[_t]+.5,Rt.set(R[_t*3],R[_t*3+1],R[_t*3+2]).project(o),C.style.left=`${ut.left+(Rt.x*.5+.5)*ut.width}px`,C.style.top=`${ut.top+(-Rt.y*.5+.5)*ut.height}px`,C.style.borderColor=T.points[_t]?.pop==="TRIP"?"#d0605a":"#6fe0b8"):(C.style.left=`${it}px`,C.style.top=`${Z}px`,C.style.borderColor="#44444c"),C.style.opacity="1"}else C.style.opacity="0";Y.fill(0);for(const _t of $.extracted)for(const ut of _t)Y[ut]=1;if(I.updatePositions(R),I.updateEmphasis(j),I.updatePicked(Y),I.sync(o,l.target,e.getPixelRatio()),!ct&&at<P&&!$.over?ct=!0:ct&&at>P*1.6&&(ct=!1),ct&&dt>=0){const _t=o.position.distanceTo(s);L.set(rt[0],rt[1],rt[2]),wt.setFromUnitVectors(L,U[dt].axisV3),Bt.copy(Nt).slerp(wt,.16),L.applyQuaternion(Bt),o.position.copy(s).addScaledVector(L,_t)}if(ct&&!pt&&(bt=N),pt=ct,I.setFlash(Math.max(0,1-(N-bt)/a)),t.skill>=1){const _t=Math.round(ot*Ns);for(let ut=0;ut<Ns;ut++)g[ut].setAttribute("fill",ut<_t?ct?"#e8c06a":"#5dcaa5":"#2a2a34");ct&&dt>=0?(_.textContent=`⟡ ${U[dt].glyph.name}`,_.style.opacity="1"):_.style.opacity="0"}const Ct=Math.max(0,$.timeLeft/$.tRun);h.setAttribute("r",String(3+18*Ct)),h.setAttribute("stroke",Ul(Ct)),v.forEach((_t,ut)=>_t.style.color=ut<$.trips?"#d0605a":"#3a3a44"),ct&&dt>=0&&!$.over?(y.textContent=`EXTRACT ${$.extractedCount(dt)} / ${T.locks[dt].signalCount}`,y.style.opacity="1"):y.style.opacity="0",$.over&&D.style.display==="none"&&Wt(),e.render(i,o),S=requestAnimationFrame(x)}return x(),{regenerate(A,N){Q(A,N)},alignLock(A){const N=U[A];if(!N)return;const F=o.position.distanceTo(s);o.position.copy(s).addScaledVector(N.axisV3,F),l.update()},debugExtract(A,N){const F=U[A];if(!F)return;let k=0;for(const rt of F.signalIdx){if(k++>=N)break;$.select(rt,A)}},debugSolve(){for(let A=0;A<U.length;A++)for(const N of U[A].signalIdx)$.select(N,A)},debugTime(A){$.phase="RUN",$.timeLeft=Math.max(0,A)*$.tRun},dispose(){cancelAnimationFrame(S),window.removeEventListener("resize",K),l.dispose(),I?.dispose(),[m,p,b,y,O,C,w,D].forEach(A=>A.remove()),e.dispose()}}}const l0=`
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
`,c0=`
  precision mediump float;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float a = (1.0 - smoothstep(0.44, 0.5, d)) * vAlpha;
    if (a <= 0.0) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;class cr{points;material;geo;pos;col;sz;al;cap;n=0;constructor(t,e={}){this.cap=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.sz=new Float32Array(t),this.al=new Float32Array(t),this.geo=new Je,this.geo.setAttribute("position",new le(this.pos,3)),this.geo.setAttribute("color",new le(this.col,3)),this.geo.setAttribute("size",new le(this.sz,1)),this.geo.setAttribute("alpha",new le(this.al,1)),this.material=new xe({uniforms:{uPixelRatio:{value:1}},vertexShader:l0,fragmentShader:c0,transparent:!0,depthTest:!1,depthWrite:!1,blending:e.additive?Ks:ti}),this.points=new Vc(this.geo,this.material),this.points.frustumCulled=!1}begin(){this.n=0}grow(){const t=this.cap*2,e=(i,s)=>{const r=new Float32Array(t*s);return r.set(i),r};this.pos=e(this.pos,3),this.col=e(this.col,3),this.sz=e(this.sz,1),this.al=e(this.al,1),this.cap=t,this.geo.setAttribute("position",new le(this.pos,3)),this.geo.setAttribute("color",new le(this.col,3)),this.geo.setAttribute("size",new le(this.sz,1)),this.geo.setAttribute("alpha",new le(this.al,1))}dot(t,e,i,s,r,a,o=1){this.n>=this.cap&&this.grow();const l=this.n++;this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=0,this.col[l*3]=i,this.col[l*3+1]=s,this.col[l*3+2]=r,this.sz[l]=a,this.al[l]=o}commit(t){this.material.uniforms.uPixelRatio.value=t,["position","color","size","alpha"].forEach(e=>{this.geo.getAttribute(e).needsUpdate=!0}),this.geo.setDrawRange(0,this.n)}dispose(){this.geo.dispose(),this.material.dispose()}}const $s=12,Nl=7,Fl=4,h0=16;function u0(n){return n<=2?"naive":n<=5?"greedy":n<=7?"greedy+":"optimal-ish"}function d0(n){const t=u0(n.defender),e=t==="optimal-ish"?1:0;return{tMatch:h0,pPulses:Fl+n.attacker+e,ePulses:Fl+n.defender,traps:Math.min(6,1+Math.round(n.defender*.6)),repeats:n.defender>=6?2:n.defender>=3?1:0,ai:t}}const Ji=[{attacker:5,defender:2},{attacker:5,defender:3},{attacker:4,defender:4},{attacker:4,defender:6},{attacker:3,defender:7},{attacker:2,defender:8},{attacker:2,defender:9}];function oa(n){let t=0;for(const e of n.outcomes)e.kind==="CLAIM"?t+=1:e.kind==="REPEAT"?t+=2:e.kind==="INVERT"&&(t+=.5);return t}function We(n){return n.terminals.reduce((t,e)=>t+oa(e),0)}function qr(n){const t=new Set;for(const e of n.terminals)for(const i of e.outcomes)i.kind!=="DEAD"&&t.add(i.cell);return t}const Li=(n,t)=>t==="left"?n.left:n.right;function Ol(n,t,e,i,s,r,a){const o=new Array($s).fill("NEUTRAL"),l=[];let c=0;const u=(g,_,p,h)=>{const b=_.filter(v=>v.t>=0&&v.t<=a).sort((v,y)=>v.t-y.t).slice(0,p);for(const v of b){const y=g.terminals[v.terminal];if(y)for(const O of y.outcomes){if(O.kind==="DEAD")continue;const C=v.t+O.delay;if(O.kind==="REPEAT"){const w=O.repeatPeriod??2;for(let D=C;D<=a;D+=w)l.push({time:D,seq:c++,cell:O.cell,kind:"CLAIM",owner:h})}else l.push({time:C,seq:c++,cell:O.cell,kind:O.kind,owner:h})}}};u(n,e,s,"P"),u(t,i,r,"E"),l.sort((g,_)=>g.time-_.time||g.seq-_.seq);for(const g of l)if(g.kind==="CLAIM")o[g.cell]=g.owner;else if(g.kind==="INVERT"){const _=o[g.cell];o[g.cell]=_==="NEUTRAL"?g.owner:_==="P"?"E":"P"}let d=0,f=0,m=0;for(const g of o)g==="P"?d++:g==="E"?f++:m++;return{p:d,e:f,neutral:m,owners:o}}const Bl=n=>n.outcomes.filter(t=>t.kind!=="DEAD").map(t=>t.cell),f0=n=>Math.max(0,...n.outcomes.map(t=>t.delay));function Kc(n,t){const e=[],i=new Set;for(;e.length<t;){let s=-1,r=-1;if(n.terminals.forEach((a,o)=>{if(e.includes(o))return;const l=Bl(a).filter(c=>!i.has(c)).length+oa(a)*.01;l>r&&(r=l,s=o)}),s<0)break;e.push(s);for(const a of Bl(n.terminals[s]))i.add(a)}return e}function p0(n,t,e){return Kc(n,t).map(i=>({t:Math.max(0,e-f0(n.terminals[i])-.05),terminal:i}))}function m0(n,t,e){return Kc(n,t).map((i,s)=>({t:s*.03,terminal:i}))}function Zc(n,t,e,i,s){const r=t.terminals.map((u,d)=>({i:d,v:oa(u),repeat:u.outcomes.some(f=>f.kind==="REPEAT")})).filter(u=>u.v>0);if(r.sort((u,d)=>d.v-u.v),r.length===0)return[];if(n==="naive"){const u=r.slice().sort(()=>s()-.5).slice(0,e);return u.map((d,f)=>({t:(f+.5)/Math.max(1,u.length)*i*.9,terminal:d.i}))}if(n==="greedy"){const u=r.slice(0,e);return u.map((d,f)=>({t:f/Math.max(1,u.length)*i*.7,terminal:d.i}))}const a=n==="optimal-ish"?r.slice().sort((u,d)=>Number(d.repeat)-Number(u.repeat)||d.v-u.v):r,o=Math.min(2,e),l=a.slice(0,Math.max(0,e-o)),c=l.map((u,d)=>({t:d/Math.max(1,l.length)*i*.6,terminal:u.i}));for(let u=0;u<o;u++)c.push({t:i*(.85+.03*u),terminal:a[u%a.length].i});return c}const Oe={splitChance:.35,reachMin:9,valueMin:8,ratioLo:.75,ratioHi:.95,maxBoardAttempts:60};function g0(n,t){const e=t.slice();for(let i=e.length-1;i>0;i--){const s=Math.floor(n()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}const Xi=n=>ia(n,.6,1.4);function kl(n,t){const e=g0(n,Array.from({length:12},(r,a)=>a)),i=[];for(let r=0;r<8;r++){const a=[{cell:e[r],delay:Xi(n),kind:"CLAIM"}];i.push({id:r,outcomes:a})}i[0].outcomes.push({cell:e[8],delay:Xi(n),kind:"CLAIM"}),i[1].outcomes.push({cell:e[9],delay:Xi(n),kind:"CLAIM"});for(let r=2;r<8;r++)if(n()<Oe.splitChance){const a=e[(r+5)%12];i[r].outcomes.some(o=>o.cell===a)||i[r].outcomes.push({cell:a,delay:Xi(n),kind:"CLAIM"})}for(let r=0;r<t.repeats;r++){const o=i[r%4].outcomes.find(l=>l.kind==="CLAIM");o&&(o.kind="REPEAT",o.repeatPeriod=ia(n,1.8,2.6))}let s=t.traps;for(const r of[7,6,5])for(let a=0;a<2&&s>0;a++){const o=n()<.5?"DEAD":"INVERT";i[r].outcomes.push({cell:e[(r+a+3)%12],delay:Xi(n),kind:o}),s--}return{terminals:i}}const _0=n=>n.terminals.find(t=>t.outcomes.some(e=>e.kind==="CLAIM")),x0=n=>{for(const t of n.terminals)for(const e of t.outcomes)if(e.kind==="DEAD")return e};function v0(n,t){for(let e=0;e<30;e++){const i=We(t)/We(n);if(i>Oe.ratioHi){const r=_0(t)?.outcomes.find(a=>a.kind==="CLAIM");if(r)r.kind="DEAD";else break}else if(i<Oe.ratioLo){const s=x0(t);if(s)s.kind="CLAIM";else break}else return}}function M0(n,t){const e=d0(n),i=En(`${t}:transfer:${n.attacker}:${n.defender}`),s=n.defender>=3;for(let r=1;r<=Oe.maxBoardAttempts;r++){const a=kl(i,e),o=kl(i,e);if(qr(a).size<Oe.reachMin||qr(o).size<Oe.reachMin||We(a)<Oe.valueMin||We(o)<Oe.valueMin)continue;const l=We(a)>=We(o)?a:o,c=l===a?o:a;if(v0(l,c),We(c)<Oe.valueMin||qr(c).size<Oe.reachMin)continue;const u=We(c)/We(l);if(u<Oe.ratioLo||u>Oe.ratioHi)continue;const d=En(`${t}:ai:${n.defender}:${r}`),f=Zc(e.ai,c,e.ePulses,e.tMatch,d);if(Ol(l,c,p0(l,e.pPulses,e.tMatch),f,e.pPulses,e.ePulses,e.tMatch).p<Nl||s&&Ol(l,c,m0(l,e.pPulses,e.tMatch),f,e.pPulses,e.ePulses,e.tMatch).p>=Nl)continue;const g=a,_=o;return{seed:t,spec:n,params:e,left:g,right:_,better:l===g?"left":"right",genStats:{boardAttempts:r,qLeft:We(g),qRight:We(_)}}}return null}function hr(n,t){for(let e=n.defender;e>=1;e--){const i=M0({attacker:n.attacker,defender:e},t);if(i)return i}throw new Error(`transfer generateBoard: no valid board even at defender 1 (seed=${t}, attacker=${n.attacker})`)}class ur{board;playerSide=null;owners=new Array($s).fill("NEUTRAL");pBudget;eBudget;timeLeft;matchElapsed=0;pulses=[];claimFlash=new Float32Array($s);phase="PLAN";result=null;guns=[];eSchedule=[];eFired=[];aiRng;constructor(t){this.board=t,this.pBudget=t.params.pPulses,this.eBudget=t.params.ePulses,this.timeLeft=t.params.tMatch,this.aiRng=En(`${t.seed}:liveai:${t.spec.defender}`)}enemySide(){return this.playerSide==="left"?"right":this.playerSide==="right"?"left":null}chooseSide(t){if(this.phase!=="PLAN")return;this.playerSide=t;const e=t==="left"?"right":"left";this.eSchedule=Zc(this.board.params.ai,Li(this.board,e),this.eBudget,this.board.params.tMatch,this.aiRng).slice().sort((i,s)=>i.t-s.t),this.eFired=this.eSchedule.map(()=>!1),this.phase="RUN"}firePlayer(t){return this.phase!=="RUN"||!this.playerSide||this.pBudget<=0||this.timeLeft<=0?!1:(this.spawn(this.playerSide,"P",t),this.pBudget--,!0)}spawn(t,e,i){const s=Li(this.board,t).terminals[i];if(s)for(const r of s.outcomes)this.pulses.push({side:t,owner:e,terminalId:i,cell:r.cell,kind:r.kind,delay:r.delay,elapsed:0,repeatPeriod:r.repeatPeriod??2})}resolve(t){if(t.kind!=="DEAD"){if(t.kind==="CLAIM")this.owners[t.cell]=t.owner;else if(t.kind==="INVERT"){const e=this.owners[t.cell];this.owners[t.cell]=e==="NEUTRAL"?t.owner:e==="P"?"E":"P"}else t.kind==="REPEAT"&&(this.owners[t.cell]=t.owner,this.guns.push({cell:t.cell,period:t.repeatPeriod,nextAt:this.matchElapsed+t.repeatPeriod,owner:t.owner}));this.claimFlash[t.cell]=.35}}tick(t){if(this.phase!=="RUN")return;this.matchElapsed+=t,this.timeLeft=Math.max(0,this.board.params.tMatch-this.matchElapsed);const e=this.enemySide();if(e)for(let s=0;s<this.eSchedule.length;s++)!this.eFired[s]&&this.eSchedule[s].t<=this.matchElapsed&&this.eBudget>0&&this.timeLeft>0&&(this.eFired[s]=!0,this.spawn(e,"E",this.eSchedule[s].terminal),this.eBudget--);const i=[];for(const s of this.pulses)s.elapsed+=t,s.elapsed>=s.delay?this.resolve(s):i.push(s);this.pulses=i;for(const s of this.guns)for(;this.matchElapsed>=s.nextAt&&s.nextAt<=this.board.params.tMatch;)this.owners[s.cell]=s.owner,this.claimFlash[s.cell]=.35,s.nextAt+=s.period;for(let s=0;s<$s;s++)this.claimFlash[s]>0&&(this.claimFlash[s]=Math.max(0,this.claimFlash[s]-t));this.timeLeft<=0&&this.pulses.length===0&&this.finish()}finish(){let t=0,e=0;for(const i of this.owners)i==="P"?t++:i==="E"&&e++;this.result={p:t,e},this.phase=t>e?"WON":"LOST"}counts(){let t=0,e=0,i=0;for(const s of this.owners)s==="P"?t++:s==="E"?e++:i++;return{p:t,e,n:i}}}let dr=1;const fr=n=>{dr=n},Di=()=>dr,pr=n=>Math.max(1,Math.min(3.2,.72*n/.82)),ei=n=>[0,(.86-n*(1.72/11))*dr],qe=(n,t)=>[n==="left"?-1.32:1.32,(.82-t*(1.64/7))*dr],Se={neutral:[.3,.3,.36],p:[.36,.79,.65],e:[.82,.88,1],pDim:[.14,.26,.22],eDim:[.19,.21,.27],gray:[.16,.16,.2],pBright:[.62,1,.86],eBright:[1.05,1.08,1.16]},zl=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],S0=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],y0=n=>n%2===0?1:.76,Hl=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,a,o)=>`rgb(${Math.round(r[0]+(a[0]-r[0])*o)},${Math.round(r[1]+(a[1]-r[1])*o)},${Math.round(r[2]+(a[2]-r[2])*o)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))};function E0(n,t){const e=new ss({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(526349,1);const i=new rs,s=1.46,r=1.04,a=new zn(-1,1,1,-1,.01,100);a.position.set(0,0,4),a.lookAt(0,0,0);const o=new cr(2e3);i.add(o.points);const l="http://www.w3.org/2000/svg",c="ui-monospace,SFMono-Regular,Menlo,monospace",u=X=>{const I=document.createElement("div");return I.style.cssText=X,document.body.appendChild(I),I},d=document.createElementNS(l,"svg");d.setAttribute("viewBox","0 0 48 48"),d.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const f=document.createElementNS(l,"circle");f.setAttribute("cx","24"),f.setAttribute("cy","24"),f.setAttribute("r","21"),f.setAttribute("fill","none"),f.setAttribute("stroke",Hl(1)),f.setAttribute("stroke-width","1.6"),d.appendChild(f),document.body.appendChild(d);const m=u(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${c};color:#9a9aa6;pointer-events:none;text-align:center`),g=u(`position:fixed;left:12px;bottom:12px;font:11px ${c};color:#55555f;pointer-events:none`),_=u(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${c};text-align:center;pointer-events:none`);let p,h,b=-1,v=null;function y(X,I){p=hr(X,I),h=new ur(p),_.style.display="none",b=-1}y(t.spec,t.seed);function O(){const X=window.innerWidth,I=window.innerHeight;e.setSize(X,I);const U=X/I,P=Math.max(r,s/U);a.top=P,a.bottom=-P,a.right=P*U,a.left=-P*U,a.updateProjectionMatrix(),fr(pr(P))}window.addEventListener("resize",O),O();const C=(X,I)=>{const U=n.getBoundingClientRect(),P=(X-U.left)/U.width*2-1,$=-((I-U.top)/U.height)*2+1;return[P*a.right,$*a.top]},w=(X,I,U)=>{let P=-1,$=.2;for(let et=0;et<8;et++){const[ct,pt]=qe(X,et),bt=Math.hypot(I-ct,U-pt);bt<$&&($=bt,P=et)}return P};n.addEventListener("pointermove",X=>{v=C(X.clientX,X.clientY)}),n.addEventListener("pointerup",X=>{const[I,U]=C(X.clientX,X.clientY);if(h.phase==="PLAN")h.chooseSide(I<0?"left":"right");else if(h.phase==="RUN"&&h.playerSide){const P=w(h.playerSide,I,U);P>=0&&h.firePlayer(P)}});const D=(X,I,U,P,$=1)=>{for(let ct=-1;ct<=1;ct++)for(let pt=-1;pt<=1;pt++)o.dot(X+ct*.026,I+pt*.026,U[0],U[1],U[2],P,$)},T=(X,I,U,P)=>{o.dot(X,I,U[0],U[1],U[2],P);const $=.03;for(const[et,ct]of[[1,0],[-1,0],[0,1],[0,-1]])o.dot(X+et*$,I+ct*$,U[0],U[1],U[2],P*.8)},M=(X,I,U)=>{const P=Math.hypot(I[0]-X[0],I[1]-X[1]),$=Math.max(3,Math.round(P/.05));for(let et=1;et<$;et++){const ct=et/$;o.dot(X[0]+(I[0]-X[0])*ct,X[1]+(I[1]-X[1])*ct,U[0],U[1],U[2],2.6,.85)}};function R(){const X=h.counts(),I=h.phase==="WON";_.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${I?"#8fd0b6":"#d0605a"}">${I?"◆ CIRCUIT TAKEN":"✕ REPELLED"}</div><div style="font-size:12px;color:#9a9aa6">you ${X.p} · host ${X.e} · neutral ${X.n}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,_.style.display="flex"}let j=performance.now(),Y=0;function st(){const X=performance.now(),I=Math.min(.05,(X-j)/1e3);j=X,h.tick(I),b=-1;const U=h.phase==="RUN"?h.playerSide:v?v[0]<0?"left":"right":null;v&&U&&(b=w(U,v[0],v[1])),o.begin();const P=.5+.5*Math.sin(X/220);for(const pt of["left","right"]){const bt=h.playerSide?pt===h.playerSide?"P":"E":"N",Q=bt==="P"?Se.pDim:bt==="E"?Se.eDim:Se.gray;Li(p,pt).terminals.forEach((mt,G)=>{const W=S0(Q,y0(G));for(const it of mt.outcomes)M(qe(pt,G),ei(it.cell),W)})}for(let pt=0;pt<12;pt++){const[bt,Q]=ei(pt),K=h.owners[pt],mt=K==="P"?Se.p:K==="E"?Se.e:Se.neutral,G=h.claimFlash[pt]/.35;D(bt,Q,zl(mt,[1,1,1],G*.8),K==="NEUTRAL"?4.5:5.5)}for(const pt of["left","right"]){const bt=h.playerSide?pt===h.playerSide?"P":"E":"N",Q=bt==="P"?Se.p:bt==="E"?Se.e:Se.neutral,K=h.phase==="RUN"&&pt===h.playerSide||h.phase==="PLAN";for(let mt=0;mt<8;mt++){const[G,W]=qe(pt,mt),it=K&&U===pt&&b===mt,Z=h.phase==="PLAN"?.4+.6*P:1,ft=it?zl(Q,[1,1,1],.5):Q;T(G,W,[ft[0]*Z,ft[1]*Z,ft[2]*Z],it?7:5.5)}}for(const pt of h.pulses){const bt=qe(pt.side,pt.terminalId),Q=ei(pt.cell),K=Math.min(1,pt.elapsed/pt.delay),mt=pt.kind==="DEAD"?Se.gray:pt.owner==="P"?Se.pBright:Se.eBright;for(let G=0;G<3;G++){const W=Math.max(0,K-G*.06);o.dot(bt[0]+(Q[0]-bt[0])*W,bt[1]+(Q[1]-bt[1])*W,mt[0],mt[1],mt[2],8-G*2,1-G*.3)}}const $=.99*Di();for(let pt=0;pt<h.pBudget;pt++)o.dot(-.24+pt*.05,-$,Se.p[0],Se.p[1],Se.p[2],5);o.commit(e.getPixelRatio()),e.render(i,a);const et=Math.max(0,h.timeLeft/p.params.tMatch);f.setAttribute("r",String(3+18*et)),f.setAttribute("stroke",Hl(et));const ct=h.counts();g.textContent=`you c${p.spec.attacker} vs host c${p.spec.defender} · ${ct.p}–${ct.e} · lead wins`,h.phase==="PLAN"?(m.textContent="CHOOSE A SIDE — click the left or right layer to take it",m.style.opacity="1"):h.phase==="RUN"?(m.textContent="click your terminals to fire · later pulse wins the cell",m.style.opacity="0.7"):m.style.opacity="0",(h.phase==="WON"||h.phase==="LOST")&&_.style.display==="none"&&R(),Y=requestAnimationFrame(st)}return st(),{regenerate:(X,I)=>y(X,I),chooseSide:X=>h.chooseSide(X),fire:X=>h.firePlayer(X),game:()=>h,dispose(){cancelAnimationFrame(Y),window.removeEventListener("resize",O),o.dispose(),[d,m,g,_].forEach(X=>X.remove()),e.dispose()}}}const Jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ni{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T0=new zn(-1,1,1,-1,0,1);class b0 extends Je{constructor(){super(),this.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vn([0,2,0,0,2,0],2))}}const A0=new b0;class aa{constructor(t){this._mesh=new nn(A0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,T0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class w0 extends Ni{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ki.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new aa(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vl extends Ni{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class R0 extends Ni{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class la{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Ft);this._width=i.width,this._height=i.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new w0(Jc),this.copyPass.material.blending=gn,this.clock=new Tg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vl!==void 0&&(a instanceof Vl?i=!0:a instanceof R0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ca extends Ni{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const C0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class kn extends Ni{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Ft(t.x,t.y):new Ft(256,256),this.clearColor=new Xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,a,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Ze(r,a,{type:_n});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Ze(r,a,{type:_n});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=C0;this.highPassUniforms=Ki.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ft(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Jc;this.copyUniforms=Ki.clone(u.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ks,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xt,this.oldClearAlpha=1,this.basic=new ta,this.fsQuad=new aa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ft(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=kn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=kn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ft(.5,.5)},direction:{value:new Ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}kn.BlurDirectionX=new Ft(1,0);kn.BlurDirectionY=new Ft(0,1);const P0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ha extends Ni{constructor(){super();const t=P0;this.uniforms=Ki.clone(t.uniforms),this.material=new Eg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new aa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function ua(n,t,e,i=.028){const[s,r]=qe(n,t),a=s*(.72-t*.045),[,o]=ei(e),l=s>0?.16:-.16,c=[[s,r],[a,r],[a,o],[l,o],[0,o]];let u=0;const d=[];for(let g=1;g<c.length;g++){const _=Math.hypot(c[g][0]-c[g-1][0],c[g][1]-c[g-1][1]);d.push(_),u+=_}const f=[];let m=0;for(let g=1;g<c.length;g++){const[_,p]=c[g-1],[h,b]=c[g],v=d[g-1],y=Math.max(1,Math.round(v/i));for(let O=0;O<y;O++){const C=O/y;f.push({x:_+(h-_)*C,y:p+(b-p)*C,u:u>0?(m+C*v)/u:0})}m+=v}return f.push({x:c[c.length-1][0],y:c[c.length-1][1],u:1}),f}const ae={cellN:[.22,.22,.28],cellP:[.3,.85,.62],cellE:[.82,.88,1],dimP:[.09,.2,.16],dimE:[.19,.21,.27],dimN:[.12,.12,.16],litP:[.5,1.1,.85],litE:[1.05,1.08,1.16],litD:[.4,.4,.42],white:[1,1,1]},Fs=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],L0=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],D0=n=>n%2===0?1:.76,Gl=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,a,o)=>`rgb(${Math.round(r[0]+(a[0]-r[0])*o)},${Math.round(r[1]+(a[1]-r[1])*o)},${Math.round(r[2]+(a[2]-r[2])*o)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))};function I0(n,t){const e=new ss({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(329226,1);const i=new rs,s=1.46,r=1.04,a=new zn(-1,1,1,-1,.01,100);a.position.set(0,0,4),a.lookAt(0,0,0);const o=new cr(3e3,{additive:!0});i.add(o.points);const l=new la(e);l.addPass(new ca(i,a));const c=new kn(new Ft(1,1),.9,.55,.18);l.addPass(c),l.addPass(new ha);const u="http://www.w3.org/2000/svg",d="ui-monospace,SFMono-Regular,Menlo,monospace",f=U=>{const P=document.createElement("div");return P.style.cssText=U,document.body.appendChild(P),P},m=document.createElementNS(u,"svg");m.setAttribute("viewBox","0 0 48 48"),m.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const g=document.createElementNS(u,"circle");g.setAttribute("cx","24"),g.setAttribute("cy","24"),g.setAttribute("r","21"),g.setAttribute("fill","none"),g.setAttribute("stroke",Gl(1)),g.setAttribute("stroke-width","1.6"),m.appendChild(g),document.body.appendChild(m);const _=f(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${d};color:#9a9aa6;pointer-events:none;text-align:center`),p=f(`position:fixed;left:12px;bottom:12px;font:11px ${d};color:#55555f;pointer-events:none`),h=f(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${d};text-align:center;pointer-events:none`);let b,v,y=[],O=new Map,C=null;function w(){y=[],O=new Map;for(const U of["left","right"])Li(b,U).terminals.forEach((P,$)=>{for(const et of P.outcomes){const ct=ua(U,$,et.cell);y.push({side:U,term:$,cell:et.cell,dots:ct}),O.set(`${U}:${$}:${et.cell}`,ct)}})}function D(U,P){b=hr(U,P),v=new ur(b),w(),h.style.display="none"}D(t.spec,t.seed);function T(){const U=window.innerWidth,P=window.innerHeight;e.setSize(U,P),l.setSize(U,P);const $=U/P,et=Math.max(r,s/$);a.top=et,a.bottom=-et,a.right=et*$,a.left=-et*$,a.updateProjectionMatrix(),fr(pr(et)),w()}window.addEventListener("resize",T),T();const M=(U,P)=>{const $=n.getBoundingClientRect(),et=(U-$.left)/$.width*2-1,ct=-((P-$.top)/$.height)*2+1;return[et*a.right,ct*a.top]},R=(U,P,$)=>{let et=-1,ct=.2;for(let pt=0;pt<8;pt++){const[bt,Q]=qe(U,pt),K=Math.hypot(P-bt,$-Q);K<ct&&(ct=K,et=pt)}return et};n.addEventListener("pointermove",U=>C=M(U.clientX,U.clientY)),n.addEventListener("pointerup",U=>{const[P,$]=M(U.clientX,U.clientY);if(v.phase==="PLAN")v.chooseSide(P<0?"left":"right");else if(v.phase==="RUN"&&v.playerSide){const et=R(v.playerSide,P,$);et>=0&&v.firePlayer(et)}});const j=(U,P,$,et)=>{for(let pt=-1;pt<=1;pt++)for(let bt=-1;bt<=1;bt++)o.dot(U+pt*.026,P+bt*.026,$[0],$[1],$[2],et)};function Y(){const U=v.counts(),P=v.phase==="WON";h.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${P?"#8fd0b6":"#d0605a"}">${P?"◆ CIRCUIT TAKEN":"✕ REPELLED"}</div><div style="font-size:12px;color:#9a9aa6">you ${U.p} · host ${U.e} · neutral ${U.n}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,h.style.display="flex"}let st=performance.now(),X=0;function I(){const U=performance.now(),P=Math.min(.05,(U-st)/1e3);st=U,v.tick(P);const $=new Map;for(const K of v.pulses){const mt=`${K.side}:${K.terminalId}:${K.cell}`,G=$.get(mt)??[];G.push({p:K.elapsed/K.delay,owner:K.owner,kind:K.kind}),$.set(mt,G)}let et=-1;const ct=v.phase==="RUN"?v.playerSide:C?C[0]<0?"left":"right":null;C&&ct&&(et=R(ct,C[0],C[1])),o.begin();for(const K of y){const mt=v.playerSide?K.side===v.playerSide?"P":"E":"N",G=L0(mt==="P"?ae.dimP:mt==="E"?ae.dimE:ae.dimN,D0(K.term)),W=$.get(`${K.side}:${K.term}:${K.cell}`);for(const it of K.dots){let Z=0,ft=ae.white;if(W)for(const dt of W){const L=it.u<=dt.p?Math.exp(-(dt.p-it.u)/.13):Math.exp(-(it.u-dt.p)/.025);L>Z&&(Z=L,ft=dt.kind==="DEAD"?ae.litD:dt.owner==="P"?ae.litP:ae.litE)}const ht=Fs(G,ft,Z);o.dot(it.x,it.y,ht[0],ht[1],ht[2],2.3+Z*4.2,.9)}}for(const K of v.pulses){const mt=O.get(`${K.side}:${K.terminalId}:${K.cell}`);if(!mt)continue;const G=Math.min(1,K.elapsed/K.delay);let W=0,it=9;for(let ht=0;ht<mt.length;ht++){const dt=Math.abs(mt[ht].u-G);dt<it&&(it=dt,W=ht)}const Z=mt[W],ft=K.kind==="DEAD"?ae.litD:Fs(K.owner==="P"?ae.litP:ae.litE,ae.white,.4);o.dot(Z.x,Z.y,ft[0],ft[1],ft[2],9)}for(let K=0;K<12;K++){const[mt,G]=ei(K),W=v.owners[K],it=W==="P"?ae.cellP:W==="E"?ae.cellE:ae.cellN,Z=v.claimFlash[K]/.35;j(mt,G,Fs(it,ae.white,Z*.7),W==="NEUTRAL"?4.5:5.5)}for(const K of["left","right"]){const mt=v.playerSide?K===v.playerSide?"P":"E":"N",G=mt==="P"?ae.cellP:mt==="E"?ae.cellE:ae.cellN,W=v.phase==="PLAN"?.5+.5*Math.sin(U/220):1;for(let it=0;it<8;it++){const[Z,ft]=qe(K,it),ht=ct===K&&et===it&&(v.phase==="PLAN"||K===v.playerSide),dt=ht?Fs(G,ae.white,.5):G,L=ht?1.3:W;o.dot(Z,ft,dt[0]*L,dt[1]*L,dt[2]*L,ht?8:6);for(const[Bt,wt]of[[1,0],[-1,0],[0,1],[0,-1]])o.dot(Z+Bt*.03,ft+wt*.03,dt[0]*L*.7,dt[1]*L*.7,dt[2]*L*.7,4)}}const pt=.99*Di();for(let K=0;K<v.pBudget;K++)o.dot(-.24+K*.05,-pt,ae.cellP[0],ae.cellP[1],ae.cellP[2],5);o.commit(e.getPixelRatio()),l.render();const bt=Math.max(0,v.timeLeft/b.params.tMatch);g.setAttribute("r",String(3+18*bt)),g.setAttribute("stroke",Gl(bt));const Q=v.counts();p.textContent=`you c${b.spec.attacker} vs host c${b.spec.defender} · ${Q.p}–${Q.e} · lead wins`,v.phase==="PLAN"?(_.textContent="CHOOSE A SIDE — click the left or right circuit to take it",_.style.opacity="1"):v.phase==="RUN"?(_.textContent="click your terminals — light claims the cell it reaches · later pulse wins",_.style.opacity="0.7"):_.style.opacity="0",(v.phase==="WON"||v.phase==="LOST")&&h.style.display==="none"&&Y(),X=requestAnimationFrame(I)}return I(),{regenerate:(U,P)=>D(U,P),chooseSide:U=>v.chooseSide(U),fire:U=>v.firePlayer(U),game:()=>v,dispose(){cancelAnimationFrame(X),window.removeEventListener("resize",T),o.dispose(),l.dispose(),[m,_,p,h].forEach(U=>U.remove()),e.dispose()}}}const jr=(n,t)=>{const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},U0=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t)),Wl=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],N0=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Qc=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],th=n=>{const t=Math.hypot(n[0],n[1],n[2])||1e-6;return[n[0]/t,n[1]/t,n[2]/t]};function F0(n,t){return t.map(e=>{let i=th(N0(Wl(n[e[1]],n[e[0]]),Wl(n[e[2]],n[e[0]]))),s=Qc(i,n[e[0]]);return s<0&&(i=[-i[0],-i[1],-i[2]],s=-s),{n:i,d:s}})}const O0=n=>t=>{const e=th(t);let i=1/0;for(const s of n){const r=Qc(e,s.n);if(r>1e-6){const a=s.d/r;a<i&&(i=a)}}return[e[0]*i,e[1]*i,e[2]*i]};function B0(n,t,e){const i=[],s=n[t[0]];for(let r=1;r<t.length-1;r++){const a=n[t[r]],o=n[t[r+1]];for(let l=0;l<=e;l++)for(let c=0;c<=e-l;c++){const u=l/e,d=c/e,f=1-u-d;i.push([s[0]*f+a[0]*u+o[0]*d,s[1]*f+a[1]*u+o[1]*d,s[2]*f+a[2]*u+o[2]*d])}}return i}function k0(n){const t=[],e=[];for(let i=0;i<n;i++)e.push(-1+2*i/(n-1));for(const i of[-1,1])for(const s of e)for(const r of e)t.push([i,s,r]),t.push([s,i,r]),t.push([s,r,i]);return t}const z0=n=>{const t=Math.max(Math.abs(n[0]),Math.abs(n[1]),Math.abs(n[2]))||1e-6;return[n[0]/t,n[1]/t,n[2]/t]},eh=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],nh=[[0,2,4],[0,2,5],[0,3,4],[0,3,5],[1,2,4],[1,2,5],[1,3,4],[1,3,5]],H0=O0(F0(eh,nh)),V0=k0(4),G0=nh.flatMap(n=>B0(eh,n,4));function W0(n,t,e,i){const s=2*t*e+i,r=n%s,a=new Array(t).fill(0);let o=-1;if(r<2*t*e){const l=Math.floor(r/e),c=(r-l*e)/e,u=1-(1-Math.min(1,c/.7))**3;if(l<t){for(let d=0;d<l;d++)a[d]=1;a[l]=u,o=l}else{const d=2*t-1-l;for(let f=0;f<d;f++)a[f]=1;a[d]=1-u,o=d}}return{amount:a,active:o}}function X0(n){const t=[-1,-.3333333333333333,.3333333333333333],e=[];for(let i=0;i<n;i++){const s=Math.min(2,Math.floor(jr(i,2.3)*3)),r=t[Math.min(2,Math.floor(jr(i,5.9)*3))],a=jr(i,7.7)<.5?1:-1;e.push({axis:s,lo:r,hi:r+2/3+1e-4,ang:a*Math.PI/2})}return e}const Xl=X0(12);function $0(n,t){let[e,i,s]=n,r=!1;for(let a=0;a<Xl.length;a++){if(t.amount[a]<=0)continue;const o=Xl[a],l=o.axis===0?e:o.axis===1?i:s;if(l<o.lo||l>=o.hi)continue;a===t.active&&(r=!0);const c=o.ang*t.amount[a],u=Math.cos(c),d=Math.sin(c);if(o.axis===0){const f=i*u-s*d;s=i*d+s*u,i=f}else if(o.axis===1){const f=e*u+s*d;s=-e*d+s*u,e=f}else{const f=e*u-i*d;i=e*d+i*u,e=f}}return[e,i,s,r]}const ih=(n,t)=>{const e=Math.sin(t),i=Math.cos(t),s=Math.sin(n),r=Math.cos(n);return(a,o,l)=>{const c=a*r+l*s,u=-a*s+l*r,d=o*i-u*e,f=o*e+u*i;return[c,d,f]}},sh=n=>n==="cube"?1:1.7,Y0=n=>n==="cube"?z0:H0;function rh(n,t){const e=Y0(n),i=sh(n),s=.5,r=t*s,a=ih(r,.4+.06*Math.sin(t*.35)),o=t*(s+(1.7-s)*4.08),l=10,c=18,u=[];for(let d=0;d<=l;d++){const f=-Math.PI/2+d/l*Math.PI,m=Math.cos(f),g=Math.sin(f),_=Math.max(1,Math.round(Math.abs(m)*c));for(let p=0;p<_;p++){const h=p/_*2*Math.PI,b=e([m*Math.cos(h),g,m*Math.sin(h)]),[v,y,O]=a(b[0],b[1],b[2]),C=U0(h+r,o),w=Math.exp(-(C*C)/.18)*Math.max(0,O);u.push({x:v*i,y:y*i,depth:(O+1)/2,scan:Math.min(1,w)})}}return u}function oh(n,t){const e=n==="cube"?V0:G0,i=sh(n),s=ih(t*.5,.5+.1*Math.sin(t*.9)),r=W0(t,12,.42,1.2),a=[];for(const o of e){const[l,c,u,d]=$0(o,r),[f,m,g]=s(l,c,u);a.push({x:f*i,y:m*i,depth:(g+1)/2,scan:d?1:0})}return a}const oe={cellN:[.2,.2,.26],p:[.34,.9,.66],e:[.82,.88,1],dimP:[.09,.2,.16],dimE:[.19,.21,.27],dimN:[.12,.12,.16],litP:[.5,1.1,.85],litE:[1.05,1.08,1.16],litD:[.4,.4,.42],white:[1,1,1]},Os=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],q0=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],j0=n=>n%2===0?1:.76,$l=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,a,o)=>`rgb(${Math.round(r[0]+(a[0]-r[0])*o)},${Math.round(r[1]+(a[1]-r[1])*o)},${Math.round(r[2]+(a[2]-r[2])*o)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))};function K0(n,t){const e=new ss({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(329226,1);const i=new rs,s=1.46,r=1.04,a=new zn(-1,1,1,-1,.01,100);a.position.set(0,0,4),a.lookAt(0,0,0);const o=new cr(6e3,{additive:!0});i.add(o.points);const l=new la(e);l.addPass(new ca(i,a)),l.addPass(new kn(new Ft(1,1),.6,.5,.25)),l.addPass(new ha);const c="http://www.w3.org/2000/svg",u="ui-monospace,SFMono-Regular,Menlo,monospace",d=I=>{const U=document.createElement("div");return U.style.cssText=I,document.body.appendChild(U),U},f=document.createElementNS(c,"svg");f.setAttribute("viewBox","0 0 48 48"),f.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const m=document.createElementNS(c,"circle");m.setAttribute("cx","24"),m.setAttribute("cy","24"),m.setAttribute("r","21"),m.setAttribute("fill","none"),m.setAttribute("stroke",$l(1)),m.setAttribute("stroke-width","1.6"),f.appendChild(m),document.body.appendChild(f);const g=d(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${u};color:#9a9aa6;pointer-events:none;text-align:center`),_=d(`position:fixed;left:12px;bottom:12px;font:11px ${u};color:#55555f;pointer-events:none`),p=d(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${u};text-align:center;pointer-events:none`);let h,b,v=[],y=new Map,O=null;function C(){v=[],y=new Map;for(const I of["left","right"])Li(h,I).terminals.forEach((U,P)=>{for(const $ of U.outcomes){const et=ua(I,P,$.cell);v.push({side:I,term:P,cell:$.cell,dots:et}),y.set(`${I}:${P}:${$.cell}`,et)}})}function w(I,U){h=hr(I,U),b=new ur(h),C(),p.style.display="none"}w(t.spec,t.seed);function D(){const I=window.innerWidth,U=window.innerHeight;e.setSize(I,U),l.setSize(I,U);const P=I/U,$=Math.max(r,s/P);a.top=$,a.bottom=-$,a.right=$*P,a.left=-$*P,a.updateProjectionMatrix(),fr(pr($)),C()}window.addEventListener("resize",D),D();const T=(I,U)=>{const P=n.getBoundingClientRect();return[((I-P.left)/P.width*2-1)*a.right,(-((U-P.top)/P.height)*2+1)*a.top]},M=(I,U,P)=>{let $=-1,et=.2;for(let ct=0;ct<8;ct++){const[pt,bt]=qe(I,ct),Q=Math.hypot(U-pt,P-bt);Q<et&&(et=Q,$=ct)}return $};n.addEventListener("pointermove",I=>O=T(I.clientX,I.clientY)),n.addEventListener("pointerup",I=>{const[U,P]=T(I.clientX,I.clientY);if(b.phase==="PLAN")b.chooseSide(U<0?"left":"right");else if(b.phase==="RUN"&&b.playerSide){const $=M(b.playerSide,U,P);$>=0&&b.firePlayer($)}});const R=(I,U,P,$,et,ct)=>{for(const pt of I){const bt=(.3+.7*pt.depth+pt.scan*.7)*ct;o.dot(U+pt.x*$,P+pt.y*$,et[0]*bt,et[1]*bt,et[2]*bt,1.5+2.4*pt.depth+pt.scan*3,.95)}};function j(){const I=b.counts(),U=b.phase==="WON";p.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${U?"#8fd0b6":"#d0605a"}">${U?"◆ RESOLVED":"✕ SCATTERED"}</div><div style="font-size:12px;color:#9a9aa6">you ${I.p} · host ${I.e} · neutral ${I.n}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,p.style.display="flex"}let Y=performance.now(),st=0;function X(){const I=performance.now(),U=I/1e3,P=Math.min(.05,(I-Y)/1e3);Y=I,b.tick(P);const $=b.playerSide?b.playerSide==="left"?"right":"left":null,et=W=>W==="P"?b.playerSide:W==="E"?$:null,ct=new Map;for(const W of b.pulses){const it=`${W.side}:${W.terminalId}:${W.cell}`,Z=ct.get(it)??[];Z.push({p:W.elapsed/W.delay,owner:W.owner,kind:W.kind}),ct.set(it,Z)}let pt=-1;const bt=b.phase==="RUN"?b.playerSide:O?O[0]<0?"left":"right":null;O&&bt&&(pt=M(bt,O[0],O[1])),o.begin();for(const W of v){const it=b.playerSide?W.side===b.playerSide?"P":"E":"N",Z=q0(it==="P"?oe.dimP:it==="E"?oe.dimE:oe.dimN,j0(W.term)),ft=ct.get(`${W.side}:${W.term}:${W.cell}`);for(const ht of W.dots){let dt=0,L=oe.white;if(ft)for(const wt of ft){const Nt=ht.u<=wt.p?Math.exp(-(wt.p-ht.u)/.13):Math.exp(-(ht.u-wt.p)/.025);Nt>dt&&(dt=Nt,L=wt.kind==="DEAD"?oe.litD:wt.owner==="P"?oe.litP:oe.litE)}const Bt=Os(Z,L,dt);o.dot(ht.x,ht.y,Bt[0],Bt[1],Bt[2],2.2+dt*4,.85)}}for(const W of b.pulses){const it=y.get(`${W.side}:${W.terminalId}:${W.cell}`);if(!it)continue;const Z=Math.min(1,W.elapsed/W.delay);let ft=0,ht=9;for(let Bt=0;Bt<it.length;Bt++){const wt=Math.abs(it[Bt].u-Z);wt<ht&&(ht=wt,ft=Bt)}const dt=it[ft],L=W.kind==="DEAD"?oe.litD:Os(W.owner==="P"?oe.litP:oe.litE,oe.white,.4);o.dot(dt.x,dt.y,L[0],L[1],L[2],9)}for(let W=0;W<12;W++){const[it,Z]=ei(W),ft=b.owners[W],ht=et(ft),dt=b.claimFlash[W]/.35;if(ht){const L=ht==="left"?"octa":"cube",Bt=Os(ft==="P"?oe.p:oe.e,oe.white,dt*.6);R(oh(L,U+W*.5),it,Z,.042,Bt,.9+dt)}else for(let Bt=-1;Bt<=1;Bt++)for(let wt=-1;wt<=1;wt++)o.dot(it+Bt*.024,Z+wt*.024,oe.cellN[0],oe.cellN[1],oe.cellN[2],4)}const Q=.055*Math.min(1.45,.86+.14*Di());for(const W of["left","right"]){const it=W==="left"?"octa":"cube",Z=b.playerSide?W===b.playerSide?"P":"E":"N",ft=Z==="P"?oe.p:Z==="E"?oe.e:oe.cellN;for(let ht=0;ht<8;ht++){const[dt,L]=qe(W,ht),Bt=bt===W&&pt===ht&&(b.phase==="PLAN"||W===b.playerSide),wt=Bt?1.6:b.phase==="PLAN"?.7+.4*Math.sin(I/240+ht):1;R(rh(it,U+ht*.7),dt,L,Q,Bt?Os(ft,oe.white,.4):ft,wt)}}const K=.99*Di();for(let W=0;W<b.pBudget;W++)o.dot(-.24+W*.05,-K,oe.p[0],oe.p[1],oe.p[2],5);o.commit(e.getPixelRatio()),l.render();const mt=Math.max(0,b.timeLeft/h.params.tMatch);m.setAttribute("r",String(3+18*mt)),m.setAttribute("stroke",$l(mt));const G=b.counts();_.textContent=`you c${h.spec.attacker} vs host c${h.spec.defender} · ${G.p}–${G.e} · lead wins`,b.phase==="PLAN"?(g.textContent="CHOOSE A SIDE — searching octahedra (left) vs searching cubes (right)",g.style.opacity="1"):b.phase==="RUN"?(g.textContent="fire your terminals — a claimed cell resolves into your solid",g.style.opacity="0.7"):g.style.opacity="0",(b.phase==="WON"||b.phase==="LOST")&&p.style.display==="none"&&j(),st=requestAnimationFrame(X)}return X(),{regenerate:(I,U)=>w(I,U),chooseSide:I=>b.chooseSide(I),fire:I=>b.firePlayer(I),game:()=>b,dispose(){cancelAnimationFrame(st),window.removeEventListener("resize",D),o.dispose(),l.dispose(),[f,g,_,p].forEach(I=>I.remove()),e.dispose()}}}const je=(n,t)=>{const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},Z0=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t)),J0=n=>n-Math.floor(n),Kr=(n,t,e)=>n+(t-n)*e,Yl=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Q0=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],ah=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],mr=n=>{const t=Math.hypot(n[0],n[1],n[2])||1e-6;return[n[0]/t,n[1]/t,n[2]/t]},lh=(n,t)=>{const e=Math.PI*(3-Math.sqrt(5)),i=1-2*(n+.5)/t,s=Math.sqrt(Math.max(0,1-i*i)),r=n*e;return[s*Math.cos(r),i,s*Math.sin(r)]};function Zr(n,t){const e=Math.floor(n),i=Math.floor(t);let s=n-e,r=t-i;s=s*s*(3-2*s),r=r*r*(3-2*r);const a=je(e,i),o=je(e+1,i),l=je(e,i+1),c=je(e+1,i+1);return a+(o-a)*s+(l-a)*r+(a-o-l+c)*s*r}const as=(n,t)=>{const e=Math.sin(t),i=Math.cos(t),s=Math.sin(n),r=Math.cos(n);return(a,o,l)=>{const c=a*r+l*s,u=-a*s+l*r,d=o*i-u*e,f=o*e+u*i;return[c,d,f]}};function ch(n,t){return t.map(e=>{let i=mr(Q0(Yl(n[e[1]],n[e[0]]),Yl(n[e[2]],n[e[0]]))),s=ah(i,n[e[0]]);return s<0&&(i=[-i[0],-i[1],-i[2]],s=-s),{n:i,d:s}})}const hh=n=>t=>{const e=mr(t);let i=1/0;for(const s of n){const r=ah(e,s.n);if(r>1e-6){const a=s.d/r;a<i&&(i=a)}}return[e[0]*i,e[1]*i,e[2]*i]};function t_(n,t,e){const i=[],s=n[t[0]];for(let r=1;r<t.length-1;r++){const a=n[t[r]],o=n[t[r+1]];for(let l=0;l<=e;l++)for(let c=0;c<=e-l;c++){const u=l/e,d=c/e,f=1-u-d;i.push([s[0]*f+a[0]*u+o[0]*d,s[1]*f+a[1]*u+o[1]*d,s[2]*f+a[2]*u+o[2]*d])}}return i}const e_=n=>{const t=[0,0,0];for(const e of n)t[0]+=e[0],t[1]+=e[1],t[2]+=e[2];return t[0]/=n.length,t[1]/=n.length,t[2]/=n.length,n.map(e=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]])},uh=n=>{let t=1e-6;for(const e of n)t=Math.max(t,Math.hypot(e[0],e[1],e[2]));return n.map(e=>[e[0]/t,e[1]/t,e[2]/t])};function n_(n,t,e,i){const s=2*t*e+i,r=n%s,a=new Array(t).fill(0);let o=-1;if(r<2*t*e){const l=Math.floor(r/e),c=(r-l*e)/e,u=1-(1-Math.min(1,c/.7))**3;if(l<t){for(let d=0;d<l;d++)a[d]=1;a[l]=u,o=l}else{const d=2*t-1-l;for(let f=0;f<d;f++)a[f]=1;a[d]=1-u,o=d}}return{amount:a,active:o}}const ql=(()=>{const n=[-1,-.3333333333333333,.3333333333333333],t=[];for(let e=0;e<12;e++){const i=Math.min(2,Math.floor(je(e,2.3)*3)),s=n[Math.min(2,Math.floor(je(e,5.9)*3))],r=je(e,7.7)<.5?1:-1;t.push({axis:i,lo:s,hi:s+2/3+1e-4,ang:r*Math.PI/2})}return t})();function i_(n,t){let[e,i,s]=n,r=!1;for(let a=0;a<ql.length;a++){if(t.amount[a]<=0)continue;const o=ql[a],l=o.axis===0?e:o.axis===1?i:s;if(l<o.lo||l>=o.hi)continue;a===t.active&&(r=!0);const c=o.ang*t.amount[a],u=Math.cos(c),d=Math.sin(c);if(o.axis===0){const f=i*u-s*d;s=i*d+s*u,i=f}else if(o.axis===1){const f=e*u+s*d;s=-e*d+s*u,e=f}else{const f=e*u-i*d;i=e*d+i*u,e=f}}return[e,i,s,r]}const dh=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],fh=[[0,2,4],[0,2,5],[0,3,4],[0,3,5],[1,2,4],[1,2,5],[1,3,4],[1,3,5]],s_=hh(ch(dh,fh)),r_=fh.flatMap(n=>t_(dh,n,4)),o_=e_([[0,1,0],[.85,-.7,.85],[-.85,-.7,.85],[-.85,-.7,-.85],[.85,-.7,-.85]]),a_=[[1,2,3,4],[0,1,2],[0,2,3],[0,3,4],[0,4,1]],l_=hh(ch(o_,a_)),c_=1,jl=.42,ph=(n,t)=>{const e=c_+jl*Math.cos(t);return[e*Math.cos(n),e*Math.sin(n),jl*Math.sin(t)]},h_=n=>{const t=mr(n),e=Math.atan2(t[1],t[0]),i=Math.asin(Math.max(-1,Math.min(1,t[2])));return ph(e,i*2)},u_=(()=>{const n=[];for(let t=0;t<30;t++){const e=t/30*2*Math.PI;for(let i=0;i<10;i++)n.push(ph(e,i/10*2*Math.PI))}return n})(),d_=(()=>{const n=[];for(let i=0;i<20;i++){const s=i/19,r=s*Math.PI,a=Math.cos(r),o=.95*Math.sin(r)*Math.pow(s,.6);for(let l=0;l<12;l++){const c=l/12*2*Math.PI;n.push([o*Math.cos(c),a,o*Math.sin(c)])}}return uh(n)})(),Jr=(n,t,e)=>{const i=n,s=e,r=t,a=i*i+2.25*s*s+r*r-1;return a*a*a-i*i*r*r*r-.1125*s*s*r*r*r},mh=n=>{const t=mr(n);let e=.1,i=Jr(t[0]*e,t[1]*e,t[2]*e),s=0;for(;i<0&&e<5&&s<50;)e*=1.35,i=Jr(t[0]*e,t[1]*e,t[2]*e),s++;let r=0,a=e;for(let l=0;l<20;l++){const c=(r+a)*.5;Jr(t[0]*c,t[1]*c,t[2]*c)<0?r=c:a=c}const o=(r+a)*.5;return[t[0]*o,t[1]*o,t[2]*o]},f_=uh(Array.from({length:200},(n,t)=>mh(lh(t,200)))),p_={octa:{warp:s_,pts:r_,Rf:1.6},pyramid:{warp:l_,pts:[],Rf:1.3},torus:{warp:h_,pts:u_,Rf:1.25},teardrop:{pts:d_,Rf:1.5},heart:{warp:mh,pts:f_,Rf:1.55}};function m_(n,t){const e=n.warp,i=.5,s=t*i,r=as(s,.4+.06*Math.sin(t*.35)),a=t*(i+(1.7-i)*4.08),o=[],l=12,c=26;for(let u=0;u<=l;u++){const d=-Math.PI/2+u/l*Math.PI,f=Math.cos(d),m=Math.sin(d),g=Math.max(1,Math.round(Math.abs(f)*c));for(let _=0;_<g;_++){const p=_/g*2*Math.PI,h=e([f*Math.cos(p),m,f*Math.sin(p)]),[b,v,y]=r(h[0],h[1],h[2]),O=Z0(p+s,a),C=Math.exp(-(O*O)/.18)*Math.max(0,y);o.push({x:b*n.Rf,y:v*n.Rf,depth:(y+1)/2,scan:Math.min(1,C),a:.5+.5*Math.min(1,C)})}}return o}function g_(n,t){const e=as(t*.5,.5+.1*Math.sin(t*.9)),i=n_(t,12,.42,1.2),s=[];for(const r of n.pts){const[a,o,l,c]=i_(r,i),[u,d,f]=e(a,o,l);s.push({x:u*n.Rf,y:d*n.Rf,depth:(f+1)/2,scan:c?1:0,a:1})}return s}function __(n,t){const e=n.warp,i=as(t*.12,.35),s=22,r=[];for(let o=0;o<s;o++){const l=lh(o,s);r.push(e([l[0]+.25*(Zr(o*.31+9,t*.24)-.5)*2,l[1]+.25*(Zr(o*.53+27,t*.21)-.5)*2,l[2]+.25*(Zr(o*.77+55,t*.27)-.5)*2]))}const a=[];for(let o=0;o<s;o++){const[l,c,u]=i(r[o][0],r[o][1],r[o][2]),d=.6+.4*(.5+.5*Math.sin(t*1.4+o*2.7));a.push({x:l*n.Rf,y:c*n.Rf,depth:(u+1)/2,scan:d,a:.85})}for(let o=0;o<5;o++){const l=Math.floor(t*.55+o*7.31),c=Math.floor(je(l,o*3.1+1.7)*s),u=Math.floor(je(l,o*5.7+4.2)*s);if(c===u)continue;const d=J0(t*.55+o*7.31),f=e([Kr(r[c][0],r[u][0],d),Kr(r[c][1],r[u][1],d),Kr(r[c][2],r[u][2],d)]),[m,g,_]=i(f[0],f[1],f[2]);a.push({x:m*n.Rf,y:g*n.Rf,depth:(_+1)/2,scan:1,a:.9})}return a}function x_(n,t){const e=n.warp,i=as(t*.18,.32),s=1,r=0,a=0,o=.55,l=0,c=Math.cos(o),u=Math.sin(o),d=r*u-a*c,f=a*l-s*u,m=s*c-r*l,g=9,_=34,p=[];for(let h=0;h<g;h++){const b=(h-(g-1)/2)*.075,v=Math.abs(h-(g-1)/2)/Math.max(1,(g-1)/2);for(let y=0;y<_;y++){const O=y/_*2*Math.PI,C=.16*Math.sin(O*3-t*1.7+h*.22)+.07*Math.sin(O*5+t*1.1),w=b+C,D=e([s*Math.cos(O)+l*Math.sin(O)+d*w,r*Math.cos(O)+c*Math.sin(O)+f*w,a*Math.cos(O)+u*Math.sin(O)+m*w]),[T,M,R]=i(D[0],D[1],D[2]);p.push({x:T*n.Rf,y:M*n.Rf,depth:(R+1)/2,scan:(1-v)*.5,a:.4+.6*((R+1)/2)})}}return p}function gr(n,t,e,i){const s=as(t*.3,.42),r=[];return n.pts.forEach((a,o)=>{const l=e(a,o),[c,u,d]=s(l[0],l[1],l[2]);r.push({x:c*n.Rf,y:u*n.Rf,depth:(d+1)/2,scan:i(o),a:1})}),r}const v_=(n,t)=>gr(n,t,e=>{const i=1+.14*Math.sin(3*Math.atan2(e[2],e[0])+t*3-e[1]*2);return[e[0]*i,e[1],e[2]*i]},()=>.15),M_=(n,t)=>gr(n,t,(e,i)=>{const s=je(i,1.3)*6.283;return[e[0]+.07*Math.sin(t*2+s),e[1]+.07*Math.cos(t*1.7+s),e[2]+.07*Math.sin(t*2.3+s)]},()=>.1),S_=(n,t)=>{const e=1+.24*Math.sin(t*3),i=1/Math.sqrt(e);return gr(n,t,s=>[s[0]*i,s[1]*e,s[2]*i],()=>.15)},y_=(n,t)=>gr(n,t,e=>e,e=>.5+.5*Math.sin(t*4+je(e,2.1)*6.283)),E_={searching:m_,solving:g_,connecting:__,composing:x_,wave:v_,orbit:M_,jelly:S_,twinkle:y_};function Kl(n,t,e){return E_[n](p_[t],e)}const Zl=[{key:"white-octa",label:"White Octahedron",shape:"octa",terminal:"searching",node:"solving",color:[.82,.88,1],dim:[.19,.21,.27]},{key:"purple-pyramid",label:"Purple Pyramid",shape:"pyramid",terminal:"searching",node:"connecting",color:[.7,.5,1],dim:[.18,.14,.28]},{key:"turquoise-torus",label:"Turquoise Torus",shape:"torus",terminal:"searching",node:"composing",color:[.3,.86,.82],dim:[.12,.24,.24]},{key:"darkred-teardrop",label:"Dark Red Teardrop",shape:"teardrop",terminal:"wave",node:"orbit",color:[.86,.32,.3],dim:[.26,.11,.11]},{key:"pink-heart",label:"Pink Heart",shape:"heart",terminal:"jelly",node:"twinkle",color:[1,.5,.72],dim:[.3,.14,.22]}],Jl=n=>{let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return Zl[(t>>>0)%Zl.length]},ne={cellN:[.22,.22,.28],p:[.34,.9,.66],litP:[.5,1.1,.85],invert:[.62,.5,1],repeat:[1,.82,.4],dead:[.7,.34,.32],white:[1,1,1]},Un=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],Qr=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],T_=[[.34,.9,.62],[.52,1,.8],[.24,.7,.48]],b_=[[.82,.88,1],[.98,.98,1],[.64,.72,.9]],Ql=n=>{const t=[93,202,165],e=[224,176,112],i=[208,96,90],s=(r,a,o)=>`rgb(${Math.round(r[0]+(a[0]-r[0])*o)},${Math.round(r[1]+(a[1]-r[1])*o)},${Math.round(r[2]+(a[2]-r[2])*o)})`;return n>.5?s(t,e,(1-n)/.5):s(e,i,Math.max(0,(.5-n)/.5))},tc=n=>n==="INVERT"?ne.invert:n==="REPEAT"?ne.repeat:n==="DEAD"?ne.dead:ne.white;function A_(n,t){const e=new ss({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(329226,1);const i=new rs,s=1.46,r=1.04,a=new zn(-1,1,1,-1,.01,100);a.position.set(0,0,4),a.lookAt(0,0,0);const o=new cr(9e3,{additive:!0});i.add(o.points);const l=new la(e);l.addPass(new ca(i,a)),l.addPass(new kn(new Ft(1,1),.6,.5,.22)),l.addPass(new ha);const c="http://www.w3.org/2000/svg",u="ui-monospace,SFMono-Regular,Menlo,monospace",d=G=>{const W=document.createElement("div");return W.style.cssText=G,document.body.appendChild(W),W},f=document.createElementNS(c,"svg");f.setAttribute("viewBox","0 0 48 48"),f.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none";const m=document.createElementNS(c,"circle");m.setAttribute("cx","24"),m.setAttribute("cy","24"),m.setAttribute("r","21"),m.setAttribute("fill","none"),m.setAttribute("stroke",Ql(1)),m.setAttribute("stroke-width","1.6"),f.appendChild(m),document.body.appendChild(f);const g=d(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${u};color:#9a9aa6;pointer-events:none;text-align:center`),_=d(`position:fixed;left:12px;bottom:12px;font:11px ${u};color:#55555f;pointer-events:none`),p=d(`position:fixed;right:12px;bottom:12px;font:11px ${u};color:#6a6a76;pointer-events:none;text-align:right`);p.innerHTML='<span style="color:#9e80ff">◍ invert</span> · <span style="color:#ffd166">◆ repeat</span> · <span style="color:#b35754">✕ dead</span>';const h=d(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${u};text-align:center;pointer-events:none`);let b,v,y=[],O=new Map,C=null,w=Jl(t.seed);const D=()=>Un(w.color,ne.white,.28);function T(){y=[],O=new Map;for(const G of["left","right"])Li(b,G).terminals.forEach((W,it)=>{for(const Z of W.outcomes){const ft=ua(G,it,Z.cell);y.push({side:G,term:it,cell:Z.cell,kind:Z.kind,dots:ft}),O.set(`${G}:${it}:${Z.cell}`,ft)}})}function M(G,W){b=hr(G,W),v=new ur(b),w=Jl(W),T(),h.style.display="none"}M(t.spec,t.seed);function R(){const G=window.innerWidth,W=window.innerHeight;e.setSize(G,W),l.setSize(G,W);const it=G/W,Z=Math.max(r,s/it);a.top=Z,a.bottom=-Z,a.right=Z*it,a.left=-Z*it,a.updateProjectionMatrix(),fr(pr(Z)),T()}window.addEventListener("resize",R),R();const j=(G,W)=>{const it=n.getBoundingClientRect();return[((G-it.left)/it.width*2-1)*a.right,(-((W-it.top)/it.height)*2+1)*a.top]},Y=(G,W,it)=>{let Z=-1,ft=.22;for(let ht=0;ht<8;ht++){const[dt,L]=qe(G,ht),Bt=Math.hypot(W-dt,it-L);Bt<ft&&(ft=Bt,Z=ht)}return Z};n.addEventListener("pointermove",G=>C=j(G.clientX,G.clientY)),n.addEventListener("pointerup",G=>{const[W,it]=j(G.clientX,G.clientY);if(v.phase==="PLAN")v.chooseSide(W<0?"left":"right");else if(v.phase==="RUN"&&v.playerSide){const Z=Y(v.playerSide,W,it);Z>=0&&v.firePlayer(Z)}});const st=.012,X=(G,W)=>{const it=G[Math.max(0,W-1)],Z=G[Math.min(G.length-1,W+1)];let ft=Z.x-it.x,ht=Z.y-it.y;const dt=Math.hypot(ft,ht)||1;return ft/=dt,ht/=dt,[ft,ht,-ht,ft]},I=(G,W)=>{let it=0;for(;it<G.length-2&&G[it+1].u<W;)it++;const Z=G[it],ft=G[Math.min(it+1,G.length-1)],ht=Math.max(0,Math.min(1,(W-Z.u)/(ft.u-Z.u||1)));let dt=ft.x-Z.x,L=ft.y-Z.y;const Bt=Math.hypot(dt,L)||1;return dt/=Bt,L/=Bt,{x:Z.x+(ft.x-Z.x)*ht,y:Z.y+(ft.y-Z.y)*ht,nx:-L,ny:dt}};function U(G,W,it,Z,ft,ht,dt){const L=[W[0]*.7,W[1]*.7,W[2]*.7];for(let wt=0;wt<G.length;wt++){const Nt=G[wt];if(Nt.u>ft)break;const[,,Rt,Wt]=X(G,wt),{b:Tt,col:S}=Z(Nt.u),x=.16*Math.max(0,Math.sin((Nt.u*2.2-ht*.09+dt)*Math.PI*2)),A=Un(W,S,Math.min(1,Tt)),N=.45+x+.85*Tt;o.dot(Nt.x,Nt.y,A[0]*N,A[1]*N,A[2]*N,2.3+Tt*3.6,.95);for(const F of[1,-1]){const k=Un(L,S,Math.min(1,Tt*.8)),rt=.3+x*.7+.6*Tt;o.dot(Nt.x+Rt*F*st,Nt.y+Wt*F*st,k[0]*rt,k[1]*rt,k[2]*rt,1.6+Tt*2.2,.85)}}const Bt=5;for(let wt=0;wt<Bt;wt++){const Nt=(ht*.13+wt/Bt+dt*.13)%1;for(let Rt=0;Rt<5;Rt++){const Wt=Nt-Rt*.022;if(Wt<=.005||Wt>ft)continue;const Tt=I(G,Wt),S=Math.sin(Wt*24+ht*2.2+dt)*st,x=(1-Rt/5)*.85;o.dot(Tt.x+Tt.nx*S,Tt.y+Tt.ny*S,it[0]*x,it[1]*x,it[2]*x,2.8-Rt*.4,.92)}}}const P=(G,W,it,Z,ft,ht)=>{for(const dt of G){const L=(.3+.7*dt.depth+dt.scan*.7)*ht;o.dot(W+dt.x*Z,it+dt.y*Z,ft[0]*L,ft[1]*L,ft[2]*L,1.4+2.2*dt.depth+dt.scan*2.6,.95)}},$=(G,W,it,Z,ft,ht)=>{for(const dt of G){const L=(.3+.7*dt.depth+dt.scan*.7)*ht;o.dot(W+dt.x*Z,it+dt.y*Z,ft[0]*L,ft[1]*L,ft[2]*L,1.4+2.2*dt.depth+dt.scan*2.6,Math.min(1,dt.a))}},et=(G,W)=>{let it=0,Z=9;for(let ft=0;ft<G.length;ft++){const ht=Math.abs(G[ft].u-W);ht<Z&&(Z=ht,it=ft)}return G[it]},ct=(G,W,it,Z,ft,ht)=>{for(let dt=0;dt<8;dt++){const L=dt/8*Math.PI*2;o.dot(G+Math.cos(L)*it,W+Math.sin(L)*it,Z[0]*ht,Z[1]*ht,Z[2]*ht,ft,.9)}},pt=(G,W,it,Z,ft)=>{for(let ht=-2;ht<=2;ht++)o.dot(G+ht*it,W+ht*it,Z[0]*ft,Z[1]*ft,Z[2]*ft,3,.9),o.dot(G+ht*it,W-ht*it,Z[0]*ft,Z[1]*ft,Z[2]*ft,3,.9)};function bt(){const G=v.counts(),W=v.phase==="WON";h.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${W?"#8fd0b6":"#d0605a"}">${W?"◆ CIRCUIT TAKEN":"✕ REPELLED"}</div><div style="font-size:12px;color:#9a9aa6">you ${G.p} · host ${G.e} · neutral ${G.n}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,h.style.display="flex"}let Q=performance.now(),K=0;function mt(){const G=performance.now(),W=G/1e3,it=Math.min(.05,(G-Q)/1e3);Q=G,v.tick(it);const Z=new Map;for(const S of v.pulses){const x=`${S.side}:${S.terminalId}:${S.cell}`,A=Z.get(x)??[];A.push({p:S.elapsed/S.delay,owner:S.owner,kind:S.kind}),Z.set(x,A)}let ft=-1;const ht=v.phase==="RUN"?v.playerSide:C?C[0]<0?"left":"right":null;C&&ht&&(ft=Y(ht,C[0],C[1]));const dt=ft>=0&&ht;o.begin();for(const S of y){const x=v.playerSide?S.side===v.playerSide?"P":"E":"N";let A,N;if(x==="E"){const at=.8+.2*(S.term%2);A=Qr(w.dim,at),N=Qr(w.color,at)}else{const St=x==="P"||x==="N"&&S.side==="left"?T_:b_,lt=St[S.term%St.length];A=Qr(lt,x==="N"?.24:.2),N=lt}const F=dt&&S.side===ht&&S.term===ft,k=Z.get(`${S.side}:${S.term}:${S.cell}`),rt=S.kind==="DEAD"?.66:1;U(S.dots,A,N,at=>{let St=F?.42:0,lt=F?tc(S.kind):ne.white;if(k)for(const xt of k){const Ct=at<=xt.p?Math.exp(-(xt.p-at)/.12):Math.exp(-(at-xt.p)/.025);Ct>St&&(St=Ct,lt=xt.kind==="DEAD"?ne.dead:xt.owner==="P"?ne.litP:D())}return{b:St,col:lt}},rt,W,S.term*.6+(S.side==="left"?0:1.7));const ot=F?1:.7;if(S.kind==="INVERT"){const at=et(S.dots,.5);ct(at.x,at.y,.02,ne.invert,2.4,ot)}else if(S.kind==="REPEAT"){const at=et(S.dots,.5),St=.7+.3*Math.sin(G/200);for(let lt=-1;lt<=1;lt++)for(let xt=-1;xt<=1;xt++)o.dot(at.x+lt*.014,at.y+xt*.014,ne.repeat[0]*ot*St,ne.repeat[1]*ot*St,ne.repeat[2]*ot*St,3)}else if(S.kind==="DEAD"){const at=et(S.dots,.66);pt(at.x,at.y,.012,ne.dead,ot)}}for(const S of v.pulses){const x=O.get(`${S.side}:${S.terminalId}:${S.cell}`);if(!x)continue;const A=et(x,Math.min(1,S.elapsed/S.delay)),N=S.kind==="DEAD"?ne.dead:Un(S.owner==="P"?ne.litP:D(),ne.white,.4);o.dot(A.x,A.y,N[0],N[1],N[2],9)}const L=v.playerSide?v.playerSide==="left"?"right":"left":null,Bt=S=>S==="P"?v.playerSide:S==="E"?L:null,wt=new Map;if(dt)for(const S of y)S.side===ht&&S.term===ft&&S.kind!=="DEAD"&&wt.set(S.cell,S.kind);for(let S=0;S<12;S++){const[x,A]=ei(S),N=v.owners[S],F=v.claimFlash[S]/.35,k=Bt(N);if(k&&N==="E"){const ot=Un(w.color,ne.white,F*.5);$(Kl(w.node,w.shape,W+S*.5),x,A,.042,ot,.95+F)}else if(k){const ot=k==="left"?"octa":"cube",at=Un(ne.p,ne.white,F*.6);P(oh(ot,W+S*.5),x,A,.04,at,.95+F)}else{const at=Un(ne.cellN,ne.white,F*.7);for(let St=-1;St<=1;St++)for(let lt=-1;lt<=1;lt++)o.dot(x+St*.026,A+lt*.026,at[0],at[1],at[2],4.5)}const rt=wt.get(S);rt&&ct(x,A,.058,tc(rt),3,.9)}const Nt=.05*Math.min(1.45,.86+.14*Di());for(const S of["left","right"]){const x=S==="left"?"octa":"cube",A=v.playerSide?S===v.playerSide?"P":"E":"N",N=A==="P"?ne.p:A==="E"?w.color:ne.cellN;for(let F=0;F<8;F++){const[k,rt]=qe(S,F),ot=ht===S&&ft===F&&(v.phase==="PLAN"||S===v.playerSide),at=ot?1.6:v.phase==="PLAN"?.7+.35*Math.sin(G/240+F):1,St=ot?Un(N,ne.white,.4):N;A==="E"?$(Kl(w.terminal,w.shape,W+F*.7),k,rt,Nt,St,at):P(rh(x,W+F*.7),k,rt,Nt,St,at)}}const Rt=.99*Di();for(let S=0;S<v.pBudget;S++)o.dot(-.24+S*.05,-Rt,ne.p[0],ne.p[1],ne.p[2],5);o.commit(e.getPixelRatio()),l.render();const Wt=Math.max(0,v.timeLeft/b.params.tMatch);m.setAttribute("r",String(3+18*Wt)),m.setAttribute("stroke",Ql(Wt));const Tt=v.counts();_.textContent=`you c${b.spec.attacker} vs ${w.label} c${b.spec.defender} · ${Tt.p}–${Tt.e} · lead wins`,v.phase==="PLAN"?(g.textContent="READ BOTH CIRCUITS — hover a terminal to preview its reach, then click a side to take it",g.style.opacity="1"):v.phase==="RUN"?(g.textContent="fire your terminals · dead stubs waste a pulse · later light wins the cell",g.style.opacity="0.7"):g.style.opacity="0",(v.phase==="WON"||v.phase==="LOST")&&h.style.display==="none"&&bt(),K=requestAnimationFrame(mt)}return mt(),{regenerate:(G,W)=>M(G,W),chooseSide:G=>v.chooseSide(G),fire:G=>v.firePlayer(G),game:()=>v,dispose(){cancelAnimationFrame(K),window.removeEventListener("resize",R),o.dispose(),l.dispose(),[f,g,_,p,h].forEach(G=>G.remove()),e.dispose()}}}const Ys=(n,t)=>{const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)},w_=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t));function da(n,t,e,i,s){const r=Math.sin(t),a=Math.cos(t),o=Math.sin(n),l=Math.cos(n);return(c,u,d)=>{const f=c*l+d*o,m=-c*o+d*l,g=u*a-m*r,_=u*r+m*a;return[e+f*s,i-g*s,_]}}function R_(n,t,e,i){const s=2*t*e+i,r=n%s,a=new Array(t).fill(0);let o=-1;if(r<2*t*e){const l=Math.floor(r/e),c=(r-l*e)/e,u=1-(1-Math.min(1,c/.7))**3;if(l<t){for(let d=0;d<l;d++)a[d]=1;a[l]=u,o=l}else{const d=2*t-1-l;for(let f=0;f<d;f++)a[f]=1;a[d]=1-u,o=d}}return{amount:a,active:o}}function C_(n){const t=[];for(let e=0;e<n;e++){const i=Math.min(2,Math.floor(Ys(e,2.3)*3)),s=-1+.5*Math.min(3,Math.floor(Ys(e,5.9)*4)),r=Ys(e,7.7)<.5?1:-1;t.push({axis:i,lo:s,hi:s+.5,ang:r*Math.PI/2})}return t}const ec=C_(12);function P_(n,t,e,i){let s=n,r=t,a=e,o=!1;for(let l=0;l<ec.length;l++){if(i.amount[l]<=0)continue;const c=ec[l],u=c.axis===0?s:c.axis===1?r:a;if(u<c.lo||u>=c.hi)continue;l===i.active&&(o=!0);const d=c.ang*i.amount[l],f=Math.cos(d),m=Math.sin(d);if(c.axis===0){const g=r*f-a*m;a=r*m+a*f,r=g}else if(c.axis===1){const g=s*f+a*m;a=-s*m+a*f,s=g}else{const g=s*f-r*m;r=s*m+r*f,s=g}}return[s,r,a,o]}function L_(n,t,e,i){const r=da(i*.5,.4+.06*Math.sin(i*.35),n,t,e),a=i*(.5+(1.7-.5)*4),o=e/11,l=[],c=6,u=12;for(let d=0;d<=c;d++){const f=-Math.PI/2+d/c*Math.PI,m=Math.cos(f),g=Math.sin(f),_=Math.max(1,Math.round(Math.abs(m)*u));for(let p=0;p<_;p++){const h=p/_*2*Math.PI,[b,v,y]=r(m*Math.cos(h),g,m*Math.sin(h)),O=(y+1)/2,C=w_(h+i*.5,a),w=Math.exp(-(C*C)/.18)*Math.max(0,y);l.push({x:b,y:v,z:y,r:(.4+1*O+.8*w)*o,white:.62-.54*O,a:.6+.4*Math.min(1,w)})}}return l}function D_(n,t,e,i){const s=da(i*.55,.35+.1*Math.sin(i*.9),n,t,e),r=e/11,a=R_(i,12,.42,1.2),o=[],l=5,c=10;for(let u=0;u<=l;u++){const d=-Math.PI/2+u/l*Math.PI,f=Math.cos(d),m=Math.sin(d),g=Math.max(1,Math.round(Math.abs(f)*c));for(let _=0;_<g;_++){const p=_/g*2*Math.PI,[h,b,v,y]=P_(f*Math.cos(p),m,f*Math.sin(p),a),[O,C,w]=s(h,b,v),D=(w+1)/2;o.push({x:O,y:C,z:w,r:(.4+1*D+(y?.4:0))*r,white:.62-.54*D-(y?.16:0),a:.85})}}return o}function I_(n,t,e,i){const s=da(i*.18,.38,n,t,1),r=e/11,a=[],o=6,l=11;for(let c=0;c<=o;c++){const u=-Math.PI/2+c/o*Math.PI,d=Math.cos(u),f=Math.sin(u),m=.62*Math.sin(i*2.1-c*.52)+.38*Math.sin(i*1.27+c*.83),g=e*(.9+.11*m),_=Math.max(1,Math.round(Math.abs(d)*l));for(let p=0;p<_;p++){const h=p/_*2*Math.PI,[b,v,y]=s(d*Math.cos(h)*g,f*g,d*Math.sin(h)*g),O=(y/e+1)/2,C=Math.max(0,m);a.push({x:b,y:v,z:y,r:(.4+1*O)*(1+.4*C)*r,white:.66-.56*O-.1*C,a:.8})}}return a}const U_={searching:L_,listening:I_,solving:D_};function N_(n){return["searching","listening","solving"][Math.floor(Ys(n,3.7)*3)%3]}function gh(n,t,e,i,s,r,a,o){const l=U_[t](e,i,s,r);l.sort((u,d)=>u.z-d.z);const c=1+.35*Math.max(0,o-1);for(const u of l){const d=Math.min(1,(u.a??1)*o);if(d<.02)continue;const f=Math.max(0,Math.min(1,1-u.white));n.fillStyle=`rgba(${Math.round(f*255*a[0])},${Math.round(f*255*a[1])},${Math.round(f*255*a[2])},${d})`,n.beginPath(),n.arc(u.x,u.y,Math.max(.35,u.r*c),0,Math.PI*2),n.fill()}}const F_=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)},O_=n=>{const t=Qs.find(e=>e.name===n);if(!t)throw new Error(`glyph ${n} not found`);return t},Bs=30,B_=[93,202,165],nc=[224,176,112],k_=[208,96,90],ic=(n,t,e)=>`rgb(${Math.round(n[0]+(t[0]-n[0])*e)},${Math.round(n[1]+(t[1]-n[1])*e)},${Math.round(n[2]+(t[2]-n[2])*e)})`,sc=n=>n>.5?ic(B_,nc,(1-n)/.5):ic(nc,k_,Math.max(0,(.5-n)/.5)),z_=[.74,.82,.96],H_=[.44,.9,.74],V_=[.96,.6,.54],G_=1.6,rc=15,W_=3.5;function X_(n,t){const e=n.getContext("2d"),i=Math.min(2,window.devicePixelRatio||1),s=new q(0,0,0),r=1.12,a=.7,o=new zn(-1,1,1,-1,.01,100);o.position.set(0,0,4),o.lookAt(s);const l=new Wc(o,n);l.enableDamping=!0,l.enablePan=!1,l.enableZoom=!1,l.target.copy(s);const c="http://www.w3.org/2000/svg",u="ui-monospace,SFMono-Regular,Menlo,monospace",d=(A,N)=>{const F=document.createElement(A);return F.style.cssText=N,document.body.appendChild(F),F},f=document.createElementNS(c,"svg");f.setAttribute("viewBox","0 0 220 130"),f.style.cssText="position:fixed;left:50%;bottom:14px;transform:translateX(-50%);width:220px;height:130px;pointer-events:none";const m=[];for(let A=0;A<Bs;A++){const N=Math.PI*(1-A/(Bs-1)),F=document.createElementNS(c,"circle");F.setAttribute("cx",String(110+96*Math.cos(N))),F.setAttribute("cy",String(120-96*Math.sin(N))),F.setAttribute("r","2.6"),F.setAttribute("fill","#2a2a34"),f.appendChild(F),m.push(F)}const g=document.createElementNS(c,"text");g.setAttribute("x","110"),g.setAttribute("y","112"),g.setAttribute("text-anchor","middle"),g.setAttribute("fill","#e8c06a"),g.setAttribute("style",`font:11px ${u};letter-spacing:.15em;opacity:0`),f.appendChild(g),t.skill>=1&&document.body.appendChild(f);const _=document.createElementNS(c,"svg");_.setAttribute("viewBox","0 0 48 48"),_.style.cssText="position:fixed;left:50%;top:10px;transform:translateX(-50%);width:46px;height:46px;pointer-events:none";const p=document.createElementNS(c,"circle");p.setAttribute("cx","24"),p.setAttribute("cy","24"),p.setAttribute("r","21"),p.setAttribute("fill","none"),p.setAttribute("stroke",sc(1)),p.setAttribute("stroke-width","1.6"),_.appendChild(p),document.body.appendChild(_);const h=d("div",`position:fixed;top:10px;right:12px;display:flex;gap:6px;font:13px ${u};color:#5a5a64;pointer-events:none`),b=[0,1,2].map(()=>{const A=document.createElement("span");return A.textContent="✕",h.appendChild(A),A}),v=d("div",`position:fixed;left:50%;top:30px;transform:translateX(-50%);font:11px ${u};color:#8fd0b6;pointer-events:none;opacity:0`),y=d("div",`position:fixed;left:12px;bottom:12px;font:11px ${u};color:#55555f;pointer-events:none`),O=d("div","position:fixed;width:16px;height:16px;border:1px solid #6fe0b8;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .1s"),C=d("div","position:fixed;inset:0;pointer-events:none;box-shadow:inset 0 0 120px 20px #d0403a;opacity:0;transition:opacity .3s"),w=d("div",`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${u};text-align:center;pointer-events:none`);let D,T,M,R,j,Y,st,X,I=[],U=5,P,$=En("drift"),et=!1,ct=!1,pt=-1e9;function bt(A,N){D=qc(A,N),P=new jc(D),$=En(`${N}:drift`),U=sa[A].thetaLockDeg;const F=D.points.length;T=new Float32Array(F*3),D.points.forEach((k,rt)=>{T[rt*3]=k.pos[0],T[rt*3+1]=k.pos[1],T[rt*3+2]=k.pos[2]}),M=T.slice(),R=new Float32Array(F),j=new Float32Array(F*2),Y=new Uint8Array(F),st=new Uint8Array(F),X=new Float32Array(F),I=D.locks.map(k=>{const rt=[],ot=[],at=new Map;return D.points.forEach((St,lt)=>{St.pop==="SIGNAL"&&St.lock===k.index&&(rt.push(lt),ot.push(St),st[lt]=1,at.set(lt,tr(St.pos,Mn(k.axis,Tn(St.pos,k.axis)))))}),{axis:k.axis,glyph:O_(k.glyph),signalIdx:rt,signalPts:ot,flat:at,coherence:0}}),y.textContent=`D${A} · ${N} · ${D.locks.length} lock(s) · orbit to align · click to extract · R`,w.style.display="none",et=!1,ct=!1}bt(t.difficulty,t.seed);function Q(){const A=window.innerWidth,N=window.innerHeight;n.width=Math.round(A*i),n.height=Math.round(N*i),n.style.width=A+"px",n.style.height=N+"px";const F=A/N;o.left=-r*F,o.right=r*F,o.top=r,o.bottom=-r,o.updateProjectionMatrix()}window.addEventListener("resize",Q),Q();function K(A){const N=I[A];if(!N)return;const F=2*Math.PI/180*$(),k=os($);N.axis=bn(er(N.axis,k,F)),D.points.forEach((rt,ot)=>{rt.lock===A&&(rt.pos=er(rt.pos,k,F),T[ot*3]=rt.pos[0],T[ot*3+1]=rt.pos[1],T[ot*3+2]=rt.pos[2])}),N.flat.clear();for(const rt of N.signalIdx){const ot=D.points[rt].pos;N.flat.set(rt,tr(ot,Mn(N.axis,Tn(ot,N.axis))))}}let mt=0,G=0,W=-1,it=-1,Z=-1;const ft=new q,ht=new q;function dt(A,N){const F=n.getBoundingClientRect(),k=A-F.left,rt=N-F.top;let ot=-1,at=676,St=-1,lt=400;for(let xt=0;xt<Y.length;xt++){if(!Y[xt])continue;const Ct=j[xt*2]-k,_t=j[xt*2+1]-rt,ut=Ct*Ct+_t*_t,Pt=D.points[xt];Pt.pop==="SIGNAL"&&Pt.lock===Z&&!P.extracted[Z]?.has(xt)&&ut<at&&(at=ut,ot=xt),ut<lt&&(lt=ut,St=xt)}return ot>=0?ot:St}n.addEventListener("pointerdown",A=>{mt=A.clientX,G=A.clientY}),n.addEventListener("pointermove",A=>{W=A.clientX,it=A.clientY}),n.addEventListener("pointerup",A=>{if(Math.hypot(A.clientX-mt,A.clientY-G)>5||!et||P.over||Z<0)return;const F=dt(A.clientX,A.clientY);if(F<0)return;P.select(F,Z)==="trip"&&(X[F]=.5,C.style.opacity="0.9",setTimeout(()=>C.style.opacity="0",60))});const L=new q,Bt=new Ue,wt=new Ue,Nt=new Ue,Rt=new q;function Wt(){const A=P.result();let N="#8fd0b6",F="",k="";P.phase==="WON"?(F="◆ EXTRACTED",k=`keys: ${A.keys.join(" · ")}
margin ${A.margin.toFixed(0)} · ${A.trips} strike(s)`):P.phase==="LOST_CRIT"?(N="#d0605a",F="⚠ ALARM",k="intrusion traced — three tripwires"):(N="#e0b070",F="⌛ SIGNAL LOST",k="the run timed out"),w.innerHTML=`<div style="font-size:22px;letter-spacing:.2em;color:${N}">${F}</div><div style="font-size:12px;color:#9a9aa6;white-space:pre-line">${k}</div><div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`,w.style.display="flex"}let Tt=performance.now(),S=0;function x(){const A=performance.now(),N=A/1e3,F=Math.min(.05,(A-Tt)/1e3);Tt=A,l.update(),o.updateMatrixWorld();const k=o.position,rt=bn([k.x-s.x,k.y-s.y,k.z-s.z]);let ot=0;Z=-1;let at=180;I.forEach((z,nt)=>{z.coherence=ra(z.signalPts,z.glyph,rt),z.coherence>ot&&(ot=z.coherence,Z=nt);const gt=Zi(rt,z.axis);gt<at&&(at=gt)}),M.set(T),R.fill(0);let St=0;for(const z of I){const nt=F_(.12,.9,z.coherence);if(nt>St&&(St=nt),!(nt<=.001))for(const gt of z.signalIdx){const Mt=z.flat.get(gt),kt=T[gt*3],Jt=T[gt*3+1],Qt=T[gt*3+2];M[gt*3]=kt+(Mt[0]-kt)*nt,M[gt*3+1]=Jt+(Mt[1]-Jt)*nt,M[gt*3+2]=Qt+(Mt[2]-Qt)*nt,R[gt]=nt}}if(St>.001){const z=.85*St;for(let nt=0;nt<R.length;nt++)st[nt]||(R[nt]=-z)}const lt=et&&ot>.6,{wrapped:xt}=P.tick(F,lt,Z);if(xt&&P.drift&&Z>=0&&K(Z),P.phase==="RUN"&&P.tSweep){const z=-1+2*P.sweepT,nt=.14;for(let gt=0;gt<R.length;gt++){const Mt=Math.abs(M[gt*3+1]-z);Mt<nt&&(R[gt]=R[gt]+(1-Mt/nt)*.7)}}let Ct=-1;et&&!P.over&&W>=0&&(Ct=dt(W,it),Ct>=0&&(R[Ct]=R[Ct]+.5));const _t=k.distanceTo(s),ut=Math.max(0,1-(N-pt)/a),Pt=D.points.length,Ot=[],$t=new Float32Array(Pt);for(let z=0;z<Pt;z++)ht.set(M[z*3],M[z*3+1],M[z*3+2]).applyMatrix4(o.matrixWorldInverse),$t[z]=Math.max(0,Math.min(1,(-ht.z-(_t-1))/2)),ft.set(M[z*3],M[z*3+1],M[z*3+2]).project(o),j[z*2]=(ft.x*.5+.5)*window.innerWidth,j[z*2+1]=(-ft.y*.5+.5)*window.innerHeight,Y[z]=1,Ot.push(z),X[z]>0&&(X[z]=Math.max(0,X[z]-F));Ot.sort((z,nt)=>$t[nt]-$t[z]);const B=new Set;for(const z of P.extracted)for(const nt of z)B.add(nt);e.setTransform(i,0,0,i,0,0),e.clearRect(0,0,window.innerWidth,window.innerHeight);for(const z of Ot){const nt=$t[z],gt=R[z],Mt=B.has(z);let kt=(1-.55*nt)*(gt<0?1+gt:1);if(gt>0&&(kt+=gt*.95),Mt&&(kt+=.4),kt<.05)continue;let Jt=(rc+(W_-rc)*nt)*(1+.28*Math.max(0,gt)+(Mt?.2:0));Jt=Math.max(2.2,Jt);let Qt=Mt?H_:z_;if(X[z]>0)Qt=V_;else if(ut>0&&gt>0){const qt=Math.min(1,gt)*ut;Qt=[Qt[0]+(.95-Qt[0])*qt,Qt[1]+(.82-Qt[1])*qt,Qt[2]+(.42-Qt[2])*qt]}gh(e,N_(z),j[z*2],j[z*2+1],Jt,N*G_+z*.7,Qt,kt)}if(!et&&at<U&&!P.over?et=!0:et&&at>U*1.6&&(et=!1),et&&Z>=0){const z=k.distanceTo(s);L.set(rt[0],rt[1],rt[2]),Rt.set(...I[Z].axis),wt.setFromUnitVectors(L,Rt),Bt.copy(Nt).slerp(wt,.16),L.applyQuaternion(Bt),o.position.copy(s).addScaledVector(L,z)}if(et&&!ct&&(pt=N),ct=et,et&&!P.over&&Ct>=0){const z=n.getBoundingClientRect();O.style.left=`${z.left+j[Ct*2]}px`,O.style.top=`${z.top+j[Ct*2+1]}px`,O.style.borderColor=D.points[Ct]?.pop==="TRIP"?"#d0605a":"#6fe0b8",O.style.opacity="1"}else et&&!P.over&&W>=0?(O.style.left=`${W}px`,O.style.top=`${it}px`,O.style.borderColor="#44444c",O.style.opacity="1"):O.style.opacity="0";if(t.skill>=1){const z=Math.round(ot*Bs);for(let nt=0;nt<Bs;nt++)m[nt].setAttribute("fill",nt<z?et?"#e8c06a":"#5dcaa5":"#2a2a34");et&&Z>=0?(g.textContent=`⟡ ${I[Z].glyph.name}`,g.style.opacity="1"):g.style.opacity="0"}const yt=Math.max(0,P.timeLeft/P.tRun);p.setAttribute("r",String(3+18*yt)),p.setAttribute("stroke",sc(yt)),b.forEach((z,nt)=>z.style.color=nt<P.trips?"#d0605a":"#3a3a44"),et&&Z>=0&&!P.over?(v.textContent=`EXTRACT ${P.extractedCount(Z)} / ${D.locks[Z].signalCount}`,v.style.opacity="1"):v.style.opacity="0",P.over&&w.style.display==="none"&&Wt(),S=requestAnimationFrame(x)}return x(),{regenerate(A,N){bt(A,N)},alignLock(A){const N=I[A];if(!N)return;const F=o.position.distanceTo(s);Rt.set(...N.axis),o.position.copy(s).addScaledVector(Rt,F),l.update()},debugExtract(A,N){const F=I[A];if(!F)return;let k=0;for(const rt of F.signalIdx){if(k++>=N)break;P.select(rt,A)}},debugSolve(){for(let A=0;A<I.length;A++)for(const N of I[A].signalIdx)P.select(N,A)},debugTime(A){P.phase="RUN",P.timeLeft=Math.max(0,A)*P.tRun},dispose(){cancelAnimationFrame(S),window.removeEventListener("resize",Q),l.dispose(),[f,_,h,v,y,O,C,w].forEach(A=>A.remove())}}}const $_="Five games. CONSTELLATION, TRANSFER, CIRCUIT, SHAPES, and TUBES — the read-the-circuit model: wires are dotted tubes carrying visible elements (invert / repeat / dead), and you hover a terminal to preview its reach. Reading the two circuits to pick the better side is the skill. Press 1–5; R reseeds.",Y_=[{build:"live",date:"2026-08-11",title:"TUBES (game 5) — the read-the-circuit model",added:["Wires are thin dotted tubes (a cut-and-straightened torus: lit round core + dim walls).","Every terminal is legible: a fork is two tubes, and each tube carries a visible element — an INVERT ring, a REPEAT node, or a DEAD stub that never reaches a cell.","Hover a terminal to preview its reach (its tubes light up and the cells it reaches are ringed by element colour). Reading both circuits to pick the better side is the skill.","Terminals are the searching primitives from SHAPES (octahedra left, cubes right); a very slow ambient band drifts along every tube so the circuit is always gently alive. Mechanics reuse TRANSFER."]},{build:null,date:"2026-08-11",title:"SHAPES (game 4, experimental) — Modes × Primitives",added:["Terminals are Braille-Lab “searching” primitives — octahedra on the left, cubes on the right (lat/long lattice + scan meridian).","A claimed cell resolves into the “solving” (rubik) primitive of the side that took it, in that side’s colour.","Ported the searching + solving modes and the cube/octahedron warps into src/render/primitives.ts; kept the lit angular traces + bloom.","Reuses TRANSFER’s mechanics. Press 4."]},{build:null,date:"2026-08-11",title:"CIRCUIT (game 3) — lit circuit board",added:["A separate tab (press 3): the Paradroid duel rendered as a real circuit — right-angle traces routed through per-terminal vertical buses into the cell strip.","Light flows through the traces as pulses travel: a bright head with a trailing glow that lights each trace segment it passes, plus a bloom pass for the “deeper light”.","Reuses TRANSFER’s verified mechanics; the renderer (angular routing + additive dots + UnrealBloom) is the whole difference."]},{build:null,date:"2026-08-11",title:"TRANSFER (game 2) — playable",added:["The circuit renders as a flat dot-field: a central 12-cell strip flanked by two 8-terminal wiring layers, wires threading terminal → cell.","PLAN: click a side to take it. RUN: click your terminals to fire pulses that travel the wires (with tails) and claim cells — later pulse wins.","Owner colour (you teal / host coral), claim flash, REPEAT guns, the enemy AI firing back, shrinking timer ring, budget dots, win/lose.","Built on the logic core (deterministic sim + solution-first generator, verified across 200 boards). 6-6 rematch still TODO."]},{build:null,date:"2026-08-11",title:"CONSTELLATION: feel + content pass",added:["Extraction magnetism (cursor grabs the nearest glyph point) + reticle snap + extract-pop.","Glyph bank grown to 15 (min Hamming 8).","Timer is a hollow thin ring that shrinks and shifts teal → amber → red."]},{build:null,date:"2026-08-11",title:"Phase 2 — extraction, sweep, win/lose",added:["Click the glyph’s points while aligned to extract them; all points → lock solved, all locks → win.","TRIP hazards cost a strike + 10% of the timer (3 strikes = alarm); NOISE clicks are duds.","A scan wavefront sweeps the cloud; a pass caught mid-extraction while misaligned wipes a point back. Axis drift on D4+.","HUD: depleting timer, strike pips, extraction progress; win / alarm / timeout end screens with margin + extracted keys."]},{build:null,date:"2026-08-11",title:"Phase 1 polish",added:["θ_lock soft-snap with hysteresis (magnetic assist, hands-off).","Coherence → per-point brightness; the noise dims as a lock forms so the glyph reads cleanly.","A gold “found” shine (color tint + bloom) fires the moment a lock completes.","Diegetic dotted-arc coherence meter."]},{build:null,date:"2026-08-11",title:"Board wired into the renderer",added:["A generated CONSTELLATION board renders as a halftone point cloud.","Orbit-to-align: as your view nears a hidden axis, that lock’s signal contracts and the glyph resolves out of the noise.","R to reseed; this dev-log panel on the version badge."]},{build:null,date:"2026-08-11",title:"CONSTELLATION generator",added:["Solution-first, seeded board generator (spec §6): hidden axis, back-projected key glyph, TRIP hazards in the margin ring, noise fill.","Rigid-Procrustes coherence metric (fits the whole signal set to the glyph) — also the gameplay alignment cue.","False-constellation uniqueness check: verified across 1000 boards, zero spurious, all first-try.","Dependency-free vec3 math so the logic runs headless in Node for testing."]},{build:null,date:"2026-08-11",title:"Shared glyph bank",added:["10× 5×7 key glyphs (CONSTELLATION) + 6× 2×4 braille symbols (BREACH) — one cross-game visual language.","Distinctness verified numerically (min Hamming 9 and 4).","Helpers: back-projection points, the 1-dot TRIP margin ring, Hamming distance."]},{build:"e059300d",date:"2026-08-11",title:"Scaffold, renderer & cache-busting",added:["TypeScript + Vite + Three.js project.","Dotted-halftone look as a GPU point shader (depth → grayscale + size), ported from the Braille PoC.","Seeded RNG (mulberry32) + the shared session contract.","Cache-busting toolkit wired into the build (this badge)."]}],q_=[{phase:"Now",note:"CONSTELLATION full loop",items:[{label:"Board renders + resolves on alignment",done:!0},{label:"θ_lock soft-snap; coherence → brightness; found-shine",done:!0},{label:"Extraction, sweep + axis drift, TRIP strikes, win/lose + scoring",done:!0},{label:"Trace-stroke extraction variant + audio (coherence tone, ticks)"},{label:"SKILL modifiers (hint band, TRIP shimmer) + OVERRIDE + exfil rule"}]},{phase:"Next",note:"Harden + present",items:[{label:"Difficulty/skill/seed selector UI (PLAN screen)"},{label:"Feel tuning pass (extraction radius, sweep pressure, drift)"},{label:"Deterministic replay (seed + input log) as an acceptance test"}]},{phase:"Later",note:"The rest of the series",items:[{label:"Braille dot-matrix renderer (second render target)"},{label:"TRANSFER (Paradroid duel), TRACE (node capture), BREACH (matrix)"},{label:"Write the 4 missing specs (deduction, flow-routing, timing, crosslink)"},{label:"Host integration + deploy"}]}],j_=[{name:"CONSTELLATION",status:"playable",fantasy:"An encrypted datastructure hangs in space as a cloud of noise. From exactly one viewpoint the noise collapses into a key. Find the angle, read the key, extract it without touching the tripwires.",how:["Orbit the cloud (drag). One hidden viewing angle makes the scattered dots snap into a glyph.","As you near that angle the signal dots contract and brighten; within tolerance the view soft-snaps and the glyph is legible. The dotted arc fills toward a lock.","While aligned, click every glyph point to extract it (they light up). All points solves the lock; a gold shine confirms the key.","A NOISE click is a dud (small time cost); a TRIP dot — just outside the glyph outline — is a hazard hit. Harder boards hide several glyphs on different axes; solve them in any order."],fail:["Critical: 3 TRIP hits trips the alarm.","Soft: the run timer expires — attempt lost, retry allowed. You can jack out any time.","Pressure: a scan wavefront sweeps the cloud; caught mid-extraction while misaligned, it wipes a recovered point. Top tiers slowly drift the axis."],note:"Playable end to end. Still to come: trace-stroke variant, audio, and SKILL/OVERRIDE modifiers."},{name:"TRANSFER",status:"playable",fantasy:"Your influence device fights a host machine’s processor for control of its 12 registers. Majority wins; you become what you defeat. (Paradroid / Quazatron.)",how:["Press 2 to play. PLAN: click the left or right wiring layer to take it (the two differ in quality — read before you commit).","RUN: click your terminals to fire a limited stock of pulses. Each travels its wire and claims (or inverts) central cells; REPEAT guns keep re-claiming.","Later pulse wins a contested cell — hold some back to overwrite the host late, after its claims land."],fail:["Fail to hold the majority of 12 cells when the timer runs out. (6-6 rematch is still TODO.)"],note:"Playable MVP: firing, pulses, claims, AI, win/lose. Still to come: 6-6 rematch, richer wire visuals, side-select timer."},{name:"TRACE",status:"planned",fantasy:"Breach a network at an I/O port and capture a path to the registry before the system’s diagnostic subroutine traces the intrusion back to your entry.",how:["Capture adjacent nodes; each attempt rolls a visible detection chance (node rating vs your level).","Fortify nodes to slow the tracer; spend NUKE (silent capture) / FREEZE (halt tracer); grab STORE loot on detours.","On detection a tracer crawls back toward your entry on per-node countdowns — outrun it or get cut off."],fail:["Critical: the tracer reaches your entry node. Soft: jack out early, keep nothing."]},{name:"CIRCUIT",status:"playable",fantasy:"The same takeover fight as TRANSFER, but you are inside the board: a live circuit of glowing traces. Light you fire flows through the wiring and claims the cells it reaches.",how:["Press 3 to play. Same rules as TRANSFER — choose a side, then fire your terminals.","Each pulse is light travelling the right-angle traces; watch it thread the circuit and light the cell it lands on. Later light wins a contested cell."],fail:["Fail to hold the majority when the timer runs out."],note:"Game 3: TRANSFER’s mechanics with an angular, lit-circuit renderer (bloom + light-through-trace)."},{name:"SHAPES",status:"playable",fantasy:"The takeover duel as a lattice of thinking solids. The two sides are living primitives — octahedra searching on the left, cubes on the right — and every register you win resolves into your solid, turning like a solved puzzle.",how:["Press 4 (experimental). Same rules as TRANSFER — choose a side, fire your terminals.","Your terminals are “searching” primitives; a cell you claim becomes a “solving” one (octahedron if you took the left side, cube if the right)."],fail:["Fail to hold the majority when the timer runs out."],note:"Game 4: a Braille-Lab Modes × Primitives experiment over TRANSFER’s mechanics."},{name:"TUBES",status:"playable",fantasy:"The takeover duel where you can finally read the wiring. Two circuits of glowing tubes; each terminal fans out through inverters, repeaters and dead-ends to the register strip. Read them, take the better side, spend your pulses well.",how:["Press 5. PLAN: hover any terminal to light its tubes and preview which cells it reaches (rings coloured by element). Read both sides, then click the better circuit to take it.","A tube carrying an ◍ inverts the cell it reaches; a ◆ arms a repeat-gun; a ✕ dead-ends and wastes the pulse. A fork is two tubes.","RUN: fire your terminals; light threads the tubes and claims cells. Later light wins a contested cell."],fail:["Fail to hold the majority when the timer runs out."],note:"Game 5: the read-the-circuit model. Elements are derived from the (verified) outcome sim; the deeper 8×4 lane grid with JOIN is a later step."},{name:"BREACH",status:"planned",fantasy:"A code matrix scrolls before you. You have a tiny buffer. Chain one path through the grid that smuggles every daemon in at once. (Cyberpunk 2077 Breach Protocol.)",how:["Pick glyphs into a small buffer; picks alternate axis — row, then column, then row…","Complete each daemon (a target sub-sequence) as a contiguous run in the buffer; overlap them so one path completes several.","Avoid the WORM hazard cell, which wastes a slot and speeds the clock."],fail:["Soft: timer or buffer runs out with zero daemons completed. Margin = spare buffer + time."]}],_h=()=>(document.querySelector('meta[name="cb"]')?.getAttribute("content")||"").replace(/#.*$/,"")||"——",Ee=n=>n.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),K_=n=>n.build==="live"?_h():n.build??"—";function Z_(){const n=Y_.map(e=>{const i=e.added.map(s=>`<li>${Ee(s)}</li>`).join("");return`
      <div class="cx-ms">
        <div class="cx-ms-h"><span class="cx-tok">${Ee(K_(e))}</span>
          <span class="cx-ms-t">${Ee(e.title)}</span><span class="cx-date">${Ee(e.date)}</span></div>
        <ul>${i}</ul>
      </div>`}).join(""),t=q_.map(e=>{const i=e.items.map(s=>`<li class="${s.done?"done":""}">${s.done?"✓":"○"} ${Ee(s.label)}</li>`).join("");return`
      <div class="cx-rm">
        <div class="cx-rm-h">${Ee(e.phase)}${e.note?` <span class="cx-note">— ${Ee(e.note)}</span>`:""}</div>
        <ul>${i}</ul>
      </div>`}).join("");return`
    <div class="cx-status">${Ee($_)}</div>
    <div class="cx-scroll">
      <div class="cx-sec">Changelog</div>${n}
      <div class="cx-sec">Roadmap</div>${t}
    </div>`}function J_(){return`<div class="cx-scroll">${j_.map(t=>{const e=t.how.map(r=>`<li>${Ee(r)}</li>`).join(""),i=t.fail.map(r=>`<li>${Ee(r)}</li>`).join(""),s=t.note?`<div class="cx-gnote">${Ee(t.note)}</div>`:"";return`
      <div class="cx-game">
        <div class="cx-game-h"><span class="cx-game-n">${Ee(t.name)}</span>
          <span class="cx-badge cx-${t.status.replace(/\s/g,"")}">${Ee(t.status)}</span></div>
        <div class="cx-fantasy">${Ee(t.fantasy)}</div>
        <div class="cx-lbl">How to play</div><ul>${e}</ul>
        <div class="cx-lbl">Failure</div><ul class="cx-fail">${i}</ul>
        ${s}
      </div>`}).join("")}</div>`}function Q_(n){return`
    <div class="cx-head">
      <div>
        <div class="cx-title">hacking-mini-games</div>
        <div class="cx-sub">build <b>${Ee(_h())}</b></div>
      </div>
      <button class="cx-close" aria-label="close">✕</button>
    </div>
    <div class="cx-tabs">
      <button class="cx-tab ${n==="log"?"on":""}" data-tab="log">Dev Log</button>
      <button class="cx-tab ${n==="rules"?"on":""}" data-tab="rules">Rules</button>
    </div>
    ${n==="log"?Z_():J_()}`}const tx=`
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
`;function ex(){const n=document.createElement("style");n.textContent=tx,document.head.appendChild(n);const t=document.createElement("div");t.id="cx-panel",document.body.appendChild(t);let e="log";const i=()=>{t.innerHTML=Q_(e),t.querySelector(".cx-close")?.addEventListener("click",()=>s(!1)),t.querySelectorAll(".cx-tab").forEach(o=>{o.addEventListener("click",()=>{e=o.dataset.tab??"log",i()})})},s=o=>{o&&i(),t.classList.toggle("open",o)};let r=0;const a=()=>{const o=document.getElementById("cb-badge");if(o){o.title="click for dev log · token copied too",o.addEventListener("click",()=>s(!t.classList.contains("open")));return}r++<100&&setTimeout(a,50)};a(),window.addEventListener("keydown",o=>{o.key==="Escape"&&s(!1)})}const nx=[{game:"constellation",slot:"01",name:"CONSTELLATION",desc:"Orbit a cloud of signal until one hidden angle snaps the scatter into a glyph, then extract it before the sweep.",accent:"#6fe0b8",tint:[.44,.88,.72],motif:"globe"},{game:"tubes",slot:"05",name:"TUBES",desc:"Read two live circuits, take the better side, and fire terminals so your light claims the registers — dead stubs waste a pulse.",accent:"#8aa0ff",tint:[.58,.68,1],motif:"tube"}];function ix(n){const t="ui-monospace,SFMono-Regular,Menlo,monospace",e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=Math.min(2,window.devicePixelRatio||1),s=document.createElement("div");s.style.cssText="position:fixed;inset:0;z-index:2147483644;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.4rem;padding:2rem;background:#07070c;overflow:auto";const r=document.createElement("div");r.style.cssText="text-align:center",r.innerHTML=`<div style="font:11px ${t};letter-spacing:.3em;text-transform:uppercase;color:#5a5c6a">dotted-halftone intrusion puzzles</div><h1 style="margin:.7rem 0 0;font:400 24px/1.2 ${t};letter-spacing:.16em;color:#dfe1ea">HACKING&nbsp;MINI-GAMES</h1>`,s.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex;gap:20px;flex-wrap:wrap;justify-content:center;max-width:600px",s.appendChild(a);const o=document.createElement("div");o.style.cssText=`font:11px ${t};letter-spacing:.05em;color:#3f414d;text-align:center`,o.textContent="press 1–5 anytime · more games soon",s.appendChild(o);const l=[];for(const p of nx){const h=document.createElement("button");h.type="button",h.setAttribute("aria-label",`play ${p.name}`),h.style.cssText="all:unset;box-sizing:border-box;cursor:pointer;width:258px;background:#0e0f16;border:1px solid #1c1d29;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:border-color .18s,transform .18s;-webkit-tap-highlight-color:transparent";const b=document.createElement("div");b.style.cssText="position:relative;height:132px;background:#090a10;display:flex;align-items:center;justify-content:center";const v=document.createElement("canvas");v.style.cssText="display:block",v.width=Math.round(258*i),v.height=Math.round(132*i),v.style.width="258px",v.style.height="132px",b.appendChild(v);const y=document.createElement("div");y.textContent=p.slot,y.style.cssText=`position:absolute;top:8px;left:12px;font:300 26px ${t};letter-spacing:.05em;color:${p.accent};opacity:.55`,b.appendChild(y),h.appendChild(b);const O=document.createElement("div");O.style.cssText="padding:.9rem 1.1rem 1.1rem;text-align:left",O.innerHTML=`<div style="font:500 15px ${t};letter-spacing:.14em;color:#e6e8f0">${p.name}</div><div style="margin-top:.5rem;font:12px/1.6 ${t};color:#71737f">${p.desc}</div><div style="margin-top:.9rem;font:11px ${t};letter-spacing:.14em;color:${p.accent}">PLAY →</div>`,h.appendChild(O),h.addEventListener("mouseenter",()=>{h.style.borderColor=p.accent,h.style.transform="translateY(-2px)"}),h.addEventListener("mouseleave",()=>{h.style.borderColor="#1c1d29",h.style.transform="none"}),h.addEventListener("focus",()=>h.style.borderColor=p.accent),h.addEventListener("blur",()=>h.style.borderColor="#1c1d29"),h.addEventListener("click",()=>n(p.game)),a.appendChild(h),l.push({canvas:v,ctx:v.getContext("2d"),spec:p})}document.body.appendChild(s);function c(p,h,b,v,y){const O=h/2,C=b/2,w=h*.78,D=34,T=M=>Math.sin(M*3.1+v*.6)*9+Math.sin(M*6.7-v*.9)*4;for(let M=0;M<=D;M++){const R=M/D,j=O-w/2+R*w,Y=C+T(R),st=60;p.fillStyle=`rgba(${Math.round(st*y[0])},${Math.round(st*y[1])},${Math.round(st*y[2])},0.9)`,p.beginPath(),p.arc(j,Y,1.5,0,Math.PI*2),p.fill()}for(let M=0;M<3;M++){const R=(v*.13+M/3)%1;for(let j=0;j<6;j++){const Y=R-j*.03;if(Y<0||Y>1)continue;const st=O-w/2+Y*w,X=C+T(Y),I=(1-j/6)*.95;p.fillStyle=`rgba(${Math.round(210*y[0]+45)},${Math.round(210*y[1]+45)},${Math.round(210*y[2]+45)},${I})`,p.beginPath(),p.arc(st,X,2.4-j*.25,0,Math.PI*2),p.fill()}}}function u(p,h){p.ctx.setTransform(i,0,0,i,0,0),p.ctx.clearRect(0,0,258,132),p.spec.motif==="globe"?gh(p.ctx,"searching",258/2,132/2,42,h*1.4,p.spec.tint,1):c(p.ctx,258,132,h,p.spec.tint)}let d=0,f=!1;function m(){const p=performance.now()/1e3;for(const h of l)u(h,p);f&&(d=requestAnimationFrame(m))}function g(){if(!f){if(e){for(const p of l)u(p,.8);return}f=!0,d=requestAnimationFrame(m)}}function _(){f=!1,cancelAnimationFrame(d)}return{show(){s.style.display="flex",g()},hide(){s.style.display="none",_()},dispose(){_(),s.remove()}}}ex();const qs={difficulty:2,skill:2},xh=new Set(["transfer","circuit","shapes","tubes"]);let Qn=0;function vh(n){const t=document.createElement("div");t.style.cssText="position:fixed;top:12px;left:12px;right:12px;padding:10px 14px;z-index:2147483645;background:#2a0f12;border:1px solid #5a2a2f;border-radius:8px;color:#e6a6a6;font:12px/1.5 ui-monospace,Menlo,monospace;white-space:pre-wrap",t.textContent=`game failed to start:
${n instanceof Error?n.stack??n.message:String(n)}`,document.body.appendChild(t)}const Qi=["constellation","transfer","circuit","shapes","tubes","constellation-orbs"],nr="/hacking-mini-games/";let sn=null,qi="constellation",js=0;function sx(){document.getElementById("scene")?.remove();const n=document.createElement("canvas");return n.id="scene",document.getElementById("app").appendChild(n),n}function fa(n){sn?.dispose(),js=0,qi=n,ma.hide(),pa(!0),history.replaceState(null,"",`${nr}${Qi.indexOf(n)+1}`);const t=sx(),e=i=>({spec:Ji[Qn],seed:i,skill:qs.skill});try{sn=n==="transfer"?E0(t,e("circuit")):n==="circuit"?I0(t,e("grid")):n==="shapes"?K0(t,e("solids")):n==="tubes"?A_(t,e("wired")):n==="constellation-orbs"?X_(t,{...qs,seed:"orbs"}):a0(t,{...qs,seed:"aurora"}),window.__cx=sn}catch(i){console.error(i),vh(i)}yh()}function Mh(){if(sn){js+=1;try{if(xh.has(qi)){const n=sn.game();let t="";n.phase==="WON"?(Qn<Ji.length-1&&Qn++,t="up"):n.phase==="LOST"&&n.result&&n.result.p<n.result.e&&(Qn=0,t="down"),sn.regenerate(Ji[Qn],`${qi}-${js}`),yh(t)}else sn.regenerate(qs.difficulty,`${qi}-${js}`)}catch(n){console.error(n),vh(n)}}}const Fi=document.createElement("button");Fi.textContent="⟳";Fi.setAttribute("aria-label","reset / reseed");Fi.style.cssText="position:fixed;top:8px;right:10px;z-index:2147483646;width:44px;height:44px;border-radius:50%;border:1px solid #2c2c38;background:rgba(12,13,20,.6);color:#9a9aa6;font:20px/44px ui-monospace,Menlo,monospace;text-align:center;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation";Fi.addEventListener("click",Mh);document.body.appendChild(Fi);const Oi=document.createElement("button");Oi.textContent="⌂";Oi.setAttribute("aria-label","back to game picker");Oi.style.cssText="position:fixed;top:8px;right:60px;z-index:2147483646;width:44px;height:44px;border-radius:50%;border:1px solid #2c2c38;background:rgba(12,13,20,.6);color:#9a9aa6;font:18px/44px ui-monospace,Menlo,monospace;text-align:center;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation";Oi.addEventListener("click",Sh);document.body.appendChild(Oi);function pa(n){Fi.style.display=n?"block":"none",Oi.style.display=n?"block":"none"}function Sh(){sn?.dispose(),sn=null,window.__cx=null,pa(!1),Ti.style.display="none",history.replaceState(null,"",nr),ma.show()}const Ti=document.createElement("div");Ti.style.cssText="position:fixed;top:9px;left:12px;z-index:2147483646;pointer-events:none;font:11px/1.5 ui-monospace,Menlo,monospace;color:#8a8a96";document.body.appendChild(Ti);function yh(n=""){if(!xh.has(qi)){Ti.style.display="none";return}Ti.style.display="block";const t=Ji[Qn],e=n==="up"?' <span style="color:#8fd0b6">▲ climbed</span>':n==="down"?' <span style="color:#d0605a">▼ reset</span>':"";Ti.innerHTML=`<span style="color:#c2c2ce">LADDER ${Qn+1}/${Ji.length}</span>${e}<br>you c${t.attacker} · host c${t.defender}<br><span style="color:#5a5a64">win → climb · lose → reset</span>`}const ma=ix(n=>fa(n)),rx=location.pathname.startsWith(nr)?location.pathname.slice(nr.length):location.pathname.replace(/^\//,""),to=parseInt(rx.replace(/\D/g,""),10);to>=1&&to<=Qi.length?fa(Qi[to-1]):(pa(!1),ma.show());window.addEventListener("keydown",n=>{const t=parseInt(n.key,10);t>=1&&t<=Qi.length?fa(Qi[t-1]):n.key==="Escape"?Sh():(n.key==="r"||n.key==="R")&&sn&&Mh()});
//# sourceMappingURL=index-D1w06JfL.js.map
