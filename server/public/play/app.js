var Rc="169";var wd=0,ph=1,Ed=2;var vu=1,Cc=2,Wn=3,vi=0,He=1,ze=2,pi=0,mi=1,_s=2,mh=3,gh=4,Td=5,ki=100,Ad=101,Rd=102,Cd=103,Pd=104,Id=200,Ld=201,Ud=202,Dd=203,il=204,sl=205,Nd=206,Fd=207,Od=208,kd=209,Bd=210,zd=211,Hd=212,Vd=213,Gd=214,rl=0,al=1,ol=2,Ms=3,ll=4,cl=5,hl=6,ul=7,yu=0,Wd=1,Xd=2,gi=0,qd=1,Kd=2,Yd=3,Pc=4,$d=5,Zd=6,Jd=7;var xu=300,bs=301,Ss=302,dl=303,fl=304,Va=306,Hi=1e3,qn=1001,pl=1002,un=1003,jd=1004;var Lr=1005;var bn=1006,bo=1007;var zi=1008;var Zn=1009,_u=1010,Mu=1011,ur=1012,Ic=1013,Vi=1014,Kn=1015,yr=1016,Lc=1017,Uc=1018,ws=1020,bu=35902,Su=1021,wu=1022,wn=1023,Eu=1024,Tu=1025,vs=1026,Es=1027,Au=1028,Dc=1029,Ru=1030,Nc=1031;var Fc=1033,aa=33776,oa=33777,la=33778,ca=33779,ml=35840,gl=35841,vl=35842,yl=35843,xl=36196,_l=37492,Ml=37496,bl=37808,Sl=37809,wl=37810,El=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Il=37817,Ll=37818,Ul=37819,Dl=37820,Nl=37821,ha=36492,Fl=36494,Ol=36495,Cu=36283,kl=36284,Bl=36285,zl=36286;var da=2300,Hl=2301,So=2302,vh=2400,yh=2401,xh=2402;var Qd=3200,tf=3201;var Pu=0,ef=1,di="",qe="srgb",Mi="srgb-linear",Oc="display-p3",Ga="display-p3-linear",fa="linear",fe="srgb",pa="rec709",ma="p3";var ji=7680;var _h=519,nf=512,sf=513,rf=514,Iu=515,af=516,of=517,lf=518,cf=519,Vl=35044;var Mh="300 es",Yn=2e3,ga=2001,yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=1234567,ar=Math.PI/180,Ts=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function kc(i,t){return(i%t+t)%t}function hf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function uf(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function df(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function ff(i,t=1){return t-Math.abs(kc(i,t*2)-t)}function pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vf(i,t){return i+Math.random()*(t-i)}function yf(i){return i*(.5-Math.random())}function xf(i){i!==void 0&&(bh=i);let t=bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _f(i){return i*ar}function Mf(i){return i*Ts}function bf(i){return(i&i-1)===0&&i!==0}function Sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ef(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lu={DEG2RAD:ar,RAD2DEG:Ts,generateUUID:$n,clamp:Fe,euclideanModulo:kc,mapLinear:hf,inverseLerp:uf,lerp:or,damp:df,pingpong:ff,smoothstep:pf,smootherstep:mf,randInt:gf,randFloat:vf,randFloatSpread:yf,seededRandom:xf,degToRad:_f,radToDeg:Mf,isPowerOfTwo:bf,ceilPowerOfTwo:Sf,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Ef,normalize:re,denormalize:Sn},rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],_=s[4],x=s[7],R=s[2],T=s[5],E=s[8];return r[0]=a*v+o*M+l*R,r[3]=a*p+o*_+l*T,r[6]=a*m+o*x+l*E,r[1]=c*v+h*M+u*R,r[4]=c*p+h*_+u*T,r[7]=c*m+h*x+u*E,r[2]=d*v+f*M+g*R,r[5]=d*p+f*_+g*T,r[8]=d*m+f*x+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wo=new Bt;function Uu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tf(){let i=va("canvas");return i.style.display="block",i}var Sh={};function ua(i){i in Sh||(Sh[i]=!0,console.warn(i))}function Af(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var wh=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eh=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[Mi]:{transfer:fa,primaries:pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[qe]:{transfer:fe,primaries:pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ga]:{transfer:fa,primaries:ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Eh),fromReference:i=>i.applyMatrix3(wh)},[Oc]:{transfer:fe,primaries:ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Eh),fromReference:i=>i.applyMatrix3(wh).convertLinearToSRGB()}},Pf=new Set([Mi,Ga]),ee={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Pf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Zs[t].toReference,s=Zs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zs[i].primaries},getTransfer:function(i){return i===di?fa:Zs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Zs[t].luminanceCoefficients)}};function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,Gl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=va("canvas")),Qi.width=t.width,Qi.height=t.height;let n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=va("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ys(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},If=0,ya=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lf=0,an=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qn,s=qn,r=bn,a=zi,o=wn,l=Zn,c=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=$n(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=xu;an.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,x=(f+1)/2,R=(m+1)/2,T=(h+d)/4,E=(u+v)/4,P=(g+p)/4;return _>x&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=E/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xa=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let p=1-o,m=l*d+c*f+h*g+u*v,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,m*M);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R}let x=o*M;if(l=l*p+d*x,c=c*p+f*x,h=h*p+g*x,u=u*p+v*x,p===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new C,Th=new xi,Gi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Dr.subVectors(this.max,Js),ts.subVectors(t.a,Js),es.subVectors(t.b,Js),ns.subVectors(t.c,Js),ai.subVectors(es,ts),oi.subVectors(ns,es),Ii.subVectors(ts,ns);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ii.z,Ii.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ii.z,0,-Ii.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ii.y,Ii.x,0];return!Ro(e,ts,es,ns,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,ts,es,ns,Dr))?!1:(Nr.crossVectors(ai,oi),e=[Nr.x,Nr.y,Nr.z],Ro(e,ts,es,ns,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new C,new C,new C,new C,new C,new C,new C,new C],xn=new C,Ur=new Gi,ts=new C,es=new C,ns=new C,ai=new C,oi=new C,Ii=new C,Js=new C,Dr=new C,Nr=new C,Li=new C;function Ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Li.fromArray(i,r);let o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Uf=new Gi,js=new C,Co=new C,As=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Uf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Co)),this.expandByPoint(js.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new C,Po=new C,Fr=new C,li=new C,Io=new C,Or=new C,Lo=new C,_a=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Po);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=li.dot(this.direction),l=-li.dot(Fr),c=li.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Po).addScaledVector(Fr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){Io.subVectors(e,t),Or.subVectors(n,t),Lo.crossVectors(Io,Or);let a=this.direction.dot(Lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);let l=o*this.direction.dot(Or.crossVectors(li,Or));if(l<0)return null;let c=o*this.direction.dot(Io.cross(li));if(c<0||l+c>a)return null;let h=-o*li.dot(Lo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,Nf)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ci.crossVectors(n,sn),ci.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ci.crossVectors(n,sn)),ci.normalize(),kr.crossVectors(sn,ci),s[0]=ci.x,s[4]=kr.x,s[8]=sn.x,s[1]=ci.y,s[5]=kr.y,s[9]=sn.y,s[2]=ci.z,s[6]=kr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],_=n[7],x=n[11],R=n[15],T=s[0],E=s[4],P=s[8],k=s[12],y=s[1],w=s[5],N=s[9],F=s[13],G=s[2],$=s[6],V=s[10],tt=s[14],X=s[3],ft=s[7],pt=s[11],St=s[15];return r[0]=a*T+o*y+l*G+c*X,r[4]=a*E+o*w+l*$+c*ft,r[8]=a*P+o*N+l*V+c*pt,r[12]=a*k+o*F+l*tt+c*St,r[1]=h*T+u*y+d*G+f*X,r[5]=h*E+u*w+d*$+f*ft,r[9]=h*P+u*N+d*V+f*pt,r[13]=h*k+u*F+d*tt+f*St,r[2]=g*T+v*y+p*G+m*X,r[6]=g*E+v*w+p*$+m*ft,r[10]=g*P+v*N+p*V+m*pt,r[14]=g*k+v*F+p*tt+m*St,r[3]=M*T+_*y+x*G+R*X,r[7]=M*E+_*w+x*$+R*ft,r[11]=M*P+_*N+x*V+R*pt,r[15]=M*k+_*F+x*tt+R*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+p*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=u*p*c-v*d*c+v*l*f-o*p*f-u*l*m+o*d*m,_=g*d*c-h*p*c-g*l*f+a*p*f+h*l*m-a*d*m,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*m+a*u*m,R=g*u*l-h*v*l-g*o*d+a*v*d+h*o*p-a*u*p,T=e*M+n*_+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=M*E,t[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*E,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*m+n*l*m)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*E,t[4]=_*E,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*E,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*E,t[8]=x*E,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*m-e*u*m)*E,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*m+e*o*m)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=R*E,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*p+e*u*p)*E,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*p-e*o*p)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,p=a*u,m=o*u,M=l*c,_=l*h,x=l*u,R=n.x,T=n.y,E=n.z;return s[0]=(1-(v+m))*R,s[1]=(f+x)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+_)*E,s[9]=(p-M)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=is.set(s[0],s[1],s[2]).length(),a=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);let c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Yn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Yn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ga)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Yn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,v;if(o===Yn)g=(a+r)*u,v=-2*u;else if(o===ga)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new C,_n=new pe,Df=new C(0,0,0),Nf=new C(1,1,1),ci=new C,kr=new C,sn=new C,Ah=new pe,Rh=new xi,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Ma=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ff=0,Ch=new C,ss=new xi,Hn=new pe,Br=new C,Qs=new C,Of=new C,kf=new xi,Ph=new C(1,0,0),Ih=new C(0,1,0),Lh=new C(0,0,1),Uh={type:"added"},Bf={type:"removed"},rs={type:"childadded",child:null},Uo={type:"childremoved",child:null},Ie=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new In,n=new xi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Bt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Qs,Br,this.up):Hn.lookAt(Br,Qs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Hn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new C(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new C,Vn=new C,Do=new C,Gn=new C,as=new C,os=new C,Dh=new C,No=new C,Fo=new C,Oo=new C,ko=new le,Bo=new le,zo=new le,fi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Vn.subVectors(n,e),Do.subVectors(t,e);let a=Mn.dot(Mn),o=Mn.dot(Vn),l=Mn.dot(Do),c=Vn.dot(Vn),h=Vn.dot(Do),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ko.setScalar(0),Bo.setScalar(0),zo.setScalar(0),ko.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Bo,r.y),a.addScaledVector(zo,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Vn.subVectors(t,e),Mn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Mn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;as.subVectors(s,n),os.subVectors(r,n),No.subVectors(t,n);let l=as.dot(No),c=os.dot(No);if(l<=0&&c<=0)return e.copy(n);Fo.subVectors(t,s);let h=as.dot(Fo),u=os.dot(Fo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(as,a);Oo.subVectors(t,r);let f=as.dot(Oo),g=os.dot(Oo);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(os,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Dh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Dh,o);let m=1/(p+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=kc(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ho(a,r,t+1/3),this.g=Ho(a,r,t),this.b=Ho(a,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=Du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ee.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Fe(Xe.r*255,0,255))*65536+Math.round(Fe(Xe.g*255,0,255))*256+Math.round(Fe(Xe.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=qe){ee.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(zr);let n=or(hi.h,zr.h,e),s=or(hi.s,zr.s,e),r=or(hi.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Mt;Mt.NAMES=Du;var zf=0,jn=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=mi,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==il&&(n.blendSrc=this.blendSrc),this.blendDst!==sl&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},we=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new C,Hr=new rt,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}};var ba=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sa=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hf=0,hn=new pe,Vo=new Ie,ls=new C,rn=new Gi,tr=new Gi,Ne=new C,Ee=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uu(t)?Sa:ba)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(rn.min,tr.min),rn.expandByPoint(Ne),Ne.addVectors(rn.max,tr.max),rn.expandByPoint(Ne)):(rn.expandByPoint(tr.min),rn.expandByPoint(tr.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ne.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(t,c),Ne.add(ls)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,d=new rt,f=new rt,g=new rt,v=new C,p=new C;function m(P,k,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,k),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[P].add(v),o[k].add(v),o[y].add(v),l[P].add(p),l[k].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,k=M.length;P<k;++P){let y=M[P],w=y.start,N=y.count;for(let F=w,G=w+N;F<G;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new C,x=new C,R=new C,T=new C;function E(P){R.fromBufferAttribute(s,P),T.copy(R);let k=o[P];_.copy(k),_.sub(R.multiplyScalar(R.dot(k))).normalize(),x.crossVectors(T,k);let w=x.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,w)}for(let P=0,k=M.length;P<k;++P){let y=M[P],w=y.start,N=y.count;for(let F=w,G=w+N;F<G;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Se(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=new pe,Ui=new _a,Vr=new As,Fh=new C,Gr=new C,Wr=new C,Xr=new C,Go=new C,qr=new C,Oh=new C,Kr=new C,ae=class extends Ie{constructor(t=new Ee,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Go.fromBufferAttribute(u,t),a?qr.addScaledVector(Go,h):qr.addScaledVector(Go.sub(e),h))}e.add(qr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(Vr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Vr,Fh)===null||Ui.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,R=_;x<R;x+=3){let T=o.getX(x),E=o.getX(x+1),P=o.getX(x+2);s=Yr(this,m,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let M=o.getX(p),_=o.getX(p+1),x=o.getX(p+2);s=Yr(this,a,t,n,c,h,u,M,_,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,R=_;x<R;x+=3){let T=x,E=x+1,P=x+2;s=Yr(this,m,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let M=p,_=p+1,x=p+2;s=Yr(this,a,t,n,c,h,u,M,_,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Vf(i,t,e,n,s,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===vi,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:i}}function Yr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Gr),i.getVertexPosition(l,Wr),i.getVertexPosition(c,Xr);let h=Vf(i,t,e,n,Gr,Wr,Xr,Oh);if(h){let u=new C;fi.getBarycoord(Oh,Gr,Wr,Xr,u),s&&(h.uv=fi.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};fi.getNormal(Gr,Wr,Xr,d.normal),h.face=d,h.barycoord=u}return h}var ge=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(v,p,m,M,_,x,R,T,E,P,k){let y=x/E,w=R/P,N=x/2,F=R/2,G=T/2,$=E+1,V=P+1,tt=0,X=0,ft=new C;for(let pt=0;pt<V;pt++){let St=pt*w-F;for(let Jt=0;Jt<$;Jt++){let ie=Jt*y-N;ft[v]=ie*M,ft[p]=St*_,ft[m]=G,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[p]=0,ft[m]=T>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(Jt/E),u.push(1-pt/P),tt+=1}}for(let pt=0;pt<P;pt++)for(let St=0;St<E;St++){let Jt=d+St+$*pt,ie=d+St+$*(pt+1),q=d+(St+1)+$*(pt+1),Q=d+(St+1)+$*pt;l.push(Jt,ie,Q),l.push(ie,q,Q),X+=6}o.addGroup(f,X,k),f+=X,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Gf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Wf={clone:Rs,merge:$e},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wa=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new C,kh=new rt,Bh=new rt,Be=class extends wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Bh),e.subVectors(Bh,kh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,hs=1,ql=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Be(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new Be(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new Be(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new Be(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Be(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ea=class extends an{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kl=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ea(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ge(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:pi});r.uniforms.tEquirect.value=e;let a=new ae(s,r),o=e.minFilter;return e.minFilter===zi&&(e.minFilter=bn),new ql(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Wo=new C,Kf=new C,Yf=new Bt,Xn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wo.subVectors(n,e).cross(Kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yf.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new As,$r=new C,dr=class{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],M=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,p-f,x-m).normalize(),n[1].setComponents(l+r,d+c,p+f,x+m).normalize(),n[2].setComponents(l+a,d+h,p+g,x+M).normalize(),n[3].setComponents(l-a,d-h,p-g,x-M).normalize(),n[4].setComponents(l-o,d-u,p-v,x-_).normalize(),e===Yn)n[5].setComponents(l+o,d+u,p+v,x+_).normalize();else if(e===ga)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $f(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ce=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let M=m*d-a;for(let _=0;_<c;_++){let x=_*u-r;g.push(x,-M,0),v.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let _=M+c*m,x=M+c*(m+1),R=M+1+c*(m+1),T=M+1+c*m;f.push(_,x,T),f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`
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
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
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
}`,f0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,v0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,x0=`#define STANDARD
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
}`,_0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,b0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:jf,alphamap_pars_fragment:Qf,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:vp,color_vertex:yp,common:xp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:Mp,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:wp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Vp,envmap_vertex:Lp,fog_vertex:Up,fog_pars_vertex:Dp,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:kp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:zp,lights_pars_begin:Hp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Yp,lights_fragment_begin:$p,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:vm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:bm,opaque_fragment:Sm,packing:wm,premultiplied_alpha_fragment:Em,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Lm,shadowmap_vertex:Um,shadowmask_pars_fragment:Dm,skinbase_vertex:Nm,skinning_pars_vertex:Fm,skinning_vertex:Om,skinnormal_vertex:km,specularmap_fragment:Bm,specularmap_pars_fragment:zm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Km,worldpos_vertex:Ym,background_vert:$m,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:jm,cube_vert:Qm,cube_frag:t0,depth_vert:e0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:v0,meshphong_frag:y0,meshphysical_vert:x0,meshphysical_frag:_0,meshtoon_vert:M0,meshtoon_frag:b0,points_vert:S0,points_frag:w0,shadow_vert:E0,shadow_frag:T0,sprite_vert:A0,sprite_frag:R0},st={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Pn={basic:{uniforms:$e([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:$e([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Mt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:$e([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:$e([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:$e([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Mt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:$e([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:$e([st.points,st.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:$e([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:$e([st.common,st.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:$e([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:$e([st.sprite,st.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:$e([st.common,st.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:$e([st.lights,st.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Pn.physical={uniforms:$e([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Zr={r:0,b:0,g:0},Ni=new In,C0=new pe;function P0(i,t,e,n,s,r,a){let o=new Mt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1,x=g(M);x===null?m(o,l):x&&x.isColor&&(m(x,1),_=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===Va)?(h===void 0&&(h=new ae(new ge(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Rs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(_.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(Ni)),h.material.toneMapped=ee.getTransfer(x.colorSpace)!==fe,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ae(new ce(2,2),new dn({name:"BackgroundMaterial",uniforms:Rs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ee.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,_){M.getRGB(Zr,Nu(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:v,addToRenderList:p}}function I0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,w,N,F,G){let $=!1,V=u(F,N,w);r!==V&&(r=V,c(r.object)),$=f(y,F,N,G),$&&g(y,F,N,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(y,w,N,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,w,N){let F=N.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let $=G[w.id];$===void 0&&($={},G[w.id]=$);let V=$[F];return V===void 0&&(V=d(l()),$[F]=V),V}function d(y){let w=[],N=[],F=[];for(let G=0;G<e;G++)w[G]=0,N[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,w,N,F){let G=r.attributes,$=w.attributes,V=0,tt=N.getAttributes();for(let X in tt)if(tt[X].location>=0){let pt=G[X],St=$[X];if(St===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),pt===void 0||pt.attribute!==St||St&&pt.data!==St.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(y,w,N,F){let G={},$=w.attributes,V=0,tt=N.getAttributes();for(let X in tt)if(tt[X].location>=0){let pt=$[X];pt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));let St={};St.attribute=pt,pt&&pt.data&&(St.data=pt.data),G[X]=St,V++}r.attributes=G,r.attributesNum=V,r.index=F}function v(){let y=r.newAttributes;for(let w=0,N=y.length;w<N;w++)y[w]=0}function p(y){m(y,0)}function m(y,w){let N=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;N[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),G[y]!==w&&(i.vertexAttribDivisor(y,w),G[y]=w)}function M(){let y=r.newAttributes,w=r.enabledAttributes;for(let N=0,F=w.length;N<F;N++)w[N]!==y[N]&&(i.disableVertexAttribArray(N),w[N]=0)}function _(y,w,N,F,G,$,V){V===!0?i.vertexAttribIPointer(y,w,N,G,$):i.vertexAttribPointer(y,w,N,F,G,$)}function x(y,w,N,F){v();let G=F.attributes,$=N.getAttributes(),V=w.defaultAttributeValues;for(let tt in $){let X=$[tt];if(X.location>=0){let ft=G[tt];if(ft===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),ft!==void 0){let pt=ft.normalized,St=ft.itemSize,Jt=t.get(ft);if(Jt===void 0)continue;let ie=Jt.buffer,q=Jt.type,Q=Jt.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||ft.gpuType===Ic;if(ft.isInterleavedBufferAttribute){let mt=ft.data,Ft=mt.stride,Ct=ft.offset;if(mt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)m(X.location+Gt,mt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)p(X.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Gt=0;Gt<X.locationSize;Gt++)_(X.location+Gt,St/X.locationSize,q,pt,Ft*Q,(Ct+St/X.locationSize*Gt)*Q,_t)}else{if(ft.isInstancedBufferAttribute){for(let mt=0;mt<X.locationSize;mt++)m(X.location+mt,ft.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let mt=0;mt<X.locationSize;mt++)p(X.location+mt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let mt=0;mt<X.locationSize;mt++)_(X.location+mt,St/X.locationSize,q,pt,St*Q,St/X.locationSize*mt*Q,_t)}}else if(V!==void 0){let pt=V[tt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(X.location,pt);break;case 3:i.vertexAttrib3fv(X.location,pt);break;case 4:i.vertexAttrib4fv(X.location,pt);break;default:i.vertexAttrib1fv(X.location,pt)}}}}M()}function R(){P();for(let y in n){let w=n[y];for(let N in w){let F=w[N];for(let G in F)h(F[G].object),delete F[G];delete w[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let w=n[y.id];for(let N in w){let F=w[N];for(let G in F)h(F[G].object),delete F[G];delete w[N]}delete n[y.id]}function E(y){for(let w in n){let N=n[w];if(N[y.id]===void 0)continue;let F=N[y.id];for(let G in F)h(F[G].object),delete F[G];delete N[y.id]}}function P(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:k,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function L0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function U0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==wn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let P=E===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Kn&&!P)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function D0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Xn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,_=M*4,x=m.clippingState||null;l.value=x,x=h(g,d,_,f);for(let R=0;R!==_;++R)x[R]=e[R];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,x=f;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function N0(i){let t=new WeakMap;function e(a,o){return o===dl?a.mapping=bs:o===fl&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===dl||o===fl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ta=class extends wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,zh=[.125,.215,.35,.446,.526,.582],Bi=20,Xo=new Ta,Hh=new Mt,qo=null,Ko=0,Yo=0,$o=!1,Oi=(1+Math.sqrt(5))/2,us=1/Oi,Vh=[new C(-Oi,us,0),new C(Oi,us,0),new C(-us,0,Oi),new C(us,0,Oi),new C(0,Oi,-us),new C(0,Oi,us),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qo,Ko,Yo),this._renderer.xr.enabled=$o,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:yr,format:wn,colorSpace:Mi,depthBuffer:!1},s=Gh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(r)),this._blurMaterial=O0(r,t,e)}return s}_compileMaterial(t){let e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Xo)}_sceneToCubeUV(t,e,n,s){let o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hh),h.toneMapping=gi,h.autoClear=!1;let f=new we({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new ae(new ge,f),v=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(Hh),v=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;Jr(s,M*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===bs||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vh[(s-r-1)%Vh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ae(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Bi;p>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bi}`);let m=[],M=0;for(let E=0;E<Bi;++E){let P=E/v,k=Math.exp(-P*P/2);m.push(k),E===0?M+=k:E<p&&(M+=2*k)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let x=this._sizeLods[s],R=3*x*(s>_-gs?s-_+gs:0),T=4*(this._cubeSize-x);Jr(e,R,T,3*x,2*x),l.setRenderTarget(e),l.render(u,Xo)}};function F0(i){let t=[],e=[],n=[],s=i,r=i-gs+1+zh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-gs?l=zh[a-i+gs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,M=new Float32Array(v*g*f),_=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,P=T>2?0:-1,k=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];M.set(k,v*g*T),_.set(d,p*g*T);let y=[T,T,T,T,T,T];x.set(y,m*g*T)}let R=new Ee;R.setAttribute("position",new Se(M,v)),R.setAttribute("uv",new Se(_,p)),R.setAttribute("faceIndex",new Se(x,m)),t.push(R),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gh(i,t,e){let n=new Jn(i,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function O0(i,t,e){let n=new Float32Array(Bi),s=new C(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Wh(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Xh(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function k0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===dl||l===fl,h=l===bs||l===Ss;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Aa(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Aa(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function B0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ua("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function z0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let _=0,x=M.length;_<x;_+=3){let R=M[_+0],T=M[_+1],E=M[_+2];d.push(R,T,T,E,E,R)}}else if(g!==void 0){let M=g.array;v=g.version;for(let _=0,x=M.length/3-1;_<x;_+=3){let R=_+0,T=_+1,E=_+2;d.push(R,T,T,E,E,R)}}else return;let p=new(Uu(d)?Sa:ba)(d,1);p.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function H0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,v){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<v.length;M++)e.update(m,n,v[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function V0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function G0(i,t,e){let n=new WeakMap,s=new le;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let k=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*R*4*u),E=new xa(T,x,R,u);E.type=Kn,E.needsUpdate=!0;let P=_*4;for(let y=0;y<u;y++){let w=p[y],N=m[y],F=M[y],G=x*R*4*y;for(let $=0;$<w.count;$++){let V=$*P;f===!0&&(s.fromBufferAttribute(w,$),T[G+V+0]=s.x,T[G+V+1]=s.y,T[G+V+2]=s.z,T[G+V+3]=0),g===!0&&(s.fromBufferAttribute(N,$),T[G+V+4]=s.x,T[G+V+5]=s.y,T[G+V+6]=s.z,T[G+V+7]=0),v===!0&&(s.fromBufferAttribute(F,$),T[G+V+8]=s.x,T[G+V+9]=s.y,T[G+V+10]=s.z,T[G+V+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new rt(x,R)},n.set(o,d),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function W0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ra=class extends an{constructor(t,e,n,s,r,a,o,l,c,h=vs){if(h!==vs&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Vi),n===void 0&&h===Es&&(n=ws),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ou=new an,qh=new Ra(1,1),ku=new xa,Bu=new Xl,zu=new Ea,Kh=[],Yh=[],$h=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wa(i,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function X0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function $0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),Ue(e,n)}}function Z0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),Ue(e,n)}}function J0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),Ue(e,n)}}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qh.compareFunction=Iu,r=qh):r=Ou,e.setTexture2D(t||r,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bu,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zu,s)}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function hg(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return K0;case 35666:return Y0;case 35674:return $0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return j0;case 35667:case 35671:return Q0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(i,t){i.uniform1fv(this.addr,t)}function dg(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function fg(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function pg(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function mg(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vg(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function xg(i,t){i.uniform2iv(this.addr,t)}function _g(i,t){i.uniform3iv(this.addr,t)}function Mg(i,t){i.uniform4iv(this.addr,t)}function bg(i,t){i.uniform1uiv(this.addr,t)}function Sg(i,t){i.uniform2uiv(this.addr,t)}function wg(i,t){i.uniform3uiv(this.addr,t)}function Eg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ou,r[a])}function Ag(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bu,r[a])}function Rg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zu,r[a])}function Cg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ku,r[a])}function Pg(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return vg;case 5124:case 35670:return yg;case 35667:case 35671:return xg;case 35668:case 35672:return _g;case 35669:case 35673:return Mg;case 5125:return bg;case 36294:return Sg;case 36295:return wg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}var Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}},$l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Zo=/(\w+)(\])?(\[|\.)?/g;function jh(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){let n=i.name,s=n.length;for(Zo.lastIndex=0;;){let r=Zo.exec(n),a=Zo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(e,c===void 0?new Yl(o,i,t):new $l(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Zl(o),jh(e,u)),e=u}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ig(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Qh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lg=37297,Ug=0;function Dg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ng(i){let t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(i),n;switch(t===e?n="":t===ma&&e===pa?n="LinearDisplayP3ToLinearSRGB":t===pa&&e===ma&&(n="LinearSRGBToLinearDisplayP3"),i){case Mi:case Ga:return[n,"LinearTransferOETF"];case qe:case Oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function tu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Dg(i.getShaderSource(t),a)}else return s}function Fg(i,t){let e=Ng(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Og(i,t){let e;switch(t){case qd:e="Linear";break;case Kd:e="Reinhard";break;case Yd:e="Cineon";break;case Pc:e="ACESFilmic";break;case Zd:e="AgX";break;case Jd:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jr=new C;function kg(){ee.getLuminanceCoefficients(jr);let i=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function zg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function rr(i){return i!==""}function eu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(Vg,Wg)}var Gg=new Map;function Wg(i,t){let e=kt[t];if(e===void 0){let n=Gg.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}var Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(i){return i.replace(Xg,qg)}function qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Kg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:t="ENVMAP_TYPE_CUBE";break;case Va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $g(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function Zg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yu:t="ENVMAP_BLENDING_MULTIPLY";break;case Wd:t="ENVMAP_BLENDING_MIX";break;case Xd:t="ENVMAP_BLENDING_ADD";break}return t}function Jg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Kg(e),c=Yg(e),h=$g(e),u=Zg(e),d=Jg(e),f=Bg(e),g=zg(r),v=s.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(p=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?kt.tonemapping_pars_fragment:"",e.toneMapping!==gi?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),a=Jl(a),a=eu(a,e),a=nu(a,e),o=Jl(o),o=eu(o,e),o=nu(o,e),a=iu(a),o=iu(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=M+p+a,x=M+m+o,R=Qh(s,s.VERTEX_SHADER,_),T=Qh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(w){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(T).trim(),$=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,T);else{let tt=tu(s,R,"vertex"),X=tu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+tt+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||G==="")&&(V=!1);V&&(w.diagnostics={runnable:$,programLog:N,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(R),s.deleteShader(T),P=new xs(s,v),k=Hg(s,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let k;this.getAttributes=function(){return k===void 0&&E(this),k};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Lg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var Qg=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ql(t),e.set(t,n)),n}},Ql=class{constructor(t){this.id=Qg++,this.code=t,this.usedTimes=0}};function tv(i,t,e,n,s,r,a){let o=new Ma,l=new jl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,w,N,F,G){let $=F.fog,V=G.geometry,tt=y.isMeshStandardMaterial?F.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||tt),ft=X&&X.mapping===Va?X.image.height:null,pt=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Jt=St!==void 0?St.length:0,ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let q,Q,_t,mt;if(pt){let je=Pn[pt];q=je.vertexShader,Q=je.fragmentShader}else q=y.vertexShader,Q=y.fragmentShader,l.update(y),_t=l.getVertexShaderID(y),mt=l.getFragmentShaderID(y);let Ft=i.getRenderTarget(),Ct=G.isInstancedMesh===!0,Gt=G.isBatchedMesh===!0,oe=!!y.map,Wt=!!y.matcap,I=!!X,tn=!!y.aoMap,Ht=!!y.lightMap,Yt=!!y.bumpMap,It=!!y.normalMap,ue=!!y.displacementMap,Nt=!!y.emissiveMap,A=!!y.metalnessMap,b=!!y.roughnessMap,O=y.anisotropy>0,Y=y.clearcoat>0,j=y.dispersion>0,K=y.iridescence>0,wt=y.sheen>0,at=y.transmission>0,gt=O&&!!y.anisotropyMap,$t=Y&&!!y.clearcoatMap,et=Y&&!!y.clearcoatNormalMap,vt=Y&&!!y.clearcoatRoughnessMap,Lt=K&&!!y.iridescenceMap,Ut=K&&!!y.iridescenceThicknessMap,yt=wt&&!!y.sheenColorMap,Vt=wt&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,he=!!y.specularColorMap,L=!!y.specularIntensityMap,ut=at&&!!y.transmissionMap,W=at&&!!y.thicknessMap,Z=!!y.gradientMap,lt=!!y.alphaMap,dt=y.alphaTest>0,Xt=!!y.alphaHash,Re=!!y.extensions,Je=gi;y.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(Je=i.toneMapping);let jt={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:Q,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&G._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&G.instanceColor!==null,instancingMorph:Ct&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:Mi,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:Wt,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:ft,aoMap:tn,lightMap:Ht,bumpMap:Yt,normalMap:It,displacementMap:f&&ue,emissiveMap:Nt,normalMapObjectSpace:It&&y.normalMapType===ef,normalMapTangentSpace:It&&y.normalMapType===Pu,metalnessMap:A,roughnessMap:b,anisotropy:O,anisotropyMap:gt,clearcoat:Y,clearcoatMap:$t,clearcoatNormalMap:et,clearcoatRoughnessMap:vt,dispersion:j,iridescence:K,iridescenceMap:Lt,iridescenceThicknessMap:Ut,sheen:wt,sheenColorMap:yt,sheenRoughnessMap:Vt,specularMap:Ot,specularColorMap:he,specularIntensityMap:L,transmission:at,transmissionMap:ut,thicknessMap:W,gradientMap:Z,opaque:y.transparent===!1&&y.blending===mi&&y.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:Xt,combine:y.combine,mapUv:oe&&p(y.map.channel),aoMapUv:tn&&p(y.aoMap.channel),lightMapUv:Ht&&p(y.lightMap.channel),bumpMapUv:Yt&&p(y.bumpMap.channel),normalMapUv:It&&p(y.normalMap.channel),displacementMapUv:ue&&p(y.displacementMap.channel),emissiveMapUv:Nt&&p(y.emissiveMap.channel),metalnessMapUv:A&&p(y.metalnessMap.channel),roughnessMapUv:b&&p(y.roughnessMap.channel),anisotropyMapUv:gt&&p(y.anisotropyMap.channel),clearcoatMapUv:$t&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:et&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&p(y.sheenRoughnessMap.channel),specularMapUv:Ot&&p(y.specularMap.channel),specularColorMapUv:he&&p(y.specularColorMap.channel),specularIntensityMapUv:L&&p(y.specularIntensityMap.channel),transmissionMapUv:ut&&p(y.transmissionMap.channel),thicknessMapUv:W&&p(y.thicknessMap.channel),alphaMapUv:lt&&p(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(It||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(oe||lt),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ze,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function M(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(w,y),x(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function R(y){let w=v[y.type],N;if(w){let F=Pn[w];N=Wf.clone(F.uniforms)}else N=y.uniforms;return N}function T(y,w){let N;for(let F=0,G=h.length;F<G;F++){let $=h[F];if($.cacheKey===w){N=$,++N.usedTimes;break}}return N===void 0&&(N=new jg(i,w,y,r),h.push(N)),N}function E(y){if(--y.usedTimes===0){let w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:R,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:k}}function ev(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function nv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function o(u,d,f,g,v,p){let m=a(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,v,p){let m=a(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||nv),n.length>1&&n.sort(d||ru),s.length>1&&s.sort(d||ru)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function iv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new au,i.set(n,[a])):s>=r.length?(a=new au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function sv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Mt};break;case"SpotLight":e={position:new C,direction:new C,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function rv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var av=0;function ov(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lv(i){let t=new sv,e=rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new pe,a=new pe;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,_=0,x=0,R=0,T=0,E=0;c.sort(ov);for(let k=0,y=c.length;k<y;k++){let w=c[k],N=w.color,F=w.intensity,G=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],F);E++}else if(w.isDirectionalLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let tt=w.shadow,X=e.get(w);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=V,f++}else if(w.isSpotLight){let V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(N).multiplyScalar(F),V.distance=G,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[v]=V;let tt=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,tt.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[v]=tt.matrix,w.castShadow){let X=e.get(w);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=$,x++}v++}else if(w.isRectAreaLight){let V=t.get(w);V.color.copy(N).multiplyScalar(F),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=V,p++}else if(w.isPointLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let tt=w.shadow,X=e.get(w);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=V,g++}else if(w.isHemisphereLight){let V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(F),V.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[m]=V,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=E,n.version=av++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let _=c[m];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function ou(i){let t=new lv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ou(i),t.set(s,[o])):r>=a.length?(o=new ou(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var tc=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ec=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
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
}`;function dv(i,t,e){let n=new dr,s=new rt,r=new rt,a=new le,o=new tc({depthPacking:tf}),l=new ec,c={},h=e.maxTextureSize,u={[vi]:He,[He]:vi,[ze]:ze},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ae(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let m=this.type;this.render=function(T,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let k=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),N=i.state;N.setBlending(pi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=m!==Wn&&this.type===Wn,G=m===Wn&&this.type!==Wn;for(let $=0,V=T.length;$<V;$++){let tt=T[$],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ft=X.getFrameExtents();if(s.multiply(ft),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,X.mapSize.y=r.y)),X.map===null||F===!0||G===!0){let St=this.type!==Wn?{minFilter:un,magFilter:un}:{};X.map!==null&&X.map.dispose(),X.map=new Jn(s.x,s.y,St),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let pt=X.getViewportCount();for(let St=0;St<pt;St++){let Jt=X.getViewport(St);a.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),N.viewport(a),X.updateMatrices(tt,St),n=X.getFrustum(),x(E,P,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===Wn&&M(X,P),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(k,y,w)};function M(T,E){let P=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,f,v,null)}function _(T,E,P,k){let y=null,w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=y.uuid,F=E.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let $=G[F];$===void 0&&($=y.clone(),G[F]=$,E.addEventListener("dispose",R)),y=$}if(y.visible=E.visible,y.wireframe=E.wireframe,k===Wn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=P}return y}function x(T,E,P,k,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let F=t.update(T),G=T.material;if(Array.isArray(G)){let $=F.groups;for(let V=0,tt=$.length;V<tt;V++){let X=$[V],ft=G[X.materialIndex];if(ft&&ft.visible){let pt=_(T,ft,k,y);T.onBeforeShadow(i,T,E,P,F,pt,X),i.renderBufferDirect(P,null,F,pt,T,X),T.onAfterShadow(i,T,E,P,F,pt,X)}}}else if(G.visible){let $=_(T,G,k,y);T.onBeforeShadow(i,T,E,P,F,$,null),i.renderBufferDirect(P,null,F,$,T,null),T.onAfterShadow(i,T,E,P,F,$,null)}}let N=T.children;for(let F=0,G=N.length;F<G;F++)x(N[F],E,P,k,y)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let k=c[P],y=T.target.uuid;y in k&&(k[y].dispose(),delete k[y])}}}var fv={[rl]:al,[ol]:hl,[ll]:ul,[Ms]:cl,[al]:rl,[hl]:ol,[ul]:ll,[cl]:Ms};function pv(i){function t(){let L=!1,ut=new le,W=null,Z=new le(0,0,0,0);return{setMask:function(lt){W!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),W=lt)},setLocked:function(lt){L=lt},setClear:function(lt,dt,Xt,Re,Je){Je===!0&&(lt*=Re,dt*=Re,Xt*=Re),ut.set(lt,dt,Xt,Re),Z.equals(ut)===!1&&(i.clearColor(lt,dt,Xt,Re),Z.copy(ut))},reset:function(){L=!1,W=null,Z.set(-1,0,0,0)}}}function e(){let L=!1,ut=!1,W=null,Z=null,lt=null;return{setReversed:function(dt){ut=dt},setTest:function(dt){dt?_t(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(dt){W!==dt&&!L&&(i.depthMask(dt),W=dt)},setFunc:function(dt){if(ut&&(dt=fv[dt]),Z!==dt){switch(dt){case rl:i.depthFunc(i.NEVER);break;case al:i.depthFunc(i.ALWAYS);break;case ol:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case ll:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case hl:i.depthFunc(i.GREATER);break;case ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=dt}},setLocked:function(dt){L=dt},setClear:function(dt){lt!==dt&&(i.clearDepth(dt),lt=dt)},reset:function(){L=!1,W=null,Z=null,lt=null}}}function n(){let L=!1,ut=null,W=null,Z=null,lt=null,dt=null,Xt=null,Re=null,Je=null;return{setTest:function(jt){L||(jt?_t(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(jt){ut!==jt&&!L&&(i.stencilMask(jt),ut=jt)},setFunc:function(jt,je,kn){(W!==jt||Z!==je||lt!==kn)&&(i.stencilFunc(jt,je,kn),W=jt,Z=je,lt=kn)},setOp:function(jt,je,kn){(dt!==jt||Xt!==je||Re!==kn)&&(i.stencilOp(jt,je,kn),dt=jt,Xt=je,Re=kn)},setLocked:function(jt){L=jt},setClear:function(jt){Je!==jt&&(i.clearStencil(jt),Je=jt)},reset:function(){L=!1,ut=null,W=null,Z=null,lt=null,dt=null,Xt=null,Re=null,Je=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,M=null,_=null,x=null,R=null,T=new Mt(0,0,0),E=0,P=!1,k=null,y=null,w=null,N=null,F=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,V=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=V>=1):tt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=V>=2);let X=null,ft={},pt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Jt=new le().fromArray(pt),ie=new le().fromArray(St);function q(L,ut,W,Z){let lt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(L,dt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<W;Xt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ut+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return dt}let Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),r.setFunc(Ms),Ht(!1),Yt(ph),_t(i.CULL_FACE),I(pi);function _t(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function mt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Ft(L,ut){return h[L]!==ut?(i.bindFramebuffer(L,ut),h[L]=ut,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ct(L,ut){let W=d,Z=!1;if(L){W=u.get(ut),W===void 0&&(W=[],u.set(ut,W));let lt=L.textures;if(W.length!==lt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Xt=lt.length;dt<Xt;dt++)W[dt]=i.COLOR_ATTACHMENT0+dt;W.length=lt.length,Z=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Z=!0);Z&&i.drawBuffers(W)}function Gt(L){return f!==L?(i.useProgram(L),f=L,!0):!1}let oe={[ki]:i.FUNC_ADD,[Ad]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};oe[Cd]=i.MIN,oe[Pd]=i.MAX;let Wt={[Id]:i.ZERO,[Ld]:i.ONE,[Ud]:i.SRC_COLOR,[il]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Nd]:i.DST_ALPHA,[Dd]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[kd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Hd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,ut,W,Z,lt,dt,Xt,Re,Je,jt){if(L===pi){g===!0&&(mt(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),L!==Td){if(L!==v||jt!==P){if((p!==ki||_!==ki)&&(i.blendEquation(i.FUNC_ADD),p=ki,_=ki),jt)switch(L){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,M=null,x=null,R=null,T.set(0,0,0),E=0,v=L,P=jt}return}lt=lt||ut,dt=dt||W,Xt=Xt||Z,(ut!==p||lt!==_)&&(i.blendEquationSeparate(oe[ut],oe[lt]),p=ut,_=lt),(W!==m||Z!==M||dt!==x||Xt!==R)&&(i.blendFuncSeparate(Wt[W],Wt[Z],Wt[dt],Wt[Xt]),m=W,M=Z,x=dt,R=Xt),(Re.equals(T)===!1||Je!==E)&&(i.blendColor(Re.r,Re.g,Re.b,Je),T.copy(Re),E=Je),v=L,P=!1}function tn(L,ut){L.side===ze?mt(i.CULL_FACE):_t(i.CULL_FACE);let W=L.side===He;ut&&(W=!W),Ht(W),L.blending===mi&&L.transparent===!1?I(pi):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){k!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),k=L)}function Yt(L){L!==wd?(_t(i.CULL_FACE),L!==y&&(L===ph?i.cullFace(i.BACK):L===Ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),y=L}function It(L){L!==w&&($&&i.lineWidth(L),w=L)}function ue(L,ut,W){L?(_t(i.POLYGON_OFFSET_FILL),(N!==ut||F!==W)&&(i.polygonOffset(ut,W),N=ut,F=W)):mt(i.POLYGON_OFFSET_FILL)}function Nt(L){L?_t(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+G-1),X!==L&&(i.activeTexture(L),X=L)}function b(L,ut,W){W===void 0&&(X===null?W=i.TEXTURE0+G-1:W=X);let Z=ft[W];Z===void 0&&(Z={type:void 0,texture:void 0},ft[W]=Z),(Z.type!==L||Z.texture!==ut)&&(X!==W&&(i.activeTexture(W),X=W),i.bindTexture(L,ut||Q[L]),Z.type=L,Z.texture=ut)}function O(){let L=ft[X];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(L){Jt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Jt.copy(L))}function yt(L){ie.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function Vt(L,ut){let W=l.get(ut);W===void 0&&(W=new WeakMap,l.set(ut,W));let Z=W.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(ut,L.name),W.set(L,Z))}function Ot(L,ut){let Z=l.get(ut).get(L);o.get(ut)!==Z&&(i.uniformBlockBinding(ut,Z,L.__bindingPointIndex),o.set(ut,Z))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,ft={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,M=null,_=null,x=null,R=null,T=new Mt(0,0,0),E=0,P=!1,k=null,y=null,w=null,N=null,F=null,Jt.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:_t,disable:mt,bindFramebuffer:Ft,drawBuffers:Ct,useProgram:Gt,setBlending:I,setMaterial:tn,setFlipSided:Ht,setCullFace:Yt,setLineWidth:It,setPolygonOffset:ue,setScissorTest:Nt,activeTexture:A,bindTexture:b,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:vt,texImage3D:Lt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:$t,texStorage3D:et,texSubImage2D:K,texSubImage3D:wt,compressedTexSubImage2D:at,compressedTexSubImage3D:gt,scissor:Ut,viewport:yt,reset:he}}function lu(i,t,e,n){let s=mv(n);switch(e){case Su:return i*t;case Eu:return i*t;case Tu:return i*t*2;case Au:return i*t/s.components*s.byteLength;case Dc:return i*t/s.components*s.byteLength;case Ru:return i*t*2/s.components*s.byteLength;case Nc:return i*t*2/s.components*s.byteLength;case wu:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Fc:return i*t*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:case yl:return Math.max(i,16)*Math.max(t,8)/4;case ml:case vl:return Math.max(i,8)*Math.max(t,8)/2;case xl:case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ha:case Fl:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cu:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mv(i){switch(i){case Zn:case _u:return{byteLength:1,components:1};case ur:case Mu:case yr:return{byteLength:2,components:1};case Lc:case Uc:return{byteLength:2,components:4};case Vi:case Ic:case Kn:return{byteLength:4,components:1};case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):va("canvas")}function v(A,b,O){let Y=1,j=Nt(A);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor(Y*j.width),wt=Math.floor(Y*j.height);u===void 0&&(u=g(K,wt));let at=b?g(K,wt):u;return at.width=K,at.height=wt,at.getContext("2d").drawImage(A,0,0,K,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+wt+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==un&&A.minFilter!==bn}function m(A){i.generateMipmap(A)}function M(A,b,O,Y,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),b===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){let wt=j?fa:ee.getTransfer(Y);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=wt===fe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,b){let O;return A?b===null||b===Vi||b===ws?O=i.DEPTH24_STENCIL8:b===Kn?O=i.DEPTH32F_STENCIL8:b===ur&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vi||b===ws?O=i.DEPTH_COMPONENT24:b===Kn?O=i.DEPTH_COMPONENT32F:b===ur&&(O=i.DEPTH_COMPONENT16),O}function x(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==bn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){let b=A.target;b.removeEventListener("dispose",R),E(b),b.isVideoTexture&&h.delete(b)}function T(A){let b=A.target;b.removeEventListener("dispose",T),k(b)}function E(A){let b=n.get(A);if(b.__webglInit===void 0)return;let O=A.source,Y=d.get(O);if(Y){let j=Y[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(A),Object.keys(Y).length===0&&d.delete(O)}n.remove(A)}function P(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let O=A.source,Y=d.get(O);delete Y[b.__cacheKey],a.memory.textures--}function k(A){let b=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let j=0;j<b.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=A.textures;for(let Y=0,j=O.length;Y<j;Y++){let K=n.get(O[Y]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(A)}let y=0;function w(){y=0}function N(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function F(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function G(A,b){let O=n.get(A);if(A.isVideoTexture&&It(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(O,A,b);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function $(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){ie(O,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function V(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){ie(O,A,b);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function tt(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}let X={[Hi]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[pl]:i.MIRRORED_REPEAT},ft={[un]:i.NEAREST,[jd]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},pt={[nf]:i.NEVER,[cf]:i.ALWAYS,[sf]:i.LESS,[Iu]:i.LEQUAL,[rf]:i.EQUAL,[lf]:i.GEQUAL,[af]:i.GREATER,[of]:i.NOTEQUAL};function St(A,b){if(b.type===Kn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===bn||b.magFilter===bo||b.magFilter===Lr||b.magFilter===zi||b.minFilter===bn||b.minFilter===bo||b.minFilter===Lr||b.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,X[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,X[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,X[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ft[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==Lr&&b.minFilter!==zi||b.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Jt(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));let Y=b.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let K=F(b);if(K!==A.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[K].usedTimes++;let wt=j[A.__cacheKey];wt!==void 0&&(j[A.__cacheKey].usedTimes--,wt.usedTimes===0&&P(b)),A.__cacheKey=K,A.__webglTexture=j[K].texture}return O}function ie(A,b,O){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let j=Jt(A,b),K=b.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+O);let wt=n.get(K);if(K.version!==wt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);let at=ee.getPrimaries(ee.workingColorSpace),gt=b.colorSpace===di?null:ee.getPrimaries(b.colorSpace),$t=b.colorSpace===di||at===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let et=v(b.image,!1,s.maxTextureSize);et=ue(b,et);let vt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),Ut=M(b.internalFormat,vt,Lt,b.colorSpace,b.isVideoTexture);St(Y,b);let yt,Vt=b.mipmaps,Ot=b.isVideoTexture!==!0,he=wt.__version===void 0||j===!0,L=K.dataReady,ut=x(b,et);if(b.isDepthTexture)Ut=_(b.format===Es,b.type),he&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Ut,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ut,et.width,et.height,0,vt,Lt,null));else if(b.isDataTexture)if(Vt.length>0){Ot&&he&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,Vt[0].width,Vt[0].height);for(let W=0,Z=Vt.length;W<Z;W++)yt=Vt[W],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,vt,Lt,yt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,yt.width,yt.height,0,vt,Lt,yt.data);b.generateMipmaps=!1}else Ot?(he&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,et.width,et.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,vt,Lt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,et.width,et.height,0,vt,Lt,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ut,Vt[0].width,Vt[0].height,et.depth);for(let W=0,Z=Vt.length;W<Z;W++)if(yt=Vt[W],b.format!==wn)if(vt!==null)if(Ot){if(L)if(b.layerUpdates.size>0){let lt=lu(yt.width,yt.height,b.format,b.type);for(let dt of b.layerUpdates){let Xt=yt.data.subarray(dt*lt/yt.data.BYTES_PER_ELEMENT,(dt+1)*lt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,dt,yt.width,yt.height,1,vt,Xt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,et.depth,vt,yt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ut,yt.width,yt.height,et.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,et.depth,vt,Lt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ut,yt.width,yt.height,et.depth,0,vt,Lt,yt.data)}else{Ot&&he&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,Vt[0].width,Vt[0].height);for(let W=0,Z=Vt.length;W<Z;W++)yt=Vt[W],b.format!==wn?vt!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,vt,Lt,yt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,yt.width,yt.height,0,vt,Lt,yt.data)}else if(b.isDataArrayTexture)if(Ot){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ut,et.width,et.height,et.depth),L)if(b.layerUpdates.size>0){let W=lu(et.width,et.height,b.format,b.type);for(let Z of b.layerUpdates){let lt=et.data.subarray(Z*W/et.data.BYTES_PER_ELEMENT,(Z+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,vt,Lt,lt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,et.width,et.height,et.depth,0,vt,Lt,et.data);else if(b.isData3DTexture)Ot?(he&&e.texStorage3D(i.TEXTURE_3D,ut,Ut,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,et.width,et.height,et.depth,0,vt,Lt,et.data);else if(b.isFramebufferTexture){if(he)if(Ot)e.texStorage2D(i.TEXTURE_2D,ut,Ut,et.width,et.height);else{let W=et.width,Z=et.height;for(let lt=0;lt<ut;lt++)e.texImage2D(i.TEXTURE_2D,lt,Ut,W,Z,0,vt,Lt,null),W>>=1,Z>>=1}}else if(Vt.length>0){if(Ot&&he){let W=Nt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Ut,W.width,W.height)}for(let W=0,Z=Vt.length;W<Z;W++)yt=Vt[W],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Lt,yt):e.texImage2D(i.TEXTURE_2D,W,Ut,vt,Lt,yt);b.generateMipmaps=!1}else if(Ot){if(he){let W=Nt(et);e.texStorage2D(i.TEXTURE_2D,ut,Ut,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Ut,vt,Lt,et);p(b)&&m(Y),wt.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function q(A,b,O){if(b.image.length!==6)return;let Y=Jt(A,b),j=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let K=n.get(j);if(j.version!==K.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);let wt=ee.getPrimaries(ee.workingColorSpace),at=b.colorSpace===di?null:ee.getPrimaries(b.colorSpace),gt=b.colorSpace===di||wt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let $t=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let Z=0;Z<6;Z++)!$t&&!et?vt[Z]=v(b.image[Z],!0,s.maxCubemapSize):vt[Z]=et?b.image[Z].image:b.image[Z],vt[Z]=ue(b,vt[Z]);let Lt=vt[0],Ut=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),Vt=M(b.internalFormat,Ut,yt,b.colorSpace),Ot=b.isVideoTexture!==!0,he=K.__version===void 0||Y===!0,L=j.dataReady,ut=x(b,Lt);St(i.TEXTURE_CUBE_MAP,b);let W;if($t){Ot&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Vt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){W=vt[Z].mipmaps;for(let lt=0;lt<W.length;lt++){let dt=W[lt];b.format!==wn?Ut!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Vt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,dt.width,dt.height,Ut,yt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Vt,dt.width,dt.height,0,Ut,yt,dt.data)}}}else{if(W=b.mipmaps,Ot&&he){W.length>0&&ut++;let Z=Nt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,vt[Z].width,vt[Z].height,Ut,yt,vt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,vt[Z].width,vt[Z].height,0,Ut,yt,vt[Z].data);for(let lt=0;lt<W.length;lt++){let Xt=W[lt].image[Z].image;Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Xt.width,Xt.height,Ut,yt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Vt,Xt.width,Xt.height,0,Ut,yt,Xt.data)}}else{Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ut,yt,vt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,Ut,yt,vt[Z]);for(let lt=0;lt<W.length;lt++){let dt=W[lt];Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Ut,yt,dt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Vt,Ut,yt,dt.image[Z])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),K.__version=j.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Q(A,b,O,Y,j,K){let wt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),gt=M(O.internalFormat,wt,at,O.colorSpace);if(!n.get(b).__hasExternalTextures){let et=Math.max(1,b.width>>K),vt=Math.max(1,b.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,K,gt,et,vt,b.depth,0,wt,at,null):e.texImage2D(j,K,gt,et,vt,0,wt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Yt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,n.get(O).__webglTexture,0,Ht(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,n.get(O).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(A,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let Y=b.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,K=_(b.stencilBuffer,j),wt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ht(b);Yt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,K,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,A)}else{let Y=b.textures;for(let j=0;j<Y.length;j++){let K=Y[j],wt=r.convert(K.format,K.colorSpace),at=r.convert(K.type),gt=M(K.internalFormat,wt,at,K.colorSpace),$t=Ht(b);O&&Yt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,gt,b.width,b.height):Yt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,gt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let Y=n.get(b.depthTexture).__webglTexture,j=Ht(b);if(b.depthTexture.format===vs)Yt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(b.depthTexture.format===Es)Yt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ft(A){let b=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Y}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),_t(b.__webglDepthbuffer[Y],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),_t(b.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,b,O){let Y=n.get(A);b!==void 0&&Q(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ft(A)}function Gt(A){let b=A.texture,O=n.get(A),Y=n.get(b);A.addEventListener("dispose",T);let j=A.textures,K=A.isWebGLCubeRenderTarget===!0,wt=j.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let gt=0;gt<b.mipmaps.length;gt++)O.__webglFramebuffer[at][gt]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let at=0,gt=j.length;at<gt;at++){let $t=n.get(j[at]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Yt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){let gt=j[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);let $t=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),vt=M(gt.internalFormat,$t,et,gt.colorSpace,A.isXRRenderTarget===!0),Lt=Ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),St(i.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Q(O.__webglFramebuffer[at][gt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,gt);else Q(O.__webglFramebuffer[at],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let at=0,gt=j.length;at<gt;at++){let $t=j[at],et=n.get($t);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),St(i.TEXTURE_2D,$t),Q(O.__webglFramebuffer,A,$t,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p($t)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),St(at,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Q(O.__webglFramebuffer[gt],A,b,i.COLOR_ATTACHMENT0,at,gt);else Q(O.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,at,0);p(b)&&m(at),e.unbindTexture()}A.depthBuffer&&Ft(A)}function oe(A){let b=A.textures;for(let O=0,Y=b.length;O<Y;O++){let j=b[O];if(p(j)){let K=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(j).__webglTexture;e.bindTexture(K,wt),m(K),e.unbindTexture()}}}let Wt=[],I=[];function tn(A){if(A.samples>0){if(Yt(A)===!1){let b=A.textures,O=A.width,Y=A.height,j=i.COLOR_BUFFER_BIT,K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(A),at=b.length>1;if(at)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let $t=n.get(b[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,i.NEAREST),l===!0&&(Wt.length=0,I.length=0,Wt.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Wt.push(K),I.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let $t=n.get(b[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ht(A){return Math.min(s.maxSamples,A.samples)}function Yt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function ue(A,b){let O=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Mi&&O!==di&&(ee.getTransfer(O)===fe?(Y!==wn||j!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function Nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=w,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=tt,this.rebindTextures=Ct,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Yt}function vv(i,t){function e(n,s=di){let r,a=ee.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return i.BYTE;if(n===Mu)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Ic)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===yr)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===wu)return i.RGB;if(n===wn)return i.RGBA;if(n===Eu)return i.LUMINANCE;if(n===Tu)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Au)return i.RED;if(n===Dc)return i.RED_INTEGER;if(n===Ru)return i.RG;if(n===Nc)return i.RG_INTEGER;if(n===Fc)return i.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===vl||n===yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===_l||n===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===_l)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Ul||n===Dl||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===Fl||n===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cu||n===kl||n===Bl||n===zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nc=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Dt=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},yv={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:xv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=new ic,p=e.getContextAttributes(),m=null,M=null,_=[],x=[],R=new rt,T=null,E=new Be;E.layers.enable(1),E.viewport=new le;let P=new Be;P.layers.enable(2),P.viewport=new le;let k=[E,P],y=new nc;y.layers.enable(1),y.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=_[q];return Q===void 0&&(Q=new lr,_[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=_[q];return Q===void 0&&(Q=new lr,_[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=_[q];return Q===void 0&&(Q=new lr,_[q]=Q),Q.getHandSpace()};function F(q){let Q=x.indexOf(q.inputSource);if(Q===-1)return;let _t=_[Q];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let q=0;q<_.length;q++){let Q=x[q];Q!==null&&(x[q]=null,_[q].disconnect(Q))}w=null,N=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Jn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,_t=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Es:vs,_t=p.stencil?ws:Vi);let Ft={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Jn(d.textureWidth,d.textureHeight,{format:wn,type:Zn,depthTexture:new Ra(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(q){for(let Q=0;Q<q.removed.length;Q++){let _t=q.removed[Q],mt=x.indexOf(_t);mt>=0&&(x[mt]=null,_[mt].disconnect(_t))}for(let Q=0;Q<q.added.length;Q++){let _t=q.added[Q],mt=x.indexOf(_t);if(mt===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=x.length){x.push(_t),mt=Ct;break}else if(x[Ct]===null){x[Ct]=_t,mt=Ct;break}if(mt===-1)break}let Ft=_[mt];Ft&&Ft.connect(_t)}}let V=new C,tt=new C;function X(q,Q,_t){V.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(_t.matrixWorld);let mt=V.distanceTo(tt),Ft=Q.projectionMatrix.elements,Ct=_t.projectionMatrix.elements,Gt=Ft[14]/(Ft[10]-1),oe=Ft[14]/(Ft[10]+1),Wt=(Ft[9]+1)/Ft[5],I=(Ft[9]-1)/Ft[5],tn=(Ft[8]-1)/Ft[0],Ht=(Ct[8]+1)/Ct[0],Yt=Gt*tn,It=Gt*Ht,ue=mt/(-tn+Ht),Nt=ue*-tn;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Nt),q.translateZ(ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ft[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let A=Gt+ue,b=oe+ue,O=Yt-Nt,Y=It+(mt-Nt),j=Wt*oe/b*A,K=I*oe/b*A;q.projectionMatrix.makePerspective(O,Y,j,K,A,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ft(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,_t=q.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),y.near=P.near=E.near=Q,y.far=P.far=E.far=_t,(w!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,N=y.far);let mt=q.parent,Ft=y.cameras;ft(y,mt);for(let Ct=0;Ct<Ft.length;Ct++)ft(Ft[Ct],mt);Ft.length===2?X(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),pt(q,y,mt)};function pt(q,Q,_t){_t===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ts*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let St=null;function Jt(q,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let mt=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,mt=!0);for(let Ct=0;Ct<_t.length;Ct++){let Gt=_t[Ct],oe=null;if(f!==null)oe=f.getViewport(Gt);else{let I=u.getViewSubImage(d,Gt);oe=I.viewport,Ct===0&&(t.setRenderTargetTextures(M,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(M))}let Wt=k[Ct];Wt===void 0&&(Wt=new Be,Wt.layers.enable(Ct),Wt.viewport=new le,k[Ct]=Wt),Wt.matrix.fromArray(Gt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Gt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(oe.x,oe.y,oe.width,oe.height),Ct===0&&(y.matrix.copy(Wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),mt===!0&&y.cameras.push(Wt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let Ct=u.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&v.init(t,Ct,s.renderState)}}for(let _t=0;_t<_.length;_t++){let mt=x[_t],Ft=_[_t];mt!==null&&Ft!==void 0&&Ft.update(mt,Q,c||a)}St&&St(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ie=new Fu;ie.setAnimationLoop(Jt),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}},Fi=new In,Mv=new pe;function bv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===He&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===He&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),_=M.envMap,x=M.envMapRotation;_&&(p.envMap.value=_,Fi.copy(x),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.envMapRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(Fi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let x=_.program;n.uniformBlockBinding(M,x)}function c(M,_){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",p));let R=_.program;n.updateUBOMapping(M,R);let T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let _=u();M.__bindingPointIndex=_;let x=i.createBuffer(),R=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],x=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,E=x.length;T<E;T++){let P=Array.isArray(x[T])?x[T]:[x[T]];for(let k=0,y=P.length;k<y;k++){let w=P[k];if(f(w,T,k,R)===!0){let N=w.__offset,F=Array.isArray(w.value)?w.value:[w.value],G=0;for(let $=0;$<F.length;$++){let V=F[$],tt=v(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+G,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,G),G+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,_,x,R){let T=M.value,E=_+"_"+x;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{let P=R[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){let _=M.uniforms,x=0,R=16;for(let E=0,P=_.length;E<P;E++){let k=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,w=k.length;y<w;y++){let N=k[y],F=Array.isArray(N.value)?N.value:[N.value];for(let G=0,$=F.length;G<$;G++){let V=F[G],tt=v(V),X=x%R,ft=X%tt.boundary,pt=X+ft;x+=ft,pt!==0&&R-pt<tt.storage&&(x+=R-pt),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=tt.storage}}}let T=x%R;return T>0&&(x+=R-T),M.__size=x,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){let _=M.target;_.removeEventListener("dispose",p);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Ca=class{constructor(t={}){let{canvas:e=Tf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=gi,this.toneMappingExposure=1;let _=this,x=!1,R=0,T=0,E=null,P=-1,k=null,y=new le,w=new le,N=null,F=new Mt(0),G=0,$=e.width,V=e.height,tt=1,X=null,ft=null,pt=new le(0,0,$,V),St=new le(0,0,$,V),Jt=!1,ie=new dr,q=!1,Q=!1,_t=new pe,mt=new pe,Ft=new C,Ct=new le,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function Wt(){return E===null?tt:1}let I=n;function tn(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){let U="webgl2";if(I=tn(U,S),I===null)throw tn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ht,Yt,It,ue,Nt,A,b,O,Y,j,K,wt,at,gt,$t,et,vt,Lt,Ut,yt,Vt,Ot,he,L;function ut(){Ht=new B0(I),Ht.init(),Ot=new vv(I,Ht),Yt=new U0(I,Ht,t,Ot),It=new pv(I),Yt.reverseDepthBuffer&&It.buffers.depth.setReversed(!0),ue=new V0(I),Nt=new ev,A=new gv(I,Ht,It,Nt,Yt,Ot,ue),b=new N0(_),O=new k0(_),Y=new $f(I),he=new I0(I,Y),j=new z0(I,Y,ue,he),K=new W0(I,j,Y,ue),Ut=new G0(I,Yt,A),et=new D0(Nt),wt=new tv(_,b,O,Ht,Yt,he,et),at=new bv(_,Nt),gt=new iv,$t=new cv(Ht),Lt=new P0(_,b,O,It,K,d,l),vt=new dv(_,K,Yt),L=new Sv(I,ue,Yt,It),yt=new L0(I,Ht,ue),Vt=new H0(I,Ht,ue),ue.programs=wt.programs,_.capabilities=Yt,_.extensions=Ht,_.properties=Nt,_.renderLists=gt,_.shadowMap=vt,_.state=It,_.info=ue}ut();let W=new sc(_,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Ht.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ht.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize($,V,!1))},this.getSize=function(S){return S.set($,V)},this.setSize=function(S,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,V=U,e.width=Math.floor(S*tt),e.height=Math.floor(U*tt),B===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set($*tt,V*tt).floor()},this.setDrawingBufferSize=function(S,U,B){$=S,V=U,tt=B,e.width=Math.floor(S*B),e.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(pt)},this.setViewport=function(S,U,B,H){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,B,H),It.viewport(y.copy(pt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(St)},this.setScissor=function(S,U,B,H){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,U,B,H),It.scissor(w.copy(St).multiplyScalar(tt).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(S){It.setScissorTest(Jt=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){ft=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,U=!0,B=!0){let H=0;if(S){let D=!1;if(E!==null){let nt=E.texture.format;D=nt===Fc||nt===Nc||nt===Dc}if(D){let nt=E.texture.type,ct=nt===Zn||nt===Vi||nt===ur||nt===ws||nt===Lc||nt===Uc,xt=Lt.getClearColor(),bt=Lt.getClearAlpha(),Rt=xt.r,Pt=xt.g,Et=xt.b;ct?(f[0]=Rt,f[1]=Pt,f[2]=Et,f[3]=bt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Rt,g[1]=Pt,g[2]=Et,g[3]=bt,I.clearBufferiv(I.COLOR,0,g))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),$t.dispose(),Nt.dispose(),b.dispose(),O.dispose(),K.dispose(),he.dispose(),L.dispose(),wt.dispose(),W.dispose(),W.removeEventListener("sessionstart",ah),W.removeEventListener("sessionend",oh),Pi.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let S=ue.autoReset,U=vt.enabled,B=vt.autoUpdate,H=vt.needsUpdate,D=vt.type;ut(),ue.autoReset=S,vt.enabled=U,vt.autoUpdate=B,vt.needsUpdate=H,vt.type=D}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xt(S){let U=S.target;U.removeEventListener("dispose",Xt),Re(U)}function Re(S){Je(S),Nt.remove(S)}function Je(S){let U=Nt.get(S).programs;U!==void 0&&(U.forEach(function(B){wt.releaseProgram(B)}),S.isShaderMaterial&&wt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,H,D,nt){U===null&&(U=Gt);let ct=D.isMesh&&D.matrixWorld.determinant()<0,xt=_d(S,U,B,H,D);It.setMaterial(H,ct);let bt=B.index,Rt=1;if(H.wireframe===!0){if(bt=j.getWireframeAttribute(B),bt===void 0)return;Rt=2}let Pt=B.drawRange,Et=B.attributes.position,se=Pt.start*Rt,de=(Pt.start+Pt.count)*Rt;nt!==null&&(se=Math.max(se,nt.start*Rt),de=Math.min(de,(nt.start+nt.count)*Rt)),bt!==null?(se=Math.max(se,0),de=Math.min(de,bt.count)):Et!=null&&(se=Math.max(se,0),de=Math.min(de,Et.count));let Me=de-se;if(Me<0||Me===1/0)return;he.setup(D,H,xt,B,bt);let en,Qt=yt;if(bt!==null&&(en=Y.get(bt),Qt=Vt,Qt.setIndex(en)),D.isMesh)H.wireframe===!0?(It.setLineWidth(H.wireframeLinewidth*Wt()),Qt.setMode(I.LINES)):Qt.setMode(I.TRIANGLES);else if(D.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),It.setLineWidth(Tt*Wt()),D.isLineSegments?Qt.setMode(I.LINES):D.isLineLoop?Qt.setMode(I.LINE_LOOP):Qt.setMode(I.LINE_STRIP)}else D.isPoints?Qt.setMode(I.POINTS):D.isSprite&&Qt.setMode(I.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Qt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Qt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Tt=D._multiDrawStarts,ke=D._multiDrawCounts,te=D._multiDrawCount,yn=bt?Y.get(bt).bytesPerElement:1,Ji=Nt.get(H).currentProgram.getUniforms();for(let nn=0;nn<te;nn++)Ji.setValue(I,"_gl_DrawID",nn),Qt.render(Tt[nn]/yn,ke[nn])}else if(D.isInstancedMesh)Qt.renderInstances(se,Me,D.count);else if(B.isInstancedBufferGeometry){let Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ke=Math.min(B.instanceCount,Tt);Qt.renderInstances(se,Me,ke)}else Qt.render(se,Me)};function jt(S,U,B){S.transparent===!0&&S.side===ze&&S.forceSinglePass===!1?(S.side=He,S.needsUpdate=!0,Ir(S,U,B),S.side=vi,S.needsUpdate=!0,Ir(S,U,B),S.side=ze):Ir(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),p=$t.get(B),p.init(U),M.push(p),B.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),S!==B&&S.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();let H=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let nt=D.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){let xt=nt[ct];jt(xt,B,D),H.add(xt)}else jt(nt,B,D),H.add(nt)}),M.pop(),p=null,H},this.compileAsync=function(S,U,B=null){let H=this.compile(S,U,B);return new Promise(D=>{function nt(){if(H.forEach(function(ct){Nt.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){D(S);return}setTimeout(nt,10)}Ht.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let je=null;function kn(S){je&&je(S)}function ah(){Pi.stop()}function oh(){Pi.start()}let Pi=new Fu;Pi.setAnimationLoop(kn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(S){je=S,W.setAnimationLoop(S),S===null?Pi.stop():Pi.start()},W.addEventListener("sessionstart",ah),W.addEventListener("sessionend",oh),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,E),p=$t.get(S,M.length),p.init(U),M.push(p),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ie.setFromProjectionMatrix(mt),Q=this.localClippingEnabled,q=et.init(this.clippingPlanes,Q),v=gt.get(S,m.length),v.init(),m.push(v),W.enabled===!0&&W.isPresenting===!0){let nt=_.xr.getDepthSensingMesh();nt!==null&&yo(nt,U,-1/0,_.sortObjects)}yo(S,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(X,ft),oe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,oe&&Lt.addToRenderList(v,S),this.info.render.frame++,q===!0&&et.beginShadows();let B=p.state.shadowsArray;vt.render(B,S,U),q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=v.opaque,D=v.transmissive;if(p.setupLights(),U.isArrayCamera){let nt=U.cameras;if(D.length>0)for(let ct=0,xt=nt.length;ct<xt;ct++){let bt=nt[ct];ch(H,D,S,bt)}oe&&Lt.render(S);for(let ct=0,xt=nt.length;ct<xt;ct++){let bt=nt[ct];lh(v,S,bt,bt.viewport)}}else D.length>0&&ch(H,D,S,U),oe&&Lt.render(S),lh(v,S,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(_,S,U),he.resetDefaultState(),P=-1,k=null,M.pop(),M.length>0?(p=M[M.length-1],q===!0&&et.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function yo(S,U,B,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ie.intersectsSprite(S)){H&&Ct.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);let ct=K.update(S),xt=S.material;xt.visible&&v.push(S,ct,xt,B,Ct.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ie.intersectsObject(S))){let ct=K.update(S),xt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ct.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ct.copy(ct.boundingSphere.center)),Ct.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(xt)){let bt=ct.groups;for(let Rt=0,Pt=bt.length;Rt<Pt;Rt++){let Et=bt[Rt],se=xt[Et.materialIndex];se&&se.visible&&v.push(S,ct,se,B,Ct.z,Et)}}else xt.visible&&v.push(S,ct,xt,B,Ct.z,null)}}let nt=S.children;for(let ct=0,xt=nt.length;ct<xt;ct++)yo(nt[ct],U,B,H)}function lh(S,U,B,H){let D=S.opaque,nt=S.transmissive,ct=S.transparent;p.setupLightsView(B),q===!0&&et.setGlobalState(_.clippingPlanes,B),H&&It.viewport(y.copy(H)),D.length>0&&Pr(D,U,B),nt.length>0&&Pr(nt,U,B),ct.length>0&&Pr(ct,U,B),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ch(S,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Jn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?yr:Zn,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let nt=p.state.transmissionRenderTarget[H.id],ct=H.viewport||y;nt.setSize(ct.z,ct.w);let xt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(F),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),oe&&Lt.render(B);let bt=_.toneMapping;_.toneMapping=gi;let Rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),q===!0&&et.setGlobalState(_.clippingPlanes,H),Pr(S,B,H),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Et=0,se=U.length;Et<se;Et++){let de=U[Et],Me=de.object,en=de.geometry,Qt=de.material,Tt=de.group;if(Qt.side===ze&&Me.layers.test(H.layers)){let ke=Qt.side;Qt.side=He,Qt.needsUpdate=!0,hh(Me,B,H,en,Qt,Tt),Qt.side=ke,Qt.needsUpdate=!0,Pt=!0}}Pt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}_.setRenderTarget(xt),_.setClearColor(F,G),Rt!==void 0&&(H.viewport=Rt),_.toneMapping=bt}function Pr(S,U,B){let H=U.isScene===!0?U.overrideMaterial:null;for(let D=0,nt=S.length;D<nt;D++){let ct=S[D],xt=ct.object,bt=ct.geometry,Rt=H===null?ct.material:H,Pt=ct.group;xt.layers.test(B.layers)&&hh(xt,U,B,bt,Rt,Pt)}}function hh(S,U,B,H,D,nt){S.onBeforeRender(_,U,B,H,D,nt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(_,U,B,H,S,nt),D.transparent===!0&&D.side===ze&&D.forceSinglePass===!1?(D.side=He,D.needsUpdate=!0,_.renderBufferDirect(B,U,H,D,S,nt),D.side=vi,D.needsUpdate=!0,_.renderBufferDirect(B,U,H,D,S,nt),D.side=ze):_.renderBufferDirect(B,U,H,D,S,nt),S.onAfterRender(_,U,B,H,D,nt)}function Ir(S,U,B){U.isScene!==!0&&(U=Gt);let H=Nt.get(S),D=p.state.lights,nt=p.state.shadowsArray,ct=D.state.version,xt=wt.getParameters(S,D.state,nt,U,B),bt=wt.getProgramCacheKey(xt),Rt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?O:b).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",Xt),Rt=new Map,H.programs=Rt);let Pt=Rt.get(bt);if(Pt!==void 0){if(H.currentProgram===Pt&&H.lightsStateVersion===ct)return dh(S,xt),Pt}else xt.uniforms=wt.getUniforms(S),S.onBeforeCompile(xt,_),Pt=wt.acquireProgram(xt,bt),Rt.set(bt,Pt),H.uniforms=xt.uniforms;let Et=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=et.uniform),dh(S,xt),H.needsLights=bd(S),H.lightsStateVersion=ct,H.needsLights&&(Et.ambientLightColor.value=D.state.ambient,Et.lightProbe.value=D.state.probe,Et.directionalLights.value=D.state.directional,Et.directionalLightShadows.value=D.state.directionalShadow,Et.spotLights.value=D.state.spot,Et.spotLightShadows.value=D.state.spotShadow,Et.rectAreaLights.value=D.state.rectArea,Et.ltc_1.value=D.state.rectAreaLTC1,Et.ltc_2.value=D.state.rectAreaLTC2,Et.pointLights.value=D.state.point,Et.pointLightShadows.value=D.state.pointShadow,Et.hemisphereLights.value=D.state.hemi,Et.directionalShadowMap.value=D.state.directionalShadowMap,Et.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Et.spotShadowMap.value=D.state.spotShadowMap,Et.spotLightMatrix.value=D.state.spotLightMatrix,Et.spotLightMap.value=D.state.spotLightMap,Et.pointShadowMap.value=D.state.pointShadowMap,Et.pointShadowMatrix.value=D.state.pointShadowMatrix),H.currentProgram=Pt,H.uniformsList=null,Pt}function uh(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=xs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function dh(S,U){let B=Nt.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function _d(S,U,B,H,D){U.isScene!==!0&&(U=Gt),A.resetTextureUnits();let nt=U.fog,ct=H.isMeshStandardMaterial?U.environment:null,xt=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Mi,bt=(H.isMeshStandardMaterial?O:b).get(H.envMap||ct),Rt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!B.morphAttributes.position,se=!!B.morphAttributes.normal,de=!!B.morphAttributes.color,Me=gi;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Me=_.toneMapping);let en=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qt=en!==void 0?en.length:0,Tt=Nt.get(H),ke=p.state.lights;if(q===!0&&(Q===!0||S!==k)){let cn=S===k&&H.id===P;et.setState(H,S,cn)}let te=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ke.state.version||Tt.outputColorSpace!==xt||D.isBatchedMesh&&Tt.batching===!1||!D.isBatchedMesh&&Tt.batching===!0||D.isBatchedMesh&&Tt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Tt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Tt.instancing===!1||!D.isInstancedMesh&&Tt.instancing===!0||D.isSkinnedMesh&&Tt.skinning===!1||!D.isSkinnedMesh&&Tt.skinning===!0||D.isInstancedMesh&&Tt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Tt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Tt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Tt.instancingMorph===!1&&D.morphTexture!==null||Tt.envMap!==bt||H.fog===!0&&Tt.fog!==nt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==Rt||Tt.vertexTangents!==Pt||Tt.morphTargets!==Et||Tt.morphNormals!==se||Tt.morphColors!==de||Tt.toneMapping!==Me||Tt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Tt.__version=H.version);let yn=Tt.currentProgram;te===!0&&(yn=Ir(H,U,D));let Ji=!1,nn=!1,xo=!1,be=yn.getUniforms(),ri=Tt.uniforms;if(It.useProgram(yn.program)&&(Ji=!0,nn=!0,xo=!0),H.id!==P&&(P=H.id,nn=!0),Ji||k!==S){Yt.reverseDepthBuffer?(_t.copy(S.projectionMatrix),Rf(_t),Cf(_t),be.setValue(I,"projectionMatrix",_t)):be.setValue(I,"projectionMatrix",S.projectionMatrix),be.setValue(I,"viewMatrix",S.matrixWorldInverse);let cn=be.map.cameraPosition;cn!==void 0&&cn.setValue(I,Ft.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&be.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&be.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,nn=!0,xo=!0)}if(D.isSkinnedMesh){be.setOptional(I,D,"bindMatrix"),be.setOptional(I,D,"bindMatrixInverse");let cn=D.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),be.setValue(I,"boneTexture",cn.boneTexture,A))}D.isBatchedMesh&&(be.setOptional(I,D,"batchingTexture"),be.setValue(I,"batchingTexture",D._matricesTexture,A),be.setOptional(I,D,"batchingIdTexture"),be.setValue(I,"batchingIdTexture",D._indirectTexture,A),be.setOptional(I,D,"batchingColorTexture"),D._colorsTexture!==null&&be.setValue(I,"batchingColorTexture",D._colorsTexture,A));let _o=B.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0)&&Ut.update(D,B,yn),(nn||Tt.receiveShadow!==D.receiveShadow)&&(Tt.receiveShadow=D.receiveShadow,be.setValue(I,"receiveShadow",D.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ri.envMap.value=bt,ri.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(ri.envMapIntensity.value=U.environmentIntensity),nn&&(be.setValue(I,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&Md(ri,xo),nt&&H.fog===!0&&at.refreshFogUniforms(ri,nt),at.refreshMaterialUniforms(ri,H,tt,V,p.state.transmissionRenderTarget[S.id]),xs.upload(I,uh(Tt),ri,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xs.upload(I,uh(Tt),ri,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&be.setValue(I,"center",D.center),be.setValue(I,"modelViewMatrix",D.modelViewMatrix),be.setValue(I,"normalMatrix",D.normalMatrix),be.setValue(I,"modelMatrix",D.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let cn=H.uniformsGroups;for(let Mo=0,Sd=cn.length;Mo<Sd;Mo++){let fh=cn[Mo];L.update(fh,yn),L.bind(fh,yn)}}return yn}function Md(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function bd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,U,B){Nt.get(S.texture).__webglTexture=U,Nt.get(S.depthTexture).__webglTexture=B;let H=Nt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let B=Nt.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,B=0){E=S,R=U,T=B;let H=!0,D=null,nt=!1,ct=!1;if(S){let bt=Nt.get(S);if(bt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(bt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(bt.__hasExternalTextures)A.rebindTextures(S,Nt.get(S.texture).__webglTexture,Nt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Et=S.depthTexture;if(bt.__boundDepthTexture!==Et){if(Et!==null&&Nt.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);let Pt=Nt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?D=Pt[U][B]:D=Pt[U],nt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?D=Nt.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?D=Pt[B]:D=Pt,y.copy(S.viewport),w.copy(S.scissor),N=S.scissorTest}else y.copy(pt).multiplyScalar(tt).floor(),w.copy(St).multiplyScalar(tt).floor(),N=Jt;if(It.bindFramebuffer(I.FRAMEBUFFER,D)&&H&&It.drawBuffers(S,D),It.viewport(y),It.scissor(w),It.setScissorTest(N),nt){let bt=Nt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,B)}else if(ct){let bt=Nt.get(S.texture),Rt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,B||0,Rt)}P=-1},this.readRenderTargetPixels=function(S,U,B,H,D,nt,ct){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(xt=xt[ct]),xt){It.bindFramebuffer(I.FRAMEBUFFER,xt);try{let bt=S.texture,Rt=bt.format,Pt=bt.type;if(!Yt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&B>=0&&B<=S.height-D&&I.readPixels(U,B,H,D,Ot.convert(Rt),Ot.convert(Pt),nt)}finally{let bt=E!==null?Nt.get(E).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,U,B,H,D,nt,ct){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(xt=xt[ct]),xt){let bt=S.texture,Rt=bt.format,Pt=bt.type;if(!Yt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-H&&B>=0&&B<=S.height-D){It.bindFramebuffer(I.FRAMEBUFFER,xt);let Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),I.readPixels(U,B,H,D,Ot.convert(Rt),Ot.convert(Pt),0);let se=E!==null?Nt.get(E).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,se);let de=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Af(I,de,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(Et),I.deleteSync(de),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,B=0){S.isTexture!==!0&&(ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let H=Math.pow(2,-B),D=Math.floor(S.image.width*H),nt=Math.floor(S.image.height*H),ct=U!==null?U.x:0,xt=U!==null?U.y:0;A.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ct,xt,D,nt),It.unbindTexture()},this.copyTextureToTexture=function(S,U,B=null,H=null,D=0){S.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],U=arguments[2],D=arguments[3]||0,B=null);let nt,ct,xt,bt,Rt,Pt;B!==null?(nt=B.max.x-B.min.x,ct=B.max.y-B.min.y,xt=B.min.x,bt=B.min.y):(nt=S.image.width,ct=S.image.height,xt=0,bt=0),H!==null?(Rt=H.x,Pt=H.y):(Rt=0,Pt=0);let Et=Ot.convert(U.format),se=Ot.convert(U.type);A.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let de=I.getParameter(I.UNPACK_ROW_LENGTH),Me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),en=I.getParameter(I.UNPACK_SKIP_PIXELS),Qt=I.getParameter(I.UNPACK_SKIP_ROWS),Tt=I.getParameter(I.UNPACK_SKIP_IMAGES),ke=S.isCompressedTexture?S.mipmaps[D]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ke.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ke.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,bt),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,Rt,Pt,nt,ct,Et,se,ke.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,Rt,Pt,ke.width,ke.height,Et,ke.data):I.texSubImage2D(I.TEXTURE_2D,D,Rt,Pt,nt,ct,Et,se,ke),I.pixelStorei(I.UNPACK_ROW_LENGTH,de),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,en),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Tt),D===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(S,U,B=null,H=null,D=0){S.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,S=arguments[2],U=arguments[3],D=arguments[4]||0);let nt,ct,xt,bt,Rt,Pt,Et,se,de,Me=S.isCompressedTexture?S.mipmaps[D]:S.image;B!==null?(nt=B.max.x-B.min.x,ct=B.max.y-B.min.y,xt=B.max.z-B.min.z,bt=B.min.x,Rt=B.min.y,Pt=B.min.z):(nt=Me.width,ct=Me.height,xt=Me.depth,bt=0,Rt=0,Pt=0),H!==null?(Et=H.x,se=H.y,de=H.z):(Et=0,se=0,de=0);let en=Ot.convert(U.format),Qt=Ot.convert(U.type),Tt;if(U.isData3DTexture)A.setTexture3D(U,0),Tt=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Tt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let ke=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),yn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ji=I.getParameter(I.UNPACK_SKIP_ROWS),nn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pt),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Tt,D,Et,se,de,nt,ct,xt,en,Qt,Me.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,D,Et,se,de,nt,ct,xt,en,Me.data):I.texSubImage3D(Tt,D,Et,se,de,nt,ct,xt,en,Qt,Me),I.pixelStorei(I.UNPACK_ROW_LENGTH,ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ji),I.pixelStorei(I.UNPACK_SKIP_IMAGES,nn),D===0&&U.generateMipmaps&&I.generateMipmap(Tt),It.unbindTexture()},this.initRenderTarget=function(S){Nt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),It.unbindTexture()},this.resetState=function(){R=0,T=0,E=null,It.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Oc?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Ga?"display-p3":"srgb"}};var Ln=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pa=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},rc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new C,Ia=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ds,er=new C,fs=new C,ps=new C,ms=new rt,nr=new rt,Hu=new pe,Qr=new C,ir=new C,ta=new C,cu=new rt,Jo=new rt,hu=new rt,La=class extends Ie{constructor(t=new fr){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rc(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Ia(n,3,0,!1)),ds.setAttribute("uv",new Ia(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ea(Qr.set(-.5,-.5,0),ps,a,fs,s,r),ea(ir.set(.5,-.5,0),ps,a,fs,s,r),ea(ta.set(.5,.5,0),ps,a,fs,s,r),cu.set(0,0),Jo.set(1,0),hu.set(1,1);let o=t.ray.intersectTriangle(Qr,ir,ta,!1,er);if(o===null&&(ea(ir.set(-.5,.5,0),ps,a,fs,s,r),Jo.set(0,1),o=t.ray.intersectTriangle(Qr,ta,ir,!1,er),o===null))return;let l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:fi.getInterpolation(er,Qr,ir,ta,cu,Jo,hu,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ea(i,t,e,n,s,r){ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(nr.x=r*ms.x-s*ms.y,nr.y=s*ms.x+r*ms.y):nr.copy(ms),i.copy(t),i.x+=nr.x,i.y+=nr.y,i.applyMatrix4(Hu)}var pr=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uu=new pe,ac=new _a,na=new As,ia=new C,Ua=class extends Ie{constructor(t=new Ee,e=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;uu.copy(s).invert(),ac.copy(t.ray).applyMatrix4(uu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let p=c.getX(g);ia.fromBufferAttribute(u,p),du(ia,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)ia.fromBufferAttribute(u,g),du(ia,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function du(i,t,e,n,s,r,a){let o=ac.distanceSqToPoint(i);if(o<e){let l=new C;ac.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Cs=class extends an{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,l=new pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Fe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},mr=class extends fn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oc=class extends mr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var sa=new C,jo=new zc,Qo=new zc,tl=new zc,lc=class extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(sa.subVectors(s[0],s[1]).add(s[0]),c=sa);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),jo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),Qo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),tl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(jo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Qo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),tl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(jo.calc(l),Qo.calc(l),tl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function wv(i,t){let e=1-i;return e*e*t}function Ev(i,t){return 2*(1-i)*i*t}function Tv(i,t){return i*i*t}function cr(i,t,e,n){return wv(i,t)+Ev(i,e)+Tv(i,n)}function Av(i,t){let e=1-i;return e*e*e*t}function Rv(i,t){let e=1-i;return 3*e*e*i*t}function Cv(i,t){return 3*(1-i)*i*i*t}function Pv(i,t){return i*i*i*t}function hr(i,t,e,n,s){return Av(i,t)+Rv(i,e)+Cv(i,n)+Pv(i,s)}var Da=class extends fn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cc=class extends fn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y),hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends fn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends fn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends fn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ps=class extends fn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y),cr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(fu(o,l.x,c.x,h.x,u.x),fu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},uc=Object.freeze({__proto__:null,ArcCurve:oc,CatmullRomCurve3:lc,CubicBezierCurve:Da,CubicBezierCurve3:cc,EllipseCurve:mr,LineCurve:Na,LineCurve3:hc,QuadraticBezierCurve:Fa,QuadraticBezierCurve3:Ps,SplineCurve:Oa}),dc=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new uc[s.type]().fromJSON(s))}return this}},fc=class extends dc{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Na(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Fa(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Da(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Oa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new mr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gr=class i extends Ee{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new rt,f=new C,g=new C,v=new C,p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=e;M++){let _=n+M*h*s,x=Math.sin(_),R=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);let E=l[3*T+0]*x,P=l[3*T+1],k=l[3*T+0]*R;c.push(E,P,k)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){let x=_+M*t.length,R=x,T=x+t.length,E=x+t.length+1,P=x+1;r.push(R,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("uv",new qt(o,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Oe=class i extends gr{constructor(t=1,e=1,n=4,s=8){let r=new fc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Un=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],p=n/2,m=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function M(){let x=new C,R=new C,T=0,E=(e-t)/n;for(let P=0;P<=r;P++){let k=[],y=P/r,w=y*(e-t)+t;for(let N=0;N<=s;N++){let F=N/s,G=F*l+o,$=Math.sin(G),V=Math.cos(G);R.x=w*$,R.y=-y*n+p,R.z=w*V,u.push(R.x,R.y,R.z),x.set($,E,V).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-y),k.push(g++)}v.push(k)}for(let P=0;P<s;P++)for(let k=0;k<r;k++){let y=v[k][P],w=v[k+1][P],N=v[k+1][P+1],F=v[k][P+1];t>0&&(h.push(y,w,F),T+=3),e>0&&(h.push(w,N,F),T+=3)}c.addGroup(m,T,0),m+=T}function _(x){let R=g,T=new rt,E=new C,P=0,k=x===!0?t:e,y=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;let w=g;for(let N=0;N<=s;N++){let G=N/s*l+o,$=Math.cos(G),V=Math.sin(G);E.x=k*V,E.y=p*y,E.z=k*$,u.push(E.x,E.y,E.z),d.push(0,y,0),T.x=$*.5+.5,T.y=V*.5*y+.5,f.push(T.x,T.y),g++}for(let N=0;N<s;N++){let F=R+N,G=w+N;x===!0?h.push(G,G+1,F):h.push(G+1,G,F),P+=3}c.addGroup(m,P,x===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wi=class i extends ne{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pc=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new C,x=new C,R=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],x),f(e[T+2],R),l(_,x,R,M)}function l(M,_,x,R){let T=R+1,E=[];for(let P=0;P<=T;P++){E[P]=[];let k=M.clone().lerp(x,P/T),y=_.clone().lerp(x,P/T),w=T-P;for(let N=0;N<=w;N++)N===0&&P===T?E[P][N]=k:E[P][N]=k.clone().lerp(y,N/w)}for(let P=0;P<T;P++)for(let k=0;k<2*(T-P)-1;k++){let y=Math.floor(k/2);k%2===0?(d(E[P][y+1]),d(E[P+1][y]),d(E[P][y])):(d(E[P][y+1]),d(E[P+1][y+1]),d(E[P+1][y]))}}function c(M){let _=new C;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(M),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let M=new C;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let x=p(M)/2/Math.PI+.5,R=m(M)/Math.PI+.5;a.push(x,1-R)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){let _=a[M+0],x=a[M+2],R=a[M+4],T=Math.max(_,x,R),E=Math.min(_,x,R);T>.9&&E<.1&&(_<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,_){let x=M*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){let M=new C,_=new C,x=new C,R=new C,T=new rt,E=new rt,P=new rt;for(let k=0,y=0;k<r.length;k+=9,y+=6){M.set(r[k+0],r[k+1],r[k+2]),_.set(r[k+3],r[k+4],r[k+5]),x.set(r[k+6],r[k+7],r[k+8]),T.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),R.copy(M).add(_).add(x).divideScalar(3);let w=p(R);v(T,y+0,M,w),v(E,y+2,_,w),v(P,y+4,x,w)}}function v(M,_,x,R){R<0&&M.x===1&&(a[_]=M.x-1),x.x===0&&x.z===0&&(a[_]=R/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xi=class i extends pc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ka=class i extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new rt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let M=m+p,_=M,x=M+n+1,R=M+n+2,T=M+1;o.push(_,x,T),o.push(x,R,T)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ve=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let M=[],_=m/n,x=0;m===0&&a===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(T+x,1-_),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let _=h[m][M+1],x=h[m][M],R=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&f.push(_,x,T),(m!==n-1||l<Math.PI)&&f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var En=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,M=(s+1)*f+g;a.push(v,p,M),a.push(p,m,M)}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ba=class i extends Ee{constructor(t=new Ps(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new rt,h=new C,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function v(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),M(),m()}function p(_){h=t.getPointAt(_/e,h);let x=a.normals[_],R=a.binormals[_];for(let T=0;T<=s;T++){let E=T/s*Math.PI*2,P=Math.sin(E),k=-Math.cos(E);l.x=k*x.x+P*R.x,l.y=k*x.y+P*R.y,l.z=k*x.z+P*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=e;_++)for(let x=1;x<=s;x++){let R=(s+1)*(_-1)+(x-1),T=(s+1)*_+(x-1),E=(s+1)*_+x,P=(s+1)*(_-1)+x;g.push(R,T,P),g.push(T,E,P)}}function M(){for(let _=0;_<=e;_++)for(let x=0;x<=s;x++)c.x=_/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new uc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Is=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ra(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Iv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case yh:r=t,o=2*e-n;break;case xh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yh:a=t,l=2*n-e;break;case xh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*v+.5*g,x=f*p-f*v;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+M*a[c+R]+_*a[l+R]+x*a[u+R];return r}},gc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},vc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case da:e=this.InterpolantFactoryMethodDiscrete;break;case Hl:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return Hl;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Iv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Hl;var qi=class extends Tn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=da;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Tn{};yc.prototype.ValueTypeName="color";var xc=class extends Tn{};xc.prototype.ValueTypeName="number";var _c=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)xi.slerpFlat(r,0,a,c-o,a,c,l);return r}},za=class extends Tn{InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}};za.prototype.ValueTypeName="quaternion";za.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=da;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Tn{};Mc.prototype.ValueTypeName="vector";var bc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Lv=new bc,Sc=class{constructor(t){this.manager=t!==void 0?t:Lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Dn=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},el=new pe,pu=new C,mu=new C,vr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),el.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wc=class extends vr{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ts*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ha=class extends Us{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},gu=new pe,sr=new C,nl=new C,Ec=class extends vr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),nl.copy(n.position),nl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nl),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu)}},Ds=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Tc=class extends vr{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_i=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Tc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Hc="\\[\\]\\.:\\/",Uv=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",Dv="[^"+Hc.replace("\\.","")+"]",Nv=/((?:WC+[\/:])*)/.source.replace("WC",Vc),Fv=/(WCOD+)?/.source.replace("WCOD",Dv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),kv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Bv=new RegExp("^"+Nv+Fv+Ov+kv+"$"),zv=["material","materials","bones","map"],Ac=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uv,"")}static parseTrackName(t){let e=Bv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Ac;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);var Vu=[["nose","neck"],["neck","leftShoulder"],["neck","rightShoulder"],["leftShoulder","leftElbow"],["leftElbow","leftWrist"],["rightShoulder","rightElbow"],["rightElbow","rightWrist"],["neck","root"],["root","leftHip"],["root","rightHip"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["rightHip","rightKnee"],["rightKnee","rightAnkle"]],xr=class{constructor(t,e){this.joints=t,this.aspect=e}distance(t,e){return Math.hypot((t.x-e.x)*this.aspect,t.y-e.y)}get hipCenter(){let t=this.joints;return t.root?t.root:t.leftHip&&t.rightHip?{x:(t.leftHip.x+t.rightHip.x)/2,y:(t.leftHip.y+t.rightHip.y)/2}:null}get neckPoint(){let t=this.joints;return t.neck?t.neck:t.leftShoulder&&t.rightShoulder?{x:(t.leftShoulder.x+t.rightShoulder.x)/2,y:(t.leftShoulder.y+t.rightShoulder.y)/2}:null}get torsoLength(){let t=this.neckPoint,e=this.hipCenter;return t&&e?this.distance(t,e):null}},Qe={noPerson:{key:"noPerson",good:!1,message:"Can't see anyone"},tooClose:{key:"tooClose",good:!1,message:"Too close \u2014 step back"},tooFar:{key:"tooFar",good:!1,message:"Too far \u2014 come closer"},goLeft:{key:"goLeft",good:!1,message:"Move a little left"},goRight:{key:"goRight",good:!1,message:"Move a little right"},good:{key:"good",good:!0,message:"Perfect!"}};function Xa(){return{pose:null,status:Qe.noPerson,bodyX:.5,lateral:0,isCalibrated:!1,jumpCount:0,isAirborne:!1,isCrouching:!1,leftHand:null,rightHand:null,handsUpRaised:!1,oneHandRaised:!1,handsUpProgress:0,confirmProgress:0,timestamp:0,keyboardActive:!1}}var _r=class i{constructor(t=1.2,e=.5,n=1){this.minCutoff=t,this.beta=e,this.dCutoff=n,this.reset()}static alpha(t,e){return 1/(1+1/(2*Math.PI*t)/e)}filter(t,e){if(this.value===null||this.last===null||e<=this.last)return this.value=t,this.last=e,t;let n=Math.min(e-this.last,.5);this.last=e;let s=(t-this.value)/n;this.deriv+=i.alpha(this.dCutoff,n)*(s-this.deriv);let r=this.minCutoff+this.beta*Math.abs(this.deriv);return this.value+=i.alpha(r,n)*(t-this.value),this.value}reset(){this.value=null,this.last=null,this.deriv=0}};var Mr=class{constructor(t=.2){this.grace=t,this.since=null,this.lastActive=null,this.armed=!0}update(t,e,n){return t?(this.lastActive=n,this.since===null&&(this.since=n),this.armed&&n-this.since>=e?(this.armed=!1,!0):!1):this.lastActive===null?(this.since=null,this.armed=!0,!1):(n-this.lastActive<=this.grace||(this.since=null,!this.armed&&n-this.lastActive>.25&&(this.armed=!0)),!1)}progress(t,e){return!this.armed||this.since===null||this.lastActive===null||e-this.lastActive>this.grace?0:Math.min(1,(this.lastActive-this.since)/t)}reset(t){this.since=null,this.armed=!t,t&&this.lastActive===null&&(this.lastActive=-100)}},qa=class i{constructor(){this.handsUpHold=1,this.thumbsUpHold=.4,this.raiseHandHold=.7,this.lastPose=null,this.lastPoseTime=-100,this.jointSeen={},this.bridgeTime=.35,this.centerXFilter=new _r(1,.7),this.handFilters=[0,1,2,3].map(()=>new _r(1.6,1.5)),this.handLastSeen=[-100,-100],this.lastHands=[null,null],this.calibratedCenterX=null,this.refTorso=null,this.calibrationRequested=!1,this.needsCalibration=!0,this.goodSince=null,this.absentSince=null,this.lastLateral=0,this.baseCenterY=null,this.baseHipY=null,this.baseNeckY=null,this.baseAnkleY=null,this.lastCenterY=null,this.lastTime=null,this.airborne=!1,this.airborneSince=0,this.landedAt=-100,this.jumpCount=0,this.crouching=!1,this.status=Qe.noPerson,this.candidate=Qe.noPerson,this.candidateFrames=0,this.swipeHistory=[[],[]],this.swipeCooldownUntil=0,this.handsUp=new Mr(.2),this.thumbs=new Mr(.25),this.raiseHand=new Mr(.2)}requestCalibration(){this.calibrationRequested=!0}resetGestures(){this.handsUp.reset(!0),this.thumbs.reset(!0),this.raiseHand.reset(!0)}process(t,e,n){let s=this.bridge(t,n),r=Xa();r.timestamp=n,r.pose=s,r.status=this.debounced(i.evaluateStatus(s));let a=[],o=Math.min(Math.max(n-(this.lastTime??n-1/30),1/240),.25);this.lastTime=n;let l=s?.neckPoint,c=s?.hipCenter;if(s&&l&&c&&s.distance(l,c)>.02){let d=s.distance(l,c);this.absentSince!==null&&n-this.absentSince>1.5&&(this.needsCalibration=!0),this.absentSince=null;let f=this.centerXFilter.filter((l.x+c.x)/2,n);r.bodyX=f,r.status.good?this.goodSince===null&&(this.goodSince=n):this.goodSince=null,(this.calibrationRequested||this.refTorso===null||this.needsCalibration&&this.goodSince!==null&&n-this.goodSince>.6)&&this.calibrate(f,l,c,d,s);let g=this.refTorso??d;r.isCalibrated=!this.needsCalibration,this.lastLateral=(f-(this.calibratedCenterX??.5))*s.aspect/g,r.lateral=this.lastLateral,this.updateJumpAndCrouch(s,l,c,g,d,n,o),r.jumpCount=this.jumpCount,r.isAirborne=this.airborne,r.isCrouching=this.crouching,r.leftHand=this.hand(0,s.joints.leftWrist,l,c,g,s.aspect,n),r.rightHand=this.hand(1,s.joints.rightWrist,l,c,g,s.aspect,n);let v=this.detectSwipe(s,l,c,g,n);v&&a.push(v);let p=s.joints.nose?.y??l.y+g*.35,m=s.joints.leftWrist,M=s.joints.rightWrist;if(m&&M){let _=m.y>p+g*.05,x=M.y>p+g*.05;r.handsUpRaised=_&&x,r.oneHandRaised=_&&M.y<l.y-g*.1||x&&m.y<l.y-g*.1}}else this.absentSince===null&&(this.absentSince=n),this.goodSince=null,this.lastCenterY=null,this.airborne=!1,this.crouching=!1,r.jumpCount=this.jumpCount,r.bodyX=this.centerXFilter.filter(.5,n),r.lateral=this.lastLateral,r.isCalibrated=!this.needsCalibration,this.lastHands=[null,null],this.handFilters.forEach(d=>d.reset());this.handsUp.update(r.handsUpRaised,this.handsUpHold,n)&&a.push("back");let h=this.thumbs.update(e&&!r.handsUpRaised,this.thumbsUpHold,n),u=this.raiseHand.update(r.oneHandRaised,this.raiseHandHold,n);return(h||u)&&(a.push("confirm"),this.thumbs.reset(!0),this.raiseHand.reset(!0)),r.handsUpProgress=this.handsUp.progress(this.handsUpHold,n),r.confirmProgress=Math.max(this.thumbs.progress(this.thumbsUpHold,n),this.raiseHand.progress(this.raiseHandHold,n)),{snap:r,events:a}}bridge(t,e){if(!t)return e-this.lastPoseTime<this.bridgeTime?this.lastPose:null;for(let[n,s]of Object.entries(this.jointSeen))!t.joints[n]&&e-s.t<this.bridgeTime&&(t.joints[n]=s.p);for(let[n,s]of Object.entries(t.joints))this.jointSeen[n]={p:s,t:e};return this.lastPose=t,this.lastPoseTime=e,t}calibrate(t,e,n,s,r){this.calibratedCenterX=t,this.refTorso=s,this.baseCenterY=(e.y+n.y)/2,this.baseHipY=n.y,this.baseNeckY=e.y,this.baseAnkleY=i.ankleY(r),this.crouching=!1,this.airborne=!1,this.calibrationRequested=!1,this.needsCalibration=!1}static ankleY(t){let e=t.joints.leftAnkle,n=t.joints.rightAnkle;return e&&n?Math.min(e.y,n.y):null}updateJumpAndCrouch(t,e,n,s,r,a,o){let l=(e.y+n.y)/2;if(this.baseCenterY===null)return;let c=(l-this.baseCenterY)/s,h=(n.y-this.baseHipY)/s,u=this.lastCenterY===null?0:(l-this.lastCenterY)/s/o;this.lastCenterY=l;let d=i.ankleY(t),f=d!==null&&this.baseAnkleY!==null?(d-this.baseAnkleY)/s:null;this.airborne?(c<.07||a-this.airborneSince>1.3)&&(this.airborne=!1,this.landedAt=a):a-this.landedAt>.25&&c>.17&&h>.12&&u>.9&&(f===null||f>.05||c>.3)&&(this.airborne=!0,this.airborneSince=a,this.jumpCount+=1,this.crouching=!1);let g=(this.baseHipY-n.y)/s,v=(this.baseNeckY-e.y)/s;if(this.airborne||(!this.crouching&&(g>.15&&v>.22||v>.5)?this.crouching=!0:this.crouching&&v<.14&&g<.1&&(this.crouching=!1)),this.airborne||this.crouching)return;let p=Math.abs(c)<.08&&Math.abs(u)<.5,m=1-Math.exp(-o/(p?.6:10));this.baseCenterY+=(l-this.baseCenterY)*m,this.baseHipY+=(n.y-this.baseHipY)*m,this.baseNeckY+=(e.y-this.baseNeckY)*m,d!==null&&(this.baseAnkleY=this.baseAnkleY===null?d:this.baseAnkleY+(d-this.baseAnkleY)*m),p&&this.refTorso!==null&&(this.refTorso+=(r-this.refTorso)*m)}hand(t,e,n,s,r,a,o){if(!e)return o-this.handLastSeen[t]<.25?this.lastHands[t]:(this.handFilters[t*2].reset(),this.handFilters[t*2+1].reset(),this.lastHands[t]=null,null);let l=Math.max(-1.3,Math.min(1.3,(e.x-n.x)*a/(r*1.7))),c=Math.max(-.4,Math.min(1.2,(e.y-s.y)/(r*2.3))),h={x:this.handFilters[t*2].filter(l,o),y:this.handFilters[t*2+1].filter(c,o)};return this.handLastSeen[t]=o,this.lastHands[t]=h,h}detectSwipe(t,e,n,s,r){let o=[0,0];if(["leftWrist","rightWrist"].forEach((l,c)=>{let h=t.joints[l];if(!h){this.swipeHistory[c]=[];return}let u=(h.x-e.x)*t.aspect/s,d=(h.y-n.y)/s,f=this.swipeHistory[c];for(f.push({t:r,x:u,y:d});f.length&&r-f[0].t>.4;)f.shift();let g=c===0?-1:1,v=f.reduce((p,m)=>m.x*g<p.x*g?m:p,f[0]);o[c]=(u-v.x)*g}),r<this.swipeCooldownUntil)return null;for(let l=0;l<2;l++){let c=this.swipeHistory[l];if(!c.length)continue;let h=c[c.length-1],u=l===0?-1:1,d=c.reduce((v,p)=>p.x*u<v.x*u?p:v,c[0]),f=o[l],g=f/Math.max(h.t-d.t,1/60);if(f>.85&&g>2&&h.x*u>.7&&d.x*u<.5&&h.y>.25&&h.y<2&&!(o[1-l]>.5))return this.swipeCooldownUntil=r+.6,this.swipeHistory=[[],[]],l===0?"swipeLeft":"swipeRight"}return null}static evaluateStatus(t){if(!t||!t.neckPoint||!(t.joints.leftShoulder||t.joints.rightShoulder))return Qe.noPerson;let e=t.neckPoint,n=t.hipCenter;if(!n)return Qe.tooClose;let s=t.distance(e,n);if(s>.4||n.y<.06)return Qe.tooClose;if(t.joints.nose&&t.joints.nose.y>.97)return Qe.tooClose;if(s<.1)return Qe.tooFar;let r=(e.x+n.x)/2;return r<.15?Qe.goRight:r>.85?Qe.goLeft:Qe.good}debounced(t){return t===this.status?(this.candidateFrames=0,this.status):(t===this.candidate?this.candidateFrames+=1:(this.candidate=t,this.candidateFrames=1),this.candidateFrames>=6&&(this.status=t,this.candidateFrames=0),this.status)}};var Ka=class{constructor(){this.interpreter=new qa,this.snapshot=Xa(),this.listeners=new Set,this.snapshotListeners=new Set,this.kb={lane:null,laneUntil:0,jumps:0,crouchUntil:0,airborneUntil:0,activeUntil:0},this.simulateHands=!1}set handsUpHold(t){this.interpreter.handsUpHold=t}onEvent(t){return this.listeners.add(t),()=>this.listeners.delete(t)}onSnapshot(t){return this.snapshotListeners.add(t),()=>this.snapshotListeners.delete(t)}calibrate(){this.interpreter.requestCalibration()}resetGestures(){this.interpreter.resetGestures()}processPose(t,e,n){let{snap:s,events:r}=this.interpreter.process(t,e,n);this.snapshot=s;for(let a of this.snapshotListeners)a(s);for(let a of r)for(let o of this.listeners)o(a)}emit(t){for(let e of this.listeners)e(t)}get latest(){let t={...this.snapshot},e=performance.now()/1e3,n=this.kb;return t.jumpCount+=n.jumps,e<n.activeUntil&&(t.keyboardActive=!0),e<n.laneUntil&&n.lane!==null&&(t.lateral=n.lane,t.bodyX=.5+n.lane*.25),e<n.crouchUntil&&(t.isCrouching=!0),e<n.airborneUntil&&(t.isAirborne=!0),this.simulateHands&&(t.leftHand={x:-.55+.25*Math.sin(e*2.1),y:.62+.2*Math.cos(e*1.7)},t.rightHand={x:.5+.3*Math.cos(e*2.6),y:.55+.25*Math.sin(e*3.1)}),t}keyboardStep(t){let e=performance.now()/1e3,n=this.kb,s=e<n.laneUntil&&n.lane!==null?n.lane:0;n.lane=Math.max(-1,Math.min(1,s+t)),n.laneUntil=e+30,n.activeUntil=e+6}keyboardJump(){let t=performance.now()/1e3;this.kb.jumps+=1,this.kb.airborneUntil=t+.5,this.kb.activeUntil=t+6}keyboardCrouch(){let t=performance.now()/1e3;this.kb.crouchUntil=t+.7,this.kb.activeUntil=t+6}};var Hv={nose:0,leftShoulder:11,rightShoulder:12,leftElbow:13,rightElbow:14,leftWrist:15,rightWrist:16,leftHip:23,rightHip:24,leftKnee:25,rightKnee:26,leftAnkle:27,rightAnkle:28},Ya=class{constructor(t,e){this.hub=t,this.assetBase=e,this.video=document.createElement("video"),this.video.playsInline=!0,this.video.muted=!0,this.video.autoplay=!0,this.stream=null,this.landmarker=null,this.running=!1,this.lastVideoTime=-1,this.lastCenter=null,this.state="idle",this.onState=()=>{}}setState(t,e){this.state=t,this.onState(t,e)}async listDevices(){return(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="videoinput")}async start(t){this.setState("starting");try{this.stream?.getTracks().forEach(e=>e.stop()),this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:t?{deviceId:{exact:t},width:{ideal:1280},height:{ideal:720}}:{facingMode:"user",width:{ideal:1280},height:{ideal:720}}})}catch(e){this.setState(e?.name==="NotAllowedError"?"denied":"error",e?.message);return}if(this.video.srcObject=this.stream,await this.video.play().catch(()=>{}),!this.landmarker)try{let{FilesetResolver:e,PoseLandmarker:n}=await import("./chunks/vision_bundle-JHT6HPDM.js"),s=await e.forVisionTasks(this.assetBase+"mediapipe/wasm"),r=a=>({baseOptions:{modelAssetPath:this.assetBase+"mediapipe/pose_landmarker_lite.task",delegate:a},runningMode:"VIDEO",numPoses:2,minPoseDetectionConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await n.createFromOptions(s,r("GPU"))}catch{this.landmarker=await n.createFromOptions(s,r("CPU"))}}catch(e){this.setState("error","Couldn't load body tracking: "+(e?.message??e));return}this.running=!0,this.setState("running"),this.loop()}get aspect(){return this.video.videoWidth&&this.video.videoHeight?this.video.videoWidth/this.video.videoHeight:16/9}loop(){if(!this.running)return;let t=()=>{if(!this.running)return;let e=this.video;if(e.readyState>=2&&e.currentTime!==this.lastVideoTime){this.lastVideoTime=e.currentTime;let n=performance.now(),s;try{s=this.landmarker.detectForVideo(e,n)}catch{s=null}this.hub.processPose(this.pickPose(s),!1,n/1e3)}e.requestVideoFrameCallback?e.requestVideoFrameCallback(t):requestAnimationFrame(t)};t()}pickPose(t){let e=t?.landmarks??[],n=null;for(let s of e){let r={};for(let[c,h]of Object.entries(Hv)){let u=s[h];!u||(u.visibility??1)<.5||(r[c]={x:1-u.x,y:1-u.y})}if(r.leftShoulder&&r.rightShoulder&&(r.neck={x:(r.leftShoulder.x+r.rightShoulder.x)/2,y:(r.leftShoulder.y+r.rightShoulder.y)/2}),r.leftHip&&r.rightHip&&(r.root={x:(r.leftHip.x+r.rightHip.x)/2,y:(r.leftHip.y+r.rightHip.y)/2}),Object.keys(r).length<4)continue;let a=new xr(r,this.aspect),o=a.torsoLength??.01,l=a.neckPoint??Object.values(r)[0];if(this.lastCenter){let c=Math.hypot((l.x-this.lastCenter.x)*a.aspect,l.y-this.lastCenter.y);o*=Math.max(.35,1-c*2.5)}(!n||o>n.score)&&(n={pose:a,score:o,center:l})}return this.lastCenter=n?.center??null,n?.pose??null}stop(){this.running=!1,this.stream?.getTracks().forEach(t=>t.stop())}};function Gu(i){window.MoveCamNative=window.MoveCamNative||{},window.MoveCamNative.pushPose=t=>{if(!t||!t.joints){i.processPose(null,!!t?.thumbsUp,t?.t??performance.now()/1e3);return}let e={};for(let[n,s]of Object.entries(t.joints))e[n]={x:s[0],y:s[1]};i.processPose(new xr(e,t.aspect||16/9),!!t.thumbsUp,t.t)}}var Wu=()=>!!window.webkit?.messageHandlers?.movecam;function Nn(i){try{window.webkit?.messageHandlers?.movecam?.postMessage(i)}catch{}}var Vv=["coin","jump","hit","slice","splat","explosion","whistle","kick","save","cheer","groan","punch","beep","go","select","confirm","pause","gameover","gate","whoosh","combo"],$a=class{constructor(t){this.base=t,this.ctx=null,this.buffers=new Map,this.music=new Map,this.current=null,this.ducked=!1,this.settings={sound:Te("sound",!0),music:Te("music",!0),volume:Te("musicVolume",.6)}}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.applyVolumes(),Vv.forEach(e=>this.loadSound(e))}this.ctx.state==="suspended"&&this.ctx.resume()}async fetchBuffer(t){let n=await(await fetch(t)).arrayBuffer();return await this.ctx.decodeAudioData(n)}async loadSound(t){try{this.buffers.set(t,await this.fetchBuffer(`${this.base}sounds/${t}.wav`))}catch{}}play(t,e=1,n=1){if(!this.ctx||!this.settings.sound)return;let s=this.buffers.get(t);if(!s)return;let r=this.ctx.createBufferSource();r.buffer=s,r.playbackRate.value=n;let a=this.ctx.createGain();a.gain.value=e,r.connect(a).connect(this.sfxGain),r.start()}async playMusic(t){if(this.ducked=!1,!this.ctx)return;if(this.current?.name===t){this.applyVolumes();return}this.wanted=t;let e=this.music.get(t);if(!e){try{e=await this.fetchBuffer(`${this.base}music/music-${t}.m4a`)}catch{try{e=await this.fetchBuffer(`${this.base}music/music-${t}.ogg`)}catch{return}}if(this.music.set(t,e),this.music.size>3){for(let a of this.music.keys())if(a!=="menu"&&a!==t){this.music.delete(a);break}}}if(this.wanted!==t)return;let n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;let s=this.ctx.createGain();s.gain.value=0,n.connect(s).connect(this.musicGain),n.start();let r=this.ctx.currentTime;if(s.gain.linearRampToValueAtTime(1,r+1.2),this.current){let a=this.current;a.gain.gain.cancelScheduledValues(r),a.gain.gain.setValueAtTime(a.gain.gain.value,r),a.gain.gain.linearRampToValueAtTime(0,r+1.2),a.source.stop(r+1.3)}this.current={name:t,source:n,gain:s},this.applyVolumes()}duck(t){this.ducked=t,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.settings.music?this.settings.volume*.75*(this.ducked?.3:1):0;this.musicGain.gain.cancelScheduledValues(t),this.musicGain.gain.setValueAtTime(this.musicGain.gain.value,t),this.musicGain.gain.linearRampToValueAtTime(e,t+.4),this.sfxGain.gain.value=this.settings.sound?1:0}set(t,e){this.settings[t]=e,ye(t==="volume"?"musicVolume":t,e),this.applyVolumes()}};function Te(i,t){try{let e=localStorage.getItem("movecam."+i);return e===null?t:JSON.parse(e)}catch{return t}}function ye(i,t){try{localStorage.setItem("movecam."+i,JSON.stringify(t))}catch{}}var Za=class{constructor(t){this.root=t,this.state={score:0,lives:null,maxLives:3,time:null,stat:null},this.el=document.createElement("div"),this.el.id="hud",this.banner=document.createElement("div"),this.banner.id="banner",this.banner.style.opacity="0",t.append(this.el,this.banner),this.token=0,this.render()}set(t){Object.assign(this.state,t),this.render()}reset(){this.state={score:0,lives:null,maxLives:3,time:null,stat:null},this.banner.style.opacity="0",this.render()}flash(t,e=1.2){let n=++this.token;this.banner.textContent=t,this.banner.style.opacity="1",setTimeout(()=>{this.token===n&&(this.banner.style.opacity="0")},e*1e3)}show(t){this.el.classList.toggle("hidden",!t),t||(this.banner.style.opacity="0")}render(){let t=this.state,e=[`<div class="stat"><div class="label">SCORE</div><div class="value">${t.score.toLocaleString()}</div></div>`];if(t.lives!==null){let n="";for(let s=0;s<t.maxLives;s++)n+=`<span class="${s<t.lives?"":"off"}">\u2665</span>`;e.push(`<div class="stat"><div class="label">LIVES</div><div class="hearts">${n}</div></div>`)}if(t.time!==null){let n=Math.floor(t.time/60),s=String(t.time%60).padStart(2,"0");e.push(`<div class="stat"><div class="label">TIME</div><div class="value" style="color:${t.time<=10?"var(--bad)":"#fff"}">${n}:${s}</div></div>`)}if(t.stat){let[n,...s]=t.stat.split(" ");e.push(`<div class="stat"><div class="label">${n.toUpperCase()}</div><div class="value">${s.join(" ")}</div></div>`)}this.el.innerHTML=e.join("")}};var pn=class{constructor(t){this.ctx=t,this.hub=t.hub,this.audio=t.audio,this.hud=t.hud,this.scene=new Pa,this.camera=new Be(60,t.aspect(),.1,1200),this.elapsed=0,this.finished=!1,this.disposables=[]}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}idle(t){}start(){}update(t,e){}finish(t,e){this.finished||(this.finished=!0,this.audio.play("gameover"),setTimeout(()=>this.ctx.onFinished({score:Math.round(t),detail:e}),1e3))}dispose(){this.scene.traverse(t=>{t.geometry?.dispose?.();let e=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let n of e){for(let s of Object.values(n))s?.isTexture&&s.dispose();n.dispose()}})}};function Xu(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,_=o.length;M<_;M++){let x=o[M],R=i.attributes[x];l[x]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((E,P)=>{let k=new E.array.constructor(E.count*E.itemSize);c[x][P]=new E.constructor(k,E.itemSize,E.normalized)}))}let f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),p=f*v;for(let M=0;M<r;M++){let _=n?n.getX(M):M,x="";for(let R=0,T=o.length;R<T;R++){let E=o[R],P=i.getAttribute(E),k=P.itemSize;for(let y=0;y<k;y++)x+=`${~~(P[u[y]](_)*v+p)},`}if(x in e)h.push(e[x]);else{for(let R=0,T=o.length;R<T;R++){let E=o[R],P=i.getAttribute(E),k=i.morphAttributes[E],y=P.itemSize,w=l[E],N=c[E];for(let F=0;F<y;F++){let G=u[F],$=d[F];if(w[$](a,P[G](_)),k)for(let V=0,tt=k.length;V<tt;V++)N[V][$](a,k[V][G](_))}}e[x]=a,h.push(a),a++}}let m=i.clone();for(let M in i.attributes){let _=l[M];if(m.setAttribute(M,new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),M in c)for(let x=0;x<c[M].length;x++){let R=c[M][x];m.morphAttributes[M][x]=new R.constructor(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return m.setIndex(h),m}function An(i=1){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var ht=(i,t)=>i+Math.random()*(t-i),Fs=i=>i[Math.floor(Math.random()*i.length)],Ve=(i,t,e)=>Math.max(t,Math.min(e,i)),on=(i,t,e)=>i+(t-i)*e,bi=(i,t,e,n)=>on(i,t,1-Math.exp(-e*n));function Gv(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Wv(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,l=e-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),d=0;for(let f=0;f<=1;f++)for(let g=0;g<=1;g++)for(let v=0;v<=1;v++){let p=(f?c:1-c)*(g?h:1-h)*(v?u:1-u);d+=p*Gv(n+f,s+g,r+v)}return d*2-1}function br(i,t,e,n=4){let s=0,r=.5,a=1,o=0;for(let l=0;l<n;l++)s+=r*Wv(i*a,t*a,e*a),o+=r,r*=.5,a*=2.03;return s/o}function Xv(i){let t=new Xi(1,i);return t.deleteAttribute("normal"),t.deleteAttribute("uv"),Xu(t)}function qv(i,t){let e=i.attributes.position,n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++)n[s*2]=(e.getX(s)+e.getZ(s)*.7)*t,n[s*2+1]=e.getY(s)*t;i.setAttribute("uv",new Se(n,2))}function Pe(i,t,e,{repeat:n=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t;let a=r.getContext("2d");e(a,i,t);let o=new Cs(r);return s&&(o.colorSpace=qe),o.anisotropy=4,n&&(o.wrapS=o.wrapT=Hi,o.repeat.set(n[0],n[1])),o}function Si(i,t,{size:e=512,count:n=3e3,radius:s=6,seed:r=1,repeat:a=null,alpha:o=[.15,.5]}={}){let l=An(r);return Pe(e,e,(c,h,u)=>{c.fillStyle=i,c.fillRect(0,0,h,u);for(let d=0;d<n;d++){c.globalAlpha=o[0]+l()*(o[1]-o[0]),c.fillStyle=t[Math.floor(l()*t.length)];let f=(.4+l())*s,g=l()*h,v=l()*u;for(let p of[-h,0,h])for(let m of[-u,0,u])c.beginPath(),c.arc(g+p,v+m,f,0,Math.PI*2),c.fill()}c.globalAlpha=1},{repeat:a})}function Sr(i,t,e=8,{repeat:n=null}={}){return Pe(256,64,(s,r,a)=>{s.fillStyle=i,s.fillRect(0,0,r,a),s.fillStyle=t;let o=r/e;for(let l=-2;l<e+2;l+=2)s.beginPath(),s.moveTo(l*o,0),s.lineTo(l*o+o,0),s.lineTo(l*o+o+a,a),s.lineTo(l*o+a,a),s.closePath(),s.fill()},{repeat:n})}function Os(i="#ffffff"){return Pe(64,64,(t,e)=>{let n=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,i),n.addColorStop(.35,i),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,e,e)})}function ot(i,{rough:t=.6,metal:e=0,map:n=null,emissive:s=null,emissiveIntensity:r=1,transparent:a=!1,opacity:o=1,side:l}={}){let c=new Is({color:i,roughness:t,metalness:e,map:n,transparent:a,opacity:o});return s&&(c.emissive=new Mt(s),c.emissiveIntensity=r),l&&(c.side=l),c}function J(i,t,{x:e=0,y:n=0,z:s=0,cast:r=!0,receive:a=!1}={}){let o=new ae(i,t);return o.position.set(e,n,s),o.castShadow=r,o.receiveShadow=a,o}function ks(i,t=!0,e=!1){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function Bs({top:i,horizon:t,bottom:e,sunDir:n=null,sunColor:s="#fff6d8",sunSize:r=.04,radius:a=900}){let o={top:{value:new Mt(i)},horizon:{value:new Mt(t)},bottom:{value:new Mt(e)},sunDir:{value:(n??new C(0,-1,0)).clone().normalize()},sunColor:{value:new Mt(s)},sunSize:{value:r}},l=new dn({uniforms:o,side:He,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunSize; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 c = h > 0.0 ? mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(horizon, bottom, pow(clamp(-h, 0.0, 1.0), 0.4));
        float d = max(dot(normalize(vDir), sunDir), 0.0);
        c += sunColor * (pow(d, 900.0 * (0.04 / sunSize)) * 2.5 + pow(d, 12.0) * 0.35);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),c=new ae(new ve(a,32,16),l);return c.renderOrder=-1,c}function Ja(i,{sun:t="#fff1d6",sunIntensity:e=2.6,sky:n="#bcd4ff",ground:s="#8a6a50",hemi:r=1.1,dir:a=[-.6,1,.5],shadowSize:o=40,shadowMap:l=2048}={}){let c=new Dn(n,s,r);i.add(c);let h=new _i(t,e);h.position.set(a[0]*40,a[1]*40,a[2]*40),h.castShadow=!0,h.shadow.mapSize.set(l,l);let u=o/2;return Object.assign(h.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:1,far:140}),h.shadow.bias=-4e-4,h.shadow.normalBias=.03,i.add(h,h.target),{hemi:c,sun:h}}function qu(i,t,e,n=[-24,40,20]){i.position.set(t+n[0],n[1],e+n[2]),i.target.position.set(t,0,e)}var De=class{constructor(t,{max:e=600,size:n=.25,texture:s=Os(),additive:r=!1,gravity:a=-9.8}={}){this.max=e,this.gravity=a,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.cursor=0;let o=new Ee;o.setAttribute("position",new Se(this.pos,3)),o.setAttribute("color",new Se(this.col,3)),this.material=new pr({size:n,map:s,vertexColors:!0,transparent:!0,depthWrite:!1,blending:r?_s:mi,sizeAttenuation:!0,opacity:.95}),this.points=new Ua(o,this.material),this.points.frustumCulled=!1;for(let l=0;l<e;l++)this.pos[l*3+1]=-9999;t.add(this.points)}burst(t,{count:e=30,speed:n=4,spread:s=1,up:r=.5,color:a="#ffffff",life:o=.8,colorJitter:l=.15,drag:c=.5,dir:h=null}={}){let u=new Mt(a);for(let d=0;d<e;d++){let f=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[f*3]=t.x,this.pos[f*3+1]=t.y,this.pos[f*3+2]=t.z;let g=(Math.random()*2-1)*s,v=(Math.random()*2-1)*s+r,p=(Math.random()*2-1)*s;h&&(g+=h.x,v+=h.y,p+=h.z);let m=Math.hypot(g,v,p)||1,M=n*(.4+Math.random()*.8);this.vel[f*3]=g/m*M,this.vel[f*3+1]=v/m*M,this.vel[f*3+2]=p/m*M;let _=1+(Math.random()*2-1)*l;this.col[f*3]=u.r*_,this.col[f*3+1]=u.g*_,this.col[f*3+2]=u.b*_,this.life[f]=this.maxLife[f]=o*(.6+Math.random()*.8),this.drag[f]=c}}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0)continue;if(this.life[e]-=t,this.life[e]<=0){this.pos[e*3+1]=-9999;continue}let n=Math.exp(-this.drag[e]*t);this.vel[e*3]*=n,this.vel[e*3+2]*=n,this.vel[e*3+1]=this.vel[e*3+1]*n+this.gravity*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.life[e]/this.maxLife[e]<.3&&(this.col[e*3]*=.92,this.col[e*3+1]*=.92,this.col[e*3+2]*=.92)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}shift(t){for(let e=0;e<this.max;e++)this.life[e]>0&&(this.pos[e*3+2]+=t)}};function ja(i="#b8643a",t=3){let e=Si("#e2dbd4",["#a59b92","#f5f0ea","#c2b8ae"],{size:256,count:2200,radius:3,seed:t,repeat:[1,1],alpha:[.06,.22]}),n=ot("#ffffff",{rough:.95,map:e});return n.vertexColors=!0,n.userData.base=new Mt(i),n}function Kv(i,t,e,n){let s=t.userData.base??new Mt("#a0a0a0"),r=i.attributes.position,a=i.attributes.normal,o=new Float32Array(r.count*3),l=new Mt,c=s.clone().multiplyScalar(.62),h=s.clone().lerp(new Mt("#f3dcc2"),.35);for(let u=0;u<r.count;u++){let d=r.getX(u),f=r.getY(u),g=r.getZ(u),v=br(d*.9+e,f*.9,g*.9,3);if(n){let p=f+br(d*.3,f*.15,g*.3+e,2)*1.2,m=Math.pow(Math.sin(p*1.9)*.5+.5,2.2)*.7+(Math.sin(p*5.3+1.7)*.5+.5)*.3;l.copy(c).lerp(h,m*.85+.08+v*.1)}else l.copy(s).multiplyScalar(.85+v*.25);l.multiplyScalar(.78+.22*Math.max(0,a.getY(u)*.5+.5)),o[u*3]=l.r,o[u*3+1]=l.g,o[u*3+2]=l.b}i.setAttribute("color",new Se(o,3))}function zs(i,t,{detail:e=3,rough:n=.32,flat:s=.75,mesa:r=null,bands:a=null,seed:o=Math.random()*100}={}){let l=Xv(e),c=l.attributes.position;for(let u=0;u<c.count;u++){let d=c.getX(u),f=c.getY(u),g=c.getZ(u),v=1+n*br(d*1.4+o,f*1.4,g*1.4-o,4),p=f*s;r!==null&&p>r*s&&(p=r*s+(p-r*s)*.08),p<-.35*s&&(p=-.35*s),c.setXYZ(u,d*v*i,p*v*i,g*v*i)}l.computeVertexNormals(),qv(l,.25/Math.max(i*.25,.5)),Kv(l,t,o,a??t.userData.base?.r>t.userData.base?.b);let h=J(l,t,{receive:!0});return h.rotation.y=Math.random()*Math.PI*2,h}function Ku({radius:i=320,height:t=150,arc:e=Math.PI*.9,y:n=-12,seed:s=7,rock:r="#56606f",snow:a="#f3f6fb",haze:o="#c9d6e8",layers:l=3}={}){let u=Pe(2048,512,v=>{let p=new Mt(o);for(let m=0;m<l;m++){let M=1-m/Math.max(l-1,1),_=(N,F)=>"#"+new Mt(N).lerp(p,F).getHexString(),x=_(r,.25+M*.55),R=_(a,M*.35),T=_("#3a4250",.3+M*.55),E=512*(.1+m*.16),P=512*(.6+m*.12),k=new Float32Array(2048);for(let N=0;N<2048;N++){let F=N/2048*(6+m*3),G=1-Math.abs(br(F+s+m*10,m*3.1,.5,5));k[N]=E+(P-E)*(1-Math.pow(G,1.6))*.95}for(let N=0;N<2048;N++){let F=k[N];v.fillStyle=x,v.fillRect(N,F,1,512-F);let G=1-(F-E)/(P-E),$=(P-F)*(.12+.45*G)*(.7+.45*br(N/30+s,m,1.3,3));v.fillStyle=R,v.fillRect(N,F,1,Math.max(0,$));let V=(k[Math.min(2047,N+3)]-k[Math.max(0,N-3)])/6;V<-.15&&(v.globalAlpha=Math.min(.45,-V*.25),v.fillStyle=T,v.fillRect(N,F,1,512-F),v.globalAlpha=1)}let y=An(s*13+m);v.strokeStyle=T;for(let N=0;N<220;N++){let F=y()*2048,G=k[Math.floor(F)];v.globalAlpha=.08+y()*.12,v.lineWidth=.6+y()*1.4,v.beginPath(),v.moveTo(F,G+4+y()*14),v.lineTo(F+(y()-.5)*24,G+20+y()*(P-G)*.5),v.stroke()}v.globalAlpha=1;let w=v.createLinearGradient(0,P-40,0,512);w.addColorStop(0,"#"+p.getHexString()+"00"),w.addColorStop(1,"#"+p.getHexString()+"ee"),v.fillStyle=w,v.fillRect(0,P-40,2048,512-P+40)}});u.wrapS=qn;let d=new ne(i,i,t,96,1,!0,Math.PI-e/2,e),f=new we({map:u,side:He,fog:!1,transparent:!0,depthWrite:!1}),g=new ae(d,f);return g.position.y=n+t/2,g.renderOrder=-1,g}function Gc(i=3){let t=new Dt,e=ot("#3d7334",{rough:.7}),n=ot("#2f5c28",{rough:.8});t.add(J(new Oe(.24,i-.5,6,12),e,{y:i/2}));for(let s of[-1,1]){if(s===-1&&Math.random()<.4)continue;let r=i*ht(.3,.5),a=i*ht(.3,.45),o=J(new Oe(.15,.4,4,10),n,{x:s*.35,y:r});o.rotation.z=Math.PI/2,t.add(o,J(new Oe(.15,a,4,10),e,{x:s*.6,y:r+a/2}))}return ks(t)}function Wc(i=6,t=!1){let e=new Dt,n=ot("#4a2f1c",{rough:.9}),s=ot(new Mt().setHSL(.36,.45,ht(.16,.22)),{rough:.85}),r=ot("#f4f8ff",{rough:.5});e.add(J(new ne(i*.04,i*.06,i*.3,8),n,{y:i*.15}));for(let a=0;a<4;a++){let o=i*(.34-.07*a),l=i*.36,c=i*.22+a*i*.16+l/2;e.add(J(new Wi(o,l,10),s,{y:c})),t&&e.add(J(new Wi(o*.62,l*.42,10),r,{y:c+l*.3}))}return ks(e)}function Yu(){let i=ot("#ffc63a",{rough:.22,metal:1,emissive:"#5a3a00",emissiveIntensity:.6}),t=new Dt,e=J(new ne(.34,.34,.08,28),i);e.rotation.x=Math.PI/2;let n=J(new En(.34,.04,8,28),i);return t.add(e,n),t}var mn=class{constructor(){this.amount=0}kick(t){this.amount=Math.max(this.amount,t)}apply(t,e){this.amount<=.001||(t.position.x+=(Math.random()*2-1)*this.amount,t.position.y+=(Math.random()*2-1)*this.amount,this.amount*=Math.exp(-e*9))}};var Yi=.95,Fn=class{constructor({shirt:t="#1e6ff2",accent:e="#ffffff",pants:n="#232323",skin:s="#d9a67f",hair:r="#2e1a0e",shoes:a="#ff5a33",gloves:o=null,number:l=null}={}){let c={shirt:ot(t,{rough:.55}),accent:ot(e,{rough:.5}),pants:ot(n,{rough:.75}),skin:ot(s,{rough:.5}),hair:ot(r,{rough:.85}),shoes:ot(a,{rough:.35}),sole:ot("#f2f2f2",{rough:.6}),eye:ot("#151515",{rough:.3}),glove:o?ot(o,{rough:.3}):null};if(l!==null){let v=document.createElement("canvas");v.width=v.height=128;let p=v.getContext("2d");p.fillStyle=t,p.fillRect(0,0,128,128),p.fillStyle=e,p.font="bold 84px sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText(String(l),64,70);let m=new Cs(v);m.colorSpace=qe,c.back=ot("#ffffff",{rough:.55,map:m})}this.root=new Dt,this.hips=new Dt,this.hips.position.y=Yi,this.root.add(this.hips);let h=J(new Oe(.15,.18,6,12),c.pants,{y:.02});h.rotation.z=Math.PI/2,h.scale.set(1,1,.8),this.hips.add(h),this.chest=new Dt,this.chest.position.y=.1,this.hips.add(this.chest);let u=J(new Oe(.2,.34,8,16),c.shirt,{y:.26});u.scale.set(1.12,1,.72),this.chest.add(u);let d=J(new ne(.206,.206,.06,20),c.accent,{y:.2});if(d.scale.set(1.12,1,.73),this.chest.add(d),c.back){let v=J(new ce(.24,.24),c.back,{y:.32,z:.146});this.chest.add(v)}this.chest.add(J(new ne(.055,.06,.1,10),c.skin,{y:.56})),this.head=new Dt,this.head.position.y=.71,this.chest.add(this.head);let f=J(new ve(.125,20,16),c.skin);f.scale.set(.92,1.06,1),this.head.add(f);let g=J(new ve(.132,20,12,0,Math.PI*2,0,Math.PI*.55),c.hair,{y:.02,z:.012});g.scale.set(.95,1,1.02),this.head.add(g);for(let v of[-1,1])this.head.add(J(new ve(.016,8,8),c.eye,{x:v*.045,y:.01,z:-.112,cast:!1}));this.head.add(J(new ve(.03,8,8),c.skin,{y:-.02,z:-.122,cast:!1})),this.arms={};for(let v of["left","right"]){let p=v==="left"?-1:1,m=new Dt;m.position.set(.25*p,.46,0),this.chest.add(m),m.add(J(new ve(.078,12,10),c.shirt)),m.add(J(new Oe(.06,.2,4,10),c.shirt,{y:-.14}));let M=new Dt;M.position.y=-.29,m.add(M),M.add(J(new Oe(.052,.19,4,10),c.skin,{y:-.13}));let _=new Dt;if(_.position.y=-.29,M.add(_),c.glove){let x=J(new ve(.1,14,12),c.glove);x.scale.set(.9,1.05,1.15),_.add(x)}else _.add(J(new ve(.058,10,8),c.skin));this.arms[v]={shoulder:m,elbow:M,hand:_}}this.legs={};for(let v of["left","right"]){let p=v==="left"?-1:1,m=new Dt;m.position.set(.1*p,-.02,0),this.hips.add(m),m.add(J(new Oe(.085,.31,4,10),c.pants,{y:-.21}));let M=new Dt;M.position.y=-.44,m.add(M),M.add(J(new Oe(.068,.31,4,10),c.pants,{y:-.21})),M.add(J(new ne(.058,.062,.08,10),c.skin,{y:-.4}));let _=new Dt;_.position.set(0,-.46,-.04),M.add(_);let x=J(new ge(.12,.09,.27),c.shoes);_.add(x,J(new ge(.125,.03,.28),c.sole,{y:-.045})),this.legs[v]={hip:m,knee:M,foot:_}}this.root.traverse(v=>{v.isMesh&&(v.castShadow=!0)}),this.run(0,0)}set(t,e=0,n=0,s=0){t.rotation.set(e,n,s)}run(t,e=1,n=.18){let s=Math.sin(t),r=Math.cos(t),{left:a,right:o}=this.legs;this.set(a.hip,s*.85*e),this.set(o.hip,-s*.85*e),this.set(a.knee,-(.15+1.1*Math.max(0,-r))*e),this.set(o.knee,-(.15+1.1*Math.max(0,r))*e),this.set(a.foot,.2*e*Math.max(0,s)),this.set(o.foot,.2*e*Math.max(0,-s));let l=this.arms;this.set(l.left.shoulder,-s*.8*e,0,-.08),this.set(l.right.shoulder,s*.8*e,0,.08),this.set(l.left.elbow,.3+1.2*e),this.set(l.right.elbow,.3+1.2*e),this.set(this.chest,-n*e,s*.12*e,0),this.set(this.hips,0,-s*.1*e,0),this.hips.position.y=Yi+Math.abs(r)*.06*e,this.set(this.head,n*.6*e)}jump(t){let{left:e,right:n}=this.legs,s=this.arms;this.set(e.hip,.9*t),this.set(n.hip,.5*t),this.set(e.knee,-1.4*t),this.set(n.knee,-1.1*t),this.set(s.left.shoulder,2.4*t,0,-.3*t),this.set(s.right.shoulder,2.4*t,0,.3*t),this.set(s.left.elbow,.3),this.set(s.right.elbow,.3),this.set(this.chest,-.1),this.hips.position.y=Yi}slide(){let{left:t,right:e}=this.legs,n=this.arms;this.hips.position.y=.35,this.set(this.hips),this.set(this.chest,.9),this.set(this.head,-.6),this.set(t.hip,1.3),this.set(e.hip,1),this.set(t.knee,-.2),this.set(e.knee,-.9),this.set(n.left.shoulder,.6,0,-.9),this.set(n.right.shoulder,.6,0,.9),this.set(n.left.elbow,.2),this.set(n.right.elbow,.2)}stumble(t){this.run(t*20,.6),this.set(this.chest,.5*Math.sin(t*6),0,.3*Math.sin(t*9))}ski(t,e){let n=.55+.45*t,{left:s,right:r}=this.legs,a=this.arms;this.hips.position.y=Yi-.18-.22*t,this.set(this.hips,0,0,-e*.25),this.set(s.hip,n),this.set(r.hip,n),this.set(s.knee,-n*1.6),this.set(r.knee,-n*1.6),this.set(s.foot,n*.6),this.set(r.foot,n*.6),this.set(this.chest,-.45-.4*t,0,e*.15),this.set(this.head,.4+.3*t),this.set(a.left.shoulder,.7+.5*t,0,-.25),this.set(a.right.shoulder,.7+.5*t,0,.25),this.set(a.left.elbow,.6),this.set(a.right.elbow,.6)}kick(t){let e=t<.5?t/.5:1-(t-.5)/.5,n=Math.max(0,(t-.5)/.5),{left:s,right:r}=this.legs,a=this.arms;this.set(r.hip,-.7*e+1.3*n),this.set(r.knee,-1.3*e-.1),this.set(s.hip,.15),this.set(s.knee,-.2),this.set(a.left.shoulder,.5*n,0,-.9),this.set(a.right.shoulder,-.4*n,0,.6),this.set(a.left.elbow,.3),this.set(a.right.elbow,.3),this.set(this.chest,-.2*e+.1*n),this.hips.position.y=Yi}celebrate(t){let{left:e,right:n}=this.legs,s=this.arms,r=Math.abs(Math.sin(t*8));this.hips.position.y=Yi+r*.12,this.set(e.hip,.1),this.set(n.hip,-.1),this.set(e.knee,-.2*r),this.set(n.knee,-.2*r),this.set(s.left.shoulder,2.8,0,-.4),this.set(s.right.shoulder,2.8,0,.4),this.set(s.left.elbow,.2),this.set(s.right.elbow,.2),this.set(this.chest,.1)}guard(t,e={left:0,right:0},n=0,s=0){let{left:r,right:a}=this.legs,o=this.arms,l=Math.sin(t*6)*.025;this.hips.position.y=Yi-.06-s*.32+l,this.set(this.hips,0,0,0),this.set(r.hip,.25+s*.6,0,-.1),this.set(a.hip,-.15+s*.6,0,.1),this.set(r.knee,-.35-s*1),this.set(a.knee,-.25-s*1),this.set(this.chest,-.15-s*.3,0,n*.4);for(let[c,h]of[["left",-1],["right",1]]){let u=e[c];this.set(o[c].shoulder,1.15+u*.45,0,h*(.35-u*.3)),this.set(o[c].elbow,2.1-u*2)}}};var Xc=[-2.2,0,2.2],ti=20,$u=10,Ke=[{at:0,top:"#3d6fc4",horizon:"#ffb27a",bottom:"#8a5a3a",sun:"#fff0d0",sunI:2.8,hemi:1.15,fog:"#f2b58a",lamps:0},{at:900,top:"#2a3f8a",horizon:"#ff8a4a",bottom:"#6a3a2a",sun:"#ffb070",sunI:2.2,hemi:.9,fog:"#e08a5a",lamps:.3},{at:1800,top:"#0b1236",horizon:"#4a3a7a",bottom:"#1a1020",sun:"#9ab0ff",sunI:.9,hemi:.45,fog:"#2a2448",lamps:1}],Qa=class extends pn{constructor(t){super(t),this.score=0,this.lives=3,this.coins=0,this.distance=0,this.speed=13,this.lane=1,this.px=0,this.py=0,this.vy=0,this.phase=0,this.lastJump=null,this.invulnerable=0,this.combo=0,this.powers={magnet:0,double:0,shield:!1},this.things=[],this.sinceSpawn=0,this.spawned=0,this.stumble=0,this.build()}build(){let t=this.scene;this.sky=Bs({top:Ke[0].top,horizon:Ke[0].horizon,bottom:Ke[0].bottom,sunDir:new C(.2,.12,-1)}),t.add(this.sky),t.fog=new Ln(Ke[0].fog,45,175),this.lights=Ja(t,{sun:Ke[0].sun,sunIntensity:Ke[0].sunI,sky:"#bcd0ff",ground:"#a06a44",hemi:1.15,dir:[-.5,1,.4]}),this.camera.position.set(0,3.2,6.6),this.camera.lookAt(0,1.1,-6),this.camera.fov=62,this.M={road:ot("#ffffff",{rough:.95,map:this.roadTexture()}),sand:ot("#ffffff",{rough:1,map:Si("#dc9e66",["#b97a48","#f2c08a","#a8693c"],{seed:2,repeat:[6,2]})}),rock:ja("#b8643a",3),post:ot("#eeeeee",{rough:.3,metal:.6}),hurdle:ot("#ffffff",{rough:.45,map:Sr("#ffffff","#e01818",8,{repeat:[3,1]})}),hazard:ot("#ffffff",{rough:.6,map:Sr("#ffd10d","#141414",12,{repeat:[3,1]})}),wood:ot("#ffffff",{rough:.85,map:Si("#7a4a24",["#5a3416","#8f5c30"],{size:256,count:900,radius:4,seed:9})}),barrel:ot("#a5402a",{rough:.5,metal:.3}),band:ot("#333333",{rough:.4,metal:.8}),gap:ot("#120804",{rough:1}),lamp:ot("#ffd98a",{emissive:"#ffb347",emissiveIntensity:0})},this.tiles=[];for(let e=0;e<$u;e++){let n=new Dt;n.position.z=-e*ti+10;let s=J(new ce(7.6,ti),this.M.road,{cast:!1,receive:!0});s.rotation.x=-Math.PI/2,n.add(s);for(let a of[-1,1]){let o=J(new ce(70,ti),this.M.sand,{x:a*38.8,y:-.02,cast:!1,receive:!0});o.rotation.x=-Math.PI/2,n.add(o)}let r=[];for(let a=0;a<3;a++)r.push(zs(ht(.4,1.1),this.M.rock,{detail:2}));r.push(Gc(ht(2.2,3.6))),Math.random()<.6&&r.push(Gc(ht(1.6,3)));for(let a=0;a<2;a++){let o=zs(ht(6,10),this.M.rock,{detail:3,rough:.28,flat:1,mesa:ht(.45,.75),bands:!0});o.scale.set(1,ht(1.5,2.3),1.2),o.userData.wall=!0,r.push(o)}for(let a of[-1,1]){let o=new Dt;o.add(J(new ne(.05,.06,2.2,6),this.M.wood,{y:1.1})),o.add(J(new ve(.16,10,8),this.M.lamp,{y:2.25,cast:!1})),o.position.set(a*4.4,0,0),o.userData.lantern=!0,r.push(o)}r.forEach(a=>n.add(a)),this.scatter(r),n.userData.props=r,t.add(n),this.tiles.push(n)}for(let e=0;e<16;e++){let n=e%2?1:-1,s=ht(25,60),r=zs(ht(26,40),this.M.rock,{detail:3,rough:.22,flat:1,mesa:ht(.25,.5),bands:!0});r.scale.set(ht(1.1,1.8),s/40,1),r.position.set(n*ht(60,170),-2,-ht(220,320)),r.castShadow=!1,t.add(r)}this.figure=new Fn({shirt:"#1e6ff2",accent:"#ffffff",pants:"#262626",shoes:"#ff5a33",number:7}),this.player=new Dt,this.player.add(this.figure.root),t.add(this.player),this.shield=new ae(new ve(1.15,24,16),new we({color:"#6fd3ff",transparent:!0,opacity:.18,depthWrite:!1})),this.shield.position.y=1,this.shield.visible=!1,this.player.add(this.shield),this.dust=new De(t,{max:400,size:.35,gravity:1.5,texture:Os("#e8c39a")}),this.sparks=new De(t,{max:400,size:.22,gravity:-6,additive:!0}),this.shake=new mn,this.addCoinLine(1,-28,6);for(let e of[-62,-98,-132])this.spawnRow(e);this.hud.set({lives:3,maxLives:3,stat:"Coins 0"}),this.figure.run(0,0)}roadTexture(){return Pe(256,512,(t,e,n)=>{t.fillStyle="#a8794f",t.fillRect(0,0,e,n);let s=An(5);for(let r=0;r<3e3;r++){let a=.35+s()*.5;t.fillStyle=`rgba(${Math.round(255*a)},${Math.round(185*a)},${Math.round(125*a)},0.35)`;let o=1+s()*3;t.fillRect(s()*e,s()*n,o,o)}t.fillStyle="rgba(90,60,35,0.35)";for(let r of[.18,.32,.68,.82])t.fillRect(r*e-6,0,12,n);t.fillStyle="rgba(245,240,230,0.75)";for(let r of[.5-1.1/7.6,.5+1.1/7.6])for(let a=0;a<n;a+=128)t.fillRect(r*e-3,a+20,6,70)})}scatter(t){for(let e of t){if(e.userData.lantern){e.position.z=ht(-ti/2,ti/2);continue}let n=Math.random()<.5?-1:1,s=e.userData.wall?ht(20,34):ht(5.6,15);e.position.set(n*s,e.userData.wall?2:0,ht(-ti/2,ti/2))}}spawnRow(t=-150){this.spawned++;let e=Math.floor(Math.random()*3),n=Math.min(1,this.distance/2500),s=Math.random();if(this.spawned>3&&Math.random()<.12&&this.addPowerUp(e,t-6),s<.18)this.add("hurdle",[0,1,2],t),this.addCoinArc(e,t);else if(s<.32)this.add("bridge",[0,1,2],t),this.addCoinLine(e,t+3,3,.6);else if(s<.52){for(let r of[0,1,2])r!==e&&this.add(Math.random()<.5?"boulder":"barrels",[r],t);this.addCoinLine(e,t-4,5)}else if(s<.64&&this.distance>300)this.add("gap",[0,1,2],t),this.addCoinArc(1,t);else if(s<.82){let r=Math.floor(Math.random()*3);this.add("hurdle",[r],t),this.add(Math.random()<.5?"boulder":"barrels",[(r+1)%3],t),this.addCoinArc(r,t)}else this.add("boulder",[e],t,{rolling:n>.2}),this.addCoinLine((e+1)%3,t,6)}add(t,e,n,s={}){let r,a=this.M,o=e.length===3?0:Xc[e[0]];switch(t){case"hurdle":{r=new Dt;let c=e.length===3?7:1.9;for(let h of[-1,1])r.add(J(new ne(.05,.05,.95,8),a.post,{x:h*c/2,y:.475})),r.add(J(new ge(.08,.05,.5),a.post,{x:h*c/2,y:.03}));r.add(J(new ge(c,.2,.08),a.hurdle,{y:.85}));break}case"bridge":{r=new Dt;for(let c of[-1,1])r.add(J(new ge(.5,3.4,.5),a.wood,{x:c*3.7,y:1.7}));r.add(J(new ge(7.9,.75,.35),a.hazard,{y:1.6})),r.add(J(new ge(8.4,.35,.6),a.wood,{y:3.4}));break}case"boulder":{r=J(new Xi(.95,2),a.rock),r.position.y=.92,r.userData.rolling=!!s.rolling;break}case"barrels":{r=new Dt;let c=new ne(.42,.42,1.1,16);for(let[h,u,d]of[[-.45,.55,0],[.45,.55,.1],[0,1.6,.05]]){let f=J(c,a.barrel,{x:h,y:u,z:d});for(let g of[-.35,.35])f.add(J(new En(.425,.03,6,20),a.band,{y:g}));f.children.forEach(g=>g.rotation.x=Math.PI/2),r.add(f)}break}case"gap":{r=new Dt;let c=J(new ce(7.7,3.2),a.gap,{y:.01,cast:!1});c.rotation.x=-Math.PI/2,r.add(c);for(let h of[-1.6,1.6])r.add(J(new ge(7.8,.18,.25),a.rock,{y:.05,z:h}));break}case"coin":r=Yu(),r.position.y=1;break;case"power":r=s.node;break}r.position.x=o,r.position.z=n,ks(r,t!=="gap"),this.scene.add(r);let l={node:r,kind:t,lanes:e,resolved:!1,hinted:!1,power:s.power};return this.things.push(l),l}addCoinLine(t,e,n,s=1){for(let r=0;r<n;r++)this.add("coin",[t],e-r*2.2).node.position.y=s}addCoinArc(t,e){for(let n=-2;n<=2;n++)this.add("coin",[t],e+n*1.6).node.position.y=1+(2.2-Math.abs(n)*.6)}addPowerUp(t,e){let n=Fs(["magnet","shield","double"]),s={magnet:"#ff4fa0",shield:"#4fd2ff",double:"#ffd13a"},r=new Dt,a=J(new Xi(.42,1),ot(s[n],{rough:.2,metal:.3,emissive:s[n],emissiveIntensity:.9})),o=J(new En(.62,.05,8,32),ot("#ffffff",{emissive:"#ffffff",emissiveIntensity:.6})),l=new La(new fr({map:Pe(128,128,c=>{c.font="bold 76px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillStyle="#fff",c.fillText({magnet:"U",shield:"\u25C6",double:"2\xD7"}[n],64,70)}),depthTest:!1}));l.scale.set(.7,.7,1),r.add(a,o,l),r.position.y=1.3,this.add("power",[t],e,{node:r,power:n})}update(t,e){let n=this.elapsed;this.speed=Math.min(30,13+n*.2);let s=this.speed*t;this.distance+=s,this.sinceSpawn+=s;let r=e.lateral;r<-.55?this.lane=0:r>.55?this.lane=2:Math.abs(r)<.3&&(this.lane=1);let a=this.px;this.px=bi(this.px,Xc[this.lane],12,t),this.lastJump===null&&(this.lastJump=e.jumpCount),e.jumpCount!==this.lastJump&&(this.lastJump=e.jumpCount,this.py<=.001&&this.stumble<=0&&(this.vy=7.8,this.audio.play("jump",.7))),this.vy-=20*t,this.py=Math.max(0,this.py+this.vy*t),this.py===0&&(this.vy=0),this.sliding=e.isCrouching&&this.py===0,this.phase+=t*this.speed*.55,this.stumble>0?(this.stumble-=t,this.figure.stumble(this.stumble)):this.py>0?this.figure.jump(Math.min(1,this.py/.6)):this.sliding?this.figure.slide():this.figure.run(this.phase,1),this.player.position.set(this.px,this.py,0),this.player.rotation.y=-(this.px-a)/Math.max(t,.001)*.04,this.py===0&&Math.random()<t*(this.sliding?40:14)&&this.dust.burst({x:this.px,y:.1,z:.3},{count:this.sliding?4:2,speed:1.5,up:1,life:.6,spread:.6,color:"#e2c09a"}),this.powers.magnet=Math.max(0,this.powers.magnet-t),this.powers.double=Math.max(0,this.powers.double-t),this.shield.visible=this.powers.shield,this.shield.visible&&(this.shield.material.opacity=.14+.06*Math.sin(n*6)),this.invulnerable>0?(this.invulnerable-=t,this.figure.root.visible=Math.floor(this.invulnerable*12)%2===0):this.figure.root.visible=!0;let o=this.camera;o.position.set(this.px*.55,3.2+this.py*.25,6.6),o.fov=60+(this.speed-13)*.45,o.updateProjectionMatrix(),o.lookAt(this.px*.7,1.1,-6),this.shake.apply(o,t),this.updatePhaseColors();for(let c of this.tiles)c.position.z+=s,c.position.z-ti/2>12&&(c.position.z-=ti*$u,this.scatter(c.userData.props));this.sinceSpawn>Math.max(13,24-n*.1)&&(this.sinceSpawn=0,this.spawnRow());for(let c=this.things.length-1;c>=0;c--){let h=this.things[c],u=h.node,d=u.userData.rolling?6*t:0;u.position.z+=s+d,h.kind==="boulder"&&(u.rotation.x+=(s+d)/.95),h.kind==="coin"&&(u.rotation.y+=t*4),h.kind==="power"&&(u.rotation.y+=t*2,u.position.y=1.3+Math.sin(n*4)*.15);let f=u.position.z;if(h.kind==="coin"&&!h.resolved){let g=Math.abs(f)<.9&&Math.abs(u.position.x-this.px)<.9&&Math.abs(u.position.y-(this.py+1))<1.3;this.powers.magnet>0&&f>-14&&f<1&&(u.position.x=bi(u.position.x,this.px,8,t),u.position.y=bi(u.position.y,this.py+1,8,t),u.position.z=bi(u.position.z,0,4,t)),g&&(h.resolved=!0,this.collectCoin(u))}else if(h.kind==="power"&&!h.resolved)Math.abs(f)<1&&Math.abs(u.position.x-this.px)<1.1&&(h.resolved=!0,this.collectPower(h));else if(!h.resolved&&f>-.5&&h.kind!=="coin"&&h.kind!=="power")h.resolved=!0,this.resolveObstacle(h);else if(!h.resolved&&!h.hinted&&this.spawned<=6&&f>-36&&h.kind!=="coin"&&h.kind!=="power"){h.hinted=!0;let g={hurdle:"Jump!",bridge:"Crouch!",gap:"Jump the gap!",boulder:"Change lanes!",barrels:"Change lanes!"}[h.kind];g&&(h.lanes.length===3||h.kind==="boulder"||h.kind==="barrels")&&this.hud.flash(g,.8)}(f>14||h.resolved&&(h.kind==="coin"||h.kind==="power"))&&(this.scene.remove(u),this.things.splice(c,1))}this.dust.shift(s),this.dust.update(t),this.sparks.update(t);let l=Math.floor(this.distance)+this.coins*10;l!==this.score&&(this.score=l,this.hud.set({score:l}))}idle(t){this.phase+=t*3,this.figure.run(this.phase,.15),this.dust.update(t)}updatePhaseColors(){let t=this.distance,e=Ke[0],n=Ke[0],s=0;for(let o=0;o<Ke.length-1;o++)t>=Ke[o].at&&(e=Ke[o],n=Ke[o+1],s=Math.min(1,(t-e.at)/(n.at-e.at)));t>=Ke[Ke.length-1].at&&(e=n=Ke[Ke.length-1],s=1);let r=(o,l)=>new Mt(o).lerp(new Mt(l),s),a=this.sky.material.uniforms;a.top.value.copy(r(e.top,n.top)),a.horizon.value.copy(r(e.horizon,n.horizon)),a.bottom.value.copy(r(e.bottom,n.bottom)),this.scene.fog.color.copy(r(e.fog,n.fog)),this.lights.sun.color.copy(r(e.sun,n.sun)),this.lights.sun.intensity=on(e.sunI,n.sunI,s),this.lights.hemi.intensity=on(e.hemi,n.hemi,s),this.M.lamp.emissiveIntensity=on(e.lamps,n.lamps,s)*3}resolveObstacle(t){if(!t.lanes.some(s=>Math.abs(Xc[s]-this.px)<1.15)){this.cleared(t);return}let n;switch(t.kind){case"hurdle":n=this.py<.45;break;case"gap":n=this.py<.3;break;case"bridge":n=!this.sliding;break;default:n=!0}if(!n){this.cleared(t,!0);return}if(!(this.invulnerable>0)){if(this.powers.shield){this.powers.shield=!1,this.invulnerable=1,this.audio.play("save"),this.hud.flash("Shield saved you!",1),this.sparks.burst({x:this.px,y:1,z:0},{count:60,speed:6,color:"#6fd3ff",life:.7});return}this.lives-=1,this.combo=0,this.invulnerable=1.6,this.stumble=.6,this.shake.kick(.35),this.audio.play("hit"),this.hud.set({lives:Math.max(0,this.lives),stat:`Coins ${this.coins}`}),this.lives<=0?(this.hud.flash("Wipeout!"),this.finish(this.score,`${Math.floor(this.distance)} m \xB7 ${this.coins} coins`)):this.hud.flash({hurdle:"Ouch \u2014 jump!",gap:"Fell in \u2014 jump!",bridge:"Ouch \u2014 crouch!"}[t.kind]??"Ouch \u2014 change lanes!")}}cleared(t,e=!1){if(!e)return;this.combo=Math.min(this.combo+1,20);let n=this.multiplier();this.combo%5===0&&(this.audio.play("combo",.7),this.hud.flash(`${this.combo} clean in a row \xB7 \xD7${n}`,.9)),this.hud.set({stat:`Coins ${this.coins}`})}multiplier(){return 1+Math.min(4,Math.floor(this.combo/5))}collectCoin(t){let e=(this.powers.double>0?2:1)*this.multiplier();this.coins+=e,this.audio.play("coin",.55,1+Math.min(.3,this.combo*.015)),this.sparks.burst(t.position,{count:8,speed:2.5,color:"#ffd75a",life:.4,spread:1}),this.hud.set({stat:`Coins ${this.coins}`})}collectPower(t){let e=t.power;e==="magnet"&&(this.powers.magnet=10),e==="double"&&(this.powers.double=10),e==="shield"&&(this.powers.shield=!0),this.audio.play("gate"),this.sparks.burst(t.node.position,{count:50,speed:5,color:{magnet:"#ff4fa0",shield:"#4fd2ff",double:"#ffd13a"}[e],life:.7}),this.hud.flash({magnet:"Coin magnet!",shield:"Shield up!",double:"Double coins!"}[e],1)}};var Hs={watermelon:{r:.95,skin:"#2f6b2a",flesh:"#f0364a",rind:"#e6f2c4",juice:"#ff3550",points:15,shape:[1.15,.92,.92]},orange:{r:.62,skin:"#ff8c12",flesh:"#ffa531",rind:"#fff1d4",juice:"#ff9a1a",points:10,shape:[1,1,1]},apple:{r:.6,skin:"#d4141c",flesh:"#fff3c9",rind:"#fffbe9",juice:"#fff5cc",points:10,shape:[1,.95,1]},lemon:{r:.55,skin:"#ffe01a",flesh:"#fff07a",rind:"#fffbe0",juice:"#fff04a",points:10,shape:[.85,.85,1.2]},kiwi:{r:.5,skin:"#7a5631",flesh:"#7fc23a",rind:"#cdea9a",juice:"#8fd640",points:12,shape:[.95,.95,1.15]},coconut:{r:.65,skin:"#5a3a22",flesh:"#fbfbf3",rind:"#3a2414",juice:"#ffffff",points:15,shape:[1,1.05,1]},pineapple:{r:.72,skin:"#d99a1e",flesh:"#ffe36a",rind:"#f7d24a",juice:"#ffe14a",points:20,shape:[.9,1.35,.9]}},Yv=Object.keys(Hs),to=class extends pn{constructor(t){super(t),this.score=0,this.lives=3,this.sliced=0,this.flyers=[],this.pieces=[],this.splats=[],this.spawnTimer=1,this.frenzy=0,this.comboCount=0,this.comboTimer=0,this.gravity=-14,this.build()}build(){let t=this.scene;t.background=new Mt("#140c07"),this.camera.position.set(0,0,14),this.camera.fov=45,this.camera.lookAt(0,0,0);let e=Pe(1024,1024,(a,o,l)=>{let c=An(12),h=o/7;for(let u=0;u<8;u++){let d=.85+c()*.25;a.fillStyle=`rgb(${Math.round(120*d)},${Math.round(74*d)},${Math.round(40*d)})`,a.fillRect(u*h,0,h,l);for(let f=0;f<30;f++){a.strokeStyle=`rgba(60,32,14,${.15+c()*.25})`,a.lineWidth=1+c()*3,a.beginPath();let g=u*h+c()*h;a.moveTo(g,0);for(let v=0;v<l;v+=40)g+=(c()-.5)*6,a.lineTo(g,v);a.stroke()}a.fillStyle="rgba(25,12,4,.85)",a.fillRect(u*h-3,0,6,l)}});this.wall=J(new ce(40,24),ot("#ffffff",{rough:.85,map:e}),{z:-3,cast:!1,receive:!0}),t.add(this.wall);let n=new Dn("#ffe6c8","#3a2010",1.2),s=new _i("#fff2dc",2.2);s.position.set(-6,8,12),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-14,right:14,top:10,bottom:-10,near:1,far:40});let r=new Ds("#ffb070",30,30);r.position.set(8,-4,6),t.add(n,s,r),this.juice=new De(t,{max:900,size:.28,gravity:-12}),this.sparks=new De(t,{max:500,size:.25,gravity:-2,additive:!0}),this.blades=[0,1].map(a=>{let l=new Ee;l.setAttribute("position",new Se(new Float32Array(14*2*3),3)),l.setAttribute("color",new Se(new Float32Array(14*2*3),3));let c=[];for(let f=0;f<13;f++){let g=f*2;c.push(g,g+1,g+2,g+1,g+3,g+2)}l.setIndex(c);let h=new ae(l,new we({vertexColors:!0,transparent:!0,blending:_s,depthWrite:!1,side:ze}));h.frustumCulled=!1;let u=new Mt(a===0?"#6fd8ff":"#ff7ab8"),d=new ae(new ve(.16,16,12),new we({color:u}));return t.add(h,d),{ribbon:h,cursor:d,color:u,N:14,points:[],pos:null,speed:0}}),this.textures={},this.shake=new mn,this.flash=new ae(new ce(60,40),new we({color:"#ffffff",transparent:!0,opacity:0,depthTest:!1})),this.flash.position.z=6,this.flash.renderOrder=10,t.add(this.flash),this.hud.set({lives:3,maxLives:3,stat:"Sliced 0"})}get halfHeight(){return Math.tan(Lu.degToRad(this.camera.fov/2))*this.camera.position.z}get halfWidth(){return this.halfHeight*this.camera.aspect}handToWorld(t,e){let n=.5+t.x*.42+Ve(e,-1.5,1.5)*.1,s=.08+t.y*.86;return new C((Ve(n,0,1)*2-1)*this.halfWidth,(Ve(s,0,1)*2-1)*this.halfHeight,.5)}skinTexture(t){if(this.textures[t])return this.textures[t];let e=Hs[t],n=Pe(512,256,(s,r,a)=>{s.fillStyle=e.skin,s.fillRect(0,0,r,a);let o=An(t.length*7);if(t==="watermelon"){s.strokeStyle="#173d14",s.lineWidth=22;for(let l=0;l<10;l++){s.beginPath();let c=l*r/10;s.moveTo(c,0);for(let h=0;h<=a;h+=16)c+=Math.sin(h*.08+l)*4,s.lineTo(c,h);s.stroke()}}else if(t==="pineapple"){s.strokeStyle="#7a4a10",s.lineWidth=5;for(let l=-20;l<40;l++)s.beginPath(),s.moveTo(l*26,0),s.lineTo(l*26+a,a),s.stroke(),s.beginPath(),s.moveTo(l*26,a),s.lineTo(l*26+a,0),s.stroke()}else{let l={orange:["#e06a00",1800,2],kiwi:["#4a3018",3e3,1.5],coconut:["#2e1a0c",2500,2.5],lemon:["#e8c000",1200,1.6],apple:["#ffde4a",300,1.5]}[t];if(t==="apple"){let c=s.createLinearGradient(0,0,0,a);c.addColorStop(0,"#ff5a3a"),c.addColorStop(.5,"#d4141c"),c.addColorStop(1,"#7a0a10"),s.fillStyle=c,s.fillRect(0,0,r,a)}s.fillStyle=l[0];for(let c=0;c<l[1];c++)s.globalAlpha=.3+o()*.4,s.beginPath(),s.arc(o()*r,o()*a,l[2]*(.5+o()),0,Math.PI*2),s.fill();s.globalAlpha=1}});return this.textures[t]=n,n}fleshTexture(t){let e=t+":flesh";if(this.textures[e])return this.textures[e];let n=Hs[t],s=Pe(256,256,(r,a)=>{let o=a/2;r.fillStyle=n.skin,r.beginPath(),r.arc(o,o,o,0,Math.PI*2),r.fill(),r.fillStyle=n.rind,r.beginPath(),r.arc(o,o,o*.93,0,Math.PI*2),r.fill(),r.fillStyle=n.flesh,r.beginPath(),r.arc(o,o,o*(t==="watermelon"?.82:.88),0,Math.PI*2),r.fill();let l=r.createRadialGradient(o*.7,o*.7,0,o,o,o);if(l.addColorStop(0,"rgba(255,255,255,.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=l,r.beginPath(),r.arc(o,o,o*.88,0,Math.PI*2),r.fill(),t==="orange"||t==="lemon"){r.strokeStyle=n.rind,r.lineWidth=3;for(let c=0;c<10;c++){let h=c/10*Math.PI*2;r.beginPath(),r.moveTo(o,o),r.lineTo(o+Math.cos(h)*o*.86,o+Math.sin(h)*o*.86),r.stroke()}}else if(t==="watermelon"){r.fillStyle="#1a0d0a";for(let c=0;c<14;c++){let h=c/14*Math.PI*2,u=o*(c%2?.45:.62);r.beginPath(),r.ellipse(o+Math.cos(h)*u,o+Math.sin(h)*u,4,7,h,0,Math.PI*2),r.fill()}}else if(t==="kiwi"){r.fillStyle="#f4ffe0",r.beginPath(),r.arc(o,o,o*.25,0,Math.PI*2),r.fill(),r.fillStyle="#111";for(let c=0;c<18;c++){let h=c/18*Math.PI*2;r.beginPath(),r.arc(o+Math.cos(h)*o*.38,o+Math.sin(h)*o*.38,3.5,0,Math.PI*2),r.fill()}}else if(t==="apple"){r.fillStyle="#6a3a14";for(let c of[-14,14])r.beginPath(),r.ellipse(o+c,o,5,9,0,0,Math.PI*2),r.fill()}else t==="pineapple"&&(r.fillStyle="#f2c63a",r.beginPath(),r.arc(o,o,o*.22,0,Math.PI*2),r.fill())});return this.textures[e]=s,s}makeFruit(t){let e=Hs[t],n=new Dt,s=J(new ve(e.r,32,20),ot("#ffffff",{rough:t==="coconut"||t==="kiwi"?.9:.35,map:this.skinTexture(t)}));if(s.scale.set(...e.shape),n.add(s),t==="apple"||t==="orange"){n.add(J(new ne(.03,.04,.28,6),ot("#5a3a1a"),{y:e.r*.98}));let r=J(new ve(.16,10,6),ot("#3f9a2c",{rough:.5}),{x:.12,y:e.r*1.02});r.scale.set(1.2,.25,.6),n.add(r)}if(t==="pineapple"){let r=ot("#3e8a2a",{rough:.6});for(let a=0;a<7;a++){let o=J(new Wi(.1,.8,5),r,{y:e.r*1.35+.3});o.rotation.z=(a-3)*.25,o.rotation.x=(a%2-.5)*.4,n.add(o)}}return n.userData.radius=e.r*Math.max(...e.shape),n}makeBomb(){let t=new Dt;t.add(J(new ve(.62,28,20),ot("#141418",{rough:.25,metal:.6}))),t.add(J(new ne(.16,.18,.18,12),ot("#555",{metal:.8,rough:.4}),{y:.64}));let e=J(new En(.2,.035,6,12,Math.PI),ot("#c9a26a"),{x:.2,y:.74});e.rotation.z=Math.PI,t.add(e);let n=Pe(128,128,r=>{r.strokeStyle="#ff2b2b",r.lineWidth=16,r.beginPath(),r.moveTo(30,30),r.lineTo(98,98),r.moveTo(98,30),r.lineTo(30,98),r.stroke()}),s=new ae(new ce(.6,.6),new we({map:n,transparent:!0,depthWrite:!1}));return s.position.z=.63,t.add(s),t.userData.radius=.62,t.userData.fuseTip=new C(.4,.74,0),t}makeBanana(){let t=new Dt,e=new Ps(new C(-.7,.1,0),new C(0,-.6,0),new C(.7,.1,0)),n=J(new Ba(e,24,.22,12),ot("#ffd21a",{rough:.3,metal:.4,emissive:"#ffb800",emissiveIntensity:.6}));return t.add(n),t.userData.radius=.8,t.userData.golden=!0,t}showcase(){for(let t=0;t<6;t++)setTimeout(()=>this.launch(t===5?"bomb":"fruit"),t*90)}launch(t="fruit",e=0){let n,s=null;t==="bomb"?n=this.makeBomb():t==="banana"?n=this.makeBanana():(s=Fs(Yv),n=this.makeFruit(s));let r=this.halfWidth,a=this.halfHeight,o,l=-a-1.5,c,h;if(e)o=e*(r+1.5),l=ht(-a*.6,0),c=-e*ht(7,12),h=ht(6,10);else{o=ht(-r*.75,r*.75);let u=ht(.25,.85)*a*2;h=Math.sqrt(2*-this.gravity*u);let d=2*h/-this.gravity;c=(ht(-r*.5,r*.5)-o)/d}n.position.set(o,l,ht(-.5,.5)),n.rotation.set(Math.random()*6,Math.random()*6,0),this.scene.add(n),this.flyers.push({node:n,kind:s,type:t,vel:new C(c,h,0),spin:new C(ht(-3,3),ht(-3,3),ht(-2,2))}),t!=="bomb"&&this.audio.play("whoosh",.2,ht(.9,1.2))}spawnWave(){let t=this.elapsed,e=t<8?1:1+Math.floor(Math.random()*Math.min(5,2+t/20));for(let n=0;n<e;n++)setTimeout(()=>{if(this.finished)return;let s=t>10&&Math.random()<Math.min(.22,.08+t/400);this.launch(s?"bomb":"fruit")},n*160);t>20&&Math.random()<.06&&setTimeout(()=>this.launch("banana"),500)}update(t,e){this.updateBlades(t,e),this.frenzy>0?(this.frenzy-=t,this.frenzyTimer=(this.frenzyTimer??0)-t,this.frenzyTimer<=0&&(this.frenzyTimer=.18,this.launch("fruit",Math.random()<.5?-1:1)),this.frenzy<=0&&this.hud.flash("Frenzy over",.8)):(this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnWave(),this.spawnTimer=Math.max(.8,1.9-this.elapsed*.012)*ht(.8,1.2)));let n=this.halfHeight;for(let s=this.flyers.length-1;s>=0;s--){let r=this.flyers[s];if(r.vel.y+=this.gravity*t,r.node.position.addScaledVector(r.vel,t),r.node.rotation.x+=r.spin.x*t,r.node.rotation.y+=r.spin.y*t,r.node.rotation.z+=r.spin.z*t,r.type==="bomb"&&Math.random()<t*40){let a=r.userTip??new C;a.copy(r.node.userData.fuseTip).applyMatrix4(r.node.matrixWorld),this.sparks.burst(a,{count:2,speed:1.5,color:"#ffc04a",life:.25,up:1})}if(this.checkSlice(r)){this.flyers.splice(s,1);continue}r.node.position.y<-n-2.5&&r.vel.y<0&&(this.scene.remove(r.node),this.flyers.splice(s,1),r.type==="fruit"&&this.frenzy<=0&&this.loseLife("Missed one!"))}for(let s=this.pieces.length-1;s>=0;s--){let r=this.pieces[s];r.life-=t,r.vel.y+=this.gravity*t,r.node.position.addScaledVector(r.vel,t),r.node.rotation.x+=r.spin.x*t,r.node.rotation.z+=r.spin.z*t,(r.life<=0||r.node.position.y<-n-4)&&(this.scene.remove(r.node),this.pieces.splice(s,1))}for(let s=this.splats.length-1;s>=0;s--){let r=this.splats[s];r.life-=t,r.node.material.opacity=Math.min(.8,r.life/1.5),r.node.scale.setScalar(Math.min(1,r.node.scale.x+t*8)),r.life<=0&&(this.scene.remove(r.node),r.node.material.dispose(),this.splats.splice(s,1))}if(this.juice.update(t),this.sparks.update(t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0)){if(this.comboCount>=3){let s=this.comboCount*5;this.addScore(s),this.audio.play("combo"),this.hud.flash(`${this.comboCount}-fruit combo  +${s}`,1)}this.comboCount=0}this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*2.5),this.camera.position.set(0,0,14),this.shake.apply(this.camera,t)}idle(t){this.juice.update(t),this.sparks.update(t)}updateBlades(t,e){let n=this.elapsed;[e.leftHand,e.rightHand].forEach((s,r)=>{let a=this.blades[r];if(!s){a.pos=null,a.points=[],a.cursor.visible=!1,a.ribbon.visible=!1;return}let o=this.handToWorld(s,e.lateral);for(a.pos&&(a.speed=o.distanceTo(a.pos)/Math.max(t,.001)),a.prev=a.pos?a.pos.clone():o.clone(),a.pos=o,a.cursor.visible=!0,a.cursor.position.copy(o),a.points.push({p:o.clone(),t:n});a.points.length>a.N||a.points.length&&n-a.points[0].t>.16;)a.points.shift();let l=a.ribbon.geometry.attributes.position,c=a.ribbon.geometry.attributes.color,h=a.points.length;a.ribbon.visible=h>1&&a.speed>6;for(let u=0;u<a.N;u++){let d=a.points[Math.min(u,h-1)]?.p??o,f=a.points[Math.min(u+1,h-1)]?.p??d,g=new C().subVectors(f,d),v=new C(-g.y,g.x,0).normalize(),p=.18*(u/Math.max(h-1,1));l.setXYZ(u*2,d.x+v.x*p,d.y+v.y*p,d.z),l.setXYZ(u*2+1,d.x-v.x*p,d.y-v.y*p,d.z);let m=u/Math.max(h-1,1);for(let M of[u*2,u*2+1])c.setXYZ(M,a.color.r*m+m*.6,a.color.g*m+m*.6,a.color.b*m+m*.6)}l.needsUpdate=!0,c.needsUpdate=!0})}checkSlice(t){for(let e of this.blades){if(!e.pos||!e.prev||e.speed<9)continue;let n=t.node.userData.radius+.15;if($v(e.prev,e.pos,t.node.position,n)){let s=new C().subVectors(e.pos,e.prev).normalize();return t.type==="bomb"?this.explode(t):this.slice(t,s),!0}}return!1}slice(t,e){this.scene.remove(t.node),this.sliced++,this.comboCount++,this.comboTimer=.35;let n=t.type==="banana",s=n?{juice:"#ffe14a",points:50}:Hs[t.kind];this.addScore(s.points*(this.frenzy>0?2:1)),this.audio.play("slice",.8,ht(.9,1.15)),this.audio.play("splat",.5),this.hud.set({stat:`Sliced ${this.sliced}`});let r=t.node.position.clone();if(this.juice.burst(r,{count:45,speed:7,spread:1,up:.3,color:s.juice,life:.8,colorJitter:.2}),n){this.frenzy=6,this.audio.play("combo"),this.hud.flash("FRUIT FRENZY! 2\xD7 points",1.4),this.sparks.burst(r,{count:120,speed:9,color:"#ffd84a",life:1});return}let a=t.kind,o=Hs[a],l=new C(-e.y,e.x,0).normalize(),c=ot("#ffffff",{rough:.4,map:this.skinTexture(a)}),h=new Is({map:this.fleshTexture(a),roughness:.3});for(let d of[1,-1]){let f=new Dt,g=J(new ve(o.r,28,16,0,Math.PI*2,0,Math.PI/2),c),v=J(new Un(o.r,28),h,{cast:!1});v.rotation.x=Math.PI/2,f.add(g,v),f.scale.set(o.shape[0],o.shape[1],o.shape[2]);let p=new Dt;p.add(f),f.quaternion.setFromUnitVectors(new C(0,1,0),l.clone().multiplyScalar(d)),p.position.copy(r).addScaledVector(l,d*.1),this.scene.add(p);let m=t.vel.clone().multiplyScalar(.4).addScaledVector(l,d*ht(3,5)).add(new C(0,2,ht(1,3)));this.pieces.push({node:p,vel:m,spin:new C(ht(-4,4),0,d*ht(2,5)),life:2.5})}let u=new ae(new ce(o.r*4,o.r*4),new we({map:this.splatTexture(),color:o.juice,transparent:!0,opacity:.8,depthWrite:!1}));u.position.set(r.x,r.y,-2.95),u.rotation.z=Math.random()*Math.PI*2,u.scale.setScalar(.3),this.scene.add(u),this.splats.push({node:u,life:4})}splatTexture(){return this.textures.splat?this.textures.splat:(this.textures.splat=Pe(256,256,(t,e)=>{let n=An(4);t.fillStyle="#fff",t.beginPath(),t.arc(e/2,e/2,50,0,Math.PI*2),t.fill();for(let s=0;s<26;s++){let r=n()*Math.PI*2,a=30+n()*85,o=(6+n()*18)*(1-a/160);t.beginPath(),t.arc(e/2+Math.cos(r)*a,e/2+Math.sin(r)*a,o,0,Math.PI*2),t.fill()}}),this.textures.splat)}explode(t){this.scene.remove(t.node),this.audio.play("explosion"),this.flash.material.opacity=.9,this.shake.kick(.6),this.sparks.burst(t.node.position,{count:160,speed:11,color:"#ff9a2a",life:1}),this.juice.burst(t.node.position,{count:60,speed:6,color:"#333",life:1.2}),this.loseLife("Bomb!")}loseLife(t){this.lives-=1,this.audio.play("hit",.5),this.hud.set({lives:Math.max(0,this.lives)}),this.lives<=0?this.finish(this.score,`${this.sliced} fruit sliced`):this.hud.flash(t,.9)}addScore(t){this.score+=t,this.hud.set({score:this.score})}};function $v(i,t,e,n){let s=t.x-i.x,r=t.y-i.y,a=s*s+r*r,o=a>0?((e.x-i.x)*s+(e.y-i.y)*r)/a:0;return o=Math.max(0,Math.min(1,o)),Math.hypot(i.x+s*o-e.x,i.y+r*o-e.y)<n}var Vs=3.66,wi=2.44,Zu=new C(0,.11,-11),eo=[{at:0,name:"Warm-up",time:1.35,curve:0,dip:0,power:0},{at:5,name:"Curlers",time:1.2,curve:1.2,dip:0,power:0},{at:10,name:"Chips & dips",time:1.1,curve:1.4,dip:.6,power:.15},{at:16,name:"Power shots",time:.95,curve:1.6,dip:.8,power:.3},{at:24,name:"World class",time:.85,curve:1.9,dip:1,power:.4}],no=class extends pn{constructor(t){super(t),this.score=0,this.lives=5,this.saves=0,this.shots=0,this.streak=0,this.stage="waiting",this.stageTime=0,this.level=0,this.launched=!1,this.ballVel=new C,this.build()}build(){let t=this.scene;this.sky=Bs({top:"#03061a",horizon:"#1c2550",bottom:"#0a120a"}),t.add(this.sky),t.fog=new Ln("#0d1430",60,160);let e=new Dn("#9fb4ff","#1a3a1a",.9);t.add(e);let n=new _i("#f4f7ff",2.4);n.position.set(-12,30,12),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:80}),n.target.position.set(0,0,-6),t.add(n,n.target);for(let x of[-30,30]){let R=new Ds("#e8eeff",400,90,1.6);R.position.set(x,26,-26),t.add(R)}this.camera.position.set(0,1.3,4.8),this.camera.fov=58,this.camera.lookAt(0,1.1,-6);let s=Pe(512,512,(x,R,T)=>{for(let P=0;P<8;P++){let k=P%2?.86:1;x.fillStyle=`rgb(${Math.round(40*k)},${Math.round(128*k)},${Math.round(42*k)})`,x.fillRect(0,P*T/8,R,T/8)}let E=An(21);for(let P=0;P<7e3;P++){let k=.3+E()*.4;x.fillStyle=`rgba(${Math.round(70*k)},${Math.round(255*k)},${Math.round(60*k)},0.22)`,x.fillRect(E()*R,E()*T,1.5,4)}},{repeat:[6,6]}),r=J(new ce(90,90),ot("#ffffff",{rough:.9,map:s}),{z:-30,cast:!1,receive:!0});r.rotation.x=-Math.PI/2,t.add(r);let a=ot("#f2f2f2",{rough:.8}),o=(x,R,T,E)=>{let P=J(new ce(T,E),a,{x,y:.01,z:R,cast:!1,receive:!0});P.rotation.x=-Math.PI/2,t.add(P)};o(0,0,60,.12),o(0,-5.5,18.3,.12),o(-9.15,-2.75,.12,5.5),o(9.15,-2.75,.12,5.5),o(0,-16.5,40.3,.12),o(-20.15,-8.25,.12,16.5),o(20.15,-8.25,.12,16.5),t.add(J(new Un(.15,16),a,{y:.012,z:-11,cast:!1}).rotateX(-Math.PI/2));let l=ot("#f7f7f7",{rough:.25,metal:.2});for(let x of[-1,1])t.add(J(new ne(.06,.06,wi,12),l,{x:x*Vs,y:wi/2}));let c=J(new ne(.06,.06,Vs*2+.12,12),l,{y:wi});c.rotation.z=Math.PI/2,t.add(c);let h=Pe(128,128,(x,R)=>{x.clearRect(0,0,R,R),x.strokeStyle="rgba(255,255,255,.8)",x.lineWidth=2;for(let T=0;T<=8;T++){let E=T*R/8;x.beginPath(),x.moveTo(E,0),x.lineTo(E,R),x.moveTo(0,E),x.lineTo(R,E),x.stroke()}});h.wrapS=h.wrapT=Hi;let u=(x,R)=>{let T=h.clone();return T.needsUpdate=!0,T.repeat.set(x,R),new we({map:T,transparent:!0,side:ze,depthWrite:!1})},d=2;for(let x of[-1,1]){let R=new ae(new ce(d,wi),u(d*3,wi*3));R.position.set(x*Vs,wi/2,d/2),R.rotation.y=Math.PI/2,t.add(R)}let f=new ae(new ce(Vs*2,d),u(Vs*6,d*3));f.position.set(0,wi,d/2),f.rotation.x=-Math.PI/2,t.add(f);let g=Pe(1024,256,(x,R,T)=>{x.fillStyle="#141414",x.fillRect(0,0,R,T);let E=An(33),P=["#e53935","#ffffff","#1e88e5","#fdd835","#e8c4a0","#43a047","#555"];for(let k=0;k<16;k++)for(let y=0;y<128;y++){x.fillStyle=P[Math.floor(E()*P.length)];let w=y*8+E()*3,N=k*16+E()*4;x.beginPath(),x.arc(w+3,N+9,3.2,0,Math.PI*2),x.fill(),x.fillRect(w,N,6,7)}},{repeat:[4,1]}),v=ot("#ffffff",{rough:.9,map:g,emissive:"#ffffff",emissiveIntensity:.12});v.emissiveMap=g;for(let x=0;x<3;x++){let R=J(new ge(150,9,1),v,{y:4+x*8,z:-48-x*7,cast:!1});R.rotation.x=-.5,t.add(R)}let p=["#ff2d75","#2d8cff","#ff8c1a","#1ad1c4"];for(let x=0;x<9;x++){let R=p[x%4];t.add(J(new ge(7.5,.9,.2),ot(R,{rough:.3,emissive:R,emissiveIntensity:1.2}),{x:-35+x*7.8,y:.45,z:-24,cast:!1}))}let m=new we({color:"#ffffff"}),M=ot("#666",{rough:.4,metal:.8});for(let x of[-38,38]){t.add(J(new ne(.4,.5,30,8),M,{x,y:15,z:-40,cast:!1}));for(let R=0;R<3;R++)for(let T=0;T<4;T++)t.add(J(new ve(.6,10,8),m,{x:x-2.4+T*1.6,y:30+R*1.4,z:-39.5,cast:!1}))}let _=Pe(512,256,(x,R,T)=>{x.fillStyle="#fff",x.fillRect(0,0,R,T),x.fillStyle="#151515";for(let E=0;E<3;E++)for(let P=0;P<6;P++){let k=(P+(E%2?.75:.25))*R/6,y=(E+.5)*T/3,w=E===1?26:18;x.beginPath();for(let N=0;N<5;N++){let F=N/5*Math.PI*2-Math.PI/2,G=k+Math.cos(F)*w,$=y+Math.sin(F)*w;N?x.lineTo(G,$):x.moveTo(G,$)}x.closePath(),x.fill()}});this.ball=J(new ve(.11,24,16),ot("#ffffff",{rough:.4,map:_})),this.ball.position.copy(Zu),t.add(this.ball),this.shooter=new Fn({shirt:"#d81b2a",accent:"#ffffff",pants:"#ffffff",skin:"#8c6046",hair:"#141414",shoes:"#19e07f",number:9}),this.shooter.root.rotation.y=Math.PI,this.shooter.root.position.set(.9,0,-14.2),t.add(this.shooter.root),this.gloves=[0,1].map(()=>{let x=new Dt,R=ot("#f4f4f4",{rough:.5}),T=ot("#22e07a",{rough:.4,emissive:"#0a5",emissiveIntensity:.4});x.add(J(new ge(.24,.28,.09),R));for(let P=0;P<4;P++)x.add(J(new Oe(.032,.1,4,8),R,{x:-.09+P*.06,y:.19}));let E=J(new Oe(.035,.08,4,8),R,{x:.15,y:.02});return E.rotation.z=-.7,x.add(E,J(new ge(.25,.08,.1),T,{y:-.15})),x.scale.setScalar(1.45),x.visible=!1,t.add(x),x}),this.sparks=new De(t,{max:500,size:.12,gravity:-4,additive:!0}),this.flashes=new De(t,{max:200,size:1.2,gravity:0,additive:!0}),this.trail=new De(t,{max:300,size:.25,gravity:.5,additive:!0}),this.shake=new mn,this.hud.set({lives:5,maxLives:5,stat:"Saves 0"})}update(t,e){switch(this.updateGloves(e),this.stageTime+=t,Math.random()<t*6&&this.flashes.burst({x:ht(-60,60),y:ht(4,22),z:ht(-62,-46)},{count:1,speed:0,life:.12,color:"#ffffff"}),this.stage){case"waiting":this.shooter.run(0,0),this.stageTime>1&&this.next("runUp");break;case"runUp":{let n=Math.min(1,this.stageTime/.8);this.shooter.root.position.set(on(.9,.35,n),0,on(-14.2,-11.5,n)),this.shooter.run(this.stageTime*11,.8),this.stageTime>=.8&&this.next("kick");break}case"kick":{let n=Math.min(1,this.stageTime/.4);this.shooter.kick(n),n>=.6&&!this.launched&&(this.launched=!0,this.launchShot()),this.stageTime>=.4&&(this.stage="flight",this.stageTime=0);break}case"flight":{let n=this.stageTime/this.shot.time,s=Math.sin(Math.PI*Math.min(n,1)),r=this.shot;this.ball.position.set(on(r.start.x,r.target.x,n)+r.curve*s,Math.max(.11,on(r.start.y,r.target.y,n)+r.arc*s-r.dip*Math.max(0,n-.6)*2),on(r.start.z,r.target.z,n)),this.ball.rotation.x-=t*25,this.ball.rotation.y+=t*r.curve*10,r.power&&this.trail.burst(this.ball.position,{count:3,speed:.4,color:"#ff7a1a",life:.3});let a=n>.78?this.touchingGlove():null;a?this.save(a):n>=1&&this.goal();break}default:if(this.ballVel.y-=9.8*t,this.ball.position.addScaledVector(this.ballVel,t),this.ball.position.y<.11&&(this.ball.position.y=.11,this.ballVel.y=Math.abs(this.ballVel.y)*.45,this.ballVel.x*=.7,this.ballVel.z*=.7),this.stage==="scored"&&this.ball.position.z>1.9&&(this.ball.position.z=1.9,this.ballVel.z=-Math.abs(this.ballVel.z)*.2),this.stage==="saved"&&this.shooter.run(0,0),this.stage==="scored"&&this.shooter.celebrate(this.stageTime),this.stageTime>1.8){if(this.lives<=0){this.finish(this.score,`${this.saves} saves from ${this.shots} shots`);return}this.resetShot()}}this.sparks.update(t),this.flashes.update(t),this.trail.update(t),this.camera.position.set(0,1.3,4.8),this.shake.apply(this.camera,t)}idle(t){this.flashes.update(t),this.sparks.update(t)}next(t){this.stage=t,this.stageTime=0,t==="runUp"&&this.audio.play("whistle",.5)}resetShot(){this.ball.position.copy(Zu),this.ball.rotation.set(0,0,0),this.launched=!1,this.shooter.root.position.set(.9,0,-14.2),this.next("waiting")}launchShot(){this.shots++;let t=0;for(let l=0;l<eo.length;l++)this.saves>=eo[l].at&&(t=l);t!==this.level&&(this.level=t,this.hud.flash(`Level ${t+1}: ${eo[t].name}`,1.4));let e=eo[t],n=Math.random()<e.power,s=Math.min(1,.55+this.shots*.04),r=ht(-1,1)*(Vs-.35)*s,a=ht(.25,wi-.25),o=Math.random()<e.dip*.4?ht(.3,.6):0;this.shot={start:this.ball.position.clone(),target:new C(r,a,0),time:e.time*(n?.75:1)*ht(.92,1.08),arc:o?1.4:a>1.5?ht(.3,.9):ht(0,.4),curve:ht(-1,1)*e.curve,dip:o,power:n},this.audio.play("kick",n?1:.8),n&&this.hud.flash("Power shot!",.6)}updateGloves(t){[t.leftHand,t.rightHand].forEach((e,n)=>{let s=this.gloves[n];if(!e){s.visible=!1;return}s.visible=!0;let r=Ve(e.x*3.1+Ve(t.lateral,-1.5,1.5)*1.6,-4.3,4.3),a=Ve(.2+e.y*2.6,.1,3);s.position.set(on(s.position.x,r,.55),on(s.position.y,a,.55),.25),s.rotation.z=-e.x*.5})}touchingGlove(){for(let t of this.gloves){if(!t.visible)continue;if(Math.hypot(t.position.x-this.ball.position.x,t.position.y-this.ball.position.y,(t.position.z-this.ball.position.z)*.5)<.5)return t}return null}save(t){this.saves++,this.streak++;let e=(100+(this.streak-1)*25)*(this.shot.power?2:1);this.score+=e,this.stage="saved",this.stageTime=0,this.ballVel.set(ht(-3,3)+(this.ball.position.x-t.position.x)*6,ht(2,5),-ht(6,10)),this.audio.play("save"),this.audio.play("cheer",.7),this.sparks.burst(this.ball.position,{count:50,speed:4,color:"#7dffa8",life:.6}),this.shake.kick(.08),this.hud.set({score:this.score,stat:`Saves ${this.saves}`}),this.hud.flash(this.streak>=3?`Save!  ${this.streak} in a row`:this.shot.power?"Huge save!":"Save!",1)}goal(){this.streak=0,this.lives--,this.stage="scored",this.stageTime=0;let t=this.shot;this.ballVel.set((t.target.x-t.start.x)/t.time,Math.max(-2,(t.target.y-t.start.y)/t.time),(t.target.z-t.start.z)/t.time),this.audio.play("groan",.8),this.hud.set({lives:Math.max(0,this.lives)}),this.hud.flash(this.lives>0?"Goal":"Full time!",1.2)}};var $i=25,Ju=9,io=class extends pn{constructor(t){super(t),this.score=0,this.time=45,this.distance=0,this.speed=16,this.px=0,this.py=0,this.vy=0,this.gates=0,this.tricks=0,this.bonus=0,this.spin=0,this.spinning=!1,this.fromRamp=!1,this.lastJump=null,this.invulnerable=0,this.things=[],this.sinceSpawn=0,this.lastSecond=-1,this.build()}build(){let t=this.scene,e=new C(-.4,.45,-1);t.add(Bs({top:"#2a63c9",horizon:"#cfe0f5",bottom:"#eef3fa",sunDir:e,sunColor:"#fffbe8",sunSize:.03})),t.fog=new Ln("#d6e4f4",60,210),this.lights=Ja(t,{sun:"#fff8ec",sunIntensity:2.2,sky:"#cfe0ff",ground:"#ffffff",hemi:.9,dir:[.5,1,.6]}),this.camera.position.set(0,4,7.4),this.camera.fov=64;let n=Si("#f4f8ff",["#d6e2f4","#ffffff","#e3ecf8"],{count:2600,radius:8,seed:41,repeat:[8,2]}),s=Pe(256,256,(o,l,c)=>{o.fillStyle="#f7faff",o.fillRect(0,0,l,c),o.strokeStyle="rgba(170,195,230,.55)",o.lineWidth=3;for(let h=14;h<l;h+=24)o.beginPath(),o.moveTo(h,0),o.bezierCurveTo(h+20,c*.3,h-14,c*.7,h+6,c),o.stroke()},{repeat:[3,2]});this.M={piste:ot("#ffffff",{rough:.55,map:s}),snow:ot("#ffffff",{rough:.7,map:n}),rock:ja("#7d8796",14),red:ot("#e0262b",{rough:.4}),blue:ot("#1f5ae0",{rough:.4}),ramp:ot("#ffffff",{rough:.35,map:Sr("#f4f8ff","#2d7cf0",10,{repeat:[2,1]})}),mountain:ot("#7c879a",{rough:.9}),cap:ot("#ffffff",{rough:.6})},this.tiles=[];for(let o=0;o<Ju;o++){let l=new Dt;l.position.z=-o*$i+12;let c=J(new ce(20,$i),this.M.piste,{cast:!1,receive:!0});c.rotation.x=-Math.PI/2,l.add(c);for(let u of[-1,1]){let d=J(new ce(80,$i),this.M.snow,{x:u*50,y:-.01,cast:!1,receive:!0});d.rotation.x=-Math.PI/2,l.add(d)}let h=[];for(let u=0;u<7;u++){let d=Wc(ht(4,9),!0);h.push(d),l.add(d)}this.scatterTrees(h),l.userData.trees=h,t.add(l),this.tiles.push(l)}t.add(Ku({radius:330,height:95,y:-10,seed:11})),this.figure=new Fn({shirt:"#f0353c",accent:"#ffd61a",pants:"#1b2140",skin:"#e8b89a",hair:"#2f6fe8",shoes:"#222"});let r=ot("#ff7a12",{rough:.25,metal:.3}),a=ot("#c8c8c8",{rough:.3,metal:.9});for(let o of["left","right"]){let l=this.figure.legs[o].foot;l.add(J(new ge(.1,.03,1.7),r,{y:-.07,z:-.25}));let c=J(new ge(.1,.03,.22),r,{y:-.02,z:-1.14});c.rotation.x=.5,l.add(c);let h=J(new ne(.012,.012,1.15,6),a,{y:-.5,z:.15});h.rotation.x=-.3,this.figure.arms[o].hand.add(h)}this.player=new Dt,this.player.add(this.figure.root),t.add(this.player),this.snow=new De(t,{max:900,size:.12,gravity:-1.2,texture:Os("#ffffff")}),this.spray=new De(t,{max:600,size:.3,gravity:-5,texture:Os("#ffffff")}),this.sparks=new De(t,{max:300,size:.2,gravity:-4,additive:!0}),this.shake=new mn;for(let o=0;o<4;o++)this.spawnRow(-60-o*32);this.hud.set({time:45,stat:"Gates 0"})}scatterTrees(t){for(let e of t){let n=Math.random()<.5?-1:1;e.position.set(n*ht(11,36),0,ht(-$i/2,$i/2))}}spawnRow(t=-170){let e=ht(-5.5,5.5),n=Math.random()<.5,s=new Dt;for(let a of[-1,1]){s.add(J(new ne(.045,.045,1.9,8),n?this.M.red:this.M.blue,{x:a*2.1,y:.95}));let o=J(new ce(.75,.5),n?this.M.red:this.M.blue,{x:a*2.1-a*.4,y:1.5});o.material.side=ze,s.add(o)}if(s.position.set(e,0,t),ks(s),this.scene.add(s),this.things.push({node:s,kind:"gate"}),this.distance>120&&Math.random()<.35){let a=Ve(e+(e>0?-5:5),-7,7),o=J(new ge(2.4,.12,3.2),this.M.ramp,{x:a,y:.45,z:t-14});o.rotation.x=.28,this.scene.add(o),this.things.push({node:o,kind:"ramp"})}let r=this.distance<80?0:1+Math.floor(Math.random()*Math.min(3,1+this.distance/600));for(let a=0;a<r;a++){let o=ht(-8,8);if(Math.abs(o-e)<3&&(o=e+(o<e?-3.5:3.5)),Math.abs(o)>9)continue;let l=t+ht(-10,10);if(Math.random()<.35){let c=zs(.6,this.M.rock);c.scale.set(1.3,.6,1),c.position.set(o,.2,l),this.scene.add(c),this.things.push({node:c,kind:"rock"})}else{let c=Wc(ht(3,5.5),!0);c.position.set(o,0,l),this.scene.add(c),this.things.push({node:c,kind:"tree"})}}}update(t,e){let n=this.elapsed;this.time-=t;let s=Math.max(0,Math.ceil(this.time));if(s!==this.lastSecond&&(this.lastSecond=s,this.hud.set({time:s}),s<=5&&s>0&&this.audio.play("beep",.6)),this.time<=0){this.finish(this.score,`${Math.floor(this.distance)} m \xB7 ${this.gates} gates \xB7 ${this.tricks} tricks`);return}let r=e.isCrouching&&this.py===0,a=Math.min(34,16+n*.2);this.speed=bi(this.speed,r?a*1.3:a,2,t);let o=this.speed*t;this.distance+=o,this.sinceSpawn+=o,r&&(this.bonus+=t*10);let l=Ve(e.lateral*6,-8.5,8.5),c=this.px;this.px=bi(this.px,l,4,t);let h=Ve((this.px-c)/Math.max(t,.001)/6,-1,1);this.lastJump===null&&(this.lastJump=e.jumpCount),e.jumpCount!==this.lastJump&&(this.lastJump=e.jumpCount,this.py<=.001?(this.vy=7.5,this.audio.play("whoosh",.7)):this.fromRamp&&!this.spinning&&(this.spinning=!0,this.audio.play("whoosh",.8,1.3))),(this.py>0||this.vy>0)&&(this.vy-=17*t,this.py=Math.max(0,this.py+this.vy*t),this.spinning&&(this.spin+=t*14),this.py===0&&this.land()),this.figure.ski(r?1:0,h),this.player.position.set(this.px,this.py,0),this.player.rotation.y=-h*.35+this.spin,this.py===0&&this.spray.burst({x:this.px,y:.15,z:.5},{count:Math.round(1+Math.abs(h)*6),speed:2.5+Math.abs(h)*3,up:1.2,spread:.6,life:.5,color:"#ffffff"}),Math.random()<t*60&&this.snow.burst({x:this.px+ht(-20,20),y:12,z:ht(-40,4)},{count:1,speed:1.5,spread:.3,up:-1,life:6,drag:.2,color:"#ffffff"}),this.invulnerable>0?(this.invulnerable-=t,this.figure.root.visible=Math.floor(this.invulnerable*12)%2===0):this.figure.root.visible=!0;let d=this.camera;d.position.set(this.px*.6,4+this.py*.3,7.4),d.fov=62+(this.speed-16)*.4,d.updateProjectionMatrix(),d.lookAt(this.px*.7,.8,-8),this.shake.apply(d,t),qu(this.lights.sun,this.px,-6,[20,40,24]);for(let g of this.tiles)g.position.z+=o,g.position.z-$i/2>14&&(g.position.z-=$i*Ju,this.scatterTrees(g.userData.trees));this.sinceSpawn>Math.max(22,34-n*.1)&&(this.sinceSpawn=0,this.spawnRow());for(let g=this.things.length-1;g>=0;g--){let v=this.things[g];v.node.position.z+=o;let p=v.node.position.z;!v.done&&p>-.4&&(v.done=!0,this.resolve(v)),p>16&&(this.scene.remove(v.node),this.things.splice(g,1))}this.snow.shift(o*.3),this.snow.update(t),this.spray.shift(o),this.spray.update(t),this.sparks.update(t);let f=Math.floor(this.distance+this.gates*50+this.bonus);f!==this.score&&(this.score=f,this.hud.set({score:f}))}idle(t){this.figure.ski(0,0),this.snow.update(t)}land(){if(this.vy=0,this.spinning){let t=Math.round(this.spin/(Math.PI*2)),e=150+t*100;this.tricks++,this.bonus+=e,this.audio.play("combo"),this.hud.flash(`${t>0?t*360:180}\xB0 spin  +${e}`,1)}else this.fromRamp&&(this.bonus+=50,this.hud.flash("Big air  +50",.7));this.spin=0,this.spinning=!1,this.fromRamp=!1}resolve(t){let e=Math.abs(t.node.position.x-this.px);switch(t.kind){case"gate":e<2?(this.gates++,this.time+=2,this.audio.play("gate",.7),this.sparks.burst({x:t.node.position.x,y:1.5,z:0},{count:30,speed:4,color:"#9fd8ff",life:.6}),this.hud.set({stat:`Gates ${this.gates}`,time:Math.ceil(this.time)}),this.hud.flash("Gate  +2s",.6)):this.hud.flash("Missed the gate",.7);break;case"ramp":e<1.4&&this.py<.3&&(this.vy=10,this.py=.01,this.fromRamp=!0,this.audio.play("whoosh"),this.hud.flash("Jump for a spin!",.8));break;case"tree":e<.9&&this.py<2.5&&this.crash("Hit a tree  \u22123s");break;case"rock":e<1&&this.py<.35&&this.crash("Rock  \u22123s \xB7 jump next time");break}}crash(t){this.invulnerable>0||(this.invulnerable=1.6,this.time-=3,this.speed*=.4,this.shake.kick(.35),this.audio.play("hit"),this.hud.set({time:Math.max(0,Math.ceil(this.time))}),this.hud.flash(t))}};var ju=75,so=class extends pn{constructor(t){super(t),this.score=0,this.hits=0,this.combo=0,this.pads=[],this.padTimer=.8,this.attack=null,this.attackTimer=12,this.lastSecond=-1,this.recoil=0,this.punch={left:0,right:0},this.build()}build(){let t=this.scene;t.background=new Mt("#07060b"),t.fog=new Ln("#07060b",12,40),this.camera.position.set(0,1.6,1.9),this.camera.fov=60,this.camera.lookAt(0,1.4,-2),t.add(new Dn("#8a7aff","#1a0f0a",.5));for(let[o,l]of[[-3,"#ffe2c4"],[3,"#ffe2c4"],[0,"#ffffff"]]){let c=new Ha(l,160,30,.5,.6,1.5);c.position.set(o,9,1),c.target.position.set(0,0,-2),c.castShadow=o===0,c.shadow.mapSize.set(1024,1024),t.add(c,c.target)}let e=Si("#2a3c78",["#22336a","#334a8a"],{count:900,radius:10,seed:5,repeat:[3,3]}),n=J(new ce(12,12),ot("#ffffff",{rough:.8,map:e}),{z:-2,cast:!1,receive:!0});n.rotation.x=-Math.PI/2,t.add(n);let s=ot("#d8d8d8",{rough:.3,metal:.6});for(let o of[-5,5])for(let l of[-7,3])t.add(J(new ne(.12,.12,1.6,10),s,{x:o,y:.8,z:l}));["#e53935","#f5f5f5","#1e5ae5"].forEach((o,l)=>{let c=ot(o,{rough:.4}),h=.55+l*.4;for(let[u,d,f,g]of[[-5,-7,5,-7],[-5,-7,-5,3],[5,-7,5,3]]){let v=Math.hypot(f-u,g-d),p=J(new ne(.035,.035,v,8),c,{x:(u+f)/2,y:h,z:(d+g)/2,cast:!1});p.rotation.z=Math.PI/2,p.rotation.y=Math.atan2(g-d,f-u)*-1,t.add(p)}});let a=new De(t,{max:120,size:1.6,gravity:0,additive:!0});for(let o=0;o<120;o++)a.burst({x:ht(-25,25),y:ht(1,9),z:ht(-30,-14)},{count:1,speed:0,life:1e9,color:Math.random()<.5?"#4a3020":"#20304a"});a.update(0),this.coach=new Fn({shirt:"#222",accent:"#ffcf3a",pants:"#141414",skin:"#b07a55",hair:"#111",shoes:"#111",gloves:"#e2182a"}),this.coach.root.position.set(0,0,-1.9),this.coach.root.rotation.y=Math.PI,t.add(this.coach.root),this.gloves=["#2563eb","#e2182a"].map((o,l)=>{let c=new Dt,h=ot(o,{rough:.32,metal:.05}),u=ot(new Mt(o).multiplyScalar(.55),{rough:.45}),d=ot("#f2f2f2",{rough:.5}),f=[[0,-.2],[.09,-.195],[.15,-.16],[.175,-.08],[.17,.02],[.15,.1],[.12,.15],[.11,.17]].map(([x,R])=>new rt(x,R)),g=J(new gr(f,28),h);g.rotation.x=-Math.PI/2,g.scale.set(1,1,.82);let v=J(new Oe(.055,.12,6,12),h,{x:(l?-1:1)*.14,y:-.03,z:-.02});v.rotation.x=Math.PI/2.4;let p=J(new ne(.115,.125,.14,24,1,!0),u,{z:.22});p.rotation.x=Math.PI/2;let m=J(new En(.118,.016,8,28),d,{z:.17}),M=J(new Un(.115,24),u,{z:.29}),_=J(new Un(.045,20),d,{y:.12,z:-.02});return _.rotation.x=-Math.PI/2.6,c.add(g,v,p,m,M,_),c.rotation.order="YXZ",c.visible=!1,t.add(c),{node:c,pos:null,speed:0}}),this.padMat=ot("#ff3b30",{rough:.4,emissive:"#ff2a1a",emissiveIntensity:.6}),this.padRingMat=new we({color:"#ffd84a",transparent:!0,opacity:.9,side:ze}),this.sparks=new De(t,{max:600,size:.08,gravity:-3,additive:!0}),this.shake=new mn,this.flash=new ae(new ce(10,6),new we({color:"#ff1a1a",transparent:!0,opacity:0,depthTest:!1})),this.flash.position.set(0,1.6,1.8),this.flash.renderOrder=10,t.add(this.flash),this.hud.set({time:ju,lives:null,stat:"Combo 0"})}handToWorld(t,e){return new C(Ve(t.x*1.15+Ve(e,-1.5,1.5)*.25,-1.4,1.4),Ve(.75+t.y*1.35,.6,2.4),.35)}update(t,e){let n=Math.max(0,ju-this.elapsed),s=Math.ceil(n);if(s!==this.lastSecond&&(this.lastSecond=s,this.hud.set({time:s}),s<=3&&s>0&&this.audio.play("beep",.6)),n<=0){this.finish(this.score,`${this.hits} punches landed`);return}[e.leftHand,e.rightHand].forEach((l,c)=>{let h=this.gloves[c];if(!l){h.node.visible=!1,h.pos=null;return}let u=this.handToWorld(l,e.lateral);h.pos&&(h.speed=u.distanceTo(h.pos)/Math.max(t,.001)),h.pos=u,h.node.visible=!0,h.lunge=Math.max(0,(h.lunge??0)-t*5);let d=u.clone();d.z-=h.lunge*1.2,h.node.position.lerp(d,.6),h.node.rotation.set(.85-h.lunge*.6,(c===0?-1:1)*.18,(c===0?1:-1)*.25)}),this.padTimer-=t,this.padTimer<=0&&!this.attack&&(this.spawnPad(),this.padTimer=Math.max(.45,1.15-this.elapsed*.009));for(let l=this.pads.length-1;l>=0;l--){let c=this.pads[l];c.age+=t;let h=Math.max(0,1-c.age/c.life);c.ring.scale.setScalar(1+h*1.2),c.ring.material.color.set(h>.35?"#ffd84a":"#ff3b30"),c.node.scale.setScalar(Math.min(1,c.age*8));let u=this.gloves.find(d=>d.pos&&d.speed>3&&this.overlapOnScreen(d.node.position,c.node.position));if(u){u.lunge=1,this.hitPad(c,h),this.pads.splice(l,1);continue}c.age>=c.life&&(this.combo=0,this.hud.set({stat:"Combo 0"}),this.scene.remove(c.node),this.pads.splice(l,1))}this.updateAttack(t,e),this.recoil=Math.max(0,this.recoil-t*3);let r=this.attack,a={left:0,right:0},o=0;if(r){let l=r.time/r.windup;r.stage==="windup"?o=r.side*.4*Math.min(1,l):a[r.side<0?"left":"right"]=Math.min(1,r.time/.25)}this.coach.guard(this.elapsed,a,o,0),this.coach.root.position.z=-1.9-this.recoil*.25,this.sparks.update(t),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*2),this.camera.position.set(Ve(e.lateral,-1.5,1.5)*.25,1.6-(e.isCrouching?.45:0),1.9),this.camera.lookAt(0,1.4,-2),this.shake.apply(this.camera,t)}idle(t){this.coach.guard(this.elapsed+performance.now()/1e3),this.sparks.update(t)}overlapOnScreen(t,e){let n=t.clone().project(this.camera),s=e.clone().project(this.camera);return Math.hypot((n.x-s.x)*this.camera.aspect,n.y-s.y)<.16}spawnPad(){let e=[[-.45,1.75],[.45,1.75],[-.55,1.3],[.55,1.3],[0,1.95],[-.3,1.05],[.3,1.05]].filter(([c,h])=>!this.pads.some(u=>Math.hypot(u.node.position.x-c,u.node.position.y-h)<.3));if(!e.length)return;let[n,s]=Fs(e),r=new Dt,a=J(new ne(.17,.17,.09,24),this.padMat);a.rotation.x=Math.PI/2;let o=J(new Un(.08,20),new we({color:"#ffffff"}),{z:.05,cast:!1}),l=new ae(new ka(.2,.235,32),this.padRingMat.clone());l.position.z=.06,r.add(a,o,l),r.position.set(n,s,-1.15),this.scene.add(r),this.pads.push({node:r,ring:l,age:0,life:Math.max(1.1,2.3-this.elapsed*.014)})}hitPad(t,e){this.hits++,this.combo++;let n=1+Math.min(4,Math.floor(this.combo/5)),s=(50+Math.round(e*50))*n;this.score+=s,this.recoil=1,this.audio.play("punch",1,ht(.9,1.1)),this.combo%10===0&&(this.audio.play("combo"),this.hud.flash(`${this.combo}-hit combo!`)),this.sparks.burst(t.node.position,{count:40,speed:4,color:"#ffcf5a",life:.5}),this.shake.kick(.04),this.scene.remove(t.node),this.hud.set({score:this.score,stat:`Combo ${this.combo}`})}updateAttack(t,e){if(!this.attack){if(this.attackTimer-=t,this.attackTimer<=0&&this.elapsed>8){let s=Math.random()<.5?"hook":"swing";this.attack={kind:s,side:Math.random()<.5?-1:1,stage:"windup",time:0,windup:Math.max(.6,1-this.elapsed*.004)},this.hud.flash(s==="swing"?"Duck!":this.attack.side<0?"Slip right!":"Slip left!",.9),this.audio.play("whistle",.35);for(let r of this.pads)this.scene.remove(r.node);this.pads=[]}return}let n=this.attack;n.time+=t,n.stage==="windup"&&n.time>=n.windup&&(n.stage="strike",n.time=0),n.stage==="strike"&&n.time>=.18&&!n.resolved&&(n.resolved=!0,(n.kind==="swing"?e.isCrouching:(n.side<0?e.lateral>.35:e.lateral<-.35)||e.isCrouching)?(this.score+=150,this.audio.play("whoosh"),this.hud.flash("Nice dodge  +150",.9)):(this.score=Math.max(0,this.score-100),this.combo=0,this.flash.material.opacity=.5,this.shake.kick(.18),this.audio.play("hit"),this.hud.flash("Caught one  \u2212100",.9)),this.hud.set({score:this.score,stat:`Combo ${this.combo}`})),n.stage==="strike"&&n.time>.5&&(this.attack=null,this.attackTimer=ht(6,10))}};var ln=[{id:"canyonRun",title:"Canyon Run",tagline:"Sprint from sunset into the night",moves:["Step left / right to switch lanes","Jump hurdles and gaps","Crouch under bridges","Grab magnets, shields and 2\xD7 coins"],pro:!1,pauseHold:1,make:i=>new Qa(i)},{id:"fruitFrenzy",title:"Fruit Frenzy",tagline:"Your hands are blades",moves:["Swipe fast through flying fruit","Slice several at once for combos","Golden banana starts a frenzy","Don't touch the bombs!"],pro:!1,pauseHold:2,make:i=>new to(i)},{id:"penaltySave",title:"Penalty Save",tagline:"Be the hero under the floodlights",moves:["Reach with your hands to save shots","Step sideways to cover the goal","Shots curl, dip and blast as you level up"],pro:!1,pauseHold:2,make:i=>new no(i)},{id:"alpineRush",title:"Alpine Rush",tagline:"Beat the clock down the mountain",moves:["Lean / step to steer through gates (+2s)","Hit ramps, jump in the air to spin","Crouch into a tuck for speed"],pro:!0,pauseHold:1,make:i=>new io(i)},{id:"boxingBlitz",title:"Boxing Blitz",tagline:"75 seconds in the ring with a coach",moves:["Punch the glowing pads","Duck swings, slip hooks left / right","Chain hits for multipliers"],pro:!0,pauseHold:2,make:i=>new so(i)}];var Zi=new URL("./",import.meta.url).href,Ze=Wu(),ro=new URLSearchParams(location.search),_e=i=>{let t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstElementChild},Kt=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Jc=Ze?"https://movecam.bhswebsite.org":"",Qu="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",ad=/^MC-[A-Z2-9]{4}-[A-Z2-9]{4}$/,ii=["#ff6a2b","#e8453c","#f2b134","#4cc26b","#1fb5a8","#2f8cff","#5a5ff0","#a157e8","#e85aa8","#b07a4f","#5b6b7a","#3a3f47"],it={id:Te("userId",null),deviceId:Te("deviceId",null),plan:Te("plan","free"),expiresAt:Te("planExpiry",null),username:Te("username",null),avatar:Te("avatar",0),email:Te("email",null),token:Te("token",null),get signedIn(){return!!(this.token&&this.username)},get isPro(){return this.plan==="free"?!1:!this.expiresAt||new Date(this.expiresAt)>new Date}};if(!ad.test(it.id??"")){let i=()=>Qu[Math.floor(Math.random()*Qu.length)];it.id=`MC-${i()}${i()}${i()}${i()}-${i()}${i()}${i()}${i()}`,ye("userId",it.id)}ad.test(it.deviceId??"")||(it.deviceId=it.signedIn?null:it.id,ye("deviceId",it.deviceId));async function ni(i,{method:t="GET",body:e,auth:n=!1}={}){let s={};e&&(s["content-type"]="application/json"),n&&it.token&&(s.authorization="Bearer "+it.token);try{let r=await fetch(Jc+i,{method:t,headers:s,body:e?JSON.stringify(e):void 0}),a=await r.json().catch(()=>({}));return{ok:r.ok,status:r.status,data:a}}catch{return{ok:!1,status:0,data:{error:"Can't reach MoveCam. Check your internet connection."}}}}function ao(i){i.token&&(it.token=i.token,ye("token",i.token)),it.username=i.username,ye("username",i.username),it.avatar=i.avatar??0,ye("avatar",it.avatar),it.email=i.email??null,ye("email",it.email),i.playerId&&i.playerId!==it.id&&(it.deviceId||(it.deviceId=it.id,ye("deviceId",it.deviceId)),it.id=i.playerId,ye("userId",i.playerId));for(let[t,e]of Object.entries(i.best??{}))e>fo(t)&&ye("best."+t,e);Ze&&Nn({type:"account",playerId:it.id,username:it.username}),ho(i.plan??"free",i.expiresAt??null)}function od(i){Ys(),it.token=null,it.username=null,it.email=null,ye("token",null),ye("username",null),ye("email",null),it.deviceId&&(it.id=it.deviceId,ye("userId",it.id)),Ze&&Nn({type:"account",playerId:null,username:null}),ho("free",null),i&&vn(i),z.screen==="game"&&Ci(),Cr()}async function td(){if(!it.signedIn)return;let i=await ni("/api/account/me",{auth:!0});i.ok?ao(i.data):i.status===401&&od("You were signed out. Sign in again to keep playing.")}function jc(i=30){let t=`width:${i}px;height:${i}px;font-size:${Math.round(i*.48)}px`;return it.signedIn?`<span class="avatar" style="${t};background:${ii[it.avatar%ii.length]}">${Kt(it.username[0].toUpperCase())}</span>`:`<span class="avatar empty" style="${t}"><svg viewBox="0 0 24 24" width="${Math.round(i*.6)}" height="${Math.round(i*.6)}"><circle cx="12" cy="8" r="4.2" fill="currentColor"/><path d="M3.5 21c.8-4.4 4.2-6.6 8.5-6.6s7.7 2.2 8.5 6.6" fill="currentColor"/></svg></span>`}async function ed(i){if(!Ze)try{let t=await fetch(Jc+"/api/checkin",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:it.id,appVersion:"web",launch:i,macOS:navigator.userAgent.slice(0,40)})});if(!t.ok)return;let e=await t.json();ho(e.plan,e.expiresAt)}catch{}}function ho(i,t){it.plan=i,it.expiresAt=t,ye("plan",i),ye("planExpiry",t),Cn()}var oo=[];function uo(i,t,e,n){if(!Te("shareUsage",!0))return;let s={type:i,t:new Date().toISOString()};if(t&&(s.game=t),e!==void 0&&(s.score=Math.round(e)),n!==void 0&&(s.seconds=Math.round(n)),Ze){Nn({type:"event",event:s});return}oo.push(s),(i==="finish"||i==="quit")&&ld()}async function ld(){if(!oo.length||Ze)return;let i=oo.splice(0,50);try{await fetch(Jc+"/api/events",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:it.id,events:i})})}catch{oo.unshift(...i)}}setInterval(ld,2e4);var si=document.getElementById("app"),Zt=new Ka,zt=new $a(Zi),Qc=document.createElement("canvas");Qc.id="stage";si.append(Qc);var Rn=new Ca({canvas:Qc,antialias:!0,powerPreference:"high-performance"}),Tr=[2,1.5,1.25,1],Gs=Tr.findIndex(i=>i<=Math.min(window.devicePixelRatio,1.5));Gs<0&&(Gs=Tr.length-1);Rn.setPixelRatio(Math.min(window.devicePixelRatio,Tr[Gs]));Rn.shadowMap.enabled=!0;Rn.shadowMap.type=Cc;Rn.toneMapping=Pc;Rn.toneMappingExposure=1;Rn.outputColorSpace=qe;var Ws=new Za(si);Ws.show(!1);var z={screen:"menu",phase:"waiting",selected:Math.max(0,ln.findIndex(i=>i.id===Te("lastGame","canyonRun"))),game:null,info:null,gameStarted:!1,startedAt:0,result:null,isBest:!1,overlay:null,countdownTimer:null,goodSince:null,missingSince:null,stepArmed:!0},Ge=_e(`<div id="menu">
  <header>
    <div class="brand">
      <img src="${Zi}icons/icon-180.png" alt="">
      <span class="name">MoveCam</span><span class="sep"></span>
      <button class="btn profile" id="profileBtn" title="Your account"></button>
      <select id="cameraSelect" title="Camera"></select>
      <span id="planBadge" class="btn"></span>
      <button class="btn" id="musicBtn" title="Music"></button>
      <button class="btn" id="settingsBtn" title="Settings">\u2699\uFE0E</button>
      <button class="btn ${Ze||!document.fullscreenEnabled?"hidden":""}" id="fullBtn" title="Full screen">\u2922</button>
      <button class="btn accent hidden" id="updateBtn" title="A new version is available">\u2B07\uFE0E Update</button>
    </div>
    <h1>Games</h1>
    <div class="sub">Swing an arm out to the side to choose. Raise a hand to play. Or just tap.</div>
    <button class="btn party-btn" id="partyBtn">\u{1F465} Play with friends</button>
  </header>
  <div class="carousel" id="carousel"></div>
  <div class="hints">
    <div class="hint"><div class="tile">\u{1F44B}</div><div><b>Swing an arm out</b><span>Choose a game</span></div></div>
    <div class="hint"><div class="tile">\u270B</div><div><b>Raise a hand</b><span>Play</span></div></div>
    <div class="hint"><div class="tile">\u{1F64C}</div><div><b>Both hands up</b><span>Pause or go back</span></div></div>
    <div class="kbd">Keyboard: \u2190 \u2192 \xB7 Space \xB7 Esc</div>
  </div>
</div>`);si.append(Ge);var Ti=_e(`<div id="live" class="${Ze?"hidden":""}">
  <div class="frame"><div class="offline">Camera off</div><canvas></canvas><div class="rings"></div>
  <div class="status"><span class="msg">Can't see anyone</span></div></div></div>`);si.append(Ti);var Er=Ti.querySelector("canvas"),Rr=_e('<button id="pauseBtn" class="hidden" aria-label="Pause">\u275A\u275A</button>');si.append(Rr);var Ei=_e('<div id="countdown" class="hidden"></div>'),Yc=_e('<div id="holdRing" class="hidden"><svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,.2)" stroke-width="6" fill="none"/><circle class="arc" cx="32" cy="32" r="28" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176" transform="rotate(-90 32 32)"/></svg><div>Keep your hands up to pause</div></div>'),lo=_e('<div id="toast" class="hidden"></div>');si.append(Ei,Yc,lo);var nd;function vn(i){lo.textContent=i,lo.classList.remove("hidden"),clearTimeout(nd),nd=setTimeout(()=>lo.classList.add("hidden"),3e3)}function fo(i){return Te("best."+i,0)}function Cn(){let i=Ge.querySelector("#carousel");i.innerHTML="",ln.forEach((n,s)=>{let r=n.pro&&!it.isPro,a=fo(n.id),o=_e(`<div class="card ${s===z.selected?"selected":""} ${r?"locked":""}">
      <div class="art" style="background-image:url('${Zi}cards/${n.id}.jpg')">
        <div class="tags">${n.pro?'<span class="tag pro">PRO</span>':'<span class="tag dark">FREE</span>'}${r?'<span class="tag dark">\u{1F512}</span>':""}</div>
      </div>
      <div class="body">
        <div class="title">${Kt(n.title)}</div>
        <div class="tagline">${Kt(n.tagline)}</div>
        <ul>${n.moves.map(l=>`<li>${Kt(l)}</li>`).join("")}</ul>
        <div class="foot"><span class="best">${a>0?"Best "+a.toLocaleString():"Not played yet"}</span>
        <span class="play">${r?"\u{1F512} Pro coming soon":"\u270B Play"}</span></div>
      </div></div>`);o.addEventListener("click",()=>{zt.unlock(),z.selected===s?ih():(z.selected=s,zt.play("select"),Cn())}),i.append(o)}),i.children[z.selected]?.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});let e=Ge.querySelector("#planBadge");e.textContent=it.isPro?it.plan==="trial"?"\u2605 Pro trial":"\u2605 Pro":"Free plan",e.style.background=it.isPro?"var(--pro)":"",e.style.color=it.isPro?"#000":"",Ge.querySelector("#musicBtn").textContent=zt.settings.music?"\u266B":"\u266B\u0338",Ge.querySelector("#profileBtn").innerHTML=jc(24)+`<span>${it.signedIn?Kt(it.username):"Sign in"}</span>`,Ge.querySelector("#partyBtn").innerHTML=At.view?`\u{1F465} Party ${At.view.code} \xB7 ${At.view.players.length} in`:"\u{1F465} Play with friends"}function Xs(i){let t=Math.max(0,Math.min(ln.length-1,z.selected+i));t!==z.selected&&(z.selected=t,zt.play("select"),Cn())}Ge.querySelector("#musicBtn").addEventListener("click",()=>{zt.unlock(),zt.set("music",!zt.settings.music),Cn()});Ge.querySelector("#settingsBtn").addEventListener("click",()=>cd());Ge.querySelector("#profileBtn").addEventListener("click",()=>{zt.unlock(),po()});Ge.querySelector("#partyBtn").addEventListener("click",()=>{zt.unlock(),Cr()&&fd()});Ge.querySelector("#fullBtn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()});function On(i){Ae(),z.overlay=i,si.append(i)}function Ae(){z.overlay?.remove(),z.overlay=null}function qs(i,t,e,n,s){let r=_e(`<button class="choice ${n}"><span class="sym">${i}</span><b>${t}</b><span>${e}</span></button>`);return r.addEventListener("click",s),r}function Zv(){let i=ln[z.selected],t=_e(`<div class="scrim"><div class="panel">
    <span class="tag pro">PRO</span>
    <h2>${Kt(i.title)} is part of MoveCam Pro</h2>
    <p>Pro isn't on sale yet. Want early access? Send your username to a moderator and they can unlock it for you.</p>
    <div class="idbox"><span>${Kt(it.username??"")}</span><button class="btn" id="copyId">Copy</button></div>
    <button class="btn accent big" id="okBtn">OK</button>
    <p style="font-size:12px;color:var(--tertiary)">Raise a hand or press Space to close</p></div></div>`);t.querySelector("#copyId").addEventListener("click",()=>navigator.clipboard?.writeText(it.username??"")),t.querySelector("#okBtn").addEventListener("click",Ae),t.addEventListener("click",e=>{e.target===t&&Ae()}),t.dataset.kind="pro",On(t)}function po(i="signup",{gate:t=!1}={}){let e=s=>ii.map((r,a)=>`<button type="button" class="swatch ${a===s?"on":""}" data-i="${a}" style="background:${r}" aria-label="Color ${a+1}"></button>`).join(""),n;if(it.signedIn){let s=it.isPro?it.plan==="trial"?"Pro trial"+(it.expiresAt?" until "+new Date(it.expiresAt).toLocaleDateString():""):"MoveCam Pro":"Free plan";n=_e(`<div class="scrim"><div class="panel account">
      <div class="who">${jc(72)}<div><h2>${Kt(it.username)}</h2><p>${s}</p></div></div>
      <div class="field"><label>Color</label><div class="swatches">${e(it.avatar)}</div></div>
      <form class="mail field"><label>Recovery email <small>Only used to reset your password</small></label>
        <div class="inline"><input name="email" type="email" placeholder="you@example.com" value="${Kt(it.email??"")}" autocomplete="email"><button class="btn" type="submit">Save</button></div></form>
      <details><summary>Change password</summary>
        <form class="pw"><input name="current" type="password" placeholder="Current password" autocomplete="current-password">
        <input name="next" type="password" placeholder="New password (6+ characters)" autocomplete="new-password">
        <button class="btn" type="submit">Save password</button></form></details>
      <div class="err"></div>
      <div class="actions"><button class="btn" id="signOutBtn">Sign out</button><button class="btn accent big" id="doneBtn">Done</button></div>
    </div></div>`);let r=n.querySelector(".err");n.querySelectorAll(".swatch").forEach(a=>a.addEventListener("click",async()=>{let o=Number(a.dataset.i);n.querySelectorAll(".swatch").forEach(c=>c.classList.toggle("on",c===a)),it.avatar=o,ye("avatar",o),n.querySelector(".who .avatar").style.background=ii[o],Cn();let l=await ni("/api/account/profile",{method:"POST",body:{avatar:o},auth:!0});l.ok||(r.textContent=l.data.error??"Couldn't save your color.")})),n.querySelector("form.mail").addEventListener("submit",async a=>{a.preventDefault();let o=await ni("/api/account/profile",{method:"POST",auth:!0,body:{email:a.target.email.value.trim()}});o.ok?(ao(o.data),r.textContent="",vn(o.data.email?"Recovery email saved.":"Recovery email removed.")):r.textContent=o.data.error??"Couldn't save your email."}),n.querySelector("form.pw").addEventListener("submit",async a=>{a.preventDefault();let o=a.target,l=await ni("/api/account/profile",{method:"POST",auth:!0,body:{currentPassword:o.current.value,newPassword:o.next.value}});l.ok?(ao(l.data),o.reset(),n.querySelector("details").open=!1,r.textContent="",vn("Password changed. Other devices are signed out.")):r.textContent=l.data.error??"Couldn't change your password."}),n.querySelector("#signOutBtn").addEventListener("click",()=>{Ae(),od()}),n.querySelector("#doneBtn").addEventListener("click",Ae)}else{let s=Math.floor(Math.random()*ii.length);n=_e(`<div class="scrim"><div class="panel account">
      <img class="logo" src="${Zi}icons/icon-180.png" alt="">
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
    </div></div>`);let r=n.querySelector("form.auth"),a=n.querySelector("form.forgot"),o=r.querySelector(".err"),l=a.querySelector(".err"),c=d=>{i=d;let f=d==="forgot";r.classList.toggle("hidden",f),a.classList.toggle("hidden",!f),n.querySelector(".seg").classList.toggle("hidden",f),n.querySelectorAll(".seg button").forEach(g=>g.classList.toggle("on",g.dataset.m===d)),n.querySelectorAll(".signup-only").forEach(g=>g.classList.toggle("hidden",d!=="signup")),n.querySelectorAll(".signin-only").forEach(g=>g.classList.toggle("hidden",d!=="signin")),n.querySelector(".title").textContent=f?"Reset your password":d==="signup"?"Welcome to MoveCam":"Welcome back",n.querySelector(".lead").textContent=f?"We'll email a code to your account's recovery email.":d==="signup"?"Pick a username to start playing. Your scores and Pro follow you to every device.":"Sign in with your username (or email) and password.",r.querySelector("button[type=submit]").textContent=d==="signup"?"Create account":"Sign in",r.username.placeholder=d==="signup"?"Username":"Username or email",r.password.placeholder=d==="signup"?"Password (6+ characters)":"Password",r.password.autocomplete=d==="signup"?"new-password":"current-password",o.textContent="",l.textContent="",setTimeout(()=>(f?a.who:r.username).focus(),30)};n.querySelectorAll(".seg button").forEach(d=>d.addEventListener("click",()=>c(d.dataset.m))),n.querySelectorAll(".swatch").forEach(d=>d.addEventListener("click",()=>{s=Number(d.dataset.i),n.querySelectorAll(".swatch").forEach(f=>f.classList.toggle("on",f===d))}));let h=(d,f)=>{ao(d.data),Ae(),zt.play("confirm"),vn(f),th()};r.addEventListener("submit",async d=>{d.preventDefault();let f=r.username.value.trim(),g=r.password.value,v=r.email.value.trim();if(i==="signup"){if(!/^[A-Za-z0-9_]{3,16}$/.test(f)){o.textContent="Usernames are 3 to 16 letters, numbers or _";return}if(g.length<6){o.textContent="Passwords need at least 6 characters";return}if(v&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)){o.textContent="That email doesn't look right";return}}let p=r.querySelector("button[type=submit]");p.disabled=!0,o.textContent="";let m=i==="signup"?await ni("/api/account/signup",{method:"POST",body:{username:f,password:g,avatar:s,email:v||void 0,playerId:it.id}}):await ni("/api/account/login",{method:"POST",body:{username:f,password:g}});if(p.disabled=!1,!m.ok){o.textContent=m.data.error??"Something went wrong. Try again.";return}h(m,i==="signup"?`Welcome to MoveCam, ${m.data.username}!`:`Welcome back, ${m.data.username}!`)});let u=!1;a.addEventListener("submit",async d=>{d.preventDefault();let f=a.who.value.trim();if(!f){l.textContent="Enter your username or email";return}let g=a.querySelector("button[type=submit]");if(g.disabled=!0,l.textContent="",!u){let p=await ni("/api/account/forgot",{method:"POST",body:{who:f}});if(g.disabled=!1,!p.ok){l.textContent=p.data.error??"Couldn't send a code. Try again.";return}u=!0,a.querySelector(".code-step").classList.remove("hidden"),n.querySelector(".lead").textContent=p.data.message,g.textContent="Reset password",a.code.focus();return}let v=await ni("/api/account/reset",{method:"POST",body:{who:f,code:a.code.value,newPassword:a.next.value}});if(g.disabled=!1,!v.ok){l.textContent=v.data.error??"Couldn't reset your password.";return}h(v,`Password changed. Welcome back, ${v.data.username}!`)}),n.querySelector("#forgotBtn").addEventListener("click",()=>c("forgot")),n.querySelector("#backToSignIn").addEventListener("click",()=>c("signin")),n.querySelector("#notNow")?.addEventListener("click",Ae),c(i)}(!t||it.signedIn)&&n.addEventListener("click",s=>{s.target===n&&Ae()}),n.dataset.kind=t?"gate":"account",On(n)}function Cr(){return it.signedIn?!0:(po(Te("hadAccount",!1)?"signin":"signup",{gate:!0}),!1)}function th(){ye("hadAccount",!0),Te("guideDone",!1)||ud()}function cd(){let i=s=>`<button class="switch ${s?"on":""}"></button>`,t=_e(`<div class="scrim"><div class="panel settings">
    <h2>Settings</h2>
    <div class="row"><label>Music</label>${i(zt.settings.music)}</div>
    <div class="row"><label>Music volume</label><input type="range" min="0" max="1" step="0.05" value="${zt.settings.volume}"></div>
    <div class="row"><label>Sound effects</label>${i(zt.settings.sound)}</div>
    <div class="row"><label>Show tracking skeleton</label>${i(Te("skeleton",!0))}</div>
    <div class="row ${Ze?"hidden":""}"><label>Share anonymous play stats<small>Game names, scores and play time. Never video.</small></label>${i(Te("shareUsage",!0))}</div>
    <div class="row"><label>Account<small>${it.isPro?it.plan==="trial"?"Pro trial":"Pro":"Free plan"}</small></label><button class="btn profile" id="acctBtn">${jc(24)}<span>${Kt(it.username??"Sign in")}</span></button></div>
    <div class="row"><label>How to move<small>A one-minute guide to the four moves</small></label><button class="btn" id="guideBtn">Show guide</button></div>
    <button class="btn accent big" style="align-self:center;margin-top:8px" id="doneBtn">Done</button></div></div>`);t.querySelector("#guideBtn").addEventListener("click",()=>ud()),t.querySelector("#acctBtn").addEventListener("click",()=>po());let e=t.querySelectorAll(".switch"),n=["music","sound","skeleton","shareUsage"];e.forEach((s,r)=>s.addEventListener("click",()=>{let a=!s.classList.contains("on");s.classList.toggle("on",a),n[r]==="music"||n[r]==="sound"?zt.set(n[r],a):ye(n[r],a),Cn()})),t.querySelector("input[type=range]").addEventListener("input",s=>zt.set("volume",parseFloat(s.target.value))),t.querySelector("#doneBtn").addEventListener("click",Ae),t.addEventListener("click",s=>{s.target===t&&Ae()}),t.dataset.kind="settings",On(t)}function hd(){let i=_e(`<div class="scrim"><div class="panel">
    <div class="eyebrow">${Kt(z.info.title)}</div>
    <h2 class="headline">Get in position</h2>
    <div class="pill"><span class="msg">Can't see anyone</span></div>
    <ul class="moves">${z.info.moves.map(e=>`<li>${Kt(e)}</li>`).join("")}</ul>
    <p>Stand back so the camera sees you from your head to below your hips. The frame turns green when you're in the right spot.</p>
    <div class="choices"></div></div></div>`);i.querySelector(".choices").append(qs("\u270B","Start now","Raise a hand \xB7 Space","good",()=>$s()),qs("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>Ci())),i.dataset.kind="waiting",On(i)}function Jv(){let i=_e('<div class="scrim"><div class="panel"><h2>Paused</h2><div class="choices"></div></div></div>');i.querySelector(".choices").append(qs("\u270B","Resume","Raise a hand \xB7 Space","good",()=>gd()),qs("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>Ci())),i.dataset.kind="paused",On(i)}function jv(){let{result:i,isBest:t}=z,e=_e(`<div class="scrim"><div class="panel">
    ${t?`<span class="tag pro">NEW BEST${it.signedIn?" \xB7 "+Kt(it.username.toUpperCase()):""}</span>`:`<div class="eyebrow">${it.signedIn?"Nice one, "+Kt(it.username):"Game over"}</div>`}
    <div class="score">${i.score.toLocaleString()}</div>
    <p>${Kt(i.detail)}</p>
    ${t?"":`<p style="color:var(--tertiary)">Best ${fo(z.info.id).toLocaleString()}</p>`}
    <div class="choices"></div></div></div>`);e.querySelector(".choices").append(qs("\u270B","Play again","Raise a hand \xB7 Space","good",()=>vd()),qs("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>Ci())),e.dataset.kind="over",On(e)}var Ai=[{art:"\u{1F9CD}",title:"Step back until the frame turns green",text:"The camera needs to see you from your head to below your hips. About 2 m (6 ft) from the screen usually works.",progress:(i,t)=>t.goodSince?Math.min(1,(performance.now()-t.goodSince)/1200):0},{art:"\u270B",title:"Raise one hand above your head",event:["confirm"],text:"Hold it there for a moment. That's how you start a game or pick something.",progress:i=>i.confirmProgress},{art:"\u{1F44B}",title:"Swing an arm out to the side",event:["swipeLeft","swipeRight"],text:"A quick sweep, like waving someone past. Right arm goes right, left arm goes left. That's how you browse games.",progress:()=>0},{art:"\u{1F64C}",title:"Put both hands up and hold",event:["back"],text:"That pauses any game, and goes back from menus.",progress:i=>i.handsUpProgress}],xe={step:0,goodSince:null,advancing:!1};function ud(){xe.step=0,xe.goodSince=null,xe.advancing=!1,Zt.resetGestures();let i=_e(`<div class="scrim guide"><div class="panel">
    <div class="dots">${Ai.map(()=>"<i></i>").join("")}<i></i></div>
    <div class="art"></div><h2></h2><p class="text"></p>
    <div class="bar"><span></span></div>
    <div class="pill"><span class="msg"></span></div>
    <div class="actions"><button class="link" id="skipGuide">Skip guide</button><button class="btn" id="nextGuide">Next \u2192</button></div>
  </div></div>`);i.querySelector("#skipGuide").addEventListener("click",Ks),i.querySelector("#nextGuide").addEventListener("click",()=>mo()),i.dataset.kind="guide",On(i),dd()}function dd(){let i=z.overlay;if(i?.dataset.kind!=="guide")return;if(i.querySelectorAll(".dots i").forEach((e,n)=>e.classList.toggle("on",n<=xe.step)),i.querySelector(".panel").classList.remove("done"),xe.step>=Ai.length){i.querySelector(".art").textContent="\u{1F389}",i.querySelector("h2").textContent="You've got it!",i.querySelector(".text").textContent=it.signedIn?"That's everything. Raise a hand to jump into your first game.":"That's everything. Create an account to keep your scores on every device, or raise a hand to start playing.",i.querySelector(".bar").classList.add("hidden"),i.querySelector(".pill").classList.add("hidden");let e=i.querySelector(".actions");if(e.innerHTML="",!it.signedIn){let s=_e('<button class="btn">Create account</button>');s.addEventListener("click",()=>{Ks(),po("signup")}),e.append(s)}let n=_e(`<button class="btn accent big">\u270B Let's play</button>`);n.addEventListener("click",Ks),e.append(n);return}let t=Ai[xe.step];i.querySelector(".art").textContent=t.art,i.querySelector("h2").textContent=t.title,i.querySelector(".text").textContent=t.text,i.querySelector(".pill").classList.toggle("hidden",xe.step!==0),i.querySelector(".bar").classList.toggle("hidden",xe.step===2),i.querySelector(".bar span").style.width="0%"}function mo(i=!1){if(xe.advancing)return;if(xe.step>=Ai.length){Ks();return}let t=()=>{xe.advancing=!1,xe.step++,xe.goodSince=null,Zt.resetGestures(),dd()};if(!i){t();return}xe.advancing=!0,zt.play("confirm"),z.overlay?.querySelector(".panel").classList.add("done"),setTimeout(t,800)}function Ks(){ye("guideDone",!0),Ae(),Zt.resetGestures(),Cn()}function Qv(i){if(xe.step>=Ai.length){i==="confirm"&&Ks();return}Ai[xe.step].event?.includes(i)&&mo(!0)}function ty(i){let t=z.overlay;if(xe.step>=Ai.length||xe.advancing)return;if(xe.step===0){let n=t.querySelector(".pill");n.classList.toggle("good",i.status.good),n.querySelector(".msg").textContent=i.status.message,xe.goodSince=i.status.good?xe.goodSince??performance.now():null}let e=Ai[xe.step].progress(i,xe);t.querySelector(".bar span").style.width=`${Math.round(e*100)}%`,xe.step===0&&e>=1&&mo(!0)}var At={ws:null,view:null,code:null,round:0,sendTimer:null,retries:0,leaving:!1,scores:[]},co=()=>At.view&&it.username&&At.view.host?.toLowerCase()===it.username.toLowerCase(),Ar=_e('<div id="partyBoard" class="hidden"></div>');si.append(Ar);function ey(){return Ze?"wss://movecam.bhswebsite.org":location.origin.replace(/^http/,"ws")}async function ny(){let i=await ni("/api/party/create",{method:"POST",auth:!0});if(!i.ok){vn(i.data.error??"Couldn't make a party.");return}eh(i.data.code)}function eh(i){Ys(!0),At.code=i.toUpperCase(),At.leaving=!1;let t=new WebSocket(`${ey()}/api/party/${At.code}?token=${encodeURIComponent(it.token)}`);At.ws=t,t.onopen=()=>{At.retries=0},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.t==="error"){vn(n.message),At.leaving=!0;return}if(n.t==="scores"){At.scores=n.players,nh();return}n.t==="state"&&iy(n)},t.onclose=e=>{if(At.ws===t){if(At.ws=null,At.leaving||e.code===4e3||e.code===4001){e.code===4001&&vn("You joined this party from another device."),$c();return}At.retries++<4?setTimeout(()=>{At.code&&!At.ws&&eh(At.code)},1200*At.retries):(vn("Lost connection to the party."),$c())}}}function $c(){clearInterval(At.sendTimer),Object.assign(At,{ws:null,view:null,code:null,round:0,sendTimer:null,scores:[]}),Ar.classList.add("hidden"),z.overlay?.dataset.kind==="party"&&go(),Cn()}function Ys(i=!1){if(!(!At.ws&&!At.code)){At.leaving=!0;try{At.ws?.send(JSON.stringify({t:"leave"})),At.ws?.close(1e3)}catch{}$c(),i||vn("You left the party.")}}function Ri(i){At.ws?.readyState===WebSocket.OPEN&&At.ws.send(JSON.stringify(i))}function iy(i){let t=At.view;At.view=i,At.scores=i.players,Cn(),i.phase==="playing"&&i.round!==At.round?(At.round=i.round,ry(i)):i.phase==="results"&&t?.phase!=="results"?Zc():i.phase==="lobby"&&t&&t.phase!=="lobby"&&z.screen==="game"?(Ci(),fd()):z.overlay?.dataset.kind==="party"?go():z.overlay?.dataset.kind==="partyResults"&&i.phase==="results"&&Zc(),nh()}function fd(){let i=_e('<div class="scrim"><div class="panel partysheet"></div></div>');i.addEventListener("click",t=>{t.target===i&&Ae()}),i.dataset.kind="party",On(i),go()}function sy(i){let t=At.view?.host===i.name;return`<div class="pchip ${i.online===!1?"away":""}"><span class="avatar" style="width:34px;height:34px;font-size:16px;background:${ii[i.avatar%ii.length]}">${Kt(i.name[0].toUpperCase())}</span>
    <b>${Kt(i.name)}</b>${t?'<span class="tag">HOST</span>':""}${i.pro?'<span class="tag pro">PRO</span>':""}</div>`}function go(){let i=z.overlay?.dataset.kind==="party"?z.overlay.querySelector(".panel"):null;if(!i)return;let t=At.view;if(!At.code){i.innerHTML=`<h2>Play with friends</h2>
      <p>Everyone plays the same game at the same time, each on their own Mac, iPad or computer. Scores show up live.</p>
      <div class="choices"><button class="choice good" id="mkParty"><span class="sym">\u{1F389}</span><b>Create a party</b><span>You pick the game and start it</span></button></div>
      <form class="join"><input name="code" maxlength="4" placeholder="CODE" autocapitalize="characters" autocomplete="off" spellcheck="false"><button class="btn big" type="submit">Join</button></form>
      <p class="small">Up to 4 players. A Pro host can have up to 8.</p>
      <button class="link" id="closeParty">Close</button>`,i.querySelector("#mkParty").addEventListener("click",ny),i.querySelector("form.join").addEventListener("submit",r=>{r.preventDefault();let a=r.target.code.value.trim().toUpperCase();if(!/^[A-Z]{4}$/.test(a)){vn("Party codes are 4 letters.");return}eh(a)}),i.querySelector("#closeParty").addEventListener("click",Ae),setTimeout(()=>i.querySelector("input")?.focus(),30);return}if(!t){i.innerHTML=`<h2>Joining ${Kt(At.code)}\u2026</h2><button class="link" id="cancelJoin">Cancel</button>`,i.querySelector("#cancelJoin").addEventListener("click",()=>Ys(!0));return}let e=co(),n=t.players.find(r=>r.name===t.host),s=ln.map(r=>{let a=r.pro&&!n?.pro;return`<button class="gpick ${r.id===t.game?"on":""} ${a?"locked":""}" data-id="${r.id}" ${!e||a?"disabled":""}>
      <span class="thumb" style="background-image:url('${Zi}cards/${r.id}.jpg')"></span><span>${Kt(r.title)}${a?" \u{1F512}":""}</span></button>`}).join("");i.innerHTML=`<div class="eyebrow">Party code</div>
    <div class="bigcode">${Kt(t.code)}</div>
    <p>Friends join from <b>Play with friends</b> with this code.</p>
    <div class="players">${t.players.map(sy).join("")}<span class="count">${t.players.length}/${t.max}</span></div>
    <div class="field"><label>${e?"Pick a game":`${Kt(t.host??"The host")} picks the game`}</label><div class="gpicks">${s}</div></div>
    <div class="actions">
      <button class="btn" id="leaveParty">Leave party</button>
      ${e?`<button class="btn accent big" id="startParty" ${t.players.length<1?"disabled":""}>\u270B Start ${Kt(ln.find(r=>r.id===t.game)?.title??"")}</button>`:`<span class="waiting">Waiting for ${Kt(t.host??"the host")} to start\u2026</span>`}
    </div>`,i.querySelectorAll(".gpick").forEach(r=>r.addEventListener("click",()=>Ri({t:"game",game:r.dataset.id}))),i.querySelector("#leaveParty").addEventListener("click",()=>{Ys(),go()}),i.querySelector("#startParty")?.addEventListener("click",()=>Ri({t:"start"}))}function ry(i){let t=ln.find(e=>e.id===i.game);t&&(Ae(),vo(t,{party:!0}),$s(Math.max(0,i.startAt-Date.now())),clearInterval(At.sendTimer),At.sendTimer=setInterval(()=>{z.gameStarted&&z.game&&!z.game.finished&&Ri({t:"score",score:z.game.score??0})},500),nh())}function nh(){let i=At.view&&z.screen==="game"&&At.view.phase!=="lobby";if(Ar.classList.toggle("hidden",!i),!i)return;let t=[...At.scores??[]].sort((e,n)=>n.score-e.score);Ar.innerHTML=t.map((e,n)=>`<div class="row ${e.name.toLowerCase()===it.username?.toLowerCase()?"me":""}"><span class="pos">${n+1}</span><span class="name">${Kt(e.name)}</span><span class="pts">${(e.score??0).toLocaleString()}</span>${e.done?'<span class="st">\u2713</span>':""}</div>`).join("")}function ay(i){if(clearInterval(At.sendTimer),Ri({t:"done",score:i.score,detail:i.detail}),At.view?.phase==="results"){Zc();return}let t=_e(`<div class="scrim"><div class="panel">
    <div class="eyebrow">Your score</div><div class="score">${i.score.toLocaleString()}</div><p>${Kt(i.detail)}</p>
    <h2 class="headline" style="font-size:22px">Waiting for the others to finish\u2026</h2>
    <button class="link" id="leaveMid">Leave party</button></div></div>`);t.querySelector("#leaveMid").addEventListener("click",()=>{Ys(),Ci()}),t.dataset.kind="partyWait",On(t)}function Zc(){let i=At.view;if(!i)return;clearInterval(At.sendTimer),z.screen==="game"&&z.phase!=="over"&&(z.phase="over");let t=["\u{1F947}","\u{1F948}","\u{1F949}"],e=i.results.findIndex(s=>s.name.toLowerCase()===it.username?.toLowerCase()),n=_e(`<div class="scrim"><div class="panel results">
    <div class="eyebrow">${Kt(ln.find(s=>s.id===i.game)?.title??"")} \xB7 Results</div>
    <h2>${e===0?"You won! \u{1F3C6}":e>0?`You came ${e+1}${["st","nd","rd"][e]??"th"}`:"Results"}</h2>
    <div class="ranking">${i.results.map((s,r)=>`<div class="rank ${r===e?"me":""}"><span class="m">${t[r]??r+1}</span>
      <span class="avatar" style="width:30px;height:30px;font-size:14px;background:${ii[s.avatar%ii.length]}">${Kt(s.name[0].toUpperCase())}</span>
      <b>${Kt(s.name)}</b><span class="d">${Kt(s.detail??"")}</span><span class="pts">${s.score.toLocaleString()}</span></div>`).join("")}</div>
    <div class="actions"><button class="btn" id="leaveRes">Leave party</button>
      ${co()?'<button class="btn accent big" id="nextRound">\u270B Next game</button>':`<span class="waiting">Waiting for ${Kt(i.host??"the host")}\u2026</span>`}</div>
  </div></div>`);n.querySelector("#leaveRes").addEventListener("click",()=>{Ys(),Ci()}),n.querySelector("#nextRound")?.addEventListener("click",()=>Ri({t:"lobby"})),n.dataset.kind="partyResults",On(n),zt.play(e===0?"combo":"pause")}var pd={hub:Zt,audio:zt,hud:Ws,renderer:Rn,aspect:()=>window.innerWidth/Math.max(window.innerHeight,1),onFinished:i=>oy(i)};function ih(){if(!Cr())return;let i=ln[z.selected];if(i.pro&&!it.isPro){uo("locked",i.id),zt.play("pause"),Zv();return}ye("lastGame",i.id),zt.play("confirm"),vo(i)}function vo(i,{party:t=!1}={}){clearTimeout(z.countdownTimer),z.inParty=t,md(),Ws.reset(),z.info=i,z.game=i.make(pd),z.gameStarted=!1,z.goodSince=null,z.missingSince=null,z.screen="game",z.phase="waiting",Zt.handsUpHold=i.pauseHold,Zt.resetGestures(),Ge.classList.add("hidden"),Ws.show(!0),Rr.classList.remove("hidden"),zt.playMusic(i.id),t||hd()}function md(){z.game&&(z.game.dispose(),z.game=null)}function $s(i=0){Ae(),clearTimeout(z.countdownTimer);let t=3;if(z.phase="countdown",i>2400){Ei.innerHTML='<span style="font-size:48px">Get ready\u2026</span>',Ei.classList.remove("hidden"),z.countdownTimer=setTimeout(()=>$s(2400),i-2400);return}let e=()=>{if(z.phase==="countdown"){if(t===0){Ei.classList.add("hidden"),zt.play("go"),Zt.calibrate(),z.phase="playing",z.missingSince=null,Zt.resetGestures(),z.gameStarted||(z.gameStarted=!0,z.startedAt=performance.now(),uo("start",z.info.id),z.game.start());return}Ei.innerHTML=`<span>${t}</span>`,Ei.classList.remove("hidden"),zt.play("beep"),t-=1,z.countdownTimer=setTimeout(e,800)}};e()}function sh(i){z.screen!=="game"||!(z.phase==="playing"||z.phase==="countdown")||(clearTimeout(z.countdownTimer),Ei.classList.add("hidden"),z.phase=z.gameStarted?"paused":"waiting",Zt.resetGestures(),zt.play("pause"),zt.duck(!0),i&&vn(i),z.phase==="paused"?Jv():hd())}function gd(){z.phase==="paused"&&(Zt.resetGestures(),zt.duck(!1),$s())}function Ci(){clearTimeout(z.countdownTimer),z.gameStarted&&z.phase!=="over"&&z.info&&uo("quit",z.info.id,z.game?.score??0,(performance.now()-z.startedAt)/1e3),z.inParty&&At.view?.phase==="playing"&&Ri({t:"done",score:z.game?.score??0,detail:"Left early"}),z.inParty=!1,clearInterval(At.sendTimer),Ar.classList.add("hidden"),Ae(),Ei.classList.add("hidden"),md(),z.screen="menu",z.phase="waiting",Ws.show(!1),Rr.classList.add("hidden"),Ge.classList.remove("hidden"),Zt.handsUpHold=1,Zt.resetGestures(),Zt.calibrate(),zt.play("pause"),zt.playMusic("menu"),Cn()}function vd(){z.info&&(zt.play("confirm"),vo(z.info))}function oy(i){if(z.screen!=="game"||!z.info)return;let t=i.score>fo(z.info.id);if(t&&ye("best."+z.info.id,i.score),uo("finish",z.info.id,i.score,(performance.now()-z.startedAt)/1e3),z.result=i,z.isBest=t,z.phase="over",Zt.resetGestures(),zt.duck(!0),t&&setTimeout(()=>zt.play("combo"),1200),z.inParty&&At.view){ay(i);return}jv()}var yd=new Set(["settings","account","gate","party"]);Zt.onEvent(i=>{if(z.overlay?.dataset.kind==="party"&&At.view?.phase==="lobby"){i==="confirm"&&co()?Ri({t:"start"}):i==="back"&&Ae();return}if(!yd.has(z.overlay?.dataset.kind)){if(z.overlay?.dataset.kind==="guide"){Qv(i);return}if(z.overlay?.dataset.kind==="partyResults"){i==="confirm"&&co()&&Ri({t:"lobby"});return}if(z.overlay?.dataset.kind!=="partyWait"){if(z.screen==="menu"){if(z.overlay?.dataset.kind==="pro"){(i==="confirm"||i==="back")&&Ae();return}i==="confirm"?ih():i==="swipeLeft"?Xs(-1):i==="swipeRight"&&Xs(1);return}i==="confirm"?z.phase==="waiting"?$s():z.phase==="paused"?gd():z.phase==="over"&&!z.inParty&&vd():i==="back"&&(z.phase==="playing"||z.phase==="countdown"?sh():Ci())}}});Rr.addEventListener("click",()=>sh());window.addEventListener("keydown",i=>{let t=i.code==="Escape";if(yd.has(z.overlay?.dataset.kind)){t&&z.overlay.dataset.kind!=="gate"&&Ae();return}if(z.overlay?.dataset.kind==="guide"){t?Ks():(i.code==="Space"||i.code==="Enter"||i.code==="ArrowRight")&&mo(),i.preventDefault();return}if(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)return;zt.unlock();let e=i.code==="Space"||i.code==="Enter";if(z.screen==="menu"){if(z.overlay?.dataset.kind==="pro"){(e||t)&&Ae(),i.preventDefault();return}if(i.code==="ArrowLeft")Xs(-1);else if(i.code==="ArrowRight")Xs(1);else if(e)ih();else return;i.preventDefault();return}if(t){Zt.emit("back"),i.preventDefault();return}if(e&&z.phase!=="playing"){Zt.emit("confirm"),i.preventDefault();return}if(z.phase==="playing"){if(i.code==="ArrowLeft")Zt.keyboardStep(-1);else if(i.code==="ArrowRight")Zt.keyboardStep(1);else if(i.code==="ArrowUp"||i.code==="Space")Zt.keyboardJump();else if(i.code==="ArrowDown")Zt.keyboardCrouch();else return;i.preventDefault()}});var gn=Er.getContext("2d"),id=0;Zt.onSnapshot(i=>{let t=i.status.good;if(z.overlay?.dataset.kind==="guide"&&ty(i),Ti.classList.toggle("good",t),Ti.querySelector(".msg").textContent=i.status.message,z.overlay?.dataset.kind==="waiting"){let o=z.overlay.querySelector(".pill");o.classList.toggle("good",t),o.querySelector(".msg").textContent=i.status.message,z.overlay.querySelector(".headline").textContent=t?"Hold still":"Get in position"}let e=performance.now();if(Ze||e-id<30)return;id=e;let n=Er.width=Er.clientWidth*devicePixelRatio,s=Er.height=Er.clientHeight*devicePixelRatio;gn.clearRect(0,0,n,s);let r=i.pose;if(r&&Te("skeleton",!0)){let o=l=>[l.x*n,(1-l.y)*s];gn.strokeStyle="rgba(255,255,255,.7)",gn.lineWidth=2.5*devicePixelRatio,gn.lineCap="round",gn.beginPath();for(let[l,c]of Vu){let h=r.joints[l],u=r.joints[c];!h||!u||(gn.moveTo(...o(h)),gn.lineTo(...o(u)))}gn.stroke(),gn.fillStyle=t?"#30c75a":"#ed4038";for(let l of Object.values(r.joints)){let[c,h]=o(l);gn.beginPath(),gn.arc(c,h,4*devicePixelRatio,0,Math.PI*2),gn.fill()}}let a=Ti.querySelector(".rings");a.innerHTML="";for(let[o,l]of[[i.confirmProgress,"\u270B"],[i.handsUpProgress,"\u{1F64C}"]])o<.05||a.insertAdjacentHTML("beforeend",`<svg class="ring" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="rgba(0,0,0,.7)"/><circle cx="22" cy="22" r="18" stroke="#30c75a" stroke-width="4" fill="none" stroke-dasharray="113" stroke-dashoffset="${113*(1-o)}" transform="rotate(-90 22 22)" stroke-linecap="round"/><text x="22" y="28" font-size="16" text-anchor="middle">${l}</text></svg>`)});var sd="";setInterval(()=>{let i=z.screen+":"+z.phase;Ze&&i!==sd&&(sd=i,Nn({type:"state",screen:z.screen,phase:z.phase}));let t=Zt.latest;if(z.screen==="menu"){if(z.overlay||!t.status.good){z.stepArmed=!0;return}z.stepArmed&&t.lateral<-.7?(z.stepArmed=!1,Xs(-1)):z.stepArmed&&t.lateral>.7?(z.stepArmed=!1,Xs(1)):Math.abs(t.lateral)<.35&&(z.stepArmed=!0);return}z.phase==="waiting"&&z.overlay?.dataset.kind==="waiting"?t.status.good?(z.goodSince??=performance.now(),performance.now()-z.goodSince>1200&&$s()):z.goodSince=null:z.phase==="playing"&&(t.status===Qe.noPerson&&!t.keyboardActive&&ly()?(z.missingSince??=performance.now(),performance.now()-z.missingSince>3e3&&sh("Paused \u2014 we lost sight of you")):z.missingSince=null);let e=z.phase==="playing"?t.handsUpProgress:0;Yc.classList.toggle("hidden",e<.15),Yc.querySelector(".arc").setAttribute("stroke-dashoffset",String(176*(1-e)))},100);function rh(){Rn.setSize(window.innerWidth,window.innerHeight,!1),z.game?.resize(pd.aspect())}window.addEventListener("resize",rh);rh();var rd=performance.now(),qc=0,Kc=performance.now();Rn.setAnimationLoop(()=>{let i=performance.now(),t=Math.min((i-rd)/1e3,1/20);rd=i;let e=z.game;z.screen==="game"&&e&&(z.phase==="playing"&&!e.finished?(e.elapsed+=t,e.update(t,Zt.latest)):e.idle(t),Rn.render(e.scene,e.camera),qc++,i-Kc>3e3&&(qc/((i-Kc)/1e3)<50&&Gs<Tr.length-1&&(Gs++,Rn.setPixelRatio(Math.min(window.devicePixelRatio,Tr[Gs])),rh()),qc=0,Kc=i))});var ei=null;function ly(){return Ze||ei?.state==="running"}async function xd(i){if(!Ze&&(ei??=new Ya(Zt,Zi),ei.onState=(t,e)=>{let n=Ti.querySelector(".offline");n.textContent=t==="running"?"":t==="denied"?"Camera blocked":t==="error"?"Camera error":"Starting camera\u2026",n.classList.toggle("hidden",t==="running"),t==="denied"&&vn("Allow camera access in your browser settings to play with your body."),t==="error"&&e&&console.warn(e)},await ei.start(i),ei.state==="running")){let t=Ti.querySelector(".frame");t.contains(ei.video)||t.prepend(ei.video);let e=Ge.querySelector("#cameraSelect"),n=await ei.listDevices();e.innerHTML=n.map((r,a)=>`<option value="${r.deviceId}">${Kt(r.label||"Camera "+(a+1))}</option>`).join("");let s=ei.stream?.getVideoTracks()[0]?.getSettings().deviceId;s&&(e.value=s),e.onchange=()=>{ye("camera",e.value),xd(e.value)}}}function cy(){let i=_e(`<div id="start">
    <img src="${Zi}icons/icon-180.png" alt="">
    <h1>MoveCam</h1>
    <p>Your body is the controller. MoveCam uses your camera to see you move \u2014 video never leaves your device.</p>
    <button class="btn accent big" id="go">Start</button>
    <p style="font-size:13px;color:var(--tertiary)">Prop your device up, step back about 2 m (6 ft) and make sure the room is bright.</p>
  </div>`);i.querySelector("#go").addEventListener("click",()=>{zt.unlock(),zt.playMusic("menu"),i.remove(),xd(Te("camera",void 0)),Cr()&&th()}),si.append(i)}Gu(Zt);window.MoveCamNative.setAccount=({userId:i,plan:t,expiresAt:e})=>{if(i&&it.signedIn&&i!==it.id){Nn({type:"account",playerId:it.id,username:it.username});return}i&&(it.id=i),ho(t??"free",e??null)};window.MoveCamNative.setCameras=(i,t)=>{let e=Ge.querySelector("#cameraSelect");e.innerHTML=i.map(n=>`<option value="${Kt(n.id)}">${Kt(n.name)}</option>`).join(""),e.value=t,e.onchange=()=>Nn({type:"selectCamera",id:e.value})};window.MoveCamNative.setUpdate=i=>{let t=Ge.querySelector("#updateBtn");t.classList.toggle("hidden",!i),i&&(t.textContent=`\u2B07\uFE0E Update to ${i.version}`)};Ge.querySelector("#updateBtn").addEventListener("click",()=>Nn({type:"installUpdate"}));window.MoveCamNative.command=i=>{i==="back"&&Zt.emit("back"),i==="confirm"&&Zt.emit("confirm"),i==="settings"&&cd()};Cn();if(ro.has("preview")){Zt.simulateHands=!0;let i=ro.get("preview"),t=ln.findIndex(e=>e.id===i);t>=0&&(z.selected=t,vo(ln[t]),Ae(),z.phase="playing",z.gameStarted=!0,z.game.start(),Zt.keyboardStep(1),setTimeout(()=>Zt.keyboardJump(),1500),setTimeout(()=>z.game?.showcase?.(),Number(ro.get("showcase")??3500)),ro.has("clean")&&(Ti.classList.add("hidden"),Ws.show(!1),Rr.classList.add("hidden")))}else Ze?(zt.unlock(),zt.playMusic("menu"),Nn({type:"ready"}),Cr()&&th(),it.signedIn&&Nn({type:"account",playerId:it.id,username:it.username}),td()):(td(),ed(!0),setInterval(()=>ed(!1),20*60*1e3),cy());window.__movecam={state:z,hub:Zt,audio:zt,GAMES:ln,party:At};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
