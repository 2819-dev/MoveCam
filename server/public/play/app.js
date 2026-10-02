var yc="169";var ud=0,ih=1,dd=2;var au=1,xc=2,kn=3,ui=0,Be=1,Oe=2,li=0,ci=1,ds=2,sh=3,rh=4,fd=5,Pi=100,pd=101,md=102,gd=103,vd=104,yd=200,xd=201,_d=202,Md=203,Ko=204,Yo=205,bd=206,Sd=207,wd=208,Ed=209,Td=210,Ad=211,Rd=212,Cd=213,Pd=214,$o=0,Zo=1,Jo=2,fs=3,jo=4,Qo=5,tl=6,el=7,ou=0,Id=1,Ld=2,hi=0,Ud=1,Dd=2,Nd=3,_c=4,Fd=5,Od=6,Bd=7;var lu=300,ps=301,ms=302,nl=303,il=304,Na=306,Ui=1e3,Hn=1001,sl=1002,cn=1003,kd=1004;var Er=1005;var xn=1006,uo=1007;var Li=1008;var Xn=1009,cu=1010,hu=1011,nr=1012,Mc=1013,Di=1014,Vn=1015,cr=1016,bc=1017,Sc=1018,gs=1020,uu=35902,du=1021,fu=1022,Mn=1023,pu=1024,mu=1025,cs=1026,vs=1027,gu=1028,wc=1029,vu=1030,Ec=1031;var Tc=1033,Qr=33776,ta=33777,ea=33778,na=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,vl=37813,yl=37814,xl=37815,_l=37816,Ml=37817,bl=37818,Sl=37819,wl=37820,El=37821,ia=36492,Tl=36494,Al=36495,yu=36283,Rl=36284,Cl=36285,Pl=36286;var ra=2300,Il=2301,fo=2302,ah=2400,oh=2401,lh=2402;var zd=3200,Hd=3201;var xu=0,Vd=1,ai="",We="srgb",mi="srgb-linear",Ac="display-p3",Fa="display-p3-linear",aa="linear",ue="srgb",oa="rec709",la="p3";var Wi=7680;var ch=519,Gd=512,Wd=513,Xd=514,_u=515,qd=516,Kd=517,Yd=518,$d=519,Ll=35044;var hh="300 es",Gn=2e3,ca=2001,di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=1234567,Js=Math.PI/180,ys=180/Math.PI;function Wn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Rc(i,t){return(i%t+t)%t}function Zd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jd(i,t,e){return i!==t?(e-i)/(t-i):0}function js(i,t,e){return(1-e)*i+e*t}function jd(i,t,e,n){return js(i,t,1-Math.exp(-e*n))}function Qd(i,t=1){return t-Math.abs(Rc(i,t*2)-t)}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sf(i,t){return i+Math.random()*(t-i)}function rf(i){return i*(.5-Math.random())}function af(i){i!==void 0&&(uh=i);let t=uh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function of(i){return i*Js}function lf(i){return i*ys}function cf(i){return(i&i-1)===0&&i!==0}function hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function df(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mu={DEG2RAD:Js,RAD2DEG:ys,generateUUID:Wn,clamp:Ue,euclideanModulo:Rc,mapLinear:Zd,inverseLerp:Jd,lerp:js,damp:jd,pingpong:Qd,smoothstep:tf,smootherstep:ef,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:af,degToRad:of,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:hf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:df,normalize:ie,denormalize:_n},rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],_=s[4],x=s[7],R=s[2],T=s[5],E=s[8];return r[0]=a*v+o*M+l*R,r[3]=a*m+o*_+l*T,r[6]=a*p+o*x+l*E,r[1]=c*v+h*M+u*R,r[4]=c*m+h*_+u*T,r[7]=c*p+h*x+u*E,r[2]=d*v+f*M+g*R,r[5]=d*m+f*_+g*T,r[8]=d*p+f*x+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},po=new Bt;function bu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){let i=ha("canvas");return i.style.display="block",i}var dh={};function sa(i){i in dh||(dh[i]=!0,console.warn(i))}function pf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var fh=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ph=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hs={[mi]:{transfer:aa,primaries:oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[We]:{transfer:ue,primaries:oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fa]:{transfer:aa,primaries:la,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ph),fromReference:i=>i.applyMatrix3(fh)},[Ac]:{transfer:ue,primaries:la,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ph),fromReference:i=>i.applyMatrix3(fh).convertLinearToSRGB()}},vf=new Set([mi,Fa]),Qt={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Hs[t].toReference,s=Hs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Hs[i].primaries},getTransfer:function(i){return i===ai?aa:Hs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Hs[t].luminanceCoefficients)}};function hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xi,Ul=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=ha("canvas")),Xi.width=t.width,Xi.height=t.height;let n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ha("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hs(e[n]/255)*255):e[n]=hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yf=0,ua=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(go(s[a].image)):r.push(go(s[a]))}else r=go(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xf=0,rn=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=xn,a=Li,o=Mn,l=Xn,c=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Wn(),this.name="",this.source=new ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=lu;rn.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,x=(f+1)/2,R=(p+1)/2,T=(h+d)/4,E=(u+v)/4,P=(g+m)/4;return _>x&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=E/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ua(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends Dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},da=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,p*M);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let x=o*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vo=new C,mh=new fi,Ni=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Ar.subVectors(this.max,Vs),qi.subVectors(t.a,Vs),Ki.subVectors(t.b,Vs),Yi.subVectors(t.c,Vs),ti.subVectors(Ki,qi),ei.subVectors(Yi,Ki),Si.subVectors(qi,Yi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Si.z,Si.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Si.z,0,-Si.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Si.y,Si.x,0];return!yo(e,qi,Ki,Yi,Ar)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,qi,Ki,Yi,Ar))?!1:(Rr.crossVectors(ti,ei),e=[Rr.x,Rr.y,Rr.z],yo(e,qi,Ki,Yi,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new C,new C,new C,new C,new C,new C,new C,new C],gn=new C,Tr=new Ni,qi=new C,Ki=new C,Yi=new C,ti=new C,ei=new C,Si=new C,Vs=new C,Ar=new C,Rr=new C,wi=new C;function yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _f=new Ni,Gs=new C,xo=new C,xs=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_f.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(xo)),this.expandByPoint(Gs.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new C,_o=new C,Cr=new C,ni=new C,Mo=new C,Pr=new C,bo=new C,fa=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_o.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(_o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=ni.dot(this.direction),l=-ni.dot(Cr),c=ni.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_o).addScaledVector(Cr,d),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){Mo.subVectors(e,t),Pr.subVectors(n,t),bo.crossVectors(Mo,Pr);let a=this.direction.dot(bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);let l=o*this.direction.dot(Pr.crossVectors(ni,Pr));if(l<0)return null;let c=o*this.direction.dot(Mo.cross(ni));if(c<0||l+c>a)return null;let h=-o*ni.dot(bo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,bf)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ii.crossVectors(n,nn),ii.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ii.crossVectors(n,nn)),ii.normalize(),Ir.crossVectors(nn,ii),s[0]=ii.x,s[4]=Ir.x,s[8]=nn.x,s[1]=ii.y,s[5]=Ir.y,s[9]=nn.y,s[2]=ii.z,s[6]=Ir.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],_=n[7],x=n[11],R=n[15],T=s[0],E=s[4],P=s[8],B=s[12],y=s[1],w=s[5],N=s[9],F=s[13],V=s[2],$=s[6],H=s[10],tt=s[14],W=s[3],ft=s[7],pt=s[11],St=s[15];return r[0]=a*T+o*y+l*V+c*W,r[4]=a*E+o*w+l*$+c*ft,r[8]=a*P+o*N+l*H+c*pt,r[12]=a*B+o*F+l*tt+c*St,r[1]=h*T+u*y+d*V+f*W,r[5]=h*E+u*w+d*$+f*ft,r[9]=h*P+u*N+d*H+f*pt,r[13]=h*B+u*F+d*tt+f*St,r[2]=g*T+v*y+m*V+p*W,r[6]=g*E+v*w+m*$+p*ft,r[10]=g*P+v*N+m*H+p*pt,r[14]=g*B+v*F+m*tt+p*St,r[3]=M*T+_*y+x*V+R*W,r[7]=M*E+_*w+x*$+R*ft,r[11]=M*P+_*N+x*H+R*pt,r[15]=M*B+_*F+x*tt+R*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,R=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,T=e*M+n*_+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=M*E,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*E,t[4]=_*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*E,t[8]=x*E,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*E,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=R*E,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*E,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,M=l*c,_=l*h,x=l*u,R=n.x,T=n.y,E=n.z;return s[0]=(1-(v+p))*R,s[1]=(f+x)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+_)*E,s[9]=(m-M)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$i.set(s[0],s[1],s[2]).length(),a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);let c=1/r,h=1/a,u=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Gn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ca)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,v;if(o===Gn)g=(a+r)*u,v=-2*u;else if(o===ca)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new C,vn=new de,Mf=new C(0,0,0),bf=new C(1,1,1),ii=new C,Ir=new C,nn=new C,gh=new de,vh=new fi,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vh.setFromEuler(this),this.setFromQuaternion(vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,yh=new C,Zi=new fi,Fn=new de,Lr=new C,Ws=new C,wf=new C,Ef=new fi,xh=new C(1,0,0),_h=new C(0,1,0),Mh=new C(0,0,1),bh={type:"added"},Tf={type:"removed"},Ji={type:"childadded",child:null},So={type:"childremoved",child:null},Ae=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new An,n=new fi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Bt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(Mh,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(Mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ws,Lr,this.up):Fn.lookAt(Lr,Ws,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tf),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new C(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new C,On=new C,wo=new C,Bn=new C,ji=new C,Qi=new C,Sh=new C,Eo=new C,To=new C,Ao=new C,Ro=new ae,Co=new ae,Po=new ae,oi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),On.subVectors(n,e),wo.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(On),l=yn.dot(wo),c=On.dot(On),h=On.dot(wo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,n),Po.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),On.subVectors(t,e),yn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),yn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,n),Qi.subVectors(r,n),Eo.subVectors(t,n);let l=ji.dot(Eo),c=Qi.dot(Eo);if(l<=0&&c<=0)return e.copy(n);To.subVectors(t,s);let h=ji.dot(To),u=Qi.dot(To);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);Ao.subVectors(t,r);let f=ji.dot(Ao),g=Qi.dot(Ao);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Qi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Sh,o);let p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Rc(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Io(a,r,t+1/3),this.g=Io(a,r,t),this.b=Io(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=Su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Qt.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ue(Ge.r*255,0,255))*65536+Math.round(Ue(Ge.g*255,0,255))*256+Math.round(Ue(Ge.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=We){Qt.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Ur);let n=js(si.h,Ur.h,e),s=js(si.s,Ur.s,e),r=js(si.l,Ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Mt;Mt.NAMES=Su;var Af=0,Kn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=ci,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Yo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_e=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new C,Dr=new rt,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}};var ma=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ga=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Rf=0,ln=new de,Lo=new Ae,ts=new C,sn=new Ni,Xs=new Ni,Le=new C,Me=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?ga:ma)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(sn.min,Xs.min),sn.expandByPoint(Le),Le.addVectors(sn.max,Xs.max),sn.expandByPoint(Le)):(sn.expandByPoint(Xs.min),sn.expandByPoint(Xs.max))}sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(t,c),Le.add(ts)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,d=new rt,f=new rt,g=new rt,v=new C,m=new C;function p(P,B,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[P].add(v),o[B].add(v),o[y].add(v),l[P].add(m),l[B].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,B=M.length;P<B;++P){let y=M[P],w=y.start,N=y.count;for(let F=w,V=w+N;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new C,x=new C,R=new C,T=new C;function E(P){R.fromBufferAttribute(s,P),T.copy(R);let B=o[P];_.copy(B),_.sub(R.multiplyScalar(R.dot(B))).normalize(),x.crossVectors(T,B);let w=x.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,w)}for(let P=0,B=M.length;P<B;++P){let y=M[P],w=y.start,N=y.count;for(let F=w,V=w+N;F<V;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wh=new de,Ei=new fa,Nr=new xs,Eh=new C,Fr=new C,Or=new C,Br=new C,Uo=new C,kr=new C,Th=new C,zr=new C,se=class extends Ae{constructor(t=new Me,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Uo.fromBufferAttribute(u,t),a?kr.addScaledVector(Uo,h):kr.addScaledVector(Uo.sub(e),h))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Nr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Nr,Eh)===null||Ei.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(wh.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(wh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,R=_;x<R;x+=3){let T=o.getX(x),E=o.getX(x+1),P=o.getX(x+2);s=Hr(this,p,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);s=Hr(this,a,t,n,c,h,u,M,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,R=_;x<R;x+=3){let T=x,E=x+1,P=x+2;s=Hr(this,p,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,_=m+1,x=m+2;s=Hr(this,a,t,n,c,h,u,M,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Cf(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ui,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:i}}function Hr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Fr),i.getVertexPosition(l,Or),i.getVertexPosition(c,Br);let h=Cf(i,t,e,n,Fr,Or,Br,Th);if(h){let u=new C;oi.getBarycoord(Th,Fr,Or,Br,u),s&&(h.uv=oi.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(h.uv1=oi.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};oi.getNormal(Fr,Or,Br,d.normal),h.face=d,h.barycoord=u}return h}var pe=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(v,m,p,M,_,x,R,T,E,P,B){let y=x/E,w=R/P,N=x/2,F=R/2,V=T/2,$=E+1,H=P+1,tt=0,W=0,ft=new C;for(let pt=0;pt<H;pt++){let St=pt*w-F;for(let $t=0;$t<$;$t++){let ee=$t*y-N;ft[v]=ee*M,ft[m]=St*_,ft[p]=V,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[p]=T>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push($t/E),u.push(1-pt/P),tt+=1}}for(let pt=0;pt<P;pt++)for(let St=0;St<E;St++){let $t=d+St+$*pt,ee=d+St+$*(pt+1),q=d+(St+1)+$*(pt+1),Q=d+(St+1)+$*pt;l.push($t,ee,Q),l.push(ee,q,Q),W+=6}o.addGroup(f,W,B),f+=W,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function Pf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var If={clone:_s,merge:Ke},Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},va=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new C,Ah=new rt,Rh=new rt,Fe=class extends va{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Ah,Rh),e.subVectors(Rh,Ah)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Fl=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new Fe(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new Fe(es,ns,t,e);a.layers=this.layers,this.add(a);let o=new Fe(es,ns,t,e);o.layers=this.layers,this.add(o);let l=new Fe(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Fe(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ya=class extends rn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ol=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pe(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:li});r.uniforms.tEquirect.value=e;let a=new se(s,r),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=xn),new Fl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Do=new C,Df=new C,Nf=new Bt,zn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Do.subVectors(n,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Do),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nf.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new xs,Vr=new C,ir=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+M).normalize(),n[3].setComponents(l-a,d-h,m-g,x-M).normalize(),n[4].setComponents(l-o,d-u,m-v,x-_).normalize(),e===Gn)n[5].setComponents(l+o,d+u,m+v,x+_).normalize();else if(e===ca)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ff(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var oe=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let _=0;_<c;_++){let x=_*u-r;g.push(x,-M,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let _=M+c*p,x=M+c*(p+1),R=M+1+c*(p+1),T=M+1+c*p;f.push(_,x,T),f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ap=`#define PI 3.141592653589793
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
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`
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
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Np=`struct PhysicalMaterial {
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
}`,Fp=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,Qm=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,a0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
}`,l0=`#define TOON
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
}`,c0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:kf,alphamap_pars_fragment:zf,alphatest_fragment:Hf,alphatest_pars_fragment:Vf,aomap_fragment:Gf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Kf,beginnormal_vertex:Yf,bsdfs:$f,iridescence_fragment:Zf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:ap,cube_uv_reflection_fragment:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:vp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:_p,fog_pars_vertex:Mp,fog_fragment:bp,fog_pars_fragment:Sp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Ep,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Lp,lights_phong_pars_fragment:Up,lights_physical_fragment:Dp,lights_physical_pars_fragment:Np,lights_fragment_begin:Fp,lights_fragment_maps:Op,lights_fragment_end:Bp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Vp,map_fragment:Gp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:$p,morphcolor_vertex:Zp,morphnormal_vertex:Jp,morphtarget_pars_vertex:jp,morphtarget_vertex:Qp,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:hm,packing:um,premultiplied_alpha_fragment:dm,project_vertex:fm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:xm,shadowmap_vertex:_m,shadowmask_pars_fragment:Mm,skinbase_vertex:bm,skinning_pars_vertex:Sm,skinning_vertex:wm,skinnormal_vertex:Em,specularmap_fragment:Tm,specularmap_pars_fragment:Am,tonemapping_fragment:Rm,tonemapping_pars_fragment:Cm,transmission_fragment:Pm,transmission_pars_fragment:Im,uv_pars_fragment:Lm,uv_pars_vertex:Um,uv_vertex:Dm,worldpos_vertex:Nm,background_vert:Fm,background_frag:Om,backgroundCube_vert:Bm,backgroundCube_frag:km,cube_vert:zm,cube_frag:Hm,depth_vert:Vm,depth_frag:Gm,distanceRGBA_vert:Wm,distanceRGBA_frag:Xm,equirect_vert:qm,equirect_frag:Km,linedashed_vert:Ym,linedashed_frag:$m,meshbasic_vert:Zm,meshbasic_frag:Jm,meshlambert_vert:jm,meshlambert_frag:Qm,meshmatcap_vert:t0,meshmatcap_frag:e0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:a0,meshphysical_frag:o0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:h0,points_frag:u0,shadow_vert:d0,shadow_frag:f0,sprite_vert:p0,sprite_frag:m0},st={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ke([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ke([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ke([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ke([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ke([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ke([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ke([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ke([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ke([st.common,st.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ke([st.lights,st.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Tn.physical={uniforms:Ke([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Gr={r:0,b:0,g:0},Ai=new An,g0=new de;function v0(i,t,e,n,s,r,a){let o=new Mt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1,x=g(M);x===null?p(o,l):x&&x.isColor&&(p(x,1),_=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===Na)?(h===void 0&&(h=new se(new pe(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:_s(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(_.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(Ai)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ue,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new se(new oe(2,2),new hn({name:"BackgroundMaterial",uniforms:_s(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(Gr,wu(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:m}}function y0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,w,N,F,V){let $=!1,H=u(F,N,w);r!==H&&(r=H,c(r.object)),$=f(y,F,N,V),$&&g(y,F,N,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(y,w,N,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,w,N){let F=N.wireframe===!0,V=n[y.id];V===void 0&&(V={},n[y.id]=V);let $=V[w.id];$===void 0&&($={},V[w.id]=$);let H=$[F];return H===void 0&&(H=d(l()),$[F]=H),H}function d(y){let w=[],N=[],F=[];for(let V=0;V<e;V++)w[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,w,N,F){let V=r.attributes,$=w.attributes,H=0,tt=N.getAttributes();for(let W in tt)if(tt[W].location>=0){let pt=V[W],St=$[W];if(St===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),pt===void 0||pt.attribute!==St||St&&pt.data!==St.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(y,w,N,F){let V={},$=w.attributes,H=0,tt=N.getAttributes();for(let W in tt)if(tt[W].location>=0){let pt=$[W];pt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));let St={};St.attribute=pt,pt&&pt.data&&(St.data=pt.data),V[W]=St,H++}r.attributes=V,r.attributesNum=H,r.index=F}function v(){let y=r.newAttributes;for(let w=0,N=y.length;w<N;w++)y[w]=0}function m(y){p(y,0)}function p(y,w){let N=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;N[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),V[y]!==w&&(i.vertexAttribDivisor(y,w),V[y]=w)}function M(){let y=r.newAttributes,w=r.enabledAttributes;for(let N=0,F=w.length;N<F;N++)w[N]!==y[N]&&(i.disableVertexAttribArray(N),w[N]=0)}function _(y,w,N,F,V,$,H){H===!0?i.vertexAttribIPointer(y,w,N,V,$):i.vertexAttribPointer(y,w,N,F,V,$)}function x(y,w,N,F){v();let V=F.attributes,$=N.getAttributes(),H=w.defaultAttributeValues;for(let tt in $){let W=$[tt];if(W.location>=0){let ft=V[tt];if(ft===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),ft!==void 0){let pt=ft.normalized,St=ft.itemSize,$t=t.get(ft);if($t===void 0)continue;let ee=$t.buffer,q=$t.type,Q=$t.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||ft.gpuType===Mc;if(ft.isInterleavedBufferAttribute){let mt=ft.data,Nt=mt.stride,Rt=ft.offset;if(mt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<W.locationSize;Vt++)p(W.location+Vt,mt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Vt=0;Vt<W.locationSize;Vt++)m(W.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Vt=0;Vt<W.locationSize;Vt++)_(W.location+Vt,St/W.locationSize,q,pt,Nt*Q,(Rt+St/W.locationSize*Vt)*Q,_t)}else{if(ft.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)p(W.location+mt,ft.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let mt=0;mt<W.locationSize;mt++)_(W.location+mt,St/W.locationSize,q,pt,St*Q,St/W.locationSize*mt*Q,_t)}}else if(H!==void 0){let pt=H[tt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(W.location,pt);break;case 3:i.vertexAttrib3fv(W.location,pt);break;case 4:i.vertexAttrib4fv(W.location,pt);break;default:i.vertexAttrib1fv(W.location,pt)}}}}M()}function R(){P();for(let y in n){let w=n[y];for(let N in w){let F=w[N];for(let V in F)h(F[V].object),delete F[V];delete w[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let w=n[y.id];for(let N in w){let F=w[N];for(let V in F)h(F[V].object),delete F[V];delete w[N]}delete n[y.id]}function E(y){for(let w in n){let N=n[w];if(N[y.id]===void 0)continue;let F=N[y.id];for(let V in F)h(F[V].object),delete F[V];delete N[y.id]}}function P(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function x0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let P=E===cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Xn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Vn&&!P)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function M0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,_=M*4,x=p.clippingState||null;l.value=x,x=h(g,d,_,f);for(let R=0;R!==_;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function b0(i){let t=new WeakMap;function e(a,o){return o===nl?a.mapping=ps:o===il&&(a.mapping=ms),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===nl||o===il)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ol(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xa=class extends va{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ls=4,Ch=[.125,.215,.35,.446,.526,.582],Ii=20,No=new xa,Ph=new Mt,Fo=null,Oo=0,Bo=0,ko=!1,Ci=(1+Math.sqrt(5))/2,is=1/Ci,Ih=[new C(-Ci,is,0),new C(Ci,is,0),new C(-is,0,Ci),new C(is,0,Ci),new C(0,Ci,-is),new C(0,Ci,is),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],_a=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=ko,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:cr,format:Mn,colorSpace:mi,depthBuffer:!1},s=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S0(r)),this._blurMaterial=w0(r,t,e)}return s}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,s){let o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ph),h.toneMapping=hi,h.autoClear=!1;let f=new _e({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new se(new pe,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ph),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;Wr(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,No)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ih[(s-r-1)%Ih.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new se(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],M=0;for(let E=0;E<Ii;++E){let P=E/v,B=Math.exp(-P*P/2);p.push(B),E===0?M+=B:E<m&&(M+=2*B)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let x=this._sizeLods[s],R=3*x*(s>_-ls?s-_+ls:0),T=4*(this._cubeSize-x);Wr(e,R,T,3*x,2*x),l.setRenderTarget(e),l.render(u,No)}};function S0(i){let t=[],e=[],n=[],s=i,r=i-ls+1+Ch.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ls?l=Ch[a-i+ls-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,P=T>2?0:-1,B=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];M.set(B,v*g*T),_.set(d,m*g*T);let y=[T,T,T,T,T,T];x.set(y,p*g*T)}let R=new Me;R.setAttribute("position",new xe(M,v)),R.setAttribute("uv",new xe(_,m)),R.setAttribute("faceIndex",new xe(x,p)),t.push(R),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lh(i,t,e){let n=new qn(i,t,e);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function w0(i,t,e){let n=new Float32Array(Ii),s=new C(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Uh(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Dh(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function E0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===nl||l===il,h=l===ps||l===ms;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new _a(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new _a(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function T0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&sa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function A0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let _=0,x=M.length;_<x;_+=3){let R=M[_+0],T=M[_+1],E=M[_+2];d.push(R,T,T,E,E,R)}}else if(g!==void 0){let M=g.array;v=g.version;for(let _=0,x=M.length/3-1;_<x;_+=3){let R=_+0,T=_+1,E=_+2;d.push(R,T,T,E,E,R)}}else return;let m=new(bu(d)?ga:ma)(d,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function R0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<v.length;M++)e.update(p,n,v[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function C0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function P0(i,t,e){let n=new WeakMap,s=new ae;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let B=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*R*4*u),E=new da(T,x,R,u);E.type=Vn,E.needsUpdate=!0;let P=_*4;for(let y=0;y<u;y++){let w=m[y],N=p[y],F=M[y],V=x*R*4*y;for(let $=0;$<w.count;$++){let H=$*P;f===!0&&(s.fromBufferAttribute(w,$),T[V+H+0]=s.x,T[V+H+1]=s.y,T[V+H+2]=s.z,T[V+H+3]=0),g===!0&&(s.fromBufferAttribute(N,$),T[V+H+4]=s.x,T[V+H+5]=s.y,T[V+H+6]=s.z,T[V+H+7]=0),v===!0&&(s.fromBufferAttribute(F,$),T[V+H+8]=s.x,T[V+H+9]=s.y,T[V+H+10]=s.z,T[V+H+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new rt(x,R)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function I0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ma=class extends rn{constructor(t,e,n,s,r,a,o,l,c,h=cs){if(h!==cs&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=Di),n===void 0&&h===vs&&(n=gs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Tu=new rn,Nh=new Ma(1,1),Au=new da,Ru=new Nl,Cu=new ya,Fh=[],Oh=[],Bh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function As(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oa(i,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function L0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function F0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),Ce(e,n)}}function O0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),Ce(e,n)}}function B0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),Ce(e,n)}}function k0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function G0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function K0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=_u,r=Nh):r=Tu,e.setTexture2D(t||r,s)}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ru,s)}function $0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cu,s)}function Z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Au,s)}function J0(i){switch(i){case 5126:return L0;case 35664:return U0;case 35665:return D0;case 35666:return N0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return z0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Z0}}function j0(i,t){i.uniform1fv(this.addr,t)}function Q0(i,t){let e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function tg(i,t){let e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function eg(i,t){let e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function ng(i,t){let e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ig(i,t){let e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sg(i,t){let e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rg(i,t){i.uniform1iv(this.addr,t)}function ag(i,t){i.uniform2iv(this.addr,t)}function og(i,t){i.uniform3iv(this.addr,t)}function lg(i,t){i.uniform4iv(this.addr,t)}function cg(i,t){i.uniform1uiv(this.addr,t)}function hg(i,t){i.uniform2uiv(this.addr,t)}function ug(i,t){i.uniform3uiv(this.addr,t)}function dg(i,t){i.uniform4uiv(this.addr,t)}function fg(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Tu,r[a])}function pg(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ru,r[a])}function mg(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cu,r[a])}function gg(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Au,r[a])}function vg(i){switch(i){case 5126:return j0;case 35664:return Q0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}var Bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}},kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}},zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zo=/(\w+)(\])?(\[|\.)?/g;function Hh(i,t){i.seq.push(t),i.map[t.id]=t}function yg(i,t,e){let n=i.name,s=n.length;for(zo.lastIndex=0;;){let r=zo.exec(n),a=zo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hh(e,c===void 0?new Bl(o,i,t):new kl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new zl(o),Hh(e,u)),e=u}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);yg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Vh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var xg=37297,_g=0;function Mg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function bg(i){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i),n;switch(t===e?n="":t===la&&e===oa?n="LinearDisplayP3ToLinearSRGB":t===oa&&e===la&&(n="LinearSRGBToLinearDisplayP3"),i){case mi:case Fa:return[n,"LinearTransferOETF"];case We:case Ac:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mg(i.getShaderSource(t),a)}else return s}function Sg(i,t){let e=bg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wg(i,t){let e;switch(t){case Ud:e="Linear";break;case Dd:e="Reinhard";break;case Nd:e="Cineon";break;case _c:e="ACESFilmic";break;case Od:e="AgX";break;case Bd:e="Neutral";break;case Fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xr=new C;function Eg(){Qt.getLuminanceCoefficients(Xr);let i=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Ag(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Zs(i){return i!==""}function Wh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(i){return i.replace(Cg,Ig)}var Pg=new Map;function Ig(i,t){let e=Ot[t];if(e===void 0){let n=Pg.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}var Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(Lg,Ug)}function Ug(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function Og(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function Bg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Dg(e),c=Ng(e),h=Fg(e),u=Og(e),d=Bg(e),f=Tg(e),g=Ag(r),v=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==hi?wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Sg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Hl(a),a=Wh(a,e),a=Xh(a,e),o=Hl(o),o=Wh(o,e),o=Xh(o,e),a=qh(a),o=qh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+m+a,x=M+p+o,R=Vh(s,s.VERTEX_SHADER,_),T=Vh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(w){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(T).trim(),$=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,T);else{let tt=Gh(s,R,"vertex"),W=Gh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+tt+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(H=!1);H&&(w.diagnostics={runnable:$,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(R),s.deleteShader(T),P=new us(s,v),B=Rg(s,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let B;this.getAttributes=function(){return B===void 0&&E(this),B};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,xg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var zg=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gl(t),e.set(t,n)),n}},Gl=class{constructor(t){this.id=zg++,this.code=t,this.usedTimes=0}};function Hg(i,t,e,n,s,r,a){let o=new pa,l=new Vl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,w,N,F,V){let $=F.fog,H=V.geometry,tt=y.isMeshStandardMaterial?F.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||tt),ft=W&&W.mapping===Na?W.image.height:null,pt=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let St=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$t=St!==void 0?St.length:0,ee=0;H.morphAttributes.position!==void 0&&(ee=1),H.morphAttributes.normal!==void 0&&(ee=2),H.morphAttributes.color!==void 0&&(ee=3);let q,Q,_t,mt;if(pt){let Ze=Tn[pt];q=Ze.vertexShader,Q=Ze.fragmentShader}else q=y.vertexShader,Q=y.fragmentShader,l.update(y),_t=l.getVertexShaderID(y),mt=l.getFragmentShaderID(y);let Nt=i.getRenderTarget(),Rt=V.isInstancedMesh===!0,Vt=V.isBatchedMesh===!0,re=!!y.map,Gt=!!y.matcap,I=!!W,Qe=!!y.aoMap,zt=!!y.lightMap,qt=!!y.bumpMap,Pt=!!y.normalMap,ce=!!y.displacementMap,Dt=!!y.emissiveMap,A=!!y.metalnessMap,b=!!y.roughnessMap,O=y.anisotropy>0,Y=y.clearcoat>0,j=y.dispersion>0,K=y.iridescence>0,wt=y.sheen>0,at=y.transmission>0,gt=O&&!!y.anisotropyMap,Kt=Y&&!!y.clearcoatMap,et=Y&&!!y.clearcoatNormalMap,vt=Y&&!!y.clearcoatRoughnessMap,It=K&&!!y.iridescenceMap,Lt=K&&!!y.iridescenceThicknessMap,yt=wt&&!!y.sheenColorMap,Ht=wt&&!!y.sheenRoughnessMap,Ft=!!y.specularMap,le=!!y.specularColorMap,L=!!y.specularIntensityMap,ut=at&&!!y.transmissionMap,G=at&&!!y.thicknessMap,Z=!!y.gradientMap,lt=!!y.alphaMap,dt=y.alphaTest>0,Wt=!!y.alphaHash,Se=!!y.extensions,$e=hi;y.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&($e=i.toneMapping);let Zt={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:Q,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Vt,batchingColor:Vt&&V._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&V.instanceColor!==null,instancingMorph:Rt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:mi,alphaToCoverage:!!y.alphaToCoverage,map:re,matcap:Gt,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:ft,aoMap:Qe,lightMap:zt,bumpMap:qt,normalMap:Pt,displacementMap:f&&ce,emissiveMap:Dt,normalMapObjectSpace:Pt&&y.normalMapType===Vd,normalMapTangentSpace:Pt&&y.normalMapType===xu,metalnessMap:A,roughnessMap:b,anisotropy:O,anisotropyMap:gt,clearcoat:Y,clearcoatMap:Kt,clearcoatNormalMap:et,clearcoatRoughnessMap:vt,dispersion:j,iridescence:K,iridescenceMap:It,iridescenceThicknessMap:Lt,sheen:wt,sheenColorMap:yt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:le,specularIntensityMap:L,transmission:at,transmissionMap:ut,thicknessMap:G,gradientMap:Z,opaque:y.transparent===!1&&y.blending===ci&&y.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:Wt,combine:y.combine,mapUv:re&&m(y.map.channel),aoMapUv:Qe&&m(y.aoMap.channel),lightMapUv:zt&&m(y.lightMap.channel),bumpMapUv:qt&&m(y.bumpMap.channel),normalMapUv:Pt&&m(y.normalMap.channel),displacementMapUv:ce&&m(y.displacementMap.channel),emissiveMapUv:Dt&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:b&&m(y.roughnessMap.channel),anisotropyMapUv:gt&&m(y.anisotropyMap.channel),clearcoatMapUv:Kt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:et&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&m(y.sheenRoughnessMap.channel),specularMapUv:Ft&&m(y.specularMap.channel),specularColorMapUv:le&&m(y.specularColorMap.channel),specularIntensityMapUv:L&&m(y.specularIntensityMap.channel),transmissionMapUv:ut&&m(y.transmissionMap.channel),thicknessMapUv:G&&m(y.thicknessMap.channel),alphaMapUv:lt&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pt||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(re||lt),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:$t,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:re&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oe,flipSided:y.side===Be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function M(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(w,y),x(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function R(y){let w=v[y.type],N;if(w){let F=Tn[w];N=If.clone(F.uniforms)}else N=y.uniforms;return N}function T(y,w){let N;for(let F=0,V=h.length;F<V;F++){let $=h[F];if($.cacheKey===w){N=$,++N.usedTimes;break}}return N===void 0&&(N=new kg(i,w,y,r),h.push(N)),N}function E(y){if(--y.usedTimes===0){let w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:R,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:B}}function Vg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $h(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){let p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){let p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Gg),n.length>1&&n.sort(d||Yh),s.length>1&&s.sort(d||Yh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Wg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new $h,i.set(n,[a])):s>=r.length?(a=new $h,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Mt};break;case"SpotLight":e={position:new C,direction:new C,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Kg=0;function Yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $g(i){let t=new Xg,e=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new de,a=new de;function o(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,_=0,x=0,R=0,T=0,E=0;c.sort(Yg);for(let B=0,y=c.length;B<y;B++){let w=c[B],N=w.color,F=w.intensity,V=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],F);E++}else if(w.isDirectionalLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let tt=w.shadow,W=e.get(w);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=H,f++}else if(w.isSpotLight){let H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[v]=H;let tt=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,tt.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[v]=tt.matrix,w.castShadow){let W=e.get(w);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=$,x++}v++}else if(w.isRectAreaLight){let H=t.get(w);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=H,m++}else if(w.isPointLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){let tt=w.shadow,W=e.get(w);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=H,g++}else if(w.isHemisphereLight){let H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(F),H.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=E,n.version=Kg++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let _=c[p];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Zh(i){let t=new $g(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Zg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Zh(i),t.set(s,[o])):r>=a.length?(o=new Zh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wl=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xl=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(i,t,e){let n=new ir,s=new rt,r=new rt,a=new ae,o=new Wl({depthPacking:Hd}),l=new Xl,c={},h=e.maxTextureSize,u={[ui]:Be,[Be]:ui,[Oe]:Oe},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Jg,fragmentShader:jg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let p=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let B=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),N=i.state;N.setBlending(li),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==kn&&this.type===kn,V=p===kn&&this.type!==kn;for(let $=0,H=T.length;$<H;$++){let tt=T[$],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ft=W.getFrameExtents();if(s.multiply(ft),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,W.mapSize.y=r.y)),W.map===null||F===!0||V===!0){let St=this.type!==kn?{minFilter:cn,magFilter:cn}:{};W.map!==null&&W.map.dispose(),W.map=new qn(s.x,s.y,St),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let pt=W.getViewportCount();for(let St=0;St<pt;St++){let $t=W.getViewport(St);a.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),N.viewport(a),W.updateMatrices(tt,St),n=W.getFrustum(),x(E,P,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===kn&&M(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(B,y,w)};function M(T,E){let P=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,f,v,null)}function _(T,E,P,B){let y=null,w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=y.uuid,F=E.uuid,V=c[N];V===void 0&&(V={},c[N]=V);let $=V[F];$===void 0&&($=y.clone(),V[F]=$,E.addEventListener("dispose",R)),y=$}if(y.visible=E.visible,y.wireframe=E.wireframe,B===kn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=P}return y}function x(T,E,P,B,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let F=t.update(T),V=T.material;if(Array.isArray(V)){let $=F.groups;for(let H=0,tt=$.length;H<tt;H++){let W=$[H],ft=V[W.materialIndex];if(ft&&ft.visible){let pt=_(T,ft,B,y);T.onBeforeShadow(i,T,E,P,F,pt,W),i.renderBufferDirect(P,null,F,pt,T,W),T.onAfterShadow(i,T,E,P,F,pt,W)}}}else if(V.visible){let $=_(T,V,B,y);T.onBeforeShadow(i,T,E,P,F,$,null),i.renderBufferDirect(P,null,F,$,T,null),T.onAfterShadow(i,T,E,P,F,$,null)}}let N=T.children;for(let F=0,V=N.length;F<V;F++)x(N[F],E,P,B,y)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let B=c[P],y=T.target.uuid;y in B&&(B[y].dispose(),delete B[y])}}}var tv={[$o]:Zo,[Jo]:tl,[jo]:el,[fs]:Qo,[Zo]:$o,[tl]:Jo,[el]:jo,[Qo]:fs};function ev(i){function t(){let L=!1,ut=new ae,G=null,Z=new ae(0,0,0,0);return{setMask:function(lt){G!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),G=lt)},setLocked:function(lt){L=lt},setClear:function(lt,dt,Wt,Se,$e){$e===!0&&(lt*=Se,dt*=Se,Wt*=Se),ut.set(lt,dt,Wt,Se),Z.equals(ut)===!1&&(i.clearColor(lt,dt,Wt,Se),Z.copy(ut))},reset:function(){L=!1,G=null,Z.set(-1,0,0,0)}}}function e(){let L=!1,ut=!1,G=null,Z=null,lt=null;return{setReversed:function(dt){ut=dt},setTest:function(dt){dt?_t(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(dt){G!==dt&&!L&&(i.depthMask(dt),G=dt)},setFunc:function(dt){if(ut&&(dt=tv[dt]),Z!==dt){switch(dt){case $o:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case Qo:i.depthFunc(i.GEQUAL);break;case tl:i.depthFunc(i.GREATER);break;case el:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=dt}},setLocked:function(dt){L=dt},setClear:function(dt){lt!==dt&&(i.clearDepth(dt),lt=dt)},reset:function(){L=!1,G=null,Z=null,lt=null}}}function n(){let L=!1,ut=null,G=null,Z=null,lt=null,dt=null,Wt=null,Se=null,$e=null;return{setTest:function(Zt){L||(Zt?_t(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(Zt){ut!==Zt&&!L&&(i.stencilMask(Zt),ut=Zt)},setFunc:function(Zt,Ze,Un){(G!==Zt||Z!==Ze||lt!==Un)&&(i.stencilFunc(Zt,Ze,Un),G=Zt,Z=Ze,lt=Un)},setOp:function(Zt,Ze,Un){(dt!==Zt||Wt!==Ze||Se!==Un)&&(i.stencilOp(Zt,Ze,Un),dt=Zt,Wt=Ze,Se=Un)},setLocked:function(Zt){L=Zt},setClear:function(Zt){$e!==Zt&&(i.clearStencil(Zt),$e=Zt)},reset:function(){L=!1,ut=null,G=null,Z=null,lt=null,dt=null,Wt=null,Se=null,$e=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,M=null,_=null,x=null,R=null,T=new Mt(0,0,0),E=0,P=!1,B=null,y=null,w=null,N=null,F=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,H=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=H>=1):tt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=H>=2);let W=null,ft={},pt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),$t=new ae().fromArray(pt),ee=new ae().fromArray(St);function q(L,ut,G,Z){let lt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(L,dt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<G;Wt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ut+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return dt}let Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),r.setFunc(fs),zt(!1),qt(ih),_t(i.CULL_FACE),I(li);function _t(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function mt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Nt(L,ut){return h[L]!==ut?(i.bindFramebuffer(L,ut),h[L]=ut,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Rt(L,ut){let G=d,Z=!1;if(L){G=u.get(ut),G===void 0&&(G=[],u.set(ut,G));let lt=L.textures;if(G.length!==lt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Wt=lt.length;dt<Wt;dt++)G[dt]=i.COLOR_ATTACHMENT0+dt;G.length=lt.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function Vt(L){return f!==L?(i.useProgram(L),f=L,!0):!1}let re={[Pi]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};re[gd]=i.MIN,re[vd]=i.MAX;let Gt={[yd]:i.ZERO,[xd]:i.ONE,[_d]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[Ad]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,ut,G,Z,lt,dt,Wt,Se,$e,Zt){if(L===li){g===!0&&(mt(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),L!==fd){if(L!==v||Zt!==P){if((m!==Pi||_!==Pi)&&(i.blendEquation(i.FUNC_ADD),m=Pi,_=Pi),Zt)switch(L){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ds:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ds:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,M=null,x=null,R=null,T.set(0,0,0),E=0,v=L,P=Zt}return}lt=lt||ut,dt=dt||G,Wt=Wt||Z,(ut!==m||lt!==_)&&(i.blendEquationSeparate(re[ut],re[lt]),m=ut,_=lt),(G!==p||Z!==M||dt!==x||Wt!==R)&&(i.blendFuncSeparate(Gt[G],Gt[Z],Gt[dt],Gt[Wt]),p=G,M=Z,x=dt,R=Wt),(Se.equals(T)===!1||$e!==E)&&(i.blendColor(Se.r,Se.g,Se.b,$e),T.copy(Se),E=$e),v=L,P=!1}function Qe(L,ut){L.side===Oe?mt(i.CULL_FACE):_t(i.CULL_FACE);let G=L.side===Be;ut&&(G=!G),zt(G),L.blending===ci&&L.transparent===!1?I(li):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){B!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),B=L)}function qt(L){L!==ud?(_t(i.CULL_FACE),L!==y&&(L===ih?i.cullFace(i.BACK):L===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),y=L}function Pt(L){L!==w&&($&&i.lineWidth(L),w=L)}function ce(L,ut,G){L?(_t(i.POLYGON_OFFSET_FILL),(N!==ut||F!==G)&&(i.polygonOffset(ut,G),N=ut,F=G)):mt(i.POLYGON_OFFSET_FILL)}function Dt(L){L?_t(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+V-1),W!==L&&(i.activeTexture(L),W=L)}function b(L,ut,G){G===void 0&&(W===null?G=i.TEXTURE0+V-1:G=W);let Z=ft[G];Z===void 0&&(Z={type:void 0,texture:void 0},ft[G]=Z),(Z.type!==L||Z.texture!==ut)&&(W!==G&&(i.activeTexture(G),W=G),i.bindTexture(L,ut||Q[L]),Z.type=L,Z.texture=ut)}function O(){let L=ft[W];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){$t.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),$t.copy(L))}function yt(L){ee.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function Ht(L,ut){let G=l.get(ut);G===void 0&&(G=new WeakMap,l.set(ut,G));let Z=G.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(ut,L.name),G.set(L,Z))}function Ft(L,ut){let Z=l.get(ut).get(L);o.get(ut)!==Z&&(i.uniformBlockBinding(ut,Z,L.__bindingPointIndex),o.set(ut,Z))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,ft={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,M=null,_=null,x=null,R=null,T=new Mt(0,0,0),E=0,P=!1,B=null,y=null,w=null,N=null,F=null,$t.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:_t,disable:mt,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:Vt,setBlending:I,setMaterial:Qe,setFlipSided:zt,setCullFace:qt,setLineWidth:Pt,setPolygonOffset:ce,setScissorTest:Dt,activeTexture:A,bindTexture:b,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:vt,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:Ft,texStorage2D:Kt,texStorage3D:et,texSubImage2D:K,texSubImage3D:wt,compressedTexSubImage2D:at,compressedTexSubImage3D:gt,scissor:Lt,viewport:yt,reset:le}}function Jh(i,t,e,n){let s=nv(n);switch(e){case du:return i*t;case pu:return i*t;case mu:return i*t*2;case gu:return i*t/s.components*s.byteLength;case wc:return i*t/s.components*s.byteLength;case vu:return i*t*2/s.components*s.byteLength;case Ec:return i*t*2/s.components*s.byteLength;case fu:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case Tc:return i*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:case ll:return Math.max(i,16)*Math.max(t,8)/4;case rl:case ol:return Math.max(i,8)*Math.max(t,8)/2;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ia:case Tl:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yu:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nv(i){switch(i){case Xn:case cu:return{byteLength:1,components:1};case nr:case hu:case cr:return{byteLength:2,components:1};case bc:case Sc:return{byteLength:2,components:4};case Di:case Mc:case Vn:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function iv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):ha("canvas")}function v(A,b,O){let Y=1,j=Dt(A);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor(Y*j.width),wt=Math.floor(Y*j.height);u===void 0&&(u=g(K,wt));let at=b?g(K,wt):u;return at.width=K,at.height=wt,at.getContext("2d").drawImage(A,0,0,K,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+wt+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==cn&&A.minFilter!==xn}function p(A){i.generateMipmap(A)}function M(A,b,O,Y,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),b===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){let wt=j?aa:Qt.getTransfer(Y);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=wt===ue?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,b){let O;return A?b===null||b===Di||b===gs?O=i.DEPTH24_STENCIL8:b===Vn?O=i.DEPTH32F_STENCIL8:b===nr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Di||b===gs?O=i.DEPTH_COMPONENT24:b===Vn?O=i.DEPTH_COMPONENT32F:b===nr&&(O=i.DEPTH_COMPONENT16),O}function x(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){let b=A.target;b.removeEventListener("dispose",R),E(b),b.isVideoTexture&&h.delete(b)}function T(A){let b=A.target;b.removeEventListener("dispose",T),B(b)}function E(A){let b=n.get(A);if(b.__webglInit===void 0)return;let O=A.source,Y=d.get(O);if(Y){let j=Y[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(A),Object.keys(Y).length===0&&d.delete(O)}n.remove(A)}function P(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let O=A.source,Y=d.get(O);delete Y[b.__cacheKey],a.memory.textures--}function B(A){let b=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let j=0;j<b.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=A.textures;for(let Y=0,j=O.length;Y<j;Y++){let K=n.get(O[Y]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(A)}let y=0;function w(){y=0}function N(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function F(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function V(A,b){let O=n.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(O,A,b);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function $(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){ee(O,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function H(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){ee(O,A,b);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function tt(A,b){let O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}let W={[Ui]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[sl]:i.MIRRORED_REPEAT},ft={[cn]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},pt={[Gd]:i.NEVER,[$d]:i.ALWAYS,[Wd]:i.LESS,[_u]:i.LEQUAL,[Xd]:i.EQUAL,[Yd]:i.GEQUAL,[qd]:i.GREATER,[Kd]:i.NOTEQUAL};function St(A,b){if(b.type===Vn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===xn||b.magFilter===uo||b.magFilter===Er||b.magFilter===Li||b.minFilter===xn||b.minFilter===uo||b.minFilter===Er||b.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,W[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,W[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ft[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==Er&&b.minFilter!==Li||b.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function $t(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));let Y=b.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let K=F(b);if(K!==A.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[K].usedTimes++;let wt=j[A.__cacheKey];wt!==void 0&&(j[A.__cacheKey].usedTimes--,wt.usedTimes===0&&P(b)),A.__cacheKey=K,A.__webglTexture=j[K].texture}return O}function ee(A,b,O){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let j=$t(A,b),K=b.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+O);let wt=n.get(K);if(K.version!==wt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);let at=Qt.getPrimaries(Qt.workingColorSpace),gt=b.colorSpace===ai?null:Qt.getPrimaries(b.colorSpace),Kt=b.colorSpace===ai||at===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let et=v(b.image,!1,s.maxTextureSize);et=ce(b,et);let vt=r.convert(b.format,b.colorSpace),It=r.convert(b.type),Lt=M(b.internalFormat,vt,It,b.colorSpace,b.isVideoTexture);St(Y,b);let yt,Ht=b.mipmaps,Ft=b.isVideoTexture!==!0,le=wt.__version===void 0||j===!0,L=K.dataReady,ut=x(b,et);if(b.isDepthTexture)Lt=_(b.format===vs,b.type),le&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,vt,It,null));else if(b.isDataTexture)if(Ht.length>0){Ft&&le&&e.texStorage2D(i.TEXTURE_2D,ut,Lt,Ht[0].width,Ht[0].height);for(let G=0,Z=Ht.length;G<Z;G++)yt=Ht[G],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,yt.width,yt.height,vt,It,yt.data):e.texImage2D(i.TEXTURE_2D,G,Lt,yt.width,yt.height,0,vt,It,yt.data);b.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(i.TEXTURE_2D,ut,Lt,et.width,et.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,vt,It,et.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,vt,It,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ft&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Lt,Ht[0].width,Ht[0].height,et.depth);for(let G=0,Z=Ht.length;G<Z;G++)if(yt=Ht[G],b.format!==Mn)if(vt!==null)if(Ft){if(L)if(b.layerUpdates.size>0){let lt=Jh(yt.width,yt.height,b.format,b.type);for(let dt of b.layerUpdates){let Wt=yt.data.subarray(dt*lt/yt.data.BYTES_PER_ELEMENT,(dt+1)*lt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,dt,yt.width,yt.height,1,vt,Wt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,yt.width,yt.height,et.depth,vt,yt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Lt,yt.width,yt.height,et.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,yt.width,yt.height,et.depth,vt,It,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Lt,yt.width,yt.height,et.depth,0,vt,It,yt.data)}else{Ft&&le&&e.texStorage2D(i.TEXTURE_2D,ut,Lt,Ht[0].width,Ht[0].height);for(let G=0,Z=Ht.length;G<Z;G++)yt=Ht[G],b.format!==Mn?vt!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,yt.width,yt.height,vt,It,yt.data):e.texImage2D(i.TEXTURE_2D,G,Lt,yt.width,yt.height,0,vt,It,yt.data)}else if(b.isDataArrayTexture)if(Ft){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Lt,et.width,et.height,et.depth),L)if(b.layerUpdates.size>0){let G=Jh(et.width,et.height,b.format,b.type);for(let Z of b.layerUpdates){let lt=et.data.subarray(Z*G/et.data.BYTES_PER_ELEMENT,(Z+1)*G/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,vt,It,lt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,It,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,vt,It,et.data);else if(b.isData3DTexture)Ft?(le&&e.texStorage3D(i.TEXTURE_3D,ut,Lt,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,It,et.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,vt,It,et.data);else if(b.isFramebufferTexture){if(le)if(Ft)e.texStorage2D(i.TEXTURE_2D,ut,Lt,et.width,et.height);else{let G=et.width,Z=et.height;for(let lt=0;lt<ut;lt++)e.texImage2D(i.TEXTURE_2D,lt,Lt,G,Z,0,vt,It,null),G>>=1,Z>>=1}}else if(Ht.length>0){if(Ft&&le){let G=Dt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,ut,Lt,G.width,G.height)}for(let G=0,Z=Ht.length;G<Z;G++)yt=Ht[G],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,vt,It,yt):e.texImage2D(i.TEXTURE_2D,G,Lt,vt,It,yt);b.generateMipmaps=!1}else if(Ft){if(le){let G=Dt(et);e.texStorage2D(i.TEXTURE_2D,ut,Lt,G.width,G.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,It,et)}else e.texImage2D(i.TEXTURE_2D,0,Lt,vt,It,et);m(b)&&p(Y),wt.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function q(A,b,O){if(b.image.length!==6)return;let Y=$t(A,b),j=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let K=n.get(j);if(j.version!==K.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);let wt=Qt.getPrimaries(Qt.workingColorSpace),at=b.colorSpace===ai?null:Qt.getPrimaries(b.colorSpace),gt=b.colorSpace===ai||wt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let Z=0;Z<6;Z++)!Kt&&!et?vt[Z]=v(b.image[Z],!0,s.maxCubemapSize):vt[Z]=et?b.image[Z].image:b.image[Z],vt[Z]=ce(b,vt[Z]);let It=vt[0],Lt=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),Ht=M(b.internalFormat,Lt,yt,b.colorSpace),Ft=b.isVideoTexture!==!0,le=K.__version===void 0||Y===!0,L=j.dataReady,ut=x(b,It);St(i.TEXTURE_CUBE_MAP,b);let G;if(Kt){Ft&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ht,It.width,It.height);for(let Z=0;Z<6;Z++){G=vt[Z].mipmaps;for(let lt=0;lt<G.length;lt++){let dt=G[lt];b.format!==Mn?Lt!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Ht,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,dt.width,dt.height,Lt,yt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Ht,dt.width,dt.height,0,Lt,yt,dt.data)}}}else{if(G=b.mipmaps,Ft&&le){G.length>0&&ut++;let Z=Dt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ht,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,vt[Z].width,vt[Z].height,Lt,yt,vt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,vt[Z].width,vt[Z].height,0,Lt,yt,vt[Z].data);for(let lt=0;lt<G.length;lt++){let Wt=G[lt].image[Z].image;Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Wt.width,Wt.height,Lt,yt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Ht,Wt.width,Wt.height,0,Lt,yt,Wt.data)}}else{Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,yt,vt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,Lt,yt,vt[Z]);for(let lt=0;lt<G.length;lt++){let dt=G[lt];Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Lt,yt,dt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Ht,Lt,yt,dt.image[Z])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=j.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Q(A,b,O,Y,j,K){let wt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),gt=M(O.internalFormat,wt,at,O.colorSpace);if(!n.get(b).__hasExternalTextures){let et=Math.max(1,b.width>>K),vt=Math.max(1,b.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,K,gt,et,vt,b.depth,0,wt,at,null):e.texImage2D(j,K,gt,et,vt,0,wt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),qt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,n.get(O).__webglTexture,0,zt(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,n.get(O).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(A,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let Y=b.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,K=_(b.stencilBuffer,j),wt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(b);qt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,K,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,A)}else{let Y=b.textures;for(let j=0;j<Y.length;j++){let K=Y[j],wt=r.convert(K.format,K.colorSpace),at=r.convert(K.type),gt=M(K.internalFormat,wt,at,K.colorSpace),Kt=zt(b);O&&qt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,gt,b.width,b.height):qt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,gt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let Y=n.get(b.depthTexture).__webglTexture,j=zt(b);if(b.depthTexture.format===cs)qt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(b.depthTexture.format===vs)qt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Nt(A){let b=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Y}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),_t(b.__webglDepthbuffer[Y],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),_t(b.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(A,b,O){let Y=n.get(A);b!==void 0&&Q(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(A)}function Vt(A){let b=A.texture,O=n.get(A),Y=n.get(b);A.addEventListener("dispose",T);let j=A.textures,K=A.isWebGLCubeRenderTarget===!0,wt=j.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let gt=0;gt<b.mipmaps.length;gt++)O.__webglFramebuffer[at][gt]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let at=0,gt=j.length;at<gt;at++){let Kt=n.get(j[at]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&qt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){let gt=j[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);let Kt=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),vt=M(gt.internalFormat,Kt,et,gt.colorSpace,A.isXRRenderTarget===!0),It=zt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),St(i.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Q(O.__webglFramebuffer[at][gt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,gt);else Q(O.__webglFramebuffer[at],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let at=0,gt=j.length;at<gt;at++){let Kt=j[at],et=n.get(Kt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),St(i.TEXTURE_2D,Kt),Q(O.__webglFramebuffer,A,Kt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),St(at,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Q(O.__webglFramebuffer[gt],A,b,i.COLOR_ATTACHMENT0,at,gt);else Q(O.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,at,0);m(b)&&p(at),e.unbindTexture()}A.depthBuffer&&Nt(A)}function re(A){let b=A.textures;for(let O=0,Y=b.length;O<Y;O++){let j=b[O];if(m(j)){let K=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(j).__webglTexture;e.bindTexture(K,wt),p(K),e.unbindTexture()}}}let Gt=[],I=[];function Qe(A){if(A.samples>0){if(qt(A)===!1){let b=A.textures,O=A.width,Y=A.height,j=i.COLOR_BUFFER_BIT,K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(A),at=b.length>1;if(at)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let Kt=n.get(b[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,i.NEAREST),l===!0&&(Gt.length=0,I.length=0,Gt.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Gt.push(K),I.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let Kt=n.get(b[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function zt(A){return Math.min(s.maxSamples,A.samples)}function qt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function ce(A,b){let O=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==mi&&O!==ai&&(Qt.getTransfer(O)===ue?(Y!==Mn||j!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=tt,this.rebindTextures=Rt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=qt}function sv(i,t){function e(n,s=ai){let r,a=Qt.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===hu)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===du)return i.ALPHA;if(n===fu)return i.RGB;if(n===Mn)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===gu)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===vu)return i.RG;if(n===Ec)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===Qr||n===ta||n===ea||n===na)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===hl)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===vl||n===yl||n===xl||n===_l||n===Ml||n===bl||n===Sl||n===wl||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===Tl||n===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===Rl||n===Cl||n===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ql=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ut=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},rv={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ov=`
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

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:av,fragmentShader:ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yl=class extends di{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=new Kl,m=e.getContextAttributes(),p=null,M=null,_=[],x=[],R=new rt,T=null,E=new Fe;E.layers.enable(1),E.viewport=new ae;let P=new Fe;P.layers.enable(2),P.viewport=new ae;let B=[E,P],y=new ql;y.layers.enable(1),y.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=_[q];return Q===void 0&&(Q=new Qs,_[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=_[q];return Q===void 0&&(Q=new Qs,_[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=_[q];return Q===void 0&&(Q=new Qs,_[q]=Q),Q.getHandSpace()};function F(q){let Q=x.indexOf(q.inputSource);if(Q===-1)return;let _t=_[Q];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",$);for(let q=0;q<_.length;q++){let Q=x[q];Q!==null&&(x[q]=null,_[q].disconnect(Q))}w=null,N=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new qn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,_t=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?vs:cs,_t=m.stencil?gs:Di);let Nt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new qn(d.textureWidth,d.textureHeight,{format:Mn,type:Xn,depthTexture:new Ma(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(q){for(let Q=0;Q<q.removed.length;Q++){let _t=q.removed[Q],mt=x.indexOf(_t);mt>=0&&(x[mt]=null,_[mt].disconnect(_t))}for(let Q=0;Q<q.added.length;Q++){let _t=q.added[Q],mt=x.indexOf(_t);if(mt===-1){for(let Rt=0;Rt<_.length;Rt++)if(Rt>=x.length){x.push(_t),mt=Rt;break}else if(x[Rt]===null){x[Rt]=_t,mt=Rt;break}if(mt===-1)break}let Nt=_[mt];Nt&&Nt.connect(_t)}}let H=new C,tt=new C;function W(q,Q,_t){H.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(_t.matrixWorld);let mt=H.distanceTo(tt),Nt=Q.projectionMatrix.elements,Rt=_t.projectionMatrix.elements,Vt=Nt[14]/(Nt[10]-1),re=Nt[14]/(Nt[10]+1),Gt=(Nt[9]+1)/Nt[5],I=(Nt[9]-1)/Nt[5],Qe=(Nt[8]-1)/Nt[0],zt=(Rt[8]+1)/Rt[0],qt=Vt*Qe,Pt=Vt*zt,ce=mt/(-Qe+zt),Dt=ce*-Qe;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Nt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let A=Vt+ce,b=re+ce,O=qt-Dt,Y=Pt+(mt-Dt),j=Gt*re/b*A,K=I*re/b*A;q.projectionMatrix.makePerspective(O,Y,j,K,A,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ft(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,_t=q.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),y.near=P.near=E.near=Q,y.far=P.far=E.far=_t,(w!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,N=y.far);let mt=q.parent,Nt=y.cameras;ft(y,mt);for(let Rt=0;Rt<Nt.length;Rt++)ft(Nt[Rt],mt);Nt.length===2?W(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),pt(q,y,mt)};function pt(q,Q,_t){_t===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let St=null;function $t(q,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let mt=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,mt=!0);for(let Rt=0;Rt<_t.length;Rt++){let Vt=_t[Rt],re=null;if(f!==null)re=f.getViewport(Vt);else{let I=u.getViewSubImage(d,Vt);re=I.viewport,Rt===0&&(t.setRenderTargetTextures(M,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(M))}let Gt=B[Rt];Gt===void 0&&(Gt=new Fe,Gt.layers.enable(Rt),Gt.viewport=new ae,B[Rt]=Gt),Gt.matrix.fromArray(Vt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Vt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(re.x,re.y,re.width,re.height),Rt===0&&(y.matrix.copy(Gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),mt===!0&&y.cameras.push(Gt)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Rt=u.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,s.renderState)}}for(let _t=0;_t<_.length;_t++){let mt=x[_t],Nt=_[_t];mt!==null&&Nt!==void 0&&Nt.update(mt,Q,c||a)}St&&St(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ee=new Eu;ee.setAnimationLoop($t),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}},Ri=new An,lv=new de;function cv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),_=M.envMap,x=M.envMapRotation;_&&(m.envMap.value=_,Ri.copy(x),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(lv.makeRotationFromEuler(Ri)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let x=_.program;n.uniformBlockBinding(M,x)}function c(M,_){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(M,R);let T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let _=u();M.__bindingPointIndex=_;let x=i.createBuffer(),R=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],x=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,E=x.length;T<E;T++){let P=Array.isArray(x[T])?x[T]:[x[T]];for(let B=0,y=P.length;B<y;B++){let w=P[B];if(f(w,T,B,R)===!0){let N=w.__offset,F=Array.isArray(w.value)?w.value:[w.value],V=0;for(let $=0;$<F.length;$++){let H=F[$],tt=v(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+V,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,_,x,R){let T=M.value,E=_+"_"+x;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{let P=R[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){let _=M.uniforms,x=0,R=16;for(let E=0,P=_.length;E<P;E++){let B=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,w=B.length;y<w;y++){let N=B[y],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,$=F.length;V<$;V++){let H=F[V],tt=v(H),W=x%R,ft=W%tt.boundary,pt=W+ft;x+=ft,pt!==0&&R-pt<tt.storage&&(x+=R-pt),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=tt.storage}}}let T=x%R;return T>0&&(x+=R-T),M.__size=x,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ba=class{constructor(t={}){let{canvas:e=ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=hi,this.toneMappingExposure=1;let _=this,x=!1,R=0,T=0,E=null,P=-1,B=null,y=new ae,w=new ae,N=null,F=new Mt(0),V=0,$=e.width,H=e.height,tt=1,W=null,ft=null,pt=new ae(0,0,$,H),St=new ae(0,0,$,H),$t=!1,ee=new ir,q=!1,Q=!1,_t=new de,mt=new de,Nt=new C,Rt=new ae,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function Gt(){return E===null?tt:1}let I=n;function Qe(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){let U="webgl2";if(I=Qe(U,S),I===null)throw Qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let zt,qt,Pt,ce,Dt,A,b,O,Y,j,K,wt,at,gt,Kt,et,vt,It,Lt,yt,Ht,Ft,le,L;function ut(){zt=new T0(I),zt.init(),Ft=new sv(I,zt),qt=new _0(I,zt,t,Ft),Pt=new ev(I),qt.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),ce=new C0(I),Dt=new Vg,A=new iv(I,zt,Pt,Dt,qt,Ft,ce),b=new b0(_),O=new E0(_),Y=new Ff(I),le=new y0(I,Y),j=new A0(I,Y,ce,le),K=new I0(I,j,Y,ce),Lt=new P0(I,qt,A),et=new M0(Dt),wt=new Hg(_,b,O,zt,qt,le,et),at=new cv(_,Dt),gt=new Wg,Kt=new Zg(zt),It=new v0(_,b,O,Pt,K,d,l),vt=new Qg(_,K,qt),L=new hv(I,ce,qt,Pt),yt=new x0(I,zt,ce),Ht=new R0(I,zt,ce),ce.programs=wt.programs,_.capabilities=qt,_.extensions=zt,_.properties=Dt,_.renderLists=gt,_.shadowMap=vt,_.state=Pt,_.info=ce}ut();let G=new Yl(_,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize($,H,!1))},this.getSize=function(S){return S.set($,H)},this.setSize=function(S,U,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,H=U,e.width=Math.floor(S*tt),e.height=Math.floor(U*tt),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set($*tt,H*tt).floor()},this.setDrawingBufferSize=function(S,U,k){$=S,H=U,tt=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(pt)},this.setViewport=function(S,U,k,z){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,k,z),Pt.viewport(y.copy(pt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(St)},this.setScissor=function(S,U,k,z){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,U,k,z),Pt.scissor(w.copy(St).multiplyScalar(tt).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(S){Pt.setScissorTest($t=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){ft=S},this.getClearColor=function(S){return S.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(S=!0,U=!0,k=!0){let z=0;if(S){let D=!1;if(E!==null){let nt=E.texture.format;D=nt===Tc||nt===Ec||nt===wc}if(D){let nt=E.texture.type,ct=nt===Xn||nt===Di||nt===nr||nt===gs||nt===bc||nt===Sc,xt=It.getClearColor(),bt=It.getClearAlpha(),At=xt.r,Ct=xt.g,Et=xt.b;ct?(f[0]=At,f[1]=Ct,f[2]=Et,f[3]=bt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=At,g[1]=Ct,g[2]=Et,g[3]=bt,I.clearBufferiv(I.COLOR,0,g))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Kt.dispose(),Dt.dispose(),b.dispose(),O.dispose(),K.dispose(),le.dispose(),L.dispose(),wt.dispose(),G.dispose(),G.removeEventListener("sessionstart",$c),G.removeEventListener("sessionend",Zc),bi.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let S=ce.autoReset,U=vt.enabled,k=vt.autoUpdate,z=vt.needsUpdate,D=vt.type;ut(),ce.autoReset=S,vt.enabled=U,vt.autoUpdate=k,vt.needsUpdate=z,vt.type=D}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Wt(S){let U=S.target;U.removeEventListener("dispose",Wt),Se(U)}function Se(S){$e(S),Dt.remove(S)}function $e(S){let U=Dt.get(S).programs;U!==void 0&&(U.forEach(function(k){wt.releaseProgram(k)}),S.isShaderMaterial&&wt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,z,D,nt){U===null&&(U=Vt);let ct=D.isMesh&&D.matrixWorld.determinant()<0,xt=od(S,U,k,z,D);Pt.setMaterial(z,ct);let bt=k.index,At=1;if(z.wireframe===!0){if(bt=j.getWireframeAttribute(k),bt===void 0)return;At=2}let Ct=k.drawRange,Et=k.attributes.position,ne=Ct.start*At,he=(Ct.start+Ct.count)*At;nt!==null&&(ne=Math.max(ne,nt.start*At),he=Math.min(he,(nt.start+nt.count)*At)),bt!==null?(ne=Math.max(ne,0),he=Math.min(he,bt.count)):Et!=null&&(ne=Math.max(ne,0),he=Math.min(he,Et.count));let ve=he-ne;if(ve<0||ve===1/0)return;le.setup(D,z,xt,k,bt);let tn,Jt=yt;if(bt!==null&&(tn=Y.get(bt),Jt=Ht,Jt.setIndex(tn)),D.isMesh)z.wireframe===!0?(Pt.setLineWidth(z.wireframeLinewidth*Gt()),Jt.setMode(I.LINES)):Jt.setMode(I.TRIANGLES);else if(D.isLine){let Tt=z.linewidth;Tt===void 0&&(Tt=1),Pt.setLineWidth(Tt*Gt()),D.isLineSegments?Jt.setMode(I.LINES):D.isLineLoop?Jt.setMode(I.LINE_LOOP):Jt.setMode(I.LINE_STRIP)}else D.isPoints?Jt.setMode(I.POINTS):D.isSprite&&Jt.setMode(I.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Jt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Tt=D._multiDrawStarts,Ne=D._multiDrawCounts,jt=D._multiDrawCount,mn=bt?Y.get(bt).bytesPerElement:1,Gi=Dt.get(z).currentProgram.getUniforms();for(let en=0;en<jt;en++)Gi.setValue(I,"_gl_DrawID",en),Jt.render(Tt[en]/mn,Ne[en])}else if(D.isInstancedMesh)Jt.renderInstances(ne,ve,D.count);else if(k.isInstancedBufferGeometry){let Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ne=Math.min(k.instanceCount,Tt);Jt.renderInstances(ne,ve,Ne)}else Jt.render(ne,ve)};function Zt(S,U,k){S.transparent===!0&&S.side===Oe&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,wr(S,U,k),S.side=ui,S.needsUpdate=!0,wr(S,U,k),S.side=Oe):wr(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),m=Kt.get(k),m.init(U),M.push(m),k.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),S!==k&&S.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();let z=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let nt=D.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){let xt=nt[ct];Zt(xt,k,D),z.add(xt)}else Zt(nt,k,D),z.add(nt)}),M.pop(),m=null,z},this.compileAsync=function(S,U,k=null){let z=this.compile(S,U,k);return new Promise(D=>{function nt(){if(z.forEach(function(ct){Dt.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){D(S);return}setTimeout(nt,10)}zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ze=null;function Un(S){Ze&&Ze(S)}function $c(){bi.stop()}function Zc(){bi.start()}let bi=new Eu;bi.setAnimationLoop(Un),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(S){Ze=S,G.setAnimationLoop(S),S===null?bi.stop():bi.start()},G.addEventListener("sessionstart",$c),G.addEventListener("sessionend",Zc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,E),m=Kt.get(S,M.length),m.init(U),M.push(m),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(mt),Q=this.localClippingEnabled,q=et.init(this.clippingPlanes,Q),v=gt.get(S,p.length),v.init(),p.push(v),G.enabled===!0&&G.isPresenting===!0){let nt=_.xr.getDepthSensingMesh();nt!==null&&oo(nt,U,-1/0,_.sortObjects)}oo(S,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(W,ft),re=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,re&&It.addToRenderList(v,S),this.info.render.frame++,q===!0&&et.beginShadows();let k=m.state.shadowsArray;vt.render(k,S,U),q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=v.opaque,D=v.transmissive;if(m.setupLights(),U.isArrayCamera){let nt=U.cameras;if(D.length>0)for(let ct=0,xt=nt.length;ct<xt;ct++){let bt=nt[ct];jc(z,D,S,bt)}re&&It.render(S);for(let ct=0,xt=nt.length;ct<xt;ct++){let bt=nt[ct];Jc(v,S,bt,bt.viewport)}}else D.length>0&&jc(z,D,S,U),re&&It.render(S),Jc(v,S,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(_,S,U),le.resetDefaultState(),P=-1,B=null,M.pop(),M.length>0?(m=M[M.length-1],q===!0&&et.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function oo(S,U,k,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){z&&Rt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);let ct=K.update(S),xt=S.material;xt.visible&&v.push(S,ct,xt,k,Rt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ee.intersectsObject(S))){let ct=K.update(S),xt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Rt.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Rt.copy(ct.boundingSphere.center)),Rt.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(xt)){let bt=ct.groups;for(let At=0,Ct=bt.length;At<Ct;At++){let Et=bt[At],ne=xt[Et.materialIndex];ne&&ne.visible&&v.push(S,ct,ne,k,Rt.z,Et)}}else xt.visible&&v.push(S,ct,xt,k,Rt.z,null)}}let nt=S.children;for(let ct=0,xt=nt.length;ct<xt;ct++)oo(nt[ct],U,k,z)}function Jc(S,U,k,z){let D=S.opaque,nt=S.transmissive,ct=S.transparent;m.setupLightsView(k),q===!0&&et.setGlobalState(_.clippingPlanes,k),z&&Pt.viewport(y.copy(z)),D.length>0&&Sr(D,U,k),nt.length>0&&Sr(nt,U,k),ct.length>0&&Sr(ct,U,k),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function jc(S,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new qn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?cr:Xn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let nt=m.state.transmissionRenderTarget[z.id],ct=z.viewport||y;nt.setSize(ct.z,ct.w);let xt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(F),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),re&&It.render(k);let bt=_.toneMapping;_.toneMapping=hi;let At=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),q===!0&&et.setGlobalState(_.clippingPlanes,z),Sr(S,k,z),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Et=0,ne=U.length;Et<ne;Et++){let he=U[Et],ve=he.object,tn=he.geometry,Jt=he.material,Tt=he.group;if(Jt.side===Oe&&ve.layers.test(z.layers)){let Ne=Jt.side;Jt.side=Be,Jt.needsUpdate=!0,Qc(ve,k,z,tn,Jt,Tt),Jt.side=Ne,Jt.needsUpdate=!0,Ct=!0}}Ct===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}_.setRenderTarget(xt),_.setClearColor(F,V),At!==void 0&&(z.viewport=At),_.toneMapping=bt}function Sr(S,U,k){let z=U.isScene===!0?U.overrideMaterial:null;for(let D=0,nt=S.length;D<nt;D++){let ct=S[D],xt=ct.object,bt=ct.geometry,At=z===null?ct.material:z,Ct=ct.group;xt.layers.test(k.layers)&&Qc(xt,U,k,bt,At,Ct)}}function Qc(S,U,k,z,D,nt){S.onBeforeRender(_,U,k,z,D,nt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(_,U,k,z,S,nt),D.transparent===!0&&D.side===Oe&&D.forceSinglePass===!1?(D.side=Be,D.needsUpdate=!0,_.renderBufferDirect(k,U,z,D,S,nt),D.side=ui,D.needsUpdate=!0,_.renderBufferDirect(k,U,z,D,S,nt),D.side=Oe):_.renderBufferDirect(k,U,z,D,S,nt),S.onAfterRender(_,U,k,z,D,nt)}function wr(S,U,k){U.isScene!==!0&&(U=Vt);let z=Dt.get(S),D=m.state.lights,nt=m.state.shadowsArray,ct=D.state.version,xt=wt.getParameters(S,D.state,nt,U,k),bt=wt.getProgramCacheKey(xt),At=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?O:b).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",Wt),At=new Map,z.programs=At);let Ct=At.get(bt);if(Ct!==void 0){if(z.currentProgram===Ct&&z.lightsStateVersion===ct)return eh(S,xt),Ct}else xt.uniforms=wt.getUniforms(S),S.onBeforeCompile(xt,_),Ct=wt.acquireProgram(xt,bt),At.set(bt,Ct),z.uniforms=xt.uniforms;let Et=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=et.uniform),eh(S,xt),z.needsLights=cd(S),z.lightsStateVersion=ct,z.needsLights&&(Et.ambientLightColor.value=D.state.ambient,Et.lightProbe.value=D.state.probe,Et.directionalLights.value=D.state.directional,Et.directionalLightShadows.value=D.state.directionalShadow,Et.spotLights.value=D.state.spot,Et.spotLightShadows.value=D.state.spotShadow,Et.rectAreaLights.value=D.state.rectArea,Et.ltc_1.value=D.state.rectAreaLTC1,Et.ltc_2.value=D.state.rectAreaLTC2,Et.pointLights.value=D.state.point,Et.pointLightShadows.value=D.state.pointShadow,Et.hemisphereLights.value=D.state.hemi,Et.directionalShadowMap.value=D.state.directionalShadowMap,Et.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Et.spotShadowMap.value=D.state.spotShadowMap,Et.spotLightMatrix.value=D.state.spotLightMatrix,Et.spotLightMap.value=D.state.spotLightMap,Et.pointShadowMap.value=D.state.pointShadowMap,Et.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Ct,z.uniformsList=null,Ct}function th(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=us.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function eh(S,U){let k=Dt.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function od(S,U,k,z,D){U.isScene!==!0&&(U=Vt),A.resetTextureUnits();let nt=U.fog,ct=z.isMeshStandardMaterial?U.environment:null,xt=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:mi,bt=(z.isMeshStandardMaterial?O:b).get(z.envMap||ct),At=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ct=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!k.morphAttributes.position,ne=!!k.morphAttributes.normal,he=!!k.morphAttributes.color,ve=hi;z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ve=_.toneMapping);let tn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=tn!==void 0?tn.length:0,Tt=Dt.get(z),Ne=m.state.lights;if(q===!0&&(Q===!0||S!==B)){let on=S===B&&z.id===P;et.setState(z,S,on)}let jt=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ne.state.version||Tt.outputColorSpace!==xt||D.isBatchedMesh&&Tt.batching===!1||!D.isBatchedMesh&&Tt.batching===!0||D.isBatchedMesh&&Tt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Tt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Tt.instancing===!1||!D.isInstancedMesh&&Tt.instancing===!0||D.isSkinnedMesh&&Tt.skinning===!1||!D.isSkinnedMesh&&Tt.skinning===!0||D.isInstancedMesh&&Tt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Tt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Tt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Tt.instancingMorph===!1&&D.morphTexture!==null||Tt.envMap!==bt||z.fog===!0&&Tt.fog!==nt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==At||Tt.vertexTangents!==Ct||Tt.morphTargets!==Et||Tt.morphNormals!==ne||Tt.morphColors!==he||Tt.toneMapping!==ve||Tt.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,Tt.__version=z.version);let mn=Tt.currentProgram;jt===!0&&(mn=wr(z,U,D));let Gi=!1,en=!1,lo=!1,ye=mn.getUniforms(),Qn=Tt.uniforms;if(Pt.useProgram(mn.program)&&(Gi=!0,en=!0,lo=!0),z.id!==P&&(P=z.id,en=!0),Gi||B!==S){qt.reverseDepthBuffer?(_t.copy(S.projectionMatrix),mf(_t),gf(_t),ye.setValue(I,"projectionMatrix",_t)):ye.setValue(I,"projectionMatrix",S.projectionMatrix),ye.setValue(I,"viewMatrix",S.matrixWorldInverse);let on=ye.map.cameraPosition;on!==void 0&&on.setValue(I,Nt.setFromMatrixPosition(S.matrixWorld)),qt.logarithmicDepthBuffer&&ye.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ye.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,en=!0,lo=!0)}if(D.isSkinnedMesh){ye.setOptional(I,D,"bindMatrix"),ye.setOptional(I,D,"bindMatrixInverse");let on=D.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ye.setValue(I,"boneTexture",on.boneTexture,A))}D.isBatchedMesh&&(ye.setOptional(I,D,"batchingTexture"),ye.setValue(I,"batchingTexture",D._matricesTexture,A),ye.setOptional(I,D,"batchingIdTexture"),ye.setValue(I,"batchingIdTexture",D._indirectTexture,A),ye.setOptional(I,D,"batchingColorTexture"),D._colorsTexture!==null&&ye.setValue(I,"batchingColorTexture",D._colorsTexture,A));let co=k.morphAttributes;if((co.position!==void 0||co.normal!==void 0||co.color!==void 0)&&Lt.update(D,k,mn),(en||Tt.receiveShadow!==D.receiveShadow)&&(Tt.receiveShadow=D.receiveShadow,ye.setValue(I,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qn.envMap.value=bt,Qn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Qn.envMapIntensity.value=U.environmentIntensity),en&&(ye.setValue(I,"toneMappingExposure",_.toneMappingExposure),Tt.needsLights&&ld(Qn,lo),nt&&z.fog===!0&&at.refreshFogUniforms(Qn,nt),at.refreshMaterialUniforms(Qn,z,tt,H,m.state.transmissionRenderTarget[S.id]),us.upload(I,th(Tt),Qn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(us.upload(I,th(Tt),Qn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ye.setValue(I,"center",D.center),ye.setValue(I,"modelViewMatrix",D.modelViewMatrix),ye.setValue(I,"normalMatrix",D.normalMatrix),ye.setValue(I,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let on=z.uniformsGroups;for(let ho=0,hd=on.length;ho<hd;ho++){let nh=on[ho];L.update(nh,mn),L.bind(nh,mn)}}return mn}function ld(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function cd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,U,k){Dt.get(S.texture).__webglTexture=U,Dt.get(S.depthTexture).__webglTexture=k;let z=Dt.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let k=Dt.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){E=S,R=U,T=k;let z=!0,D=null,nt=!1,ct=!1;if(S){let bt=Dt.get(S);if(bt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(bt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(bt.__hasExternalTextures)A.rebindTextures(S,Dt.get(S.texture).__webglTexture,Dt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Et=S.depthTexture;if(bt.__boundDepthTexture!==Et){if(Et!==null&&Dt.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);let Ct=Dt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?D=Ct[U][k]:D=Ct[U],nt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?D=Dt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?D=Ct[k]:D=Ct,y.copy(S.viewport),w.copy(S.scissor),N=S.scissorTest}else y.copy(pt).multiplyScalar(tt).floor(),w.copy(St).multiplyScalar(tt).floor(),N=$t;if(Pt.bindFramebuffer(I.FRAMEBUFFER,D)&&z&&Pt.drawBuffers(S,D),Pt.viewport(y),Pt.scissor(w),Pt.setScissorTest(N),nt){let bt=Dt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,k)}else if(ct){let bt=Dt.get(S.texture),At=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,At)}P=-1},this.readRenderTargetPixels=function(S,U,k,z,D,nt,ct){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Dt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(xt=xt[ct]),xt){Pt.bindFramebuffer(I.FRAMEBUFFER,xt);try{let bt=S.texture,At=bt.format,Ct=bt.type;if(!qt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&k>=0&&k<=S.height-D&&I.readPixels(U,k,z,D,Ft.convert(At),Ft.convert(Ct),nt)}finally{let bt=E!==null?Dt.get(E).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,z,D,nt,ct){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Dt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(xt=xt[ct]),xt){let bt=S.texture,At=bt.format,Ct=bt.type;if(!qt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-z&&k>=0&&k<=S.height-D){Pt.bindFramebuffer(I.FRAMEBUFFER,xt);let Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),I.readPixels(U,k,z,D,Ft.convert(At),Ft.convert(Ct),0);let ne=E!==null?Dt.get(E).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,ne);let he=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await pf(I,he,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(Et),I.deleteSync(he),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let z=Math.pow(2,-k),D=Math.floor(S.image.width*z),nt=Math.floor(S.image.height*z),ct=U!==null?U.x:0,xt=U!==null?U.y:0;A.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,ct,xt,D,nt),Pt.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,z=null,D=0){S.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],U=arguments[2],D=arguments[3]||0,k=null);let nt,ct,xt,bt,At,Ct;k!==null?(nt=k.max.x-k.min.x,ct=k.max.y-k.min.y,xt=k.min.x,bt=k.min.y):(nt=S.image.width,ct=S.image.height,xt=0,bt=0),z!==null?(At=z.x,Ct=z.y):(At=0,Ct=0);let Et=Ft.convert(U.format),ne=Ft.convert(U.type);A.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let he=I.getParameter(I.UNPACK_ROW_LENGTH),ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tn=I.getParameter(I.UNPACK_SKIP_PIXELS),Jt=I.getParameter(I.UNPACK_SKIP_ROWS),Tt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ne=S.isCompressedTexture?S.mipmaps[D]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,bt),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,At,Ct,nt,ct,Et,ne,Ne.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,At,Ct,Ne.width,Ne.height,Et,Ne.data):I.texSubImage2D(I.TEXTURE_2D,D,At,Ct,nt,ct,Et,ne,Ne),I.pixelStorei(I.UNPACK_ROW_LENGTH,he),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Tt),D===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,z=null,D=0){S.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,S=arguments[2],U=arguments[3],D=arguments[4]||0);let nt,ct,xt,bt,At,Ct,Et,ne,he,ve=S.isCompressedTexture?S.mipmaps[D]:S.image;k!==null?(nt=k.max.x-k.min.x,ct=k.max.y-k.min.y,xt=k.max.z-k.min.z,bt=k.min.x,At=k.min.y,Ct=k.min.z):(nt=ve.width,ct=ve.height,xt=ve.depth,bt=0,At=0,Ct=0),z!==null?(Et=z.x,ne=z.y,he=z.z):(Et=0,ne=0,he=0);let tn=Ft.convert(U.format),Jt=Ft.convert(U.type),Tt;if(U.isData3DTexture)A.setTexture3D(U,0),Tt=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Tt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Ne=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),mn=I.getParameter(I.UNPACK_SKIP_PIXELS),Gi=I.getParameter(I.UNPACK_SKIP_ROWS),en=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,At),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ct),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Tt,D,Et,ne,he,nt,ct,xt,tn,Jt,ve.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,D,Et,ne,he,nt,ct,xt,tn,ve.data):I.texSubImage3D(Tt,D,Et,ne,he,nt,ct,xt,tn,Jt,ve),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,en),D===0&&U.generateMipmaps&&I.generateMipmap(Tt),Pt.unbindTexture()},this.initRenderTarget=function(S){Dt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Pt.unbindTexture()},this.resetState=function(){R=0,T=0,E=null,Pt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ac?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Fa?"display-p3":"srgb"}};var Rn=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sa=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},$l=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new C,wa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sr=class extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,qs=new C,rs=new C,as=new C,os=new rt,Ks=new rt,Pu=new de,qr=new C,Ys=new C,Kr=new C,jh=new rt,Ho=new rt,Qh=new rt,Ea=class extends Ae{constructor(t=new sr){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $l(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new wa(n,3,0,!1)),ss.setAttribute("uv",new wa(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-as.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Yr(qr.set(-.5,-.5,0),as,a,rs,s,r),Yr(Ys.set(.5,-.5,0),as,a,rs,s,r),Yr(Kr.set(.5,.5,0),as,a,rs,s,r),jh.set(0,0),Ho.set(1,0),Qh.set(1,1);let o=t.ray.intersectTriangle(qr,Ys,Kr,!1,qs);if(o===null&&(Yr(Ys.set(-.5,.5,0),as,a,rs,s,r),Ho.set(0,1),o=t.ray.intersectTriangle(qr,Kr,Ys,!1,qs),o===null))return;let l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:oi.getInterpolation(qs,qr,Ys,Kr,jh,Ho,Qh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Yr(i,t,e,n,s,r){os.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ks.x=r*os.x-s*os.y,Ks.y=s*os.x+r*os.y):Ks.copy(os),i.copy(t),i.x+=Ks.x,i.y+=Ks.y,i.applyMatrix4(Pu)}var rr=class extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tu=new de,Zl=new fa,$r=new xs,Zr=new C,Ta=class extends Ae{constructor(t=new Me,e=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;tu.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);Zr.fromBufferAttribute(u,m),eu(Zr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Zr.fromBufferAttribute(u,g),eu(Zr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function eu(i,t,e,n,s,r,a){let o=Zl.distanceSqToPoint(i);if(o<e){let l=new C;Zl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ms=class extends rn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,l=new de;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Jl=class extends ar{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Jr=new C,Vo=new Pc,Go=new Pc,Wo=new Pc,jl=class extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Vo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Go.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Wo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Go.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Vo.calc(l),Go.calc(l),Wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function uv(i,t){let e=1-i;return e*e*t}function dv(i,t){return 2*(1-i)*i*t}function fv(i,t){return i*i*t}function tr(i,t,e,n){return uv(i,t)+dv(i,e)+fv(i,n)}function pv(i,t){let e=1-i;return e*e*e*t}function mv(i,t){let e=1-i;return 3*e*e*i*t}function gv(i,t){return 3*(1-i)*i*i*t}function vv(i,t){return i*i*i*t}function er(i,t,e,n,s){return pv(i,t)+mv(i,e)+gv(i,n)+vv(i,s)}var Aa=class extends un{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,s.x,r.x,a.x,o.x),er(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ql=class extends un{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,s.x,r.x,a.x,o.x),er(t,s.y,r.y,a.y,o.y),er(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends un{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tc=class extends un{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends un{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,s.x,r.x,a.x),tr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bs=class extends un{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,s.x,r.x,a.x),tr(t,s.y,r.y,a.y),tr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nu(o,l.x,c.x,h.x,u.x),nu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},ec=Object.freeze({__proto__:null,ArcCurve:Jl,CatmullRomCurve3:jl,CubicBezierCurve:Aa,CubicBezierCurve3:Ql,EllipseCurve:ar,LineCurve:Ra,LineCurve3:tc,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:bs,SplineCurve:Pa}),nc=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ec[s.type]().fromJSON(s))}return this}},ic=class extends nc{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ra(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ca(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Aa(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ar(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},or=class i extends Me{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new rt,f=new C,g=new C,v=new C,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=e;M++){let _=n+M*h*s,x=Math.sin(_),R=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);let E=l[3*T+0]*x,P=l[3*T+1],B=l[3*T+0]*R;c.push(E,P,B)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){let x=_+M*t.length,R=x,T=x+t.length,E=x+t.length+1,P=x+1;r.push(R,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("uv",new Xt(o,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},De=class i extends or{constructor(t=1,e=1,n=4,s=8){let r=new ic;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Cn=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},te=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function M(){let x=new C,R=new C,T=0,E=(e-t)/n;for(let P=0;P<=r;P++){let B=[],y=P/r,w=y*(e-t)+t;for(let N=0;N<=s;N++){let F=N/s,V=F*l+o,$=Math.sin(V),H=Math.cos(V);R.x=w*$,R.y=-y*n+m,R.z=w*H,u.push(R.x,R.y,R.z),x.set($,E,H).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-y),B.push(g++)}v.push(B)}for(let P=0;P<s;P++)for(let B=0;B<r;B++){let y=v[B][P],w=v[B+1][P],N=v[B+1][P+1],F=v[B][P+1];t>0&&(h.push(y,w,F),T+=3),e>0&&(h.push(w,N,F),T+=3)}c.addGroup(p,T,0),p+=T}function _(x){let R=g,T=new rt,E=new C,P=0,B=x===!0?t:e,y=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let w=g;for(let N=0;N<=s;N++){let V=N/s*l+o,$=Math.cos(V),H=Math.sin(V);E.x=B*H,E.y=m*y,E.z=B*$,u.push(E.x,E.y,E.z),d.push(0,y,0),T.x=$*.5+.5,T.y=H*.5*y+.5,f.push(T.x,T.y),g++}for(let N=0;N<s;N++){let F=R+N,V=w+N;x===!0?h.push(V,V+1,F):h.push(V+1,V,F),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fi=class i extends te{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sc=class i extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new C,x=new C,R=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],x),f(e[T+2],R),l(_,x,R,M)}function l(M,_,x,R){let T=R+1,E=[];for(let P=0;P<=T;P++){E[P]=[];let B=M.clone().lerp(x,P/T),y=_.clone().lerp(x,P/T),w=T-P;for(let N=0;N<=w;N++)N===0&&P===T?E[P][N]=B:E[P][N]=B.clone().lerp(y,N/w)}for(let P=0;P<T;P++)for(let B=0;B<2*(T-P)-1;B++){let y=Math.floor(B/2);B%2===0?(d(E[P][y+1]),d(E[P+1][y]),d(E[P][y])):(d(E[P][y+1]),d(E[P+1][y+1]),d(E[P+1][y]))}}function c(M){let _=new C;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(M),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let M=new C;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let x=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;a.push(x,1-R)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){let _=a[M+0],x=a[M+2],R=a[M+4],T=Math.max(_,x,R),E=Math.min(_,x,R);T>.9&&E<.1&&(_<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,_){let x=M*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){let M=new C,_=new C,x=new C,R=new C,T=new rt,E=new rt,P=new rt;for(let B=0,y=0;B<r.length;B+=9,y+=6){M.set(r[B+0],r[B+1],r[B+2]),_.set(r[B+3],r[B+4],r[B+5]),x.set(r[B+6],r[B+7],r[B+8]),T.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),R.copy(M).add(_).add(x).divideScalar(3);let w=m(R);v(T,y+0,M,w),v(E,y+2,_,w),v(P,y+4,x,w)}}function v(M,_,x,R){R<0&&M.x===1&&(a[_]=M.x-1),x.x===0&&x.z===0&&(a[_]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Oi=class i extends sc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ia=class i extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new rt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let M=p+m,_=M,x=M+n+1,R=M+n+2,T=M+1;o.push(_,x,T),o.push(x,R,T)}}this.setIndex(o),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var me=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],_=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+x,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let _=h[p][M+1],x=h[p][M],R=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(_,x,T),(p!==n-1||l<Math.PI)&&f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bn=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;a.push(v,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var La=class i extends Me{constructor(t=new bs(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new rt,h=new C,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function v(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),M(),p()}function m(_){h=t.getPointAt(_/e,h);let x=a.normals[_],R=a.binormals[_];for(let T=0;T<=s;T++){let E=T/s*Math.PI*2,P=Math.sin(E),B=-Math.cos(E);l.x=B*x.x+P*R.x,l.y=B*x.y+P*R.y,l.z=B*x.z+P*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let x=1;x<=s;x++){let R=(s+1)*(_-1)+(x-1),T=(s+1)*_+(x-1),E=(s+1)*_+x,P=(s+1)*(_-1)+x;g.push(R,T,P),g.push(T,E,P)}}function M(){for(let _=0;_<=e;_++)for(let x=0;x<=s;x++)c.x=_/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ec[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ss=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rc=class extends ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case oh:r=t,o=2*e-n;break;case lh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:a=t,l=2*n-e;break;case lh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+M*a[c+R]+_*a[l+R]+x*a[u+R];return r}},ac=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},oc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case Il:e=this.InterpolantFactoryMethodLinear;break;case fo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&yv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Il;var Bi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ra;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Sn{};lc.prototype.ValueTypeName="color";var cc=class extends Sn{};cc.prototype.ValueTypeName="number";var hc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)fi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ua=class extends Sn{InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}};Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Sn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=ra;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends Sn{};uc.prototype.ValueTypeName="vector";var dc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},xv=new dc,fc=class{constructor(t){this.manager=t!==void 0?t:xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Pn=class extends Es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Xo=new de,iu=new C,su=new C,lr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pc=class extends lr{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ys*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Da=class extends Es{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new pc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ru=new de,$s=new C,qo=new C,mc=class extends lr{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$s.setFromMatrixPosition(t.matrixWorld),n.position.copy($s),qo.copy(n.position),qo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qo),n.updateMatrixWorld(),s.makeTranslation(-$s.x,-$s.y,-$s.z),ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru)}},Ts=class extends Es{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},gc=class extends lr{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pi=class extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new gc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ic="\\[\\]\\.:\\/",_v=new RegExp("["+Ic+"]","g"),Lc="[^"+Ic+"]",Mv="[^"+Ic.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",Lc),Sv=/(WCOD+)?/.source.replace("WCOD",Mv),wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),Ev=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),Tv=new RegExp("^"+bv+Sv+wv+Ev+"$"),Av=["material","materials","bones","map"],vc=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_v,"")}static parseTrackName(t){let e=Tv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Av.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=vc;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);var Iu=[["nose","neck"],["neck","leftShoulder"],["neck","rightShoulder"],["leftShoulder","leftElbow"],["leftElbow","leftWrist"],["rightShoulder","rightElbow"],["rightElbow","rightWrist"],["neck","root"],["root","leftHip"],["root","rightHip"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["rightHip","rightKnee"],["rightKnee","rightAnkle"]],hr=class{constructor(t,e){this.joints=t,this.aspect=e}distance(t,e){return Math.hypot((t.x-e.x)*this.aspect,t.y-e.y)}get hipCenter(){let t=this.joints;return t.root?t.root:t.leftHip&&t.rightHip?{x:(t.leftHip.x+t.rightHip.x)/2,y:(t.leftHip.y+t.rightHip.y)/2}:null}get neckPoint(){let t=this.joints;return t.neck?t.neck:t.leftShoulder&&t.rightShoulder?{x:(t.leftShoulder.x+t.rightShoulder.x)/2,y:(t.leftShoulder.y+t.rightShoulder.y)/2}:null}get torsoLength(){let t=this.neckPoint,e=this.hipCenter;return t&&e?this.distance(t,e):null}},Je={noPerson:{key:"noPerson",good:!1,message:"Can't see anyone"},tooClose:{key:"tooClose",good:!1,message:"Too close \u2014 step back"},tooFar:{key:"tooFar",good:!1,message:"Too far \u2014 come closer"},goLeft:{key:"goLeft",good:!1,message:"Move a little left"},goRight:{key:"goRight",good:!1,message:"Move a little right"},good:{key:"good",good:!0,message:"Perfect!"}};function Ba(){return{pose:null,status:Je.noPerson,bodyX:.5,lateral:0,isCalibrated:!1,jumpCount:0,isAirborne:!1,isCrouching:!1,leftHand:null,rightHand:null,handsUpRaised:!1,oneHandRaised:!1,handsUpProgress:0,confirmProgress:0,timestamp:0,keyboardActive:!1}}var ur=class i{constructor(t=1.2,e=.5,n=1){this.minCutoff=t,this.beta=e,this.dCutoff=n,this.reset()}static alpha(t,e){return 1/(1+1/(2*Math.PI*t)/e)}filter(t,e){if(this.value===null||this.last===null||e<=this.last)return this.value=t,this.last=e,t;let n=Math.min(e-this.last,.5);this.last=e;let s=(t-this.value)/n;this.deriv+=i.alpha(this.dCutoff,n)*(s-this.deriv);let r=this.minCutoff+this.beta*Math.abs(this.deriv);return this.value+=i.alpha(r,n)*(t-this.value),this.value}reset(){this.value=null,this.last=null,this.deriv=0}};var dr=class{constructor(t=.2){this.grace=t,this.since=null,this.lastActive=null,this.armed=!0}update(t,e,n){return t?(this.lastActive=n,this.since===null&&(this.since=n),this.armed&&n-this.since>=e?(this.armed=!1,!0):!1):this.lastActive===null?(this.since=null,this.armed=!0,!1):(n-this.lastActive<=this.grace||(this.since=null,!this.armed&&n-this.lastActive>.25&&(this.armed=!0)),!1)}progress(t,e){return!this.armed||this.since===null||this.lastActive===null||e-this.lastActive>this.grace?0:Math.min(1,(this.lastActive-this.since)/t)}reset(t){this.since=null,this.armed=!t,t&&this.lastActive===null&&(this.lastActive=-100)}},ka=class i{constructor(){this.handsUpHold=1,this.thumbsUpHold=.4,this.raiseHandHold=.7,this.lastPose=null,this.lastPoseTime=-100,this.jointSeen={},this.bridgeTime=.35,this.centerXFilter=new ur(1,.7),this.handFilters=[0,1,2,3].map(()=>new ur(1.6,1.5)),this.handLastSeen=[-100,-100],this.lastHands=[null,null],this.calibratedCenterX=null,this.refTorso=null,this.calibrationRequested=!1,this.needsCalibration=!0,this.goodSince=null,this.absentSince=null,this.lastLateral=0,this.baseCenterY=null,this.baseHipY=null,this.baseNeckY=null,this.baseAnkleY=null,this.lastCenterY=null,this.lastTime=null,this.airborne=!1,this.airborneSince=0,this.landedAt=-100,this.jumpCount=0,this.crouching=!1,this.status=Je.noPerson,this.candidate=Je.noPerson,this.candidateFrames=0,this.swipeHistory=[[],[]],this.swipeCooldownUntil=0,this.handsUp=new dr(.2),this.thumbs=new dr(.25),this.raiseHand=new dr(.2)}requestCalibration(){this.calibrationRequested=!0}resetGestures(){this.handsUp.reset(!0),this.thumbs.reset(!0),this.raiseHand.reset(!0)}process(t,e,n){let s=this.bridge(t,n),r=Ba();r.timestamp=n,r.pose=s,r.status=this.debounced(i.evaluateStatus(s));let a=[],o=Math.min(Math.max(n-(this.lastTime??n-1/30),1/240),.25);this.lastTime=n;let l=s?.neckPoint,c=s?.hipCenter;if(s&&l&&c&&s.distance(l,c)>.02){let d=s.distance(l,c);this.absentSince!==null&&n-this.absentSince>1.5&&(this.needsCalibration=!0),this.absentSince=null;let f=this.centerXFilter.filter((l.x+c.x)/2,n);r.bodyX=f,r.status.good?this.goodSince===null&&(this.goodSince=n):this.goodSince=null,(this.calibrationRequested||this.refTorso===null||this.needsCalibration&&this.goodSince!==null&&n-this.goodSince>.6)&&this.calibrate(f,l,c,d,s);let g=this.refTorso??d;r.isCalibrated=!this.needsCalibration,this.lastLateral=(f-(this.calibratedCenterX??.5))*s.aspect/g,r.lateral=this.lastLateral,this.updateJumpAndCrouch(s,l,c,g,d,n,o),r.jumpCount=this.jumpCount,r.isAirborne=this.airborne,r.isCrouching=this.crouching,r.leftHand=this.hand(0,s.joints.leftWrist,l,c,g,s.aspect,n),r.rightHand=this.hand(1,s.joints.rightWrist,l,c,g,s.aspect,n);let v=this.detectSwipe(s,l,c,g,n);v&&a.push(v);let m=s.joints.nose?.y??l.y+g*.35,p=s.joints.leftWrist,M=s.joints.rightWrist;if(p&&M){let _=p.y>m+g*.05,x=M.y>m+g*.05;r.handsUpRaised=_&&x,r.oneHandRaised=_&&M.y<l.y-g*.1||x&&p.y<l.y-g*.1}}else this.absentSince===null&&(this.absentSince=n),this.goodSince=null,this.lastCenterY=null,this.airborne=!1,this.crouching=!1,r.jumpCount=this.jumpCount,r.bodyX=this.centerXFilter.filter(.5,n),r.lateral=this.lastLateral,r.isCalibrated=!this.needsCalibration,this.lastHands=[null,null],this.handFilters.forEach(d=>d.reset());this.handsUp.update(r.handsUpRaised,this.handsUpHold,n)&&a.push("back");let h=this.thumbs.update(e&&!r.handsUpRaised,this.thumbsUpHold,n),u=this.raiseHand.update(r.oneHandRaised,this.raiseHandHold,n);return(h||u)&&(a.push("confirm"),this.thumbs.reset(!0),this.raiseHand.reset(!0)),r.handsUpProgress=this.handsUp.progress(this.handsUpHold,n),r.confirmProgress=Math.max(this.thumbs.progress(this.thumbsUpHold,n),this.raiseHand.progress(this.raiseHandHold,n)),{snap:r,events:a}}bridge(t,e){if(!t)return e-this.lastPoseTime<this.bridgeTime?this.lastPose:null;for(let[n,s]of Object.entries(this.jointSeen))!t.joints[n]&&e-s.t<this.bridgeTime&&(t.joints[n]=s.p);for(let[n,s]of Object.entries(t.joints))this.jointSeen[n]={p:s,t:e};return this.lastPose=t,this.lastPoseTime=e,t}calibrate(t,e,n,s,r){this.calibratedCenterX=t,this.refTorso=s,this.baseCenterY=(e.y+n.y)/2,this.baseHipY=n.y,this.baseNeckY=e.y,this.baseAnkleY=i.ankleY(r),this.crouching=!1,this.airborne=!1,this.calibrationRequested=!1,this.needsCalibration=!1}static ankleY(t){let e=t.joints.leftAnkle,n=t.joints.rightAnkle;return e&&n?Math.min(e.y,n.y):null}updateJumpAndCrouch(t,e,n,s,r,a,o){let l=(e.y+n.y)/2;if(this.baseCenterY===null)return;let c=(l-this.baseCenterY)/s,h=(n.y-this.baseHipY)/s,u=this.lastCenterY===null?0:(l-this.lastCenterY)/s/o;this.lastCenterY=l;let d=i.ankleY(t),f=d!==null&&this.baseAnkleY!==null?(d-this.baseAnkleY)/s:null;this.airborne?(c<.07||a-this.airborneSince>1.3)&&(this.airborne=!1,this.landedAt=a):a-this.landedAt>.25&&c>.17&&h>.12&&u>.9&&(f===null||f>.05||c>.3)&&(this.airborne=!0,this.airborneSince=a,this.jumpCount+=1,this.crouching=!1);let g=(this.baseHipY-n.y)/s,v=(this.baseNeckY-e.y)/s;if(this.airborne||(!this.crouching&&(g>.15&&v>.22||v>.5)?this.crouching=!0:this.crouching&&v<.14&&g<.1&&(this.crouching=!1)),this.airborne||this.crouching)return;let m=Math.abs(c)<.08&&Math.abs(u)<.5,p=1-Math.exp(-o/(m?.6:10));this.baseCenterY+=(l-this.baseCenterY)*p,this.baseHipY+=(n.y-this.baseHipY)*p,this.baseNeckY+=(e.y-this.baseNeckY)*p,d!==null&&(this.baseAnkleY=this.baseAnkleY===null?d:this.baseAnkleY+(d-this.baseAnkleY)*p),m&&this.refTorso!==null&&(this.refTorso+=(r-this.refTorso)*p)}hand(t,e,n,s,r,a,o){if(!e)return o-this.handLastSeen[t]<.25?this.lastHands[t]:(this.handFilters[t*2].reset(),this.handFilters[t*2+1].reset(),this.lastHands[t]=null,null);let l=Math.max(-1.3,Math.min(1.3,(e.x-n.x)*a/(r*1.7))),c=Math.max(-.4,Math.min(1.2,(e.y-s.y)/(r*2.3))),h={x:this.handFilters[t*2].filter(l,o),y:this.handFilters[t*2+1].filter(c,o)};return this.handLastSeen[t]=o,this.lastHands[t]=h,h}detectSwipe(t,e,n,s,r){let o=[0,0];if(["leftWrist","rightWrist"].forEach((l,c)=>{let h=t.joints[l];if(!h){this.swipeHistory[c]=[];return}let u=(h.x-e.x)*t.aspect/s,d=(h.y-n.y)/s,f=this.swipeHistory[c];for(f.push({t:r,x:u,y:d});f.length&&r-f[0].t>.4;)f.shift();let g=c===0?-1:1,v=f.reduce((m,p)=>p.x*g<m.x*g?p:m,f[0]);o[c]=(u-v.x)*g}),r<this.swipeCooldownUntil)return null;for(let l=0;l<2;l++){let c=this.swipeHistory[l];if(!c.length)continue;let h=c[c.length-1],u=l===0?-1:1,d=c.reduce((v,m)=>m.x*u<v.x*u?m:v,c[0]),f=o[l],g=f/Math.max(h.t-d.t,1/60);if(f>.85&&g>2&&h.x*u>.7&&d.x*u<.5&&h.y>.25&&h.y<2&&!(o[1-l]>.5))return this.swipeCooldownUntil=r+.6,this.swipeHistory=[[],[]],l===0?"swipeLeft":"swipeRight"}return null}static evaluateStatus(t){if(!t||!t.neckPoint||!(t.joints.leftShoulder||t.joints.rightShoulder))return Je.noPerson;let e=t.neckPoint,n=t.hipCenter;if(!n)return Je.tooClose;let s=t.distance(e,n);if(s>.4||n.y<.06)return Je.tooClose;if(t.joints.nose&&t.joints.nose.y>.97)return Je.tooClose;if(s<.1)return Je.tooFar;let r=(e.x+n.x)/2;return r<.15?Je.goRight:r>.85?Je.goLeft:Je.good}debounced(t){return t===this.status?(this.candidateFrames=0,this.status):(t===this.candidate?this.candidateFrames+=1:(this.candidate=t,this.candidateFrames=1),this.candidateFrames>=6&&(this.status=t,this.candidateFrames=0),this.status)}};var za=class{constructor(){this.interpreter=new ka,this.snapshot=Ba(),this.listeners=new Set,this.snapshotListeners=new Set,this.kb={lane:null,laneUntil:0,jumps:0,crouchUntil:0,airborneUntil:0,activeUntil:0},this.simulateHands=!1}set handsUpHold(t){this.interpreter.handsUpHold=t}onEvent(t){return this.listeners.add(t),()=>this.listeners.delete(t)}onSnapshot(t){return this.snapshotListeners.add(t),()=>this.snapshotListeners.delete(t)}calibrate(){this.interpreter.requestCalibration()}resetGestures(){this.interpreter.resetGestures()}processPose(t,e,n){let{snap:s,events:r}=this.interpreter.process(t,e,n);this.snapshot=s;for(let a of this.snapshotListeners)a(s);for(let a of r)for(let o of this.listeners)o(a)}emit(t){for(let e of this.listeners)e(t)}get latest(){let t={...this.snapshot},e=performance.now()/1e3,n=this.kb;return t.jumpCount+=n.jumps,e<n.activeUntil&&(t.keyboardActive=!0),e<n.laneUntil&&n.lane!==null&&(t.lateral=n.lane,t.bodyX=.5+n.lane*.25),e<n.crouchUntil&&(t.isCrouching=!0),e<n.airborneUntil&&(t.isAirborne=!0),this.simulateHands&&(t.leftHand={x:-.55+.25*Math.sin(e*2.1),y:.62+.2*Math.cos(e*1.7)},t.rightHand={x:.5+.3*Math.cos(e*2.6),y:.55+.25*Math.sin(e*3.1)}),t}keyboardStep(t){let e=performance.now()/1e3,n=this.kb,s=e<n.laneUntil&&n.lane!==null?n.lane:0;n.lane=Math.max(-1,Math.min(1,s+t)),n.laneUntil=e+30,n.activeUntil=e+6}keyboardJump(){let t=performance.now()/1e3;this.kb.jumps+=1,this.kb.airborneUntil=t+.5,this.kb.activeUntil=t+6}keyboardCrouch(){let t=performance.now()/1e3;this.kb.crouchUntil=t+.7,this.kb.activeUntil=t+6}};var Rv={nose:0,leftShoulder:11,rightShoulder:12,leftElbow:13,rightElbow:14,leftWrist:15,rightWrist:16,leftHip:23,rightHip:24,leftKnee:25,rightKnee:26,leftAnkle:27,rightAnkle:28},Ha=class{constructor(t,e){this.hub=t,this.assetBase=e,this.video=document.createElement("video"),this.video.playsInline=!0,this.video.muted=!0,this.video.autoplay=!0,this.stream=null,this.landmarker=null,this.running=!1,this.lastVideoTime=-1,this.lastCenter=null,this.state="idle",this.onState=()=>{}}setState(t,e){this.state=t,this.onState(t,e)}async listDevices(){return(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="videoinput")}async start(t){this.setState("starting");try{this.stream?.getTracks().forEach(e=>e.stop()),this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:t?{deviceId:{exact:t},width:{ideal:1280},height:{ideal:720}}:{facingMode:"user",width:{ideal:1280},height:{ideal:720}}})}catch(e){this.setState(e?.name==="NotAllowedError"?"denied":"error",e?.message);return}if(this.video.srcObject=this.stream,await this.video.play().catch(()=>{}),!this.landmarker)try{let{FilesetResolver:e,PoseLandmarker:n}=await import("./chunks/vision_bundle-JHT6HPDM.js"),s=await e.forVisionTasks(this.assetBase+"mediapipe/wasm"),r=a=>({baseOptions:{modelAssetPath:this.assetBase+"mediapipe/pose_landmarker_lite.task",delegate:a},runningMode:"VIDEO",numPoses:2,minPoseDetectionConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await n.createFromOptions(s,r("GPU"))}catch{this.landmarker=await n.createFromOptions(s,r("CPU"))}}catch(e){this.setState("error","Couldn't load body tracking: "+(e?.message??e));return}this.running=!0,this.setState("running"),this.loop()}get aspect(){return this.video.videoWidth&&this.video.videoHeight?this.video.videoWidth/this.video.videoHeight:16/9}loop(){if(!this.running)return;let t=()=>{if(!this.running)return;let e=this.video;if(e.readyState>=2&&e.currentTime!==this.lastVideoTime){this.lastVideoTime=e.currentTime;let n=performance.now(),s;try{s=this.landmarker.detectForVideo(e,n)}catch{s=null}this.hub.processPose(this.pickPose(s),!1,n/1e3)}e.requestVideoFrameCallback?e.requestVideoFrameCallback(t):requestAnimationFrame(t)};t()}pickPose(t){let e=t?.landmarks??[],n=null;for(let s of e){let r={};for(let[c,h]of Object.entries(Rv)){let u=s[h];!u||(u.visibility??1)<.5||(r[c]={x:1-u.x,y:1-u.y})}if(r.leftShoulder&&r.rightShoulder&&(r.neck={x:(r.leftShoulder.x+r.rightShoulder.x)/2,y:(r.leftShoulder.y+r.rightShoulder.y)/2}),r.leftHip&&r.rightHip&&(r.root={x:(r.leftHip.x+r.rightHip.x)/2,y:(r.leftHip.y+r.rightHip.y)/2}),Object.keys(r).length<4)continue;let a=new hr(r,this.aspect),o=a.torsoLength??.01,l=a.neckPoint??Object.values(r)[0];if(this.lastCenter){let c=Math.hypot((l.x-this.lastCenter.x)*a.aspect,l.y-this.lastCenter.y);o*=Math.max(.35,1-c*2.5)}(!n||o>n.score)&&(n={pose:a,score:o,center:l})}return this.lastCenter=n?.center??null,n?.pose??null}stop(){this.running=!1,this.stream?.getTracks().forEach(t=>t.stop())}};function Lu(i){window.MoveCamNative=window.MoveCamNative||{},window.MoveCamNative.pushPose=t=>{if(!t||!t.joints){i.processPose(null,!!t?.thumbsUp,t?.t??performance.now()/1e3);return}let e={};for(let[n,s]of Object.entries(t.joints))e[n]={x:s[0],y:s[1]};i.processPose(new hr(e,t.aspect||16/9),!!t.thumbsUp,t.t)}}var Uu=()=>!!window.webkit?.messageHandlers?.movecam;function In(i){try{window.webkit?.messageHandlers?.movecam?.postMessage(i)}catch{}}var Cv=["coin","jump","hit","slice","splat","explosion","whistle","kick","save","cheer","groan","punch","beep","go","select","confirm","pause","gameover","gate","whoosh","combo"],Va=class{constructor(t){this.base=t,this.ctx=null,this.buffers=new Map,this.music=new Map,this.current=null,this.ducked=!1,this.settings={sound:Ee("sound",!0),music:Ee("music",!0),volume:Ee("musicVolume",.6)}}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.applyVolumes(),Cv.forEach(e=>this.loadSound(e))}this.ctx.state==="suspended"&&this.ctx.resume()}async fetchBuffer(t){let n=await(await fetch(t)).arrayBuffer();return await this.ctx.decodeAudioData(n)}async loadSound(t){try{this.buffers.set(t,await this.fetchBuffer(`${this.base}sounds/${t}.wav`))}catch{}}play(t,e=1,n=1){if(!this.ctx||!this.settings.sound)return;let s=this.buffers.get(t);if(!s)return;let r=this.ctx.createBufferSource();r.buffer=s,r.playbackRate.value=n;let a=this.ctx.createGain();a.gain.value=e,r.connect(a).connect(this.sfxGain),r.start()}async playMusic(t){if(this.ducked=!1,!this.ctx)return;if(this.current?.name===t){this.applyVolumes();return}this.wanted=t;let e=this.music.get(t);if(!e){try{e=await this.fetchBuffer(`${this.base}music/music-${t}.m4a`)}catch{try{e=await this.fetchBuffer(`${this.base}music/music-${t}.ogg`)}catch{return}}if(this.music.set(t,e),this.music.size>3){for(let a of this.music.keys())if(a!=="menu"&&a!==t){this.music.delete(a);break}}}if(this.wanted!==t)return;let n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;let s=this.ctx.createGain();s.gain.value=0,n.connect(s).connect(this.musicGain),n.start();let r=this.ctx.currentTime;if(s.gain.linearRampToValueAtTime(1,r+1.2),this.current){let a=this.current;a.gain.gain.cancelScheduledValues(r),a.gain.gain.setValueAtTime(a.gain.gain.value,r),a.gain.gain.linearRampToValueAtTime(0,r+1.2),a.source.stop(r+1.3)}this.current={name:t,source:n,gain:s},this.applyVolumes()}duck(t){this.ducked=t,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime,e=this.settings.music?this.settings.volume*.75*(this.ducked?.3:1):0;this.musicGain.gain.cancelScheduledValues(t),this.musicGain.gain.setValueAtTime(this.musicGain.gain.value,t),this.musicGain.gain.linearRampToValueAtTime(e,t+.4),this.sfxGain.gain.value=this.settings.sound?1:0}set(t,e){this.settings[t]=e,be(t==="volume"?"musicVolume":t,e),this.applyVolumes()}};function Ee(i,t){try{let e=localStorage.getItem("movecam."+i);return e===null?t:JSON.parse(e)}catch{return t}}function be(i,t){try{localStorage.setItem("movecam."+i,JSON.stringify(t))}catch{}}var Ga=class{constructor(t){this.root=t,this.state={score:0,lives:null,maxLives:3,time:null,stat:null},this.el=document.createElement("div"),this.el.id="hud",this.banner=document.createElement("div"),this.banner.id="banner",this.banner.style.opacity="0",t.append(this.el,this.banner),this.token=0,this.render()}set(t){Object.assign(this.state,t),this.render()}reset(){this.state={score:0,lives:null,maxLives:3,time:null,stat:null},this.banner.style.opacity="0",this.render()}flash(t,e=1.2){let n=++this.token;this.banner.textContent=t,this.banner.style.opacity="1",setTimeout(()=>{this.token===n&&(this.banner.style.opacity="0")},e*1e3)}show(t){this.el.classList.toggle("hidden",!t),t||(this.banner.style.opacity="0")}render(){let t=this.state,e=[`<div class="stat"><div class="label">SCORE</div><div class="value">${t.score.toLocaleString()}</div></div>`];if(t.lives!==null){let n="";for(let s=0;s<t.maxLives;s++)n+=`<span class="${s<t.lives?"":"off"}">\u2665</span>`;e.push(`<div class="stat"><div class="label">LIVES</div><div class="hearts">${n}</div></div>`)}if(t.time!==null){let n=Math.floor(t.time/60),s=String(t.time%60).padStart(2,"0");e.push(`<div class="stat"><div class="label">TIME</div><div class="value" style="color:${t.time<=10?"var(--bad)":"#fff"}">${n}:${s}</div></div>`)}if(t.stat){let[n,...s]=t.stat.split(" ");e.push(`<div class="stat"><div class="label">${n.toUpperCase()}</div><div class="value">${s.join(" ")}</div></div>`)}this.el.innerHTML=e.join("")}};var dn=class{constructor(t){this.ctx=t,this.hub=t.hub,this.audio=t.audio,this.hud=t.hud,this.scene=new Sa,this.camera=new Fe(60,t.aspect(),.1,1200),this.elapsed=0,this.finished=!1,this.disposables=[]}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}idle(t){}start(){}update(t,e){}finish(t,e){this.finished||(this.finished=!0,this.audio.play("gameover"),setTimeout(()=>this.ctx.onFinished({score:Math.round(t),detail:e}),1e3))}dispose(){this.scene.traverse(t=>{t.geometry?.dispose?.();let e=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let n of e){for(let s of Object.values(n))s?.isTexture&&s.dispose();n.dispose()}})}};function Du(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,_=o.length;M<_;M++){let x=o[M],R=i.attributes[x];l[x]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((E,P)=>{let B=new E.array.constructor(E.count*E.itemSize);c[x][P]=new E.constructor(B,E.itemSize,E.normalized)}))}let f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=f*v;for(let M=0;M<r;M++){let _=n?n.getX(M):M,x="";for(let R=0,T=o.length;R<T;R++){let E=o[R],P=i.getAttribute(E),B=P.itemSize;for(let y=0;y<B;y++)x+=`${~~(P[u[y]](_)*v+m)},`}if(x in e)h.push(e[x]);else{for(let R=0,T=o.length;R<T;R++){let E=o[R],P=i.getAttribute(E),B=i.morphAttributes[E],y=P.itemSize,w=l[E],N=c[E];for(let F=0;F<y;F++){let V=u[F],$=d[F];if(w[$](a,P[V](_)),B)for(let H=0,tt=B.length;H<tt;H++)N[H][$](a,B[H][V](_))}}e[x]=a,h.push(a),a++}}let p=i.clone();for(let M in i.attributes){let _=l[M];if(p.setAttribute(M,new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),M in c)for(let x=0;x<c[M].length;x++){let R=c[M][x];p.morphAttributes[M][x]=new R.constructor(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}function wn(i=1){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var ht=(i,t)=>i+Math.random()*(t-i),Rs=i=>i[Math.floor(Math.random()*i.length)],ke=(i,t,e)=>Math.max(t,Math.min(e,i)),an=(i,t,e)=>i+(t-i)*e,gi=(i,t,e,n)=>an(i,t,1-Math.exp(-e*n));function Pv(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Iv(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,l=e-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),d=0;for(let f=0;f<=1;f++)for(let g=0;g<=1;g++)for(let v=0;v<=1;v++){let m=(f?c:1-c)*(g?h:1-h)*(v?u:1-u);d+=m*Pv(n+f,s+g,r+v)}return d*2-1}function fr(i,t,e,n=4){let s=0,r=.5,a=1,o=0;for(let l=0;l<n;l++)s+=r*Iv(i*a,t*a,e*a),o+=r,r*=.5,a*=2.03;return s/o}function Lv(i){let t=new Oi(1,i);return t.deleteAttribute("normal"),t.deleteAttribute("uv"),Du(t)}function Uv(i,t){let e=i.attributes.position,n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++)n[s*2]=(e.getX(s)+e.getZ(s)*.7)*t,n[s*2+1]=e.getY(s)*t;i.setAttribute("uv",new xe(n,2))}function Te(i,t,e,{repeat:n=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t;let a=r.getContext("2d");e(a,i,t);let o=new Ms(r);return s&&(o.colorSpace=We),o.anisotropy=4,n&&(o.wrapS=o.wrapT=Ui,o.repeat.set(n[0],n[1])),o}function vi(i,t,{size:e=512,count:n=3e3,radius:s=6,seed:r=1,repeat:a=null,alpha:o=[.15,.5]}={}){let l=wn(r);return Te(e,e,(c,h,u)=>{c.fillStyle=i,c.fillRect(0,0,h,u);for(let d=0;d<n;d++){c.globalAlpha=o[0]+l()*(o[1]-o[0]),c.fillStyle=t[Math.floor(l()*t.length)];let f=(.4+l())*s,g=l()*h,v=l()*u;for(let m of[-h,0,h])for(let p of[-u,0,u])c.beginPath(),c.arc(g+m,v+p,f,0,Math.PI*2),c.fill()}c.globalAlpha=1},{repeat:a})}function pr(i,t,e=8,{repeat:n=null}={}){return Te(256,64,(s,r,a)=>{s.fillStyle=i,s.fillRect(0,0,r,a),s.fillStyle=t;let o=r/e;for(let l=-2;l<e+2;l+=2)s.beginPath(),s.moveTo(l*o,0),s.lineTo(l*o+o,0),s.lineTo(l*o+o+a,a),s.lineTo(l*o+a,a),s.closePath(),s.fill()},{repeat:n})}function Cs(i="#ffffff"){return Te(64,64,(t,e)=>{let n=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,i),n.addColorStop(.35,i),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,e,e)})}function ot(i,{rough:t=.6,metal:e=0,map:n=null,emissive:s=null,emissiveIntensity:r=1,transparent:a=!1,opacity:o=1,side:l}={}){let c=new Ss({color:i,roughness:t,metalness:e,map:n,transparent:a,opacity:o});return s&&(c.emissive=new Mt(s),c.emissiveIntensity=r),l&&(c.side=l),c}function J(i,t,{x:e=0,y:n=0,z:s=0,cast:r=!0,receive:a=!1}={}){let o=new se(i,t);return o.position.set(e,n,s),o.castShadow=r,o.receiveShadow=a,o}function Ps(i,t=!0,e=!1){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function Is({top:i,horizon:t,bottom:e,sunDir:n=null,sunColor:s="#fff6d8",sunSize:r=.04,radius:a=900}){let o={top:{value:new Mt(i)},horizon:{value:new Mt(t)},bottom:{value:new Mt(e)},sunDir:{value:(n??new C(0,-1,0)).clone().normalize()},sunColor:{value:new Mt(s)},sunSize:{value:r}},l=new hn({uniforms:o,side:Be,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunSize; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 c = h > 0.0 ? mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(horizon, bottom, pow(clamp(-h, 0.0, 1.0), 0.4));
        float d = max(dot(normalize(vDir), sunDir), 0.0);
        c += sunColor * (pow(d, 900.0 * (0.04 / sunSize)) * 2.5 + pow(d, 12.0) * 0.35);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),c=new se(new me(a,32,16),l);return c.renderOrder=-1,c}function Wa(i,{sun:t="#fff1d6",sunIntensity:e=2.6,sky:n="#bcd4ff",ground:s="#8a6a50",hemi:r=1.1,dir:a=[-.6,1,.5],shadowSize:o=40,shadowMap:l=2048}={}){let c=new Pn(n,s,r);i.add(c);let h=new pi(t,e);h.position.set(a[0]*40,a[1]*40,a[2]*40),h.castShadow=!0,h.shadow.mapSize.set(l,l);let u=o/2;return Object.assign(h.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:1,far:140}),h.shadow.bias=-4e-4,h.shadow.normalBias=.03,i.add(h,h.target),{hemi:c,sun:h}}function Nu(i,t,e,n=[-24,40,20]){i.position.set(t+n[0],n[1],e+n[2]),i.target.position.set(t,0,e)}var Pe=class{constructor(t,{max:e=600,size:n=.25,texture:s=Cs(),additive:r=!1,gravity:a=-9.8}={}){this.max=e,this.gravity=a,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.cursor=0;let o=new Me;o.setAttribute("position",new xe(this.pos,3)),o.setAttribute("color",new xe(this.col,3)),this.material=new rr({size:n,map:s,vertexColors:!0,transparent:!0,depthWrite:!1,blending:r?ds:ci,sizeAttenuation:!0,opacity:.95}),this.points=new Ta(o,this.material),this.points.frustumCulled=!1;for(let l=0;l<e;l++)this.pos[l*3+1]=-9999;t.add(this.points)}burst(t,{count:e=30,speed:n=4,spread:s=1,up:r=.5,color:a="#ffffff",life:o=.8,colorJitter:l=.15,drag:c=.5,dir:h=null}={}){let u=new Mt(a);for(let d=0;d<e;d++){let f=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[f*3]=t.x,this.pos[f*3+1]=t.y,this.pos[f*3+2]=t.z;let g=(Math.random()*2-1)*s,v=(Math.random()*2-1)*s+r,m=(Math.random()*2-1)*s;h&&(g+=h.x,v+=h.y,m+=h.z);let p=Math.hypot(g,v,m)||1,M=n*(.4+Math.random()*.8);this.vel[f*3]=g/p*M,this.vel[f*3+1]=v/p*M,this.vel[f*3+2]=m/p*M;let _=1+(Math.random()*2-1)*l;this.col[f*3]=u.r*_,this.col[f*3+1]=u.g*_,this.col[f*3+2]=u.b*_,this.life[f]=this.maxLife[f]=o*(.6+Math.random()*.8),this.drag[f]=c}}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0)continue;if(this.life[e]-=t,this.life[e]<=0){this.pos[e*3+1]=-9999;continue}let n=Math.exp(-this.drag[e]*t);this.vel[e*3]*=n,this.vel[e*3+2]*=n,this.vel[e*3+1]=this.vel[e*3+1]*n+this.gravity*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.life[e]/this.maxLife[e]<.3&&(this.col[e*3]*=.92,this.col[e*3+1]*=.92,this.col[e*3+2]*=.92)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}shift(t){for(let e=0;e<this.max;e++)this.life[e]>0&&(this.pos[e*3+2]+=t)}};function Xa(i="#b8643a",t=3){let e=vi("#e2dbd4",["#a59b92","#f5f0ea","#c2b8ae"],{size:256,count:2200,radius:3,seed:t,repeat:[1,1],alpha:[.06,.22]}),n=ot("#ffffff",{rough:.95,map:e});return n.vertexColors=!0,n.userData.base=new Mt(i),n}function Dv(i,t,e,n){let s=t.userData.base??new Mt("#a0a0a0"),r=i.attributes.position,a=i.attributes.normal,o=new Float32Array(r.count*3),l=new Mt,c=s.clone().multiplyScalar(.62),h=s.clone().lerp(new Mt("#f3dcc2"),.35);for(let u=0;u<r.count;u++){let d=r.getX(u),f=r.getY(u),g=r.getZ(u),v=fr(d*.9+e,f*.9,g*.9,3);if(n){let m=f+fr(d*.3,f*.15,g*.3+e,2)*1.2,p=Math.pow(Math.sin(m*1.9)*.5+.5,2.2)*.7+(Math.sin(m*5.3+1.7)*.5+.5)*.3;l.copy(c).lerp(h,p*.85+.08+v*.1)}else l.copy(s).multiplyScalar(.85+v*.25);l.multiplyScalar(.78+.22*Math.max(0,a.getY(u)*.5+.5)),o[u*3]=l.r,o[u*3+1]=l.g,o[u*3+2]=l.b}i.setAttribute("color",new xe(o,3))}function Ls(i,t,{detail:e=3,rough:n=.32,flat:s=.75,mesa:r=null,bands:a=null,seed:o=Math.random()*100}={}){let l=Lv(e),c=l.attributes.position;for(let u=0;u<c.count;u++){let d=c.getX(u),f=c.getY(u),g=c.getZ(u),v=1+n*fr(d*1.4+o,f*1.4,g*1.4-o,4),m=f*s;r!==null&&m>r*s&&(m=r*s+(m-r*s)*.08),m<-.35*s&&(m=-.35*s),c.setXYZ(u,d*v*i,m*v*i,g*v*i)}l.computeVertexNormals(),Uv(l,.25/Math.max(i*.25,.5)),Dv(l,t,o,a??t.userData.base?.r>t.userData.base?.b);let h=J(l,t,{receive:!0});return h.rotation.y=Math.random()*Math.PI*2,h}function Fu({radius:i=320,height:t=150,arc:e=Math.PI*.9,y:n=-12,seed:s=7,rock:r="#56606f",snow:a="#f3f6fb",haze:o="#c9d6e8",layers:l=3}={}){let u=Te(2048,512,v=>{let m=new Mt(o);for(let p=0;p<l;p++){let M=1-p/Math.max(l-1,1),_=(N,F)=>"#"+new Mt(N).lerp(m,F).getHexString(),x=_(r,.25+M*.55),R=_(a,M*.35),T=_("#3a4250",.3+M*.55),E=512*(.1+p*.16),P=512*(.6+p*.12),B=new Float32Array(2048);for(let N=0;N<2048;N++){let F=N/2048*(6+p*3),V=1-Math.abs(fr(F+s+p*10,p*3.1,.5,5));B[N]=E+(P-E)*(1-Math.pow(V,1.6))*.95}for(let N=0;N<2048;N++){let F=B[N];v.fillStyle=x,v.fillRect(N,F,1,512-F);let V=1-(F-E)/(P-E),$=(P-F)*(.12+.45*V)*(.7+.45*fr(N/30+s,p,1.3,3));v.fillStyle=R,v.fillRect(N,F,1,Math.max(0,$));let H=(B[Math.min(2047,N+3)]-B[Math.max(0,N-3)])/6;H<-.15&&(v.globalAlpha=Math.min(.45,-H*.25),v.fillStyle=T,v.fillRect(N,F,1,512-F),v.globalAlpha=1)}let y=wn(s*13+p);v.strokeStyle=T;for(let N=0;N<220;N++){let F=y()*2048,V=B[Math.floor(F)];v.globalAlpha=.08+y()*.12,v.lineWidth=.6+y()*1.4,v.beginPath(),v.moveTo(F,V+4+y()*14),v.lineTo(F+(y()-.5)*24,V+20+y()*(P-V)*.5),v.stroke()}v.globalAlpha=1;let w=v.createLinearGradient(0,P-40,0,512);w.addColorStop(0,"#"+m.getHexString()+"00"),w.addColorStop(1,"#"+m.getHexString()+"ee"),v.fillStyle=w,v.fillRect(0,P-40,2048,512-P+40)}});u.wrapS=Hn;let d=new te(i,i,t,96,1,!0,Math.PI-e/2,e),f=new _e({map:u,side:Be,fog:!1,transparent:!0,depthWrite:!1}),g=new se(d,f);return g.position.y=n+t/2,g.renderOrder=-1,g}function Uc(i=3){let t=new Ut,e=ot("#3d7334",{rough:.7}),n=ot("#2f5c28",{rough:.8});t.add(J(new De(.24,i-.5,6,12),e,{y:i/2}));for(let s of[-1,1]){if(s===-1&&Math.random()<.4)continue;let r=i*ht(.3,.5),a=i*ht(.3,.45),o=J(new De(.15,.4,4,10),n,{x:s*.35,y:r});o.rotation.z=Math.PI/2,t.add(o,J(new De(.15,a,4,10),e,{x:s*.6,y:r+a/2}))}return Ps(t)}function Dc(i=6,t=!1){let e=new Ut,n=ot("#4a2f1c",{rough:.9}),s=ot(new Mt().setHSL(.36,.45,ht(.16,.22)),{rough:.85}),r=ot("#f4f8ff",{rough:.5});e.add(J(new te(i*.04,i*.06,i*.3,8),n,{y:i*.15}));for(let a=0;a<4;a++){let o=i*(.34-.07*a),l=i*.36,c=i*.22+a*i*.16+l/2;e.add(J(new Fi(o,l,10),s,{y:c})),t&&e.add(J(new Fi(o*.62,l*.42,10),r,{y:c+l*.3}))}return Ps(e)}function Ou(){let i=ot("#ffc63a",{rough:.22,metal:1,emissive:"#5a3a00",emissiveIntensity:.6}),t=new Ut,e=J(new te(.34,.34,.08,28),i);e.rotation.x=Math.PI/2;let n=J(new bn(.34,.04,8,28),i);return t.add(e,n),t}var fn=class{constructor(){this.amount=0}kick(t){this.amount=Math.max(this.amount,t)}apply(t,e){this.amount<=.001||(t.position.x+=(Math.random()*2-1)*this.amount,t.position.y+=(Math.random()*2-1)*this.amount,this.amount*=Math.exp(-e*9))}};var zi=.95,Ln=class{constructor({shirt:t="#1e6ff2",accent:e="#ffffff",pants:n="#232323",skin:s="#d9a67f",hair:r="#2e1a0e",shoes:a="#ff5a33",gloves:o=null,number:l=null}={}){let c={shirt:ot(t,{rough:.55}),accent:ot(e,{rough:.5}),pants:ot(n,{rough:.75}),skin:ot(s,{rough:.5}),hair:ot(r,{rough:.85}),shoes:ot(a,{rough:.35}),sole:ot("#f2f2f2",{rough:.6}),eye:ot("#151515",{rough:.3}),glove:o?ot(o,{rough:.3}):null};if(l!==null){let v=document.createElement("canvas");v.width=v.height=128;let m=v.getContext("2d");m.fillStyle=t,m.fillRect(0,0,128,128),m.fillStyle=e,m.font="bold 84px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText(String(l),64,70);let p=new Ms(v);p.colorSpace=We,c.back=ot("#ffffff",{rough:.55,map:p})}this.root=new Ut,this.hips=new Ut,this.hips.position.y=zi,this.root.add(this.hips);let h=J(new De(.15,.18,6,12),c.pants,{y:.02});h.rotation.z=Math.PI/2,h.scale.set(1,1,.8),this.hips.add(h),this.chest=new Ut,this.chest.position.y=.1,this.hips.add(this.chest);let u=J(new De(.2,.34,8,16),c.shirt,{y:.26});u.scale.set(1.12,1,.72),this.chest.add(u);let d=J(new te(.206,.206,.06,20),c.accent,{y:.2});if(d.scale.set(1.12,1,.73),this.chest.add(d),c.back){let v=J(new oe(.24,.24),c.back,{y:.32,z:.146});this.chest.add(v)}this.chest.add(J(new te(.055,.06,.1,10),c.skin,{y:.56})),this.head=new Ut,this.head.position.y=.71,this.chest.add(this.head);let f=J(new me(.125,20,16),c.skin);f.scale.set(.92,1.06,1),this.head.add(f);let g=J(new me(.132,20,12,0,Math.PI*2,0,Math.PI*.55),c.hair,{y:.02,z:.012});g.scale.set(.95,1,1.02),this.head.add(g);for(let v of[-1,1])this.head.add(J(new me(.016,8,8),c.eye,{x:v*.045,y:.01,z:-.112,cast:!1}));this.head.add(J(new me(.03,8,8),c.skin,{y:-.02,z:-.122,cast:!1})),this.arms={};for(let v of["left","right"]){let m=v==="left"?-1:1,p=new Ut;p.position.set(.25*m,.46,0),this.chest.add(p),p.add(J(new me(.078,12,10),c.shirt)),p.add(J(new De(.06,.2,4,10),c.shirt,{y:-.14}));let M=new Ut;M.position.y=-.29,p.add(M),M.add(J(new De(.052,.19,4,10),c.skin,{y:-.13}));let _=new Ut;if(_.position.y=-.29,M.add(_),c.glove){let x=J(new me(.1,14,12),c.glove);x.scale.set(.9,1.05,1.15),_.add(x)}else _.add(J(new me(.058,10,8),c.skin));this.arms[v]={shoulder:p,elbow:M,hand:_}}this.legs={};for(let v of["left","right"]){let m=v==="left"?-1:1,p=new Ut;p.position.set(.1*m,-.02,0),this.hips.add(p),p.add(J(new De(.085,.31,4,10),c.pants,{y:-.21}));let M=new Ut;M.position.y=-.44,p.add(M),M.add(J(new De(.068,.31,4,10),c.pants,{y:-.21})),M.add(J(new te(.058,.062,.08,10),c.skin,{y:-.4}));let _=new Ut;_.position.set(0,-.46,-.04),M.add(_);let x=J(new pe(.12,.09,.27),c.shoes);_.add(x,J(new pe(.125,.03,.28),c.sole,{y:-.045})),this.legs[v]={hip:p,knee:M,foot:_}}this.root.traverse(v=>{v.isMesh&&(v.castShadow=!0)}),this.run(0,0)}set(t,e=0,n=0,s=0){t.rotation.set(e,n,s)}run(t,e=1,n=.18){let s=Math.sin(t),r=Math.cos(t),{left:a,right:o}=this.legs;this.set(a.hip,s*.85*e),this.set(o.hip,-s*.85*e),this.set(a.knee,-(.15+1.1*Math.max(0,-r))*e),this.set(o.knee,-(.15+1.1*Math.max(0,r))*e),this.set(a.foot,.2*e*Math.max(0,s)),this.set(o.foot,.2*e*Math.max(0,-s));let l=this.arms;this.set(l.left.shoulder,-s*.8*e,0,-.08),this.set(l.right.shoulder,s*.8*e,0,.08),this.set(l.left.elbow,.3+1.2*e),this.set(l.right.elbow,.3+1.2*e),this.set(this.chest,-n*e,s*.12*e,0),this.set(this.hips,0,-s*.1*e,0),this.hips.position.y=zi+Math.abs(r)*.06*e,this.set(this.head,n*.6*e)}jump(t){let{left:e,right:n}=this.legs,s=this.arms;this.set(e.hip,.9*t),this.set(n.hip,.5*t),this.set(e.knee,-1.4*t),this.set(n.knee,-1.1*t),this.set(s.left.shoulder,2.4*t,0,-.3*t),this.set(s.right.shoulder,2.4*t,0,.3*t),this.set(s.left.elbow,.3),this.set(s.right.elbow,.3),this.set(this.chest,-.1),this.hips.position.y=zi}slide(){let{left:t,right:e}=this.legs,n=this.arms;this.hips.position.y=.35,this.set(this.hips),this.set(this.chest,.9),this.set(this.head,-.6),this.set(t.hip,1.3),this.set(e.hip,1),this.set(t.knee,-.2),this.set(e.knee,-.9),this.set(n.left.shoulder,.6,0,-.9),this.set(n.right.shoulder,.6,0,.9),this.set(n.left.elbow,.2),this.set(n.right.elbow,.2)}stumble(t){this.run(t*20,.6),this.set(this.chest,.5*Math.sin(t*6),0,.3*Math.sin(t*9))}ski(t,e){let n=.55+.45*t,{left:s,right:r}=this.legs,a=this.arms;this.hips.position.y=zi-.18-.22*t,this.set(this.hips,0,0,-e*.25),this.set(s.hip,n),this.set(r.hip,n),this.set(s.knee,-n*1.6),this.set(r.knee,-n*1.6),this.set(s.foot,n*.6),this.set(r.foot,n*.6),this.set(this.chest,-.45-.4*t,0,e*.15),this.set(this.head,.4+.3*t),this.set(a.left.shoulder,.7+.5*t,0,-.25),this.set(a.right.shoulder,.7+.5*t,0,.25),this.set(a.left.elbow,.6),this.set(a.right.elbow,.6)}kick(t){let e=t<.5?t/.5:1-(t-.5)/.5,n=Math.max(0,(t-.5)/.5),{left:s,right:r}=this.legs,a=this.arms;this.set(r.hip,-.7*e+1.3*n),this.set(r.knee,-1.3*e-.1),this.set(s.hip,.15),this.set(s.knee,-.2),this.set(a.left.shoulder,.5*n,0,-.9),this.set(a.right.shoulder,-.4*n,0,.6),this.set(a.left.elbow,.3),this.set(a.right.elbow,.3),this.set(this.chest,-.2*e+.1*n),this.hips.position.y=zi}celebrate(t){let{left:e,right:n}=this.legs,s=this.arms,r=Math.abs(Math.sin(t*8));this.hips.position.y=zi+r*.12,this.set(e.hip,.1),this.set(n.hip,-.1),this.set(e.knee,-.2*r),this.set(n.knee,-.2*r),this.set(s.left.shoulder,2.8,0,-.4),this.set(s.right.shoulder,2.8,0,.4),this.set(s.left.elbow,.2),this.set(s.right.elbow,.2),this.set(this.chest,.1)}guard(t,e={left:0,right:0},n=0,s=0){let{left:r,right:a}=this.legs,o=this.arms,l=Math.sin(t*6)*.025;this.hips.position.y=zi-.06-s*.32+l,this.set(this.hips,0,0,0),this.set(r.hip,.25+s*.6,0,-.1),this.set(a.hip,-.15+s*.6,0,.1),this.set(r.knee,-.35-s*1),this.set(a.knee,-.25-s*1),this.set(this.chest,-.15-s*.3,0,n*.4);for(let[c,h]of[["left",-1],["right",1]]){let u=e[c];this.set(o[c].shoulder,1.15+u*.45,0,h*(.35-u*.3)),this.set(o[c].elbow,2.1-u*2)}}};var Nc=[-2.2,0,2.2],$n=20,Bu=10,Xe=[{at:0,top:"#3d6fc4",horizon:"#ffb27a",bottom:"#8a5a3a",sun:"#fff0d0",sunI:2.8,hemi:1.15,fog:"#f2b58a",lamps:0},{at:900,top:"#2a3f8a",horizon:"#ff8a4a",bottom:"#6a3a2a",sun:"#ffb070",sunI:2.2,hemi:.9,fog:"#e08a5a",lamps:.3},{at:1800,top:"#0b1236",horizon:"#4a3a7a",bottom:"#1a1020",sun:"#9ab0ff",sunI:.9,hemi:.45,fog:"#2a2448",lamps:1}],qa=class extends dn{constructor(t){super(t),this.score=0,this.lives=3,this.coins=0,this.distance=0,this.speed=13,this.lane=1,this.px=0,this.py=0,this.vy=0,this.phase=0,this.lastJump=null,this.invulnerable=0,this.combo=0,this.powers={magnet:0,double:0,shield:!1},this.things=[],this.sinceSpawn=0,this.spawned=0,this.stumble=0,this.build()}build(){let t=this.scene;this.sky=Is({top:Xe[0].top,horizon:Xe[0].horizon,bottom:Xe[0].bottom,sunDir:new C(.2,.12,-1)}),t.add(this.sky),t.fog=new Rn(Xe[0].fog,45,175),this.lights=Wa(t,{sun:Xe[0].sun,sunIntensity:Xe[0].sunI,sky:"#bcd0ff",ground:"#a06a44",hemi:1.15,dir:[-.5,1,.4]}),this.camera.position.set(0,3.2,6.6),this.camera.lookAt(0,1.1,-6),this.camera.fov=62,this.M={road:ot("#ffffff",{rough:.95,map:this.roadTexture()}),sand:ot("#ffffff",{rough:1,map:vi("#dc9e66",["#b97a48","#f2c08a","#a8693c"],{seed:2,repeat:[6,2]})}),rock:Xa("#b8643a",3),post:ot("#eeeeee",{rough:.3,metal:.6}),hurdle:ot("#ffffff",{rough:.45,map:pr("#ffffff","#e01818",8,{repeat:[3,1]})}),hazard:ot("#ffffff",{rough:.6,map:pr("#ffd10d","#141414",12,{repeat:[3,1]})}),wood:ot("#ffffff",{rough:.85,map:vi("#7a4a24",["#5a3416","#8f5c30"],{size:256,count:900,radius:4,seed:9})}),barrel:ot("#a5402a",{rough:.5,metal:.3}),band:ot("#333333",{rough:.4,metal:.8}),gap:ot("#120804",{rough:1}),lamp:ot("#ffd98a",{emissive:"#ffb347",emissiveIntensity:0})},this.tiles=[];for(let e=0;e<Bu;e++){let n=new Ut;n.position.z=-e*$n+10;let s=J(new oe(7.6,$n),this.M.road,{cast:!1,receive:!0});s.rotation.x=-Math.PI/2,n.add(s);for(let a of[-1,1]){let o=J(new oe(70,$n),this.M.sand,{x:a*38.8,y:-.02,cast:!1,receive:!0});o.rotation.x=-Math.PI/2,n.add(o)}let r=[];for(let a=0;a<3;a++)r.push(Ls(ht(.4,1.1),this.M.rock,{detail:2}));r.push(Uc(ht(2.2,3.6))),Math.random()<.6&&r.push(Uc(ht(1.6,3)));for(let a=0;a<2;a++){let o=Ls(ht(6,10),this.M.rock,{detail:3,rough:.28,flat:1,mesa:ht(.45,.75),bands:!0});o.scale.set(1,ht(1.5,2.3),1.2),o.userData.wall=!0,r.push(o)}for(let a of[-1,1]){let o=new Ut;o.add(J(new te(.05,.06,2.2,6),this.M.wood,{y:1.1})),o.add(J(new me(.16,10,8),this.M.lamp,{y:2.25,cast:!1})),o.position.set(a*4.4,0,0),o.userData.lantern=!0,r.push(o)}r.forEach(a=>n.add(a)),this.scatter(r),n.userData.props=r,t.add(n),this.tiles.push(n)}for(let e=0;e<16;e++){let n=e%2?1:-1,s=ht(25,60),r=Ls(ht(26,40),this.M.rock,{detail:3,rough:.22,flat:1,mesa:ht(.25,.5),bands:!0});r.scale.set(ht(1.1,1.8),s/40,1),r.position.set(n*ht(60,170),-2,-ht(220,320)),r.castShadow=!1,t.add(r)}this.figure=new Ln({shirt:"#1e6ff2",accent:"#ffffff",pants:"#262626",shoes:"#ff5a33",number:7}),this.player=new Ut,this.player.add(this.figure.root),t.add(this.player),this.shield=new se(new me(1.15,24,16),new _e({color:"#6fd3ff",transparent:!0,opacity:.18,depthWrite:!1})),this.shield.position.y=1,this.shield.visible=!1,this.player.add(this.shield),this.dust=new Pe(t,{max:400,size:.35,gravity:1.5,texture:Cs("#e8c39a")}),this.sparks=new Pe(t,{max:400,size:.22,gravity:-6,additive:!0}),this.shake=new fn,this.addCoinLine(1,-28,6);for(let e of[-62,-98,-132])this.spawnRow(e);this.hud.set({lives:3,maxLives:3,stat:"Coins 0"}),this.figure.run(0,0)}roadTexture(){return Te(256,512,(t,e,n)=>{t.fillStyle="#a8794f",t.fillRect(0,0,e,n);let s=wn(5);for(let r=0;r<3e3;r++){let a=.35+s()*.5;t.fillStyle=`rgba(${Math.round(255*a)},${Math.round(185*a)},${Math.round(125*a)},0.35)`;let o=1+s()*3;t.fillRect(s()*e,s()*n,o,o)}t.fillStyle="rgba(90,60,35,0.35)";for(let r of[.18,.32,.68,.82])t.fillRect(r*e-6,0,12,n);t.fillStyle="rgba(245,240,230,0.75)";for(let r of[.5-1.1/7.6,.5+1.1/7.6])for(let a=0;a<n;a+=128)t.fillRect(r*e-3,a+20,6,70)})}scatter(t){for(let e of t){if(e.userData.lantern){e.position.z=ht(-$n/2,$n/2);continue}let n=Math.random()<.5?-1:1,s=e.userData.wall?ht(20,34):ht(5.6,15);e.position.set(n*s,e.userData.wall?2:0,ht(-$n/2,$n/2))}}spawnRow(t=-150){this.spawned++;let e=Math.floor(Math.random()*3),n=Math.min(1,this.distance/2500),s=Math.random();if(this.spawned>3&&Math.random()<.12&&this.addPowerUp(e,t-6),s<.18)this.add("hurdle",[0,1,2],t),this.addCoinArc(e,t);else if(s<.32)this.add("bridge",[0,1,2],t),this.addCoinLine(e,t+3,3,.6);else if(s<.52){for(let r of[0,1,2])r!==e&&this.add(Math.random()<.5?"boulder":"barrels",[r],t);this.addCoinLine(e,t-4,5)}else if(s<.64&&this.distance>300)this.add("gap",[0,1,2],t),this.addCoinArc(1,t);else if(s<.82){let r=Math.floor(Math.random()*3);this.add("hurdle",[r],t),this.add(Math.random()<.5?"boulder":"barrels",[(r+1)%3],t),this.addCoinArc(r,t)}else this.add("boulder",[e],t,{rolling:n>.2}),this.addCoinLine((e+1)%3,t,6)}add(t,e,n,s={}){let r,a=this.M,o=e.length===3?0:Nc[e[0]];switch(t){case"hurdle":{r=new Ut;let c=e.length===3?7:1.9;for(let h of[-1,1])r.add(J(new te(.05,.05,.95,8),a.post,{x:h*c/2,y:.475})),r.add(J(new pe(.08,.05,.5),a.post,{x:h*c/2,y:.03}));r.add(J(new pe(c,.2,.08),a.hurdle,{y:.85}));break}case"bridge":{r=new Ut;for(let c of[-1,1])r.add(J(new pe(.5,3.4,.5),a.wood,{x:c*3.7,y:1.7}));r.add(J(new pe(7.9,.75,.35),a.hazard,{y:1.6})),r.add(J(new pe(8.4,.35,.6),a.wood,{y:3.4}));break}case"boulder":{r=J(new Oi(.95,2),a.rock),r.position.y=.92,r.userData.rolling=!!s.rolling;break}case"barrels":{r=new Ut;let c=new te(.42,.42,1.1,16);for(let[h,u,d]of[[-.45,.55,0],[.45,.55,.1],[0,1.6,.05]]){let f=J(c,a.barrel,{x:h,y:u,z:d});for(let g of[-.35,.35])f.add(J(new bn(.425,.03,6,20),a.band,{y:g}));f.children.forEach(g=>g.rotation.x=Math.PI/2),r.add(f)}break}case"gap":{r=new Ut;let c=J(new oe(7.7,3.2),a.gap,{y:.01,cast:!1});c.rotation.x=-Math.PI/2,r.add(c);for(let h of[-1.6,1.6])r.add(J(new pe(7.8,.18,.25),a.rock,{y:.05,z:h}));break}case"coin":r=Ou(),r.position.y=1;break;case"power":r=s.node;break}r.position.x=o,r.position.z=n,Ps(r,t!=="gap"),this.scene.add(r);let l={node:r,kind:t,lanes:e,resolved:!1,hinted:!1,power:s.power};return this.things.push(l),l}addCoinLine(t,e,n,s=1){for(let r=0;r<n;r++)this.add("coin",[t],e-r*2.2).node.position.y=s}addCoinArc(t,e){for(let n=-2;n<=2;n++)this.add("coin",[t],e+n*1.6).node.position.y=1+(2.2-Math.abs(n)*.6)}addPowerUp(t,e){let n=Rs(["magnet","shield","double"]),s={magnet:"#ff4fa0",shield:"#4fd2ff",double:"#ffd13a"},r=new Ut,a=J(new Oi(.42,1),ot(s[n],{rough:.2,metal:.3,emissive:s[n],emissiveIntensity:.9})),o=J(new bn(.62,.05,8,32),ot("#ffffff",{emissive:"#ffffff",emissiveIntensity:.6})),l=new Ea(new sr({map:Te(128,128,c=>{c.font="bold 76px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillStyle="#fff",c.fillText({magnet:"U",shield:"\u25C6",double:"2\xD7"}[n],64,70)}),depthTest:!1}));l.scale.set(.7,.7,1),r.add(a,o,l),r.position.y=1.3,this.add("power",[t],e,{node:r,power:n})}update(t,e){let n=this.elapsed;this.speed=Math.min(30,13+n*.2);let s=this.speed*t;this.distance+=s,this.sinceSpawn+=s;let r=e.lateral;r<-.55?this.lane=0:r>.55?this.lane=2:Math.abs(r)<.3&&(this.lane=1);let a=this.px;this.px=gi(this.px,Nc[this.lane],12,t),this.lastJump===null&&(this.lastJump=e.jumpCount),e.jumpCount!==this.lastJump&&(this.lastJump=e.jumpCount,this.py<=.001&&this.stumble<=0&&(this.vy=7.8,this.audio.play("jump",.7))),this.vy-=20*t,this.py=Math.max(0,this.py+this.vy*t),this.py===0&&(this.vy=0),this.sliding=e.isCrouching&&this.py===0,this.phase+=t*this.speed*.55,this.stumble>0?(this.stumble-=t,this.figure.stumble(this.stumble)):this.py>0?this.figure.jump(Math.min(1,this.py/.6)):this.sliding?this.figure.slide():this.figure.run(this.phase,1),this.player.position.set(this.px,this.py,0),this.player.rotation.y=-(this.px-a)/Math.max(t,.001)*.04,this.py===0&&Math.random()<t*(this.sliding?40:14)&&this.dust.burst({x:this.px,y:.1,z:.3},{count:this.sliding?4:2,speed:1.5,up:1,life:.6,spread:.6,color:"#e2c09a"}),this.powers.magnet=Math.max(0,this.powers.magnet-t),this.powers.double=Math.max(0,this.powers.double-t),this.shield.visible=this.powers.shield,this.shield.visible&&(this.shield.material.opacity=.14+.06*Math.sin(n*6)),this.invulnerable>0?(this.invulnerable-=t,this.figure.root.visible=Math.floor(this.invulnerable*12)%2===0):this.figure.root.visible=!0;let o=this.camera;o.position.set(this.px*.55,3.2+this.py*.25,6.6),o.fov=60+(this.speed-13)*.45,o.updateProjectionMatrix(),o.lookAt(this.px*.7,1.1,-6),this.shake.apply(o,t),this.updatePhaseColors();for(let c of this.tiles)c.position.z+=s,c.position.z-$n/2>12&&(c.position.z-=$n*Bu,this.scatter(c.userData.props));this.sinceSpawn>Math.max(13,24-n*.1)&&(this.sinceSpawn=0,this.spawnRow());for(let c=this.things.length-1;c>=0;c--){let h=this.things[c],u=h.node,d=u.userData.rolling?6*t:0;u.position.z+=s+d,h.kind==="boulder"&&(u.rotation.x+=(s+d)/.95),h.kind==="coin"&&(u.rotation.y+=t*4),h.kind==="power"&&(u.rotation.y+=t*2,u.position.y=1.3+Math.sin(n*4)*.15);let f=u.position.z;if(h.kind==="coin"&&!h.resolved){let g=Math.abs(f)<.9&&Math.abs(u.position.x-this.px)<.9&&Math.abs(u.position.y-(this.py+1))<1.3;this.powers.magnet>0&&f>-14&&f<1&&(u.position.x=gi(u.position.x,this.px,8,t),u.position.y=gi(u.position.y,this.py+1,8,t),u.position.z=gi(u.position.z,0,4,t)),g&&(h.resolved=!0,this.collectCoin(u))}else if(h.kind==="power"&&!h.resolved)Math.abs(f)<1&&Math.abs(u.position.x-this.px)<1.1&&(h.resolved=!0,this.collectPower(h));else if(!h.resolved&&f>-.5&&h.kind!=="coin"&&h.kind!=="power")h.resolved=!0,this.resolveObstacle(h);else if(!h.resolved&&!h.hinted&&this.spawned<=6&&f>-36&&h.kind!=="coin"&&h.kind!=="power"){h.hinted=!0;let g={hurdle:"Jump!",bridge:"Crouch!",gap:"Jump the gap!",boulder:"Change lanes!",barrels:"Change lanes!"}[h.kind];g&&(h.lanes.length===3||h.kind==="boulder"||h.kind==="barrels")&&this.hud.flash(g,.8)}(f>14||h.resolved&&(h.kind==="coin"||h.kind==="power"))&&(this.scene.remove(u),this.things.splice(c,1))}this.dust.shift(s),this.dust.update(t),this.sparks.update(t);let l=Math.floor(this.distance)+this.coins*10;l!==this.score&&(this.score=l,this.hud.set({score:l}))}idle(t){this.phase+=t*3,this.figure.run(this.phase,.15),this.dust.update(t)}updatePhaseColors(){let t=this.distance,e=Xe[0],n=Xe[0],s=0;for(let o=0;o<Xe.length-1;o++)t>=Xe[o].at&&(e=Xe[o],n=Xe[o+1],s=Math.min(1,(t-e.at)/(n.at-e.at)));t>=Xe[Xe.length-1].at&&(e=n=Xe[Xe.length-1],s=1);let r=(o,l)=>new Mt(o).lerp(new Mt(l),s),a=this.sky.material.uniforms;a.top.value.copy(r(e.top,n.top)),a.horizon.value.copy(r(e.horizon,n.horizon)),a.bottom.value.copy(r(e.bottom,n.bottom)),this.scene.fog.color.copy(r(e.fog,n.fog)),this.lights.sun.color.copy(r(e.sun,n.sun)),this.lights.sun.intensity=an(e.sunI,n.sunI,s),this.lights.hemi.intensity=an(e.hemi,n.hemi,s),this.M.lamp.emissiveIntensity=an(e.lamps,n.lamps,s)*3}resolveObstacle(t){if(!t.lanes.some(s=>Math.abs(Nc[s]-this.px)<1.15)){this.cleared(t);return}let n;switch(t.kind){case"hurdle":n=this.py<.45;break;case"gap":n=this.py<.3;break;case"bridge":n=!this.sliding;break;default:n=!0}if(!n){this.cleared(t,!0);return}if(!(this.invulnerable>0)){if(this.powers.shield){this.powers.shield=!1,this.invulnerable=1,this.audio.play("save"),this.hud.flash("Shield saved you!",1),this.sparks.burst({x:this.px,y:1,z:0},{count:60,speed:6,color:"#6fd3ff",life:.7});return}this.lives-=1,this.combo=0,this.invulnerable=1.6,this.stumble=.6,this.shake.kick(.35),this.audio.play("hit"),this.hud.set({lives:Math.max(0,this.lives),stat:`Coins ${this.coins}`}),this.lives<=0?(this.hud.flash("Wipeout!"),this.finish(this.score,`${Math.floor(this.distance)} m \xB7 ${this.coins} coins`)):this.hud.flash({hurdle:"Ouch \u2014 jump!",gap:"Fell in \u2014 jump!",bridge:"Ouch \u2014 crouch!"}[t.kind]??"Ouch \u2014 change lanes!")}}cleared(t,e=!1){if(!e)return;this.combo=Math.min(this.combo+1,20);let n=this.multiplier();this.combo%5===0&&(this.audio.play("combo",.7),this.hud.flash(`${this.combo} clean in a row \xB7 \xD7${n}`,.9)),this.hud.set({stat:`Coins ${this.coins}`})}multiplier(){return 1+Math.min(4,Math.floor(this.combo/5))}collectCoin(t){let e=(this.powers.double>0?2:1)*this.multiplier();this.coins+=e,this.audio.play("coin",.55,1+Math.min(.3,this.combo*.015)),this.sparks.burst(t.position,{count:8,speed:2.5,color:"#ffd75a",life:.4,spread:1}),this.hud.set({stat:`Coins ${this.coins}`})}collectPower(t){let e=t.power;e==="magnet"&&(this.powers.magnet=10),e==="double"&&(this.powers.double=10),e==="shield"&&(this.powers.shield=!0),this.audio.play("gate"),this.sparks.burst(t.node.position,{count:50,speed:5,color:{magnet:"#ff4fa0",shield:"#4fd2ff",double:"#ffd13a"}[e],life:.7}),this.hud.flash({magnet:"Coin magnet!",shield:"Shield up!",double:"Double coins!"}[e],1)}};var Us={watermelon:{r:.95,skin:"#2f6b2a",flesh:"#f0364a",rind:"#e6f2c4",juice:"#ff3550",points:15,shape:[1.15,.92,.92]},orange:{r:.62,skin:"#ff8c12",flesh:"#ffa531",rind:"#fff1d4",juice:"#ff9a1a",points:10,shape:[1,1,1]},apple:{r:.6,skin:"#d4141c",flesh:"#fff3c9",rind:"#fffbe9",juice:"#fff5cc",points:10,shape:[1,.95,1]},lemon:{r:.55,skin:"#ffe01a",flesh:"#fff07a",rind:"#fffbe0",juice:"#fff04a",points:10,shape:[.85,.85,1.2]},kiwi:{r:.5,skin:"#7a5631",flesh:"#7fc23a",rind:"#cdea9a",juice:"#8fd640",points:12,shape:[.95,.95,1.15]},coconut:{r:.65,skin:"#5a3a22",flesh:"#fbfbf3",rind:"#3a2414",juice:"#ffffff",points:15,shape:[1,1.05,1]},pineapple:{r:.72,skin:"#d99a1e",flesh:"#ffe36a",rind:"#f7d24a",juice:"#ffe14a",points:20,shape:[.9,1.35,.9]}},Nv=Object.keys(Us),Ka=class extends dn{constructor(t){super(t),this.score=0,this.lives=3,this.sliced=0,this.flyers=[],this.pieces=[],this.splats=[],this.spawnTimer=1,this.frenzy=0,this.comboCount=0,this.comboTimer=0,this.gravity=-14,this.build()}build(){let t=this.scene;t.background=new Mt("#140c07"),this.camera.position.set(0,0,14),this.camera.fov=45,this.camera.lookAt(0,0,0);let e=Te(1024,1024,(a,o,l)=>{let c=wn(12),h=o/7;for(let u=0;u<8;u++){let d=.85+c()*.25;a.fillStyle=`rgb(${Math.round(120*d)},${Math.round(74*d)},${Math.round(40*d)})`,a.fillRect(u*h,0,h,l);for(let f=0;f<30;f++){a.strokeStyle=`rgba(60,32,14,${.15+c()*.25})`,a.lineWidth=1+c()*3,a.beginPath();let g=u*h+c()*h;a.moveTo(g,0);for(let v=0;v<l;v+=40)g+=(c()-.5)*6,a.lineTo(g,v);a.stroke()}a.fillStyle="rgba(25,12,4,.85)",a.fillRect(u*h-3,0,6,l)}});this.wall=J(new oe(40,24),ot("#ffffff",{rough:.85,map:e}),{z:-3,cast:!1,receive:!0}),t.add(this.wall);let n=new Pn("#ffe6c8","#3a2010",1.2),s=new pi("#fff2dc",2.2);s.position.set(-6,8,12),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-14,right:14,top:10,bottom:-10,near:1,far:40});let r=new Ts("#ffb070",30,30);r.position.set(8,-4,6),t.add(n,s,r),this.juice=new Pe(t,{max:900,size:.28,gravity:-12}),this.sparks=new Pe(t,{max:500,size:.25,gravity:-2,additive:!0}),this.blades=[0,1].map(a=>{let l=new Me;l.setAttribute("position",new xe(new Float32Array(14*2*3),3)),l.setAttribute("color",new xe(new Float32Array(14*2*3),3));let c=[];for(let f=0;f<13;f++){let g=f*2;c.push(g,g+1,g+2,g+1,g+3,g+2)}l.setIndex(c);let h=new se(l,new _e({vertexColors:!0,transparent:!0,blending:ds,depthWrite:!1,side:Oe}));h.frustumCulled=!1;let u=new Mt(a===0?"#6fd8ff":"#ff7ab8"),d=new se(new me(.16,16,12),new _e({color:u}));return t.add(h,d),{ribbon:h,cursor:d,color:u,N:14,points:[],pos:null,speed:0}}),this.textures={},this.shake=new fn,this.flash=new se(new oe(60,40),new _e({color:"#ffffff",transparent:!0,opacity:0,depthTest:!1})),this.flash.position.z=6,this.flash.renderOrder=10,t.add(this.flash),this.hud.set({lives:3,maxLives:3,stat:"Sliced 0"})}get halfHeight(){return Math.tan(Mu.degToRad(this.camera.fov/2))*this.camera.position.z}get halfWidth(){return this.halfHeight*this.camera.aspect}handToWorld(t,e){let n=.5+t.x*.42+ke(e,-1.5,1.5)*.1,s=.08+t.y*.86;return new C((ke(n,0,1)*2-1)*this.halfWidth,(ke(s,0,1)*2-1)*this.halfHeight,.5)}skinTexture(t){if(this.textures[t])return this.textures[t];let e=Us[t],n=Te(512,256,(s,r,a)=>{s.fillStyle=e.skin,s.fillRect(0,0,r,a);let o=wn(t.length*7);if(t==="watermelon"){s.strokeStyle="#173d14",s.lineWidth=22;for(let l=0;l<10;l++){s.beginPath();let c=l*r/10;s.moveTo(c,0);for(let h=0;h<=a;h+=16)c+=Math.sin(h*.08+l)*4,s.lineTo(c,h);s.stroke()}}else if(t==="pineapple"){s.strokeStyle="#7a4a10",s.lineWidth=5;for(let l=-20;l<40;l++)s.beginPath(),s.moveTo(l*26,0),s.lineTo(l*26+a,a),s.stroke(),s.beginPath(),s.moveTo(l*26,a),s.lineTo(l*26+a,0),s.stroke()}else{let l={orange:["#e06a00",1800,2],kiwi:["#4a3018",3e3,1.5],coconut:["#2e1a0c",2500,2.5],lemon:["#e8c000",1200,1.6],apple:["#ffde4a",300,1.5]}[t];if(t==="apple"){let c=s.createLinearGradient(0,0,0,a);c.addColorStop(0,"#ff5a3a"),c.addColorStop(.5,"#d4141c"),c.addColorStop(1,"#7a0a10"),s.fillStyle=c,s.fillRect(0,0,r,a)}s.fillStyle=l[0];for(let c=0;c<l[1];c++)s.globalAlpha=.3+o()*.4,s.beginPath(),s.arc(o()*r,o()*a,l[2]*(.5+o()),0,Math.PI*2),s.fill();s.globalAlpha=1}});return this.textures[t]=n,n}fleshTexture(t){let e=t+":flesh";if(this.textures[e])return this.textures[e];let n=Us[t],s=Te(256,256,(r,a)=>{let o=a/2;r.fillStyle=n.skin,r.beginPath(),r.arc(o,o,o,0,Math.PI*2),r.fill(),r.fillStyle=n.rind,r.beginPath(),r.arc(o,o,o*.93,0,Math.PI*2),r.fill(),r.fillStyle=n.flesh,r.beginPath(),r.arc(o,o,o*(t==="watermelon"?.82:.88),0,Math.PI*2),r.fill();let l=r.createRadialGradient(o*.7,o*.7,0,o,o,o);if(l.addColorStop(0,"rgba(255,255,255,.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=l,r.beginPath(),r.arc(o,o,o*.88,0,Math.PI*2),r.fill(),t==="orange"||t==="lemon"){r.strokeStyle=n.rind,r.lineWidth=3;for(let c=0;c<10;c++){let h=c/10*Math.PI*2;r.beginPath(),r.moveTo(o,o),r.lineTo(o+Math.cos(h)*o*.86,o+Math.sin(h)*o*.86),r.stroke()}}else if(t==="watermelon"){r.fillStyle="#1a0d0a";for(let c=0;c<14;c++){let h=c/14*Math.PI*2,u=o*(c%2?.45:.62);r.beginPath(),r.ellipse(o+Math.cos(h)*u,o+Math.sin(h)*u,4,7,h,0,Math.PI*2),r.fill()}}else if(t==="kiwi"){r.fillStyle="#f4ffe0",r.beginPath(),r.arc(o,o,o*.25,0,Math.PI*2),r.fill(),r.fillStyle="#111";for(let c=0;c<18;c++){let h=c/18*Math.PI*2;r.beginPath(),r.arc(o+Math.cos(h)*o*.38,o+Math.sin(h)*o*.38,3.5,0,Math.PI*2),r.fill()}}else if(t==="apple"){r.fillStyle="#6a3a14";for(let c of[-14,14])r.beginPath(),r.ellipse(o+c,o,5,9,0,0,Math.PI*2),r.fill()}else t==="pineapple"&&(r.fillStyle="#f2c63a",r.beginPath(),r.arc(o,o,o*.22,0,Math.PI*2),r.fill())});return this.textures[e]=s,s}makeFruit(t){let e=Us[t],n=new Ut,s=J(new me(e.r,32,20),ot("#ffffff",{rough:t==="coconut"||t==="kiwi"?.9:.35,map:this.skinTexture(t)}));if(s.scale.set(...e.shape),n.add(s),t==="apple"||t==="orange"){n.add(J(new te(.03,.04,.28,6),ot("#5a3a1a"),{y:e.r*.98}));let r=J(new me(.16,10,6),ot("#3f9a2c",{rough:.5}),{x:.12,y:e.r*1.02});r.scale.set(1.2,.25,.6),n.add(r)}if(t==="pineapple"){let r=ot("#3e8a2a",{rough:.6});for(let a=0;a<7;a++){let o=J(new Fi(.1,.8,5),r,{y:e.r*1.35+.3});o.rotation.z=(a-3)*.25,o.rotation.x=(a%2-.5)*.4,n.add(o)}}return n.userData.radius=e.r*Math.max(...e.shape),n}makeBomb(){let t=new Ut;t.add(J(new me(.62,28,20),ot("#141418",{rough:.25,metal:.6}))),t.add(J(new te(.16,.18,.18,12),ot("#555",{metal:.8,rough:.4}),{y:.64}));let e=J(new bn(.2,.035,6,12,Math.PI),ot("#c9a26a"),{x:.2,y:.74});e.rotation.z=Math.PI,t.add(e);let n=Te(128,128,r=>{r.strokeStyle="#ff2b2b",r.lineWidth=16,r.beginPath(),r.moveTo(30,30),r.lineTo(98,98),r.moveTo(98,30),r.lineTo(30,98),r.stroke()}),s=new se(new oe(.6,.6),new _e({map:n,transparent:!0,depthWrite:!1}));return s.position.z=.63,t.add(s),t.userData.radius=.62,t.userData.fuseTip=new C(.4,.74,0),t}makeBanana(){let t=new Ut,e=new bs(new C(-.7,.1,0),new C(0,-.6,0),new C(.7,.1,0)),n=J(new La(e,24,.22,12),ot("#ffd21a",{rough:.3,metal:.4,emissive:"#ffb800",emissiveIntensity:.6}));return t.add(n),t.userData.radius=.8,t.userData.golden=!0,t}showcase(){for(let t=0;t<6;t++)setTimeout(()=>this.launch(t===5?"bomb":"fruit"),t*90)}launch(t="fruit",e=0){let n,s=null;t==="bomb"?n=this.makeBomb():t==="banana"?n=this.makeBanana():(s=Rs(Nv),n=this.makeFruit(s));let r=this.halfWidth,a=this.halfHeight,o,l=-a-1.5,c,h;if(e)o=e*(r+1.5),l=ht(-a*.6,0),c=-e*ht(7,12),h=ht(6,10);else{o=ht(-r*.75,r*.75);let u=ht(.25,.85)*a*2;h=Math.sqrt(2*-this.gravity*u);let d=2*h/-this.gravity;c=(ht(-r*.5,r*.5)-o)/d}n.position.set(o,l,ht(-.5,.5)),n.rotation.set(Math.random()*6,Math.random()*6,0),this.scene.add(n),this.flyers.push({node:n,kind:s,type:t,vel:new C(c,h,0),spin:new C(ht(-3,3),ht(-3,3),ht(-2,2))}),t!=="bomb"&&this.audio.play("whoosh",.2,ht(.9,1.2))}spawnWave(){let t=this.elapsed,e=t<8?1:1+Math.floor(Math.random()*Math.min(5,2+t/20));for(let n=0;n<e;n++)setTimeout(()=>{if(this.finished)return;let s=t>10&&Math.random()<Math.min(.22,.08+t/400);this.launch(s?"bomb":"fruit")},n*160);t>20&&Math.random()<.06&&setTimeout(()=>this.launch("banana"),500)}update(t,e){this.updateBlades(t,e),this.frenzy>0?(this.frenzy-=t,this.frenzyTimer=(this.frenzyTimer??0)-t,this.frenzyTimer<=0&&(this.frenzyTimer=.18,this.launch("fruit",Math.random()<.5?-1:1)),this.frenzy<=0&&this.hud.flash("Frenzy over",.8)):(this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnWave(),this.spawnTimer=Math.max(.8,1.9-this.elapsed*.012)*ht(.8,1.2)));let n=this.halfHeight;for(let s=this.flyers.length-1;s>=0;s--){let r=this.flyers[s];if(r.vel.y+=this.gravity*t,r.node.position.addScaledVector(r.vel,t),r.node.rotation.x+=r.spin.x*t,r.node.rotation.y+=r.spin.y*t,r.node.rotation.z+=r.spin.z*t,r.type==="bomb"&&Math.random()<t*40){let a=r.userTip??new C;a.copy(r.node.userData.fuseTip).applyMatrix4(r.node.matrixWorld),this.sparks.burst(a,{count:2,speed:1.5,color:"#ffc04a",life:.25,up:1})}if(this.checkSlice(r)){this.flyers.splice(s,1);continue}r.node.position.y<-n-2.5&&r.vel.y<0&&(this.scene.remove(r.node),this.flyers.splice(s,1),r.type==="fruit"&&this.frenzy<=0&&this.loseLife("Missed one!"))}for(let s=this.pieces.length-1;s>=0;s--){let r=this.pieces[s];r.life-=t,r.vel.y+=this.gravity*t,r.node.position.addScaledVector(r.vel,t),r.node.rotation.x+=r.spin.x*t,r.node.rotation.z+=r.spin.z*t,(r.life<=0||r.node.position.y<-n-4)&&(this.scene.remove(r.node),this.pieces.splice(s,1))}for(let s=this.splats.length-1;s>=0;s--){let r=this.splats[s];r.life-=t,r.node.material.opacity=Math.min(.8,r.life/1.5),r.node.scale.setScalar(Math.min(1,r.node.scale.x+t*8)),r.life<=0&&(this.scene.remove(r.node),r.node.material.dispose(),this.splats.splice(s,1))}if(this.juice.update(t),this.sparks.update(t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0)){if(this.comboCount>=3){let s=this.comboCount*5;this.addScore(s),this.audio.play("combo"),this.hud.flash(`${this.comboCount}-fruit combo  +${s}`,1)}this.comboCount=0}this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*2.5),this.camera.position.set(0,0,14),this.shake.apply(this.camera,t)}idle(t){this.juice.update(t),this.sparks.update(t)}updateBlades(t,e){let n=this.elapsed;[e.leftHand,e.rightHand].forEach((s,r)=>{let a=this.blades[r];if(!s){a.pos=null,a.points=[],a.cursor.visible=!1,a.ribbon.visible=!1;return}let o=this.handToWorld(s,e.lateral);for(a.pos&&(a.speed=o.distanceTo(a.pos)/Math.max(t,.001)),a.prev=a.pos?a.pos.clone():o.clone(),a.pos=o,a.cursor.visible=!0,a.cursor.position.copy(o),a.points.push({p:o.clone(),t:n});a.points.length>a.N||a.points.length&&n-a.points[0].t>.16;)a.points.shift();let l=a.ribbon.geometry.attributes.position,c=a.ribbon.geometry.attributes.color,h=a.points.length;a.ribbon.visible=h>1&&a.speed>6;for(let u=0;u<a.N;u++){let d=a.points[Math.min(u,h-1)]?.p??o,f=a.points[Math.min(u+1,h-1)]?.p??d,g=new C().subVectors(f,d),v=new C(-g.y,g.x,0).normalize(),m=.18*(u/Math.max(h-1,1));l.setXYZ(u*2,d.x+v.x*m,d.y+v.y*m,d.z),l.setXYZ(u*2+1,d.x-v.x*m,d.y-v.y*m,d.z);let p=u/Math.max(h-1,1);for(let M of[u*2,u*2+1])c.setXYZ(M,a.color.r*p+p*.6,a.color.g*p+p*.6,a.color.b*p+p*.6)}l.needsUpdate=!0,c.needsUpdate=!0})}checkSlice(t){for(let e of this.blades){if(!e.pos||!e.prev||e.speed<9)continue;let n=t.node.userData.radius+.15;if(Fv(e.prev,e.pos,t.node.position,n)){let s=new C().subVectors(e.pos,e.prev).normalize();return t.type==="bomb"?this.explode(t):this.slice(t,s),!0}}return!1}slice(t,e){this.scene.remove(t.node),this.sliced++,this.comboCount++,this.comboTimer=.35;let n=t.type==="banana",s=n?{juice:"#ffe14a",points:50}:Us[t.kind];this.addScore(s.points*(this.frenzy>0?2:1)),this.audio.play("slice",.8,ht(.9,1.15)),this.audio.play("splat",.5),this.hud.set({stat:`Sliced ${this.sliced}`});let r=t.node.position.clone();if(this.juice.burst(r,{count:45,speed:7,spread:1,up:.3,color:s.juice,life:.8,colorJitter:.2}),n){this.frenzy=6,this.audio.play("combo"),this.hud.flash("FRUIT FRENZY! 2\xD7 points",1.4),this.sparks.burst(r,{count:120,speed:9,color:"#ffd84a",life:1});return}let a=t.kind,o=Us[a],l=new C(-e.y,e.x,0).normalize(),c=ot("#ffffff",{rough:.4,map:this.skinTexture(a)}),h=new Ss({map:this.fleshTexture(a),roughness:.3});for(let d of[1,-1]){let f=new Ut,g=J(new me(o.r,28,16,0,Math.PI*2,0,Math.PI/2),c),v=J(new Cn(o.r,28),h,{cast:!1});v.rotation.x=Math.PI/2,f.add(g,v),f.scale.set(o.shape[0],o.shape[1],o.shape[2]);let m=new Ut;m.add(f),f.quaternion.setFromUnitVectors(new C(0,1,0),l.clone().multiplyScalar(d)),m.position.copy(r).addScaledVector(l,d*.1),this.scene.add(m);let p=t.vel.clone().multiplyScalar(.4).addScaledVector(l,d*ht(3,5)).add(new C(0,2,ht(1,3)));this.pieces.push({node:m,vel:p,spin:new C(ht(-4,4),0,d*ht(2,5)),life:2.5})}let u=new se(new oe(o.r*4,o.r*4),new _e({map:this.splatTexture(),color:o.juice,transparent:!0,opacity:.8,depthWrite:!1}));u.position.set(r.x,r.y,-2.95),u.rotation.z=Math.random()*Math.PI*2,u.scale.setScalar(.3),this.scene.add(u),this.splats.push({node:u,life:4})}splatTexture(){return this.textures.splat?this.textures.splat:(this.textures.splat=Te(256,256,(t,e)=>{let n=wn(4);t.fillStyle="#fff",t.beginPath(),t.arc(e/2,e/2,50,0,Math.PI*2),t.fill();for(let s=0;s<26;s++){let r=n()*Math.PI*2,a=30+n()*85,o=(6+n()*18)*(1-a/160);t.beginPath(),t.arc(e/2+Math.cos(r)*a,e/2+Math.sin(r)*a,o,0,Math.PI*2),t.fill()}}),this.textures.splat)}explode(t){this.scene.remove(t.node),this.audio.play("explosion"),this.flash.material.opacity=.9,this.shake.kick(.6),this.sparks.burst(t.node.position,{count:160,speed:11,color:"#ff9a2a",life:1}),this.juice.burst(t.node.position,{count:60,speed:6,color:"#333",life:1.2}),this.loseLife("Bomb!")}loseLife(t){this.lives-=1,this.audio.play("hit",.5),this.hud.set({lives:Math.max(0,this.lives)}),this.lives<=0?this.finish(this.score,`${this.sliced} fruit sliced`):this.hud.flash(t,.9)}addScore(t){this.score+=t,this.hud.set({score:this.score})}};function Fv(i,t,e,n){let s=t.x-i.x,r=t.y-i.y,a=s*s+r*r,o=a>0?((e.x-i.x)*s+(e.y-i.y)*r)/a:0;return o=Math.max(0,Math.min(1,o)),Math.hypot(i.x+s*o-e.x,i.y+r*o-e.y)<n}var Ds=3.66,yi=2.44,ku=new C(0,.11,-11),Ya=[{at:0,name:"Warm-up",time:1.35,curve:0,dip:0,power:0},{at:5,name:"Curlers",time:1.2,curve:1.2,dip:0,power:0},{at:10,name:"Chips & dips",time:1.1,curve:1.4,dip:.6,power:.15},{at:16,name:"Power shots",time:.95,curve:1.6,dip:.8,power:.3},{at:24,name:"World class",time:.85,curve:1.9,dip:1,power:.4}],$a=class extends dn{constructor(t){super(t),this.score=0,this.lives=5,this.saves=0,this.shots=0,this.streak=0,this.stage="waiting",this.stageTime=0,this.level=0,this.launched=!1,this.ballVel=new C,this.build()}build(){let t=this.scene;this.sky=Is({top:"#03061a",horizon:"#1c2550",bottom:"#0a120a"}),t.add(this.sky),t.fog=new Rn("#0d1430",60,160);let e=new Pn("#9fb4ff","#1a3a1a",.9);t.add(e);let n=new pi("#f4f7ff",2.4);n.position.set(-12,30,12),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:80}),n.target.position.set(0,0,-6),t.add(n,n.target);for(let x of[-30,30]){let R=new Ts("#e8eeff",400,90,1.6);R.position.set(x,26,-26),t.add(R)}this.camera.position.set(0,1.3,4.8),this.camera.fov=58,this.camera.lookAt(0,1.1,-6);let s=Te(512,512,(x,R,T)=>{for(let P=0;P<8;P++){let B=P%2?.86:1;x.fillStyle=`rgb(${Math.round(40*B)},${Math.round(128*B)},${Math.round(42*B)})`,x.fillRect(0,P*T/8,R,T/8)}let E=wn(21);for(let P=0;P<7e3;P++){let B=.3+E()*.4;x.fillStyle=`rgba(${Math.round(70*B)},${Math.round(255*B)},${Math.round(60*B)},0.22)`,x.fillRect(E()*R,E()*T,1.5,4)}},{repeat:[6,6]}),r=J(new oe(90,90),ot("#ffffff",{rough:.9,map:s}),{z:-30,cast:!1,receive:!0});r.rotation.x=-Math.PI/2,t.add(r);let a=ot("#f2f2f2",{rough:.8}),o=(x,R,T,E)=>{let P=J(new oe(T,E),a,{x,y:.01,z:R,cast:!1,receive:!0});P.rotation.x=-Math.PI/2,t.add(P)};o(0,0,60,.12),o(0,-5.5,18.3,.12),o(-9.15,-2.75,.12,5.5),o(9.15,-2.75,.12,5.5),o(0,-16.5,40.3,.12),o(-20.15,-8.25,.12,16.5),o(20.15,-8.25,.12,16.5),t.add(J(new Cn(.15,16),a,{y:.012,z:-11,cast:!1}).rotateX(-Math.PI/2));let l=ot("#f7f7f7",{rough:.25,metal:.2});for(let x of[-1,1])t.add(J(new te(.06,.06,yi,12),l,{x:x*Ds,y:yi/2}));let c=J(new te(.06,.06,Ds*2+.12,12),l,{y:yi});c.rotation.z=Math.PI/2,t.add(c);let h=Te(128,128,(x,R)=>{x.clearRect(0,0,R,R),x.strokeStyle="rgba(255,255,255,.8)",x.lineWidth=2;for(let T=0;T<=8;T++){let E=T*R/8;x.beginPath(),x.moveTo(E,0),x.lineTo(E,R),x.moveTo(0,E),x.lineTo(R,E),x.stroke()}});h.wrapS=h.wrapT=Ui;let u=(x,R)=>{let T=h.clone();return T.needsUpdate=!0,T.repeat.set(x,R),new _e({map:T,transparent:!0,side:Oe,depthWrite:!1})},d=2;for(let x of[-1,1]){let R=new se(new oe(d,yi),u(d*3,yi*3));R.position.set(x*Ds,yi/2,d/2),R.rotation.y=Math.PI/2,t.add(R)}let f=new se(new oe(Ds*2,d),u(Ds*6,d*3));f.position.set(0,yi,d/2),f.rotation.x=-Math.PI/2,t.add(f);let g=Te(1024,256,(x,R,T)=>{x.fillStyle="#141414",x.fillRect(0,0,R,T);let E=wn(33),P=["#e53935","#ffffff","#1e88e5","#fdd835","#e8c4a0","#43a047","#555"];for(let B=0;B<16;B++)for(let y=0;y<128;y++){x.fillStyle=P[Math.floor(E()*P.length)];let w=y*8+E()*3,N=B*16+E()*4;x.beginPath(),x.arc(w+3,N+9,3.2,0,Math.PI*2),x.fill(),x.fillRect(w,N,6,7)}},{repeat:[4,1]}),v=ot("#ffffff",{rough:.9,map:g,emissive:"#ffffff",emissiveIntensity:.12});v.emissiveMap=g;for(let x=0;x<3;x++){let R=J(new pe(150,9,1),v,{y:4+x*8,z:-48-x*7,cast:!1});R.rotation.x=-.5,t.add(R)}let m=["#ff2d75","#2d8cff","#ff8c1a","#1ad1c4"];for(let x=0;x<9;x++){let R=m[x%4];t.add(J(new pe(7.5,.9,.2),ot(R,{rough:.3,emissive:R,emissiveIntensity:1.2}),{x:-35+x*7.8,y:.45,z:-24,cast:!1}))}let p=new _e({color:"#ffffff"}),M=ot("#666",{rough:.4,metal:.8});for(let x of[-38,38]){t.add(J(new te(.4,.5,30,8),M,{x,y:15,z:-40,cast:!1}));for(let R=0;R<3;R++)for(let T=0;T<4;T++)t.add(J(new me(.6,10,8),p,{x:x-2.4+T*1.6,y:30+R*1.4,z:-39.5,cast:!1}))}let _=Te(512,256,(x,R,T)=>{x.fillStyle="#fff",x.fillRect(0,0,R,T),x.fillStyle="#151515";for(let E=0;E<3;E++)for(let P=0;P<6;P++){let B=(P+(E%2?.75:.25))*R/6,y=(E+.5)*T/3,w=E===1?26:18;x.beginPath();for(let N=0;N<5;N++){let F=N/5*Math.PI*2-Math.PI/2,V=B+Math.cos(F)*w,$=y+Math.sin(F)*w;N?x.lineTo(V,$):x.moveTo(V,$)}x.closePath(),x.fill()}});this.ball=J(new me(.11,24,16),ot("#ffffff",{rough:.4,map:_})),this.ball.position.copy(ku),t.add(this.ball),this.shooter=new Ln({shirt:"#d81b2a",accent:"#ffffff",pants:"#ffffff",skin:"#8c6046",hair:"#141414",shoes:"#19e07f",number:9}),this.shooter.root.rotation.y=Math.PI,this.shooter.root.position.set(.9,0,-14.2),t.add(this.shooter.root),this.gloves=[0,1].map(()=>{let x=new Ut,R=ot("#f4f4f4",{rough:.5}),T=ot("#22e07a",{rough:.4,emissive:"#0a5",emissiveIntensity:.4});x.add(J(new pe(.24,.28,.09),R));for(let P=0;P<4;P++)x.add(J(new De(.032,.1,4,8),R,{x:-.09+P*.06,y:.19}));let E=J(new De(.035,.08,4,8),R,{x:.15,y:.02});return E.rotation.z=-.7,x.add(E,J(new pe(.25,.08,.1),T,{y:-.15})),x.scale.setScalar(1.45),x.visible=!1,t.add(x),x}),this.sparks=new Pe(t,{max:500,size:.12,gravity:-4,additive:!0}),this.flashes=new Pe(t,{max:200,size:1.2,gravity:0,additive:!0}),this.trail=new Pe(t,{max:300,size:.25,gravity:.5,additive:!0}),this.shake=new fn,this.hud.set({lives:5,maxLives:5,stat:"Saves 0"})}update(t,e){switch(this.updateGloves(e),this.stageTime+=t,Math.random()<t*6&&this.flashes.burst({x:ht(-60,60),y:ht(4,22),z:ht(-62,-46)},{count:1,speed:0,life:.12,color:"#ffffff"}),this.stage){case"waiting":this.shooter.run(0,0),this.stageTime>1&&this.next("runUp");break;case"runUp":{let n=Math.min(1,this.stageTime/.8);this.shooter.root.position.set(an(.9,.35,n),0,an(-14.2,-11.5,n)),this.shooter.run(this.stageTime*11,.8),this.stageTime>=.8&&this.next("kick");break}case"kick":{let n=Math.min(1,this.stageTime/.4);this.shooter.kick(n),n>=.6&&!this.launched&&(this.launched=!0,this.launchShot()),this.stageTime>=.4&&(this.stage="flight",this.stageTime=0);break}case"flight":{let n=this.stageTime/this.shot.time,s=Math.sin(Math.PI*Math.min(n,1)),r=this.shot;this.ball.position.set(an(r.start.x,r.target.x,n)+r.curve*s,Math.max(.11,an(r.start.y,r.target.y,n)+r.arc*s-r.dip*Math.max(0,n-.6)*2),an(r.start.z,r.target.z,n)),this.ball.rotation.x-=t*25,this.ball.rotation.y+=t*r.curve*10,r.power&&this.trail.burst(this.ball.position,{count:3,speed:.4,color:"#ff7a1a",life:.3});let a=n>.78?this.touchingGlove():null;a?this.save(a):n>=1&&this.goal();break}default:if(this.ballVel.y-=9.8*t,this.ball.position.addScaledVector(this.ballVel,t),this.ball.position.y<.11&&(this.ball.position.y=.11,this.ballVel.y=Math.abs(this.ballVel.y)*.45,this.ballVel.x*=.7,this.ballVel.z*=.7),this.stage==="scored"&&this.ball.position.z>1.9&&(this.ball.position.z=1.9,this.ballVel.z=-Math.abs(this.ballVel.z)*.2),this.stage==="saved"&&this.shooter.run(0,0),this.stage==="scored"&&this.shooter.celebrate(this.stageTime),this.stageTime>1.8){if(this.lives<=0){this.finish(this.score,`${this.saves} saves from ${this.shots} shots`);return}this.resetShot()}}this.sparks.update(t),this.flashes.update(t),this.trail.update(t),this.camera.position.set(0,1.3,4.8),this.shake.apply(this.camera,t)}idle(t){this.flashes.update(t),this.sparks.update(t)}next(t){this.stage=t,this.stageTime=0,t==="runUp"&&this.audio.play("whistle",.5)}resetShot(){this.ball.position.copy(ku),this.ball.rotation.set(0,0,0),this.launched=!1,this.shooter.root.position.set(.9,0,-14.2),this.next("waiting")}launchShot(){this.shots++;let t=0;for(let l=0;l<Ya.length;l++)this.saves>=Ya[l].at&&(t=l);t!==this.level&&(this.level=t,this.hud.flash(`Level ${t+1}: ${Ya[t].name}`,1.4));let e=Ya[t],n=Math.random()<e.power,s=Math.min(1,.55+this.shots*.04),r=ht(-1,1)*(Ds-.35)*s,a=ht(.25,yi-.25),o=Math.random()<e.dip*.4?ht(.3,.6):0;this.shot={start:this.ball.position.clone(),target:new C(r,a,0),time:e.time*(n?.75:1)*ht(.92,1.08),arc:o?1.4:a>1.5?ht(.3,.9):ht(0,.4),curve:ht(-1,1)*e.curve,dip:o,power:n},this.audio.play("kick",n?1:.8),n&&this.hud.flash("Power shot!",.6)}updateGloves(t){[t.leftHand,t.rightHand].forEach((e,n)=>{let s=this.gloves[n];if(!e){s.visible=!1;return}s.visible=!0;let r=ke(e.x*3.1+ke(t.lateral,-1.5,1.5)*1.6,-4.3,4.3),a=ke(.2+e.y*2.6,.1,3);s.position.set(an(s.position.x,r,.55),an(s.position.y,a,.55),.25),s.rotation.z=-e.x*.5})}touchingGlove(){for(let t of this.gloves){if(!t.visible)continue;if(Math.hypot(t.position.x-this.ball.position.x,t.position.y-this.ball.position.y,(t.position.z-this.ball.position.z)*.5)<.5)return t}return null}save(t){this.saves++,this.streak++;let e=(100+(this.streak-1)*25)*(this.shot.power?2:1);this.score+=e,this.stage="saved",this.stageTime=0,this.ballVel.set(ht(-3,3)+(this.ball.position.x-t.position.x)*6,ht(2,5),-ht(6,10)),this.audio.play("save"),this.audio.play("cheer",.7),this.sparks.burst(this.ball.position,{count:50,speed:4,color:"#7dffa8",life:.6}),this.shake.kick(.08),this.hud.set({score:this.score,stat:`Saves ${this.saves}`}),this.hud.flash(this.streak>=3?`Save!  ${this.streak} in a row`:this.shot.power?"Huge save!":"Save!",1)}goal(){this.streak=0,this.lives--,this.stage="scored",this.stageTime=0;let t=this.shot;this.ballVel.set((t.target.x-t.start.x)/t.time,Math.max(-2,(t.target.y-t.start.y)/t.time),(t.target.z-t.start.z)/t.time),this.audio.play("groan",.8),this.hud.set({lives:Math.max(0,this.lives)}),this.hud.flash(this.lives>0?"Goal":"Full time!",1.2)}};var Hi=25,zu=9,Za=class extends dn{constructor(t){super(t),this.score=0,this.time=45,this.distance=0,this.speed=16,this.px=0,this.py=0,this.vy=0,this.gates=0,this.tricks=0,this.bonus=0,this.spin=0,this.spinning=!1,this.fromRamp=!1,this.lastJump=null,this.invulnerable=0,this.things=[],this.sinceSpawn=0,this.lastSecond=-1,this.build()}build(){let t=this.scene,e=new C(-.4,.45,-1);t.add(Is({top:"#2a63c9",horizon:"#cfe0f5",bottom:"#eef3fa",sunDir:e,sunColor:"#fffbe8",sunSize:.03})),t.fog=new Rn("#d6e4f4",60,210),this.lights=Wa(t,{sun:"#fff8ec",sunIntensity:2.2,sky:"#cfe0ff",ground:"#ffffff",hemi:.9,dir:[.5,1,.6]}),this.camera.position.set(0,4,7.4),this.camera.fov=64;let n=vi("#f4f8ff",["#d6e2f4","#ffffff","#e3ecf8"],{count:2600,radius:8,seed:41,repeat:[8,2]}),s=Te(256,256,(o,l,c)=>{o.fillStyle="#f7faff",o.fillRect(0,0,l,c),o.strokeStyle="rgba(170,195,230,.55)",o.lineWidth=3;for(let h=14;h<l;h+=24)o.beginPath(),o.moveTo(h,0),o.bezierCurveTo(h+20,c*.3,h-14,c*.7,h+6,c),o.stroke()},{repeat:[3,2]});this.M={piste:ot("#ffffff",{rough:.55,map:s}),snow:ot("#ffffff",{rough:.7,map:n}),rock:Xa("#7d8796",14),red:ot("#e0262b",{rough:.4}),blue:ot("#1f5ae0",{rough:.4}),ramp:ot("#ffffff",{rough:.35,map:pr("#f4f8ff","#2d7cf0",10,{repeat:[2,1]})}),mountain:ot("#7c879a",{rough:.9}),cap:ot("#ffffff",{rough:.6})},this.tiles=[];for(let o=0;o<zu;o++){let l=new Ut;l.position.z=-o*Hi+12;let c=J(new oe(20,Hi),this.M.piste,{cast:!1,receive:!0});c.rotation.x=-Math.PI/2,l.add(c);for(let u of[-1,1]){let d=J(new oe(80,Hi),this.M.snow,{x:u*50,y:-.01,cast:!1,receive:!0});d.rotation.x=-Math.PI/2,l.add(d)}let h=[];for(let u=0;u<7;u++){let d=Dc(ht(4,9),!0);h.push(d),l.add(d)}this.scatterTrees(h),l.userData.trees=h,t.add(l),this.tiles.push(l)}t.add(Fu({radius:330,height:95,y:-10,seed:11})),this.figure=new Ln({shirt:"#f0353c",accent:"#ffd61a",pants:"#1b2140",skin:"#e8b89a",hair:"#2f6fe8",shoes:"#222"});let r=ot("#ff7a12",{rough:.25,metal:.3}),a=ot("#c8c8c8",{rough:.3,metal:.9});for(let o of["left","right"]){let l=this.figure.legs[o].foot;l.add(J(new pe(.1,.03,1.7),r,{y:-.07,z:-.25}));let c=J(new pe(.1,.03,.22),r,{y:-.02,z:-1.14});c.rotation.x=.5,l.add(c);let h=J(new te(.012,.012,1.15,6),a,{y:-.5,z:.15});h.rotation.x=-.3,this.figure.arms[o].hand.add(h)}this.player=new Ut,this.player.add(this.figure.root),t.add(this.player),this.snow=new Pe(t,{max:900,size:.12,gravity:-1.2,texture:Cs("#ffffff")}),this.spray=new Pe(t,{max:600,size:.3,gravity:-5,texture:Cs("#ffffff")}),this.sparks=new Pe(t,{max:300,size:.2,gravity:-4,additive:!0}),this.shake=new fn;for(let o=0;o<4;o++)this.spawnRow(-60-o*32);this.hud.set({time:45,stat:"Gates 0"})}scatterTrees(t){for(let e of t){let n=Math.random()<.5?-1:1;e.position.set(n*ht(11,36),0,ht(-Hi/2,Hi/2))}}spawnRow(t=-170){let e=ht(-5.5,5.5),n=Math.random()<.5,s=new Ut;for(let a of[-1,1]){s.add(J(new te(.045,.045,1.9,8),n?this.M.red:this.M.blue,{x:a*2.1,y:.95}));let o=J(new oe(.75,.5),n?this.M.red:this.M.blue,{x:a*2.1-a*.4,y:1.5});o.material.side=Oe,s.add(o)}if(s.position.set(e,0,t),Ps(s),this.scene.add(s),this.things.push({node:s,kind:"gate"}),this.distance>120&&Math.random()<.35){let a=ke(e+(e>0?-5:5),-7,7),o=J(new pe(2.4,.12,3.2),this.M.ramp,{x:a,y:.45,z:t-14});o.rotation.x=.28,this.scene.add(o),this.things.push({node:o,kind:"ramp"})}let r=this.distance<80?0:1+Math.floor(Math.random()*Math.min(3,1+this.distance/600));for(let a=0;a<r;a++){let o=ht(-8,8);if(Math.abs(o-e)<3&&(o=e+(o<e?-3.5:3.5)),Math.abs(o)>9)continue;let l=t+ht(-10,10);if(Math.random()<.35){let c=Ls(.6,this.M.rock);c.scale.set(1.3,.6,1),c.position.set(o,.2,l),this.scene.add(c),this.things.push({node:c,kind:"rock"})}else{let c=Dc(ht(3,5.5),!0);c.position.set(o,0,l),this.scene.add(c),this.things.push({node:c,kind:"tree"})}}}update(t,e){let n=this.elapsed;this.time-=t;let s=Math.max(0,Math.ceil(this.time));if(s!==this.lastSecond&&(this.lastSecond=s,this.hud.set({time:s}),s<=5&&s>0&&this.audio.play("beep",.6)),this.time<=0){this.finish(this.score,`${Math.floor(this.distance)} m \xB7 ${this.gates} gates \xB7 ${this.tricks} tricks`);return}let r=e.isCrouching&&this.py===0,a=Math.min(34,16+n*.2);this.speed=gi(this.speed,r?a*1.3:a,2,t);let o=this.speed*t;this.distance+=o,this.sinceSpawn+=o,r&&(this.bonus+=t*10);let l=ke(e.lateral*6,-8.5,8.5),c=this.px;this.px=gi(this.px,l,4,t);let h=ke((this.px-c)/Math.max(t,.001)/6,-1,1);this.lastJump===null&&(this.lastJump=e.jumpCount),e.jumpCount!==this.lastJump&&(this.lastJump=e.jumpCount,this.py<=.001?(this.vy=7.5,this.audio.play("whoosh",.7)):this.fromRamp&&!this.spinning&&(this.spinning=!0,this.audio.play("whoosh",.8,1.3))),(this.py>0||this.vy>0)&&(this.vy-=17*t,this.py=Math.max(0,this.py+this.vy*t),this.spinning&&(this.spin+=t*14),this.py===0&&this.land()),this.figure.ski(r?1:0,h),this.player.position.set(this.px,this.py,0),this.player.rotation.y=-h*.35+this.spin,this.py===0&&this.spray.burst({x:this.px,y:.15,z:.5},{count:Math.round(1+Math.abs(h)*6),speed:2.5+Math.abs(h)*3,up:1.2,spread:.6,life:.5,color:"#ffffff"}),Math.random()<t*60&&this.snow.burst({x:this.px+ht(-20,20),y:12,z:ht(-40,4)},{count:1,speed:1.5,spread:.3,up:-1,life:6,drag:.2,color:"#ffffff"}),this.invulnerable>0?(this.invulnerable-=t,this.figure.root.visible=Math.floor(this.invulnerable*12)%2===0):this.figure.root.visible=!0;let d=this.camera;d.position.set(this.px*.6,4+this.py*.3,7.4),d.fov=62+(this.speed-16)*.4,d.updateProjectionMatrix(),d.lookAt(this.px*.7,.8,-8),this.shake.apply(d,t),Nu(this.lights.sun,this.px,-6,[20,40,24]);for(let g of this.tiles)g.position.z+=o,g.position.z-Hi/2>14&&(g.position.z-=Hi*zu,this.scatterTrees(g.userData.trees));this.sinceSpawn>Math.max(22,34-n*.1)&&(this.sinceSpawn=0,this.spawnRow());for(let g=this.things.length-1;g>=0;g--){let v=this.things[g];v.node.position.z+=o;let m=v.node.position.z;!v.done&&m>-.4&&(v.done=!0,this.resolve(v)),m>16&&(this.scene.remove(v.node),this.things.splice(g,1))}this.snow.shift(o*.3),this.snow.update(t),this.spray.shift(o),this.spray.update(t),this.sparks.update(t);let f=Math.floor(this.distance+this.gates*50+this.bonus);f!==this.score&&(this.score=f,this.hud.set({score:f}))}idle(t){this.figure.ski(0,0),this.snow.update(t)}land(){if(this.vy=0,this.spinning){let t=Math.round(this.spin/(Math.PI*2)),e=150+t*100;this.tricks++,this.bonus+=e,this.audio.play("combo"),this.hud.flash(`${t>0?t*360:180}\xB0 spin  +${e}`,1)}else this.fromRamp&&(this.bonus+=50,this.hud.flash("Big air  +50",.7));this.spin=0,this.spinning=!1,this.fromRamp=!1}resolve(t){let e=Math.abs(t.node.position.x-this.px);switch(t.kind){case"gate":e<2?(this.gates++,this.time+=2,this.audio.play("gate",.7),this.sparks.burst({x:t.node.position.x,y:1.5,z:0},{count:30,speed:4,color:"#9fd8ff",life:.6}),this.hud.set({stat:`Gates ${this.gates}`,time:Math.ceil(this.time)}),this.hud.flash("Gate  +2s",.6)):this.hud.flash("Missed the gate",.7);break;case"ramp":e<1.4&&this.py<.3&&(this.vy=10,this.py=.01,this.fromRamp=!0,this.audio.play("whoosh"),this.hud.flash("Jump for a spin!",.8));break;case"tree":e<.9&&this.py<2.5&&this.crash("Hit a tree  \u22123s");break;case"rock":e<1&&this.py<.35&&this.crash("Rock  \u22123s \xB7 jump next time");break}}crash(t){this.invulnerable>0||(this.invulnerable=1.6,this.time-=3,this.speed*=.4,this.shake.kick(.35),this.audio.play("hit"),this.hud.set({time:Math.max(0,Math.ceil(this.time))}),this.hud.flash(t))}};var Hu=75,Ja=class extends dn{constructor(t){super(t),this.score=0,this.hits=0,this.combo=0,this.pads=[],this.padTimer=.8,this.attack=null,this.attackTimer=12,this.lastSecond=-1,this.recoil=0,this.punch={left:0,right:0},this.build()}build(){let t=this.scene;t.background=new Mt("#07060b"),t.fog=new Rn("#07060b",12,40),this.camera.position.set(0,1.6,1.9),this.camera.fov=60,this.camera.lookAt(0,1.4,-2),t.add(new Pn("#8a7aff","#1a0f0a",.5));for(let[o,l]of[[-3,"#ffe2c4"],[3,"#ffe2c4"],[0,"#ffffff"]]){let c=new Da(l,160,30,.5,.6,1.5);c.position.set(o,9,1),c.target.position.set(0,0,-2),c.castShadow=o===0,c.shadow.mapSize.set(1024,1024),t.add(c,c.target)}let e=vi("#2a3c78",["#22336a","#334a8a"],{count:900,radius:10,seed:5,repeat:[3,3]}),n=J(new oe(12,12),ot("#ffffff",{rough:.8,map:e}),{z:-2,cast:!1,receive:!0});n.rotation.x=-Math.PI/2,t.add(n);let s=ot("#d8d8d8",{rough:.3,metal:.6});for(let o of[-5,5])for(let l of[-7,3])t.add(J(new te(.12,.12,1.6,10),s,{x:o,y:.8,z:l}));["#e53935","#f5f5f5","#1e5ae5"].forEach((o,l)=>{let c=ot(o,{rough:.4}),h=.55+l*.4;for(let[u,d,f,g]of[[-5,-7,5,-7],[-5,-7,-5,3],[5,-7,5,3]]){let v=Math.hypot(f-u,g-d),m=J(new te(.035,.035,v,8),c,{x:(u+f)/2,y:h,z:(d+g)/2,cast:!1});m.rotation.z=Math.PI/2,m.rotation.y=Math.atan2(g-d,f-u)*-1,t.add(m)}});let a=new Pe(t,{max:120,size:1.6,gravity:0,additive:!0});for(let o=0;o<120;o++)a.burst({x:ht(-25,25),y:ht(1,9),z:ht(-30,-14)},{count:1,speed:0,life:1e9,color:Math.random()<.5?"#4a3020":"#20304a"});a.update(0),this.coach=new Ln({shirt:"#222",accent:"#ffcf3a",pants:"#141414",skin:"#b07a55",hair:"#111",shoes:"#111",gloves:"#e2182a"}),this.coach.root.position.set(0,0,-1.9),this.coach.root.rotation.y=Math.PI,t.add(this.coach.root),this.gloves=["#2563eb","#e2182a"].map((o,l)=>{let c=new Ut,h=ot(o,{rough:.32,metal:.05}),u=ot(new Mt(o).multiplyScalar(.55),{rough:.45}),d=ot("#f2f2f2",{rough:.5}),f=[[0,-.2],[.09,-.195],[.15,-.16],[.175,-.08],[.17,.02],[.15,.1],[.12,.15],[.11,.17]].map(([x,R])=>new rt(x,R)),g=J(new or(f,28),h);g.rotation.x=-Math.PI/2,g.scale.set(1,1,.82);let v=J(new De(.055,.12,6,12),h,{x:(l?-1:1)*.14,y:-.03,z:-.02});v.rotation.x=Math.PI/2.4;let m=J(new te(.115,.125,.14,24,1,!0),u,{z:.22});m.rotation.x=Math.PI/2;let p=J(new bn(.118,.016,8,28),d,{z:.17}),M=J(new Cn(.115,24),u,{z:.29}),_=J(new Cn(.045,20),d,{y:.12,z:-.02});return _.rotation.x=-Math.PI/2.6,c.add(g,v,m,p,M,_),c.rotation.order="YXZ",c.visible=!1,t.add(c),{node:c,pos:null,speed:0}}),this.padMat=ot("#ff3b30",{rough:.4,emissive:"#ff2a1a",emissiveIntensity:.6}),this.padRingMat=new _e({color:"#ffd84a",transparent:!0,opacity:.9,side:Oe}),this.sparks=new Pe(t,{max:600,size:.08,gravity:-3,additive:!0}),this.shake=new fn,this.flash=new se(new oe(10,6),new _e({color:"#ff1a1a",transparent:!0,opacity:0,depthTest:!1})),this.flash.position.set(0,1.6,1.8),this.flash.renderOrder=10,t.add(this.flash),this.hud.set({time:Hu,lives:null,stat:"Combo 0"})}handToWorld(t,e){return new C(ke(t.x*1.15+ke(e,-1.5,1.5)*.25,-1.4,1.4),ke(.75+t.y*1.35,.6,2.4),.35)}update(t,e){let n=Math.max(0,Hu-this.elapsed),s=Math.ceil(n);if(s!==this.lastSecond&&(this.lastSecond=s,this.hud.set({time:s}),s<=3&&s>0&&this.audio.play("beep",.6)),n<=0){this.finish(this.score,`${this.hits} punches landed`);return}[e.leftHand,e.rightHand].forEach((l,c)=>{let h=this.gloves[c];if(!l){h.node.visible=!1,h.pos=null;return}let u=this.handToWorld(l,e.lateral);h.pos&&(h.speed=u.distanceTo(h.pos)/Math.max(t,.001)),h.pos=u,h.node.visible=!0,h.lunge=Math.max(0,(h.lunge??0)-t*5);let d=u.clone();d.z-=h.lunge*1.2,h.node.position.lerp(d,.6),h.node.rotation.set(.85-h.lunge*.6,(c===0?-1:1)*.18,(c===0?1:-1)*.25)}),this.padTimer-=t,this.padTimer<=0&&!this.attack&&(this.spawnPad(),this.padTimer=Math.max(.45,1.15-this.elapsed*.009));for(let l=this.pads.length-1;l>=0;l--){let c=this.pads[l];c.age+=t;let h=Math.max(0,1-c.age/c.life);c.ring.scale.setScalar(1+h*1.2),c.ring.material.color.set(h>.35?"#ffd84a":"#ff3b30"),c.node.scale.setScalar(Math.min(1,c.age*8));let u=this.gloves.find(d=>d.pos&&d.speed>3&&this.overlapOnScreen(d.node.position,c.node.position));if(u){u.lunge=1,this.hitPad(c,h),this.pads.splice(l,1);continue}c.age>=c.life&&(this.combo=0,this.hud.set({stat:"Combo 0"}),this.scene.remove(c.node),this.pads.splice(l,1))}this.updateAttack(t,e),this.recoil=Math.max(0,this.recoil-t*3);let r=this.attack,a={left:0,right:0},o=0;if(r){let l=r.time/r.windup;r.stage==="windup"?o=r.side*.4*Math.min(1,l):a[r.side<0?"left":"right"]=Math.min(1,r.time/.25)}this.coach.guard(this.elapsed,a,o,0),this.coach.root.position.z=-1.9-this.recoil*.25,this.sparks.update(t),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*2),this.camera.position.set(ke(e.lateral,-1.5,1.5)*.25,1.6-(e.isCrouching?.45:0),1.9),this.camera.lookAt(0,1.4,-2),this.shake.apply(this.camera,t)}idle(t){this.coach.guard(this.elapsed+performance.now()/1e3),this.sparks.update(t)}overlapOnScreen(t,e){let n=t.clone().project(this.camera),s=e.clone().project(this.camera);return Math.hypot((n.x-s.x)*this.camera.aspect,n.y-s.y)<.16}spawnPad(){let e=[[-.45,1.75],[.45,1.75],[-.55,1.3],[.55,1.3],[0,1.95],[-.3,1.05],[.3,1.05]].filter(([c,h])=>!this.pads.some(u=>Math.hypot(u.node.position.x-c,u.node.position.y-h)<.3));if(!e.length)return;let[n,s]=Rs(e),r=new Ut,a=J(new te(.17,.17,.09,24),this.padMat);a.rotation.x=Math.PI/2;let o=J(new Cn(.08,20),new _e({color:"#ffffff"}),{z:.05,cast:!1}),l=new se(new Ia(.2,.235,32),this.padRingMat.clone());l.position.z=.06,r.add(a,o,l),r.position.set(n,s,-1.15),this.scene.add(r),this.pads.push({node:r,ring:l,age:0,life:Math.max(1.1,2.3-this.elapsed*.014)})}hitPad(t,e){this.hits++,this.combo++;let n=1+Math.min(4,Math.floor(this.combo/5)),s=(50+Math.round(e*50))*n;this.score+=s,this.recoil=1,this.audio.play("punch",1,ht(.9,1.1)),this.combo%10===0&&(this.audio.play("combo"),this.hud.flash(`${this.combo}-hit combo!`)),this.sparks.burst(t.node.position,{count:40,speed:4,color:"#ffcf5a",life:.5}),this.shake.kick(.04),this.scene.remove(t.node),this.hud.set({score:this.score,stat:`Combo ${this.combo}`})}updateAttack(t,e){if(!this.attack){if(this.attackTimer-=t,this.attackTimer<=0&&this.elapsed>8){let s=Math.random()<.5?"hook":"swing";this.attack={kind:s,side:Math.random()<.5?-1:1,stage:"windup",time:0,windup:Math.max(.6,1-this.elapsed*.004)},this.hud.flash(s==="swing"?"Duck!":this.attack.side<0?"Slip right!":"Slip left!",.9),this.audio.play("whistle",.35);for(let r of this.pads)this.scene.remove(r.node);this.pads=[]}return}let n=this.attack;n.time+=t,n.stage==="windup"&&n.time>=n.windup&&(n.stage="strike",n.time=0),n.stage==="strike"&&n.time>=.18&&!n.resolved&&(n.resolved=!0,(n.kind==="swing"?e.isCrouching:(n.side<0?e.lateral>.35:e.lateral<-.35)||e.isCrouching)?(this.score+=150,this.audio.play("whoosh"),this.hud.flash("Nice dodge  +150",.9)):(this.score=Math.max(0,this.score-100),this.combo=0,this.flash.material.opacity=.5,this.shake.kick(.18),this.audio.play("hit"),this.hud.flash("Caught one  \u2212100",.9)),this.hud.set({score:this.score,stat:`Combo ${this.combo}`})),n.stage==="strike"&&n.time>.5&&(this.attack=null,this.attackTimer=ht(6,10))}};var Zn=[{id:"canyonRun",title:"Canyon Run",tagline:"Sprint from sunset into the night",moves:["Step left / right to switch lanes","Jump hurdles and gaps","Crouch under bridges","Grab magnets, shields and 2\xD7 coins"],pro:!1,pauseHold:1,make:i=>new qa(i)},{id:"fruitFrenzy",title:"Fruit Frenzy",tagline:"Your hands are blades",moves:["Swipe fast through flying fruit","Slice several at once for combos","Golden banana starts a frenzy","Don't touch the bombs!"],pro:!1,pauseHold:2,make:i=>new Ka(i)},{id:"penaltySave",title:"Penalty Save",tagline:"Be the hero under the floodlights",moves:["Reach with your hands to save shots","Step sideways to cover the goal","Shots curl, dip and blast as you level up"],pro:!1,pauseHold:2,make:i=>new $a(i)},{id:"alpineRush",title:"Alpine Rush",tagline:"Beat the clock down the mountain",moves:["Lean / step to steer through gates (+2s)","Hit ramps, jump in the air to spin","Crouch into a tuck for speed"],pro:!0,pauseHold:1,make:i=>new Za(i)},{id:"boxingBlitz",title:"Boxing Blitz",tagline:"75 seconds in the ring with a coach",moves:["Punch the glowing pads","Duck swings, slip hooks left / right","Chain hits for multipliers"],pro:!0,pauseHold:2,make:i=>new Ja(i)}];var Mr=new URL("./",import.meta.url).href,je=Uu(),ja=new URLSearchParams(location.search),Ie=i=>{let t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstElementChild},He=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Hc=je?"https://movecam.bhswebsite.org":"",Vu="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Yu=/^MC-[A-Z2-9]{4}-[A-Z2-9]{4}$/,yr=["#ff6a2b","#e8453c","#f2b134","#4cc26b","#1fb5a8","#2f8cff","#5a5ff0","#a157e8","#e85aa8","#b07a4f","#5b6b7a","#3a3f47"],it={id:Ee("userId",null),deviceId:Ee("deviceId",null),plan:Ee("plan","free"),expiresAt:Ee("planExpiry",null),username:Ee("username",null),avatar:Ee("avatar",0),token:Ee("token",null),get signedIn(){return!!(this.token&&this.username)},get isPro(){return this.plan==="free"?!1:!this.expiresAt||new Date(this.expiresAt)>new Date}};if(!Yu.test(it.id??"")){let i=()=>Vu[Math.floor(Math.random()*Vu.length)];it.id=`MC-${i()}${i()}${i()}${i()}-${i()}${i()}${i()}${i()}`,be("userId",it.id)}Yu.test(it.deviceId??"")||(it.deviceId=it.signedIn?null:it.id,be("deviceId",it.deviceId));async function gr(i,{method:t="GET",body:e,auth:n=!1}={}){let s={};e&&(s["content-type"]="application/json"),n&&it.token&&(s.authorization="Bearer "+it.token);try{let r=await fetch(Hc+i,{method:t,headers:s,body:e?JSON.stringify(e):void 0}),a=await r.json().catch(()=>({}));return{ok:r.ok,status:r.status,data:a}}catch{return{ok:!1,status:0,data:{error:"Can't reach MoveCam. Check your internet connection."}}}}function Bc(i){i.token&&(it.token=i.token,be("token",i.token)),it.username=i.username,be("username",i.username),it.avatar=i.avatar??0,be("avatar",it.avatar),i.playerId&&i.playerId!==it.id&&(it.deviceId||(it.deviceId=it.id,be("deviceId",it.deviceId)),it.id=i.playerId,be("userId",i.playerId));for(let[t,e]of Object.entries(i.best??{}))e>io(t)&&be("best."+t,e);je&&In({type:"account",playerId:it.id}),eo(i.plan??"free",i.expiresAt??null)}function $u(i){it.token=null,it.username=null,be("token",null),be("username",null),it.deviceId&&(it.id=it.deviceId,be("userId",it.id)),je&&In({type:"account",playerId:null}),eo("free",null),i&&_r(i),kc(!1)}async function Gu(){if(!it.signedIn)return;let i=await gr("/api/account/me",{auth:!0});i.ok?Bc(i.data):i.status===401&&$u("You were signed out. Sign in again to get your scores and Pro back.")}function Zu(i=30){let t=`width:${i}px;height:${i}px;font-size:${Math.round(i*.48)}px`;return it.signedIn?`<span class="avatar" style="${t};background:${yr[it.avatar%yr.length]}">${He(it.username[0].toUpperCase())}</span>`:`<span class="avatar empty" style="${t}"><svg viewBox="0 0 24 24" width="${Math.round(i*.6)}" height="${Math.round(i*.6)}"><circle cx="12" cy="8" r="4.2" fill="currentColor"/><path d="M3.5 21c.8-4.4 4.2-6.6 8.5-6.6s7.7 2.2 8.5 6.6" fill="currentColor"/></svg></span>`}async function kc(i){if(!je)try{let t=await fetch(Hc+"/api/checkin",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:it.id,appVersion:"web",launch:i,macOS:navigator.userAgent.slice(0,40)})});if(!t.ok)return;let e=await t.json();eo(e.plan,e.expiresAt)}catch{}}function eo(i,t){it.plan=i,it.expiresAt=t,be("plan",i),be("planExpiry",t),jn()}var Qa=[];function no(i,t,e,n){if(!Ee("shareUsage",!0))return;let s={type:i,t:new Date().toISOString()};if(t&&(s.game=t),e!==void 0&&(s.score=Math.round(e)),n!==void 0&&(s.seconds=Math.round(n)),je){In({type:"event",event:s});return}Qa.push(s),(i==="finish"||i==="quit")&&Ju()}async function Ju(){if(!Qa.length||je)return;let i=Qa.splice(0,50);try{await fetch(Hc+"/api/events",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:it.id,events:i})})}catch{Qa.unshift(...i)}}setInterval(Ju,2e4);var Mi=document.getElementById("app"),Yt=new za,kt=new Va(Mr),Vc=document.createElement("canvas");Vc.id="stage";Mi.append(Vc);var En=new ba({canvas:Vc,antialias:!0,powerPreference:"high-performance"}),xr=[2,1.5,1.25,1],Ns=xr.findIndex(i=>i<=Math.min(window.devicePixelRatio,1.5));Ns<0&&(Ns=xr.length-1);En.setPixelRatio(Math.min(window.devicePixelRatio,xr[Ns]));En.shadowMap.enabled=!0;En.shadowMap.type=xc;En.toneMapping=_c;En.toneMappingExposure=1;En.outputColorSpace=We;var Os=new Ga(Mi);Os.show(!1);var X={screen:"menu",phase:"waiting",selected:Math.max(0,Zn.findIndex(i=>i.id===Ee("lastGame","canyonRun"))),game:null,info:null,gameStarted:!1,startedAt:0,result:null,isBest:!1,overlay:null,countdownTimer:null,goodSince:null,missingSince:null,stepArmed:!0},Ye=Ie(`<div id="menu">
  <header>
    <div class="brand">
      <img src="${Mr}icons/icon-180.png" alt="">
      <span class="name">MoveCam</span><span class="sep"></span>
      <button class="btn profile" id="profileBtn" title="Your account"></button>
      <select id="cameraSelect" title="Camera"></select>
      <span id="planBadge" class="btn"></span>
      <button class="btn" id="musicBtn" title="Music"></button>
      <button class="btn" id="settingsBtn" title="Settings">\u2699\uFE0E</button>
      <button class="btn ${je||!document.fullscreenEnabled?"hidden":""}" id="fullBtn" title="Full screen">\u2922</button>
      <button class="btn accent hidden" id="updateBtn" title="A new version is available">\u2B07\uFE0E Update</button>
    </div>
    <h1>Games</h1>
    <div class="sub">Swing an arm out to the side to choose. Raise a hand to play. Or just tap.</div>
  </header>
  <div class="carousel" id="carousel"></div>
  <div class="hints">
    <div class="hint"><div class="tile">\u{1F44B}</div><div><b>Swing an arm out</b><span>Choose a game</span></div></div>
    <div class="hint"><div class="tile">\u270B</div><div><b>Raise a hand</b><span>Play</span></div></div>
    <div class="hint"><div class="tile">\u{1F64C}</div><div><b>Both hands up</b><span>Pause or go back</span></div></div>
    <div class="kbd">Keyboard: \u2190 \u2192 \xB7 Space \xB7 Esc</div>
  </div>
</div>`);Mi.append(Ye);var xi=Ie(`<div id="live" class="${je?"hidden":""}">
  <div class="frame"><div class="offline">Camera off</div><canvas></canvas><div class="rings"></div>
  <div class="status"><span class="msg">Can't see anyone</span></div></div></div>`);Mi.append(xi);var vr=xi.querySelector("canvas"),br=Ie('<button id="pauseBtn" class="hidden" aria-label="Pause">\u275A\u275A</button>');Mi.append(br);var Fs=Ie('<div id="countdown" class="hidden"></div>'),zc=Ie('<div id="holdRing" class="hidden"><svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,.2)" stroke-width="6" fill="none"/><circle class="arc" cx="32" cy="32" r="28" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176" transform="rotate(-90 32 32)"/></svg><div>Keep your hands up to pause</div></div>'),to=Ie('<div id="toast" class="hidden"></div>');Mi.append(Fs,zc,to);var Wu;function _r(i){to.textContent=i,to.classList.remove("hidden"),clearTimeout(Wu),Wu=setTimeout(()=>to.classList.add("hidden"),3e3)}function io(i){return Ee("best."+i,0)}function jn(){let i=Ye.querySelector("#carousel");i.innerHTML="",Zn.forEach((n,s)=>{let r=n.pro&&!it.isPro,a=io(n.id),o=Ie(`<div class="card ${s===X.selected?"selected":""} ${r?"locked":""}">
      <div class="art" style="background-image:url('${Mr}cards/${n.id}.jpg')">
        <div class="tags">${n.pro?'<span class="tag pro">PRO</span>':'<span class="tag dark">FREE</span>'}${r?'<span class="tag dark">\u{1F512}</span>':""}</div>
      </div>
      <div class="body">
        <div class="title">${He(n.title)}</div>
        <div class="tagline">${He(n.tagline)}</div>
        <ul>${n.moves.map(l=>`<li>${He(l)}</li>`).join("")}</ul>
        <div class="foot"><span class="best">${a>0?"Best "+a.toLocaleString():"Not played yet"}</span>
        <span class="play">${r?"\u{1F512} Pro coming soon":"\u270B Play"}</span></div>
      </div></div>`);o.addEventListener("click",()=>{kt.unlock(),X.selected===s?Xc():(X.selected=s,kt.play("select"),jn())}),i.append(o)}),i.children[X.selected]?.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});let e=Ye.querySelector("#planBadge");e.textContent=it.isPro?it.plan==="trial"?"\u2605 Pro trial":"\u2605 Pro":"Free plan",e.style.background=it.isPro?"var(--pro)":"",e.style.color=it.isPro?"#000":"",Ye.querySelector("#musicBtn").textContent=kt.settings.music?"\u266B":"\u266B\u0338",Ye.querySelector("#profileBtn").innerHTML=Zu(24)+`<span>${it.signedIn?He(it.username):"Sign in"}</span>`}function Bs(i){let t=Math.max(0,Math.min(Zn.length-1,X.selected+i));t!==X.selected&&(X.selected=t,kt.play("select"),jn())}Ye.querySelector("#musicBtn").addEventListener("click",()=>{kt.unlock(),kt.set("music",!kt.settings.music),jn()});Ye.querySelector("#settingsBtn").addEventListener("click",()=>ju());Ye.querySelector("#profileBtn").addEventListener("click",()=>{kt.unlock(),Gc()});Ye.querySelector("#fullBtn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()});function Vi(i){ze(),X.overlay=i,Mi.append(i)}function ze(){X.overlay?.remove(),X.overlay=null}function ks(i,t,e,n,s){let r=Ie(`<button class="choice ${n}"><span class="sym">${i}</span><b>${t}</b><span>${e}</span></button>`);return r.addEventListener("click",s),r}function Ov(){let i=Zn[X.selected],t=Ie(`<div class="scrim"><div class="panel">
    <span class="tag pro">PRO</span>
    <h2>${He(i.title)} is part of MoveCam Pro</h2>
    <p>Pro isn't on sale yet. Want early access? Send your ${it.signedIn?"username":"MoveCam ID"} to a moderator and they can unlock it for you.</p>
    <div class="idbox"><span>${it.signedIn?He(it.username):it.id}</span><button class="btn" id="copyId">Copy</button></div>
    ${it.signedIn?"":'<p style="font-size:13px">Tip: <a href="#" id="proSignIn">create an account</a> so Pro follows you to every device.</p>'}
    <button class="btn accent big" id="okBtn">OK</button>
    <p style="font-size:12px;color:var(--tertiary)">Raise a hand or press Space to close</p></div></div>`);t.querySelector("#copyId").addEventListener("click",()=>navigator.clipboard?.writeText(it.signedIn?it.username:it.id)),t.querySelector("#proSignIn")?.addEventListener("click",e=>{e.preventDefault(),Gc("signup")}),t.querySelector("#okBtn").addEventListener("click",ze),t.addEventListener("click",e=>{e.target===t&&ze()}),t.dataset.kind="pro",Vi(t)}function Gc(i="signin"){let t=n=>yr.map((s,r)=>`<button type="button" class="swatch ${r===n?"on":""}" data-i="${r}" style="background:${s}" aria-label="Color ${r+1}"></button>`).join(""),e;if(it.signedIn){let n=it.isPro?it.plan==="trial"?"Pro trial"+(it.expiresAt?" until "+new Date(it.expiresAt).toLocaleDateString():""):"MoveCam Pro":"Free plan";e=Ie(`<div class="scrim"><div class="panel account">
      <div class="who">${Zu(72)}<div><h2>${He(it.username)}</h2><p>${n}</p></div></div>
      <div class="field"><label>Color</label><div class="swatches">${t(it.avatar)}</div></div>
      <details><summary>Change password</summary>
        <form class="pw"><input name="current" type="password" placeholder="Current password" autocomplete="current-password">
        <input name="next" type="password" placeholder="New password (6+ characters)" autocomplete="new-password">
        <button class="btn" type="submit">Save password</button></form></details>
      <div class="err"></div>
      <div class="actions"><button class="btn" id="signOutBtn">Sign out</button><button class="btn accent big" id="doneBtn">Done</button></div>
    </div></div>`);let s=e.querySelector(".err");e.querySelectorAll(".swatch").forEach(r=>r.addEventListener("click",async()=>{let a=Number(r.dataset.i);e.querySelectorAll(".swatch").forEach(l=>l.classList.toggle("on",l===r)),it.avatar=a,be("avatar",a),e.querySelector(".who .avatar").style.background=yr[a],jn();let o=await gr("/api/account/profile",{method:"POST",body:{avatar:a},auth:!0});o.ok||(s.textContent=o.data.error??"Couldn't save your color.")})),e.querySelector("form.pw").addEventListener("submit",async r=>{r.preventDefault();let a=r.target,o=await gr("/api/account/profile",{method:"POST",auth:!0,body:{currentPassword:a.current.value,newPassword:a.next.value}});o.ok?(Bc(o.data),a.reset(),e.querySelector("details").open=!1,s.textContent="",_r("Password changed. Other devices are signed out.")):s.textContent=o.data.error??"Couldn't change your password."}),e.querySelector("#signOutBtn").addEventListener("click",()=>{ze(),$u("Signed out. Scores and Pro stay with your account.")}),e.querySelector("#doneBtn").addEventListener("click",ze)}else{let n=Math.floor(Math.random()*yr.length);e=Ie(`<div class="scrim"><div class="panel account">
      <h2>Your MoveCam account</h2>
      <p>Keep your best scores and Pro on every device: Mac, iPad and the web.</p>
      <div class="seg"><button type="button" data-m="signin">Sign in</button><button type="button" data-m="signup">Create account</button></div>
      <form class="auth">
        <input name="username" placeholder="Username" autocomplete="username" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="16">
        <input name="password" type="password" placeholder="Password">
        <div class="field signup-only"><label>Pick a color</label><div class="swatches">${t(n)}</div></div>
        <div class="err"></div>
        <button class="btn accent big" type="submit"></button>
      </form>
      <button class="link" id="notNow">Not now</button>
    </div></div>`);let s=e.querySelector("form.auth"),r=e.querySelector(".err"),a=o=>{i=o,e.querySelectorAll(".seg button").forEach(l=>l.classList.toggle("on",l.dataset.m===o)),e.querySelector(".signup-only").classList.toggle("hidden",o!=="signup"),s.querySelector("button[type=submit]").textContent=o==="signup"?"Create account":"Sign in",s.password.placeholder=o==="signup"?"Password (6+ characters)":"Password",s.password.autocomplete=o==="signup"?"new-password":"current-password",r.textContent=""};e.querySelectorAll(".seg button").forEach(o=>o.addEventListener("click",()=>a(o.dataset.m))),e.querySelectorAll(".swatch").forEach(o=>o.addEventListener("click",()=>{n=Number(o.dataset.i),e.querySelectorAll(".swatch").forEach(l=>l.classList.toggle("on",l===o))})),s.addEventListener("submit",async o=>{o.preventDefault();let l=s.username.value.trim(),c=s.password.value;if(!/^[A-Za-z0-9_]{3,16}$/.test(l)){r.textContent="Usernames are 3 to 16 letters, numbers or _";return}if(i==="signup"&&c.length<6){r.textContent="Passwords need at least 6 characters";return}let h=s.querySelector("button[type=submit]");h.disabled=!0,r.textContent="";let u=i==="signup"?await gr("/api/account/signup",{method:"POST",body:{username:l,password:c,avatar:n,playerId:it.id}}):await gr("/api/account/login",{method:"POST",body:{username:l,password:c}});if(h.disabled=!1,!u.ok){r.textContent=u.data.error??"Something went wrong. Try again.";return}Bc(u.data),ze(),kt.play("confirm"),_r(i==="signup"?`Welcome to MoveCam, ${it.username}!`:`Welcome back, ${it.username}!`)}),e.querySelector("#notNow").addEventListener("click",ze),a(i),setTimeout(()=>s.username.focus(),50)}e.addEventListener("click",n=>{n.target===e&&ze()}),e.dataset.kind="account",Vi(e)}function ju(){let i=s=>`<button class="switch ${s?"on":""}"></button>`,t=Ie(`<div class="scrim"><div class="panel settings">
    <h2>Settings</h2>
    <div class="row"><label>Music</label>${i(kt.settings.music)}</div>
    <div class="row"><label>Music volume</label><input type="range" min="0" max="1" step="0.05" value="${kt.settings.volume}"></div>
    <div class="row"><label>Sound effects</label>${i(kt.settings.sound)}</div>
    <div class="row"><label>Show tracking skeleton</label>${i(Ee("skeleton",!0))}</div>
    <div class="row ${je?"hidden":""}"><label>Share anonymous play stats<small>Game names, scores and play time. Never video.</small></label>${i(Ee("shareUsage",!0))}</div>
    <div class="row"><label>${it.signedIn?He(it.username):"Your MoveCam ID"}<small>${it.isPro?it.plan==="trial"?"Pro trial":"Pro":"Free plan"}${it.signedIn?"":" \xB7 not signed in"}</small></label><span class="idbox" style="font-size:15px">${it.id}</span></div>
    <div class="row"><label>How to move<small>A one-minute guide to the four moves</small></label><button class="btn" id="guideBtn">Show guide</button></div>
    <button class="btn accent big" style="align-self:center;margin-top:8px" id="doneBtn">Done</button></div></div>`);t.querySelector("#guideBtn").addEventListener("click",()=>Wc());let e=t.querySelectorAll(".switch"),n=["music","sound","skeleton","shareUsage"];e.forEach((s,r)=>s.addEventListener("click",()=>{let a=!s.classList.contains("on");s.classList.toggle("on",a),n[r]==="music"||n[r]==="sound"?kt.set(n[r],a):be(n[r],a),jn()})),t.querySelector("input[type=range]").addEventListener("input",s=>kt.set("volume",parseFloat(s.target.value))),t.querySelector("#doneBtn").addEventListener("click",ze),t.addEventListener("click",s=>{s.target===t&&ze()}),t.dataset.kind="settings",Vi(t)}function Qu(){let i=Ie(`<div class="scrim"><div class="panel">
    <div class="eyebrow">${He(X.info.title)}</div>
    <h2 class="headline">Get in position</h2>
    <div class="pill"><span class="msg">Can't see anyone</span></div>
    <ul class="moves">${X.info.moves.map(e=>`<li>${He(e)}</li>`).join("")}</ul>
    <p>Stand back so the camera sees you from your head to below your hips. The frame turns green when you're in the right spot.</p>
    <div class="choices"></div></div></div>`);i.querySelector(".choices").append(ks("\u270B","Start now","Raise a hand \xB7 Space","good",()=>ro()),ks("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>ao())),i.dataset.kind="waiting",Vi(i)}function Bv(){let i=Ie('<div class="scrim"><div class="panel"><h2>Paused</h2><div class="choices"></div></div></div>');i.querySelector(".choices").append(ks("\u270B","Resume","Raise a hand \xB7 Space","good",()=>id()),ks("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>ao())),i.dataset.kind="paused",Vi(i)}function kv(){let{result:i,isBest:t}=X,e=Ie(`<div class="scrim"><div class="panel">
    ${t?`<span class="tag pro">NEW BEST${it.signedIn?" \xB7 "+He(it.username.toUpperCase()):""}</span>`:`<div class="eyebrow">${it.signedIn?"Nice one, "+He(it.username):"Game over"}</div>`}
    <div class="score">${i.score.toLocaleString()}</div>
    <p>${He(i.detail)}</p>
    ${t?"":`<p style="color:var(--tertiary)">Best ${io(X.info.id).toLocaleString()}</p>`}
    <div class="choices"></div></div></div>`);e.querySelector(".choices").append(ks("\u270B","Play again","Raise a hand \xB7 Space","good",()=>sd()),ks("\u{1F64C}","Main menu","Both hands up \xB7 Esc","",()=>ao())),e.dataset.kind="over",Vi(e)}var _i=[{art:"\u{1F9CD}",title:"Step back until the frame turns green",text:"The camera needs to see you from your head to below your hips. About 2 m (6 ft) from the screen usually works.",progress:(i,t)=>t.goodSince?Math.min(1,(performance.now()-t.goodSince)/1200):0},{art:"\u270B",title:"Raise one hand above your head",event:["confirm"],text:"Hold it there for a moment. That's how you start a game or pick something.",progress:i=>i.confirmProgress},{art:"\u{1F44B}",title:"Swing an arm out to the side",event:["swipeLeft","swipeRight"],text:"A quick sweep, like waving someone past. Right arm goes right, left arm goes left. That's how you browse games.",progress:()=>0},{art:"\u{1F64C}",title:"Put both hands up and hold",event:["back"],text:"That pauses any game, and goes back from menus.",progress:i=>i.handsUpProgress}],ge={step:0,goodSince:null,advancing:!1};function Wc(){ge.step=0,ge.goodSince=null,ge.advancing=!1,Yt.resetGestures();let i=Ie(`<div class="scrim guide"><div class="panel">
    <div class="dots">${_i.map(()=>"<i></i>").join("")}<i></i></div>
    <div class="art"></div><h2></h2><p class="text"></p>
    <div class="bar"><span></span></div>
    <div class="pill"><span class="msg"></span></div>
    <div class="actions"><button class="link" id="skipGuide">Skip guide</button><button class="btn" id="nextGuide">Next \u2192</button></div>
  </div></div>`);i.querySelector("#skipGuide").addEventListener("click",zs),i.querySelector("#nextGuide").addEventListener("click",()=>so()),i.dataset.kind="guide",Vi(i),td()}function td(){let i=X.overlay;if(i?.dataset.kind!=="guide")return;if(i.querySelectorAll(".dots i").forEach((e,n)=>e.classList.toggle("on",n<=ge.step)),i.querySelector(".panel").classList.remove("done"),ge.step>=_i.length){i.querySelector(".art").textContent="\u{1F389}",i.querySelector("h2").textContent="You've got it!",i.querySelector(".text").textContent=it.signedIn?"That's everything. Raise a hand to jump into your first game.":"That's everything. Create an account to keep your scores on every device, or raise a hand to start playing.",i.querySelector(".bar").classList.add("hidden"),i.querySelector(".pill").classList.add("hidden");let e=i.querySelector(".actions");if(e.innerHTML="",!it.signedIn){let s=Ie('<button class="btn">Create account</button>');s.addEventListener("click",()=>{zs(),Gc("signup")}),e.append(s)}let n=Ie(`<button class="btn accent big">\u270B Let's play</button>`);n.addEventListener("click",zs),e.append(n);return}let t=_i[ge.step];i.querySelector(".art").textContent=t.art,i.querySelector("h2").textContent=t.title,i.querySelector(".text").textContent=t.text,i.querySelector(".pill").classList.toggle("hidden",ge.step!==0),i.querySelector(".bar").classList.toggle("hidden",ge.step===2),i.querySelector(".bar span").style.width="0%"}function so(i=!1){if(ge.advancing)return;if(ge.step>=_i.length){zs();return}let t=()=>{ge.advancing=!1,ge.step++,ge.goodSince=null,Yt.resetGestures(),td()};if(!i){t();return}ge.advancing=!0,kt.play("confirm"),X.overlay?.querySelector(".panel").classList.add("done"),setTimeout(t,800)}function zs(){be("guideDone",!0),ze(),Yt.resetGestures(),jn()}function zv(i){if(ge.step>=_i.length){i==="confirm"&&zs();return}_i[ge.step].event?.includes(i)&&so(!0)}function Hv(i){let t=X.overlay;if(ge.step>=_i.length||ge.advancing)return;if(ge.step===0){let n=t.querySelector(".pill");n.classList.toggle("good",i.status.good),n.querySelector(".msg").textContent=i.status.message,ge.goodSince=i.status.good?ge.goodSince??performance.now():null}let e=_i[ge.step].progress(i,ge);t.querySelector(".bar span").style.width=`${Math.round(e*100)}%`,ge.step===0&&e>=1&&so(!0)}var ed={hub:Yt,audio:kt,hud:Os,renderer:En,aspect:()=>window.innerWidth/Math.max(window.innerHeight,1),onFinished:i=>Vv(i)};function Xc(){let i=Zn[X.selected];if(i.pro&&!it.isPro){no("locked",i.id),kt.play("pause"),Ov();return}be("lastGame",i.id),kt.play("confirm"),qc(i)}function qc(i){clearTimeout(X.countdownTimer),nd(),Os.reset(),X.info=i,X.game=i.make(ed),X.gameStarted=!1,X.goodSince=null,X.missingSince=null,X.screen="game",X.phase="waiting",Yt.handsUpHold=i.pauseHold,Yt.resetGestures(),Ye.classList.add("hidden"),Os.show(!0),br.classList.remove("hidden"),kt.playMusic(i.id),Qu()}function nd(){X.game&&(X.game.dispose(),X.game=null)}function ro(){ze(),clearTimeout(X.countdownTimer);let i=3;X.phase="countdown";let t=()=>{if(X.phase==="countdown"){if(i===0){Fs.classList.add("hidden"),kt.play("go"),Yt.calibrate(),X.phase="playing",X.missingSince=null,Yt.resetGestures(),X.gameStarted||(X.gameStarted=!0,X.startedAt=performance.now(),no("start",X.info.id),X.game.start());return}Fs.innerHTML=`<span>${i}</span>`,Fs.classList.remove("hidden"),kt.play("beep"),i-=1,X.countdownTimer=setTimeout(t,800)}};t()}function Kc(i){X.screen!=="game"||!(X.phase==="playing"||X.phase==="countdown")||(clearTimeout(X.countdownTimer),Fs.classList.add("hidden"),X.phase=X.gameStarted?"paused":"waiting",Yt.resetGestures(),kt.play("pause"),kt.duck(!0),i&&_r(i),X.phase==="paused"?Bv():Qu())}function id(){X.phase==="paused"&&(Yt.resetGestures(),kt.duck(!1),ro())}function ao(){clearTimeout(X.countdownTimer),X.gameStarted&&X.phase!=="over"&&X.info&&no("quit",X.info.id,X.game?.score??0,(performance.now()-X.startedAt)/1e3),ze(),Fs.classList.add("hidden"),nd(),X.screen="menu",X.phase="waiting",Os.show(!1),br.classList.add("hidden"),Ye.classList.remove("hidden"),Yt.handsUpHold=1,Yt.resetGestures(),Yt.calibrate(),kt.play("pause"),kt.playMusic("menu"),jn()}function sd(){X.info&&(kt.play("confirm"),qc(X.info))}function Vv(i){if(X.screen!=="game"||!X.info)return;let t=i.score>io(X.info.id);t&&be("best."+X.info.id,i.score),no("finish",X.info.id,i.score,(performance.now()-X.startedAt)/1e3),X.result=i,X.isBest=t,X.phase="over",Yt.resetGestures(),kt.duck(!0),t&&setTimeout(()=>kt.play("combo"),1200),kv()}var rd=new Set(["settings","account"]);Yt.onEvent(i=>{if(!rd.has(X.overlay?.dataset.kind)){if(X.overlay?.dataset.kind==="guide"){zv(i);return}if(X.screen==="menu"){if(X.overlay?.dataset.kind==="pro"){(i==="confirm"||i==="back")&&ze();return}i==="confirm"?Xc():i==="swipeLeft"?Bs(-1):i==="swipeRight"&&Bs(1);return}i==="confirm"?X.phase==="waiting"?ro():X.phase==="paused"?id():X.phase==="over"&&sd():i==="back"&&(X.phase==="playing"||X.phase==="countdown"?Kc():ao())}});br.addEventListener("click",()=>Kc());window.addEventListener("keydown",i=>{let t=i.code==="Escape";if(rd.has(X.overlay?.dataset.kind)){t&&ze();return}if(X.overlay?.dataset.kind==="guide"){t?zs():(i.code==="Space"||i.code==="Enter"||i.code==="ArrowRight")&&so(),i.preventDefault();return}if(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)return;kt.unlock();let e=i.code==="Space"||i.code==="Enter";if(X.screen==="menu"){if(X.overlay?.dataset.kind==="pro"){(e||t)&&ze(),i.preventDefault();return}if(i.code==="ArrowLeft")Bs(-1);else if(i.code==="ArrowRight")Bs(1);else if(e)Xc();else return;i.preventDefault();return}if(t){Yt.emit("back"),i.preventDefault();return}if(e&&X.phase!=="playing"){Yt.emit("confirm"),i.preventDefault();return}if(X.phase==="playing"){if(i.code==="ArrowLeft")Yt.keyboardStep(-1);else if(i.code==="ArrowRight")Yt.keyboardStep(1);else if(i.code==="ArrowUp"||i.code==="Space")Yt.keyboardJump();else if(i.code==="ArrowDown")Yt.keyboardCrouch();else return;i.preventDefault()}});var pn=vr.getContext("2d"),Xu=0;Yt.onSnapshot(i=>{let t=i.status.good;if(X.overlay?.dataset.kind==="guide"&&Hv(i),xi.classList.toggle("good",t),xi.querySelector(".msg").textContent=i.status.message,X.overlay?.dataset.kind==="waiting"){let o=X.overlay.querySelector(".pill");o.classList.toggle("good",t),o.querySelector(".msg").textContent=i.status.message,X.overlay.querySelector(".headline").textContent=t?"Hold still":"Get in position"}let e=performance.now();if(je||e-Xu<30)return;Xu=e;let n=vr.width=vr.clientWidth*devicePixelRatio,s=vr.height=vr.clientHeight*devicePixelRatio;pn.clearRect(0,0,n,s);let r=i.pose;if(r&&Ee("skeleton",!0)){let o=l=>[l.x*n,(1-l.y)*s];pn.strokeStyle="rgba(255,255,255,.7)",pn.lineWidth=2.5*devicePixelRatio,pn.lineCap="round",pn.beginPath();for(let[l,c]of Iu){let h=r.joints[l],u=r.joints[c];!h||!u||(pn.moveTo(...o(h)),pn.lineTo(...o(u)))}pn.stroke(),pn.fillStyle=t?"#30c75a":"#ed4038";for(let l of Object.values(r.joints)){let[c,h]=o(l);pn.beginPath(),pn.arc(c,h,4*devicePixelRatio,0,Math.PI*2),pn.fill()}}let a=xi.querySelector(".rings");a.innerHTML="";for(let[o,l]of[[i.confirmProgress,"\u270B"],[i.handsUpProgress,"\u{1F64C}"]])o<.05||a.insertAdjacentHTML("beforeend",`<svg class="ring" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="rgba(0,0,0,.7)"/><circle cx="22" cy="22" r="18" stroke="#30c75a" stroke-width="4" fill="none" stroke-dasharray="113" stroke-dashoffset="${113*(1-o)}" transform="rotate(-90 22 22)" stroke-linecap="round"/><text x="22" y="28" font-size="16" text-anchor="middle">${l}</text></svg>`)});var qu="";setInterval(()=>{let i=X.screen+":"+X.phase;je&&i!==qu&&(qu=i,In({type:"state",screen:X.screen,phase:X.phase}));let t=Yt.latest;if(X.screen==="menu"){if(X.overlay||!t.status.good){X.stepArmed=!0;return}X.stepArmed&&t.lateral<-.7?(X.stepArmed=!1,Bs(-1)):X.stepArmed&&t.lateral>.7?(X.stepArmed=!1,Bs(1)):Math.abs(t.lateral)<.35&&(X.stepArmed=!0);return}X.phase==="waiting"&&X.overlay?.dataset.kind==="waiting"?t.status.good?(X.goodSince??=performance.now(),performance.now()-X.goodSince>1200&&ro()):X.goodSince=null:X.phase==="playing"&&(t.status===Je.noPerson&&!t.keyboardActive&&Gv()?(X.missingSince??=performance.now(),performance.now()-X.missingSince>3e3&&Kc("Paused \u2014 we lost sight of you")):X.missingSince=null);let e=X.phase==="playing"?t.handsUpProgress:0;zc.classList.toggle("hidden",e<.15),zc.querySelector(".arc").setAttribute("stroke-dashoffset",String(176*(1-e)))},100);function Yc(){En.setSize(window.innerWidth,window.innerHeight,!1),X.game?.resize(ed.aspect())}window.addEventListener("resize",Yc);Yc();var Ku=performance.now(),Fc=0,Oc=performance.now();En.setAnimationLoop(()=>{let i=performance.now(),t=Math.min((i-Ku)/1e3,1/20);Ku=i;let e=X.game;X.screen==="game"&&e&&(X.phase==="playing"&&!e.finished?(e.elapsed+=t,e.update(t,Yt.latest)):e.idle(t),En.render(e.scene,e.camera),Fc++,i-Oc>3e3&&(Fc/((i-Oc)/1e3)<50&&Ns<xr.length-1&&(Ns++,En.setPixelRatio(Math.min(window.devicePixelRatio,xr[Ns])),Yc()),Fc=0,Oc=i))});var Jn=null;function Gv(){return je||Jn?.state==="running"}async function ad(i){if(!je&&(Jn??=new Ha(Yt,Mr),Jn.onState=(t,e)=>{let n=xi.querySelector(".offline");n.textContent=t==="running"?"":t==="denied"?"Camera blocked":t==="error"?"Camera error":"Starting camera\u2026",n.classList.toggle("hidden",t==="running"),t==="denied"&&_r("Allow camera access in your browser settings to play with your body."),t==="error"&&e&&console.warn(e)},await Jn.start(i),Jn.state==="running")){let t=xi.querySelector(".frame");t.contains(Jn.video)||t.prepend(Jn.video);let e=Ye.querySelector("#cameraSelect"),n=await Jn.listDevices();e.innerHTML=n.map((r,a)=>`<option value="${r.deviceId}">${He(r.label||"Camera "+(a+1))}</option>`).join("");let s=Jn.stream?.getVideoTracks()[0]?.getSettings().deviceId;s&&(e.value=s),e.onchange=()=>{be("camera",e.value),ad(e.value)}}}function Wv(){let i=Ie(`<div id="start">
    <img src="${Mr}icons/icon-180.png" alt="">
    <h1>MoveCam</h1>
    <p>Your body is the controller. MoveCam uses your camera to see you move \u2014 video never leaves your device.</p>
    <button class="btn accent big" id="go">Start</button>
    <p style="font-size:13px;color:var(--tertiary)">Prop your device up, step back about 2 m (6 ft) and make sure the room is bright.</p>
  </div>`);i.querySelector("#go").addEventListener("click",()=>{kt.unlock(),kt.playMusic("menu"),i.remove(),ad(Ee("camera",void 0)),Ee("guideDone",!1)||Wc()}),Mi.append(i)}Lu(Yt);window.MoveCamNative.setAccount=({userId:i,plan:t,expiresAt:e})=>{if(i&&it.signedIn&&i!==it.id){In({type:"account",playerId:it.id});return}i&&(it.id=i),eo(t??"free",e??null)};window.MoveCamNative.setCameras=(i,t)=>{let e=Ye.querySelector("#cameraSelect");e.innerHTML=i.map(n=>`<option value="${He(n.id)}">${He(n.name)}</option>`).join(""),e.value=t,e.onchange=()=>In({type:"selectCamera",id:e.value})};window.MoveCamNative.setUpdate=i=>{let t=Ye.querySelector("#updateBtn");t.classList.toggle("hidden",!i),i&&(t.textContent=`\u2B07\uFE0E Update to ${i.version}`)};Ye.querySelector("#updateBtn").addEventListener("click",()=>In({type:"installUpdate"}));window.MoveCamNative.command=i=>{i==="back"&&Yt.emit("back"),i==="confirm"&&Yt.emit("confirm"),i==="settings"&&ju()};jn();if(ja.has("preview")){Yt.simulateHands=!0;let i=ja.get("preview"),t=Zn.findIndex(e=>e.id===i);t>=0&&(X.selected=t,qc(Zn[t]),ze(),X.phase="playing",X.gameStarted=!0,X.game.start(),Yt.keyboardStep(1),setTimeout(()=>Yt.keyboardJump(),1500),setTimeout(()=>X.game?.showcase?.(),Number(ja.get("showcase")??3500)),ja.has("clean")&&(xi.classList.add("hidden"),Os.show(!1),br.classList.add("hidden")))}else je?(kt.unlock(),kt.playMusic("menu"),In({type:"ready"}),Ee("guideDone",!1)||Wc(),it.signedIn&&In({type:"account",playerId:it.id}),Gu()):(Gu(),kc(!0),setInterval(()=>kc(!1),20*60*1e3),Wv());window.__movecam={state:X,hub:Yt,audio:kt,GAMES:Zn};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
