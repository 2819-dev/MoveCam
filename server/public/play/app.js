var zc="169";var Xd=0,Nh=1,Kd=2;var Ou=1,Hc=2,Qn=3,Ti=0,Ne=1,De=2,Si=0,wi=1,Ps=2,kh=3,Fh=4,qd=5,Wi=100,$d=101,Yd=102,Zd=103,Jd=104,jd=200,Qd=201,tf=202,ef=203,ml=204,gl=205,nf=206,sf=207,rf=208,of=209,af=210,lf=211,cf=212,hf=213,uf=214,yl=0,vl=1,xl=2,Is=3,_l=4,bl=5,Ml=6,Sl=7,Bu=0,df=1,ff=2,Ei=0,pf=1,mf=2,gf=3,Gc=4,yf=5,vf=6,xf=7;var zu=300,Ls=301,Us=302,wl=303,El=304,Jo=306,qi=1e3,ei=1001,Tl=1002,wn=1003,_f=1004;var Vr=1005;var Un=1006,Da=1007;var Ki=1008;var ri=1009,Hu=1010,Gu=1011,Sr=1012,Vc=1013,$i=1014,ni=1015,Pr=1016,Wc=1017,Xc=1018,Ds=1020,Vu=35902,Wu=1021,Xu=1022,Nn=1023,Ku=1024,qu=1025,As=1026,Ns=1027,$u=1028,Kc=1029,Yu=1030,qc=1031;var $c=1033,vo=33776,xo=33777,_o=33778,bo=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Ll=37492,Ul=37496,Dl=37808,Nl=37809,kl=37810,Fl=37811,Ol=37812,Bl=37813,zl=37814,Hl=37815,Gl=37816,Vl=37817,Wl=37818,Xl=37819,Kl=37820,ql=37821,Mo=36492,$l=36494,Yl=36495,Zu=36283,Zl=36284,Jl=36285,jl=36286;var wo=2300,Ql=2301,Na=2302,Oh=2400,Bh=2401,zh=2402;var bf=3200,Mf=3201;var Ju=0,Sf=1,bi="",$e="srgb",Ci="srgb-linear",Yc="display-p3",jo="display-p3-linear",Eo="linear",ve="srgb",To="rec709",Ao="p3";var ls=7680;var Hh=519,wf=512,Ef=513,Tf=514,ju=515,Af=516,Rf=517,Cf=518,Pf=519,tc=35044;var Gh="300 es",ii=2e3,Ro=2001,Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,vr=Math.PI/180,ks=180/Math.PI;function si(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function Zc(i,t){return(i%t+t)%t}function If(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Lf(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function Uf(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function Df(i,t=1){return t-Math.abs(Zc(i,t*2)-t)}function Nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ff(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Of(i,t){return i+Math.random()*(t-i)}function Bf(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&(Vh=i);let t=Vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hf(i){return i*vr}function Gf(i){return i*ks}function Vf(i){return(i&i-1)===0&&i!==0}function Wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qu={DEG2RAD:vr,RAD2DEG:ks,generateUUID:si,clamp:He,euclideanModulo:Zc,mapLinear:If,inverseLerp:Lf,lerp:xr,damp:Uf,pingpong:Df,smoothstep:Nf,smootherstep:kf,randInt:Ff,randFloat:Of,randFloatSpread:Bf,seededRandom:zf,degToRad:Hf,radToDeg:Gf,isPowerOfTwo:Vf,ceilPowerOfTwo:Wf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:Kf,normalize:ce,denormalize:Dn},at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],b=s[1],_=s[4],x=s[7],A=s[2],T=s[5],E=s[8];return r[0]=o*y+a*b+l*A,r[3]=o*m+a*_+l*T,r[6]=o*p+a*x+l*E,r[1]=c*y+h*b+u*A,r[4]=c*m+h*_+u*T,r[7]=c*p+h*x+u*E,r[2]=d*y+f*b+g*A,r[5]=d*m+f*_+g*T,r[8]=d*p+f*x+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new Ht;function td(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qf(){let i=Co("canvas");return i.style.display="block",i}var Wh={};function So(i){i in Wh||(Wh[i]=!0,console.warn(i))}function $f(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xh=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kh=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lr={[Ci]:{transfer:Eo,primaries:To,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[$e]:{transfer:ve,primaries:To,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[jo]:{transfer:Eo,primaries:Ao,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Kh),fromReference:i=>i.applyMatrix3(Xh)},[Yc]:{transfer:ve,primaries:Ao,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kh),fromReference:i=>i.applyMatrix3(Xh).convertLinearToSRGB()}},Jf=new Set([Ci,jo]),oe={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=lr[t].toReference,s=lr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return lr[i].primaries},getTransfer:function(i){return i===bi?Eo:lr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(lr[t].luminanceCoefficients)}};function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cs,ec=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=Co("canvas")),cs.width=t.width,cs.height=t.height;let n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rs(e[n]/255)*255):e[n]=Rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jf=0,Po=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qf=0,mn=class i extends Ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=Un,o=Ki,a=Nn,l=ri,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=si(),this.name="",this.source=new Po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=zu;mn.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,x=(f+1)/2,A=(p+1)/2,T=(h+d)/4,E=(u+y)/4,P=(g+m)/4;return _>x&&_>A?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=E/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Po(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Io=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ri=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*y,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let A=Math.sqrt(_),T=Math.atan2(A,p*b);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}let x=a*b;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+y*x,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new C,qh=new Ri,Yi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Xr.subVectors(this.max,cr),hs.subVectors(t.a,cr),us.subVectors(t.b,cr),ds.subVectors(t.c,cr),mi.subVectors(us,hs),gi.subVectors(ds,us),Fi.subVectors(hs,ds);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Fi.z,Fi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Fi.z,0,-Fi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Fi.y,Fi.x,0];return!za(e,hs,us,ds,Xr)||(e=[1,0,0,0,1,0,0,0,1],!za(e,hs,us,ds,Xr))?!1:(Kr.crossVectors(mi,gi),e=[Kr.x,Kr.y,Kr.z],za(e,hs,us,ds,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new C,new C,new C,new C,new C,new C,new C,new C],Pn=new C,Wr=new Yi,hs=new C,us=new C,ds=new C,mi=new C,gi=new C,Fi=new C,cr=new C,Xr=new C,Kr=new C,Oi=new C;function za(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);let a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tp=new Yi,hr=new C,Ha=new C,Fs=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);let e=hr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Ha)),this.expandByPoint(hr.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new C,Ga=new C,qr=new C,yi=new C,Va=new C,$r=new C,Wa=new C,Lo=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ga.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Ga);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qr),a=yi.dot(this.direction),l=-yi.dot(qr),c=yi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ga).addScaledVector(qr,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){Va.subVectors(e,t),$r.subVectors(n,t),Wa.crossVectors(Va,$r);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let l=a*this.direction.dot($r.crossVectors(yi,$r));if(l<0)return null;let c=a*this.direction.dot(Va.cross(yi));if(c<0||l+c>o)return null;let h=-a*yi.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),vi.crossVectors(n,fn),vi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),vi.crossVectors(n,fn)),vi.normalize(),Yr.crossVectors(fn,vi),s[0]=vi.x,s[4]=Yr.x,s[8]=fn.x,s[1]=vi.y,s[5]=Yr.y,s[9]=fn.y,s[2]=vi.z,s[6]=Yr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],b=n[3],_=n[7],x=n[11],A=n[15],T=s[0],E=s[4],P=s[8],B=s[12],v=s[1],w=s[5],k=s[9],F=s[13],V=s[2],Z=s[6],G=s[10],tt=s[14],X=s[3],pt=s[7],mt=s[11],St=s[15];return r[0]=o*T+a*v+l*V+c*X,r[4]=o*E+a*w+l*Z+c*pt,r[8]=o*P+a*k+l*G+c*mt,r[12]=o*B+a*F+l*tt+c*St,r[1]=h*T+u*v+d*V+f*X,r[5]=h*E+u*w+d*Z+f*pt,r[9]=h*P+u*k+d*G+f*mt,r[13]=h*B+u*F+d*tt+f*St,r[2]=g*T+y*v+m*V+p*X,r[6]=g*E+y*w+m*Z+p*pt,r[10]=g*P+y*k+m*G+p*mt,r[14]=g*B+y*F+m*tt+p*St,r[3]=b*T+_*v+x*V+A*X,r[7]=b*E+_*w+x*Z+A*pt,r[11]=b*P+_*k+x*G+A*mt,r[15]=b*B+_*F+x*tt+A*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+y*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],b=u*m*c-y*d*c+y*l*f-a*m*f-u*l*p+a*d*p,_=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*y*c-g*u*c+g*a*f-o*y*f-h*a*p+o*u*p,A=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,T=e*b+n*_+s*x+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=b*E,t[1]=(y*d*r-u*m*r-y*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*p+n*l*p)*E,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*E,t[4]=_*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*E,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*E,t[8]=x*E,t[9]=(g*u*r-h*y*r-g*n*f+e*y*f+h*n*p-e*u*p)*E,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*E,t[12]=A*E,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*E,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,b=l*c,_=l*h,x=l*u,A=n.x,T=n.y,E=n.z;return s[0]=(1-(y+p))*A,s[1]=(f+x)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+_)*E,s[9]=(m-b)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=fs.set(s[0],s[1],s[2]).length(),o=fs.set(s[4],s[5],s[6]).length(),a=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);let c=1/r,h=1/o,u=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ii){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ro)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,g,y;if(a===ii)g=(o+r)*u,y=-2*u;else if(a===Ro)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fs=new C,In=new xe,ep=new C(0,0,0),np=new C(1,1,1),vi=new C,Yr=new C,fn=new C,$h=new xe,Yh=new Ri,Gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $h.makeRotationFromQuaternion(t),this.setFromRotationMatrix($h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var Uo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ip=0,Zh=new C,ps=new Ri,Zn=new xe,Zr=new C,ur=new C,sp=new C,rp=new Ri,Jh=new C(1,0,0),jh=new C(0,1,0),Qh=new C(0,0,1),tu={type:"added"},op={type:"removed"},ms={type:"childadded",child:null},Xa={type:"childremoved",child:null},ke=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Gn,n=new Ri,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ht}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zr.copy(t):Zr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(ur,Zr,this.up):Zn.lookAt(Zr,ur,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Zn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(op),Xa.child=t,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new C(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new C,Jn=new C,Ka=new C,jn=new C,gs=new C,ys=new C,eu=new C,qa=new C,$a=new C,Ya=new C,Za=new ue,Ja=new ue,ja=new ue,Mi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),Jn.subVectors(n,e),Ka.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(Jn),l=Ln.dot(Ka),c=Jn.dot(Jn),h=Jn.dot(Ka),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Za.setScalar(0),Ja.setScalar(0),ja.setScalar(0),Za.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,n),ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(ja,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),Jn.subVectors(t,e),Ln.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Ln.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,n),ys.subVectors(r,n),qa.subVectors(t,n);let l=gs.dot(qa),c=ys.dot(qa);if(l<=0&&c<=0)return e.copy(n);$a.subVectors(t,s);let h=gs.dot($a),u=ys.dot($a);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Ya.subVectors(t,r);let f=gs.dot(Ya),g=ys.dot(Ya);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ys,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return eu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(eu,a);let p=1/(m+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(gs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Zc(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qa(o,r,t+1/3),this.g=Qa(o,r,t),this.b=Qa(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return oe.fromWorkingColorSpace(qe.copy(this),t),Math.round(He(qe.r*255,0,255))*65536+Math.round(He(qe.g*255,0,255))*256+Math.round(He(qe.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=$e){oe.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Jr);let n=xr(xi.h,Jr.h,e),s=xr(xi.s,Jr.s,e),r=xr(xi.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new ft;ft.NAMES=ed;var ap=0,ai=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=si(),this.name="",this.type="Material",this.blending=wi,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xt=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new C,jr=new at,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}};var Do=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var No=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},lp=0,Sn=new xe,tl=new ke,vs=new C,pn=new Yi,dr=new Yi,ze=new C,Ce=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(td(t)?No:Do)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(pn.min,dr.min),pn.expandByPoint(ze),ze.addVectors(pn.max,dr.max),pn.expandByPoint(ze)):(pn.expandByPoint(dr.min),pn.expandByPoint(dr.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(t,c),ze.add(vs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,d=new at,f=new at,g=new at,y=new C,m=new C;function p(P,B,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[P].add(y),a[B].add(y),a[v].add(y),l[P].add(m),l[B].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,B=b.length;P<B;++P){let v=b[P],w=v.start,k=v.count;for(let F=w,V=w+k;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new C,x=new C,A=new C,T=new C;function E(P){A.fromBufferAttribute(s,P),T.copy(A);let B=a[P];_.copy(B),_.sub(A.multiplyScalar(A.dot(B))).normalize(),x.crossVectors(T,B);let w=x.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,w)}for(let P=0,B=b.length;P<B;++P){let v=b[P],w=v.start,k=v.count;for(let F=w,V=w+k;F<V;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nu=new xe,Bi=new Lo,Qr=new Fs,iu=new C,to=new C,eo=new C,no=new C,el=new C,io=new C,su=new C,so=new C,kt=class extends ke{constructor(t=new Ce,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(el.fromBufferAttribute(u,t),o?io.addScaledVector(el,h):io.addScaledVector(el.sub(e),h))}e.add(io)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Qr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Qr,iu)===null||Bi.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(nu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,A=_;x<A;x+=3){let T=a.getX(x),E=a.getX(x+1),P=a.getX(x+2);s=ro(this,p,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);s=ro(this,o,t,n,c,h,u,b,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,A=_;x<A;x+=3){let T=x,E=x+1,P=x+2;s=ro(this,p,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=m,_=m+1,x=m+2;s=ro(this,o,t,n,c,h,u,b,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function cp(i,t,e,n,s,r,o,a){let l;if(t.side===Ne?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(so);return c<e.near||c>e.far?null:{distance:c,point:so.clone(),object:i}}function ro(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,to),i.getVertexPosition(l,eo),i.getVertexPosition(c,no);let h=cp(i,t,e,n,to,eo,no,su);if(h){let u=new C;Mi.getBarycoord(su,to,eo,no,u),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,l,c,u,new at)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,u,new at)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};Mi.getNormal(to,eo,no,d.normal),h.face=d,h.barycoord=u}return h}var Vt=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(y,m,p,b,_,x,A,T,E,P,B){let v=x/E,w=A/P,k=x/2,F=A/2,V=T/2,Z=E+1,G=P+1,tt=0,X=0,pt=new C;for(let mt=0;mt<G;mt++){let St=mt*w-F;for(let ne=0;ne<Z;ne++){let ae=ne*v-k;pt[y]=ae*b,pt[m]=St*_,pt[p]=V,c.push(pt.x,pt.y,pt.z),pt[y]=0,pt[m]=0,pt[p]=T>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(ne/E),u.push(1-mt/P),tt+=1}}for(let mt=0;mt<P;mt++)for(let St=0;St<E;St++){let ne=d+St+Z*mt,ae=d+St+Z*(mt+1),q=d+(St+1)+Z*(mt+1),Q=d+(St+1)+Z*mt;l.push(ne,ae,Q),l.push(ae,q,Q),X+=6}a.addGroup(f,X,B),f+=X,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function hp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var up={clone:Os,merge:tn},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ko=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_i=new C,ru=new at,ou=new at,Xe=class extends ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,ru,ou),e.subVectors(ou,ru)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=-90,_s=1,sc=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(xs,_s,t,e);s.layers=this.layers,this.add(s);let r=new Xe(xs,_s,t,e);r.layers=this.layers,this.add(r);let o=new Xe(xs,_s,t,e);o.layers=this.layers,this.add(o);let a=new Xe(xs,_s,t,e);a.layers=this.layers,this.add(a);let l=new Xe(xs,_s,t,e);l.layers=this.layers,this.add(l);let c=new Xe(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fo=class extends mn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rc=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Si});r.uniforms.tEquirect.value=e;let o=new kt(s,r),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Un),new sc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},nl=new C,pp=new C,mp=new Ht,ti=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nl.subVectors(n,e).cross(pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mp.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Fs,oo=new C,wr=class{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],b=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+b).normalize(),n[3].setComponents(l-o,d-h,m-g,x-b).normalize(),n[4].setComponents(l-a,d-u,m-y,x-_).normalize(),e===ii)n[5].setComponents(l+a,d+u,m+y,x+_).normalize();else if(e===Ro)n[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function id(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gt=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let b=p*d-o;for(let _=0;_<c;_++){let x=_*u-r;g.push(x,-b,0),y.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let _=b+c*p,x=b+c*(p+1),A=b+1+c*(p+1),T=b+1+c*p;f.push(_,x,T),f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`
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
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
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
#endif`,mm=`struct PhysicalMaterial {
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
}`,gm=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bm=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,L0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,D0=`#define MATCAP
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
}`,N0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,F0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,B0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,V0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:yp,alphahash_pars_fragment:vp,alphamap_fragment:xp,alphamap_pars_fragment:_p,alphatest_fragment:bp,alphatest_pars_fragment:Mp,aomap_fragment:Sp,aomap_pars_fragment:wp,batching_pars_vertex:Ep,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Pp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Np,color_fragment:kp,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:Bp,common:zp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:Kp,colorspace_fragment:qp,colorspace_pars_fragment:$p,envmap_fragment:Yp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Jp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:cm,envmap_vertex:Qp,fog_vertex:tm,fog_pars_vertex:em,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:om,lights_lambert_pars_fragment:am,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:ym,lights_fragment_end:vm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Mm,map_fragment:Sm,map_pars_fragment:wm,map_particle_fragment:Em,map_particle_pars_fragment:Tm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Cm,morphcolor_vertex:Pm,morphnormal_vertex:Im,morphtarget_pars_vertex:Lm,morphtarget_vertex:Um,normal_fragment_begin:Dm,normal_fragment_maps:Nm,normal_pars_fragment:km,normal_pars_vertex:Fm,normal_vertex:Om,normalmap_pars_fragment:Bm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Vm,opaque_fragment:Wm,packing:Xm,premultiplied_alpha_fragment:Km,project_vertex:qm,dithering_fragment:$m,dithering_pars_fragment:Ym,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Qm,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:d0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:y0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:_0,cube_frag:b0,depth_vert:M0,depth_frag:S0,distanceRGBA_vert:w0,distanceRGBA_frag:E0,equirect_vert:T0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:P0,meshbasic_frag:I0,meshlambert_vert:L0,meshlambert_frag:U0,meshmatcap_vert:D0,meshmatcap_frag:N0,meshnormal_vert:k0,meshnormal_frag:F0,meshphong_vert:O0,meshphong_frag:B0,meshphysical_vert:z0,meshphysical_frag:H0,meshtoon_vert:G0,meshtoon_frag:V0,points_vert:W0,points_frag:X0,shadow_vert:K0,shadow_frag:q0,sprite_vert:$0,sprite_frag:Y0},ot={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:tn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new ft(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:tn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:tn([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:tn([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new ft(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:tn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:tn([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:tn([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:tn([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:tn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:tn([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:tn([ot.common,ot.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:tn([ot.lights,ot.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var ao={r:0,b:0,g:0},Hi=new Gn,Z0=new xe;function J0(i,t,e,n,s,r,o){let a=new ft(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function y(b){let _=!1,x=g(b);x===null?p(a,l):x&&x.isColor&&(p(x,1),_=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===Jo)?(h===void 0&&(h=new kt(new Vt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Os(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(_.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(Hi)),h.material.toneMapped=oe.getTransfer(x.colorSpace)!==ve,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new Gt(2,2),new En({name:"BackgroundMaterial",uniforms:Os(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=oe.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,_){b.getRGB(ao,nd(i)),n.buffers.color.setClear(ao.r,ao.g,ao.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:y,addToRenderList:m}}function j0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,w,k,F,V){let Z=!1,G=u(F,k,w);r!==G&&(r=G,c(r.object)),Z=f(v,F,k,V),Z&&g(v,F,k,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(v,w,k,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,w,k){let F=k.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let Z=V[w.id];Z===void 0&&(Z={},V[w.id]=Z);let G=Z[F];return G===void 0&&(G=d(l()),Z[F]=G),G}function d(v){let w=[],k=[],F=[];for(let V=0;V<e;V++)w[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,w,k,F){let V=r.attributes,Z=w.attributes,G=0,tt=k.getAttributes();for(let X in tt)if(tt[X].location>=0){let mt=V[X],St=Z[X];if(St===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),mt===void 0||mt.attribute!==St||St&&mt.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(v,w,k,F){let V={},Z=w.attributes,G=0,tt=k.getAttributes();for(let X in tt)if(tt[X].location>=0){let mt=Z[X];mt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor));let St={};St.attribute=mt,mt&&mt.data&&(St.data=mt.data),V[X]=St,G++}r.attributes=V,r.attributesNum=G,r.index=F}function y(){let v=r.newAttributes;for(let w=0,k=v.length;w<k;w++)v[w]=0}function m(v){p(v,0)}function p(v,w){let k=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;k[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),V[v]!==w&&(i.vertexAttribDivisor(v,w),V[v]=w)}function b(){let v=r.newAttributes,w=r.enabledAttributes;for(let k=0,F=w.length;k<F;k++)w[k]!==v[k]&&(i.disableVertexAttribArray(k),w[k]=0)}function _(v,w,k,F,V,Z,G){G===!0?i.vertexAttribIPointer(v,w,k,V,Z):i.vertexAttribPointer(v,w,k,F,V,Z)}function x(v,w,k,F){y();let V=F.attributes,Z=k.getAttributes(),G=w.defaultAttributeValues;for(let tt in Z){let X=Z[tt];if(X.location>=0){let pt=V[tt];if(pt===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){let mt=pt.normalized,St=pt.itemSize,ne=t.get(pt);if(ne===void 0)continue;let ae=ne.buffer,q=ne.type,Q=ne.bytesPerElement,bt=q===i.INT||q===i.UNSIGNED_INT||pt.gpuType===Vc;if(pt.isInterleavedBufferAttribute){let gt=pt.data,Ft=gt.stride,Pt=pt.offset;if(gt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<X.locationSize;Yt++)p(X.location+Yt,gt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Yt=0;Yt<X.locationSize;Yt++)m(X.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Yt=0;Yt<X.locationSize;Yt++)_(X.location+Yt,St/X.locationSize,q,mt,Ft*Q,(Pt+St/X.locationSize*Yt)*Q,bt)}else{if(pt.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)p(X.location+gt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let gt=0;gt<X.locationSize;gt++)m(X.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let gt=0;gt<X.locationSize;gt++)_(X.location+gt,St/X.locationSize,q,mt,St*Q,St/X.locationSize*gt*Q,bt)}}else if(G!==void 0){let mt=G[tt];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(X.location,mt);break;case 3:i.vertexAttrib3fv(X.location,mt);break;case 4:i.vertexAttrib4fv(X.location,mt);break;default:i.vertexAttrib1fv(X.location,mt)}}}}b()}function A(){P();for(let v in n){let w=n[v];for(let k in w){let F=w[k];for(let V in F)h(F[V].object),delete F[V];delete w[k]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let k in w){let F=w[k];for(let V in F)h(F[V].object),delete F[V];delete w[k]}delete n[v.id]}function E(v){for(let w in n){let k=n[w];if(k[v.id]===void 0)continue;let F=k[v.id];for(let V in F)h(F[V].object),delete F[V];delete k[v.id]}}function P(){B(),o=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Q0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<d.length;y++)e.update(g,n,d[y])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let P=E===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ri&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ni&&!P)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:A,maxSamples:T}}function eg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ti,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,_=b*4,x=p.clippingState||null;l.value=x,x=h(g,d,_,f);for(let A=0;A!==_;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==y;++_,x+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function ng(i){let t=new WeakMap;function e(o,a){return a===wl?o.mapping=Ls:a===El&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wl||a===El)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Oo=class extends ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ts=4,au=[.125,.215,.35,.446,.526,.582],Xi=20,il=new Oo,lu=new ft,sl=null,rl=0,ol=0,al=!1,Vi=(1+Math.sqrt(5))/2,bs=1/Vi,cu=[new C(-Vi,bs,0),new C(Vi,bs,0),new C(-bs,0,Vi),new C(bs,0,Vi),new C(0,Vi,-bs),new C(0,Vi,bs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Pr,format:Nn,colorSpace:Ci,depthBuffer:!1},s=hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(r)),this._blurMaterial=sg(r,t,e)}return s}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,n,s){let a=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lu),h.toneMapping=Ei,h.autoClear=!1;let f=new Xt({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new kt(new Vt,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(lu),y=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;lo(s,b*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ls||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;lo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,il)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cu[(s-r-1)%cu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let p=[],b=0;for(let E=0;E<Xi;++E){let P=E/y,B=Math.exp(-P*P/2);p.push(B),E===0?b+=B:E<m&&(b+=2*B)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let x=this._sizeLods[s],A=3*x*(s>_-Ts?s-_+Ts:0),T=4*(this._cubeSize-x);lo(e,A,T,3*x,2*x),l.setRenderTarget(e),l.render(u,il)}};function ig(i){let t=[],e=[],n=[],s=i,r=i-Ts+1+au.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ts?l=au[o-i+Ts-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,b=new Float32Array(y*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,P=T>2?0:-1,B=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];b.set(B,y*g*T),_.set(d,m*g*T);let v=[T,T,T,T,T,T];x.set(v,p*g*T)}let A=new Ce;A.setAttribute("position",new Re(b,y)),A.setAttribute("uv",new Re(_,m)),A.setAttribute("faceIndex",new Re(x,p)),t.push(A),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hu(i,t,e){let n=new oi(i,t,e);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sg(i,t,e){let n=new Float32Array(Xi),s=new C(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function uu(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function du(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function rg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wl||l===El,h=l===Ls||l===Us;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Bs(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Bs(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function og(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&So("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ag(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let b=f.array;y=f.version;for(let _=0,x=b.length;_<x;_+=3){let A=b[_+0],T=b[_+1],E=b[_+2];d.push(A,T,T,E,E,A)}}else if(g!==void 0){let b=g.array;y=g.version;for(let _=0,x=b.length/3-1;_<x;_+=3){let A=_+0,T=_+1,E=_+2;d.push(A,T,T,E,E,A)}}else return;let m=new(td(d)?No:Do)(d,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<y.length;b++)e.update(p,n,y[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let B=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let x=a.attributes.position.count*_,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*A*4*u),E=new Io(T,x,A,u);E.type=ni,E.needsUpdate=!0;let P=_*4;for(let v=0;v<u;v++){let w=m[v],k=p[v],F=b[v],V=x*A*4*v;for(let Z=0;Z<w.count;Z++){let G=Z*P;f===!0&&(s.fromBufferAttribute(w,Z),T[V+G+0]=s.x,T[V+G+1]=s.y,T[V+G+2]=s.z,T[V+G+3]=0),g===!0&&(s.fromBufferAttribute(k,Z),T[V+G+4]=s.x,T[V+G+5]=s.y,T[V+G+6]=s.z,T[V+G+7]=0),y===!0&&(s.fromBufferAttribute(F,Z),T[V+G+8]=s.x,T[V+G+9]=s.y,T[V+G+10]=s.z,T[V+G+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new at(x,A)},n.set(a,d),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ug(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Bo=class extends mn{constructor(t,e,n,s,r,o,a,l,c,h=As){if(h!==As&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=$i),n===void 0&&h===Ns&&(n=Ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sd=new mn,fu=new Bo(1,1),rd=new Io,od=new ic,ad=new Fo,pu=[],mu=[],gu=new Float32Array(16),yu=new Float32Array(9),vu=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qo(i,t){let e=mu[t];e===void 0&&(e=new Int32Array(t),mu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),Oe(e,n)}}function yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;yu.set(n),i.uniformMatrix3fv(this.addr,!1,yu),Oe(e,n)}}function vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),Oe(e,n)}}function xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=ju,r=fu):r=sd,e.setTexture2D(t||r,s)}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||od,s)}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ad,s)}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rd,s)}function Ig(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return yg;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return _g;case 35668:case 35672:return bg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return wg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Lg(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function Dg(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Ng(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function kg(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fg(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Og(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bg(i,t){i.uniform1iv(this.addr,t)}function zg(i,t){i.uniform2iv(this.addr,t)}function Hg(i,t){i.uniform3iv(this.addr,t)}function Gg(i,t){i.uniform4iv(this.addr,t)}function Vg(i,t){i.uniform1uiv(this.addr,t)}function Wg(i,t){i.uniform2uiv(this.addr,t)}function Xg(i,t){i.uniform3uiv(this.addr,t)}function Kg(i,t){i.uniform4uiv(this.addr,t)}function qg(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sd,r[o])}function $g(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||od,r[o])}function Yg(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ad,r[o])}function Zg(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rd,r[o])}function Jg(i){switch(i){case 5126:return Lg;case 35664:return Ug;case 35665:return Dg;case 35666:return Ng;case 35674:return kg;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}var oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}},ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}},lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ll=/(\w+)(\])?(\[|\.)?/g;function xu(i,t){i.seq.push(t),i.map[t.id]=t}function jg(i,t,e){let n=i.name,s=n.length;for(ll.lastIndex=0;;){let r=ll.exec(n),o=ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xu(e,c===void 0?new oc(a,i,t):new ac(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new lc(a),xu(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function _u(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qg=37297,ty=0;function ey(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ny(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===Ao&&e===To?n="LinearDisplayP3ToLinearSRGB":t===To&&e===Ao&&(n="LinearSRGBToLinearDisplayP3"),i){case Ci:case jo:return[n,"LinearTransferOETF"];case $e:case Yc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ey(i.getShaderSource(t),o)}else return s}function iy(i,t){let e=ny(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sy(i,t){let e;switch(t){case pf:e="Linear";break;case mf:e="Reinhard";break;case gf:e="Cineon";break;case Gc:e="ACESFilmic";break;case vf:e="AgX";break;case xf:e="Neutral";break;case yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var co=new C;function ry(){oe.getLuminanceCoefficients(co);let i=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function ay(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ly(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yr(i){return i!==""}function Mu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Su(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace(cy,uy)}var hy=new Map;function uy(i,t){let e=zt[t];if(e===void 0){let n=hy.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cc(e)}var dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(dy,fy)}function fy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function py(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function my(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Us:t="ENVMAP_TYPE_CUBE";break;case Jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function yy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bu:t="ENVMAP_BLENDING_MULTIPLY";break;case df:t="ENVMAP_BLENDING_MIX";break;case ff:t="ENVMAP_BLENDING_ADD";break}return t}function vy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=py(e),c=my(e),h=gy(e),u=yy(e),d=vy(e),f=oy(e),g=ay(r),y=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?zt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?sy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,iy("linearToOutputTexel",e.outputColorSpace),ry(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),o=cc(o),o=Mu(o,e),o=Su(o,e),a=cc(a),a=Mu(a,e),a=Su(a,e),o=wu(o),a=wu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+o,x=b+p+a,A=_u(s,s.VERTEX_SHADER,_),T=_u(s,s.FRAGMENT_SHADER,x);s.attachShader(y,A),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(w){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(A).trim(),V=s.getShaderInfoLog(T).trim(),Z=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,T);else{let tt=bu(s,A,"vertex"),X=bu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+tt+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(G=!1);G&&(w.diagnostics={runnable:Z,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(A),s.deleteShader(T),P=new Cs(s,y),B=ly(s,y)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let B;this.getAttributes=function(){return B===void 0&&E(this),B};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(y,Qg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ty++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}var _y=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uc(t),e.set(t,n)),n}},uc=class{constructor(t){this.id=_y++,this.code=t,this.usedTimes=0}};function by(i,t,e,n,s,r,o){let a=new Uo,l=new hc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,w,k,F,V){let Z=F.fog,G=V.geometry,tt=v.isMeshStandardMaterial?F.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||tt),pt=X&&X.mapping===Jo?X.image.height:null,mt=y[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let St=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=St!==void 0?St.length:0,ae=0;G.morphAttributes.position!==void 0&&(ae=1),G.morphAttributes.normal!==void 0&&(ae=2),G.morphAttributes.color!==void 0&&(ae=3);let q,Q,bt,gt;if(mt){let on=Hn[mt];q=on.vertexShader,Q=on.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),bt=l.getVertexShaderID(v),gt=l.getFragmentShaderID(v);let Ft=i.getRenderTarget(),Pt=V.isInstancedMesh===!0,Yt=V.isBatchedMesh===!0,he=!!v.map,Zt=!!v.matcap,I=!!X,hn=!!v.aoMap,Kt=!!v.lightMap,Qt=!!v.bumpMap,Lt=!!v.normalMap,ge=!!v.displacementMap,Nt=!!v.emissiveMap,R=!!v.metalnessMap,M=!!v.roughnessMap,O=v.anisotropy>0,Y=v.clearcoat>0,j=v.dispersion>0,$=v.iridescence>0,wt=v.sheen>0,lt=v.transmission>0,yt=O&&!!v.anisotropyMap,te=Y&&!!v.clearcoatMap,et=Y&&!!v.clearcoatNormalMap,vt=Y&&!!v.clearcoatRoughnessMap,Ut=$&&!!v.iridescenceMap,Dt=$&&!!v.iridescenceThicknessMap,xt=wt&&!!v.sheenColorMap,qt=wt&&!!v.sheenRoughnessMap,Ot=!!v.specularMap,fe=!!v.specularColorMap,U=!!v.specularIntensityMap,ut=lt&&!!v.transmissionMap,W=lt&&!!v.thicknessMap,J=!!v.gradientMap,ct=!!v.alphaMap,dt=v.alphaTest>0,Jt=!!v.alphaHash,Ie=!!v.extensions,rn=Ei;v.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(rn=i.toneMapping);let ie={shaderID:mt,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:bt,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Yt,batchingColor:Yt&&V._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&V.instanceColor!==null,instancingMorph:Pt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:Ci,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:Zt,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:pt,aoMap:hn,lightMap:Kt,bumpMap:Qt,normalMap:Lt,displacementMap:f&&ge,emissiveMap:Nt,normalMapObjectSpace:Lt&&v.normalMapType===Sf,normalMapTangentSpace:Lt&&v.normalMapType===Ju,metalnessMap:R,roughnessMap:M,anisotropy:O,anisotropyMap:yt,clearcoat:Y,clearcoatMap:te,clearcoatNormalMap:et,clearcoatRoughnessMap:vt,dispersion:j,iridescence:$,iridescenceMap:Ut,iridescenceThicknessMap:Dt,sheen:wt,sheenColorMap:xt,sheenRoughnessMap:qt,specularMap:Ot,specularColorMap:fe,specularIntensityMap:U,transmission:lt,transmissionMap:ut,thicknessMap:W,gradientMap:J,opaque:v.transparent===!1&&v.blending===wi&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:dt,alphaHash:Jt,combine:v.combine,mapUv:he&&m(v.map.channel),aoMapUv:hn&&m(v.aoMap.channel),lightMapUv:Kt&&m(v.lightMap.channel),bumpMapUv:Qt&&m(v.bumpMap.channel),normalMapUv:Lt&&m(v.normalMap.channel),displacementMapUv:ge&&m(v.displacementMap.channel),emissiveMapUv:Nt&&m(v.emissiveMap.channel),metalnessMapUv:R&&m(v.metalnessMap.channel),roughnessMapUv:M&&m(v.roughnessMap.channel),anisotropyMapUv:yt&&m(v.anisotropyMap.channel),clearcoatMapUv:te&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:qt&&m(v.sheenRoughnessMap.channel),specularMapUv:Ot&&m(v.specularMap.channel),specularColorMapUv:fe&&m(v.specularColorMap.channel),specularIntensityMapUv:U&&m(v.specularIntensityMap.channel),transmissionMapUv:ut&&m(v.transmissionMap.channel),thicknessMapUv:W&&m(v.thicknessMap.channel),alphaMapUv:ct&&m(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Lt||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(he||ct),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:rn,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===De,flipSided:v.side===Ne,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function b(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)w.push(k),w.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(_(w,v),x(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),v.push(a.mask)}function A(v){let w=y[v.type],k;if(w){let F=Hn[w];k=up.clone(F.uniforms)}else k=v.uniforms;return k}function T(v,w){let k;for(let F=0,V=h.length;F<V;F++){let Z=h[F];if(Z.cacheKey===w){k=Z,++k.usedTimes;break}}return k===void 0&&(k=new xy(i,w,v,r),h.push(k)),k}function E(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:A,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:B}}function My(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Sy),n.length>1&&n.sort(d||Tu),s.length>1&&s.sort(d||Tu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Au,i.set(n,[o])):s>=r.length?(o=new Au,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ft};break;case"SpotLight":e={position:new C,direction:new C,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Ty(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ay=0;function Ry(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cy(i){let t=new Ey,e=Ty(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new xe,o=new xe;function a(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,b=0,_=0,x=0,A=0,T=0,E=0;c.sort(Ry);for(let B=0,v=c.length;B<v;B++){let w=c[B],k=w.color,F=w.intensity,V=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],F);E++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let tt=w.shadow,X=e.get(w);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=w.shadow.matrix,b++}n.directional[f]=G,f++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(k).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[y]=G;let tt=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,tt.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[y]=tt.matrix,w.castShadow){let X=e.get(w);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=Z,x++}y++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(k).multiplyScalar(F),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=G,m++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let tt=w.shadow,X=e.get(w);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=G,g++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(F),G.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==A||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=f,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=A,P.numLightProbes=E,n.version=Ay++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let _=c[p];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Ru(i){let t=new Cy(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Py(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ru(i),t.set(s,[a])):r>=o.length?(a=new Ru(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var dc=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
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
}`;function Uy(i,t,e){let n=new wr,s=new at,r=new at,o=new ue,a=new dc({depthPacking:Mf}),l=new fc,c={},h=e.maxTextureSize,u={[Ti]:Ne,[Ne]:Ti,[De]:De},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Iy,fragmentShader:Ly}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let p=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let B=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Si),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=p!==Qn&&this.type===Qn,V=p===Qn&&this.type!==Qn;for(let Z=0,G=T.length;Z<G;Z++){let tt=T[Z],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let pt=X.getFrameExtents();if(s.multiply(pt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,X.mapSize.y=r.y)),X.map===null||F===!0||V===!0){let St=this.type!==Qn?{minFilter:wn,magFilter:wn}:{};X.map!==null&&X.map.dispose(),X.map=new oi(s.x,s.y,St),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let mt=X.getViewportCount();for(let St=0;St<mt;St++){let ne=X.getViewport(St);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),k.viewport(o),X.updateMatrices(tt,St),n=X.getFrustum(),x(E,P,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===Qn&&b(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(B,v,w)};function b(T,E){let P=t.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,f,y,null)}function _(T,E,P,B){let v=null,w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)v=w;else if(v=P.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=v.uuid,F=E.uuid,V=c[k];V===void 0&&(V={},c[k]=V);let Z=V[F];Z===void 0&&(Z=v.clone(),V[F]=Z,E.addEventListener("dispose",A)),v=Z}if(v.visible=E.visible,v.wireframe=E.wireframe,B===Qn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let k=i.properties.get(v);k.light=P}return v}function x(T,E,P,B,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let F=t.update(T),V=T.material;if(Array.isArray(V)){let Z=F.groups;for(let G=0,tt=Z.length;G<tt;G++){let X=Z[G],pt=V[X.materialIndex];if(pt&&pt.visible){let mt=_(T,pt,B,v);T.onBeforeShadow(i,T,E,P,F,mt,X),i.renderBufferDirect(P,null,F,mt,T,X),T.onAfterShadow(i,T,E,P,F,mt,X)}}}else if(V.visible){let Z=_(T,V,B,v);T.onBeforeShadow(i,T,E,P,F,Z,null),i.renderBufferDirect(P,null,F,Z,T,null),T.onAfterShadow(i,T,E,P,F,Z,null)}}let k=T.children;for(let F=0,V=k.length;F<V;F++)x(k[F],E,P,B,v)}function A(T){T.target.removeEventListener("dispose",A);for(let P in c){let B=c[P],v=T.target.uuid;v in B&&(B[v].dispose(),delete B[v])}}}var Dy={[yl]:vl,[xl]:Ml,[_l]:Sl,[Is]:bl,[vl]:yl,[Ml]:xl,[Sl]:_l,[bl]:Is};function Ny(i){function t(){let U=!1,ut=new ue,W=null,J=new ue(0,0,0,0);return{setMask:function(ct){W!==ct&&!U&&(i.colorMask(ct,ct,ct,ct),W=ct)},setLocked:function(ct){U=ct},setClear:function(ct,dt,Jt,Ie,rn){rn===!0&&(ct*=Ie,dt*=Ie,Jt*=Ie),ut.set(ct,dt,Jt,Ie),J.equals(ut)===!1&&(i.clearColor(ct,dt,Jt,Ie),J.copy(ut))},reset:function(){U=!1,W=null,J.set(-1,0,0,0)}}}function e(){let U=!1,ut=!1,W=null,J=null,ct=null;return{setReversed:function(dt){ut=dt},setTest:function(dt){dt?bt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(dt){W!==dt&&!U&&(i.depthMask(dt),W=dt)},setFunc:function(dt){if(ut&&(dt=Dy[dt]),J!==dt){switch(dt){case yl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){U=dt},setClear:function(dt){ct!==dt&&(i.clearDepth(dt),ct=dt)},reset:function(){U=!1,W=null,J=null,ct=null}}}function n(){let U=!1,ut=null,W=null,J=null,ct=null,dt=null,Jt=null,Ie=null,rn=null;return{setTest:function(ie){U||(ie?bt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!U&&(i.stencilMask(ie),ut=ie)},setFunc:function(ie,on,qn){(W!==ie||J!==on||ct!==qn)&&(i.stencilFunc(ie,on,qn),W=ie,J=on,ct=qn)},setOp:function(ie,on,qn){(dt!==ie||Jt!==on||Ie!==qn)&&(i.stencilOp(ie,on,qn),dt=ie,Jt=on,Ie=qn)},setLocked:function(ie){U=ie},setClear:function(ie){rn!==ie&&(i.clearStencil(ie),rn=ie)},reset:function(){U=!1,ut=null,W=null,J=null,ct=null,dt=null,Jt=null,Ie=null,rn=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,b=null,_=null,x=null,A=null,T=new ft(0,0,0),E=0,P=!1,B=null,v=null,w=null,k=null,F=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,G=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Z=G>=1):tt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Z=G>=2);let X=null,pt={},mt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),ne=new ue().fromArray(mt),ae=new ue().fromArray(St);function q(U,ut,W,J){let ct=new Uint8Array(4),dt=i.createTexture();i.bindTexture(U,dt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<W;Jt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ut+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return dt}let Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),r.setFunc(Is),Kt(!1),Qt(Nh),bt(i.CULL_FACE),I(Si);function bt(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function gt(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function Ft(U,ut){return h[U]!==ut?(i.bindFramebuffer(U,ut),h[U]=ut,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Pt(U,ut){let W=d,J=!1;if(U){W=u.get(ut),W===void 0&&(W=[],u.set(ut,W));let ct=U.textures;if(W.length!==ct.length||W[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Jt=ct.length;dt<Jt;dt++)W[dt]=i.COLOR_ATTACHMENT0+dt;W.length=ct.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function Yt(U){return f!==U?(i.useProgram(U),f=U,!0):!1}let he={[Wi]:i.FUNC_ADD,[$d]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};he[Zd]=i.MIN,he[Jd]=i.MAX;let Zt={[jd]:i.ZERO,[Qd]:i.ONE,[tf]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[af]:i.SRC_ALPHA_SATURATE,[rf]:i.DST_COLOR,[nf]:i.DST_ALPHA,[ef]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[of]:i.ONE_MINUS_DST_COLOR,[sf]:i.ONE_MINUS_DST_ALPHA,[lf]:i.CONSTANT_COLOR,[cf]:i.ONE_MINUS_CONSTANT_COLOR,[hf]:i.CONSTANT_ALPHA,[uf]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,ut,W,J,ct,dt,Jt,Ie,rn,ie){if(U===Si){g===!0&&(gt(i.BLEND),g=!1);return}if(g===!1&&(bt(i.BLEND),g=!0),U!==qd){if(U!==y||ie!==P){if((m!==Wi||_!==Wi)&&(i.blendEquation(i.FUNC_ADD),m=Wi,_=Wi),ie)switch(U){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.ONE,i.ONE);break;case kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,b=null,x=null,A=null,T.set(0,0,0),E=0,y=U,P=ie}return}ct=ct||ut,dt=dt||W,Jt=Jt||J,(ut!==m||ct!==_)&&(i.blendEquationSeparate(he[ut],he[ct]),m=ut,_=ct),(W!==p||J!==b||dt!==x||Jt!==A)&&(i.blendFuncSeparate(Zt[W],Zt[J],Zt[dt],Zt[Jt]),p=W,b=J,x=dt,A=Jt),(Ie.equals(T)===!1||rn!==E)&&(i.blendColor(Ie.r,Ie.g,Ie.b,rn),T.copy(Ie),E=rn),y=U,P=!1}function hn(U,ut){U.side===De?gt(i.CULL_FACE):bt(i.CULL_FACE);let W=U.side===Ne;ut&&(W=!W),Kt(W),U.blending===wi&&U.transparent===!1?I(Si):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ge(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function Qt(U){U!==Xd?(bt(i.CULL_FACE),U!==v&&(U===Nh?i.cullFace(i.BACK):U===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),v=U}function Lt(U){U!==w&&(Z&&i.lineWidth(U),w=U)}function ge(U,ut,W){U?(bt(i.POLYGON_OFFSET_FILL),(k!==ut||F!==W)&&(i.polygonOffset(ut,W),k=ut,F=W)):gt(i.POLYGON_OFFSET_FILL)}function Nt(U){U?bt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+V-1),X!==U&&(i.activeTexture(U),X=U)}function M(U,ut,W){W===void 0&&(X===null?W=i.TEXTURE0+V-1:W=X);let J=pt[W];J===void 0&&(J={type:void 0,texture:void 0},pt[W]=J),(J.type!==U||J.texture!==ut)&&(X!==W&&(i.activeTexture(W),X=W),i.bindTexture(U,ut||Q[U]),J.type=U,J.texture=ut)}function O(){let U=pt[X];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function xt(U){ae.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ae.copy(U))}function qt(U,ut){let W=l.get(ut);W===void 0&&(W=new WeakMap,l.set(ut,W));let J=W.get(U);J===void 0&&(J=i.getUniformBlockIndex(ut,U.name),W.set(U,J))}function Ot(U,ut){let J=l.get(ut).get(U);a.get(ut)!==J&&(i.uniformBlockBinding(ut,J,U.__bindingPointIndex),a.set(ut,J))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,pt={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,b=null,_=null,x=null,A=null,T=new ft(0,0,0),E=0,P=!1,B=null,v=null,w=null,k=null,F=null,ne.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:bt,disable:gt,bindFramebuffer:Ft,drawBuffers:Pt,useProgram:Yt,setBlending:I,setMaterial:hn,setFlipSided:Kt,setCullFace:Qt,setLineWidth:Lt,setPolygonOffset:ge,setScissorTest:Nt,activeTexture:R,bindTexture:M,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:vt,texImage3D:Ut,updateUBOMapping:qt,uniformBlockBinding:Ot,texStorage2D:te,texStorage3D:et,texSubImage2D:$,texSubImage3D:wt,compressedTexSubImage2D:lt,compressedTexSubImage3D:yt,scissor:Dt,viewport:xt,reset:fe}}function Cu(i,t,e,n){let s=ky(n);switch(e){case Wu:return i*t;case Ku:return i*t;case qu:return i*t*2;case $u:return i*t/s.components*s.byteLength;case Kc:return i*t/s.components*s.byteLength;case Yu:return i*t*2/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case Xu:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case $c:return i*t*4/s.components*s.byteLength;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Pl:return Math.max(i,16)*Math.max(t,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(t,8)/2;case Il:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mo:case $l:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zu:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ky(i){switch(i){case ri:case Hu:return{byteLength:1,components:1};case Sr:case Gu:case Pr:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case $i:case Vc:case ni:return{byteLength:4,components:1};case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Fy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):Co("canvas")}function y(R,M,O){let Y=1,j=Nt(R);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Y*j.width),wt=Math.floor(Y*j.height);u===void 0&&(u=g($,wt));let lt=M?g($,wt):u;return lt.width=$,lt.height=wt,lt.getContext("2d").drawImage(R,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+wt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==wn&&R.minFilter!==Un}function p(R){i.generateMipmap(R)}function b(R,M,O,Y,j=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=M;if(M===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),M===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){let wt=j?Eo:oe.getTransfer(Y);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=wt===ve?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(R,M){let O;return R?M===null||M===$i||M===Ds?O=i.DEPTH24_STENCIL8:M===ni?O=i.DEPTH32F_STENCIL8:M===Sr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$i||M===Ds?O=i.DEPTH_COMPONENT24:M===ni?O=i.DEPTH_COMPONENT32F:M===Sr&&(O=i.DEPTH_COMPONENT16),O}function x(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M)}function T(R){let M=R.target;M.removeEventListener("dispose",T),B(M)}function E(R){let M=n.get(R);if(M.__webglInit===void 0)return;let O=R.source,Y=d.get(O);if(Y){let j=Y[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(R),Object.keys(Y).length===0&&d.delete(O)}n.remove(R)}function P(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let O=R.source,Y=d.get(O);delete Y[M.__cacheKey],o.memory.textures--}function B(R){let M=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let j=0;j<M.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let O=R.textures;for(let Y=0,j=O.length;Y<j;Y++){let $=n.get(O[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(R)}let v=0;function w(){v=0}function k(){let R=v;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),v+=1,R}function F(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){let O=n.get(R);if(R.isVideoTexture&&Lt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,R,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function Z(R,M){let O=n.get(R);if(R.version>0&&O.__version!==R.version){ae(O,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function G(R,M){let O=n.get(R);if(R.version>0&&O.__version!==R.version){ae(O,R,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function tt(R,M){let O=n.get(R);if(R.version>0&&O.__version!==R.version){q(O,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}let X={[qi]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},pt={[wn]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},mt={[wf]:i.NEVER,[Pf]:i.ALWAYS,[Ef]:i.LESS,[ju]:i.LEQUAL,[Tf]:i.EQUAL,[Cf]:i.GEQUAL,[Af]:i.GREATER,[Rf]:i.NOTEQUAL};function St(R,M){if(M.type===ni&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Un||M.magFilter===Da||M.magFilter===Vr||M.magFilter===Ki||M.minFilter===Un||M.minFilter===Da||M.minFilter===Vr||M.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,X[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,X[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,X[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==Vr&&M.minFilter!==Ki||M.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ne(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let Y=M.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let $=F(M);if($!==R.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[$].usedTimes++;let wt=j[R.__cacheKey];wt!==void 0&&(j[R.__cacheKey].usedTimes--,wt.usedTimes===0&&P(M)),R.__cacheKey=$,R.__webglTexture=j[$].texture}return O}function ae(R,M,O){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let j=ne(R,M),$=M.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+O);let wt=n.get($);if($.version!==wt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);let lt=oe.getPrimaries(oe.workingColorSpace),yt=M.colorSpace===bi?null:oe.getPrimaries(M.colorSpace),te=M.colorSpace===bi||lt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let et=y(M.image,!1,s.maxTextureSize);et=ge(M,et);let vt=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type),Dt=b(M.internalFormat,vt,Ut,M.colorSpace,M.isVideoTexture);St(Y,M);let xt,qt=M.mipmaps,Ot=M.isVideoTexture!==!0,fe=wt.__version===void 0||j===!0,U=$.dataReady,ut=x(M,et);if(M.isDepthTexture)Dt=_(M.format===Ns,M.type),fe&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Dt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,vt,Ut,null));else if(M.isDataTexture)if(qt.length>0){Ot&&fe&&e.texStorage2D(i.TEXTURE_2D,ut,Dt,qt[0].width,qt[0].height);for(let W=0,J=qt.length;W<J;W++)xt=qt[W],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,W,Dt,xt.width,xt.height,0,vt,Ut,xt.data);M.generateMipmaps=!1}else Ot?(fe&&e.texStorage2D(i.TEXTURE_2D,ut,Dt,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,vt,Ut,et.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,vt,Ut,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ot&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Dt,qt[0].width,qt[0].height,et.depth);for(let W=0,J=qt.length;W<J;W++)if(xt=qt[W],M.format!==Nn)if(vt!==null)if(Ot){if(U)if(M.layerUpdates.size>0){let ct=Cu(xt.width,xt.height,M.format,M.type);for(let dt of M.layerUpdates){let Jt=xt.data.subarray(dt*ct/xt.data.BYTES_PER_ELEMENT,(dt+1)*ct/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,dt,xt.width,xt.height,1,vt,Jt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,et.depth,vt,xt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Dt,xt.width,xt.height,et.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,et.depth,vt,Ut,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Dt,xt.width,xt.height,et.depth,0,vt,Ut,xt.data)}else{Ot&&fe&&e.texStorage2D(i.TEXTURE_2D,ut,Dt,qt[0].width,qt[0].height);for(let W=0,J=qt.length;W<J;W++)xt=qt[W],M.format!==Nn?vt!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,W,Dt,xt.width,xt.height,0,vt,Ut,xt.data)}else if(M.isDataArrayTexture)if(Ot){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Dt,et.width,et.height,et.depth),U)if(M.layerUpdates.size>0){let W=Cu(et.width,et.height,M.format,M.type);for(let J of M.layerUpdates){let ct=et.data.subarray(J*W/et.data.BYTES_PER_ELEMENT,(J+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,vt,Ut,ct)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,Ut,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,et.width,et.height,et.depth,0,vt,Ut,et.data);else if(M.isData3DTexture)Ot?(fe&&e.texStorage3D(i.TEXTURE_3D,ut,Dt,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,Ut,et.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,et.width,et.height,et.depth,0,vt,Ut,et.data);else if(M.isFramebufferTexture){if(fe)if(Ot)e.texStorage2D(i.TEXTURE_2D,ut,Dt,et.width,et.height);else{let W=et.width,J=et.height;for(let ct=0;ct<ut;ct++)e.texImage2D(i.TEXTURE_2D,ct,Dt,W,J,0,vt,Ut,null),W>>=1,J>>=1}}else if(qt.length>0){if(Ot&&fe){let W=Nt(qt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Dt,W.width,W.height)}for(let W=0,J=qt.length;W<J;W++)xt=qt[W],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Ut,xt):e.texImage2D(i.TEXTURE_2D,W,Dt,vt,Ut,xt);M.generateMipmaps=!1}else if(Ot){if(fe){let W=Nt(et);e.texStorage2D(i.TEXTURE_2D,ut,Dt,W.width,W.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ut,et)}else e.texImage2D(i.TEXTURE_2D,0,Dt,vt,Ut,et);m(M)&&p(Y),wt.__version=$.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function q(R,M,O){if(M.image.length!==6)return;let Y=ne(R,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);let $=n.get(j);if(j.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);let wt=oe.getPrimaries(oe.workingColorSpace),lt=M.colorSpace===bi?null:oe.getPrimaries(M.colorSpace),yt=M.colorSpace===bi||wt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let te=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!te&&!et?vt[J]=y(M.image[J],!0,s.maxCubemapSize):vt[J]=et?M.image[J].image:M.image[J],vt[J]=ge(M,vt[J]);let Ut=vt[0],Dt=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),qt=b(M.internalFormat,Dt,xt,M.colorSpace),Ot=M.isVideoTexture!==!0,fe=$.__version===void 0||Y===!0,U=j.dataReady,ut=x(M,Ut);St(i.TEXTURE_CUBE_MAP,M);let W;if(te){Ot&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,qt,Ut.width,Ut.height);for(let J=0;J<6;J++){W=vt[J].mipmaps;for(let ct=0;ct<W.length;ct++){let dt=W[ct];M.format!==Nn?Dt!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,dt.width,dt.height,Dt,xt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,qt,dt.width,dt.height,0,Dt,xt,dt.data)}}}else{if(W=M.mipmaps,Ot&&fe){W.length>0&&ut++;let J=Nt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,qt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Dt,xt,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,vt[J].width,vt[J].height,0,Dt,xt,vt[J].data);for(let ct=0;ct<W.length;ct++){let Jt=W[ct].image[J].image;Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Jt.width,Jt.height,Dt,xt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,qt,Jt.width,Jt.height,0,Dt,xt,Jt.data)}}else{Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,xt,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,Dt,xt,vt[J]);for(let ct=0;ct<W.length;ct++){let dt=W[ct];Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Dt,xt,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,qt,Dt,xt,dt.image[J])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Q(R,M,O,Y,j,$){let wt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),yt=b(O.internalFormat,wt,lt,O.colorSpace);if(!n.get(M).__hasExternalTextures){let et=Math.max(1,M.width>>$),vt=Math.max(1,M.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,yt,et,vt,M.depth,0,wt,lt,null):e.texImage2D(j,$,yt,et,vt,0,wt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Qt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,n.get(O).__webglTexture,0,Kt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,n.get(O).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(R,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let Y=M.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,$=_(M.stencilBuffer,j),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Kt(M);Qt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,$,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,R)}else{let Y=M.textures;for(let j=0;j<Y.length;j++){let $=Y[j],wt=r.convert($.format,$.colorSpace),lt=r.convert($.type),yt=b($.internalFormat,wt,lt,$.colorSpace),te=Kt(M);O&&Qt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,yt,M.width,M.height):Qt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,yt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let Y=n.get(M.depthTexture).__webglTexture,j=Kt(M);if(M.depthTexture.format===As)Qt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===Ns)Qt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ft(R){let M=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Y}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");gt(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),bt(M.__webglDepthbuffer[Y],R,!1);else{let j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),bt(M.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(R,M,O){let Y=n.get(R);M!==void 0&&Q(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ft(R)}function Yt(R){let M=R.texture,O=n.get(R),Y=n.get(M);R.addEventListener("dispose",T);let j=R.textures,$=R.isWebGLCubeRenderTarget===!0,wt=j.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let yt=0;yt<M.mipmaps.length;yt++)O.__webglFramebuffer[lt][yt]=i.createFramebuffer()}else O.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)O.__webglFramebuffer[lt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let lt=0,yt=j.length;lt<yt;lt++){let te=n.get(j[lt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Qt(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<j.length;lt++){let yt=j[lt];O.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);let te=r.convert(yt.format,yt.colorSpace),et=r.convert(yt.type),vt=b(yt.internalFormat,te,et,yt.colorSpace,R.isXRRenderTarget===!0),Ut=Kt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,vt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),St(i.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Q(O.__webglFramebuffer[lt][yt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt);else Q(O.__webglFramebuffer[lt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let lt=0,yt=j.length;lt<yt;lt++){let te=j[lt],et=n.get(te);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),St(i.TEXTURE_2D,te),Q(O.__webglFramebuffer,R,te,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Y.__webglTexture),St(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)Q(O.__webglFramebuffer[yt],R,M,i.COLOR_ATTACHMENT0,lt,yt);else Q(O.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,lt,0);m(M)&&p(lt),e.unbindTexture()}R.depthBuffer&&Ft(R)}function he(R){let M=R.textures;for(let O=0,Y=M.length;O<Y;O++){let j=M[O];if(m(j)){let $=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(j).__webglTexture;e.bindTexture($,wt),p($),e.unbindTexture()}}}let Zt=[],I=[];function hn(R){if(R.samples>0){if(Qt(R)===!1){let M=R.textures,O=R.width,Y=R.height,j=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(R),lt=M.length>1;if(lt)for(let yt=0;yt<M.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[yt]);let te=n.get(M[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,i.NEAREST),l===!0&&(Zt.length=0,I.length=0,Zt.push(i.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Zt.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let yt=0;yt<M.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[yt]);let te=n.get(M[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Kt(R){return Math.min(s.maxSamples,R.samples)}function Qt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Lt(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ge(R,M){let O=R.colorSpace,Y=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Ci&&O!==bi&&(oe.getTransfer(O)===ve?(Y!==Nn||j!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=Pt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Qt}function Oy(i,t){function e(n,s=bi){let r,o=oe.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===Vc)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===Pr)return i.HALF_FLOAT;if(n===Wu)return i.ALPHA;if(n===Xu)return i.RGB;if(n===Nn)return i.RGBA;if(n===Ku)return i.LUMINANCE;if(n===qu)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===$u)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===Yu)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===vo||n===xo||n===_o||n===bo)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Ll||n===Ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Ll)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dl||n===Nl||n===kl||n===Fl||n===Ol||n===Bl||n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===Kl||n===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===$l||n===Yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zu||n===Zl||n===Jl||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var pc=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Rt=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},By={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hy=`
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

}`,mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:zy,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends Ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=new mc,m=e.getContextAttributes(),p=null,b=null,_=[],x=[],A=new at,T=null,E=new Xe;E.layers.enable(1),E.viewport=new ue;let P=new Xe;P.layers.enable(2),P.viewport=new ue;let B=[E,P],v=new pc;v.layers.enable(1),v.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=_[q];return Q===void 0&&(Q=new _r,_[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=_[q];return Q===void 0&&(Q=new _r,_[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=_[q];return Q===void 0&&(Q=new _r,_[q]=Q),Q.getHandSpace()};function F(q){let Q=x.indexOf(q.inputSource);if(Q===-1)return;let bt=_[Q];bt!==void 0&&(bt.update(q.inputSource,q.frame,c||o),bt.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<_.length;q++){let Q=x[q];Q!==null&&(x[q]=null,_[q].disconnect(Q))}w=null,k=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new oi(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,bt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Ns:As,bt=m.stencil?Ds:$i);let Ft={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new oi(d.textureWidth,d.textureHeight,{format:Nn,type:ri,depthTexture:new Bo(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(q){for(let Q=0;Q<q.removed.length;Q++){let bt=q.removed[Q],gt=x.indexOf(bt);gt>=0&&(x[gt]=null,_[gt].disconnect(bt))}for(let Q=0;Q<q.added.length;Q++){let bt=q.added[Q],gt=x.indexOf(bt);if(gt===-1){for(let Pt=0;Pt<_.length;Pt++)if(Pt>=x.length){x.push(bt),gt=Pt;break}else if(x[Pt]===null){x[Pt]=bt,gt=Pt;break}if(gt===-1)break}let Ft=_[gt];Ft&&Ft.connect(bt)}}let G=new C,tt=new C;function X(q,Q,bt){G.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);let gt=G.distanceTo(tt),Ft=Q.projectionMatrix.elements,Pt=bt.projectionMatrix.elements,Yt=Ft[14]/(Ft[10]-1),he=Ft[14]/(Ft[10]+1),Zt=(Ft[9]+1)/Ft[5],I=(Ft[9]-1)/Ft[5],hn=(Ft[8]-1)/Ft[0],Kt=(Pt[8]+1)/Pt[0],Qt=Yt*hn,Lt=Yt*Kt,ge=gt/(-hn+Kt),Nt=ge*-hn;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Nt),q.translateZ(ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ft[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let R=Yt+ge,M=he+ge,O=Qt-Nt,Y=Lt+(gt-Nt),j=Zt*he/M*R,$=I*he/M*R;q.projectionMatrix.makePerspective(O,Y,j,$,R,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,bt=q.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),v.near=P.near=E.near=Q,v.far=P.far=E.far=bt,(w!==v.near||k!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,k=v.far);let gt=q.parent,Ft=v.cameras;pt(v,gt);for(let Pt=0;Pt<Ft.length;Pt++)pt(Ft[Pt],gt);Ft.length===2?X(v,E,P):v.projectionMatrix.copy(E.projectionMatrix),mt(q,v,gt)};function mt(q,Q,bt){bt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(bt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ks*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let St=null;function ne(q,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let gt=!1;bt.length!==v.cameras.length&&(v.cameras.length=0,gt=!0);for(let Pt=0;Pt<bt.length;Pt++){let Yt=bt[Pt],he=null;if(f!==null)he=f.getViewport(Yt);else{let I=u.getViewSubImage(d,Yt);he=I.viewport,Pt===0&&(t.setRenderTargetTextures(b,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(b))}let Zt=B[Pt];Zt===void 0&&(Zt=new Xe,Zt.layers.enable(Pt),Zt.viewport=new ue,B[Pt]=Zt),Zt.matrix.fromArray(Yt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Yt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(v.matrix.copy(Zt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),gt===!0&&v.cameras.push(Zt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let Pt=u.getDepthInformation(bt[0]);Pt&&Pt.isValid&&Pt.texture&&y.init(t,Pt,s.renderState)}}for(let bt=0;bt<_.length;bt++){let gt=x[bt],Ft=_[bt];gt!==null&&Ft!==void 0&&Ft.update(gt,Q,c||o)}St&&St(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ae=new id;ae.setAnimationLoop(ne),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}},Gi=new Gn,Gy=new xe;function Vy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ne&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ne&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),_=b.envMap,x=b.envMapRotation;_&&(m.envMap.value=_,Gi.copy(x),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(Gi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let x=_.program;n.uniformBlockBinding(b,x)}function c(b,_){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));let A=_.program;n.updateUBOMapping(b,A);let T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let _=u();b.__bindingPointIndex=_;let x=i.createBuffer(),A=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],x=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,E=x.length;T<E;T++){let P=Array.isArray(x[T])?x[T]:[x[T]];for(let B=0,v=P.length;B<v;B++){let w=P[B];if(f(w,T,B,A)===!0){let k=w.__offset,F=Array.isArray(w.value)?w.value:[w.value],V=0;for(let Z=0;Z<F.length;Z++){let G=F[Z],tt=y(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+V,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,_,x,A){let T=b.value,E=_+"_"+x;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{let P=A[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return A[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(b){let _=b.uniforms,x=0,A=16;for(let E=0,P=_.length;E<P;E++){let B=Array.isArray(_[E])?_[E]:[_[E]];for(let v=0,w=B.length;v<w;v++){let k=B[v],F=Array.isArray(k.value)?k.value:[k.value];for(let V=0,Z=F.length;V<Z;V++){let G=F[V],tt=y(G),X=x%A,pt=X%tt.boundary,mt=X+pt;x+=pt,mt!==0&&A-mt<tt.storage&&(x+=A-mt),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=tt.storage}}}let T=x%A;return T>0&&(x+=A-T),b.__size=x,b.__cache={},this}function y(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var zo=class{constructor(t={}){let{canvas:e=qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Ei,this.toneMappingExposure=1;let _=this,x=!1,A=0,T=0,E=null,P=-1,B=null,v=new ue,w=new ue,k=null,F=new ft(0),V=0,Z=e.width,G=e.height,tt=1,X=null,pt=null,mt=new ue(0,0,Z,G),St=new ue(0,0,Z,G),ne=!1,ae=new wr,q=!1,Q=!1,bt=new xe,gt=new xe,Ft=new C,Pt=new ue,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function Zt(){return E===null?tt:1}let I=n;function hn(S,D){return e.getContext(S,D)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){let D="webgl2";if(I=hn(D,S),I===null)throw hn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Kt,Qt,Lt,ge,Nt,R,M,O,Y,j,$,wt,lt,yt,te,et,vt,Ut,Dt,xt,qt,Ot,fe,U;function ut(){Kt=new og(I),Kt.init(),Ot=new Oy(I,Kt),Qt=new tg(I,Kt,t,Ot),Lt=new Ny(I),Qt.reverseDepthBuffer&&Lt.buffers.depth.setReversed(!0),ge=new cg(I),Nt=new My,R=new Fy(I,Kt,Lt,Nt,Qt,Ot,ge),M=new ng(_),O=new rg(_),Y=new gp(I),fe=new j0(I,Y),j=new ag(I,Y,ge,fe),$=new ug(I,j,Y,ge),Dt=new hg(I,Qt,R),et=new eg(Nt),wt=new by(_,M,O,Kt,Qt,fe,et),lt=new Vy(_,Nt),yt=new wy,te=new Py(Kt),Ut=new J0(_,M,O,Lt,$,d,l),vt=new Uy(_,$,Qt),U=new Wy(I,ge,Qt,Lt),xt=new Q0(I,Kt,ge),qt=new lg(I,Kt,ge),ge.programs=wt.programs,_.capabilities=Qt,_.extensions=Kt,_.properties=Nt,_.renderLists=yt,_.shadowMap=vt,_.state=Lt,_.info=ge}ut();let W=new gc(_,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(Z,G,!1))},this.getSize=function(S){return S.set(Z,G)},this.setSize=function(S,D,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,G=D,e.width=Math.floor(S*tt),e.height=Math.floor(D*tt),z===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Z*tt,G*tt).floor()},this.setDrawingBufferSize=function(S,D,z){Z=S,G=D,tt=z,e.width=Math.floor(S*z),e.height=Math.floor(D*z),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(mt)},this.setViewport=function(S,D,z,H){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,D,z,H),Lt.viewport(v.copy(mt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(St)},this.setScissor=function(S,D,z,H){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,D,z,H),Lt.scissor(w.copy(St).multiplyScalar(tt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){Lt.setScissorTest(ne=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){pt=S},this.getClearColor=function(S){return S.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(S=!0,D=!0,z=!0){let H=0;if(S){let N=!1;if(E!==null){let nt=E.texture.format;N=nt===$c||nt===qc||nt===Kc}if(N){let nt=E.texture.type,ht=nt===ri||nt===$i||nt===Sr||nt===Ds||nt===Wc||nt===Xc,_t=Ut.getClearColor(),Mt=Ut.getClearAlpha(),Ct=_t.r,It=_t.g,Et=_t.b;ht?(f[0]=Ct,f[1]=It,f[2]=Et,f[3]=Mt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Ct,g[1]=It,g[2]=Et,g[3]=Mt,I.clearBufferiv(I.COLOR,0,g))}else H|=I.COLOR_BUFFER_BIT}D&&(H|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),yt.dispose(),te.dispose(),Nt.dispose(),M.dispose(),O.dispose(),$.dispose(),fe.dispose(),U.dispose(),wt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ah),W.removeEventListener("sessionend",Rh),ki.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let S=ge.autoReset,D=vt.enabled,z=vt.autoUpdate,H=vt.needsUpdate,N=vt.type;ut(),ge.autoReset=S,vt.enabled=D,vt.autoUpdate=z,vt.needsUpdate=H,vt.type=N}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Jt(S){let D=S.target;D.removeEventListener("dispose",Jt),Ie(D)}function Ie(S){rn(S),Nt.remove(S)}function rn(S){let D=Nt.get(S).programs;D!==void 0&&(D.forEach(function(z){wt.releaseProgram(z)}),S.isShaderMaterial&&wt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,z,H,N,nt){D===null&&(D=Yt);let ht=N.isMesh&&N.matrixWorld.determinant()<0,_t=Hd(S,D,z,H,N);Lt.setMaterial(H,ht);let Mt=z.index,Ct=1;if(H.wireframe===!0){if(Mt=j.getWireframeAttribute(z),Mt===void 0)return;Ct=2}let It=z.drawRange,Et=z.attributes.position,le=It.start*Ct,ye=(It.start+It.count)*Ct;nt!==null&&(le=Math.max(le,nt.start*Ct),ye=Math.min(ye,(nt.start+nt.count)*Ct)),Mt!==null?(le=Math.max(le,0),ye=Math.min(ye,Mt.count)):Et!=null&&(le=Math.max(le,0),ye=Math.min(ye,Et.count));let Ee=ye-le;if(Ee<0||Ee===1/0)return;fe.setup(N,H,_t,z,Mt);let un,se=xt;if(Mt!==null&&(un=Y.get(Mt),se=qt,se.setIndex(un)),N.isMesh)H.wireframe===!0?(Lt.setLineWidth(H.wireframeLinewidth*Zt()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(N.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),Lt.setLineWidth(Tt*Zt()),N.isLineSegments?se.setMode(I.LINES):N.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else N.isPoints?se.setMode(I.POINTS):N.isSprite&&se.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Tt=N._multiDrawStarts,We=N._multiDrawCounts,re=N._multiDrawCount,Cn=Mt?Y.get(Mt).bytesPerElement:1,as=Nt.get(H).currentProgram.getUniforms();for(let dn=0;dn<re;dn++)as.setValue(I,"_gl_DrawID",dn),se.render(Tt[dn]/Cn,We[dn])}else if(N.isInstancedMesh)se.renderInstances(le,Ee,N.count);else if(z.isInstancedBufferGeometry){let Tt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,We=Math.min(z.instanceCount,Tt);se.renderInstances(le,Ee,We)}else se.render(le,Ee)};function ie(S,D,z){S.transparent===!0&&S.side===De&&S.forceSinglePass===!1?(S.side=Ne,S.needsUpdate=!0,Gr(S,D,z),S.side=Ti,S.needsUpdate=!0,Gr(S,D,z),S.side=De):Gr(S,D,z)}this.compile=function(S,D,z=null){z===null&&(z=S),m=te.get(z),m.init(D),b.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let nt=N.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){let _t=nt[ht];ie(_t,z,N),H.add(_t)}else ie(nt,z,N),H.add(nt)}),b.pop(),m=null,H},this.compileAsync=function(S,D,z=null){let H=this.compile(S,D,z);return new Promise(N=>{function nt(){if(H.forEach(function(ht){Nt.get(ht).currentProgram.isReady()&&H.delete(ht)}),H.size===0){N(S);return}setTimeout(nt,10)}Kt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let on=null;function qn(S){on&&on(S)}function Ah(){ki.stop()}function Rh(){ki.start()}let ki=new id;ki.setAnimationLoop(qn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(S){on=S,W.setAnimationLoop(S),S===null?ki.stop():ki.start()},W.addEventListener("sessionstart",Ah),W.addEventListener("sessionend",Rh),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,D,E),m=te.get(S,b.length),m.init(D),b.push(m),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ae.setFromProjectionMatrix(gt),Q=this.localClippingEnabled,q=et.init(this.clippingPlanes,Q),y=yt.get(S,p.length),y.init(),p.push(y),W.enabled===!0&&W.isPresenting===!0){let nt=_.xr.getDepthSensingMesh();nt!==null&&Pa(nt,D,-1/0,_.sortObjects)}Pa(S,D,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(X,pt),he=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,he&&Ut.addToRenderList(y,S),this.info.render.frame++,q===!0&&et.beginShadows();let z=m.state.shadowsArray;vt.render(z,S,D),q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=y.opaque,N=y.transmissive;if(m.setupLights(),D.isArrayCamera){let nt=D.cameras;if(N.length>0)for(let ht=0,_t=nt.length;ht<_t;ht++){let Mt=nt[ht];Ph(H,N,S,Mt)}he&&Ut.render(S);for(let ht=0,_t=nt.length;ht<_t;ht++){let Mt=nt[ht];Ch(y,S,Mt,Mt.viewport)}}else N.length>0&&Ph(H,N,S,D),he&&Ut.render(S),Ch(y,S,D);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(_,S,D),fe.resetDefaultState(),P=-1,B=null,b.pop(),b.length>0?(m=b[b.length-1],q===!0&&et.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Pa(S,D,z,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ae.intersectsSprite(S)){H&&Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);let ht=$.update(S),_t=S.material;_t.visible&&y.push(S,ht,_t,z,Pt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ae.intersectsObject(S))){let ht=$.update(S),_t=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pt.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Pt.copy(ht.boundingSphere.center)),Pt.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(_t)){let Mt=ht.groups;for(let Ct=0,It=Mt.length;Ct<It;Ct++){let Et=Mt[Ct],le=_t[Et.materialIndex];le&&le.visible&&y.push(S,ht,le,z,Pt.z,Et)}}else _t.visible&&y.push(S,ht,_t,z,Pt.z,null)}}let nt=S.children;for(let ht=0,_t=nt.length;ht<_t;ht++)Pa(nt[ht],D,z,H)}function Ch(S,D,z,H){let N=S.opaque,nt=S.transmissive,ht=S.transparent;m.setupLightsView(z),q===!0&&et.setGlobalState(_.clippingPlanes,z),H&&Lt.viewport(v.copy(H)),N.length>0&&Hr(N,D,z),nt.length>0&&Hr(nt,D,z),ht.length>0&&Hr(ht,D,z),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Ph(S,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new oi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Pr:ri,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let nt=m.state.transmissionRenderTarget[H.id],ht=H.viewport||v;nt.setSize(ht.z,ht.w);let _t=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(F),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),he&&Ut.render(z);let Mt=_.toneMapping;_.toneMapping=Ei;let Ct=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),q===!0&&et.setGlobalState(_.clippingPlanes,H),Hr(S,z,H),R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Et=0,le=D.length;Et<le;Et++){let ye=D[Et],Ee=ye.object,un=ye.geometry,se=ye.material,Tt=ye.group;if(se.side===De&&Ee.layers.test(H.layers)){let We=se.side;se.side=Ne,se.needsUpdate=!0,Ih(Ee,z,H,un,se,Tt),se.side=We,se.needsUpdate=!0,It=!0}}It===!0&&(R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt))}_.setRenderTarget(_t),_.setClearColor(F,V),Ct!==void 0&&(H.viewport=Ct),_.toneMapping=Mt}function Hr(S,D,z){let H=D.isScene===!0?D.overrideMaterial:null;for(let N=0,nt=S.length;N<nt;N++){let ht=S[N],_t=ht.object,Mt=ht.geometry,Ct=H===null?ht.material:H,It=ht.group;_t.layers.test(z.layers)&&Ih(_t,D,z,Mt,Ct,It)}}function Ih(S,D,z,H,N,nt){S.onBeforeRender(_,D,z,H,N,nt),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,D,z,H,S,nt),N.transparent===!0&&N.side===De&&N.forceSinglePass===!1?(N.side=Ne,N.needsUpdate=!0,_.renderBufferDirect(z,D,H,N,S,nt),N.side=Ti,N.needsUpdate=!0,_.renderBufferDirect(z,D,H,N,S,nt),N.side=De):_.renderBufferDirect(z,D,H,N,S,nt),S.onAfterRender(_,D,z,H,N,nt)}function Gr(S,D,z){D.isScene!==!0&&(D=Yt);let H=Nt.get(S),N=m.state.lights,nt=m.state.shadowsArray,ht=N.state.version,_t=wt.getParameters(S,N.state,nt,D,z),Mt=wt.getProgramCacheKey(_t),Ct=H.programs;H.environment=S.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(S.isMeshStandardMaterial?O:M).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",Jt),Ct=new Map,H.programs=Ct);let It=Ct.get(Mt);if(It!==void 0){if(H.currentProgram===It&&H.lightsStateVersion===ht)return Uh(S,_t),It}else _t.uniforms=wt.getUniforms(S),S.onBeforeCompile(_t,_),It=wt.acquireProgram(_t,Mt),Ct.set(Mt,It),H.uniforms=_t.uniforms;let Et=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=et.uniform),Uh(S,_t),H.needsLights=Vd(S),H.lightsStateVersion=ht,H.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=It,H.uniformsList=null,It}function Lh(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Cs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Uh(S,D){let z=Nt.get(S);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Hd(S,D,z,H,N){D.isScene!==!0&&(D=Yt),R.resetTextureUnits();let nt=D.fog,ht=H.isMeshStandardMaterial?D.environment:null,_t=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ci,Mt=(H.isMeshStandardMaterial?O:M).get(H.envMap||ht),Ct=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!z.morphAttributes.position,le=!!z.morphAttributes.normal,ye=!!z.morphAttributes.color,Ee=Ei;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ee=_.toneMapping);let un=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=un!==void 0?un.length:0,Tt=Nt.get(H),We=m.state.lights;if(q===!0&&(Q===!0||S!==B)){let Mn=S===B&&H.id===P;et.setState(H,S,Mn)}let re=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==We.state.version||Tt.outputColorSpace!==_t||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==Mt||H.fog===!0&&Tt.fog!==nt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==Ct||Tt.vertexTangents!==It||Tt.morphTargets!==Et||Tt.morphNormals!==le||Tt.morphColors!==ye||Tt.toneMapping!==Ee||Tt.morphTargetsCount!==se)&&(re=!0):(re=!0,Tt.__version=H.version);let Cn=Tt.currentProgram;re===!0&&(Cn=Gr(H,D,N));let as=!1,dn=!1,Ia=!1,Ae=Cn.getUniforms(),pi=Tt.uniforms;if(Lt.useProgram(Cn.program)&&(as=!0,dn=!0,Ia=!0),H.id!==P&&(P=H.id,dn=!0),as||B!==S){Qt.reverseDepthBuffer?(bt.copy(S.projectionMatrix),Yf(bt),Zf(bt),Ae.setValue(I,"projectionMatrix",bt)):Ae.setValue(I,"projectionMatrix",S.projectionMatrix),Ae.setValue(I,"viewMatrix",S.matrixWorldInverse);let Mn=Ae.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Ft.setFromMatrixPosition(S.matrixWorld)),Qt.logarithmicDepthBuffer&&Ae.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ae.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,dn=!0,Ia=!0)}if(N.isSkinnedMesh){Ae.setOptional(I,N,"bindMatrix"),Ae.setOptional(I,N,"bindMatrixInverse");let Mn=N.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ae.setValue(I,"boneTexture",Mn.boneTexture,R))}N.isBatchedMesh&&(Ae.setOptional(I,N,"batchingTexture"),Ae.setValue(I,"batchingTexture",N._matricesTexture,R),Ae.setOptional(I,N,"batchingIdTexture"),Ae.setValue(I,"batchingIdTexture",N._indirectTexture,R),Ae.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&Ae.setValue(I,"batchingColorTexture",N._colorsTexture,R));let La=z.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0)&&Dt.update(N,z,Cn),(dn||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,Ae.setValue(I,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(pi.envMap.value=Mt,pi.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(pi.envMapIntensity.value=D.environmentIntensity),dn&&(Ae.setValue(I,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&Gd(pi,Ia),nt&&H.fog===!0&&lt.refreshFogUniforms(pi,nt),lt.refreshMaterialUniforms(pi,H,tt,G,m.state.transmissionRenderTarget[S.id]),Cs.upload(I,Lh(Tt),pi,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cs.upload(I,Lh(Tt),pi,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ae.setValue(I,"center",N.center),Ae.setValue(I,"modelViewMatrix",N.modelViewMatrix),Ae.setValue(I,"normalMatrix",N.normalMatrix),Ae.setValue(I,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Mn=H.uniformsGroups;for(let Ua=0,Wd=Mn.length;Ua<Wd;Ua++){let Dh=Mn[Ua];U.update(Dh,Cn),U.bind(Dh,Cn)}}return Cn}function Gd(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Vd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,D,z){Nt.get(S.texture).__webglTexture=D,Nt.get(S.depthTexture).__webglTexture=z;let H=Nt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let z=Nt.get(S);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,z=0){E=S,A=D,T=z;let H=!0,N=null,nt=!1,ht=!1;if(S){let Mt=Nt.get(S);if(Mt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(Mt.__hasExternalTextures)R.rebindTextures(S,Nt.get(S.texture).__webglTexture,Nt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Et=S.depthTexture;if(Mt.__boundDepthTexture!==Et){if(Et!==null&&Nt.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}let Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ht=!0);let It=Nt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[D])?N=It[D][z]:N=It[D],nt=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?N=Nt.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[z]:N=It,v.copy(S.viewport),w.copy(S.scissor),k=S.scissorTest}else v.copy(mt).multiplyScalar(tt).floor(),w.copy(St).multiplyScalar(tt).floor(),k=ne;if(Lt.bindFramebuffer(I.FRAMEBUFFER,N)&&H&&Lt.drawBuffers(S,N),Lt.viewport(v),Lt.scissor(w),Lt.setScissorTest(k),nt){let Mt=Nt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,z)}else if(ht){let Mt=Nt.get(S.texture),Ct=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,z||0,Ct)}P=-1},this.readRenderTargetPixels=function(S,D,z,H,N,nt,ht){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){Lt.bindFramebuffer(I.FRAMEBUFFER,_t);try{let Mt=S.texture,Ct=Mt.format,It=Mt.type;if(!Qt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&z>=0&&z<=S.height-N&&I.readPixels(D,z,H,N,Ot.convert(Ct),Ot.convert(It),nt)}finally{let Mt=E!==null?Nt.get(E).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,D,z,H,N,nt,ht){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){let Mt=S.texture,Ct=Mt.format,It=Mt.type;if(!Qt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-H&&z>=0&&z<=S.height-N){Lt.bindFramebuffer(I.FRAMEBUFFER,_t);let Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),I.readPixels(D,z,H,N,Ot.convert(Ct),Ot.convert(It),0);let le=E!==null?Nt.get(E).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,le);let ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $f(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(Et),I.deleteSync(ye),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,z=0){S.isTexture!==!0&&(So("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let H=Math.pow(2,-z),N=Math.floor(S.image.width*H),nt=Math.floor(S.image.height*H),ht=D!==null?D.x:0,_t=D!==null?D.y:0;R.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ht,_t,N,nt),Lt.unbindTexture()},this.copyTextureToTexture=function(S,D,z=null,H=null,N=0){S.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,z=null);let nt,ht,_t,Mt,Ct,It;z!==null?(nt=z.max.x-z.min.x,ht=z.max.y-z.min.y,_t=z.min.x,Mt=z.min.y):(nt=S.image.width,ht=S.image.height,_t=0,Mt=0),H!==null?(Ct=H.x,It=H.y):(Ct=0,It=0);let Et=Ot.convert(D.format),le=Ot.convert(D.type);R.setTexture2D(D,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let ye=I.getParameter(I.UNPACK_ROW_LENGTH),Ee=I.getParameter(I.UNPACK_IMAGE_HEIGHT),un=I.getParameter(I.UNPACK_SKIP_PIXELS),se=I.getParameter(I.UNPACK_SKIP_ROWS),Tt=I.getParameter(I.UNPACK_SKIP_IMAGES),We=S.isCompressedTexture?S.mipmaps[N]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,We.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,We.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mt),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Ct,It,nt,ht,Et,le,We.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Ct,It,We.width,We.height,Et,We.data):I.texSubImage2D(I.TEXTURE_2D,N,Ct,It,nt,ht,Et,le,We),I.pixelStorei(I.UNPACK_ROW_LENGTH,ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee),I.pixelStorei(I.UNPACK_SKIP_PIXELS,un),I.pixelStorei(I.UNPACK_SKIP_ROWS,se),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Tt),N===0&&D.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Lt.unbindTexture()},this.copyTextureToTexture3D=function(S,D,z=null,H=null,N=0){S.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0);let nt,ht,_t,Mt,Ct,It,Et,le,ye,Ee=S.isCompressedTexture?S.mipmaps[N]:S.image;z!==null?(nt=z.max.x-z.min.x,ht=z.max.y-z.min.y,_t=z.max.z-z.min.z,Mt=z.min.x,Ct=z.min.y,It=z.min.z):(nt=Ee.width,ht=Ee.height,_t=Ee.depth,Mt=0,Ct=0,It=0),H!==null?(Et=H.x,le=H.y,ye=H.z):(Et=0,le=0,ye=0);let un=Ot.convert(D.format),se=Ot.convert(D.type),Tt;if(D.isData3DTexture)R.setTexture3D(D,0),Tt=I.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)R.setTexture2DArray(D,0),Tt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let We=I.getParameter(I.UNPACK_ROW_LENGTH),re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter(I.UNPACK_SKIP_PIXELS),as=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,It),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Tt,N,Et,le,ye,nt,ht,_t,un,se,Ee.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,N,Et,le,ye,nt,ht,_t,un,Ee.data):I.texSubImage3D(Tt,N,Et,le,ye,nt,ht,_t,un,se,Ee),I.pixelStorei(I.UNPACK_ROW_LENGTH,We),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,as),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),N===0&&D.generateMipmaps&&I.generateMipmap(Tt),Lt.unbindTexture()},this.initRenderTarget=function(S){Nt.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),Lt.unbindTexture()},this.resetState=function(){A=0,T=0,E=null,Lt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Yc?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===jo?"display-p3":"srgb"}};var an=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zs=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},yc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qe=new C,Ho=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Er=class extends ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ms,fr=new C,Ss=new C,ws=new C,Es=new at,pr=new at,ld=new xe,ho=new C,mr=new C,uo=new C,Pu=new at,cl=new at,Iu=new at,Go=class extends ke{constructor(t=new Er){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yc(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Ho(n,3,0,!1)),Ms.setAttribute("uv",new Ho(n,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),ld.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-ws.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;fo(ho.set(-.5,-.5,0),ws,o,Ss,s,r),fo(mr.set(.5,-.5,0),ws,o,Ss,s,r),fo(uo.set(.5,.5,0),ws,o,Ss,s,r),Pu.set(0,0),cl.set(1,0),Iu.set(1,1);let a=t.ray.intersectTriangle(ho,mr,uo,!1,fr);if(a===null&&(fo(mr.set(-.5,.5,0),ws,o,Ss,s,r),cl.set(0,1),a=t.ray.intersectTriangle(ho,uo,mr,!1,fr),a===null))return;let l=t.ray.origin.distanceTo(fr);l<t.near||l>t.far||e.push({distance:l,point:fr.clone(),uv:Mi.getInterpolation(fr,ho,mr,uo,Pu,cl,Iu,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fo(i,t,e,n,s,r){Es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(pr.x=r*Es.x-s*Es.y,pr.y=s*Es.x+r*Es.y):pr.copy(Es),i.copy(t),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(ld)}var Tr=class extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lu=new xe,vc=new Lo,po=new Fs,mo=new C,Vo=class extends ke{constructor(t=new Ce,e=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;Lu.copy(s).invert(),vc.copy(t.ray).applyMatrix4(Lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);mo.fromBufferAttribute(u,m),Uu(mo,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)mo.fromBufferAttribute(u,g),Uu(mo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uu(i,t,e,n,s,r,o){let a=vc.distanceSqToPoint(i);if(a<e){let l=new C;vc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Hs=class extends mn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,l=new xe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(He(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(He(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xc=class extends Ar{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var go=new C,hl=new jc,ul=new jc,dl=new jc,_c=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),c=go);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=go),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),hl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),ul.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),dl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ul.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),dl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(hl.calc(l),ul.calc(l),dl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Du(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Xy(i,t){let e=1-i;return e*e*t}function Ky(i,t){return 2*(1-i)*i*t}function qy(i,t){return i*i*t}function br(i,t,e,n){return Xy(i,t)+Ky(i,e)+qy(i,n)}function $y(i,t){let e=1-i;return e*e*e*t}function Yy(i,t){let e=1-i;return 3*e*e*i*t}function Zy(i,t){return 3*(1-i)*i*i*t}function Jy(i,t){return i*i*i*t}function Mr(i,t,e,n,s){return $y(i,t)+Yy(i,e)+Zy(i,n)+Jy(i,s)}var Wo=class extends Tn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bc=class extends Tn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y),Mr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xo=class extends Tn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mc=class extends Tn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends Tn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(br(t,s.x,r.x,o.x),br(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gs=class extends Tn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(br(t,s.x,r.x,o.x),br(t,s.y,r.y,o.y),br(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Du(a,l.x,c.x,h.x,u.x),Du(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Sc=Object.freeze({__proto__:null,ArcCurve:xc,CatmullRomCurve3:_c,CubicBezierCurve:Wo,CubicBezierCurve3:bc,EllipseCurve:Ar,LineCurve:Xo,LineCurve3:Mc,QuadraticBezierCurve:Ko,QuadraticBezierCurve3:Gs,SplineCurve:qo}),wc=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}},Ec=class extends wc{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xo(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ko(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Wo(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new qo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ar(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rr=class i extends Ce{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,d=new at,f=new C,g=new C,y=new C,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let b=0;b<=e;b++){let _=n+b*h*s,x=Math.sin(_),A=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*A,o.push(u.x,u.y,u.z),d.x=b/e,d.y=T/(t.length-1),a.push(d.x,d.y);let E=l[3*T+0]*x,P=l[3*T+1],B=l[3*T+0]*A;c.push(E,P,B)}}for(let b=0;b<e;b++)for(let _=0;_<t.length-1;_++){let x=_+b*t.length,A=x,T=x+t.length,E=x+t.length+1,P=x+1;r.push(A,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ge=class i extends Rr{constructor(t=1,e=1,n=4,s=8){let r=new Ec;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Vn=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ee=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function b(){let x=new C,A=new C,T=0,E=(e-t)/n;for(let P=0;P<=r;P++){let B=[],v=P/r,w=v*(e-t)+t;for(let k=0;k<=s;k++){let F=k/s,V=F*l+a,Z=Math.sin(V),G=Math.cos(V);A.x=w*Z,A.y=-v*n+m,A.z=w*G,u.push(A.x,A.y,A.z),x.set(Z,E,G).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-v),B.push(g++)}y.push(B)}for(let P=0;P<s;P++)for(let B=0;B<r;B++){let v=y[B][P],w=y[B+1][P],k=y[B+1][P+1],F=y[B][P+1];t>0&&(h.push(v,w,F),T+=3),e>0&&(h.push(w,k,F),T+=3)}c.addGroup(p,T,0),p+=T}function _(x){let A=g,T=new at,E=new C,P=0,B=x===!0?t:e,v=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let w=g;for(let k=0;k<=s;k++){let V=k/s*l+a,Z=Math.cos(V),G=Math.sin(V);E.x=B*G,E.y=m*v,E.z=B*Z,u.push(E.x,E.y,E.z),d.push(0,v,0),T.x=Z*.5+.5,T.y=G*.5*v+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){let F=A+k,V=w+k;x===!0?h.push(V,V+1,F):h.push(V+1,V,F),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zi=class i extends ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tc=class i extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let _=new C,x=new C,A=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],x),f(e[T+2],A),l(_,x,A,b)}function l(b,_,x,A){let T=A+1,E=[];for(let P=0;P<=T;P++){E[P]=[];let B=b.clone().lerp(x,P/T),v=_.clone().lerp(x,P/T),w=T-P;for(let k=0;k<=w;k++)k===0&&P===T?E[P][k]=B:E[P][k]=B.clone().lerp(v,k/w)}for(let P=0;P<T;P++)for(let B=0;B<2*(T-P)-1;B++){let v=Math.floor(B/2);B%2===0?(d(E[P][v+1]),d(E[P+1][v]),d(E[P][v])):(d(E[P][v+1]),d(E[P+1][v+1]),d(E[P+1][v]))}}function c(b){let _=new C;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(b),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let b=new C;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let x=m(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;o.push(x,1-A)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let _=o[b+0],x=o[b+2],A=o[b+4],T=Math.max(_,x,A),E=Math.min(_,x,A);T>.9&&E<.1&&(_<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,_){let x=b*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){let b=new C,_=new C,x=new C,A=new C,T=new at,E=new at,P=new at;for(let B=0,v=0;B<r.length;B+=9,v+=6){b.set(r[B+0],r[B+1],r[B+2]),_.set(r[B+3],r[B+4],r[B+5]),x.set(r[B+6],r[B+7],r[B+8]),T.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),A.copy(b).add(_).add(x).divideScalar(3);let w=m(A);y(T,v+0,b,w),y(E,v+2,_,w),y(P,v+4,x,w)}}function y(b,_,x,A){A<0&&b.x===1&&(o[_]=b.x-1),x.x===0&&x.z===0&&(o[_]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ji=class i extends Tc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ji=class i extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new at;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let b=p+m,_=b,x=b+n+1,A=b+n+2,T=b+1;a.push(_,x,T),a.push(x,A,T)}}this.setIndex(a),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pe=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let b=[],_=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+x,1-_),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let _=h[p][b+1],x=h[p][b],A=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&f.push(_,x,T),(p!==n-1||l<Math.PI)&&f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gn=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(y,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var $o=class i extends Ce{constructor(t=new Gs(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new at,h=new C,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function y(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),b(),p()}function m(_){h=t.getPointAt(_/e,h);let x=o.normals[_],A=o.binormals[_];for(let T=0;T<=s;T++){let E=T/s*Math.PI*2,P=Math.sin(E),B=-Math.cos(E);l.x=B*x.x+P*A.x,l.y=B*x.y+P*A.y,l.z=B*x.z+P*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let x=1;x<=s;x++){let A=(s+1)*(_-1)+(x-1),T=(s+1)*_+(x-1),E=(s+1)*_+x,P=(s+1)*(_-1)+x;g.push(A,T,P),g.push(T,E,P)}}function b(){for(let _=0;_<=e;_++)for(let x=0;x<=s;x++)c.x=_/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Sc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var kn=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ac=class extends Vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bh:r=t,a=2*e-n;break;case zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:o=t,l=2*n-e;break;case zh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,b=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+b*o[c+A]+_*o[l+A]+x*o[u+A];return r}},Rc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Cc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yo(e,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yo(t.times,Array),values:yo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ac(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case wo:e=this.InterpolantFactoryMethodDiscrete;break;case Ql:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&jy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Na,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ql;var Qi=class extends Fn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=wo;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends Fn{};Pc.prototype.ValueTypeName="color";var Ic=class extends Fn{};Ic.prototype.ValueTypeName="number";var Lc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ri.slerpFlat(r,0,o,c-a,o,c,l);return r}},Yo=class extends Fn{InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Fn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=wo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends Fn{};Uc.prototype.ValueTypeName="vector";var Dc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Qy=new Dc,Nc=class{constructor(t){this.manager=t!==void 0?t:Qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ln=class extends Ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fl=new xe,Nu=new C,ku=new C,Cr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kc=class extends Cr{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ks*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Zo=class extends Ws{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Fu=new xe,gr=new C,pl=new C,Fc=class extends Cr{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),pl.copy(n.position),pl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pl),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}},Wn=class extends Ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Oc=class extends Cr{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},An=class extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Oc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Qc="\\[\\]\\.:\\/",tv=new RegExp("["+Qc+"]","g"),th="[^"+Qc+"]",ev="[^"+Qc.replace("\\.","")+"]",nv=/((?:WC+[\/:])*)/.source.replace("WC",th),iv=/(WCOD+)?/.source.replace("WCOD",ev),sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),ov=new RegExp("^"+nv+iv+sv+rv+"$"),av=["material","materials","bones","map"],Bc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tv,"")}static parseTrackName(t){let e=ov.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);av.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Bc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);var ta=class extends zs{constructor(){super();let t=new Vt;t.deleteAttribute("uv");let e=new kn({side:Ne}),n=new kn,s=new Wn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new kt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new kt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new kt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new kt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new kt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new kt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new kt(t,Ks(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new kt(t,Ks(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new kt(t,Ks(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new kt(t,Ks(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new kt(t,Ks(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new kt(t,Ks(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ks(i){let t=new Xt;return t.color.setScalar(i),t}var eh=[["nose","neck"],["neck","leftShoulder"],["neck","rightShoulder"],["leftShoulder","leftElbow"],["leftElbow","leftWrist"],["rightShoulder","rightElbow"],["rightElbow","rightWrist"],["neck","root"],["root","leftHip"],["root","rightHip"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["rightHip","rightKnee"],["rightKnee","rightAnkle"]],qs=class{constructor(t,e){this.joints=t,this.aspect=e}distance(t,e){return Math.hypot((t.x-e.x)*this.aspect,t.y-e.y)}get hipCenter(){let t=this.joints;return t.root?t.root:t.leftHip&&t.rightHip?{x:(t.leftHip.x+t.rightHip.x)/2,y:(t.leftHip.y+t.rightHip.y)/2}:null}get neckPoint(){let t=this.joints;return t.neck?t.neck:t.leftShoulder&&t.rightShoulder?{x:(t.leftShoulder.x+t.rightShoulder.x)/2,y:(t.leftShoulder.y+t.rightShoulder.y)/2}:null}get torsoLength(){let t=this.neckPoint,e=this.hipCenter;return t&&e?this.distance(t,e):null}},cn={noPerson:{key:"noPerson",good:!1,message:"Can't see anyone"},tooClose:{key:"tooClose",good:!1,message:"Too close \u2014 step back"},tooFar:{key:"tooFar",good:!1,message:"Too far \u2014 come closer"},goLeft:{key:"goLeft",good:!1,message:"Move a little left"},goRight:{key:"goRight",good:!1,message:"Move a little right"},good:{key:"good",good:!0,message:"Perfect!"}};function ea(){return{pose:null,status:cn.noPerson,bodyX:.5,lateral:0,isCalibrated:!1,jumpCount:0,isAirborne:!1,isCrouching:!1,leftHand:null,rightHand:null,handsUpRaised:!1,oneHandRaised:!1,handsUpProgress:0,confirmProgress:0,timestamp:0,keyboardActive:!1}}var Ir=class i{constructor(t=1.2,e=.5,n=1){this.minCutoff=t,this.beta=e,this.dCutoff=n,this.reset()}static alpha(t,e){return 1/(1+1/(2*Math.PI*t)/e)}filter(t,e){if(this.value===null||this.last===null||e<=this.last)return this.value=t,this.last=e,t;let n=Math.min(e-this.last,.5);this.last=e;let s=(t-this.value)/n;this.deriv+=i.alpha(this.dCutoff,n)*(s-this.deriv);let r=this.minCutoff+this.beta*Math.abs(this.deriv);return this.value+=i.alpha(r,n)*(t-this.value),this.value}reset(){this.value=null,this.last=null,this.deriv=0}};var Lr=class{constructor(t=.2){this.grace=t,this.since=null,this.lastActive=null,this.armed=!0}update(t,e,n){return t?(this.lastActive=n,this.since===null&&(this.since=n),this.armed&&n-this.since>=e?(this.armed=!1,!0):!1):this.lastActive===null?(this.since=null,this.armed=!0,!1):(n-this.lastActive<=this.grace||(this.since=null,!this.armed&&n-this.lastActive>.25&&(this.armed=!0)),!1)}progress(t,e){return!this.armed||this.since===null||this.lastActive===null||e-this.lastActive>this.grace?0:Math.min(1,(this.lastActive-this.since)/t)}reset(t){this.since=null,this.armed=!t,t&&this.lastActive===null&&(this.lastActive=-100)}},na=class i{constructor(){this.handsUpHold=1,this.thumbsUpHold=.4,this.raiseHandHold=.7,this.lastPose=null,this.lastPoseTime=-100,this.jointSeen={},this.bridgeTime=.35,this.centerXFilter=new Ir(1,.7),this.handFilters=[0,1,2,3].map(()=>new Ir(1.6,1.5)),this.handLastSeen=[-100,-100],this.lastHands=[null,null],this.calibratedCenterX=null,this.refTorso=null,this.calibrationRequested=!1,this.needsCalibration=!0,this.goodSince=null,this.absentSince=null,this.lastLateral=0,this.baseCenterY=null,this.baseHipY=null,this.baseNeckY=null,this.baseAnkleY=null,this.lastCenterY=null,this.lastTime=null,this.airborne=!1,this.airborneSince=0,this.landedAt=-100,this.jumpCount=0,this.crouching=!1,this.status=cn.noPerson,this.candidate=cn.noPerson,this.candidateFrames=0,this.swipeHistory=[[],[]],this.swipeCooldownUntil=0,this.handsUp=new Lr(.2),this.thumbs=new Lr(.25),this.raiseHand=new Lr(.2)}requestCalibration(){this.calibrationRequested=!0}resetGestures(){this.handsUp.reset(!0),this.thumbs.reset(!0),this.raiseHand.reset(!0)}process(t,e,n){let s=this.bridge(t,n),r=ea();r.timestamp=n,r.pose=s,r.status=this.debounced(i.evaluateStatus(s));let o=[],a=Math.min(Math.max(n-(this.lastTime??n-1/30),1/240),.25);this.lastTime=n;let l=s?.neckPoint,c=s?.hipCenter;if(s&&l&&c&&s.distance(l,c)>.02){let d=s.distance(l,c);this.absentSince!==null&&n-this.absentSince>1.5&&(this.needsCalibration=!0),this.absentSince=null;let f=this.centerXFilter.filter((l.x+c.x)/2,n);r.bodyX=f,r.status.good?this.goodSince===null&&(this.goodSince=n):this.goodSince=null,(this.calibrationRequested||this.refTorso===null||this.needsCalibration&&this.goodSince!==null&&n-this.goodSince>.6)&&this.calibrate(f,l,c,d,s);let g=this.refTorso??d;r.isCalibrated=!this.needsCalibration,this.lastLateral=(f-(this.calibratedCenterX??.5))*s.aspect/g,r.lateral=this.lastLateral,this.updateJumpAndCrouch(s,l,c,g,d,n,a),r.jumpCount=this.jumpCount,r.isAirborne=this.airborne,r.isCrouching=this.crouching,r.leftHand=this.hand(0,s.joints.leftWrist,l,c,g,s.aspect,n),r.rightHand=this.hand(1,s.joints.rightWrist,l,c,g,s.aspect,n);let y=this.detectSwipe(s,l,c,g,n);y&&o.push(y);let m=s.joints.nose?.y??l.y+g*.35,p=s.joints.leftWrist,b=s.joints.rightWrist;if(p&&b){let _=p.y>m+g*.05,x=b.y>m+g*.05;r.handsUpRaised=_&&x,r.oneHandRaised=_&&b.y<l.y-g*.1||x&&p.y<l.y-g*.1}}else this.absentSince===null&&(this.absentSince=n),this.goodSince=null,this.lastCenterY=null,this.airborne=!1,this.crouching=!1,r.jumpCount=this.jumpCount,r.bodyX=this.centerXFilter.filter(.5,n),r.lateral=this.lastLateral,r.isCalibrated=!this.needsCalibration,this.lastHands=[null,null],this.handFilters.forEach(d=>d.reset());this.handsUp.update(r.handsUpRaised,this.handsUpHold,n)&&o.push("back");let h=this.thumbs.update(e&&!r.handsUpRaised,this.thumbsUpHold,n),u=this.raiseHand.update(r.oneHandRaised,this.raiseHandHold,n);return(h||u)&&(o.push("confirm"),this.thumbs.reset(!0),this.raiseHand.reset(!0)),r.handsUpProgress=this.handsUp.progress(this.handsUpHold,n),r.confirmProgress=Math.max(this.thumbs.progress(this.thumbsUpHold,n),this.raiseHand.progress(this.raiseHandHold,n)),{snap:r,events:o}}bridge(t,e){if(!t)return e-this.lastPoseTime<this.bridgeTime?this.lastPose:null;for(let[n,s]of Object.entries(this.jointSeen))!t.joints[n]&&e-s.t<this.bridgeTime&&(t.joints[n]=s.p);for(let[n,s]of Object.entries(t.joints))this.jointSeen[n]={p:s,t:e};return this.lastPose=t,this.lastPoseTime=e,t}calibrate(t,e,n,s,r){this.calibratedCenterX=t,this.refTorso=s,this.baseCenterY=(e.y+n.y)/2,this.baseHipY=n.y,this.baseNeckY=e.y,this.baseAnkleY=i.ankleY(r),this.crouching=!1,this.airborne=!1,this.calibrationRequested=!1,this.needsCalibration=!1}static ankleY(t){let e=t.joints.leftAnkle,n=t.joints.rightAnkle;return e&&n?Math.min(e.y,n.y):null}updateJumpAndCrouch(t,e,n,s,r,o,a){let l=(e.y+n.y)/2;if(this.baseCenterY===null)return;let c=(l-this.baseCenterY)/s,h=(n.y-this.baseHipY)/s,u=this.lastCenterY===null?0:(l-this.lastCenterY)/s/a;this.lastCenterY=l;let d=i.ankleY(t),f=d!==null&&this.baseAnkleY!==null?(d-this.baseAnkleY)/s:null;this.airborne?(c<.07||o-this.airborneSince>1.3)&&(this.airborne=!1,this.landedAt=o):o-this.landedAt>.25&&c>.17&&h>.12&&u>.9&&(f===null||f>.05||c>.3)&&(this.airborne=!0,this.airborneSince=o,this.jumpCount+=1,this.crouching=!1);let g=(this.baseHipY-n.y)/s,y=(this.baseNeckY-e.y)/s;if(this.airborne||(!this.crouching&&(g>.15&&y>.22||y>.5)?this.crouching=!0:this.crouching&&y<.14&&g<.1&&(this.crouching=!1)),this.airborne||this.crouching)return;let m=Math.abs(c)<.08&&Math.abs(u)<.5,p=1-Math.exp(-a/(m?.6:10));this.baseCenterY+=(l-this.baseCenterY)*p,this.baseHipY+=(n.y-this.baseHipY)*p,this.baseNeckY+=(e.y-this.baseNeckY)*p,d!==null&&(this.baseAnkleY=this.baseAnkleY===null?d:this.baseAnkleY+(d-this.baseAnkleY)*p),m&&this.refTorso!==null&&(this.refTorso+=(r-this.refTorso)*p)}hand(t,e,n,s,r,o,a){if(!e)return a-this.handLastSeen[t]<.25?this.lastHands[t]:(this.handFilters[t*2].reset(),this.handFilters[t*2+1].reset(),this.lastHands[t]=null,null);let l=Math.max(-1.3,Math.min(1.3,(e.x-n.x)*o/(r*1.7))),c=Math.max(-.4,Math.min(1.2,(e.y-s.y)/(r*2.3))),h={x:this.handFilters[t*2].filter(l,a),y:this.handFilters[t*2+1].filter(c,a)};return this.handLastSeen[t]=a,this.lastHands[t]=h,h}detectSwipe(t,e,n,s,r){let a=[0,0];if(["leftWrist","rightWrist"].forEach((l,c)=>{let h=t.joints[l];if(!h){this.swipeHistory[c]=[];return}let u=(h.x-e.x)*t.aspect/s,d=(h.y-n.y)/s,f=this.swipeHistory[c];for(f.push({t:r,x:u,y:d});f.length&&r-f[0].t>.4;)f.shift();let g=c===0?-1:1,y=f.reduce((m,p)=>p.x*g<m.x*g?p:m,f[0]);a[c]=(u-y.x)*g}),r<this.swipeCooldownUntil)return null;for(let l=0;l<2;l++){let c=this.swipeHistory[l];if(!c.length)continue;let h=c[c.length-1],u=l===0?-1:1,d=c.reduce((y,m)=>m.x*u<y.x*u?m:y,c[0]),f=a[l],g=f/Math.max(h.t-d.t,1/60);if(f>.85&&g>2&&h.x*u>.7&&d.x*u<.5&&h.y>.25&&h.y<2&&!(a[1-l]>.5))return this.swipeCooldownUntil=r+.6,this.swipeHistory=[[],[]],l===0?"swipeLeft":"swipeRight"}return null}static evaluateStatus(t){if(!t||!t.neckPoint||!(t.joints.leftShoulder||t.joints.rightShoulder))return cn.noPerson;let e=t.neckPoint,n=t.hipCenter;if(!n)return cn.tooClose;let s=t.distance(e,n);if(s>.4||n.y<.06)return cn.tooClose;if(t.joints.nose&&t.joints.nose.y>.97)return cn.tooClose;if(s<.1)return cn.tooFar;let r=(e.x+n.x)/2;return r<.15?cn.goRight:r>.85?cn.goLeft:cn.good}debounced(t){return t===this.status?(this.candidateFrames=0,this.status):(t===this.candidate?this.candidateFrames+=1:(this.candidate=t,this.candidateFrames=1),this.candidateFrames>=6&&(this.status=t,this.candidateFrames=0),this.status)}};var es=class{constructor(){this.interpreter=new na,this.snapshot=ea(),this.listeners=new Set,this.snapshotListeners=new Set,this.kb={lane:null,laneUntil:0,jumps:0,crouchUntil:0,airborneUntil:0,activeUntil:0},this.simulateHands=!1}set handsUpHold(t){this.interpreter.handsUpHold=t}onEvent(t){return this.listeners.add(t),()=>this.listeners.delete(t)}onSnapshot(t){return this.snapshotListeners.add(t),()=>this.snapshotListeners.delete(t)}onPeople(t){(this.peopleListeners??=new Set).add(t)}processPeople(t,e){for(let n of this.peopleListeners??[])n(t,e)}calibrate(){this.interpreter.requestCalibration()}resetGestures(){this.interpreter.resetGestures()}processPose(t,e,n){let{snap:s,events:r}=this.interpreter.process(t,e,n);this.snapshot=s;for(let o of this.snapshotListeners)o(s);for(let o of r)for(let a of this.listeners)a(o)}emit(t){for(let e of this.listeners)e(t)}get latest(){let t={...this.snapshot},e=performance.now()/1e3,n=this.kb;return t.jumpCount+=n.jumps,e<n.activeUntil&&(t.keyboardActive=!0),e<n.laneUntil&&n.lane!==null&&(t.lateral=n.lane,t.bodyX=.5+n.lane*.25),e<n.crouchUntil&&(t.isCrouching=!0),e<n.airborneUntil&&(t.isAirborne=!0),this.simulateHands&&(t.leftHand={x:-.55+.25*Math.sin(e*2.1),y:.62+.2*Math.cos(e*1.7)},t.rightHand={x:.5+.3*Math.cos(e*2.6),y:.55+.25*Math.sin(e*3.1)}),t}keyboardStep(t){let e=performance.now()/1e3,n=this.kb,s=e<n.laneUntil&&n.lane!==null?n.lane:0;n.lane=Math.max(-1,Math.min(1,s+t)),n.laneUntil=e+30,n.activeUntil=e+6}keyboardJump(){let t=performance.now()/1e3;this.kb.jumps+=1,this.kb.airborneUntil=t+.5,this.kb.activeUntil=t+6}keyboardCrouch(){let t=performance.now()/1e3;this.kb.crouchUntil=t+.7,this.kb.activeUntil=t+6}};var lv={nose:0,leftShoulder:11,rightShoulder:12,leftElbow:13,rightElbow:14,leftWrist:15,rightWrist:16,leftHip:23,rightHip:24,leftKnee:25,rightKnee:26,leftAnkle:27,rightAnkle:28},ia=class{constructor(t,e){this.hub=t,this.assetBase=e,this.video=document.createElement("video"),this.video.playsInline=!0,this.video.muted=!0,this.video.autoplay=!0,this.stream=null,this.landmarker=null,this.running=!1,this.lastVideoTime=-1,this.lastCenter=null,this.state="idle",this.onState=()=>{}}setState(t,e){this.state=t,this.onState(t,e)}async listDevices(){return(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="videoinput")}async start(t){this.setState("starting");try{this.stream?.getTracks().forEach(e=>e.stop()),this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:t?{deviceId:{exact:t},width:{ideal:1280},height:{ideal:720}}:{facingMode:"user",width:{ideal:1280},height:{ideal:720}}})}catch(e){this.setState(e?.name==="NotAllowedError"?"denied":"error",e?.message);return}if(this.video.srcObject=this.stream,await this.video.play().catch(()=>{}),!this.landmarker)try{let{FilesetResolver:e,PoseLandmarker:n}=await import("./chunks/vision_bundle-JHT6HPDM.js"),s=await e.forVisionTasks(this.assetBase+"mediapipe/wasm"),r=o=>({baseOptions:{modelAssetPath:this.assetBase+"mediapipe/pose_landmarker_lite.task",delegate:o},runningMode:"VIDEO",numPoses:2,minPoseDetectionConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await n.createFromOptions(s,r("GPU"))}catch{this.landmarker=await n.createFromOptions(s,r("CPU"))}}catch(e){this.setState("error","Couldn't load body tracking: "+(e?.message??e));return}this.running=!0,this.setState("running"),this.loop()}get aspect(){return this.video.videoWidth&&this.video.videoHeight?this.video.videoWidth/this.video.videoHeight:16/9}loop(){if(!this.running)return;let t=()=>{if(!this.running)return;let e=this.video;if(e.readyState>=2&&e.currentTime!==this.lastVideoTime){this.lastVideoTime=e.currentTime;let n=performance.now(),s;try{s=this.landmarker.detectForVideo(e,n)}catch{s=null}this.hub.processPose(this.pickPose(s),!1,n/1e3),this.hub.processPeople(this.people,n/1e3)}e.requestVideoFrameCallback?e.requestVideoFrameCallback(t):requestAnimationFrame(t)};t()}pickPose(t){let e=t?.landmarks??[],n=null,s=[];for(let r of e){let o={};for(let[h,u]of Object.entries(lv)){let d=r[u];!d||(d.visibility??1)<.5||(o[h]={x:1-d.x,y:1-d.y})}if(o.leftShoulder&&o.rightShoulder&&(o.neck={x:(o.leftShoulder.x+o.rightShoulder.x)/2,y:(o.leftShoulder.y+o.rightShoulder.y)/2}),o.leftHip&&o.rightHip&&(o.root={x:(o.leftHip.x+o.rightHip.x)/2,y:(o.leftHip.y+o.rightHip.y)/2}),Object.keys(o).length<4)continue;let a=new qs(o,this.aspect),l=a.torsoLength??.01;s.push({pose:a,size:l});let c=a.neckPoint??Object.values(o)[0];if(this.lastCenter){let h=Math.hypot((c.x-this.lastCenter.x)*a.aspect,c.y-this.lastCenter.y);l*=Math.max(.35,1-h*2.5)}(!n||l>n.score)&&(n={pose:a,score:l,center:c})}return this.lastCenter=n?.center??null,this.people=s.sort((r,o)=>o.size-r.size).slice(0,2).map(r=>r.pose),n?.pose??null}stop(){this.running=!1,this.stream?.getTracks().forEach(t=>t.stop())}};function cd(i){window.MoveCamNative=window.MoveCamNative||{},window.MoveCamNative.pushPose=t=>{if(!t||!t.joints){i.processPose(null,!!t?.thumbsUp,t?.t??performance.now()/1e3),i.processPeople([],t?.t??performance.now()/1e3);return}let e={};for(let[s,r]of Object.entries(t.joints))e[s]={x:r[0],y:r[1]};i.processPose(new qs(e,t.aspect||16/9),!!t.thumbsUp,t.t);let n=(t.people??[]).map(s=>{let r={};for(let[o,a]of Object.entries(s))r[o]={x:a[0],y:a[1]};return new qs(r,t.aspect||16/9)});i.processPeople(n,t.t)}}var hd=()=>!!window.webkit?.messageHandlers?.movecam;function Xn(i){try{window.webkit?.messageHandlers?.movecam?.postMessage(i)}catch{}}var cv=i=>i.neckPoint??i.joints.root??Object.values(i.joints)[0],sa=class{constructor(){this.hubs=[new es,new es],this.last=[null,null],this.active=!1}process(t,e){if(!this.active)return;let n=t.slice(0,2).map(r=>({pose:r,c:cv(r)})).sort((r,o)=>r.c.x-o.c.x),s=[null,null];if(n.length===2)s=[n[0],n[1]];else if(n.length===1){let r=n[0],o=this.last.map(l=>l?Math.abs(l.x-r.c.x):1/0),a=o[0]===1/0&&o[1]===1/0?r.c.x<.5?0:1:o[0]<=o[1]?0:1;s[a]=r}s.forEach((r,o)=>{r&&(this.last[o]=r.c),this.hubs[o].processPose(r?.pose??null,!1,e)})}start(){this.active=!0;for(let t of this.hubs)t.resetGestures(),t.calibrate()}stop(){this.active=!1,this.last=[null,null]}};var hv=["coin","jump","hit","slice","splat","explosion","whistle","kick","save","cheer","groan","punch","beep","go","select","confirm","pause","gameover","gate","whoosh","combo"],ra=class{constructor(t){this.base=t,this.ctx=null,this.buffers=new Map,this.music=new Map,this.current=null,this.ducked=!1,this.settings={sound:Me("sound",!0),music:Me("music",!0),volume:Me("musicVolume",.6)}}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.applyVolumes(),hv.forEach(e=>this.loadSound(e))}this.ctx.state==="suspended"&&this.ctx.resume()}async fetchBuffer(t){let n=await(await fetch(t)).arrayBuffer();return await this.ctx.decodeAudioData(n)}async loadSound(t){try{this.buffers.set(t,await this.fetchBuffer(`${this.base}sounds/${t}.wav`))}catch{}}play(t,e=1,n=1){if(!this.ctx||!this.settings.sound)return;let s=this.buffers.get(t);if(!s)return;let r=this.ctx.createBufferSource();r.buffer=s,r.playbackRate.value=n;let o=this.ctx.createGain();o.gain.value=e,r.connect(o).connect(this.sfxGain),r.start()}async playMusic(t){if(this.ducked=!1,!this.ctx)return;if(this.current?.name===t){this.applyVolumes();return}this.wanted=t;let e=this.music.get(t);if(!e){try{e=await this.fetchBuffer(`${this.base}music/music-${t}.m4a`)}catch{try{e=await this.fetchBuffer(`${this.base}music/music-${t}.ogg`)}catch{return}}if(this.music.set(t,e),this.music.size>3){for(let o of this.music.keys())if(o!=="menu"&&o!==t){this.music.delete(o);break}}}if(this.wanted!==t)return;let n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;let s=this.ctx.createGain();s.gain.value=0,n.connect(s).connect(this.musicGain),n.start();let r=this.ctx.currentTime;if(s.gain.linearRampToValueAtTime(1,r+1.2),this.current){let o=this.current;o.gain.gain.cancelScheduledValues(r),o.gain.gain.setValueAtTime(o.gain.gain.value,r),o.gain.gain.linearRampToValueAtTime(0,r+1.2),o.source.stop(r+1.3)}this.current={name:t,source:n,gain:s},this.applyVolumes()}duck(t){this.ducked=t,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.settings.music?this.settings.volume*.75*(this.ducked?.3:1):0;this.musicGain.gain.cancelScheduledValues(t),this.musicGain.gain.setValueAtTime(this.musicGain.gain.value,t),this.musicGain.gain.linearRampToValueAtTime(e,t+.4),this.sfxGain.gain.value=this.settings.sound?1:0}set(t,e){this.settings[t]=e,_e(t==="volume"?"musicVolume":t,e),this.applyVolumes()}};function Me(i,t){try{let e=localStorage.getItem("movecam."+i);return e===null?t:JSON.parse(e)}catch{return t}}function _e(i,t){try{localStorage.setItem("movecam."+i,JSON.stringify(t))}catch{}}var $s=class{constructor(t,{player:e=null}={}){this.root=t,this.player=e,this.state={score:0,lives:null,maxLives:3,time:null,stat:null},this.el=document.createElement("div"),this.banner=document.createElement("div"),e?(this.el.className=`hud-duo p${e}`,this.banner.className=`banner-duo p${e}`):(this.el.id="hud",this.banner.id="banner"),this.banner.style.opacity="0",t.append(this.el,this.banner),this.token=0,this.render()}set(t){Object.assign(this.state,t),this.render()}reset(){this.state={score:0,lives:null,maxLives:3,time:null,stat:null},this.banner.style.opacity="0",this.render()}flash(t,e=1.2){let n=++this.token;this.banner.textContent=t,this.banner.style.opacity="1",setTimeout(()=>{this.token===n&&(this.banner.style.opacity="0")},e*1e3)}show(t){this.el.classList.toggle("hidden",!t),t||(this.banner.style.opacity="0")}render(){let t=this.state,e=[];if(this.player&&e.push(`<div class="stat who"><div class="label">PLAYER</div><div class="value">${this.player}</div></div>`),e.push(`<div class="stat"><div class="label">SCORE</div><div class="value">${t.score.toLocaleString()}</div></div>`),t.lives!==null){let n="";for(let s=0;s<t.maxLives;s++)n+=`<span class="${s<t.lives?"":"off"}">\u2665</span>`;e.push(`<div class="stat"><div class="label">LIVES</div><div class="hearts">${n}</div></div>`)}if(t.time!==null){let n=Math.floor(t.time/60),s=String(t.time%60).padStart(2,"0");e.push(`<div class="stat"><div class="label">TIME</div><div class="value" style="color:${t.time<=10?"var(--bad)":"#fff"}">${n}:${s}</div></div>`)}if(t.stat){let[n,...s]=t.stat.split(" ");e.push(`<div class="stat"><div class="label">${n.toUpperCase()}</div><div class="value">${s.join(" ")}</div></div>`)}this.el.innerHTML=e.join("")}};var Ye=class{constructor(t){this.ctx=t,this.hub=t.hub,this.audio=t.audio,this.hud=t.hud,this.scene=new zs,this.camera=new Xe(60,t.aspect(),.1,1200),this.elapsed=0,this.finished=!1,this.disposables=[]}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}idle(t){}start(){}update(t,e){}finish(t,e){this.finished||(this.finished=!0,this.audio.play("gameover"),setTimeout(()=>this.ctx.onFinished({score:Math.round(t),detail:e}),1e3))}dispose(){this.scene.traverse(t=>{t.geometry?.dispose?.();let e=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let n of e){for(let s of Object.values(n))s?.isTexture&&s.dispose();n.dispose()}})}};function ud(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let b=0,_=a.length;b<_;b++){let x=a[b],A=i.attributes[x];l[x]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((E,P)=>{let B=new E.array.constructor(E.count*E.itemSize);c[x][P]=new E.constructor(B,E.itemSize,E.normalized)}))}let f=t*.5,g=Math.log10(1/t),y=Math.pow(10,g),m=f*y;for(let b=0;b<r;b++){let _=n?n.getX(b):b,x="";for(let A=0,T=a.length;A<T;A++){let E=a[A],P=i.getAttribute(E),B=P.itemSize;for(let v=0;v<B;v++)x+=`${~~(P[u[v]](_)*y+m)},`}if(x in e)h.push(e[x]);else{for(let A=0,T=a.length;A<T;A++){let E=a[A],P=i.getAttribute(E),B=i.morphAttributes[E],v=P.itemSize,w=l[E],k=c[E];for(let F=0;F<v;F++){let V=u[F],Z=d[F];if(w[Z](o,P[V](_)),B)for(let G=0,tt=B.length;G<tt;G++)k[G][Z](o,B[G][V](_))}}e[x]=o,h.push(o),o++}}let p=i.clone();for(let b in i.attributes){let _=l[b];if(p.setAttribute(b,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),b in c)for(let x=0;x<c[b].length;x++){let A=c[b][x];p.morphAttributes[b][x]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}function en(i=1){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var st=(i,t)=>i+Math.random()*(t-i),yn=i=>i[Math.floor(Math.random()*i.length)],Te=(i,t,e)=>Math.max(t,Math.min(e,i)),vn=(i,t,e)=>i+(t-i)*e,Je=(i,t,e,n)=>vn(i,t,1-Math.exp(-e*n));function uv(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function dv(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),o=i-n,a=t-s,l=e-r,c=o*o*(3-2*o),h=a*a*(3-2*a),u=l*l*(3-2*l),d=0;for(let f=0;f<=1;f++)for(let g=0;g<=1;g++)for(let y=0;y<=1;y++){let m=(f?c:1-c)*(g?h:1-h)*(y?u:1-u);d+=m*uv(n+f,s+g,r+y)}return d*2-1}function Ur(i,t,e,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*dv(i*o,t*o,e*o),a+=r,r*=.5,o*=2.03;return s/a}function fv(i){let t=new Ji(1,i);return t.deleteAttribute("normal"),t.deleteAttribute("uv"),ud(t)}function pv(i,t){let e=i.attributes.position,n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++)n[s*2]=(e.getX(s)+e.getZ(s)*.7)*t,n[s*2+1]=e.getY(s)*t;i.setAttribute("uv",new Re(n,2))}function de(i,t,e,{repeat:n=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t;let o=r.getContext("2d");e(o,i,t);let a=new Hs(r);return s&&(a.colorSpace=$e),a.anisotropy=4,n&&(a.wrapS=a.wrapT=qi,a.repeat.set(n[0],n[1])),a}function Pi(i,t,{size:e=512,count:n=3e3,radius:s=6,seed:r=1,repeat:o=null,alpha:a=[.15,.5]}={}){let l=en(r);return de(e,e,(c,h,u)=>{c.fillStyle=i,c.fillRect(0,0,h,u);for(let d=0;d<n;d++){c.globalAlpha=a[0]+l()*(a[1]-a[0]),c.fillStyle=t[Math.floor(l()*t.length)];let f=(.4+l())*s,g=l()*h,y=l()*u;for(let m of[-h,0,h])for(let p of[-u,0,u])c.beginPath(),c.arc(g+m,y+p,f,0,Math.PI*2),c.fill()}c.globalAlpha=1},{repeat:o})}function ns(i,t,e=8,{repeat:n=null}={}){return de(256,64,(s,r,o)=>{s.fillStyle=i,s.fillRect(0,0,r,o),s.fillStyle=t;let a=r/e;for(let l=-2;l<e+2;l+=2)s.beginPath(),s.moveTo(l*a,0),s.lineTo(l*a+a,0),s.lineTo(l*a+a+o,o),s.lineTo(l*a+o,o),s.closePath(),s.fill()},{repeat:n})}function Ys(i="#ffffff"){return de(64,64,(t,e)=>{let n=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,i),n.addColorStop(.35,i),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,e,e)})}function it(i,{rough:t=.6,metal:e=0,map:n=null,emissive:s=null,emissiveIntensity:r=1,transparent:o=!1,opacity:a=1,side:l}={}){let c=new kn({color:i,roughness:t,metalness:e,map:n,transparent:o,opacity:a});return s&&(c.emissive=new ft(s),c.emissiveIntensity=r),l&&(c.side=l),c}function K(i,t,{x:e=0,y:n=0,z:s=0,cast:r=!0,receive:o=!1}={}){let a=new kt(i,t);return a.position.set(e,n,s),a.castShadow=r,a.receiveShadow=o,a}function Zs(i,t=!0,e=!1){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function Js({top:i,horizon:t,bottom:e,sunDir:n=null,sunColor:s="#fff6d8",sunSize:r=.04,radius:o=900}){let a={top:{value:new ft(i)},horizon:{value:new ft(t)},bottom:{value:new ft(e)},sunDir:{value:(n??new C(0,-1,0)).clone().normalize()},sunColor:{value:new ft(s)},sunSize:{value:r}},l=new En({uniforms:a,side:Ne,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunSize; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 c = h > 0.0 ? mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(horizon, bottom, pow(clamp(-h, 0.0, 1.0), 0.4));
        float d = max(dot(normalize(vDir), sunDir), 0.0);
        c += sunColor * (pow(d, 900.0 * (0.04 / sunSize)) * 2.5 + pow(d, 12.0) * 0.35);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),c=new kt(new pe(o,32,16),l);return c.renderOrder=-1,c}function oa(i,{sun:t="#fff1d6",sunIntensity:e=2.6,sky:n="#bcd4ff",ground:s="#8a6a50",hemi:r=1.1,dir:o=[-.6,1,.5],shadowSize:a=40,shadowMap:l=2048}={}){let c=new ln(n,s,r);i.add(c);let h=new An(t,e);h.position.set(o[0]*40,o[1]*40,o[2]*40),h.castShadow=!0,h.shadow.mapSize.set(l,l);let u=a/2;return Object.assign(h.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:1,far:140}),h.shadow.bias=-4e-4,h.shadow.normalBias=.03,i.add(h,h.target),{hemi:c,sun:h}}function dd(i,t,e,n=[-24,40,20]){i.position.set(t+n[0],n[1],e+n[2]),i.target.position.set(t,0,e)}var we=class{constructor(t,{max:e=600,size:n=.25,texture:s=Ys(),additive:r=!1,gravity:o=-9.8}={}){this.max=e,this.gravity=o,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.cursor=0;let a=new Ce;a.setAttribute("position",new Re(this.pos,3)),a.setAttribute("color",new Re(this.col,3)),this.material=new Tr({size:n,map:s,vertexColors:!0,transparent:!0,depthWrite:!1,blending:r?Ps:wi,sizeAttenuation:!0,opacity:.95}),this.points=new Vo(a,this.material),this.points.frustumCulled=!1;for(let l=0;l<e;l++)this.pos[l*3+1]=-9999;t.add(this.points)}burst(t,{count:e=30,speed:n=4,spread:s=1,up:r=.5,color:o="#ffffff",life:a=.8,colorJitter:l=.15,drag:c=.5,dir:h=null}={}){let u=new ft(o);for(let d=0;d<e;d++){let f=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[f*3]=t.x,this.pos[f*3+1]=t.y,this.pos[f*3+2]=t.z;let g=(Math.random()*2-1)*s,y=(Math.random()*2-1)*s+r,m=(Math.random()*2-1)*s;h&&(g+=h.x,y+=h.y,m+=h.z);let p=Math.hypot(g,y,m)||1,b=n*(.4+Math.random()*.8);this.vel[f*3]=g/p*b,this.vel[f*3+1]=y/p*b,this.vel[f*3+2]=m/p*b;let _=1+(Math.random()*2-1)*l;this.col[f*3]=u.r*_,this.col[f*3+1]=u.g*_,this.col[f*3+2]=u.b*_,this.life[f]=this.maxLife[f]=a*(.6+Math.random()*.8),this.drag[f]=c}}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0)continue;if(this.life[e]-=t,this.life[e]<=0){this.pos[e*3+1]=-9999;continue}let n=Math.exp(-this.drag[e]*t);this.vel[e*3]*=n,this.vel[e*3+2]*=n,this.vel[e*3+1]=this.vel[e*3+1]*n+this.gravity*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.life[e]/this.maxLife[e]<.3&&(this.col[e*3]*=.92,this.col[e*3+1]*=.92,this.col[e*3+2]*=.92)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}shift(t){for(let e=0;e<this.max;e++)this.life[e]>0&&(this.pos[e*3+2]+=t)}};function aa(i="#b8643a",t=3){let e=Pi("#e2dbd4",["#a59b92","#f5f0ea","#c2b8ae"],{size:256,count:2200,radius:3,seed:t,repeat:[1,1],alpha:[.06,.22]}),n=it("#ffffff",{rough:.95,map:e});return n.vertexColors=!0,n.userData.base=new ft(i),n}function mv(i,t,e,n){let s=t.userData.base??new ft("#a0a0a0"),r=i.attributes.position,o=i.attributes.normal,a=new Float32Array(r.count*3),l=new ft,c=s.clone().multiplyScalar(.62),h=s.clone().lerp(new ft("#f3dcc2"),.35);for(let u=0;u<r.count;u++){let d=r.getX(u),f=r.getY(u),g=r.getZ(u),y=Ur(d*.9+e,f*.9,g*.9,3);if(n){let m=f+Ur(d*.3,f*.15,g*.3+e,2)*1.2,p=Math.pow(Math.sin(m*1.9)*.5+.5,2.2)*.7+(Math.sin(m*5.3+1.7)*.5+.5)*.3;l.copy(c).lerp(h,p*.85+.08+y*.1)}else l.copy(s).multiplyScalar(.85+y*.25);l.multiplyScalar(.78+.22*Math.max(0,o.getY(u)*.5+.5)),a[u*3]=l.r,a[u*3+1]=l.g,a[u*3+2]=l.b}i.setAttribute("color",new Re(a,3))}function js(i,t,{detail:e=3,rough:n=.32,flat:s=.75,mesa:r=null,bands:o=null,seed:a=Math.random()*100}={}){let l=fv(e),c=l.attributes.position;for(let u=0;u<c.count;u++){let d=c.getX(u),f=c.getY(u),g=c.getZ(u),y=1+n*Ur(d*1.4+a,f*1.4,g*1.4-a,4),m=f*s;r!==null&&m>r*s&&(m=r*s+(m-r*s)*.08),m<-.35*s&&(m=-.35*s),c.setXYZ(u,d*y*i,m*y*i,g*y*i)}l.computeVertexNormals(),pv(l,.25/Math.max(i*.25,.5)),mv(l,t,a,o??t.userData.base?.r>t.userData.base?.b);let h=K(l,t,{receive:!0});return h.rotation.y=Math.random()*Math.PI*2,h}function fd({radius:i=320,height:t=150,arc:e=Math.PI*.9,y:n=-12,seed:s=7,rock:r="#56606f",snow:o="#f3f6fb",haze:a="#c9d6e8",layers:l=3}={}){let u=de(2048,512,y=>{let m=new ft(a);for(let p=0;p<l;p++){let b=1-p/Math.max(l-1,1),_=(k,F)=>"#"+new ft(k).lerp(m,F).getHexString(),x=_(r,.25+b*.55),A=_(o,b*.35),T=_("#3a4250",.3+b*.55),E=512*(.1+p*.16),P=512*(.6+p*.12),B=new Float32Array(2048);for(let k=0;k<2048;k++){let F=k/2048*(6+p*3),V=1-Math.abs(Ur(F+s+p*10,p*3.1,.5,5));B[k]=E+(P-E)*(1-Math.pow(V,1.6))*.95}for(let k=0;k<2048;k++){let F=B[k];y.fillStyle=x,y.fillRect(k,F,1,512-F);let V=1-(F-E)/(P-E),Z=(P-F)*(.12+.45*V)*(.7+.45*Ur(k/30+s,p,1.3,3));y.fillStyle=A,y.fillRect(k,F,1,Math.max(0,Z));let G=(B[Math.min(2047,k+3)]-B[Math.max(0,k-3)])/6;G<-.15&&(y.globalAlpha=Math.min(.45,-G*.25),y.fillStyle=T,y.fillRect(k,F,1,512-F),y.globalAlpha=1)}let v=en(s*13+p);y.strokeStyle=T;for(let k=0;k<220;k++){let F=v()*2048,V=B[Math.floor(F)];y.globalAlpha=.08+v()*.12,y.lineWidth=.6+v()*1.4,y.beginPath(),y.moveTo(F,V+4+v()*14),y.lineTo(F+(v()-.5)*24,V+20+v()*(P-V)*.5),y.stroke()}y.globalAlpha=1;let w=y.createLinearGradient(0,P-40,0,512);w.addColorStop(0,"#"+m.getHexString()+"00"),w.addColorStop(1,"#"+m.getHexString()+"ee"),y.fillStyle=w,y.fillRect(0,P-40,2048,512-P+40)}});u.wrapS=ei;let d=new ee(i,i,t,96,1,!0,Math.PI-e/2,e),f=new Xt({map:u,side:Ne,fog:!1,transparent:!0,depthWrite:!1}),g=new kt(d,f);return g.position.y=n+t/2,g.renderOrder=-1,g}function nh(i=3){let t=new Rt,e=it("#3d7334",{rough:.7}),n=it("#2f5c28",{rough:.8});t.add(K(new Ge(.24,i-.5,6,12),e,{y:i/2}));for(let s of[-1,1]){if(s===-1&&Math.random()<.4)continue;let r=i*st(.3,.5),o=i*st(.3,.45),a=K(new Ge(.15,.4,4,10),n,{x:s*.35,y:r});a.rotation.z=Math.PI/2,t.add(a,K(new Ge(.15,o,4,10),e,{x:s*.6,y:r+o/2}))}return Zs(t)}function ih(i=6,t=!1){let e=new Rt,n=it("#4a2f1c",{rough:.9}),s=it(new ft().setHSL(.36,.45,st(.16,.22)),{rough:.85}),r=it("#f4f8ff",{rough:.5});e.add(K(new ee(i*.04,i*.06,i*.3,8),n,{y:i*.15}));for(let o=0;o<4;o++){let a=i*(.34-.07*o),l=i*.36,c=i*.22+o*i*.16+l/2;e.add(K(new Zi(a,l,10),s,{y:c})),t&&e.add(K(new Zi(a*.62,l*.42,10),r,{y:c+l*.3}))}return Zs(e)}function pd(){let i=it("#ffc63a",{rough:.22,metal:1,emissive:"#5a3a00",emissiveIntensity:.6}),t=new Rt,e=K(new ee(.34,.34,.08,28),i);e.rotation.x=Math.PI/2;let n=K(new gn(.34,.04,8,28),i);return t.add(e,n),t}var Ze=class{constructor(){this.amount=0}kick(t){this.amount=Math.max(this.amount,t)}apply(t,e){this.amount<=.001||(t.position.x+=(Math.random()*2-1)*this.amount,t.position.y+=(Math.random()*2-1)*this.amount,this.amount*=Math.exp(-e*9))}};var ss=.95,nn=class{constructor({shirt:t="#1e6ff2",accent:e="#ffffff",pants:n="#232323",skin:s="#d9a67f",hair:r="#2e1a0e",shoes:o="#ff5a33",gloves:a=null,number:l=null}={}){let c={shirt:it(t,{rough:.55}),accent:it(e,{rough:.5}),pants:it(n,{rough:.75}),skin:it(s,{rough:.5}),hair:it(r,{rough:.85}),shoes:it(o,{rough:.35}),sole:it("#f2f2f2",{rough:.6}),eye:it("#151515",{rough:.3}),glove:a?it(a,{rough:.3}):null};if(l!==null){let y=document.createElement("canvas");y.width=y.height=128;let m=y.getContext("2d");m.fillStyle=t,m.fillRect(0,0,128,128),m.fillStyle=e,m.font="bold 84px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText(String(l),64,70);let p=new Hs(y);p.colorSpace=$e,c.back=it("#ffffff",{rough:.55,map:p})}this.root=new Rt,this.hips=new Rt,this.hips.position.y=ss,this.root.add(this.hips);let h=K(new Ge(.15,.18,6,12),c.pants,{y:.02});h.rotation.z=Math.PI/2,h.scale.set(1,1,.8),this.hips.add(h),this.chest=new Rt,this.chest.position.y=.1,this.hips.add(this.chest);let u=K(new Ge(.2,.34,8,16),c.shirt,{y:.26});u.scale.set(1.12,1,.72),this.chest.add(u);let d=K(new ee(.206,.206,.06,20),c.accent,{y:.2});if(d.scale.set(1.12,1,.73),this.chest.add(d),c.back){let y=K(new Gt(.24,.24),c.back,{y:.32,z:.146});this.chest.add(y)}this.chest.add(K(new ee(.055,.06,.1,10),c.skin,{y:.56})),this.head=new Rt,this.head.position.y=.71,this.chest.add(this.head);let f=K(new pe(.125,20,16),c.skin);f.scale.set(.92,1.06,1),this.head.add(f);let g=K(new pe(.132,20,12,0,Math.PI*2,0,Math.PI*.55),c.hair,{y:.02,z:.012});g.scale.set(.95,1,1.02),this.head.add(g);for(let y of[-1,1])this.head.add(K(new pe(.016,8,8),c.eye,{x:y*.045,y:.01,z:-.112,cast:!1}));this.head.add(K(new pe(.03,8,8),c.skin,{y:-.02,z:-.122,cast:!1})),this.arms={};for(let y of["left","right"]){let m=y==="left"?-1:1,p=new Rt;p.position.set(.25*m,.46,0),this.chest.add(p),p.add(K(new pe(.078,12,10),c.shirt)),p.add(K(new Ge(.06,.2,4,10),c.shirt,{y:-.14}));let b=new Rt;b.position.y=-.29,p.add(b),b.add(K(new Ge(.052,.19,4,10),c.skin,{y:-.13}));let _=new Rt;if(_.position.y=-.29,b.add(_),c.glove){let x=K(new pe(.1,14,12),c.glove);x.scale.set(.9,1.05,1.15),_.add(x)}else _.add(K(new pe(.058,10,8),c.skin));this.arms[y]={shoulder:p,elbow:b,hand:_}}this.legs={};for(let y of["left","right"]){let m=y==="left"?-1:1,p=new Rt;p.position.set(.1*m,-.02,0),this.hips.add(p),p.add(K(new Ge(.085,.31,4,10),c.pants,{y:-.21}));let b=new Rt;b.position.y=-.44,p.add(b),b.add(K(new Ge(.068,.31,4,10),c.pants,{y:-.21})),b.add(K(new ee(.058,.062,.08,10),c.skin,{y:-.4}));let _=new Rt;_.position.set(0,-.46,-.04),b.add(_);let x=K(new Vt(.12,.09,.27),c.shoes);_.add(x,K(new Vt(.125,.03,.28),c.sole,{y:-.045})),this.legs[y]={hip:p,knee:b,foot:_}}this.root.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),this.run(0,0)}set(t,e=0,n=0,s=0){t.rotation.set(e,n,s)}run(t,e=1,n=.18){let s=Math.sin(t),r=Math.cos(t),{left:o,right:a}=this.legs;this.set(o.hip,s*.85*e),this.set(a.hip,-s*.85*e),this.set(o.knee,-(.15+1.1*Math.max(0,-r))*e),this.set(a.knee,-(.15+1.1*Math.max(0,r))*e),this.set(o.foot,.2*e*Math.max(0,s)),this.set(a.foot,.2*e*Math.max(0,-s));let l=this.arms;this.set(l.left.shoulder,-s*.8*e,0,-.08),this.set(l.right.shoulder,s*.8*e,0,.08),this.set(l.left.elbow,.3+1.2*e),this.set(l.right.elbow,.3+1.2*e),this.set(this.chest,-n*e,s*.12*e,0),this.set(this.hips,0,-s*.1*e,0),this.hips.position.y=ss+Math.abs(r)*.06*e,this.set(this.head,n*.6*e)}jump(t){let{left:e,right:n}=this.legs,s=this.arms;this.set(e.hip,.9*t),this.set(n.hip,.5*t),this.set(e.knee,-1.4*t),this.set(n.knee,-1.1*t),this.set(s.left.shoulder,2.4*t,0,-.3*t),this.set(s.right.shoulder,2.4*t,0,.3*t),this.set(s.left.elbow,.3),this.set(s.right.elbow,.3),this.set(this.chest,-.1),this.hips.position.y=ss}slide(){let{left:t,right:e}=this.legs,n=this.arms;this.hips.position.y=.35,this.set(this.hips),this.set(this.chest,.9),this.set(this.head,-.6),this.set(t.hip,1.3),this.set(e.hip,1),this.set(t.knee,-.2),this.set(e.knee,-.9),this.set(n.left.shoulder,.6,0,-.9),this.set(n.right.shoulder,.6,0,.9),this.set(n.left.elbow,.2),this.set(n.right.elbow,.2)}stumble(t){this.run(t*20,.6),this.set(this.chest,.5*Math.sin(t*6),0,.3*Math.sin(t*9))}ski(t,e){let n=.55+.45*t,{left:s,right:r}=this.legs,o=this.arms;this.hips.position.y=ss-.18-.22*t,this.set(this.hips,0,0,-e*.25),this.set(s.hip,n),this.set(r.hip,n),this.set(s.knee,-n*1.6),this.set(r.knee,-n*1.6),this.set(s.foot,n*.6),this.set(r.foot,n*.6),this.set(this.chest,-.45-.4*t,0,e*.15),this.set(this.head,.4+.3*t),this.set(o.left.shoulder,.7+.5*t,0,-.25),this.set(o.right.shoulder,.7+.5*t,0,.25),this.set(o.left.elbow,.6),this.set(o.right.elbow,.6)}kick(t){let e=t<.5?t/.5:1-(t-.5)/.5,n=Math.max(0,(t-.5)/.5),{left:s,right:r}=this.legs,o=this.arms;this.set(r.hip,-.7*e+1.3*n),this.set(r.knee,-1.3*e-.1),this.set(s.hip,.15),this.set(s.knee,-.2),this.set(o.left.shoulder,.5*n,0,-.9),this.set(o.right.shoulder,-.4*n,0,.6),this.set(o.left.elbow,.3),this.set(o.right.elbow,.3),this.set(this.chest,-.2*e+.1*n),this.hips.position.y=ss}celebrate(t){let{left:e,right:n}=this.legs,s=this.arms,r=Math.abs(Math.sin(t*8));this.hips.position.y=ss+r*.12,this.set(e.hip,.1),this.set(n.hip,-.1),this.set(e.knee,-.2*r),this.set(n.knee,-.2*r),this.set(s.left.shoulder,2.8,0,-.4),this.set(s.right.shoulder,2.8,0,.4),this.set(s.left.elbow,.2),this.set(s.right.elbow,.2),this.set(this.chest,.1)}guard(t,e={left:0,right:0},n=0,s=0){let{left:r,right:o}=this.legs,a=this.arms,l=Math.sin(t*6)*.025;this.hips.position.y=ss-.06-s*.32+l,this.set(this.hips,0,0,0),this.set(r.hip,.25+s*.6,0,-.1),this.set(o.hip,-.15+s*.6,0,.1),this.set(r.knee,-.35-s*1),this.set(o.knee,-.25-s*1),this.set(this.chest,-.15-s*.3,0,n*.4);for(let[c,h]of[["left",-1],["right",1]]){let u=e[c];this.set(a[c].shoulder,1.15+u*.45,0,h*(.35-u*.3)),this.set(a[c].elbow,2.1-u*2)}}};var sh=[-2.2,0,2.2],li=20,md=10,je=[{at:0,top:"#3d6fc4",horizon:"#ffb27a",bottom:"#8a5a3a",sun:"#fff0d0",sunI:2.8,hemi:1.15,fog:"#f2b58a",lamps:0},{at:900,top:"#2a3f8a",horizon:"#ff8a4a",bottom:"#6a3a2a",sun:"#ffb070",sunI:2.2,hemi:.9,fog:"#e08a5a",lamps:.3},{at:1800,top:"#0b1236",horizon:"#4a3a7a",bottom:"#1a1020",sun:"#9ab0ff",sunI:.9,hemi:.45,fog:"#2a2448",lamps:1}],la=class extends Ye{constructor(t){super(t),this.score=0,this.lives=3,this.coins=0,this.distance=0,this.speed=13,this.lane=1,this.px=0,this.py=0,this.vy=0,this.phase=0,this.lastJump=null,this.invulnerable=0,this.combo=0,this.powers={magnet:0,double:0,shield:!1},this.things=[],this.sinceSpawn=0,this.spawned=0,this.stumble=0,this.build()}build(){let t=this.scene;this.sky=Js({top:je[0].top,horizon:je[0].horizon,bottom:je[0].bottom,sunDir:new C(.2,.12,-1)}),t.add(this.sky),t.fog=new an(je[0].fog,45,175),this.lights=oa(t,{sun:je[0].sun,sunIntensity:je[0].sunI,sky:"#bcd0ff",ground:"#a06a44",hemi:1.15,dir:[-.5,1,.4]}),this.camera.position.set(0,3.2,6.6),this.camera.lookAt(0,1.1,-6),this.camera.fov=62,this.M={road:it("#ffffff",{rough:.95,map:this.roadTexture()}),sand:it("#ffffff",{rough:1,map:Pi("#dc9e66",["#b97a48","#f2c08a","#a8693c"],{seed:2,repeat:[6,2]})}),rock:aa("#b8643a",3),post:it("#eeeeee",{rough:.3,metal:.6}),hurdle:it("#ffffff",{rough:.45,map:ns("#ffffff","#e01818",8,{repeat:[3,1]})}),hazard:it("#ffffff",{rough:.6,map:ns("#ffd10d","#141414",12,{repeat:[3,1]})}),wood:it("#ffffff",{rough:.85,map:Pi("#7a4a24",["#5a3416","#8f5c30"],{size:256,count:900,radius:4,seed:9})}),barrel:it("#a5402a",{rough:.5,metal:.3}),band:it("#333333",{rough:.4,metal:.8}),gap:it("#120804",{rough:1}),lamp:it("#ffd98a",{emissive:"#ffb347",emissiveIntensity:0})},this.tiles=[];for(let e=0;e<md;e++){let n=new Rt;n.position.z=-e*li+10;let s=K(new Gt(7.6,li),this.M.road,{cast:!1,receive:!0});s.rotation.x=-Math.PI/2,n.add(s);for(let o of[-1,1]){let a=K(new Gt(70,li),this.M.sand,{x:o*38.8,y:-.02,cast:!1,receive:!0});a.rotation.x=-Math.PI/2,n.add(a)}let r=[];for(let o=0;o<3;o++)r.push(js(st(.4,1.1),this.M.rock,{detail:2}));r.push(nh(st(2.2,3.6))),Math.random()<.6&&r.push(nh(st(1.6,3)));for(let o=0;o<2;o++){let a=js(st(6,10),this.M.rock,{detail:3,rough:.28,flat:1,mesa:st(.45,.75),bands:!0});a.scale.set(1,st(1.5,2.3),1.2),a.userData.wall=!0,r.push(a)}for(let o of[-1,1]){let a=new Rt;a.add(K(new ee(.05,.06,2.2,6),this.M.wood,{y:1.1})),a.add(K(new pe(.16,10,8),this.M.lamp,{y:2.25,cast:!1})),a.position.set(o*4.4,0,0),a.userData.lantern=!0,r.push(a)}r.forEach(o=>n.add(o)),this.scatter(r),n.userData.props=r,t.add(n),this.tiles.push(n)}for(let e=0;e<16;e++){let n=e%2?1:-1,s=st(25,60),r=js(st(26,40),this.M.rock,{detail:3,rough:.22,flat:1,mesa:st(.25,.5),bands:!0});r.scale.set(st(1.1,1.8),s/40,1),r.position.set(n*st(60,170),-2,-st(220,320)),r.castShadow=!1,t.add(r)}this.figure=new nn({shirt:"#1e6ff2",accent:"#ffffff",pants:"#262626",shoes:"#ff5a33",number:7}),this.player=new Rt,this.player.add(this.figure.root),t.add(this.player),this.shield=new kt(new pe(1.15,24,16),new Xt({color:"#6fd3ff",transparent:!0,opacity:.18,depthWrite:!1})),this.shield.position.y=1,this.shield.visible=!1,this.player.add(this.shield),this.dust=new we(t,{max:400,size:.35,gravity:1.5,texture:Ys("#e8c39a")}),this.sparks=new we(t,{max:400,size:.22,gravity:-6,additive:!0}),this.shake=new Ze,this.addCoinLine(1,-28,6);for(let e of[-62,-98,-132])this.spawnRow(e);this.hud.set({lives:3,maxLives:3,stat:"Coins 0"}),this.figure.run(0,0)}roadTexture(){return de(256,512,(t,e,n)=>{t.fillStyle="#a8794f",t.fillRect(0,0,e,n);let s=en(5);for(let r=0;r<3e3;r++){let o=.35+s()*.5;t.fillStyle=`rgba(${Math.round(255*o)},${Math.round(185*o)},${Math.round(125*o)},0.35)`;let a=1+s()*3;t.fillRect(s()*e,s()*n,a,a)}t.fillStyle="rgba(90,60,35,0.35)";for(let r of[.18,.32,.68,.82])t.fillRect(r*e-6,0,12,n);t.fillStyle="rgba(245,240,230,0.75)";for(let r of[.5-1.1/7.6,.5+1.1/7.6])for(let o=0;o<n;o+=128)t.fillRect(r*e-3,o+20,6,70)})}scatter(t){for(let e of t){if(e.userData.lantern){e.position.z=st(-li/2,li/2);continue}let n=Math.random()<.5?-1:1,s=e.userData.wall?st(20,34):st(5.6,15);e.position.set(n*s,e.userData.wall?2:0,st(-li/2,li/2))}}spawnRow(t=-150){this.spawned++;let e=Math.floor(Math.random()*3),n=Math.min(1,this.distance/2500),s=Math.random();if(this.spawned>3&&Math.random()<.12&&this.addPowerUp(e,t-6),s<.18)this.add("hurdle",[0,1,2],t),this.addCoinArc(e,t);else if(s<.32)this.add("bridge",[0,1,2],t),this.addCoinLine(e,t+3,3,.6);else if(s<.52){for(let r of[0,1,2])r!==e&&this.add(Math.random()<.5?"boulder":"barrels",[r],t);this.addCoinLine(e,t-4,5)}else if(s<.64&&this.distance>300)this.add("gap",[0,1,2],t),this.addCoinArc(1,t);else if(s<.82){let r=Math.floor(Math.random()*3);this.add("hurdle",[r],t),this.add(Math.random()<.5?"boulder":"barrels",[(r+1)%3],t),this.addCoinArc(r,t)}else this.add("boulder",[e],t,{rolling:n>.2}),this.addCoinLine((e+1)%3,t,6)}add(t,e,n,s={}){let r,o=this.M,a=e.length===3?0:sh[e[0]];switch(t){case"hurdle":{r=new Rt;let c=e.length===3?7:1.9;for(let h of[-1,1])r.add(K(new ee(.05,.05,.95,8),o.post,{x:h*c/2,y:.475})),r.add(K(new Vt(.08,.05,.5),o.post,{x:h*c/2,y:.03}));r.add(K(new Vt(c,.2,.08),o.hurdle,{y:.85}));break}case"bridge":{r=new Rt;for(let c of[-1,1])r.add(K(new Vt(.5,3.4,.5),o.wood,{x:c*3.7,y:1.7}));r.add(K(new Vt(7.9,.75,.35),o.hazard,{y:1.6})),r.add(K(new Vt(8.4,.35,.6),o.wood,{y:3.4}));break}case"boulder":{r=K(new Ji(.95,2),o.rock),r.position.y=.92,r.userData.rolling=!!s.rolling;break}case"barrels":{r=new Rt;let c=new ee(.42,.42,1.1,16);for(let[h,u,d]of[[-.45,.55,0],[.45,.55,.1],[0,1.6,.05]]){let f=K(c,o.barrel,{x:h,y:u,z:d});for(let g of[-.35,.35])f.add(K(new gn(.425,.03,6,20),o.band,{y:g}));f.children.forEach(g=>g.rotation.x=Math.PI/2),r.add(f)}break}case"gap":{r=new Rt;let c=K(new Gt(7.7,3.2),o.gap,{y:.01,cast:!1});c.rotation.x=-Math.PI/2,r.add(c);for(let h of[-1.6,1.6])r.add(K(new Vt(7.8,.18,.25),o.rock,{y:.05,z:h}));break}case"coin":r=pd(),r.position.y=1;break;case"power":r=s.node;break}r.position.x=a,r.position.z=n,Zs(r,t!=="gap"),this.scene.add(r);let l={node:r,kind:t,lanes:e,resolved:!1,hinted:!1,power:s.power};return this.things.push(l),l}addCoinLine(t,e,n,s=1){for(let r=0;r<n;r++)this.add("coin",[t],e-r*2.2).node.position.y=s}addCoinArc(t,e){for(let n=-2;n<=2;n++)this.add("coin",[t],e+n*1.6).node.position.y=1+(2.2-Math.abs(n)*.6)}addPowerUp(t,e){let n=yn(["magnet","shield","double"]),s={magnet:"#ff4fa0",shield:"#4fd2ff",double:"#ffd13a"},r=new Rt,o=K(new Ji(.42,1),it(s[n],{rough:.2,metal:.3,emissive:s[n],emissiveIntensity:.9})),a=K(new gn(.62,.05,8,32),it("#ffffff",{emissive:"#ffffff",emissiveIntensity:.6})),l=new Go(new Er({map:de(128,128,c=>{c.font="bold 76px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillStyle="#fff",c.fillText({magnet:"U",shield:"\u25C6",double:"2\xD7"}[n],64,70)}),depthTest:!1}));l.scale.set(.7,.7,1),r.add(o,a,l),r.position.y=1.3,this.add("power",[t],e,{node:r,power:n})}update(t,e){let n=this.elapsed;this.speed=Math.min(30,13+n*.2);let s=this.speed*t;this.distance+=s,this.sinceSpawn+=s;let r=e.lateral;r<-.55?this.lane=0:r>.55?this.lane=2:Math.abs(r)<.3&&(this.lane=1);let o=this.px;this.px=Je(this.px,sh[this.lane],12,t),this.lastJump===null&&(this.lastJump=e.jumpCount),e.jumpCount!==this.lastJump&&(this.lastJump=e.jumpCount,this.py<=.001&&this.stumble<=0&&(this.vy=7.8,this.audio.play("jump",.7))),this.vy-=20*t,this.py=Math.max(0,this.py+this.vy*t),this.py===0&&(this.vy=0),this.sliding=e.isCrouching&&this.py===0,this.phase+=t*this.speed*.55,this.stumble>0?(this.stumble-=t,this.figure.stumble(this.stumble)):this.py>0?this.figure.jump(Math.min(1,this.py/.6)):this.sliding?this.figure.slide():this.figure.run(this.phase,1),this.player.position.set(this.px,this.py,0),this.player.rotation.y=-(this.px-o)/Math.max(t,.001)*.04,this.py===0&&Math.random()<t*(this.sliding?40:14)&&this.dust.burst({x:this.px,y:.1,z:.3},{count:this.sliding?4:2,speed:1.5,up:1,life:.6,spread:.6,color:"#e2c09a"}),this.powers.magnet=Math.max(0,this.powers.magnet-t),this.powers.double=Math.max(0,this.powers.double-t),this.shield.visible=this.powers.shield,this.shield.visible&&(this.shield.material.opacity=.14+.06*Math.sin(n*6)),this.invulnerable>0?(this.invulnerable-=t,this.figure.root.visible=Math.floor(this.invulnerable*12)%2===0):this.figure.root.visible=!0;let a=this.camera;a.position.set(this.px*.55,3.2+this.py*.25,6.6),a.fov=60+(this.speed-13)*.45,a.updateProjectionMatrix(),a.lookAt(this.px*.7,1.1,-6),this.shake.apply(a,t),this.updatePhaseColors();for(let c of this.tiles)c.position.z+=s,c.position.z-li/2>12&&(c.position.z-=li*md,this.scatter(c.userData.props));this.sinceSpawn>Math.max(13,24-n*.1)&&(this.sinceSpawn=0,this.spawnRow());for(let c=this.things.length-1;c>=0;c--){let h=this.things[c],u=h.node,d=u.userData.rolling?6*t:0;u.position.z+=s+d,h.kind==="boulder"&&(u.rotation.x+=(s+d)/.95),h.kind==="coin"&&(u.rotation.y+=t*4),h.kind==="power"&&(u.rotation.y+=t*2,u.position.y=1.3+Math.sin(n*4)*.15);let f=u.position.z;if(h.kind==="coin"&&!h.resolved){let g=Math.abs(f)<.9&&Math.abs(u.position.x-this.px)<.9&&Math.abs(u.position.y-(this.py+1))<1.3;this.powers.magnet>0&&f>-14&&f<1&&(u.position.x=Je(u.position.x,this.px,8,t),u.position.y=Je(u.position.y,this.py+1,8,t),u.position.z=Je(u.position.z,0,4,t)),g&&(h.resolved=!0,this.collectCoin(u))}else if(h.kind==="power"&&!h.resolved)Math.abs(f)<1&&Math.abs(u.position.x-this.px)<1.1&&(h.resolved=!0,this.collectPower(h));else if(!h.resolved&&f>-.5&&h.kind!=="coin"&&h.kind!=="power")h.resolved=!0,this.resolveObstacle(h);else if(!h.resolved&&!h.hinted&&this.spawned<=6&&f>-36&&h.kind!=="coin"&&h.kind!=="power"){h.hinted=!0;let g={hurdle:"Jump!",bridge:"Crouch!",gap:"Jump the gap!",boulder:"Change lanes!",barrels:"Change lanes!"}[h.kind];g&&(h.lanes.length===3||h.kind==="boulder"||h.kind==="barrels")&&this.hud.flash(g,.8)}(f>14||h.resolved&&(h.kind==="coin"||h.kind==="power"))&&(this.scene.remove(u),this.things.splice(c,1))}this.dust.shift(s),this.dust.update(t),this.sparks.update(t);let l=Math.floor(this.distance)+this.coins*10;l!==this.score&&(this.score=l,this.hud.set({score:l}))}idle(t){this.phase+=t*3,this.figure.run(this.phase,.15),this.dust.update(t)}updatePhaseColors(){let t=this.distance,e=je[0],n=je[0],s=0;for(let a=0;a<je.length-1;a++)t>=je[a].at&&(e=je[a],n=je[a+1],s=Math.min(1,(t-e.at)/(n.at-e.at)));t>=je[je.length-1].at&&(e=n=je[je.length-1],s=1);let r=(a,l)=>new ft(a).lerp(new ft(l),s),o=this.sky.material.uniforms;o.top.value.copy(r(e.top,n.top)),o.horizon.value.copy(r(e.horizon,n.horizon)),o.bottom.value.copy(r(e.bottom,n.bottom)),this.scene.fog.color.copy(r(e.fog,n.fog)),this.lights.sun.color.copy(r(e.sun,n.sun)),this.lights.sun.intensity=vn(e.sunI,n.sunI,s),this.lights.hemi.intensity=vn(e.hemi,n.hemi,s),this.M.lamp.emissiveIntensity=vn(e.lamps,n.lamps,s)*3}resolveObstacle(t){if(!t.lanes.some(s=>Math.abs(sh[s]-this.px)<1.15)){this.cleared(t);return}let n;switch(t.kind){case"hurdle":n=this.py<.45;break;case"gap":n=this.py<.3;break;case"bridge":n=!this.sliding;break;default:n=!0}if(!n){this.cleared(t,!0);return}if(!(this.invulnerable>0)){if(this.powers.shield){this.powers.shield=!1,this.invulnerable=1,this.audio.play("save"),this.hud.flash("Shield saved you!",1),this.sparks.burst({x:this.px,y:1,z:0},{count:60,speed:6,color:"#6fd3ff",life:.7});return}this.lives-=1,this.combo=0,this.invulnerable=1.6,this.stumble=.6,this.shake.kick(.35),this.audio.play("hit"),this.hud.set({lives:Math.max(0,this.lives),stat:`Coins ${this.coins}`}),this.lives<=0?(this.hud.flash("Wipeout!"),this.finish(this.score,`${Math.floor(this.distance)} m \xB7 ${this.coins} coins`)):this.hud.flash({hurdle:"Ouch \u2014 jump!",gap:"Fell in \u2014 jump!",bridge:"Ouch \u2014 crouch!"}[t.kind]??"Ouch \u2014 change lanes!")}}cleared(t,e=!1){if(!e)return;this.combo=Math.min(this.combo+1,20);let n=this.multiplier();this.combo%5===0&&(this.audio.play("combo",.7),this.hud.flash(`${this.combo} clean in a row \xB7 \xD7${n}`,.9)),this.hud.set({stat:`Coins ${this.coins}`})}multiplier(){return 1+Math.min(4,Math.floor(this.combo/5))}collectCoin(t){let e=(this.powers.double>0?2:1)*this.multiplier();this.coins+=e,this.audio.play("coin",.55,1+Math.min(.3,this.combo*.015)),this.sparks.burst(t.position,{count:8,speed:2.5,color:"#ffd75a",life:.4,spread:1}),this.hud.set({stat:`Coins ${this.coins}`})}collectPower(t){let e=t.power;e==="magnet"&&(this.powers.magnet=10),e==="double"&&(this.powers.double=10),e==="shield"&&(this.powers.shield=!0),this.audio.play("gate"),this.sparks.burst(t.node.position,{count:50,speed:5,color:{magnet:"#ff4fa0",shield:"#4fd2ff",double:"#ffd13a"}[e],life:.7}),this.hud.flash({magnet:"Coin magnet!",shield:"Shield up!",double:"Double coins!"}[e],1)}};var Qs={watermelon:{r:.95,skin:"#2f6b2a",flesh:"#f0364a",rind:"#e6f2c4",juice:"#ff3550",points:15,shape:[1.15,.92,.92]},orange:{r:.62,skin:"#ff8c12",flesh:"#ffa531",rind:"#fff1d4",juice:"#ff9a1a",points:10,shape:[1,1,1]},apple:{r:.6,skin:"#d4141c",flesh:"#fff3c9",rind:"#fffbe9",juice:"#fff5cc",points:10,shape:[1,.95,1]},lemon:{r:.55,skin:"#ffe01a",flesh:"#fff07a",rind:"#fffbe0",juice:"#fff04a",points:10,shape:[.85,.85,1.2]},kiwi:{r:.5,skin:"#7a5631",flesh:"#7fc23a",rind:"#cdea9a",juice:"#8fd640",points:12,shape:[.95,.95,1.15]},coconut:{r:.65,skin:"#5a3a22",flesh:"#fbfbf3",rind:"#3a2414",juice:"#ffffff",points:15,shape:[1,1.05,1]},pineapple:{r:.72,skin:"#d99a1e",flesh:"#ffe36a",rind:"#f7d24a",juice:"#ffe14a",points:20,shape:[.9,1.35,.9]}},gv=Object.keys(Qs),ca=class extends Ye{constructor(t){super(t),this.score=0,this.lives=3,this.sliced=0,this.flyers=[],this.pieces=[],this.splats=[],this.spawnTimer=1,this.frenzy=0,this.comboCount=0,this.comboTimer=0,this.gravity=-14,this.build()}build(){let t=this.scene;t.background=new ft("#140c07"),this.camera.position.set(0,0,14),this.camera.fov=45,this.camera.lookAt(0,0,0);let e=de(1024,1024,(o,a,l)=>{let c=en(12),h=a/7;for(let u=0;u<8;u++){let d=.85+c()*.25;o.fillStyle=`rgb(${Math.round(120*d)},${Math.round(74*d)},${Math.round(40*d)})`,o.fillRect(u*h,0,h,l);for(let f=0;f<30;f++){o.strokeStyle=`rgba(60,32,14,${.15+c()*.25})`,o.lineWidth=1+c()*3,o.beginPath();let g=u*h+c()*h;o.moveTo(g,0);for(let y=0;y<l;y+=40)g+=(c()-.5)*6,o.lineTo(g,y);o.stroke()}o.fillStyle="rgba(25,12,4,.85)",o.fillRect(u*h-3,0,6,l)}});this.wall=K(new Gt(40,24),it("#ffffff",{rough:.85,map:e}),{z:-3,cast:!1,receive:!0}),t.add(this.wall);let n=new ln("#ffe6c8","#3a2010",1.2),s=new An("#fff2dc",2.2);s.position.set(-6,8,12),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-14,right:14,top:10,bottom:-10,near:1,far:40});let r=new Wn("#ffb070",30,30);r.position.set(8,-4,6),t.add(n,s,r),this.juice=new we(t,{max:900,size:.28,gravity:-12}),this.sparks=new we(t,{max:500,size:.25,gravity:-2,additive:!0}),this.blades=[0,1].map(o=>{let l=new Ce;l.setAttribute("position",new Re(new Float32Array(14*2*3),3)),l.setAttribute("color",new Re(new Float32Array(14*2*3),3));let c=[];for(let f=0;f<13;f++){let g=f*2;c.push(g,g+1,g+2,g+1,g+3,g+2)}l.setIndex(c);let h=new kt(l,new Xt({vertexColors:!0,transparent:!0,blending:Ps,depthWrite:!1,side:De}));h.frustumCulled=!1;let u=new ft(o===0?"#6fd8ff":"#ff7ab8"),d=new kt(new pe(.16,16,12),new Xt({color:u}));return t.add(h,d),{ribbon:h,cursor:d,color:u,N:14,points:[],pos:null,speed:0}}),this.textures={},this.shake=new Ze,this.flash=new kt(new Gt(60,40),new Xt({color:"#ffffff",transparent:!0,opacity:0,depthTest:!1})),this.flash.position.z=6,this.flash.renderOrder=10,t.add(this.flash),this.hud.set({lives:3,maxLives:3,stat:"Sliced 0"})}get halfHeight(){return Math.tan(Qu.degToRad(this.camera.fov/2))*this.camera.position.z}get halfWidth(){return this.halfHeight*this.camera.aspect}handToWorld(t,e){let n=.5+t.x*.42+Te(e,-1.5,1.5)*.1,s=.08+t.y*.86;return new C((Te(n,0,1)*2-1)*this.halfWidth,(Te(s,0,1)*2-1)*this.halfHeight,.5)}skinTexture(t){if(this.textures[t])return this.textures[t];let e=Qs[t],n=de(512,256,(s,r,o)=>{s.fillStyle=e.skin,s.fillRect(0,0,r,o);let a=en(t.length*7);if(t==="watermelon"){s.strokeStyle="#173d14",s.lineWidth=22;for(let l=0;l<10;l++){s.beginPath();let c=l*r/10;s.moveTo(c,0);for(let h=0;h<=o;h+=16)c+=Math.sin(h*.08+l)*4,s.lineTo(c,h);s.stroke()}}else if(t==="pineapple"){s.strokeStyle="#7a4a10",s.lineWidth=5;for(let l=-20;l<40;l++)s.beginPath(),s.moveTo(l*26,0),s.lineTo(l*26+o,o),s.stroke(),s.beginPath(),s.moveTo(l*26,o),s.lineTo(l*26+o,0),s.stroke()}else{let l={orange:["#e06a00",1800,2],kiwi:["#4a3018",3e3,1.5],coconut:["#2e1a0c",2500,2.5],lemon:["#e8c000",1200,1.6],apple:["#ffde4a",300,1.5]}[t];if(t==="apple"){let c=s.createLinearGradient(0,0,0,o);c.addColorStop(0,"#ff5a3a"),c.addColorStop(.5,"#d4141c"),c.addColorStop(1,"#7a0a10"),s.fillStyle=c,s.fillRect(0,0,r,o)}s.fillStyle=l[0];for(let c=0;c<l[1];c++)s.globalAlpha=.3+a()*.4,s.beginPath(),s.arc(a()*r,a()*o,l[2]*(.5+a()),0,Math.PI*2),s.fill();s.globalAlpha=1}});return this.textures[t]=n,n}fleshTexture(t){let e=t+":flesh";if(this.textures[e])return this.textures[e];let n=Qs[t],s=de(256,256,(r,o)=>{let a=o/2;r.fillStyle=n.skin,r.beginPath(),r.arc(a,a,a,0,Math.PI*2),r.fill(),r.fillStyle=n.rind,r.beginPath(),r.arc(a,a,a*.93,0,Math.PI*2),r.fill(),r.fillStyle=n.flesh,r.beginPath(),r.arc(a,a,a*(t==="watermelon"?.82:.88),0,Math.PI*2),r.fill();let l=r.createRadialGradient(a*.7,a*.7,0,a,a,a);if(l.addColorStop(0,"rgba(255,255,255,.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=l,r.beginPath(),r.arc(a,a,a*.88,0,Math.PI*2),r.fill(),t==="orange"||t==="lemon"){r.strokeStyle=n.rind,r.lineWidth=3;for(let c=0;c<10;c++){let h=c/10*Math.PI*2;r.beginPath(),r.moveTo(a,a),r.lineTo(a+Math.cos(h)*a*.86,a+Math.sin(h)*a*.86),r.stroke()}}else if(t==="watermelon"){r.fillStyle="#1a0d0a";for(let c=0;c<14;c++){let h=c/14*Math.PI*2,u=a*(c%2?.45:.62);r.beginPath(),r.ellipse(a+Math.cos(h)*u,a+Math.sin(h)*u,4,7,h,0,Math.PI*2),r.fill()}}else if(t==="kiwi"){r.fillStyle="#f4ffe0",r.beginPath(),r.arc(a,a,a*.25,0,Math.PI*2),r.fill(),r.fillStyle="#111";for(let c=0;c<18;c++){let h=c/18*Math.PI*2;r.beginPath(),r.arc(a+Math.cos(h)*a*.38,a+Math.sin(h)*a*.38,3.5,0,Math.PI*2),r.fill()}}else if(t==="apple"){r.fillStyle="#6a3a14";for(let c of[-14,14])r.beginPath(),r.ellipse(a+c,a,5,9,0,0,Math.PI*2),r.fill()}else t==="pineapple"&&(r.fillStyle="#f2c63a",r.beginPath(),r.arc(a,a,a*.22,0,Math.PI*2),r.fill())});return this.textures[e]=s,s}makeFruit(t){let e=Qs[t],n=new Rt,s=K(new pe(e.r,32,20),it("#ffffff",{rough:t==="coconut"||t==="kiwi"?.9:.35,map:this.skinTexture(t)}));if(s.scale.set(...e.shape),n.add(s),t==="apple"||t==="orange"){n.add(K(new ee(.03,.04,.28,6),it("#5a3a1a"),{y:e.r*.98}));let r=K(new pe(.16,10,6),it("#3f9a2c",{rough:.5}),{x:.12,y:e.r*1.02});r.scale.set(1.2,.25,.6),n.add(r)}if(t==="pineapple"){let r=it("#3e8a2a",{rough:.6});for(let o=0;o<7;o++){let a=K(new Zi(.1,.8,5),r,{y:e.r*1.35+.3});a.rotation.z=(o-3)*.25,a.rotation.x=(o%2-.5)*.4,n.add(a)}}return n.userData.radius=e.r*Math.max(...e.shape),n}makeBomb(){let t=new Rt;t.add(K(new pe(.62,28,20),it("#141418",{rough:.25,metal:.6}))),t.add(K(new ee(.16,.18,.18,12),it("#555",{metal:.8,rough:.4}),{y:.64}));let e=K(new gn(.2,.035,6,12,Math.PI),it("#c9a26a"),{x:.2,y:.74});e.rotation.z=Math.PI,t.add(e);let n=de(128,128,r=>{r.strokeStyle="#ff2b2b",r.lineWidth=16,r.beginPath(),r.moveTo(30,30),r.lineTo(98,98),r.moveTo(98,30),r.lineTo(30,98),r.stroke()}),s=new kt(new Gt(.6,.6),new Xt({map:n,transparent:!0,depthWrite:!1}));return s.position.z=.63,t.add(s),t.userData.radius=.62,t.userData.fuseTip=new C(.4,.74,0),t}makeBanana(){let t=new Rt,e=new Gs(new C(-.7,.1,0),new C(0,-.6,0),new C(.7,.1,0)),n=K(new $o(e,24,.22,12),it("#ffd21a",{rough:.3,metal:.4,emissive:"#ffb800",emissiveIntensity:.6}));return t.add(n),t.userData.radius=.8,t.userData.golden=!0,t}showcase(){for(let t=0;t<6;t++)setTimeout(()=>this.launch(t===5?"bomb":"fruit"),t*90)}launch(t="fruit",e=0){let n,s=null;t==="bomb"?n=this.makeBomb():t==="banana"?n=this.makeBanana():(s=yn(gv),n=this.makeFruit(s));let r=this.halfWidth,o=this.halfHeight,a,l=-o-1.5,c,h;if(e)a=e*(r+1.5),l=st(-o*.6,0),c=-e*st(7,12),h=st(6,10);else{a=st(-r*.75,r*.75);let u=st(.25,.85)*o*2;h=Math.sqrt(2*-this.gravity*u);let d=2*h/-this.gravity;c=(st(-r*.5,r*.5)-a)/d}n.position.set(a,l,st(-.5,.5)),n.rotation.set(Math.random()*6,Math.random()*6,0),this.scene.add(n),this.flyers.push({node:n,kind:s,type:t,vel:new C(c,h,0),spin:new C(st(-3,3),st(-3,3),st(-2,2))}),t!=="bomb"&&this.audio.play("whoosh",.2,st(.9,1.2))}spawnWave(){let t=this.elapsed,e=t<8?1:1+Math.floor(Math.random()*Math.min(5,2+t/20));for(let n=0;n<e;n++)setTimeout(()=>{if(this.finished)return;let s=t>10&&Math.random()<Math.min(.22,.08+t/400);this.launch(s?"bomb":"fruit")},n*160);t>20&&Math.random()<.06&&setTimeout(()=>this.launch("banana"),500)}update(t,e){this.updateBlades(t,e),this.frenzy>0?(this.frenzy-=t,this.frenzyTimer=(this.frenzyTimer??0)-t,this.frenzyTimer<=0&&(this.frenzyTimer=.18,this.launch("fruit",Math.random()<.5?-1:1)),this.frenzy<=0&&this.hud.flash("Frenzy over",.8)):(this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnWave(),this.spawnTimer=Math.max(.8,1.9-this.elapsed*.012)*st(.8,1.2)));let n=this.halfHeight;for(let s=this.flyers.length-1;s>=0;s--){let r=this.flyers[s];if(r.vel.y+=this.gravity*t,r.node.position.addScaledVector(r.vel,t),r.node.rotation.x+=r.spin.x*t,r.node.rotation.y+=r.spin.y*t,r.node.rotation.z+=r.spin.z*t,r.type==="bomb"&&Math.random()<t*40){let o=r.userTip??new C;o.copy(r.node.userData.fuseTip).applyMatrix4(r.node.matrixWorld),this.sparks.burst(o,{count:2,speed:1.5,color:"#ffc04a",life:.25,up:1})}if(this.checkSlice(r)){this.flyers.splice(s,1);continue}r.node.position.y<-n-2.5&&r.vel.y<0&&(this.scene.remove(r.node),this.flyers.splice(s,1),r.type==="fruit"&&this.frenzy<=0&&this.loseLife("Missed one!"))}for(let s=this.pieces.length-1;s>=0;s--){let r=this.pieces[s];r.life-=t,r.vel.y+=this.gravity*t,r.node.position.addScaledVector(r.vel,t),r.node.rotation.x+=r.spin.x*t,r.node.rotation.z+=r.spin.z*t,(r.life<=0||r.node.position.y<-n-4)&&(this.scene.remove(r.node),this.pieces.splice(s,1))}for(let s=this.splats.length-1;s>=0;s--){let r=this.splats[s];r.life-=t,r.node.material.opacity=Math.min(.8,r.life/1.5),r.node.scale.setScalar(Math.min(1,r.node.scale.x+t*8)),r.life<=0&&(this.scene.remove(r.node),r.node.material.dispose(),this.splats.splice(s,1))}if(this.juice.update(t),this.sparks.update(t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0)){if(this.comboCount>=3){let s=this.comboCount*5;this.addScore(s),this.audio.play("combo"),this.hud.flash(`${this.comboCount}-fruit combo  +${s}`,1)}this.comboCount=0}this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*2.5),this.camera.position.set(0,0,14),this.shake.apply(this.camera,t)}idle(t){this.juice.update(t),this.sparks.update(t)}updateBlades(t,e){let n=this.elapsed;[e.leftHand,e.rightHand].forEach((s,r)=>{let o=this.blades[r];if(!s){o.pos=null,o.points=[],o.cursor.visible=!1,o.ribbon.visible=!1;return}let a=this.handToWorld(s,e.lateral);for(o.pos&&(o.speed=a.distanceTo(o.pos)/Math.max(t,.001)),o.prev=o.pos?o.pos.clone():a.clone(),o.pos=a,o.cursor.visible=!0,o.cursor.position.copy(a),o.points.push({p:a.clone(),t:n});o.points.length>o.N||o.points.length&&n-o.points[0].t>.16;)o.points.shift();let l=o.ribbon.geometry.attributes.position,c=o.ribbon.geometry.attributes.color,h=o.points.length;o.ribbon.visible=h>1&&o.speed>6;for(let u=0;u<o.N;u++){let d=o.points[Math.min(u,h-1)]?.p??a,f=o.points[Math.min(u+1,h-1)]?.p??d,g=new C().subVectors(f,d),y=new C(-g.y,g.x,0).normalize(),m=.18*(u/Math.max(h-1,1));l.setXYZ(u*2,d.x+y.x*m,d.y+y.y*m,d.z),l.setXYZ(u*2+1,d.x-y.x*m,d.y-y.y*m,d.z);let p=u/Math.max(h-1,1);for(let b of[u*2,u*2+1])c.setXYZ(b,o.color.r*p+p*.6,o.color.g*p+p*.6,o.color.b*p+p*.6)}l.needsUpdate=!0,c.needsUpdate=!0})}checkSlice(t){for(let e of this.blades){if(!e.pos||!e.prev||e.speed<9)continue;let n=t.node.userData.radius+.15;if(yv(e.prev,e.pos,t.node.position,n)){let s=new C().subVectors(e.pos,e.prev).normalize();return t.type==="bomb"?this.explode(t):this.slice(t,s),!0}}return!1}slice(t,e){this.scene.remove(t.node),this.sliced++,this.comboCount++,this.comboTimer=.35;let n=t.type==="banana",s=n?{juice:"#ffe14a",points:50}:Qs[t.kind];this.addScore(s.points*(this.frenzy>0?2:1)),this.audio.play("slice",.8,st(.9,1.15)),this.audio.play("splat",.5),this.hud.set({stat:`Sliced ${this.sliced}`});let r=t.node.position.clone();if(this.juice.burst(r,{count:45,speed:7,spread:1,up:.3,color:s.juice,life:.8,colorJitter:.2}),n){this.frenzy=6,this.audio.play("combo"),this.hud.flash("FRUIT FRENZY! 2\xD7 points",1.4),this.sparks.burst(r,{count:120,speed:9,color:"#ffd84a",life:1});return}let o=t.kind,a=Qs[o],l=new C(-e.y,e.x,0).normalize(),c=it("#ffffff",{rough:.4,map:this.skinTexture(o)}),h=new kn({map:this.fleshTexture(o),roughness:.3});for(let d of[1,-1]){let f=new Rt,g=K(new pe(a.r,28,16,0,Math.PI*2,0,Math.PI/2),c),y=K(new Vn(a.r,28),h,{cast:!1});y.rotation.x=Math.PI/2,f.add(g,y),f.scale.set(a.shape[0],a.shape[1],a.shape[2]);let m=new Rt;m.add(f),f.quaternion.setFromUnitVectors(new C(0,1,0),l.clone().multiplyScalar(d)),m.position.copy(r).addScaledVector(l,d*.1),this.scene.add(m);let p=t.vel.clone().multiplyScalar(.4).addScaledVector(l,d*st(3,5)).add(new C(0,2,st(1,3)));this.pieces.push({node:m,vel:p,spin:new C(st(-4,4),0,d*st(2,5)),life:2.5})}let u=new kt(new Gt(a.r*4,a.r*4),new Xt({map:this.splatTexture(),color:a.juice,transparent:!0,opacity:.8,depthWrite:!1}));u.position.set(r.x,r.y,-2.95),u.rotation.z=Math.random()*Math.PI*2,u.scale.setScalar(.3),this.scene.add(u),this.splats.push({node:u,life:4})}splatTexture(){return this.textures.splat?this.textures.splat:(this.textures.splat=de(256,256,(t,e)=>{let n=en(4);t.fillStyle="#fff",t.beginPath(),t.arc(e/2,e/2,50,0,Math.PI*2),t.fill();for(let s=0;s<26;s++){let r=n()*Math.PI*2,o=30+n()*85,a=(6+n()*18)*(1-o/160);t.beginPath(),t.arc(e/2+Math.cos(r)*o,e/2+Math.sin(r)*o,a,0,Math.PI*2),t.fill()}}),this.textures.splat)}explode(t){this.scene.remove(t.node),this.audio.play("explosion"),this.flash.material.opacity=.9,this.shake.kick(.6),this.sparks.burst(t.node.position,{count:160,speed:11,color:"#ff9a2a",life:1}),this.juice.burst(t.node.position,{count:60,speed:6,color:"#333",life:1.2}),this.loseLife("Bomb!")}loseLife(t){this.lives-=1,this.audio.play("hit",.5),this.hud.set({lives:Math.max(0,this.lives)}),this.lives<=0?this.finish(this.score,`${this.sliced} fruit sliced`):this.hud.flash(t,.9)}addScore(t){this.score+=t,this.hud.set({score:this.score})}};function yv(i,t,e,n){let s=t.x-i.x,r=t.y-i.y,o=s*s+r*r,a=o>0?((e.x-i.x)*s+(e.y-i.y)*r)/o:0;return a=Math.max(0,Math.min(1,a)),Math.hypot(i.x+s*a-e.x,i.y+r*a-e.y)<n}var tr=3.66,Ii=2.44,gd=new C(0,.11,-11),ha=[{at:0,name:"Warm-up",time:1.35,curve:0,dip:0,power:0},{at:5,name:"Curlers",time:1.2,curve:1.2,dip:0,power:0},{at:10,name:"Chips & dips",time:1.1,curve:1.4,dip:.6,power:.15},{at:16,name:"Power shots",time:.95,curve:1.6,dip:.8,power:.3},{at:24,name:"World class",time:.85,curve:1.9,dip:1,power:.4}],ua=class extends Ye{constructor(t){super(t),this.score=0,this.lives=5,this.saves=0,this.shots=0,this.streak=0,this.stage="waiting",this.stageTime=0,this.level=0,this.launched=!1,this.ballVel=new C,this.build()}build(){let t=this.scene;this.sky=Js({top:"#03061a",horizon:"#1c2550",bottom:"#0a120a"}),t.add(this.sky),t.fog=new an("#0d1430",60,160);let e=new ln("#9fb4ff","#1a3a1a",.9);t.add(e);let n=new An("#f4f7ff",2.4);n.position.set(-12,30,12),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:80}),n.target.position.set(0,0,-6),t.add(n,n.target);for(let x of[-30,30]){let A=new Wn("#e8eeff",400,90,1.6);A.position.set(x,26,-26),t.add(A)}this.camera.position.set(0,1.3,4.8),this.camera.fov=58,this.camera.lookAt(0,1.1,-6);let s=de(512,512,(x,A,T)=>{for(let P=0;P<8;P++){let B=P%2?.86:1;x.fillStyle=`rgb(${Math.round(40*B)},${Math.round(128*B)},${Math.round(42*B)})`,x.fillRect(0,P*T/8,A,T/8)}let E=en(21);for(let P=0;P<7e3;P++){let B=.3+E()*.4;x.fillStyle=`rgba(${Math.round(70*B)},${Math.round(255*B)},${Math.round(60*B)},0.22)`,x.fillRect(E()*A,E()*T,1.5,4)}},{repeat:[6,6]}),r=K(new Gt(90,90),it("#ffffff",{rough:.9,map:s}),{z:-30,cast:!1,receive:!0});r.rotation.x=-Math.PI/2,t.add(r);let o=it("#f2f2f2",{rough:.8}),a=(x,A,T,E)=>{let P=K(new Gt(T,E),o,{x,y:.01,z:A,cast:!1,receive:!0});P.rotation.x=-Math.PI/2,t.add(P)};a(0,0,60,.12),a(0,-5.5,18.3,.12),a(-9.15,-2.75,.12,5.5),a(9.15,-2.75,.12,5.5),a(0,-16.5,40.3,.12),a(-20.15,-8.25,.12,16.5),a(20.15,-8.25,.12,16.5),t.add(K(new Vn(.15,16),o,{y:.012,z:-11,cast:!1}).rotateX(-Math.PI/2));let l=it("#f7f7f7",{rough:.25,metal:.2});for(let x of[-1,1])t.add(K(new ee(.06,.06,Ii,12),l,{x:x*tr,y:Ii/2}));let c=K(new ee(.06,.06,tr*2+.12,12),l,{y:Ii});c.rotation.z=Math.PI/2,t.add(c);let h=de(128,128,(x,A)=>{x.clearRect(0,0,A,A),x.strokeStyle="rgba(255,255,255,.8)",x.lineWidth=2;for(let T=0;T<=8;T++){let E=T*A/8;x.beginPath(),x.moveTo(E,0),x.lineTo(E,A),x.moveTo(0,E),x.lineTo(A,E),x.stroke()}});h.wrapS=h.wrapT=qi;let u=(x,A)=>{let T=h.clone();return T.needsUpdate=!0,T.repeat.set(x,A),new Xt({map:T,transparent:!0,side:De,depthWrite:!1})},d=2;for(let x of[-1,1]){let A=new kt(new Gt(d,Ii),u(d*3,Ii*3));A.position.set(x*tr,Ii/2,d/2),A.rotation.y=Math.PI/2,t.add(A)}let f=new kt(new Gt(tr*2,d),u(tr*6,d*3));f.position.set(0,Ii,d/2),f.rotation.x=-Math.PI/2,t.add(f);let g=de(1024,256,(x,A,T)=>{x.fillStyle="#141414",x.fillRect(0,0,A,T);let E=en(33),P=["#e53935","#ffffff","#1e88e5","#fdd835","#e8c4a0","#43a047","#555"];for(let B=0;B<16;B++)for(let v=0;v<128;v++){x.fillStyle=P[Math.floor(E()*P.length)];let w=v*8+E()*3,k=B*16+E()*4;x.beginPath(),x.arc(w+3,k+9,3.2,0,Math.PI*2),x.fill(),x.fillRect(w,k,6,7)}},{repeat:[4,1]}),y=it("#ffffff",{rough:.9,map:g,emissive:"#ffffff",emissiveIntensity:.12});y.emissiveMap=g;for(let x=0;x<3;x++){let A=K(new Vt(150,9,1),y,{y:4+x*8,z:-48-x*7,cast:!1});A.rotation.x=-.5,t.add(A)}let m=["#ff2d75","#2d8cff","#ff8c1a","#1ad1c4"];for(let x=0;x<9;x++){let A=m[x%4];t.add(K(new Vt(7.5,.9,.2),it(A,{rough:.3,emissive:A,emissiveIntensity:1.2}),{x:-35+x*7.8,y:.45,z:-24,cast:!1}))}let p=new Xt({color:"#ffffff"}),b=it("#666",{rough:.4,metal:.8});for(let x of[-38,38]){t.add(K(new ee(.4,.5,30,8),b,{x,y:15,z:-40,cast:!1}));for(let A=0;A<3;A++)for(let T=0;T<4;T++)t.add(K(new pe(.6,10,8),p,{x:x-2.4+T*1.6,y:30+A*1.4,z:-39.5,cast:!1}))}let _=de(512,256,(x,A,T)=>{x.fillStyle="#fff",x.fillRect(0,0,A,T),x.fillStyle="#151515";for(let E=0;E<3;E++)for(let P=0;P<6;P++){let B=(P+(E%2?.75:.25))*A/6,v=(E+.5)*T/3,w=E===1?26:18;x.beginPath();for(let k=0;k<5;k++){let F=k/5*Math.PI*2-Math.PI/2,V=B+Math.cos(F)*w,Z=v+Math.sin(F)*w;k?x.lineTo(V,Z):x.moveTo(V,Z)}x.closePath(),x.fill()}});this.ball=K(new pe(.11,24,16),it("#ffffff",{rough:.4,map:_})),this.ball.position.copy(gd),t.add(this.ball),this.shooter=new nn({shirt:"#d81b2a",accent:"#ffffff",pants:"#ffffff",skin:"#8c6046",hair:"#141414",shoes:"#19e07f",number:9}),this.shooter.root.rotation.y=Math.PI,this.shooter.root.position.set(.9,0,-14.2),t.add(this.shooter.root),this.gloves=[0,1].map(()=>{let x=new Rt,A=it("#f4f4f4",{rough:.5}),T=it("#22e07a",{rough:.4,emissive:"#0a5",emissiveIntensity:.4});x.add(K(new Vt(.24,.28,.09),A));for(let P=0;P<4;P++)x.add(K(new Ge(.032,.1,4,8),A,{x:-.09+P*.06,y:.19}));let E=K(new Ge(.035,.08,4,8),A,{x:.15,y:.02});return E.rotation.z=-.7,x.add(E,K(new Vt(.25,.08,.1),T,{y:-.15})),x.scale.setScalar(1.45),x.visible=!1,t.add(x),x}),this.sparks=new we(t,{max:500,size:.12,gravity:-4,additive:!0}),this.flashes=new we(t,{max:200,size:1.2,gravity:0,additive:!0}),this.trail=new we(t,{max:300,size:.25,gravity:.5,additive:!0}),this.shake=new Ze,this.hud.set({lives:5,maxLives:5,stat:"Saves 0"})}update(t,e){switch(this.updateGloves(e),this.stageTime+=t,Math.random()<t*6&&this.flashes.burst({x:st(-60,60),y:st(4,22),z:st(-62,-46)},{count:1,speed:0,life:.12,color:"#ffffff"}),this.stage){case"waiting":this.shooter.run(0,0),this.stageTime>1&&this.next("runUp");break;case"runUp":{let n=Math.min(1,this.stageTime/.8);this.shooter.root.position.set(vn(.9,.35,n),0,vn(-14.2,-11.5,n)),this.shooter.run(this.stageTime*11,.8),this.stageTime>=.8&&this.next("kick");break}case"kick":{let n=Math.min(1,this.stageTime/.4);this.shooter.kick(n),n>=.6&&!this.launched&&(this.launched=!0,this.launchShot()),this.stageTime>=.4&&(this.stage="flight",this.stageTime=0);break}case"flight":{let n=this.stageTime/this.shot.time,s=Math.sin(Math.PI*Math.min(n,1)),r=this.shot;this.ball.position.set(vn(r.start.x,r.target.x,n)+r.curve*s,Math.max(.11,vn(r.start.y,r.target.y,n)+r.arc*s-r.dip*Math.max(0,n-.6)*2),vn(r.start.z,r.target.z,n)),this.ball.rotation.x-=t*25,this.ball.rotation.y+=t*r.curve*10,r.power&&this.trail.burst(this.ball.position,{count:3,speed:.4,color:"#ff7a1a",life:.3});let o=n>.78?this.touchingGlove():null;o?this.save(o):n>=1&&this.goal();break}default:if(this.ballVel.y-=9.8*t,this.ball.position.addScaledVector(this.ballVel,t),this.ball.position.y<.11&&(this.ball.position.y=.11,this.ballVel.y=Math.abs(this.ballVel.y)*.45,this.ballVel.x*=.7,this.ballVel.z*=.7),this.stage==="scored"&&this.ball.position.z>1.9&&(this.ball.position.z=1.9,this.ballVel.z=-Math.abs(this.ballVel.z)*.2),this.stage==="saved"&&this.shooter.run(0,0),this.stage==="scored"&&this.shooter.celebrate(this.stageTime),this.stageTime>1.8){if(this.lives<=0){this.finish(this.score,`${this.saves} saves from ${this.shots} shots`);return}this.resetShot()}}this.sparks.update(t),this.flashes.update(t),this.trail.update(t),this.camera.position.set(0,1.3,4.8),this.shake.apply(this.camera,t)}idle(t){this.flashes.update(t),this.sparks.update(t)}next(t){this.stage=t,this.stageTime=0,t==="runUp"&&this.audio.play("whistle",.5)}resetShot(){this.ball.position.copy(gd),this.ball.rotation.set(0,0,0),this.launched=!1,this.shooter.root.position.set(.9,0,-14.2),this.next("waiting")}launchShot(){this.shots++;let t=0;for(let l=0;l<ha.length;l++)this.saves>=ha[l].at&&(t=l);t!==this.level&&(this.level=t,this.hud.flash(`Level ${t+1}: ${ha[t].name}`,1.4));let e=ha[t],n=Math.random()<e.power,s=Math.min(1,.55+this.shots*.04),r=st(-1,1)*(tr-.35)*s,o=st(.25,Ii-.25),a=Math.random()<e.dip*.4?st(.3,.6):0;this.shot={start:this.ball.position.clone(),target:new C(r,o,0),time:e.time*(n?.75:1)*st(.92,1.08),arc:a?1.4:o>1.5?st(.3,.9):st(0,.4),curve:st(-1,1)*e.curve,dip:a,power:n},this.audio.play("kick",n?1:.8),n&&this.hud.flash("Power shot!",.6)}updateGloves(t){[t.leftHand,t.rightHand].forEach((e,n)=>{let s=this.gloves[n];if(!e){s.visible=!1;return}s.visible=!0;let r=Te(e.x*3.1+Te(t.lateral,-1.5,1.5)*1.6,-4.3,4.3),o=Te(.2+e.y*2.6,.1,3);s.position.set(vn(s.position.x,r,.55),vn(s.position.y,o,.55),.25),s.rotation.z=-e.x*.5})}touchingGlove(){for(let t of this.gloves){if(!t.visible)continue;if(Math.hypot(t.position.x-this.ball.position.x,t.position.y-this.ball.position.y,(t.position.z-this.ball.position.z)*.5)<.5)return t}return null}save(t){this.saves++,this.streak++;let e=(100+(this.streak-1)*25)*(this.shot.power?2:1);this.score+=e,this.stage="saved",this.stageTime=0,this.ballVel.set(st(-3,3)+(this.ball.position.x-t.position.x)*6,st(2,5),-st(6,10)),this.audio.play("save"),this.audio.play("cheer",.7),this.sparks.burst(this.ball.position,{count:50,speed:4,color:"#7dffa8",life:.6}),this.shake.kick(.08),this.hud.set({score:this.score,stat:`Saves ${this.saves}`}),this.hud.flash(this.streak>=3?`Save!  ${this.streak} in a row`:this.shot.power?"Huge save!":"Save!",1)}goal(){this.streak=0,this.lives--,this.stage="scored",this.stageTime=0;let t=this.shot;this.ballVel.set((t.target.x-t.start.x)/t.time,Math.max(-2,(t.target.y-t.start.y)/t.time),(t.target.z-t.start.z)/t.time),this.audio.play("groan",.8),this.hud.set({lives:Math.max(0,this.lives)}),this.hud.flash(this.lives>0?"Goal":"Full time!",1.2)}};var rs=25,yd=9,da=class extends Ye{constructor(t){super(t),this.score=0,this.time=45,this.distance=0,this.speed=16,this.px=0,this.py=0,this.vy=0,this.gates=0,this.tricks=0,this.bonus=0,this.spin=0,this.spinning=!1,this.fromRamp=!1,this.lastJump=null,this.invulnerable=0,this.things=[],this.sinceSpawn=0,this.lastSecond=-1,this.build()}build(){let t=this.scene,e=new C(-.4,.45,-1);t.add(Js({top:"#2a63c9",horizon:"#cfe0f5",bottom:"#eef3fa",sunDir:e,sunColor:"#fffbe8",sunSize:.03})),t.fog=new an("#d6e4f4",60,210),this.lights=oa(t,{sun:"#fff8ec",sunIntensity:2.2,sky:"#cfe0ff",ground:"#ffffff",hemi:.9,dir:[.5,1,.6]}),this.camera.position.set(0,4,7.4),this.camera.fov=64;let n=Pi("#f4f8ff",["#d6e2f4","#ffffff","#e3ecf8"],{count:2600,radius:8,seed:41,repeat:[8,2]}),s=de(256,256,(a,l,c)=>{a.fillStyle="#f7faff",a.fillRect(0,0,l,c),a.strokeStyle="rgba(170,195,230,.55)",a.lineWidth=3;for(let h=14;h<l;h+=24)a.beginPath(),a.moveTo(h,0),a.bezierCurveTo(h+20,c*.3,h-14,c*.7,h+6,c),a.stroke()},{repeat:[3,2]});this.M={piste:it("#ffffff",{rough:.55,map:s}),snow:it("#ffffff",{rough:.7,map:n}),rock:aa("#7d8796",14),red:it("#e0262b",{rough:.4}),blue:it("#1f5ae0",{rough:.4}),ramp:it("#ffffff",{rough:.35,map:ns("#f4f8ff","#2d7cf0",10,{repeat:[2,1]})}),mountain:it("#7c879a",{rough:.9}),cap:it("#ffffff",{rough:.6})},this.tiles=[];for(let a=0;a<yd;a++){let l=new Rt;l.position.z=-a*rs+12;let c=K(new Gt(20,rs),this.M.piste,{cast:!1,receive:!0});c.rotation.x=-Math.PI/2,l.add(c);for(let u of[-1,1]){let d=K(new Gt(80,rs),this.M.snow,{x:u*50,y:-.01,cast:!1,receive:!0});d.rotation.x=-Math.PI/2,l.add(d)}let h=[];for(let u=0;u<7;u++){let d=ih(st(4,9),!0);h.push(d),l.add(d)}this.scatterTrees(h),l.userData.trees=h,t.add(l),this.tiles.push(l)}t.add(fd({radius:330,height:95,y:-10,seed:11})),this.figure=new nn({shirt:"#f0353c",accent:"#ffd61a",pants:"#1b2140",skin:"#e8b89a",hair:"#2f6fe8",shoes:"#222"});let r=it("#ff7a12",{rough:.25,metal:.3}),o=it("#c8c8c8",{rough:.3,metal:.9});for(let a of["left","right"]){let l=this.figure.legs[a].foot;l.add(K(new Vt(.1,.03,1.7),r,{y:-.07,z:-.25}));let c=K(new Vt(.1,.03,.22),r,{y:-.02,z:-1.14});c.rotation.x=.5,l.add(c);let h=K(new ee(.012,.012,1.15,6),o,{y:-.5,z:.15});h.rotation.x=-.3,this.figure.arms[a].hand.add(h)}this.player=new Rt,this.player.add(this.figure.root),t.add(this.player),this.snow=new we(t,{max:900,size:.12,gravity:-1.2,texture:Ys("#ffffff")}),this.spray=new we(t,{max:600,size:.3,gravity:-5,texture:Ys("#ffffff")}),this.sparks=new we(t,{max:300,size:.2,gravity:-4,additive:!0}),this.shake=new Ze;for(let a=0;a<4;a++)this.spawnRow(-60-a*32);this.hud.set({time:45,stat:"Gates 0"})}scatterTrees(t){for(let e of t){let n=Math.random()<.5?-1:1;e.position.set(n*st(11,36),0,st(-rs/2,rs/2))}}spawnRow(t=-170){let e=st(-5.5,5.5),n=Math.random()<.5,s=new Rt;for(let o of[-1,1]){s.add(K(new ee(.045,.045,1.9,8),n?this.M.red:this.M.blue,{x:o*2.1,y:.95}));let a=K(new Gt(.75,.5),n?this.M.red:this.M.blue,{x:o*2.1-o*.4,y:1.5});a.material.side=De,s.add(a)}if(s.position.set(e,0,t),Zs(s),this.scene.add(s),this.things.push({node:s,kind:"gate"}),this.distance>120&&Math.random()<.35){let o=Te(e+(e>0?-5:5),-7,7),a=K(new Vt(2.4,.12,3.2),this.M.ramp,{x:o,y:.45,z:t-14});a.rotation.x=.28,this.scene.add(a),this.things.push({node:a,kind:"ramp"})}let r=this.distance<80?0:1+Math.floor(Math.random()*Math.min(3,1+this.distance/600));for(let o=0;o<r;o++){let a=st(-8,8);if(Math.abs(a-e)<3&&(a=e+(a<e?-3.5:3.5)),Math.abs(a)>9)continue;let l=t+st(-10,10);if(Math.random()<.35){let c=js(.6,this.M.rock);c.scale.set(1.3,.6,1),c.position.set(a,.2,l),this.scene.add(c),this.things.push({node:c,kind:"rock"})}else{let c=ih(st(3,5.5),!0);c.position.set(a,0,l),this.scene.add(c),this.things.push({node:c,kind:"tree"})}}}update(t,e){let n=this.elapsed;this.time-=t;let s=Math.max(0,Math.ceil(this.time));if(s!==this.lastSecond&&(this.lastSecond=s,this.hud.set({time:s}),s<=5&&s>0&&this.audio.play("beep",.6)),this.time<=0){this.finish(this.score,`${Math.floor(this.distance)} m \xB7 ${this.gates} gates \xB7 ${this.tricks} tricks`);return}let r=e.isCrouching&&this.py===0,o=Math.min(34,16+n*.2);this.speed=Je(this.speed,r?o*1.3:o,2,t);let a=this.speed*t;this.distance+=a,this.sinceSpawn+=a,r&&(this.bonus+=t*10);let l=Te(e.lateral*6,-8.5,8.5),c=this.px;this.px=Je(this.px,l,4,t);let h=Te((this.px-c)/Math.max(t,.001)/6,-1,1);this.lastJump===null&&(this.lastJump=e.jumpCount),e.jumpCount!==this.lastJump&&(this.lastJump=e.jumpCount,this.py<=.001?(this.vy=7.5,this.audio.play("whoosh",.7)):this.fromRamp&&!this.spinning&&(this.spinning=!0,this.audio.play("whoosh",.8,1.3))),(this.py>0||this.vy>0)&&(this.vy-=17*t,this.py=Math.max(0,this.py+this.vy*t),this.spinning&&(this.spin+=t*14),this.py===0&&this.land()),this.figure.ski(r?1:0,h),this.player.position.set(this.px,this.py,0),this.player.rotation.y=-h*.35+this.spin,this.py===0&&this.spray.burst({x:this.px,y:.15,z:.5},{count:Math.round(1+Math.abs(h)*6),speed:2.5+Math.abs(h)*3,up:1.2,spread:.6,life:.5,color:"#ffffff"}),Math.random()<t*60&&this.snow.burst({x:this.px+st(-20,20),y:12,z:st(-40,4)},{count:1,speed:1.5,spread:.3,up:-1,life:6,drag:.2,color:"#ffffff"}),this.invulnerable>0?(this.invulnerable-=t,this.figure.root.visible=Math.floor(this.invulnerable*12)%2===0):this.figure.root.visible=!0;let d=this.camera;d.position.set(this.px*.6,4+this.py*.3,7.4),d.fov=62+(this.speed-16)*.4,d.updateProjectionMatrix(),d.lookAt(this.px*.7,.8,-8),this.shake.apply(d,t),dd(this.lights.sun,this.px,-6,[20,40,24]);for(let g of this.tiles)g.position.z+=a,g.position.z-rs/2>14&&(g.position.z-=rs*yd,this.scatterTrees(g.userData.trees));this.sinceSpawn>Math.max(22,34-n*.1)&&(this.sinceSpawn=0,this.spawnRow());for(let g=this.things.length-1;g>=0;g--){let y=this.things[g];y.node.position.z+=a;let m=y.node.position.z;!y.done&&m>-.4&&(y.done=!0,this.resolve(y)),m>16&&(this.scene.remove(y.node),this.things.splice(g,1))}this.snow.shift(a*.3),this.snow.update(t),this.spray.shift(a),this.spray.update(t),this.sparks.update(t);let f=Math.floor(this.distance+this.gates*50+this.bonus);f!==this.score&&(this.score=f,this.hud.set({score:f}))}idle(t){this.figure.ski(0,0),this.snow.update(t)}land(){if(this.vy=0,this.spinning){let t=Math.round(this.spin/(Math.PI*2)),e=150+t*100;this.tricks++,this.bonus+=e,this.audio.play("combo"),this.hud.flash(`${t>0?t*360:180}\xB0 spin  +${e}`,1)}else this.fromRamp&&(this.bonus+=50,this.hud.flash("Big air  +50",.7));this.spin=0,this.spinning=!1,this.fromRamp=!1}resolve(t){let e=Math.abs(t.node.position.x-this.px);switch(t.kind){case"gate":e<2?(this.gates++,this.time+=2,this.audio.play("gate",.7),this.sparks.burst({x:t.node.position.x,y:1.5,z:0},{count:30,speed:4,color:"#9fd8ff",life:.6}),this.hud.set({stat:`Gates ${this.gates}`,time:Math.ceil(this.time)}),this.hud.flash("Gate  +2s",.6)):this.hud.flash("Missed the gate",.7);break;case"ramp":e<1.4&&this.py<.3&&(this.vy=10,this.py=.01,this.fromRamp=!0,this.audio.play("whoosh"),this.hud.flash("Jump for a spin!",.8));break;case"tree":e<.9&&this.py<2.5&&this.crash("Hit a tree  \u22123s");break;case"rock":e<1&&this.py<.35&&this.crash("Rock  \u22123s \xB7 jump next time");break}}crash(t){this.invulnerable>0||(this.invulnerable=1.6,this.time-=3,this.speed*=.4,this.shake.kick(.35),this.audio.play("hit"),this.hud.set({time:Math.max(0,Math.ceil(this.time))}),this.hud.flash(t))}};var vd=75,fa=class extends Ye{constructor(t){super(t),this.score=0,this.hits=0,this.combo=0,this.pads=[],this.padTimer=.8,this.attack=null,this.attackTimer=12,this.lastSecond=-1,this.recoil=0,this.punch={left:0,right:0},this.build()}build(){let t=this.scene;t.background=new ft("#07060b"),t.fog=new an("#07060b",12,40),this.camera.position.set(0,1.6,1.9),this.camera.fov=60,this.camera.lookAt(0,1.4,-2),t.add(new ln("#8a7aff","#1a0f0a",.5));for(let[a,l]of[[-3,"#ffe2c4"],[3,"#ffe2c4"],[0,"#ffffff"]]){let c=new Zo(l,160,30,.5,.6,1.5);c.position.set(a,9,1),c.target.position.set(0,0,-2),c.castShadow=a===0,c.shadow.mapSize.set(1024,1024),t.add(c,c.target)}let e=Pi("#2a3c78",["#22336a","#334a8a"],{count:900,radius:10,seed:5,repeat:[3,3]}),n=K(new Gt(12,12),it("#ffffff",{rough:.8,map:e}),{z:-2,cast:!1,receive:!0});n.rotation.x=-Math.PI/2,t.add(n);let s=it("#d8d8d8",{rough:.3,metal:.6});for(let a of[-5,5])for(let l of[-7,3])t.add(K(new ee(.12,.12,1.6,10),s,{x:a,y:.8,z:l}));["#e53935","#f5f5f5","#1e5ae5"].forEach((a,l)=>{let c=it(a,{rough:.4}),h=.55+l*.4;for(let[u,d,f,g]of[[-5,-7,5,-7],[-5,-7,-5,3],[5,-7,5,3]]){let y=Math.hypot(f-u,g-d),m=K(new ee(.035,.035,y,8),c,{x:(u+f)/2,y:h,z:(d+g)/2,cast:!1});m.rotation.z=Math.PI/2,m.rotation.y=Math.atan2(g-d,f-u)*-1,t.add(m)}});let o=new we(t,{max:120,size:1.6,gravity:0,additive:!0});for(let a=0;a<120;a++)o.burst({x:st(-25,25),y:st(1,9),z:st(-30,-14)},{count:1,speed:0,life:1e9,color:Math.random()<.5?"#4a3020":"#20304a"});o.update(0),this.coach=new nn({shirt:"#222",accent:"#ffcf3a",pants:"#141414",skin:"#b07a55",hair:"#111",shoes:"#111",gloves:"#e2182a"}),this.coach.root.position.set(0,0,-1.9),this.coach.root.rotation.y=Math.PI,t.add(this.coach.root),this.gloves=["#2563eb","#e2182a"].map((a,l)=>{let c=new Rt,h=it(a,{rough:.32,metal:.05}),u=it(new ft(a).multiplyScalar(.55),{rough:.45}),d=it("#f2f2f2",{rough:.5}),f=[[0,-.2],[.09,-.195],[.15,-.16],[.175,-.08],[.17,.02],[.15,.1],[.12,.15],[.11,.17]].map(([x,A])=>new at(x,A)),g=K(new Rr(f,28),h);g.rotation.x=-Math.PI/2,g.scale.set(1,1,.82);let y=K(new Ge(.055,.12,6,12),h,{x:(l?-1:1)*.14,y:-.03,z:-.02});y.rotation.x=Math.PI/2.4;let m=K(new ee(.115,.125,.14,24,1,!0),u,{z:.22});m.rotation.x=Math.PI/2;let p=K(new gn(.118,.016,8,28),d,{z:.17}),b=K(new Vn(.115,24),u,{z:.29}),_=K(new Vn(.045,20),d,{y:.12,z:-.02});return _.rotation.x=-Math.PI/2.6,c.add(g,y,m,p,b,_),c.rotation.order="YXZ",c.visible=!1,t.add(c),{node:c,pos:null,speed:0}}),this.padMat=it("#ff3b30",{rough:.4,emissive:"#ff2a1a",emissiveIntensity:.6}),this.padRingMat=new Xt({color:"#ffd84a",transparent:!0,opacity:.9,side:De}),this.sparks=new we(t,{max:600,size:.08,gravity:-3,additive:!0}),this.shake=new Ze,this.flash=new kt(new Gt(10,6),new Xt({color:"#ff1a1a",transparent:!0,opacity:0,depthTest:!1})),this.flash.position.set(0,1.6,1.8),this.flash.renderOrder=10,t.add(this.flash),this.hud.set({time:vd,lives:null,stat:"Combo 0"})}handToWorld(t,e){return new C(Te(t.x*1.15+Te(e,-1.5,1.5)*.25,-1.4,1.4),Te(.75+t.y*1.35,.6,2.4),.35)}update(t,e){let n=Math.max(0,vd-this.elapsed),s=Math.ceil(n);if(s!==this.lastSecond&&(this.lastSecond=s,this.hud.set({time:s}),s<=3&&s>0&&this.audio.play("beep",.6)),n<=0){this.finish(this.score,`${this.hits} punches landed`);return}[e.leftHand,e.rightHand].forEach((l,c)=>{let h=this.gloves[c];if(!l){h.node.visible=!1,h.pos=null;return}let u=this.handToWorld(l,e.lateral);h.pos&&(h.speed=u.distanceTo(h.pos)/Math.max(t,.001)),h.pos=u,h.node.visible=!0,h.lunge=Math.max(0,(h.lunge??0)-t*5);let d=u.clone();d.z-=h.lunge*1.2,h.node.position.lerp(d,.6),h.node.rotation.set(.85-h.lunge*.6,(c===0?-1:1)*.18,(c===0?1:-1)*.25)}),this.padTimer-=t,this.padTimer<=0&&!this.attack&&(this.spawnPad(),this.padTimer=Math.max(.45,1.15-this.elapsed*.009));for(let l=this.pads.length-1;l>=0;l--){let c=this.pads[l];c.age+=t;let h=Math.max(0,1-c.age/c.life);c.ring.scale.setScalar(1+h*1.2),c.ring.material.color.set(h>.35?"#ffd84a":"#ff3b30"),c.node.scale.setScalar(Math.min(1,c.age*8));let u=this.gloves.find(d=>d.pos&&d.speed>3&&this.overlapOnScreen(d.node.position,c.node.position));if(u){u.lunge=1,this.hitPad(c,h),this.pads.splice(l,1);continue}c.age>=c.life&&(this.combo=0,this.hud.set({stat:"Combo 0"}),this.scene.remove(c.node),this.pads.splice(l,1))}this.updateAttack(t,e),this.recoil=Math.max(0,this.recoil-t*3);let r=this.attack,o={left:0,right:0},a=0;if(r){let l=r.time/r.windup;r.stage==="windup"?a=r.side*.4*Math.min(1,l):o[r.side<0?"left":"right"]=Math.min(1,r.time/.25)}this.coach.guard(this.elapsed,o,a,0),this.coach.root.position.z=-1.9-this.recoil*.25,this.sparks.update(t),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*2),this.camera.position.set(Te(e.lateral,-1.5,1.5)*.25,1.6-(e.isCrouching?.45:0),1.9),this.camera.lookAt(0,1.4,-2),this.shake.apply(this.camera,t)}idle(t){this.coach.guard(this.elapsed+performance.now()/1e3),this.sparks.update(t)}overlapOnScreen(t,e){let n=t.clone().project(this.camera),s=e.clone().project(this.camera);return Math.hypot((n.x-s.x)*this.camera.aspect,n.y-s.y)<.16}spawnPad(){let e=[[-.45,1.75],[.45,1.75],[-.55,1.3],[.55,1.3],[0,1.95],[-.3,1.05],[.3,1.05]].filter(([c,h])=>!this.pads.some(u=>Math.hypot(u.node.position.x-c,u.node.position.y-h)<.3));if(!e.length)return;let[n,s]=yn(e),r=new Rt,o=K(new ee(.17,.17,.09,24),this.padMat);o.rotation.x=Math.PI/2;let a=K(new Vn(.08,20),new Xt({color:"#ffffff"}),{z:.05,cast:!1}),l=new kt(new ji(.2,.235,32),this.padRingMat.clone());l.position.z=.06,r.add(o,a,l),r.position.set(n,s,-1.15),this.scene.add(r),this.pads.push({node:r,ring:l,age:0,life:Math.max(1.1,2.3-this.elapsed*.014)})}hitPad(t,e){this.hits++,this.combo++;let n=1+Math.min(4,Math.floor(this.combo/5)),s=(50+Math.round(e*50))*n;this.score+=s,this.recoil=1,this.audio.play("punch",1,st(.9,1.1)),this.combo%10===0&&(this.audio.play("combo"),this.hud.flash(`${this.combo}-hit combo!`)),this.sparks.burst(t.node.position,{count:40,speed:4,color:"#ffcf5a",life:.5}),this.shake.kick(.04),this.scene.remove(t.node),this.hud.set({score:this.score,stat:`Combo ${this.combo}`})}updateAttack(t,e){if(!this.attack){if(this.attackTimer-=t,this.attackTimer<=0&&this.elapsed>8){let s=Math.random()<.5?"hook":"swing";this.attack={kind:s,side:Math.random()<.5?-1:1,stage:"windup",time:0,windup:Math.max(.6,1-this.elapsed*.004)},this.hud.flash(s==="swing"?"Duck!":this.attack.side<0?"Slip right!":"Slip left!",.9),this.audio.play("whistle",.35);for(let r of this.pads)this.scene.remove(r.node);this.pads=[]}return}let n=this.attack;n.time+=t,n.stage==="windup"&&n.time>=n.windup&&(n.stage="strike",n.time=0),n.stage==="strike"&&n.time>=.18&&!n.resolved&&(n.resolved=!0,(n.kind==="swing"?e.isCrouching:(n.side<0?e.lateral>.35:e.lateral<-.35)||e.isCrouching)?(this.score+=150,this.audio.play("whoosh"),this.hud.flash("Nice dodge  +150",.9)):(this.score=Math.max(0,this.score-100),this.combo=0,this.flash.material.opacity=.5,this.shake.kick(.18),this.audio.play("hit"),this.hud.flash("Caught one  \u2212100",.9)),this.hud.set({score:this.score,stat:`Combo ${this.combo}`})),n.stage==="strike"&&n.time>.5&&(this.attack=null,this.attackTimer=st(6,10))}};var pa=Math.PI/180,ma=6,er=3.75,Bn=128,vv=-70,rh=3,xd=[{label:"Arms up!",arms:[170,170]},{label:"T pose!",arms:[90,90]},{label:"Arms down!",arms:[8,8]},{label:"Left arm up!",arms:[170,8]},{label:"Right arm up!",arms:[8,170]},{label:"Star!",arms:[135,135]},{label:"Squat!",arms:null,crouch:!0},{label:"Step left!",arms:[8,8],x:-1.3,min:2},{label:"Step right!",arms:[8,8],x:1.3,min:2},{label:"Jump!",arms:null,jump:!0,min:3},{label:"Left + T!",arms:[90,90],x:-1.2,min:4},{label:"Right + arms up!",arms:[170,170],x:1.2,min:4},{label:"Low T!",arms:[90,90],crouch:!0,min:5}],_d=["#ff5a3c","#2f8cff","#ffbf1f","#2bd17e","#b45cff","#ff4fa3"],ga=class extends Ye{constructor(t){super(t),this.score=0,this.lives=rh,this.walls=0,this.streak=0,this.level=1,this.speed=9,this.wall=null,this.debris=[],this.pose={left:0,right:0,x:0,crouch:0,air:0},this.build()}build(){let t=this.scene;t.background=new ft("#14122a"),t.fog=new an("#14122a",35,100),this.camera.position.set(0,2.3,6.2),this.camera.lookAt(0,1.3,-8),t.add(new ln("#c9d4ff","#3a2246",1.4));for(let[l,c]of[[-5,"#4d7cff"],[5,"#ff4fa3"]]){let h=new Wn(c,60,30,1.6);h.position.set(l,5,-4),t.add(h)}let e=new An("#ffffff",2.2);e.position.set(-4,10,8),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-6,right:6,top:6,bottom:-6}),t.add(e);let n=de(512,512,(l,c,h)=>{l.fillStyle="#15151f",l.fillRect(0,0,c,h),l.strokeStyle="rgba(120,140,255,.35)",l.lineWidth=3;for(let u=0;u<=8;u++)l.beginPath(),l.moveTo(u*c/8,0),l.lineTo(u*c/8,h),l.stroke(),l.beginPath(),l.moveTo(0,u*h/8),l.lineTo(c,u*h/8),l.stroke()},{repeat:[4,30]}),s=K(new Gt(12,120),it("#ffffff",{rough:.22,metal:.25,map:n}),{z:-50,cast:!1,receive:!0});s.rotation.x=-Math.PI/2,t.add(s),this.floorTex=n,this.strips=[];for(let l of[-1,1]){let c=K(new Vt(.12,.06,120),new Xt({color:l<0?"#2f8cff":"#ff4fa3"}),{x:l*3.4,y:.03,z:-50,cast:!1});t.add(c),this.strips.push(c);for(let h=0;h<12;h++){let u=-h*10;t.add(K(new Vt(.3,6,4),it(h%2?"#3b3566":"#2c2850",{rough:.45,metal:.2}),{x:l*6.5,y:3,z:u}));let d=K(new Vt(.05,5,.12),new Xt({color:h%2?"#ffbf1f":"#ffffff"}),{x:l*6.33,y:3,z:u+1.7,cast:!1});t.add(d)}}let r=de(1024,256,(l,c,h)=>{let u=l.createLinearGradient(0,0,c,0);u.addColorStop(0,"#2f1b6b"),u.addColorStop(.5,"#7a1f6e"),u.addColorStop(1,"#1b3d7a"),l.fillStyle=u,l.fillRect(0,0,c,h),l.fillStyle="rgba(0,0,0,.25)";for(let d=0;d<c;d+=6)l.fillRect(d,0,2,h);l.font="900 150px -apple-system, Helvetica, Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillStyle="#ffffff",l.fillText("WALL RUSH",c/2,h/2+6)}),o=K(new Gt(24,6),new Xt({map:r,fog:!1}),{y:8,z:-95,cast:!1});t.add(o);let a=it("#8a8fa3",{rough:.35,metal:.8});for(let l=0;l<6;l++){let c=-6-l*14;t.add(K(new Vt(13,.25,.25),a,{y:7.5,z:c,cast:!1}));for(let h of[-4,-1.3,1.3,4])t.add(K(new ee(.18,.24,.4,12),new Xt({color:"#fff6dc"}),{x:h,y:7.2,z:c,cast:!1}))}this.figure=new nn({shirt:"#ffbf1f",accent:"#1d1d2c",pants:"#2a2f45",shoes:"#ffffff",number:1}),this.player=new Rt,this.player.add(this.figure.root),t.add(this.player),this.confetti=new we(t,{max:500,size:.12,gravity:-6}),this.shake=new Ze,this.hud.set({score:0,lives:rh,maxLives:rh,stat:"Walls 0"})}start(){this.spawnWall(!0)}pickShape(){let t=xd.filter(n=>(n.min??1)<=this.level&&n!==this.lastShape),e=yn(t);return this.lastShape=e,e}spawnWall(t=!1){let e=t?xd[0]:this.pickShape(),n=yn(_d),s=this.wallTexture(e,n),r=new Rt,o=new kn({map:s,alphaTest:.5,roughness:.55,side:De});for(let l of[-.12,.12])r.add(K(new Gt(ma,er),o,{y:er/2,z:l,cast:!1}));let a=it("#d9dce6",{rough:.3,metal:.8});for(let l of[-1,1])r.add(K(new Vt(.22,er+.2,.4),a,{x:l*(ma/2+.11),y:er/2}));r.add(K(new Vt(ma+.44,.22,.4),a,{y:er+.1})),r.position.z=vv,this.scene.add(r),this.wall={group:r,shape:e,color:n,judged:!1,material:o,tex:s},this.hud.flash(e.label,1.6),this.audio.play("whoosh")}wallTexture(t,e){return de(ma*Bn,er*Bn,(n,s,r)=>{let o=new ft(e),a=n.createLinearGradient(0,0,0,r);a.addColorStop(0,"#"+o.clone().multiplyScalar(1.15).getHexString()),a.addColorStop(1,"#"+o.clone().multiplyScalar(.7).getHexString()),n.fillStyle=a,n.fillRect(0,0,s,r),n.strokeStyle="rgba(0,0,0,.18)",n.lineWidth=3;for(let h=0;h<=s;h+=Bn*.75)n.beginPath(),n.moveTo(h,0),n.lineTo(h,r),n.stroke();for(let h=0;h<=r;h+=Bn*.75)n.beginPath(),n.moveTo(0,h),n.lineTo(s,h),n.stroke();let l=en(7);for(let h=0;h<900;h++)n.fillStyle=`rgba(255,255,255,${l()*.06})`,n.fillRect(l()*s,l()*r,2,2);let c=()=>this.silhouette(n,t,s,r);n.save(),n.strokeStyle="#ffffff",n.fillStyle="#ffffff",n.shadowColor="#ffffff",n.shadowBlur=24,c(),n.restore(),n.globalCompositeOperation="destination-out",c(.07),n.globalCompositeOperation="source-over"})}silhouette(t,e,n,s,r=0){let o=y=>n/2+(y+(e.x??0))*Bn,a=y=>s-y*Bn,l=e.jump?.75:0,c=e.crouch?.48:0,h=.98-c+l,u=1.5-c+l,d=1.75-c+l,f=(.36-r*2)*Bn;t.lineCap="round",t.lineJoin="round",t.lineWidth=f,t.beginPath();for(let y of[-1,1])t.moveTo(o(y*.12),a(h)),e.crouch?(t.lineTo(o(y*.45),a(.45+l)),t.lineTo(o(y*.3),a(.05+l))):t.lineTo(o(y*.24),a(.05+l));t.moveTo(o(0),a(h)),t.lineTo(o(0),a(u)),t.stroke(),t.lineWidth=(.56-r*2)*Bn,t.beginPath(),t.moveTo(o(0),a(h+.05)),t.lineTo(o(0),a(u-.05)),t.stroke(),t.lineWidth=f,t.beginPath();let g=e.arms??[60,60];[-1,1].forEach((y,m)=>{let p=g[m]*pa,b=y*.22,_=u-.05;t.moveTo(o(b),a(_)),t.lineTo(o(b+y*Math.sin(p)*.72),a(_-Math.cos(p)*.72))}),t.stroke(),e.arms||(t.beginPath(),t.ellipse(o(0),a(u),(.95-r)*Bn,(.55-r)*Bn,0,0,Math.PI*2),t.fill()),t.beginPath(),t.arc(o(0),a(d+.05),(.24-r)*Bn,0,Math.PI*2),t.fill()}judge(t,e){let n=this.pose,s=Math.abs(n.x-(t.x??0));if(s>.6)return{ok:!1,reason:t.x?t.x<0?"Step further left!":"Step further right!":"Stay in the middle!"};if(t.crouch&&n.crouch<.5)return{ok:!1,reason:"Squat lower!"};if(t.jump&&n.air<.5)return{ok:!1,reason:"Jump through!"};let r=0;if(t.arms)for(let[o,a]of[[0,"left"],[1,"right"]]){let l=t.arms[o],c=e[a];if(c===null)continue;let h=Math.abs(c-l);if(r=Math.max(r,h),h>42){let u=a==="left"?"Left":"Right";return{ok:!1,reason:c<l?`${u} arm higher!`:`${u} arm lower!`}}}return{ok:!0,perfect:r<20&&s<.3}}pass(t){this.walls+=1,this.streak+=1;let e=(t.perfect?150:100)*Math.min(4,1+Math.floor(this.streak/4));this.score+=e,this.hud.flash(t.perfect?`Perfect! +${e}`:`+${e}`,.9),this.audio.play(t.perfect?"combo":"gate");for(let n=0;n<3;n++)this.confetti.burst(new C(st(-2,2),2.5,-.5),{count:30,speed:5,up:1.4,color:yn(_d),life:1.4,colorJitter:.3});this.walls%5===0&&(this.level+=1,this.speed=Math.min(20,this.speed+1.4),this.hud.flash(`Level ${this.level}!`,1.2))}crash(t){this.streak=0,this.lives-=1,this.audio.play("explosion"),this.shake.kick(.25),this.hud.flash(t.reason,1.4);let e=it(this.wall.color,{rough:.7});for(let n=0;n<26;n++){let s=st(.3,.7),r=K(new Vt(s,s,s*.6),e,{x:st(-2.6,2.6),y:st(.3,3.4),z:0});r.userData.v=new C(st(-3,3),st(1,5),st(-1,6)),r.userData.spin=new C(st(-6,6),st(-6,6),st(-6,6)),r.userData.life=1.8,this.scene.add(r),this.debris.push(r)}this.wall.group.visible=!1}readPose(t,e){let n=(l,c)=>{if(!l)return null;let h=(l.x-c*.12)*1.7,u=(l.y-.43)*2.3;return Math.atan2(Math.abs(h),-u)/pa},s=n(t.leftHand,-1),r=n(t.rightHand,1),o=this.pose,a=1-Math.exp(-e*14);return o.left=s===null?o.left:(o.left??s)+(s-(o.left??s))*a,o.right=r===null?o.right:(o.right??r)+(r-(o.right??r))*a,o.leftSeen=s!==null,o.rightSeen=r!==null,o.x=Je(o.x,Te(t.lateral*1.1,-2,2),12,e),o.crouch=Je(o.crouch,t.isCrouching?1:0,14,e),o.air=Je(o.air,t.isAirborne?1:0,18,e),{left:o.leftSeen?o.left:null,right:o.rightSeen?o.right:null}}poseFigure(){let t=this.figure,e=this.pose;if(t.run(0,0),t.set(t.arms.left.shoulder,0,0,-(e.left??8)*pa),t.set(t.arms.right.shoulder,0,0,(e.right??8)*pa),t.set(t.arms.left.elbow),t.set(t.arms.right.elbow),e.crouch>.05){let n=e.crouch;t.hips.position.y=.95-.42*n,t.set(t.legs.left.hip,1.3*n,0,-.25*n),t.set(t.legs.right.hip,1.3*n,0,.25*n),t.set(t.legs.left.knee,-2.1*n),t.set(t.legs.right.knee,-2.1*n),t.set(t.chest,.25*n)}this.player.position.set(e.x,e.air*.8,0)}idle(t){this.poseFigure(),this.confetti.update(t)}update(t,e){let n=this.readPose(e,t);this.poseFigure(),this.floorTex.offset.y-=t*this.speed/4;let s=this.wall;if(s){if(s.group.position.z+=this.speed*t,!s.judged&&s.group.position.z>=-.1){s.judged=!0;let r=this.judge(s.shape,n);r.ok?this.pass(r):this.crash(r)}if(s.group.position.z>9){if(this.scene.remove(s.group),s.material.dispose(),s.tex.dispose(),s.group.traverse(r=>r.geometry?.dispose()),this.wall=null,this.lives<=0){this.finish(this.score,`${this.walls} walls cleared`);return}this.spawnWall()}}for(let r=this.debris.length-1;r>=0;r--){let o=this.debris[r],a=o.userData;a.v.y-=12*t,o.position.addScaledVector(a.v,t),o.position.y<.2&&(o.position.y=.2,a.v.y*=-.35,a.v.x*=.7,a.v.z*=.7),o.rotation.x+=a.spin.x*t,o.rotation.y+=a.spin.y*t,a.life-=t,a.life<=0&&(this.scene.remove(o),o.geometry.dispose(),this.debris.splice(r,1))}this.confetti.update(t),this.camera.position.set(0,2.3,6.2),this.shake.apply(this.camera,t),this.hud.set({score:this.score,lives:Math.max(0,this.lives),stat:`Walls ${this.walls}`})}showcase(){this.wall&&(this.wall.group.position.z=-9)}};var oh=Math.PI/180,bd=90,ah=3,lh=-12,ch={body:{y:1.1,color:"#ffd21f",hint:"Step aside!"},high:{y:1.62,color:"#ff3b30",hint:"Duck!"},low:{y:.28,color:"#2f8cff",hint:"Jump!"}},ya=class extends Ye{constructor(t){super(t),this.score=0,this.lives=ah,this.dodges=0,this.catches=0,this.combo=0,this.balls=[],this.throwTimer=2,this.lastSecond=-1,this.me={x:0,crouch:0,air:0,left:8,right:8,hands:[null,null]},this.build()}build(){let t=this.scene;t.background=new ft("#c9b79a"),t.fog=new an("#c9b79a",30,70),this.camera.position.set(0,2.1,4.6),this.camera.lookAt(0,1.2,-8),t.add(new ln("#fff6e6","#8a6440",1.1));let e=new An("#fff1d6",2);e.position.set(-6,12,6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-10,right:10,top:10,bottom:-16}),t.add(e);let n=de(1024,1024,(p,b,_)=>{let x=en(4);for(let A=0;A<_;A+=32)for(let T=A/32%2?-60:0;T<b;T+=180){let E=.88+x()*.22;p.fillStyle=`rgb(${Math.round(214*E)},${Math.round(166*E)},${Math.round(112*E)})`,p.fillRect(T,A,178,30)}p.globalAlpha=.08;for(let A=0;A<2500;A++)p.fillStyle=x()<.5?"#5a3a1a":"#fff",p.fillRect(x()*b,x()*_,1+x()*8,1);p.globalAlpha=1},{repeat:[4,6]}),s=K(new Gt(18,34),it("#ffffff",{rough:.35,map:n}),{z:-7,cast:!1,receive:!0});s.rotation.x=-Math.PI/2,t.add(s);let r=new Xt({color:"#1d4fd8"}),o=K(new Gt(14,.1),r,{y:.01,z:-6,cast:!1});o.rotation.x=-Math.PI/2,t.add(o);let a=K(new ji(1.7,1.8,48),r,{y:.011,z:-6,cast:!1});a.rotation.x=-Math.PI/2,t.add(a);for(let p of[-7,7]){let b=K(new Gt(.1,30),r,{x:p,y:.01,z:-7,cast:!1});b.rotation.x=-Math.PI/2,t.add(b)}let l=de(512,512,(p,b,_)=>{p.fillStyle="#e9e3d6",p.fillRect(0,0,b,_),p.strokeStyle="rgba(0,0,0,.12)",p.lineWidth=3;for(let x=0;x<_;x+=32){p.beginPath(),p.moveTo(0,x),p.lineTo(b,x),p.stroke();for(let A=x/32%2?32:0;A<b;A+=64)p.beginPath(),p.moveTo(A,x),p.lineTo(A,x+32),p.stroke()}p.fillStyle="#1d4fd8",p.fillRect(0,_-120,b,70)},{repeat:[6,2]}),c=it("#ffffff",{rough:.85,map:l});t.add(K(new Gt(30,12),c,{y:6,z:-24,cast:!1,receive:!0}));for(let p of[-9,9]){let b=K(new Gt(34,12),c,{x:p,y:6,z:-7,cast:!1,receive:!0});b.rotation.y=p<0?Math.PI/2:-Math.PI/2,t.add(b)}let h=K(new Gt(18,34),new Xt({color:"#a9a397"}),{y:11,z:-7,cast:!1});h.rotation.x=Math.PI/2,t.add(h);let u=new Xt({color:"#fffbe8"});for(let p=0;p<4;p++)for(let b of[-4.5,0,4.5])t.add(K(new Vt(1.6,.08,.5),u,{x:b,y:10.9,z:-1-p*6,cast:!1}));let d=new Xt({color:"#eaf4ff"});for(let p=0;p<5;p++)t.add(K(new Gt(3.2,1.6),d,{x:-10+p*5,y:9.2,z:-23.9,cast:!1}));let f=it("#9a6a3c",{rough:.7});for(let p of[-1,1])for(let b=0;b<4;b++)t.add(K(new Vt(1.2,.12,22),f,{x:p*(7.6+b*.45),y:.4+b*.45,z:-9}));let g=it("#ffffff",{rough:.4});t.add(K(new Vt(1.8,1.05,.06),g,{y:4,z:-23.8}));let y=K(new gn(.23,.02,8,24),it("#ff5a1f",{rough:.3,metal:.6}),{y:3.05,z:-23.4});y.rotation.x=Math.PI/2,t.add(y);let m=de(512,128,(p,b,_)=>{p.fillStyle="#c8102e",p.fillRect(0,0,b,_),p.fillStyle="#fff",p.font="900 64px -apple-system, Helvetica, Arial, sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText("DODGE CHAMPS",b/2,_/2+4)});t.add(K(new Gt(5,1.25),new Xt({map:m}),{x:-7,y:7,z:-23.85,cast:!1})),this.throwers=[-3.2,0,3.2].map((p,b)=>{let _=new nn({shirt:"#c8102e",accent:"#ffffff",pants:"#1b1b1b",skin:["#c58c62","#7a4b2f","#e8b89a"][b],hair:["#111","#2b1a0e","#c7902c"][b],number:[3,8,11][b]});return _.root.position.set(p,0,lh),_.root.rotation.y=Math.PI,t.add(_.root),{f:_,x:p,wind:0,out:0,phase:Math.random()*6}}),this.figure=new nn({shirt:"#1d4fd8",accent:"#ffffff",pants:"#202430",shoes:"#ffffff",number:7}),this.player=new Rt,this.player.add(this.figure.root),t.add(this.player),this.ballMat=it("#ffffff",{rough:.55,map:ns("#e3262b","#c51e23",6)}),this.marker=K(new ji(.3,.42,32),new Xt({color:"#ffd21f",transparent:!0,opacity:.9}),{y:.02,cast:!1}),this.marker.rotation.x=-Math.PI/2,this.marker.visible=!1,t.add(this.marker),this.puffs=new we(t,{max:300,size:.18,gravity:-2}),this.shake=new Ze,this.hud.set({score:0,lives:ah,maxLives:ah,time:bd,stat:"Dodges 0"})}startThrow(){let t=this.throwers.filter(a=>a.out<=0&&a.wind<=0);if(!t.length)return;let e=yn(t),s=1+Math.floor(this.elapsed/20)<2?["body","body","high"]:["body","high","low","body"],r=yn(s),o=Te(this.me.x+st(-.3,.3),-2.4,2.4);e.wind=.75,e.pending={kind:r,aimX:o},this.marker.material.color.set(ch[r].color),this.marker.position.x=o,this.marker.visible=!0,this.hud.flash(ch[r].hint,.9)}release(t){let{kind:e,aimX:n}=t.pending;t.pending=null;let s=Math.min(26,15+this.elapsed*.12),r=new C(t.x+.35,1.7,lh+.4),o=new C(n,ch[e].y,0),a=(o.z-r.z)/s,l=-6,c=new C((o.x-r.x)/a,(o.y-r.y-.5*l*a*a)/a,s),h=K(new pe(.2,20,14),this.ballMat,{x:r.x,y:r.y,z:r.z});this.scene.add(h),this.balls.push({mesh:h,vel:c,g:l,kind:e,thrower:t,judged:!1}),this.audio.play("whoosh")}readArms(t){let e=this.me;[[t.leftHand,-1,"left",0],[t.rightHand,1,"right",1]].forEach(([n,s,r,o])=>{if(!n){e.hands[o]=null;return}let a=(n.x-s*.12)*1.7,l=(n.y-.43)*2.3;e[r]=Math.atan2(Math.abs(a),-l)/oh,e.hands[o]=new C(e.x+n.x*.95,.95+n.y*1.27-e.crouch*.42+e.air*.7,0)})}judge(t){let e=this.me,n=t.mesh.position;if(e.hands.filter(Boolean).find(a=>a.distanceTo(n)<.55))return"catch";if(Math.abs(n.x-e.x)>.48)return"dodge";let r=e.air*.65,o=1.85-e.crouch*.75+e.air*.65;return n.y>r-.1&&n.y<o+.1?"hit":"dodge"}onCatch(t){this.catches+=1,this.combo+=1,this.score+=250,t.thrower.out=3.5,this.hud.flash("Caught it! Thrower's out! +250",1.2),this.audio.play("cheer"),this.puffs.burst(t.mesh.position.clone(),{count:30,speed:3,color:"#ffd21f",life:.7}),t.vel.set((t.thrower.x-t.mesh.position.x)*1.2,4,-22),t.returning=!0}onDodge(){this.dodges+=1,this.combo+=1;let t=50*Math.min(5,1+Math.floor(this.combo/3));this.score+=t,this.combo%5===0&&this.hud.flash(`${this.combo} in a row!`,.9),this.audio.play("select")}onHit(t){this.lives-=1,this.combo=0,this.audio.play("hit"),this.shake.kick(.2),this.hud.flash(this.lives>0?"Ouch! You got hit":"Out!",1.1),this.puffs.burst(t.mesh.position.clone(),{count:24,speed:2.5,color:"#ffffff",life:.5}),t.vel.set(st(-3,3),3,-6),this.hitFlash=.4}poseFigures(t){let e=this.figure,n=this.me;if(e.run(0,0),e.set(e.arms.left.shoulder,0,0,-n.left*oh),e.set(e.arms.right.shoulder,0,0,n.right*oh),n.crouch>.05){let s=n.crouch;e.hips.position.y=.95-.42*s,e.set(e.legs.left.hip,1.3*s,0,-.2*s),e.set(e.legs.right.hip,1.3*s,0,.2*s),e.set(e.legs.left.knee,-2.1*s),e.set(e.legs.right.knee,-2.1*s),e.set(e.chest,.3*s)}n.air>.05&&e.jump(n.air),this.player.position.set(n.x,n.air*.65,0),this.hitFlash>0&&(this.hitFlash-=t,e.set(e.chest,-.4,0,.3));for(let s of this.throwers){s.phase+=t;let r=s.f;if(s.out>0){s.out-=t,r.root.position.y=-.6,r.root.rotation.z=1.2,s.out<=0&&(r.root.position.y=0,r.root.rotation.z=0,this.hud.flash("Thrower's back in!",.8));continue}if(r.run(s.phase*3,.15),r.root.position.x=s.x+Math.sin(s.phase*.9)*.4,s.wind>0){s.wind-=t;let o=1-s.wind/.75;r.set(r.arms.right.shoulder,-2.6*o,0,.3),r.set(r.chest,-.25*o,.4*o),s.wind<=0&&(r.set(r.arms.right.shoulder,1.4,0,.2),this.release(s),this.marker.visible=this.throwers.some(a=>a.wind>0))}}}idle(t){this.poseFigures(t),this.puffs.update(t)}update(t,e){let n=Math.max(0,Math.ceil(bd-this.elapsed));if(n!==this.lastSecond&&(this.lastSecond=n,n<=5&&n>0&&this.audio.play("beep")),n<=0||this.lives<=0){this.finish(this.score,`${this.dodges} dodges \xB7 ${this.catches} catches`);return}let s=this.me;s.x=Je(s.x,Te(e.lateral*1.2,-2.6,2.6),12,t),s.crouch=Je(s.crouch,e.isCrouching?1:0,16,t),s.air=Je(s.air,e.isAirborne?1:0,20,t),this.readArms(e),this.poseFigures(t),this.throwTimer-=t,this.throwTimer<=0&&(this.startThrow(),this.throwTimer=Math.max(.9,2.3-this.elapsed*.017)*st(.8,1.2));for(let r=this.balls.length-1;r>=0;r--){let o=this.balls[r],a=o.mesh;if(o.vel.y+=o.g*t,a.position.addScaledVector(o.vel,t),a.rotation.x+=t*8,a.position.y<.2&&(a.position.y=.2,o.vel.y*=-.55,o.vel.x*=.8),!o.judged&&!o.returning&&a.position.z>=0){o.judged=!0;let l=this.judge(o);l==="catch"?this.onCatch(o):l==="hit"?this.onHit(o):this.onDodge()}(a.position.z>8||a.position.z<lh-6)&&(this.scene.remove(a),a.geometry.dispose(),this.balls.splice(r,1))}this.puffs.update(t),this.camera.position.set(s.x*.35,2.1,4.6),this.camera.lookAt(s.x*.2,1.2,-8),this.shake.apply(this.camera,t),this.hud.set({score:this.score,lives:Math.max(0,this.lives),time:n,stat:`Dodges ${this.dodges}`})}showcase(){this.startThrow()}};var xn=[{id:"canyonRun",title:"Canyon Run",tagline:"Sprint from sunset into the night",moves:["Step left / right to switch lanes","Jump hurdles and gaps","Crouch under bridges","Grab magnets, shields and 2\xD7 coins"],pro:!1,pauseHold:1,make:i=>new la(i)},{id:"fruitFrenzy",title:"Fruit Frenzy",tagline:"Your hands are blades",moves:["Swipe fast through flying fruit","Slice several at once for combos","Golden banana starts a frenzy","Don't touch the bombs!"],pro:!1,pauseHold:2,make:i=>new ca(i)},{id:"penaltySave",title:"Penalty Save",tagline:"Be the hero under the floodlights",moves:["Reach with your hands to save shots","Step sideways to cover the goal","Shots curl, dip and blast as you level up"],pro:!1,pauseHold:2,make:i=>new ua(i)},{id:"wallRush",title:"Wall Rush",tagline:"Strike the pose before the wall hits",moves:["Copy the shape cut into the wall","Arms up, T pose, star, squat\u2026","Step or jump when the hole moves","Perfect fits score extra"],pro:!1,pauseHold:2.5,make:i=>new ga(i)},{id:"alpineRush",title:"Alpine Rush",tagline:"Beat the clock down the mountain",moves:["Lean / step to steer through gates (+2s)","Hit ramps, jump in the air to spin","Crouch into a tuck for speed"],pro:!0,pauseHold:1,make:i=>new da(i)},{id:"boxingBlitz",title:"Boxing Blitz",tagline:"75 seconds in the ring with a coach",moves:["Punch the glowing pads","Duck swings, slip hooks left / right","Chain hits for multipliers"],pro:!0,pauseHold:2,make:i=>new fa(i)},{id:"dodgeball",title:"Dodgeball",tagline:"Three throwers. One of you.",moves:["Step aside from yellow throws","Duck the red ones, jump the blue","Catch a ball to knock a thrower out"],pro:!0,pauseHold:2,make:i=>new ya(i)}];var os=new URL("./",import.meta.url).href,sn=hd(),va=new URLSearchParams(location.search),me=i=>{let t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstElementChild},Wt=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),gh=sn?"https://movecam.bhswebsite.org":"",Md="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Cd=/^MC-[A-Z2-9]{4}-[A-Z2-9]{4}$/,di=["#ff6a2b","#e8453c","#f2b134","#4cc26b","#1fb5a8","#2f8cff","#5a5ff0","#a157e8","#e85aa8","#b07a4f","#5b6b7a","#3a3f47"],rt={id:Me("userId",null),deviceId:Me("deviceId",null),plan:Me("plan","free"),expiresAt:Me("planExpiry",null),username:Me("username",null),avatar:Me("avatar",0),email:Me("email",null),token:Me("token",null),get signedIn(){return!!(this.token&&this.username)},get isPro(){return this.plan==="free"?!1:!this.expiresAt||new Date(this.expiresAt)>new Date}};if(!Cd.test(rt.id??"")){let i=()=>Md[Math.floor(Math.random()*Md.length)];rt.id=`MC-${i()}${i()}${i()}${i()}-${i()}${i()}${i()}${i()}`,_e("userId",rt.id)}Cd.test(rt.deviceId??"")||(rt.deviceId=rt.signedIn?null:rt.id,_e("deviceId",rt.deviceId));async function hi(i,{method:t="GET",body:e,auth:n=!1}={}){let s={};e&&(s["content-type"]="application/json"),n&&rt.token&&(s.authorization="Bearer "+rt.token);try{let r=await fetch(gh+i,{method:t,headers:s,body:e?JSON.stringify(e):void 0}),o=await r.json().catch(()=>({}));return{ok:r.ok,status:r.status,data:o}}catch{return{ok:!1,status:0,data:{error:"Can't reach MoveCam. Check your internet connection."}}}}function xa(i){i.token&&(rt.token=i.token,_e("token",i.token)),rt.username=i.username,_e("username",i.username),rt.avatar=i.avatar??0,_e("avatar",rt.avatar),rt.email=i.email??null,_e("email",rt.email),i.playerId&&i.playerId!==rt.id&&(rt.deviceId||(rt.deviceId=rt.id,_e("deviceId",rt.deviceId)),rt.id=i.playerId,_e("userId",i.playerId));for(let[t,e]of Object.entries(i.best??{}))e>Ea(t)&&_e("best."+t,e);sn&&Xn({type:"account",playerId:rt.id,username:rt.username}),Sa(i.plan??"free",i.expiresAt??null)}function Pd(i){or(),rt.token=null,rt.username=null,rt.email=null,_e("token",null),_e("username",null),_e("email",null),rt.deviceId&&(rt.id=rt.deviceId,_e("userId",rt.id)),sn&&Xn({type:"account",playerId:null,username:null}),Sa("free",null),i&&_n(i),L.screen==="game"&&fi(),zr()}async function Sd(){if(!rt.signedIn)return;let i=await hi("/api/account/me",{auth:!0});i.ok?xa(i.data):i.status===401&&Pd("You were signed out. Sign in again to keep playing.")}function yh(i=30){let t=`width:${i}px;height:${i}px;font-size:${Math.round(i*.48)}px`;return rt.signedIn?`<span class="avatar" style="${t};background:${di[rt.avatar%di.length]}">${Wt(rt.username[0].toUpperCase())}</span>`:`<span class="avatar empty" style="${t}"><svg viewBox="0 0 24 24" width="${Math.round(i*.6)}" height="${Math.round(i*.6)}"><circle cx="12" cy="8" r="4.2" fill="currentColor"/><path d="M3.5 21c.8-4.4 4.2-6.6 8.5-6.6s7.7 2.2 8.5 6.6" fill="currentColor"/></svg></span>`}async function wd(i){if(!sn)try{let t=await fetch(gh+"/api/checkin",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:rt.id,appVersion:"web",launch:i,macOS:navigator.userAgent.slice(0,40)})});if(!t.ok)return;let e=await t.json();Sa(e.plan,e.expiresAt)}catch{}}function Sa(i,t){rt.plan=i,rt.expiresAt=t,_e("plan",i),_e("planExpiry",t),Rn()}var _a=[];function Or(i,t,e,n){if(!Me("shareUsage",!0))return;let s={type:i,t:new Date().toISOString()};if(t&&(s.game=t),e!==void 0&&(s.score=Math.round(e)),n!==void 0&&(s.seconds=Math.round(n)),sn){Xn({type:"event",event:s});return}_a.push(s),(i==="finish"||i==="quit")&&Id()}async function Id(){if(!_a.length||sn)return;let i=_a.splice(0,50);try{await fetch(gh+"/api/events",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:rt.id,events:i})})}catch{_a.unshift(...i)}}setInterval(Id,2e4);var bn=document.getElementById("app"),$t=new es,Bt=new ra(os),vh=document.createElement("canvas");vh.id="stage";bn.append(vh);var Ve=new zo({canvas:vh,antialias:!0,powerPreference:"high-performance"}),Nr=[2,1.5,1.25,1],nr=Nr.findIndex(i=>i<=Math.min(window.devicePixelRatio,1.5));nr<0&&(nr=Nr.length-1);Ve.setPixelRatio(Math.min(window.devicePixelRatio,Nr[nr]));Ve.shadowMap.enabled=!0;Ve.shadowMap.type=Hc;Ve.toneMapping=Gc;Ve.toneMappingExposure=1;Ve.outputColorSpace=$e;var ir=new $s(bn),Kn=new sa;$t.onPeople((i,t)=>Kn.process(i,t));var wa=[new $s(bn,{player:1}),new $s(bn,{player:2})];wa.forEach(i=>i.show(!1));var xh=me('<div id="duoDivider" class="hidden"></div>');bn.append(xh);ir.show(!1);var L={screen:"menu",phase:"waiting",selected:Math.max(0,xn.findIndex(i=>i.id===Me("lastGame","canyonRun"))),game:null,info:null,gameStarted:!1,startedAt:0,result:null,isBest:!1,overlay:null,countdownTimer:null,goodSince:null,missingSince:null,stepArmed:!0},Ue=me(`<div id="menu">
  <header>
    <div class="brand">
      <img src="${os}icons/icon-180.png" alt="">
      <span class="name">MoveCam</span><span class="sep"></span>
      <button class="btn profile" id="profileBtn" title="Your account"></button>
      <select id="cameraSelect" title="Camera"></select>
      <span id="planBadge" class="btn"></span>
      <button class="btn" id="musicBtn" title="Music"></button>
      <button class="btn" id="settingsBtn" title="Settings">\u2699\uFE0E</button>
      <button class="btn ${sn||!document.fullscreenEnabled?"hidden":""}" id="fullBtn" title="Full screen">\u2922</button>
      <button class="btn accent hidden" id="updateBtn" title="A new version is available">\u2B07\uFE0E Update</button>
    </div>
    <h1>Games</h1>
    <div class="sub">Swing an arm out to the side to choose. Raise a hand to play. Or just tap.</div>
    <div class="modes" id="modes"><button data-duo="0">\u{1F464} 1 player</button><button data-duo="1">\u{1F465} 2 players, 1 camera</button></div>
    <button class="btn party-btn" id="partyBtn">\u{1F310} Play online with friends</button>
  </header>
  <div class="carousel" id="carousel"></div>
  <div class="hints">
    <div class="hint"><div class="tile">\u{1F44B}</div><div><b>Swing an arm out</b><span>Choose a game</span></div></div>
    <div class="hint"><div class="tile">\u270B</div><div><b>Raise a hand</b><span>Play</span></div></div>
    <div class="hint"><div class="tile">\u{1F64C}</div><div><b>Both hands up</b><span>Pause or go back</span></div></div>
    <div class="kbd">Keyboard: \u2190 \u2192 \xB7 Space \xB7 Esc</div>
  </div>
</div>`);bn.append(Ue);var Li=me(`<div id="live" class="${sn?"hidden":""}">
  <div class="frame"><div class="offline">Camera off</div><canvas></canvas><div class="rings"></div>
  <div class="status"><span class="msg">Can't see anyone</span></div></div></div>`);bn.append(Li);var Dr=Li.querySelector("canvas"),Br=me('<button id="pauseBtn" class="hidden" aria-label="Pause">\u275A\u275A</button>');bn.append(Br);var ui=me('<div id="countdown" class="hidden"></div>'),fh=me('<div id="holdRing" class="hidden"><svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,.2)" stroke-width="6" fill="none"/><circle class="arc" cx="32" cy="32" r="28" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176" transform="rotate(-90 32 32)"/></svg><div>Keep your hands up to pause</div></div>'),ba=me('<div id="toast" class="hidden"></div>');bn.append(ui,fh,ba);var Ed;function _n(i){ba.textContent=i,ba.classList.remove("hidden"),clearTimeout(Ed),Ed=setTimeout(()=>ba.classList.add("hidden"),3e3)}function Ea(i){return Me("best."+i,0)}function Rn(){let i=Ue.querySelector("#carousel");i.innerHTML="",xn.forEach((s,r)=>{let o=s.pro&&!rt.isPro,a=Ea(s.id),l=me(`<div class="card ${r===L.selected?"selected":""} ${o?"locked":""}">
      <div class="art" style="background-image:url('${os}cards/${s.id}.jpg')">
        <div class="tags">${s.pro?'<span class="tag pro">PRO</span>':'<span class="tag dark">FREE</span>'}${o?'<span class="tag dark">\u{1F512}</span>':""}</div>
      </div>
      <div class="body">
        <div class="title">${Wt(s.title)}</div>
        <div class="tagline">${Wt(s.tagline)}</div>
        <ul>${s.moves.map(c=>`<li>${Wt(c)}</li>`).join("")}</ul>
        <div class="foot"><span class="best">${a>0?"Best "+a.toLocaleString():"Not played yet"}</span>
        <span class="play">${o?"\u{1F512} Pro coming soon":"\u270B Play"}</span></div>
      </div></div>`);l.addEventListener("click",()=>{Bt.unlock(),L.selected===r?Sh():(L.selected=r,Bt.play("select"),Rn())}),i.append(l)}),i.children[L.selected]?.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});let e=Ue.querySelector("#planBadge");e.textContent=rt.isPro?rt.plan==="trial"?"\u2605 Pro trial":"\u2605 Pro":"Free plan",e.style.background=rt.isPro?"var(--pro)":"",e.style.color=rt.isPro?"#000":"",Ue.querySelector("#musicBtn").textContent=Bt.settings.music?"\u266B":"\u266B\u0338",Ue.querySelector("#profileBtn").innerHTML=yh(24)+`<span>${rt.signedIn?Wt(rt.username):"Sign in"}</span>`,Ue.querySelector("#partyBtn").innerHTML=At.view?`\u{1F310} Party ${At.view.code} \xB7 ${At.view.players.length} in`:"\u{1F310} Play online with friends";let n=Me("duoMode",!1);Ue.querySelectorAll("#modes button").forEach(s=>s.classList.toggle("on",s.dataset.duo==="1"===n)),Ue.querySelector(".sub").textContent=n?"Two players side by side: Player 1 on the left, Player 2 on the right. Swing an arm to choose, raise a hand to play.":"Swing an arm out to the side to choose. Raise a hand to play. Or just tap."}function sr(i){let t=Math.max(0,Math.min(xn.length-1,L.selected+i));t!==L.selected&&(L.selected=t,Bt.play("select"),Rn())}Ue.querySelector("#musicBtn").addEventListener("click",()=>{Bt.unlock(),Bt.set("music",!Bt.settings.music),Rn()});Ue.querySelector("#settingsBtn").addEventListener("click",()=>Ld());Ue.querySelector("#profileBtn").addEventListener("click",()=>{Bt.unlock(),Ta()});Ue.querySelectorAll("#modes button").forEach(i=>i.addEventListener("click",()=>{Bt.unlock(),_e("duoMode",i.dataset.duo==="1"),Bt.play("select"),Rn(),i.dataset.duo==="1"&&_n("Two players: stand side by side, both fully in view.")}));Ue.querySelector("#partyBtn").addEventListener("click",()=>{Bt.unlock(),zr()&&kd()});Ue.querySelector("#fullBtn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()});function zn(i){Pe(),L.overlay=i,bn.append(i)}function Pe(){L.overlay?.remove(),L.overlay=null}function Ui(i,t,e,n,s){let r=me(`<button class="choice ${n}"><span class="sym">${i}</span><b>${t}</b><span>${e}</span></button>`);return r.addEventListener("click",s),r}function xv(){let i=xn[L.selected],t=me(`<div class="scrim"><div class="panel">
    <span class="tag pro">PRO</span>
    <h2>${Wt(i.title)} is part of MoveCam Pro</h2>
    <p>Pro isn't on sale yet. Want early access? Send your username to a moderator and they can unlock it for you.</p>
    <div class="idbox"><span>${Wt(rt.username??"")}</span><button class="btn" id="copyId">Copy</button></div>
    <button class="btn accent big" id="okBtn">OK</button>
    <p style="font-size:12px;color:var(--tertiary)">Raise a hand or press Space to close</p></div></div>`);t.querySelector("#copyId").addEventListener("click",()=>navigator.clipboard?.writeText(rt.username??"")),t.querySelector("#okBtn").addEventListener("click",Pe),t.addEventListener("click",e=>{e.target===t&&Pe()}),t.dataset.kind="pro",zn(t)}function Ta(i="signup",{gate:t=!1}={}){let e=s=>di.map((r,o)=>`<button type="button" class="swatch ${o===s?"on":""}" data-i="${o}" style="background:${r}" aria-label="Color ${o+1}"></button>`).join(""),n;if(rt.signedIn){let s=rt.isPro?rt.plan==="trial"?"Pro trial"+(rt.expiresAt?" until "+new Date(rt.expiresAt).toLocaleDateString():""):"MoveCam Pro":"Free plan";n=me(`<div class="scrim"><div class="panel account">
      <div class="who">${yh(72)}<div><h2>${Wt(rt.username)}</h2><p>${s}</p></div></div>
      <div class="field"><label>Color</label><div class="swatches">${e(rt.avatar)}</div></div>
      <form class="mail field"><label>Recovery email <small>Only used to reset your password</small></label>
        <div class="inline"><input name="email" type="email" placeholder="you@example.com" value="${Wt(rt.email??"")}" autocomplete="email"><button class="btn" type="submit">Save</button></div></form>
      <details><summary>Change password</summary>
        <form class="pw"><input name="current" type="password" placeholder="Current password" autocomplete="current-password">
        <input name="next" type="password" placeholder="New password (6+ characters)" autocomplete="new-password">
        <button class="btn" type="submit">Save password</button></form></details>
      <div class="err"></div>
      <div class="actions"><button class="btn" id="signOutBtn">Sign out</button><button class="btn accent big" id="doneBtn">Done</button></div>
    </div></div>`);let r=n.querySelector(".err");n.querySelectorAll(".swatch").forEach(o=>o.addEventListener("click",async()=>{let a=Number(o.dataset.i);n.querySelectorAll(".swatch").forEach(c=>c.classList.toggle("on",c===o)),rt.avatar=a,_e("avatar",a),n.querySelector(".who .avatar").style.background=di[a],Rn();let l=await hi("/api/account/profile",{method:"POST",body:{avatar:a},auth:!0});l.ok||(r.textContent=l.data.error??"Couldn't save your color.")})),n.querySelector("form.mail").addEventListener("submit",async o=>{o.preventDefault();let a=await hi("/api/account/profile",{method:"POST",auth:!0,body:{email:o.target.email.value.trim()}});a.ok?(xa(a.data),r.textContent="",_n(a.data.email?"Recovery email saved.":"Recovery email removed.")):r.textContent=a.data.error??"Couldn't save your email."}),n.querySelector("form.pw").addEventListener("submit",async o=>{o.preventDefault();let a=o.target,l=await hi("/api/account/profile",{method:"POST",auth:!0,body:{currentPassword:a.current.value,newPassword:a.next.value}});l.ok?(xa(l.data),a.reset(),n.querySelector("details").open=!1,r.textContent="",_n("Password changed. Other devices are signed out.")):r.textContent=l.data.error??"Couldn't change your password."}),n.querySelector("#signOutBtn").addEventListener("click",()=>{Pe(),Pd()}),n.querySelector("#doneBtn").addEventListener("click",Pe)}else{let s=Math.floor(Math.random()*di.length);n=me(`<div class="scrim"><div class="panel account">
      <img class="logo" src="${os}icons/icon-180.png" alt="">
      <h2 class="title"></h2>
      <p class="lead"></p>
      <div class="seg"><button type="button" data-m="signup">Create account</button><button type="button" data-m="signin">Sign in</button></div>
      <form class="auth">
        <input name="username" placeholder="Username" autocomplete="username" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="40">
        <input name="password" type="password" placeholder="Password">
        <input name="email" type="email" class="signup-only" placeholder="Email for password recovery (optional)" autocomplete="email">
        <div class="field signup-only"><label>Pick a color</label><div class="swatches">${e(s)}</div></div>
        <div class="err"></div>
        <button class="btn accent big" type="submit"></button>
        <button type="button" class="link signin-only" id="forgotBtn">Forgot password?</button>
      </form>
      <form class="forgot hidden">
        <input name="who" placeholder="Username or email" autocapitalize="off" autocorrect="off" spellcheck="false">
        <div class="code-step hidden">
          <input name="code" inputmode="numeric" maxlength="6" placeholder="6-digit code from the email">
          <input name="next" type="password" placeholder="New password (6+ characters)" autocomplete="new-password">
        </div>
        <div class="err"></div>
        <button class="btn accent big" type="submit">Email me a code</button>
        <button type="button" class="link" id="backToSignIn">Back to sign in</button>
      </form>
      ${t?"":'<button class="link" id="notNow">Not now</button>'}
    </div></div>`);let r=n.querySelector("form.auth"),o=n.querySelector("form.forgot"),a=r.querySelector(".err"),l=o.querySelector(".err"),c=d=>{i=d;let f=d==="forgot";r.classList.toggle("hidden",f),o.classList.toggle("hidden",!f),n.querySelector(".seg").classList.toggle("hidden",f),n.querySelectorAll(".seg button").forEach(g=>g.classList.toggle("on",g.dataset.m===d)),n.querySelectorAll(".signup-only").forEach(g=>g.classList.toggle("hidden",d!=="signup")),n.querySelectorAll(".signin-only").forEach(g=>g.classList.toggle("hidden",d!=="signin")),n.querySelector(".title").textContent=f?"Reset your password":d==="signup"?"Welcome to MoveCam":"Welcome back",n.querySelector(".lead").textContent=f?"We'll email a code to your account's recovery email.":d==="signup"?"Pick a username to start playing. Your scores and Pro follow you to every device.":"Sign in with your username (or email) and password.",r.querySelector("button[type=submit]").textContent=d==="signup"?"Create account":"Sign in",r.username.placeholder=d==="signup"?"Username":"Username or email",r.password.placeholder=d==="signup"?"Password (6+ characters)":"Password",r.password.autocomplete=d==="signup"?"new-password":"current-password",a.textContent="",l.textContent="",setTimeout(()=>(f?o.who:r.username).focus(),30)};n.querySelectorAll(".seg button").forEach(d=>d.addEventListener("click",()=>c(d.dataset.m))),n.querySelectorAll(".swatch").forEach(d=>d.addEventListener("click",()=>{s=Number(d.dataset.i),n.querySelectorAll(".swatch").forEach(f=>f.classList.toggle("on",f===d))}));let h=(d,f)=>{xa(d.data),Pe(),Bt.play("confirm"),_n(f),_h()};r.addEventListener("submit",async d=>{d.preventDefault();let f=r.username.value.trim(),g=r.password.value,y=r.email.value.trim();if(i==="signup"){if(!/^[A-Za-z0-9_]{3,16}$/.test(f)){a.textContent="Usernames are 3 to 16 letters, numbers or _";return}if(g.length<6){a.textContent="Passwords need at least 6 characters";return}if(y&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(y)){a.textContent="That email doesn't look right";return}}let m=r.querySelector("button[type=submit]");m.disabled=!0,a.textContent="";let p=i==="signup"?await hi("/api/account/signup",{method:"POST",body:{username:f,password:g,avatar:s,email:y||void 0,playerId:rt.id}}):await hi("/api/account/login",{method:"POST",body:{username:f,password:g}});if(m.disabled=!1,!p.ok){a.textContent=p.data.error??"Something went wrong. Try again.";return}h(p,i==="signup"?`Welcome to MoveCam, ${p.data.username}!`:`Welcome back, ${p.data.username}!`)});let u=!1;o.addEventListener("submit",async d=>{d.preventDefault();let f=o.who.value.trim();if(!f){l.textContent="Enter your username or email";return}let g=o.querySelector("button[type=submit]");if(g.disabled=!0,l.textContent="",!u){let m=await hi("/api/account/forgot",{method:"POST",body:{who:f}});if(g.disabled=!1,!m.ok){l.textContent=m.data.error??"Couldn't send a code. Try again.";return}u=!0,o.querySelector(".code-step").classList.remove("hidden"),n.querySelector(".lead").textContent=m.data.message,g.textContent="Reset password",o.code.focus();return}let y=await hi("/api/account/reset",{method:"POST",body:{who:f,code:o.code.value,newPassword:o.next.value}});if(g.disabled=!1,!y.ok){l.textContent=y.data.error??"Couldn't reset your password.";return}h(y,`Password changed. Welcome back, ${y.data.username}!`)}),n.querySelector("#forgotBtn").addEventListener("click",()=>c("forgot")),n.querySelector("#backToSignIn").addEventListener("click",()=>c("signin")),n.querySelector("#notNow")?.addEventListener("click",Pe),c(i)}(!t||rt.signedIn)&&n.addEventListener("click",s=>{s.target===n&&Pe()}),n.dataset.kind=t?"gate":"account",zn(n)}function zr(){return rt.signedIn?!0:(Ta(Me("hadAccount",!1)?"signin":"signup",{gate:!0}),!1)}function _h(){_e("hadAccount",!0),Me("guideDone",!1)||Dd()}function Ld(){let i=s=>`<button class="switch ${s?"on":""}"></button>`,t=me(`<div class="scrim"><div class="panel settings">
    <h2>Settings</h2>
    <div class="row"><label>Music</label>${i(Bt.settings.music)}</div>
    <div class="row"><label>Music volume</label><input type="range" min="0" max="1" step="0.05" value="${Bt.settings.volume}"></div>
    <div class="row"><label>Sound effects</label>${i(Bt.settings.sound)}</div>
    <div class="row"><label>Show tracking skeleton</label>${i(Me("skeleton",!0))}</div>
    <div class="row ${sn?"hidden":""}"><label>Share anonymous play stats<small>Game names, scores and play time. Never video.</small></label>${i(Me("shareUsage",!0))}</div>
    <div class="row"><label>Account<small>${rt.isPro?rt.plan==="trial"?"Pro trial":"Pro":"Free plan"}</small></label><button class="btn profile" id="acctBtn">${yh(24)}<span>${Wt(rt.username??"Sign in")}</span></button></div>
    <div class="row"><label>How to move<small>A one-minute guide to the four moves</small></label><button class="btn" id="guideBtn">Show guide</button></div>
    <button class="btn accent big" style="align-self:center;margin-top:8px" id="doneBtn">Done</button></div></div>`);t.querySelector("#guideBtn").addEventListener("click",()=>Dd()),t.querySelector("#acctBtn").addEventListener("click",()=>Ta());let e=t.querySelectorAll(".switch"),n=["music","sound","skeleton","shareUsage"];e.forEach((s,r)=>s.addEventListener("click",()=>{let o=!s.classList.contains("on");s.classList.toggle("on",o),n[r]==="music"||n[r]==="sound"?Bt.set(n[r],o):_e(n[r],o),Rn()})),t.querySelector("input[type=range]").addEventListener("input",s=>Bt.set("volume",parseFloat(s.target.value))),t.querySelector("#doneBtn").addEventListener("click",Pe),t.addEventListener("click",s=>{s.target===t&&Pe()}),t.dataset.kind="settings",zn(t)}function Ud(){let i=me(`<div class="scrim"><div class="panel">
    <div class="eyebrow">${Wt(L.info.title)}</div>
    <h2 class="headline">Get in position</h2>
    <div class="pill ${L.duo?"hidden":""}"><span class="msg">Can't see anyone</span></div>
    <ul class="moves">${L.info.moves.map(e=>`<li>${Wt(e)}</li>`).join("")}</ul>
    ${L.duo?`<div class="duo-pills"><span class="pill p1"><b>Player 1 \xB7 left</b><span class="msg">Can't see anyone</span></span><span class="pill p2"><b>Player 2 \xB7 right</b><span class="msg">Can't see anyone</span></span></div>
    <p>Stand side by side with some space between you, both fully in view from head to below your hips.</p>`:"<p>Stand back so the camera sees you from your head to below your hips. The frame turns green when you're in the right spot.</p>"}
    <div class="choices"></div></div></div>`);i.querySelector(".choices").append(Ui("\u270B","Start now","Raise a hand \xB7 Space","good",()=>ar()),Ui("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>fi())),i.dataset.kind="waiting",zn(i)}function _v(){let i=me('<div class="scrim"><div class="panel"><h2>Paused</h2><div class="choices"></div></div></div>');i.querySelector(".choices").append(Ui("\u270B","Resume","Raise a hand \xB7 Space","good",()=>Od()),Ui("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>fi())),i.dataset.kind="paused",zn(i)}function bv(){let{result:i,isBest:t}=L,e=me(`<div class="scrim"><div class="panel">
    ${t?`<span class="tag pro">NEW BEST${rt.signedIn?" \xB7 "+Wt(rt.username.toUpperCase()):""}</span>`:`<div class="eyebrow">${rt.signedIn?"Nice one, "+Wt(rt.username):"Game over"}</div>`}
    <div class="score">${i.score.toLocaleString()}</div>
    <p>${Wt(i.detail)}</p>
    ${t?"":`<p style="color:var(--tertiary)">Best ${Ea(L.info.id).toLocaleString()}</p>`}
    <div class="choices"></div></div></div>`);e.querySelector(".choices").append(Ui("\u270B","Play again","Raise a hand \xB7 Space","good",()=>Eh()),Ui("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>fi())),e.dataset.kind="over",zn(e)}var Di=[{art:"\u{1F9CD}",title:"Step back until the frame turns green",text:"The camera needs to see you from your head to below your hips. About 2 m (6 ft) from the screen usually works.",progress:(i,t)=>t.goodSince?Math.min(1,(performance.now()-t.goodSince)/1200):0},{art:"\u270B",title:"Raise one hand above your head",event:["confirm"],text:"Hold it there for a moment. That's how you start a game or pick something.",progress:i=>i.confirmProgress},{art:"\u{1F44B}",title:"Swing an arm out to the side",event:["swipeLeft","swipeRight"],text:"A quick sweep, like waving someone past. Right arm goes right, left arm goes left. That's how you browse games.",progress:()=>0},{art:"\u{1F64C}",title:"Put both hands up and hold",event:["back"],text:"That pauses any game, and goes back from menus.",progress:i=>i.handsUpProgress}],Se={step:0,goodSince:null,advancing:!1};function Dd(){Se.step=0,Se.goodSince=null,Se.advancing=!1,$t.resetGestures();let i=me(`<div class="scrim guide"><div class="panel">
    <div class="dots">${Di.map(()=>"<i></i>").join("")}<i></i></div>
    <div class="art"></div><h2></h2><p class="text"></p>
    <div class="bar"><span></span></div>
    <div class="pill"><span class="msg"></span></div>
    <div class="actions"><button class="link" id="skipGuide">Skip guide</button><button class="btn" id="nextGuide">Next \u2192</button></div>
  </div></div>`);i.querySelector("#skipGuide").addEventListener("click",rr),i.querySelector("#nextGuide").addEventListener("click",()=>Aa()),i.dataset.kind="guide",zn(i),Nd()}function Nd(){let i=L.overlay;if(i?.dataset.kind!=="guide")return;if(i.querySelectorAll(".dots i").forEach((e,n)=>e.classList.toggle("on",n<=Se.step)),i.querySelector(".panel").classList.remove("done"),Se.step>=Di.length){i.querySelector(".art").textContent="\u{1F389}",i.querySelector("h2").textContent="You've got it!",i.querySelector(".text").textContent=rt.signedIn?"That's everything. Raise a hand to jump into your first game.":"That's everything. Create an account to keep your scores on every device, or raise a hand to start playing.",i.querySelector(".bar").classList.add("hidden"),i.querySelector(".pill").classList.add("hidden");let e=i.querySelector(".actions");if(e.innerHTML="",!rt.signedIn){let s=me('<button class="btn">Create account</button>');s.addEventListener("click",()=>{rr(),Ta("signup")}),e.append(s)}let n=me(`<button class="btn accent big">\u270B Let's play</button>`);n.addEventListener("click",rr),e.append(n);return}let t=Di[Se.step];i.querySelector(".art").textContent=t.art,i.querySelector("h2").textContent=t.title,i.querySelector(".text").textContent=t.text,i.querySelector(".pill").classList.toggle("hidden",Se.step!==0),i.querySelector(".bar").classList.toggle("hidden",Se.step===2),i.querySelector(".bar span").style.width="0%"}function Aa(i=!1){if(Se.advancing)return;if(Se.step>=Di.length){rr();return}let t=()=>{Se.advancing=!1,Se.step++,Se.goodSince=null,$t.resetGestures(),Nd()};if(!i){t();return}Se.advancing=!0,Bt.play("confirm"),L.overlay?.querySelector(".panel").classList.add("done"),setTimeout(t,800)}function rr(){_e("guideDone",!0),Pe(),$t.resetGestures(),Rn()}function Mv(i){if(Se.step>=Di.length){i==="confirm"&&rr();return}Di[Se.step].event?.includes(i)&&Aa(!0)}function Sv(i){let t=L.overlay;if(Se.step>=Di.length||Se.advancing)return;if(Se.step===0){let n=t.querySelector(".pill");n.classList.toggle("good",i.status.good),n.querySelector(".msg").textContent=i.status.message,Se.goodSince=i.status.good?Se.goodSince??performance.now():null}let e=Di[Se.step].progress(i,Se);t.querySelector(".bar span").style.width=`${Math.round(e*100)}%`,Se.step===0&&e>=1&&Aa(!0)}var At={ws:null,view:null,code:null,round:0,sendTimer:null,retries:0,leaving:!1,scores:[]},Ma=()=>At.view&&rt.username&&At.view.host?.toLowerCase()===rt.username.toLowerCase(),kr=me('<div id="partyBoard" class="hidden"></div>');bn.append(kr);function wv(){return sn?"wss://movecam.bhswebsite.org":location.origin.replace(/^http/,"ws")}async function Ev(){let i=await hi("/api/party/create",{method:"POST",auth:!0});if(!i.ok){_n(i.data.error??"Couldn't make a party.");return}bh(i.data.code)}function bh(i){or(!0),At.code=i.toUpperCase(),At.leaving=!1;let t=new WebSocket(`${wv()}/api/party/${At.code}?token=${encodeURIComponent(rt.token)}`);At.ws=t,t.onopen=()=>{At.retries=0},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.t==="error"){_n(n.message),At.leaving=!0;return}if(n.t==="scores"){At.scores=n.players,Mh();return}n.t==="state"&&Tv(n)},t.onclose=e=>{if(At.ws===t){if(At.ws=null,At.leaving||e.code===4e3||e.code===4001){e.code===4001&&_n("You joined this party from another device."),ph();return}At.retries++<4?setTimeout(()=>{At.code&&!At.ws&&bh(At.code)},1200*At.retries):(_n("Lost connection to the party."),ph())}}}function ph(){clearInterval(At.sendTimer),Object.assign(At,{ws:null,view:null,code:null,round:0,sendTimer:null,scores:[]}),kr.classList.add("hidden"),L.overlay?.dataset.kind==="party"&&Ra(),Rn()}function or(i=!1){if(!(!At.ws&&!At.code)){At.leaving=!0;try{At.ws?.send(JSON.stringify({t:"leave"})),At.ws?.close(1e3)}catch{}ph(),i||_n("You left the party.")}}function Ni(i){At.ws?.readyState===WebSocket.OPEN&&At.ws.send(JSON.stringify(i))}function Tv(i){let t=At.view;At.view=i,At.scores=i.players,Rn(),i.phase==="playing"&&i.round!==At.round?(At.round=i.round,Rv(i)):i.phase==="results"&&t?.phase!=="results"?mh():i.phase==="lobby"&&t&&t.phase!=="lobby"&&L.screen==="game"?(fi(),kd()):L.overlay?.dataset.kind==="party"?Ra():L.overlay?.dataset.kind==="partyResults"&&i.phase==="results"&&mh(),Mh()}function kd(){let i=me('<div class="scrim"><div class="panel partysheet"></div></div>');i.addEventListener("click",t=>{t.target===i&&Pe()}),i.dataset.kind="party",zn(i),Ra()}function Av(i){let t=At.view?.host===i.name;return`<div class="pchip ${i.online===!1?"away":""}"><span class="avatar" style="width:34px;height:34px;font-size:16px;background:${di[i.avatar%di.length]}">${Wt(i.name[0].toUpperCase())}</span>
    <b>${Wt(i.name)}</b>${t?'<span class="tag">HOST</span>':""}${i.pro?'<span class="tag pro">PRO</span>':""}</div>`}function Ra(){let i=L.overlay?.dataset.kind==="party"?L.overlay.querySelector(".panel"):null;if(!i)return;let t=At.view;if(!At.code){i.innerHTML=`<h2>Play with friends</h2>
      <p>Everyone plays the same game at the same time, each on their own Mac, iPad or computer. Scores show up live.</p>
      <div class="choices"><button class="choice good" id="mkParty"><span class="sym">\u{1F389}</span><b>Create a party</b><span>You pick the game and start it</span></button></div>
      <form class="join"><input name="code" maxlength="4" placeholder="CODE" autocapitalize="characters" autocomplete="off" spellcheck="false"><button class="btn big" type="submit">Join</button></form>
      <p class="small">Up to 4 players. A Pro host can have up to 8.</p>
      <button class="link" id="closeParty">Close</button>`,i.querySelector("#mkParty").addEventListener("click",Ev),i.querySelector("form.join").addEventListener("submit",r=>{r.preventDefault();let o=r.target.code.value.trim().toUpperCase();if(!/^[A-Z]{4}$/.test(o)){_n("Party codes are 4 letters.");return}bh(o)}),i.querySelector("#closeParty").addEventListener("click",Pe),setTimeout(()=>i.querySelector("input")?.focus(),30);return}if(!t){i.innerHTML=`<h2>Joining ${Wt(At.code)}\u2026</h2><button class="link" id="cancelJoin">Cancel</button>`,i.querySelector("#cancelJoin").addEventListener("click",()=>or(!0));return}let e=Ma(),n=t.players.find(r=>r.name===t.host),s=xn.map(r=>{let o=r.pro&&!n?.pro;return`<button class="gpick ${r.id===t.game?"on":""} ${o?"locked":""}" data-id="${r.id}" ${!e||o?"disabled":""}>
      <span class="thumb" style="background-image:url('${os}cards/${r.id}.jpg')"></span><span>${Wt(r.title)}${o?" \u{1F512}":""}</span></button>`}).join("");i.innerHTML=`<div class="eyebrow">Party code</div>
    <div class="bigcode">${Wt(t.code)}</div>
    <p>Friends join from <b>Play with friends</b> with this code.</p>
    <div class="players">${t.players.map(Av).join("")}<span class="count">${t.players.length}/${t.max}</span></div>
    <div class="field"><label>${e?"Pick a game":`${Wt(t.host??"The host")} picks the game`}</label><div class="gpicks">${s}</div></div>
    <div class="actions">
      <button class="btn" id="leaveParty">Leave party</button>
      ${e?`<button class="btn accent big" id="startParty" ${t.players.length<1?"disabled":""}>\u270B Start ${Wt(xn.find(r=>r.id===t.game)?.title??"")}</button>`:`<span class="waiting">Waiting for ${Wt(t.host??"the host")} to start\u2026</span>`}
    </div>`,i.querySelectorAll(".gpick").forEach(r=>r.addEventListener("click",()=>Ni({t:"game",game:r.dataset.id}))),i.querySelector("#leaveParty").addEventListener("click",()=>{or(),Ra()}),i.querySelector("#startParty")?.addEventListener("click",()=>Ni({t:"start"}))}function Rv(i){let t=xn.find(e=>e.id===i.game);t&&(Pe(),Ca(t,{party:!0}),ar(Math.max(0,i.startAt-Date.now())),clearInterval(At.sendTimer),At.sendTimer=setInterval(()=>{L.gameStarted&&L.game&&!L.game.finished&&Ni({t:"score",score:L.game.score??0})},500),Mh())}function Mh(){let i=At.view&&L.screen==="game"&&At.view.phase!=="lobby";if(kr.classList.toggle("hidden",!i),!i)return;let t=[...At.scores??[]].sort((e,n)=>n.score-e.score);kr.innerHTML=t.map((e,n)=>`<div class="row ${e.name.toLowerCase()===rt.username?.toLowerCase()?"me":""}"><span class="pos">${n+1}</span><span class="name">${Wt(e.name)}</span><span class="pts">${(e.score??0).toLocaleString()}</span>${e.done?'<span class="st">\u2713</span>':""}</div>`).join("")}function Cv(i){if(clearInterval(At.sendTimer),Ni({t:"done",score:i.score,detail:i.detail}),At.view?.phase==="results"){mh();return}let t=me(`<div class="scrim"><div class="panel">
    <div class="eyebrow">Your score</div><div class="score">${i.score.toLocaleString()}</div><p>${Wt(i.detail)}</p>
    <h2 class="headline" style="font-size:22px">Waiting for the others to finish\u2026</h2>
    <button class="link" id="leaveMid">Leave party</button></div></div>`);t.querySelector("#leaveMid").addEventListener("click",()=>{or(),fi()}),t.dataset.kind="partyWait",zn(t)}function mh(){let i=At.view;if(!i)return;clearInterval(At.sendTimer),L.screen==="game"&&L.phase!=="over"&&(L.phase="over");let t=["\u{1F947}","\u{1F948}","\u{1F949}"],e=i.results.findIndex(s=>s.name.toLowerCase()===rt.username?.toLowerCase()),n=me(`<div class="scrim"><div class="panel results">
    <div class="eyebrow">${Wt(xn.find(s=>s.id===i.game)?.title??"")} \xB7 Results</div>
    <h2>${e===0?"You won! \u{1F3C6}":e>0?`You came ${e+1}${["st","nd","rd"][e]??"th"}`:"Results"}</h2>
    <div class="ranking">${i.results.map((s,r)=>`<div class="rank ${r===e?"me":""}"><span class="m">${t[r]??r+1}</span>
      <span class="avatar" style="width:30px;height:30px;font-size:14px;background:${di[s.avatar%di.length]}">${Wt(s.name[0].toUpperCase())}</span>
      <b>${Wt(s.name)}</b><span class="d">${Wt(s.detail??"")}</span><span class="pts">${s.score.toLocaleString()}</span></div>`).join("")}</div>
    <div class="actions"><button class="btn" id="leaveRes">Leave party</button>
      ${Ma()?'<button class="btn accent big" id="nextRound">\u270B Next game</button>':`<span class="waiting">Waiting for ${Wt(i.host??"the host")}\u2026</span>`}</div>
  </div></div>`);n.querySelector("#leaveRes").addEventListener("click",()=>{or(),fi()}),n.querySelector("#nextRound")?.addEventListener("click",()=>Ni({t:"lobby"})),n.dataset.kind="partyResults",zn(n),Bt.play(e===0?"combo":"pause")}var Fr={hub:$t,audio:Bt,hud:ir,renderer:Ve,aspect:()=>window.innerWidth/Math.max(window.innerHeight,1),onFinished:i=>Dv(i)};function Sh(){if(!zr())return;let i=xn[L.selected];if(i.pro&&!rt.isPro){Or("locked",i.id),Bt.play("pause"),xv();return}_e("lastGame",i.id),Bt.play("confirm"),Ca(i,{duo:Me("duoMode",!1)&&!At.view})}var hh=null;function Pv(){if(!hh){let i=new Bs(Ve);hh=i.fromScene(new ta,.04).texture,i.dispose()}return hh}function Iv(i){return{...Fr,hub:Kn.hubs[i],hud:wa[i],aspect:()=>window.innerWidth/2/Math.max(window.innerHeight,1),onFinished:t=>Lv(i,t)}}function Ca(i,{party:t=!1,duo:e=!1}={}){clearTimeout(L.countdownTimer),L.inParty=t,L.duoMode=e,Fd(),ir.reset(),L.info=i;let n=s=>(s.scene.environment||(s.scene.environment=Pv(),s.scene.environmentIntensity=s.environmentIntensity??.35),s);e?(wa.forEach(s=>{s.reset(),s.show(!0)}),L.duo={games:[0,1].map(s=>n(i.make(Iv(s)))),results:[null,null],done:[]},L.game=L.duo.games[0],L.duo.games.forEach(s=>s.resize(Fr.aspect()/2)),Kn.start(),xh.classList.remove("hidden")):(L.duo=null,L.game=n(i.make(Fr))),L.gameStarted=!1,L.goodSince=null,L.missingSince=null,L.screen="game",L.phase="waiting",$t.handsUpHold=i.pauseHold,$t.resetGestures(),Ue.classList.add("hidden"),ir.show(!e),Br.classList.remove("hidden"),Bt.playMusic(i.id),t||Ud()}function Fd(){L.duo&&(L.duo.games.forEach(i=>i.dispose()),L.duo.done.forEach(i=>i.remove()),L.duo=null,L.game=null),L.game&&(L.game.dispose(),L.game=null),Kn.stop(),wa.forEach(i=>i.show(!1)),xh.classList.add("hidden")}function ar(i=0){Pe(),clearTimeout(L.countdownTimer);let t=3;if(L.phase="countdown",i>2400){ui.innerHTML='<span style="font-size:48px">Get ready\u2026</span>',ui.classList.remove("hidden"),L.countdownTimer=setTimeout(()=>ar(2400),i-2400);return}let e=()=>{if(L.phase==="countdown"){if(t===0){ui.classList.add("hidden"),Bt.play("go"),$t.calibrate(),L.phase="playing",L.missingSince=null,$t.resetGestures(),L.duo&&Kn.hubs.forEach(n=>{n.calibrate(),n.resetGestures()}),L.gameStarted||(L.gameStarted=!0,L.startedAt=performance.now(),Or("start",L.info.id),L.duo?L.duo.games.forEach(n=>n.start()):L.game.start());return}ui.innerHTML=`<span>${t}</span>`,ui.classList.remove("hidden"),Bt.play("beep"),t-=1,L.countdownTimer=setTimeout(e,800)}};e()}function wh(i){L.screen!=="game"||!(L.phase==="playing"||L.phase==="countdown")||L.overlay?.dataset.kind!=="over"&&(clearTimeout(L.countdownTimer),ui.classList.add("hidden"),L.phase=L.gameStarted?"paused":"waiting",$t.resetGestures(),Bt.play("pause"),Bt.duck(!0),i&&_n(i),L.phase==="paused"?_v():Ud())}function Od(){L.phase==="paused"&&($t.resetGestures(),Bt.duck(!1),ar())}function fi(){clearTimeout(L.countdownTimer),L.gameStarted&&L.phase!=="over"&&L.info&&Or("quit",L.info.id,L.game?.score??0,(performance.now()-L.startedAt)/1e3),L.inParty&&At.view?.phase==="playing"&&Ni({t:"done",score:L.game?.score??0,detail:"Left early"}),L.inParty=!1,clearInterval(At.sendTimer),kr.classList.add("hidden"),Pe(),ui.classList.add("hidden"),Fd(),L.screen="menu",L.phase="waiting",ir.show(!1),Br.classList.add("hidden"),Ue.classList.remove("hidden"),$t.handsUpHold=1,$t.resetGestures(),$t.calibrate(),Bt.play("pause"),Bt.playMusic("menu"),Rn()}function Eh(){L.info&&(Bt.play("confirm"),Ca(L.info,{duo:L.duoMode}))}function Lv(i,t){let e=L.duo;if(!e||L.screen!=="game"||e.results[i])return;if(e.results[i]=t,e.results[0]&&e.results[1]){Uv();return}let n=me(`<div class="duo-done p${i+1}"><div class="eyebrow">Player ${i+1} finished</div>
    <div class="score">${t.score.toLocaleString()}</div><p>${Wt(t.detail)}</p>
    <p style="color:var(--secondary)">Go, Player ${2-i}!</p></div>`);bn.append(n),e.done.push(n),Bt.play("whistle")}function Uv(){let i=L.duo;clearTimeout(L.countdownTimer),ui.classList.add("hidden"),i.done.forEach(o=>o.remove()),i.done=[];let[t,e]=i.results,n=t.score===e.score?0:t.score>e.score?1:2;Or("finish",L.info.id,Math.max(t.score,e.score),(performance.now()-L.startedAt)/1e3),L.phase="over",$t.resetGestures(),Bt.duck(!0),setTimeout(()=>Bt.play(n?"combo":"cheer"),600);let s=(o,a)=>`<div class="p${a} ${n===a?"win":""}"><b>Player ${a}${n===a?" \u{1F3C6}":""}</b>
    <div class="score">${o.score.toLocaleString()}</div><p>${Wt(o.detail)}</p></div>`,r=me(`<div class="scrim"><div class="panel">
    <div class="eyebrow">${Wt(L.info.title)} \xB7 2 players</div>
    <h2>${n?`Player ${n} wins!`:"It's a tie!"}</h2>
    <div class="duo-score">${s(t,1)}${s(e,2)}</div>
    <div class="choices"></div></div></div>`);r.querySelector(".choices").append(Ui("\u270B","Rematch","Raise a hand \xB7 Space","good",()=>Eh()),Ui("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>fi())),r.dataset.kind="over",zn(r)}function Dv(i){if(L.screen!=="game"||!L.info)return;let t=i.score>Ea(L.info.id);if(t&&_e("best."+L.info.id,i.score),Or("finish",L.info.id,i.score,(performance.now()-L.startedAt)/1e3),L.result=i,L.isBest=t,L.phase="over",$t.resetGestures(),Bt.duck(!0),t&&setTimeout(()=>Bt.play("combo"),1200),L.inParty&&At.view){Cv(i);return}bv()}var Bd=new Set(["settings","account","gate","party"]);$t.onEvent(i=>{if(L.overlay?.dataset.kind==="party"&&At.view?.phase==="lobby"){i==="confirm"&&Ma()?Ni({t:"start"}):i==="back"&&Pe();return}if(!Bd.has(L.overlay?.dataset.kind)){if(L.overlay?.dataset.kind==="guide"){Mv(i);return}if(L.overlay?.dataset.kind==="partyResults"){i==="confirm"&&Ma()&&Ni({t:"lobby"});return}if(L.overlay?.dataset.kind!=="partyWait"){if(L.screen==="menu"){if(L.overlay?.dataset.kind==="pro"){(i==="confirm"||i==="back")&&Pe();return}i==="confirm"?Sh():i==="swipeLeft"?sr(-1):i==="swipeRight"&&sr(1);return}i==="confirm"?L.phase==="waiting"?ar():L.phase==="paused"?Od():L.phase==="over"&&!L.inParty&&Eh():i==="back"&&(L.phase==="playing"||L.phase==="countdown"?wh():fi())}}});Br.addEventListener("click",()=>wh());window.addEventListener("keydown",i=>{let t=i.code==="Escape";if(Bd.has(L.overlay?.dataset.kind)){t&&L.overlay.dataset.kind!=="gate"&&Pe();return}if(L.overlay?.dataset.kind==="guide"){t?rr():(i.code==="Space"||i.code==="Enter"||i.code==="ArrowRight")&&Aa(),i.preventDefault();return}if(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)return;Bt.unlock();let e=i.code==="Space"||i.code==="Enter";if(L.screen==="menu"){if(L.overlay?.dataset.kind==="pro"){(e||t)&&Pe(),i.preventDefault();return}if(i.code==="ArrowLeft")sr(-1);else if(i.code==="ArrowRight")sr(1);else if(e)Sh();else return;i.preventDefault();return}if(t){$t.emit("back"),i.preventDefault();return}if(e&&L.phase!=="playing"){$t.emit("confirm"),i.preventDefault();return}if(L.phase==="playing"){if(i.code==="ArrowLeft")$t.keyboardStep(-1);else if(i.code==="ArrowRight")$t.keyboardStep(1);else if(i.code==="ArrowUp"||i.code==="Space")$t.keyboardJump();else if(i.code==="ArrowDown")$t.keyboardCrouch();else return;i.preventDefault()}});var Be=Dr.getContext("2d"),Td=0;$t.onSnapshot(i=>{let t=i.status.good;if(L.overlay?.dataset.kind==="guide"&&Sv(i),Li.classList.toggle("good",t),Li.querySelector(".msg").textContent=i.status.message,L.overlay?.dataset.kind==="waiting"){let a=L.overlay.querySelector(".pill");a.classList.toggle("good",t),a.querySelector(".msg").textContent=i.status.message,L.overlay.querySelector(".headline").textContent=t?"Hold still":"Get in position"}let e=performance.now();if(sn||e-Td<30)return;Td=e;let n=Dr.width=Dr.clientWidth*devicePixelRatio,s=Dr.height=Dr.clientHeight*devicePixelRatio;if(Be.clearRect(0,0,n,s),L.duo&&Me("skeleton",!0)){Kn.hubs.forEach((a,l)=>{let c=a.snapshot.pose;if(!c)return;let h=u=>[u.x*n,(1-u.y)*s];Be.strokeStyle=l?"#ff6629":"#2f8cff",Be.lineWidth=3*devicePixelRatio,Be.lineCap="round",Be.beginPath();for(let[u,d]of eh){let f=c.joints[u],g=c.joints[d];!f||!g||(Be.moveTo(...h(f)),Be.lineTo(...h(g)))}Be.stroke()});return}let r=i.pose;if(r&&Me("skeleton",!0)){let a=l=>[l.x*n,(1-l.y)*s];Be.strokeStyle="rgba(255,255,255,.7)",Be.lineWidth=2.5*devicePixelRatio,Be.lineCap="round",Be.beginPath();for(let[l,c]of eh){let h=r.joints[l],u=r.joints[c];!h||!u||(Be.moveTo(...a(h)),Be.lineTo(...a(u)))}Be.stroke(),Be.fillStyle=t?"#30c75a":"#ed4038";for(let l of Object.values(r.joints)){let[c,h]=a(l);Be.beginPath(),Be.arc(c,h,4*devicePixelRatio,0,Math.PI*2),Be.fill()}}let o=Li.querySelector(".rings");o.innerHTML="";for(let[a,l]of[[i.confirmProgress,"\u270B"],[i.handsUpProgress,"\u{1F64C}"]])a<.05||o.insertAdjacentHTML("beforeend",`<svg class="ring" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="rgba(0,0,0,.7)"/><circle cx="22" cy="22" r="18" stroke="#30c75a" stroke-width="4" fill="none" stroke-dasharray="113" stroke-dashoffset="${113*(1-a)}" transform="rotate(-90 22 22)" stroke-linecap="round"/><text x="22" y="28" font-size="16" text-anchor="middle">${l}</text></svg>`)});var Ad="";setInterval(()=>{let i=!!L.duo&&L.screen==="game";document.body.classList.toggle("duo",i);let t=L.screen+":"+L.phase+":"+i;sn&&t!==Ad&&(Ad=t,Xn({type:"state",screen:L.screen,phase:L.phase,duo:i}));let e=$t.latest;if(L.screen==="menu"){if(L.overlay||!e.status.good){L.stepArmed=!0;return}L.stepArmed&&e.lateral<-.7?(L.stepArmed=!1,sr(-1)):L.stepArmed&&e.lateral>.7?(L.stepArmed=!1,sr(1)):Math.abs(e.lateral)<.35&&(L.stepArmed=!0);return}L.phase==="waiting"&&L.overlay?.dataset.kind==="waiting"?(L.duo?Kn.hubs.every(r=>r.snapshot.status.good):e.status.good)?(L.goodSince??=performance.now(),performance.now()-L.goodSince>1200&&ar()):L.goodSince=null:L.phase==="playing"&&(e.status===cn.noPerson&&!e.keyboardActive&&Nv()?(L.missingSince??=performance.now(),performance.now()-L.missingSince>3e3&&wh("Paused \u2014 we lost sight of you")):L.missingSince=null);let n=L.phase==="playing"?e.handsUpProgress:0;fh.classList.toggle("hidden",n<.15),fh.querySelector(".arc").setAttribute("stroke-dashoffset",String(176*(1-n)))},100);Kn.hubs.forEach((i,t)=>i.onSnapshot(e=>{if(L.overlay?.dataset.kind!=="waiting"||!L.duo)return;let n=L.overlay.querySelector(`.duo-pills .p${t+1}`);n&&(n.classList.toggle("good",e.status.good),n.querySelector(".msg").textContent=e.status.message)}));function Th(){Ve.setSize(window.innerWidth,window.innerHeight,!1),L.duo?L.duo.games.forEach(i=>i.resize(Fr.aspect()/2)):L.game?.resize(Fr.aspect())}window.addEventListener("resize",Th);Th();var Rd=performance.now(),uh=0,dh=performance.now();Ve.setAnimationLoop(()=>{let i=performance.now(),t=Math.min((i-Rd)/1e3,1/20);Rd=i;let e=L.game;if(L.screen==="game"&&e){if(L.duo){let n=window.innerWidth/2,s=window.innerHeight;Ve.setScissorTest(!0),L.duo.games.forEach((r,o)=>{L.phase==="playing"&&!r.finished?(r.elapsed+=t,r.update(t,Kn.hubs[o].latest)):r.idle(t),Ve.setViewport(o*n,0,n,s),Ve.setScissor(o*n,0,n,s),Ve.render(r.scene,r.camera)}),Ve.setScissorTest(!1),Ve.setViewport(0,0,window.innerWidth,window.innerHeight)}else L.phase==="playing"&&!e.finished?(e.elapsed+=t,e.update(t,$t.latest)):e.idle(t),Ve.render(e.scene,e.camera);uh++,i-dh>3e3&&(uh/((i-dh)/1e3)<50&&nr<Nr.length-1&&(nr++,Ve.setPixelRatio(Math.min(window.devicePixelRatio,Nr[nr])),Th()),uh=0,dh=i)}});var ci=null;function Nv(){return sn||ci?.state==="running"}async function zd(i){if(!sn&&(ci??=new ia($t,os),ci.onState=(t,e)=>{let n=Li.querySelector(".offline");n.textContent=t==="running"?"":t==="denied"?"Camera blocked":t==="error"?"Camera error":"Starting camera\u2026",n.classList.toggle("hidden",t==="running"),t==="denied"&&_n("Allow camera access in your browser settings to play with your body."),t==="error"&&e&&console.warn(e)},await ci.start(i),ci.state==="running")){let t=Li.querySelector(".frame");t.contains(ci.video)||t.prepend(ci.video);let e=Ue.querySelector("#cameraSelect"),n=await ci.listDevices();e.innerHTML=n.map((r,o)=>`<option value="${r.deviceId}">${Wt(r.label||"Camera "+(o+1))}</option>`).join("");let s=ci.stream?.getVideoTracks()[0]?.getSettings().deviceId;s&&(e.value=s),e.onchange=()=>{_e("camera",e.value),zd(e.value)}}}function kv(){let i=me(`<div id="start">
    <img src="${os}icons/icon-180.png" alt="">
    <h1>MoveCam</h1>
    <p>Your body is the controller. MoveCam uses your camera to see you move \u2014 video never leaves your device.</p>
    <button class="btn accent big" id="go">Start</button>
    <p style="font-size:13px;color:var(--tertiary)">Prop your device up, step back about 2 m (6 ft) and make sure the room is bright.</p>
  </div>`);i.querySelector("#go").addEventListener("click",()=>{Bt.unlock(),Bt.playMusic("menu"),i.remove(),zd(Me("camera",void 0)),zr()&&_h()}),bn.append(i)}cd($t);window.MoveCamNative.setAccount=({userId:i,plan:t,expiresAt:e})=>{if(i&&rt.signedIn&&i!==rt.id){Xn({type:"account",playerId:rt.id,username:rt.username});return}i&&(rt.id=i),Sa(t??"free",e??null)};window.MoveCamNative.setCameras=(i,t)=>{let e=Ue.querySelector("#cameraSelect");e.innerHTML=i.map(n=>`<option value="${Wt(n.id)}">${Wt(n.name)}</option>`).join(""),e.value=t,e.onchange=()=>Xn({type:"selectCamera",id:e.value})};window.MoveCamNative.setUpdate=i=>{let t=Ue.querySelector("#updateBtn");t.classList.toggle("hidden",!i),i&&(t.textContent=`\u2B07\uFE0E Update to ${i.version}`)};Ue.querySelector("#updateBtn").addEventListener("click",()=>Xn({type:"installUpdate"}));window.MoveCamNative.command=i=>{i==="back"&&$t.emit("back"),i==="confirm"&&$t.emit("confirm"),i==="settings"&&Ld()};Rn();if(va.has("preview")){$t.simulateHands=!0;let i=va.get("preview"),t=xn.findIndex(e=>e.id===i);t>=0&&(L.selected=t,Ca(xn[t]),Pe(),L.phase="playing",L.gameStarted=!0,L.game.start(),$t.keyboardStep(1),setTimeout(()=>$t.keyboardJump(),1500),setTimeout(()=>L.game?.showcase?.(),Number(va.get("showcase")??3500)),va.has("clean")&&(Li.classList.add("hidden"),ir.show(!1),Br.classList.add("hidden"),document.getElementById("banner")?.classList.add("hidden")))}else sn?(Bt.unlock(),Bt.playMusic("menu"),Xn({type:"ready"}),zr()&&_h(),rt.signedIn&&Xn({type:"account",playerId:rt.id,username:rt.username}),Sd()):(Sd(),wd(!0),setInterval(()=>wd(!1),20*60*1e3),kv());window.__movecam={state:L,hub:$t,audio:Bt,GAMES:xn,party:At,duo:Kn};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
