var a1=0,yf=1,c1=2;var Jp=1,l1=2,Bi=3,ls=0,rn=1,ni=2;var bi=0,Mr=1,Ka=2,Mf=3,Sf=4,h1=5,Ns=100,u1=101,d1=102,bf=103,Ef=104,f1=200,p1=201,m1=202,g1=203,Eh=204,Th=205,_1=206,x1=207,v1=208,y1=209,M1=210,S1=211,b1=212,E1=213,T1=214,w1=0,A1=1,R1=2,ja=3,C1=4,P1=5,L1=6,I1=7,Kp=0,U1=1,D1=2,as=0,N1=1,fu=2,F1=3,O1=4,B1=5,k1=6;var jp=300,Er=301,Tr=302,wh=303,Ah=304,Lc=306,wr=1e3,ii=1001,Rh=1002,fn=1003,Tf=1004;var Wl=1005;var Bn=1006,z1=1007;var Co=1008;var cs=1009,H1=1010,V1=1011,pu=1012,Qp=1013,rs=1014,os=1015,ri=1016,tm=1017,em=1018,Os=1020,G1=1021,si=1023,W1=1024,X1=1025,Bs=1026,Ar=1027,q1=1028,nm=1029,Y1=1030,im=1031,sm=1033,Xl=33776,ql=33777,Yl=33778,$l=33779,wf=35840,Af=35841,Rf=35842,Cf=35843,rm=36196,Pf=37492,Lf=37496,If=37808,Uf=37809,Df=37810,Nf=37811,Ff=37812,Of=37813,Bf=37814,kf=37815,zf=37816,Hf=37817,Vf=37818,Gf=37819,Wf=37820,Xf=37821,Zl=36492,qf=36494,Yf=36495,$1=36283,$f=36284,Zf=36285,Jf=36286;var Qa=2300,tc=2301,Jl=2302,Kf=2400,jf=2401,Qf=2402;var om=3e3,ks=3001,Z1=3200,J1=3201,am=0,K1=1,kn="",xe="srgb",Hi="srgb-linear",mu="display-p3",Ic="display-p3-linear",ec="linear",me="srgb",nc="rec709",ic="p3";var tr=7680;var tp=519,j1=512,Q1=513,tx=514,cm=515,ex=516,nx=517,ix=518,sx=519,ep=35044;var np="300 es",Ch=1035,zi=2e3,sc=2001,hs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ip=1234567,So=Math.PI/180,Rr=180/Math.PI;function qs(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[e&255]+nn[e>>8&255]+nn[e>>16&255]+nn[e>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Je(e,t,n){return Math.max(t,Math.min(n,e))}function gu(e,t){return(e%t+t)%t}function rx(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function ox(e,t,n){return e!==t?(n-e)/(t-e):0}function bo(e,t,n){return(1-n)*e+n*t}function ax(e,t,n,i){return bo(e,t,1-Math.exp(-n*i))}function cx(e,t=1){return t-Math.abs(gu(e,t*2)-t)}function lx(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function hx(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ux(e,t){return e+Math.floor(Math.random()*(t-e+1))}function dx(e,t){return e+Math.random()*(t-e)}function fx(e){return e*(.5-Math.random())}function px(e){e!==void 0&&(ip=e);let t=ip+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mx(e){return e*So}function gx(e){return e*Rr}function Ph(e){return(e&e-1)===0&&e!==0}function _x(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function rc(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function xx(e,t,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":e.set(a*h,c*u,c*d,a*l);break;case"YZY":e.set(c*d,a*h,c*u,a*l);break;case"ZXZ":e.set(c*u,c*d,a*h,a*l);break;case"XZX":e.set(a*h,c*g,c*p,a*l);break;case"YXY":e.set(c*p,a*h,c*g,a*l);break;case"ZYZ":e.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function un(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Xo={DEG2RAD:So,RAD2DEG:Rr,generateUUID:qs,clamp:Je,euclideanModulo:gu,mapLinear:rx,inverseLerp:ox,lerp:bo,damp:ax,pingpong:cx,smoothstep:lx,smootherstep:hx,randInt:ux,randFloat:dx,randFloatSpread:fx,seededRandom:px,degToRad:mx,radToDeg:gx,isPowerOfTwo:Ph,ceilPowerOfTwo:_x,floorPowerOfTwo:rc,setQuaternionFromProperEuler:xx,normalize:un,denormalize:gr},nt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class e{constructor(t,n,i,s,r,o,a,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l)}set(t,n,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],M=s[1],_=s[4],E=s[7],L=s[2],w=s[5],A=s[8];return r[0]=o*x+a*M+c*L,r[3]=o*m+a*_+c*w,r[6]=o*f+a*E+c*A,r[1]=l*x+h*M+u*L,r[4]=l*m+h*_+u*w,r[7]=l*f+h*E+u*A,r[2]=d*x+p*M+g*L,r[5]=d*m+p*_+g*w,r[8]=d*f+p*E+g*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return n*o*h-n*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=n*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*n-s*c)*x,t[5]=(s*r-a*n)*x,t[6]=p*x,t[7]=(i*c-l*n)*x,t[8]=(o*n-i*r)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Kl.makeScale(t,n)),this}rotate(t){return this.premultiply(Kl.makeRotation(-t)),this}translate(t,n){return this.premultiply(Kl.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kl=new Zt;function lm(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Po(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function vx(){let e=Po("canvas");return e.style.display="block",e}var sp={};function Eo(e){e in sp||(sp[e]=!0,console.warn(e))}var rp=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),op=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[Hi]:{transfer:ec,primaries:nc,toReference:e=>e,fromReference:e=>e},[xe]:{transfer:me,primaries:nc,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Ic]:{transfer:ec,primaries:ic,toReference:e=>e.applyMatrix3(op),fromReference:e=>e.applyMatrix3(rp)},[mu]:{transfer:me,primaries:ic,toReference:e=>e.convertSRGBToLinear().applyMatrix3(op),fromReference:e=>e.applyMatrix3(rp).convertLinearToSRGB()}},yx=new Set([Hi,Ic]),oe={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!yx.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=Ta[t].toReference,s=Ta[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ta[e].primaries},getTransfer:function(e){return e===kn?ec:Ta[e].transfer}};function Sr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function jl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var er,oc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{er===void 0&&(er=Po("canvas")),er.width=t.width,er.height=t.height;let i=er.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=er}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Po("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Sr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Sr(n[i]/255)*255):n[i]=Sr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mx=0,ac=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=qs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ql(s[o].image)):r.push(Ql(s[o]))}else r=Ql(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function Ql(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?oc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sx=0,wn=class e extends hs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ii,s=ii,r=Bn,o=Co,a=si,c=cs,l=e.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=qs(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ks?xe:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xe?ks:om}set encoding(t){Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ks?xe:kn}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=jp;wn.DEFAULT_ANISOTROPY=1;var ve=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(l+1)/2,E=(p+1)/2,L=(f+1)/2,w=(h+d)/4,A=(u+x)/4,k=(g+m)/4;return _>E&&_>L?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=w/i,r=A/i):E>L?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=w/s,r=k/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=k/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lh=class extends hs{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new ve(0,0,t,n),this.scissorTest=!1,this.viewport=new ve(0,0,t,n);let s={width:t,height:n,depth:1};i.encoding!==void 0&&(Eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ks?xe:kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let n=Object.assign({},t.texture.image);return this.texture.source=new ac(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Lh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},cc=class extends wn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ih=class extends wn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[n+0]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u;return}if(a===1){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*x,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let L=Math.sqrt(_),w=Math.atan2(L,f*M);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}let E=a*M;if(c=c*m+d*E,l=l*m+p*E,h=h*m+g*E,u=u*m+x*E,m===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u}static multiplyQuaternionsFlat(t,n,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[n]=a*g+h*u+c*p-l*d,t[n+1]=c*g+h*d+l*u-a*p,t[n+2]=l*g+h*p+a*d-c*u,t[n+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],h=n[6],u=n[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-n)*h)/l,d=Math.sin(n*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ap.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ap.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*n-r*s),u=2*(r*i-o*n);return this.x=n+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return th.copy(this).projectOnVector(t),this.sub(th)}reflect(t){return this.sub(th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},th=new C,ap=new Ei,zs=class{constructor(t=new C(1/0,1/0,1/0),n=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(t.matrixWorld),this.union(wa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_o),Aa.subVectors(this.max,_o),nr.subVectors(t.a,_o),ir.subVectors(t.b,_o),sr.subVectors(t.c,_o),ts.subVectors(ir,nr),es.subVectors(sr,ir),Ps.subVectors(nr,sr);let n=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Ps.z,Ps.y,ts.z,0,-ts.x,es.z,0,-es.x,Ps.z,0,-Ps.x,-ts.y,ts.x,0,-es.y,es.x,0,-Ps.y,Ps.x,0];return!eh(n,nr,ir,sr,Aa)||(n=[1,0,0,0,1,0,0,0,1],!eh(n,nr,ir,sr,Aa))?!1:(Ra.crossVectors(ts,es),n=[Ra.x,Ra.y,Ra.z],eh(n,nr,ir,sr,Aa))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ui=[new C,new C,new C,new C,new C,new C,new C,new C],Qn=new C,wa=new zs,nr=new C,ir=new C,sr=new C,ts=new C,es=new C,Ps=new C,_o=new C,Aa=new C,Ra=new C,Ls=new C;function eh(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){Ls.fromArray(e,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=t.dot(Ls),l=n.dot(Ls),h=i.dot(Ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var bx=new zs,xo=new C,nh=new C,Lo=class{constructor(t=new C,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):bx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xo.subVectors(t,this.center);let n=xo.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(xo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xo.copy(t.center).add(nh)),this.expandByPoint(xo.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new C,ih=new C,Ca=new C,ns=new C,sh=new C,Pa=new C,rh=new C,Uh=class{constructor(t=new C,n=new C(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Di.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){ih.copy(t).add(n).multiplyScalar(.5),Ca.copy(n).sub(t).normalize(),ns.copy(this.origin).sub(ih);let r=t.distanceTo(n)*.5,o=-this.direction.dot(Ca),a=ns.dot(this.direction),c=-ns.dot(Ca),l=ns.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ih).addScaledVector(Ca,d),p}intersectSphere(t,n){Di.subVectors(t.center,this.origin);let i=Di.dot(this.direction),s=Di.dot(Di)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,n,i,s,r){sh.subVectors(n,t),Pa.subVectors(i,t),rh.crossVectors(sh,Pa);let o=this.direction.dot(rh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,t);let c=a*this.direction.dot(Pa.crossVectors(ns,Pa));if(c<0)return null;let l=a*this.direction.dot(sh.cross(ns));if(l<0||c+l>o)return null;let h=-a*ns.dot(rh);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class e{constructor(t,n,i,s,r,o,a,c,l,h,u,d,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l,h,u,d,p,g,x,m)}set(t,n,i,s,r,o,a,c,l,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/rr.setFromMatrixColumn(t,0).length(),r=1/rr.setFromMatrixColumn(t,1).length(),o=1/rr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=p+g*l,n[5]=d-x*l,n[9]=-a*c,n[2]=x-d*l,n[6]=g+p*l,n[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;n[0]=d+x*a,n[4]=g*a-p,n[8]=o*l,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=p*a-g,n[6]=x+d*a,n[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;n[0]=d-x*a,n[4]=-o*u,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*h,n[9]=x-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;n[0]=c*h,n[4]=g*l-p,n[8]=d*l+x,n[1]=c*u,n[5]=x*l+d,n[9]=p*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;n[0]=c*h,n[4]=x-d*u,n[8]=g*u+p,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-l*h,n[6]=p*u+g,n[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=d*u+x,n[5]=o*h,n[9]=p*u-g,n[2]=g*u-p,n[6]=a*h,n[10]=x*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ex,t,Tx)}lookAt(t,n,i){let s=this.elements;return En.subVectors(t,n),En.lengthSq()===0&&(En.z=1),En.normalize(),is.crossVectors(i,En),is.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),is.crossVectors(i,En)),is.normalize(),La.crossVectors(En,is),s[0]=is.x,s[4]=La.x,s[8]=En.x,s[1]=is.y,s[5]=La.y,s[9]=En.y,s[2]=is.z,s[6]=La.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],M=i[3],_=i[7],E=i[11],L=i[15],w=s[0],A=s[4],k=s[8],y=s[12],T=s[1],N=s[5],$=s[9],st=s[13],I=s[2],F=s[6],V=s[10],Y=s[14],q=s[3],G=s[7],Q=s[11],tt=s[15];return r[0]=o*w+a*T+c*I+l*q,r[4]=o*A+a*N+c*F+l*G,r[8]=o*k+a*$+c*V+l*Q,r[12]=o*y+a*st+c*Y+l*tt,r[1]=h*w+u*T+d*I+p*q,r[5]=h*A+u*N+d*F+p*G,r[9]=h*k+u*$+d*V+p*Q,r[13]=h*y+u*st+d*Y+p*tt,r[2]=g*w+x*T+m*I+f*q,r[6]=g*A+x*N+m*F+f*G,r[10]=g*k+x*$+m*V+f*Q,r[14]=g*y+x*st+m*Y+f*tt,r[3]=M*w+_*T+E*I+L*q,r[7]=M*A+_*N+E*F+L*G,r[11]=M*k+_*$+E*V+L*Q,r[15]=M*y+_*st+E*Y+L*tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+x*(+n*c*p-n*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+n*l*u-n*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-n*c*u+n*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],M=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,_=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,E=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,L=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,w=n*M+i*_+s*E+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=M*A,t[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*A,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*f+i*c*f)*A,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*A,t[4]=_*A,t[5]=(h*m*r-g*d*r+g*s*p-n*m*p-h*s*f+n*d*f)*A,t[6]=(g*c*r-o*m*r-g*s*l+n*m*l+o*s*f-n*c*f)*A,t[7]=(o*d*r-h*c*r+h*s*l-n*d*l-o*s*p+n*c*p)*A,t[8]=E*A,t[9]=(g*u*r-h*x*r-g*i*p+n*x*p+h*i*f-n*u*f)*A,t[10]=(o*x*r-g*a*r+g*i*l-n*x*l-o*i*f+n*a*f)*A,t[11]=(h*a*r-o*u*r-h*i*l+n*u*l+o*i*p-n*a*p)*A,t[12]=L*A,t[13]=(h*x*s-g*u*s+g*i*d-n*x*d-h*i*m+n*u*m)*A,t[14]=(g*a*s-o*x*s-g*i*c+n*x*c+o*i*m-n*a*m)*A,t[15]=(o*u*s-h*a*s+h*i*c-n*u*c-o*i*d+n*a*d)*A,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,M=c*l,_=c*h,E=c*u,L=i.x,w=i.y,A=i.z;return s[0]=(1-(x+f))*L,s[1]=(p+E)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(p-E)*w,s[5]=(1-(d+f))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+_)*A,s[9]=(m-M)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,r=rr.set(s[0],s[1],s[2]).length(),o=rr.set(s[4],s[5],s[6]).length(),a=rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ti.copy(this);let l=1/r,h=1/o,u=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,n.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(t,n,i,s,r,o,a=zi){let c=this.elements,l=2*r/(n-t),h=2*r/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),p,g;if(a===zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=zi){let c=this.elements,l=1/(n-t),h=1/(i-s),u=1/(o-r),d=(n+t)*l,p=(i+s)*h,g,x;if(a===zi)g=(o+r)*u,x=-2*u;else if(a===sc)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},rr=new C,ti=new Pe,Ex=new C(0,0,0),Tx=new C(1,1,1),is=new C,La=new C,En=new C,cp=new Pe,lp=new Ei,lc=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return cp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cp,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return lp.setFromEuler(this),this.setFromQuaternion(lp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lc.DEFAULT_ORDER="XYZ";var hc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wx=0,hp=new C,or=new Ei,Ni=new Pe,Ia=new C,vo=new C,Ax=new C,Rx=new Ei,up=new C(1,0,0),dp=new C(0,1,0),fp=new C(0,0,1),Cx={type:"added"},Px={type:"removed"},on=class e extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new C,n=new lc,i=new Ei,s=new C(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Zt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return or.setFromAxisAngle(t,n),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,n){return or.setFromAxisAngle(t,n),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(up,t)}rotateY(t){return this.rotateOnAxis(dp,t)}rotateZ(t){return this.rotateOnAxis(fp,t)}translateOnAxis(t,n){return hp.copy(t).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(up,t)}translateY(t){return this.translateOnAxis(dp,t)}translateZ(t){return this.translateOnAxis(fp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ia.copy(t):Ia.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(vo,Ia,this.up):Ni.lookAt(Ia,vo,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Ni),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Cx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Px)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,Ax),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,Rx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++){let r=n[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(n){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};on.DEFAULT_UP=new C(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new C,Fi=new C,oh=new C,Oi=new C,ar=new C,cr=new C,pp=new C,ah=new C,ch=new C,lh=new C,Ua=!1,_r=class e{constructor(t=new C,n=new C,i=new C){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),ei.subVectors(t,n),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){ei.subVectors(s,n),Fi.subVectors(i,n),oh.subVectors(t,n);let o=ei.dot(ei),a=ei.dot(Fi),c=ei.dot(oh),l=Fi.dot(Fi),h=Fi.dot(oh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getUV(t,n,i,s,r,o,a,c){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),this.getInterpolation(t,n,i,s,r,o,a,c)}static getInterpolation(t,n,i,s,r,o,a,c){return this.getBarycoord(t,n,i,s,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Oi.x),c.addScaledVector(o,Oi.y),c.addScaledVector(a,Oi.z),c)}static isFrontFacing(t,n,i,s){return ei.subVectors(i,n),Fi.subVectors(t,n),ei.cross(Fi).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ei.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,s,r){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,o,a;ar.subVectors(s,i),cr.subVectors(r,i),ah.subVectors(t,i);let c=ar.dot(ah),l=cr.dot(ah);if(c<=0&&l<=0)return n.copy(i);ch.subVectors(t,s);let h=ar.dot(ch),u=cr.dot(ch);if(h>=0&&u<=h)return n.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(ar,o);lh.subVectors(t,r);let p=ar.dot(lh),g=cr.dot(lh);if(g>=0&&p<=g)return n.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(cr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return pp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),n.copy(s).addScaledVector(pp,a);let f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(ar,o).addScaledVector(cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Da={h:0,s:0,l:0};function hh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ft=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=oe.workingColorSpace){return this.r=t,this.g=n,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=oe.workingColorSpace){if(t=gu(t,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=hh(o,r,t+1/3),this.g=hh(o,r,t),this.b=hh(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,n=xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=xe){let i=hm[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}copyLinearToSRGB(t){return this.r=jl(t.r),this.g=jl(t.g),this.b=jl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return oe.fromWorkingColorSpace(sn.copy(this),t),Math.round(Je(sn.r*255,0,255))*65536+Math.round(Je(sn.g*255,0,255))*256+Math.round(Je(sn.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=oe.workingColorSpace){oe.fromWorkingColorSpace(sn.copy(this),n);let i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=oe.workingColorSpace){return oe.fromWorkingColorSpace(sn.copy(this),n),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=xe){oe.fromWorkingColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,s=sn.b;return t!==xe?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+n,ss.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ss),t.getHSL(Da);let i=bo(ss.h,Da.h,n),s=bo(ss.s,Da.s,n),r=bo(ss.l,Da.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Ft;Ft.NAMES=hm;var Lx=0,Hs=class extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Mr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eh&&(i.blendSrc=this.blendSrc),this.blendDst!==Th&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(n){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},oi=class extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new C,Na=new nt,zn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=ep,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=os,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Na.fromBufferAttribute(this,n),Na.applyMatrix3(t),this.setXY(n,Na.x,Na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=gr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=un(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=gr(n,this.array)),n}setX(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=gr(n,this.array)),n}setY(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=gr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=gr(n,this.array)),n}setW(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ep&&(t.usage=this.usage),t}};var uc=class extends zn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var dc=class extends zn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ee=class extends zn{constructor(t,n,i){super(new Float32Array(t),n,i)}};var Ix=0,On=new Pe,uh=new on,lr=new C,Tn=new zs,yo=new zs,Ze=new C,An=class e extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lm(t)?dc:uc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,n,i){return On.makeTranslation(t,n,i),this.applyMatrix4(On),this}scale(t,n,i){return On.makeScale(t,n,i),this.applyMatrix4(On),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(t){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Tn.min,yo.min),Tn.expandByPoint(Ze),Ze.addVectors(Tn.max,yo.max),Tn.expandByPoint(Ze)):(Tn.expandByPoint(yo.min),Tn.expandByPoint(yo.max))}Tn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ze.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(t,l),Ze.add(lr)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new C,h[T]=new C;let u=new C,d=new C,p=new C,g=new nt,x=new nt,m=new nt,f=new C,M=new C;function _(T,N,$){u.fromArray(s,T*3),d.fromArray(s,N*3),p.fromArray(s,$*3),g.fromArray(o,T*2),x.fromArray(o,N*2),m.fromArray(o,$*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let st=1/(x.x*m.y-m.x*x.y);isFinite(st)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(st),M.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(st),l[T].add(f),l[N].add(f),l[$].add(f),h[T].add(M),h[N].add(M),h[$].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,N=E.length;T<N;++T){let $=E[T],st=$.start,I=$.count;for(let F=st,V=st+I;F<V;F+=3)_(i[F+0],i[F+1],i[F+2])}let L=new C,w=new C,A=new C,k=new C;function y(T){A.fromArray(r,T*3),k.copy(A);let N=l[T];L.copy(N),L.sub(A.multiplyScalar(A.dot(N))).normalize(),w.crossVectors(k,N);let st=w.dot(h[T])<0?-1:1;c[T*4]=L.x,c[T*4+1]=L.y,c[T*4+2]=L.z,c[T*4+3]=st}for(let T=0,N=E.length;T<N;++T){let $=E[T],st=$.start,I=$.count;for(let F=st,V=st+I;F<V;F+=3)y(i[F+0]),y(i[F+1]),y(i[F+2])}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ze.fromBufferAttribute(t,n),Ze.normalize(),t.setXYZ(n,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new zn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);n.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,i);c.push(p)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(n));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(n))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mp=new Pe,Is=new Uh,Fa=new Lo,gp=new C,hr=new C,ur=new C,dr=new C,dh=new C,Oa=new C,Ba=new nt,ka=new nt,za=new nt,_p=new C,xp=new C,vp=new C,Ha=new C,Va=new C,Kt=class extends on{constructor(t=new An,n=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(dh.fromBufferAttribute(u,t),o?Oa.addScaledVector(dh,h):Oa.addScaledVector(dh.sub(n),h))}n.add(Oa)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),Is.copy(t.ray).recast(t.near),!(Fa.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Fa,gp)===null||Is.origin.distanceToSquared(gp)>(t.far-t.near)**2))&&(mp.copy(r).invert(),Is.copy(t.ray).applyMatrix4(mp),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Is)))}_computeIntersections(t,n,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,L=_;E<L;E+=3){let w=a.getX(E),A=a.getX(E+1),k=a.getX(E+2);s=Ga(this,f,t,i,l,h,u,w,A,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);s=Ga(this,o,t,i,l,h,u,M,_,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,L=_;E<L;E+=3){let w=E,A=E+1,k=E+2;s=Ga(this,f,t,i,l,h,u,w,A,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=m,_=m+1,E=m+2;s=Ga(this,o,t,i,l,h,u,M,_,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Ux(e,t,n,i,s,r,o,a){let c;if(t.side===rn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ls,a),c===null)return null;Va.copy(a),Va.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Va);return l<n.near||l>n.far?null:{distance:l,point:Va.clone(),object:e}}function Ga(e,t,n,i,s,r,o,a,c,l){e.getVertexPosition(a,hr),e.getVertexPosition(c,ur),e.getVertexPosition(l,dr);let h=Ux(e,t,n,i,hr,ur,dr,Ha);if(h){s&&(Ba.fromBufferAttribute(s,a),ka.fromBufferAttribute(s,c),za.fromBufferAttribute(s,l),h.uv=_r.getInterpolation(Ha,hr,ur,dr,Ba,ka,za,new nt)),r&&(Ba.fromBufferAttribute(r,a),ka.fromBufferAttribute(r,c),za.fromBufferAttribute(r,l),h.uv1=_r.getInterpolation(Ha,hr,ur,dr,Ba,ka,za,new nt),h.uv2=h.uv1),o&&(_p.fromBufferAttribute(o,a),xp.fromBufferAttribute(o,c),vp.fromBufferAttribute(o,l),h.normal=_r.getInterpolation(Ha,hr,ur,dr,_p,xp,vp,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new C,materialIndex:0};_r.getNormal(hr,ur,dr,u.normal),h.face=u}return h}var ai=class e extends An{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,n,t,o,r,0),g("z","y","x",1,-1,i,n,-t,o,r,1),g("x","z","y",1,1,t,i,n,s,o,2),g("x","z","y",1,-1,t,i,-n,s,o,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(x,m,f,M,_,E,L,w,A,k,y){let T=E/A,N=L/k,$=E/2,st=L/2,I=w/2,F=A+1,V=k+1,Y=0,q=0,G=new C;for(let Q=0;Q<V;Q++){let tt=Q*N-st;for(let ut=0;ut<F;ut++){let H=ut*T-$;G[x]=H*M,G[m]=tt*_,G[f]=I,l.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[f]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(ut/A),u.push(1-Q/k),Y+=1}}for(let Q=0;Q<k;Q++)for(let tt=0;tt<A;tt++){let ut=d+tt+F*Q,H=d+tt+F*(Q+1),J=d+(tt+1)+F*(Q+1),ft=d+(tt+1)+F*Q;c.push(ut,H,ft),c.push(H,J,ft),q+=6}a.addGroup(p,q,y),p+=q,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function dn(e){let t={};for(let n=0;n<e.length;n++){let i=Cr(e[n]);for(let s in i)t[s]=i[s]}return t}function Dx(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function um(e){return e.getRenderTarget()===null?e.outputColorSpace:oe.workingColorSpace}var Br={clone:Cr,merge:dn},Nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nx,this.fragmentShader=Fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},fc=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=zi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qe=class extends fc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(So*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},fr=-90,pr=1,Dh=class extends on{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(fr,pr,t,n);s.layers=this.layers,this.add(s);let r=new Qe(fr,pr,t,n);r.layers=this.layers,this.add(r);let o=new Qe(fr,pr,t,n);o.layers=this.layers,this.add(o);let a=new Qe(fr,pr,t,n);a.layers=this.layers,this.add(a);let c=new Qe(fr,pr,t,n);c.layers=this.layers,this.add(c);let l=new Qe(fr,pr,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(let l of n)this.remove(l);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,o),t.setRenderTarget(i,2,s),t.render(n,a),t.setRenderTarget(i,3,s),t.render(n,c),t.setRenderTarget(i,4,s),t.render(n,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pc=class extends wn{constructor(t,n,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],n=n!==void 0?n:Er,super(t,n,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Nh=class extends pn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ks?xe:kn),this.texture=new pc(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:bi});r.uniforms.tEquirect.value=n;let o=new Kt(s,r),a=n.minFilter;return n.minFilter===Co&&(n.minFilter=Bn),new Dh(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}},fh=new C,Ox=new C,Bx=new Zt,ki=class{constructor(t=new C(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=fh.subVectors(i,n).cross(Ox.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(fh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||Bx.getNormalMatrix(t),s=this.coplanarPoint(fh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Lo,Wa=new C,Io=class{constructor(t=new ki,n=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=zi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],M=s[13],_=s[14],E=s[15];if(i[0].setComponents(c-r,d-l,m-p,E-f).normalize(),i[1].setComponents(c+r,d+l,m+p,E+f).normalize(),i[2].setComponents(c+o,d+h,m+g,E+M).normalize(),i[3].setComponents(c-o,d-h,m-g,E-M).normalize(),i[4].setComponents(c-a,d-u,m-x,E-_).normalize(),n===zi)i[5].setComponents(c+a,d+u,m+x,E+_).normalize();else if(n===sc)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function dm(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function kx(e,t){let n=t.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=e.createBuffer();e.bindBuffer(h,g),e.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=e.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)x=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=e.SHORT;else if(u instanceof Uint32Array)x=e.UNSIGNED_INT;else if(u instanceof Int32Array)x=e.INT;else if(u instanceof Int8Array)x=e.BYTE;else if(u instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(e.bindBuffer(u,l),p.count===-1&&g.length===0&&e.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];n?e.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):e.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(n?e.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):e.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(e.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Pr=class e extends An{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=n/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let _=0;_<l;_++){let E=_*u-r;g.push(E,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){let _=M+l*f,E=M+l*(f+1),L=M+1+l*(f+1),w=M+1+l*f;p.push(_,E,w),p.push(E,L,w)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
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
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qx=`#ifdef USE_AOMAP
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
#endif`,Yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$x=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
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
#endif`,tv=`#ifdef USE_BUMPMAP
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lv=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
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
}`,Rv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Uv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bv=`PhysicalMaterial material;
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
#endif`,kv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,zv=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jv=`#if defined( USE_POINTS_UV )
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
#endif`,Kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ey=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cy=`#ifdef USE_NORMALMAP
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
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,by=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iy=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uy=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dy=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,qy=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Yy=`#define DISTANCE
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
}`,$y=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qy=`#include <common>
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
}`,t2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,e2=`#define LAMBERT
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
}`,n2=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,i2=`#define MATCAP
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
}`,s2=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,r2=`#define NORMAL
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
}`,o2=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a2=`#define PHONG
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
}`,c2=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,l2=`#define STANDARD
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
}`,h2=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,u2=`#define TOON
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
}`,d2=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,f2=`uniform float size;
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
}`,p2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,m2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,g2=`uniform vec3 color;
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
}`,_2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,x2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xt={alphahash_fragment:zx,alphahash_pars_fragment:Hx,alphamap_fragment:Vx,alphamap_pars_fragment:Gx,alphatest_fragment:Wx,alphatest_pars_fragment:Xx,aomap_fragment:qx,aomap_pars_fragment:Yx,batching_pars_vertex:$x,batching_vertex:Zx,begin_vertex:Jx,beginnormal_vertex:Kx,bsdfs:jx,iridescence_fragment:Qx,bumpmap_pars_fragment:tv,clipping_planes_fragment:ev,clipping_planes_pars_fragment:nv,clipping_planes_pars_vertex:iv,clipping_planes_vertex:sv,color_fragment:rv,color_pars_fragment:ov,color_pars_vertex:av,color_vertex:cv,common:lv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:uv,displacementmap_pars_vertex:dv,displacementmap_vertex:fv,emissivemap_fragment:pv,emissivemap_pars_fragment:mv,colorspace_fragment:gv,colorspace_pars_fragment:_v,envmap_fragment:xv,envmap_common_pars_fragment:vv,envmap_pars_fragment:yv,envmap_pars_vertex:Mv,envmap_physical_pars_fragment:Uv,envmap_vertex:Sv,fog_vertex:bv,fog_pars_vertex:Ev,fog_fragment:Tv,fog_pars_fragment:wv,gradientmap_pars_fragment:Av,lightmap_fragment:Rv,lightmap_pars_fragment:Cv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Iv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Nv,lights_phong_fragment:Fv,lights_phong_pars_fragment:Ov,lights_physical_fragment:Bv,lights_physical_pars_fragment:kv,lights_fragment_begin:zv,lights_fragment_maps:Hv,lights_fragment_end:Vv,logdepthbuf_fragment:Gv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:qv,map_fragment:Yv,map_pars_fragment:$v,map_particle_fragment:Zv,map_particle_pars_fragment:Jv,metalnessmap_fragment:Kv,metalnessmap_pars_fragment:jv,morphcolor_vertex:Qv,morphnormal_vertex:ty,morphtarget_pars_vertex:ey,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:sy,normal_pars_fragment:ry,normal_pars_vertex:oy,normal_vertex:ay,normalmap_pars_fragment:cy,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:dy,opaque_fragment:fy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:_y,dithering_pars_fragment:xy,roughnessmap_fragment:vy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:My,shadowmap_pars_vertex:Sy,shadowmap_vertex:by,shadowmask_pars_fragment:Ey,skinbase_vertex:Ty,skinning_pars_vertex:wy,skinning_vertex:Ay,skinnormal_vertex:Ry,specularmap_fragment:Cy,specularmap_pars_fragment:Py,tonemapping_fragment:Ly,tonemapping_pars_fragment:Iy,transmission_fragment:Uy,transmission_pars_fragment:Dy,uv_pars_fragment:Ny,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:By,background_vert:ky,background_frag:zy,backgroundCube_vert:Hy,backgroundCube_frag:Vy,cube_vert:Gy,cube_frag:Wy,depth_vert:Xy,depth_frag:qy,distanceRGBA_vert:Yy,distanceRGBA_frag:$y,equirect_vert:Zy,equirect_frag:Jy,linedashed_vert:Ky,linedashed_frag:jy,meshbasic_vert:Qy,meshbasic_frag:t2,meshlambert_vert:e2,meshlambert_frag:n2,meshmatcap_vert:i2,meshmatcap_frag:s2,meshnormal_vert:r2,meshnormal_frag:o2,meshphong_vert:a2,meshphong_frag:c2,meshphysical_vert:l2,meshphysical_frag:h2,meshtoon_vert:u2,meshtoon_frag:d2,points_vert:f2,points_frag:p2,shadow_vert:m2,shadow_frag:g2,sprite_vert:_2,sprite_frag:x2},at={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Mi={basic:{uniforms:dn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:dn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:dn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:dn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:dn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:dn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:dn([at.points,at.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:dn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:dn([at.common,at.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:dn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:dn([at.sprite,at.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:dn([at.common,at.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:dn([at.lights,at.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Mi.physical={uniforms:dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Xa={r:0,b:0,g:0};function v2(e,t,n,i,s,r,o){let a=new Ft(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let M=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?n:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),M=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||M)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Lc)?(h===void 0&&(h=new Kt(new ai(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Cr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=oe.getTransfer(_.colorSpace)!==me,(u!==_||d!==_.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=e.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Kt(new Pr(2,2),new tn({name:"BackgroundMaterial",uniforms:Cr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=oe.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,f){m.getRGB(Xa,um(e)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function y2(e,t,n,i){let s=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(I,F,V,Y,q){let G=!1;if(o){let Q=x(Y,V,F);l!==Q&&(l=Q,p(l.object)),G=f(I,Y,V,q),G&&M(I,Y,V,q)}else{let Q=F.wireframe===!0;(l.geometry!==Y.id||l.program!==V.id||l.wireframe!==Q)&&(l.geometry=Y.id,l.program=V.id,l.wireframe=Q,G=!0)}q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,k(I,F,V,Y),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function d(){return i.isWebGL2?e.createVertexArray():r.createVertexArrayOES()}function p(I){return i.isWebGL2?e.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?e.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,F,V){let Y=V.wireframe===!0,q=a[I.id];q===void 0&&(q={},a[I.id]=q);let G=q[F.id];G===void 0&&(G={},q[F.id]=G);let Q=G[Y];return Q===void 0&&(Q=m(d()),G[Y]=Q),Q}function m(I){let F=[],V=[],Y=[];for(let q=0;q<s;q++)F[q]=0,V[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:Y,object:I,attributes:{},index:null}}function f(I,F,V,Y){let q=l.attributes,G=F.attributes,Q=0,tt=V.getAttributes();for(let ut in tt)if(tt[ut].location>=0){let J=q[ut],ft=G[ut];if(ft===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(ft=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(ft=I.instanceColor)),J===void 0||J.attribute!==ft||ft&&J.data!==ft.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Y}function M(I,F,V,Y){let q={},G=F.attributes,Q=0,tt=V.getAttributes();for(let ut in tt)if(tt[ut].location>=0){let J=G[ut];J===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let ft={};ft.attribute=J,J&&J.data&&(ft.data=J.data),q[ut]=ft,Q++}l.attributes=q,l.attributesNum=Q,l.index=Y}function _(){let I=l.newAttributes;for(let F=0,V=I.length;F<V;F++)I[F]=0}function E(I){L(I,0)}function L(I,F){let V=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;V[I]=1,Y[I]===0&&(e.enableVertexAttribArray(I),Y[I]=1),q[I]!==F&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),q[I]=F)}function w(){let I=l.newAttributes,F=l.enabledAttributes;for(let V=0,Y=F.length;V<Y;V++)F[V]!==I[V]&&(e.disableVertexAttribArray(V),F[V]=0)}function A(I,F,V,Y,q,G,Q){Q===!0?e.vertexAttribIPointer(I,F,V,q,G):e.vertexAttribPointer(I,F,V,Y,q,G)}function k(I,F,V,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let q=Y.attributes,G=V.getAttributes(),Q=F.defaultAttributeValues;for(let tt in G){let ut=G[tt];if(ut.location>=0){let H=q[tt];if(H===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){let J=H.normalized,ft=H.itemSize,Tt=n.get(H);if(Tt===void 0)continue;let _t=Tt.buffer,Dt=Tt.type,zt=Tt.bytesPerElement,wt=i.isWebGL2===!0&&(Dt===e.INT||Dt===e.UNSIGNED_INT||H.gpuType===Qp);if(H.isInterleavedBufferAttribute){let Bt=H.data,R=Bt.stride,rt=H.offset;if(Bt.isInstancedInterleavedBuffer){for(let X=0;X<ut.locationSize;X++)L(ut.location+X,Bt.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let X=0;X<ut.locationSize;X++)E(ut.location+X);e.bindBuffer(e.ARRAY_BUFFER,_t);for(let X=0;X<ut.locationSize;X++)A(ut.location+X,ft/ut.locationSize,Dt,J,R*zt,(rt+ft/ut.locationSize*X)*zt,wt)}else{if(H.isInstancedBufferAttribute){for(let Bt=0;Bt<ut.locationSize;Bt++)L(ut.location+Bt,H.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Bt=0;Bt<ut.locationSize;Bt++)E(ut.location+Bt);e.bindBuffer(e.ARRAY_BUFFER,_t);for(let Bt=0;Bt<ut.locationSize;Bt++)A(ut.location+Bt,ft/ut.locationSize,Dt,J,ft*zt,ft/ut.locationSize*Bt*zt,wt)}}else if(Q!==void 0){let J=Q[tt];if(J!==void 0)switch(J.length){case 2:e.vertexAttrib2fv(ut.location,J);break;case 3:e.vertexAttrib3fv(ut.location,J);break;case 4:e.vertexAttrib4fv(ut.location,J);break;default:e.vertexAttrib1fv(ut.location,J)}}}}w()}function y(){$();for(let I in a){let F=a[I];for(let V in F){let Y=F[V];for(let q in Y)g(Y[q].object),delete Y[q];delete F[V]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;let F=a[I.id];for(let V in F){let Y=F[V];for(let q in Y)g(Y[q].object),delete Y[q];delete F[V]}delete a[I.id]}function N(I){for(let F in a){let V=a[F];if(V[I.id]===void 0)continue;let Y=V[I.id];for(let q in Y)g(Y[q].object),delete Y[q];delete V[I.id]}}function $(){st(),h=!0,l!==c&&(l=c,p(l.object))}function st(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:$,resetDefaultState:st,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:E,disableUnusedAttributes:w}}function M2(e,t,n,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){e.drawArrays(r,h,u),n.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=e,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),n.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];n.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function S2(e,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",a=n.precision!==void 0?n.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),x=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),f=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,E=o||t.has("OES_texture_float"),L=_&&E,w=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:w}}function b2(e){let t=this,n=null,i=0,s=!1,r=!1,o=new ki,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=e.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,_=M*4,E=f.clippingState||null;c.value=E,E=h(g,d,_,p);for(let L=0;L!==_;++L)E[L]=n[L];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,E=p;_!==x;++_,E+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function E2(e){let t=new WeakMap;function n(o,a){return a===wh?o.mapping=Er:a===Ah&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===wh||a===Ah)if(t.has(o)){let c=t.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Nh(c.height/2);return l.fromEquirectangularTexture(e,o),t.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Lr=class extends fc{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},xr=4,yp=[.125,.215,.35,.446,.526,.582],Fs=20,ph=new Lr,Mp=new Ft,mh=null,gh=0,_h=0,Ds=(1+Math.sqrt(5))/2,mr=1/Ds,Sp=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ds,mr),new C(0,Ds,-mr),new C(mr,0,Ds),new C(-mr,0,Ds),new C(Ds,mr,0),new C(-Ds,mr,0)],Ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),t.scissorTest=!1,qa(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Er||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ri,format:si,colorSpace:Hi,depthBuffer:!1},s=bp(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(t,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T2(r)),this._blurMaterial=w2(r,t,n)}return s}_compileMaterial(t){let n=new Kt(this._lodPlanes[0],t);this._renderer.compile(n,ph)}_sceneToCubeUV(t,n,i,s){let a=new Qe(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mp),h.toneMapping=as,h.autoClear=!1;let p=new oi({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Kt(new ai,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Mp),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let _=this._cubeSize;qa(s,M*_,f>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Er||t.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;qa(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,ph)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sp[(s-1)%Sp.length];this._blur(t,s-1,s,r,o)}n.autoClear=i}_blur(t,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Fs;m>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fs}`);let f=[],M=0;for(let A=0;A<Fs;++A){let k=A/x,y=Math.exp(-k*k/2);f.push(y),A===0?M+=y:A<m&&(M+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let E=this._sizeLods[s],L=3*E*(s>_-xr?s-_+xr:0),w=4*(this._cubeSize-E);qa(n,L,w,3*E,2*E),c.setRenderTarget(n),c.render(u,ph)}};function T2(e){let t=[],n=[],i=[],s=e,r=e-xr+1+yp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);n.push(a);let c=1/a;o>e-xr?c=yp[o-e+xr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),_=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,k=w>2?0:-1,y=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];M.set(y,x*g*w),_.set(d,m*g*w);let T=[w,w,w,w,w,w];E.set(T,f*g*w)}let L=new An;L.setAttribute("position",new zn(M,x)),L.setAttribute("uv",new zn(_,m)),L.setAttribute("faceIndex",new zn(E,f)),t.push(L),s>xr&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function bp(e,t,n){let i=new pn(e,t,n);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function w2(e,t,n){let i=new Float32Array(Fs),s=new C(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_u(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ep(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Tp(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function A2(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===wh||c===Ah,h=c===Er||c===Tr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return n===null&&(n=new Ir(e)),u=l?n.fromEquirectangular(a,u):n.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){n===null&&(n=new Ir(e));let d=l?n.fromEquirectangular(a):n.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function R2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function C2(e,t,n,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],e.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let _=0,E=M.length;_<E;_+=3){let L=M[_+0],w=M[_+1],A=M[_+2];d.push(L,w,w,A,A,L)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,E=M.length/3-1;_<E;_+=3){let L=_+0,w=_+1,A=_+2;d.push(L,w,w,A,A,L)}}else return;let m=new(lm(d)?dc:uc)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function P2(e,t,n,i){let s=i.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){e.drawElements(r,g,a,p*c),n.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(s)m=e,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*c,x),n.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let f=0;for(let M=0;M<x;M++)f+=g[M];n.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function L2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function I2(e,t){return e[0]-t[0]}function U2(e,t){return Math.abs(t[1])-Math.abs(e[1])}function D2(e,t,n){let i={},s=new Float32Array(8),r=new WeakMap,o=new ve,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],k=0;M===!0&&(k=1),_===!0&&(k=2),E===!0&&(k=3);let y=h.attributes.position.count*k,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let N=new Float32Array(y*T*4*g),$=new cc(N,y,T,g);$.type=os,$.needsUpdate=!0;let st=k*4;for(let F=0;F<g;F++){let V=L[F],Y=w[F],q=A[F],G=y*T*4*F;for(let Q=0;Q<V.count;Q++){let tt=Q*st;M===!0&&(o.fromBufferAttribute(V,Q),N[G+tt+0]=o.x,N[G+tt+1]=o.y,N[G+tt+2]=o.z,N[G+tt+3]=0),_===!0&&(o.fromBufferAttribute(Y,Q),N[G+tt+4]=o.x,N[G+tt+5]=o.y,N[G+tt+6]=o.z,N[G+tt+7]=0),E===!0&&(o.fromBufferAttribute(q,Q),N[G+tt+8]=o.x,N[G+tt+9]=o.y,N[G+tt+10]=o.z,N[G+tt+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:$,size:new nt(y,T)},r.set(h,x),h.addEventListener("dispose",I)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(e,"morphTargetBaseInfluence",f),u.getUniforms().setValue(e,"morphTargetInfluences",d),u.getUniforms().setValue(e,"morphTargetsTexture",x.texture,n),u.getUniforms().setValue(e,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<p;_++){let E=g[_];E[0]=_,E[1]=d[_]}g.sort(U2);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(I2);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let E=a[_],L=E[0],w=E[1];L!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+_)!==x[L]&&h.setAttribute("morphTarget"+_,x[L]),m&&h.getAttribute("morphNormal"+_)!==m[L]&&h.setAttribute("morphNormal"+_,m[L]),s[_]=w,f+=w):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(e,"morphTargetBaseInfluence",M),u.getUniforms().setValue(e,"morphTargetInfluences",s)}}return{update:c}}function N2(e,t,n,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}var mc=class extends wn{constructor(t,n,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Bs,h!==Bs&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Bs&&(i=rs),i===void 0&&h===Ar&&(i=Os),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},fm=new wn,pm=new mc(1,1);pm.compareFunction=cm;var mm=new cc,gm=new Ih,_m=new pc,wp=[],Ap=[],Rp=new Float32Array(16),Cp=new Float32Array(9),Pp=new Float32Array(4);function kr(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=wp[s];if(r===void 0&&(r=new Float32Array(s),wp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function Ve(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ge(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Uc(e,t){let n=Ap[t];n===void 0&&(n=new Int32Array(t),Ap[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function F2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function O2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ve(n,t))return;e.uniform2fv(this.addr,t),Ge(n,t)}}function B2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ve(n,t))return;e.uniform3fv(this.addr,t),Ge(n,t)}}function k2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ve(n,t))return;e.uniform4fv(this.addr,t),Ge(n,t)}}function z2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ve(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ge(n,t)}else{if(Ve(n,i))return;Pp.set(i),e.uniformMatrix2fv(this.addr,!1,Pp),Ge(n,i)}}function H2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ve(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ge(n,t)}else{if(Ve(n,i))return;Cp.set(i),e.uniformMatrix3fv(this.addr,!1,Cp),Ge(n,i)}}function V2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ve(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ge(n,t)}else{if(Ve(n,i))return;Rp.set(i),e.uniformMatrix4fv(this.addr,!1,Rp),Ge(n,i)}}function G2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function W2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ve(n,t))return;e.uniform2iv(this.addr,t),Ge(n,t)}}function X2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ve(n,t))return;e.uniform3iv(this.addr,t),Ge(n,t)}}function q2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ve(n,t))return;e.uniform4iv(this.addr,t),Ge(n,t)}}function Y2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function $2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ve(n,t))return;e.uniform2uiv(this.addr,t),Ge(n,t)}}function Z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ve(n,t))return;e.uniform3uiv(this.addr,t),Ge(n,t)}}function J2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ve(n,t))return;e.uniform4uiv(this.addr,t),Ge(n,t)}}function K2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r=this.type===e.SAMPLER_2D_SHADOW?pm:fm;n.setTexture2D(t||r,s)}function j2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||gm,s)}function Q2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||_m,s)}function tM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||mm,s)}function eM(e){switch(e){case 5126:return F2;case 35664:return O2;case 35665:return B2;case 35666:return k2;case 35674:return z2;case 35675:return H2;case 35676:return V2;case 5124:case 35670:return G2;case 35667:case 35671:return W2;case 35668:case 35672:return X2;case 35669:case 35673:return q2;case 5125:return Y2;case 36294:return $2;case 36295:return Z2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return K2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return tM}}function nM(e,t){e.uniform1fv(this.addr,t)}function iM(e,t){let n=kr(t,this.size,2);e.uniform2fv(this.addr,n)}function sM(e,t){let n=kr(t,this.size,3);e.uniform3fv(this.addr,n)}function rM(e,t){let n=kr(t,this.size,4);e.uniform4fv(this.addr,n)}function oM(e,t){let n=kr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function aM(e,t){let n=kr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function cM(e,t){let n=kr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function lM(e,t){e.uniform1iv(this.addr,t)}function hM(e,t){e.uniform2iv(this.addr,t)}function uM(e,t){e.uniform3iv(this.addr,t)}function dM(e,t){e.uniform4iv(this.addr,t)}function fM(e,t){e.uniform1uiv(this.addr,t)}function pM(e,t){e.uniform2uiv(this.addr,t)}function mM(e,t){e.uniform3uiv(this.addr,t)}function gM(e,t){e.uniform4uiv(this.addr,t)}function _M(e,t,n){let i=this.cache,s=t.length,r=Uc(n,s);Ve(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)n.setTexture2D(t[o]||fm,r[o])}function xM(e,t,n){let i=this.cache,s=t.length,r=Uc(n,s);Ve(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||gm,r[o])}function vM(e,t,n){let i=this.cache,s=t.length,r=Uc(n,s);Ve(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||_m,r[o])}function yM(e,t,n){let i=this.cache,s=t.length,r=Uc(n,s);Ve(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||mm,r[o])}function MM(e){switch(e){case 5126:return nM;case 35664:return iM;case 35665:return sM;case 35666:return rM;case 35674:return oM;case 35675:return aM;case 35676:return cM;case 5124:case 35670:return lM;case 35667:case 35671:return hM;case 35668:case 35672:return uM;case 35669:case 35673:return dM;case 5125:return fM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return yM}}var Fh=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eM(n.type)}},Oh=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MM(n.type)}},Bh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,n[a.id],i)}}},xh=/(\w+)(\])?(\[|\.)?/g;function Lp(e,t){e.seq.push(t),e.map[t.id]=t}function SM(e,t,n){let i=e.name,s=i.length;for(xh.lastIndex=0;;){let r=xh.exec(i),o=xh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Lp(n,l===void 0?new Fh(a,e,t):new Oh(a,e,t));break}else{let u=n.map[a];u===void 0&&(u=new Bh(a),Lp(n,u)),n=u}}}var br=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(n,s),o=t.getUniformLocation(n,r.name);SM(r,o,this)}}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in n&&i.push(o)}return i}};function Ip(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var bM=37297,EM=0;function TM(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wM(e){let t=oe.getPrimaries(oe.workingColorSpace),n=oe.getPrimaries(e),i;switch(t===n?i="":t===ic&&n===nc?i="LinearDisplayP3ToLinearSRGB":t===nc&&n===ic&&(i="LinearSRGBToLinearDisplayP3"),e){case Hi:case Ic:return[i,"LinearTransferOETF"];case xe:case mu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Up(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+TM(e.getShaderSource(t),o)}else return s}function AM(e,t){let n=wM(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function RM(e,t){let n;switch(t){case N1:n="Linear";break;case fu:n="Reinhard";break;case F1:n="OptimizedCineon";break;case O1:n="ACESFilmic";break;case k1:n="AgX";break;case B1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function CM(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function PM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vr).join(`
`)}function LM(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function IM(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function vr(e){return e!==""}function Dp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Np(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var UM=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(e){return e.replace(UM,NM)}var DM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NM(e,t){let n=Xt[t];if(n===void 0){let i=DM.get(t);if(i!==void 0)n=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kh(n)}var FM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(e){return e.replace(FM,OM)}function OM(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Op(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function BM(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Jp?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===l1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function kM(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case Lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zM(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Tr&&(t="ENVMAP_MODE_REFRACTION"),t}function HM(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Kp:t="ENVMAP_BLENDING_MULTIPLY";break;case U1:t="ENVMAP_BLENDING_MIX";break;case D1:t="ENVMAP_BLENDING_ADD";break}return t}function VM(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function GM(e,t,n,i){let s=e.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,c=BM(n),l=kM(n),h=zM(n),u=HM(n),d=VM(n),p=n.isWebGL2?"":CM(n),g=PM(n),x=LM(r),m=s.createProgram(),f,M,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(vr).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(vr).join(`
`),M.length>0&&(M+=`
`)):(f=[Op(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),M=[p,Op(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==as?"#define TONE_MAPPING":"",n.toneMapping!==as?Xt.tonemapping_pars_fragment:"",n.toneMapping!==as?RM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,AM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vr).join(`
`)),o=kh(o),o=Dp(o,n),o=Np(o,n),a=kh(a),a=Dp(a,n),a=Np(a,n),o=Fp(o),a=Fp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let E=_+f+o,L=_+M+a,w=Ip(s,s.VERTEX_SHADER,E),A=Ip(s,s.FRAGMENT_SHADER,L);s.attachShader(m,w),s.attachShader(m,A),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k($){if(e.debug.checkShaderErrors){let st=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(w).trim(),F=s.getShaderInfoLog(A).trim(),V=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,m,w,A);else{let q=Up(s,w,"vertex"),G=Up(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+st+`
`+q+`
`+G)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(I===""||F==="")&&(Y=!1);Y&&($.diagnostics={runnable:V,programLog:st,vertexShader:{log:I,prefix:f},fragmentShader:{log:F,prefix:M}})}s.deleteShader(w),s.deleteShader(A),y=new br(s,m),T=IM(s,m)}let y;this.getUniforms=function(){return y===void 0&&k(this),y};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,bM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=EM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}var WM=0,zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Hh(t),n.set(t,i)),i}},Hh=class{constructor(t){this.id=WM++,this.code=t,this.usedTimes=0}};function XM(e,t,n,i,s,r,o){let a=new hc,c=new zh,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,T,N,$,st){let I=$.fog,F=st.geometry,V=y.isMeshStandardMaterial?$.environment:null,Y=(y.isMeshStandardMaterial?n:t).get(y.envMap||V),q=Y&&Y.mapping===Lc?Y.image.height:null,G=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=Q!==void 0?Q.length:0,ut=0;F.morphAttributes.position!==void 0&&(ut=1),F.morphAttributes.normal!==void 0&&(ut=2),F.morphAttributes.color!==void 0&&(ut=3);let H,J,ft,Tt;if(G){let ln=Mi[G];H=ln.vertexShader,J=ln.fragmentShader}else H=y.vertexShader,J=y.fragmentShader,c.update(y),ft=c.getVertexShaderID(y),Tt=c.getFragmentShaderID(y);let _t=e.getRenderTarget(),Dt=st.isInstancedMesh===!0,zt=st.isBatchedMesh===!0,wt=!!y.map,Bt=!!y.matcap,R=!!Y,rt=!!y.aoMap,X=!!y.lightMap,it=!!y.bumpMap,W=!!y.normalMap,Rt=!!y.displacementMap,pt=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,D=y.anisotropy>0,et=y.clearcoat>0,K=y.iridescence>0,Z=y.sheen>0,bt=y.transmission>0,ct=D&&!!y.anisotropyMap,xt=et&&!!y.clearcoatMap,Lt=et&&!!y.clearcoatNormalMap,Vt=et&&!!y.clearcoatRoughnessMap,j=K&&!!y.iridescenceMap,ne=K&&!!y.iridescenceThicknessMap,Jt=Z&&!!y.sheenColorMap,kt=Z&&!!y.sheenRoughnessMap,Pt=!!y.specularMap,yt=!!y.specularColorMap,Wt=!!y.specularIntensityMap,ie=bt&&!!y.transmissionMap,Re=bt&&!!y.thicknessMap,Yt=!!y.gradientMap,ot=!!y.alphaMap,P=y.alphaTest>0,lt=!!y.alphaHash,ht=!!y.extensions,Nt=!!F.attributes.uv1,It=!!F.attributes.uv2,he=!!F.attributes.uv3,ue=as;return y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ue=e.toneMapping),{isWebGL2:h,shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:J,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:zt,instancing:Dt,instancingColor:Dt&&st.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?e.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Hi,map:wt,matcap:Bt,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:X,bumpMap:it,normalMap:W,displacementMap:d&&Rt,emissiveMap:pt,normalMapObjectSpace:W&&y.normalMapType===K1,normalMapTangentSpace:W&&y.normalMapType===am,metalnessMap:S,roughnessMap:v,anisotropy:D,anisotropyMap:ct,clearcoat:et,clearcoatMap:xt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,iridescence:K,iridescenceMap:j,iridescenceThicknessMap:ne,sheen:Z,sheenColorMap:Jt,sheenRoughnessMap:kt,specularMap:Pt,specularColorMap:yt,specularIntensityMap:Wt,transmission:bt,transmissionMap:ie,thicknessMap:Re,gradientMap:Yt,opaque:y.transparent===!1&&y.blending===Mr,alphaMap:ot,alphaTest:P,alphaHash:lt,combine:y.combine,mapUv:wt&&x(y.map.channel),aoMapUv:rt&&x(y.aoMap.channel),lightMapUv:X&&x(y.lightMap.channel),bumpMapUv:it&&x(y.bumpMap.channel),normalMapUv:W&&x(y.normalMap.channel),displacementMapUv:Rt&&x(y.displacementMap.channel),emissiveMapUv:pt&&x(y.emissiveMap.channel),metalnessMapUv:S&&x(y.metalnessMap.channel),roughnessMapUv:v&&x(y.roughnessMap.channel),anisotropyMapUv:ct&&x(y.anisotropyMap.channel),clearcoatMapUv:xt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(y.sheenRoughnessMap.channel),specularMapUv:Pt&&x(y.specularMap.channel),specularColorMapUv:yt&&x(y.specularColorMap.channel),specularIntensityMapUv:Wt&&x(y.specularIntensityMap.channel),transmissionMapUv:ie&&x(y.transmissionMap.channel),thicknessMapUv:Re&&x(y.thicknessMap.channel),alphaMapUv:ot&&x(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(W||D),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:It,vertexUv3s:he,pointsUvs:st.isPoints===!0&&!!F.attributes.uv&&(wt||ot),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:st.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:ue,useLegacyLights:e._useLegacyLights,decodeVideoTexture:wt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ni,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ht&&y.extensions.derivatives===!0,extensionFragDepth:ht&&y.extensions.fragDepth===!0,extensionDrawBuffers:ht&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(M(T,y),_(T,y),T.push(e.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function M(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){let T=g[y.type],N;if(T){let $=Mi[T];N=Br.clone($.uniforms)}else N=y.uniforms;return N}function L(y,T){let N;for(let $=0,st=l.length;$<st;$++){let I=l[$];if(I.cacheKey===T){N=I,++N.usedTimes;break}}return N===void 0&&(N=new GM(e,T,y,r),l.push(N)),N}function w(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function A(y){c.remove(y)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:k}}function qM(){let e=new WeakMap;function t(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function n(r){e.delete(r)}function i(r,o,a){e.get(r)[o]=a}function s(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function YM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Bp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function kp(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(u,d,p,g,x,m){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},e[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function c(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function l(u,d){n.length>1&&n.sort(u||YM),i.length>1&&i.sort(d||Bp),s.length>1&&s.sort(d||Bp)}function h(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function $M(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;return r===void 0?(o=new kp,e.set(i,[o])):s>=r.length?(o=new kp,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function ZM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new C,color:new Ft};break;case"SpotLight":n={position:new C,direction:new C,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new C,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new C,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":n={color:new Ft,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=n,n}}}function JM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var KM=0;function jM(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function QM(e,t){let n=new ZM,i=JM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new Pe,a=new Pe;function c(h,u){let d=0,p=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let x=0,m=0,f=0,M=0,_=0,E=0,L=0,w=0,A=0,k=0,y=0;h.sort(jM);let T=u===!0?Math.PI:1;for(let $=0,st=h.length;$<st;$++){let I=h[$],F=I.color,V=I.intensity,Y=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*V*T,p+=F.g*V*T,g+=F.b*V*T;else if(I.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(I.sh.coefficients[G],V);y++}else if(I.isDirectionalLight){let G=n.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){let Q=I.shadow,tt=i.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,s.directionalShadow[x]=tt,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=I.shadow.matrix,E++}s.directional[x]=G,x++}else if(I.isSpotLight){let G=n.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(F).multiplyScalar(V*T),G.distance=Y,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,s.spot[f]=G;let Q=I.shadow;if(I.map&&(s.spotLightMap[A]=I.map,A++,Q.updateMatrices(I),I.castShadow&&k++),s.spotLightMatrix[f]=Q.matrix,I.castShadow){let tt=i.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,s.spotShadow[f]=tt,s.spotShadowMap[f]=q,w++}f++}else if(I.isRectAreaLight){let G=n.get(I);G.color.copy(F).multiplyScalar(V),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=G,M++}else if(I.isPointLight){let G=n.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*T),G.distance=I.distance,G.decay=I.decay,I.castShadow){let Q=I.shadow,tt=i.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=I.shadow.matrix,L++}s.point[m]=G,m++}else if(I.isHemisphereLight){let G=n.get(I);G.skyColor.copy(I.color).multiplyScalar(V*T),G.groundColor.copy(I.groundColor).multiplyScalar(V*T),s.hemi[_]=G,_++}}M>0&&(t.isWebGL2?e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==M||N.hemiLength!==_||N.numDirectionalShadows!==E||N.numPointShadows!==L||N.numSpotShadows!==w||N.numSpotMaps!==A||N.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+A-k,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=y,N.directionalLength=x,N.pointLength=m,N.spotLength=f,N.rectAreaLength=M,N.hemiLength=_,N.numDirectionalShadows=E,N.numPointShadows=L,N.numSpotShadows=w,N.numSpotMaps=A,N.numLightProbes=y,s.version=KM++)}function l(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let E=h[M];if(E.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),d++}else if(E.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),g++}else if(E.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),a.identity(),o.copy(E.matrixWorld),o.premultiply(f),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function zp(e,t){let n=new QM(e,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){n.setup(i,u)}function l(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function tS(e,t){let n=new WeakMap;function i(r,o=0){let a=n.get(r),c;return a===void 0?(c=new zp(e,t),n.set(r,[c])):o>=a.length?(c=new zp(e,t),a.push(c)):c=a[o],c}function s(){n=new WeakMap}return{get:i,dispose:s}}var Vh=class extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gh=class extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},eS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nS=`uniform sampler2D shadow_pass;
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
}`;function iS(e,t,n){let i=new Io,s=new nt,r=new nt,o=new ve,a=new Vh({depthPacking:J1}),c=new Gh,l={},h=n.maxTextureSize,u={[ls]:rn,[rn]:ls,[ni]:ni},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:eS,fragmentShader:nS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new An;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jp;let f=this.type;this.render=function(w,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=e.getRenderTarget(),T=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),$=e.state;$.setBlending(bi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let st=f!==Bi&&this.type===Bi,I=f===Bi&&this.type!==Bi;for(let F=0,V=w.length;F<V;F++){let Y=w[F],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let G=q.getFrameExtents();if(s.multiply(G),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,q.mapSize.y=r.y)),q.map===null||st===!0||I===!0){let tt=this.type!==Bi?{minFilter:fn,magFilter:fn}:{};q.map!==null&&q.map.dispose(),q.map=new pn(s.x,s.y,tt),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}e.setRenderTarget(q.map),e.clear();let Q=q.getViewportCount();for(let tt=0;tt<Q;tt++){let ut=q.getViewport(tt);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),$.viewport(o),q.updateMatrices(Y,tt),i=q.getFrustum(),E(A,k,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===Bi&&M(q,k),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(y,T,N)};function M(w,A){let k=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(A,null,k,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(A,null,k,p,x,null)}function _(w,A,k,y){let T=null,N=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)T=N;else if(T=k.isPointLight===!0?c:a,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let $=T.uuid,st=A.uuid,I=l[$];I===void 0&&(I={},l[$]=I);let F=I[st];F===void 0&&(F=T.clone(),I[st]=F,A.addEventListener("dispose",L)),T=F}if(T.visible=A.visible,T.wireframe=A.wireframe,y===Bi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let $=e.properties.get(T);$.light=k}return T}function E(w,A,k,y,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Bi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);let st=t.update(w),I=w.material;if(Array.isArray(I)){let F=st.groups;for(let V=0,Y=F.length;V<Y;V++){let q=F[V],G=I[q.materialIndex];if(G&&G.visible){let Q=_(w,G,y,T);w.onBeforeShadow(e,w,A,k,st,Q,q),e.renderBufferDirect(k,null,st,Q,w,q),w.onAfterShadow(e,w,A,k,st,Q,q)}}}else if(I.visible){let F=_(w,I,y,T);w.onBeforeShadow(e,w,A,k,st,F,null),e.renderBufferDirect(k,null,st,F,w,null),w.onAfterShadow(e,w,A,k,st,F,null)}}let $=w.children;for(let st=0,I=$.length;st<I;st++)E($[st],A,k,y,T)}function L(w){w.target.removeEventListener("dispose",L);for(let k in l){let y=l[k],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function sS(e,t,n){let i=n.isWebGL2;function s(){let P=!1,lt=new ve,ht=null,Nt=new ve(0,0,0,0);return{setMask:function(It){ht!==It&&!P&&(e.colorMask(It,It,It,It),ht=It)},setLocked:function(It){P=It},setClear:function(It,he,ue,Ye,ln){ln===!0&&(It*=Ye,he*=Ye,ue*=Ye),lt.set(It,he,ue,Ye),Nt.equals(lt)===!1&&(e.clearColor(It,he,ue,Ye),Nt.copy(lt))},reset:function(){P=!1,ht=null,Nt.set(-1,0,0,0)}}}function r(){let P=!1,lt=null,ht=null,Nt=null;return{setTest:function(It){It?zt(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(It){lt!==It&&!P&&(e.depthMask(It),lt=It)},setFunc:function(It){if(ht!==It){switch(It){case w1:e.depthFunc(e.NEVER);break;case A1:e.depthFunc(e.ALWAYS);break;case R1:e.depthFunc(e.LESS);break;case ja:e.depthFunc(e.LEQUAL);break;case C1:e.depthFunc(e.EQUAL);break;case P1:e.depthFunc(e.GEQUAL);break;case L1:e.depthFunc(e.GREATER);break;case I1:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=It}},setLocked:function(It){P=It},setClear:function(It){Nt!==It&&(e.clearDepth(It),Nt=It)},reset:function(){P=!1,lt=null,ht=null,Nt=null}}}function o(){let P=!1,lt=null,ht=null,Nt=null,It=null,he=null,ue=null,Ye=null,ln=null;return{setTest:function(de){P||(de?zt(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(de){lt!==de&&!P&&(e.stencilMask(de),lt=de)},setFunc:function(de,hn,yi){(ht!==de||Nt!==hn||It!==yi)&&(e.stencilFunc(de,hn,yi),ht=de,Nt=hn,It=yi)},setOp:function(de,hn,yi){(he!==de||ue!==hn||Ye!==yi)&&(e.stencilOp(de,hn,yi),he=de,ue=hn,Ye=yi)},setLocked:function(de){P=de},setClear:function(de){ln!==de&&(e.clearStencil(de),ln=de)},reset:function(){P=!1,lt=null,ht=null,Nt=null,It=null,he=null,ue=null,Ye=null,ln=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,M=null,_=null,E=null,L=null,w=null,A=null,k=null,y=new Ft(0,0,0),T=0,N=!1,$=null,st=null,I=null,F=null,V=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,G=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=G>=2);let tt=null,ut={},H=e.getParameter(e.SCISSOR_BOX),J=e.getParameter(e.VIEWPORT),ft=new ve().fromArray(H),Tt=new ve().fromArray(J);function _t(P,lt,ht,Nt){let It=new Uint8Array(4),he=e.createTexture();e.bindTexture(P,he),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ue=0;ue<ht;ue++)i&&(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY)?e.texImage3D(lt,0,e.RGBA,1,1,Nt,0,e.RGBA,e.UNSIGNED_BYTE,It):e.texImage2D(lt+ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,It);return he}let Dt={};Dt[e.TEXTURE_2D]=_t(e.TEXTURE_2D,e.TEXTURE_2D,1),Dt[e.TEXTURE_CUBE_MAP]=_t(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Dt[e.TEXTURE_2D_ARRAY]=_t(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Dt[e.TEXTURE_3D]=_t(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),zt(e.DEPTH_TEST),c.setFunc(ja),pt(!1),S(yf),zt(e.CULL_FACE),W(bi);function zt(P){d[P]!==!0&&(e.enable(P),d[P]=!0)}function wt(P){d[P]!==!1&&(e.disable(P),d[P]=!1)}function Bt(P,lt){return p[P]!==lt?(e.bindFramebuffer(P,lt),p[P]=lt,i&&(P===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=lt),P===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=lt)),!0):!1}function R(P,lt){let ht=x,Nt=!1;if(P)if(ht=g.get(lt),ht===void 0&&(ht=[],g.set(lt,ht)),P.isWebGLMultipleRenderTargets){let It=P.texture;if(ht.length!==It.length||ht[0]!==e.COLOR_ATTACHMENT0){for(let he=0,ue=It.length;he<ue;he++)ht[he]=e.COLOR_ATTACHMENT0+he;ht.length=It.length,Nt=!0}}else ht[0]!==e.COLOR_ATTACHMENT0&&(ht[0]=e.COLOR_ATTACHMENT0,Nt=!0);else ht[0]!==e.BACK&&(ht[0]=e.BACK,Nt=!0);Nt&&(n.isWebGL2?e.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function rt(P){return m!==P?(e.useProgram(P),m=P,!0):!1}let X={[Ns]:e.FUNC_ADD,[u1]:e.FUNC_SUBTRACT,[d1]:e.FUNC_REVERSE_SUBTRACT};if(i)X[bf]=e.MIN,X[Ef]=e.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(X[bf]=P.MIN_EXT,X[Ef]=P.MAX_EXT)}let it={[f1]:e.ZERO,[p1]:e.ONE,[m1]:e.SRC_COLOR,[Eh]:e.SRC_ALPHA,[M1]:e.SRC_ALPHA_SATURATE,[v1]:e.DST_COLOR,[_1]:e.DST_ALPHA,[g1]:e.ONE_MINUS_SRC_COLOR,[Th]:e.ONE_MINUS_SRC_ALPHA,[y1]:e.ONE_MINUS_DST_COLOR,[x1]:e.ONE_MINUS_DST_ALPHA,[S1]:e.CONSTANT_COLOR,[b1]:e.ONE_MINUS_CONSTANT_COLOR,[E1]:e.CONSTANT_ALPHA,[T1]:e.ONE_MINUS_CONSTANT_ALPHA};function W(P,lt,ht,Nt,It,he,ue,Ye,ln,de){if(P===bi){f===!0&&(wt(e.BLEND),f=!1);return}if(f===!1&&(zt(e.BLEND),f=!0),P!==h1){if(P!==M||de!==N){if((_!==Ns||w!==Ns)&&(e.blendEquation(e.FUNC_ADD),_=Ns,w=Ns),de)switch(P){case Mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ka:e.blendFunc(e.ONE,e.ONE);break;case Mf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Sf:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ka:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Mf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Sf:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,L=null,A=null,k=null,y.set(0,0,0),T=0,M=P,N=de}return}It=It||lt,he=he||ht,ue=ue||Nt,(lt!==_||It!==w)&&(e.blendEquationSeparate(X[lt],X[It]),_=lt,w=It),(ht!==E||Nt!==L||he!==A||ue!==k)&&(e.blendFuncSeparate(it[ht],it[Nt],it[he],it[ue]),E=ht,L=Nt,A=he,k=ue),(Ye.equals(y)===!1||ln!==T)&&(e.blendColor(Ye.r,Ye.g,Ye.b,ln),y.copy(Ye),T=ln),M=P,N=!1}function Rt(P,lt){P.side===ni?wt(e.CULL_FACE):zt(e.CULL_FACE);let ht=P.side===rn;lt&&(ht=!ht),pt(ht),P.blending===Mr&&P.transparent===!1?W(bi):W(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);let Nt=P.stencilWrite;l.setTest(Nt),Nt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),D(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?zt(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function pt(P){$!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),$=P)}function S(P){P!==a1?(zt(e.CULL_FACE),P!==st&&(P===yf?e.cullFace(e.BACK):P===c1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),st=P}function v(P){P!==I&&(q&&e.lineWidth(P),I=P)}function D(P,lt,ht){P?(zt(e.POLYGON_OFFSET_FILL),(F!==lt||V!==ht)&&(e.polygonOffset(lt,ht),F=lt,V=ht)):wt(e.POLYGON_OFFSET_FILL)}function et(P){P?zt(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function K(P){P===void 0&&(P=e.TEXTURE0+Y-1),tt!==P&&(e.activeTexture(P),tt=P)}function Z(P,lt,ht){ht===void 0&&(tt===null?ht=e.TEXTURE0+Y-1:ht=tt);let Nt=ut[ht];Nt===void 0&&(Nt={type:void 0,texture:void 0},ut[ht]=Nt),(Nt.type!==P||Nt.texture!==lt)&&(tt!==ht&&(e.activeTexture(ht),tt=ht),e.bindTexture(P,lt||Dt[P]),Nt.type=P,Nt.texture=lt)}function bt(){let P=ut[tt];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ct(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Jt(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(P){ft.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),ft.copy(P))}function ie(P){Tt.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Tt.copy(P))}function Re(P,lt){let ht=u.get(lt);ht===void 0&&(ht=new WeakMap,u.set(lt,ht));let Nt=ht.get(P);Nt===void 0&&(Nt=e.getUniformBlockIndex(lt,P.name),ht.set(P,Nt))}function Yt(P,lt){let Nt=u.get(lt).get(P);h.get(lt)!==Nt&&(e.uniformBlockBinding(lt,Nt,P.__bindingPointIndex),h.set(lt,Nt))}function ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},tt=null,ut={},p={},g=new WeakMap,x=[],m=null,f=!1,M=null,_=null,E=null,L=null,w=null,A=null,k=null,y=new Ft(0,0,0),T=0,N=!1,$=null,st=null,I=null,F=null,V=null,ft.set(0,0,e.canvas.width,e.canvas.height),Tt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:zt,disable:wt,bindFramebuffer:Bt,drawBuffers:R,useProgram:rt,setBlending:W,setMaterial:Rt,setFlipSided:pt,setCullFace:S,setLineWidth:v,setPolygonOffset:D,setScissorTest:et,activeTexture:K,bindTexture:Z,unbindTexture:bt,compressedTexImage2D:ct,compressedTexImage3D:xt,texImage2D:Pt,texImage3D:yt,updateUBOMapping:Re,uniformBlockBinding:Yt,texStorage2D:Jt,texStorage3D:kt,texSubImage2D:Lt,texSubImage3D:Vt,compressedTexSubImage2D:j,compressedTexSubImage3D:ne,scissor:Wt,viewport:ie,reset:ot}}function rS(e,t,n,i,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return p?new OffscreenCanvas(S,v):Po("canvas")}function x(S,v,D,et){let K=1;if((S.width>et||S.height>et)&&(K=et/Math.max(S.width,S.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let Z=v?rc:Math.floor,bt=Z(K*S.width),ct=Z(K*S.height);u===void 0&&(u=g(bt,ct));let xt=D?g(bt,ct):u;return xt.width=bt,xt.height=ct,xt.getContext("2d").drawImage(S,0,0,bt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+bt+"x"+ct+")."),xt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Ph(S.width)&&Ph(S.height)}function f(S){return a?!1:S.wrapS!==ii||S.wrapT!==ii||S.minFilter!==fn&&S.minFilter!==Bn}function M(S,v){return S.generateMipmaps&&v&&S.minFilter!==fn&&S.minFilter!==Bn}function _(S){e.generateMipmap(S)}function E(S,v,D,et,K=!1){if(a===!1)return v;if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=v;if(v===e.RED&&(D===e.FLOAT&&(Z=e.R32F),D===e.HALF_FLOAT&&(Z=e.R16F),D===e.UNSIGNED_BYTE&&(Z=e.R8)),v===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(Z=e.R8UI),D===e.UNSIGNED_SHORT&&(Z=e.R16UI),D===e.UNSIGNED_INT&&(Z=e.R32UI),D===e.BYTE&&(Z=e.R8I),D===e.SHORT&&(Z=e.R16I),D===e.INT&&(Z=e.R32I)),v===e.RG&&(D===e.FLOAT&&(Z=e.RG32F),D===e.HALF_FLOAT&&(Z=e.RG16F),D===e.UNSIGNED_BYTE&&(Z=e.RG8)),v===e.RGBA){let bt=K?ec:oe.getTransfer(et);D===e.FLOAT&&(Z=e.RGBA32F),D===e.HALF_FLOAT&&(Z=e.RGBA16F),D===e.UNSIGNED_BYTE&&(Z=bt===me?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function L(S,v,D){return M(S,D)===!0||S.isFramebufferTexture&&S.minFilter!==fn&&S.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function w(S){return S===fn||S===Tf||S===Wl?e.NEAREST:e.LINEAR}function A(S){let v=S.target;v.removeEventListener("dispose",A),y(v),v.isVideoTexture&&h.delete(v)}function k(S){let v=S.target;v.removeEventListener("dispose",k),N(v)}function y(S){let v=i.get(S);if(v.__webglInit===void 0)return;let D=S.source,et=d.get(D);if(et){let K=et[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(S),Object.keys(et).length===0&&d.delete(D)}i.remove(S)}function T(S){let v=i.get(S);e.deleteTexture(v.__webglTexture);let D=S.source,et=d.get(D);delete et[v.__cacheKey],o.memory.textures--}function N(S){let v=S.texture,D=i.get(S),et=i.get(v);if(et.__webglTexture!==void 0&&(e.deleteTexture(et.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(D.__webglFramebuffer[K]))for(let Z=0;Z<D.__webglFramebuffer[K].length;Z++)e.deleteFramebuffer(D.__webglFramebuffer[K][Z]);else e.deleteFramebuffer(D.__webglFramebuffer[K]);D.__webglDepthbuffer&&e.deleteRenderbuffer(D.__webglDepthbuffer[K])}else{if(Array.isArray(D.__webglFramebuffer))for(let K=0;K<D.__webglFramebuffer.length;K++)e.deleteFramebuffer(D.__webglFramebuffer[K]);else e.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&e.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&e.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let K=0;K<D.__webglColorRenderbuffer.length;K++)D.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(D.__webglColorRenderbuffer[K]);D.__webglDepthRenderbuffer&&e.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,Z=v.length;K<Z;K++){let bt=i.get(v[K]);bt.__webglTexture&&(e.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(v[K])}i.remove(v),i.remove(S)}let $=0;function st(){$=0}function I(){let S=$;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),$+=1,S}function F(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function V(S,v){let D=i.get(S);if(S.isVideoTexture&&Rt(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){let et=S.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(D,S,v);return}}n.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+v)}function Y(S,v){let D=i.get(S);if(S.version>0&&D.__version!==S.version){ft(D,S,v);return}n.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+v)}function q(S,v){let D=i.get(S);if(S.version>0&&D.__version!==S.version){ft(D,S,v);return}n.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+v)}function G(S,v){let D=i.get(S);if(S.version>0&&D.__version!==S.version){Tt(D,S,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+v)}let Q={[wr]:e.REPEAT,[ii]:e.CLAMP_TO_EDGE,[Rh]:e.MIRRORED_REPEAT},tt={[fn]:e.NEAREST,[Tf]:e.NEAREST_MIPMAP_NEAREST,[Wl]:e.NEAREST_MIPMAP_LINEAR,[Bn]:e.LINEAR,[z1]:e.LINEAR_MIPMAP_NEAREST,[Co]:e.LINEAR_MIPMAP_LINEAR},ut={[j1]:e.NEVER,[sx]:e.ALWAYS,[Q1]:e.LESS,[cm]:e.LEQUAL,[tx]:e.EQUAL,[ix]:e.GEQUAL,[ex]:e.GREATER,[nx]:e.NOTEQUAL};function H(S,v,D){if(D?(e.texParameteri(S,e.TEXTURE_WRAP_S,Q[v.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,Q[v.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,Q[v.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,tt[v.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,tt[v.minFilter])):(e.texParameteri(S,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(S,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(v.wrapS!==ii||v.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(S,e.TEXTURE_MAG_FILTER,w(v.magFilter)),e.texParameteri(S,e.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==fn&&v.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===fn||v.minFilter!==Wl&&v.minFilter!==Co||v.type===os&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===ri&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(e.texParameterf(S,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function J(S,v){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));let et=v.source,K=d.get(et);K===void 0&&(K={},d.set(et,K));let Z=F(v);if(Z!==S.__cacheKey){K[Z]===void 0&&(K[Z]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[Z].usedTimes++;let bt=K[S.__cacheKey];bt!==void 0&&(K[S.__cacheKey].usedTimes--,bt.usedTimes===0&&T(v)),S.__cacheKey=Z,S.__webglTexture=K[Z].texture}return D}function ft(S,v,D){let et=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=e.TEXTURE_3D);let K=J(S,v),Z=v.source;n.bindTexture(et,S.__webglTexture,e.TEXTURE0+D);let bt=i.get(Z);if(Z.version!==bt.__version||K===!0){n.activeTexture(e.TEXTURE0+D);let ct=oe.getPrimaries(oe.workingColorSpace),xt=v.colorSpace===kn?null:oe.getPrimaries(v.colorSpace),Lt=v.colorSpace===kn||ct===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Vt=f(v)&&m(v.image)===!1,j=x(v.image,Vt,!1,s.maxTextureSize);j=pt(v,j);let ne=m(j)||a,Jt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),Pt=E(v.internalFormat,Jt,kt,v.colorSpace,v.isVideoTexture);H(et,v,ne);let yt,Wt=v.mipmaps,ie=a&&v.isVideoTexture!==!0&&Pt!==rm,Re=bt.__version===void 0||K===!0,Yt=L(v,j,ne);if(v.isDepthTexture)Pt=e.DEPTH_COMPONENT,a?v.type===os?Pt=e.DEPTH_COMPONENT32F:v.type===rs?Pt=e.DEPTH_COMPONENT24:v.type===Os?Pt=e.DEPTH24_STENCIL8:Pt=e.DEPTH_COMPONENT16:v.type===os&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Bs&&Pt===e.DEPTH_COMPONENT&&v.type!==pu&&v.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=rs,kt=r.convert(v.type)),v.format===Ar&&Pt===e.DEPTH_COMPONENT&&(Pt=e.DEPTH_STENCIL,v.type!==Os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Os,kt=r.convert(v.type))),Re&&(ie?n.texStorage2D(e.TEXTURE_2D,1,Pt,j.width,j.height):n.texImage2D(e.TEXTURE_2D,0,Pt,j.width,j.height,0,Jt,kt,null));else if(v.isDataTexture)if(Wt.length>0&&ne){ie&&Re&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ot=0,P=Wt.length;ot<P;ot++)yt=Wt[ot],ie?n.texSubImage2D(e.TEXTURE_2D,ot,0,0,yt.width,yt.height,Jt,kt,yt.data):n.texImage2D(e.TEXTURE_2D,ot,Pt,yt.width,yt.height,0,Jt,kt,yt.data);v.generateMipmaps=!1}else ie?(Re&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,j.width,j.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,j.width,j.height,Jt,kt,j.data)):n.texImage2D(e.TEXTURE_2D,0,Pt,j.width,j.height,0,Jt,kt,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&Re&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Yt,Pt,Wt[0].width,Wt[0].height,j.depth);for(let ot=0,P=Wt.length;ot<P;ot++)yt=Wt[ot],v.format!==si?Jt!==null?ie?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ot,0,0,0,yt.width,yt.height,j.depth,Jt,yt.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ot,Pt,yt.width,yt.height,j.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?n.texSubImage3D(e.TEXTURE_2D_ARRAY,ot,0,0,0,yt.width,yt.height,j.depth,Jt,kt,yt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ot,Pt,yt.width,yt.height,j.depth,0,Jt,kt,yt.data)}else{ie&&Re&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ot=0,P=Wt.length;ot<P;ot++)yt=Wt[ot],v.format!==si?Jt!==null?ie?n.compressedTexSubImage2D(e.TEXTURE_2D,ot,0,0,yt.width,yt.height,Jt,yt.data):n.compressedTexImage2D(e.TEXTURE_2D,ot,Pt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?n.texSubImage2D(e.TEXTURE_2D,ot,0,0,yt.width,yt.height,Jt,kt,yt.data):n.texImage2D(e.TEXTURE_2D,ot,Pt,yt.width,yt.height,0,Jt,kt,yt.data)}else if(v.isDataArrayTexture)ie?(Re&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Yt,Pt,j.width,j.height,j.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Jt,kt,j.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,Pt,j.width,j.height,j.depth,0,Jt,kt,j.data);else if(v.isData3DTexture)ie?(Re&&n.texStorage3D(e.TEXTURE_3D,Yt,Pt,j.width,j.height,j.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Jt,kt,j.data)):n.texImage3D(e.TEXTURE_3D,0,Pt,j.width,j.height,j.depth,0,Jt,kt,j.data);else if(v.isFramebufferTexture){if(Re)if(ie)n.texStorage2D(e.TEXTURE_2D,Yt,Pt,j.width,j.height);else{let ot=j.width,P=j.height;for(let lt=0;lt<Yt;lt++)n.texImage2D(e.TEXTURE_2D,lt,Pt,ot,P,0,Jt,kt,null),ot>>=1,P>>=1}}else if(Wt.length>0&&ne){ie&&Re&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ot=0,P=Wt.length;ot<P;ot++)yt=Wt[ot],ie?n.texSubImage2D(e.TEXTURE_2D,ot,0,0,Jt,kt,yt):n.texImage2D(e.TEXTURE_2D,ot,Pt,Jt,kt,yt);v.generateMipmaps=!1}else ie?(Re&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,j.width,j.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,Jt,kt,j)):n.texImage2D(e.TEXTURE_2D,0,Pt,Jt,kt,j);M(v,ne)&&_(et),bt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Tt(S,v,D){if(v.image.length!==6)return;let et=J(S,v),K=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+D);let Z=i.get(K);if(K.version!==Z.__version||et===!0){n.activeTexture(e.TEXTURE0+D);let bt=oe.getPrimaries(oe.workingColorSpace),ct=v.colorSpace===kn?null:oe.getPrimaries(v.colorSpace),xt=v.colorSpace===kn||bt===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Lt=v.isCompressedTexture||v.image[0].isCompressedTexture,Vt=v.image[0]&&v.image[0].isDataTexture,j=[];for(let ot=0;ot<6;ot++)!Lt&&!Vt?j[ot]=x(v.image[ot],!1,!0,s.maxCubemapSize):j[ot]=Vt?v.image[ot].image:v.image[ot],j[ot]=pt(v,j[ot]);let ne=j[0],Jt=m(ne)||a,kt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type),yt=E(v.internalFormat,kt,Pt,v.colorSpace),Wt=a&&v.isVideoTexture!==!0,ie=Z.__version===void 0||et===!0,Re=L(v,ne,Jt);H(e.TEXTURE_CUBE_MAP,v,Jt);let Yt;if(Lt){Wt&&ie&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Re,yt,ne.width,ne.height);for(let ot=0;ot<6;ot++){Yt=j[ot].mipmaps;for(let P=0;P<Yt.length;P++){let lt=Yt[P];v.format!==si?kt!==null?Wt?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,P,0,0,lt.width,lt.height,kt,lt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,P,yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,P,0,0,lt.width,lt.height,kt,Pt,lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,P,yt,lt.width,lt.height,0,kt,Pt,lt.data)}}}else{Yt=v.mipmaps,Wt&&ie&&(Yt.length>0&&Re++,n.texStorage2D(e.TEXTURE_CUBE_MAP,Re,yt,j[0].width,j[0].height));for(let ot=0;ot<6;ot++)if(Vt){Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,j[ot].width,j[ot].height,kt,Pt,j[ot].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,yt,j[ot].width,j[ot].height,0,kt,Pt,j[ot].data);for(let P=0;P<Yt.length;P++){let ht=Yt[P].image[ot].image;Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,P+1,0,0,ht.width,ht.height,kt,Pt,ht.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,P+1,yt,ht.width,ht.height,0,kt,Pt,ht.data)}}else{Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,kt,Pt,j[ot]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,yt,kt,Pt,j[ot]);for(let P=0;P<Yt.length;P++){let lt=Yt[P];Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,P+1,0,0,kt,Pt,lt.image[ot]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,P+1,yt,kt,Pt,lt.image[ot])}}}M(v,Jt)&&_(e.TEXTURE_CUBE_MAP),Z.__version=K.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function _t(S,v,D,et,K,Z){let bt=r.convert(D.format,D.colorSpace),ct=r.convert(D.type),xt=E(D.internalFormat,bt,ct,D.colorSpace);if(!i.get(v).__hasExternalTextures){let Vt=Math.max(1,v.width>>Z),j=Math.max(1,v.height>>Z);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,Z,xt,Vt,j,v.depth,0,bt,ct,null):n.texImage2D(K,Z,xt,Vt,j,0,bt,ct,null)}n.bindFramebuffer(e.FRAMEBUFFER,S),W(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,et,K,i.get(D).__webglTexture,0,it(v)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,et,K,i.get(D).__webglTexture,Z),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Dt(S,v,D){if(e.bindRenderbuffer(e.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let et=a===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(D||W(v)){let K=v.depthTexture;K&&K.isDepthTexture&&(K.type===os?et=e.DEPTH_COMPONENT32F:K.type===rs&&(et=e.DEPTH_COMPONENT24));let Z=it(v);W(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Z,et,v.width,v.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,Z,et,v.width,v.height)}else e.renderbufferStorage(e.RENDERBUFFER,et,v.width,v.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let et=it(v);D&&W(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,et,e.DEPTH24_STENCIL8,v.width,v.height):W(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,et,e.DEPTH24_STENCIL8,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,S)}else{let et=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<et.length;K++){let Z=et[K],bt=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),xt=E(Z.internalFormat,bt,ct,Z.colorSpace),Lt=it(v);D&&W(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Lt,xt,v.width,v.height):W(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Lt,xt,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,xt,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function zt(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let et=i.get(v.depthTexture).__webglTexture,K=it(v);if(v.depthTexture.format===Bs)W(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0);else if(v.depthTexture.format===Ar)W(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function wt(S){let v=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");zt(v.__webglFramebuffer,S)}else if(D){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]=e.createRenderbuffer(),Dt(v.__webglDepthbuffer[et],S,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=e.createRenderbuffer(),Dt(v.__webglDepthbuffer,S,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Bt(S,v,D){let et=i.get(S);v!==void 0&&_t(et.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&wt(S)}function R(S){let v=S.texture,D=i.get(S),et=i.get(v);S.addEventListener("dispose",k),S.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=e.createTexture()),et.__version=v.version,o.memory.textures++);let K=S.isWebGLCubeRenderTarget===!0,Z=S.isWebGLMultipleRenderTargets===!0,bt=m(S)||a;if(K){D.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ct]=[];for(let xt=0;xt<v.mipmaps.length;xt++)D.__webglFramebuffer[ct][xt]=e.createFramebuffer()}else D.__webglFramebuffer[ct]=e.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)D.__webglFramebuffer[ct]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(Z)if(s.drawBuffers){let ct=S.texture;for(let xt=0,Lt=ct.length;xt<Lt;xt++){let Vt=i.get(ct[xt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&W(S)===!1){let ct=Z?v:[v];D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let xt=0;xt<ct.length;xt++){let Lt=ct[xt];D.__webglColorRenderbuffer[xt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[xt]);let Vt=r.convert(Lt.format,Lt.colorSpace),j=r.convert(Lt.type),ne=E(Lt.internalFormat,Vt,j,Lt.colorSpace,S.isXRRenderTarget===!0),Jt=it(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,Jt,ne,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,D.__webglColorRenderbuffer[xt])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),Dt(D.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(K){n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),H(e.TEXTURE_CUBE_MAP,v,bt);for(let ct=0;ct<6;ct++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)_t(D.__webglFramebuffer[ct][xt],S,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,xt);else _t(D.__webglFramebuffer[ct],S,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);M(v,bt)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Z){let ct=S.texture;for(let xt=0,Lt=ct.length;xt<Lt;xt++){let Vt=ct[xt],j=i.get(Vt);n.bindTexture(e.TEXTURE_2D,j.__webglTexture),H(e.TEXTURE_2D,Vt,bt),_t(D.__webglFramebuffer,S,Vt,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,0),M(Vt,bt)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let ct=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ct=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ct,et.__webglTexture),H(ct,v,bt),a&&v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)_t(D.__webglFramebuffer[xt],S,v,e.COLOR_ATTACHMENT0,ct,xt);else _t(D.__webglFramebuffer,S,v,e.COLOR_ATTACHMENT0,ct,0);M(v,bt)&&_(ct),n.unbindTexture()}S.depthBuffer&&wt(S)}function rt(S){let v=m(S)||a,D=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0,K=D.length;et<K;et++){let Z=D[et];if(M(Z,v)){let bt=S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,ct=i.get(Z).__webglTexture;n.bindTexture(bt,ct),_(bt),n.unbindTexture()}}}function X(S){if(a&&S.samples>0&&W(S)===!1){let v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],D=S.width,et=S.height,K=e.COLOR_BUFFER_BIT,Z=[],bt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=i.get(S),xt=S.isWebGLMultipleRenderTargets===!0;if(xt)for(let Lt=0;Lt<v.length;Lt++)n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Lt=0;Lt<v.length;Lt++){Z.push(e.COLOR_ATTACHMENT0+Lt),S.depthBuffer&&Z.push(bt);let Vt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Vt===!1&&(S.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),xt&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ct.__webglColorRenderbuffer[Lt]),Vt===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[bt]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[bt])),xt){let j=i.get(v[Lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,j,0)}e.blitFramebuffer(0,0,D,et,0,0,D,et,K,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Z)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),xt)for(let Lt=0;Lt<v.length;Lt++){n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Lt,e.RENDERBUFFER,ct.__webglColorRenderbuffer[Lt]);let Vt=i.get(v[Lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Lt,e.TEXTURE_2D,Vt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function it(S){return Math.min(s.maxSamples,S.samples)}function W(S){let v=i.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(S){let v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function pt(S,v){let D=S.colorSpace,et=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ch||D!==Hi&&D!==kn&&(oe.getTransfer(D)===me?a===!1?t.has("EXT_sRGB")===!0&&et===si?(S.format=Ch,S.minFilter=Bn,S.generateMipmaps=!1):v=oc.sRGBToLinear(v):(et!==si||K!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}this.allocateTextureUnit=I,this.resetTextureUnits=st,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=W}function oS(e,t,n){let i=n.isWebGL2;function s(r,o=kn){let a,c=oe.getTransfer(o);if(r===cs)return e.UNSIGNED_BYTE;if(r===tm)return e.UNSIGNED_SHORT_4_4_4_4;if(r===em)return e.UNSIGNED_SHORT_5_5_5_1;if(r===H1)return e.BYTE;if(r===V1)return e.SHORT;if(r===pu)return e.UNSIGNED_SHORT;if(r===Qp)return e.INT;if(r===rs)return e.UNSIGNED_INT;if(r===os)return e.FLOAT;if(r===ri)return i?e.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===G1)return e.ALPHA;if(r===si)return e.RGBA;if(r===W1)return e.LUMINANCE;if(r===X1)return e.LUMINANCE_ALPHA;if(r===Bs)return e.DEPTH_COMPONENT;if(r===Ar)return e.DEPTH_STENCIL;if(r===Ch)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===q1)return e.RED;if(r===nm)return e.RED_INTEGER;if(r===Y1)return e.RG;if(r===im)return e.RG_INTEGER;if(r===sm)return e.RGBA_INTEGER;if(r===Xl||r===ql||r===Yl||r===$l)if(c===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wf||r===Af||r===Rf||r===Cf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Af)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Pf||r===Lf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Pf)return c===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Lf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===If||r===Uf||r===Df||r===Nf||r===Ff||r===Of||r===Bf||r===kf||r===zf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===If)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Df)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ff)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Of)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xf)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zl||r===qf||r===Yf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Zl)return c===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$1||r===$f||r===Zf||r===Jf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Zl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===$f)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Os?i?e.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):e[r]!==void 0?e[r]:null}return{convert:s}}var Wh=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Si=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},aS={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aS)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Xh=class extends hs{constructor(t,n){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=n.getContextAttributes(),m=null,f=null,M=[],_=[],E=new nt,L=null,w=new Qe;w.layers.enable(1),w.viewport=new ve;let A=new Qe;A.layers.enable(2),A.viewport=new ve;let k=[w,A],y=new Wh;y.layers.enable(1),y.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=M[H];return J===void 0&&(J=new To,M[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=M[H];return J===void 0&&(J=new To,M[H]=J),J.getGripSpace()},this.getHand=function(H){let J=M[H];return J===void 0&&(J=new To,M[H]=J),J.getHandSpace()};function $(H){let J=_.indexOf(H.inputSource);if(J===-1)return;let ft=M[J];ft!==void 0&&(ft.update(H.inputSource,H.frame,l||o),ft.dispatchEvent({type:H.type,data:H.inputSource}))}function st(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",I);for(let H=0;H<M.length;H++){let J=_[H];J!==null&&(_[H]=null,M[H].disconnect(J))}T=null,N=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",st),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await n.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,J),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new pn(p.framebufferWidth,p.framebufferHeight,{format:si,type:cs,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,ft=null,Tt=null;x.depth&&(Tt=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=x.stencil?Ar:Bs,ft=x.stencil?Os:rs);let _t={colorFormat:n.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,n),d=u.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new pn(d.textureWidth,d.textureHeight,{format:si,type:cs,depthTexture:new mc(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Dt=t.properties.get(f);Dt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(H){for(let J=0;J<H.removed.length;J++){let ft=H.removed[J],Tt=_.indexOf(ft);Tt>=0&&(_[Tt]=null,M[Tt].disconnect(ft))}for(let J=0;J<H.added.length;J++){let ft=H.added[J],Tt=_.indexOf(ft);if(Tt===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=_.length){_.push(ft),Tt=Dt;break}else if(_[Dt]===null){_[Dt]=ft,Tt=Dt;break}if(Tt===-1)break}let _t=M[Tt];_t&&_t.connect(ft)}}let F=new C,V=new C;function Y(H,J,ft){F.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(ft.matrixWorld);let Tt=F.distanceTo(V),_t=J.projectionMatrix.elements,Dt=ft.projectionMatrix.elements,zt=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),Bt=(_t[9]+1)/_t[5],R=(_t[9]-1)/_t[5],rt=(_t[8]-1)/_t[0],X=(Dt[8]+1)/Dt[0],it=zt*rt,W=zt*X,Rt=Tt/(-rt+X),pt=Rt*-rt;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(pt),H.translateZ(Rt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let S=zt+Rt,v=wt+Rt,D=it-pt,et=W+(Tt-pt),K=Bt*wt/v*S,Z=R*wt/v*S;H.projectionMatrix.makePerspective(D,et,K,Z,S,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;y.near=A.near=w.near=H.near,y.far=A.far=w.far=H.far,(T!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,N=y.far);let J=H.parent,ft=y.cameras;q(y,J);for(let Tt=0;Tt<ft.length;Tt++)q(ft[Tt],J);ft.length===2?Y(y,w,A):y.projectionMatrix.copy(w.projectionMatrix),G(H,y,J)};function G(H,J,ft){ft===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(ft.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Rr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let Q=null;function tt(H,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Tt=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,Tt=!0);for(let _t=0;_t<ft.length;_t++){let Dt=ft[_t],zt=null;if(p!==null)zt=p.getViewport(Dt);else{let Bt=u.getViewSubImage(d,Dt);zt=Bt.viewport,_t===0&&(t.setRenderTargetTextures(f,Bt.colorTexture,d.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(f))}let wt=k[_t];wt===void 0&&(wt=new Qe,wt.layers.enable(_t),wt.viewport=new ve,k[_t]=wt),wt.matrix.fromArray(Dt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Dt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(zt.x,zt.y,zt.width,zt.height),_t===0&&(y.matrix.copy(wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Tt===!0&&y.cameras.push(wt)}}for(let ft=0;ft<M.length;ft++){let Tt=_[ft],_t=M[ft];Tt!==null&&_t!==void 0&&_t.update(Tt,J,l||o)}Q&&Q(H,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let ut=new dm;ut.setAnimationLoop(tt),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}};function cS(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,um(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,_,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===rn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===rn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lS(e,t,n,i){let s={},r={},o=[],a=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){let E=_.program;i.uniformBlockBinding(M,E)}function l(M,_){let E=s[M.id];E===void 0&&(g(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",m));let L=_.program;i.updateUBOMapping(M,L);let w=t.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function h(M){let _=u();M.__bindingPointIndex=_;let E=e.createBuffer(),L=M.__size,w=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,L,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,E),E}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],E=M.uniforms,L=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,A=E.length;w<A;w++){let k=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,T=k.length;y<T;y++){let N=k[y];if(p(N,w,y,L)===!0){let $=N.__offset,st=Array.isArray(N.value)?N.value:[N.value],I=0;for(let F=0;F<st.length;F++){let V=st[F],Y=x(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,$+I,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,$,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(M,_,E,L){let w=M.value,A=_+"_"+E;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{let k=L[A];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return L[A]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function g(M){let _=M.uniforms,E=0,L=16;for(let A=0,k=_.length;A<k;A++){let y=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,N=y.length;T<N;T++){let $=y[T],st=Array.isArray($.value)?$.value:[$.value];for(let I=0,F=st.length;I<F;I++){let V=st[I],Y=x(V),q=E%L;q!==0&&L-q<Y.boundary&&(E+=L-q),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=Y.storage}}}let w=E%L;return w>0&&(E+=L-w),M.__size=E,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let M in s)e.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Uo=class{constructor(t={}){let{canvas:n=vx(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this._useLegacyLights=!1,this.toneMapping=as,this.toneMappingExposure=1;let _=this,E=!1,L=0,w=0,A=null,k=-1,y=null,T=new ve,N=new ve,$=null,st=new Ft(0),I=0,F=n.width,V=n.height,Y=1,q=null,G=null,Q=new ve(0,0,F,V),tt=new ve(0,0,F,V),ut=!1,H=new Io,J=!1,ft=!1,Tt=null,_t=new Pe,Dt=new nt,zt=new C,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Bt(){return A===null?Y:1}let R=i;function rt(b,U){for(let B=0;B<b.length;B++){let z=b[B],O=n.getContext(z,U);if(O!==null)return O}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r160"),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",lt,!1),R===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),R=rt(U,b),R===null)throw rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let X,it,W,Rt,pt,S,v,D,et,K,Z,bt,ct,xt,Lt,Vt,j,ne,Jt,kt,Pt,yt,Wt,ie;function Re(){X=new R2(R),it=new S2(R,X,t),X.init(it),yt=new oS(R,X,it),W=new sS(R,X,it),Rt=new L2(R),pt=new qM,S=new rS(R,X,W,pt,it,yt,Rt),v=new E2(_),D=new A2(_),et=new kx(R,it),Wt=new y2(R,X,et,it),K=new C2(R,et,Rt,Wt),Z=new N2(R,K,et,Rt),Jt=new D2(R,it,S),Vt=new b2(pt),bt=new XM(_,v,D,X,it,Wt,Vt),ct=new cS(_,pt),xt=new $M,Lt=new tS(X,it),ne=new v2(_,v,D,W,Z,d,c),j=new iS(_,Z,it),ie=new lS(R,Rt,it,W),kt=new M2(R,X,Rt,it),Pt=new P2(R,X,Rt,it),Rt.programs=bt.programs,_.capabilities=it,_.extensions=X,_.properties=pt,_.renderLists=xt,_.shadowMap=j,_.state=W,_.info=Rt}Re();let Yt=new Xh(_,R);this.xr=Yt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=X.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=X.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(F,V,!1))},this.getSize=function(b){return b.set(F,V)},this.setSize=function(b,U,B=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,V=U,n.width=Math.floor(b*Y),n.height=Math.floor(U*Y),B===!0&&(n.style.width=b+"px",n.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(F*Y,V*Y).floor()},this.setDrawingBufferSize=function(b,U,B){F=b,V=U,Y=B,n.width=Math.floor(b*B),n.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(Q)},this.setViewport=function(b,U,B,z){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,U,B,z),W.viewport(T.copy(Q).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,U,B,z){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,U,B,z),W.scissor(N.copy(tt).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(b){W.setScissorTest(ut=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){G=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,U=!0,B=!0){let z=0;if(b){let O=!1;if(A!==null){let mt=A.texture.format;O=mt===sm||mt===im||mt===nm}if(O){let mt=A.texture.type,At=mt===cs||mt===rs||mt===pu||mt===Os||mt===tm||mt===em,Ut=ne.getClearColor(),Ot=ne.getClearAlpha(),qt=Ut.r,Ht=Ut.g,Gt=Ut.b;At?(p[0]=qt,p[1]=Ht,p[2]=Gt,p[3]=Ot,R.clearBufferuiv(R.COLOR,0,p)):(g[0]=qt,g[1]=Ht,g[2]=Gt,g[3]=Ot,R.clearBufferiv(R.COLOR,0,g))}else z|=R.COLOR_BUFFER_BIT}U&&(z|=R.DEPTH_BUFFER_BIT),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),xt.dispose(),Lt.dispose(),pt.dispose(),v.dispose(),D.dispose(),Z.dispose(),Wt.dispose(),ie.dispose(),bt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",ln),Yt.removeEventListener("sessionend",de),Tt&&(Tt.dispose(),Tt=null),hn.stop()};function ot(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=Rt.autoReset,U=j.enabled,B=j.autoUpdate,z=j.needsUpdate,O=j.type;Re(),Rt.autoReset=b,j.enabled=U,j.autoUpdate=B,j.needsUpdate=z,j.type=O}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let U=b.target;U.removeEventListener("dispose",ht),Nt(U)}function Nt(b){It(b),pt.remove(b)}function It(b){let U=pt.get(b).programs;U!==void 0&&(U.forEach(function(B){bt.releaseProgram(B)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,z,O,mt){U===null&&(U=wt);let At=O.isMesh&&O.matrixWorld.determinant()<0,Ut=i1(b,U,B,z,O);W.setMaterial(z,At);let Ot=B.index,qt=1;if(z.wireframe===!0){if(Ot=K.getWireframeAttribute(B),Ot===void 0)return;qt=2}let Ht=B.drawRange,Gt=B.attributes.position,De=Ht.start*qt,bn=(Ht.start+Ht.count)*qt;mt!==null&&(De=Math.max(De,mt.start*qt),bn=Math.min(bn,(mt.start+mt.count)*qt)),Ot!==null?(De=Math.max(De,0),bn=Math.min(bn,Ot.count)):Gt!=null&&(De=Math.max(De,0),bn=Math.min(bn,Gt.count));let $e=bn-De;if($e<0||$e===1/0)return;Wt.setup(O,z,Ut,B,Ot);let Ii,Se=kt;if(Ot!==null&&(Ii=et.get(Ot),Se=Pt,Se.setIndex(Ii)),O.isMesh)z.wireframe===!0?(W.setLineWidth(z.wireframeLinewidth*Bt()),Se.setMode(R.LINES)):Se.setMode(R.TRIANGLES);else if(O.isLine){let $t=z.linewidth;$t===void 0&&($t=1),W.setLineWidth($t*Bt()),O.isLineSegments?Se.setMode(R.LINES):O.isLineLoop?Se.setMode(R.LINE_LOOP):Se.setMode(R.LINE_STRIP)}else O.isPoints?Se.setMode(R.POINTS):O.isSprite&&Se.setMode(R.TRIANGLES);if(O.isBatchedMesh)Se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Se.renderInstances(De,$e,O.count);else if(B.isInstancedBufferGeometry){let $t=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,zl=Math.min(B.instanceCount,$t);Se.renderInstances(De,$e,zl)}else Se.render(De,$e)};function he(b,U,B){b.transparent===!0&&b.side===ni&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,Ea(b,U,B),b.side=ls,b.needsUpdate=!0,Ea(b,U,B),b.side=ni):Ea(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),m=Lt.get(B),m.init(),M.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),b!==B&&b.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_._useLegacyLights);let z=new Set;return b.traverse(function(O){let mt=O.material;if(mt)if(Array.isArray(mt))for(let At=0;At<mt.length;At++){let Ut=mt[At];he(Ut,B,O),z.add(Ut)}else he(mt,B,O),z.add(mt)}),M.pop(),m=null,z},this.compileAsync=function(b,U,B=null){let z=this.compile(b,U,B);return new Promise(O=>{function mt(){if(z.forEach(function(At){pt.get(At).currentProgram.isReady()&&z.delete(At)}),z.size===0){O(b);return}setTimeout(mt,10)}X.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ue=null;function Ye(b){ue&&ue(b)}function ln(){hn.stop()}function de(){hn.start()}let hn=new dm;hn.setAnimationLoop(Ye),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(b){ue=b,Yt.setAnimationLoop(b),b===null?hn.stop():hn.start()},Yt.addEventListener("sessionstart",ln),Yt.addEventListener("sessionend",de),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(U),U=Yt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,A),m=Lt.get(b,M.length),m.init(),M.push(m),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(_t),ft=this.localClippingEnabled,J=Vt.init(this.clippingPlanes,ft),x=xt.get(b,f.length),x.init(),f.push(x),yi(b,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,G),this.info.render.frame++,J===!0&&Vt.beginShadows();let B=m.state.shadowsArray;if(j.render(B,b,U),J===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(x,b),m.setupLights(_._useLegacyLights),U.isArrayCamera){let z=U.cameras;for(let O=0,mt=z.length;O<mt;O++){let At=z[O];pf(x,b,At,At.viewport)}}else pf(x,b,U);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,U),Wt.resetDefaultState(),k=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function yi(b,U,B,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||H.intersectsSprite(b)){z&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);let At=Z.update(b),Ut=b.material;Ut.visible&&x.push(b,At,Ut,B,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||H.intersectsObject(b))){let At=Z.update(b),Ut=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(Ut)){let Ot=At.groups;for(let qt=0,Ht=Ot.length;qt<Ht;qt++){let Gt=Ot[qt],De=Ut[Gt.materialIndex];De&&De.visible&&x.push(b,At,De,B,zt.z,Gt)}}else Ut.visible&&x.push(b,At,Ut,B,zt.z,null)}}let mt=b.children;for(let At=0,Ut=mt.length;At<Ut;At++)yi(mt[At],U,B,z)}function pf(b,U,B,z){let O=b.opaque,mt=b.transmissive,At=b.transparent;m.setupLightsView(B),J===!0&&Vt.setGlobalState(_.clippingPlanes,B),mt.length>0&&n1(O,mt,U,B),z&&W.viewport(T.copy(z)),O.length>0&&ba(O,U,B),mt.length>0&&ba(mt,U,B),At.length>0&&ba(At,U,B),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function n1(b,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let mt=it.isWebGL2;Tt===null&&(Tt=new pn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?ri:cs,minFilter:Co,samples:mt?4:0})),_.getDrawingBufferSize(Dt),mt?Tt.setSize(Dt.x,Dt.y):Tt.setSize(rc(Dt.x),rc(Dt.y));let At=_.getRenderTarget();_.setRenderTarget(Tt),_.getClearColor(st),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let Ut=_.toneMapping;_.toneMapping=as,ba(b,B,z),S.updateMultisampleRenderTarget(Tt),S.updateRenderTargetMipmap(Tt);let Ot=!1;for(let qt=0,Ht=U.length;qt<Ht;qt++){let Gt=U[qt],De=Gt.object,bn=Gt.geometry,$e=Gt.material,Ii=Gt.group;if($e.side===ni&&De.layers.test(z.layers)){let Se=$e.side;$e.side=rn,$e.needsUpdate=!0,mf(De,B,z,bn,$e,Ii),$e.side=Se,$e.needsUpdate=!0,Ot=!0}}Ot===!0&&(S.updateMultisampleRenderTarget(Tt),S.updateRenderTargetMipmap(Tt)),_.setRenderTarget(At),_.setClearColor(st,I),_.toneMapping=Ut}function ba(b,U,B){let z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,mt=b.length;O<mt;O++){let At=b[O],Ut=At.object,Ot=At.geometry,qt=z===null?At.material:z,Ht=At.group;Ut.layers.test(B.layers)&&mf(Ut,U,B,Ot,qt,Ht)}}function mf(b,U,B,z,O,mt){b.onBeforeRender(_,U,B,z,O,mt),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,U,B,z,b,mt),O.transparent===!0&&O.side===ni&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,_.renderBufferDirect(B,U,z,O,b,mt),O.side=ls,O.needsUpdate=!0,_.renderBufferDirect(B,U,z,O,b,mt),O.side=ni):_.renderBufferDirect(B,U,z,O,b,mt),b.onAfterRender(_,U,B,z,O,mt)}function Ea(b,U,B){U.isScene!==!0&&(U=wt);let z=pt.get(b),O=m.state.lights,mt=m.state.shadowsArray,At=O.state.version,Ut=bt.getParameters(b,O.state,mt,U,B),Ot=bt.getProgramCacheKey(Ut),qt=z.programs;z.environment=b.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(b.isMeshStandardMaterial?D:v).get(b.envMap||z.environment),qt===void 0&&(b.addEventListener("dispose",ht),qt=new Map,z.programs=qt);let Ht=qt.get(Ot);if(Ht!==void 0){if(z.currentProgram===Ht&&z.lightsStateVersion===At)return _f(b,Ut),Ht}else Ut.uniforms=bt.getUniforms(b),b.onBuild(B,Ut,_),b.onBeforeCompile(Ut,_),Ht=bt.acquireProgram(Ut,Ot),qt.set(Ot,Ht),z.uniforms=Ut.uniforms;let Gt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Vt.uniform),_f(b,Ut),z.needsLights=r1(b),z.lightsStateVersion=At,z.needsLights&&(Gt.ambientLightColor.value=O.state.ambient,Gt.lightProbe.value=O.state.probe,Gt.directionalLights.value=O.state.directional,Gt.directionalLightShadows.value=O.state.directionalShadow,Gt.spotLights.value=O.state.spot,Gt.spotLightShadows.value=O.state.spotShadow,Gt.rectAreaLights.value=O.state.rectArea,Gt.ltc_1.value=O.state.rectAreaLTC1,Gt.ltc_2.value=O.state.rectAreaLTC2,Gt.pointLights.value=O.state.point,Gt.pointLightShadows.value=O.state.pointShadow,Gt.hemisphereLights.value=O.state.hemi,Gt.directionalShadowMap.value=O.state.directionalShadowMap,Gt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Gt.spotShadowMap.value=O.state.spotShadowMap,Gt.spotLightMatrix.value=O.state.spotLightMatrix,Gt.spotLightMap.value=O.state.spotLightMap,Gt.pointShadowMap.value=O.state.pointShadowMap,Gt.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ht,z.uniformsList=null,Ht}function gf(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=br.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function _f(b,U){let B=pt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function i1(b,U,B,z,O){U.isScene!==!0&&(U=wt),S.resetTextureUnits();let mt=U.fog,At=z.isMeshStandardMaterial?U.environment:null,Ut=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,Ot=(z.isMeshStandardMaterial?D:v).get(z.envMap||At),qt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ht=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Gt=!!B.morphAttributes.position,De=!!B.morphAttributes.normal,bn=!!B.morphAttributes.color,$e=as;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&($e=_.toneMapping);let Ii=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=Ii!==void 0?Ii.length:0,$t=pt.get(z),zl=m.state.lights;if(J===!0&&(ft===!0||b!==y)){let Fn=b===y&&z.id===k;Vt.setState(z,b,Fn)}let Ce=!1;z.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==zl.state.version||$t.outputColorSpace!==Ut||O.isBatchedMesh&&$t.batching===!1||!O.isBatchedMesh&&$t.batching===!0||O.isInstancedMesh&&$t.instancing===!1||!O.isInstancedMesh&&$t.instancing===!0||O.isSkinnedMesh&&$t.skinning===!1||!O.isSkinnedMesh&&$t.skinning===!0||O.isInstancedMesh&&$t.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&$t.instancingColor===!1&&O.instanceColor!==null||$t.envMap!==Ot||z.fog===!0&&$t.fog!==mt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Vt.numPlanes||$t.numIntersection!==Vt.numIntersection)||$t.vertexAlphas!==qt||$t.vertexTangents!==Ht||$t.morphTargets!==Gt||$t.morphNormals!==De||$t.morphColors!==bn||$t.toneMapping!==$e||it.isWebGL2===!0&&$t.morphTargetsCount!==Se)&&(Ce=!0):(Ce=!0,$t.__version=z.version);let Rs=$t.currentProgram;Ce===!0&&(Rs=Ea(z,U,O));let xf=!1,go=!1,Hl=!1,en=Rs.getUniforms(),Cs=$t.uniforms;if(W.useProgram(Rs.program)&&(xf=!0,go=!0,Hl=!0),z.id!==k&&(k=z.id,go=!0),xf||y!==b){en.setValue(R,"projectionMatrix",b.projectionMatrix),en.setValue(R,"viewMatrix",b.matrixWorldInverse);let Fn=en.map.cameraPosition;Fn!==void 0&&Fn.setValue(R,zt.setFromMatrixPosition(b.matrixWorld)),it.logarithmicDepthBuffer&&en.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&en.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,go=!0,Hl=!0)}if(O.isSkinnedMesh){en.setOptional(R,O,"bindMatrix"),en.setOptional(R,O,"bindMatrixInverse");let Fn=O.skeleton;Fn&&(it.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),en.setValue(R,"boneTexture",Fn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(en.setOptional(R,O,"batchingTexture"),en.setValue(R,"batchingTexture",O._matricesTexture,S));let Vl=B.morphAttributes;if((Vl.position!==void 0||Vl.normal!==void 0||Vl.color!==void 0&&it.isWebGL2===!0)&&Jt.update(O,B,Rs),(go||$t.receiveShadow!==O.receiveShadow)&&($t.receiveShadow=O.receiveShadow,en.setValue(R,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cs.envMap.value=Ot,Cs.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),go&&(en.setValue(R,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&s1(Cs,Hl),mt&&z.fog===!0&&ct.refreshFogUniforms(Cs,mt),ct.refreshMaterialUniforms(Cs,z,Y,V,Tt),br.upload(R,gf($t),Cs,S)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(br.upload(R,gf($t),Cs,S),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&en.setValue(R,"center",O.center),en.setValue(R,"modelViewMatrix",O.modelViewMatrix),en.setValue(R,"normalMatrix",O.normalMatrix),en.setValue(R,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Fn=z.uniformsGroups;for(let Gl=0,o1=Fn.length;Gl<o1;Gl++)if(it.isWebGL2){let vf=Fn[Gl];ie.update(vf,Rs),ie.bind(vf,Rs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rs}function s1(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function r1(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,B){pt.get(b.texture).__webglTexture=U,pt.get(b.depthTexture).__webglTexture=B;let z=pt.get(b);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){let B=pt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){A=b,L=U,w=B;let z=!0,O=null,mt=!1,At=!1;if(b){let Ot=pt.get(b);Ot.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(R.FRAMEBUFFER,null),z=!1):Ot.__webglFramebuffer===void 0?S.setupRenderTarget(b):Ot.__hasExternalTextures&&S.rebindTextures(b,pt.get(b.texture).__webglTexture,pt.get(b.depthTexture).__webglTexture);let qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let Ht=pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?O=Ht[U][B]:O=Ht[U],mt=!0):it.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?O=pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ht)?O=Ht[B]:O=Ht,T.copy(b.viewport),N.copy(b.scissor),$=b.scissorTest}else T.copy(Q).multiplyScalar(Y).floor(),N.copy(tt).multiplyScalar(Y).floor(),$=ut;if(W.bindFramebuffer(R.FRAMEBUFFER,O)&&it.drawBuffers&&z&&W.drawBuffers(b,O),W.viewport(T),W.scissor(N),W.setScissorTest($),mt){let Ot=pt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ot.__webglTexture,B)}else if(At){let Ot=pt.get(b.texture),qt=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,B||0,qt)}k=-1},this.readRenderTargetPixels=function(b,U,B,z,O,mt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Ut=Ut[At]),Ut){W.bindFramebuffer(R.FRAMEBUFFER,Ut);try{let Ot=b.texture,qt=Ot.format,Ht=Ot.type;if(qt!==si&&yt.convert(qt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Gt=Ht===ri&&(X.has("EXT_color_buffer_half_float")||it.isWebGL2&&X.has("EXT_color_buffer_float"));if(Ht!==cs&&yt.convert(Ht)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===os&&(it.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&B>=0&&B<=b.height-O&&R.readPixels(U,B,z,O,yt.convert(qt),yt.convert(Ht),mt)}finally{let Ot=A!==null?pt.get(A).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(b,U,B=0){let z=Math.pow(2,-B),O=Math.floor(U.image.width*z),mt=Math.floor(U.image.height*z);S.setTexture2D(U,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,b.x,b.y,O,mt),W.unbindTexture()},this.copyTextureToTexture=function(b,U,B,z=0){let O=U.image.width,mt=U.image.height,At=yt.convert(B.format),Ut=yt.convert(B.type);S.setTexture2D(B,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,z,b.x,b.y,O,mt,At,Ut,U.image.data):U.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,z,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,At,U.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,z,b.x,b.y,At,Ut,U.image),z===0&&B.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B,z,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=b.max.x-b.min.x+1,At=b.max.y-b.min.y+1,Ut=b.max.z-b.min.z+1,Ot=yt.convert(z.format),qt=yt.convert(z.type),Ht;if(z.isData3DTexture)S.setTexture3D(z,0),Ht=R.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)S.setTexture2DArray(z,0),Ht=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);let Gt=R.getParameter(R.UNPACK_ROW_LENGTH),De=R.getParameter(R.UNPACK_IMAGE_HEIGHT),bn=R.getParameter(R.UNPACK_SKIP_PIXELS),$e=R.getParameter(R.UNPACK_SKIP_ROWS),Ii=R.getParameter(R.UNPACK_SKIP_IMAGES),Se=B.isCompressedTexture?B.mipmaps[O]:B.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,b.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,b.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,b.min.z),B.isDataTexture||B.isData3DTexture?R.texSubImage3D(Ht,O,U.x,U.y,U.z,mt,At,Ut,Ot,qt,Se.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ht,O,U.x,U.y,U.z,mt,At,Ut,Ot,Se.data)):R.texSubImage3D(Ht,O,U.x,U.y,U.z,mt,At,Ut,Ot,qt,Se),R.pixelStorei(R.UNPACK_ROW_LENGTH,Gt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,De),R.pixelStorei(R.UNPACK_SKIP_PIXELS,bn),R.pixelStorei(R.UNPACK_SKIP_ROWS,$e),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ii),O===0&&z.generateMipmaps&&R.generateMipmap(Ht),W.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),W.unbindTexture()},this.resetState=function(){L=0,w=0,A=null,W.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=t===mu?"display-p3":"srgb",n.unpackColorSpace=oe.workingColorSpace===Ic?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xe?ks:om}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ks?xe:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},qh=class extends Uo{};qh.prototype.isWebGL1Renderer=!0;var gc=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ur=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};var Do=class extends wn{constructor(t,n,i,s,r,o,a,c,l){super(t,n,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,n){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=n||(o.isVector2?new nt:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n){let i=new C,s=[],r=[],o=[],a=new C,c=new Pe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Je(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(n===!0){let p=Math.acos(Je(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},No=class extends Hn{constructor(t=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,n){let i=n||new nt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yh=class extends No{constructor(t,n,i,s,r,o){super(t,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xu(){let e=0,t=0,n=0,i=0;function s(r,o,a,c){e=r,t=a,n=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return e+t*r+n*o+i*a}}}var Ya=new C,vh=new xu,yh=new xu,Mh=new xu,Fo=class extends Hn{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new C){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ya.subVectors(s[0],s[1]).add(s[0]),l=Ya);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ya),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),vh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),yh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Mh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Mh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(vh.calc(c),yh.calc(c),Mh.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hp(e,t,n,i,s){let r=(i-t)*.5,o=(s-n)*.5,a=e*e,c=e*a;return(2*n-2*i+r+o)*c+(-3*n+3*i-2*r-o)*a+r*e+n}function hS(e,t){let n=1-e;return n*n*t}function uS(e,t){return 2*(1-e)*e*t}function dS(e,t){return e*e*t}function wo(e,t,n,i){return hS(e,t)+uS(e,n)+dS(e,i)}function fS(e,t){let n=1-e;return n*n*n*t}function pS(e,t){let n=1-e;return 3*n*n*e*t}function mS(e,t){return 3*(1-e)*e*e*t}function gS(e,t){return e*e*e*t}function Ao(e,t,n,i,s){return fS(e,t)+pS(e,n)+mS(e,i)+gS(e,s)}var _c=class extends Hn{constructor(t=new nt,n=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new nt){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ao(t,s.x,r.x,o.x,a.x),Ao(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$h=class extends Hn{constructor(t=new C,n=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new C){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ao(t,s.x,r.x,o.x,a.x),Ao(t,s.y,r.y,o.y,a.y),Ao(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xc=class extends Hn{constructor(t=new nt,n=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new nt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new nt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zh=class extends Hn{constructor(t=new C,n=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new C){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new C){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vc=class extends Hn{constructor(t=new nt,n=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new nt){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(wo(t,s.x,r.x,o.x),wo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yc=class extends Hn{constructor(t=new C,n=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new C){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(wo(t,s.x,r.x,o.x),wo(t,s.y,r.y,o.y),wo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mc=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new nt){let i=n,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Hp(a,c.x,l.x,h.x,u.x),Hp(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new nt().fromArray(s))}return this}},Sc=Object.freeze({__proto__:null,ArcCurve:Yh,CatmullRomCurve3:Fo,CubicBezierCurve:_c,CubicBezierCurve3:$h,EllipseCurve:No,LineCurve:xc,LineCurve3:Zh,QuadraticBezierCurve:vc,QuadraticBezierCurve3:yc,SplineCurve:Mc}),Jh=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,n)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}},bc=class extends Jh{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new xc(this.currentPoint.clone(),new nt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let r=new vc(this.currentPoint.clone(),new nt(t,n),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,r,o){let a=new _c(this.currentPoint.clone(),new nt(t,n),new nt(i,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new Mc(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,n+c,i,s,r,o),this}absarc(t,n,i,s,r,o){return this.absellipse(t,n,i,i,s,r,o),this}ellipse(t,n,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,n+h,i,s,r,o,a,c),this}absellipse(t,n,i,s,r,o,a,c){let l=new No(t,n,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Kh=class e extends An{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new C,E=new C,L=new C;for(let w=0;w<n.length;w+=3)p(n[w+0],_),p(n[w+1],E),p(n[w+2],L),c(_,E,L,M)}function c(M,_,E,L){let w=L+1,A=[];for(let k=0;k<=w;k++){A[k]=[];let y=M.clone().lerp(E,k/w),T=_.clone().lerp(E,k/w),N=w-k;for(let $=0;$<=N;$++)$===0&&k===w?A[k][$]=y:A[k][$]=y.clone().lerp(T,$/N)}for(let k=0;k<w;k++)for(let y=0;y<2*(w-k)-1;y++){let T=Math.floor(y/2);y%2===0?(d(A[k][T+1]),d(A[k+1][T]),d(A[k][T])):(d(A[k][T+1]),d(A[k+1][T+1]),d(A[k+1][T]))}}function l(M){let _=new C;for(let E=0;E<r.length;E+=3)_.x=r[E+0],_.y=r[E+1],_.z=r[E+2],_.normalize().multiplyScalar(M),r[E+0]=_.x,r[E+1]=_.y,r[E+2]=_.z}function h(){let M=new C;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let E=m(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;o.push(E,1-L)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let _=o[M+0],E=o[M+2],L=o[M+4],w=Math.max(_,E,L),A=Math.min(_,E,L);w>.9&&A<.1&&(_<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,_){let E=M*3;_.x=t[E+0],_.y=t[E+1],_.z=t[E+2]}function g(){let M=new C,_=new C,E=new C,L=new C,w=new nt,A=new nt,k=new nt;for(let y=0,T=0;y<r.length;y+=9,T+=6){M.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),E.set(r[y+6],r[y+7],r[y+8]),w.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),k.set(o[T+4],o[T+5]),L.copy(M).add(_).add(E).divideScalar(3);let N=m(L);x(w,T+0,M,N),x(A,T+2,_,N),x(k,T+4,E,N)}}function x(M,_,E,L){L<0&&M.x===1&&(o[_]=M.x-1),E.x===0&&E.z===0&&(o[_]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}};var Oo=class extends bc{constructor(t){super(t),this.uuid=qs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new bc().fromJSON(s))}return this}},_S={triangulate:function(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,r=xm(e,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(i&&(r=SS(e,t,r,n)),e.length>80*n){a=l=e[0],c=h=e[1];for(let g=n;g<s;g+=n)u=e[g],d=e[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Bo(r,o,n,a,c,p,0),o}};function xm(e,t,n,i,s){let r,o;if(s===US(e,t,n,i)>0)for(r=t;r<n;r+=i)o=Vp(r,e[r],e[r+1],o);else for(r=n-i;r>=t;r-=i)o=Vp(r,e[r],e[r+1],o);return o&&Dc(o,o.next)&&(zo(o),o=o.next),o}function Vs(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Dc(n,n.next)||be(n.prev,n,n.next)===0)){if(zo(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Bo(e,t,n,i,s,r,o){if(!e)return;!o&&r&&AS(e,i,s,r);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,r?vS(e,i,s,r):xS(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),zo(e),e=l.next,a=l.next;continue}if(e=l,e===a){o?o===1?(e=yS(Vs(e),t,n),Bo(e,t,n,i,s,r,2)):o===2&&MS(e,t,n,i,s,r):Bo(Vs(e),t,n,i,s,r,1);break}}}function xS(e){let t=e.prev,n=e,i=e.next;if(be(t,n,i)>=0)return!1;let s=t.x,r=n.x,o=i.x,a=t.y,c=n.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&yr(s,a,r,c,o,l,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vS(e,t,n,i){let s=e.prev,r=e,o=e.next;if(be(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=jh(p,g,t,n,i),M=jh(x,m,t,n,i),_=e.prevZ,E=e.nextZ;for(;_&&_.z>=f&&E&&E.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&yr(a,h,c,u,l,d,_.x,_.y)&&be(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=p&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&yr(a,h,c,u,l,d,E.x,E.y)&&be(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&yr(a,h,c,u,l,d,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=M;){if(E.x>=p&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&yr(a,h,c,u,l,d,E.x,E.y)&&be(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function yS(e,t,n){let i=e;do{let s=i.prev,r=i.next.next;!Dc(s,r)&&vm(s,i,i.next,r)&&ko(s,r)&&ko(r,s)&&(t.push(s.i/n|0),t.push(i.i/n|0),t.push(r.i/n|0),zo(i),zo(i.next),i=e=r),i=i.next}while(i!==e);return Vs(i)}function MS(e,t,n,i,s,r){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&PS(o,a)){let c=ym(o,a);o=Vs(o,o.next),c=Vs(c,c.next),Bo(o,t,n,i,s,r,0),Bo(c,t,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==e)}function SS(e,t,n,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:e.length,l=xm(e,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(CS(l));for(s.sort(bS),r=0;r<s.length;r++)n=ES(s[r],n);return n}function bS(e,t){return e.x-t.x}function ES(e,t){let n=TS(e,t);if(!n)return t;let i=ym(n,e);return Vs(i,i.next),Vs(n,n.next)}function TS(e,t){let n=t,i=-1/0,s,r=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=r&&d>i&&(i=d,s=n.x<n.next.x?n:n.next,d===r))return s}n=n.next}while(n!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;n=s;do r>=n.x&&n.x>=c&&r!==n.x&&yr(o<l?r:i,o,c,l,o<l?i:r,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(r-n.x),ko(n,e)&&(u<h||u===h&&(n.x>s.x||n.x===s.x&&wS(s,n)))&&(s=n,h=u)),n=n.next;while(n!==a);return s}function wS(e,t){return be(e.prev,e,t.prev)<0&&be(t.next,e,e.next)<0}function AS(e,t,n,i){let s=e;do s.z===0&&(s.z=jh(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,RS(s)}function RS(e){let t,n,i,s,r,o,a,c,l=1;do{for(n=e,e=null,r=null,o=0;n;){for(o++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(s=n,n=n.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:e=s,s.prevZ=r,r=s;n=i}r.nextZ=null,l*=2}while(o>1);return e}function jh(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function CS(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function yr(e,t,n,i,s,r,o,a){return(s-o)*(t-a)>=(e-o)*(r-a)&&(e-o)*(i-a)>=(n-o)*(t-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function PS(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!LS(e,t)&&(ko(e,t)&&ko(t,e)&&IS(e,t)&&(be(e.prev,e,t.prev)||be(e,t.prev,t))||Dc(e,t)&&be(e.prev,e,e.next)>0&&be(t.prev,t,t.next)>0)}function be(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Dc(e,t){return e.x===t.x&&e.y===t.y}function vm(e,t,n,i){let s=Za(be(e,t,n)),r=Za(be(e,t,i)),o=Za(be(n,i,e)),a=Za(be(n,i,t));return!!(s!==r&&o!==a||s===0&&$a(e,n,t)||r===0&&$a(e,i,t)||o===0&&$a(n,e,i)||a===0&&$a(n,t,i))}function $a(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Za(e){return e>0?1:e<0?-1:0}function LS(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&vm(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ko(e,t){return be(e.prev,e,e.next)<0?be(e,t,e.next)>=0&&be(e,e.prev,t)>=0:be(e,t,e.prev)<0||be(e,e.next,t)<0}function IS(e,t){let n=e,i=!1,s=(e.x+t.x)/2,r=(e.y+t.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function ym(e,t){let n=new Qh(e.i,e.x,e.y),i=new Qh(t.i,t.x,t.y),s=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Vp(e,t,n,i){let s=new Qh(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function zo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Qh(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function US(e,t,n,i){let s=0;for(let r=t,o=n-i;r<n;r+=i)s+=(e[o]-e[r])*(e[r+1]+e[o+1]),o=r;return s}var Ro=class e{static area(t){let n=t.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],r=[];Gp(t),Wp(i,t);let o=t.length;n.forEach(Gp);for(let c=0;c<n.length;c++)s.push(o),o+=n[c].length,Wp(i,n[c]);let a=_S.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Gp(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Wp(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ec=class e extends An{constructor(t=new Oo([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function o(a){let c=[],l=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,u=n.depth!==void 0?n.depth:1,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,f=n.extrudePath,M=n.UVGenerator!==void 0?n.UVGenerator:DS,_,E=!1,L,w,A,k;f&&(_=f.getSpacedPoints(h),E=!0,d=!1,L=f.computeFrenetFrames(h,!1),w=new C,A=new C,k=new C),d||(m=0,p=0,g=0,x=0);let y=a.extractPoints(l),T=y.shape,N=y.holes;if(!Ro.isClockWise(T)){T=T.reverse();for(let R=0,rt=N.length;R<rt;R++){let X=N[R];Ro.isClockWise(X)&&(N[R]=X.reverse())}}let st=Ro.triangulateShape(T,N),I=T;for(let R=0,rt=N.length;R<rt;R++){let X=N[R];T=T.concat(X)}function F(R,rt,X){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(rt,X)}let V=T.length,Y=st.length;function q(R,rt,X){let it,W,Rt,pt=R.x-rt.x,S=R.y-rt.y,v=X.x-R.x,D=X.y-R.y,et=pt*pt+S*S,K=pt*D-S*v;if(Math.abs(K)>Number.EPSILON){let Z=Math.sqrt(et),bt=Math.sqrt(v*v+D*D),ct=rt.x-S/Z,xt=rt.y+pt/Z,Lt=X.x-D/bt,Vt=X.y+v/bt,j=((Lt-ct)*D-(Vt-xt)*v)/(pt*D-S*v);it=ct+pt*j-R.x,W=xt+S*j-R.y;let ne=it*it+W*W;if(ne<=2)return new nt(it,W);Rt=Math.sqrt(ne/2)}else{let Z=!1;pt>Number.EPSILON?v>Number.EPSILON&&(Z=!0):pt<-Number.EPSILON?v<-Number.EPSILON&&(Z=!0):Math.sign(S)===Math.sign(D)&&(Z=!0),Z?(it=-S,W=pt,Rt=Math.sqrt(et)):(it=pt,W=S,Rt=Math.sqrt(et/2))}return new nt(it/Rt,W/Rt)}let G=[];for(let R=0,rt=I.length,X=rt-1,it=R+1;R<rt;R++,X++,it++)X===rt&&(X=0),it===rt&&(it=0),G[R]=q(I[R],I[X],I[it]);let Q=[],tt,ut=G.concat();for(let R=0,rt=N.length;R<rt;R++){let X=N[R];tt=[];for(let it=0,W=X.length,Rt=W-1,pt=it+1;it<W;it++,Rt++,pt++)Rt===W&&(Rt=0),pt===W&&(pt=0),tt[it]=q(X[it],X[Rt],X[pt]);Q.push(tt),ut=ut.concat(tt)}for(let R=0;R<m;R++){let rt=R/m,X=p*Math.cos(rt*Math.PI/2),it=g*Math.sin(rt*Math.PI/2)+x;for(let W=0,Rt=I.length;W<Rt;W++){let pt=F(I[W],G[W],it);_t(pt.x,pt.y,-X)}for(let W=0,Rt=N.length;W<Rt;W++){let pt=N[W];tt=Q[W];for(let S=0,v=pt.length;S<v;S++){let D=F(pt[S],tt[S],it);_t(D.x,D.y,-X)}}}let H=g+x;for(let R=0;R<V;R++){let rt=d?F(T[R],ut[R],H):T[R];E?(A.copy(L.normals[0]).multiplyScalar(rt.x),w.copy(L.binormals[0]).multiplyScalar(rt.y),k.copy(_[0]).add(A).add(w),_t(k.x,k.y,k.z)):_t(rt.x,rt.y,0)}for(let R=1;R<=h;R++)for(let rt=0;rt<V;rt++){let X=d?F(T[rt],ut[rt],H):T[rt];E?(A.copy(L.normals[R]).multiplyScalar(X.x),w.copy(L.binormals[R]).multiplyScalar(X.y),k.copy(_[R]).add(A).add(w),_t(k.x,k.y,k.z)):_t(X.x,X.y,u/h*R)}for(let R=m-1;R>=0;R--){let rt=R/m,X=p*Math.cos(rt*Math.PI/2),it=g*Math.sin(rt*Math.PI/2)+x;for(let W=0,Rt=I.length;W<Rt;W++){let pt=F(I[W],G[W],it);_t(pt.x,pt.y,u+X)}for(let W=0,Rt=N.length;W<Rt;W++){let pt=N[W];tt=Q[W];for(let S=0,v=pt.length;S<v;S++){let D=F(pt[S],tt[S],it);E?_t(D.x,D.y+_[h-1].y,_[h-1].x+X):_t(D.x,D.y,u+X)}}}J(),ft();function J(){let R=s.length/3;if(d){let rt=0,X=V*rt;for(let it=0;it<Y;it++){let W=st[it];Dt(W[2]+X,W[1]+X,W[0]+X)}rt=h+m*2,X=V*rt;for(let it=0;it<Y;it++){let W=st[it];Dt(W[0]+X,W[1]+X,W[2]+X)}}else{for(let rt=0;rt<Y;rt++){let X=st[rt];Dt(X[2],X[1],X[0])}for(let rt=0;rt<Y;rt++){let X=st[rt];Dt(X[0]+V*h,X[1]+V*h,X[2]+V*h)}}i.addGroup(R,s.length/3-R,0)}function ft(){let R=s.length/3,rt=0;Tt(I,rt),rt+=I.length;for(let X=0,it=N.length;X<it;X++){let W=N[X];Tt(W,rt),rt+=W.length}i.addGroup(R,s.length/3-R,1)}function Tt(R,rt){let X=R.length;for(;--X>=0;){let it=X,W=X-1;W<0&&(W=R.length-1);for(let Rt=0,pt=h+m*2;Rt<pt;Rt++){let S=V*Rt,v=V*(Rt+1),D=rt+it+S,et=rt+W+S,K=rt+W+v,Z=rt+it+v;zt(D,et,K,Z)}}}function _t(R,rt,X){c.push(R),c.push(rt),c.push(X)}function Dt(R,rt,X){wt(R),wt(rt),wt(X);let it=s.length/3,W=M.generateTopUV(i,s,it-3,it-2,it-1);Bt(W[0]),Bt(W[1]),Bt(W[2])}function zt(R,rt,X,it){wt(R),wt(rt),wt(it),wt(rt),wt(X),wt(it);let W=s.length/3,Rt=M.generateSideWallUV(i,s,W-6,W-3,W-2,W-1);Bt(Rt[0]),Bt(Rt[1]),Bt(Rt[3]),Bt(Rt[1]),Bt(Rt[2]),Bt(Rt[3])}function wt(R){s.push(c[R*3+0]),s.push(c[R*3+1]),s.push(c[R*3+2])}function Bt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return NS(n,i,t)}static fromJSON(t,n){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=n[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sc[s.type]().fromJSON(s)),new e(i,t.options)}},DS={generateTopUV:function(e,t,n,i,s){let r=t[n*3],o=t[n*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,c),new nt(l,h)]},generateSideWallUV:function(e,t,n,i,s,r){let o=t[n*3],a=t[n*3+1],c=t[n*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new nt(o,1-c),new nt(l,1-u),new nt(d,1-g),new nt(x,1-f)]:[new nt(a,1-c),new nt(h,1-u),new nt(p,1-g),new nt(m,1-f)]}};function NS(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Tc=class e extends An{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,d=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){let M=[],_=f/i,E=0;f===0&&o===0?E=.5/n:f===i&&c===Math.PI&&(E=-.5/n);for(let L=0;L<=n;L++){let w=L/n;u.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+E,1-_),M.push(l++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<n;M++){let _=h[f][M+1],E=h[f][M],L=h[f+1][M],w=h[f+1][M+1];(f!==0||o>0)&&p.push(_,E,w),(f!==i-1||c<Math.PI)&&p.push(E,L,w)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},wc=class e extends Kh{constructor(t=1,n=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var Ac=class e extends An{constructor(t=new yc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,c=new C,l=new nt,h=new C,u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2));function x(){for(let _=0;_<n;_++)m(_);m(r===!1?n:0),M(),f()}function m(_){h=t.getPointAt(_/n,h);let E=o.normals[_],L=o.binormals[_];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,k=Math.sin(A),y=-Math.cos(A);c.x=y*E.x+k*L.x,c.y=y*E.y+k*L.y,c.z=y*E.z+k*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=n;_++)for(let E=1;E<=s;E++){let L=(s+1)*(_-1)+(E-1),w=(s+1)*_+(E-1),A=(s+1)*_+E,k=(s+1)*(_-1)+E;g.push(L,w,k),g.push(w,A,k)}}function M(){for(let _=0;_<=n;_++)for(let E=0;E<=s;E++)l.x=_/n,l.y=E/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new Sc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Vn=class extends Hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=am,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Rc=class extends Vn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Ja(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function FS(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Dr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],t<s)break e}o=n.length;break n}if(!(t>=r)){let a=n[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tu=class extends Dr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kf,endingEnd:Kf}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jf:r=t,a=2*n-i;break;case Qf:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case jf:o=t,c=2*i-n;break;case Qf:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=n}let l=(i-n)*.5,h=this.valueSize;this._weightPrev=l/(n-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,E=p*m-p*x;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+M*o[l+L]+_*o[c+L]+E*o[u+L];return r}},eu=class extends Dr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-n)/(s-n),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},nu=class extends Dr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ja(n,this.TimeBufferType),this.values=Ja(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ja(t.times,Array),values:Ja(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new nu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Qa:n=this.InterpolantFactoryMethodDiscrete;break;case tc:n=this.InterpolantFactoryMethodLinear;break;case Jl:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&FS(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Jl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let x=n[u+g];if(x!==n[d+g]||x!==n[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)n[d+p]=n[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)n[c+l]=n[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=tc;var Gs=class extends ci{};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Qa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var iu=class extends ci{};iu.prototype.ValueTypeName="color";var su=class extends ci{};su.prototype.ValueTypeName="number";var ru=class extends Dr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-n)/(s-n),l=t*a;for(let h=l+a;l!==h;l+=4)Ei.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ho=class extends ci{InterpolantFactoryMethodLinear(t){return new ru(this.times,this.values,this.getValueSize(),t)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.DefaultInterpolation=tc;Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends ci{};Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Qa;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends ci{};ou.prototype.ValueTypeName="vector";var Xp={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},au=class{constructor(t,n,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},OS=new au,Vo=class{constructor(t){this.manager=t!==void 0?t:OS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var cu=class extends Vo{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Xp.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){n&&n(o),r.manager.itemEnd(t)},0),o;let a=Po("img");function c(){h(),Xp.add(t,this),n&&n(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Xs=class extends Vo{constructor(t){super(t)}load(t,n,i,s){let r=new wn,o=new cu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}},Nr=class extends on{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}};var Sh=new Pe,qp=new C,Yp=new C,Go=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;qp.setFromMatrixPosition(t.matrixWorld),n.position.copy(qp),Yp.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Yp),n.updateMatrixWorld(),Sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},lu=class extends Go{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let n=this.camera,i=Rr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Wo=class extends Nr{constructor(t,n,i=0,s=Math.PI/3,r=0,o=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$p=new Pe,Mo=new C,bh=new C,hu=class extends Go{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Mo.setFromMatrixPosition(t.matrixWorld),i.position.copy(Mo),bh.copy(i.position),bh.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(bh),i.updateMatrixWorld(),s.makeTranslation(-Mo.x,-Mo.y,-Mo.z),$p.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($p)}},Fr=class extends Nr{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},uu=class extends Go{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cc=class extends Nr{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new uu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Pc=class extends Nr{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Or=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=Zp();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};function Zp(){return(typeof performance>"u"?Date:performance).now()}var vu="\\[\\]\\.:\\/",BS=new RegExp("["+vu+"]","g"),yu="[^"+vu+"]",kS="[^"+vu.replace("\\.","")+"]",zS=/((?:WC+[\/:])*)/.source.replace("WC",yu),HS=/(WCOD+)?/.source.replace("WCOD",kS),VS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yu),GS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yu),WS=new RegExp("^"+zS+HS+VS+GS+"$"),XS=["material","materials","bones","map"],du=class{constructor(t,n,i){let s=i||_e.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},_e=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(BS,"")}static parseTrackName(t){let n=WS.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);XS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=du;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Nc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},YS=new Lr(-1,1,1,-1,0,1),Mu=class extends An{constructor(){super(),this.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ee([0,2,0,0,2,0],2))}},$S=new Mu,zr=class{constructor(t){this._mesh=new Kt($S,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,YS)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Fc=class extends li{constructor(t,n){super(),this.textureID=n!==void 0?n:"tDiffuse",t instanceof tn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Br.clone(t.uniforms),this.material=new tn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new zr(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qo=class extends li{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Oc=class extends li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Bc=class{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){let i=t.getSize(new nt);this._width=i.width,this._height=i.height,n=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fc(Nc),this.copyPass.material.blending=bi,this.clock=new Or}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qo!==void 0&&(o instanceof qo?i=!0:o instanceof Oc&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){let n=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var kc=class extends li{constructor(t,n,i=null,s=null,r=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,n,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Mm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Hr=class e extends li{constructor(t,n,i,s){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,o,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new pn(r,o,{type:ri});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new pn(r,o,{type:ri});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Mm;this.highPassUniforms=Br.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Nc;this.copyUniforms=Br.clone(h.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ka,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new oi,this.fsQuad=new zr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let n=[];for(let i=0;i<t;i++)n.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new tn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new tn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Hr.BlurDirectionX=new nt(1,0);Hr.BlurDirectionY=new nt(0,1);var zc=class extends Ur{constructor(t=null){super();let n=new ai;n.deleteAttribute("uv");let i=new Vn({side:rn}),s=new Vn,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new Fr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Kt(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Kt(n,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Kt(n,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Kt(n,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Kt(n,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Kt(n,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new Kt(n,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new Kt(n,Vr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Kt(n,Vr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Kt(n,Vr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new Kt(n,Vr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let M=new Kt(n,Vr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let _=new Kt(n,Vr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function Vr(e){let t=new oi;return t.color.setScalar(e),t}var Ks=typeof self<"u"?self:{};function Fg(e,t){e=e.split(".");var n,i=Ks;for((e[0]in i)||i.execScript===void 0||i.execScript("var "+e[0]);e.length&&(n=e.shift());)e.length||t===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t}function Ys(){throw Error("Invalid UTF8")}function Sm(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var Hc,Su,ZS=typeof TextDecoder<"u",JS,KS=typeof TextEncoder<"u";function Og(e){if(KS)e=(JS||=new TextEncoder).encode(e);else{let n=0,i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var id,tl;t:{for(bu=["CLOSURE_FLAGS"],Vc=Ks,Gc=0;Gc<bu.length;Gc++)if((Vc=Vc[bu[Gc]])==null){tl=null;break t}tl=Vc}var bu,Vc,Gc,sa,bm=tl&&tl[610401301];id=bm!=null&&bm;var Em=Ks.navigator;function Fu(e){return!!id&&!!sa&&sa.brands.some((({brand:t})=>t&&t.indexOf(e)!=-1))}function qn(e){var t;return(t=Ks.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function ds(){return!!id&&!!sa&&sa.brands.length>0}function Eu(){return ds()?Fu("Chromium"):(qn("Chrome")||qn("CriOS"))&&!(!ds()&&qn("Edge"))||qn("Silk")}function sd(e){return sd[" "](e),e}sa=Em&&Em.userAgentData||null,sd[" "]=function(){};var jS=!ds()&&(qn("Trident")||qn("MSIE"));!qn("Android")||Eu(),Eu(),qn("Safari")&&(Eu()||!ds()&&qn("Coast")||!ds()&&qn("Opera")||!ds()&&qn("Edge")||(ds()?Fu("Microsoft Edge"):qn("Edg/"))||ds()&&Fu("Opera"));var Bg={},jo=null;function QS(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);let i=new Uint8Array(n),s=0;return(function(r,o){function a(l){for(;c<r.length;){let h=r.charAt(c++),u=jo[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}kg();let c=0;for(;;){let l=a(-1),h=a(0),u=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),d!=64&&o(u<<6&192|d))}})(e,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function kg(){if(!jo){jo={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=e.concat(t[n].split(""));Bg[n]=i;for(let s=0;s<i.length;s++){let r=i[s];jo[r]===void 0&&(jo[r]=s)}}}}var zg=typeof Uint8Array<"u",Hg=!jS&&typeof btoa=="function";function Tm(e){if(!Hg){var t;t===void 0&&(t=0),kg(),t=Bg[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let c=0,l=0;for(;c<e.length-2;c+=3){var s=e[c],r=e[c+1],o=e[c+2],a=t[s>>2];s=t[(3&s)<<4|r>>4],r=t[(15&r)<<2|o>>6],o=t[63&o],n[l++]=a+s+r+o}switch(a=0,o=i,e.length-c){case 2:o=t[(15&(a=e[c+1]))<<2]||i;case 1:e=e[c],n[l]=t[e>>2]+t[(3&e)<<4|a>>4]+o+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}var wm=/[-_.]/g,tb={"-":"+",_:"/",".":"="};function eb(e){return tb[e]||""}function Vg(e){if(!Hg)return QS(e);wm.test(e)&&(e=e.replace(wm,eb)),e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function la(e){return zg&&e!=null&&e instanceof Uint8Array}var Zr={};function js(){return nb||=new qi(null,Zr)}function rd(e){Gg(Zr);var t=e.g;return(t=t==null||la(t)?t:typeof t=="string"?Vg(t):null)==null?t:e.g=t}var qi=class{h(){return new Uint8Array(rd(this)||0)}constructor(e,t){if(Gg(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}},nb,ib;function Gg(e){if(e!==Zr)throw Error("illegal external caller")}function Wg(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Xg(){let e=Error();Wg(e,"incident"),(function(t){Ks.setTimeout((()=>{throw t}),0)})(e)}function Ou(e){return Wg(e=Error(e),"warning"),e}function od(){return typeof BigInt=="function"}function Ln(e){return Array.prototype.slice.call(e)}var io=typeof Symbol=="function"&&typeof Symbol()=="symbol";function ul(e){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():e}var ha=ul(),Am=ul("0di"),Tu=ul("2ex"),Yo=ul("1oa"),dl=io?(e,t)=>{e[ha]|=t}:(e,t)=>{e.G!==void 0?e.G|=t:Object.defineProperties(e,{G:{value:t,configurable:!0,writable:!0,enumerable:!1}})},Bu=io?(e,t)=>{e[ha]&=~t}:(e,t)=>{e.G!==void 0&&(e.G&=~t)},Fe=io?e=>0|e[ha]:e=>0|e.G,ce=io?e=>e[ha]:e=>e.G,ke=io?(e,t)=>{e[ha]=t}:(e,t)=>{e.G!==void 0?e.G=t:Object.defineProperties(e,{G:{value:t,configurable:!0,writable:!0,enumerable:!1}})};function so(e){return dl(e,34),e}function sb(e,t){ke(t,-30975&(0|e))}function ku(e,t){ke(t,-30941&(34|e))}var ad,ua={},qg={};function Rm(e){return!(!e||typeof e!="object"||e.Ia!==qg)}function cd(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function ld(e,t){if(e!=null){if(typeof e=="string")e=e?new qi(e,Zr):js();else if(e.constructor!==qi)if(la(e))e=e.length?new qi(new Uint8Array(e),Zr):js();else{if(!t)throw Error();e=void 0}}return e}function el(e){return!(!Array.isArray(e)||e.length)&&!!(1&Fe(e))}var Cm=[];function Ss(e){if(2&e)throw Error()}ke(Cm,55),ad=Object.freeze(Cm);var nl=class e{constructor(t,n,i){this.l=0,this.g=t,this.h=n,this.m=i}next(){if(this.l<this.g.length){let t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new e(this.g,this.h,this.m)}},ps;function Yg(e,t){(t=ps?t[ps]:void 0)&&(e[ps]=Ln(t))}var rb=Object.freeze({});function fl(e){return e.Pa=!0,e}var ob=fl((e=>typeof e=="number")),Pm=fl((e=>typeof e=="string")),ab=fl((e=>typeof e=="boolean")),pl=typeof Ks.BigInt=="function"&&typeof Ks.BigInt(0)=="bigint",zu=fl((e=>pl?e>=lb&&e<=ub:e[0]==="-"?Lm(e,cb):Lm(e,hb))),cb=Number.MIN_SAFE_INTEGER.toString(),lb=pl?BigInt(Number.MIN_SAFE_INTEGER):void 0,hb=Number.MAX_SAFE_INTEGER.toString(),ub=pl?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Lm(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}var db=typeof Uint8Array.prototype.slice=="function",$g,le=0,Ie=0;function Im(e){let t=e>>>0;le=t,Ie=(e-t)/4294967296>>>0}function Jr(e){if(e<0){Im(-e);let[t,n]=fd(le,Ie);le=t>>>0,Ie=n>>>0}else Im(e)}function hd(e){let t=$g||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),Ie=0,le=t.getUint32(0,!0)}function ud(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:ra(e,t)}function dd(e,t){let n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=ud(e,t))=="number"?n?-e:e:n?"-"+e:e}function ra(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else od()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Um(n)+Um(e));return n}function Um(e){return e=String(e),"0000000".slice(e.length)+e}function ml(e){if(e.length<16)Jr(Number(e));else if(od())e=BigInt(e),le=Number(e&BigInt(4294967295))>>>0,Ie=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");Ie=le=0;let n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){let r=Number(e.slice(i,s));Ie*=1e6,le=1e6*le+r,le>=4294967296&&(Ie+=Math.trunc(le/4294967296),Ie>>>=0,le>>>=0)}if(t){let[i,s]=fd(le,Ie);le=i,Ie=s}}}function fd(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function bs(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Zg(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}var fb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function gl(e){let t=typeof e;switch(t){case"bigint":return!0;case"number":return Number.isFinite(e)}return t==="string"&&fb.test(e)}function ro(e){if(e==null)return e;if(typeof e=="string"){if(!e)return;e=+e}return typeof e=="number"&&Number.isFinite(e)?0|e:void 0}function Jg(e){if(e==null)return e;if(typeof e=="string"){if(!e)return;e=+e}return typeof e=="number"&&Number.isFinite(e)?e>>>0:void 0}function Dm(e){return e[0]!=="-"&&(e.length<20||e.length===20&&Number(e.substring(0,6))<184467)}function pd(e){return e=Math.trunc(e),Number.isSafeInteger(e)||(Jr(e),e=dd(le,Ie)),e}function md(e){var t=Math.trunc(Number(e));if(Number.isSafeInteger(t))return String(t);if((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),!(e[0]==="-"?e.length<20||e.length===20&&Number(e.substring(0,7))>-922337:e.length<19||e.length===19&&Number(e.substring(0,6))<922337))if(ml(e),e=le,2147483648&(t=Ie))if(od())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,i]=fd(e,t);e="-"+ra(n,i)}else e=ra(e,t);return e}function il(e){return e==null?e:typeof e=="bigint"?(zu(e)?e=Number(e):(e=BigInt.asIntN(64,e),e=zu(e)?Number(e):String(e)),e):gl(e)?typeof e=="number"?pd(e):md(e):void 0}function pb(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(BigInt.asUintN(64,e));if(gl(e)){if(t==="string")return t=Math.trunc(Number(e)),Number.isSafeInteger(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Dm(e)||(ml(e),e=ra(le,Ie))),e;if(t==="number")return(e=Math.trunc(e))>=0&&Number.isSafeInteger(e)?e:(function(n){if(n<0){Jr(n);var i=ra(le,Ie);return n=Number(i),Number.isSafeInteger(n)?n:i}return Dm(i=String(n))?i:(Jr(n),ud(le,Ie))})(e)}}function Kg(e){if(typeof e!="string")throw Error();return e}function oo(e){if(e!=null&&typeof e!="string")throw Error();return e}function ms(e){return e==null||typeof e=="string"?e:void 0}function gd(e,t,n,i){if(e!=null&&typeof e=="object"&&e.X===ua)return e;if(!Array.isArray(e))return n?2&i?(e=t[Am])?t=e:(so((e=new t).u),t=t[Am]=e):t=new t:t=void 0,t;let s=n=Fe(e);return s===0&&(s|=32&i),s|=2&i,s!==n&&ke(e,s),new t(e)}function mb(e,t,n){if(t)t:{if(!gl(t=e))throw Ou("int64");switch(typeof t){case"string":t=md(t);break t;case"bigint":if(e=t=BigInt.asIntN(64,t),Pm(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(ob(e)&&!Number.isSafeInteger(e))throw Error(String(e));t=pl?BigInt(t):ab(t)?t?"1":"0":Pm(t)?t.trim()||"0":String(t);break t;default:t=pd(t)}}else t=il(e);return typeof(n=(e=t)==null?n?0:void 0:e)=="string"&&(t=+n,Number.isSafeInteger(t))?t:n}function jg(e){var t;return $o===void 0&&($o=typeof Proxy=="function"?Nm(Proxy):null),(t=!$o)||(Zo===void 0&&(Zo=typeof WeakMap=="function"?Nm(WeakMap):null),t=!Zo),t?e:(t=Kr?.get(e))?t:Math.random()>.01?e:((function(n){if(wu===void 0){let i=new $o([],{});wu=Array.prototype.concat.call([],i).length===1}wu&&typeof Symbol=="function"&&Symbol.isConcatSpreadable&&(n[Symbol.isConcatSpreadable]=!0)})(e),(function(n,i){(Kr||=new Zo).set(n,i),(Qg||=new Zo).set(i,n)})(e,t=new $o(e,{set:(n,i,s)=>(Xg(),n[i]=s,!0)})),t)}var Kr,Qg,$o,Zo,wu,sl,t0,gb;function Nm(e){try{return e.toString().indexOf("[native code]")!==-1?e:null}catch{return null}}function gs(e,t,n){return e=e0(e,t[0],t[1],n?1:2),t!==t0&&n&&dl(e,16384),e}function e0(e,t,n,i){if(i=i??0,e==null&&(e=sl),sl=void 0,e==null){var s=96;n?(e=[n],s|=512):e=[],t&&(s=-33521665&s|(1023&t)<<15)}else{if(!Array.isArray(e))throw Error("narr");if(2048&(s=Fe(e)))throw Error("farr");if(64&s)return e;if(i===1||i===2||(s|=64),n&&(s|=512,n!==e[0]))throw Error("mid");t:{if(i=(n=e).length){let r=i-1;if(cd(n[r])){if((t=r-(+!!(512&(s|=256))-1))>=1024)throw Error("pvtlmt");s=-33521665&s|(1023&t)<<15;break t}}if(t){if((t=Math.max(t,i-(+!!(512&s)-1)))>1024)throw Error("spvt");s=-33521665&s|(1023&t)<<15}}}return ke(e,s),e}var _b={},xb=(function(){try{return sd(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),ta=class{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}},vb=xb?(Object.setPrototypeOf(ta.prototype,Map.prototype),Object.defineProperties(ta.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),ta):class extends Map{constructor(){super()}};function Fm(e){return e}function Au(e){if(2&e.M)throw Error("Cannot mutate an immutable Map")}var $n=class extends vb{constructor(e,t,n=Fm,i=Fm){super();let s=Fe(e);s|=64,ke(e,s),this.M=s,this.T=t,this.S=n,this.Z=this.T?yb:i;for(let r=0;r<e.length;r++){let o=e[r],a=n(o[0],!1,!0),c=o[1];t?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,s),super.set(a,c)}}oa(e=Om){if(this.size!==0)return this.Y(e)}Y(e=Om){let t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){Au(this),super.clear()}delete(e){return Au(this),super.delete(this.S(e,!0,!1))}entries(){var e=this.na();return new nl(e,Mb,this)}keys(){return this.Ha()}values(){var e=this.na();return new nl(e,$n.prototype.get,this)}forEach(e,t){super.forEach(((n,i)=>{e.call(t,this.get(i),i,this)}))}set(e,t){return Au(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.Z(t,!0,!0,this.T,!1,this.M))}Na(e){let t=this.S(e[0],!1,!0);e=e[1],e=this.T?e===void 0?null:e:this.Z(e,!1,!0,void 0,!1,this.M),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.T;return n?((n=this.Z(t,!1,!0,n,this.sa,this.M))!==t&&super.set(e,n),n):t}}na(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function yb(e,t,n,i,s,r){return e=gd(e,i,n,r),s&&(e=xl(e)),e}function Om(e){return e}function Mb(e){return[e,this.get(e)]}var Sb;function Bm(){return Sb||=new $n(so([]),void 0,void 0,void 0,_b)}function _d(e,t,n,i,s){if(e!=null){if(Array.isArray(e))e=el(e)?void 0:s&&2&Fe(e)?e:_l(e,t,n,i!==void 0,s);else if(cd(e)){let r={};for(let o in e)r[o]=_d(e[o],t,n,i,s);e=r}else e=t(e,i);return e}}function _l(e,t,n,i,s){let r=i||n?Fe(e):0;i=i?!!(32&r):void 0;let o=Ln(e);for(let a=0;a<o.length;a++)o[a]=_d(o[a],t,n,i,s);return n&&(Yg(o,e),n(r,o)),o}function bb(e){return _d(e,xd,void 0,void 0,!1)}function xd(e){return e.X===ua?e.toJSON():e instanceof $n?e.oa(bb):(function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return zu(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(el(t))return}else{if(la(t))return Tm(t);if(t instanceof qi){let n=t.g;return n==null?"":typeof n=="string"?n:t.g=Tm(n)}if(t instanceof $n)return t.oa()}}return t})(e)}function Hu(e,t,n=ku){if(e!=null){if(zg&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=Fe(e);return 2&i?e:(t&&=i===0||!!(32&i)&&!(64&i||!(16&i)),t?(ke(e,-12293&(34|i)),e):_l(e,Hu,4&i?ku:n,!0,!0))}return e.X===ua?(n=e.u,e=2&(i=ce(n))?e:vd(e,n,i,!0)):e instanceof $n&&!(2&e.M)&&(n=so(e.Y(Hu)),e=new $n(n,e.T,e.S,e.Z)),e}}function vd(e,t,n,i){return e=e.constructor,sl=t=n0(t,n,i),t=new e(t),sl=void 0,t}function n0(e,t,n){let i=n||2&t?ku:sb,s=!!(32&t);return e=(function(r,o,a){let c=Ln(r);var l=c.length;let h=256&o?c[l-1]:void 0;for(l+=h?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(h){o=c[o]={};for(let u in h)o[u]=a(h[u])}return Yg(c,r),c})(e,t,(r=>Hu(r,s,i))),dl(e,32|(n?2:0)),e}function xl(e){let t=e.u,n=ce(t);return 2&n?vd(e,t,n,!1):e}function xs(e,t){return Ji(e=e.u,ce(e),t)}function km(e,t,n,i){if(!((t=i+(+!!(512&t)-1))<0||t>=e.length||t>=n))return e[t]}function Ji(e,t,n,i){if(n===-1)return null;let s=t>>15&1023||536870912;if(!(n>=s)){var r=e.length;return i&&256&t&&(i=e[r-1][n])!=null?(km(e,t,s,n)&&Tu!=null&&((t=(e=ib??={})[Tu]||0)>=4||(e[Tu]=t+1,Xg())),i):km(e,t,s,n)}return 256&t?e[e.length-1][n]:void 0}function fe(e,t,n){let i=e.u,s=ce(i);return Ss(s),we(i,s,t,n),e}function we(e,t,n,i){let s=t>>15&1023||536870912;if(n>=s){let r,o=t;if(256&t)r=e[e.length-1];else{if(i==null)return o;r=e[s+(+!!(512&t)-1)]={},o|=256}return r[n]=i,n<s&&(e[n+(+!!(512&t)-1)]=void 0),o!==t&&ke(e,o),o}return e[n+(+!!(512&t)-1)]=i,256&t&&n in(e=e[e.length-1])&&delete e[n],t}function $c(e,t){e=e.u;let n=ce(e),i=Ji(e,n,t),s=bs(i);return s!=null&&s!==i&&we(e,n,t,s),s}function i0(e){e=e.u;let t=ce(e),n=Ji(e,t,1),i=ld(n,!0);return i!=null&&i!==n&&we(e,t,1,i),i}function $s(){return rb===void 0?2:4}function Zs(e,t,n,i,s){let r=e.u,o=2&(e=ce(r))?1:i;s=!!s,i=yd(r,e,t);var a=Fe(i);if(!(4&a)){4&a&&(i=Ln(i),a=Yi(a,e),e=we(r,e,t,i));let l=0,h=0;for(;l<i.length;l++){let u=n(i[l]);u!=null&&(i[h++]=u)}h<l&&(i.length=h),a=-4097&(20|(a=Md(a,e))),ke(i,a&=-8193),2&a&&Object.freeze(i)}let c;return o===1||o===4&&32&a?hi(a)||(s=a,(a|=2)!==s&&ke(i,a),Object.freeze(i)):(n=o===5&&(!!(32&a)||hi(a)||!!Kr?.get(i)),(o===2||n)&&hi(a)&&(i=Ln(i),a=_s(a=Yi(a,e),e,s),ke(i,a),e=we(r,e,t,i)),hi(a)||(t=a,(a=_s(a,e,s))!==t&&ke(i,a)),n?c=jg(i):o!==2||s||Kr?.delete(i)),c||i}function yd(e,t,n,i){return e=Ji(e,t,n,i),Array.isArray(e)?e:ad}function Md(e,t){return e===0&&(e=Yi(e,t)),1|e}function hi(e){return!!(2&e)&&!!(4&e)||!!(2048&e)}function s0(e){e=Ln(e);for(let t=0;t<e.length;t++){let n=e[t]=Ln(e[t]);Array.isArray(n[1])&&(n[1]=so(n[1]))}return e}function Vu(e,t,n,i){e=e.u;let s=ce(e);Ss(s),we(e,s,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function ao(e,t,n,i,s){Ss(t);var r=!(!(64&t)&&16384&t);let o=(s=yd(e,t,n,s))!==ad;if(r||!o){let a=r=o?Fe(s):0;(!o||2&a||hi(a)||4&a&&!(32&a))&&(s=Ln(s),a=Yi(a,t),t=we(e,t,n,s)),a=-13&Md(a,t),a=_s(i?-17&a:16|a,t,!0),a!==r&&ke(s,a)}return s}function Ru(e,t){var n=Y0;return bd(Sd(e=e.u),e,ce(e),n)===t?t:-1}function Sd(e){if(io)return e[Yo]??(e[Yo]=new Map);if(Yo in e)return e[Yo];let t=new Map;return Object.defineProperty(e,Yo,{value:t}),t}function r0(e,t,n,i){let s=Sd(e),r=bd(s,e,t,n);return r!==i&&(r&&(t=we(e,t,r)),s.set(n,i)),t}function bd(e,t,n,i){let s=e.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){let o=i[r];Ji(t,n,o)!=null&&(s!==0&&(n=we(t,n,s)),s=o)}return e.set(i,s),s}function Ed(e,t,n,i){let s,r=ce(e);if((i=Ji(e,r,n,i))!=null&&i.X===ua)return(t=xl(i))!==i&&we(e,r,n,t),t.u;if(Array.isArray(i)){let o=Fe(i);s=2&o?gs(n0(i,o,!1),t,!0):64&o?i:gs(s,t,!0)}else s=gs(void 0,t,!0);return s!==i&&we(e,r,n,s),s}function o0(e,t,n,i){e=e.u;let s=ce(e);return(t=gd(i=Ji(e,s,n,i),t,!1,s))!==i&&t!=null&&we(e,s,n,t),t}function te(e,t,n,i=!1){if((t=o0(e,t,n,i))==null)return t;if(e=e.u,!(2&(i=ce(e)))){let s=xl(t);s!==t&&we(e,i,n,t=s)}return t}function a0(e,t,n,i,s,r,o){e=e.u;var a=!!(2&t);s=a?1:s,r=!!r,o&&=!a,a=yd(e,t,i);var c=Fe(a),l=!!(4&c);if(!l){var h=a,u=t;let p=!!(2&(c=Md(c,t)));p&&(u|=2);let g=!p,x=!0,m=0,f=0;for(;m<h.length;m++){let M=gd(h[m],n,!1,u);if(M instanceof n){if(!p){let _=!!(2&Fe(M.u));g&&=!_,x&&=_}h[f++]=M}}f<m&&(h.length=f),c|=4,c=x?16|c:-17&c,ke(h,c=g?8|c:-9&c),p&&Object.freeze(h)}if(o&&!(8&c||!a.length&&(s===1||s===4&&32&c))){for(hi(c)&&(a=Ln(a),c=Yi(c,t),t=we(e,t,i,a)),n=a,o=c,h=0;h<n.length;h++)(c=n[h])!==(u=xl(c))&&(n[h]=u);o|=8,o=n.length?-17&o:16|o,ke(n,o),c=o}let d;return s===1||s===4&&32&c?hi(c)||(t=c,(c|=!a.length||16&c&&(!l||32&c)?2:2048)!==t&&ke(a,c),Object.freeze(a)):(l=s===5&&(!!(32&c)||hi(c)||!!Kr?.get(a)),(s===2||l)&&hi(c)&&(a=Ln(a),c=_s(c=Yi(c,t),t,r),ke(a,c),t=we(e,t,i,a)),hi(c)||(i=c,(c=_s(c,t,r))!==i&&ke(a,c)),l?d=jg(a):s!==2||r||Kr?.delete(a)),d||a}function $i(e,t,n){let i=ce(e.u);return a0(e,i,t,n,$s(),!1,!(2&i))}function Ct(e,t,n,i){return i==null&&(i=void 0),fe(e,n,i)}function ea(e,t,n,i){i==null&&(i=void 0);t:{e=e.u;let s=ce(e);if(Ss(s),i==null){let r=Sd(e);if(bd(r,e,s,n)!==t)break t;r.set(n,0)}else s=r0(e,s,n,t);we(e,s,t,i)}}function Yi(e,t){return-2049&(e=32|(2&t?2|e:-3&e))}function _s(e,t,n){return 32&t&&n||(e&=-33),e}function rl(e,t,n,i){let s=ce(e.u);Ss(s),e=a0(e,s,n,t,2,!0),i=i??new n,e.push(i),2&Fe(i.u)?Bu(e,8):Bu(e,16)}function ui(e,t){return e??t}function Yn(e,t){return ro(xs(e,t))}function Ne(e,t){return ui($c(e,t),0)}function Ci(e,t){return ui(ms(xs(e,t)),"")}function oa(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);fe(e,t,n)}function Pi(e,t,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw Ou("int32");n|=0}fe(e,t,n)}function St(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);fe(e,t,n)}function ol(e,t,n){{let o=e.u,a=ce(o);if(Ss(a),n==null)we(o,a,t);else{n=Qg?.get(n)||n;var i=e=Fe(n),s=hi(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=Ln(n),i=0,e=_s(e=Yi(e,a),a,!0),r=!1),e|=21,s=0;s<n.length;s++){let c=n[s],l=Kg(c);Object.is(c,l)||(r&&(n=Ln(n),i=0,e=_s(e=Yi(e,a),a,!0),r=!1),n[s]=l)}e!==i&&(r&&(n=Ln(n),e=_s(e=Yi(e,a),a,!0)),ke(n,e)),we(o,a,t,n)}}}function vl(e,t,n){Ss(ce(e.u)),Zs(e,t,ms,2,!0).push(Kg(n))}function c0(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function Td(){return Error("Failed to read varint, encoding is invalid.")}function l0(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function wd(e){if(typeof e=="string")return{buffer:Vg(e),O:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Uint8Array)return{buffer:e,O:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),O:!1};if(e.constructor===qi)return{buffer:rd(e)||new Uint8Array(0),O:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Ad(e,t){let n,i=0,s=0,r=0,o=e.h,a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);for(r>32&&(s|=(127&n)>>4),r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(Js(e,a),n<128)return t(i>>>0,s>>>0);throw Td()}function Rd(e){let t=0,n=e.g,i=n+10,s=e.h;for(;n<i;){let r=s[n++];if(t|=r,(128&r)==0)return Js(e,n),!!(127&t)}throw Td()}function vs(e){let t=e.h,n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Td();return Js(e,n),s}function Zi(e){return vs(e)>>>0}function Gu(e){var t=e.h;let n=e.g,i=t[n],s=t[n+1],r=t[n+2];return t=t[n+3],Js(e,e.g+4),(i<<0|s<<8|r<<16|t<<24)>>>0}function Wu(e){var t=Gu(e);e=2*(t>>31)+1;let n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function Eb(e){return vs(e)}function Cu(e,t,{ca:n=!1}={}){e.ca=n,t&&(t=wd(t),e.h=t.buffer,e.m=t.O,e.j=0,e.l=e.h.length,e.g=e.j)}function Js(e,t){if(e.g=t,t>e.l)throw l0(e.l,t)}function h0(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);let n=e.g,i=n+t;if(i>e.l)throw l0(t,e.l-n);return e.g=i,n}function u0(e,t){if(t==0)return js();var n=h0(e,t);return e.ca&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):db?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?js():new qi(n,Zr)}$n.prototype.toJSON=void 0,$n.prototype.Ia=qg;var zm=[];function d0(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=Zi(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw c0(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function Zc(e){switch(e.h){case 0:e.h!=0?Zc(e):Rd(e.g);break;case 1:Js(e=e.g,e.g+8);break;case 2:if(e.h!=2)Zc(e);else{var t=Zi(e.g);Js(e=e.g,e.g+t)}break;case 5:Js(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!d0(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}Zc(e)}break;default:throw c0(e.h,e.l)}}function da(e,t,n){let i=e.g.l,s=Zi(e.g),r=e.g.g+s,o=r-i;if(o<=0&&(e.g.l=r,n(t,e,void 0,void 0,void 0),o=r-e.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=r,e.g.l=i,t}function Cd(e){var t=Zi(e.g),n=h0(e=e.g,t);if(e=e.h,ZS){var i,s=e;(i=Su)||(i=Su=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(Hc===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Hc=!0}catch{Hc=!1}}throw!Hc&&(Su=void 0),a}}else{t=(r=n)+t,n=[];let a,c=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?Ys():(a=e[r++],o<194||(192&a)!=128?(r--,Ys()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?Ys():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,Ys()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?Ys():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,Ys()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Ys(),n.length>=8192&&(c=Sm(c,n),n.length=0)}r=Sm(c,n)}return r}function f0(e){let t=Zi(e.g);return u0(e.g,t)}function yl(e,t,n){var i=Zi(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var Wc=[],al;function fi(e,t,n){t.g?t.m(e,t.g,t.h,n,!0):t.m(e,t.h,n,!0)}var Mt=class{constructor(e,t){this.u=e0(e,t)}toJSON(){return p0(this)}l(){var e=r3;return e.g?e.l(this,e.g,e.h,!0):e.l(this,e.h,e.defaultValue,!0)}clone(){let e=this.u;return vd(this,e,ce(e),!1)}O(){return!!(2&Fe(this.u))}};function p0(e){e=e.u,e=al?e:_l(e,xd,void 0,void 0,!1);{var t=!al;let l=e.length;if(l){var n=e[l-1],i=cd(n);i?l--:n=void 0;var s=e;if(i){t:{var r,o=n,a=!1;if(o)for(let h in o)isNaN(+h)?(r??={})[h]=o[h]:(i=o[h],Array.isArray(i)&&(el(i)||Rm(i)&&i.size===0)&&(i=null),i==null&&(a=!0),i!=null&&((r??={})[h]=i));if(a||(r=o),r)for(let h in r){a=r;break t}a=null}o=a==null?n!=null:a!==n}for(;l>0&&((r=s[l-1])==null||el(r)||Rm(r)&&r.size===0);l--)var c=!0;(s!==e||o||c)&&(t?(c||o||a)&&(s.length=l):s=Array.prototype.slice.call(s,0,l),a&&s.push(a)),c=s}else c=e}return c}function Hm(e){return e?/^\d+$/.test(e)?(ml(e),new Xu(le,Ie)):null:Tb||=new Xu(0,0)}Mt.prototype.X=ua,Mt.prototype.toString=function(){try{return al=!0,p0(this).toString()}finally{al=!1}};var Xu=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},Tb;function Vm(e){return e?/^-?\d+$/.test(e)?(ml(e),new qu(le,Ie)):null:wb||=new qu(0,0)}var qu=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},wb;function qr(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function co(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Ml(e,t){if(t>=0)co(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function aa(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function jr(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Un(e,t,n){co(e.g,8*t+n)}function Pd(e,t){return Un(e,t,2),t=e.g.end(),jr(e,t),t.push(e.h),t}function Ld(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Sl(e,t,n){Un(e,t,2),co(e.g,n.length),jr(e,e.g.end()),jr(e,n)}function cl(e,t,n,i){n!=null&&(t=Pd(e,t),i(n,e),Ld(e,t))}function pi(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Id=pi(),m0=pi(),Ud=pi(),Dd=pi(),g0=pi(),_0=pi(),Nd=pi(),x0=pi(),v0=pi(),lo=class{constructor(e,t,n){this.g=e,this.h=t,e=Id,this.l=!!e&&n===e||!1}};function bl(e,t){return new lo(e,t,Id)}function y0(e,t,n,i,s){cl(e,n,E0(t,i),s)}var Ab=bl((function(e,t,n,i,s){return e.h===2&&(da(e,Ed(t,i,n),s),!0)}),y0),Rb=bl((function(e,t,n,i,s){return e.h===2&&(da(e,Ed(t,i,n,!0),s),!0)}),y0),El=Symbol(),Fd=Symbol(),Gm=Symbol(),Wm=Symbol(),M0,S0;function Qs(e,t,n,i){var s=i[e];if(s)return s;(s={}).W=(function(u){switch(typeof u){case"boolean":return t0||=[0,void 0,!0];case"number":return u>0?void 0:u===0?gb||=[0,void 0]:[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ha=r,typeof(r=i[++o])=="function"&&(s.ma=!0,M0??=r,S0??=i[o+1],r=i[o+=2]));let a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)a[r[c]]=r;r=i[++o]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++o]);var l=void 0;if(r instanceof lo?u=r:(u=Ab,o--),u?.l){r=i[++o],l=i;var h=o;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);c<h;c++){let d=a[c];l?n(s,c,u,l,d):t(s,c,u,d)}}return i[e]=s}function b0(e){return Array.isArray(e)?e[0]instanceof lo?e:[Rb,e]:[e,void 0]}function E0(e,t){return e instanceof Mt?e.u:Array.isArray(e)?gs(e,t,!1):void 0}function Od(e,t,n,i){let s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function Bd(e,t,n,i,s){let r=n.g,o,a;e[t]=(c,l,h)=>r(c,l,h,a||=Qs(Fd,Od,Bd,i).W,o||=kd(i),s)}function kd(e){let t=e[Gm];if(t!=null)return t;let n=Qs(Fd,Od,Bd,e);return t=n.ma?(i,s)=>M0(i,s,n):(i,s)=>{let r=ce(i);for(;d0(s)&&s.h!=4;){var o=s.m,a=n[o];if(a==null){var c=n.ha;c&&(c=c[o])&&(c=Cb(c))!=null&&(a=n[o]=c)}a!=null&&a(s,i,o)||(o=(a=s).l,Zc(a),a.ga?a=void 0:(c=a.g.g-o,a.g.g=o,a=u0(a.g,c)),o=i,a&&(ps||=Symbol(),(c=o[ps])?c.push(a):o[ps]=[a]))}return 16384&r&&so(i),!0},e[Gm]=t}function Cb(e){let t=(e=b0(e))[0].g;if(e=e[1]){let n=kd(e),i=Qs(Fd,Od,Bd,e).W;return(s,r,o)=>t(s,r,o,i,n)}return t}function Tl(e,t,n){e[t]=n.h}function wl(e,t,n,i){let s,r,o=n.h;e[t]=(a,c,l)=>o(a,c,l,r||=Qs(El,Tl,wl,i).W,s||=T0(i))}function T0(e){let t=e[Wm];if(!t){let n=Qs(El,Tl,wl,e);t=(i,s)=>w0(i,s,n),e[Wm]=t}return t}function w0(e,t,n){for(var i=Fe(e),s=+!!(512&i)-1,r=e.length,o=512&i?1:0,a=r+(256&i?-1:0);o<a;o++){let c=e[o];if(c==null)continue;let l=o-s,h=Xm(n,l);h&&h(t,c,l)}if(256&i){i=e[r-1];for(let c in i)s=+c,Number.isNaN(s)||(r=i[s])!=null&&(a=Xm(n,s))&&a(t,r,s)}if(e=ps?e[ps]:void 0)for(jr(t,t.g.end()),n=0;n<e.length;n++)jr(t,rd(e[n])||new Uint8Array(0))}function Xm(e,t){var n=e[t];if(n)return n;if((n=e.ha)&&(n=n[t])){var i=(n=b0(n))[0].h;if(n=n[1]){let s=T0(n),r=Qs(El,Tl,wl,n).W;n=e.ma?S0(r,s):(o,a,c)=>i(o,a,c,r,s)}else n=i;return e[t]=n}}function ho(e,t){if(Array.isArray(t)){var n=Fe(t);if(4&n)return t;for(var i=0,s=0;i<t.length;i++){let r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),ke(t,-12289&(5|n)),2&n&&Object.freeze(t),t}}function xn(e,t,n){return new lo(e,t,n)}function uo(e,t,n){return new lo(e,t,n)}function vn(e,t,n){we(e,ce(e),t,n)}var Pb=bl((function(e,t,n,i,s){return e.h===2&&(e=da(e,gs([void 0,void 0],i,!0),s),Ss(i=ce(t)),(s=Ji(t,i,n))instanceof $n?(2&s.M)!=0?((s=s.Y()).push(e),we(t,i,n,s)):s.Na(e):Array.isArray(s)?(2&Fe(s)&&we(t,i,n,s=s0(s)),s.push(e)):we(t,i,n,[e]),!0)}),(function(e,t,n,i,s){if(t instanceof $n)t.forEach(((r,o)=>{cl(e,n,gs([o,r],i,!1),s)}));else if(Array.isArray(t))for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)&&cl(e,n,gs(o,i,!1),s)}}));function A0(e,t,n){if(t=(function(i){if(i==null)return i;let s=typeof i;if(s==="bigint")return String(BigInt.asIntN(64,i));if(gl(i)){if(s==="string")return md(i);if(s==="number")return pd(i)}})(t),t!=null&&(typeof t=="string"&&Vm(t),t!=null))switch(Un(e,n,0),typeof t){case"number":e=e.g,Jr(t),qr(e,le,Ie);break;case"bigint":n=BigInt.asUintN(64,t),n=new qu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),qr(e.g,n.h,n.g);break;default:n=Vm(t),qr(e.g,n.h,n.g)}}function R0(e,t,n){(t=ro(t))!=null&&t!=null&&(Un(e,n,0),Ml(e.g,t))}function C0(e,t,n){(t=Zg(t))!=null&&(Un(e,n,0),e.g.g.push(t?1:0))}function P0(e,t,n){(t=ms(t))!=null&&Sl(e,n,Og(t))}function L0(e,t,n,i,s){cl(e,n,E0(t,i),s)}function I0(e,t,n){(t=t==null||typeof t=="string"||la(t)||t instanceof qi?t:void 0)!=null&&Sl(e,n,wd(t).buffer)}function U0(e,t,n){return(e.h===5||e.h===2)&&(t=ao(t,ce(t),n,!1,!1),e.h==2?yl(e,Wu,t):t.push(Wu(e.g)),!0)}var Gi=xn((function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=Gu(i);let s=Gu(i);i=2*(s>>31)+1;let r=s>>>20&2047;return e=4294967296*(1048575&s)+e,vn(t,n,r==2047?e?NaN:i*(1/0):r==0?5e-324*i*e:i*Math.pow(2,r-1075)*(e+4503599627370496)),!0}),(function(e,t,n){(t=bs(t))!=null&&(Un(e,n,1),e=e.g,(n=$g||=new DataView(new ArrayBuffer(8))).setFloat64(0,+t,!0),le=n.getUint32(0,!0),Ie=n.getUint32(4,!0),aa(e,le),aa(e,Ie))}),pi()),qe=xn((function(e,t,n){return e.h===5&&(vn(t,n,Wu(e.g)),!0)}),(function(e,t,n){(t=bs(t))!=null&&(Un(e,n,5),e=e.g,hd(t),aa(e,le))}),Nd),Lb=uo(U0,(function(e,t,n){if((t=ho(bs,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(Un(i,s,5),i=i.g,hd(r),aa(i,le))}}),Nd),zd=uo(U0,(function(e,t,n){if((t=ho(bs,t))!=null&&t.length){Un(e,n,2),co(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,hd(t[i]),aa(n,le)}}),Nd),ys=xn((function(e,t,n){return e.h===0&&(vn(t,n,Ad(e.g,dd)),!0)}),A0,_0),Pu=xn((function(e,t,n){return e.h===0&&(vn(t,n,(e=Ad(e.g,dd))===0?void 0:e),!0)}),A0,_0),Ib=xn((function(e,t,n){return e.h===0&&(vn(t,n,Ad(e.g,ud)),!0)}),(function(e,t,n){if((t=pb(t))!=null&&(typeof t=="string"&&Hm(t),t!=null))switch(Un(e,n,0),typeof t){case"number":e=e.g,Jr(t),qr(e,le,Ie);break;case"bigint":n=BigInt.asUintN(64,t),n=new Xu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),qr(e.g,n.h,n.g);break;default:n=Hm(t),qr(e.g,n.h,n.g)}}),pi()),Ue=xn((function(e,t,n){return e.h===0&&(vn(t,n,vs(e.g)),!0)}),R0,Dd),Al=uo((function(e,t,n){return(e.h===0||e.h===2)&&(t=ao(t,ce(t),n,!1,!1),e.h==2?yl(e,vs,t):t.push(vs(e.g)),!0)}),(function(e,t,n){if((t=ho(ro,t))!=null&&t.length){n=Pd(e,n);for(let i=0;i<t.length;i++)Ml(e.g,t[i]);Ld(e,n)}}),Dd),Xr=xn((function(e,t,n){return e.h===0&&(vn(t,n,(e=vs(e.g))===0?void 0:e),!0)}),R0,Dd),Te=xn((function(e,t,n){return e.h===0&&(vn(t,n,Rd(e.g)),!0)}),C0,m0),Yr=xn((function(e,t,n){return e.h===0&&(vn(t,n,(e=Rd(e.g))===!1?void 0:e),!0)}),C0,m0),cn=uo((function(e,t,n){return e.h===2&&(e=Cd(e),ao(t,ce(t),n,!1).push(e),!0)}),(function(e,t,n){if((t=ho(ms,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&Sl(i,s,Og(r))}}),Ud),fs=xn((function(e,t,n){return e.h===2&&(vn(t,n,(e=Cd(e))===""?void 0:e),!0)}),P0,Ud),se=xn((function(e,t,n){return e.h===2&&(vn(t,n,Cd(e)),!0)}),P0,Ud),Xe=(function(e,t,n=Id){return new lo(e,t,n)})((function(e,t,n,i,s){return e.h===2&&(i=gs(void 0,i,!0),ao(t,ce(t),n,!0).push(i),da(e,i,s),!0)}),(function(e,t,n,i,s){if(Array.isArray(t))for(let r=0;r<t.length;r++)L0(e,t[r],n,i,s)})),ae=bl((function(e,t,n,i,s,r){return e.h===2&&(r0(t,Fe(t),r,n),da(e,t=Ed(t,i,n),s),!0)}),L0),D0=xn((function(e,t,n){return e.h===2&&(vn(t,n,f0(e)),!0)}),I0,x0),Ub=uo((function(e,t,n){return(e.h===0||e.h===2)&&(t=ao(t,ce(t),n,!1,!1),e.h==2?yl(e,Zi,t):t.push(Zi(e.g)),!0)}),(function(e,t,n){if((t=ho(Jg,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(Un(i,s,0),co(i.g,r))}}),g0),Db=xn((function(e,t,n){return e.h===0&&(vn(t,n,(e=Zi(e.g))===0?void 0:e),!0)}),(function(e,t,n){(t=Jg(t))!=null&&t!=null&&(Un(e,n,0),co(e.g,t))}),g0),di=xn((function(e,t,n){return e.h===0&&(vn(t,n,vs(e.g)),!0)}),(function(e,t,n){(t=ro(t))!=null&&(t=parseInt(t,10),Un(e,n,0),Ml(e.g,t))}),v0),Yu=class{constructor(t,n){this.h=t,this.g=n,this.l=te,this.m=Ct,this.defaultValue=void 0}};function mi(e,t){return new Yu(e,t)}function Es(e,t){return(n,i)=>{if(Wc.length){let r=Wc.pop();r.o(i),Cu(r.g,n,i),n=r}else n=new class{constructor(r,o){if(zm.length){let a=zm.pop();Cu(a,r,o),r=a}else r=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,Cu(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ga:r=!1}={}){this.ga=r}}(n,i);try{let r=new e,o=r.u;kd(t)(o,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,Wc.length<100&&Wc.push(n)}return s}}function Rl(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let o=this.g;return this.g=[],o}}}};w0(this.u,t,Qs(El,Tl,wl,e)),jr(t,t.g.end());let n=new Uint8Array(t.h),i=t.l,s=i.length,r=0;for(let o=0;o<s;o++){let a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var qm=class extends Mt{constructor(e){super(e)}},Ym=[0,fs,xn((function(e,t,n){return e.h===2&&(vn(t,n,(e=f0(e))===js()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Mt){let i=t.Qa;return void(i&&(t=i(t),t!=null&&Sl(e,n,wd(t).buffer)))}if(Array.isArray(t))return}I0(e,t,n)}),x0)],Lu,$m=globalThis.trustedTypes;function Zm(e){Lu===void 0&&(Lu=(function(){let n=null;if(!$m)return n;try{let i=s=>s;n=$m.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var t=Lu;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function Nb(e,...t){if(t.length===0)return Zm(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return Zm(n)}var N0=[0,Ue,di,Te,-1,Al,di,-1],Fb=class extends Mt{constructor(){super()}},F0=[0,Te,se,Te,di,-1,uo((function(e,t,n){return(e.h===0||e.h===2)&&(t=ao(t,ce(t),n,!1,!1),e.h==2?yl(e,Eb,t):t.push(vs(e.g)),!0)}),(function(e,t,n){if((t=ho(ro,t))!=null&&t.length){n=Pd(e,n);for(let i=0;i<t.length;i++)Ml(e.g,t[i]);Ld(e,n)}}),v0),se,-1,[0,Te,-1],di,Te,-1],O0=[0,se,-2],Jm=class extends Mt{constructor(){super()}},B0=[0],k0=[0,Ue,Te,1,Te,-3],In=class extends Mt{constructor(e){super(e,2)}},ze={};ze[336783863]=[0,se,Te,-1,Ue,[0,[1,2,3,4,5,6,7],ae,B0,ae,F0,ae,O0,ae,k0,ae,N0,ae,[0,se,-2],ae,[0,se,di]],[0,se],Te,[0,[1,3],[2,4],ae,[0,Al],-1,ae,[0,cn],-1,Xe,[0,se,-1]],se];var Km=[0,Pu,-1,Yr,-3,Pu,Al,fs,Xr,Pu,-1,Yr,Xr,Yr,-2,fs];function Dn(e,t){Vu(e,2,oo(t),"")}function pe(e,t){vl(e,3,t)}function Qt(e,t){vl(e,4,t)}var _n=class extends Mt{constructor(e){super(e,500)}o(e){return Ct(this,0,7,e)}},na=[-1,{}],jm=[0,se,1,na],Qm=[0,se,cn,na];function Nn(e,t){rl(e,1,_n,t)}function ge(e,t){vl(e,10,t)}function ee(e,t){vl(e,15,t)}var Sn=class extends Mt{constructor(e){super(e,500)}o(e){return Ct(this,0,1001,e)}},z0=[-500,Xe,[-500,fs,-1,cn,-3,[-2,ze,Te],Xe,Ym,Xr,-1,jm,Qm,Xe,[0,fs,Yr],fs,Km,Xr,cn,987,cn],4,Xe,[-500,se,-1,[-1,{}],998,se],Xe,[-500,se,cn,-1,[-2,{},Te],997,cn,-1],Xr,Xe,[-500,se,cn,na,998,cn],cn,Xr,jm,Qm,Xe,[0,fs,-1,na],cn,-2,Km,fs,-1,Yr,[0,Yr,Db],978,na,Xe,Ym];Sn.prototype.g=Rl(z0);var Ob=Es(Sn,z0),Bb=class extends Mt{constructor(e){super(e)}},H0=class extends Mt{constructor(e){super(e)}g(){return $i(this,Bb,1)}},V0=[0,Xe,[0,Ue,qe,se,-1]],Cl=Es(H0,V0),kb=class extends Mt{constructor(e){super(e)}},zb=class extends Mt{constructor(e){super(e)}},Iu=class extends Mt{constructor(e){super(e)}h(){return te(this,kb,2)}g(){return $i(this,zb,5)}},G0=Es(class extends Mt{constructor(e){super(e)}},[0,cn,Al,zd,[0,di,[0,Ue,-3],[0,qe,-3],[0,Ue,-1,[0,Xe,[0,Ue,-2]]],Xe,[0,qe,-1,se,qe]],se,-1,ys,Xe,[0,Ue,qe],cn,ys]),W0=class extends Mt{constructor(e){super(e)}},$r=Es(class extends Mt{constructor(e){super(e)}},[0,Xe,[0,qe,-4]]),X0=class extends Mt{constructor(e){super(e)}},fa=Es(class extends Mt{constructor(e){super(e)}},[0,Xe,[0,qe,-4]]),Hb=class extends Mt{constructor(e){super(e)}},Vb=[0,Ue,-1,zd,di],q0=class extends Mt{constructor(){super()}};q0.prototype.g=Rl([0,qe,-4,ys]);var Gb=class extends Mt{constructor(e){super(e)}},Wb=Es(class extends Mt{constructor(e){super(e)}},[0,Xe,[0,1,Ue,se,V0],ys]),tg=class extends Mt{constructor(e){super(e)}},Xb=class extends Mt{constructor(e){super(e)}pa(){let e=i0(this);return e??js()}},qb=class extends Mt{constructor(e){super(e)}},Y0=[1,2],Yb=Es(class extends Mt{constructor(e){super(e)}},[0,Xe,[0,Y0,ae,[0,zd],ae,[0,D0],Ue,se],ys]),Hd=class extends Mt{constructor(e){super(e)}},$0=[0,se,Ue,qe,cn,-1],eg=class extends Mt{constructor(e){super(e)}},$b=[0,Te,-1],ng=class extends Mt{constructor(e){super(e)}},Jc=[1,2,3,4,5],ll=class extends Mt{constructor(e){super(e)}g(){return i0(this)!=null}h(){return ms(xs(this,2))!=null}},Me=class extends Mt{constructor(e){super(e)}g(){return Zg(xs(this,2))??!1}},Z0=[0,D0,se,[0,Ue,ys,-1],[0,Ib,ys]],Oe=[0,Z0,Te,[0,Jc,ae,k0,ae,F0,ae,N0,ae,B0,ae,O0],di],Pl=class extends Mt{constructor(e){super(e)}},Vd=[0,Oe,qe,-1,Ue],Zb=mi(502141897,Pl);ze[502141897]=Vd;var Jb=Es(class extends Mt{constructor(e){super(e)}},[0,[0,di,-1,Lb,Ub],Vb]),J0=class extends Mt{constructor(e){super(e)}},K0=class extends Mt{constructor(e){super(e)}},Gd=[0,Oe,qe,[0,Oe],Te],j0=[0,Oe,Vd,Gd,qe,[0,[0,Z0]]],Kb=mi(508968150,K0);ze[508968150]=j0,ze[508968149]=Gd;var Q0=class extends Mt{constructor(e){super(e)}},jb=mi(513916220,Q0);ze[513916220]=[0,Oe,j0,Ue];var Gr=class extends Mt{constructor(e){super(e)}h(){return te(this,Hd,2)}g(){fe(this,2)}},t_=[0,Oe,$0];ze[478825465]=t_;var Qb=class extends Mt{constructor(e){super(e)}},e_=class extends Mt{constructor(e){super(e)}},Wd=class extends Mt{constructor(e){super(e)}},Xd=class extends Mt{constructor(e){super(e)}},n_=class extends Mt{constructor(e){super(e)}},ig=[0,Oe,[0,Oe],t_,-1],i_=[0,Oe,qe,Ue],qd=[0,Oe,qe],s_=[0,Oe,i_,qd,qe],t3=mi(479097054,n_);ze[479097054]=[0,Oe,s_,ig],ze[463370452]=ig,ze[464864288]=i_;var e3=mi(462713202,Xd);ze[462713202]=s_,ze[474472470]=qd;var n3=class extends Mt{constructor(e){super(e)}},r_=class extends Mt{constructor(e){super(e)}},o_=class extends Mt{constructor(e){super(e)}},a_=class extends Mt{constructor(){super()}},Yd=[0,Oe,qe,-1,Ue],$u=[0,Oe,qe,Te];a_.prototype.g=Rl([0,Oe,qd,[0,Oe],Vd,Gd,Yd,$u]);var c_=class extends Mt{constructor(e){super(e)}},i3=mi(456383383,c_);ze[456383383]=[0,Oe,$0];var l_=class extends Mt{constructor(e){super(e)}},s3=mi(476348187,l_);ze[476348187]=[0,Oe,$b];var h_=class extends Mt{constructor(e){super(e)}},sg=class extends Mt{constructor(e){super(e)}},u_=[0,di,-1],r3=mi(458105876,class extends Mt{constructor(e){super(e)}g(){var e=this.u;let t=ce(e),n=2&t;return e=(function(i,s,r){var o=sg;let a=2&s,c=!1;if(r==null){if(a)return Bm();r=[]}else if(r.constructor===$n){if((2&r.M)==0||a)return r;r=r.Y()}else Array.isArray(r)?c=!!(2&Fe(r)):r=[];if(a){if(!r.length)return Bm();c||(c=!0,so(r))}else c&&(c=!1,r=s0(r));return c||(64&Fe(r)?Bu(r,32):32&s&&dl(r,32)),we(i,s,2,o=new $n(r,o,mb,void 0)),o})(e,t,Ji(e,t,2)),!n&&sg&&(e.sa=!0),e}});ze[458105876]=[0,u_,Pb,[!0,ys,[0,se,-1,cn]]];var $d=class extends Mt{constructor(e){super(e)}},d_=mi(458105758,$d);ze[458105758]=[0,Oe,se,u_];var f_=class extends Mt{constructor(e){super(e)}},o3=mi(443442058,f_);ze[443442058]=[0,Oe,se,Ue,qe,cn,-1],ze[514774813]=Yd;var p_=class extends Mt{constructor(e){super(e)}},a3=mi(516587230,p_);function Zu(e,t){return t=t?t.clone():new Hd,e.displayNamesLocale!==void 0?fe(t,1,oo(e.displayNamesLocale)):e.displayNamesLocale===void 0&&fe(t,1),e.maxResults!==void 0?Pi(t,2,e.maxResults):"maxResults"in e&&fe(t,2),e.scoreThreshold!==void 0?St(t,3,e.scoreThreshold):"scoreThreshold"in e&&fe(t,3),e.categoryAllowlist!==void 0?ol(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&fe(t,4),e.categoryDenylist!==void 0?ol(t,5,e.categoryDenylist):"categoryDenylist"in e&&fe(t,5),t}function Zd(e,t=-1,n=""){return{categories:e.map((i=>({index:ui(Yn(i,1),0)??-1,score:Ne(i,2)??0,categoryName:Ci(i,3)??"",displayName:Ci(i,4)??""}))),headIndex:t,headName:n}}function m_(e){var t=Zs(e,3,bs,$s()),n=Zs(e,2,ro,$s()),i=Zs(e,1,ms,$s()),s=Zs(e,9,ms,$s());let r={categories:[],keypoints:[]};for(let o=0;o<t.length;o++)r.categories.push({score:t[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((t=te(e,Iu,4)?.h())&&(r.boundingBox={originX:Yn(t,1)??0,originY:Yn(t,2)??0,width:Yn(t,3)??0,height:Yn(t,4)??0,angle:0}),te(e,Iu,4)?.g().length)for(let o of te(e,Iu,4).g())r.keypoints.push({x:$c(o,1)??0,y:$c(o,2)??0,score:$c(o,4)??0,label:ms(xs(o,3))??""});return r}function Ll(e){let t=[];for(let n of $i(e,X0,1))t.push({x:Ne(n,1)??0,y:Ne(n,2)??0,z:Ne(n,3)??0,visibility:Ne(n,4)??0});return t}function ia(e){let t=[];for(let n of $i(e,W0,1))t.push({x:Ne(n,1)??0,y:Ne(n,2)??0,z:Ne(n,3)??0,visibility:Ne(n,4)??0});return t}function rg(e){return Array.from(e,(t=>t>127?t-256:t))}function og(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}var Xc;ze[516587230]=[0,Oe,Yd,$u,qe],ze[518928384]=$u;var c3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function g_(){if(Xc===void 0)try{await WebAssembly.instantiate(c3),Xc=!0}catch{Xc=!1}return Xc}async function Jo(e,t=Nb``){let n=await g_()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Wi=class{};function __(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function ag(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}importScripts(e.toString())}function x_(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Et(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function cg(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[i,s]=x_(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function lg(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");let i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(let s of i)e.i._free(s);e.i._free(t)}function Ti(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function us(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}Wi.forVisionTasks=function(e){return Jo("vision",e)},Wi.forTextTasks=function(e){return Jo("text",e)},Wi.forGenAiExperimentalTasks=function(e){return Jo("genai_experimental",e)},Wi.forGenAiTasks=function(e){return Jo("genai",e)},Wi.forAudioTasks=function(e){return Jo("audio",e)},Wi.isSimdSupported=function(){return g_()};async function l3(e,t,n,i){return e=await(async(s,r,o,a,c)=>{if(r&&await ag(r),!self.ModuleFactory||o&&(await ag(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function Uu(e,t){let n=te(e.baseOptions,ll,1)||new ll;typeof t=="string"?(fe(n,2,oo(t)),fe(n,1)):t instanceof Uint8Array&&(fe(n,1,ld(t,!1)),fe(n,2)),Ct(e.baseOptions,0,1,n)}function hg(e){try{let t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((n=>n.message)).join(", "))}finally{e.H=[]}}function gt(e,t){e.B=Math.max(e.B,t)}function Il(e,t){e.A=new _n,Dn(e.A,"PassThroughCalculator"),pe(e.A,"free_memory"),Qt(e.A,"free_memory_unused_out"),ge(t,"free_memory"),Nn(t,e.A)}function Qr(e,t){pe(e.A,t),Qt(e.A,t+"_unused_out")}function Ul(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var Kc=class{constructor(e){this.g=e,this.H=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){let n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(te(this.baseOptions,ll,1)?.g()||te(this.baseOptions,ll,1)?.h()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=te(i.baseOptions,ng,3);if(!r){var o=r=new ng,a=new Jm;ea(o,4,Jc,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new Fb,ea(s,2,Jc,o)):(s=r,o=new Jm,ea(s,4,Jc,o))),Ct(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Uu(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)Uu(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){let s=[];for(var r=0;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let o of s)i.set(o,r),r+=o.length;return i})(n.modelAssetBuffer).then((i=>{Uu(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ea(){let e;if(this.g.ea((t=>{e=Ob(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.La(),this.g.setGraph(e,t),this.A=void 0,hg(this)}finishProcessing(){this.g.finishProcessing(),hg(this)}close(){this.A=void 0,this.g.closeGraph()}};function gn(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Kc.prototype.close=Kc.prototype.close,Fg("TaskRunner",Kc);var Ju=class{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function ug(e,t,n){let i=e.g;if(n=gn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function dg(e,t){let n=e.g,i=gn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);let s=gn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.P),n.vertexAttribPointer(e.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let r=gn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.J),n.vertexAttribPointer(e.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Ju(n,i,s,r)}function Jd(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function pa(e,t,n,i){return Jd(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=dg(e,!0)),n=e.s):(e.v||(e.v=dg(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function Ms(e,t,n){return Jd(e,t),e=gn(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Dl(e,t,n){Jd(e,t),e.A||(e.A=gn(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function Kd(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var fo=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=gn(e.createProgram(),"Failed to create WebGL program"),this.ba=ug(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.aa=ug(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.P=e.getAttribLocation(this.h,"aVertex"),this.J=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.ba),e.deleteShader(this.aa)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}},h3=class extends fo{H(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.B=Ms(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=Ms(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.L=gn(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.U=gn(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.K=gn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.K,0),e.uniform1i(this.L,1),e.uniform1i(this.U,2)}close(){this.B&&this.g.deleteTexture(this.B),this.j&&this.g.deleteTexture(this.j),super.close()}},u3=class extends fo{H(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=Ms(this,e),e.activeTexture(e.TEXTURE2),this.B=Ms(this,e)}m(){super.m();let e=this.g;this.K=gn(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.L=gn(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.I=gn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.I,0),e.uniform1i(this.K,1),e.uniform1i(this.L,2)}close(){this.j&&this.g.deleteTexture(this.j),this.B&&this.g.deleteTexture(this.B),super.close()}};function Xi(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Ku(e){var t=Xi(e,1);if(!t){if(t=Xi(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);let i=to(e);var n=jd(e);if(Dl(n,i,v_(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function v_(e){let t=Xi(e,2);if(!t){let n=to(e);t=M_(e);let i=Ku(e),s=y_(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),ju(e)}return t}function to(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=gn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function y_(e){if(e=to(e),!qc)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))qc=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");qc=e.R16F}return qc}function jd(e){return e.l||(e.l=new fo),e.l}function M_(e){let t=to(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Xi(e,2);return n||(n=Ms(jd(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function ju(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var qc,We=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--fg===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ga(){return!!Xi(this,0)}ka(){return!!Xi(this,1)}R(){return!!Xi(this,2)}ja(){return(t=Xi(e=this,0))||(t=Ku(e),t=new Uint8Array(t.map((n=>255*n))),e.g.push(t)),t;var e,t}ia(){return Ku(this)}N(){return v_(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let i=to(this),s=jd(this);i.activeTexture(i.TEXTURE1),n=Ms(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=y_(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Dl(s,i,n),pa(s,i,!1,(()=>{M_(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ju(this)})),Kd(s),ju(this)}}e.push(n)}return new We(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&to(this).deleteTexture(Xi(this,2)),fg=-1}};We.prototype.close=We.prototype.close,We.prototype.clone=We.prototype.clone,We.prototype.getAsWebGLTexture=We.prototype.N,We.prototype.getAsFloat32Array=We.prototype.ia,We.prototype.getAsUint8Array=We.prototype.ja,We.prototype.hasWebGLTexture=We.prototype.R,We.prototype.hasFloat32Array=We.prototype.ka,We.prototype.hasUint8Array=We.prototype.Ga;var fg=250,d3={color:"white",lineWidth:4,radius:6};function Du(e){return{...d3,fillColor:(e=e||{}).color,...e}}function Vi(e,t){return e instanceof Function?e(t):e}function pg(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function Ko(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function ca(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function mg(e,t,n){if(t.R())n(t.N());else{let i=t.ka()?t.ia():t.ja();e.m=e.m??new fo;let s=ca(e);n((e=new We([i],t.m,!1,s.canvas,e.m,t.width,t.height)).N()),e.close()}}function gg(e,t,n,i){let s=(function(a){return a.g||(a.g=new h3),a.g})(e),r=ca(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;pa(s,r,!0,(()=>{(function(c,l,h,u){let d=c.g;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,l),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,c.B),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,h),c.I&&(function(p,g){if(p!==g)return!1;p=p.entries(),g=g.entries();for(let[m,f]of p){p=m;let M=f;var x=g.next();if(x.done)return!1;let[_,E]=x.value;if(x=E,p!==_||M[0]!==x[0]||M[1]!==x[1]||M[2]!==x[2]||M[3]!==x[3])return!1}return!!g.next().done})(c.I,u))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.j);else{c.I=u;let p=Array(1024).fill(0);u.forEach(((g,x)=>{if(g.length!==4)throw Error(`Color at index ${x} is not a four-channel value.`);p[4*x]=g[0],p[4*x+1]=g[1],p[4*x+2]=g[2],p[4*x+3]=g[3]})),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.j),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(p))}})(s,t,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);let a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)}))}function _g(e,t,n,i){let s=ca(e),r=(function(c){return c.h||(c.h=new u3),c.h})(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;pa(r,s,!0,(()=>{var c=r.g;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,t),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.j),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.B),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.g).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)}))}var mn=class{constructor(e,t){e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}za(e,t){if(e){var n=Ko(this);t=Du(t),n.save();var i=n.canvas,s=0;for(let r of e)n.fillStyle=Vi(t.fillColor,{index:s,from:r}),n.strokeStyle=Vi(t.color,{index:s,from:r}),n.lineWidth=Vi(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*i.width,r.y*i.height,Vi(t.radius,{index:s,from:r}),0,2*Math.PI),n.fill(e),n.stroke(e),++s;n.restore()}}ya(e,t,n){if(e&&t){var i=Ko(this);n=Du(n),i.save();var s=i.canvas,r=0;for(let o of t){i.beginPath(),t=e[o.start];let a=e[o.end];t&&a&&(i.strokeStyle=Vi(n.color,{index:r,from:t,to:a}),i.lineWidth=Vi(n.lineWidth,{index:r,from:t,to:a}),i.moveTo(t.x*s.width,t.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}va(e,t){let n=Ko(this);t=Du(t),n.save(),n.beginPath(),n.lineWidth=Vi(t.lineWidth,{}),n.strokeStyle=Vi(t.color,{}),n.fillStyle=Vi(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}wa(e,t,n=[0,0,0,255]){this.l?(function(i,s,r,o){let a=ca(i);mg(i,s,(c=>{gg(i,c,r,o),(c=Ko(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)}))})(this,e,n,t):gg(this,e.N(),n,t)}xa(e,t,n){this.l?(function(i,s,r,o){let a=ca(i);mg(i,s,(c=>{_g(i,c,r,o),(c=Ko(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)}))})(this,e,t,n):_g(this,e.N(),t,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Ri(e,t){switch(t){case 0:return e.g.find((n=>n instanceof ImageData));case 1:return e.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function S_(e){var t=Ri(e,0);if(!t){t=eo(e);let n=Nl(e),i=new Uint8Array(e.width*e.height*4);Dl(n,t,jc(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),Kd(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function jc(e){let t=Ri(e,2);if(!t){let n=eo(e);t=Qc(e);let i=Ri(e,1)||S_(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Qo(e)}return t}function eo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return e.h||(e.h=gn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Nl(e){return e.l||(e.l=new fo),e.l}function Qc(e){let t=eo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Ri(e,2);return n||(n=Ms(Nl(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Qo(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function xg(e){let t=eo(e);return pa(Nl(e),t,!0,(()=>(function(n,i){let s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();let r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}mn.prototype.close=mn.prototype.close,mn.prototype.drawConfidenceMask=mn.prototype.xa,mn.prototype.drawCategoryMask=mn.prototype.wa,mn.prototype.drawBoundingBox=mn.prototype.va,mn.prototype.drawConnectors=mn.prototype.ya,mn.prototype.drawLandmarks=mn.prototype.za,mn.lerp=function(e,t,n,i,s){return pg(i*(1-(e-t)/(n-t))+s*(1-(n-e)/(n-t)),i,s)},mn.clamp=pg,Fg("DrawingUtils",mn);var Ke=class{constructor(e,t,n,i,s,r,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--vg===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Fa(){return!!Ri(this,0)}la(){return!!Ri(this,1)}R(){return!!Ri(this,2)}Da(){return S_(this)}Ca(){var e=Ri(this,1);return e||(jc(this),Qc(this),e=xg(this),Qo(this),this.g.push(e),this.j=!0),e}N(){return jc(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let i=eo(this),s=Nl(this);i.activeTexture(i.TEXTURE1),n=Ms(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Dl(s,i,n),pa(s,i,!1,(()=>{Qc(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Qo(this)})),Kd(s),Qo(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);jc(this),Qc(this),n=xg(this),Qo(this)}e.push(n)}return new Ke(e,this.la(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ri(this,1).close(),this.m&&eo(this).deleteTexture(Ri(this,2)),vg=-1}};Ke.prototype.close=Ke.prototype.close,Ke.prototype.clone=Ke.prototype.clone,Ke.prototype.getAsWebGLTexture=Ke.prototype.N,Ke.prototype.getAsImageBitmap=Ke.prototype.Ca,Ke.prototype.getAsImageData=Ke.prototype.Da,Ke.prototype.hasWebGLTexture=Ke.prototype.R,Ke.prototype.hasImageBitmap=Ke.prototype.la,Ke.prototype.hasImageData=Ke.prototype.Fa;var vg=250;function gi(...e){return e.map((([t,n])=>({start:t,end:n})))}var f3=(function(e){return class extends e{La(){this.i._registerModelResourcesGraphService()}}})((yg=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:__()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Et(this,i||"input_audio",(r=>{Et(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ea(e){Ti(this,"__graph_config__",(t=>{e(t)})),Et(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){let r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),Et(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)}))}addGpuBufferToStream(e,t,n){Et(this,t,(i=>{let[s,r]=cg(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(e,t,n){Et(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){Et(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){Et(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){Et(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){Et(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){Et(this,t,(i=>{Et(this,e,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(e,t,n){Et(this,t,(i=>{lg(this,Object.keys(e),(s=>{lg(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){Et(this,n,(s=>{Et(this,t,(r=>{let o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(e,t){Et(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)Et(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){Et(this,t,(n=>{Et(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){Et(this,n,(i=>{Et(this,t,(s=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of e)Et(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){Ti(this,e,t),Et(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){us(this,e,t),Et(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Ti(this,e,t),Et(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){us(this,e,t),Et(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Ti(this,e,t),Et(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){us(this,e,t),Et(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Ti(this,e,t),Et(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){us(this,e,t),Et(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Ti(this,e,t),Et(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){us(this,e,t),Et(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Ti(this,e,t),Et(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){us(this,e,t),Et(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Ti(this,e,t),Et(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){us(this,e,t),Et(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ti(this,e,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),Et(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends yg{get fa(){return this.i}ra(e,t,n){Et(this,t,(i=>{let[s,r]=cg(this,e,i);this.fa._addBoundTextureAsImageToStream(i,s,r,n)}))}V(e,t){Ti(this,e,t),Et(this,e,(n=>{this.fa._attachImageListener(n)}))}da(e,t){us(this,e,t),Et(this,e,(n=>{this.fa._attachImageVectorListener(n)}))}})),yg,Zn=class extends f3{};async function jt(e,t,n){return(async function(i,s,r,o){return l3(i,s,r,o)})(e,n.canvas??(__()?void 0:document.createElement("canvas")),t,n)}function b_(e,t,n,i){if(e.U){let r=new q0;if(n?.regionOfInterest){if(!e.qa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");St(r,1,(s.left+s.right)/2),St(r,2,(s.top+s.bottom)/2),St(r,4,s.right-s.left),St(r,3,s.bottom-s.top)}else St(r,1,.5),St(r,2,.5),St(r,4,1),St(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(St(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[o,a]=x_(t);n=Ne(r,3)*a/o,s=Ne(r,4)*o/a,St(r,4,n),St(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.ra(t,e.ba,i??performance.now()),e.finishProcessing()}function Jn(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");b_(e,t,n,e.B+1)}function Li(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");b_(e,t,n,i)}function no(e,t,n,i){var s=t.data;let r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new We([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var Mn=class extends Kc{constructor(e,t,n,i){super(e),this.g=e,this.ba=t,this.U=n,this.qa=i,this.P=new fo}l(e,t=!0){if("runningMode"in e&&oa(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Mn.prototype.close=Mn.prototype.close;var Gn=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Ct(e=this.h=new Pl,0,1,t=new Me),St(this.h,2,.5),St(this.h,3,.3)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&St(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&St(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}D(e,t){return this.j={detections:[]},Jn(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Li(this,e,n,t),this.j}m(){var e=new Sn;ge(e,"image_in"),ge(e,"norm_rect_in"),ee(e,"detections");let t=new In;fi(t,Zb,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect_in"),Qt(n,"DETECTIONS:detections"),n.o(t),Nn(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=G0(r),this.j.detections.push(m_(i));gt(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Gn.prototype.detectForVideo=Gn.prototype.F,Gn.prototype.detect=Gn.prototype.D,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=async function(e,t){return jt(Gn,e,{baseOptions:{modelAssetPath:t}})},Gn.createFromModelBuffer=function(e,t){return jt(Gn,e,{baseOptions:{modelAssetBuffer:t}})},Gn.createFromOptions=function(e,t){return jt(Gn,e,t)};var Qd=gi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),tf=gi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),ef=gi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),E_=gi([474,475],[475,476],[476,477],[477,474]),nf=gi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),sf=gi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),T_=gi([469,470],[470,471],[471,472],[472,469]),rf=gi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),w_=[...Qd,...tf,...ef,...nf,...sf,...rf],A_=gi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Mg(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Le=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ct(e=this.h=new K0,0,1,t=new Me),this.v=new J0,Ct(this.h,0,3,this.v),this.s=new Pl,Ct(this.h,0,2,this.s),Pi(this.s,4,1),St(this.s,2,.5),St(this.v,2,.5),St(this.h,4,.5)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"numFaces"in e&&Pi(this.s,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&St(this.s,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&St(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&St(this.v,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return Mg(this),Jn(this,e,t),this.j}F(e,t,n){return Mg(this),Li(this,e,n,t),this.j}m(){var e=new Sn;ge(e,"image_in"),ge(e,"norm_rect"),ee(e,"face_landmarks");let t=new In;fi(t,Kb,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),Nn(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(let r of i)i=fa(r),this.j.faceLandmarks.push(Ll(i));gt(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{gt(this,i)})),this.outputFaceBlendshapes&&(ee(e,"blendshapes"),Qt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=Cl(r),this.j.faceBlendshapes.push(Zd(i.g()??[]));gt(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{gt(this,i)}))),this.outputFacialTransformationMatrixes&&(ee(e,"face_geometry"),Qt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=te(Jb(r),Hb,2))&&this.j.facialTransformationMatrixes.push({rows:ui(Yn(i,1),0)??0,columns:ui(Yn(i,2),0)??0,data:Zs(i,3,bs,$s()).slice()??[]});gt(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{gt(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Le.prototype.detectForVideo=Le.prototype.F,Le.prototype.detect=Le.prototype.D,Le.prototype.setOptions=Le.prototype.o,Le.createFromModelPath=function(e,t){return jt(Le,e,{baseOptions:{modelAssetPath:t}})},Le.createFromModelBuffer=function(e,t){return jt(Le,e,{baseOptions:{modelAssetBuffer:t}})},Le.createFromOptions=function(e,t){return jt(Le,e,t)},Le.FACE_LANDMARKS_LIPS=Qd,Le.FACE_LANDMARKS_LEFT_EYE=tf,Le.FACE_LANDMARKS_LEFT_EYEBROW=ef,Le.FACE_LANDMARKS_LEFT_IRIS=E_,Le.FACE_LANDMARKS_RIGHT_EYE=nf,Le.FACE_LANDMARKS_RIGHT_EYEBROW=sf,Le.FACE_LANDMARKS_RIGHT_IRIS=T_,Le.FACE_LANDMARKS_FACE_OVAL=rf,Le.FACE_LANDMARKS_CONTOURS=w_,Le.FACE_LANDMARKS_TESSELATION=A_;var wi=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect",!0),Ct(e=this.j=new Q0,0,1,t=new Me)}get baseOptions(){return te(this.j,Me,1)}set baseOptions(e){Ct(this.j,0,1,e)}o(e){return super.l(e)}Oa(e,t,n){let i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,Jn(this,e,i??{}),!this.h)return this.s}m(){var e=new Sn;ge(e,"image_in"),ge(e,"norm_rect"),ee(e,"stylized_image");let t=new In;fi(t,jb,this.j);let n=new _n;Dn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),Nn(e,n),this.g.V("stylized_image",((i,s)=>{var r=!this.h,o=i.data,a=i.width;let c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){let l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=o[3*h],l[4*h+1]=o[3*h+1],l[4*h+2]=o[3*h+2],l[4*h+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new Ke([o],!1,!1,this.g.i.canvas,this.P,a,i),this.s=r=r?a.clone():a,this.h&&this.h(r),gt(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};wi.prototype.stylize=wi.prototype.Oa,wi.prototype.setOptions=wi.prototype.o,wi.createFromModelPath=function(e,t){return jt(wi,e,{baseOptions:{modelAssetPath:t}})},wi.createFromModelBuffer=function(e,t){return jt(wi,e,{baseOptions:{modelAssetBuffer:t}})},wi.createFromOptions=function(e,t){return jt(wi,e,t)};var of=gi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Sg(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function bg(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Eg(e,t=!0){let n=[];for(let s of e){var i=Cl(s);e=[];for(let r of i.g())i=t&&Yn(r,1)!=null?ui(Yn(r,1),0):-1,e.push({score:Ne(r,2)??0,index:i,categoryName:Ci(r,3)??"",displayName:Ci(r,4)??""});n.push(e)}return n}var Rn=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ct(e=this.j=new n_,0,1,t=new Me),this.s=new Xd,Ct(this.j,0,2,this.s),this.C=new Wd,Ct(this.s,0,3,this.C),this.v=new e_,Ct(this.s,0,2,this.v),this.h=new Qb,Ct(this.j,0,3,this.h),St(this.v,2,.5),St(this.s,4,.5),St(this.C,2,.5)}get baseOptions(){return te(this.j,Me,1)}set baseOptions(e){Ct(this.j,0,1,e)}o(e){if(Pi(this.v,3,e.numHands??1),"minHandDetectionConfidence"in e&&St(this.v,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&St(this.s,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&St(this.C,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Gr,n=t,i=Zu(e.cannedGesturesClassifierOptions,te(this.h,Gr,3)?.h());Ct(n,0,2,i),Ct(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&te(this.h,Gr,3)?.g();return e.customGesturesClassifierOptions?(Ct(n=t=new Gr,0,2,i=Zu(e.customGesturesClassifierOptions,te(this.h,Gr,4)?.h())),Ct(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&te(this.h,Gr,4)?.g(),this.l(e)}Ja(e,t){return Sg(this),Jn(this,e,t),bg(this)}Ka(e,t,n){return Sg(this),Li(this,e,n,t),bg(this)}m(){var e=new Sn;ge(e,"image_in"),ge(e,"norm_rect"),ee(e,"hand_gestures"),ee(e,"hand_landmarks"),ee(e,"world_hand_landmarks"),ee(e,"handedness");let t=new In;fi(t,t3,this.j);let n=new _n;Dn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"HAND_GESTURES:hand_gestures"),Qt(n,"LANDMARKS:hand_landmarks"),Qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qt(n,"HANDEDNESS:handedness"),n.o(t),Nn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i){i=fa(r);let o=[];for(let a of $i(i,X0,1))o.push({x:Ne(a,1)??0,y:Ne(a,2)??0,z:Ne(a,3)??0,visibility:Ne(a,4)??0});this.landmarks.push(o)}gt(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{gt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i){i=$r(r);let o=[];for(let a of $i(i,W0,1))o.push({x:Ne(a,1)??0,y:Ne(a,2)??0,z:Ne(a,3)??0,visibility:Ne(a,4)??0});this.worldLandmarks.push(o)}gt(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{gt(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...Eg(i,!1)),gt(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{gt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...Eg(i)),gt(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Tg(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Rn.prototype.recognizeForVideo=Rn.prototype.Ka,Rn.prototype.recognize=Rn.prototype.Ja,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=function(e,t){return jt(Rn,e,{baseOptions:{modelAssetPath:t}})},Rn.createFromModelBuffer=function(e,t){return jt(Rn,e,{baseOptions:{modelAssetBuffer:t}})},Rn.createFromOptions=function(e,t){return jt(Rn,e,t)},Rn.HAND_CONNECTIONS=of;var an=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ct(e=this.h=new Xd,0,1,t=new Me),this.s=new Wd,Ct(this.h,0,3,this.s),this.j=new e_,Ct(this.h,0,2,this.j),Pi(this.j,3,1),St(this.j,2,.5),St(this.s,2,.5),St(this.h,4,.5)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"numHands"in e&&Pi(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&St(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&St(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&St(this.s,2,e.minHandPresenceConfidence??.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Jn(this,e,t),Tg(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Li(this,e,n,t),Tg(this)}m(){var e=new Sn;ge(e,"image_in"),ge(e,"norm_rect"),ee(e,"hand_landmarks"),ee(e,"world_hand_landmarks"),ee(e,"handedness");let t=new In;fi(t,e3,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"LANDMARKS:hand_landmarks"),Qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qt(n,"HANDEDNESS:handedness"),n.o(t),Nn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i)i=fa(r),this.landmarks.push(Ll(i));gt(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{gt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i)i=$r(r),this.worldLandmarks.push(ia(i));gt(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{gt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;let a=[];for(let c of i){i=Cl(c);let l=[];for(let h of i.g())l.push({score:Ne(h,2)??0,index:ui(Yn(h,1),0)??-1,categoryName:Ci(h,3)??"",displayName:Ci(h,4)??""});a.push(l)}o.call(r,...a),gt(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};an.prototype.detectForVideo=an.prototype.F,an.prototype.detect=an.prototype.D,an.prototype.setOptions=an.prototype.o,an.createFromModelPath=function(e,t){return jt(an,e,{baseOptions:{modelAssetPath:t}})},an.createFromModelBuffer=function(e,t){return jt(an,e,{baseOptions:{modelAssetBuffer:t}})},an.createFromOptions=function(e,t){return jt(an,e,t)},an.HAND_CONNECTIONS=of;var R_=gi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function wg(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Ag(e){try{if(!e.C)return e.h;e.C(e.h)}finally{Ul(e)}}function Yc(e,t){e=fa(e),t.push(Ll(e))}var ye=class extends Mn{constructor(e,t){super(new Zn(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ct(e=this.j=new a_,0,1,t=new Me),this.K=new Wd,Ct(this.j,0,2,this.K),this.aa=new n3,Ct(this.j,0,3,this.aa),this.s=new Pl,Ct(this.j,0,4,this.s),this.I=new J0,Ct(this.j,0,5,this.I),this.v=new r_,Ct(this.j,0,6,this.v),this.L=new o_,Ct(this.j,0,7,this.L),St(this.s,2,.5),St(this.s,3,.3),St(this.I,2,.5),St(this.v,2,.5),St(this.v,3,.3),St(this.L,2,.5),St(this.K,2,.5)}get baseOptions(){return te(this.j,Me,1)}set baseOptions(e){Ct(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&St(this.s,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&St(this.s,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&St(this.I,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&St(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&St(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&St(this.L,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&St(this.K,2,e.minHandLandmarksConfidence??.5),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,wg(this),Jn(this,e,i),Ag(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,wg(this),Li(this,e,s,t),Ag(this)}m(){var e=new Sn;ge(e,"input_frames_image"),ee(e,"pose_landmarks"),ee(e,"pose_world_landmarks"),ee(e,"face_landmarks"),ee(e,"left_hand_landmarks"),ee(e,"left_hand_world_landmarks"),ee(e,"right_hand_landmarks"),ee(e,"right_hand_world_landmarks");let t=new In,n=new qm;Vu(n,1,oo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))fe(s,2,_l(r,xd,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof qi||la(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Vu(s,2,ld(r,!1),js())}})(n,this.j.g());let i=new _n;Dn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),rl(i,8,qm,n),pe(i,"IMAGE:input_frames_image"),Qt(i,"POSE_LANDMARKS:pose_landmarks"),Qt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qt(i,"FACE_LANDMARKS:face_landmarks"),Qt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Nn(e,i),Il(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{Yc(s,this.h.poseLandmarks),gt(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{gt(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=$r(s),o.push(ia(s)),gt(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{gt(this,s)})),this.outputPoseSegmentationMasks&&(Qt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Qr(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[no(this,s,!0,!this.C)],gt(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],gt(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{Yc(s,this.h.faceLandmarks),gt(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{gt(this,s)})),this.outputFaceBlendshapes&&(ee(e,"extra_blendshapes"),Qt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Cl(s),o.push(Zd(s.g()??[]))),gt(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{gt(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{Yc(s,this.h.leftHandLandmarks),gt(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{gt(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=$r(s),o.push(ia(s)),gt(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{gt(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{Yc(s,this.h.rightHandLandmarks),gt(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{gt(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=$r(s),o.push(ia(s)),gt(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{gt(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ye.prototype.detectForVideo=ye.prototype.F,ye.prototype.detect=ye.prototype.D,ye.prototype.setOptions=ye.prototype.o,ye.createFromModelPath=function(e,t){return jt(ye,e,{baseOptions:{modelAssetPath:t}})},ye.createFromModelBuffer=function(e,t){return jt(ye,e,{baseOptions:{modelAssetBuffer:t}})},ye.createFromOptions=function(e,t){return jt(ye,e,t)},ye.HAND_CONNECTIONS=of,ye.POSE_CONNECTIONS=R_,ye.FACE_LANDMARKS_LIPS=Qd,ye.FACE_LANDMARKS_LEFT_EYE=tf,ye.FACE_LANDMARKS_LEFT_EYEBROW=ef,ye.FACE_LANDMARKS_LEFT_IRIS=E_,ye.FACE_LANDMARKS_RIGHT_EYE=nf,ye.FACE_LANDMARKS_RIGHT_EYEBROW=sf,ye.FACE_LANDMARKS_RIGHT_IRIS=T_,ye.FACE_LANDMARKS_FACE_OVAL=rf,ye.FACE_LANDMARKS_CONTOURS=w_,ye.FACE_LANDMARKS_TESSELATION=A_;var Wn=class extends Mn{constructor(e,t){super(new Zn(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Ct(e=this.h=new c_,0,1,t=new Me)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return Ct(this.h,0,2,Zu(e,te(this.h,Hd,2))),this.l(e)}ta(e,t){return this.j={classifications:[]},Jn(this,e,t),this.j}ua(e,t,n){return this.j={classifications:[]},Li(this,e,n,t),this.j}m(){var e=new Sn;ge(e,"input_image"),ge(e,"norm_rect"),ee(e,"classifications");let t=new In;fi(t,i3,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),pe(n,"IMAGE:input_image"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"CLASSIFICATIONS:classifications"),n.o(t),Nn(e,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){let o={classifications:$i(r,Gb,1).map((a=>Zd(te(a,H0,4)?.g()??[],ui(Yn(a,2),0),Ci(a,3))))};return il(xs(r,2))!=null&&(o.timestampMs=ui(il(xs(r,2)),0)),o})(Wb(i)),gt(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Wn.prototype.classifyForVideo=Wn.prototype.ua,Wn.prototype.classify=Wn.prototype.ta,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(e,t){return jt(Wn,e,{baseOptions:{modelAssetPath:t}})},Wn.createFromModelBuffer=function(e,t){return jt(Wn,e,{baseOptions:{modelAssetBuffer:t}})},Wn.createFromOptions=function(e,t){return jt(Wn,e,t)};var Cn=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect",!0),this.h=new l_,this.embeddings={embeddings:[]},Ct(e=this.h,0,1,t=new Me)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){var t=this.h,n=te(this.h,eg,2);return n=n?n.clone():new eg,e.l2Normalize!==void 0?oa(n,1,e.l2Normalize):"l2Normalize"in e&&fe(n,1),e.quantize!==void 0?oa(n,2,e.quantize):"quantize"in e&&fe(n,2),Ct(t,0,2,n),this.l(e)}Aa(e,t){return Jn(this,e,t),this.embeddings}Ba(e,t,n){return Li(this,e,n,t),this.embeddings}m(){var e=new Sn;ge(e,"image_in"),ge(e,"norm_rect"),ee(e,"embeddings_out");let t=new In;fi(t,s3,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"EMBEDDINGS:embeddings_out"),n.o(t),Nn(e,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=Yb(i),this.embeddings=(function(r){return{embeddings:$i(r,qb,1).map((o=>{let a={headIndex:ui(Yn(o,3),0)??-1,headName:Ci(o,4)??""};if(o0(o,tg,Ru(o,1))!==void 0)o=Zs(o=te(o,tg,Ru(o,1)),1,bs,$s()),a.floatEmbedding=o.slice();else{let c=new Uint8Array(0);a.quantizedEmbedding=te(o,Xb,Ru(o,2))?.pa()?.h()??c}return a})),timestampMs:ui(il(xs(r,2)),0)}})(i),gt(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Cn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=og(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=og(rg(e.quantizedEmbedding),rg(t.quantizedEmbedding))}return e},Cn.prototype.embedForVideo=Cn.prototype.Ba,Cn.prototype.embed=Cn.prototype.Aa,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(e,t){return jt(Cn,e,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(e,t){return jt(Cn,e,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(e,t){return jt(Cn,e,t)};var Qu=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function Rg(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Cg(e){try{let t=new Qu(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Ul(e)}}Qu.prototype.close=Qu.prototype.close;var yn=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new $d,this.v=new h_,Ct(this.h,0,3,this.v),Ct(e=this.h,0,1,t=new Me)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?fe(this.h,2,oo(e.displayNamesLocale)):"displayNamesLocale"in e&&fe(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}J(){(function(e){let t=$i(e.ea(),_n,1).filter((n=>Ci(n,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(te(t[0],In,7)?.l()?.g()??new Map).forEach(((n,i)=>{e.s[Number(i)]=Ci(n,1)}))})(this)}segment(e,t,n){let i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,Rg(this),Jn(this,e,i),Cg(this)}Ma(e,t,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Rg(this),Li(this,e,s,t),Cg(this)}Ea(){return this.s}m(){var e=new Sn;ge(e,"image_in"),ge(e,"norm_rect");let t=new In;fi(t,d_,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),n.o(t),Nn(e,n),Il(this,e),this.outputConfidenceMasks&&(ee(e,"confidence_masks"),Qt(n,"CONFIDENCE_MASKS:confidence_masks"),Qr(this,"confidence_masks"),this.g.da("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>no(this,r,!0,!this.j))),gt(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],gt(this,i)}))),this.outputCategoryMask&&(ee(e,"category_mask"),Qt(n,"CATEGORY_MASK:category_mask"),Qr(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=no(this,i,!1,!this.j),gt(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,gt(this,i)}))),ee(e,"quality_scores"),Qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,gt(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};yn.prototype.getLabels=yn.prototype.Ea,yn.prototype.segmentForVideo=yn.prototype.Ma,yn.prototype.segment=yn.prototype.segment,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(e,t){return jt(yn,e,{baseOptions:{modelAssetPath:t}})},yn.createFromModelBuffer=function(e,t){return jt(yn,e,{baseOptions:{modelAssetBuffer:t}})},yn.createFromOptions=function(e,t){return jt(yn,e,t)};var td=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};td.prototype.close=td.prototype.close;var p3=class extends Mt{constructor(e){super(e)}},Wr=[0,Ue,-2],hl=[0,Gi,-3,Te,Gi,-1],Pg=[0,hl],Lg=[0,hl,Ue,-1],Nu=class extends Mt{constructor(e){super(e)}},Ig=[0,Gi,-1,Te],m3=class extends Mt{constructor(){super()}},Ug=class extends Mt{constructor(e){super(e)}},ed=[1,2,3,4,5,6,7,8,9,10,14,15],C_=class extends Mt{constructor(){super()}};C_.prototype.g=Rl([0,Xe,[0,ed,ae,hl,ae,[0,hl,Wr],ae,Pg,ae,[0,Pg,Wr],ae,Ig,ae,[0,Gi,-3,Te,di],ae,[0,Gi,-3,Te],ae,[0,se,Gi,-2,Te,Ue,Te,-1,2,Gi,Wr],ae,Lg,ae,[0,Lg,Wr],Gi,Wr,se,ae,[0,Gi,-3,Te,Wr,-1],ae,[0,Xe,Ig]],se,[0,se,Ue,-1,Te]]);var Ai=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new $d,this.s=new h_,Ct(this.h,0,3,this.s),Ct(e=this.h,0,1,t=new Me)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){let s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new C_;let r=new Ug;var o=new p3;if(Pi(o,1,255),Ct(r,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new Nu;oa(a,3,!0),St(a,1,t.keypoint.x),St(a,2,t.keypoint.y),ea(r,5,ed,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new m3,t.scribble))oa(t=new Nu,3,!0),St(t,1,a.x),St(t,2,a.y),rl(o,1,Nu,t);ea(r,15,ed,o)}rl(i,1,Ug,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),Jn(this,e,s);t:{try{let l=new td(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break t}this.j(l)}finally{Ul(this)}c=void 0}return c}m(){var e=new Sn;ge(e,"image_in"),ge(e,"roi_in"),ge(e,"norm_rect_in");let t=new In;fi(t,d_,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),pe(n,"IMAGE:image_in"),pe(n,"ROI:roi_in"),pe(n,"NORM_RECT:norm_rect_in"),n.o(t),Nn(e,n),Il(this,e),this.outputConfidenceMasks&&(ee(e,"confidence_masks"),Qt(n,"CONFIDENCE_MASKS:confidence_masks"),Qr(this,"confidence_masks"),this.g.da("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>no(this,r,!0,!this.j))),gt(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],gt(this,i)}))),this.outputCategoryMask&&(ee(e,"category_mask"),Qt(n,"CATEGORY_MASK:category_mask"),Qr(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=no(this,i,!1,!this.j),gt(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,gt(this,i)}))),ee(e,"quality_scores"),Qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,gt(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ai.prototype.segment=Ai.prototype.segment,Ai.prototype.setOptions=Ai.prototype.o,Ai.createFromModelPath=function(e,t){return jt(Ai,e,{baseOptions:{modelAssetPath:t}})},Ai.createFromModelBuffer=function(e,t){return jt(Ai,e,{baseOptions:{modelAssetBuffer:t}})},Ai.createFromOptions=function(e,t){return jt(Ai,e,t)};var Xn=class extends Mn{constructor(e,t){super(new Zn(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ct(e=this.h=new f_,0,1,t=new Me)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?fe(this.h,2,oo(e.displayNamesLocale)):"displayNamesLocale"in e&&fe(this.h,2),e.maxResults!==void 0?Pi(this.h,3,e.maxResults):"maxResults"in e&&fe(this.h,3),e.scoreThreshold!==void 0?St(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&fe(this.h,4),e.categoryAllowlist!==void 0?ol(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&fe(this.h,5),e.categoryDenylist!==void 0?ol(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&fe(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},Jn(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Li(this,e,n,t),this.j}m(){var e=new Sn;ge(e,"input_frame_gpu"),ge(e,"norm_rect"),ee(e,"detections");let t=new In;fi(t,o3,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),pe(n,"IMAGE:input_frame_gpu"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"DETECTIONS:detections"),n.o(t),Nn(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=G0(r),this.j.detections.push(m_(i));gt(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{gt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Xn.prototype.detectForVideo=Xn.prototype.F,Xn.prototype.detect=Xn.prototype.D,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=async function(e,t){return jt(Xn,e,{baseOptions:{modelAssetPath:t}})},Xn.createFromModelBuffer=function(e,t){return jt(Xn,e,{baseOptions:{modelAssetBuffer:t}})},Xn.createFromOptions=function(e,t){return jt(Xn,e,t)};var nd=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function Dg(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Ng(e){try{let t=new nd(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{Ul(e)}}nd.prototype.close=nd.prototype.close;var Pn=class extends Mn{constructor(e,t){super(new Zn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ct(e=this.h=new p_,0,1,t=new Me),this.v=new o_,Ct(this.h,0,3,this.v),this.j=new r_,Ct(this.h,0,2,this.j),Pi(this.j,4,1),St(this.j,2,.5),St(this.v,2,.5),St(this.h,4,.5)}get baseOptions(){return te(this.h,Me,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"numPoses"in e&&Pi(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&St(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&St(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&St(this.v,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,Dg(this),Jn(this,e,i),Ng(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,Dg(this),Li(this,e,s,t),Ng(this)}m(){var e=new Sn;ge(e,"image_in"),ge(e,"norm_rect"),ee(e,"normalized_landmarks"),ee(e,"world_landmarks"),ee(e,"segmentation_masks");let t=new In;fi(t,a3,this.h);let n=new _n;Dn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"NORM_LANDMARKS:normalized_landmarks"),Qt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),Nn(e,n),Il(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(let r of i)i=fa(r),this.landmarks.push(Ll(i));gt(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],gt(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(let r of i)i=$r(r),this.worldLandmarks.push(ia(i));gt(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],gt(this,i)})),this.outputSegmentationMasks&&(Qt(n,"SEGMENTATION_MASK:segmentation_masks"),Qr(this,"segmentation_masks"),this.g.da("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>no(this,r,!0,!this.s))),gt(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],gt(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Pn.prototype.detectForVideo=Pn.prototype.F,Pn.prototype.detect=Pn.prototype.D,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(e,t){return jt(Pn,e,{baseOptions:{modelAssetPath:t}})},Pn.createFromModelBuffer=function(e,t){return jt(Pn,e,{baseOptions:{modelAssetBuffer:t}})},Pn.createFromOptions=function(e,t){return jt(Pn,e,t)},Pn.POSE_CONNECTIONS=R_;var af=[{key:"thumb",chain:[1,2,3,4],tip:4,reach:1,label:"\u62C7\u6307"},{key:"index",chain:[5,6,7,8],tip:8,reach:1.42,label:"\u98DF\u6307"},{key:"middle",chain:[9,10,11,12],tip:12,reach:1.55,label:"\u4E2D\u6307"},{key:"ring",chain:[13,14,15,16],tip:16,reach:1.4,label:"\u65E0\u540D"},{key:"pinky",chain:[17,18,19,20],tip:20,reach:1.14,label:"\u5C0F\u6307"}],_i={pinch:{enter:.48,exit:.66,indexReach:1.12,indexCurl:.6,pulseCooldown:.45,rearmDistance:.85,rearmTime:.22},open:{minExtended:4,spreadEnter:1.02,spreadExit:.94},fist:{maxExtended:1,spreadEnter:.88,spreadExit:1,maxReach:1.24,reachExit:1.32,clusterEnter:.82,clusterExit:.95},finger:{curlEnter:.9,curlExit:.84,reachSlack:.9},vote:{frames:5,cooldown:.3},smooth:{pos:14,dead:.03,gain:1.2,yaw:Math.PI,pitch:.42},swipe:{window:.32,minDx:.35,ratio:1.5,cooldown:.5},lost:{offAfter:1.2}},Fl=(e,t,n)=>e<t?t:e>n?n:e;function po(e,t){return Math.hypot(e.x-t.x,e.y-t.y,(e.z-t.z)*.6)}function g3(e,t=_i){let n=Math.max(po(e[0],e[9]),1e-4),i=(e[0].x+e[9].x)/2,s=(e[0].y+e[9].y)/2,r=(e[0].z+e[9].z)/2,o=af.map(g=>{let x=0;for(let f=0;f<g.chain.length-1;f++)x+=po(e[g.chain[f]],e[g.chain[f+1]]);let m=po(e[g.chain[0]],e[g.chain[g.chain.length-1]]);return{key:g.key,label:g.label,curl:x>1e-5?m/x:0,reach:po(e[g.tip],e[0])/n,def:g}}),a=Math.hypot(e[4].x-e[8].x,e[4].y-e[8].y,(e[4].z-e[8].z)*.25)/n,c={x:i,y:s,z:r},l=0;for(let g=1;g<=4;g++)l+=po(e[o[g].def.tip],c)/n;l/=4;let h=Math.max(...o.slice(1).map(g=>g.reach)),u=[8,12,16,20],d=0,p=0;for(let g=0;g<u.length;g++)for(let x=g+1;x<u.length;x++)d+=po(e[u[g]],e[u[x]])/n,p++;return d/=p,{palm:n,pinch:a,spread:l,cluster:d,maxReach:h,fingers:o,indexCurl:o[1].curl,indexReach:o[1].reach}}var Ol=class{constructor(t={}){this.cfg={..._i,...t,pinch:{..._i.pinch,...t.pinch||{}},open:{..._i.open,...t.open||{}},fist:{..._i.fist,...t.fist||{}},finger:{..._i.finger,...t.finger||{}},vote:{..._i.vote,...t.vote||{}},smooth:{..._i.smooth,...t.smooth||{}},swipe:{..._i.swipe,...t.swipe||{}},lost:{..._i.lost,...t.lost||{}}},this.reset()}reset(){this.time=0,this.visible=!1,this.lastSeen=-1/0,this.label="NONE",this.mode="TREE",this.votes=[],this.lastSwitch=-1/0,this.metrics=null,this.extended=[!1,!1,!1,!1,!1],this.confidence=0,this.x=0,this.y=0,this._hasPos=!1,this._trail=[],this._lastSwipe=-1/0,this.swipe=null,this._pinchOn=!1,this._pinchSeen=0,this._releaseSince=0,this._lastPinch=-1/0}update(t,n){let i=Fl(n||0,0,.1);this.time+=i;let s={visible:this.visible,label:this.label,mode:this.mode,changed:!1,confidence:0,metrics:this.metrics,extended:this.extended,x:this.x,y:this.y,swipe:null,pinchStart:!1};if(!t||t.length<21)return this.visible=this.time-this.lastSeen<this.cfg.lost.offAfter,this.votes.length=0,this.label="NONE",this.confidence=0,this._trail.length=0,s.visible=this.visible,s.label=this.label,s.confidence=0,s;this.visible=!0,this.lastSeen=this.time;let r=g3(t,this.cfg);this.metrics=r,this.extended=this._latchExtended(r),this.label=this._classify(r),this.confidence=this._confidence(this.label,r);let o=this._updatePinchPulse(),a=(.5-t[9].x)*2,c=(t[9].y-.5)*2;if(!this._hasPos)this.x=a,this.y=c,this._hasPos=!0;else{let h=1-Math.exp(-this.cfg.smooth.pos*i);this.x+=(a-this.x)*h,this.y+=(c-this.y)*h}return this.swipe=this._detectSwipe(a,c),this.votes.push(this.label),this.votes.length>this.cfg.vote.frames&&this.votes.shift(),this.votes.length===this.cfg.vote.frames&&this.votes.every(h=>h===this.votes[0])&&this.label!=="NONE"&&this.label!==this.mode&&this.time-this.lastSwitch>=this.cfg.vote.cooldown&&(this.mode=this.label,this.lastSwitch=this.time,this.votes.length=0,s.changed=!0),s.visible=!0,s.label=this.label,s.mode=this.mode,s.confidence=this.confidence,s.metrics=r,s.extended=this.extended,s.x=this.x,s.y=this.y,s.swipe=this.swipe,s.pinchStart=o,s}_updatePinchPulse(){let t=this.cfg.pinch;return this.label==="FOCUS"?(this._pinchSeen++,this._releaseSince=0,!this._pinchOn&&this._pinchSeen>=2&&this.time-this._lastPinch>=t.pulseCooldown?(this._pinchOn=!0,this._lastPinch=this.time,!0):!1):(this._pinchSeen=0,this.metrics&&this.metrics.pinch>t.rearmDistance?(this._releaseSince||(this._releaseSince=this.time),this._pinchOn&&this.time-this._releaseSince>=t.rearmTime&&(this._pinchOn=!1),!1):(this._releaseSince=0,!1))}_detectSwipe(t,n){let i=this.cfg.swipe;for(this._trail.push({t:this.time,x:t,y:n});this._trail.length>48||this._trail.length>1&&this.time-this._trail[0].t>1.2;)this._trail.shift();if(this.time-this._lastSwipe<i.cooldown)return null;let s=null;for(let a of this._trail)if(this.time-a.t<=i.window){s=a;break}if(!s||s===this._trail[this._trail.length-1])return null;let r=t-s.x,o=n-s.y;return Math.abs(r)<i.minDx||Math.abs(r)<Math.abs(o)*i.ratio?null:(this._lastSwipe=this.time,this._trail.length=0,r>0?"right":"left")}_latchExtended(t){let n=this.cfg.finger;return t.fingers.map((i,s)=>{let r=this.extended[s],o=r?n.curlExit:n.curlEnter,a=i.def.reach*(r?n.reachSlack:1);return i.curl>o&&i.reach>a})}_classify(t){let n=this.cfg,i=this.extended.slice(1).filter(Boolean).length,s=this.label;if(t.pinch<(s==="FOCUS"?n.pinch.exit:n.pinch.enter)&&t.indexReach>n.pinch.indexReach&&t.indexCurl>n.pinch.indexCurl)return"FOCUS";if(i>=n.open.minExtended&&t.spread>(s==="SCATTER"?n.open.spreadExit:n.open.spreadEnter))return"SCATTER";let r=s==="TREE";return i<=n.fist.maxExtended&&t.spread<(r?n.fist.spreadExit:n.fist.spreadEnter)&&t.cluster<(r?n.fist.clusterExit:n.fist.clusterEnter)&&t.maxReach<(r?n.fist.reachExit:n.fist.maxReach)?"TREE":"NONE"}_confidence(t,n){let i=this.cfg;return t==="FOCUS"?Fl((i.pinch.exit-n.pinch)/(i.pinch.exit-.12),0,1):t==="SCATTER"?Fl((n.spread-i.open.spreadExit*.9)/.55,0,1):t==="TREE"?Fl((i.fist.clusterExit-n.cluster)/.7,0,1):0}};function P_(e,t=.06){return Math.abs(e)<t?0:(e-Math.sign(e)*t)/(1-t)}function _3(e,t){let n=Math.PI*2;return((t-e+Math.PI)%n+n)%n-Math.PI}function L_(e,t,n=_i.smooth,i=1/60){let s=n.gain||1,r=Math.max(-1,Math.min(1,t.x)),o=Math.max(-1,Math.min(1,t.y)),a=Math.max(-1,Math.min(1,P_(r,n.dead)*s))*n.yaw,c=Math.max(-1,Math.min(1,P_(o,n.dead*2)*s))*n.pitch,l=1-Math.exp(-(n.follow||16)*i);return{y:e.y+_3(e.y,a)*l,x:e.x+(c-e.x)*l}}var Kn={colors:{bg:0,champagneGold:16767334,deepGreen:202762,accentRed:10027008},particles:{count:1500,dustCount:2500,treeHeight:24,treeRadius:8},camera:{z:50}},vt={mode:"TREE",focusIndex:0,focusTarget:null,hand:{detected:!1,x:0,y:0},rotation:{x:0,y:0}},vi,je,Ae,va,jn,lf=null,I_=new Ei,W_=new Or,Qi=[],X_=new Si,Ma,He,ji,re,_a,mo=new Ol,df=null,x3=null;async function v3(){y3(),M3(),S3(),E3(),A3(),R3(),b3(),nE(),eE();let e=P3();setTimeout(()=>N_().catch(n=>console.warn("\u6A21\u578B\u9884\u70ED\u5931\u8D25:",n)),12e3),e.finally(()=>{N_().catch(n=>console.warn("\u6A21\u578B\u9884\u70ED\u5931\u8D25:",n))}),"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{}),await Promise.all([Promise.race([W3(),new Promise(n=>setTimeout(n,8e3))]).catch(n=>console.warn("MediaPipe init skipped:",n)),Promise.race([e,new Promise(n=>setTimeout(n,6e3))])]);let t=document.getElementById("loader");t&&(t.style.opacity=0,setTimeout(()=>t.remove(),800)),e1()}function y3(){let e=document.getElementById("canvas-container");vi=new Ur,vi.background=new Ft(Kn.colors.bg),vi.fog=new gc(Kn.colors.bg,.01),je=new Qe(42,window.innerWidth/window.innerHeight,.1,1e3),je.position.set(0,2,Kn.camera.z),q_(),Ae=new Uo({antialias:!0,alpha:!1,powerPreference:"high-performance"}),Ae.setSize(window.innerWidth,window.innerHeight),Ae.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ae.toneMapping=fu,Ae.toneMappingExposure=2.2,e.appendChild(Ae.domElement),jn=new Si,jn.position.y=-1.2,vi.add(jn)}function M3(){let e=new Ir(Ae);vi.environment=e.fromScene(new zc,.04).texture}function S3(){let e=new Pc(16777215,.6);vi.add(e);let t=new Fr(16755200,2,20);t.position.set(0,5,0),jn.add(t);let n=new Wo(16764006,1200);n.position.set(30,40,40),n.angle=.5,n.penumbra=.5,vi.add(n);let i=new Wo(6719743,600);i.position.set(-30,20,-30),vi.add(i);let s=new Cc(16772795,.8);s.position.set(0,0,50),vi.add(s)}function b3(){let e=new kc(vi,je),t=new Hr(new nt(window.innerWidth,window.innerHeight),1.5,.4,.85);t.threshold=.7,t.strength=.45,t.radius=.4,/[?&]nobloom/.test(location.search)&&(t.strength=0);let n=new URLSearchParams(location.search);n.has("exp")&&(Ae.toneMappingExposure=Number(n.get("exp"))),n.has("bs")&&(t.strength=Number(n.get("bs"))),n.has("bt")&&(t.threshold=Number(n.get("bt"))),va=new Bc(Ae),va.addPass(e),va.addPass(t),Ts=je.clone(),Ts.layers.set(1)}function U_(e,t){if(!e)return;let n=e.userData.photoMesh;n&&n.material&&(n.material.toneMapped=!t,n.material.needsUpdate=!0),e.traverse(i=>{t?i.layers.set(1):i.layers.set(0)})}var Ts=null,ws=null;function E3(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="#880000",t.beginPath();for(let n=-128;n<256;n+=32)t.moveTo(n,0),t.lineTo(n+32,128),t.lineTo(n+16,128),t.lineTo(n-16,0);t.fill(),_a=new Do(e),_a.wrapS=wr,_a.wrapT=wr,_a.repeat.set(3,3)}var T3=new C,Sa=class{constructor(t,n,i=!1){this.mesh=t,this.type=n,this.isDust=i,this.posTree=new C,this.posScatter=new C,this.baseScale=t.scale.x;let s=n==="PHOTO"?.3:2;this.spinSpeed=new C((Math.random()-.5)*s,(Math.random()-.5)*s,(Math.random()-.5)*s),this.calculatePositions()}calculatePositions(){let t=Kn.particles.treeHeight,n=t/2,i=Math.random();i=Math.pow(i,.8);let s=i*t-n,r=Kn.particles.treeRadius*(1-i);r<.5&&(r=.5);let o=i*50*Math.PI+Math.random()*Math.PI,a=r*(.8+Math.random()*.4);this.posTree.set(Math.cos(o)*a,s,Math.sin(o)*a);let c=this.isDust?12+Math.random()*20:8+Math.random()*12,l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);this.posScatter.set(c*Math.sin(h)*Math.cos(l),c*Math.sin(h)*Math.sin(l),c*Math.cos(h))}update(t,n,i){let s=this.posTree;if(n==="SCATTER")s=this.posScatter;else if(n==="FOCUS")if(this.mesh===i){let c=new C(0,1.1,35),l=new Pe().copy(jn.matrixWorld).invert();s=c.applyMatrix4(l)}else s=this.posScatter;let r=n==="FOCUS"&&this.mesh===i,o=r?5:2;this.mesh.position.lerp(s,1-Math.exp(-o*t)),n==="SCATTER"?(this.mesh.rotation.x+=this.spinSpeed.x*t,this.mesh.rotation.y+=this.spinSpeed.y*t,this.mesh.rotation.z+=this.spinSpeed.z*t):n==="TREE"&&(this.mesh.rotation.x=Xo.lerp(this.mesh.rotation.x,0,t),this.mesh.rotation.z=Xo.lerp(this.mesh.rotation.z,0,t),this.mesh.rotation.y+=.5*t),r&&this.mesh.lookAt(je.position);let a=this.baseScale;this.isDust?(a=this.baseScale*(.8+.4*Math.sin(W_.elapsedTime*4+this.mesh.id)),n==="TREE"&&(a=0)):n==="SCATTER"&&this.type==="PHOTO"?a=this.baseScale*2.5:n==="FOCUS"&&(r?a=this.focusScaleFor():a=this.baseScale*.8),this.mesh.scale.lerp(T3.set(a,a,a),1-Math.exp(-4*t))}focusScaleFor(){let t=this.frameW||1.4,n=this.frameH||1.4,i=Math.max(je.position.z-35,1),s=2*Math.tan(Xo.degToRad(je.fov)/2)*i,r=s*je.aspect;return Math.min(s*.66/n,r*.88/t)}},cf={w:18,h:11.5};function q_(){if(!je)return;let e=Math.max(je.position.z-35,1);cf.h=2*Math.tan(Xo.degToRad(je.fov)/2)*e,cf.w=cf.h*je.aspect}function w3(e=1.05,t=.44,n=.26){let i=new Oo;for(let r=0;r<10;r++){let o=r%2===0?e:t,a=Math.PI/2+r*Math.PI/5,c=Math.cos(a)*o,l=Math.sin(a)*o;r===0?i.moveTo(c,l):i.lineTo(c,l)}i.closePath();let s=new Ec(i,{depth:n,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2});return s.translate(0,0,-n/2),s}function A3(){let e=new Tc(.5,32,32),t=new ai(.55,.55,.55),n=new Fo([new C(0,-.5,0),new C(0,.3,0),new C(.1,.5,0),new C(.3,.4,0)]),i=new Ac(n,16,.08,8,!1),s=new Vn({color:Kn.colors.champagneGold,metalness:1,roughness:.1,envMapIntensity:2,emissive:4469504,emissiveIntensity:.3}),r=new Vn({color:Kn.colors.deepGreen,metalness:.2,roughness:.8,emissive:8704,emissiveIntensity:.2}),o=new Rc({color:Kn.colors.accentRed,metalness:.3,roughness:.2,clearcoat:1,emissive:3342336}),a=new Vn({map:_a,roughness:.4});for(let u=0;u<Kn.particles.count;u++){let d=Math.random(),p,g;d<.4?(p=new Kt(t,r),g="BOX"):d<.7?(p=new Kt(t,s),g="GOLD_BOX"):d<.92?(p=new Kt(e,s),g="GOLD_SPHERE"):d<.97?(p=new Kt(e,o),g="RED"):(p=new Kt(i,a),g="CANE");let x=.4+Math.random()*.5;p.scale.set(x,x,x),p.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),jn.add(p),Qi.push(new Sa(p,g,!1))}let c=w3(),l=new Vn({color:16768392,emissive:16755200,emissiveIntensity:1,metalness:1,roughness:0}),h=new Kt(c,l);h.position.set(0,Kn.particles.treeHeight/2+1.2,0),lf=h,jn.add(h),jn.add(X_)}function R3(){let e=new wc(.08,0),t=new oi({color:16772795,transparent:!0,opacity:.8});for(let n=0;n<Kn.particles.dustCount;n++){let i=new Kt(e,t);i.scale.setScalar(.5+Math.random()),jn.add(i),Qi.push(new Sa(i,"DUST",!0))}}function Y_(e,t=null){let n=e.image,i=n&&n.width&&n.height?n.width/n.height:1,s=1.2,r=i>=1?s:s*i,o=i>=1?s/i:s,a=new ai(r+.2,o+.2,.05),c=new Vn({color:Kn.colors.champagneGold,metalness:1,roughness:.1}),l=new Kt(a,c),h=new Pr(r,o),u=new oi({map:e,side:ni}),d=new Kt(h,u);d.position.z=.04;let p=new Si;p.add(l),p.add(d),p.userData.photoMesh=d;let g=.8;p.scale.set(g,g,g),X_.add(p);let x=new Sa(p,"PHOTO",!1);return x.frameMesh=l,x.aspect=i,x.frameW=r+.2,x.frameH=o+.2,x.fullUrl=t,x.thumbTexture=e,x.fullTexture=null,x.orderIndex=1e6+C3++,Qi.push(x),x}var C3=0;async function P3(){try{let e=await fetch("assets/photos/manifest.json",{cache:"no-cache"});if(!e.ok)throw new Error("HTTP "+e.status);let t=await e.json(),n=t&&t.photos||[],i=L3(),s=n.map((l,h)=>{let u=Y_(i,l.full?`assets/photos/${l.full}`:null);return u.orderIndex=h,u.photoId=l.id,u.midUrl=l.mid?`assets/photos/${l.mid}`:null,u.thumbUrl=`assets/photos/${l.thumb}`,u.origUrl=l.orig?`assets/photos/${l.orig}`:null,u.origW=l.w||0,u.origH=l.h||0,u}),r=new Xs,o=0,a=0,c=async()=>{for(;a<s.length;){let l=s[a++];try{let h=await I3(l.thumbUrl),u=await r.loadAsync(h);u.colorSpace=xe,u.anisotropy=Ae.capabilities.getMaxAnisotropy(),ya(l,u),l.thumbTexture=u,o++}catch(h){console.warn("\u7167\u7247\u52A0\u8F7D\u5931\u8D25:",l.thumbUrl,h)}}};await Promise.all(Array.from({length:Math.min(4,s.length)},c)),console.log(`\u76F8\u518C\uFF1A\u5DF2\u52A0\u8F7D ${o}/${s.length} \u5F20`),U3(),D3()}catch(e){console.warn("\u76F8\u518C\u6E05\u5355\u8BFB\u53D6\u5931\u8D25:",e)}}function L3(){let e=document.createElement("canvas");e.width=4,e.height=4;let t=e.getContext("2d");t.fillStyle="#0d0b06",t.fillRect(0,0,4,4);let n=new Do(e);return n.colorSpace=xe,n}async function I3(e,t=12e3,n=2){let i;for(let s=0;s<n;s++){let r=new AbortController,o=setTimeout(()=>r.abort(),t);try{let a=await fetch(e,{signal:r.signal});if(!a.ok)throw new Error("HTTP "+a.status);return await a.arrayBuffer(),e}catch(a){i=a}finally{clearTimeout(o)}}throw i}function U3(){let e=/[?&]mode=(tree|scatter)/i.exec(location.search);e&&(vt.mode=e[1].toUpperCase(),vt.focusTarget=null,kl())}function D3(){let e=/[?&]photo=(\d+)/.exec(location.search);if(!e)return;let t=As();if(!t.length)return;let n=Math.max(0,Math.min(Number(e[1]),t.length-1));vt.mode="FOCUS",vt.focusIndex=n,vt.focusTarget=t[n].mesh,J_(vt.focusTarget),kl()}var ma=[],N3=8,$_=new Xs;function Z_(e){return!e||!e.fullUrl||e.fullUrl===e.midUrl?Promise.resolve(null):e.fullTexture?Promise.resolve(e.fullTexture):(e.fullPromise||(e.fullPromise=(async()=>{try{let t=await fetch(e.fullUrl);if(!t.ok)throw new Error("HTTP "+t.status);let n=await t.blob(),i=URL.createObjectURL(n),s=await $_.loadAsync(i);try{s.image&&s.image.decode&&await s.image.decode()}catch{}return URL.revokeObjectURL(i),s.colorSpace=xe,s.anisotropy=Ae.capabilities.getMaxAnisotropy(),e.fullTexture=s,F3(e),s}catch(t){return console.warn("\u5927\u56FE\u52A0\u8F7D\u5931\u8D25:",e.fullUrl,t),null}finally{e.fullPromise=null}})()),e.fullPromise)}function F3(e){let t=ma.indexOf(e);for(t>=0&&ma.splice(t,1),ma.push(e);ma.length>N3;){let n=ma.shift();if(!n||n===O3())continue;let i=n.mesh.userData.photoMesh;i&&n.fullTexture&&(i.material.map===n.fullTexture&&(i.material.map=n.thumbTexture,i.material.needsUpdate=!0),n.fullTexture.dispose(),n.fullTexture=null)}}function O3(){return ws?Qi.find(e=>e.mesh===ws):null}function B3(e){return!e||!e.midUrl?Promise.resolve(null):e.midTexture?Promise.resolve(e.midTexture):(e.midPromise||(e.midPromise=new Promise(t=>{$_.load(e.midUrl,async n=>{try{n.image&&n.image.decode&&await n.image.decode()}catch{}n.colorSpace=xe,n.anisotropy=Ae.capabilities.getMaxAnisotropy(),e.midTexture=n,e.midPromise=null,t(n)},void 0,()=>{e.midPromise=null,t(null)})})),e.midPromise)}function ya(e,t){if(!e||!t)return;let n=e.mesh.userData.photoMesh;n&&(k3(e,t),n.material.map!==t&&(n.material.map=t,n.material.needsUpdate=!0))}function k3(e,t){let n=t.image;if(!n||!n.width||!n.height)return;let i=n.width/n.height;if(e.aspect&&Math.abs(i-e.aspect)<.01)return;let s=1.2,r=i>=1?s:s*i,o=i>=1?s/i:s,a=e.mesh.userData.photoMesh;a&&(a.geometry.dispose(),a.geometry=new Pr(r,o)),e.frameMesh&&(e.frameMesh.geometry.dispose(),e.frameMesh.geometry=new ai(r+.2,o+.2,.05)),e.aspect=i,e.frameW=r+.2,e.frameH=o+.2}function J_(e){if(!e)return;let t=Qi.find(n=>n.mesh===e);t&&(t.fullTexture?ya(t,t.fullTexture):(B3(t).then(n=>{n&&!t.fullTexture&&ya(t,n)}),Z_(t).then(n=>{n&&(vt.focusTarget===t.mesh&&ya(t,n),t.midTexture&&(t.midTexture.dispose(),t.midTexture=null),D_(t))})),t.fullTexture&&D_(t))}function D_(e){let t=As(),n=t.findIndex(s=>s.mesh===e.mesh);if(n<0)return;let i=t[(n+1)%t.length];i&&i!==e&&!i.fullTexture&&!i.fullPromise&&Z_(i)}var z3=new Xs;function H3(e){if(!e||!e.origUrl||e.origTexture||e.origPromise)return;let t=Ae.capabilities&&Ae.capabilities.maxTextureSize||4096;if(e.origW&&Math.max(e.origW,e.origH)>t){console.info(`\u539F\u56FE ${e.origW}\xD7${e.origH} \u8D85\u8FC7\u672C\u673A\u7EB9\u7406\u4E0A\u9650 ${t}\uFF0C\u6539\u7528 mid \u7248\u672C\uFF08\u5C4F\u5E55\u4E0A\u770B\u4E0D\u51FA\u5DEE\u522B\uFF09`);return}e.origPromise=(async()=>{try{let n=await fetch(e.origUrl);if(!n.ok)throw new Error("HTTP "+n.status);let i=Number(n.headers.get("content-length"))||0,s=n.body.getReader(),r=[],o=0;for(;;){let{done:h,value:u}=await s.read();if(h)break;r.push(u),o+=u.length,vt.focusTarget===e.mesh&&(vt.origStatus="loading",vt.origPct=i?Math.min(99,Math.round(o/i*100)):0,xi(`\u{1F5BC} \u7167\u7247 ${vt.focusIndex+1} / ${As().length} \xB7 \u539F\u56FE ${vt.origPct}% \xB7 \u634F\u5408\u6216 \u2191\u2193 \u7FFB\u9875`,!1))}let a=new Blob(r),c=URL.createObjectURL(a),l=await z3.loadAsync(c);URL.revokeObjectURL(c),l.colorSpace=xe,l.anisotropy=Ae.capabilities.getMaxAnisotropy(),e.origTexture=l,vt.focusTarget===e.mesh&&(ya(e,l),vt.origStatus="done",xi(`\u{1F5BC} \u7167\u7247 ${vt.focusIndex+1} / ${As().length} \xB7 \u539F\u56FE\u753B\u8D28 \xB7 \u634F\u5408\u6216 \u2191\u2193 \u7FFB\u9875`,!1))}catch(n){console.warn("\u539F\u56FE\u52A0\u8F7D\u5931\u8D25:",e.origUrl,n)}finally{e.origPromise=null}})()}function V3(e){let t=e.target.files;t.length&&Array.from(t).forEach(n=>{let i=new FileReader;i.onload=s=>{new Xs().load(s.target.result,r=>{r.colorSpace=xe,Y_(r)})},i.readAsDataURL(n)})}var hf=!1;function G3(e){let t=e&&e.name?e.name:"UnknownError";return t==="NotAllowedError"||t==="SecurityError"?"\u26A0 \u6444\u50CF\u5934\u88AB\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\uFF1A\u70B9\u5730\u5740\u680F\u53F3\u4FA7\u7684\u76F8\u673A\u56FE\u6807 \u2192 \u6539\u4E3A\u300C\u5141\u8BB8\u300D\u2192 \u5237\u65B0":t==="NotFoundError"||t==="DevicesNotFoundError"?"\u26A0 \u6CA1\u627E\u5230\u6444\u50CF\u5934\u8BBE\u5907\uFF0C\u68C0\u67E5\u662F\u5426\u88AB\u7981\u7528\u6216\u65AD\u5F00":t==="NotReadableError"||t==="TrackStartError"?"\u26A0 \u6444\u50CF\u5934\u88AB\u5176\u5B83\u7A0B\u5E8F\u5360\u7528\uFF08\u5FAE\u4FE1/\u4F1A\u8BAE\u8F6F\u4EF6\uFF09\uFF0C\u5173\u6389\u518D\u5237\u65B0":t==="OverconstrainedError"?"\u26A0 \u6444\u50CF\u5934\u4E0D\u652F\u6301\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u5DF2\u5C1D\u8BD5\u964D\u7EA7\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5":"\u26A0 \u6444\u50CF\u5934\u6253\u5F00\u5931\u8D25\uFF1A"+t}async function W3(){if(He=document.getElementById("webcam"),ji=document.getElementById("webcam-preview"),re=ji?ji.getContext("2d"):null,ji&&(ji.width=192,ji.height=144),!window.isSecureContext){xi(`\u26A0 \u5F53\u524D\u662F ${location.protocol}// \u6253\u5F00\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u7528\u6444\u50CF\u5934\u3002\u8BF7\u7528 http://localhost \u6216 https \u94FE\u63A5`);return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){xi("\u26A0 \u8FD9\u4E2A\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6444\u50CF\u5934\u63A5\u53E3\uFF0C\u6362 Chrome / Edge / Safari \u8BD5\u8BD5");return}try{let e=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:{ideal:"user"}},audio:!1});He.srcObject=e,He.muted=!0,He.addEventListener("loadeddata",()=>{He.play().catch(()=>{})}),hf=!0,dt.webcamWrap&&dt.webcamWrap.classList.add("active"),xi("\u6444\u50CF\u5934\u5DF2\u5C31\u7EEA \xB7 \u6B63\u5728\u52A0\u8F7D\u8BC6\u522B\u6A21\u578B\u2026",!1),K_()}catch(e){console.warn("\u6444\u50CF\u5934\u6253\u5F00\u5931\u8D25:",e),xi(G3(e));return}xa.then(e=>{Ma=e,vt.mode!=="FOCUS"&&xi("\u6444\u50CF\u5934\u5DF2\u5C31\u7EEA \xB7 \u628A\u624B\u4E3E\u5230\u753B\u9762\u91CC",!1)}).catch(e=>{console.warn("\u624B\u90E8\u6A21\u578B\u52A0\u8F7D\u5931\u8D25:",e);let t=e&&e.message?e.message:"\u672A\u77E5\u539F\u56E0";xi(`\u26A0 \u624B\u52BF\u8BC6\u522B\u6CA1\u542F\u52A8\u8D77\u6765\uFF08${t}\uFF09\xB7 \u7167\u7247\u548C\u952E\u76D8\u64CD\u4F5C\u7167\u5E38\u53EF\u7528\uFF0C\u5237\u65B0\u53EF\u91CD\u8BD5`)})}var xa=null;function N_(){if(xa)return xa;let e="assets/wasm",t="./assets/hand_landmarker.task",n=Wi.forVisionTasks(e),i=7.46*1048576,s=performance.now(),r=q3(t,o=>{if(vt.mode==="FOCUS")return;let a=Math.min(99,Math.round(o/i*100)),c=(performance.now()-s)/1e3,l=o/Math.max(c,1),h=Math.max(0,(i-o)/Math.max(l,1)),u=h>=90?`${Math.round(h/60)} \u5206\u949F`:`${Math.max(1,Math.round(h))} \u79D2`;xi(`\u8BC6\u522B\u6A21\u578B ${a}% \xB7 \u7EA6\u8FD8\u9700 ${u}`,!1,!0)});return xa=(async()=>{let[o,a]=await Promise.all([n,r]),c=URL.createObjectURL(a),l=B_("\u6B63\u5728\u542F\u52A8\u8BC6\u522B\u5F15\u64CE");if(X3()){let d=an.createFromOptions(o,k_(c,"GPU"));d.catch(()=>{});let p=await Promise.race([d,uf(F_).then(()=>null)]);if(p)return l(),p;console.warn(`GPU ${F_/1e3} \u79D2\u6CA1\u8D77\u6765\uFF0C\u6539\u7528 CPU \u6A21\u5F0F`),l(),l=B_("GPU \u8F83\u6162\uFF0C\u6B63\u5728\u6539\u7528 CPU \u6A21\u5F0F")}let h=await Wi.forVisionTasks(e),u=an.createFromOptions(h,k_(c,"CPU"));try{return await Promise.race([u,uf(O_).then(()=>{throw new Error(`CPU \u6A21\u5F0F\u7B49\u6EE1 ${O_/1e3} \u79D2\u4ECD\u672A\u5C31\u7EEA`)})])}catch(d){throw u.then(p=>{Ma||(Ma=p)},()=>{}),d}finally{l()}})(),xa}var F_=8e3,O_=24e4;function uf(e){return new Promise(t=>setTimeout(t,e))}function X3(){try{let e=document.createElement("canvas");return!!(e.getContext("webgl2")||e.getContext("webgl"))}catch{return!1}}function B_(e){let t=performance.now(),n=()=>{if(vt.mode==="FOCUS")return;let s=Math.round((performance.now()-t)/1e3);xi(`${e} \xB7 \u5DF2\u7B49 ${s} \u79D2`,!1,!0)};n();let i=setInterval(n,1e3);return()=>clearInterval(i)}function k_(e,t){return{baseOptions:{modelAssetPath:e,delegate:t},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5}}async function q3(e,t,n=3){let i=null;for(let s=0;s<n;s++)try{return await Y3(e,t)}catch(r){if(i=r,console.warn(`\u6A21\u578B\u4E0B\u8F7D\u5931\u8D25\uFF08\u7B2C ${s+1}/${n} \u6B21\uFF09:`,r),s===n-1)break;vt.mode!=="FOCUS"&&xi(`\u6A21\u578B\u4E0B\u8F7D\u4E2D\u65AD\uFF0C\u6B63\u5728\u91CD\u8BD5\uFF08${s+2}/${n}\uFF09\u2026`,!1,!0),await uf(1500*(s+1))}throw new Error(`\u6A21\u578B\u4E0B\u8F7D\u5931\u8D25\uFF1A${i&&i.message||"\u7F51\u7EDC\u4E2D\u65AD"}`)}async function Y3(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u6A21\u578B\u4E0B\u8F7D\u5931\u8D25 HTTP ${n.status}`);if(!n.body||!n.body.getReader)return n.blob();let i=n.body.getReader(),s=[],r=0;for(;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length,t&&t(r)}return new Blob(s,{type:"application/octet-stream"})}var z_=-1,ga=0,$3=1e3/30,Ki={detects:0,fps:0,handHit:0,lastTick:0};async function K_(){if(requestAnimationFrame(K_),!He||He.readyState<2||He.currentTime===z_)return;if(z_=He.currentTime,He.paused&&He.play().catch(()=>{}),!Ma){Q_(null,null);return}let e=performance.now();if(ga&&e-ga<$3)return;let t=ga?(e-ga)/1e3:1/30;ga=e;let n=Ma.detectForVideo(He,e);Ki.detects++,n&&n.landmarks&&n.landmarks.length&&Ki.handHit++,e-Ki.lastTick>1e3&&(Ki.fps=Math.round(Ki.detects*1e3/(e-Ki.lastTick)),Ki.detects=0,Ki.lastTick=e),Z3(n,t)}function Z3(e,t){let n=e&&e.landmarks&&e.landmarks[0]||null;x3=n;let i=mo.update(n,t);df=i,vt.hand.detected=i.visible,vt.hand.x=i.x,vt.hand.y=i.y,i.changed&&J3(i.mode),i.pinchStart&&vt.mode==="FOCUS"&&j3(1),Q_(n,i),ff(i)}function J3(e){vt.mode=e,vt.focusTarget=null,e==="FOCUS"?j_(1):kl(),ff(df,!0),t1()}function kl(){let e=vt.mode==="FOCUS"?vt.focusTarget:null;if(ws&&ws!==e){U_(ws,!1);let t=Qi.find(n=>n.mesh===ws);t&&t.origTexture&&(t.origTexture.dispose(),t.origTexture=null)}e&&U_(e,!0),ws=e}function As(){let e=Qi.filter(t=>t.type==="PHOTO");return e.sort((t,n)=>(t.orderIndex??0)-(n.orderIndex??0)),e}function K3(){let e=As();if(!e.length||!vt.focusTarget)return null;let t=vt.focusIndex;return(!(t>=0&&t<e.length)||e[t].mesh!==vt.focusTarget)&&(t=e.findIndex(n=>n.mesh===vt.focusTarget)),t<0?null:{index:t,total:e.length}}function j3(e){j_(e)}function j_(e){As().length&&Bl(vt.focusIndex+e)}function Bl(e){let t=As();if(!t.length)return;let n=t.length;vt.mode="FOCUS",vt.focusIndex=(e%n+n)%n,vt.origStatus=null,vt.origPct=0,vt.focusTarget=t[vt.focusIndex].mesh,J_(vt.focusTarget),kl(),t1(),ff(df,!0),dt.mode&&vt.mode==="FOCUS"&&(dt.mode.textContent=`\u{1F5BC} \u7167\u7247 ${vt.focusIndex+1} / ${n} \xB7 \u634F\u5408\u6216 \u2191\u2193 \u7FFB\u9875`,dt.mode.dataset.state="")}var Q3=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]],tE=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]],H_={on:"#7dffb0",off:"rgba(255,255,255,0.25)"};function Q_(e,t){if(!re||!ji||!He||He.readyState<2)return;let n=ji.width,i=ji.height;if(re.save(),re.translate(n,0),re.scale(-1,1),re.drawImage(He,0,0,n,i),re.restore(),!e)return;let s=a=>(1-e[a].x)*n,r=a=>e[a].y*i,o=t&&t.extended||[!1,!1,!1,!1,!1];re.lineWidth=2;for(let[a,c]of Q3)re.strokeStyle="rgba(255, 214, 102, 0.55)",re.beginPath(),re.moveTo(s(a),r(a)),re.lineTo(s(c),r(c)),re.stroke();tE.forEach((a,c)=>{re.strokeStyle=o[c]?H_.on:H_.off,re.lineWidth=o[c]?3:2,re.beginPath();let l=c===0?1:a[0];re.moveTo(s(l),r(l));for(let h of a)re.lineTo(s(h),r(h));re.stroke()});for(let a=0;a<e.length;a++)re.fillStyle=a===4||a===8?"#fff6d0":"rgba(255,255,255,0.8)",re.beginPath(),re.arc(s(a),r(a),a===4||a===8?3:1.8,0,Math.PI*2),re.fill();t&&t.label==="FOCUS"&&(re.strokeStyle="#ff5b7f",re.lineWidth=3,re.beginPath(),re.moveTo(s(4),r(4)),re.lineTo(s(8),r(8)),re.stroke())}var dt={};function eE(){if(dt.hint=document.getElementById("gesture-hint"),dt.mode=document.getElementById("gh-mode"),dt.dot=document.getElementById("gh-dot"),dt.webcamWrap=document.getElementById("webcam-wrapper"),dt.debug=document.getElementById("gesture-debug"),dt.dbgLabel=document.getElementById("dbg-label"),dt.dbgConf=document.getElementById("dbg-conf"),dt.dbgPinch=document.getElementById("dbg-pinch"),dt.dbgSpread=document.getElementById("dbg-spread"),dt.dbgCurl=document.getElementById("dbg-curl"),dt.dbgVotes=document.getElementById("dbg-votes"),dt.dbgDet=document.getElementById("dbg-det"),dt.dbgVideo=document.getElementById("dbg-video"),dt.dbgFingers=document.getElementById("dbg-fingers"),dt.dbgFingers&&!dt.dbgFingers.childElementCount)for(let e of af){let t=document.createElement("span");t.className="finger-dot",t.dataset.key=e.key,t.title=e.label,t.textContent=e.label[0],dt.dbgFingers.appendChild(t)}}var V_={TREE:"\u{1F384} \u5723\u8BDE\u6811",SCATTER:"\u2728 \u6563\u5F00",FOCUS:"\u{1F5BC} \u7167\u7247\u7279\u5199",IDLE:"\u5F85\u673A",OFF:"\u624B\u52BF\u4E0D\u53EF\u7528"};function xi(e,t=!0,n=!1){dt.mode&&(dt.mode.textContent=e,t?(dt.mode.dataset.state="ERR",dt.hint&&dt.hint.classList.add("warn"),dt.dot&&dt.dot.classList.remove("on")):(dt.mode.dataset.state=n?"BUSY":"",dt.hint&&dt.hint.classList.remove("warn")))}var G_=0;function ff(e,t=!1){if(!e)return;let n=performance.now();if(!t&&n-G_<100)return;if(G_=n,dt.webcamWrap&&dt.webcamWrap.classList.toggle("active",hf),dt.dot&&dt.dot.classList.toggle("on",!!e.visible),dt.mode){if(dt.mode.dataset.state==="ERR"||dt.mode.dataset.state==="BUSY")return;let s=vt.mode==="FOCUS"?K3():null;if(s){let r=vt.origStatus==="loading"?` \xB7 \u539F\u56FE ${vt.origPct}%`:vt.origStatus==="done"?" \xB7 \u539F\u56FE\u753B\u8D28":"";dt.mode.textContent=`\u{1F5BC} \u7167\u7247 ${s.index+1} / ${s.total}${r} \xB7 \u634F\u5408\u6216 \u2191\u2193 \u7FFB\u9875`,dt.mode.dataset.state=e.visible?e.label:"NONE"}else e.visible?(dt.mode.textContent=V_[e.mode]||V_.IDLE,dt.mode.dataset.state=e.label):(dt.mode.textContent=hf?"\u6444\u50CF\u5934\u5DF2\u5C31\u7EEA \xB7 \u628A\u624B\u4E3E\u5230\u753B\u9762\u91CC":"\u628A\u624B\u4E3E\u5230\u6444\u50CF\u5934\u524D\u2026",dt.mode.dataset.state="NONE")}if(!dt.debug||!dt.debug.classList.contains("visible"))return;let i=e.metrics;if(dt.dbgLabel&&(dt.dbgLabel.textContent=e.label),dt.dbgConf&&(dt.dbgConf.textContent=(e.confidence*100).toFixed(0)+"%"),i&&(dt.dbgPinch&&(dt.dbgPinch.textContent=i.pinch.toFixed(2)),dt.dbgSpread&&(dt.dbgSpread.textContent=i.spread.toFixed(2)),dt.dbgCurl&&(dt.dbgCurl.textContent=i.indexCurl.toFixed(2))),dt.dbgVotes&&(dt.dbgVotes.textContent=mo.votes.length?mo.votes.join(" "):"\u2014"),dt.dbgDet&&(dt.dbgDet.textContent=`${Ki.fps}/s`),dt.dbgVideo&&He&&(dt.dbgVideo.textContent=He.paused?"\u5DF2\u6682\u505C":`${He.videoWidth}x${He.videoHeight} ${He.currentTime.toFixed(1)}s`),dt.dbgFingers){let s=dt.dbgFingers.children;for(let r=0;r<s.length;r++)s[r].classList.toggle("on",!!e.extended[r])}}function t1(){dt.hint&&(dt.hint.classList.remove("flash"),dt.hint.offsetWidth,dt.hint.classList.add("flash"))}function nE(){window.addEventListener("resize",()=>{je.aspect=window.innerWidth/window.innerHeight,je.updateProjectionMatrix(),q_(),Ae.setSize(window.innerWidth,window.innerHeight),va.setSize(window.innerWidth,window.innerHeight)});let e=document.getElementById("file-input");e&&e.addEventListener("change",V3),window.addEventListener("keydown",t=>{let n=t.key.toLowerCase();if(n==="h"){let i=document.querySelector(".upload-wrapper");i&&i.classList.toggle("ui-hidden")}else if(n==="g"&&dt.debug)dt.debug.classList.toggle("visible");else if(n==="arrowdown"||n==="arrowup"){t.preventDefault();let i=As();if(!i.length)return;vt.mode!=="FOCUS"?Bl(n==="arrowdown"?0:i.length-1):Bl(vt.focusIndex+(n==="arrowdown"?1:-1))}else if(n==="u")t.preventDefault(),Bl(0);else if(n==="o"){t.preventDefault();let i=Qi.find(s=>s.mesh===vt.focusTarget);i&&H3(i)}})}function e1(){requestAnimationFrame(e1);let e=Math.min(W_.getDelta(),.1);iE(e);for(let t of Qi)t.update(e,vt.mode,vt.focusTarget);if(Ts&&(Ts.position.copy(je.position),Ts.quaternion.copy(je.quaternion),Ts.projectionMatrix.copy(je.projectionMatrix),Ts.projectionMatrixInverse.copy(je.projectionMatrixInverse)),va.render(),ws){let t=Ae.autoClearColor;Ae.autoClear=!1,Ae.autoClearColor=!1,Ae.clearDepth(),Ae.render(vi,Ts),Ae.autoClearColor=t,Ae.autoClear=!0}}function iE(e){let t=mo.cfg.smooth;if(vt.mode==="SCATTER"&&vt.hand.detected){let n=L_(vt.rotation,{x:mo.x,y:mo.y},t,e);vt.rotation.y=n.y,vt.rotation.x=n.x}else vt.mode==="TREE"?(vt.rotation.y+=.3*e,vt.rotation.x+=(0-vt.rotation.x)*(1-Math.exp(-2*e))):(vt.rotation.y+=.1*e,vt.rotation.x+=(0-vt.rotation.x)*(1-Math.exp(-2*e)));jn.rotation.y=vt.rotation.y,jn.rotation.x=vt.rotation.x,lf&&(jn.getWorldQuaternion(I_),lf.quaternion.copy(I_.invert()))}v3();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
