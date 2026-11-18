(()=>{var L1=0,kf=1,I1=2;var gm=1,U1=2,Bi=3,us=0,on=1,ni=2;var Si=0,Tr=1,sc=2,zf=3,Hf=4,D1=5,Bs=100,N1=101,F1=102,Vf=103,Gf=104,O1=200,B1=201,k1=202,z1=203,Fh=204,Oh=205,H1=206,V1=207,G1=208,W1=209,X1=210,q1=211,Y1=212,$1=213,Z1=214,J1=0,K1=1,j1=2,rc=3,Q1=4,tx=5,ex=6,nx=7,_m=0,ix=1,sx=2,ls=0,rx=1,Tu=2,ox=3,ax=4,cx=5,lx=6;var xm=300,Rr=301,Cr=302,Bh=303,kh=304,kc=306,Pr=1e3,ii=1001,zh=1002,fn=1003,Wf=1004;var nh=1005;var kn=1006,hx=1007;var Fo=1008;var hs=1009,ux=1010,dx=1011,wu=1012,vm=1013,as=1014,cs=1015,ri=1016,ym=1017,Mm=1018,zs=1020,fx=1021,si=1023,px=1024,mx=1025,Hs=1026,Lr=1027,gx=1028,Sm=1029,_x=1030,bm=1031,Em=1033,ih=33776,sh=33777,rh=33778,oh=33779,Xf=35840,qf=35841,Yf=35842,$f=35843,Tm=36196,Zf=37492,Jf=37496,Kf=37808,jf=37809,Qf=37810,tp=37811,ep=37812,np=37813,ip=37814,sp=37815,rp=37816,op=37817,ap=37818,cp=37819,lp=37820,hp=37821,ah=36492,up=36494,dp=36495,xx=36283,fp=36284,pp=36285,mp=36286;var oc=2300,ac=2301,ch=2302,gp=2400,_p=2401,xp=2402;var wm=3e3,Vs=3001,vx=3200,yx=3201,Am=0,Mx=1,zn="",ve="srgb",Hi="srgb-linear",Au="display-p3",zc="display-p3-linear",cc="linear",ge="srgb",lc="rec709",hc="p3";var sr=7680;var vp=519,Sx=512,bx=513,Ex=514,Rm=515,Tx=516,wx=517,Ax=518,Rx=519,yp=35044;var Mp="300 es",Hh=1035,zi=2e3,uc=2001,ds=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sp=1234567,Co=Math.PI/180,Ir=180/Math.PI;function Zs(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[e&255]+sn[e>>8&255]+sn[e>>16&255]+sn[e>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function je(e,t,n){return Math.max(t,Math.min(n,e))}function Ru(e,t){return(e%t+t)%t}function Cx(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function Px(e,t,n){return e!==t?(n-e)/(t-e):0}function Po(e,t,n){return(1-n)*e+n*t}function Lx(e,t,n,i){return Po(e,t,1-Math.exp(-n*i))}function Ix(e,t=1){return t-Math.abs(Ru(e,t*2)-t)}function Ux(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Dx(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Nx(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Fx(e,t){return e+Math.random()*(t-e)}function Ox(e){return e*(.5-Math.random())}function Bx(e){e!==void 0&&(Sp=e);let t=Sp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kx(e){return e*Co}function zx(e){return e*Ir}function Vh(e){return(e&e-1)===0&&e!==0}function Hx(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function dc(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Vx(e,t,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":e.set(a*h,c*u,c*d,a*l);break;case"YZY":e.set(c*d,a*h,c*u,a*l);break;case"ZXZ":e.set(c*u,c*d,a*h,a*l);break;case"XZX":e.set(a*h,c*g,c*p,a*l);break;case"YXY":e.set(c*p,a*h,c*g,a*l);break;case"ZYZ":e.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function un(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Vi={DEG2RAD:Co,RAD2DEG:Ir,generateUUID:Zs,clamp:je,euclideanModulo:Ru,mapLinear:Cx,inverseLerp:Px,lerp:Po,damp:Lx,pingpong:Ix,smoothstep:Ux,smootherstep:Dx,randInt:Nx,randFloat:Fx,randFloatSpread:Ox,seededRandom:Bx,degToRad:kx,radToDeg:zx,isPowerOfTwo:Vh,ceilPowerOfTwo:Hx,floorPowerOfTwo:dc,setQuaternionFromProperEuler:Vx,normalize:un,denormalize:yr},nt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class e{constructor(t,n,i,s,r,o,a,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l)}set(t,n,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],M=s[1],_=s[4],E=s[7],L=s[2],w=s[5],A=s[8];return r[0]=o*x+a*M+c*L,r[3]=o*m+a*_+c*w,r[6]=o*f+a*E+c*A,r[1]=l*x+h*M+u*L,r[4]=l*m+h*_+u*w,r[7]=l*f+h*E+u*A,r[2]=d*x+p*M+g*L,r[5]=d*m+p*_+g*w,r[8]=d*f+p*E+g*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return n*o*h-n*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=n*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*n-s*c)*x,t[5]=(s*r-a*n)*x,t[6]=p*x,t[7]=(i*c-l*n)*x,t[8]=(o*n-i*r)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(lh.makeScale(t,n)),this}rotate(t){return this.premultiply(lh.makeRotation(-t)),this}translate(t,n){return this.premultiply(lh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lh=new Zt;function Cm(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Oo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Gx(){let e=Oo("canvas");return e.style.display="block",e}var bp={};function Lo(e){e in bp||(bp[e]=!0,console.warn(e))}var Ep=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tp=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ia={[Hi]:{transfer:cc,primaries:lc,toReference:e=>e,fromReference:e=>e},[ve]:{transfer:ge,primaries:lc,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[zc]:{transfer:cc,primaries:hc,toReference:e=>e.applyMatrix3(Tp),fromReference:e=>e.applyMatrix3(Ep)},[Au]:{transfer:ge,primaries:hc,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Tp),fromReference:e=>e.applyMatrix3(Ep).convertLinearToSRGB()}},Wx=new Set([Hi,zc]),oe={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Wx.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=Ia[t].toReference,s=Ia[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ia[e].primaries},getTransfer:function(e){return e===zn?cc:Ia[e].transfer}};function wr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function hh(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var rr,fc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rr===void 0&&(rr=Oo("canvas")),rr.width=t.width,rr.height=t.height;let i=rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Oo("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wr(n[i]/255)*255):n[i]=wr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xx=0,pc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Zs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uh(s[o].image)):r.push(uh(s[o]))}else r=uh(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function uh(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?fc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qx=0,An=class e extends ds{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ii,s=ii,r=kn,o=Fo,a=si,c=hs,l=e.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Zs(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vs?ve:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ve?Vs:wm}set encoding(t){Lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Vs?ve:zn}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=xm;An.DEFAULT_ANISOTROPY=1;var ye=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(l+1)/2,E=(p+1)/2,L=(f+1)/2,w=(h+d)/4,A=(u+x)/4,k=(g+m)/4;return _>E&&_>L?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=w/i,r=A/i):E>L?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=w/s,r=k/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=k/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gh=class extends ds{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new ye(0,0,t,n),this.scissorTest=!1,this.viewport=new ye(0,0,t,n);let s={width:t,height:n,depth:1};i.encoding!==void 0&&(Lo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vs?ve:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let n=Object.assign({},t.texture.image);return this.texture.source=new pc(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Gh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},mc=class extends An{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wh=class extends An{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[n+0]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u;return}if(a===1){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*x,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let L=Math.sqrt(_),w=Math.atan2(L,f*M);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}let E=a*M;if(c=c*m+d*E,l=l*m+p*E,h=h*m+g*E,u=u*m+x*E,m===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u}static multiplyQuaternionsFlat(t,n,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[n]=a*g+h*u+c*p-l*d,t[n+1]=c*g+h*d+l*u-a*p,t[n+2]=l*g+h*p+a*d-c*u,t[n+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],h=n[6],u=n[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-n)*h)/l,d=Math.sin(n*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(wp.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(wp.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*n-r*s),u=2*(r*i-o*n);return this.x=n+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dh=new C,wp=new bi,Gs=class{constructor(t=new C(1/0,1/0,1/0),n=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(t.matrixWorld),this.union(Ua)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),Da.subVectors(this.max,Eo),or.subVectors(t.a,Eo),ar.subVectors(t.b,Eo),cr.subVectors(t.c,Eo),ns.subVectors(ar,or),is.subVectors(cr,ar),Us.subVectors(or,cr);let n=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Us.z,Us.y,ns.z,0,-ns.x,is.z,0,-is.x,Us.z,0,-Us.x,-ns.y,ns.x,0,-is.y,is.x,0,-Us.y,Us.x,0];return!fh(n,or,ar,cr,Da)||(n=[1,0,0,0,1,0,0,0,1],!fh(n,or,ar,cr,Da))?!1:(Na.crossVectors(ns,is),n=[Na.x,Na.y,Na.z],fh(n,or,ar,cr,Da))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ui=[new C,new C,new C,new C,new C,new C,new C,new C],Qn=new C,Ua=new Gs,or=new C,ar=new C,cr=new C,ns=new C,is=new C,Us=new C,Eo=new C,Da=new C,Na=new C,Ds=new C;function fh(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){Ds.fromArray(e,r);let a=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),c=t.dot(Ds),l=n.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Yx=new Gs,To=new C,ph=new C,Bo=class{constructor(t=new C,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Yx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);let n=To.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(To,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(ph)),this.expandByPoint(To.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new C,mh=new C,Fa=new C,ss=new C,gh=new C,Oa=new C,_h=new C,gc=class{constructor(t=new C,n=new C(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Di.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){mh.copy(t).add(n).multiplyScalar(.5),Fa.copy(n).sub(t).normalize(),ss.copy(this.origin).sub(mh);let r=t.distanceTo(n)*.5,o=-this.direction.dot(Fa),a=ss.dot(this.direction),c=-ss.dot(Fa),l=ss.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(mh).addScaledVector(Fa,d),p}intersectSphere(t,n){Di.subVectors(t.center,this.origin);let i=Di.dot(this.direction),s=Di.dot(Di)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,n,i,s,r){gh.subVectors(n,t),Oa.subVectors(i,t),_h.crossVectors(gh,Oa);let o=this.direction.dot(_h),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,t);let c=a*this.direction.dot(Oa.crossVectors(ss,Oa));if(c<0)return null;let l=a*this.direction.dot(gh.cross(ss));if(l<0||c+l>o)return null;let h=-a*ss.dot(_h);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class e{constructor(t,n,i,s,r,o,a,c,l,h,u,d,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l,h,u,d,p,g,x,m)}set(t,n,i,s,r,o,a,c,l,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/lr.setFromMatrixColumn(t,0).length(),r=1/lr.setFromMatrixColumn(t,1).length(),o=1/lr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=p+g*l,n[5]=d-x*l,n[9]=-a*c,n[2]=x-d*l,n[6]=g+p*l,n[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;n[0]=d+x*a,n[4]=g*a-p,n[8]=o*l,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=p*a-g,n[6]=x+d*a,n[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;n[0]=d-x*a,n[4]=-o*u,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*h,n[9]=x-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;n[0]=c*h,n[4]=g*l-p,n[8]=d*l+x,n[1]=c*u,n[5]=x*l+d,n[9]=p*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;n[0]=c*h,n[4]=x-d*u,n[8]=g*u+p,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-l*h,n[6]=p*u+g,n[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=d*u+x,n[5]=o*h,n[9]=p*u-g,n[2]=g*u-p,n[6]=a*h,n[10]=x*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose($x,t,Zx)}lookAt(t,n,i){let s=this.elements;return Tn.subVectors(t,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),rs.crossVectors(i,Tn),rs.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),rs.crossVectors(i,Tn)),rs.normalize(),Ba.crossVectors(Tn,rs),s[0]=rs.x,s[4]=Ba.x,s[8]=Tn.x,s[1]=rs.y,s[5]=Ba.y,s[9]=Tn.y,s[2]=rs.z,s[6]=Ba.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],M=i[3],_=i[7],E=i[11],L=i[15],w=s[0],A=s[4],k=s[8],y=s[12],T=s[1],N=s[5],$=s[9],ot=s[13],I=s[2],F=s[6],V=s[10],Y=s[14],q=s[3],G=s[7],Q=s[11],tt=s[15];return r[0]=o*w+a*T+c*I+l*q,r[4]=o*A+a*N+c*F+l*G,r[8]=o*k+a*$+c*V+l*Q,r[12]=o*y+a*ot+c*Y+l*tt,r[1]=h*w+u*T+d*I+p*q,r[5]=h*A+u*N+d*F+p*G,r[9]=h*k+u*$+d*V+p*Q,r[13]=h*y+u*ot+d*Y+p*tt,r[2]=g*w+x*T+m*I+f*q,r[6]=g*A+x*N+m*F+f*G,r[10]=g*k+x*$+m*V+f*Q,r[14]=g*y+x*ot+m*Y+f*tt,r[3]=M*w+_*T+E*I+L*q,r[7]=M*A+_*N+E*F+L*G,r[11]=M*k+_*$+E*V+L*Q,r[15]=M*y+_*ot+E*Y+L*tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+x*(+n*c*p-n*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+n*l*u-n*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-n*c*u+n*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],M=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,_=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,E=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,L=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,w=n*M+i*_+s*E+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=M*A,t[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*A,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*f+i*c*f)*A,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*A,t[4]=_*A,t[5]=(h*m*r-g*d*r+g*s*p-n*m*p-h*s*f+n*d*f)*A,t[6]=(g*c*r-o*m*r-g*s*l+n*m*l+o*s*f-n*c*f)*A,t[7]=(o*d*r-h*c*r+h*s*l-n*d*l-o*s*p+n*c*p)*A,t[8]=E*A,t[9]=(g*u*r-h*x*r-g*i*p+n*x*p+h*i*f-n*u*f)*A,t[10]=(o*x*r-g*a*r+g*i*l-n*x*l-o*i*f+n*a*f)*A,t[11]=(h*a*r-o*u*r-h*i*l+n*u*l+o*i*p-n*a*p)*A,t[12]=L*A,t[13]=(h*x*s-g*u*s+g*i*d-n*x*d-h*i*m+n*u*m)*A,t[14]=(g*a*s-o*x*s-g*i*c+n*x*c+o*i*m-n*a*m)*A,t[15]=(o*u*s-h*a*s+h*i*c-n*u*c-o*i*d+n*a*d)*A,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,M=c*l,_=c*h,E=c*u,L=i.x,w=i.y,A=i.z;return s[0]=(1-(x+f))*L,s[1]=(p+E)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(p-E)*w,s[5]=(1-(d+f))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+_)*A,s[9]=(m-M)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,r=lr.set(s[0],s[1],s[2]).length(),o=lr.set(s[4],s[5],s[6]).length(),a=lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ti.copy(this);let l=1/r,h=1/o,u=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,n.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(t,n,i,s,r,o,a=zi){let c=this.elements,l=2*r/(n-t),h=2*r/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),p,g;if(a===zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===uc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=zi){let c=this.elements,l=1/(n-t),h=1/(i-s),u=1/(o-r),d=(n+t)*l,p=(i+s)*h,g,x;if(a===zi)g=(o+r)*u,x=-2*u;else if(a===uc)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},lr=new C,ti=new Ie,$x=new C(0,0,0),Zx=new C(1,1,1),rs=new C,Ba=new C,Tn=new C,Ap=new Ie,Rp=new bi,_c=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ap.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ap,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_c.DEFAULT_ORDER="XYZ";var ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jx=0,Cp=new C,hr=new bi,Ni=new Ie,ka=new C,wo=new C,Kx=new C,jx=new bi,Pp=new C(1,0,0),Lp=new C(0,1,0),Ip=new C(0,0,1),Qx={type:"added"},tv={type:"removed"},an=class e extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new C,n=new _c,i=new bi,s=new C(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Zt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return hr.setFromAxisAngle(t,n),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,n){return hr.setFromAxisAngle(t,n),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Pp,t)}rotateY(t){return this.rotateOnAxis(Lp,t)}rotateZ(t){return this.rotateOnAxis(Ip,t)}translateOnAxis(t,n){return Cp.copy(t).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Pp,t)}translateY(t){return this.translateOnAxis(Lp,t)}translateZ(t){return this.translateOnAxis(Ip,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ka.copy(t):ka.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(wo,ka,this.up):Ni.lookAt(ka,wo,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Ni),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(tv)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,Kx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,jx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++){let r=n[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(n){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};an.DEFAULT_UP=new C(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new C,Fi=new C,xh=new C,Oi=new C,ur=new C,dr=new C,Up=new C,vh=new C,yh=new C,Mh=new C,za=!1,Mr=class e{constructor(t=new C,n=new C,i=new C){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),ei.subVectors(t,n),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){ei.subVectors(s,n),Fi.subVectors(i,n),xh.subVectors(t,n);let o=ei.dot(ei),a=ei.dot(Fi),c=ei.dot(xh),l=Fi.dot(Fi),h=Fi.dot(xh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getUV(t,n,i,s,r,o,a,c){return za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),za=!0),this.getInterpolation(t,n,i,s,r,o,a,c)}static getInterpolation(t,n,i,s,r,o,a,c){return this.getBarycoord(t,n,i,s,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Oi.x),c.addScaledVector(o,Oi.y),c.addScaledVector(a,Oi.z),c)}static isFrontFacing(t,n,i,s){return ei.subVectors(i,n),Fi.subVectors(t,n),ei.cross(Fi).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ei.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,s,r){return za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),za=!0),e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,o,a;ur.subVectors(s,i),dr.subVectors(r,i),vh.subVectors(t,i);let c=ur.dot(vh),l=dr.dot(vh);if(c<=0&&l<=0)return n.copy(i);yh.subVectors(t,s);let h=ur.dot(yh),u=dr.dot(yh);if(h>=0&&u<=h)return n.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(ur,o);Mh.subVectors(t,r);let p=ur.dot(Mh),g=dr.dot(Mh);if(g>=0&&p<=g)return n.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(dr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Up.subVectors(r,s),a=(u-h)/(u-h+(p-g)),n.copy(s).addScaledVector(Up,a);let f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(ur,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Sh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ft=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=oe.workingColorSpace){return this.r=t,this.g=n,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=oe.workingColorSpace){if(t=Ru(t,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Sh(o,r,t+1/3),this.g=Sh(o,r,t),this.b=Sh(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,n=ve){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ve){let i=Pm[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}copyLinearToSRGB(t){return this.r=hh(t.r),this.g=hh(t.g),this.b=hh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return oe.fromWorkingColorSpace(rn.copy(this),t),Math.round(je(rn.r*255,0,255))*65536+Math.round(je(rn.g*255,0,255))*256+Math.round(je(rn.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=oe.workingColorSpace){oe.fromWorkingColorSpace(rn.copy(this),n);let i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=oe.workingColorSpace){return oe.fromWorkingColorSpace(rn.copy(this),n),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=ve){oe.fromWorkingColorSpace(rn.copy(this),t);let n=rn.r,i=rn.g,s=rn.b;return t!==ve?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(os),this.setHSL(os.h+t,os.s+n,os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(os),t.getHSL(Ha);let i=Po(os.h,Ha.h,n),s=Po(os.s,Ha.s,n),r=Po(os.l,Ha.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ft;Ft.NAMES=Pm;var ev=0,Ws=class extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Tr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fh&&(i.blendSrc=this.blendSrc),this.blendDst!==Oh&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(n){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},oi=class extends Ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new C,Va=new nt,Hn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=yp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(t),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ze.fromBufferAttribute(this,n),ze.applyMatrix3(t),this.setXYZ(n,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ze.fromBufferAttribute(this,n),ze.applyMatrix4(t),this.setXYZ(n,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ze.fromBufferAttribute(this,n),ze.applyNormalMatrix(t),this.setXYZ(n,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ze.fromBufferAttribute(this,n),ze.transformDirection(t),this.setXYZ(n,ze.x,ze.y,ze.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=yr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=un(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=yr(n,this.array)),n}setX(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=yr(n,this.array)),n}setY(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=yr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=yr(n,this.array)),n}setW(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yp&&(t.usage=this.usage),t}};var xc=class extends Hn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var vc=class extends Hn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var we=class extends Hn{constructor(t,n,i){super(new Float32Array(t),n,i)}};var nv=0,Bn=new Ie,bh=new an,fr=new C,wn=new Gs,Ao=new Gs,Ke=new C,Rn=class e extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cm(t)?vc:xc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,n,i){return Bn.makeTranslation(t,n,i),this.applyMatrix4(Bn),this}scale(t,n,i){return Bn.makeScale(t,n,i),this.applyMatrix4(Bn),this}lookAt(t){return bh.lookAt(t),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new we(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(wn.min,Ao.min),wn.expandByPoint(Ke),Ke.addVectors(wn.max,Ao.max),wn.expandByPoint(Ke)):(wn.expandByPoint(Ao.min),wn.expandByPoint(Ao.max))}wn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ke));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ke.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(t,l),Ke.add(fr)),s=Math.max(s,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new C,h[T]=new C;let u=new C,d=new C,p=new C,g=new nt,x=new nt,m=new nt,f=new C,M=new C;function _(T,N,$){u.fromArray(s,T*3),d.fromArray(s,N*3),p.fromArray(s,$*3),g.fromArray(o,T*2),x.fromArray(o,N*2),m.fromArray(o,$*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let ot=1/(x.x*m.y-m.x*x.y);isFinite(ot)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ot),M.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(ot),l[T].add(f),l[N].add(f),l[$].add(f),h[T].add(M),h[N].add(M),h[$].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,N=E.length;T<N;++T){let $=E[T],ot=$.start,I=$.count;for(let F=ot,V=ot+I;F<V;F+=3)_(i[F+0],i[F+1],i[F+2])}let L=new C,w=new C,A=new C,k=new C;function y(T){A.fromArray(r,T*3),k.copy(A);let N=l[T];L.copy(N),L.sub(A.multiplyScalar(A.dot(N))).normalize(),w.crossVectors(k,N);let ot=w.dot(h[T])<0?-1:1;c[T*4]=L.x,c[T*4+1]=L.y,c[T*4+2]=L.z,c[T*4+3]=ot}for(let T=0,N=E.length;T<N;++T){let $=E[T],ot=$.start,I=$.count;for(let F=ot,V=ot+I;F<V;F+=3)y(i[F+0]),y(i[F+1]),y(i[F+2])}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Hn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);n.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,i);c.push(p)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(n));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(n))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dp=new Ie,Ns=new gc,Ga=new Bo,Np=new C,pr=new C,mr=new C,gr=new C,Eh=new C,Wa=new C,Xa=new nt,qa=new nt,Ya=new nt,Fp=new C,Op=new C,Bp=new C,$a=new C,Za=new C,Kt=class extends an{constructor(t=new Rn,n=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Eh.fromBufferAttribute(u,t),o?Wa.addScaledVector(Eh,h):Wa.addScaledVector(Eh.sub(n),h))}n.add(Wa)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ns.copy(t.ray).recast(t.near),!(Ga.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Ga,Np)===null||Ns.origin.distanceToSquared(Np)>(t.far-t.near)**2))&&(Dp.copy(r).invert(),Ns.copy(t.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ns)))}_computeIntersections(t,n,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,L=_;E<L;E+=3){let w=a.getX(E),A=a.getX(E+1),k=a.getX(E+2);s=Ja(this,f,t,i,l,h,u,w,A,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);s=Ja(this,o,t,i,l,h,u,M,_,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,L=_;E<L;E+=3){let w=E,A=E+1,k=E+2;s=Ja(this,f,t,i,l,h,u,w,A,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=m,_=m+1,E=m+2;s=Ja(this,o,t,i,l,h,u,M,_,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function iv(e,t,n,i,s,r,o,a){let c;if(t.side===on?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===us,a),c===null)return null;Za.copy(a),Za.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Za);return l<n.near||l>n.far?null:{distance:l,point:Za.clone(),object:e}}function Ja(e,t,n,i,s,r,o,a,c,l){e.getVertexPosition(a,pr),e.getVertexPosition(c,mr),e.getVertexPosition(l,gr);let h=iv(e,t,n,i,pr,mr,gr,$a);if(h){s&&(Xa.fromBufferAttribute(s,a),qa.fromBufferAttribute(s,c),Ya.fromBufferAttribute(s,l),h.uv=Mr.getInterpolation($a,pr,mr,gr,Xa,qa,Ya,new nt)),r&&(Xa.fromBufferAttribute(r,a),qa.fromBufferAttribute(r,c),Ya.fromBufferAttribute(r,l),h.uv1=Mr.getInterpolation($a,pr,mr,gr,Xa,qa,Ya,new nt),h.uv2=h.uv1),o&&(Fp.fromBufferAttribute(o,a),Op.fromBufferAttribute(o,c),Bp.fromBufferAttribute(o,l),h.normal=Mr.getInterpolation($a,pr,mr,gr,Fp,Op,Bp,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new C,materialIndex:0};Mr.getNormal(pr,mr,gr,u.normal),h.face=u}return h}var ai=class e extends Rn{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,n,t,o,r,0),g("z","y","x",1,-1,i,n,-t,o,r,1),g("x","z","y",1,1,t,i,n,s,o,2),g("x","z","y",1,-1,t,i,-n,s,o,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function g(x,m,f,M,_,E,L,w,A,k,y){let T=E/A,N=L/k,$=E/2,ot=L/2,I=w/2,F=A+1,V=k+1,Y=0,q=0,G=new C;for(let Q=0;Q<V;Q++){let tt=Q*N-ot;for(let ft=0;ft<F;ft++){let H=ft*T-$;G[x]=H*M,G[m]=tt*_,G[f]=I,l.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[f]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(ft/A),u.push(1-Q/k),Y+=1}}for(let Q=0;Q<k;Q++)for(let tt=0;tt<A;tt++){let ft=d+tt+F*Q,H=d+tt+F*(Q+1),J=d+(tt+1)+F*(Q+1),pt=d+(tt+1)+F*Q;c.push(ft,H,pt),c.push(H,J,pt),q+=6}a.addGroup(p,q,y),p+=q,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ur(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function dn(e){let t={};for(let n=0;n<e.length;n++){let i=Ur(e[n]);for(let s in i)t[s]=i[s]}return t}function sv(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Lm(e){return e.getRenderTarget()===null?e.outputColorSpace:oe.workingColorSpace}var Vr={clone:Ur,merge:dn},rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rv,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=sv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},yc=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=zi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=class extends yc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Co*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},_r=-90,xr=1,Xh=class extends an{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(_r,xr,t,n);s.layers=this.layers,this.add(s);let r=new tn(_r,xr,t,n);r.layers=this.layers,this.add(r);let o=new tn(_r,xr,t,n);o.layers=this.layers,this.add(o);let a=new tn(_r,xr,t,n);a.layers=this.layers,this.add(a);let c=new tn(_r,xr,t,n);c.layers=this.layers,this.add(c);let l=new tn(_r,xr,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(let l of n)this.remove(l);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,o),t.setRenderTarget(i,2,s),t.render(n,a),t.setRenderTarget(i,3,s),t.render(n,c),t.setRenderTarget(i,4,s),t.render(n,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Mc=class extends An{constructor(t,n,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],n=n!==void 0?n:Rr,super(t,n,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qh=class extends pn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Lo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vs?ve:zn),this.texture=new Mc(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Si});r.uniforms.tEquirect.value=n;let o=new Kt(s,r),a=n.minFilter;return n.minFilter===Fo&&(n.minFilter=kn),new Xh(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}},Th=new C,av=new C,cv=new Zt,ki=class{constructor(t=new C(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Th.subVectors(i,n).cross(av.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Th),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||cv.getNormalMatrix(t),s=this.coplanarPoint(Th).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new Bo,Ka=new C,zo=class{constructor(t=new ki,n=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=zi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],M=s[13],_=s[14],E=s[15];if(i[0].setComponents(c-r,d-l,m-p,E-f).normalize(),i[1].setComponents(c+r,d+l,m+p,E+f).normalize(),i[2].setComponents(c+o,d+h,m+g,E+M).normalize(),i[3].setComponents(c-o,d-h,m-g,E-M).normalize(),i[4].setComponents(c-a,d-u,m-x,E-_).normalize(),n===zi)i[5].setComponents(c+a,d+u,m+x,E+_).normalize();else if(n===uc)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ka.x=s.normal.x>0?t.max.x:t.min.x,Ka.y=s.normal.y>0?t.max.y:t.min.y,Ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Im(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function lv(e,t){let n=t.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=e.createBuffer();e.bindBuffer(h,g),e.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=e.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)x=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=e.SHORT;else if(u instanceof Uint32Array)x=e.UNSIGNED_INT;else if(u instanceof Int32Array)x=e.INT;else if(u instanceof Int8Array)x=e.BYTE;else if(u instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(e.bindBuffer(u,l),p.count===-1&&g.length===0&&e.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];n?e.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):e.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(n?e.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):e.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(e.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Dr=class e extends Rn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=n/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let _=0;_<l;_++){let E=_*u-r;g.push(E,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){let _=M+l*f,E=M+l*(f+1),L=M+1+l*(f+1),w=M+1+l*f;p.push(_,E,w),p.push(E,L,w)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uv=`#ifdef USE_ALPHAHASH
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
#endif`,dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gv=`#ifdef USE_AOMAP
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
#endif`,_v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xv=`#ifdef USE_BATCHING
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
#endif`,vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ev=`#ifdef USE_BUMPMAP
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
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Uv=`#define PI 3.141592653589793
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
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nv=`vec3 transformedNormal = objectNormal;
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
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`
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
}`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
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
}`,jv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ny=`uniform bool receiveShadow;
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
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
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
#endif`,ly=`struct PhysicalMaterial {
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
}`,hy=`
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,My=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
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
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$y=`float getShadowMask() {
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
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i2=`#ifdef USE_TRANSMISSION
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
#endif`,s2=`#ifdef USE_TRANSMISSION
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
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h2=`uniform sampler2D t2D;
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
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`#include <common>
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
}`,g2=`#if DEPTH_PACKING == 3200
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
}`,_2=`#define DISTANCE
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
}`,x2=`#define DISTANCE
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
}`,v2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`uniform float scale;
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
}`,S2=`uniform vec3 diffuse;
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
}`,b2=`#include <common>
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
}`,E2=`uniform vec3 diffuse;
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
}`,T2=`#define LAMBERT
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
}`,w2=`#define LAMBERT
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
}`,A2=`#define MATCAP
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
}`,R2=`#define MATCAP
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
}`,C2=`#define NORMAL
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
}`,P2=`#define NORMAL
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
}`,L2=`#define PHONG
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
}`,I2=`#define PHONG
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
}`,U2=`#define STANDARD
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
}`,D2=`#define STANDARD
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
}`,N2=`#define TOON
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
}`,F2=`#define TOON
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
}`,O2=`uniform float size;
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
}`,B2=`uniform vec3 diffuse;
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
}`,k2=`#include <common>
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
}`,z2=`uniform vec3 color;
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
}`,H2=`uniform float rotation;
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
}`,V2=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:hv,alphahash_pars_fragment:uv,alphamap_fragment:dv,alphamap_pars_fragment:fv,alphatest_fragment:pv,alphatest_pars_fragment:mv,aomap_fragment:gv,aomap_pars_fragment:_v,batching_pars_vertex:xv,batching_vertex:vv,begin_vertex:yv,beginnormal_vertex:Mv,bsdfs:Sv,iridescence_fragment:bv,bumpmap_pars_fragment:Ev,clipping_planes_fragment:Tv,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Av,clipping_planes_vertex:Rv,color_fragment:Cv,color_pars_fragment:Pv,color_pars_vertex:Lv,color_vertex:Iv,common:Uv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Nv,displacementmap_pars_vertex:Fv,displacementmap_vertex:Ov,emissivemap_fragment:Bv,emissivemap_pars_fragment:kv,colorspace_fragment:zv,colorspace_pars_fragment:Hv,envmap_fragment:Vv,envmap_common_pars_fragment:Gv,envmap_pars_fragment:Wv,envmap_pars_vertex:Xv,envmap_physical_pars_fragment:iy,envmap_vertex:qv,fog_vertex:Yv,fog_pars_vertex:$v,fog_fragment:Zv,fog_pars_fragment:Jv,gradientmap_pars_fragment:Kv,lightmap_fragment:jv,lightmap_pars_fragment:Qv,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ey,lights_pars_begin:ny,lights_toon_fragment:sy,lights_toon_pars_fragment:ry,lights_phong_fragment:oy,lights_phong_pars_fragment:ay,lights_physical_fragment:cy,lights_physical_pars_fragment:ly,lights_fragment_begin:hy,lights_fragment_maps:uy,lights_fragment_end:dy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:_y,map_pars_fragment:xy,map_particle_fragment:vy,map_particle_pars_fragment:yy,metalnessmap_fragment:My,metalnessmap_pars_fragment:Sy,morphcolor_vertex:by,morphnormal_vertex:Ey,morphtarget_pars_vertex:Ty,morphtarget_vertex:wy,normal_fragment_begin:Ay,normal_fragment_maps:Ry,normal_pars_fragment:Cy,normal_pars_vertex:Py,normal_vertex:Ly,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:Fy,opaque_fragment:Oy,packing:By,premultiplied_alpha_fragment:ky,project_vertex:zy,dithering_fragment:Hy,dithering_pars_fragment:Vy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:qy,shadowmap_vertex:Yy,shadowmask_pars_fragment:$y,skinbase_vertex:Zy,skinning_pars_vertex:Jy,skinning_vertex:Ky,skinnormal_vertex:jy,specularmap_fragment:Qy,specularmap_pars_fragment:t2,tonemapping_fragment:e2,tonemapping_pars_fragment:n2,transmission_fragment:i2,transmission_pars_fragment:s2,uv_pars_fragment:r2,uv_pars_vertex:o2,uv_vertex:a2,worldpos_vertex:c2,background_vert:l2,background_frag:h2,backgroundCube_vert:u2,backgroundCube_frag:d2,cube_vert:f2,cube_frag:p2,depth_vert:m2,depth_frag:g2,distanceRGBA_vert:_2,distanceRGBA_frag:x2,equirect_vert:v2,equirect_frag:y2,linedashed_vert:M2,linedashed_frag:S2,meshbasic_vert:b2,meshbasic_frag:E2,meshlambert_vert:T2,meshlambert_frag:w2,meshmatcap_vert:A2,meshmatcap_frag:R2,meshnormal_vert:C2,meshnormal_frag:P2,meshphong_vert:L2,meshphong_frag:I2,meshphysical_vert:U2,meshphysical_frag:D2,meshtoon_vert:N2,meshtoon_frag:F2,points_vert:O2,points_frag:B2,shadow_vert:k2,shadow_frag:z2,sprite_vert:H2,sprite_frag:V2},lt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},yi={basic:{uniforms:dn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:dn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:dn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:dn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:dn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:dn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:dn([lt.points,lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:dn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:dn([lt.common,lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:dn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:dn([lt.sprite,lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:dn([lt.common,lt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:dn([lt.lights,lt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};yi.physical={uniforms:dn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var ja={r:0,b:0,g:0};function G2(e,t,n,i,s,r,o){let a=new Ft(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let M=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?n:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),M=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||M)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===kc)?(h===void 0&&(h=new Kt(new ai(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ur(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=oe.getTransfer(_.colorSpace)!==ge,(u!==_||d!==_.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=e.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Kt(new Dr(2,2),new en({name:"BackgroundMaterial",uniforms:Ur(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=oe.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,f){m.getRGB(ja,Lm(e)),i.buffers.color.setClear(ja.r,ja.g,ja.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function W2(e,t,n,i){let s=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(I,F,V,Y,q){let G=!1;if(o){let Q=x(Y,V,F);l!==Q&&(l=Q,p(l.object)),G=f(I,Y,V,q),G&&M(I,Y,V,q)}else{let Q=F.wireframe===!0;(l.geometry!==Y.id||l.program!==V.id||l.wireframe!==Q)&&(l.geometry=Y.id,l.program=V.id,l.wireframe=Q,G=!0)}q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,k(I,F,V,Y),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function d(){return i.isWebGL2?e.createVertexArray():r.createVertexArrayOES()}function p(I){return i.isWebGL2?e.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?e.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,F,V){let Y=V.wireframe===!0,q=a[I.id];q===void 0&&(q={},a[I.id]=q);let G=q[F.id];G===void 0&&(G={},q[F.id]=G);let Q=G[Y];return Q===void 0&&(Q=m(d()),G[Y]=Q),Q}function m(I){let F=[],V=[],Y=[];for(let q=0;q<s;q++)F[q]=0,V[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:Y,object:I,attributes:{},index:null}}function f(I,F,V,Y){let q=l.attributes,G=F.attributes,Q=0,tt=V.getAttributes();for(let ft in tt)if(tt[ft].location>=0){let J=q[ft],pt=G[ft];if(pt===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(pt=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(pt=I.instanceColor)),J===void 0||J.attribute!==pt||pt&&J.data!==pt.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Y}function M(I,F,V,Y){let q={},G=F.attributes,Q=0,tt=V.getAttributes();for(let ft in tt)if(tt[ft].location>=0){let J=G[ft];J===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let pt={};pt.attribute=J,J&&J.data&&(pt.data=J.data),q[ft]=pt,Q++}l.attributes=q,l.attributesNum=Q,l.index=Y}function _(){let I=l.newAttributes;for(let F=0,V=I.length;F<V;F++)I[F]=0}function E(I){L(I,0)}function L(I,F){let V=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;V[I]=1,Y[I]===0&&(e.enableVertexAttribArray(I),Y[I]=1),q[I]!==F&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),q[I]=F)}function w(){let I=l.newAttributes,F=l.enabledAttributes;for(let V=0,Y=F.length;V<Y;V++)F[V]!==I[V]&&(e.disableVertexAttribArray(V),F[V]=0)}function A(I,F,V,Y,q,G,Q){Q===!0?e.vertexAttribIPointer(I,F,V,q,G):e.vertexAttribPointer(I,F,V,Y,q,G)}function k(I,F,V,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let q=Y.attributes,G=V.getAttributes(),Q=F.defaultAttributeValues;for(let tt in G){let ft=G[tt];if(ft.location>=0){let H=q[tt];if(H===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){let J=H.normalized,pt=H.itemSize,Tt=n.get(H);if(Tt===void 0)continue;let xt=Tt.buffer,Dt=Tt.type,zt=Tt.bytesPerElement,wt=i.isWebGL2===!0&&(Dt===e.INT||Dt===e.UNSIGNED_INT||H.gpuType===vm);if(H.isInterleavedBufferAttribute){let Bt=H.data,R=Bt.stride,at=H.offset;if(Bt.isInstancedInterleavedBuffer){for(let X=0;X<ft.locationSize;X++)L(ft.location+X,Bt.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let X=0;X<ft.locationSize;X++)E(ft.location+X);e.bindBuffer(e.ARRAY_BUFFER,xt);for(let X=0;X<ft.locationSize;X++)A(ft.location+X,pt/ft.locationSize,Dt,J,R*zt,(at+pt/ft.locationSize*X)*zt,wt)}else{if(H.isInstancedBufferAttribute){for(let Bt=0;Bt<ft.locationSize;Bt++)L(ft.location+Bt,H.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Bt=0;Bt<ft.locationSize;Bt++)E(ft.location+Bt);e.bindBuffer(e.ARRAY_BUFFER,xt);for(let Bt=0;Bt<ft.locationSize;Bt++)A(ft.location+Bt,pt/ft.locationSize,Dt,J,pt*zt,pt/ft.locationSize*Bt*zt,wt)}}else if(Q!==void 0){let J=Q[tt];if(J!==void 0)switch(J.length){case 2:e.vertexAttrib2fv(ft.location,J);break;case 3:e.vertexAttrib3fv(ft.location,J);break;case 4:e.vertexAttrib4fv(ft.location,J);break;default:e.vertexAttrib1fv(ft.location,J)}}}}w()}function y(){$();for(let I in a){let F=a[I];for(let V in F){let Y=F[V];for(let q in Y)g(Y[q].object),delete Y[q];delete F[V]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;let F=a[I.id];for(let V in F){let Y=F[V];for(let q in Y)g(Y[q].object),delete Y[q];delete F[V]}delete a[I.id]}function N(I){for(let F in a){let V=a[F];if(V[I.id]===void 0)continue;let Y=V[I.id];for(let q in Y)g(Y[q].object),delete Y[q];delete V[I.id]}}function $(){ot(),h=!0,l!==c&&(l=c,p(l.object))}function ot(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:$,resetDefaultState:ot,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:E,disableUnusedAttributes:w}}function X2(e,t,n,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){e.drawArrays(r,h,u),n.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=e,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),n.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];n.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function q2(e,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",a=n.precision!==void 0?n.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),x=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),f=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,E=o||t.has("OES_texture_float"),L=_&&E,w=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:w}}function Y2(e){let t=this,n=null,i=0,s=!1,r=!1,o=new ki,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=e.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,_=M*4,E=f.clippingState||null;c.value=E,E=h(g,d,_,p);for(let L=0;L!==_;++L)E[L]=n[L];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,E=p;_!==x;++_,E+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function $2(e){let t=new WeakMap;function n(o,a){return a===Bh?o.mapping=Rr:a===kh&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bh||a===kh)if(t.has(o)){let c=t.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new qh(c.height/2);return l.fromEquirectangularTexture(e,o),t.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Nr=class extends yc{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Sr=4,kp=[.125,.215,.35,.446,.526,.582],ks=20,wh=new Nr,zp=new Ft,Ah=null,Rh=0,Ch=0,Os=(1+Math.sqrt(5))/2,vr=1/Os,Hp=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Os,vr),new C(0,Os,-vr),new C(vr,0,Os),new C(-vr,0,Os),new C(Os,vr,0),new C(-Os,vr,0)],Fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Rh,Ch),t.scissorTest=!1,Qa(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Rr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ri,format:si,colorSpace:Hi,depthBuffer:!1},s=Vp(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(t,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z2(r)),this._blurMaterial=J2(r,t,n)}return s}_compileMaterial(t){let n=new Kt(this._lodPlanes[0],t);this._renderer.compile(n,wh)}_sceneToCubeUV(t,n,i,s){let a=new tn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zp),h.toneMapping=ls,h.autoClear=!1;let p=new oi({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Kt(new ai,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(zp),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let _=this._cubeSize;Qa(s,M*_,f>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Rr||t.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Qa(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,wh)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hp[(s-1)%Hp.length];this._blur(t,s-1,s,r,o)}n.autoClear=i}_blur(t,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ks-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ks;m>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);let f=[],M=0;for(let A=0;A<ks;++A){let k=A/x,y=Math.exp(-k*k/2);f.push(y),A===0?M+=y:A<m&&(M+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let E=this._sizeLods[s],L=3*E*(s>_-Sr?s-_+Sr:0),w=4*(this._cubeSize-E);Qa(n,L,w,3*E,2*E),c.setRenderTarget(n),c.render(u,wh)}};function Z2(e){let t=[],n=[],i=[],s=e,r=e-Sr+1+kp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);n.push(a);let c=1/a;o>e-Sr?c=kp[o-e+Sr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),_=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,k=w>2?0:-1,y=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];M.set(y,x*g*w),_.set(d,m*g*w);let T=[w,w,w,w,w,w];E.set(T,f*g*w)}let L=new Rn;L.setAttribute("position",new Hn(M,x)),L.setAttribute("uv",new Hn(_,m)),L.setAttribute("faceIndex",new Hn(E,f)),t.push(L),s>Sr&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Vp(e,t,n){let i=new pn(e,t,n);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function J2(e,t,n){let i=new Float32Array(ks),s=new C(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gp(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Wp(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}function K2(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Bh||c===kh,h=c===Rr||c===Cr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return n===null&&(n=new Fr(e)),u=l?n.fromEquirectangular(a,u):n.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){n===null&&(n=new Fr(e));let d=l?n.fromEquirectangular(a):n.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function j2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Q2(e,t,n,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],e.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],e.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let _=0,E=M.length;_<E;_+=3){let L=M[_+0],w=M[_+1],A=M[_+2];d.push(L,w,w,A,A,L)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,E=M.length/3-1;_<E;_+=3){let L=_+0,w=_+1,A=_+2;d.push(L,w,w,A,A,L)}}else return;let m=new(Cm(d)?vc:xc)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tM(e,t,n,i){let s=i.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){e.drawElements(r,g,a,p*c),n.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(s)m=e,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*c,x),n.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let f=0;for(let M=0;M<x;M++)f+=g[M];n.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function eM(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function nM(e,t){return e[0]-t[0]}function iM(e,t){return Math.abs(t[1])-Math.abs(e[1])}function sM(e,t,n){let i={},s=new Float32Array(8),r=new WeakMap,o=new ye,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],k=0;M===!0&&(k=1),_===!0&&(k=2),E===!0&&(k=3);let y=h.attributes.position.count*k,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let N=new Float32Array(y*T*4*g),$=new mc(N,y,T,g);$.type=cs,$.needsUpdate=!0;let ot=k*4;for(let F=0;F<g;F++){let V=L[F],Y=w[F],q=A[F],G=y*T*4*F;for(let Q=0;Q<V.count;Q++){let tt=Q*ot;M===!0&&(o.fromBufferAttribute(V,Q),N[G+tt+0]=o.x,N[G+tt+1]=o.y,N[G+tt+2]=o.z,N[G+tt+3]=0),_===!0&&(o.fromBufferAttribute(Y,Q),N[G+tt+4]=o.x,N[G+tt+5]=o.y,N[G+tt+6]=o.z,N[G+tt+7]=0),E===!0&&(o.fromBufferAttribute(q,Q),N[G+tt+8]=o.x,N[G+tt+9]=o.y,N[G+tt+10]=o.z,N[G+tt+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:$,size:new nt(y,T)},r.set(h,x),h.addEventListener("dispose",I)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(e,"morphTargetBaseInfluence",f),u.getUniforms().setValue(e,"morphTargetInfluences",d),u.getUniforms().setValue(e,"morphTargetsTexture",x.texture,n),u.getUniforms().setValue(e,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<p;_++){let E=g[_];E[0]=_,E[1]=d[_]}g.sort(iM);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(nM);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let E=a[_],L=E[0],w=E[1];L!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+_)!==x[L]&&h.setAttribute("morphTarget"+_,x[L]),m&&h.getAttribute("morphNormal"+_)!==m[L]&&h.setAttribute("morphNormal"+_,m[L]),s[_]=w,f+=w):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(e,"morphTargetBaseInfluence",M),u.getUniforms().setValue(e,"morphTargetInfluences",s)}}return{update:c}}function rM(e,t,n,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}var Sc=class extends An{constructor(t,n,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Hs,h!==Hs&&h!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Hs&&(i=as),i===void 0&&h===Lr&&(i=zs),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Um=new An,Dm=new Sc(1,1);Dm.compareFunction=Rm;var Nm=new mc,Fm=new Wh,Om=new Mc,Xp=[],qp=[],Yp=new Float32Array(16),$p=new Float32Array(9),Zp=new Float32Array(4);function Gr(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Xp[s];if(r===void 0&&(r=new Float32Array(s),Xp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function We(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Xe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Hc(e,t){let n=qp[t];n===void 0&&(n=new Int32Array(t),qp[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function oM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function aM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2fv(this.addr,t),Xe(n,t)}}function cM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(We(n,t))return;e.uniform3fv(this.addr,t),Xe(n,t)}}function lM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4fv(this.addr,t),Xe(n,t)}}function hM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xe(n,t)}else{if(We(n,i))return;Zp.set(i),e.uniformMatrix2fv(this.addr,!1,Zp),Xe(n,i)}}function uM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xe(n,t)}else{if(We(n,i))return;$p.set(i),e.uniformMatrix3fv(this.addr,!1,$p),Xe(n,i)}}function dM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xe(n,t)}else{if(We(n,i))return;Yp.set(i),e.uniformMatrix4fv(this.addr,!1,Yp),Xe(n,i)}}function fM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function pM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2iv(this.addr,t),Xe(n,t)}}function mM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(We(n,t))return;e.uniform3iv(this.addr,t),Xe(n,t)}}function gM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4iv(this.addr,t),Xe(n,t)}}function _M(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function xM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2uiv(this.addr,t),Xe(n,t)}}function vM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(We(n,t))return;e.uniform3uiv(this.addr,t),Xe(n,t)}}function yM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4uiv(this.addr,t),Xe(n,t)}}function MM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r=this.type===e.SAMPLER_2D_SHADOW?Dm:Um;n.setTexture2D(t||r,s)}function SM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Fm,s)}function bM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Om,s)}function EM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Nm,s)}function TM(e){switch(e){case 5126:return oM;case 35664:return aM;case 35665:return cM;case 35666:return lM;case 35674:return hM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return xM;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return EM}}function wM(e,t){e.uniform1fv(this.addr,t)}function AM(e,t){let n=Gr(t,this.size,2);e.uniform2fv(this.addr,n)}function RM(e,t){let n=Gr(t,this.size,3);e.uniform3fv(this.addr,n)}function CM(e,t){let n=Gr(t,this.size,4);e.uniform4fv(this.addr,n)}function PM(e,t){let n=Gr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function LM(e,t){let n=Gr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function IM(e,t){let n=Gr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function UM(e,t){e.uniform1iv(this.addr,t)}function DM(e,t){e.uniform2iv(this.addr,t)}function NM(e,t){e.uniform3iv(this.addr,t)}function FM(e,t){e.uniform4iv(this.addr,t)}function OM(e,t){e.uniform1uiv(this.addr,t)}function BM(e,t){e.uniform2uiv(this.addr,t)}function kM(e,t){e.uniform3uiv(this.addr,t)}function zM(e,t){e.uniform4uiv(this.addr,t)}function HM(e,t,n){let i=this.cache,s=t.length,r=Hc(n,s);We(i,r)||(e.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)n.setTexture2D(t[o]||Um,r[o])}function VM(e,t,n){let i=this.cache,s=t.length,r=Hc(n,s);We(i,r)||(e.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||Fm,r[o])}function GM(e,t,n){let i=this.cache,s=t.length,r=Hc(n,s);We(i,r)||(e.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||Om,r[o])}function WM(e,t,n){let i=this.cache,s=t.length,r=Hc(n,s);We(i,r)||(e.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||Nm,r[o])}function XM(e){switch(e){case 5126:return wM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return DM;case 35668:case 35672:return NM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return BM;case 36295:return kM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}var Yh=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TM(n.type)}},$h=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XM(n.type)}},Zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,n[a.id],i)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function Jp(e,t){e.seq.push(t),e.map[t.id]=t}function qM(e,t,n){let i=e.name,s=i.length;for(Ph.lastIndex=0;;){let r=Ph.exec(i),o=Ph.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jp(n,l===void 0?new Yh(a,e,t):new $h(a,e,t));break}else{let u=n.map[a];u===void 0&&(u=new Zh(a),Jp(n,u)),n=u}}}var Ar=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(n,s),o=t.getUniformLocation(n,r.name);qM(r,o,this)}}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in n&&i.push(o)}return i}};function Kp(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var YM=37297,$M=0;function ZM(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function JM(e){let t=oe.getPrimaries(oe.workingColorSpace),n=oe.getPrimaries(e),i;switch(t===n?i="":t===hc&&n===lc?i="LinearDisplayP3ToLinearSRGB":t===lc&&n===hc&&(i="LinearSRGBToLinearDisplayP3"),e){case Hi:case zc:return[i,"LinearTransferOETF"];case ve:case Au:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function jp(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+ZM(e.getShaderSource(t),o)}else return s}function KM(e,t){let n=JM(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function jM(e,t){let n;switch(t){case rx:n="Linear";break;case Tu:n="Reinhard";break;case ox:n="OptimizedCineon";break;case ax:n="ACESFilmic";break;case lx:n="AgX";break;case cx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function QM(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function tS(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(br).join(`
`)}function eS(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function nS(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function br(e){return e!==""}function Qp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(e){return e.replace(iS,rS)}var sS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rS(e,t){let n=Xt[t];if(n===void 0){let i=sS.get(t);if(i!==void 0)n=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jh(n)}var oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(e){return e.replace(oS,aS)}function aS(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nm(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cS(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===gm?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===U1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function lS(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Rr:case Cr:t="ENVMAP_TYPE_CUBE";break;case kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hS(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Cr&&(t="ENVMAP_MODE_REFRACTION"),t}function uS(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case _m:t="ENVMAP_BLENDING_MULTIPLY";break;case ix:t="ENVMAP_BLENDING_MIX";break;case sx:t="ENVMAP_BLENDING_ADD";break}return t}function dS(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function fS(e,t,n,i){let s=e.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,c=cS(n),l=lS(n),h=hS(n),u=uS(n),d=dS(n),p=n.isWebGL2?"":QM(n),g=tS(n),x=eS(r),m=s.createProgram(),f,M,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(br).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(br).join(`
`),M.length>0&&(M+=`
`)):(f=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),M=[p,nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ls?"#define TONE_MAPPING":"",n.toneMapping!==ls?Xt.tonemapping_pars_fragment:"",n.toneMapping!==ls?jM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,KM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(br).join(`
`)),o=Jh(o),o=Qp(o,n),o=tm(o,n),a=Jh(a),a=Qp(a,n),a=tm(a,n),o=em(o),a=em(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let E=_+f+o,L=_+M+a,w=Kp(s,s.VERTEX_SHADER,E),A=Kp(s,s.FRAGMENT_SHADER,L);s.attachShader(m,w),s.attachShader(m,A),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k($){if(e.debug.checkShaderErrors){let ot=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(w).trim(),F=s.getShaderInfoLog(A).trim(),V=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,m,w,A);else{let q=jp(s,w,"vertex"),G=jp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+q+`
`+G)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(I===""||F==="")&&(Y=!1);Y&&($.diagnostics={runnable:V,programLog:ot,vertexShader:{log:I,prefix:f},fragmentShader:{log:F,prefix:M}})}s.deleteShader(w),s.deleteShader(A),y=new Ar(s,m),T=nS(s,m)}let y;this.getUniforms=function(){return y===void 0&&k(this),y};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,YM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$M++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}var pS=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new jh(t),n.set(t,i)),i}},jh=class{constructor(t){this.id=pS++,this.code=t,this.usedTimes=0}};function mS(e,t,n,i,s,r,o){let a=new ko,c=new Kh,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,T,N,$,ot){let I=$.fog,F=ot.geometry,V=y.isMeshStandardMaterial?$.environment:null,Y=(y.isMeshStandardMaterial?n:t).get(y.envMap||V),q=Y&&Y.mapping===kc?Y.image.height:null,G=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=Q!==void 0?Q.length:0,ft=0;F.morphAttributes.position!==void 0&&(ft=1),F.morphAttributes.normal!==void 0&&(ft=2),F.morphAttributes.color!==void 0&&(ft=3);let H,J,pt,Tt;if(G){let ln=yi[G];H=ln.vertexShader,J=ln.fragmentShader}else H=y.vertexShader,J=y.fragmentShader,c.update(y),pt=c.getVertexShaderID(y),Tt=c.getFragmentShaderID(y);let xt=e.getRenderTarget(),Dt=ot.isInstancedMesh===!0,zt=ot.isBatchedMesh===!0,wt=!!y.map,Bt=!!y.matcap,R=!!Y,at=!!y.aoMap,X=!!y.lightMap,st=!!y.bumpMap,W=!!y.normalMap,Rt=!!y.displacementMap,mt=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,D=y.anisotropy>0,et=y.clearcoat>0,K=y.iridescence>0,Z=y.sheen>0,bt=y.transmission>0,ht=D&&!!y.anisotropyMap,vt=et&&!!y.clearcoatMap,Lt=et&&!!y.clearcoatNormalMap,Vt=et&&!!y.clearcoatRoughnessMap,j=K&&!!y.iridescenceMap,ne=K&&!!y.iridescenceThicknessMap,Jt=Z&&!!y.sheenColorMap,kt=Z&&!!y.sheenRoughnessMap,Pt=!!y.specularMap,yt=!!y.specularColorMap,Wt=!!y.specularIntensityMap,ie=bt&&!!y.transmissionMap,Pe=bt&&!!y.thicknessMap,Yt=!!y.gradientMap,ct=!!y.alphaMap,P=y.alphaTest>0,ut=!!y.alphaHash,dt=!!y.extensions,Nt=!!F.attributes.uv1,It=!!F.attributes.uv2,he=!!F.attributes.uv3,ue=ls;return y.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ue=e.toneMapping),{isWebGL2:h,shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:J,defines:y.defines,customVertexShaderID:pt,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:zt,instancing:Dt,instancingColor:Dt&&ot.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xt===null?e.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Hi,map:wt,matcap:Bt,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:q,aoMap:at,lightMap:X,bumpMap:st,normalMap:W,displacementMap:d&&Rt,emissiveMap:mt,normalMapObjectSpace:W&&y.normalMapType===Mx,normalMapTangentSpace:W&&y.normalMapType===Am,metalnessMap:S,roughnessMap:v,anisotropy:D,anisotropyMap:ht,clearcoat:et,clearcoatMap:vt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,iridescence:K,iridescenceMap:j,iridescenceThicknessMap:ne,sheen:Z,sheenColorMap:Jt,sheenRoughnessMap:kt,specularMap:Pt,specularColorMap:yt,specularIntensityMap:Wt,transmission:bt,transmissionMap:ie,thicknessMap:Pe,gradientMap:Yt,opaque:y.transparent===!1&&y.blending===Tr,alphaMap:ct,alphaTest:P,alphaHash:ut,combine:y.combine,mapUv:wt&&x(y.map.channel),aoMapUv:at&&x(y.aoMap.channel),lightMapUv:X&&x(y.lightMap.channel),bumpMapUv:st&&x(y.bumpMap.channel),normalMapUv:W&&x(y.normalMap.channel),displacementMapUv:Rt&&x(y.displacementMap.channel),emissiveMapUv:mt&&x(y.emissiveMap.channel),metalnessMapUv:S&&x(y.metalnessMap.channel),roughnessMapUv:v&&x(y.roughnessMap.channel),anisotropyMapUv:ht&&x(y.anisotropyMap.channel),clearcoatMapUv:vt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(y.sheenRoughnessMap.channel),specularMapUv:Pt&&x(y.specularMap.channel),specularColorMapUv:yt&&x(y.specularColorMap.channel),specularIntensityMapUv:Wt&&x(y.specularIntensityMap.channel),transmissionMapUv:ie&&x(y.transmissionMap.channel),thicknessMapUv:Pe&&x(y.thicknessMap.channel),alphaMapUv:ct&&x(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(W||D),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:It,vertexUv3s:he,pointsUvs:ot.isPoints===!0&&!!F.attributes.uv&&(wt||ct),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ot.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ft,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:ue,useLegacyLights:e._useLegacyLights,decodeVideoTexture:wt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ni,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:dt&&y.extensions.derivatives===!0,extensionFragDepth:dt&&y.extensions.fragDepth===!0,extensionDrawBuffers:dt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(M(T,y),_(T,y),T.push(e.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function M(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){let T=g[y.type],N;if(T){let $=yi[T];N=Vr.clone($.uniforms)}else N=y.uniforms;return N}function L(y,T){let N;for(let $=0,ot=l.length;$<ot;$++){let I=l[$];if(I.cacheKey===T){N=I,++N.usedTimes;break}}return N===void 0&&(N=new fS(e,T,y,r),l.push(N)),N}function w(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function A(y){c.remove(y)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:k}}function gS(){let e=new WeakMap;function t(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function n(r){e.delete(r)}function i(r,o,a){e.get(r)[o]=a}function s(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function _S(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function im(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function sm(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(u,d,p,g,x,m){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},e[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function c(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function l(u,d){n.length>1&&n.sort(u||_S),i.length>1&&i.sort(d||im),s.length>1&&s.sort(d||im)}function h(){for(let u=t,d=e.length;u<d;u++){let p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function xS(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;return r===void 0?(o=new sm,e.set(i,[o])):s>=r.length?(o=new sm,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function vS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new C,color:new Ft};break;case"SpotLight":n={position:new C,direction:new C,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new C,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new C,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":n={color:new Ft,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=n,n}}}function yS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var MS=0;function SS(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function bS(e,t){let n=new vS,i=yS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new Ie,a=new Ie;function c(h,u){let d=0,p=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let x=0,m=0,f=0,M=0,_=0,E=0,L=0,w=0,A=0,k=0,y=0;h.sort(SS);let T=u===!0?Math.PI:1;for(let $=0,ot=h.length;$<ot;$++){let I=h[$],F=I.color,V=I.intensity,Y=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*V*T,p+=F.g*V*T,g+=F.b*V*T;else if(I.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(I.sh.coefficients[G],V);y++}else if(I.isDirectionalLight){let G=n.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){let Q=I.shadow,tt=i.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,s.directionalShadow[x]=tt,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=I.shadow.matrix,E++}s.directional[x]=G,x++}else if(I.isSpotLight){let G=n.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(F).multiplyScalar(V*T),G.distance=Y,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,s.spot[f]=G;let Q=I.shadow;if(I.map&&(s.spotLightMap[A]=I.map,A++,Q.updateMatrices(I),I.castShadow&&k++),s.spotLightMatrix[f]=Q.matrix,I.castShadow){let tt=i.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,s.spotShadow[f]=tt,s.spotShadowMap[f]=q,w++}f++}else if(I.isRectAreaLight){let G=n.get(I);G.color.copy(F).multiplyScalar(V),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=G,M++}else if(I.isPointLight){let G=n.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*T),G.distance=I.distance,G.decay=I.decay,I.castShadow){let Q=I.shadow,tt=i.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=I.shadow.matrix,L++}s.point[m]=G,m++}else if(I.isHemisphereLight){let G=n.get(I);G.skyColor.copy(I.color).multiplyScalar(V*T),G.groundColor.copy(I.groundColor).multiplyScalar(V*T),s.hemi[_]=G,_++}}M>0&&(t.isWebGL2?e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==M||N.hemiLength!==_||N.numDirectionalShadows!==E||N.numPointShadows!==L||N.numSpotShadows!==w||N.numSpotMaps!==A||N.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+A-k,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=y,N.directionalLength=x,N.pointLength=m,N.spotLength=f,N.rectAreaLength=M,N.hemiLength=_,N.numDirectionalShadows=E,N.numPointShadows=L,N.numSpotShadows=w,N.numSpotMaps=A,N.numLightProbes=y,s.version=MS++)}function l(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let E=h[M];if(E.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),d++}else if(E.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),g++}else if(E.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),a.identity(),o.copy(E.matrixWorld),o.premultiply(f),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function rm(e,t){let n=new bS(e,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){n.setup(i,u)}function l(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ES(e,t){let n=new WeakMap;function i(r,o=0){let a=n.get(r),c;return a===void 0?(c=new rm(e,t),n.set(r,[c])):o>=a.length?(c=new rm(e,t),a.push(c)):c=a[o],c}function s(){n=new WeakMap}return{get:i,dispose:s}}var Qh=class extends Ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tu=class extends Ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
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
}`;function AS(e,t,n){let i=new zo,s=new nt,r=new nt,o=new ye,a=new Qh({depthPacking:yx}),c=new tu,l={},h=n.maxTextureSize,u={[us]:on,[on]:us,[ni]:ni},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:TS,fragmentShader:wS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Rn;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gm;let f=this.type;this.render=function(w,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=e.getRenderTarget(),T=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),$=e.state;$.setBlending(Si),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let ot=f!==Bi&&this.type===Bi,I=f===Bi&&this.type!==Bi;for(let F=0,V=w.length;F<V;F++){let Y=w[F],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let G=q.getFrameExtents();if(s.multiply(G),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,q.mapSize.y=r.y)),q.map===null||ot===!0||I===!0){let tt=this.type!==Bi?{minFilter:fn,magFilter:fn}:{};q.map!==null&&q.map.dispose(),q.map=new pn(s.x,s.y,tt),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}e.setRenderTarget(q.map),e.clear();let Q=q.getViewportCount();for(let tt=0;tt<Q;tt++){let ft=q.getViewport(tt);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),$.viewport(o),q.updateMatrices(Y,tt),i=q.getFrustum(),E(A,k,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===Bi&&M(q,k),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(y,T,N)};function M(w,A){let k=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(A,null,k,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(A,null,k,p,x,null)}function _(w,A,k,y){let T=null,N=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)T=N;else if(T=k.isPointLight===!0?c:a,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let $=T.uuid,ot=A.uuid,I=l[$];I===void 0&&(I={},l[$]=I);let F=I[ot];F===void 0&&(F=T.clone(),I[ot]=F,A.addEventListener("dispose",L)),T=F}if(T.visible=A.visible,T.wireframe=A.wireframe,y===Bi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let $=e.properties.get(T);$.light=k}return T}function E(w,A,k,y,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Bi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);let ot=t.update(w),I=w.material;if(Array.isArray(I)){let F=ot.groups;for(let V=0,Y=F.length;V<Y;V++){let q=F[V],G=I[q.materialIndex];if(G&&G.visible){let Q=_(w,G,y,T);w.onBeforeShadow(e,w,A,k,ot,Q,q),e.renderBufferDirect(k,null,ot,Q,w,q),w.onAfterShadow(e,w,A,k,ot,Q,q)}}}else if(I.visible){let F=_(w,I,y,T);w.onBeforeShadow(e,w,A,k,ot,F,null),e.renderBufferDirect(k,null,ot,F,w,null),w.onAfterShadow(e,w,A,k,ot,F,null)}}let $=w.children;for(let ot=0,I=$.length;ot<I;ot++)E($[ot],A,k,y,T)}function L(w){w.target.removeEventListener("dispose",L);for(let k in l){let y=l[k],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function RS(e,t,n){let i=n.isWebGL2;function s(){let P=!1,ut=new ye,dt=null,Nt=new ye(0,0,0,0);return{setMask:function(It){dt!==It&&!P&&(e.colorMask(It,It,It,It),dt=It)},setLocked:function(It){P=It},setClear:function(It,he,ue,Ze,ln){ln===!0&&(It*=Ze,he*=Ze,ue*=Ze),ut.set(It,he,ue,Ze),Nt.equals(ut)===!1&&(e.clearColor(It,he,ue,Ze),Nt.copy(ut))},reset:function(){P=!1,dt=null,Nt.set(-1,0,0,0)}}}function r(){let P=!1,ut=null,dt=null,Nt=null;return{setTest:function(It){It?zt(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(It){ut!==It&&!P&&(e.depthMask(It),ut=It)},setFunc:function(It){if(dt!==It){switch(It){case J1:e.depthFunc(e.NEVER);break;case K1:e.depthFunc(e.ALWAYS);break;case j1:e.depthFunc(e.LESS);break;case rc:e.depthFunc(e.LEQUAL);break;case Q1:e.depthFunc(e.EQUAL);break;case tx:e.depthFunc(e.GEQUAL);break;case ex:e.depthFunc(e.GREATER);break;case nx:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=It}},setLocked:function(It){P=It},setClear:function(It){Nt!==It&&(e.clearDepth(It),Nt=It)},reset:function(){P=!1,ut=null,dt=null,Nt=null}}}function o(){let P=!1,ut=null,dt=null,Nt=null,It=null,he=null,ue=null,Ze=null,ln=null;return{setTest:function(de){P||(de?zt(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(de){ut!==de&&!P&&(e.stencilMask(de),ut=de)},setFunc:function(de,hn,vi){(dt!==de||Nt!==hn||It!==vi)&&(e.stencilFunc(de,hn,vi),dt=de,Nt=hn,It=vi)},setOp:function(de,hn,vi){(he!==de||ue!==hn||Ze!==vi)&&(e.stencilOp(de,hn,vi),he=de,ue=hn,Ze=vi)},setLocked:function(de){P=de},setClear:function(de){ln!==de&&(e.clearStencil(de),ln=de)},reset:function(){P=!1,ut=null,dt=null,Nt=null,It=null,he=null,ue=null,Ze=null,ln=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,M=null,_=null,E=null,L=null,w=null,A=null,k=null,y=new Ft(0,0,0),T=0,N=!1,$=null,ot=null,I=null,F=null,V=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,G=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=G>=2);let tt=null,ft={},H=e.getParameter(e.SCISSOR_BOX),J=e.getParameter(e.VIEWPORT),pt=new ye().fromArray(H),Tt=new ye().fromArray(J);function xt(P,ut,dt,Nt){let It=new Uint8Array(4),he=e.createTexture();e.bindTexture(P,he),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ue=0;ue<dt;ue++)i&&(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY)?e.texImage3D(ut,0,e.RGBA,1,1,Nt,0,e.RGBA,e.UNSIGNED_BYTE,It):e.texImage2D(ut+ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,It);return he}let Dt={};Dt[e.TEXTURE_2D]=xt(e.TEXTURE_2D,e.TEXTURE_2D,1),Dt[e.TEXTURE_CUBE_MAP]=xt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Dt[e.TEXTURE_2D_ARRAY]=xt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Dt[e.TEXTURE_3D]=xt(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),zt(e.DEPTH_TEST),c.setFunc(rc),mt(!1),S(kf),zt(e.CULL_FACE),W(Si);function zt(P){d[P]!==!0&&(e.enable(P),d[P]=!0)}function wt(P){d[P]!==!1&&(e.disable(P),d[P]=!1)}function Bt(P,ut){return p[P]!==ut?(e.bindFramebuffer(P,ut),p[P]=ut,i&&(P===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=ut),P===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=ut)),!0):!1}function R(P,ut){let dt=x,Nt=!1;if(P)if(dt=g.get(ut),dt===void 0&&(dt=[],g.set(ut,dt)),P.isWebGLMultipleRenderTargets){let It=P.texture;if(dt.length!==It.length||dt[0]!==e.COLOR_ATTACHMENT0){for(let he=0,ue=It.length;he<ue;he++)dt[he]=e.COLOR_ATTACHMENT0+he;dt.length=It.length,Nt=!0}}else dt[0]!==e.COLOR_ATTACHMENT0&&(dt[0]=e.COLOR_ATTACHMENT0,Nt=!0);else dt[0]!==e.BACK&&(dt[0]=e.BACK,Nt=!0);Nt&&(n.isWebGL2?e.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function at(P){return m!==P?(e.useProgram(P),m=P,!0):!1}let X={[Bs]:e.FUNC_ADD,[N1]:e.FUNC_SUBTRACT,[F1]:e.FUNC_REVERSE_SUBTRACT};if(i)X[Vf]=e.MIN,X[Gf]=e.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(X[Vf]=P.MIN_EXT,X[Gf]=P.MAX_EXT)}let st={[O1]:e.ZERO,[B1]:e.ONE,[k1]:e.SRC_COLOR,[Fh]:e.SRC_ALPHA,[X1]:e.SRC_ALPHA_SATURATE,[G1]:e.DST_COLOR,[H1]:e.DST_ALPHA,[z1]:e.ONE_MINUS_SRC_COLOR,[Oh]:e.ONE_MINUS_SRC_ALPHA,[W1]:e.ONE_MINUS_DST_COLOR,[V1]:e.ONE_MINUS_DST_ALPHA,[q1]:e.CONSTANT_COLOR,[Y1]:e.ONE_MINUS_CONSTANT_COLOR,[$1]:e.CONSTANT_ALPHA,[Z1]:e.ONE_MINUS_CONSTANT_ALPHA};function W(P,ut,dt,Nt,It,he,ue,Ze,ln,de){if(P===Si){f===!0&&(wt(e.BLEND),f=!1);return}if(f===!1&&(zt(e.BLEND),f=!0),P!==D1){if(P!==M||de!==N){if((_!==Bs||w!==Bs)&&(e.blendEquation(e.FUNC_ADD),_=Bs,w=Bs),de)switch(P){case Tr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case sc:e.blendFunc(e.ONE,e.ONE);break;case zf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Hf:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Tr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case sc:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case zf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Hf:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,L=null,A=null,k=null,y.set(0,0,0),T=0,M=P,N=de}return}It=It||ut,he=he||dt,ue=ue||Nt,(ut!==_||It!==w)&&(e.blendEquationSeparate(X[ut],X[It]),_=ut,w=It),(dt!==E||Nt!==L||he!==A||ue!==k)&&(e.blendFuncSeparate(st[dt],st[Nt],st[he],st[ue]),E=dt,L=Nt,A=he,k=ue),(Ze.equals(y)===!1||ln!==T)&&(e.blendColor(Ze.r,Ze.g,Ze.b,ln),y.copy(Ze),T=ln),M=P,N=!1}function Rt(P,ut){P.side===ni?wt(e.CULL_FACE):zt(e.CULL_FACE);let dt=P.side===on;ut&&(dt=!dt),mt(dt),P.blending===Tr&&P.transparent===!1?W(Si):W(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);let Nt=P.stencilWrite;l.setTest(Nt),Nt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),D(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?zt(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function mt(P){$!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),$=P)}function S(P){P!==L1?(zt(e.CULL_FACE),P!==ot&&(P===kf?e.cullFace(e.BACK):P===I1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),ot=P}function v(P){P!==I&&(q&&e.lineWidth(P),I=P)}function D(P,ut,dt){P?(zt(e.POLYGON_OFFSET_FILL),(F!==ut||V!==dt)&&(e.polygonOffset(ut,dt),F=ut,V=dt)):wt(e.POLYGON_OFFSET_FILL)}function et(P){P?zt(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function K(P){P===void 0&&(P=e.TEXTURE0+Y-1),tt!==P&&(e.activeTexture(P),tt=P)}function Z(P,ut,dt){dt===void 0&&(tt===null?dt=e.TEXTURE0+Y-1:dt=tt);let Nt=ft[dt];Nt===void 0&&(Nt={type:void 0,texture:void 0},ft[dt]=Nt),(Nt.type!==P||Nt.texture!==ut)&&(tt!==dt&&(e.activeTexture(dt),tt=dt),e.bindTexture(P,ut||Dt[P]),Nt.type=P,Nt.texture=ut)}function bt(){let P=ft[tt];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ht(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Jt(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(P){pt.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),pt.copy(P))}function ie(P){Tt.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Tt.copy(P))}function Pe(P,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Nt=dt.get(P);Nt===void 0&&(Nt=e.getUniformBlockIndex(ut,P.name),dt.set(P,Nt))}function Yt(P,ut){let Nt=u.get(ut).get(P);h.get(ut)!==Nt&&(e.uniformBlockBinding(ut,Nt,P.__bindingPointIndex),h.set(ut,Nt))}function ct(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},tt=null,ft={},p={},g=new WeakMap,x=[],m=null,f=!1,M=null,_=null,E=null,L=null,w=null,A=null,k=null,y=new Ft(0,0,0),T=0,N=!1,$=null,ot=null,I=null,F=null,V=null,pt.set(0,0,e.canvas.width,e.canvas.height),Tt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:zt,disable:wt,bindFramebuffer:Bt,drawBuffers:R,useProgram:at,setBlending:W,setMaterial:Rt,setFlipSided:mt,setCullFace:S,setLineWidth:v,setPolygonOffset:D,setScissorTest:et,activeTexture:K,bindTexture:Z,unbindTexture:bt,compressedTexImage2D:ht,compressedTexImage3D:vt,texImage2D:Pt,texImage3D:yt,updateUBOMapping:Pe,uniformBlockBinding:Yt,texStorage2D:Jt,texStorage3D:kt,texSubImage2D:Lt,texSubImage3D:Vt,compressedTexSubImage2D:j,compressedTexSubImage3D:ne,scissor:Wt,viewport:ie,reset:ct}}function CS(e,t,n,i,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return p?new OffscreenCanvas(S,v):Oo("canvas")}function x(S,v,D,et){let K=1;if((S.width>et||S.height>et)&&(K=et/Math.max(S.width,S.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let Z=v?dc:Math.floor,bt=Z(K*S.width),ht=Z(K*S.height);u===void 0&&(u=g(bt,ht));let vt=D?g(bt,ht):u;return vt.width=bt,vt.height=ht,vt.getContext("2d").drawImage(S,0,0,bt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+bt+"x"+ht+")."),vt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Vh(S.width)&&Vh(S.height)}function f(S){return a?!1:S.wrapS!==ii||S.wrapT!==ii||S.minFilter!==fn&&S.minFilter!==kn}function M(S,v){return S.generateMipmaps&&v&&S.minFilter!==fn&&S.minFilter!==kn}function _(S){e.generateMipmap(S)}function E(S,v,D,et,K=!1){if(a===!1)return v;if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=v;if(v===e.RED&&(D===e.FLOAT&&(Z=e.R32F),D===e.HALF_FLOAT&&(Z=e.R16F),D===e.UNSIGNED_BYTE&&(Z=e.R8)),v===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(Z=e.R8UI),D===e.UNSIGNED_SHORT&&(Z=e.R16UI),D===e.UNSIGNED_INT&&(Z=e.R32UI),D===e.BYTE&&(Z=e.R8I),D===e.SHORT&&(Z=e.R16I),D===e.INT&&(Z=e.R32I)),v===e.RG&&(D===e.FLOAT&&(Z=e.RG32F),D===e.HALF_FLOAT&&(Z=e.RG16F),D===e.UNSIGNED_BYTE&&(Z=e.RG8)),v===e.RGBA){let bt=K?cc:oe.getTransfer(et);D===e.FLOAT&&(Z=e.RGBA32F),D===e.HALF_FLOAT&&(Z=e.RGBA16F),D===e.UNSIGNED_BYTE&&(Z=bt===ge?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function L(S,v,D){return M(S,D)===!0||S.isFramebufferTexture&&S.minFilter!==fn&&S.minFilter!==kn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function w(S){return S===fn||S===Wf||S===nh?e.NEAREST:e.LINEAR}function A(S){let v=S.target;v.removeEventListener("dispose",A),y(v),v.isVideoTexture&&h.delete(v)}function k(S){let v=S.target;v.removeEventListener("dispose",k),N(v)}function y(S){let v=i.get(S);if(v.__webglInit===void 0)return;let D=S.source,et=d.get(D);if(et){let K=et[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(S),Object.keys(et).length===0&&d.delete(D)}i.remove(S)}function T(S){let v=i.get(S);e.deleteTexture(v.__webglTexture);let D=S.source,et=d.get(D);delete et[v.__cacheKey],o.memory.textures--}function N(S){let v=S.texture,D=i.get(S),et=i.get(v);if(et.__webglTexture!==void 0&&(e.deleteTexture(et.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(D.__webglFramebuffer[K]))for(let Z=0;Z<D.__webglFramebuffer[K].length;Z++)e.deleteFramebuffer(D.__webglFramebuffer[K][Z]);else e.deleteFramebuffer(D.__webglFramebuffer[K]);D.__webglDepthbuffer&&e.deleteRenderbuffer(D.__webglDepthbuffer[K])}else{if(Array.isArray(D.__webglFramebuffer))for(let K=0;K<D.__webglFramebuffer.length;K++)e.deleteFramebuffer(D.__webglFramebuffer[K]);else e.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&e.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&e.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let K=0;K<D.__webglColorRenderbuffer.length;K++)D.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(D.__webglColorRenderbuffer[K]);D.__webglDepthRenderbuffer&&e.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,Z=v.length;K<Z;K++){let bt=i.get(v[K]);bt.__webglTexture&&(e.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(v[K])}i.remove(v),i.remove(S)}let $=0;function ot(){$=0}function I(){let S=$;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),$+=1,S}function F(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function V(S,v){let D=i.get(S);if(S.isVideoTexture&&Rt(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){let et=S.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(D,S,v);return}}n.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+v)}function Y(S,v){let D=i.get(S);if(S.version>0&&D.__version!==S.version){pt(D,S,v);return}n.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+v)}function q(S,v){let D=i.get(S);if(S.version>0&&D.__version!==S.version){pt(D,S,v);return}n.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+v)}function G(S,v){let D=i.get(S);if(S.version>0&&D.__version!==S.version){Tt(D,S,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+v)}let Q={[Pr]:e.REPEAT,[ii]:e.CLAMP_TO_EDGE,[zh]:e.MIRRORED_REPEAT},tt={[fn]:e.NEAREST,[Wf]:e.NEAREST_MIPMAP_NEAREST,[nh]:e.NEAREST_MIPMAP_LINEAR,[kn]:e.LINEAR,[hx]:e.LINEAR_MIPMAP_NEAREST,[Fo]:e.LINEAR_MIPMAP_LINEAR},ft={[Sx]:e.NEVER,[Rx]:e.ALWAYS,[bx]:e.LESS,[Rm]:e.LEQUAL,[Ex]:e.EQUAL,[Ax]:e.GEQUAL,[Tx]:e.GREATER,[wx]:e.NOTEQUAL};function H(S,v,D){if(D?(e.texParameteri(S,e.TEXTURE_WRAP_S,Q[v.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,Q[v.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,Q[v.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,tt[v.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,tt[v.minFilter])):(e.texParameteri(S,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(S,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(v.wrapS!==ii||v.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(S,e.TEXTURE_MAG_FILTER,w(v.magFilter)),e.texParameteri(S,e.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==fn&&v.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,ft[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===fn||v.minFilter!==nh&&v.minFilter!==Fo||v.type===cs&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===ri&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(e.texParameterf(S,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function J(S,v){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));let et=v.source,K=d.get(et);K===void 0&&(K={},d.set(et,K));let Z=F(v);if(Z!==S.__cacheKey){K[Z]===void 0&&(K[Z]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[Z].usedTimes++;let bt=K[S.__cacheKey];bt!==void 0&&(K[S.__cacheKey].usedTimes--,bt.usedTimes===0&&T(v)),S.__cacheKey=Z,S.__webglTexture=K[Z].texture}return D}function pt(S,v,D){let et=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=e.TEXTURE_3D);let K=J(S,v),Z=v.source;n.bindTexture(et,S.__webglTexture,e.TEXTURE0+D);let bt=i.get(Z);if(Z.version!==bt.__version||K===!0){n.activeTexture(e.TEXTURE0+D);let ht=oe.getPrimaries(oe.workingColorSpace),vt=v.colorSpace===zn?null:oe.getPrimaries(v.colorSpace),Lt=v.colorSpace===zn||ht===vt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Vt=f(v)&&m(v.image)===!1,j=x(v.image,Vt,!1,s.maxTextureSize);j=mt(v,j);let ne=m(j)||a,Jt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),Pt=E(v.internalFormat,Jt,kt,v.colorSpace,v.isVideoTexture);H(et,v,ne);let yt,Wt=v.mipmaps,ie=a&&v.isVideoTexture!==!0&&Pt!==Tm,Pe=bt.__version===void 0||K===!0,Yt=L(v,j,ne);if(v.isDepthTexture)Pt=e.DEPTH_COMPONENT,a?v.type===cs?Pt=e.DEPTH_COMPONENT32F:v.type===as?Pt=e.DEPTH_COMPONENT24:v.type===zs?Pt=e.DEPTH24_STENCIL8:Pt=e.DEPTH_COMPONENT16:v.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Hs&&Pt===e.DEPTH_COMPONENT&&v.type!==wu&&v.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=as,kt=r.convert(v.type)),v.format===Lr&&Pt===e.DEPTH_COMPONENT&&(Pt=e.DEPTH_STENCIL,v.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=zs,kt=r.convert(v.type))),Pe&&(ie?n.texStorage2D(e.TEXTURE_2D,1,Pt,j.width,j.height):n.texImage2D(e.TEXTURE_2D,0,Pt,j.width,j.height,0,Jt,kt,null));else if(v.isDataTexture)if(Wt.length>0&&ne){ie&&Pe&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ct=0,P=Wt.length;ct<P;ct++)yt=Wt[ct],ie?n.texSubImage2D(e.TEXTURE_2D,ct,0,0,yt.width,yt.height,Jt,kt,yt.data):n.texImage2D(e.TEXTURE_2D,ct,Pt,yt.width,yt.height,0,Jt,kt,yt.data);v.generateMipmaps=!1}else ie?(Pe&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,j.width,j.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,j.width,j.height,Jt,kt,j.data)):n.texImage2D(e.TEXTURE_2D,0,Pt,j.width,j.height,0,Jt,kt,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&Pe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Yt,Pt,Wt[0].width,Wt[0].height,j.depth);for(let ct=0,P=Wt.length;ct<P;ct++)yt=Wt[ct],v.format!==si?Jt!==null?ie?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,j.depth,Jt,yt.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ct,Pt,yt.width,yt.height,j.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?n.texSubImage3D(e.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,j.depth,Jt,kt,yt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ct,Pt,yt.width,yt.height,j.depth,0,Jt,kt,yt.data)}else{ie&&Pe&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ct=0,P=Wt.length;ct<P;ct++)yt=Wt[ct],v.format!==si?Jt!==null?ie?n.compressedTexSubImage2D(e.TEXTURE_2D,ct,0,0,yt.width,yt.height,Jt,yt.data):n.compressedTexImage2D(e.TEXTURE_2D,ct,Pt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?n.texSubImage2D(e.TEXTURE_2D,ct,0,0,yt.width,yt.height,Jt,kt,yt.data):n.texImage2D(e.TEXTURE_2D,ct,Pt,yt.width,yt.height,0,Jt,kt,yt.data)}else if(v.isDataArrayTexture)ie?(Pe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Yt,Pt,j.width,j.height,j.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Jt,kt,j.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,Pt,j.width,j.height,j.depth,0,Jt,kt,j.data);else if(v.isData3DTexture)ie?(Pe&&n.texStorage3D(e.TEXTURE_3D,Yt,Pt,j.width,j.height,j.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Jt,kt,j.data)):n.texImage3D(e.TEXTURE_3D,0,Pt,j.width,j.height,j.depth,0,Jt,kt,j.data);else if(v.isFramebufferTexture){if(Pe)if(ie)n.texStorage2D(e.TEXTURE_2D,Yt,Pt,j.width,j.height);else{let ct=j.width,P=j.height;for(let ut=0;ut<Yt;ut++)n.texImage2D(e.TEXTURE_2D,ut,Pt,ct,P,0,Jt,kt,null),ct>>=1,P>>=1}}else if(Wt.length>0&&ne){ie&&Pe&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ct=0,P=Wt.length;ct<P;ct++)yt=Wt[ct],ie?n.texSubImage2D(e.TEXTURE_2D,ct,0,0,Jt,kt,yt):n.texImage2D(e.TEXTURE_2D,ct,Pt,Jt,kt,yt);v.generateMipmaps=!1}else ie?(Pe&&n.texStorage2D(e.TEXTURE_2D,Yt,Pt,j.width,j.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,Jt,kt,j)):n.texImage2D(e.TEXTURE_2D,0,Pt,Jt,kt,j);M(v,ne)&&_(et),bt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Tt(S,v,D){if(v.image.length!==6)return;let et=J(S,v),K=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+D);let Z=i.get(K);if(K.version!==Z.__version||et===!0){n.activeTexture(e.TEXTURE0+D);let bt=oe.getPrimaries(oe.workingColorSpace),ht=v.colorSpace===zn?null:oe.getPrimaries(v.colorSpace),vt=v.colorSpace===zn||bt===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Lt=v.isCompressedTexture||v.image[0].isCompressedTexture,Vt=v.image[0]&&v.image[0].isDataTexture,j=[];for(let ct=0;ct<6;ct++)!Lt&&!Vt?j[ct]=x(v.image[ct],!1,!0,s.maxCubemapSize):j[ct]=Vt?v.image[ct].image:v.image[ct],j[ct]=mt(v,j[ct]);let ne=j[0],Jt=m(ne)||a,kt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type),yt=E(v.internalFormat,kt,Pt,v.colorSpace),Wt=a&&v.isVideoTexture!==!0,ie=Z.__version===void 0||et===!0,Pe=L(v,ne,Jt);H(e.TEXTURE_CUBE_MAP,v,Jt);let Yt;if(Lt){Wt&&ie&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Pe,yt,ne.width,ne.height);for(let ct=0;ct<6;ct++){Yt=j[ct].mipmaps;for(let P=0;P<Yt.length;P++){let ut=Yt[P];v.format!==si?kt!==null?Wt?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,P,0,0,ut.width,ut.height,kt,ut.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,P,yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,P,0,0,ut.width,ut.height,kt,Pt,ut.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,P,yt,ut.width,ut.height,0,kt,Pt,ut.data)}}}else{Yt=v.mipmaps,Wt&&ie&&(Yt.length>0&&Pe++,n.texStorage2D(e.TEXTURE_CUBE_MAP,Pe,yt,j[0].width,j[0].height));for(let ct=0;ct<6;ct++)if(Vt){Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,j[ct].width,j[ct].height,kt,Pt,j[ct].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,j[ct].width,j[ct].height,0,kt,Pt,j[ct].data);for(let P=0;P<Yt.length;P++){let dt=Yt[P].image[ct].image;Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,P+1,0,0,dt.width,dt.height,kt,Pt,dt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,P+1,yt,dt.width,dt.height,0,kt,Pt,dt.data)}}else{Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,kt,Pt,j[ct]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,kt,Pt,j[ct]);for(let P=0;P<Yt.length;P++){let ut=Yt[P];Wt?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,P+1,0,0,kt,Pt,ut.image[ct]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,P+1,yt,kt,Pt,ut.image[ct])}}}M(v,Jt)&&_(e.TEXTURE_CUBE_MAP),Z.__version=K.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function xt(S,v,D,et,K,Z){let bt=r.convert(D.format,D.colorSpace),ht=r.convert(D.type),vt=E(D.internalFormat,bt,ht,D.colorSpace);if(!i.get(v).__hasExternalTextures){let Vt=Math.max(1,v.width>>Z),j=Math.max(1,v.height>>Z);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,Z,vt,Vt,j,v.depth,0,bt,ht,null):n.texImage2D(K,Z,vt,Vt,j,0,bt,ht,null)}n.bindFramebuffer(e.FRAMEBUFFER,S),W(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,et,K,i.get(D).__webglTexture,0,st(v)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,et,K,i.get(D).__webglTexture,Z),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Dt(S,v,D){if(e.bindRenderbuffer(e.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let et=a===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(D||W(v)){let K=v.depthTexture;K&&K.isDepthTexture&&(K.type===cs?et=e.DEPTH_COMPONENT32F:K.type===as&&(et=e.DEPTH_COMPONENT24));let Z=st(v);W(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Z,et,v.width,v.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,Z,et,v.width,v.height)}else e.renderbufferStorage(e.RENDERBUFFER,et,v.width,v.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let et=st(v);D&&W(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,et,e.DEPTH24_STENCIL8,v.width,v.height):W(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,et,e.DEPTH24_STENCIL8,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,S)}else{let et=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<et.length;K++){let Z=et[K],bt=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),vt=E(Z.internalFormat,bt,ht,Z.colorSpace),Lt=st(v);D&&W(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Lt,vt,v.width,v.height):W(v)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Lt,vt,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,vt,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function zt(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let et=i.get(v.depthTexture).__webglTexture,K=st(v);if(v.depthTexture.format===Hs)W(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0);else if(v.depthTexture.format===Lr)W(v)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function wt(S){let v=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");zt(v.__webglFramebuffer,S)}else if(D){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]=e.createRenderbuffer(),Dt(v.__webglDepthbuffer[et],S,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=e.createRenderbuffer(),Dt(v.__webglDepthbuffer,S,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Bt(S,v,D){let et=i.get(S);v!==void 0&&xt(et.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&wt(S)}function R(S){let v=S.texture,D=i.get(S),et=i.get(v);S.addEventListener("dispose",k),S.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=e.createTexture()),et.__version=v.version,o.memory.textures++);let K=S.isWebGLCubeRenderTarget===!0,Z=S.isWebGLMultipleRenderTargets===!0,bt=m(S)||a;if(K){D.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ht]=[];for(let vt=0;vt<v.mipmaps.length;vt++)D.__webglFramebuffer[ht][vt]=e.createFramebuffer()}else D.__webglFramebuffer[ht]=e.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)D.__webglFramebuffer[ht]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(Z)if(s.drawBuffers){let ht=S.texture;for(let vt=0,Lt=ht.length;vt<Lt;vt++){let Vt=i.get(ht[vt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&W(S)===!1){let ht=Z?v:[v];D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let vt=0;vt<ht.length;vt++){let Lt=ht[vt];D.__webglColorRenderbuffer[vt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[vt]);let Vt=r.convert(Lt.format,Lt.colorSpace),j=r.convert(Lt.type),ne=E(Lt.internalFormat,Vt,j,Lt.colorSpace,S.isXRRenderTarget===!0),Jt=st(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,Jt,ne,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+vt,e.RENDERBUFFER,D.__webglColorRenderbuffer[vt])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),Dt(D.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(K){n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),H(e.TEXTURE_CUBE_MAP,v,bt);for(let ht=0;ht<6;ht++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)xt(D.__webglFramebuffer[ht][vt],S,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else xt(D.__webglFramebuffer[ht],S,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);M(v,bt)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Z){let ht=S.texture;for(let vt=0,Lt=ht.length;vt<Lt;vt++){let Vt=ht[vt],j=i.get(Vt);n.bindTexture(e.TEXTURE_2D,j.__webglTexture),H(e.TEXTURE_2D,Vt,bt),xt(D.__webglFramebuffer,S,Vt,e.COLOR_ATTACHMENT0+vt,e.TEXTURE_2D,0),M(Vt,bt)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let ht=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ht=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ht,et.__webglTexture),H(ht,v,bt),a&&v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)xt(D.__webglFramebuffer[vt],S,v,e.COLOR_ATTACHMENT0,ht,vt);else xt(D.__webglFramebuffer,S,v,e.COLOR_ATTACHMENT0,ht,0);M(v,bt)&&_(ht),n.unbindTexture()}S.depthBuffer&&wt(S)}function at(S){let v=m(S)||a,D=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0,K=D.length;et<K;et++){let Z=D[et];if(M(Z,v)){let bt=S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,ht=i.get(Z).__webglTexture;n.bindTexture(bt,ht),_(bt),n.unbindTexture()}}}function X(S){if(a&&S.samples>0&&W(S)===!1){let v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],D=S.width,et=S.height,K=e.COLOR_BUFFER_BIT,Z=[],bt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(S),vt=S.isWebGLMultipleRenderTargets===!0;if(vt)for(let Lt=0;Lt<v.length;Lt++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Lt=0;Lt<v.length;Lt++){Z.push(e.COLOR_ATTACHMENT0+Lt),S.depthBuffer&&Z.push(bt);let Vt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Vt===!1&&(S.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),vt&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[Lt]),Vt===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[bt]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[bt])),vt){let j=i.get(v[Lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,j,0)}e.blitFramebuffer(0,0,D,et,0,0,D,et,K,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Z)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),vt)for(let Lt=0;Lt<v.length;Lt++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Lt,e.RENDERBUFFER,ht.__webglColorRenderbuffer[Lt]);let Vt=i.get(v[Lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Lt,e.TEXTURE_2D,Vt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function st(S){return Math.min(s.maxSamples,S.samples)}function W(S){let v=i.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(S){let v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function mt(S,v){let D=S.colorSpace,et=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Hh||D!==Hi&&D!==zn&&(oe.getTransfer(D)===ge?a===!1?t.has("EXT_sRGB")===!0&&et===si?(S.format=Hh,S.minFilter=kn,S.generateMipmaps=!1):v=fc.sRGBToLinear(v):(et!==si||K!==hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}this.allocateTextureUnit=I,this.resetTextureUnits=ot,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=W}function PS(e,t,n){let i=n.isWebGL2;function s(r,o=zn){let a,c=oe.getTransfer(o);if(r===hs)return e.UNSIGNED_BYTE;if(r===ym)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Mm)return e.UNSIGNED_SHORT_5_5_5_1;if(r===ux)return e.BYTE;if(r===dx)return e.SHORT;if(r===wu)return e.UNSIGNED_SHORT;if(r===vm)return e.INT;if(r===as)return e.UNSIGNED_INT;if(r===cs)return e.FLOAT;if(r===ri)return i?e.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fx)return e.ALPHA;if(r===si)return e.RGBA;if(r===px)return e.LUMINANCE;if(r===mx)return e.LUMINANCE_ALPHA;if(r===Hs)return e.DEPTH_COMPONENT;if(r===Lr)return e.DEPTH_STENCIL;if(r===Hh)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===gx)return e.RED;if(r===Sm)return e.RED_INTEGER;if(r===_x)return e.RG;if(r===bm)return e.RG_INTEGER;if(r===Em)return e.RGBA_INTEGER;if(r===ih||r===sh||r===rh||r===oh)if(c===ge)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ih)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ih)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xf||r===qf||r===Yf||r===$f)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$f)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zf||r===Jf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zf)return c===ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Jf)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kf||r===jf||r===Qf||r===tp||r===ep||r===np||r===ip||r===sp||r===rp||r===op||r===ap||r===cp||r===lp||r===hp)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Kf)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jf)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qf)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tp)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ep)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===np)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ip)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sp)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rp)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===op)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ap)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cp)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lp)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hp)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ah||r===up||r===dp)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ah)return c===ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===up)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xx||r===fp||r===pp||r===mp)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ah)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?i?e.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):e[r]!==void 0?e[r]:null}return{convert:s}}var eu=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Mi=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},LS={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LS)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},nu=class extends ds{constructor(t,n){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=n.getContextAttributes(),m=null,f=null,M=[],_=[],E=new nt,L=null,w=new tn;w.layers.enable(1),w.viewport=new ye;let A=new tn;A.layers.enable(2),A.viewport=new ye;let k=[w,A],y=new eu;y.layers.enable(1),y.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=M[H];return J===void 0&&(J=new Io,M[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=M[H];return J===void 0&&(J=new Io,M[H]=J),J.getGripSpace()},this.getHand=function(H){let J=M[H];return J===void 0&&(J=new Io,M[H]=J),J.getHandSpace()};function $(H){let J=_.indexOf(H.inputSource);if(J===-1)return;let pt=M[J];pt!==void 0&&(pt.update(H.inputSource,H.frame,l||o),pt.dispatchEvent({type:H.type,data:H.inputSource}))}function ot(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",I);for(let H=0;H<M.length;H++){let J=_[H];J!==null&&(_[H]=null,M[H].disconnect(J))}T=null,N=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await n.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,J),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new pn(p.framebufferWidth,p.framebufferHeight,{format:si,type:hs,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,pt=null,Tt=null;x.depth&&(Tt=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=x.stencil?Lr:Hs,pt=x.stencil?zs:as);let xt={colorFormat:n.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,n),d=u.createProjectionLayer(xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new pn(d.textureWidth,d.textureHeight,{format:si,type:hs,depthTexture:new Sc(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Dt=t.properties.get(f);Dt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(H){for(let J=0;J<H.removed.length;J++){let pt=H.removed[J],Tt=_.indexOf(pt);Tt>=0&&(_[Tt]=null,M[Tt].disconnect(pt))}for(let J=0;J<H.added.length;J++){let pt=H.added[J],Tt=_.indexOf(pt);if(Tt===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=_.length){_.push(pt),Tt=Dt;break}else if(_[Dt]===null){_[Dt]=pt,Tt=Dt;break}if(Tt===-1)break}let xt=M[Tt];xt&&xt.connect(pt)}}let F=new C,V=new C;function Y(H,J,pt){F.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(pt.matrixWorld);let Tt=F.distanceTo(V),xt=J.projectionMatrix.elements,Dt=pt.projectionMatrix.elements,zt=xt[14]/(xt[10]-1),wt=xt[14]/(xt[10]+1),Bt=(xt[9]+1)/xt[5],R=(xt[9]-1)/xt[5],at=(xt[8]-1)/xt[0],X=(Dt[8]+1)/Dt[0],st=zt*at,W=zt*X,Rt=Tt/(-at+X),mt=Rt*-at;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(mt),H.translateZ(Rt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let S=zt+Rt,v=wt+Rt,D=st-mt,et=W+(Tt-mt),K=Bt*wt/v*S,Z=R*wt/v*S;H.projectionMatrix.makePerspective(D,et,K,Z,S,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;y.near=A.near=w.near=H.near,y.far=A.far=w.far=H.far,(T!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,N=y.far);let J=H.parent,pt=y.cameras;q(y,J);for(let Tt=0;Tt<pt.length;Tt++)q(pt[Tt],J);pt.length===2?Y(y,w,A):y.projectionMatrix.copy(w.projectionMatrix),G(H,y,J)};function G(H,J,pt){pt===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(pt.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ir*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let Q=null;function tt(H,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Tt=!1;pt.length!==y.cameras.length&&(y.cameras.length=0,Tt=!0);for(let xt=0;xt<pt.length;xt++){let Dt=pt[xt],zt=null;if(p!==null)zt=p.getViewport(Dt);else{let Bt=u.getViewSubImage(d,Dt);zt=Bt.viewport,xt===0&&(t.setRenderTargetTextures(f,Bt.colorTexture,d.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(f))}let wt=k[xt];wt===void 0&&(wt=new tn,wt.layers.enable(xt),wt.viewport=new ye,k[xt]=wt),wt.matrix.fromArray(Dt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Dt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(zt.x,zt.y,zt.width,zt.height),xt===0&&(y.matrix.copy(wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Tt===!0&&y.cameras.push(wt)}}for(let pt=0;pt<M.length;pt++){let Tt=_[pt],xt=M[pt];Tt!==null&&xt!==void 0&&xt.update(Tt,J,l||o)}Q&&Q(H,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let ft=new Im;ft.setAnimationLoop(tt),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}};function IS(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Lm(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,_,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function US(e,t,n,i){let s={},r={},o=[],a=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){let E=_.program;i.uniformBlockBinding(M,E)}function l(M,_){let E=s[M.id];E===void 0&&(g(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",m));let L=_.program;i.updateUBOMapping(M,L);let w=t.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function h(M){let _=u();M.__bindingPointIndex=_;let E=e.createBuffer(),L=M.__size,w=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,L,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,E),E}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],E=M.uniforms,L=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,A=E.length;w<A;w++){let k=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,T=k.length;y<T;y++){let N=k[y];if(p(N,w,y,L)===!0){let $=N.__offset,ot=Array.isArray(N.value)?N.value:[N.value],I=0;for(let F=0;F<ot.length;F++){let V=ot[F],Y=x(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,$+I,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,$,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(M,_,E,L){let w=M.value,A=_+"_"+E;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{let k=L[A];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return L[A]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function g(M){let _=M.uniforms,E=0,L=16;for(let A=0,k=_.length;A<k;A++){let y=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,N=y.length;T<N;T++){let $=y[T],ot=Array.isArray($.value)?$.value:[$.value];for(let I=0,F=ot.length;I<F;I++){let V=ot[I],Y=x(V),q=E%L;q!==0&&L-q<Y.boundary&&(E+=L-q),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=Y.storage}}}let w=E%L;return w>0&&(E+=L-w),M.__size=E,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let M in s)e.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Ho=class{constructor(t={}){let{canvas:n=Gx(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this._useLegacyLights=!1,this.toneMapping=ls,this.toneMappingExposure=1;let _=this,E=!1,L=0,w=0,A=null,k=-1,y=null,T=new ye,N=new ye,$=null,ot=new Ft(0),I=0,F=n.width,V=n.height,Y=1,q=null,G=null,Q=new ye(0,0,F,V),tt=new ye(0,0,F,V),ft=!1,H=new zo,J=!1,pt=!1,Tt=null,xt=new Ie,Dt=new nt,zt=new C,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Bt(){return A===null?Y:1}let R=i;function at(b,U){for(let B=0;B<b.length;B++){let z=b[B],O=n.getContext(z,U);if(O!==null)return O}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r160"),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ut,!1),R===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),R=at(U,b),R===null)throw at(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let X,st,W,Rt,mt,S,v,D,et,K,Z,bt,ht,vt,Lt,Vt,j,ne,Jt,kt,Pt,yt,Wt,ie;function Pe(){X=new j2(R),st=new q2(R,X,t),X.init(st),yt=new PS(R,X,st),W=new RS(R,X,st),Rt=new eM(R),mt=new gS,S=new CS(R,X,W,mt,st,yt,Rt),v=new $2(_),D=new K2(_),et=new lv(R,st),Wt=new W2(R,X,et,st),K=new Q2(R,et,Rt,Wt),Z=new rM(R,K,et,Rt),Jt=new sM(R,st,S),Vt=new Y2(mt),bt=new mS(_,v,D,X,st,Wt,Vt),ht=new IS(_,mt),vt=new xS,Lt=new ES(X,st),ne=new G2(_,v,D,W,Z,d,c),j=new AS(_,Z,st),ie=new US(R,Rt,st,W),kt=new X2(R,X,Rt,st),Pt=new tM(R,X,Rt,st),Rt.programs=bt.programs,_.capabilities=st,_.extensions=X,_.properties=mt,_.renderLists=vt,_.shadowMap=j,_.state=W,_.info=Rt}Pe();let Yt=new nu(_,R);this.xr=Yt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=X.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=X.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(F,V,!1))},this.getSize=function(b){return b.set(F,V)},this.setSize=function(b,U,B=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,V=U,n.width=Math.floor(b*Y),n.height=Math.floor(U*Y),B===!0&&(n.style.width=b+"px",n.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(F*Y,V*Y).floor()},this.setDrawingBufferSize=function(b,U,B){F=b,V=U,Y=B,n.width=Math.floor(b*B),n.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(Q)},this.setViewport=function(b,U,B,z){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,U,B,z),W.viewport(T.copy(Q).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,U,B,z){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,U,B,z),W.scissor(N.copy(tt).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(b){W.setScissorTest(ft=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){G=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,U=!0,B=!0){let z=0;if(b){let O=!1;if(A!==null){let gt=A.texture.format;O=gt===Em||gt===bm||gt===Sm}if(O){let gt=A.texture.type,At=gt===hs||gt===as||gt===wu||gt===zs||gt===ym||gt===Mm,Ut=ne.getClearColor(),Ot=ne.getClearAlpha(),qt=Ut.r,Ht=Ut.g,Gt=Ut.b;At?(p[0]=qt,p[1]=Ht,p[2]=Gt,p[3]=Ot,R.clearBufferuiv(R.COLOR,0,p)):(g[0]=qt,g[1]=Ht,g[2]=Gt,g[3]=Ot,R.clearBufferiv(R.COLOR,0,g))}else z|=R.COLOR_BUFFER_BIT}U&&(z|=R.DEPTH_BUFFER_BIT),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ut,!1),vt.dispose(),Lt.dispose(),mt.dispose(),v.dispose(),D.dispose(),Z.dispose(),Wt.dispose(),ie.dispose(),bt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",ln),Yt.removeEventListener("sessionend",de),Tt&&(Tt.dispose(),Tt=null),hn.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=Rt.autoReset,U=j.enabled,B=j.autoUpdate,z=j.needsUpdate,O=j.type;Pe(),Rt.autoReset=b,j.enabled=U,j.autoUpdate=B,j.needsUpdate=z,j.type=O}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dt(b){let U=b.target;U.removeEventListener("dispose",dt),Nt(U)}function Nt(b){It(b),mt.remove(b)}function It(b){let U=mt.get(b).programs;U!==void 0&&(U.forEach(function(B){bt.releaseProgram(B)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,z,O,gt){U===null&&(U=wt);let At=O.isMesh&&O.matrixWorld.determinant()<0,Ut=A1(b,U,B,z,O);W.setMaterial(z,At);let Ot=B.index,qt=1;if(z.wireframe===!0){if(Ot=K.getWireframeAttribute(B),Ot===void 0)return;qt=2}let Ht=B.drawRange,Gt=B.attributes.position,Fe=Ht.start*qt,En=(Ht.start+Ht.count)*qt;gt!==null&&(Fe=Math.max(Fe,gt.start*qt),En=Math.min(En,(gt.start+gt.count)*qt)),Ot!==null?(Fe=Math.max(Fe,0),En=Math.min(En,Ot.count)):Gt!=null&&(Fe=Math.max(Fe,0),En=Math.min(En,Gt.count));let Je=En-Fe;if(Je<0||Je===1/0)return;Wt.setup(O,z,Ut,B,Ot);let Ii,Ee=kt;if(Ot!==null&&(Ii=et.get(Ot),Ee=Pt,Ee.setIndex(Ii)),O.isMesh)z.wireframe===!0?(W.setLineWidth(z.wireframeLinewidth*Bt()),Ee.setMode(R.LINES)):Ee.setMode(R.TRIANGLES);else if(O.isLine){let $t=z.linewidth;$t===void 0&&($t=1),W.setLineWidth($t*Bt()),O.isLineSegments?Ee.setMode(R.LINES):O.isLineLoop?Ee.setMode(R.LINE_LOOP):Ee.setMode(R.LINE_STRIP)}else O.isPoints?Ee.setMode(R.POINTS):O.isSprite&&Ee.setMode(R.TRIANGLES);if(O.isBatchedMesh)Ee.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Ee.renderInstances(Fe,Je,O.count);else if(B.isInstancedBufferGeometry){let $t=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,jl=Math.min(B.instanceCount,$t);Ee.renderInstances(Fe,Je,jl)}else Ee.render(Fe,Je)};function he(b,U,B){b.transparent===!0&&b.side===ni&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,La(b,U,B),b.side=us,b.needsUpdate=!0,La(b,U,B),b.side=ni):La(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),m=Lt.get(B),m.init(),M.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),b!==B&&b.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_._useLegacyLights);let z=new Set;return b.traverse(function(O){let gt=O.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){let Ut=gt[At];he(Ut,B,O),z.add(Ut)}else he(gt,B,O),z.add(gt)}),M.pop(),m=null,z},this.compileAsync=function(b,U,B=null){let z=this.compile(b,U,B);return new Promise(O=>{function gt(){if(z.forEach(function(At){mt.get(At).currentProgram.isReady()&&z.delete(At)}),z.size===0){O(b);return}setTimeout(gt,10)}X.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ue=null;function Ze(b){ue&&ue(b)}function ln(){hn.stop()}function de(){hn.start()}let hn=new Im;hn.setAnimationLoop(Ze),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(b){ue=b,Yt.setAnimationLoop(b),b===null?hn.stop():hn.start()},Yt.addEventListener("sessionstart",ln),Yt.addEventListener("sessionend",de),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(U),U=Yt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,A),m=Lt.get(b,M.length),m.init(),M.push(m),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(xt),pt=this.localClippingEnabled,J=Vt.init(this.clippingPlanes,pt),x=vt.get(b,f.length),x.init(),f.push(x),vi(b,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,G),this.info.render.frame++,J===!0&&Vt.beginShadows();let B=m.state.shadowsArray;if(j.render(B,b,U),J===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(x,b),m.setupLights(_._useLegacyLights),U.isArrayCamera){let z=U.cameras;for(let O=0,gt=z.length;O<gt;O++){let At=z[O];Uf(x,b,At,At.viewport)}}else Uf(x,b,U);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,U),Wt.resetDefaultState(),k=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function vi(b,U,B,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||H.intersectsSprite(b)){z&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);let At=Z.update(b),Ut=b.material;Ut.visible&&x.push(b,At,Ut,B,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||H.intersectsObject(b))){let At=Z.update(b),Ut=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(Ut)){let Ot=At.groups;for(let qt=0,Ht=Ot.length;qt<Ht;qt++){let Gt=Ot[qt],Fe=Ut[Gt.materialIndex];Fe&&Fe.visible&&x.push(b,At,Fe,B,zt.z,Gt)}}else Ut.visible&&x.push(b,At,Ut,B,zt.z,null)}}let gt=b.children;for(let At=0,Ut=gt.length;At<Ut;At++)vi(gt[At],U,B,z)}function Uf(b,U,B,z){let O=b.opaque,gt=b.transmissive,At=b.transparent;m.setupLightsView(B),J===!0&&Vt.setGlobalState(_.clippingPlanes,B),gt.length>0&&w1(O,gt,U,B),z&&W.viewport(T.copy(z)),O.length>0&&Pa(O,U,B),gt.length>0&&Pa(gt,U,B),At.length>0&&Pa(At,U,B),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function w1(b,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let gt=st.isWebGL2;Tt===null&&(Tt=new pn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?ri:hs,minFilter:Fo,samples:gt?4:0})),_.getDrawingBufferSize(Dt),gt?Tt.setSize(Dt.x,Dt.y):Tt.setSize(dc(Dt.x),dc(Dt.y));let At=_.getRenderTarget();_.setRenderTarget(Tt),_.getClearColor(ot),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let Ut=_.toneMapping;_.toneMapping=ls,Pa(b,B,z),S.updateMultisampleRenderTarget(Tt),S.updateRenderTargetMipmap(Tt);let Ot=!1;for(let qt=0,Ht=U.length;qt<Ht;qt++){let Gt=U[qt],Fe=Gt.object,En=Gt.geometry,Je=Gt.material,Ii=Gt.group;if(Je.side===ni&&Fe.layers.test(z.layers)){let Ee=Je.side;Je.side=on,Je.needsUpdate=!0,Df(Fe,B,z,En,Je,Ii),Je.side=Ee,Je.needsUpdate=!0,Ot=!0}}Ot===!0&&(S.updateMultisampleRenderTarget(Tt),S.updateRenderTargetMipmap(Tt)),_.setRenderTarget(At),_.setClearColor(ot,I),_.toneMapping=Ut}function Pa(b,U,B){let z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,gt=b.length;O<gt;O++){let At=b[O],Ut=At.object,Ot=At.geometry,qt=z===null?At.material:z,Ht=At.group;Ut.layers.test(B.layers)&&Df(Ut,U,B,Ot,qt,Ht)}}function Df(b,U,B,z,O,gt){b.onBeforeRender(_,U,B,z,O,gt),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,U,B,z,b,gt),O.transparent===!0&&O.side===ni&&O.forceSinglePass===!1?(O.side=on,O.needsUpdate=!0,_.renderBufferDirect(B,U,z,O,b,gt),O.side=us,O.needsUpdate=!0,_.renderBufferDirect(B,U,z,O,b,gt),O.side=ni):_.renderBufferDirect(B,U,z,O,b,gt),b.onAfterRender(_,U,B,z,O,gt)}function La(b,U,B){U.isScene!==!0&&(U=wt);let z=mt.get(b),O=m.state.lights,gt=m.state.shadowsArray,At=O.state.version,Ut=bt.getParameters(b,O.state,gt,U,B),Ot=bt.getProgramCacheKey(Ut),qt=z.programs;z.environment=b.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(b.isMeshStandardMaterial?D:v).get(b.envMap||z.environment),qt===void 0&&(b.addEventListener("dispose",dt),qt=new Map,z.programs=qt);let Ht=qt.get(Ot);if(Ht!==void 0){if(z.currentProgram===Ht&&z.lightsStateVersion===At)return Ff(b,Ut),Ht}else Ut.uniforms=bt.getUniforms(b),b.onBuild(B,Ut,_),b.onBeforeCompile(Ut,_),Ht=bt.acquireProgram(Ut,Ot),qt.set(Ot,Ht),z.uniforms=Ut.uniforms;let Gt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Vt.uniform),Ff(b,Ut),z.needsLights=C1(b),z.lightsStateVersion=At,z.needsLights&&(Gt.ambientLightColor.value=O.state.ambient,Gt.lightProbe.value=O.state.probe,Gt.directionalLights.value=O.state.directional,Gt.directionalLightShadows.value=O.state.directionalShadow,Gt.spotLights.value=O.state.spot,Gt.spotLightShadows.value=O.state.spotShadow,Gt.rectAreaLights.value=O.state.rectArea,Gt.ltc_1.value=O.state.rectAreaLTC1,Gt.ltc_2.value=O.state.rectAreaLTC2,Gt.pointLights.value=O.state.point,Gt.pointLightShadows.value=O.state.pointShadow,Gt.hemisphereLights.value=O.state.hemi,Gt.directionalShadowMap.value=O.state.directionalShadowMap,Gt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Gt.spotShadowMap.value=O.state.spotShadowMap,Gt.spotLightMatrix.value=O.state.spotLightMatrix,Gt.spotLightMap.value=O.state.spotLightMap,Gt.pointShadowMap.value=O.state.pointShadowMap,Gt.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ht,z.uniformsList=null,Ht}function Nf(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ar.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ff(b,U){let B=mt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function A1(b,U,B,z,O){U.isScene!==!0&&(U=wt),S.resetTextureUnits();let gt=U.fog,At=z.isMeshStandardMaterial?U.environment:null,Ut=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,Ot=(z.isMeshStandardMaterial?D:v).get(z.envMap||At),qt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ht=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Gt=!!B.morphAttributes.position,Fe=!!B.morphAttributes.normal,En=!!B.morphAttributes.color,Je=ls;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Je=_.toneMapping);let Ii=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ee=Ii!==void 0?Ii.length:0,$t=mt.get(z),jl=m.state.lights;if(J===!0&&(pt===!0||b!==y)){let On=b===y&&z.id===k;Vt.setState(z,b,On)}let Le=!1;z.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==jl.state.version||$t.outputColorSpace!==Ut||O.isBatchedMesh&&$t.batching===!1||!O.isBatchedMesh&&$t.batching===!0||O.isInstancedMesh&&$t.instancing===!1||!O.isInstancedMesh&&$t.instancing===!0||O.isSkinnedMesh&&$t.skinning===!1||!O.isSkinnedMesh&&$t.skinning===!0||O.isInstancedMesh&&$t.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&$t.instancingColor===!1&&O.instanceColor!==null||$t.envMap!==Ot||z.fog===!0&&$t.fog!==gt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Vt.numPlanes||$t.numIntersection!==Vt.numIntersection)||$t.vertexAlphas!==qt||$t.vertexTangents!==Ht||$t.morphTargets!==Gt||$t.morphNormals!==Fe||$t.morphColors!==En||$t.toneMapping!==Je||st.isWebGL2===!0&&$t.morphTargetsCount!==Ee)&&(Le=!0):(Le=!0,$t.__version=z.version);let Ls=$t.currentProgram;Le===!0&&(Ls=La(z,U,O));let Of=!1,bo=!1,Ql=!1,nn=Ls.getUniforms(),Is=$t.uniforms;if(W.useProgram(Ls.program)&&(Of=!0,bo=!0,Ql=!0),z.id!==k&&(k=z.id,bo=!0),Of||y!==b){nn.setValue(R,"projectionMatrix",b.projectionMatrix),nn.setValue(R,"viewMatrix",b.matrixWorldInverse);let On=nn.map.cameraPosition;On!==void 0&&On.setValue(R,zt.setFromMatrixPosition(b.matrixWorld)),st.logarithmicDepthBuffer&&nn.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&nn.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,bo=!0,Ql=!0)}if(O.isSkinnedMesh){nn.setOptional(R,O,"bindMatrix"),nn.setOptional(R,O,"bindMatrixInverse");let On=O.skeleton;On&&(st.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),nn.setValue(R,"boneTexture",On.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(nn.setOptional(R,O,"batchingTexture"),nn.setValue(R,"batchingTexture",O._matricesTexture,S));let th=B.morphAttributes;if((th.position!==void 0||th.normal!==void 0||th.color!==void 0&&st.isWebGL2===!0)&&Jt.update(O,B,Ls),(bo||$t.receiveShadow!==O.receiveShadow)&&($t.receiveShadow=O.receiveShadow,nn.setValue(R,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Is.envMap.value=Ot,Is.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),bo&&(nn.setValue(R,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&R1(Is,Ql),gt&&z.fog===!0&&ht.refreshFogUniforms(Is,gt),ht.refreshMaterialUniforms(Is,z,Y,V,Tt),Ar.upload(R,Nf($t),Is,S)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ar.upload(R,Nf($t),Is,S),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&nn.setValue(R,"center",O.center),nn.setValue(R,"modelViewMatrix",O.modelViewMatrix),nn.setValue(R,"normalMatrix",O.normalMatrix),nn.setValue(R,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let On=z.uniformsGroups;for(let eh=0,P1=On.length;eh<P1;eh++)if(st.isWebGL2){let Bf=On[eh];ie.update(Bf,Ls),ie.bind(Bf,Ls)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ls}function R1(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function C1(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,B){mt.get(b.texture).__webglTexture=U,mt.get(b.depthTexture).__webglTexture=B;let z=mt.get(b);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){let B=mt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){A=b,L=U,w=B;let z=!0,O=null,gt=!1,At=!1;if(b){let Ot=mt.get(b);Ot.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(R.FRAMEBUFFER,null),z=!1):Ot.__webglFramebuffer===void 0?S.setupRenderTarget(b):Ot.__hasExternalTextures&&S.rebindTextures(b,mt.get(b.texture).__webglTexture,mt.get(b.depthTexture).__webglTexture);let qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let Ht=mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?O=Ht[U][B]:O=Ht[U],gt=!0):st.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?O=mt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ht)?O=Ht[B]:O=Ht,T.copy(b.viewport),N.copy(b.scissor),$=b.scissorTest}else T.copy(Q).multiplyScalar(Y).floor(),N.copy(tt).multiplyScalar(Y).floor(),$=ft;if(W.bindFramebuffer(R.FRAMEBUFFER,O)&&st.drawBuffers&&z&&W.drawBuffers(b,O),W.viewport(T),W.scissor(N),W.setScissorTest($),gt){let Ot=mt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ot.__webglTexture,B)}else if(At){let Ot=mt.get(b.texture),qt=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,B||0,qt)}k=-1},this.readRenderTargetPixels=function(b,U,B,z,O,gt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Ut=Ut[At]),Ut){W.bindFramebuffer(R.FRAMEBUFFER,Ut);try{let Ot=b.texture,qt=Ot.format,Ht=Ot.type;if(qt!==si&&yt.convert(qt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Gt=Ht===ri&&(X.has("EXT_color_buffer_half_float")||st.isWebGL2&&X.has("EXT_color_buffer_float"));if(Ht!==hs&&yt.convert(Ht)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===cs&&(st.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&B>=0&&B<=b.height-O&&R.readPixels(U,B,z,O,yt.convert(qt),yt.convert(Ht),gt)}finally{let Ot=A!==null?mt.get(A).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(b,U,B=0){let z=Math.pow(2,-B),O=Math.floor(U.image.width*z),gt=Math.floor(U.image.height*z);S.setTexture2D(U,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,b.x,b.y,O,gt),W.unbindTexture()},this.copyTextureToTexture=function(b,U,B,z=0){let O=U.image.width,gt=U.image.height,At=yt.convert(B.format),Ut=yt.convert(B.type);S.setTexture2D(B,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,z,b.x,b.y,O,gt,At,Ut,U.image.data):U.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,z,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,At,U.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,z,b.x,b.y,At,Ut,U.image),z===0&&B.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B,z,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=b.max.x-b.min.x+1,At=b.max.y-b.min.y+1,Ut=b.max.z-b.min.z+1,Ot=yt.convert(z.format),qt=yt.convert(z.type),Ht;if(z.isData3DTexture)S.setTexture3D(z,0),Ht=R.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)S.setTexture2DArray(z,0),Ht=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);let Gt=R.getParameter(R.UNPACK_ROW_LENGTH),Fe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),En=R.getParameter(R.UNPACK_SKIP_PIXELS),Je=R.getParameter(R.UNPACK_SKIP_ROWS),Ii=R.getParameter(R.UNPACK_SKIP_IMAGES),Ee=B.isCompressedTexture?B.mipmaps[O]:B.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ee.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ee.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,b.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,b.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,b.min.z),B.isDataTexture||B.isData3DTexture?R.texSubImage3D(Ht,O,U.x,U.y,U.z,gt,At,Ut,Ot,qt,Ee.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ht,O,U.x,U.y,U.z,gt,At,Ut,Ot,Ee.data)):R.texSubImage3D(Ht,O,U.x,U.y,U.z,gt,At,Ut,Ot,qt,Ee),R.pixelStorei(R.UNPACK_ROW_LENGTH,Gt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Fe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,En),R.pixelStorei(R.UNPACK_SKIP_ROWS,Je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ii),O===0&&z.generateMipmaps&&R.generateMipmap(Ht),W.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),W.unbindTexture()},this.resetState=function(){L=0,w=0,A=null,W.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=t===Au?"display-p3":"srgb",n.unpackColorSpace=oe.workingColorSpace===zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ve?Vs:wm}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Vs?ve:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},iu=class extends Ho{};iu.prototype.isWebGL1Renderer=!0;var bc=class e{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=n}clone(){return new e(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Or=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};var Vo=class extends An{constructor(t,n,i,s,r,o,a,c,l){super(t,n,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,n){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=n||(o.isVector2?new nt:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n){let i=new C,s=[],r=[],o=[],a=new C,c=new Ie;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(je(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(n===!0){let p=Math.acos(je(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Go=class extends Vn{constructor(t=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,n){let i=n||new nt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},su=class extends Go{constructor(t,n,i,s,r,o){super(t,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pu(){let e=0,t=0,n=0,i=0;function s(r,o,a,c){e=r,t=a,n=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return e+t*r+n*o+i*a}}}var tc=new C,Lh=new Pu,Ih=new Pu,Uh=new Pu,Wo=class extends Vn{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new C){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(tc.subVectors(s[0],s[1]).add(s[0]),l=tc);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(tc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Lh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Ih.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Uh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ih.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Uh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Lh.calc(c),Ih.calc(c),Uh.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function om(e,t,n,i,s){let r=(i-t)*.5,o=(s-n)*.5,a=e*e,c=e*a;return(2*n-2*i+r+o)*c+(-3*n+3*i-2*r-o)*a+r*e+n}function DS(e,t){let n=1-e;return n*n*t}function NS(e,t){return 2*(1-e)*e*t}function FS(e,t){return e*e*t}function Uo(e,t,n,i){return DS(e,t)+NS(e,n)+FS(e,i)}function OS(e,t){let n=1-e;return n*n*n*t}function BS(e,t){let n=1-e;return 3*n*n*e*t}function kS(e,t){return 3*(1-e)*e*e*t}function zS(e,t){return e*e*e*t}function Do(e,t,n,i,s){return OS(e,t)+BS(e,n)+kS(e,i)+zS(e,s)}var Ec=class extends Vn{constructor(t=new nt,n=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new nt){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Do(t,s.x,r.x,o.x,a.x),Do(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ru=class extends Vn{constructor(t=new C,n=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new C){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Do(t,s.x,r.x,o.x,a.x),Do(t,s.y,r.y,o.y,a.y),Do(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends Vn{constructor(t=new nt,n=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new nt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new nt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ou=class extends Vn{constructor(t=new C,n=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new C){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new C){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wc=class extends Vn{constructor(t=new nt,n=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new nt){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Uo(t,s.x,r.x,o.x),Uo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends Vn{constructor(t=new C,n=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new C){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Uo(t,s.x,r.x,o.x),Uo(t,s.y,r.y,o.y),Uo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rc=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new nt){let i=n,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(om(a,c.x,l.x,h.x,u.x),om(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new nt().fromArray(s))}return this}},Cc=Object.freeze({__proto__:null,ArcCurve:su,CatmullRomCurve3:Wo,CubicBezierCurve:Ec,CubicBezierCurve3:ru,EllipseCurve:Go,LineCurve:Tc,LineCurve3:ou,QuadraticBezierCurve:wc,QuadraticBezierCurve3:Ac,SplineCurve:Rc}),au=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,n)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new Cc[s.type]().fromJSON(s))}return this}},Pc=class extends au{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new Tc(this.currentPoint.clone(),new nt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let r=new wc(this.currentPoint.clone(),new nt(t,n),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,r,o){let a=new Ec(this.currentPoint.clone(),new nt(t,n),new nt(i,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new Rc(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,n+c,i,s,r,o),this}absarc(t,n,i,s,r,o){return this.absellipse(t,n,i,i,s,r,o),this}ellipse(t,n,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,n+h,i,s,r,o,a,c),this}absellipse(t,n,i,s,r,o,a,c){let l=new Go(t,n,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var cu=class e extends Rn{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new C,E=new C,L=new C;for(let w=0;w<n.length;w+=3)p(n[w+0],_),p(n[w+1],E),p(n[w+2],L),c(_,E,L,M)}function c(M,_,E,L){let w=L+1,A=[];for(let k=0;k<=w;k++){A[k]=[];let y=M.clone().lerp(E,k/w),T=_.clone().lerp(E,k/w),N=w-k;for(let $=0;$<=N;$++)$===0&&k===w?A[k][$]=y:A[k][$]=y.clone().lerp(T,$/N)}for(let k=0;k<w;k++)for(let y=0;y<2*(w-k)-1;y++){let T=Math.floor(y/2);y%2===0?(d(A[k][T+1]),d(A[k+1][T]),d(A[k][T])):(d(A[k][T+1]),d(A[k+1][T+1]),d(A[k+1][T]))}}function l(M){let _=new C;for(let E=0;E<r.length;E+=3)_.x=r[E+0],_.y=r[E+1],_.z=r[E+2],_.normalize().multiplyScalar(M),r[E+0]=_.x,r[E+1]=_.y,r[E+2]=_.z}function h(){let M=new C;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let E=m(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;o.push(E,1-L)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let _=o[M+0],E=o[M+2],L=o[M+4],w=Math.max(_,E,L),A=Math.min(_,E,L);w>.9&&A<.1&&(_<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,_){let E=M*3;_.x=t[E+0],_.y=t[E+1],_.z=t[E+2]}function g(){let M=new C,_=new C,E=new C,L=new C,w=new nt,A=new nt,k=new nt;for(let y=0,T=0;y<r.length;y+=9,T+=6){M.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),E.set(r[y+6],r[y+7],r[y+8]),w.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),k.set(o[T+4],o[T+5]),L.copy(M).add(_).add(E).divideScalar(3);let N=m(L);x(w,T+0,M,N),x(A,T+2,_,N),x(k,T+4,E,N)}}function x(M,_,E,L){L<0&&M.x===1&&(o[_]=M.x-1),E.x===0&&E.z===0&&(o[_]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}};var Xo=class extends Pc{constructor(t){super(t),this.uuid=Zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new Pc().fromJSON(s))}return this}},HS={triangulate:function(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,r=Bm(e,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(i&&(r=qS(e,t,r,n)),e.length>80*n){a=l=e[0],c=h=e[1];for(let g=n;g<s;g+=n)u=e[g],d=e[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return qo(r,o,n,a,c,p,0),o}};function Bm(e,t,n,i,s){let r,o;if(s===ib(e,t,n,i)>0)for(r=t;r<n;r+=i)o=am(r,e[r],e[r+1],o);else for(r=n-i;r>=t;r-=i)o=am(r,e[r],e[r+1],o);return o&&Vc(o,o.next)&&($o(o),o=o.next),o}function Xs(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Vc(n,n.next)||Te(n.prev,n,n.next)===0)){if($o(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function qo(e,t,n,i,s,r,o){if(!e)return;!o&&r&&KS(e,i,s,r);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,r?GS(e,i,s,r):VS(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),$o(e),e=l.next,a=l.next;continue}if(e=l,e===a){o?o===1?(e=WS(Xs(e),t,n),qo(e,t,n,i,s,r,2)):o===2&&XS(e,t,n,i,s,r):qo(Xs(e),t,n,i,s,r,1);break}}}function VS(e){let t=e.prev,n=e,i=e.next;if(Te(t,n,i)>=0)return!1;let s=t.x,r=n.x,o=i.x,a=t.y,c=n.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Er(s,a,r,c,o,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function GS(e,t,n,i){let s=e.prev,r=e,o=e.next;if(Te(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=lu(p,g,t,n,i),M=lu(x,m,t,n,i),_=e.prevZ,E=e.nextZ;for(;_&&_.z>=f&&E&&E.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Er(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=p&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Er(a,h,c,u,l,d,E.x,E.y)&&Te(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Er(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=M;){if(E.x>=p&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Er(a,h,c,u,l,d,E.x,E.y)&&Te(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function WS(e,t,n){let i=e;do{let s=i.prev,r=i.next.next;!Vc(s,r)&&km(s,i,i.next,r)&&Yo(s,r)&&Yo(r,s)&&(t.push(s.i/n|0),t.push(i.i/n|0),t.push(r.i/n|0),$o(i),$o(i.next),i=e=r),i=i.next}while(i!==e);return Xs(i)}function XS(e,t,n,i,s,r){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tb(o,a)){let c=zm(o,a);o=Xs(o,o.next),c=Xs(c,c.next),qo(o,t,n,i,s,r,0),qo(c,t,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==e)}function qS(e,t,n,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:e.length,l=Bm(e,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(QS(l));for(s.sort(YS),r=0;r<s.length;r++)n=$S(s[r],n);return n}function YS(e,t){return e.x-t.x}function $S(e,t){let n=ZS(e,t);if(!n)return t;let i=zm(n,e);return Xs(i,i.next),Xs(n,n.next)}function ZS(e,t){let n=t,i=-1/0,s,r=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=r&&d>i&&(i=d,s=n.x<n.next.x?n:n.next,d===r))return s}n=n.next}while(n!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;n=s;do r>=n.x&&n.x>=c&&r!==n.x&&Er(o<l?r:i,o,c,l,o<l?i:r,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(r-n.x),Yo(n,e)&&(u<h||u===h&&(n.x>s.x||n.x===s.x&&JS(s,n)))&&(s=n,h=u)),n=n.next;while(n!==a);return s}function JS(e,t){return Te(e.prev,e,t.prev)<0&&Te(t.next,e,e.next)<0}function KS(e,t,n,i){let s=e;do s.z===0&&(s.z=lu(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,jS(s)}function jS(e){let t,n,i,s,r,o,a,c,l=1;do{for(n=e,e=null,r=null,o=0;n;){for(o++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(s=n,n=n.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:e=s,s.prevZ=r,r=s;n=i}r.nextZ=null,l*=2}while(o>1);return e}function lu(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function QS(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Er(e,t,n,i,s,r,o,a){return(s-o)*(t-a)>=(e-o)*(r-a)&&(e-o)*(i-a)>=(n-o)*(t-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function tb(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!eb(e,t)&&(Yo(e,t)&&Yo(t,e)&&nb(e,t)&&(Te(e.prev,e,t.prev)||Te(e,t.prev,t))||Vc(e,t)&&Te(e.prev,e,e.next)>0&&Te(t.prev,t,t.next)>0)}function Te(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Vc(e,t){return e.x===t.x&&e.y===t.y}function km(e,t,n,i){let s=nc(Te(e,t,n)),r=nc(Te(e,t,i)),o=nc(Te(n,i,e)),a=nc(Te(n,i,t));return!!(s!==r&&o!==a||s===0&&ec(e,n,t)||r===0&&ec(e,i,t)||o===0&&ec(n,e,i)||a===0&&ec(n,t,i))}function ec(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function nc(e){return e>0?1:e<0?-1:0}function eb(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&km(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Yo(e,t){return Te(e.prev,e,e.next)<0?Te(e,t,e.next)>=0&&Te(e,e.prev,t)>=0:Te(e,t,e.prev)<0||Te(e,e.next,t)<0}function nb(e,t){let n=e,i=!1,s=(e.x+t.x)/2,r=(e.y+t.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function zm(e,t){let n=new hu(e.i,e.x,e.y),i=new hu(t.i,t.x,t.y),s=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function am(e,t,n,i){let s=new hu(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $o(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function hu(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ib(e,t,n,i){let s=0;for(let r=t,o=n-i;r<n;r+=i)s+=(e[o]-e[r])*(e[r+1]+e[o+1]),o=r;return s}var No=class e{static area(t){let n=t.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],r=[];cm(t),lm(i,t);let o=t.length;n.forEach(cm);for(let c=0;c<n.length;c++)s.push(o),o+=n[c].length,lm(i,n[c]);let a=HS.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function cm(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function lm(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Lc=class e extends Rn{constructor(t=new Xo([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new we(s,3)),this.setAttribute("uv",new we(r,2)),this.computeVertexNormals();function o(a){let c=[],l=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,u=n.depth!==void 0?n.depth:1,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,f=n.extrudePath,M=n.UVGenerator!==void 0?n.UVGenerator:sb,_,E=!1,L,w,A,k;f&&(_=f.getSpacedPoints(h),E=!0,d=!1,L=f.computeFrenetFrames(h,!1),w=new C,A=new C,k=new C),d||(m=0,p=0,g=0,x=0);let y=a.extractPoints(l),T=y.shape,N=y.holes;if(!No.isClockWise(T)){T=T.reverse();for(let R=0,at=N.length;R<at;R++){let X=N[R];No.isClockWise(X)&&(N[R]=X.reverse())}}let ot=No.triangulateShape(T,N),I=T;for(let R=0,at=N.length;R<at;R++){let X=N[R];T=T.concat(X)}function F(R,at,X){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(at,X)}let V=T.length,Y=ot.length;function q(R,at,X){let st,W,Rt,mt=R.x-at.x,S=R.y-at.y,v=X.x-R.x,D=X.y-R.y,et=mt*mt+S*S,K=mt*D-S*v;if(Math.abs(K)>Number.EPSILON){let Z=Math.sqrt(et),bt=Math.sqrt(v*v+D*D),ht=at.x-S/Z,vt=at.y+mt/Z,Lt=X.x-D/bt,Vt=X.y+v/bt,j=((Lt-ht)*D-(Vt-vt)*v)/(mt*D-S*v);st=ht+mt*j-R.x,W=vt+S*j-R.y;let ne=st*st+W*W;if(ne<=2)return new nt(st,W);Rt=Math.sqrt(ne/2)}else{let Z=!1;mt>Number.EPSILON?v>Number.EPSILON&&(Z=!0):mt<-Number.EPSILON?v<-Number.EPSILON&&(Z=!0):Math.sign(S)===Math.sign(D)&&(Z=!0),Z?(st=-S,W=mt,Rt=Math.sqrt(et)):(st=mt,W=S,Rt=Math.sqrt(et/2))}return new nt(st/Rt,W/Rt)}let G=[];for(let R=0,at=I.length,X=at-1,st=R+1;R<at;R++,X++,st++)X===at&&(X=0),st===at&&(st=0),G[R]=q(I[R],I[X],I[st]);let Q=[],tt,ft=G.concat();for(let R=0,at=N.length;R<at;R++){let X=N[R];tt=[];for(let st=0,W=X.length,Rt=W-1,mt=st+1;st<W;st++,Rt++,mt++)Rt===W&&(Rt=0),mt===W&&(mt=0),tt[st]=q(X[st],X[Rt],X[mt]);Q.push(tt),ft=ft.concat(tt)}for(let R=0;R<m;R++){let at=R/m,X=p*Math.cos(at*Math.PI/2),st=g*Math.sin(at*Math.PI/2)+x;for(let W=0,Rt=I.length;W<Rt;W++){let mt=F(I[W],G[W],st);xt(mt.x,mt.y,-X)}for(let W=0,Rt=N.length;W<Rt;W++){let mt=N[W];tt=Q[W];for(let S=0,v=mt.length;S<v;S++){let D=F(mt[S],tt[S],st);xt(D.x,D.y,-X)}}}let H=g+x;for(let R=0;R<V;R++){let at=d?F(T[R],ft[R],H):T[R];E?(A.copy(L.normals[0]).multiplyScalar(at.x),w.copy(L.binormals[0]).multiplyScalar(at.y),k.copy(_[0]).add(A).add(w),xt(k.x,k.y,k.z)):xt(at.x,at.y,0)}for(let R=1;R<=h;R++)for(let at=0;at<V;at++){let X=d?F(T[at],ft[at],H):T[at];E?(A.copy(L.normals[R]).multiplyScalar(X.x),w.copy(L.binormals[R]).multiplyScalar(X.y),k.copy(_[R]).add(A).add(w),xt(k.x,k.y,k.z)):xt(X.x,X.y,u/h*R)}for(let R=m-1;R>=0;R--){let at=R/m,X=p*Math.cos(at*Math.PI/2),st=g*Math.sin(at*Math.PI/2)+x;for(let W=0,Rt=I.length;W<Rt;W++){let mt=F(I[W],G[W],st);xt(mt.x,mt.y,u+X)}for(let W=0,Rt=N.length;W<Rt;W++){let mt=N[W];tt=Q[W];for(let S=0,v=mt.length;S<v;S++){let D=F(mt[S],tt[S],st);E?xt(D.x,D.y+_[h-1].y,_[h-1].x+X):xt(D.x,D.y,u+X)}}}J(),pt();function J(){let R=s.length/3;if(d){let at=0,X=V*at;for(let st=0;st<Y;st++){let W=ot[st];Dt(W[2]+X,W[1]+X,W[0]+X)}at=h+m*2,X=V*at;for(let st=0;st<Y;st++){let W=ot[st];Dt(W[0]+X,W[1]+X,W[2]+X)}}else{for(let at=0;at<Y;at++){let X=ot[at];Dt(X[2],X[1],X[0])}for(let at=0;at<Y;at++){let X=ot[at];Dt(X[0]+V*h,X[1]+V*h,X[2]+V*h)}}i.addGroup(R,s.length/3-R,0)}function pt(){let R=s.length/3,at=0;Tt(I,at),at+=I.length;for(let X=0,st=N.length;X<st;X++){let W=N[X];Tt(W,at),at+=W.length}i.addGroup(R,s.length/3-R,1)}function Tt(R,at){let X=R.length;for(;--X>=0;){let st=X,W=X-1;W<0&&(W=R.length-1);for(let Rt=0,mt=h+m*2;Rt<mt;Rt++){let S=V*Rt,v=V*(Rt+1),D=at+st+S,et=at+W+S,K=at+W+v,Z=at+st+v;zt(D,et,K,Z)}}}function xt(R,at,X){c.push(R),c.push(at),c.push(X)}function Dt(R,at,X){wt(R),wt(at),wt(X);let st=s.length/3,W=M.generateTopUV(i,s,st-3,st-2,st-1);Bt(W[0]),Bt(W[1]),Bt(W[2])}function zt(R,at,X,st){wt(R),wt(at),wt(st),wt(at),wt(X),wt(st);let W=s.length/3,Rt=M.generateSideWallUV(i,s,W-6,W-3,W-2,W-1);Bt(Rt[0]),Bt(Rt[1]),Bt(Rt[3]),Bt(Rt[1]),Bt(Rt[2]),Bt(Rt[3])}function wt(R){s.push(c[R*3+0]),s.push(c[R*3+1]),s.push(c[R*3+2])}function Bt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return rb(n,i,t)}static fromJSON(t,n){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=n[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Cc[s.type]().fromJSON(s)),new e(i,t.options)}},sb={generateTopUV:function(e,t,n,i,s){let r=t[n*3],o=t[n*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,c),new nt(l,h)]},generateSideWallUV:function(e,t,n,i,s,r){let o=t[n*3],a=t[n*3+1],c=t[n*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new nt(o,1-c),new nt(l,1-u),new nt(d,1-g),new nt(x,1-f)]:[new nt(a,1-c),new nt(h,1-u),new nt(p,1-g),new nt(m,1-f)]}};function rb(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ic=class e extends Rn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,d=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){let M=[],_=f/i,E=0;f===0&&o===0?E=.5/n:f===i&&c===Math.PI&&(E=-.5/n);for(let L=0;L<=n;L++){let w=L/n;u.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+E,1-_),M.push(l++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<n;M++){let _=h[f][M+1],E=h[f][M],L=h[f+1][M],w=h[f+1][M+1];(f!==0||o>0)&&p.push(_,E,w),(f!==i-1||c<Math.PI)&&p.push(E,L,w)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Uc=class e extends cu{constructor(t=1,n=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var Dc=class e extends Rn{constructor(t=new Ac(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,c=new C,l=new nt,h=new C,u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2));function x(){for(let _=0;_<n;_++)m(_);m(r===!1?n:0),M(),f()}function m(_){h=t.getPointAt(_/n,h);let E=o.normals[_],L=o.binormals[_];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,k=Math.sin(A),y=-Math.cos(A);c.x=y*E.x+k*L.x,c.y=y*E.y+k*L.y,c.z=y*E.z+k*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=n;_++)for(let E=1;E<=s;E++){let L=(s+1)*(_-1)+(E-1),w=(s+1)*_+(E-1),A=(s+1)*_+E,k=(s+1)*(_-1)+E;g.push(L,w,k),g.push(w,A,k)}}function M(){for(let _=0;_<=n;_++)for(let E=0;E<=s;E++)l.x=_/n,l.y=E/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new Cc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Gn=class extends Ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Am,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nc=class extends Gn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ic(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function ob(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Br=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],t<s)break e}o=n.length;break n}if(!(t>=r)){let a=n[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uu=class extends Br{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gp,endingEnd:gp}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _p:r=t,a=2*n-i;break;case xp:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case _p:o=t,c=2*i-n;break;case xp:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=n}let l=(i-n)*.5,h=this.valueSize;this._weightPrev=l/(n-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,E=p*m-p*x;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+M*o[l+L]+_*o[c+L]+E*o[u+L];return r}},du=class extends Br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-n)/(s-n),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},fu=class extends Br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ic(n,this.TimeBufferType),this.values=ic(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ic(t.times,Array),values:ic(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case oc:n=this.InterpolantFactoryMethodDiscrete;break;case ac:n=this.InterpolantFactoryMethodLinear;break;case ch:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oc;case this.InterpolantFactoryMethodLinear:return ac;case this.InterpolantFactoryMethodSmooth:return ch}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ob(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ch,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let x=n[u+g];if(x!==n[d+g]||x!==n[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)n[d+p]=n[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)n[c+l]=n[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=ac;var qs=class extends ci{};qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=oc;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var pu=class extends ci{};pu.prototype.ValueTypeName="color";var mu=class extends ci{};mu.prototype.ValueTypeName="number";var gu=class extends Br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-n)/(s-n),l=t*a;for(let h=l+a;l!==h;l+=4)bi.slerpFlat(r,0,o,l-a,o,l,c);return r}},Zo=class extends ci{InterpolantFactoryMethodLinear(t){return new gu(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.DefaultInterpolation=ac;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends ci{};Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=oc;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var _u=class extends ci{};_u.prototype.ValueTypeName="vector";var hm={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},xu=class{constructor(t,n,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},ab=new xu,Jo=class{constructor(t){this.manager=t!==void 0?t:ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var vu=class extends Jo{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=hm.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){n&&n(o),r.manager.itemEnd(t)},0),o;let a=Oo("img");function c(){h(),hm.add(t,this),n&&n(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var $s=class extends Jo{constructor(t){super(t)}load(t,n,i,s){let r=new An,o=new vu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}},kr=class extends an{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}};var Dh=new Ie,um=new C,dm=new C,Ko=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;um.setFromMatrixPosition(t.matrixWorld),n.position.copy(um),dm.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(dm),n.updateMatrixWorld(),Dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},yu=class extends Ko{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let n=this.camera,i=Ir*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},jo=class extends kr{constructor(t,n,i=0,s=Math.PI/3,r=0,o=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fm=new Ie,Ro=new C,Nh=new C,Mu=class extends Ko{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ro.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ro),Nh.copy(i.position),Nh.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Nh),i.updateMatrixWorld(),s.makeTranslation(-Ro.x,-Ro.y,-Ro.z),fm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fm)}},zr=class extends kr{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Mu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Su=class extends Ko{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fc=class extends kr{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Su}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Oc=class extends kr{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Hr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=pm();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};function pm(){return(typeof performance>"u"?Date:performance).now()}var Lu="\\[\\]\\.:\\/",cb=new RegExp("["+Lu+"]","g"),Iu="[^"+Lu+"]",lb="[^"+Lu.replace("\\.","")+"]",hb=/((?:WC+[\/:])*)/.source.replace("WC",Iu),ub=/(WCOD+)?/.source.replace("WCOD",lb),db=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),fb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),pb=new RegExp("^"+hb+ub+db+fb+"$"),mb=["material","materials","bones","map"],bu=class{constructor(t,n,i){let s=i||xe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},xe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cb,"")}static parseTrackName(t){let n=pb.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);mb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=bu;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TE=new Float32Array(1);var Bc=class{constructor(t,n,i=0,s=1/0){this.ray=new gc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(t,n=!0,i=[]){return Eu(t,this,i,n),i.sort(mm),i}intersectObjects(t,n=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Eu(t[s],this,i,n);return i.sort(mm),i}};function mm(e,t){return e.distance-t.distance}function Eu(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){let s=e.children;for(let r=0,o=s.length;r<o;r++)Eu(s[r],t,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Gc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_b=new Nr(-1,1,1,-1,0,1),Uu=class extends Rn{constructor(){super(),this.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new we([0,2,0,0,2,0],2))}},xb=new Uu,Wr=class{constructor(t){this._mesh=new Kt(xb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,_b)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Wc=class extends li{constructor(t,n){super(),this.textureID=n!==void 0?n:"tDiffuse",t instanceof en?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vr.clone(t.uniforms),this.material=new en({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Wr(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qo=class extends li{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xc=class extends li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var qc=class{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){let i=t.getSize(new nt);this._width=i.width,this._height=i.height,n=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wc(Gc),this.copyPass.material.blending=Si,this.clock=new Hr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qo!==void 0&&(o instanceof Qo?i=!0:o instanceof Xc&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){let n=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yc=class extends li{constructor(t,n,i=null,s=null,r=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,n,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Hm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Xr=class e extends li{constructor(t,n,i,s){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,o,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new pn(r,o,{type:ri});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new pn(r,o,{type:ri});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Hm;this.highPassUniforms=Vr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Gc;this.copyUniforms=Vr.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:sc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new oi,this.fsQuad=new Wr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let n=[];for(let i=0;i<t;i++)n.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new en({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new en({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Xr.BlurDirectionX=new nt(1,0);Xr.BlurDirectionY=new nt(0,1);var $c=class extends Or{constructor(t=null){super();let n=new ai;n.deleteAttribute("uv");let i=new Gn({side:on}),s=new Gn,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new zr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Kt(n,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Kt(n,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Kt(n,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Kt(n,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Kt(n,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Kt(n,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new Kt(n,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new Kt(n,qr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Kt(n,qr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Kt(n,qr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new Kt(n,qr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let M=new Kt(n,qr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let _=new Kt(n,qr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function qr(e){let t=new oi;return t.color.setScalar(e),t}var tr=typeof self<"u"?self:{};function n0(e,t){e=e.split(".");var n,i=tr;for((e[0]in i)||i.execScript===void 0||i.execScript("var "+e[0]);e.length&&(n=e.shift());)e.length||t===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t}function Js(){throw Error("Invalid UTF8")}function Vm(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var Zc,Du,vb=typeof TextDecoder<"u",yb,Mb=typeof TextEncoder<"u";function i0(e){if(Mb)e=(yb||=new TextEncoder).encode(e);else{let n=0,i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var md,cl;t:{for(Nu=["CLOSURE_FLAGS"],Jc=tr,Kc=0;Kc<Nu.length;Kc++)if((Jc=Jc[Nu[Kc]])==null){cl=null;break t}cl=Jc}var Nu,Jc,Kc,ua,Gm=cl&&cl[610401301];md=Gm!=null&&Gm;var Wm=tr.navigator;function $u(e){return!!md&&!!ua&&ua.brands.some((({brand:t})=>t&&t.indexOf(e)!=-1))}function Yn(e){var t;return(t=tr.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function ms(){return!!md&&!!ua&&ua.brands.length>0}function Fu(){return ms()?$u("Chromium"):(Yn("Chrome")||Yn("CriOS"))&&!(!ms()&&Yn("Edge"))||Yn("Silk")}function gd(e){return gd[" "](e),e}ua=Wm&&Wm.userAgentData||null,gd[" "]=function(){};var Sb=!ms()&&(Yn("Trident")||Yn("MSIE"));!Yn("Android")||Fu(),Fu(),Yn("Safari")&&(Fu()||!ms()&&Yn("Coast")||!ms()&&Yn("Opera")||!ms()&&Yn("Edge")||(ms()?$u("Microsoft Edge"):Yn("Edg/"))||ms()&&$u("Opera"));var s0={},ra=null;function bb(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);let i=new Uint8Array(n),s=0;return(function(r,o){function a(l){for(;c<r.length;){let h=r.charAt(c++),u=ra[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}r0();let c=0;for(;;){let l=a(-1),h=a(0),u=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),d!=64&&o(u<<6&192|d))}})(e,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function r0(){if(!ra){ra={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=e.concat(t[n].split(""));s0[n]=i;for(let s=0;s<i.length;s++){let r=i[s];ra[r]===void 0&&(ra[r]=s)}}}}var o0=typeof Uint8Array<"u",a0=!Sb&&typeof btoa=="function";function Xm(e){if(!a0){var t;t===void 0&&(t=0),r0(),t=s0[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let c=0,l=0;for(;c<e.length-2;c+=3){var s=e[c],r=e[c+1],o=e[c+2],a=t[s>>2];s=t[(3&s)<<4|r>>4],r=t[(15&r)<<2|o>>6],o=t[63&o],n[l++]=a+s+r+o}switch(a=0,o=i,e.length-c){case 2:o=t[(15&(a=e[c+1]))<<2]||i;case 1:e=e[c],n[l]=t[e>>2]+t[(3&e)<<4|a>>4]+o+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}var qm=/[-_.]/g,Eb={"-":"+",_:"/",".":"="};function Tb(e){return Eb[e]||""}function c0(e){if(!a0)return bb(e);qm.test(e)&&(e=e.replace(qm,Tb)),e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function ga(e){return o0&&e!=null&&e instanceof Uint8Array}var Qr={};function er(){return wb||=new qi(null,Qr)}function _d(e){l0(Qr);var t=e.g;return(t=t==null||ga(t)?t:typeof t=="string"?c0(t):null)==null?t:e.g=t}var qi=class{h(){return new Uint8Array(_d(this)||0)}constructor(e,t){if(l0(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}},wb,Ab;function l0(e){if(e!==Qr)throw Error("illegal external caller")}function h0(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function u0(){let e=Error();h0(e,"incident"),(function(t){tr.setTimeout((()=>{throw t}),0)})(e)}function Zu(e){return h0(e=Error(e),"warning"),e}function xd(){return typeof BigInt=="function"}function In(e){return Array.prototype.slice.call(e)}var ao=typeof Symbol=="function"&&typeof Symbol()=="symbol";function vl(e){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():e}var _a=vl(),Ym=vl("0di"),Ou=vl("2ex"),ta=vl("1oa"),yl=ao?(e,t)=>{e[_a]|=t}:(e,t)=>{e.G!==void 0?e.G|=t:Object.defineProperties(e,{G:{value:t,configurable:!0,writable:!0,enumerable:!1}})},Ju=ao?(e,t)=>{e[_a]&=~t}:(e,t)=>{e.G!==void 0&&(e.G&=~t)},Be=ao?e=>0|e[_a]:e=>0|e.G,ce=ao?e=>e[_a]:e=>e.G,He=ao?(e,t)=>{e[_a]=t}:(e,t)=>{e.G!==void 0?e.G=t:Object.defineProperties(e,{G:{value:t,configurable:!0,writable:!0,enumerable:!1}})};function co(e){return yl(e,34),e}function Rb(e,t){He(t,-30975&(0|e))}function Ku(e,t){He(t,-30941&(34|e))}var vd,xa={},d0={};function $m(e){return!(!e||typeof e!="object"||e.Ia!==d0)}function yd(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function Md(e,t){if(e!=null){if(typeof e=="string")e=e?new qi(e,Qr):er();else if(e.constructor!==qi)if(ga(e))e=e.length?new qi(new Uint8Array(e),Qr):er();else{if(!t)throw Error();e=void 0}}return e}function ll(e){return!(!Array.isArray(e)||e.length)&&!!(1&Be(e))}var Zm=[];function Ts(e){if(2&e)throw Error()}He(Zm,55),vd=Object.freeze(Zm);var hl=class e{constructor(t,n,i){this.l=0,this.g=t,this.h=n,this.m=i}next(){if(this.l<this.g.length){let t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new e(this.g,this.h,this.m)}},_s;function f0(e,t){(t=_s?t[_s]:void 0)&&(e[_s]=In(t))}var Cb=Object.freeze({});function Ml(e){return e.Pa=!0,e}var Pb=Ml((e=>typeof e=="number")),Jm=Ml((e=>typeof e=="string")),Lb=Ml((e=>typeof e=="boolean")),Sl=typeof tr.BigInt=="function"&&typeof tr.BigInt(0)=="bigint",ju=Ml((e=>Sl?e>=Ub&&e<=Nb:e[0]==="-"?Km(e,Ib):Km(e,Db))),Ib=Number.MIN_SAFE_INTEGER.toString(),Ub=Sl?BigInt(Number.MIN_SAFE_INTEGER):void 0,Db=Number.MAX_SAFE_INTEGER.toString(),Nb=Sl?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Km(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}var Fb=typeof Uint8Array.prototype.slice=="function",p0,le=0,De=0;function jm(e){let t=e>>>0;le=t,De=(e-t)/4294967296>>>0}function to(e){if(e<0){jm(-e);let[t,n]=Td(le,De);le=t>>>0,De=n>>>0}else jm(e)}function Sd(e){let t=p0||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),De=0,le=t.getUint32(0,!0)}function bd(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:da(e,t)}function Ed(e,t){let n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=bd(e,t))=="number"?n?-e:e:n?"-"+e:e}function da(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else xd()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Qm(n)+Qm(e));return n}function Qm(e){return e=String(e),"0000000".slice(e.length)+e}function bl(e){if(e.length<16)to(Number(e));else if(xd())e=BigInt(e),le=Number(e&BigInt(4294967295))>>>0,De=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");De=le=0;let n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){let r=Number(e.slice(i,s));De*=1e6,le=1e6*le+r,le>=4294967296&&(De+=Math.trunc(le/4294967296),De>>>=0,le>>>=0)}if(t){let[i,s]=Td(le,De);le=i,De=s}}}function Td(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function ws(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function m0(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}var Ob=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function El(e){let t=typeof e;switch(t){case"bigint":return!0;case"number":return Number.isFinite(e)}return t==="string"&&Ob.test(e)}function lo(e){if(e==null)return e;if(typeof e=="string"){if(!e)return;e=+e}return typeof e=="number"&&Number.isFinite(e)?0|e:void 0}function g0(e){if(e==null)return e;if(typeof e=="string"){if(!e)return;e=+e}return typeof e=="number"&&Number.isFinite(e)?e>>>0:void 0}function tg(e){return e[0]!=="-"&&(e.length<20||e.length===20&&Number(e.substring(0,6))<184467)}function wd(e){return e=Math.trunc(e),Number.isSafeInteger(e)||(to(e),e=Ed(le,De)),e}function Ad(e){var t=Math.trunc(Number(e));if(Number.isSafeInteger(t))return String(t);if((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),!(e[0]==="-"?e.length<20||e.length===20&&Number(e.substring(0,7))>-922337:e.length<19||e.length===19&&Number(e.substring(0,6))<922337))if(bl(e),e=le,2147483648&(t=De))if(xd())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,i]=Td(e,t);e="-"+da(n,i)}else e=da(e,t);return e}function ul(e){return e==null?e:typeof e=="bigint"?(ju(e)?e=Number(e):(e=BigInt.asIntN(64,e),e=ju(e)?Number(e):String(e)),e):El(e)?typeof e=="number"?wd(e):Ad(e):void 0}function Bb(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(BigInt.asUintN(64,e));if(El(e)){if(t==="string")return t=Math.trunc(Number(e)),Number.isSafeInteger(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),tg(e)||(bl(e),e=da(le,De))),e;if(t==="number")return(e=Math.trunc(e))>=0&&Number.isSafeInteger(e)?e:(function(n){if(n<0){to(n);var i=da(le,De);return n=Number(i),Number.isSafeInteger(n)?n:i}return tg(i=String(n))?i:(to(n),bd(le,De))})(e)}}function _0(e){if(typeof e!="string")throw Error();return e}function ho(e){if(e!=null&&typeof e!="string")throw Error();return e}function xs(e){return e==null||typeof e=="string"?e:void 0}function Rd(e,t,n,i){if(e!=null&&typeof e=="object"&&e.X===xa)return e;if(!Array.isArray(e))return n?2&i?(e=t[Ym])?t=e:(co((e=new t).u),t=t[Ym]=e):t=new t:t=void 0,t;let s=n=Be(e);return s===0&&(s|=32&i),s|=2&i,s!==n&&He(e,s),new t(e)}function kb(e,t,n){if(t)t:{if(!El(t=e))throw Zu("int64");switch(typeof t){case"string":t=Ad(t);break t;case"bigint":if(e=t=BigInt.asIntN(64,t),Jm(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Pb(e)&&!Number.isSafeInteger(e))throw Error(String(e));t=Sl?BigInt(t):Lb(t)?t?"1":"0":Jm(t)?t.trim()||"0":String(t);break t;default:t=wd(t)}}else t=ul(e);return typeof(n=(e=t)==null?n?0:void 0:e)=="string"&&(t=+n,Number.isSafeInteger(t))?t:n}function x0(e){var t;return ea===void 0&&(ea=typeof Proxy=="function"?eg(Proxy):null),(t=!ea)||(na===void 0&&(na=typeof WeakMap=="function"?eg(WeakMap):null),t=!na),t?e:(t=eo?.get(e))?t:Math.random()>.01?e:((function(n){if(Bu===void 0){let i=new ea([],{});Bu=Array.prototype.concat.call([],i).length===1}Bu&&typeof Symbol=="function"&&Symbol.isConcatSpreadable&&(n[Symbol.isConcatSpreadable]=!0)})(e),(function(n,i){(eo||=new na).set(n,i),(v0||=new na).set(i,n)})(e,t=new ea(e,{set:(n,i,s)=>(u0(),n[i]=s,!0)})),t)}var eo,v0,ea,na,Bu,dl,y0,zb;function eg(e){try{return e.toString().indexOf("[native code]")!==-1?e:null}catch{return null}}function vs(e,t,n){return e=M0(e,t[0],t[1],n?1:2),t!==y0&&n&&yl(e,16384),e}function M0(e,t,n,i){if(i=i??0,e==null&&(e=dl),dl=void 0,e==null){var s=96;n?(e=[n],s|=512):e=[],t&&(s=-33521665&s|(1023&t)<<15)}else{if(!Array.isArray(e))throw Error("narr");if(2048&(s=Be(e)))throw Error("farr");if(64&s)return e;if(i===1||i===2||(s|=64),n&&(s|=512,n!==e[0]))throw Error("mid");t:{if(i=(n=e).length){let r=i-1;if(yd(n[r])){if((t=r-(+!!(512&(s|=256))-1))>=1024)throw Error("pvtlmt");s=-33521665&s|(1023&t)<<15;break t}}if(t){if((t=Math.max(t,i-(+!!(512&s)-1)))>1024)throw Error("spvt");s=-33521665&s|(1023&t)<<15}}}return He(e,s),e}var Hb={},Vb=(function(){try{return gd(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),aa=class{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}},Gb=Vb?(Object.setPrototypeOf(aa.prototype,Map.prototype),Object.defineProperties(aa.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),aa):class extends Map{constructor(){super()}};function ng(e){return e}function ku(e){if(2&e.M)throw Error("Cannot mutate an immutable Map")}var Zn=class extends Gb{constructor(e,t,n=ng,i=ng){super();let s=Be(e);s|=64,He(e,s),this.M=s,this.T=t,this.S=n,this.Z=this.T?Wb:i;for(let r=0;r<e.length;r++){let o=e[r],a=n(o[0],!1,!0),c=o[1];t?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,s),super.set(a,c)}}oa(e=ig){if(this.size!==0)return this.Y(e)}Y(e=ig){let t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){ku(this),super.clear()}delete(e){return ku(this),super.delete(this.S(e,!0,!1))}entries(){var e=this.na();return new hl(e,Xb,this)}keys(){return this.Ha()}values(){var e=this.na();return new hl(e,Zn.prototype.get,this)}forEach(e,t){super.forEach(((n,i)=>{e.call(t,this.get(i),i,this)}))}set(e,t){return ku(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.Z(t,!0,!0,this.T,!1,this.M))}Na(e){let t=this.S(e[0],!1,!0);e=e[1],e=this.T?e===void 0?null:e:this.Z(e,!1,!0,void 0,!1,this.M),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.T;return n?((n=this.Z(t,!1,!0,n,this.sa,this.M))!==t&&super.set(e,n),n):t}}na(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function Wb(e,t,n,i,s,r){return e=Rd(e,i,n,r),s&&(e=wl(e)),e}function ig(e){return e}function Xb(e){return[e,this.get(e)]}var qb;function sg(){return qb||=new Zn(co([]),void 0,void 0,void 0,Hb)}function Cd(e,t,n,i,s){if(e!=null){if(Array.isArray(e))e=ll(e)?void 0:s&&2&Be(e)?e:Tl(e,t,n,i!==void 0,s);else if(yd(e)){let r={};for(let o in e)r[o]=Cd(e[o],t,n,i,s);e=r}else e=t(e,i);return e}}function Tl(e,t,n,i,s){let r=i||n?Be(e):0;i=i?!!(32&r):void 0;let o=In(e);for(let a=0;a<o.length;a++)o[a]=Cd(o[a],t,n,i,s);return n&&(f0(o,e),n(r,o)),o}function Yb(e){return Cd(e,Pd,void 0,void 0,!1)}function Pd(e){return e.X===xa?e.toJSON():e instanceof Zn?e.oa(Yb):(function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return ju(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(ll(t))return}else{if(ga(t))return Xm(t);if(t instanceof qi){let n=t.g;return n==null?"":typeof n=="string"?n:t.g=Xm(n)}if(t instanceof Zn)return t.oa()}}return t})(e)}function Qu(e,t,n=Ku){if(e!=null){if(o0&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=Be(e);return 2&i?e:(t&&=i===0||!!(32&i)&&!(64&i||!(16&i)),t?(He(e,-12293&(34|i)),e):Tl(e,Qu,4&i?Ku:n,!0,!0))}return e.X===xa?(n=e.u,e=2&(i=ce(n))?e:Ld(e,n,i,!0)):e instanceof Zn&&!(2&e.M)&&(n=co(e.Y(Qu)),e=new Zn(n,e.T,e.S,e.Z)),e}}function Ld(e,t,n,i){return e=e.constructor,dl=t=S0(t,n,i),t=new e(t),dl=void 0,t}function S0(e,t,n){let i=n||2&t?Ku:Rb,s=!!(32&t);return e=(function(r,o,a){let c=In(r);var l=c.length;let h=256&o?c[l-1]:void 0;for(l+=h?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(h){o=c[o]={};for(let u in h)o[u]=a(h[u])}return f0(c,r),c})(e,t,(r=>Qu(r,s,i))),yl(e,32|(n?2:0)),e}function wl(e){let t=e.u,n=ce(t);return 2&n?Ld(e,t,n,!1):e}function Ms(e,t){return Ji(e=e.u,ce(e),t)}function rg(e,t,n,i){if(!((t=i+(+!!(512&t)-1))<0||t>=e.length||t>=n))return e[t]}function Ji(e,t,n,i){if(n===-1)return null;let s=t>>15&1023||536870912;if(!(n>=s)){var r=e.length;return i&&256&t&&(i=e[r-1][n])!=null?(rg(e,t,s,n)&&Ou!=null&&((t=(e=Ab??={})[Ou]||0)>=4||(e[Ou]=t+1,u0())),i):rg(e,t,s,n)}return 256&t?e[e.length-1][n]:void 0}function fe(e,t,n){let i=e.u,s=ce(i);return Ts(s),Re(i,s,t,n),e}function Re(e,t,n,i){let s=t>>15&1023||536870912;if(n>=s){let r,o=t;if(256&t)r=e[e.length-1];else{if(i==null)return o;r=e[s+(+!!(512&t)-1)]={},o|=256}return r[n]=i,n<s&&(e[n+(+!!(512&t)-1)]=void 0),o!==t&&He(e,o),o}return e[n+(+!!(512&t)-1)]=i,256&t&&n in(e=e[e.length-1])&&delete e[n],t}function nl(e,t){e=e.u;let n=ce(e),i=Ji(e,n,t),s=ws(i);return s!=null&&s!==i&&Re(e,n,t,s),s}function b0(e){e=e.u;let t=ce(e),n=Ji(e,t,1),i=Md(n,!0);return i!=null&&i!==n&&Re(e,t,1,i),i}function Ks(){return Cb===void 0?2:4}function js(e,t,n,i,s){let r=e.u,o=2&(e=ce(r))?1:i;s=!!s,i=Id(r,e,t);var a=Be(i);if(!(4&a)){4&a&&(i=In(i),a=Yi(a,e),e=Re(r,e,t,i));let l=0,h=0;for(;l<i.length;l++){let u=n(i[l]);u!=null&&(i[h++]=u)}h<l&&(i.length=h),a=-4097&(20|(a=Ud(a,e))),He(i,a&=-8193),2&a&&Object.freeze(i)}let c;return o===1||o===4&&32&a?hi(a)||(s=a,(a|=2)!==s&&He(i,a),Object.freeze(i)):(n=o===5&&(!!(32&a)||hi(a)||!!eo?.get(i)),(o===2||n)&&hi(a)&&(i=In(i),a=ys(a=Yi(a,e),e,s),He(i,a),e=Re(r,e,t,i)),hi(a)||(t=a,(a=ys(a,e,s))!==t&&He(i,a)),n?c=x0(i):o!==2||s||eo?.delete(i)),c||i}function Id(e,t,n,i){return e=Ji(e,t,n,i),Array.isArray(e)?e:vd}function Ud(e,t){return e===0&&(e=Yi(e,t)),1|e}function hi(e){return!!(2&e)&&!!(4&e)||!!(2048&e)}function E0(e){e=In(e);for(let t=0;t<e.length;t++){let n=e[t]=In(e[t]);Array.isArray(n[1])&&(n[1]=co(n[1]))}return e}function td(e,t,n,i){e=e.u;let s=ce(e);Ts(s),Re(e,s,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function uo(e,t,n,i,s){Ts(t);var r=!(!(64&t)&&16384&t);let o=(s=Id(e,t,n,s))!==vd;if(r||!o){let a=r=o?Be(s):0;(!o||2&a||hi(a)||4&a&&!(32&a))&&(s=In(s),a=Yi(a,t),t=Re(e,t,n,s)),a=-13&Ud(a,t),a=ys(i?-17&a:16|a,t,!0),a!==r&&He(s,a)}return s}function zu(e,t){var n=f_;return Nd(Dd(e=e.u),e,ce(e),n)===t?t:-1}function Dd(e){if(ao)return e[ta]??(e[ta]=new Map);if(ta in e)return e[ta];let t=new Map;return Object.defineProperty(e,ta,{value:t}),t}function T0(e,t,n,i){let s=Dd(e),r=Nd(s,e,t,n);return r!==i&&(r&&(t=Re(e,t,r)),s.set(n,i)),t}function Nd(e,t,n,i){let s=e.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){let o=i[r];Ji(t,n,o)!=null&&(s!==0&&(n=Re(t,n,s)),s=o)}return e.set(i,s),s}function Fd(e,t,n,i){let s,r=ce(e);if((i=Ji(e,r,n,i))!=null&&i.X===xa)return(t=wl(i))!==i&&Re(e,r,n,t),t.u;if(Array.isArray(i)){let o=Be(i);s=2&o?vs(S0(i,o,!1),t,!0):64&o?i:vs(s,t,!0)}else s=vs(void 0,t,!0);return s!==i&&Re(e,r,n,s),s}function w0(e,t,n,i){e=e.u;let s=ce(e);return(t=Rd(i=Ji(e,s,n,i),t,!1,s))!==i&&t!=null&&Re(e,s,n,t),t}function te(e,t,n,i=!1){if((t=w0(e,t,n,i))==null)return t;if(e=e.u,!(2&(i=ce(e)))){let s=wl(t);s!==t&&Re(e,i,n,t=s)}return t}function A0(e,t,n,i,s,r,o){e=e.u;var a=!!(2&t);s=a?1:s,r=!!r,o&&=!a,a=Id(e,t,i);var c=Be(a),l=!!(4&c);if(!l){var h=a,u=t;let p=!!(2&(c=Ud(c,t)));p&&(u|=2);let g=!p,x=!0,m=0,f=0;for(;m<h.length;m++){let M=Rd(h[m],n,!1,u);if(M instanceof n){if(!p){let _=!!(2&Be(M.u));g&&=!_,x&&=_}h[f++]=M}}f<m&&(h.length=f),c|=4,c=x?16|c:-17&c,He(h,c=g?8|c:-9&c),p&&Object.freeze(h)}if(o&&!(8&c||!a.length&&(s===1||s===4&&32&c))){for(hi(c)&&(a=In(a),c=Yi(c,t),t=Re(e,t,i,a)),n=a,o=c,h=0;h<n.length;h++)(c=n[h])!==(u=wl(c))&&(n[h]=u);o|=8,o=n.length?-17&o:16|o,He(n,o),c=o}let d;return s===1||s===4&&32&c?hi(c)||(t=c,(c|=!a.length||16&c&&(!l||32&c)?2:2048)!==t&&He(a,c),Object.freeze(a)):(l=s===5&&(!!(32&c)||hi(c)||!!eo?.get(a)),(s===2||l)&&hi(c)&&(a=In(a),c=ys(c=Yi(c,t),t,r),He(a,c),t=Re(e,t,i,a)),hi(c)||(i=c,(c=ys(c,t,r))!==i&&He(a,c)),l?d=x0(a):s!==2||r||eo?.delete(a)),d||a}function $i(e,t,n){let i=ce(e.u);return A0(e,i,t,n,Ks(),!1,!(2&i))}function Ct(e,t,n,i){return i==null&&(i=void 0),fe(e,n,i)}function ca(e,t,n,i){i==null&&(i=void 0);t:{e=e.u;let s=ce(e);if(Ts(s),i==null){let r=Dd(e);if(Nd(r,e,s,n)!==t)break t;r.set(n,0)}else s=T0(e,s,n,t);Re(e,s,t,i)}}function Yi(e,t){return-2049&(e=32|(2&t?2|e:-3&e))}function ys(e,t,n){return 32&t&&n||(e&=-33),e}function fl(e,t,n,i){let s=ce(e.u);Ts(s),e=A0(e,s,n,t,2,!0),i=i??new n,e.push(i),2&Be(i.u)?Ju(e,8):Ju(e,16)}function ui(e,t){return e??t}function $n(e,t){return lo(Ms(e,t))}function Oe(e,t){return ui(nl(e,t),0)}function Ri(e,t){return ui(xs(Ms(e,t)),"")}function fa(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);fe(e,t,n)}function Ci(e,t,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw Zu("int32");n|=0}fe(e,t,n)}function St(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);fe(e,t,n)}function pl(e,t,n){{let o=e.u,a=ce(o);if(Ts(a),n==null)Re(o,a,t);else{n=v0?.get(n)||n;var i=e=Be(n),s=hi(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=In(n),i=0,e=ys(e=Yi(e,a),a,!0),r=!1),e|=21,s=0;s<n.length;s++){let c=n[s],l=_0(c);Object.is(c,l)||(r&&(n=In(n),i=0,e=ys(e=Yi(e,a),a,!0),r=!1),n[s]=l)}e!==i&&(r&&(n=In(n),e=ys(e=Yi(e,a),a,!0)),He(n,e)),Re(o,a,t,n)}}}function Al(e,t,n){Ts(ce(e.u)),js(e,t,xs,2,!0).push(_0(n))}function R0(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function Od(){return Error("Failed to read varint, encoding is invalid.")}function C0(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function Bd(e){if(typeof e=="string")return{buffer:c0(e),O:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Uint8Array)return{buffer:e,O:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),O:!1};if(e.constructor===qi)return{buffer:_d(e)||new Uint8Array(0),O:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function kd(e,t){let n,i=0,s=0,r=0,o=e.h,a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);for(r>32&&(s|=(127&n)>>4),r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(Qs(e,a),n<128)return t(i>>>0,s>>>0);throw Od()}function zd(e){let t=0,n=e.g,i=n+10,s=e.h;for(;n<i;){let r=s[n++];if(t|=r,(128&r)==0)return Qs(e,n),!!(127&t)}throw Od()}function Ss(e){let t=e.h,n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Od();return Qs(e,n),s}function Zi(e){return Ss(e)>>>0}function ed(e){var t=e.h;let n=e.g,i=t[n],s=t[n+1],r=t[n+2];return t=t[n+3],Qs(e,e.g+4),(i<<0|s<<8|r<<16|t<<24)>>>0}function nd(e){var t=ed(e);e=2*(t>>31)+1;let n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function $b(e){return Ss(e)}function Hu(e,t,{ca:n=!1}={}){e.ca=n,t&&(t=Bd(t),e.h=t.buffer,e.m=t.O,e.j=0,e.l=e.h.length,e.g=e.j)}function Qs(e,t){if(e.g=t,t>e.l)throw C0(e.l,t)}function P0(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);let n=e.g,i=n+t;if(i>e.l)throw C0(t,e.l-n);return e.g=i,n}function L0(e,t){if(t==0)return er();var n=P0(e,t);return e.ca&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):Fb?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?er():new qi(n,Qr)}Zn.prototype.toJSON=void 0,Zn.prototype.Ia=d0;var og=[];function I0(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=Zi(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw R0(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function il(e){switch(e.h){case 0:e.h!=0?il(e):zd(e.g);break;case 1:Qs(e=e.g,e.g+8);break;case 2:if(e.h!=2)il(e);else{var t=Zi(e.g);Qs(e=e.g,e.g+t)}break;case 5:Qs(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!I0(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}il(e)}break;default:throw R0(e.h,e.l)}}function va(e,t,n){let i=e.g.l,s=Zi(e.g),r=e.g.g+s,o=r-i;if(o<=0&&(e.g.l=r,n(t,e,void 0,void 0,void 0),o=r-e.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=r,e.g.l=i,t}function Hd(e){var t=Zi(e.g),n=P0(e=e.g,t);if(e=e.h,vb){var i,s=e;(i=Du)||(i=Du=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(Zc===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Zc=!0}catch{Zc=!1}}throw!Zc&&(Du=void 0),a}}else{t=(r=n)+t,n=[];let a,c=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?Js():(a=e[r++],o<194||(192&a)!=128?(r--,Js()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?Js():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,Js()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?Js():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,Js()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Js(),n.length>=8192&&(c=Vm(c,n),n.length=0)}r=Vm(c,n)}return r}function U0(e){let t=Zi(e.g);return L0(e.g,t)}function Rl(e,t,n){var i=Zi(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var jc=[],ml;function fi(e,t,n){t.g?t.m(e,t.g,t.h,n,!0):t.m(e,t.h,n,!0)}var Mt=class{constructor(e,t){this.u=M0(e,t)}toJSON(){return D0(this)}l(){var e=C3;return e.g?e.l(this,e.g,e.h,!0):e.l(this,e.h,e.defaultValue,!0)}clone(){let e=this.u;return Ld(this,e,ce(e),!1)}O(){return!!(2&Be(this.u))}};function D0(e){e=e.u,e=ml?e:Tl(e,Pd,void 0,void 0,!1);{var t=!ml;let l=e.length;if(l){var n=e[l-1],i=yd(n);i?l--:n=void 0;var s=e;if(i){t:{var r,o=n,a=!1;if(o)for(let h in o)isNaN(+h)?(r??={})[h]=o[h]:(i=o[h],Array.isArray(i)&&(ll(i)||$m(i)&&i.size===0)&&(i=null),i==null&&(a=!0),i!=null&&((r??={})[h]=i));if(a||(r=o),r)for(let h in r){a=r;break t}a=null}o=a==null?n!=null:a!==n}for(;l>0&&((r=s[l-1])==null||ll(r)||$m(r)&&r.size===0);l--)var c=!0;(s!==e||o||c)&&(t?(c||o||a)&&(s.length=l):s=Array.prototype.slice.call(s,0,l),a&&s.push(a)),c=s}else c=e}return c}function ag(e){return e?/^\d+$/.test(e)?(bl(e),new id(le,De)):null:Zb||=new id(0,0)}Mt.prototype.X=xa,Mt.prototype.toString=function(){try{return ml=!0,D0(this).toString()}finally{ml=!1}};var id=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},Zb;function cg(e){return e?/^-?\d+$/.test(e)?(bl(e),new sd(le,De)):null:Jb||=new sd(0,0)}var sd=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},Jb;function Jr(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function fo(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Cl(e,t){if(t>=0)fo(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function pa(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function no(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Dn(e,t,n){fo(e.g,8*t+n)}function Vd(e,t){return Dn(e,t,2),t=e.g.end(),no(e,t),t.push(e.h),t}function Gd(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Pl(e,t,n){Dn(e,t,2),fo(e.g,n.length),no(e,e.g.end()),no(e,n)}function gl(e,t,n,i){n!=null&&(t=Vd(e,t),i(n,e),Gd(e,t))}function pi(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Wd=pi(),N0=pi(),Xd=pi(),qd=pi(),F0=pi(),O0=pi(),Yd=pi(),B0=pi(),k0=pi(),po=class{constructor(e,t,n){this.g=e,this.h=t,e=Wd,this.l=!!e&&n===e||!1}};function Ll(e,t){return new po(e,t,Wd)}function z0(e,t,n,i,s){gl(e,n,W0(t,i),s)}var Kb=Ll((function(e,t,n,i,s){return e.h===2&&(va(e,Fd(t,i,n),s),!0)}),z0),jb=Ll((function(e,t,n,i,s){return e.h===2&&(va(e,Fd(t,i,n,!0),s),!0)}),z0),Il=Symbol(),$d=Symbol(),lg=Symbol(),hg=Symbol(),H0,V0;function nr(e,t,n,i){var s=i[e];if(s)return s;(s={}).W=(function(u){switch(typeof u){case"boolean":return y0||=[0,void 0,!0];case"number":return u>0?void 0:u===0?zb||=[0,void 0]:[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ha=r,typeof(r=i[++o])=="function"&&(s.ma=!0,H0??=r,V0??=i[o+1],r=i[o+=2]));let a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)a[r[c]]=r;r=i[++o]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++o]);var l=void 0;if(r instanceof po?u=r:(u=Kb,o--),u?.l){r=i[++o],l=i;var h=o;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);c<h;c++){let d=a[c];l?n(s,c,u,l,d):t(s,c,u,d)}}return i[e]=s}function G0(e){return Array.isArray(e)?e[0]instanceof po?e:[jb,e]:[e,void 0]}function W0(e,t){return e instanceof Mt?e.u:Array.isArray(e)?vs(e,t,!1):void 0}function Zd(e,t,n,i){let s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function Jd(e,t,n,i,s){let r=n.g,o,a;e[t]=(c,l,h)=>r(c,l,h,a||=nr($d,Zd,Jd,i).W,o||=Kd(i),s)}function Kd(e){let t=e[lg];if(t!=null)return t;let n=nr($d,Zd,Jd,e);return t=n.ma?(i,s)=>H0(i,s,n):(i,s)=>{let r=ce(i);for(;I0(s)&&s.h!=4;){var o=s.m,a=n[o];if(a==null){var c=n.ha;c&&(c=c[o])&&(c=Qb(c))!=null&&(a=n[o]=c)}a!=null&&a(s,i,o)||(o=(a=s).l,il(a),a.ga?a=void 0:(c=a.g.g-o,a.g.g=o,a=L0(a.g,c)),o=i,a&&(_s||=Symbol(),(c=o[_s])?c.push(a):o[_s]=[a]))}return 16384&r&&co(i),!0},e[lg]=t}function Qb(e){let t=(e=G0(e))[0].g;if(e=e[1]){let n=Kd(e),i=nr($d,Zd,Jd,e).W;return(s,r,o)=>t(s,r,o,i,n)}return t}function Ul(e,t,n){e[t]=n.h}function Dl(e,t,n,i){let s,r,o=n.h;e[t]=(a,c,l)=>o(a,c,l,r||=nr(Il,Ul,Dl,i).W,s||=X0(i))}function X0(e){let t=e[hg];if(!t){let n=nr(Il,Ul,Dl,e);t=(i,s)=>q0(i,s,n),e[hg]=t}return t}function q0(e,t,n){for(var i=Be(e),s=+!!(512&i)-1,r=e.length,o=512&i?1:0,a=r+(256&i?-1:0);o<a;o++){let c=e[o];if(c==null)continue;let l=o-s,h=ug(n,l);h&&h(t,c,l)}if(256&i){i=e[r-1];for(let c in i)s=+c,Number.isNaN(s)||(r=i[s])!=null&&(a=ug(n,s))&&a(t,r,s)}if(e=_s?e[_s]:void 0)for(no(t,t.g.end()),n=0;n<e.length;n++)no(t,_d(e[n])||new Uint8Array(0))}function ug(e,t){var n=e[t];if(n)return n;if((n=e.ha)&&(n=n[t])){var i=(n=G0(n))[0].h;if(n=n[1]){let s=X0(n),r=nr(Il,Ul,Dl,n).W;n=e.ma?V0(r,s):(o,a,c)=>i(o,a,c,r,s)}else n=i;return e[t]=n}}function mo(e,t){if(Array.isArray(t)){var n=Be(t);if(4&n)return t;for(var i=0,s=0;i<t.length;i++){let r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),He(t,-12289&(5|n)),2&n&&Object.freeze(t),t}}function vn(e,t,n){return new po(e,t,n)}function go(e,t,n){return new po(e,t,n)}function yn(e,t,n){Re(e,ce(e),t,n)}var t3=Ll((function(e,t,n,i,s){return e.h===2&&(e=va(e,vs([void 0,void 0],i,!0),s),Ts(i=ce(t)),(s=Ji(t,i,n))instanceof Zn?(2&s.M)!=0?((s=s.Y()).push(e),Re(t,i,n,s)):s.Na(e):Array.isArray(s)?(2&Be(s)&&Re(t,i,n,s=E0(s)),s.push(e)):Re(t,i,n,[e]),!0)}),(function(e,t,n,i,s){if(t instanceof Zn)t.forEach(((r,o)=>{gl(e,n,vs([o,r],i,!1),s)}));else if(Array.isArray(t))for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)&&gl(e,n,vs(o,i,!1),s)}}));function Y0(e,t,n){if(t=(function(i){if(i==null)return i;let s=typeof i;if(s==="bigint")return String(BigInt.asIntN(64,i));if(El(i)){if(s==="string")return Ad(i);if(s==="number")return wd(i)}})(t),t!=null&&(typeof t=="string"&&cg(t),t!=null))switch(Dn(e,n,0),typeof t){case"number":e=e.g,to(t),Jr(e,le,De);break;case"bigint":n=BigInt.asUintN(64,t),n=new sd(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Jr(e.g,n.h,n.g);break;default:n=cg(t),Jr(e.g,n.h,n.g)}}function $0(e,t,n){(t=lo(t))!=null&&t!=null&&(Dn(e,n,0),Cl(e.g,t))}function Z0(e,t,n){(t=m0(t))!=null&&(Dn(e,n,0),e.g.g.push(t?1:0))}function J0(e,t,n){(t=xs(t))!=null&&Pl(e,n,i0(t))}function K0(e,t,n,i,s){gl(e,n,W0(t,i),s)}function j0(e,t,n){(t=t==null||typeof t=="string"||ga(t)||t instanceof qi?t:void 0)!=null&&Pl(e,n,Bd(t).buffer)}function Q0(e,t,n){return(e.h===5||e.h===2)&&(t=uo(t,ce(t),n,!1,!1),e.h==2?Rl(e,nd,t):t.push(nd(e.g)),!0)}var Wi=vn((function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=ed(i);let s=ed(i);i=2*(s>>31)+1;let r=s>>>20&2047;return e=4294967296*(1048575&s)+e,yn(t,n,r==2047?e?NaN:i*(1/0):r==0?5e-324*i*e:i*Math.pow(2,r-1075)*(e+4503599627370496)),!0}),(function(e,t,n){(t=ws(t))!=null&&(Dn(e,n,1),e=e.g,(n=p0||=new DataView(new ArrayBuffer(8))).setFloat64(0,+t,!0),le=n.getUint32(0,!0),De=n.getUint32(4,!0),pa(e,le),pa(e,De))}),pi()),$e=vn((function(e,t,n){return e.h===5&&(yn(t,n,nd(e.g)),!0)}),(function(e,t,n){(t=ws(t))!=null&&(Dn(e,n,5),e=e.g,Sd(t),pa(e,le))}),Yd),e3=go(Q0,(function(e,t,n){if((t=mo(ws,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(Dn(i,s,5),i=i.g,Sd(r),pa(i,le))}}),Yd),jd=go(Q0,(function(e,t,n){if((t=mo(ws,t))!=null&&t.length){Dn(e,n,2),fo(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Sd(t[i]),pa(n,le)}}),Yd),bs=vn((function(e,t,n){return e.h===0&&(yn(t,n,kd(e.g,Ed)),!0)}),Y0,O0),Vu=vn((function(e,t,n){return e.h===0&&(yn(t,n,(e=kd(e.g,Ed))===0?void 0:e),!0)}),Y0,O0),n3=vn((function(e,t,n){return e.h===0&&(yn(t,n,kd(e.g,bd)),!0)}),(function(e,t,n){if((t=Bb(t))!=null&&(typeof t=="string"&&ag(t),t!=null))switch(Dn(e,n,0),typeof t){case"number":e=e.g,to(t),Jr(e,le,De);break;case"bigint":n=BigInt.asUintN(64,t),n=new id(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Jr(e.g,n.h,n.g);break;default:n=ag(t),Jr(e.g,n.h,n.g)}}),pi()),Ne=vn((function(e,t,n){return e.h===0&&(yn(t,n,Ss(e.g)),!0)}),$0,qd),Nl=go((function(e,t,n){return(e.h===0||e.h===2)&&(t=uo(t,ce(t),n,!1,!1),e.h==2?Rl(e,Ss,t):t.push(Ss(e.g)),!0)}),(function(e,t,n){if((t=mo(lo,t))!=null&&t.length){n=Vd(e,n);for(let i=0;i<t.length;i++)Cl(e.g,t[i]);Gd(e,n)}}),qd),Zr=vn((function(e,t,n){return e.h===0&&(yn(t,n,(e=Ss(e.g))===0?void 0:e),!0)}),$0,qd),Ae=vn((function(e,t,n){return e.h===0&&(yn(t,n,zd(e.g)),!0)}),Z0,N0),Kr=vn((function(e,t,n){return e.h===0&&(yn(t,n,(e=zd(e.g))===!1?void 0:e),!0)}),Z0,N0),cn=go((function(e,t,n){return e.h===2&&(e=Hd(e),uo(t,ce(t),n,!1).push(e),!0)}),(function(e,t,n){if((t=mo(xs,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&Pl(i,s,i0(r))}}),Xd),gs=vn((function(e,t,n){return e.h===2&&(yn(t,n,(e=Hd(e))===""?void 0:e),!0)}),J0,Xd),se=vn((function(e,t,n){return e.h===2&&(yn(t,n,Hd(e)),!0)}),J0,Xd),Ye=(function(e,t,n=Wd){return new po(e,t,n)})((function(e,t,n,i,s){return e.h===2&&(i=vs(void 0,i,!0),uo(t,ce(t),n,!0).push(i),va(e,i,s),!0)}),(function(e,t,n,i,s){if(Array.isArray(t))for(let r=0;r<t.length;r++)K0(e,t[r],n,i,s)})),ae=Ll((function(e,t,n,i,s,r){return e.h===2&&(T0(t,Be(t),r,n),va(e,t=Fd(t,i,n),s),!0)}),K0),t_=vn((function(e,t,n){return e.h===2&&(yn(t,n,U0(e)),!0)}),j0,B0),i3=go((function(e,t,n){return(e.h===0||e.h===2)&&(t=uo(t,ce(t),n,!1,!1),e.h==2?Rl(e,Zi,t):t.push(Zi(e.g)),!0)}),(function(e,t,n){if((t=mo(g0,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(Dn(i,s,0),fo(i.g,r))}}),F0),s3=vn((function(e,t,n){return e.h===0&&(yn(t,n,(e=Zi(e.g))===0?void 0:e),!0)}),(function(e,t,n){(t=g0(t))!=null&&t!=null&&(Dn(e,n,0),fo(e.g,t))}),F0),di=vn((function(e,t,n){return e.h===0&&(yn(t,n,Ss(e.g)),!0)}),(function(e,t,n){(t=lo(t))!=null&&(t=parseInt(t,10),Dn(e,n,0),Cl(e.g,t))}),k0),rd=class{constructor(t,n){this.h=t,this.g=n,this.l=te,this.m=Ct,this.defaultValue=void 0}};function mi(e,t){return new rd(e,t)}function As(e,t){return(n,i)=>{if(jc.length){let r=jc.pop();r.o(i),Hu(r.g,n,i),n=r}else n=new class{constructor(r,o){if(og.length){let a=og.pop();Hu(a,r,o),r=a}else r=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,Hu(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ga:r=!1}={}){this.ga=r}}(n,i);try{let r=new e,o=r.u;Kd(t)(o,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,jc.length<100&&jc.push(n)}return s}}function Fl(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let o=this.g;return this.g=[],o}}}};q0(this.u,t,nr(Il,Ul,Dl,e)),no(t,t.g.end());let n=new Uint8Array(t.h),i=t.l,s=i.length,r=0;for(let o=0;o<s;o++){let a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var dg=class extends Mt{constructor(e){super(e)}},fg=[0,gs,vn((function(e,t,n){return e.h===2&&(yn(t,n,(e=U0(e))===er()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Mt){let i=t.Qa;return void(i&&(t=i(t),t!=null&&Pl(e,n,Bd(t).buffer)))}if(Array.isArray(t))return}j0(e,t,n)}),B0)],Gu,pg=globalThis.trustedTypes;function mg(e){Gu===void 0&&(Gu=(function(){let n=null;if(!pg)return n;try{let i=s=>s;n=pg.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var t=Gu;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function r3(e,...t){if(t.length===0)return mg(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return mg(n)}var e_=[0,Ne,di,Ae,-1,Nl,di,-1],o3=class extends Mt{constructor(){super()}},n_=[0,Ae,se,Ae,di,-1,go((function(e,t,n){return(e.h===0||e.h===2)&&(t=uo(t,ce(t),n,!1,!1),e.h==2?Rl(e,$b,t):t.push(Ss(e.g)),!0)}),(function(e,t,n){if((t=mo(lo,t))!=null&&t.length){n=Vd(e,n);for(let i=0;i<t.length;i++)Cl(e.g,t[i]);Gd(e,n)}}),k0),se,-1,[0,Ae,-1],di,Ae,-1],i_=[0,se,-2],gg=class extends Mt{constructor(){super()}},s_=[0],r_=[0,Ne,Ae,1,Ae,-3],Un=class extends Mt{constructor(e){super(e,2)}},Ve={};Ve[336783863]=[0,se,Ae,-1,Ne,[0,[1,2,3,4,5,6,7],ae,s_,ae,n_,ae,i_,ae,r_,ae,e_,ae,[0,se,-2],ae,[0,se,di]],[0,se],Ae,[0,[1,3],[2,4],ae,[0,Nl],-1,ae,[0,cn],-1,Ye,[0,se,-1]],se];var _g=[0,Vu,-1,Kr,-3,Vu,Nl,gs,Zr,Vu,-1,Kr,Zr,Kr,-2,gs];function Nn(e,t){td(e,2,ho(t),"")}function pe(e,t){Al(e,3,t)}function Qt(e,t){Al(e,4,t)}var xn=class extends Mt{constructor(e){super(e,500)}o(e){return Ct(this,0,7,e)}},la=[-1,{}],xg=[0,se,1,la],vg=[0,se,cn,la];function Fn(e,t){fl(e,1,xn,t)}function _e(e,t){Al(e,10,t)}function ee(e,t){Al(e,15,t)}var bn=class extends Mt{constructor(e){super(e,500)}o(e){return Ct(this,0,1001,e)}},o_=[-500,Ye,[-500,gs,-1,cn,-3,[-2,Ve,Ae],Ye,fg,Zr,-1,xg,vg,Ye,[0,gs,Kr],gs,_g,Zr,cn,987,cn],4,Ye,[-500,se,-1,[-1,{}],998,se],Ye,[-500,se,cn,-1,[-2,{},Ae],997,cn,-1],Zr,Ye,[-500,se,cn,la,998,cn],cn,Zr,xg,vg,Ye,[0,gs,-1,la],cn,-2,_g,gs,-1,Kr,[0,Kr,s3],978,la,Ye,fg];bn.prototype.g=Fl(o_);var a3=As(bn,o_),c3=class extends Mt{constructor(e){super(e)}},a_=class extends Mt{constructor(e){super(e)}g(){return $i(this,c3,1)}},c_=[0,Ye,[0,Ne,$e,se,-1]],Ol=As(a_,c_),l3=class extends Mt{constructor(e){super(e)}},h3=class extends Mt{constructor(e){super(e)}},Wu=class extends Mt{constructor(e){super(e)}h(){return te(this,l3,2)}g(){return $i(this,h3,5)}},l_=As(class extends Mt{constructor(e){super(e)}},[0,cn,Nl,jd,[0,di,[0,Ne,-3],[0,$e,-3],[0,Ne,-1,[0,Ye,[0,Ne,-2]]],Ye,[0,$e,-1,se,$e]],se,-1,bs,Ye,[0,Ne,$e],cn,bs]),h_=class extends Mt{constructor(e){super(e)}},jr=As(class extends Mt{constructor(e){super(e)}},[0,Ye,[0,$e,-4]]),u_=class extends Mt{constructor(e){super(e)}},ya=As(class extends Mt{constructor(e){super(e)}},[0,Ye,[0,$e,-4]]),u3=class extends Mt{constructor(e){super(e)}},d3=[0,Ne,-1,jd,di],d_=class extends Mt{constructor(){super()}};d_.prototype.g=Fl([0,$e,-4,bs]);var f3=class extends Mt{constructor(e){super(e)}},p3=As(class extends Mt{constructor(e){super(e)}},[0,Ye,[0,1,Ne,se,c_],bs]),yg=class extends Mt{constructor(e){super(e)}},m3=class extends Mt{constructor(e){super(e)}pa(){let e=b0(this);return e??er()}},g3=class extends Mt{constructor(e){super(e)}},f_=[1,2],_3=As(class extends Mt{constructor(e){super(e)}},[0,Ye,[0,f_,ae,[0,jd],ae,[0,t_],Ne,se],bs]),Qd=class extends Mt{constructor(e){super(e)}},p_=[0,se,Ne,$e,cn,-1],Mg=class extends Mt{constructor(e){super(e)}},x3=[0,Ae,-1],Sg=class extends Mt{constructor(e){super(e)}},sl=[1,2,3,4,5],_l=class extends Mt{constructor(e){super(e)}g(){return b0(this)!=null}h(){return xs(Ms(this,2))!=null}},Se=class extends Mt{constructor(e){super(e)}g(){return m0(Ms(this,2))??!1}},m_=[0,t_,se,[0,Ne,bs,-1],[0,n3,bs]],ke=[0,m_,Ae,[0,sl,ae,r_,ae,n_,ae,e_,ae,s_,ae,i_],di],Bl=class extends Mt{constructor(e){super(e)}},tf=[0,ke,$e,-1,Ne],v3=mi(502141897,Bl);Ve[502141897]=tf;var y3=As(class extends Mt{constructor(e){super(e)}},[0,[0,di,-1,e3,i3],d3]),g_=class extends Mt{constructor(e){super(e)}},__=class extends Mt{constructor(e){super(e)}},ef=[0,ke,$e,[0,ke],Ae],x_=[0,ke,tf,ef,$e,[0,[0,m_]]],M3=mi(508968150,__);Ve[508968150]=x_,Ve[508968149]=ef;var v_=class extends Mt{constructor(e){super(e)}},S3=mi(513916220,v_);Ve[513916220]=[0,ke,x_,Ne];var Yr=class extends Mt{constructor(e){super(e)}h(){return te(this,Qd,2)}g(){fe(this,2)}},y_=[0,ke,p_];Ve[478825465]=y_;var b3=class extends Mt{constructor(e){super(e)}},M_=class extends Mt{constructor(e){super(e)}},nf=class extends Mt{constructor(e){super(e)}},sf=class extends Mt{constructor(e){super(e)}},S_=class extends Mt{constructor(e){super(e)}},bg=[0,ke,[0,ke],y_,-1],b_=[0,ke,$e,Ne],rf=[0,ke,$e],E_=[0,ke,b_,rf,$e],E3=mi(479097054,S_);Ve[479097054]=[0,ke,E_,bg],Ve[463370452]=bg,Ve[464864288]=b_;var T3=mi(462713202,sf);Ve[462713202]=E_,Ve[474472470]=rf;var w3=class extends Mt{constructor(e){super(e)}},T_=class extends Mt{constructor(e){super(e)}},w_=class extends Mt{constructor(e){super(e)}},A_=class extends Mt{constructor(){super()}},of=[0,ke,$e,-1,Ne],od=[0,ke,$e,Ae];A_.prototype.g=Fl([0,ke,rf,[0,ke],tf,ef,of,od]);var R_=class extends Mt{constructor(e){super(e)}},A3=mi(456383383,R_);Ve[456383383]=[0,ke,p_];var C_=class extends Mt{constructor(e){super(e)}},R3=mi(476348187,C_);Ve[476348187]=[0,ke,x3];var P_=class extends Mt{constructor(e){super(e)}},Eg=class extends Mt{constructor(e){super(e)}},L_=[0,di,-1],C3=mi(458105876,class extends Mt{constructor(e){super(e)}g(){var e=this.u;let t=ce(e),n=2&t;return e=(function(i,s,r){var o=Eg;let a=2&s,c=!1;if(r==null){if(a)return sg();r=[]}else if(r.constructor===Zn){if((2&r.M)==0||a)return r;r=r.Y()}else Array.isArray(r)?c=!!(2&Be(r)):r=[];if(a){if(!r.length)return sg();c||(c=!0,co(r))}else c&&(c=!1,r=E0(r));return c||(64&Be(r)?Ju(r,32):32&s&&yl(r,32)),Re(i,s,2,o=new Zn(r,o,kb,void 0)),o})(e,t,Ji(e,t,2)),!n&&Eg&&(e.sa=!0),e}});Ve[458105876]=[0,L_,t3,[!0,bs,[0,se,-1,cn]]];var af=class extends Mt{constructor(e){super(e)}},I_=mi(458105758,af);Ve[458105758]=[0,ke,se,L_];var U_=class extends Mt{constructor(e){super(e)}},P3=mi(443442058,U_);Ve[443442058]=[0,ke,se,Ne,$e,cn,-1],Ve[514774813]=of;var D_=class extends Mt{constructor(e){super(e)}},L3=mi(516587230,D_);function ad(e,t){return t=t?t.clone():new Qd,e.displayNamesLocale!==void 0?fe(t,1,ho(e.displayNamesLocale)):e.displayNamesLocale===void 0&&fe(t,1),e.maxResults!==void 0?Ci(t,2,e.maxResults):"maxResults"in e&&fe(t,2),e.scoreThreshold!==void 0?St(t,3,e.scoreThreshold):"scoreThreshold"in e&&fe(t,3),e.categoryAllowlist!==void 0?pl(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&fe(t,4),e.categoryDenylist!==void 0?pl(t,5,e.categoryDenylist):"categoryDenylist"in e&&fe(t,5),t}function cf(e,t=-1,n=""){return{categories:e.map((i=>({index:ui($n(i,1),0)??-1,score:Oe(i,2)??0,categoryName:Ri(i,3)??"",displayName:Ri(i,4)??""}))),headIndex:t,headName:n}}function N_(e){var t=js(e,3,ws,Ks()),n=js(e,2,lo,Ks()),i=js(e,1,xs,Ks()),s=js(e,9,xs,Ks());let r={categories:[],keypoints:[]};for(let o=0;o<t.length;o++)r.categories.push({score:t[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((t=te(e,Wu,4)?.h())&&(r.boundingBox={originX:$n(t,1)??0,originY:$n(t,2)??0,width:$n(t,3)??0,height:$n(t,4)??0,angle:0}),te(e,Wu,4)?.g().length)for(let o of te(e,Wu,4).g())r.keypoints.push({x:nl(o,1)??0,y:nl(o,2)??0,score:nl(o,4)??0,label:xs(Ms(o,3))??""});return r}function kl(e){let t=[];for(let n of $i(e,u_,1))t.push({x:Oe(n,1)??0,y:Oe(n,2)??0,z:Oe(n,3)??0,visibility:Oe(n,4)??0});return t}function ha(e){let t=[];for(let n of $i(e,h_,1))t.push({x:Oe(n,1)??0,y:Oe(n,2)??0,z:Oe(n,3)??0,visibility:Oe(n,4)??0});return t}function Tg(e){return Array.from(e,(t=>t>127?t-256:t))}function wg(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}var Qc;Ve[516587230]=[0,ke,of,od,$e],Ve[518928384]=od;var I3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function F_(){if(Qc===void 0)try{await WebAssembly.instantiate(I3),Qc=!0}catch{Qc=!1}return Qc}async function ia(e,t=r3``){let n=await F_()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var ps=class{};function O_(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Ag(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}importScripts(e.toString())}function B_(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Et(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Rg(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[i,s]=B_(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function Cg(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");let i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(let s of i)e.i._free(s);e.i._free(t)}function Ei(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function fs(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}ps.forVisionTasks=function(e){return ia("vision",e)},ps.forTextTasks=function(e){return ia("text",e)},ps.forGenAiExperimentalTasks=function(e){return ia("genai_experimental",e)},ps.forGenAiTasks=function(e){return ia("genai",e)},ps.forAudioTasks=function(e){return ia("audio",e)},ps.isSimdSupported=function(){return F_()};async function U3(e,t,n,i){return e=await(async(s,r,o,a,c)=>{if(r&&await Ag(r),!self.ModuleFactory||o&&(await Ag(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function Xu(e,t){let n=te(e.baseOptions,_l,1)||new _l;typeof t=="string"?(fe(n,2,ho(t)),fe(n,1)):t instanceof Uint8Array&&(fe(n,1,Md(t,!1)),fe(n,2)),Ct(e.baseOptions,0,1,n)}function Pg(e){try{let t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((n=>n.message)).join(", "))}finally{e.H=[]}}function _t(e,t){e.B=Math.max(e.B,t)}function zl(e,t){e.A=new xn,Nn(e.A,"PassThroughCalculator"),pe(e.A,"free_memory"),Qt(e.A,"free_memory_unused_out"),_e(t,"free_memory"),Fn(t,e.A)}function io(e,t){pe(e.A,t),Qt(e.A,t+"_unused_out")}function Hl(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var rl=class{constructor(e){this.g=e,this.H=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){let n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(te(this.baseOptions,_l,1)?.g()||te(this.baseOptions,_l,1)?.h()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=te(i.baseOptions,Sg,3);if(!r){var o=r=new Sg,a=new gg;ca(o,4,sl,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new o3,ca(s,2,sl,o)):(s=r,o=new gg,ca(s,4,sl,o))),Ct(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Xu(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)Xu(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){let s=[];for(var r=0;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let o of s)i.set(o,r),r+=o.length;return i})(n.modelAssetBuffer).then((i=>{Xu(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ea(){let e;if(this.g.ea((t=>{e=a3(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.La(),this.g.setGraph(e,t),this.A=void 0,Pg(this)}finishProcessing(){this.g.finishProcessing(),Pg(this)}close(){this.A=void 0,this.g.closeGraph()}};function _n(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}rl.prototype.close=rl.prototype.close,n0("TaskRunner",rl);var cd=class{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function Lg(e,t,n){let i=e.g;if(n=_n(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function Ig(e,t){let n=e.g,i=_n(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);let s=_n(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.P),n.vertexAttribPointer(e.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let r=_n(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.J),n.vertexAttribPointer(e.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new cd(n,i,s,r)}function lf(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function Ma(e,t,n,i){return lf(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=Ig(e,!0)),n=e.s):(e.v||(e.v=Ig(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function Es(e,t,n){return lf(e,t),e=_n(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Vl(e,t,n){lf(e,t),e.A||(e.A=_n(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function hf(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var _o=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=_n(e.createProgram(),"Failed to create WebGL program"),this.ba=Lg(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.aa=Lg(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.P=e.getAttribLocation(this.h,"aVertex"),this.J=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.ba),e.deleteShader(this.aa)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}},D3=class extends _o{H(){return`
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
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.B=Es(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=Es(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.L=_n(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.U=_n(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.K=_n(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.K,0),e.uniform1i(this.L,1),e.uniform1i(this.U,2)}close(){this.B&&this.g.deleteTexture(this.B),this.j&&this.g.deleteTexture(this.j),super.close()}},N3=class extends _o{H(){return`
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
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=Es(this,e),e.activeTexture(e.TEXTURE2),this.B=Es(this,e)}m(){super.m();let e=this.g;this.K=_n(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.L=_n(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.I=_n(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.I,0),e.uniform1i(this.K,1),e.uniform1i(this.L,2)}close(){this.j&&this.g.deleteTexture(this.j),this.B&&this.g.deleteTexture(this.B),super.close()}};function Xi(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function ld(e){var t=Xi(e,1);if(!t){if(t=Xi(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);let i=so(e);var n=uf(e);if(Vl(n,i,k_(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function k_(e){let t=Xi(e,2);if(!t){let n=so(e);t=H_(e);let i=ld(e),s=z_(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),hd(e)}return t}function so(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=_n(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function z_(e){if(e=so(e),!tl)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))tl=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");tl=e.R16F}return tl}function uf(e){return e.l||(e.l=new _o),e.l}function H_(e){let t=so(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Xi(e,2);return n||(n=Es(uf(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function hd(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var tl,qe=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Ug===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ga(){return!!Xi(this,0)}ka(){return!!Xi(this,1)}R(){return!!Xi(this,2)}ja(){return(t=Xi(e=this,0))||(t=ld(e),t=new Uint8Array(t.map((n=>255*n))),e.g.push(t)),t;var e,t}ia(){return ld(this)}N(){return k_(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let i=so(this),s=uf(this);i.activeTexture(i.TEXTURE1),n=Es(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=z_(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Vl(s,i,n),Ma(s,i,!1,(()=>{H_(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),hd(this)})),hf(s),hd(this)}}e.push(n)}return new qe(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&so(this).deleteTexture(Xi(this,2)),Ug=-1}};qe.prototype.close=qe.prototype.close,qe.prototype.clone=qe.prototype.clone,qe.prototype.getAsWebGLTexture=qe.prototype.N,qe.prototype.getAsFloat32Array=qe.prototype.ia,qe.prototype.getAsUint8Array=qe.prototype.ja,qe.prototype.hasWebGLTexture=qe.prototype.R,qe.prototype.hasFloat32Array=qe.prototype.ka,qe.prototype.hasUint8Array=qe.prototype.Ga;var Ug=250,F3={color:"white",lineWidth:4,radius:6};function qu(e){return{...F3,fillColor:(e=e||{}).color,...e}}function Gi(e,t){return e instanceof Function?e(t):e}function Dg(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function sa(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function ma(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function Ng(e,t,n){if(t.R())n(t.N());else{let i=t.ka()?t.ia():t.ja();e.m=e.m??new _o;let s=ma(e);n((e=new qe([i],t.m,!1,s.canvas,e.m,t.width,t.height)).N()),e.close()}}function Fg(e,t,n,i){let s=(function(a){return a.g||(a.g=new D3),a.g})(e),r=ma(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Ma(s,r,!0,(()=>{(function(c,l,h,u){let d=c.g;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,l),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,c.B),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,h),c.I&&(function(p,g){if(p!==g)return!1;p=p.entries(),g=g.entries();for(let[m,f]of p){p=m;let M=f;var x=g.next();if(x.done)return!1;let[_,E]=x.value;if(x=E,p!==_||M[0]!==x[0]||M[1]!==x[1]||M[2]!==x[2]||M[3]!==x[3])return!1}return!!g.next().done})(c.I,u))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.j);else{c.I=u;let p=Array(1024).fill(0);u.forEach(((g,x)=>{if(g.length!==4)throw Error(`Color at index ${x} is not a four-channel value.`);p[4*x]=g[0],p[4*x+1]=g[1],p[4*x+2]=g[2],p[4*x+3]=g[3]})),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.j),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(p))}})(s,t,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);let a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)}))}function Og(e,t,n,i){let s=ma(e),r=(function(c){return c.h||(c.h=new N3),c.h})(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;Ma(r,s,!0,(()=>{var c=r.g;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,t),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.j),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.B),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.g).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)}))}var mn=class{constructor(e,t){e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}za(e,t){if(e){var n=sa(this);t=qu(t),n.save();var i=n.canvas,s=0;for(let r of e)n.fillStyle=Gi(t.fillColor,{index:s,from:r}),n.strokeStyle=Gi(t.color,{index:s,from:r}),n.lineWidth=Gi(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*i.width,r.y*i.height,Gi(t.radius,{index:s,from:r}),0,2*Math.PI),n.fill(e),n.stroke(e),++s;n.restore()}}ya(e,t,n){if(e&&t){var i=sa(this);n=qu(n),i.save();var s=i.canvas,r=0;for(let o of t){i.beginPath(),t=e[o.start];let a=e[o.end];t&&a&&(i.strokeStyle=Gi(n.color,{index:r,from:t,to:a}),i.lineWidth=Gi(n.lineWidth,{index:r,from:t,to:a}),i.moveTo(t.x*s.width,t.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}va(e,t){let n=sa(this);t=qu(t),n.save(),n.beginPath(),n.lineWidth=Gi(t.lineWidth,{}),n.strokeStyle=Gi(t.color,{}),n.fillStyle=Gi(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}wa(e,t,n=[0,0,0,255]){this.l?(function(i,s,r,o){let a=ma(i);Ng(i,s,(c=>{Fg(i,c,r,o),(c=sa(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)}))})(this,e,n,t):Fg(this,e.N(),n,t)}xa(e,t,n){this.l?(function(i,s,r,o){let a=ma(i);Ng(i,s,(c=>{Og(i,c,r,o),(c=sa(i)).drawImage(a.canvas,0,0,c.canvas.width,c.canvas.height)}))})(this,e,t,n):Og(this,e.N(),t,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Ai(e,t){switch(t){case 0:return e.g.find((n=>n instanceof ImageData));case 1:return e.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function V_(e){var t=Ai(e,0);if(!t){t=ro(e);let n=Gl(e),i=new Uint8Array(e.width*e.height*4);Vl(n,t,ol(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),hf(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function ol(e){let t=Ai(e,2);if(!t){let n=ro(e);t=al(e);let i=Ai(e,1)||V_(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),oa(e)}return t}function ro(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return e.h||(e.h=_n(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Gl(e){return e.l||(e.l=new _o),e.l}function al(e){let t=ro(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Ai(e,2);return n||(n=Es(Gl(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function oa(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function Bg(e){let t=ro(e);return Ma(Gl(e),t,!0,(()=>(function(n,i){let s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();let r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}mn.prototype.close=mn.prototype.close,mn.prototype.drawConfidenceMask=mn.prototype.xa,mn.prototype.drawCategoryMask=mn.prototype.wa,mn.prototype.drawBoundingBox=mn.prototype.va,mn.prototype.drawConnectors=mn.prototype.ya,mn.prototype.drawLandmarks=mn.prototype.za,mn.lerp=function(e,t,n,i,s){return Dg(i*(1-(e-t)/(n-t))+s*(1-(n-e)/(n-t)),i,s)},mn.clamp=Dg,n0("DrawingUtils",mn);var Qe=class{constructor(e,t,n,i,s,r,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--kg===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Fa(){return!!Ai(this,0)}la(){return!!Ai(this,1)}R(){return!!Ai(this,2)}Da(){return V_(this)}Ca(){var e=Ai(this,1);return e||(ol(this),al(this),e=Bg(this),oa(this),this.g.push(e),this.j=!0),e}N(){return ol(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let i=ro(this),s=Gl(this);i.activeTexture(i.TEXTURE1),n=Es(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Vl(s,i,n),Ma(s,i,!1,(()=>{al(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),oa(this)})),hf(s),oa(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);ol(this),al(this),n=Bg(this),oa(this)}e.push(n)}return new Qe(e,this.la(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ai(this,1).close(),this.m&&ro(this).deleteTexture(Ai(this,2)),kg=-1}};Qe.prototype.close=Qe.prototype.close,Qe.prototype.clone=Qe.prototype.clone,Qe.prototype.getAsWebGLTexture=Qe.prototype.N,Qe.prototype.getAsImageBitmap=Qe.prototype.Ca,Qe.prototype.getAsImageData=Qe.prototype.Da,Qe.prototype.hasWebGLTexture=Qe.prototype.R,Qe.prototype.hasImageBitmap=Qe.prototype.la,Qe.prototype.hasImageData=Qe.prototype.Fa;var kg=250;function gi(...e){return e.map((([t,n])=>({start:t,end:n})))}var O3=(function(e){return class extends e{La(){this.i._registerModelResourcesGraphService()}}})((zg=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:O_()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Et(this,i||"input_audio",(r=>{Et(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ea(e){Ei(this,"__graph_config__",(t=>{e(t)})),Et(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){let r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),Et(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)}))}addGpuBufferToStream(e,t,n){Et(this,t,(i=>{let[s,r]=Rg(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(e,t,n){Et(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){Et(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){Et(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){Et(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){Et(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){Et(this,t,(i=>{Et(this,e,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(e,t,n){Et(this,t,(i=>{Cg(this,Object.keys(e),(s=>{Cg(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){Et(this,n,(s=>{Et(this,t,(r=>{let o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(e,t){Et(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(e,t,n){Et(this,t,(i=>{let s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)Et(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){Et(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){Et(this,t,(n=>{Et(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){Et(this,n,(i=>{Et(this,t,(s=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){Et(this,t,(n=>{let i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of e)Et(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){Ei(this,e,t),Et(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){fs(this,e,t),Et(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Ei(this,e,t),Et(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){fs(this,e,t),Et(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Ei(this,e,t),Et(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){fs(this,e,t),Et(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Ei(this,e,t),Et(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){fs(this,e,t),Et(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Ei(this,e,t),Et(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){fs(this,e,t),Et(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Ei(this,e,t),Et(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){fs(this,e,t),Et(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Ei(this,e,t),Et(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){fs(this,e,t),Et(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ei(this,e,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),Et(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends zg{get fa(){return this.i}ra(e,t,n){Et(this,t,(i=>{let[s,r]=Rg(this,e,i);this.fa._addBoundTextureAsImageToStream(i,s,r,n)}))}V(e,t){Ei(this,e,t),Et(this,e,(n=>{this.fa._attachImageListener(n)}))}da(e,t){fs(this,e,t),Et(this,e,(n=>{this.fa._attachImageVectorListener(n)}))}})),zg,Jn=class extends O3{};async function jt(e,t,n){return(async function(i,s,r,o){return U3(i,s,r,o)})(e,n.canvas??(O_()?void 0:document.createElement("canvas")),t,n)}function G_(e,t,n,i){if(e.U){let r=new d_;if(n?.regionOfInterest){if(!e.qa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");St(r,1,(s.left+s.right)/2),St(r,2,(s.top+s.bottom)/2),St(r,4,s.right-s.left),St(r,3,s.bottom-s.top)}else St(r,1,.5),St(r,2,.5),St(r,4,1),St(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(St(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[o,a]=B_(t);n=Oe(r,3)*a/o,s=Oe(r,4)*o/a,St(r,4,n),St(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.ra(t,e.ba,i??performance.now()),e.finishProcessing()}function Kn(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");G_(e,t,n,e.B+1)}function Pi(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");G_(e,t,n,i)}function oo(e,t,n,i){var s=t.data;let r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new qe([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var Sn=class extends rl{constructor(e,t,n,i){super(e),this.g=e,this.ba=t,this.U=n,this.qa=i,this.P=new _o}l(e,t=!0){if("runningMode"in e&&fa(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Sn.prototype.close=Sn.prototype.close;var Wn=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Ct(e=this.h=new Bl,0,1,t=new Se),St(this.h,2,.5),St(this.h,3,.3)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&St(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&St(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}D(e,t){return this.j={detections:[]},Kn(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Pi(this,e,n,t),this.j}m(){var e=new bn;_e(e,"image_in"),_e(e,"norm_rect_in"),ee(e,"detections");let t=new Un;fi(t,v3,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect_in"),Qt(n,"DETECTIONS:detections"),n.o(t),Fn(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=l_(r),this.j.detections.push(N_(i));_t(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Wn.prototype.detectForVideo=Wn.prototype.F,Wn.prototype.detect=Wn.prototype.D,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=async function(e,t){return jt(Wn,e,{baseOptions:{modelAssetPath:t}})},Wn.createFromModelBuffer=function(e,t){return jt(Wn,e,{baseOptions:{modelAssetBuffer:t}})},Wn.createFromOptions=function(e,t){return jt(Wn,e,t)};var df=gi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),ff=gi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),pf=gi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),W_=gi([474,475],[475,476],[476,477],[477,474]),mf=gi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),gf=gi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),X_=gi([469,470],[470,471],[471,472],[472,469]),_f=gi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),q_=[...df,...ff,...pf,...mf,...gf,..._f],Y_=gi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Hg(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ue=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ct(e=this.h=new __,0,1,t=new Se),this.v=new g_,Ct(this.h,0,3,this.v),this.s=new Bl,Ct(this.h,0,2,this.s),Ci(this.s,4,1),St(this.s,2,.5),St(this.v,2,.5),St(this.h,4,.5)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"numFaces"in e&&Ci(this.s,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&St(this.s,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&St(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&St(this.v,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return Hg(this),Kn(this,e,t),this.j}F(e,t,n){return Hg(this),Pi(this,e,n,t),this.j}m(){var e=new bn;_e(e,"image_in"),_e(e,"norm_rect"),ee(e,"face_landmarks");let t=new Un;fi(t,M3,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),Fn(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(let r of i)i=ya(r),this.j.faceLandmarks.push(kl(i));_t(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{_t(this,i)})),this.outputFaceBlendshapes&&(ee(e,"blendshapes"),Qt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=Ol(r),this.j.faceBlendshapes.push(cf(i.g()??[]));_t(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{_t(this,i)}))),this.outputFacialTransformationMatrixes&&(ee(e,"face_geometry"),Qt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=te(y3(r),u3,2))&&this.j.facialTransformationMatrixes.push({rows:ui($n(i,1),0)??0,columns:ui($n(i,2),0)??0,data:js(i,3,ws,Ks()).slice()??[]});_t(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{_t(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ue.prototype.detectForVideo=Ue.prototype.F,Ue.prototype.detect=Ue.prototype.D,Ue.prototype.setOptions=Ue.prototype.o,Ue.createFromModelPath=function(e,t){return jt(Ue,e,{baseOptions:{modelAssetPath:t}})},Ue.createFromModelBuffer=function(e,t){return jt(Ue,e,{baseOptions:{modelAssetBuffer:t}})},Ue.createFromOptions=function(e,t){return jt(Ue,e,t)},Ue.FACE_LANDMARKS_LIPS=df,Ue.FACE_LANDMARKS_LEFT_EYE=ff,Ue.FACE_LANDMARKS_LEFT_EYEBROW=pf,Ue.FACE_LANDMARKS_LEFT_IRIS=W_,Ue.FACE_LANDMARKS_RIGHT_EYE=mf,Ue.FACE_LANDMARKS_RIGHT_EYEBROW=gf,Ue.FACE_LANDMARKS_RIGHT_IRIS=X_,Ue.FACE_LANDMARKS_FACE_OVAL=_f,Ue.FACE_LANDMARKS_CONTOURS=q_,Ue.FACE_LANDMARKS_TESSELATION=Y_;var Ti=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect",!0),Ct(e=this.j=new v_,0,1,t=new Se)}get baseOptions(){return te(this.j,Se,1)}set baseOptions(e){Ct(this.j,0,1,e)}o(e){return super.l(e)}Oa(e,t,n){let i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,Kn(this,e,i??{}),!this.h)return this.s}m(){var e=new bn;_e(e,"image_in"),_e(e,"norm_rect"),ee(e,"stylized_image");let t=new Un;fi(t,S3,this.j);let n=new xn;Nn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),Fn(e,n),this.g.V("stylized_image",((i,s)=>{var r=!this.h,o=i.data,a=i.width;let c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){let l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=o[3*h],l[4*h+1]=o[3*h+1],l[4*h+2]=o[3*h+2],l[4*h+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new Qe([o],!1,!1,this.g.i.canvas,this.P,a,i),this.s=r=r?a.clone():a,this.h&&this.h(r),_t(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ti.prototype.stylize=Ti.prototype.Oa,Ti.prototype.setOptions=Ti.prototype.o,Ti.createFromModelPath=function(e,t){return jt(Ti,e,{baseOptions:{modelAssetPath:t}})},Ti.createFromModelBuffer=function(e,t){return jt(Ti,e,{baseOptions:{modelAssetBuffer:t}})},Ti.createFromOptions=function(e,t){return jt(Ti,e,t)};var xf=gi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Vg(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Gg(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Wg(e,t=!0){let n=[];for(let s of e){var i=Ol(s);e=[];for(let r of i.g())i=t&&$n(r,1)!=null?ui($n(r,1),0):-1,e.push({score:Oe(r,2)??0,index:i,categoryName:Ri(r,3)??"",displayName:Ri(r,4)??""});n.push(e)}return n}var Cn=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ct(e=this.j=new S_,0,1,t=new Se),this.s=new sf,Ct(this.j,0,2,this.s),this.C=new nf,Ct(this.s,0,3,this.C),this.v=new M_,Ct(this.s,0,2,this.v),this.h=new b3,Ct(this.j,0,3,this.h),St(this.v,2,.5),St(this.s,4,.5),St(this.C,2,.5)}get baseOptions(){return te(this.j,Se,1)}set baseOptions(e){Ct(this.j,0,1,e)}o(e){if(Ci(this.v,3,e.numHands??1),"minHandDetectionConfidence"in e&&St(this.v,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&St(this.s,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&St(this.C,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Yr,n=t,i=ad(e.cannedGesturesClassifierOptions,te(this.h,Yr,3)?.h());Ct(n,0,2,i),Ct(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&te(this.h,Yr,3)?.g();return e.customGesturesClassifierOptions?(Ct(n=t=new Yr,0,2,i=ad(e.customGesturesClassifierOptions,te(this.h,Yr,4)?.h())),Ct(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&te(this.h,Yr,4)?.g(),this.l(e)}Ja(e,t){return Vg(this),Kn(this,e,t),Gg(this)}Ka(e,t,n){return Vg(this),Pi(this,e,n,t),Gg(this)}m(){var e=new bn;_e(e,"image_in"),_e(e,"norm_rect"),ee(e,"hand_gestures"),ee(e,"hand_landmarks"),ee(e,"world_hand_landmarks"),ee(e,"handedness");let t=new Un;fi(t,E3,this.j);let n=new xn;Nn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"HAND_GESTURES:hand_gestures"),Qt(n,"LANDMARKS:hand_landmarks"),Qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qt(n,"HANDEDNESS:handedness"),n.o(t),Fn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i){i=ya(r);let o=[];for(let a of $i(i,u_,1))o.push({x:Oe(a,1)??0,y:Oe(a,2)??0,z:Oe(a,3)??0,visibility:Oe(a,4)??0});this.landmarks.push(o)}_t(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{_t(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i){i=jr(r);let o=[];for(let a of $i(i,h_,1))o.push({x:Oe(a,1)??0,y:Oe(a,2)??0,z:Oe(a,3)??0,visibility:Oe(a,4)??0});this.worldLandmarks.push(o)}_t(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{_t(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...Wg(i,!1)),_t(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{_t(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...Wg(i)),_t(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Xg(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Cn.prototype.recognizeForVideo=Cn.prototype.Ka,Cn.prototype.recognize=Cn.prototype.Ja,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(e,t){return jt(Cn,e,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(e,t){return jt(Cn,e,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(e,t){return jt(Cn,e,t)},Cn.HAND_CONNECTIONS=xf;var gn=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ct(e=this.h=new sf,0,1,t=new Se),this.s=new nf,Ct(this.h,0,3,this.s),this.j=new M_,Ct(this.h,0,2,this.j),Ci(this.j,3,1),St(this.j,2,.5),St(this.s,2,.5),St(this.h,4,.5)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"numHands"in e&&Ci(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&St(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&St(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&St(this.s,2,e.minHandPresenceConfidence??.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Kn(this,e,t),Xg(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pi(this,e,n,t),Xg(this)}m(){var e=new bn;_e(e,"image_in"),_e(e,"norm_rect"),ee(e,"hand_landmarks"),ee(e,"world_hand_landmarks"),ee(e,"handedness");let t=new Un;fi(t,T3,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"LANDMARKS:hand_landmarks"),Qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qt(n,"HANDEDNESS:handedness"),n.o(t),Fn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i)i=ya(r),this.landmarks.push(kl(i));_t(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{_t(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i)i=jr(r),this.worldLandmarks.push(ha(i));_t(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{_t(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;let a=[];for(let c of i){i=Ol(c);let l=[];for(let h of i.g())l.push({score:Oe(h,2)??0,index:ui($n(h,1),0)??-1,categoryName:Ri(h,3)??"",displayName:Ri(h,4)??""});a.push(l)}o.call(r,...a),_t(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};gn.prototype.detectForVideo=gn.prototype.F,gn.prototype.detect=gn.prototype.D,gn.prototype.setOptions=gn.prototype.o,gn.createFromModelPath=function(e,t){return jt(gn,e,{baseOptions:{modelAssetPath:t}})},gn.createFromModelBuffer=function(e,t){return jt(gn,e,{baseOptions:{modelAssetBuffer:t}})},gn.createFromOptions=function(e,t){return jt(gn,e,t)},gn.HAND_CONNECTIONS=xf;var $_=gi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function qg(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Yg(e){try{if(!e.C)return e.h;e.C(e.h)}finally{Hl(e)}}function el(e,t){e=ya(e),t.push(kl(e))}var Me=class extends Sn{constructor(e,t){super(new Jn(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ct(e=this.j=new A_,0,1,t=new Se),this.K=new nf,Ct(this.j,0,2,this.K),this.aa=new w3,Ct(this.j,0,3,this.aa),this.s=new Bl,Ct(this.j,0,4,this.s),this.I=new g_,Ct(this.j,0,5,this.I),this.v=new T_,Ct(this.j,0,6,this.v),this.L=new w_,Ct(this.j,0,7,this.L),St(this.s,2,.5),St(this.s,3,.3),St(this.I,2,.5),St(this.v,2,.5),St(this.v,3,.3),St(this.L,2,.5),St(this.K,2,.5)}get baseOptions(){return te(this.j,Se,1)}set baseOptions(e){Ct(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&St(this.s,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&St(this.s,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&St(this.I,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&St(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&St(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&St(this.L,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&St(this.K,2,e.minHandLandmarksConfidence??.5),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,qg(this),Kn(this,e,i),Yg(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,qg(this),Pi(this,e,s,t),Yg(this)}m(){var e=new bn;_e(e,"input_frames_image"),ee(e,"pose_landmarks"),ee(e,"pose_world_landmarks"),ee(e,"face_landmarks"),ee(e,"left_hand_landmarks"),ee(e,"left_hand_world_landmarks"),ee(e,"right_hand_landmarks"),ee(e,"right_hand_world_landmarks");let t=new Un,n=new dg;td(n,1,ho("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))fe(s,2,Tl(r,Pd,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof qi||ga(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");td(s,2,Md(r,!1),er())}})(n,this.j.g());let i=new xn;Nn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),fl(i,8,dg,n),pe(i,"IMAGE:input_frames_image"),Qt(i,"POSE_LANDMARKS:pose_landmarks"),Qt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qt(i,"FACE_LANDMARKS:face_landmarks"),Qt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Fn(e,i),zl(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{el(s,this.h.poseLandmarks),_t(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{_t(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=jr(s),o.push(ha(s)),_t(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{_t(this,s)})),this.outputPoseSegmentationMasks&&(Qt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),io(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[oo(this,s,!0,!this.C)],_t(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],_t(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{el(s,this.h.faceLandmarks),_t(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{_t(this,s)})),this.outputFaceBlendshapes&&(ee(e,"extra_blendshapes"),Qt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Ol(s),o.push(cf(s.g()??[]))),_t(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{_t(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{el(s,this.h.leftHandLandmarks),_t(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{_t(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=jr(s),o.push(ha(s)),_t(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{_t(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{el(s,this.h.rightHandLandmarks),_t(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{_t(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=jr(s),o.push(ha(s)),_t(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{_t(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Me.prototype.detectForVideo=Me.prototype.F,Me.prototype.detect=Me.prototype.D,Me.prototype.setOptions=Me.prototype.o,Me.createFromModelPath=function(e,t){return jt(Me,e,{baseOptions:{modelAssetPath:t}})},Me.createFromModelBuffer=function(e,t){return jt(Me,e,{baseOptions:{modelAssetBuffer:t}})},Me.createFromOptions=function(e,t){return jt(Me,e,t)},Me.HAND_CONNECTIONS=xf,Me.POSE_CONNECTIONS=$_,Me.FACE_LANDMARKS_LIPS=df,Me.FACE_LANDMARKS_LEFT_EYE=ff,Me.FACE_LANDMARKS_LEFT_EYEBROW=pf,Me.FACE_LANDMARKS_LEFT_IRIS=W_,Me.FACE_LANDMARKS_RIGHT_EYE=mf,Me.FACE_LANDMARKS_RIGHT_EYEBROW=gf,Me.FACE_LANDMARKS_RIGHT_IRIS=X_,Me.FACE_LANDMARKS_FACE_OVAL=_f,Me.FACE_LANDMARKS_CONTOURS=q_,Me.FACE_LANDMARKS_TESSELATION=Y_;var Xn=class extends Sn{constructor(e,t){super(new Jn(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Ct(e=this.h=new R_,0,1,t=new Se)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return Ct(this.h,0,2,ad(e,te(this.h,Qd,2))),this.l(e)}ta(e,t){return this.j={classifications:[]},Kn(this,e,t),this.j}ua(e,t,n){return this.j={classifications:[]},Pi(this,e,n,t),this.j}m(){var e=new bn;_e(e,"input_image"),_e(e,"norm_rect"),ee(e,"classifications");let t=new Un;fi(t,A3,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),pe(n,"IMAGE:input_image"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"CLASSIFICATIONS:classifications"),n.o(t),Fn(e,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){let o={classifications:$i(r,f3,1).map((a=>cf(te(a,a_,4)?.g()??[],ui($n(a,2),0),Ri(a,3))))};return ul(Ms(r,2))!=null&&(o.timestampMs=ui(ul(Ms(r,2)),0)),o})(p3(i)),_t(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Xn.prototype.classifyForVideo=Xn.prototype.ua,Xn.prototype.classify=Xn.prototype.ta,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=function(e,t){return jt(Xn,e,{baseOptions:{modelAssetPath:t}})},Xn.createFromModelBuffer=function(e,t){return jt(Xn,e,{baseOptions:{modelAssetBuffer:t}})},Xn.createFromOptions=function(e,t){return jt(Xn,e,t)};var Pn=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect",!0),this.h=new C_,this.embeddings={embeddings:[]},Ct(e=this.h,0,1,t=new Se)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){var t=this.h,n=te(this.h,Mg,2);return n=n?n.clone():new Mg,e.l2Normalize!==void 0?fa(n,1,e.l2Normalize):"l2Normalize"in e&&fe(n,1),e.quantize!==void 0?fa(n,2,e.quantize):"quantize"in e&&fe(n,2),Ct(t,0,2,n),this.l(e)}Aa(e,t){return Kn(this,e,t),this.embeddings}Ba(e,t,n){return Pi(this,e,n,t),this.embeddings}m(){var e=new bn;_e(e,"image_in"),_e(e,"norm_rect"),ee(e,"embeddings_out");let t=new Un;fi(t,R3,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"EMBEDDINGS:embeddings_out"),n.o(t),Fn(e,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=_3(i),this.embeddings=(function(r){return{embeddings:$i(r,g3,1).map((o=>{let a={headIndex:ui($n(o,3),0)??-1,headName:Ri(o,4)??""};if(w0(o,yg,zu(o,1))!==void 0)o=js(o=te(o,yg,zu(o,1)),1,ws,Ks()),a.floatEmbedding=o.slice();else{let c=new Uint8Array(0);a.quantizedEmbedding=te(o,m3,zu(o,2))?.pa()?.h()??c}return a})),timestampMs:ui(ul(Ms(r,2)),0)}})(i),_t(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Pn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=wg(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=wg(Tg(e.quantizedEmbedding),Tg(t.quantizedEmbedding))}return e},Pn.prototype.embedForVideo=Pn.prototype.Ba,Pn.prototype.embed=Pn.prototype.Aa,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(e,t){return jt(Pn,e,{baseOptions:{modelAssetPath:t}})},Pn.createFromModelBuffer=function(e,t){return jt(Pn,e,{baseOptions:{modelAssetBuffer:t}})},Pn.createFromOptions=function(e,t){return jt(Pn,e,t)};var ud=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function $g(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Zg(e){try{let t=new ud(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Hl(e)}}ud.prototype.close=ud.prototype.close;var Mn=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new af,this.v=new P_,Ct(this.h,0,3,this.v),Ct(e=this.h,0,1,t=new Se)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?fe(this.h,2,ho(e.displayNamesLocale)):"displayNamesLocale"in e&&fe(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}J(){(function(e){let t=$i(e.ea(),xn,1).filter((n=>Ri(n,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(te(t[0],Un,7)?.l()?.g()??new Map).forEach(((n,i)=>{e.s[Number(i)]=Ri(n,1)}))})(this)}segment(e,t,n){let i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,$g(this),Kn(this,e,i),Zg(this)}Ma(e,t,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,$g(this),Pi(this,e,s,t),Zg(this)}Ea(){return this.s}m(){var e=new bn;_e(e,"image_in"),_e(e,"norm_rect");let t=new Un;fi(t,I_,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),n.o(t),Fn(e,n),zl(this,e),this.outputConfidenceMasks&&(ee(e,"confidence_masks"),Qt(n,"CONFIDENCE_MASKS:confidence_masks"),io(this,"confidence_masks"),this.g.da("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>oo(this,r,!0,!this.j))),_t(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],_t(this,i)}))),this.outputCategoryMask&&(ee(e,"category_mask"),Qt(n,"CATEGORY_MASK:category_mask"),io(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=oo(this,i,!1,!this.j),_t(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,_t(this,i)}))),ee(e,"quality_scores"),Qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,_t(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Mn.prototype.getLabels=Mn.prototype.Ea,Mn.prototype.segmentForVideo=Mn.prototype.Ma,Mn.prototype.segment=Mn.prototype.segment,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(e,t){return jt(Mn,e,{baseOptions:{modelAssetPath:t}})},Mn.createFromModelBuffer=function(e,t){return jt(Mn,e,{baseOptions:{modelAssetBuffer:t}})},Mn.createFromOptions=function(e,t){return jt(Mn,e,t)};var dd=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};dd.prototype.close=dd.prototype.close;var B3=class extends Mt{constructor(e){super(e)}},$r=[0,Ne,-2],xl=[0,Wi,-3,Ae,Wi,-1],Jg=[0,xl],Kg=[0,xl,Ne,-1],Yu=class extends Mt{constructor(e){super(e)}},jg=[0,Wi,-1,Ae],k3=class extends Mt{constructor(){super()}},Qg=class extends Mt{constructor(e){super(e)}},fd=[1,2,3,4,5,6,7,8,9,10,14,15],Z_=class extends Mt{constructor(){super()}};Z_.prototype.g=Fl([0,Ye,[0,fd,ae,xl,ae,[0,xl,$r],ae,Jg,ae,[0,Jg,$r],ae,jg,ae,[0,Wi,-3,Ae,di],ae,[0,Wi,-3,Ae],ae,[0,se,Wi,-2,Ae,Ne,Ae,-1,2,Wi,$r],ae,Kg,ae,[0,Kg,$r],Wi,$r,se,ae,[0,Wi,-3,Ae,$r,-1],ae,[0,Ye,jg]],se,[0,se,Ne,-1,Ae]]);var wi=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new af,this.s=new P_,Ct(this.h,0,3,this.s),Ct(e=this.h,0,1,t=new Se)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){let s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Z_;let r=new Qg;var o=new B3;if(Ci(o,1,255),Ct(r,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new Yu;fa(a,3,!0),St(a,1,t.keypoint.x),St(a,2,t.keypoint.y),ca(r,5,fd,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new k3,t.scribble))fa(t=new Yu,3,!0),St(t,1,a.x),St(t,2,a.y),fl(o,1,Yu,t);ca(r,15,fd,o)}fl(i,1,Qg,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),Kn(this,e,s);t:{try{let l=new dd(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break t}this.j(l)}finally{Hl(this)}c=void 0}return c}m(){var e=new bn;_e(e,"image_in"),_e(e,"roi_in"),_e(e,"norm_rect_in");let t=new Un;fi(t,I_,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),pe(n,"IMAGE:image_in"),pe(n,"ROI:roi_in"),pe(n,"NORM_RECT:norm_rect_in"),n.o(t),Fn(e,n),zl(this,e),this.outputConfidenceMasks&&(ee(e,"confidence_masks"),Qt(n,"CONFIDENCE_MASKS:confidence_masks"),io(this,"confidence_masks"),this.g.da("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>oo(this,r,!0,!this.j))),_t(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],_t(this,i)}))),this.outputCategoryMask&&(ee(e,"category_mask"),Qt(n,"CATEGORY_MASK:category_mask"),io(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=oo(this,i,!1,!this.j),_t(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,_t(this,i)}))),ee(e,"quality_scores"),Qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,_t(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};wi.prototype.segment=wi.prototype.segment,wi.prototype.setOptions=wi.prototype.o,wi.createFromModelPath=function(e,t){return jt(wi,e,{baseOptions:{modelAssetPath:t}})},wi.createFromModelBuffer=function(e,t){return jt(wi,e,{baseOptions:{modelAssetBuffer:t}})},wi.createFromOptions=function(e,t){return jt(wi,e,t)};var qn=class extends Sn{constructor(e,t){super(new Jn(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ct(e=this.h=new U_,0,1,t=new Se)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?fe(this.h,2,ho(e.displayNamesLocale)):"displayNamesLocale"in e&&fe(this.h,2),e.maxResults!==void 0?Ci(this.h,3,e.maxResults):"maxResults"in e&&fe(this.h,3),e.scoreThreshold!==void 0?St(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&fe(this.h,4),e.categoryAllowlist!==void 0?pl(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&fe(this.h,5),e.categoryDenylist!==void 0?pl(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&fe(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},Kn(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Pi(this,e,n,t),this.j}m(){var e=new bn;_e(e,"input_frame_gpu"),_e(e,"norm_rect"),ee(e,"detections");let t=new Un;fi(t,P3,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),pe(n,"IMAGE:input_frame_gpu"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"DETECTIONS:detections"),n.o(t),Fn(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=l_(r),this.j.detections.push(N_(i));_t(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{_t(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};qn.prototype.detectForVideo=qn.prototype.F,qn.prototype.detect=qn.prototype.D,qn.prototype.setOptions=qn.prototype.o,qn.createFromModelPath=async function(e,t){return jt(qn,e,{baseOptions:{modelAssetPath:t}})},qn.createFromModelBuffer=function(e,t){return jt(qn,e,{baseOptions:{modelAssetBuffer:t}})},qn.createFromOptions=function(e,t){return jt(qn,e,t)};var pd=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function t0(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function e0(e){try{let t=new pd(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{Hl(e)}}pd.prototype.close=pd.prototype.close;var Ln=class extends Sn{constructor(e,t){super(new Jn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ct(e=this.h=new D_,0,1,t=new Se),this.v=new w_,Ct(this.h,0,3,this.v),this.j=new T_,Ct(this.h,0,2,this.j),Ci(this.j,4,1),St(this.j,2,.5),St(this.v,2,.5),St(this.h,4,.5)}get baseOptions(){return te(this.h,Se,1)}set baseOptions(e){Ct(this.h,0,1,e)}o(e){return"numPoses"in e&&Ci(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&St(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&St(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&St(this.v,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,t0(this),Kn(this,e,i),e0(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,t0(this),Pi(this,e,s,t),e0(this)}m(){var e=new bn;_e(e,"image_in"),_e(e,"norm_rect"),ee(e,"normalized_landmarks"),ee(e,"world_landmarks"),ee(e,"segmentation_masks");let t=new Un;fi(t,L3,this.h);let n=new xn;Nn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),pe(n,"IMAGE:image_in"),pe(n,"NORM_RECT:norm_rect"),Qt(n,"NORM_LANDMARKS:normalized_landmarks"),Qt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),Fn(e,n),zl(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(let r of i)i=ya(r),this.landmarks.push(kl(i));_t(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],_t(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(let r of i)i=jr(r),this.worldLandmarks.push(ha(i));_t(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],_t(this,i)})),this.outputSegmentationMasks&&(Qt(n,"SEGMENTATION_MASK:segmentation_masks"),io(this,"segmentation_masks"),this.g.da("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>oo(this,r,!0,!this.s))),_t(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],_t(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ln.prototype.detectForVideo=Ln.prototype.F,Ln.prototype.detect=Ln.prototype.D,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(e,t){return jt(Ln,e,{baseOptions:{modelAssetPath:t}})},Ln.createFromModelBuffer=function(e,t){return jt(Ln,e,{baseOptions:{modelAssetBuffer:t}})},Ln.createFromOptions=function(e,t){return jt(Ln,e,t)},Ln.POSE_CONNECTIONS=$_;var vf=[{key:"thumb",chain:[1,2,3,4],tip:4,reach:1,label:"\u62C7\u6307"},{key:"index",chain:[5,6,7,8],tip:8,reach:1.42,label:"\u98DF\u6307"},{key:"middle",chain:[9,10,11,12],tip:12,reach:1.55,label:"\u4E2D\u6307"},{key:"ring",chain:[13,14,15,16],tip:16,reach:1.4,label:"\u65E0\u540D"},{key:"pinky",chain:[17,18,19,20],tip:20,reach:1.14,label:"\u5C0F\u6307"}],_i={pinch:{enter:.48,exit:.66,indexReach:1.12,indexCurl:.6,pulseCooldown:.45,rearmDistance:.85,rearmTime:.22},open:{minExtended:4,spreadEnter:1.02,spreadExit:.94},fist:{maxExtended:1,spreadEnter:.88,spreadExit:1,maxReach:1.24,reachExit:1.32,clusterEnter:.82,clusterExit:.95},finger:{curlEnter:.9,curlExit:.84,reachSlack:.9},vote:{frames:5,cooldown:.3},smooth:{pos:14,dead:.03,gain:1.2,yaw:Math.PI,pitch:.42},swipe:{window:.32,minDx:.35,ratio:1.5,cooldown:.5},lost:{offAfter:1.2}},Wl=(e,t,n)=>e<t?t:e>n?n:e;function xo(e,t){return Math.hypot(e.x-t.x,e.y-t.y,(e.z-t.z)*.6)}function z3(e,t=_i){let n=Math.max(xo(e[0],e[9]),1e-4),i=(e[0].x+e[9].x)/2,s=(e[0].y+e[9].y)/2,r=(e[0].z+e[9].z)/2,o=vf.map(g=>{let x=0;for(let f=0;f<g.chain.length-1;f++)x+=xo(e[g.chain[f]],e[g.chain[f+1]]);let m=xo(e[g.chain[0]],e[g.chain[g.chain.length-1]]);return{key:g.key,label:g.label,curl:x>1e-5?m/x:0,reach:xo(e[g.tip],e[0])/n,def:g}}),a=Math.hypot(e[4].x-e[8].x,e[4].y-e[8].y,(e[4].z-e[8].z)*.25)/n,c={x:i,y:s,z:r},l=0;for(let g=1;g<=4;g++)l+=xo(e[o[g].def.tip],c)/n;l/=4;let h=Math.max(...o.slice(1).map(g=>g.reach)),u=[8,12,16,20],d=0,p=0;for(let g=0;g<u.length;g++)for(let x=g+1;x<u.length;x++)d+=xo(e[u[g]],e[u[x]])/n,p++;return d/=p,{palm:n,pinch:a,spread:l,cluster:d,maxReach:h,fingers:o,indexCurl:o[1].curl,indexReach:o[1].reach}}var Xl=class{constructor(t={}){this.cfg={..._i,...t,pinch:{..._i.pinch,...t.pinch||{}},open:{..._i.open,...t.open||{}},fist:{..._i.fist,...t.fist||{}},finger:{..._i.finger,...t.finger||{}},vote:{..._i.vote,...t.vote||{}},smooth:{..._i.smooth,...t.smooth||{}},swipe:{..._i.swipe,...t.swipe||{}},lost:{..._i.lost,...t.lost||{}}},this.reset()}reset(){this.time=0,this.visible=!1,this.lastSeen=-1/0,this.label="NONE",this.mode="TREE",this.votes=[],this.lastSwitch=-1/0,this.metrics=null,this.extended=[!1,!1,!1,!1,!1],this.confidence=0,this.x=0,this.y=0,this._hasPos=!1,this._trail=[],this._lastSwipe=-1/0,this.swipe=null,this._pinchOn=!1,this._pinchSeen=0,this._releaseSince=0,this._lastPinch=-1/0}update(t,n){let i=Wl(n||0,0,.1);this.time+=i;let s={visible:this.visible,label:this.label,mode:this.mode,changed:!1,confidence:0,metrics:this.metrics,extended:this.extended,x:this.x,y:this.y,swipe:null,pinchStart:!1};if(!t||t.length<21)return this.visible=this.time-this.lastSeen<this.cfg.lost.offAfter,this.votes.length=0,this.label="NONE",this.confidence=0,this._trail.length=0,s.visible=this.visible,s.label=this.label,s.confidence=0,s;this.visible=!0,this.lastSeen=this.time;let r=z3(t,this.cfg);this.metrics=r,this.extended=this._latchExtended(r),this.label=this._classify(r),this.confidence=this._confidence(this.label,r);let o=this._updatePinchPulse(),a=(.5-t[9].x)*2,c=(t[9].y-.5)*2;if(!this._hasPos)this.x=a,this.y=c,this._hasPos=!0;else{let h=1-Math.exp(-this.cfg.smooth.pos*i);this.x+=(a-this.x)*h,this.y+=(c-this.y)*h}return this.swipe=this._detectSwipe(a,c),this.votes.push(this.label),this.votes.length>this.cfg.vote.frames&&this.votes.shift(),this.votes.length===this.cfg.vote.frames&&this.votes.every(h=>h===this.votes[0])&&this.label!=="NONE"&&this.label!==this.mode&&this.time-this.lastSwitch>=this.cfg.vote.cooldown&&(this.mode=this.label,this.lastSwitch=this.time,this.votes.length=0,s.changed=!0),s.visible=!0,s.label=this.label,s.mode=this.mode,s.confidence=this.confidence,s.metrics=r,s.extended=this.extended,s.x=this.x,s.y=this.y,s.swipe=this.swipe,s.pinchStart=o,s}_updatePinchPulse(){let t=this.cfg.pinch;return this.label==="FOCUS"?(this._pinchSeen++,this._releaseSince=0,!this._pinchOn&&this._pinchSeen>=2&&this.time-this._lastPinch>=t.pulseCooldown?(this._pinchOn=!0,this._lastPinch=this.time,!0):!1):(this._pinchSeen=0,this.metrics&&this.metrics.pinch>t.rearmDistance?(this._releaseSince||(this._releaseSince=this.time),this._pinchOn&&this.time-this._releaseSince>=t.rearmTime&&(this._pinchOn=!1),!1):(this._releaseSince=0,!1))}_detectSwipe(t,n){let i=this.cfg.swipe;for(this._trail.push({t:this.time,x:t,y:n});this._trail.length>48||this._trail.length>1&&this.time-this._trail[0].t>1.2;)this._trail.shift();if(this.time-this._lastSwipe<i.cooldown)return null;let s=null;for(let a of this._trail)if(this.time-a.t<=i.window){s=a;break}if(!s||s===this._trail[this._trail.length-1])return null;let r=t-s.x,o=n-s.y;return Math.abs(r)<i.minDx||Math.abs(r)<Math.abs(o)*i.ratio?null:(this._lastSwipe=this.time,this._trail.length=0,r>0?"right":"left")}_latchExtended(t){let n=this.cfg.finger;return t.fingers.map((i,s)=>{let r=this.extended[s],o=r?n.curlExit:n.curlEnter,a=i.def.reach*(r?n.reachSlack:1);return i.curl>o&&i.reach>a})}_classify(t){let n=this.cfg,i=this.extended.slice(1).filter(Boolean).length,s=this.label;if(t.pinch<(s==="FOCUS"?n.pinch.exit:n.pinch.enter)&&t.indexReach>n.pinch.indexReach&&t.indexCurl>n.pinch.indexCurl)return"FOCUS";if(i>=n.open.minExtended&&t.spread>(s==="SCATTER"?n.open.spreadExit:n.open.spreadEnter))return"SCATTER";let r=s==="TREE";return i<=n.fist.maxExtended&&t.spread<(r?n.fist.spreadExit:n.fist.spreadEnter)&&t.cluster<(r?n.fist.clusterExit:n.fist.clusterEnter)&&t.maxReach<(r?n.fist.reachExit:n.fist.maxReach)?"TREE":"NONE"}_confidence(t,n){let i=this.cfg;return t==="FOCUS"?Wl((i.pinch.exit-n.pinch)/(i.pinch.exit-.12),0,1):t==="SCATTER"?Wl((n.spread-i.open.spreadExit*.9)/.55,0,1):t==="TREE"?Wl((i.fist.clusterExit-n.cluster)/.7,0,1):0}};function J_(e,t=.06){return Math.abs(e)<t?0:(e-Math.sign(e)*t)/(1-t)}function H3(e,t){let n=Math.PI*2;return((t-e+Math.PI)%n+n)%n-Math.PI}function K_(e,t,n=_i.smooth,i=1/60){let s=n.gain||1,r=Math.max(-1,Math.min(1,t.x)),o=Math.max(-1,Math.min(1,t.y)),a=Math.max(-1,Math.min(1,J_(r,n.dead)*s))*n.yaw,c=Math.max(-1,Math.min(1,J_(o,n.dead*2)*s))*n.pitch,l=1-Math.exp(-(n.follow||16)*i);return{y:e.y+H3(e.y,a)*l,x:e.x+(c-e.x)*l}}var vo=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||Math.min(window.innerWidth,window.innerHeight)<=820,Ge={colors:{bg:0,champagneGold:16767334,deepGreen:202762,accentRed:10027008},particles:{count:vo?900:1500,dustCount:vo?1100:2500,treeHeight:24,treeRadius:8},camera:{z:50,targetWidth:22.5},render:{maxPixelRatio:vo?1.5:2,bloomScale:vo?.5:1,bloomStrength:.45}},it={mode:"TREE",focusIndex:0,focusTarget:null,hand:{detected:!1,x:0,y:0},rotation:{x:0,y:0},inputMode:"gesture",touchActiveAt:0,gestureReady:!1},xi,Ce,me,Aa,jn,Tf=null,j_=new bi,l1=new Hr,es=[],h1=new Mi,wf,be,Qi,re,Ta,yo=new Xl,Rf=null,V3=null;async function G3(){document.body.classList.add(vo?"is-mobile":"is-desktop"),W3(),X3(),q3(),Z3(),j3(),Q3(),$3(),SE(),yE(),bE(),Kl();let e=eE();setTimeout(()=>e1().catch(n=>console.warn("\u6A21\u578B\u9884\u70ED\u5931\u8D25:",n)),12e3),e.finally(()=>{e1().catch(n=>console.warn("\u6A21\u578B\u9884\u70ED\u5931\u8D25:",n))}),"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("../sw.js").catch(()=>{}),await Promise.all([Promise.race([_1(),new Promise(n=>setTimeout(n,8e3))]).catch(n=>console.warn("MediaPipe init skipped:",n)),Promise.race([e,new Promise(n=>setTimeout(n,6e3))])]);let t=document.getElementById("loader");t&&(t.style.opacity=0,setTimeout(()=>t.remove(),800)),T1()}function W3(){let e=document.getElementById("canvas-container");xi=new Or,xi.background=new Ft(Ge.colors.bg),xi.fog=new bc(Ge.colors.bg,.01),Ce=new tn(42,window.innerWidth/window.innerHeight,.1,1e3),Ce.position.set(0,2,Ge.camera.z),u1(),d1(),me=new Ho({antialias:!0,alpha:!1,powerPreference:"high-performance"}),me.setSize(window.innerWidth,window.innerHeight),me.setPixelRatio(Math.min(window.devicePixelRatio,Ge.render.maxPixelRatio)),me.toneMapping=Tu,me.toneMappingExposure=2.2,e.appendChild(me.domElement),jn=new Mi,jn.position.y=-1.2,xi.add(jn)}function X3(){let e=new Fr(me);xi.environment=e.fromScene(new $c,.04).texture}function q3(){let e=new Oc(16777215,.6);xi.add(e);let t=new zr(16755200,2,20);t.position.set(0,5,0),jn.add(t);let n=new jo(16764006,1200);n.position.set(30,40,40),n.angle=.5,n.penumbra=.5,xi.add(n);let i=new jo(6719743,600);i.position.set(-30,20,-30),xi.add(i);let s=new Fc(16772795,.8);s.position.set(0,0,50),xi.add(s)}var Li=null;function Y3(e,t){if(!Li)return;let n=Ge.render.bloomScale;Li.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n)))}function $3(){let e=new Yc(xi,Ce);Li=new Xr(new nt(window.innerWidth*Ge.render.bloomScale,window.innerHeight*Ge.render.bloomScale),1.5,.4,.85),Li.threshold=.7,Li.strength=Ge.render.bloomStrength,Li.radius=.4,/[?&]nobloom/.test(location.search)&&(Li.strength=0);let t=new URLSearchParams(location.search);t.has("exp")&&(me.toneMappingExposure=Number(t.get("exp"))),t.has("bs")&&(Li.strength=Number(t.get("bs"))),t.has("bt")&&(Li.threshold=Number(t.get("bt"))),Aa=new qc(me),Aa.addPass(e),Aa.addPass(Li),Rs=Ce.clone(),Rs.layers.set(1)}function Q_(e,t){if(!e)return;let n=e.userData.photoMesh;n&&n.material&&(n.material.toneMapped=!t,n.material.needsUpdate=!0),e.traverse(i=>{t?i.layers.set(1):i.layers.set(0)})}var Rs=null,Cs=null;function Z3(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="#880000",t.beginPath();for(let n=-128;n<256;n+=32)t.moveTo(n,0),t.lineTo(n+32,128),t.lineTo(n+16,128),t.lineTo(n-16,0);t.fill(),Ta=new Vo(e),Ta.wrapS=Pr,Ta.wrapT=Pr,Ta.repeat.set(3,3)}var J3=new C,Ca=class{constructor(t,n,i=!1){this.mesh=t,this.type=n,this.isDust=i,this.posTree=new C,this.posScatter=new C,this.baseScale=t.scale.x;let s=n==="PHOTO"?.3:2;this.spinSpeed=new C((Math.random()-.5)*s,(Math.random()-.5)*s,(Math.random()-.5)*s),this.calculatePositions()}calculatePositions(){let t=Ge.particles.treeHeight,n=t/2,i=Math.random();i=Math.pow(i,.8);let s=i*t-n,r=Ge.particles.treeRadius*(1-i);r<.5&&(r=.5);let o=i*50*Math.PI+Math.random()*Math.PI,a=r*(.8+Math.random()*.4);this.posTree.set(Math.cos(o)*a,s,Math.sin(o)*a);let c=this.isDust?12+Math.random()*20:8+Math.random()*12,l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);this.posScatter.set(c*Math.sin(h)*Math.cos(l),c*Math.sin(h)*Math.sin(l),c*Math.cos(h))}update(t,n,i){let s=this.posTree;if(n==="SCATTER")s=this.posScatter;else if(n==="FOCUS")if(this.mesh===i){let c=new C(0,1.1,35),l=new Ie().copy(jn.matrixWorld).invert();s=c.applyMatrix4(l)}else s=this.posScatter;let r=n==="FOCUS"&&this.mesh===i,o=r?5:2;this.mesh.position.lerp(s,1-Math.exp(-o*t)),n==="SCATTER"?(this.mesh.rotation.x+=this.spinSpeed.x*t,this.mesh.rotation.y+=this.spinSpeed.y*t,this.mesh.rotation.z+=this.spinSpeed.z*t):n==="TREE"&&(this.mesh.rotation.x=Vi.lerp(this.mesh.rotation.x,0,t),this.mesh.rotation.z=Vi.lerp(this.mesh.rotation.z,0,t),this.mesh.rotation.y+=.5*t),r&&this.mesh.lookAt(Ce.position);let a=this.baseScale;this.isDust?(a=this.baseScale*(.8+.4*Math.sin(l1.elapsedTime*4+this.mesh.id)),n==="TREE"&&(a=0)):n==="SCATTER"&&this.type==="PHOTO"?a=this.baseScale*2.5:n==="FOCUS"&&(r?a=this.focusScaleFor():a=this.baseScale*.8),this.mesh.scale.lerp(J3.set(a,a,a),1-Math.exp(-4*t))}focusScaleFor(){let t=this.frameW||1.4,n=this.frameH||1.4,i=Math.max(Ce.position.z-35,1),s=2*Math.tan(Vi.degToRad(Ce.fov)/2)*i,r=s*Ce.aspect;return Math.min(s*.66/n,r*.88/t)}},yf={w:18,h:11.5};function u1(){if(!Ce)return;let e=window.innerWidth/Math.max(window.innerHeight,1),t=Vi.degToRad(Ce.fov)/2,n=Ge.camera.targetWidth/2/(Math.tan(t)*e);Ce.position.z=Math.max(Ge.camera.z,n);let i=Vi.clamp((1-e)/.5,0,1);Ce.position.y=Vi.lerp(2,.5,i)}function d1(){if(!Ce)return;let e=Math.max(Ce.position.z-35,1);yf.h=2*Math.tan(Vi.degToRad(Ce.fov)/2)*e,yf.w=yf.h*Ce.aspect}function K3(e=1.05,t=.44,n=.26){let i=new Xo;for(let r=0;r<10;r++){let o=r%2===0?e:t,a=Math.PI/2+r*Math.PI/5,c=Math.cos(a)*o,l=Math.sin(a)*o;r===0?i.moveTo(c,l):i.lineTo(c,l)}i.closePath();let s=new Lc(i,{depth:n,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2});return s.translate(0,0,-n/2),s}function j3(){let e=new Ic(.5,32,32),t=new ai(.55,.55,.55),n=new Wo([new C(0,-.5,0),new C(0,.3,0),new C(.1,.5,0),new C(.3,.4,0)]),i=new Dc(n,16,.08,8,!1),s=new Gn({color:Ge.colors.champagneGold,metalness:1,roughness:.1,envMapIntensity:2,emissive:4469504,emissiveIntensity:.3}),r=new Gn({color:Ge.colors.deepGreen,metalness:.2,roughness:.8,emissive:8704,emissiveIntensity:.2}),o=new Nc({color:Ge.colors.accentRed,metalness:.3,roughness:.2,clearcoat:1,emissive:3342336}),a=new Gn({map:Ta,roughness:.4});for(let u=0;u<Ge.particles.count;u++){let d=Math.random(),p,g;d<.4?(p=new Kt(t,r),g="BOX"):d<.7?(p=new Kt(t,s),g="GOLD_BOX"):d<.92?(p=new Kt(e,s),g="GOLD_SPHERE"):d<.97?(p=new Kt(e,o),g="RED"):(p=new Kt(i,a),g="CANE");let x=.4+Math.random()*.5;p.scale.set(x,x,x),p.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),jn.add(p),es.push(new Ca(p,g,!1))}let c=K3(),l=new Gn({color:16768392,emissive:16755200,emissiveIntensity:1,metalness:1,roughness:0}),h=new Kt(c,l);h.position.set(0,Ge.particles.treeHeight/2+1.2,0),Tf=h,jn.add(h),jn.add(h1)}function Q3(){let e=new Uc(.08,0),t=new oi({color:16772795,transparent:!0,opacity:.8});for(let n=0;n<Ge.particles.dustCount;n++){let i=new Kt(e,t);i.scale.setScalar(.5+Math.random()),jn.add(i),es.push(new Ca(i,"DUST",!0))}}function f1(e,t=null){let n=e.image,i=n&&n.width&&n.height?n.width/n.height:1,s=1.2,r=i>=1?s:s*i,o=i>=1?s/i:s,a=new ai(r+.2,o+.2,.05),c=new Gn({color:Ge.colors.champagneGold,metalness:1,roughness:.1}),l=new Kt(a,c),h=new Dr(r,o),u=new oi({map:e,side:ni}),d=new Kt(h,u);d.position.z=.04;let p=new Mi;p.add(l),p.add(d),p.userData.photoMesh=d;let g=.8;p.scale.set(g,g,g),h1.add(p);let x=new Ca(p,"PHOTO",!1);return x.frameMesh=l,x.aspect=i,x.frameW=r+.2,x.frameH=o+.2,x.fullUrl=t,x.thumbTexture=e,x.fullTexture=null,x.orderIndex=1e6+tE++,es.push(x),x}var tE=0;async function eE(){try{let e=await fetch("photos/manifest.json",{cache:"no-cache"});if(!e.ok)throw new Error("HTTP "+e.status);let t=await e.json(),n=t&&t.photos||[],i=(h,u)=>{let d=h[u];return d?/^(\.\.\/|\/|https?:)/.test(d)?d:`${h.dir||"../assets/photos"}/${d}`:null},s=nE(),r=n.map((h,u)=>{let d=f1(s,i(h,"full"));return d.orderIndex=u,d.photoId=h.id,d.midUrl=i(h,"mid"),d.thumbUrl=i(h,"thumb"),d.origUrl=i(h,"orig"),d.origW=h.w||0,d.origH=h.h||0,d}),o=new $s,a=0,c=0,l=async()=>{for(;c<r.length;){let h=r[c++];try{let u=await iE(h.thumbUrl),d=await o.loadAsync(u);d.colorSpace=ve,d.anisotropy=me.capabilities.getMaxAnisotropy(),Ra(h,d),h.thumbTexture=d,a++}catch(u){console.warn("\u7167\u7247\u52A0\u8F7D\u5931\u8D25:",h.thumbUrl,u)}}};await Promise.all(Array.from({length:Math.min(4,r.length)},l)),console.log(`\u76F8\u518C\uFF1A\u5DF2\u52A0\u8F7D ${a}/${r.length} \u5F20`),sE(),rE()}catch(e){console.warn("\u76F8\u518C\u6E05\u5355\u8BFB\u53D6\u5931\u8D25:",e)}}function nE(){let e=document.createElement("canvas");e.width=4,e.height=4;let t=e.getContext("2d");t.fillStyle="#0d0b06",t.fillRect(0,0,4,4);let n=new Vo(e);return n.colorSpace=ve,n}async function iE(e,t=12e3,n=2){let i;for(let s=0;s<n;s++){let r=new AbortController,o=setTimeout(()=>r.abort(),t);try{let a=await fetch(e,{signal:r.signal});if(!a.ok)throw new Error("HTTP "+a.status);return await a.arrayBuffer(),e}catch(a){i=a}finally{clearTimeout(o)}}throw i}function sE(){let e=/[?&]mode=(tree|scatter)/i.exec(location.search);e&&(it.mode=e[1].toUpperCase(),it.focusTarget=null,Jl())}function rE(){let e=/[?&]photo=(\d+)/.exec(location.search);if(!e)return;let t=ts();if(!t.length)return;let n=Math.max(0,Math.min(Number(e[1]),t.length-1));it.mode="FOCUS",it.focusIndex=n,it.focusTarget=t[n].mesh,g1(it.focusTarget),Jl()}var Sa=[],oE=8,p1=new $s;function m1(e){return!e||!e.fullUrl||e.fullUrl===e.midUrl?Promise.resolve(null):e.fullTexture?Promise.resolve(e.fullTexture):(e.fullPromise||(e.fullPromise=(async()=>{try{let t=await fetch(e.fullUrl);if(!t.ok)throw new Error("HTTP "+t.status);let n=await t.blob(),i=URL.createObjectURL(n),s=await p1.loadAsync(i);try{s.image&&s.image.decode&&await s.image.decode()}catch{}return URL.revokeObjectURL(i),s.colorSpace=ve,s.anisotropy=me.capabilities.getMaxAnisotropy(),e.fullTexture=s,aE(e),s}catch(t){return console.warn("\u5927\u56FE\u52A0\u8F7D\u5931\u8D25:",e.fullUrl,t),null}finally{e.fullPromise=null}})()),e.fullPromise)}function aE(e){let t=Sa.indexOf(e);for(t>=0&&Sa.splice(t,1),Sa.push(e);Sa.length>oE;){let n=Sa.shift();if(!n||n===cE())continue;let i=n.mesh.userData.photoMesh;i&&n.fullTexture&&(i.material.map===n.fullTexture&&(i.material.map=n.thumbTexture,i.material.needsUpdate=!0),n.fullTexture.dispose(),n.fullTexture=null)}}function cE(){return Cs?es.find(e=>e.mesh===Cs):null}function lE(e){return!e||!e.midUrl?Promise.resolve(null):e.midTexture?Promise.resolve(e.midTexture):(e.midPromise||(e.midPromise=new Promise(t=>{p1.load(e.midUrl,async n=>{try{n.image&&n.image.decode&&await n.image.decode()}catch{}n.colorSpace=ve,n.anisotropy=me.capabilities.getMaxAnisotropy(),e.midTexture=n,e.midPromise=null,t(n)},void 0,()=>{e.midPromise=null,t(null)})})),e.midPromise)}function Ra(e,t){if(!e||!t)return;let n=e.mesh.userData.photoMesh;n&&(hE(e,t),n.material.map!==t&&(n.material.map=t,n.material.needsUpdate=!0))}function hE(e,t){let n=t.image;if(!n||!n.width||!n.height)return;let i=n.width/n.height;if(e.aspect&&Math.abs(i-e.aspect)<.01)return;let s=1.2,r=i>=1?s:s*i,o=i>=1?s/i:s,a=e.mesh.userData.photoMesh;a&&(a.geometry.dispose(),a.geometry=new Dr(r,o)),e.frameMesh&&(e.frameMesh.geometry.dispose(),e.frameMesh.geometry=new ai(r+.2,o+.2,.05)),e.aspect=i,e.frameW=r+.2,e.frameH=o+.2}function g1(e){if(!e)return;let t=es.find(n=>n.mesh===e);t&&(t.fullTexture?Ra(t,t.fullTexture):(lE(t).then(n=>{n&&!t.fullTexture&&Ra(t,n)}),m1(t).then(n=>{n&&(it.focusTarget===t.mesh&&Ra(t,n),t.midTexture&&(t.midTexture.dispose(),t.midTexture=null),t1(t))})),t.fullTexture&&t1(t))}function t1(e){let t=ts(),n=t.findIndex(s=>s.mesh===e.mesh);if(n<0)return;let i=t[(n+1)%t.length];i&&i!==e&&!i.fullTexture&&!i.fullPromise&&m1(i)}var uE=new $s;function dE(e){if(!e||!e.origUrl||e.origTexture||e.origPromise)return;let t=me.capabilities&&me.capabilities.maxTextureSize||4096;if(e.origW&&Math.max(e.origW,e.origH)>t){console.info(`\u539F\u56FE ${e.origW}\xD7${e.origH} \u8D85\u8FC7\u672C\u673A\u7EB9\u7406\u4E0A\u9650 ${t}\uFF0C\u6539\u7528 mid \u7248\u672C\uFF08\u5C4F\u5E55\u4E0A\u770B\u4E0D\u51FA\u5DEE\u522B\uFF09`);return}e.origPromise=(async()=>{try{let n=await fetch(e.origUrl);if(!n.ok)throw new Error("HTTP "+n.status);let i=Number(n.headers.get("content-length"))||0,s=n.body.getReader(),r=[],o=0;for(;;){let{done:h,value:u}=await s.read();if(h)break;r.push(u),o+=u.length,it.focusTarget===e.mesh&&(it.origStatus="loading",it.origPct=i?Math.min(99,Math.round(o/i*100)):0,Ps(`\u{1F5BC} \u7167\u7247 ${it.focusIndex+1} / ${ts().length} \xB7 \u539F\u56FE ${it.origPct}% \xB7 \u634F\u5408\u6216 \u2191\u2193 \u7FFB\u9875`,!1))}let a=new Blob(r),c=URL.createObjectURL(a),l=await uE.loadAsync(c);URL.revokeObjectURL(c),l.colorSpace=ve,l.anisotropy=me.capabilities.getMaxAnisotropy(),e.origTexture=l,it.focusTarget===e.mesh&&(Ra(e,l),it.origStatus="done",Ps(`\u{1F5BC} \u7167\u7247 ${it.focusIndex+1} / ${ts().length} \xB7 \u539F\u56FE\u753B\u8D28 \xB7 \u634F\u5408\u6216 \u2191\u2193 \u7FFB\u9875`,!1))}catch(n){console.warn("\u539F\u56FE\u52A0\u8F7D\u5931\u8D25:",e.origUrl,n)}finally{e.origPromise=null}})()}function fE(e){let t=e.target.files;t.length&&Array.from(t).forEach(n=>{let i=new FileReader;i.onload=s=>{new $s().load(s.target.result,r=>{r.colorSpace=ve,f1(r)})},i.readAsDataURL(n)})}var $l=!1;function pE(e){let t=e&&e.name?e.name:"UnknownError";return t==="NotAllowedError"||t==="SecurityError"?"\u26A0 \u6444\u50CF\u5934\u88AB\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\uFF1A\u70B9\u5730\u5740\u680F\u53F3\u4FA7\u7684\u76F8\u673A\u56FE\u6807 \u2192 \u6539\u4E3A\u300C\u5141\u8BB8\u300D\u2192 \u5237\u65B0":t==="NotFoundError"||t==="DevicesNotFoundError"?"\u26A0 \u6CA1\u627E\u5230\u6444\u50CF\u5934\u8BBE\u5907\uFF0C\u68C0\u67E5\u662F\u5426\u88AB\u7981\u7528\u6216\u65AD\u5F00":t==="NotReadableError"||t==="TrackStartError"?"\u26A0 \u6444\u50CF\u5934\u88AB\u5176\u5B83\u7A0B\u5E8F\u5360\u7528\uFF08\u5FAE\u4FE1/\u4F1A\u8BAE\u8F6F\u4EF6\uFF09\uFF0C\u5173\u6389\u518D\u5237\u65B0":t==="OverconstrainedError"?"\u26A0 \u6444\u50CF\u5934\u4E0D\u652F\u6301\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u5DF2\u5C1D\u8BD5\u964D\u7EA7\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5":"\u26A0 \u6444\u50CF\u5934\u6253\u5F00\u5931\u8D25\uFF1A"+t}async function _1(){if(be=document.getElementById("webcam"),Qi=document.getElementById("webcam-preview"),re=Qi?Qi.getContext("2d"):null,Qi&&(Qi.width=192,Qi.height=144),!window.isSecureContext){Ef(`\u26A0 \u5F53\u524D\u662F ${location.protocol}// \u6253\u5F00\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u7528\u6444\u50CF\u5934\u3002\u5DF2\u5207\u5230\u89E6\u6478\u64CD\u4F5C\uFF0C\u6216\u6539\u7528 https \u94FE\u63A5`);return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){Ef("\u26A0 \u8FD9\u4E2A\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6444\u50CF\u5934\u63A5\u53E3\uFF0C\u5DF2\u5207\u5230\u89E6\u6478\u64CD\u4F5C\uFF08\u62D6\u52A8\u65CB\u8F6C \xB7 \u53CC\u51FB\u805A\u6563\uFF09");return}try{let e=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:{ideal:"user"}},audio:!1});be.srcObject=e,be.muted=!0,be.onloadeddata=()=>{be.play().catch(()=>{})},$l=!0,Cf=!0,rt.webcamWrap&&rt.webcamWrap.classList.add("active"),Ps("\u6444\u50CF\u5934\u5DF2\u5C31\u7EEA \xB7 \u6B63\u5728\u52A0\u8F7D\u8BC6\u522B\u6A21\u578B\u2026",!1),v1()}catch(e){console.warn("\u6444\u50CF\u5934\u6253\u5F00\u5931\u8D25:",e),Ef(pE(e)+"\uFF08\u5DF2\u5207\u5230\u89E6\u6478\u64CD\u4F5C\uFF09");return}wa.then(e=>{wf=e,it.gestureReady=!0}).catch(e=>{console.warn("\u624B\u90E8\u6A21\u578B\u52A0\u8F7D\u5931\u8D25:",e),Ps("\u26A0 \u624B\u90E8\u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF0C\u53EF\u7528\u89E6\u6478\u64CD\u4F5C\uFF08\u62D6\u52A8\u65CB\u8F6C \xB7 \u53CC\u51FB\u805A\u6563\uFF09")})}var wa=null;function e1(){if(wa)return wa;let e="../assets/wasm",t="../assets/hand_landmarker.task",n=ps.forVisionTasks(e),i=7.46*1048576,s=performance.now(),r=mE(t,o=>{if(it.mode==="FOCUS")return;let a=Math.min(99,Math.round(o/i*100)),c=(performance.now()-s)/1e3,l=o/Math.max(c,1),h=Math.max(0,(i-o)/Math.max(l,1)),u=h>=90?`${Math.round(h/60)} \u5206\u949F`:`${Math.max(1,Math.round(h))} \u79D2`;Ps(`\u8BC6\u522B\u6A21\u578B ${a}% \xB7 \u7EA6\u8FD8\u9700 ${u}`,!1)});return wa=(async()=>{let[o,a]=await Promise.all([n,r]);return Ps("\u8BC6\u522B\u6A21\u578B\u5DF2\u4E0B\u8F7D\u5B8C \xB7 \u6B63\u5728\u542F\u52A8\u8BC6\u522B\u5F15\u64CE\uFF08\u7EA6 10 \u79D2\uFF09\u2026",!1),gn.createFromOptions(o,{baseOptions:{modelAssetPath:URL.createObjectURL(a),delegate:"GPU"},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5})})(),wa}async function mE(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u6A21\u578B\u4E0B\u8F7D\u5931\u8D25 HTTP ${n.status}`);if(!n.body||!n.body.getReader)return n.blob();let i=n.body.getReader(),s=[],r=0;for(;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length,t&&t(r)}return new Blob(s,{type:"application/octet-stream"})}var n1=-1,ba=0,gE=1e3/(vo?24:30),ji={detects:0,fps:0,handHit:0,lastTick:0},Cf=!1;function x1(){if(Cf=!1,$l=!1,it.gestureReady=!1,it.hand.detected=!1,be&&be.srcObject){try{be.srcObject.getTracks().forEach(e=>e.stop())}catch{}be.srcObject=null}rt.webcamWrap&&rt.webcamWrap.classList.remove("active")}async function v1(){if(!Cf||(requestAnimationFrame(v1),!be||be.readyState<2)||be.currentTime===n1)return;if(n1=be.currentTime,be.paused&&be.play().catch(()=>{}),!wf){S1(null,null);return}let e=performance.now();if(ba&&e-ba<gE)return;let t=ba?(e-ba)/1e3:1/30;ba=e;let n=wf.detectForVideo(be,e);ji.detects++,n&&n.landmarks&&n.landmarks.length&&ji.handHit++,e-ji.lastTick>1e3&&(ji.fps=Math.round(ji.detects*1e3/(e-ji.lastTick)),ji.detects=0,ji.lastTick=e),_E(n,t)}function _E(e,t){if(it.inputMode!=="gesture")return;let n=e&&e.landmarks&&e.landmarks[0]||null;V3=n;let i=yo.update(n,t);Rf=i,it.hand.detected=i.visible,it.hand.x=i.x,it.hand.y=i.y,i.changed&&Mo(i.mode),i.pinchStart&&it.mode==="FOCUS"&&Yl(1),S1(n,i),Lf(i)}function Mo(e){it.mode=e,it.focusTarget=null,e==="FOCUS"?M1(1):(Jl(),b1(e)),Lf(Rf,!0),If()}function Jl(){let e=it.mode==="FOCUS"?it.focusTarget:null;if(Cs&&Cs!==e){Q_(Cs,!1);let t=es.find(n=>n.mesh===Cs);t&&t.origTexture&&(t.origTexture.dispose(),t.origTexture=null)}e&&Q_(e,!0),Cs=e}function ts(){let e=es.filter(t=>t.type==="PHOTO");return e.sort((t,n)=>(t.orderIndex??0)-(n.orderIndex??0)),e}function y1(){let e=ts();if(!e.length||!it.focusTarget)return null;let t=it.focusIndex;return(!(t>=0&&t<e.length)||e[t].mesh!==it.focusTarget)&&(t=e.findIndex(n=>n.mesh===it.focusTarget)),t<0?null:{index:t,total:e.length}}function Yl(e){M1(e)}function M1(e){ts().length&&So(it.focusIndex+e)}function So(e){let t=ts();if(!t.length)return;let n=t.length;it.mode="FOCUS",it.focusIndex=(e%n+n)%n,it.origStatus=null,it.origPct=0,it.focusTarget=t[it.focusIndex].mesh,g1(it.focusTarget),Jl(),If(),Lf(Rf,!0),E1(),rt.mode&&(rt.mode.dataset.state="")}var xE=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]],vE=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]],i1={on:"#7dffb0",off:"rgba(255,255,255,0.25)"};function S1(e,t){if(!re||!Qi||!be||be.readyState<2)return;let n=Qi.width,i=Qi.height;if(re.save(),re.translate(n,0),re.scale(-1,1),re.drawImage(be,0,0,n,i),re.restore(),!e)return;let s=a=>(1-e[a].x)*n,r=a=>e[a].y*i,o=t&&t.extended||[!1,!1,!1,!1,!1];re.lineWidth=2;for(let[a,c]of xE)re.strokeStyle="rgba(255, 214, 102, 0.55)",re.beginPath(),re.moveTo(s(a),r(a)),re.lineTo(s(c),r(c)),re.stroke();vE.forEach((a,c)=>{re.strokeStyle=o[c]?i1.on:i1.off,re.lineWidth=o[c]?3:2,re.beginPath();let l=c===0?1:a[0];re.moveTo(s(l),r(l));for(let h of a)re.lineTo(s(h),r(h));re.stroke()});for(let a=0;a<e.length;a++)re.fillStyle=a===4||a===8?"#fff6d0":"rgba(255,255,255,0.8)",re.beginPath(),re.arc(s(a),r(a),a===4||a===8?3:1.8,0,Math.PI*2),re.fill();t&&t.label==="FOCUS"&&(re.strokeStyle="#ff5b7f",re.lineWidth=3,re.beginPath(),re.moveTo(s(4),r(4)),re.lineTo(s(8),r(8)),re.stroke())}var rt={};function yE(){if(rt.hint=document.getElementById("gesture-hint"),rt.mode=document.getElementById("gh-mode"),rt.dot=document.getElementById("gh-dot"),rt.webcamWrap=document.getElementById("webcam-wrapper"),rt.debug=document.getElementById("gesture-debug"),rt.dbgLabel=document.getElementById("dbg-label"),rt.dbgConf=document.getElementById("dbg-conf"),rt.dbgPinch=document.getElementById("dbg-pinch"),rt.dbgSpread=document.getElementById("dbg-spread"),rt.dbgCurl=document.getElementById("dbg-curl"),rt.dbgVotes=document.getElementById("dbg-votes"),rt.dbgDet=document.getElementById("dbg-det"),rt.dbgVideo=document.getElementById("dbg-video"),rt.dbgFingers=document.getElementById("dbg-fingers"),rt.dbgFingers&&!rt.dbgFingers.childElementCount)for(let e of vf){let t=document.createElement("span");t.className="finger-dot",t.dataset.key=e.key,t.title=e.label,t.textContent=e.label[0],rt.dbgFingers.appendChild(t)}}var Zl={TREE:"\u{1F384} \u5723\u8BDE\u6811",SCATTER:"\u2728 \u6563\u5F00",FOCUS:"\u{1F5BC} \u7167\u7247\u7279\u5199",IDLE:"\u5F85\u673A",OFF:"\u624B\u52BF\u4E0D\u53EF\u7528"};function ME(e){let t=Zl[e]||Zl.IDLE;if(e==="OFF")return"\u624B\u52BF\u8BC6\u522B\u4E0D\u53EF\u7528\uFF08\u9700\u8981\u6444\u50CF\u5934\u6743\u9650\uFF09";if(it.inputMode==="touch"){if(e==="TREE")return`${t} \xB7 \u62D6\u52A8\u65CB\u8F6C \xB7 \u53CC\u51FB\u6563\u5F00`;if(e==="SCATTER")return`${t} \xB7 \u62D6\u52A8\u65CB\u8F6C \xB7 \u53CC\u51FB\u805A\u62E2`;if(e==="FOCUS")return`${t} \xB7 \u5DE6\u53F3\u6ED1\u7FFB\u9875 \xB7 \u4E0B\u6ED1\u56DE\u6811`}else{if(e==="TREE")return`${t} \xB7 \u270A \u805A\u62E2 / \u{1F590} \u6563\u5F00`;if(e==="SCATTER")return`${t} \xB7 \u79FB\u52A8\u624B\u638C\u65CB\u8F6C`;if(e==="FOCUS")return`${t} \xB7 \u634F\u5408\u6216 \u2191\u2193 \u7FFB\u9875`}return t}var Af=0;function Pf(){return performance.now()<Af&&!!rt.mode&&rt.mode.dataset.state==="ERR"}function b1(e){!rt.mode||Pf()||(rt.mode.textContent=ME(e),rt.mode.dataset.state="",rt.hint&&rt.hint.classList.remove("warn"))}function E1(){let e=y1();if(!e||!rt.mode)return!1;if(Pf())return!0;let t=it.origStatus==="loading"?` \xB7 \u539F\u56FE ${it.origPct}%`:it.origStatus==="done"?" \xB7 \u539F\u56FE\u753B\u8D28":"";return rt.mode.textContent=it.inputMode==="touch"?`\u5DE6\u53F3\u6ED1\u7FFB\u9875 \xB7 \u4E0B\u6ED1\u56DE\u6811${t}`:`\u{1F5BC} \u7167\u7247 ${e.index+1} / ${e.total}${t} \xB7 \u634F\u5408\u6216 \u2191\u2193 \u7FFB\u9875`,rt.mode.dataset.state="FOCUS",rt.hint&&rt.hint.classList.remove("warn"),!0}function Ps(e,t=!0){rt.mode&&(rt.mode.textContent=e,t?(Af=performance.now()+8e3,rt.mode.dataset.state="ERR",rt.hint&&rt.hint.classList.add("warn"),rt.dot&&rt.dot.classList.remove("on")):(Af=0,rt.mode.dataset.state="",rt.hint&&rt.hint.classList.remove("warn")))}var s1=0;function Lf(e,t=!1){if(Kl(),!e)return;let n=performance.now();if(!t&&n-s1<100)return;if(s1=n,rt.webcamWrap&&rt.webcamWrap.classList.toggle("active",$l),rt.dot&&rt.dot.classList.toggle("on",!!e.visible),rt.mode){if(Pf())return;it.mode==="FOCUS"&&E1()?rt.mode.dataset.state=e.visible?e.label:"NONE":e.visible?(rt.mode.textContent=Zl[e.mode]||Zl.IDLE,rt.mode.dataset.state=e.label):(rt.mode.textContent=$l?"\u6444\u50CF\u5934\u5DF2\u5C31\u7EEA \xB7 \u628A\u624B\u4E3E\u5230\u753B\u9762\u91CC":"\u628A\u624B\u4E3E\u5230\u6444\u50CF\u5934\u524D\u2026",rt.mode.dataset.state="NONE")}if(!rt.debug||!rt.debug.classList.contains("visible"))return;let i=e.metrics;if(rt.dbgLabel&&(rt.dbgLabel.textContent=e.label),rt.dbgConf&&(rt.dbgConf.textContent=(e.confidence*100).toFixed(0)+"%"),i&&(rt.dbgPinch&&(rt.dbgPinch.textContent=i.pinch.toFixed(2)),rt.dbgSpread&&(rt.dbgSpread.textContent=i.spread.toFixed(2)),rt.dbgCurl&&(rt.dbgCurl.textContent=i.indexCurl.toFixed(2))),rt.dbgVotes&&(rt.dbgVotes.textContent=yo.votes.length?yo.votes.join(" "):"\u2014"),rt.dbgDet&&(rt.dbgDet.textContent=`${ji.fps}/s`),rt.dbgVideo&&be&&(rt.dbgVideo.textContent=be.paused?"\u5DF2\u6682\u505C":`${be.videoWidth}x${be.videoHeight} ${be.currentTime.toFixed(1)}s`),rt.dbgFingers){let s=rt.dbgFingers.children;for(let r=0;r<s.length;r++)s[r].classList.toggle("on",!!e.extended[r])}}function If(){rt.hint&&(rt.hint.classList.remove("flash"),rt.hint.offsetWidth,rt.hint.classList.add("flash"))}function SE(){window.addEventListener("resize",()=>{Ce.aspect=window.innerWidth/window.innerHeight,Ce.updateProjectionMatrix(),u1(),d1(),me.setPixelRatio(Math.min(window.devicePixelRatio,Ge.render.maxPixelRatio)),me.setSize(window.innerWidth,window.innerHeight),Aa.setSize(window.innerWidth,window.innerHeight),Y3(window.innerWidth,window.innerHeight)});let e=document.getElementById("file-input");e&&e.addEventListener("change",fE),window.addEventListener("keydown",t=>{let n=t.key.toLowerCase();if(n==="h"){let i=document.querySelector(".upload-wrapper");i&&i.classList.toggle("ui-hidden")}else if(n==="g"&&rt.debug)rt.debug.classList.toggle("visible");else if(n==="arrowdown"||n==="arrowup"){t.preventDefault();let i=ts();if(!i.length)return;it.mode!=="FOCUS"?So(n==="arrowdown"?0:i.length-1):So(it.focusIndex+(n==="arrowdown"?1:-1))}else if(n==="escape"&&it.mode==="FOCUS")t.preventDefault(),Mo("TREE");else if(n==="u")t.preventDefault(),So(0);else if(n==="o"){t.preventDefault();let i=es.find(s=>s.mesh===it.focusTarget);i&&dE(i)}})}var ir={dragCut:12,tapMove:14,tapTime:350,doubleTap:330,swipeX:44,swipeY:54},Ea=new Map,Ki=null,ql=0,Mf=new Bc,Sf=new nt;function bf(){it.touchActiveAt=performance.now()}function r1(e,t){let n=ts();if(!n.length)return-1;let i=me.domElement.getBoundingClientRect();if(!i.width||!i.height)return-1;Sf.x=(e-i.left)/i.width*2-1,Sf.y=-((t-i.top)/i.height)*2+1,Mf.setFromCamera(Sf,Ce),Mf.layers.enableAll();let s=Mf.intersectObjects(n.map(o=>o.mesh),!0);if(!s.length)return-1;let r=s[0].object;for(;r&&!r.userData.photoMesh;)r=r.parent;return r?n.findIndex(o=>o.mesh===r):-1}function o1(){Mo(it.mode==="TREE"?"SCATTER":"TREE")}function bE(){let e=me.domElement;e.style.touchAction="none",e.addEventListener("pointerdown",i=>{if(!(i.pointerType==="mouse"&&i.button!==0))if(bf(),Ea.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ea.size===1){Ki={startX:i.clientX,startY:i.clientY,startT:performance.now(),moved:0,switched:!1};try{e.setPointerCapture(i.pointerId)}catch{}}else Ki=null}),e.addEventListener("pointermove",i=>{let s=Ea.get(i.pointerId);if(!s)return;let r=i.clientX-s.x,o=i.clientY-s.y;s.x=i.clientX,s.y=i.clientY,bf(),!(!Ki||Ea.size>1)&&(Ki.moved+=Math.abs(r)+Math.abs(o),!Ki.switched&&Ki.moved>ir.dragCut&&(Ki.switched=!0,a1("touch",{quiet:!0})),it.mode!=="FOCUS"&&(it.rotation.y+=r*.008,it.rotation.x=Vi.clamp(it.rotation.x+o*.005,-.5,.5)))});let t=i=>{let s=Ea.delete(i.pointerId),r=Ki;if(Ki=null,!s||!r)return;let o=i.clientX-r.startX,a=i.clientY-r.startY,c=performance.now()-r.startT,l=Math.abs(o)<ir.tapMove&&Math.abs(a)<ir.tapMove&&c<ir.tapTime;if(it.mode==="FOCUS"){l?r1(i.clientX,i.clientY)<0&&Mo("TREE"):Math.abs(o)>ir.swipeX&&Math.abs(o)>Math.abs(a)*1.2?Yl(o<0?1:-1):a>ir.swipeY&&Mo("TREE");return}if(!l)return;let h=r1(i.clientX,i.clientY);if(h>=0){ql=0,So(h);return}let u=performance.now();u-ql<ir.doubleTap?(ql=0,o1()):ql=u};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),document.addEventListener("click",i=>{let s=i.target.closest("[data-act]");if(!s)return;bf();let r=s.dataset.act;r==="disperse"?o1():r==="photos"?So(0):r==="prev"?Yl(-1):r==="next"?Yl(1):r==="back"&&Mo("TREE")});let n=document.getElementById("input-toggle");n&&n.addEventListener("click",()=>{a1(it.inputMode==="gesture"?"touch":"gesture",{quiet:!1})})}function a1(e,t={}){let n=it.inputMode!==e;it.inputMode=e,e==="touch"?(x1(),b1(it.mode),n&&!t.quiet&&If()):(n&&!t.quiet&&Ps("\u6B63\u5728\u6253\u5F00\u6444\u50CF\u5934\u2026",!1),_1().catch(()=>{})),Kl()}function Ef(e){it.inputMode==="touch"&&document.body.classList.contains("gesture-off")||(it.inputMode="touch",x1(),document.body.classList.add("gesture-off"),Ps(e,!0),Kl())}var c1=null;function Kl(){let e=it.mode==="FOCUS"?y1():null,t=`${it.mode}|${it.inputMode}|${e?e.index+"/"+e.total:""}`;if(t===c1)return;c1=t;let n=it.mode==="FOCUS";document.body.classList.toggle("mode-focus",n),document.body.classList.toggle("mode-touch",it.inputMode==="touch");let i=document.getElementById("input-label");if(i&&(i.textContent=it.inputMode==="gesture"?"\u624B\u52BF":"\u89E6\u6478"),n){let s=document.getElementById("focus-count");s&&(s.textContent=e?`${e.index+1} / ${e.total}`:"\u2014")}else{let s=document.querySelector('[data-act="disperse"]');s&&(s.textContent=it.mode==="SCATTER"?"\u{1F384} \u805A\u6210\u6811":"\u2728 \u6563\u5F00")}}function T1(){requestAnimationFrame(T1);let e=Math.min(l1.getDelta(),.1);EE(e);for(let t of es)t.update(e,it.mode,it.focusTarget);if(Rs&&(Rs.position.copy(Ce.position),Rs.quaternion.copy(Ce.quaternion),Rs.projectionMatrix.copy(Ce.projectionMatrix),Rs.projectionMatrixInverse.copy(Ce.projectionMatrixInverse)),Aa.render(),Cs){let t=me.autoClearColor;me.autoClear=!1,me.autoClearColor=!1,me.clearDepth(),me.render(xi,Rs),me.autoClearColor=t,me.autoClear=!0}}function EE(e){let t=yo.cfg.smooth,n=it.inputMode==="gesture"&&performance.now()-it.touchActiveAt>1500;if(it.mode==="SCATTER"&&it.hand.detected&&n){let i=K_(it.rotation,{x:yo.x,y:yo.y},t,e);it.rotation.y=i.y,it.rotation.x=i.x}else it.mode==="TREE"?(it.rotation.y+=.3*e,it.rotation.x+=(0-it.rotation.x)*(1-Math.exp(-2*e))):(it.rotation.y+=.1*e,it.rotation.x+=(0-it.rotation.x)*(1-Math.exp(-2*e)));jn.rotation.y=it.rotation.y,jn.rotation.x=it.rotation.x,Tf&&(jn.getWorldQuaternion(j_),Tf.quaternion.copy(j_.invert()))}G3();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
